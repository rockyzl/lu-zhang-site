import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const sourceOnly = process.argv.includes('--source-only');
const read = (path) => readFileSync(resolve(root, path), 'utf8');
const requireMatch = (condition, message) => {
  if (!condition) throw new Error(message);
};
const count = (text, pattern) => [...text.matchAll(pattern)].length;

const component = read('src/components/ResearchLanding.astro');
const css = read('src/styles/landing.css');
const englishPage = read('src/pages/index.astro');
const chinesePage = read('src/pages/zh/index.astro');

for (const id of ['knowledge', 'analysis', 'workflow']) {
  requireMatch(component.includes(`id:'${id}'`), `missing service definition: ${id}`);
  requireMatch(component.includes(`data-service={s.id}`), 'service tabs must expose data-service');
}
requireMatch(englishPage.includes('locale="en"'), 'English route must select the English locale');
requireMatch(chinesePage.includes('locale="zh"'), 'Chinese route must select the Chinese locale');
requireMatch(component.includes('<noscript>'), 'missing no-script fallback');
requireMatch(component.includes('mailto:zhanglu77@gmail.com'), 'missing direct email path');
requireMatch(component.includes('aria-controls="mobile-nav"'), 'mobile button lacks aria-controls');
requireMatch(component.includes('id="mobile-nav"'), 'mobile navigation target is missing');
requireMatch(css.includes('@media(prefers-reduced-motion:reduce)'), 'missing reduced-motion rules');
requireMatch(css.includes('@media(max-width:760px)'), 'missing mobile breakpoint');

if (!sourceOnly) {
  for (const [locale, path] of [
    ['en', 'dist/index.html'],
    ['zh', 'dist/zh/index.html'],
  ]) {
    const html = read(path);
    requireMatch(count(html, /role="tab"/g) === 3, `${locale}: expected exactly three tabs`);
    requireMatch(
      count(html, /role="tabpanel"/g) === 3,
      `${locale}: expected exactly three tab panels`,
    );
    for (const id of ['knowledge', 'analysis', 'workflow']) {
      requireMatch(html.includes(`id="tab-${id}"`), `${locale}: missing tab-${id}`);
      requireMatch(
        html.includes(`aria-controls="panel-${id}"`),
        `${locale}: tab-${id} does not control its panel`,
      );
      requireMatch(html.includes(`id="panel-${id}"`), `${locale}: missing panel-${id}`);
      requireMatch(
        html.includes(`aria-labelledby="tab-${id}"`),
        `${locale}: panel-${id} is not labelled by its tab`,
      );
    }
    requireMatch(html.includes('<noscript>'), `${locale}: no-script fallback was not emitted`);
    requireMatch(html.includes('mailto:zhanglu77@gmail.com'), `${locale}: missing email path`);
    requireMatch(html.includes('aria-controls="mobile-nav"'), `${locale}: missing mobile control`);
    requireMatch(html.includes('id="mobile-nav"'), `${locale}: missing mobile navigation`);
    for (const language of ['en', 'zh-CN', 'x-default']) {
      requireMatch(html.includes(`hreflang="${language}"`), `${locale}: missing ${language} alternate`);
    }
    requireMatch(html.includes('rel="canonical"'), `${locale}: missing canonical URL`);
  }
}

console.log(
  sourceOnly
    ? 'SciencesLoop landing source acceptance passed.'
    : 'SciencesLoop landing source and build acceptance passed.',
);
