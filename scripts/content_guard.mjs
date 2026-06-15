import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const blogDir = path.resolve("src/blog");
const publicDir = path.resolve("public");

const fatalPatterns = [
  {
    name: "LinkedIn draft leaked into article body",
    pattern: /^##?\s*LinkedIn\s+(Draft|中文草稿)/gim,
  },
  {
    name: "Internal style notes leaked into article body",
    pattern: /^##?\s*(Style notes|Other candidates reviewed|Publish checks|Claims Checked \/ Not Repeated)/gim,
  },
  {
    name: "Legacy public brand spelling",
    pattern: /\b(ScientificLoop|ScienceLoop|Science Loop)\b/g,
  },
  {
    name: "Likely Overleaf token",
    pattern: /\bolp_[A-Za-z0-9_-]{16,}\b/g,
  },
  {
    name: "Likely LinkedIn OAuth token",
    pattern: /\bAQX[A-Za-z0-9_-]{40,}\b/g,
  },
  {
    name: "Credential-like assignment",
    pattern: /\b(password|client_secret|access_token|refresh_token|api_key)\s*[:=]\s*['"]?[A-Za-z0-9_./+=-]{12,}/gi,
  },
];

const warningPatterns = [
  {
    name: "AI-blog contrast phrase",
    pattern: /\b(not just|not only|not merely|not X but Y|the future of|game-changing|revolutionary|transformative|unlock|landscape|seamless)\b/gi,
    max: 4,
  },
  {
    name: "Chinese contrast phrase",
    pattern: /(不只是|而是|真正的问题|这才是|未来不是|改变一切|革命性|颠覆)/g,
    max: 6,
  },
];

function lineNumber(text, index) {
  return text.slice(0, index).split("\n").length;
}

async function listMarkdownFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }
  return files;
}

function localImageRefs(text) {
  const refs = new Set();

  for (const match of text.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
    refs.add(match[1]);
  }

  for (const match of text.matchAll(/!\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    refs.add(match[1]);
  }

  return [...refs].filter((src) => src.startsWith("/"));
}

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function checkFile(filePath) {
  const relPath = path.relative(process.cwd(), filePath);
  const text = await fs.readFile(filePath, "utf8");
  const failures = [];
  const warnings = [];

  for (const rule of fatalPatterns) {
    for (const match of text.matchAll(rule.pattern)) {
      failures.push({
        file: relPath,
        line: lineNumber(text, match.index ?? 0),
        message: rule.name,
        sample: match[0],
      });
    }
  }

  for (const rule of warningPatterns) {
    const matches = [...text.matchAll(rule.pattern)];
    if (matches.length > rule.max) {
      warnings.push({
        file: relPath,
        line: lineNumber(text, matches[rule.max].index ?? 0),
        message: `${rule.name}: ${matches.length} matches; review for generated-sounding repetition`,
        sample: matches.slice(0, 8).map((m) => m[0]).join(", "),
      });
    }
  }

  for (const src of localImageRefs(text)) {
    const cleanSrc = src.split("#")[0].split("?")[0];
    const target = path.join(publicDir, cleanSrc.replace(/^\/+/, ""));
    if (!await exists(target)) {
      failures.push({
        file: relPath,
        line: 1,
        message: "Missing local image referenced by public article",
        sample: src,
      });
    }
  }

  for (const block of text.matchAll(/<figure\b[^>]*class=["'][^"']*source-figure[^"']*["'][\s\S]*?<\/figure>/gi)) {
    const figure = block[0];
    if (!/Source figure|源图|CC BY|Creative Commons|licensed under|许可为/i.test(figure)) {
      failures.push({
        file: relPath,
        line: lineNumber(text, block.index ?? 0),
        message: "Source figure lacks visible attribution/licensing text",
        sample: figure.slice(0, 120).replace(/\s+/g, " "),
      });
    }
  }

  return { failures, warnings };
}

const files = await listMarkdownFiles(blogDir);
const allFailures = [];
const allWarnings = [];

for (const file of files) {
  const { failures, warnings } = await checkFile(file);
  allFailures.push(...failures);
  allWarnings.push(...warnings);
}

for (const warning of allWarnings) {
  console.warn(`WARN ${warning.file}:${warning.line} ${warning.message}`);
  console.warn(`  ${warning.sample}`);
}

if (allFailures.length) {
  for (const failure of allFailures) {
    console.error(`FAIL ${failure.file}:${failure.line} ${failure.message}`);
    console.error(`  ${failure.sample}`);
  }
  process.exit(1);
}

console.log(`Content guard passed: ${files.length} public blog file(s) checked.`);
