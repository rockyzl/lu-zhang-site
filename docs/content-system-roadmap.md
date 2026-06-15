# SciencesLoop Content System Roadmap

This document is the product roadmap for moving SciencesLoop from a static
Markdown blog toward a safer authoring and publishing workflow.

## North Star

SciencesLoop should make it easy to turn one useful AI-for-science signal into a
public, source-grounded article, with review, images, social drafts, and comments
handled as a repeatable workflow.

The site should not become a private notebook dump. Public content still needs:

- primary sources;
- a practical test or failure mode;
- image attribution;
- Chinese/English handling when useful;
- privacy checks;
- reviewable history.

## Current State

Content lives in:

```text
src/blog/
draft-notes/daily-signal/
```

Publishing path:

```text
source scan -> draft article + sidecar -> edit -> npm run build -> git commit
-> git push -> Vercel deploy
```

This is reliable, but it is not yet a product-like publishing function.

## Phase 1 - Safer Static Publishing

Goal: make the current pipeline easier to use without changing the architecture.

## Team Workflow

Every multi-agent slice should include a Doc Worker.

The Doc Worker owns durable coordination state, not implementation:

- keep the live task list current;
- record decisions that should survive the chat;
- check whether docs match implemented behavior;
- capture next-step backlog and acceptance criteria.

The lead/integrator still makes final product and technical decisions. The Doc
Worker helps prevent drift between chat, code, docs, and deployed behavior.

Tasks:

- keep Markdown as the canonical public artifact;
- use visual Signal Cards instead of dense public tables;
- keep LinkedIn drafts and review logs in `draft-notes/daily-signal/` sidecars;
- add comments shell with a logged-in provider and safe fallback;
- keep daily signal automation as draft-only;
- add build and privacy checks before deploy.

Exit criteria:

- articles can be published with one standard checklist;
- public pages do not expose internal drafts;
- comments are either safely disabled or backed by moderated login.

## Phase 2 - Git-Backed Article Intake

Goal: allow the website/admin workflow to create article drafts without manual
file editing, while preserving Git history. This still triggers a build and
deploy; it removes manual file operations, not the static build step.

Preferred direction:

```text
admin form -> protected API/action -> create Markdown draft -> open PR or commit
-> preview -> approve -> deploy
```

Possible implementations:

- GitHub contents API with a private token stored only in Vercel env vars;
- GitHub Actions workflow dispatch that creates drafts;
- a Git-backed CMS such as Decap or TinaCMS if the editing UI becomes important.

Why this is the next step:

- low migration cost from current Markdown;
- keeps version control;
- keeps article body, images, sidecars, and translations together;
- avoids building a database prematurely.

Risks:

- admin auth must be real, not an obscured URL;
- GitHub token scope must be minimal;
- generated drafts must stay unpublished until reviewed;
- build failures must block publication.

## Phase 3 - Dynamic Content Backend

Goal: publish or update some content without rebuilding the whole site.

Only consider this when Git-backed authoring becomes too slow.

Possible implementations:

- Supabase table for posts, sources, scorecards, and comments metadata;
- Vercel Postgres/Blob for article JSON and images;
- external CMS such as Sanity or Contentful.

Use dynamic content for:

- short Daily Signal entries;
- signal cards;
- comments metadata;
- ranking queues;
- source watchlists.

Keep long-form essays in Git unless there is a strong reason to move them.

Risks:

- database content can bypass writing rules;
- preview/versioning is harder than Git;
- private drafts and public content can mix if access control is weak;
- SEO/static rendering needs a separate plan.

## Phase 4 - Product Workflow

Goal: turn the blog into a small SciencesLoop product loop.

Workflow:

```text
collect signals -> shortlist -> draft -> visual/card -> publish -> comments
-> feedback -> follow-up topic -> article series
```

Product features:

- public signal archive;
- article source cards;
- comments and reader feedback;
- "what changed my mind" updates;
- RSS/email digest;
- admin dashboard for candidates, drafts, and publication status.

## Immediate Backlog

- [ ] Verify visual Signal Card on desktop and mobile.
- [ ] Decide whether to enable Giscus comments or keep feedback CTA for now.
- [ ] Create an admin-auth design for Git-backed draft creation.
- [ ] Design draft schema for source, signal card, sidecar social drafts, and
      image attribution.
- [ ] Add preview workflow before publishing.
- [ ] Add automated checks for banned internal sections such as LinkedIn drafts
      inside public Markdown.
