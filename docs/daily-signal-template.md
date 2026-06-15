# Daily Signal Template

Use this template for high-frequency SciencesLoop posts.

## Candidate Review

```text
Signal:
Primary source:
Discovery source:
Workflow stage:
Pattern:
Why it matters:
Failure mode:
Practical test:

Scientific Impact: Low / Medium / High / Unknown
Evidence Quality: Low / Medium / High / Unknown
Reproducibility: Low / Medium / High / Unknown
Workflow Utility: Low / Medium / High / Unknown
Transferability: Low / Medium / High / Unknown
Validation Cost: Low / Medium / High / Unknown
Run Status:
Why I paid attention:

Publish decision: skip / save for later / daily signal / technical note / deep dive
```

## Anti-Hype Gate

Do not write unless at least one is true:

- I can point to a repo, benchmark, figure, dataset, or reproducible example.
- I can describe a concrete workflow change.
- I can propose a practical test.
- I can identify a real failure mode.

## SciencesLoop Signal Card

Use this as a reader-facing assessment framework, not as entertainment scoring.
Use qualitative labels and a short explanation.

```text
Signal:
Workflow Stage:
Reusable Pattern:
Practical Test:
Run Status:
Publish Type:
Claim / Hype Risk:

Scientific Impact:
Evidence Quality:
Reproducibility:
Workflow Utility:
Transferability:
Validation Cost:

Why I paid attention:
```

Definitions:

- Signal: The source or artifact that triggered the note.
- Workflow Stage: The scientific-workflow stage affected by the signal.
- Reusable Pattern: The reusable workflow or system-design pattern.
- Practical Test: The first small test or inspection step to run.
- Run Status: What has and has not been tested locally.
- Publish Type: Daily Signal, Technical Note, Deep Dive, or Case Study.
- Claim / Hype Risk: Where source framing, benchmark language, or marketing
  claims may overstate reliability.
- Scientific Impact: Does it affect how scientific discovery is done?
- Evidence Quality: Are data, citations, benchmarks, figures, or examples solid?
- Reproducibility: Can another person inspect, rerun, or reproduce the method?
- Workflow Utility: Does it save time or improve a real research workflow?
- Transferability: Can the pattern move across disciplines?
- Validation Cost: How expensive is it to verify in practice?

## Human Voice Gate

Before publishing, include:

- one observation;
- one concern;
- one uncertainty;
- one practical test;
- one personal judgment or source-backed failure mode.

Remove formulaic AI-blog language such as `the future of`, `game-changing`,
`revolutionary`, `unlock`, `landscape`, `seamless`, and repeated `not X but Y`
contrasts.

Use at most one `not X but Y` contrast per article. If a sentence starts by
denying a generic framing, rewrite it as a concrete observation, scenario, or
test.

## Mode Boundary

Daily Signal is the radar format: one signal, one pattern, one test, usually
500-900 words.

If the post has source summary, mechanism, scenario, multiple figures, failure
modes, product implications, and a benchmark proposal, publish it as a Technical
Note instead.

## Public Post Outline

```markdown
---
title: ""
description: ""
date: YYYY-MM-DD
lang: en
status: draft
tags:
  - AI for Science
  - daily signal
---

<Hook: one concrete problem or workflow tension.>

## The Signal

<What the source is and what it claims. Separate source facts from my read.>

## The Pattern

<What reusable pattern this represents.>

## SciencesLoop Signal Card

<Qualitative assessment using the six dimensions.>

## Workflow Stage

<Which stage changes: question, evidence, tool/model, hypothesis,
experiment/simulation, conclusion, reproducibility, publication/decision.>

## Why It Matters

<Why this is useful for scientists or AI engineers.>

## Failure Mode

<Where this can fail or mislead.>

## Practical Test

<A small benchmark, inspection step, or trial I would run first.>

Source: <stable primary source link>
```

## Sidecar Log

Save under `docs/daily-signal-logs/YYYY-MM-DD-topic.md`:

```markdown
# Daily Signal Review: <topic>

## Candidates Reviewed

| Rank | Signal | Source | Workflow Stage | Scores | Decision |
| --- | --- | --- | --- | --- | --- |

## Winner

<Why this signal won.>

## Claims Checked

- ...

## Claims Not Repeated

- ...

## Privacy / Fact Risks

- ...
```

## LinkedIn Draft

Save under `docs/social-drafts/YYYY-MM-DD-topic-linkedin-zh.md` or `-en.md`.
Do not paste the LinkedIn draft into public article Markdown.
