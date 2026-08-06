import fs from 'node:fs/promises';

const port = Number(process.env.CDP_PORT || 9222);
const baseUrl = process.env.QA_URL || 'http://127.0.0.1:3000/';
const outDir = process.env.QA_SCREENSHOT_DIR || '/tmp/sciencesloop-qa';

const targets = await fetch(`http://127.0.0.1:${port}/json`).then((res) => res.json());
const target = targets.find((item) => item.type === 'page' && item.url.startsWith(baseUrl));
if (!target) throw new Error(`No visible Chrome tab found for ${baseUrl}`);

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

let nextId = 0;
const pending = new Map();
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function command(method, params = {}) {
  const id = ++nextId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

async function evaluate(expression) {
  const result = await command('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'Browser evaluation failed');
  return result.result.value;
}

async function waitFor(predicateSource, timeoutMs = 15_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (await evaluate(`Boolean(${predicateSource})`)) return;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Timed out waiting for ${predicateSource}`);
}

async function submit(text) {
  await evaluate(`(() => {
    const input = document.querySelector('input[name="q"]');
    if (!input) throw new Error('Loopi input is missing');
    input.value = ${JSON.stringify(text)};
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.form?.requestSubmit();
  })()`);
}

async function reload() {
  await command('Page.reload', { ignoreCache: true });
  await waitFor(`document.readyState === 'complete'`);
  await waitFor(`document.querySelector('input[name="q"]')`);
}

await command('Page.enable');
await command('Runtime.enable');
await fs.mkdir(outDir, { recursive: true });

const tests = [];

await reload();
await submit('SMILES: CCO');
await waitFor(`document.body.innerText.includes('C2H6O') && document.body.innerText.includes('46.069')`);
tests.push({ name: 'SMILES descriptor query', status: 'passed' });

await reload();
await submit('SMILES: not-a-smiles');
await waitFor(`document.body.innerText.includes('could not be analyzed') || document.body.innerText.includes('could not resolve') || document.body.innerText.includes('analysis service')`);
tests.push({ name: 'Invalid SMILES hard failure', status: 'passed' });

await reload();
await submit('What is the current maturity of adaptive electrochemistry?');
await waitFor(`document.body.innerText.toLowerCase().includes('working prototype')`, 20_000);
tests.push({ name: 'Original public-site chatbot route', status: 'passed' });

const viewports = [
  { name: 'desktop', width: 1440, height: 1000, mobile: false },
  { name: 'tablet', width: 768, height: 1024, mobile: false },
  { name: 'mobile', width: 390, height: 844, mobile: true },
];

for (const viewport of viewports) {
  await command('Emulation.setDeviceMetricsOverride', {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.mobile,
  });
  await reload();
  await evaluate(`document.querySelector('[data-cw-close]')?.click()`);
  const dimensions = await evaluate(`({
    innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
    heroShell: (() => {
      const el = document.querySelector('.sl-hero__grid');
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return { left: rect.left, right: rect.right, width: rect.width, columns: getComputedStyle(el).gridTemplateColumns };
    })()
  })`);
  if (dimensions.scrollWidth > dimensions.innerWidth) {
    throw new Error(`${viewport.name} has horizontal overflow: ${JSON.stringify(dimensions)}`);
  }
  const screenshot = await command('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
  });
  const path = `${outDir}/${viewport.name}.png`;
  await fs.writeFile(path, Buffer.from(screenshot.data, 'base64'));
  tests.push({ name: `${viewport.name} responsive viewport`, status: 'passed', path, dimensions });
}

await command('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 1000,
  deviceScaleFactor: 1,
  mobile: false,
});
await reload();
await evaluate(`(() => {
  const panel = document.querySelector('#cw-panel');
  if (panel?.hidden) document.querySelector('[data-cw-launcher]')?.click();
  document.querySelector('[data-cw-reset]')?.click();
})()`);
await submit('Analyze molecule: caffeine');
await waitFor(`document.body.innerText.includes('C8H10N4O2') && document.body.innerText.includes('Open source response')`);
await evaluate(`(() => {
  const messages = document.querySelector('[data-cw-messages]');
  const card = document.querySelector('.cw-molecule-card');
  if (messages && card) messages.scrollTop = Math.max(0, card.offsetTop - 12);
})()`);
const loopiScreenshot = await command('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: false,
});
const loopiPath = `${outDir}/loopi-caffeine.png`;
await fs.writeFile(loopiPath, Buffer.from(loopiScreenshot.data, 'base64'));
tests.push({ name: 'Loopi evidence card', status: 'passed', path: loopiPath });

await command('Emulation.clearDeviceMetricsOverride');
socket.close();
console.log(JSON.stringify({ url: baseUrl, tests }, null, 2));
