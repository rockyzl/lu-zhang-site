# SciencesLoop Article Style Guide

This document controls voice, article structure, visuals, and channel
adaptation. Long-term series strategy lives in `docs/blog-series-guide.md`.
Execution lives in `~/.codex/skills/scientificloop-writing/SKILL.md`.

> Write like a scientist keeping a research notebook in public, not like a
> technology commentator trying to predict the future.

## Voice

Write like a scientist-engineer:

- practical;
- source-grounded;
- modest;
- specific;
- willing to name failure modes;
- interested in workflows, not slogans.

Use first-person judgment when it adds value:

- `My read is...`
- `I would test...`
- `The failure mode I would watch is...`
- `A useful pattern is...`

Avoid sounding like a venture blog, AI newsletter content farm, or product
launch.

## Voice Rules

### Write Observations, Not Declarations

Prefer:

```text
What caught my attention is ...
I ran into a similar problem when ...
This reminds me of ...
```

Avoid:

```text
This will transform science.
The future of scientific work is ...
This changes everything.
```

### Write Judgments, Not Summaries

Prefer:

```text
My read is ...
What I take away from this is ...
I would be cautious about ...
I suspect the difficult part is ...
```

Source summaries are necessary, but they should not be the whole article.

### Write From Experience When Truthful

AI-flavored:

```text
Researchers often struggle with literature review.
```

Better:

```text
When I was working on battery materials, a literature review could easily turn
into two days of opening PDFs and chasing references.
```

Use personal experience only when it is true and public-safe. Do not invent
experience to make a post sound human.

### Allow Uncertainty

Scientific writing is more credible when it names what is not known.

Useful phrases:

```text
I don't know yet.
I haven't tested this.
The benchmark looks promising, but ...
The evidence is still limited.
I'd like to see ...
```

Avoid false certainty. If a claim has not been reproduced, say so.

## Anti-AI Style Checklist

Avoid repeated patterns such as:

- `not just X, but Y`;
- `not X, but Y`;
- `this is where...`;
- `the future of...`;
- `game-changing`;
- `revolutionary`;
- `unlock`;
- `transform`;
- `seamless`;
- `delve`;
- `landscape`;
- `in today's fast-paced world`;
- generic conclusions that simply repeat the intro.

One contrast can be useful. Repeated contrast formulas make the writing feel
generated.

Hard rule: each article may use at most one `not X but Y` structure. If a
sentence starts by denying a generic framing, rewrite it as a concrete
observation, scenario, or test.

## AI-Smell Rewrite Pass

Before publishing, search for:

```text
不是
而是
不只是
真正的问题
这才是
未来不是
改变一切
革命性
颠覆
unlock
transform
landscape
game-changing
```

For each flagged sentence:

- replace generic contrast with a concrete observation;
- add a workflow detail;
- add one uncertainty or test when useful;
- keep at most one contrast sentence in the whole article.

## Human Voice Check

Before publishing, remove or rewrite:

- `future of`;
- `game changing`;
- `revolutionary`;
- `transformative`;
- formulaic `not X but Y`;
- `unlock`;
- `landscape`;
- `seamless`;
- generic `leverage` as a verb.

Before publishing, add:

- one observation;
- one concern;
- one uncertainty;
- one practical test;
- one personal judgment.

## Every Article Needs A Scar

A scar is a concrete lesson from something that failed, took longer than
expected, or became harder in real work.

Good scars:

```text
I've seen similar benchmark gains disappear once the retrieval corpus changes.
```

```text
In materials science, the bottleneck was rarely the model alone. It was usually
data quality, validation cost, or the gap between a predicted candidate and a
real experiment.
```

```text
This reminds me of an issue we ran into when deploying member-facing agents:
the hard part was whether the system state was inspectable after the answer.
```

Rules:

- Never invent a scar.
- Do not expose employer-confidential or private details.
- If there is no personal scar, use a source-backed failure mode or clearly
  label the scenario as hypothetical.
- The scar should sharpen the article's judgment, not become a memoir.

## Article Structure

Use this for medium notes and deep dives:

1. **Hook** - a real scientific or engineering problem.
2. **Source** - what the source actually says.
3. **Workflow stage** - where it sits in scientific work.
4. **Scenario** - a realistic use case, labeled if hypothetical.
5. **Mechanism** - technical explanation at the needed level.
6. **Visual** - source figure, diagram, matrix, or trace.
7. **My read** - practical interpretation.
8. **Failure modes** - where it can mislead or break.
9. **Practical test** - how to check whether it is real.
10. **Conclusion** - one useful judgment.

## SciencesLoop Signal Card Rule

Every Daily Signal, Technical Note, and Deep Dive should start with a short
Signal Card when it helps readers inspect the piece.

For public articles, prefer a compact visual card over a long Markdown table.
The public card should be scannable in 10-15 seconds:

- Signal
- Workflow Stage
- Reusable Pattern
- Practical Test
- Run Status
- Publish Type
- Claim / Hype Risk
- 3-5 visible dimensions such as Scientific Impact, Evidence Quality,
  Reproducibility, Workflow Utility, Transferability, and Validation Cost

Do not present the card as objective scoring. Use it as a reader-facing
judgment frame with qualitative labels and short explanations.

Keep detailed review matrices in sidecar notes when the public card becomes too
large. The article should explain the judgment through prose, examples, figures,
and practical tests instead of forcing readers through a dense table.
If the card starts to feel like a dashboard, cut dimensions and move the
reasoning into the article body.

## Daily Signal Shape

Daily Signals should not be link dumps. Use:

```text
Signal:
Pattern:
Workflow stage:
SciencesLoop Signal Card:
Why it matters:
Failure mode:
Practical test:
Source:
```

Target: 500-900 words when published on the site.

## LinkedIn Shape

Target: 120-220 words.

Use one idea, short lines, one source link, and one expert question.

Template:

```text
今天看到一个值得关注的 AI for Science 模式：

<one-sentence view>

<source did what>

我关心的是：
<workflow / evidence / evaluation / failure mode>

一个实用测试是：
- ...
- ...

Source:
...

问题：
...
```

Save LinkedIn drafts inside the matching `draft-notes/daily-signal/` sidecar.
Do not publish them inside blog Markdown.

## Visual Rules

Images should explain the article outline or evidence path.

Good visuals:

- source figures with attribution;
- conceptual workflow diagrams;
- evaluation matrices;
- before/after workflow comparisons;
- architecture sketches;
- annotated screenshots.

Each visual caption should say:

- whether it is a source figure or a conceptual diagram;
- what it supports;
- what it does not prove.

Avoid decorative AI art and images that imply capabilities not actually built
or shown.

## Chinese Versions

Chinese posts should be adapted rewrites.

Rules:

- Preserve source links.
- Keep technical English terms when useful.
- Do not add facts not present in the English/source material.
- Use clearer motivation and scenario explanation than literal translation.
- Avoid marketing tone.

## Good Ending

End with a practical test or judgment, not a motivational statement.

Good:

```text
The test I would run first is whether the system can answer known-answer
questions with correct citations and replayable retrieval traces.
```

Weak:

```text
AI will continue to transform scientific discovery.
```
