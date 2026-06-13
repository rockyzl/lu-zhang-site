import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const sourcePath = path.resolve("src/data/ai_radar_sources.json");

function argValue(name, fallback = "") {
  const index = process.argv.indexOf(`--${name}`);
  if (index >= 0) return process.argv[index + 1] ?? fallback;
  return fallback;
}

function hasFlag(name) {
  return process.argv.includes(`--${name}`);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function yamlString(value) {
  return JSON.stringify(String(value ?? ""));
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

function keywordScore(text, keywords) {
  const haystack = String(text ?? "").toLowerCase();
  return keywords.reduce((score, keyword) => (
    haystack.includes(String(keyword).toLowerCase()) ? score + 1 : score
  ), 0);
}

function parseFeed(xml, source, keywords) {
  const itemBlocks = [...xml.matchAll(/<item[\s\S]*?<\/item>/gi)].map((m) => m[0]);
  const entryBlocks = itemBlocks.length ? [] : [...xml.matchAll(/<entry[\s\S]*?<\/entry>/gi)].map((m) => m[0]);
  const blocks = itemBlocks.length ? itemBlocks : entryBlocks;

  return blocks.slice(0, 10)
    .map((block) => {
      const title = extractTag(block, "title");
      const summary = extractTag(block, "description") || extractTag(block, "summary") || extractTag(block, "content");
      const url = extractTag(block, "link") || extractAtomLink(block);
      const date = extractTag(block, "pubDate") || extractTag(block, "updated") || extractTag(block, "published");
      const score = keywordScore(`${title} ${summary} ${(source.tags ?? []).join(" ")}`, keywords);
      return {
        type: "rss",
        source: source.name,
        group: source.group,
        title,
        url,
        date,
        summary,
        popularity: "",
        score: score + 2,
      };
    })
    .filter((item) => item.title && item.url && item.score > 2);
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "ScientificLoopSignal/0.1 (+https://sciencesloop.com)",
      Accept: "application/rss+xml, application/atom+xml, application/json, text/xml, text/html;q=0.9, */*;q=0.8",
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return await response.text();
}

async function collectRss(sources, keywords) {
  const rssSources = sources.filter((source) => source.type === "rss");
  const results = await Promise.all(rssSources.map(async (source) => {
    try {
      const xml = await fetchText(source.url);
      return parseFeed(xml, source, keywords);
    } catch (error) {
      return [{
        type: "fetch-error",
        source: source.name,
        group: source.group,
        title: `Fetch issue: ${source.name}`,
        url: source.url,
        summary: error.message,
        popularity: "",
        score: -1,
      }];
    }
  }));
  return results.flat().filter((item) => item.score > 0);
}

async function collectHackerNews(keywords) {
  const since = Math.floor((Date.now() - 7 * 24 * 60 * 60 * 1000) / 1000);
  const query = encodeURIComponent("AI science agent RAG research");
  const url = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story&numericFilters=created_at_i>${since}&hitsPerPage=20`;

  try {
    const data = JSON.parse(await fetchText(url));
    return (data.hits ?? []).map((hit) => {
      const title = decodeEntities(hit.title ?? hit.story_title ?? "");
      const link = hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`;
      const points = Number(hit.points ?? 0);
      const comments = Number(hit.num_comments ?? 0);
      const score = keywordScore(`${title} ${link}`, keywords) + Math.min(points / 20, 15) + Math.min(comments / 30, 8);
      return {
        type: "hacker-news",
        source: "Hacker News",
        group: "Tech community",
        title,
        url: link,
        date: hit.created_at ?? "",
        summary: `HN discussion: ${points} points, ${comments} comments.`,
        popularity: `${points} points, ${comments} comments`,
        score,
      };
    }).filter((item) => item.title && item.score > 1);
  } catch {
    return [];
  }
}

async function collectGitHub(keywords) {
  const queries = [
    "AI for Science agent language:Python",
    "scientific agent language:Python",
    "RAG science language:Python",
    "materials discovery AI language:Python",
  ];

  const all = [];
  for (const query of queries) {
    try {
      const { stdout } = await execFileAsync("gh", [
        "api",
        `/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=8`,
      ], { maxBuffer: 1024 * 1024 * 10 });
      const data = JSON.parse(stdout);
      for (const repo of data.items ?? []) {
        const title = repo.full_name;
        const summary = repo.description ?? "";
        const stars = Number(repo.stargazers_count ?? 0);
        const score = keywordScore(`${title} ${summary} ${repo.topics?.join(" ") ?? ""}`, keywords)
          + Math.min(stars / 1000, 25);
        all.push({
          type: "github",
          source: "GitHub repository search",
          group: "Open source",
          title,
          url: repo.html_url,
          date: repo.updated_at ?? "",
          summary,
          popularity: `${stars.toLocaleString("en-US")} stars`,
          score,
        });
      }
    } catch {
      // GitHub CLI may be unavailable or unauthenticated. RSS/HN still work.
    }
  }

  const seen = new Set();
  return all
    .filter((item) => {
      if (seen.has(item.url)) return false;
      seen.add(item.url);
      return item.score > 1;
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 20);
}

function rankCandidates(candidates) {
  return candidates
    .filter((item) => item.title && item.url)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
}

function formatCandidate(item, index) {
  const popularity = item.popularity ? `; ${item.popularity}` : "";
  return `${index + 1}. [${item.title}](${item.url}) - ${item.source}${popularity}`;
}

function buildPost({ date, selected, candidates }) {
  const title = `Daily ScientificLoop Signal: ${selected.title}`;
  const candidateList = candidates.map(formatCandidate).join("\n");

  return `---
title: ${yamlString(title)}
description: "One small AI-for-science signal, selected from popular and high-signal technical sources."
date: ${yamlString(date)}
lang: "en"
status: "draft"
featured: false
tags:
  - AI for Science
  - ScientificLoop
  - daily signal
  - technical writing
---

## Signal

Source: [${selected.title}](${selected.url})

The source describes itself as:

> ${selected.summary || "Add a concise factual summary after reviewing the source."}

Verify any usage claims, benchmark claims, or adoption numbers before turning
them into your own words.

## Why It Matters

Explain the reusable technical pattern in 3-5 sentences. Focus on one of:

- Scientific agents
- RAG and retrieval quality
- Evaluation and traceability
- MLOps or workflow automation
- Lab automation or autonomous discovery
- Battery/materials discovery

## ScientificLoop Angle

For ScientificLoop, the useful question is not whether this is impressive. The
question is whether it suggests a small, testable workflow improvement.

Possible angle:

- Add this source to the public corpus.
- Turn the idea into a small benchmark.
- Test whether a site agent can cite it correctly.
- Compare the workflow against human review.
- Document a failure mode before building more automation.

## Style Notes

Use the ScientificLoop style:

- Start with the practical signal, not a broad AI claim.
- Define any specialized term.
- Keep one idea per paragraph.
- Separate fact from interpretation.
- End with a useful question.

## LinkedIn Draft

I am testing a simple daily ScientificLoop habit: pick one AI-for-science signal
and ask what it means for practical scientific workflows.

Today I am looking at: ${selected.title}

My read: the useful question is not whether the demo or repo is exciting. The
question is what part of the workflow becomes more reliable, traceable, or
easier to evaluate.

Source: ${selected.url}

What would make this useful enough for a scientist to trust?

## Other Candidates Reviewed

${candidateList}

## Publish Checks

- [ ] Source link works.
- [ ] Facts are separated from interpretation.
- [ ] No private or employer-confidential details.
- [ ] The ScientificLoop connection is real.
- [ ] The post is one idea, not a link dump.
`;
}

const config = JSON.parse(await fs.readFile(sourcePath, "utf8"));
const date = argValue("date", new Date().toISOString().slice(0, 10));
const keywords = config.keywords ?? [];
const dryRun = hasFlag("dry-run");

const candidates = rankCandidates([
  ...await collectRss(config.sources, keywords),
  ...await collectHackerNews(keywords),
  ...await collectGitHub(keywords),
]);

if (!candidates.length) {
  console.error("No candidates found. Try the manual watchlist in src/data/ai_radar_sources.json.");
  process.exit(1);
}

const selected = candidates[0];
const slug = `${date}-${slugify(selected.title) || "scientificloop-signal"}`;
const outPath = path.resolve("src/content/blog", `${slug}.md`);
const post = buildPost({ date, selected, candidates });

if (dryRun) {
  console.log(`Selected: ${selected.title}`);
  console.log(`Source: ${selected.url}`);
  console.log(`Score: ${selected.score.toFixed(2)}`);
  console.log("");
  console.log("Top candidates:");
  console.log(candidates.map(formatCandidate).join("\n"));
  process.exit(0);
}

await fs.mkdir(path.dirname(outPath), { recursive: true });
await fs.writeFile(outPath, post, { flag: "wx" });
console.log(`Created ${outPath}`);
console.log(`Selected ${selected.source}: ${selected.title}`);
