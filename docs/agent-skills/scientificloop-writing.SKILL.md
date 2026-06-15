---
name: scientificloop-writing
description: Use when writing, editing, researching, publishing, or adapting SciencesLoop posts, Daily Signals, LinkedIn drafts, Chinese versions, AI-for-science notes, scientific-agent articles, technical deep dives, or evidence-linked public writing for Lu Zhang.
---

# SciencesLoop Writing

This skill is the execution protocol for turning AI/science signals into
public, source-grounded writing. Strategy and style live in the site repo:

- `docs/blog-series-guide.md` - why/what to write and how series evolve.
- `docs/article-style-guide.md` - voice, structure, anti-AI style, images.
- `docs/daily-signal-template.md` - high-frequency Daily Signal template.
- `docs/blog-publishing-workflow.md` - build, publish, and automation details.

Read the relevant repo doc before editing if the task is strategic, stylistic,
or publishing-related.

## Core Operating Rule

Large source pool, small public output.

Use many sources to find signals, but publish one clear idea at a time. Do not
publish link dumps, placeholder notes, sidecar logs, or social drafts as article
body.

Public brand spelling is **SciencesLoop**. Avoid `ScientificLoop`,
`ScienceLoop`, and misspellings in public copy. Legacy technical filenames or
internal repo names may remain unchanged when renaming them would create
avoidable churn.

## Workflow-Stage Lens

Do not organize thinking only by technology labels such as RAG, agent, or
MLOps. Classify each signal by which part of scientific work it changes:

```text
scientific question
-> evidence
-> tool/model
-> hypothesis
-> experiment/simulation
-> conclusion
-> reproducibility
-> publication/decision
```

Each post must answer:

```text
What workflow stage changes?
Why does it matter?
Where can it fail?
How would I test it?
```

## Research Protocol

Use source maps such as `daily-signals` as idea pools, not as publishable
evidence by themselves.

For each candidate, fill this mentally or in a sidecar log:

```text
Signal:
Primary source:
Workflow stage:
Pattern:
Why it matters:
Failure mode:
Practical test:
Scientific Impact: Low / Medium / High
Evidence Quality: Low / Medium / High
Reproducibility: Low / Medium / High
Workflow Utility: Low / Medium / High
Transferability: Low / Medium / High
Validation Cost: Low / Medium / High
Run Status:
Why I paid attention:
Publish decision: skip / save for later / daily signal / technical note / deep dive
```

Primary sources:

- papers, official repositories, documentation, technical blogs;
- official product announcements, benchmark pages, demo videos with stable URLs;
- source figures, datasets, reproducible examples, or code.

Discovery sources:

- Hacker News, GitHub Trending/search, Reddit, LinkedIn, X, YouTube,
  newsletters, Product Hunt, YC, and user-provided links.

Discovery sources can suggest a topic. Public factual claims should be checked
against a primary source before publishing.

## SciencesLoop Signal Card

Use the Signal Card as an assessment framework, not as pseudo-objective scoring.
It tells readers how to inspect a signal. It can include contextual fields
before the dimensions:

- **Signal:** What source or artifact triggered the note.
- **Workflow Stage:** Which part of scientific work changes.
- **Reusable Pattern:** What pattern could be reused elsewhere.
- **Practical Test:** How to check the pattern.
- **Run Status:** What has and has not been tested locally.
- **Publish Type:** Daily Signal, Technical Note, Deep Dive, or Case Study.
- **Claim / Hype Risk:** Optional. Where source framing, benchmark language, or
  marketing claims may overstate reliability.

Dimensions:

- **Scientific Impact:** Does it affect how scientific discovery is done?
- **Evidence Quality:** Are the data, citations, benchmark, figure, or examples
  solid enough to discuss?
- **Reproducibility:** Can another person reproduce or inspect the method?
- **Workflow Utility:** Does it save time or improve a real research workflow?
- **Transferability:** Can the pattern move across disciplines?
- **Validation Cost:** How expensive is it to verify in practice?

Use qualitative labels such as `Low`, `Medium`, `High`, or `Unknown`, plus one
sentence explaining why. Do not publish unexplained numeric scores.

For public articles, prefer a compact visual card instead of a long Markdown
table. The visible card should show:

- the signal;
- the workflow stage;
- run status;
- practical test;
- 3-5 qualitative dimensions;
- one short claim/hype-risk note.

Move dense assessments, rejected candidates, and detailed scoring into sidecar
logs. Readers should get the frame quickly, then learn the reasoning from the
article body, visuals, examples, and failure modes.

If the card feels like a dashboard, it is too large. On mobile, aim for a
compact orientation panel rather than a full review table.

## Anti-Hype Gate

Do not write unless at least one is true:

- There is a repo, paper, benchmark, figure, dataset, or reproducible example.
- You can describe a concrete scientific workflow change.
- You can propose a practical test.
- You can identify a real failure mode.

If none are true, save the signal for later.

## Article Mode Selection

- **LinkedIn draft:** 120-220 words, one idea, one question.
- **Daily Signal:** 500-900 words, one source or tightly scoped pattern.
- **Technical Note:** 900-1,600 words, one source with mechanism and scenario.
- **Deep Dive:** 1,600-2,500 words, only when depth adds evidence or examples.
- **Case Study:** 1,200-2,200 words, a workflow reconstruction or failure review.

Default to the smallest mode that can still include source, pattern, failure
mode, and practical test.

## Writing Protocol

Website articles should usually contain:

1. Hook: one real workflow problem.
2. Source: what the source actually says.
3. Workflow stage: what part of scientific work changes.
4. Scenario: one scientist/engineer situation.
5. Mechanism: the relevant RAG/agent/eval/MLOps/tooling details.
6. Visual: source figure, workflow diagram, trace, table, or matrix.
7. My read: practical interpretation, not hype.
8. Failure modes: what can break or mislead.
9. Practical test: how to check whether the pattern is real.
10. Conclusion: one clear judgment.

Separate source claims from interpretation. Label prototypes, conceptual
diagrams, and working notes clearly.

## Human Voice Check

Write like a scientist keeping a research notebook in public, not like a
technology commentator trying to predict the future.

Before publishing, remove or rewrite:

- `the future of`;
- `game-changing`, `revolutionary`, `transformative`;
- `unlock`, `seamless`, `landscape`;
- generic `leverage` as a verb;
- repeated `not X but Y` or `not just X but Y` contrasts;
- generic endings such as `at the end of the day`.

Use at most one `not X but Y` contrast per article. If a sentence starts by
denying a generic frame, rewrite it as a concrete observation, scenario, or
test.

Add, where truthful:

- one observation;
- one concern;
- one uncertainty;
- one practical test;
- one personal judgment.

Every article needs a scar: a real lesson from a lab, data, deployment,
evaluation, workflow, or literature-review failure. Never invent scars. If there
is no personal case, use a source-backed or clearly hypothetical failure mode.

## Sidecar Outputs

Use sidecars for material that should not appear in public article body:

- ranked candidates and rejected signals;
- claim checks and privacy checks;
- LinkedIn drafts;
- internal style notes;
- publishing checks.

Recommended paths:

```text
draft-notes/daily-signal/YYYY-MM-DD-topic.md
```

Never put `LinkedIn draft`, `Style notes`, `Other candidates reviewed`, or
`Publish checks` sections inside public `src/blog/*.md` article bodies.

## Chinese Adaptation

Chinese versions are adapted rewrites, not literal translations.

- Preserve source links and the source-vs-interpretation boundary.
- Keep technical English terms when they improve precision.
- Do not add facts, claims, metrics, or personal involvement absent from the
  English/source material.
- Use a thoughtful scientist-engineer voice, not marketing copy.

## Visual Rules

Use images only when they reduce cognitive load:

- source figures with attribution;
- workflow diagrams;
- evaluation matrices;
- before/after workflows;
- architecture sketches;
- annotated screenshots.

For each visual, make clear whether it is a source figure or conceptual diagram,
what it supports, and what it does not prove.

## Claim Safety

Before publishing:

- source links work;
- primary claims are checked against primary sources;
- no fake personal/project/work claims;
- no employer-private, job-search-private, credential, token, address, health,
  family, or financial details;
- images have attribution or are original/conceptual;
- social drafts are in sidecar files, not article body;
- `npm run build` passes for site changes.

## Repo Workflow

In `sites/lu-zhang-site`:

```bash
npm run daily:signal
npm run build
```

Review generated Markdown before publishing. Commit and push only after the
article, sidecars, images, and build are consistent.
