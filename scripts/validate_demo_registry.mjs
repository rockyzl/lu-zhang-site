import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  DEMO_REGISTRY_SCHEMA_VERSION,
  demos,
  publicDemoRegistrySnapshot,
} from "../src/data/demos.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const snapshotPath = path.join(root, "dist", "data", "demos.json");

function routeOutput(route) {
  const pathname = new URL(route, "https://sciencesloop.com").pathname;
  if (pathname.endsWith(".html")) return path.join(root, "dist", pathname);
  return path.join(root, "dist", pathname, "index.html");
}

function chineseRoute(route) {
  return `/zh${route}`;
}

function chineseArticleRoute(route) {
  const slug = route.slice("/blog/".length, -1);
  return `/zh/blog/${slug}-zh/`;
}

await access(snapshotPath);
const builtBytes = await readFile(snapshotPath, "utf8");
const expectedBytes = `${JSON.stringify(publicDemoRegistrySnapshot, null, 2)}\n`;
const builtSnapshot = JSON.parse(builtBytes);
const expectedSnapshot = JSON.parse(expectedBytes);

assert.equal(builtSnapshot.schemaVersion, DEMO_REGISTRY_SCHEMA_VERSION);
assert.equal(
  builtBytes,
  expectedBytes,
  "dist/data/demos.json is not byte-identical to the TypeScript public projection",
);
assert.deepEqual(
  builtSnapshot,
  expectedSnapshot,
  "dist/data/demos.json drifted from the TypeScript demo registry",
);

const ids = demos.map((demo) => demo.id);
assert.equal(new Set(ids).size, ids.length, "Demo registry IDs must be unique");
assert.equal(builtSnapshot.demos.length, demos.length);
assert.deepEqual(Object.keys(builtSnapshot).sort(), ["demos", "schemaVersion"]);

const allowedDemoKeys = [
  "articlePath",
  "featured",
  "id",
  "path",
  "repoUrl",
  "sources",
  "summary",
  "tagline",
  "tags",
  "title",
];
const localizedKeys = ["summary", "tagline", "title"];
const allowedSourceKeys = ["kind", "label", "url"];
const allowedSourceKinds = new Set(["dataset", "documentation", "license", "paper"]);

for (const [index, demo] of demos.entries()) {
  const published = builtSnapshot.demos[index];
  assert.match(published.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.match(published.path, /^\/[a-z0-9/-]*\/$/);
  assert.deepEqual(
    Object.keys(published).sort(),
    allowedDemoKeys.filter((key) => published[key] !== undefined).sort(),
  );
  assert.equal(published.id, demo.id);
  assert.equal(published.path, demo.path);
  assert.equal(published.articlePath, demo.articlePath);
  assert.equal(published.repoUrl, demo.repoUrl);
  assert.equal(typeof published.featured, "boolean");
  assert.ok(Array.isArray(published.tags) && published.tags.length > 0);
  for (const tag of published.tags) {
    assert.equal(typeof tag, "string");
    assert.ok(tag.length > 0);
    assert.equal(tag, tag.trim(), `Tag must be trimmed: ${JSON.stringify(tag)}`);
  }
  assert.equal(new Set(published.tags).size, published.tags.length, `${demo.id} tags must be unique`);
  for (const key of localizedKeys) {
    assert.deepEqual(Object.keys(published[key]).sort(), ["en", "zh"]);
    assert.ok(published[key].en.trim());
    assert.ok(published[key].zh.trim());
  }
  if (published.articlePath) assert.match(published.articlePath, /^\/[a-z0-9/-]*\/$/);
  if (published.repoUrl) assert.equal(new URL(published.repoUrl).protocol, "https:");
  if (published.sources !== undefined) {
    assert.ok(
      Array.isArray(published.sources) && published.sources.length > 0,
      `${demo.id} sources must be a non-empty array when present`,
    );
    const sourceKinds = [];
    const sourceUrls = [];
    for (const source of published.sources) {
      assert.deepEqual(Object.keys(source).sort(), allowedSourceKeys);
      assert.ok(allowedSourceKinds.has(source.kind), `${demo.id} has invalid source kind`);
      assert.deepEqual(Object.keys(source.label).sort(), ["en", "zh"]);
      assert.ok(source.label.en.trim(), `${demo.id} source English label is required`);
      assert.ok(source.label.zh.trim(), `${demo.id} source Chinese label is required`);
      const sourceUrl = new URL(source.url);
      assert.equal(sourceUrl.protocol, "https:", `${demo.id} source URLs must use HTTPS`);
      assert.equal(sourceUrl.username, "", `${demo.id} source URLs cannot contain credentials`);
      assert.equal(sourceUrl.password, "", `${demo.id} source URLs cannot contain credentials`);
      sourceKinds.push(source.kind);
      sourceUrls.push(source.url);
    }
    assert.equal(
      new Set(sourceKinds).size,
      sourceKinds.length,
      `${demo.id} source kinds must be unique`,
    );
    assert.equal(
      new Set(sourceUrls).size,
      sourceUrls.length,
      `${demo.id} source URLs must be unique`,
    );
  }
  await access(routeOutput(demo.path));
  await access(routeOutput(chineseRoute(demo.path)));
  if (demo.articlePath) {
    await access(routeOutput(demo.articlePath));
    await access(routeOutput(chineseArticleRoute(demo.articlePath)));
  }
}

console.log(
  `Demo registry validation passed: ${demos.length} entries match the TypeScript source and built routes.`,
);
