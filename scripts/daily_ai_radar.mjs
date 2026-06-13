import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const sourcePath = path.resolve("src/data/ai_radar_sources.json");

function argValue(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  if (index >= 0) return process.argv[index + 1] ?? fallback;
  return fallback;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function decodeEntities(value) {
  return String(value ?? "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return decodeEntities(match?.[1] ?? "");
}

function extractAtomLink(block) {
  const match = block.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  return decodeEntities(match?.[1] ?? "");
}

function parseFeed(xml, source) {
  const itemBlocks = [...xml.matchAll(/<item[\s\S]*?<\/item>/gi)].map((m) => m[0]);
  const entryBlocks = itemBlocks.length ? [] : [...xml.matchAll(/<entry[\s\S]*?<\/entry>/gi)].map((m) => m[0]);
  const blocks = itemBlocks.length ? itemBlocks : entryBlocks;
  return blocks.slice(0, 12).map((block) => ({
    source: source.name,
    group: source.group,
    title: extractTag(block, "title"),
    url: extractTag(block, "link") || extractAtomLink(block),
    date: extractTag(block, "pubDate") || extractTag(block, "updated") || extractTag(block, "published"),
    summary: extractTag(block, "description") || extractTag(block, "summary") || extractTag(block, "content"),
    tags: source.tags ?? [],
  })).filter((item) => item.title && item.url);
}

function scoreItem(item, keywords) {
  const haystack = `${item.title} ${item.summary} ${(item.tags ?? []).join(" ")}`.toLowerCase();
  return keywords.reduce((score, keyword) => score + (haystack.includes(String(keyword).toLowerCase()) ? 1 : 0), 0);
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "ScientificLoopRadar/0.1 (+https://sciencesloop.com)",
      Accept: "application/rss+xml, application/atom+xml, text/xml, text/html;q=0.9, */*;q=0.8",
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return await response.text();
}

async function collectSource(source, keywords) {
  if (source.type !== "rss") {
    return {
      source,
      items: [],
      note: "Watchlist source. Review manually because no stable RSS feed is configured.",
    };
  }

  try {
    const xml = await fetchText(source.url);
    const items = parseFeed(xml, source)
      .map((item) => ({ ...item, score: scoreItem(item, keywords) }))
      .filter((item) => item.score > 0)
      .slice(0, 6);
    return { source, items };
  } catch (error) {
    return { source, items: [], error: error.message };
  }
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key] ?? "Other";
    groups[value] ??= [];
    groups[value].push(item);
    return groups;
  }, {});
}

function formatItem(item) {
  const date = item.date ? ` (${decodeEntities(item.date)})` : "";
  const summary = item.summary ? `\n  - Note: ${decodeEntities(item.summary).slice(0, 260)}` : "";
  return `- [${decodeEntities(item.title)}](${item.url}) — ${item.source}${date}${summary}`;
}

const config = JSON.parse(await fs.readFile(sourcePath, "utf8"));
const date = argValue("date", new Date().toISOString().slice(0, 10));
const title = argValue("title", `AI Research Radar — ${date}`);
const slug = argValue("slug", `${date}-ai-research-radar`);
const outPath = path.resolve("src/content/blog", `${slugify(slug)}.md`);
const results = await Promise.all(config.sources.map((source) => collectSource(source, config.keywords)));
const autoItems = results.flatMap((result) => result.items);
const grouped = groupBy(autoItems, "group");
const watchlist = results.filter((result) => result.source.type !== "rss" || result.error);

const sourceChecklist = config.sources
  .map((source) => `- [ ] ${source.group}: [${source.name}](${source.url})`)
  .join("\n");

const groupedSections = Object.entries(grouped)
  .map(([group, items]) => `### ${group}\n\n${items.map(formatItem).join("\n\n")}`)
  .join("\n\n");

const watchlistSection = watchlist
  .map((result) => {
    const suffix = result.error ? ` — fetch issue: ${result.error}` : "";
    return `- [${result.source.name}](${result.source.url}) (${result.source.group})${suffix}`;
  })
  .join("\n");

const body = `---
title: "${title}"
description: "Daily scan of AI agents, AI for Science, scientific workflow automation, frontier model labs, and China AI ecosystem signals."
date: "${date}"
lang: "en"
status: "draft"
featured: false
tags:
  - AI research radar
  - AI agents
  - AI for Science
  - scientific workflow
---

## Editorial Thesis

Today I am watching for signals that AI agents are moving from chat interfaces
toward research workflows: retrieval, tool use, experiment planning,
evaluation, simulation, and traceable scientific decision support.

## Auto-Collected Signals

These links were collected automatically. Verify each source before publishing.

${groupedSections || "- No keyword-matched RSS items were collected. Use the watchlist below for manual scanning."}

## Manual Watchlist

These sources should be reviewed manually today because they do not expose a
stable feed in this workflow or need human judgment.

${watchlistSection || "- No manual watchlist items."}

## ScientificLoop Note

Add Lu's angle here:

- What matters for scientific agents?
- What is relevant to battery materials, autonomous discovery, RAG, evaluation,
  or workflow automation?
- Does this suggest a small ScientificLoop demo, benchmark, or blog follow-up?

## Possible Follow-Up Posts

- 

## Source Checklist

${sourceChecklist}
`;

await fs.mkdir(path.dirname(outPath), { recursive: true });
await fs.writeFile(outPath, body, { flag: "wx" });

console.log(`Created ${outPath}`);
console.log(`Auto-collected ${autoItems.length} keyword-matched items from RSS sources.`);
