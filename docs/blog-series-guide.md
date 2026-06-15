# SciencesLoop Blog Series Guide

This document is the strategic guide for what SciencesLoop writes and why. The
execution protocol lives in `~/.codex/skills/scientificloop-writing/SKILL.md`.
Style details live in `docs/article-style-guide.md`.

## North Star

SciencesLoop is not a general AI news site. It studies how AI changes scientific
workflows.

`SciencesLoop` means multiple sciences entering a shared loop: physics,
chemistry, biology, materials science, medicine, computer science, engineering,
and the workflows that connect them. The brand should not be reduced to one
technology such as RAG or agents.

Public spelling is **SciencesLoop**. Avoid `ScientificLoop`, `ScienceLoop`, and
misspellings in public copy. Legacy technical filenames or internal repo names
may remain unchanged when renaming them would create avoidable churn.

The recurring question is:

```text
Which part of scientific work does this AI system change, and how can that
change be checked?
```

Use this workflow lens:

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

Technologies such as RAG, agents, MLOps, embeddings, and autonomous labs are
not the final categories. They are mechanisms inside this larger workflow.

## Audience

Primary:

- scientists who want to understand practical AI systems;
- AI engineers building systems for scientific work;
- technical readers interested in reliable, inspectable AI.

Secondary:

- hiring managers, collaborators, funders, and builders who want to see Lu's
  judgment style.

The writing should be useful to a mixed technical audience without flattening
the scientific content into slogans.

## Series

### Daily Signals

High-frequency notes that identify one useful pattern from a paper, repo, demo,
or product announcement.

Purpose: build a research radar and a public thinking trail.

### Scientific RAG

Focus: evidence quality.

Topics:

- citation precision;
- retrieval trace;
- source-to-claim mapping;
- known-answer benchmarks;
- uncertainty and caveat visibility.

### Scientific Agents

Focus: workflow control.

Topics:

- tool state;
- planning traces;
- human review gates;
- generated artifacts;
- agent failure modes;
- agent harnessing for scientific tasks.

### MLOps For Science

Focus: reproducibility and provenance.

Topics:

- dataset and corpus versioning;
- eval sets;
- smoke tests;
- trace logs;
- artifact storage;
- deployment boundaries.

### AI For Materials

Focus: hypothesis-to-screening pipelines.

Topics:

- battery and redox-flow materials;
- molecular discovery;
- high-throughput screening;
- autonomous experimentation;
- model-guided candidate selection.

### Scientific Workflow Case Studies

Focus: realistic workflows.

This is the defensible moat. Case studies should reconstruct a workflow from
problem to evidence to decision.

Examples:

- from a battery paper to a testable hypothesis;
- from a literature review to a benchmark set;
- from a materials database to candidate screening;
- from a failed agent run to workflow redesign;
- from wet-lab protocol to structured execution trace.

## SciencesLoop Field Research Program

The Field Research Program is a public research notebook on how AI enters
scientific workflows. It collects small public observations before they become
formal articles.

Program outputs:

- Field Note: a short social draft, poll, or discussion prompt about one
  workflow behavior, trust boundary, evidence trail, or review checkpoint.
- Workflow Review: a structured look at where a tool or model enters a
  scientific workflow and what must be checked.
- Research Brief: a monthly synthesis across Field Notes, public sources, and
  workflow patterns; it can become a blog post when there is enough public
  evidence.
- Case Note / Deep Dive: a longer reconstruction of a workflow, failure mode,
  or reusable pattern.

Keep the program centered on workflow, trust, evidence, and review. Treat social
responses as signals to summarize and investigate, not as standalone evidence.

## Selection Standard

Prefer signals that reveal how scientific work is represented, checked, or
repeated.

Do not select only because something is new, popular, or branded as an AI
breakthrough.

Strong signals usually have at least one:

- a primary source with a paper, repo, figure, dataset, benchmark, or demo;
- a reusable workflow pattern;
- a failure mode worth explaining;
- a practical test a reader could run or adapt;
- relevance to evidence, tools, hypotheses, experiments, evaluation, or
  reproducibility.

## Editorial Position

The best SciencesLoop posts help the reader decide:

```text
Is this real infrastructure, a useful prototype, a demo, or hype?
```

The site should develop a judgment framework, not just summarize AI for Science
news.

## SciencesLoop Signal Card

The Signal Card is the site's review framework for AI-for-science signals. It is
not a score for entertainment. It is a way to show how a signal is judged.

Use it near the top of Daily Signals, Technical Notes, Deep Dives, and Case
Studies when it helps readers orient quickly. Use qualitative labels (`Low`,
`Medium`, `High`, `Unknown`) and one sentence of reasoning for each dimension.

Public posts should render this as a compact visual card rather than a dense
Markdown table. Keep the full review matrix in sidecar notes unless the article
is explicitly about the evaluation framework itself.

Context fields:

| Field | Meaning |
| --- | --- |
| Signal | The source or artifact that triggered the note. |
| Workflow Stage | The part of scientific work affected by the signal. |
| Reusable Pattern | The pattern that could be reused elsewhere. |
| Practical Test | A small test or inspection step that checks whether the pattern is real. |
| Run Status | What has and has not been tested locally. |
| Publish Type | Daily Signal, Technical Note, Deep Dive, or Case Study. |
| Claim / Hype Risk | Optional. Where source framing, benchmark language, or marketing claims may overstate reliability. |

| Dimension | Meaning |
| --- | --- |
| Scientific Impact | Does it affect how scientific discovery is done? |
| Evidence Quality | Are the data, citations, benchmark, figure, or examples solid? |
| Reproducibility | Can another person reproduce, inspect, or rerun the method? |
| Workflow Utility | Does it save time or improve a real research workflow? |
| Transferability | Can the pattern move across disciplines? |
| Validation Cost | How expensive is it to verify in practice? |

Example:

```text
SciencesLoop Signal Card

Signal: Future House PaperQA2 repo + arXiv paper
Workflow Stage: Evidence -> Evaluation -> Reproducibility
Reusable Pattern: Evidence trail as a first-class research artifact.
Practical Test: Known-answer benchmark with near-miss papers.
Run Status: Read repo and paper; not locally reproduced.
Publish Type: Technical Note
Claim / Hype Risk: Medium

Scientific Impact: High
Evidence Quality: Medium
Reproducibility: Medium
Workflow Utility: High
Transferability: High
Validation Cost: Medium

Why I paid attention:
Strong workflow implications and a reusable evaluation pattern. Evidence is
promising, but external validation remains limited.
```

The point is to train readers to ask: is this real infrastructure, a useful
prototype, a demo, or hype?
