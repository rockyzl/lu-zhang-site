# Blog Publishing Workflow

This site publishes SciencesLoop notes from Markdown files in:

```text
src/content/blog/
```

Use this workflow for AI agent, scientific workflow, RAG, evaluation, and AI for
Science posts.

## Create A Draft

For the daily "one useful signal" workflow:

```bash
npm run daily:signal -- --dry-run
npm run daily:signal
```

This searches popular or high-signal public sources, picks one candidate, and
creates a draft under `src/content/blog/`. Review and edit the draft before
publishing.

## Daily Automation

GitHub Actions runs `Daily AI Signal Draft` once per day:

```text
13:30 UTC daily, roughly 08:30 America/Chicago during daylight saving time
```

The scheduled job only creates a draft Markdown file and a sidecar review note.
Generated posts stay `status: "draft"` and `featured: false`; do not treat the
automation as publication. If a draft already exists for the date, the script
skips generation to avoid duplicate daily posts.

Manual trigger:

1. Open GitHub Actions.
2. Select `Daily AI Signal Draft`.
3. Run workflow.

What the collectors mean:

- **RSS collector:** reads machine-readable feeds from sources such as OpenAI,
  Microsoft Research, NVIDIA, Hugging Face, and arXiv. RSS is like a public
  subscription feed for new posts or papers.
- **Hacker News collector:** searches Hacker News through Algolia for recent
  community discussions, then uses points/comments as one popularity signal.
- **GitHub collector:** searches GitHub repositories through `gh api`, then
  ranks repo candidates by relevance and stars.
- **Manual watchlist:** page sources from `src/data/ai_radar_sources.json`,
  LinkedIn, X, Reddit, YouTube, Product Hunt, and Daily Signals source maps.
  These are idea sources only; reopen the primary source before publishing.

For a manual post:

```bash
npm run new:post -- --title "My AI agent note"
```

Optional:

```bash
npm run new:post -- \
  --title "Scientific Workflow Trace Design" \
  --description "A practical note on traceable scientific agent workflows." \
  --tags "AI agents, scientific workflow, evaluation"
```

## Edit

Update the generated Markdown:

- Follow `docs/scientificloop-writing-style.md`.
- Keep claims tied to public evidence or clearly mark them as working notes.
- Preserve status language such as `draft`, `working note`, `prototype`, or
  `in progress`.
- Prefer concrete workflow patterns over abstract AI commentary.
- Avoid employer-private, job-search-private, health, family, finance, address,
  token, or credential material.

Use this structure unless there is a clear reason not to:

1. Signal.
2. Why it matters.
3. SciencesLoop angle.
4. Useful question.

For a richer technical article, use this shape instead:

1. Problem hook.
2. Nut graf.
3. Source facts.
4. Concrete scenario.
5. Workflow trace or diagram.
6. Technical mechanism.
7. Use cases and non-use cases.
8. Failure modes.
9. Practical checklist or next test.

Chinese versions should be rewrites, not literal translations. Preserve source
links and do not add claims that are not in the English/source material.

## Publish

Before publishing:

```bash
npm run build
```

Then commit the Markdown and site changes.
