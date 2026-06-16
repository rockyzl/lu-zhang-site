# Blog Publishing Workflow

This site publishes SciencesLoop notes from Markdown files in:

```text
src/blog/
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
creates a draft under `src/blog/`. Review and edit the draft before
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

The public draft focuses on one selected signal and includes a compact
SciencesLoop Signal Card scaffold, workflow-stage hypothesis, likely failure
mode, and a practical-test prompt. Treat these as a starting point for review,
not as verified analysis. The sidecar log records the full ranked candidate set
after duplicate-source filtering, including source, score, popularity/date when
available, inferred workflow stage, pattern, failure mode, practical test, and
summary. Use that log as the idea queue for follow-up articles.

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

## Field Research Publishing Rules

- Field Notes are social drafts first. Use them to ask one public question about
  a workflow, trust boundary, evidence trail, or review checkpoint before
  turning the signal into a site article.
- Monthly Research Briefs can become blog posts when they synthesize multiple
  Field Notes, public sources, and a clear SciencesLoop workflow takeaway.
- Do not publish a single poll result directly as an article. Treat it as one
  input for a brief or follow-up note, with caveats.
- Preserve privacy and comment safety. Do not include private, employer-private,
  job-search-private, health, family, finance, address, token, or credential
  material. Comments, poll replies, and discussion examples should be anonymized
  or summarized unless there is explicit public context for attribution.

## Publish

Before publishing:

```bash
npm run content:guard
npm run build
```

Then commit the Markdown and site changes.

`npm run content:guard` checks public `src/blog/*.md` files before build. It
fails on internal sections such as LinkedIn drafts, old public brand spellings,
likely credentials/tokens, missing local image files, and source figures without
visible attribution. It may warn on repeated AI-blog phrases so the article can
be reviewed without blocking a truthful post.

## LinkedIn Sharing

LinkedIn usually builds the preview card from the first previewable URL in the
main post body and may cache that preview. If the goal is to drive readers to a
SciencesLoop article:

1. Put only the SciencesLoop article URL in the main post.
2. Do not include arXiv, GitHub, paper, or repo URLs in the same main post if
   those links should not own the preview card.
3. Put source links in the article body, a first comment, or a follow-up reply.
4. If LinkedIn already generated the wrong preview card, the reliable fix is to
   repost with only the intended article URL. Editing the text may not refresh
   the cached card.

This keeps the public post focused while preserving source transparency inside
the article.

## Comments

Article pages include a comments shell.

Default behavior:

- If comment-provider environment variables are missing, the site shows a
  lightweight feedback box with email and LinkedIn links.
- This is intentional. Do not open anonymous comments by default.
- Giscus must be lazy-loaded by user action, not loaded automatically on every
  page view.
- Giscus matching should use strict pathname matching to reduce wrong-thread
  matches.

To enable logged-in comments later, use a moderated GitHub Discussions provider
such as Giscus and configure these Vercel environment variables:

```text
PUBLIC_GISCUS_REPO
PUBLIC_GISCUS_REPO_ID
PUBLIC_GISCUS_CATEGORY
PUBLIC_GISCUS_CATEGORY_ID
```

Requirements before enabling:

- comments repo must be public;
- Discussions must be enabled;
- the category should be moderated and intentionally selected for blog
  comments;
- all required public env vars must be present, otherwise the fallback CTA stays
  visible;
- do not use a private job-hunting or personal-records repo for public comments;
- test English and Chinese article pages after deployment.

## Publishing Without Manual File Edits

Current state:

- articles live as Markdown under `src/blog/`;
- publishing changes still go through build, commit, push, and Vercel deploy;
- this is reliable and version-controlled, but it is not a product-like authoring
  workflow.

Target:

- keep public content source-grounded and reviewable;
- allow drafting, review, and publishing from a site/admin workflow;
- avoid exposing private drafts, credentials, job-search material, or personal
  records;
- keep Git history or an equivalent audit trail.

Recommended phased direction:

1. Keep Markdown as the canonical public artifact.
2. Add a protected draft intake route or admin workflow that creates Markdown
   drafts through GitHub/Vercel automation.
3. Add preview and review status before publication.
4. Later evaluate a dynamic content database or CMS only if Markdown automation
   becomes too slow and the product needs updates without a site rebuild.

Do not replace the current Markdown pipeline until the new path can preserve:

- source links;
- image attribution;
- social draft sidecars;
- Chinese/English pairing;
- privacy checks;
- build/deploy rollback.
