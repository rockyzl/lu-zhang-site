# Blog Publishing Workflow

This site publishes ScientificLoop notes from Markdown files in:

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
3. ScientificLoop angle.
4. Useful question.

## Publish

Before publishing:

```bash
npm run build
```

Then commit the Markdown and site changes.
