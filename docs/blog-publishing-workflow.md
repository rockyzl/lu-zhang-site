# Blog Publishing Workflow

This site publishes ScientificLoop notes from Markdown files in:

```text
src/content/blog/
```

Use this workflow for AI agent, scientific workflow, RAG, evaluation, and AI for
Science posts.

## Create A Draft

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

- Keep claims tied to public evidence or clearly mark them as working notes.
- Preserve status language such as `draft`, `working note`, `prototype`, or
  `in progress`.
- Prefer concrete workflow patterns over abstract AI commentary.
- Avoid employer-private, job-search-private, health, family, finance, address,
  token, or credential material.

## Publish

Before publishing:

```bash
npm run build
```

Then commit the Markdown and site changes.
