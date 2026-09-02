---
title: "Daily signal: Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls"
description: "A draft SciencesLoop Daily Signal selected from public technical sources for human review."
date: "2026-09-02"
lang: "en"
status: "draft"
featured: false
tags:
  - AI for Science
  - SciencesLoop
  - daily signal
  - technical writing
---

**Daily signal: Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls**

This is an automated SciencesLoop draft. I have not yet reviewed the primary
source in detail, reproduced any result, or checked the claim against a real
scientific workflow.

The signal selected today is [Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls](https://arxiv.org/abs/2609.00012) from arXiv cs.AI.
The source summary available to the scanner is:

> arXiv:2609.00012v1 Announce Type: new Abstract: Long-horizon tasks remain uncommon in large language model (LLM) evaluation, and for a reason: when each step depends on the last, per-step accuracy that looks excellent in isolation decays catastrophically, as errors cascade and the end-to-end failure probability grows sharply with length. Existing agentic benchmarks report end-to-end success but confound this state-tracking difficulty with instruction interpretation, give no control group that isolates it, and are vulnerable to shortcuts such as a hallucinated final answer, so they cannot say why a long run fails. Whether an LLM can carry exact intermediate state across many tool calls at all is itself not well established. We test this cleanly by having the model compute a cryptographic hash, MD5, step by step: a sequence of $196$ dependent tool calls over $64$ rounds while it carries four $32$-bit words $(a,b,c,d)$ in its own context from one call to the next. Interpretation is trivial and, because we implement MD5 from scratch (RFC~1321), we align every call to the ground-truth trace and check the digest to the bit, so any failure is pure bookkeeping. gpt-oss-120b, a mixture-of-experts model with only $\sim$5.5B active parameters per token, at temperature $0$ with a short fixed prompt, carries the full state across all $196$ calls and returns the correct digest on a majority of completed runs. In the strongest setting we replace every primitive tool with a second LLM, so a driver and a worker compute the whole hash from scratch with no exact-arithmetic oracle in the loop. Two ingredients decide success and neither changes the weights: keeping the model's own reasoning in its context each turn, and voting over a thinking-enabled worker to remove its modular-arithmetic slips. We localize the residual failures by origin, separating state-carrying from arithmetic and from serving.

## SciencesLoop Signal Card

<section class="signal-card signal-card--compact signal-card--visual" aria-label="SciencesLoop Signal Card">
  <div class="signal-card__top">
    <div>
      <p class="signal-card__eyebrow">Draft workflow assessment</p>
      <h3 class="signal-card__title">Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls</h3>
      <p class="signal-card__summary">
        Automated candidate selected from arXiv cs.AI. Treat this as a
        research lead until the source, claims, and failure modes are reviewed.
      </p>
    </div>
    <span class="signal-card__pill">Daily Signal Draft</span>
  </div>

  <p class="signal-card__stage">
    <span>Workflow stage</span>
    <strong>tool/model -&gt; reproducibility</strong>
  </p>

  <dl class="signal-card__details">
    <div class="signal-card__detail">
      <dt>Signal</dt>
      <dd>Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls</dd>
    </div>
    <div class="signal-card__detail">
      <dt>Run status</dt>
      <dd>Not reviewed or run locally</dd>
    </div>
    <div class="signal-card__detail">
      <dt>Practical test</dt>
      <dd>Run one narrow task with logged tool calls, expected artifacts, failure injection, and a human review gate.</dd>
    </div>
  </dl>

  <ul class="signal-card__metrics" aria-label="Assessment dimensions">
    <li class="signal-metric" data-level="medium">
      <div class="signal-metric__head"><span>Evidence quality</span><span class="signal-metric__level">Needs review</span></div>
    </li>
    <li class="signal-metric" data-level="medium">
      <div class="signal-metric__head"><span>Workflow utility</span><span class="signal-metric__level">Candidate</span></div>
    </li>
    <li class="signal-metric" data-level="low">
      <div class="signal-metric__head"><span>Run status</span><span class="signal-metric__level">Not tested</span></div>
    </li>
    <li class="signal-metric" data-level="risk-medium">
      <div class="signal-metric__head"><span>Hype risk</span><span class="signal-metric__level">Unknown</span></div>
    </li>
  </ul>

  <p class="signal-card__test">
    Early pattern: Turn a model response into a traceable workflow artifact.. Likely failure mode: The workflow may look agentic while hiding state, tool errors, or handoff decisions.
  </p>
</section>

## Why I Would Look At This

The reusable pattern I would inspect first is:

> Turn a model response into a traceable workflow artifact.

That does not make the source a recommendation. It gives the next review step a
shape. For SciencesLoop, the useful question is whether the signal changes one
part of scientific work in a way that can be checked later: the evidence used,
the tool action taken, the artifact produced, or the review gate before a human
acts on it.

## Workflow Stage

My initial classification is **tool/model -> reproducibility**.

This classification may change after reading the source. The point of the draft
is to force an early workflow hypothesis before writing commentary. If the
source only describes a model or product without a testable workflow change, the
right decision is to keep it in the sidecar queue and not publish it.

## Failure Mode To Check

The workflow may look agentic while hiding state, tool errors, or handoff decisions.

This is the first place I would be cautious. Popularity, benchmark language, or
a polished demo can identify a signal worth reading, but they do not prove that
the pattern is useful for scientific work. The review should look for what was
measured, what was omitted, what can be reproduced, and what artifact a
scientist or engineer could inspect afterward.

## Practical Test

Run one narrow task with logged tool calls, expected artifacts, failure injection, and a human review gate.

The smallest useful next step is to turn the source into one checkable task. A
good test should name the input, expected artifact, success criteria, and one
failure case. If that cannot be specified, this signal is probably too vague for
a public Daily Signal.

## What To Review Before Publishing

- Open the primary source and replace this scanner summary with source-checked
  facts.
- Decide whether the post should remain a Daily Signal or become a Technical
  Note.
- Add one concrete scenario, preferably from literature review, materials
  screening, agent evaluation, or scientific MLOps.
- Keep any LinkedIn draft, rejected candidates, and claim checks in the matching
  sidecar note.

Source: [Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls](https://arxiv.org/abs/2609.00012)
