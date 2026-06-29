# SciencesLoop Live Task List

This is the working task board for SciencesLoop product iterations. Keep it
short, current, and factual. Long-term strategy belongs in
`docs/content-system-roadmap.md`; writing rules belong in
`docs/article-style-guide.md`.

## North Star

Build SciencesLoop into a public AI-for-Science workflow product: source-grounded
signals, reviewable scientific-agent articles, public-safe site agent behavior,
and a repeatable publishing loop from signal discovery to article, social post,
reader feedback, and follow-up work.

## Operating Rules

- Do not invent claims about Lu Zhang, projects, papers, jobs, or systems.
- Keep LinkedIn drafts and internal review notes out of public article bodies.
- Prefer primary sources, official repos, papers, docs, and source figures.
- Every implementation slice needs a doc check.
- Every pushed change needs verification before and after deployment when it
  affects the live site or API.
- End each slice with: status, verification, commit hash, deployment status, and
  the next best task.

## Current Done

- [x] Site moved to Vercel and private GitHub repo.
- [x] SciencesLoop brand applied to public site and API.
- [x] Public site agent on homepage and `/agent/`.
- [x] Daily Signal source scanner and draft generator.
- [x] LinkedIn draft sidecars for article sharing.
- [x] Article comments shell with safe fallback and optional Giscus lazy-load.
- [x] API eval harness covering citations, routing metadata, brand leaks,
      unsafe URLs, attribution, and private-access guardrails.
- [x] Loop engineering research note captured from video metadata and public
      loop-engineering references.
- [x] Molecular Universe map deep dive captured as a product reference for a
      future SciencesLoop research/signal map.
- [x] Information architecture reworked around Build, Research Record, and
      About groups, with Programs as the main AI entry and legacy routes
      redirected.

## Active Priorities

1. **Visual Signal Card**
   - Status: first version implemented.
   - Goal: replace dense scorecard text with a compact visual card that explains
     workflow stage, evidence quality, reproducibility, transferability,
     validation cost, and hype risk.
   - Acceptance: works on desktop and mobile; does not look like fake numeric
     scoring; appears in English and Chinese article pages. First version is
     applied to the PaperQA2 article and the daily signal generator.

2. **Article Quality Pass**
   - Status: planned.
   - Goal: make PaperQA2 article read like a scientist-engineer field note, not
     generic AI commentary.
   - Acceptance: fewer contrast-pattern sentences, stronger opening scenario,
     source figures clearly attributed, LinkedIn draft absent from public body.

3. **Comments Decision**
   - Status: fallback enabled.
   - Goal: decide whether to keep email/LinkedIn feedback only or enable Giscus.
   - Acceptance: if Giscus is enabled, comments repo is public, Discussions are
     moderated, env vars are configured, and the widget remains lazy-loaded.

4. **Git-Backed Draft Intake**
   - Status: design next.
   - Goal: create article drafts without manually editing files while preserving
     Git history and review.
   - Acceptance: protected admin or workflow-dispatch path creates unpublished
     Markdown draft plus sidecar; build/content checks still gate publication.

5. **Daily Signal Archive**
   - Status: planned.
   - Goal: store all collected signals, not only the top selected item.
   - Acceptance: daily signal run writes a timestamped review artifact with
     candidates, scores, source URLs, and skip reasons.

6. **Distribution Loop**
   - Status: active manually.
   - Goal: each published article gets a reviewed LinkedIn main post and first
     comment.
   - Acceptance: main post uses only the SciencesLoop article URL when the
     preview card should point to the site; source links go in first comment.

7. **Research Signal Map**
   - Status: design next.
   - Goal: turn SciencesLoop signals into a navigable research/workflow map
     inspired by Molecular Universe's map, detail-panel, and related-item
     pattern without implying unsupported scientific relationships.
   - Acceptance: Phase 0 schema defines signal, source, claim, workflow stage,
     risk, practical test, related signals, article URL, and run status; seed
     data includes only source-backed relationships.

## Standard Slice Checklist

Before coding:

- [ ] Inspect current repo status.
- [ ] Read the relevant docs or component files.
- [ ] State the planned files to edit.

Before commit:

- [ ] Run the smallest meaningful local checks.
- [ ] Run `npm run build` for site changes or `npm run eval` for API behavior
      changes when applicable.
- [ ] Check `git diff` for sensitive data and unrelated churn.

Before final status:

- [ ] Commit and push.
- [ ] Deploy if the live product changed.
- [ ] Smoke-test the live URL when deployment happened.
- [ ] Record commit hash and remaining next task.
