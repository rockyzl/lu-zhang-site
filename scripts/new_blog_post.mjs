import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

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
    .slice(0, 80);
}

const title = argValue("title");
if (!title) {
  console.error('Usage: npm run new:post -- --title "My AI agent note"');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const slug = argValue("slug", slugify(title));
const description = argValue(
  "description",
  "Working note on AI agents, scientific workflow automation, RAG, evaluation, and AI for Science systems.",
);
const tags = argValue("tags", "AI agents, scientific workflow, RAG")
  .split(",")
  .map((tag) => tag.trim())
  .filter(Boolean);
const filePath = path.resolve("src/content/blog", `${slug}.md`);

const frontmatterTags = tags.map((tag) => `  - ${tag}`).join("\n");
const body = `---
title: "${title.replaceAll('"', '\\"')}"
description: "${description.replaceAll('"', '\\"')}"
date: "${today}"
lang: "en"
status: "draft"
featured: false
tags:
${frontmatterTags}
---

## Working Question

Write the practical question this post answers.

## System Pattern

Describe the agent, RAG, evaluation, or scientific workflow pattern.

## Evidence And Failure Modes

List what should be cited, measured, or checked before trusting the workflow.

## Next Step

Describe the next useful implementation or experiment.
`;

try {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, body, { flag: "wx" });
  console.log(`Created ${filePath}`);
} catch (error) {
  if (error.code === "EEXIST") {
    console.error(`Post already exists: ${filePath}`);
    process.exit(1);
  }
  throw error;
}
