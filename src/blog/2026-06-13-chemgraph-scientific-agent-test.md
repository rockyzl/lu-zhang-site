---
title: "ChemGraph is a better first test for scientific agents"
description: "A hands-on SciencesLoop note from running ChemGraph locally, finding workflow failures, and checking whether the agent showed enough evidence to trust the result."
date: "2026-06-13"
updated: "2026-06-19"
lang: "en"
status: "case study"
featured: true
tags:
  - AI for Science
  - chemistry agents
  - scientific workflow
  - evaluation
---

**I started with a simple question: can I run ChemGraph locally and see enough
of the process to trust the answer?**

ChemGraph is an Argonne Leadership Computing Facility project for agentic
computational chemistry workflows. The public repository describes it as a
framework built on LangGraph and ASE that can connect natural-language requests
to molecular simulation steps, including structure generation, thermochemistry,
DFT or coupled-cluster backends, semi-empirical tools, and machine-learning
potentials.

What caught my attention was the workflow. A chemistry agent cannot be judged
only by whether it writes a fluent answer. I want to know which molecule it used,
which calculation it ran, what file or result came back, and where the process
could have failed.

That sounds abstract until you run the tool yourself.

## What I tried

I opened ChemGraph locally and asked a few small chemistry questions:

```text
What is the reaction enthalpy of methane combustion using mace_mp?
Calculate the infrared spectrum of water using ORCA.
glucose dipolemoment
```

These are not fancy examples. That is why they are useful. If a scientific
agent struggles to keep a small molecule question clean, I would be careful
before trusting it on a larger workflow.

<figure>
  <img src="/images/chemgraph/chemgraph_eval_improvement.png" alt="Local ChemGraph evaluation chart showing improvement from 27 of 40 to 39 of 40." width="1870" height="1144" loading="lazy" />
  <figcaption>Local reproduction note: the evaluation became much more consistent after the workflow fixes. This is a workflow-control signal, not a claim that the chemistry itself became more accurate.</figcaption>
</figure>

## What broke

The first problems were not exotic. They were the kind of things a user notices
immediately.

One saved run had no assistant answer. One reaction run had useful data, but the
UI did not show all of it. A later question about glucose could still be
influenced by an older methane question. The agent was not failing like a
calculator. It was failing like a workflow that did not keep state, result, and
final answer tightly connected.

<figure>
  <img src="/images/chemgraph/chemgraph-ui-smoke-after-fix.png" alt="ChemGraph Streamlit interface running locally after workflow status and result rendering fixes." width="1920" height="1080" loading="lazy" />
  <figcaption>The local UI after the first fixes. For this kind of tool, the visible process matters as much as the final sentence.</figcaption>
</figure>

As a chemist, this is the part I care about. If an answer says a number, I want
to know what produced that number. If the molecule changed from methane to
glucose, I want the system to forget the old molecule unless I explicitly ask it
to reuse context.

## What I changed first

The first fixes were practical and user-facing:

- show clearer messages when a run is incomplete or failed;
- keep old chemistry context from leaking into a new molecule question;
- show more of the useful numbers that the tool already produced;
- make the UI keep the run history and process visible;
- avoid giving a final number when the needed calculation result is missing.

<figure>
  <img src="/images/chemgraph/chemgraph-workflow-map-live.png" alt="ChemGraph workflow view showing tool calls and run status while the agent is working." width="780" height="493" loading="lazy" />
  <figcaption>A small workflow trace from the local run. The user should be able to see what the agent is doing, not only read the final answer.</figcaption>
</figure>

<figure>
  <img src="/images/chemgraph/chemgraph-calculator-routing-node.png" alt="ChemGraph calculator routing view showing the selected calculation path." width="1920" height="1080" loading="lazy" />
  <figcaption>The method choice needs to be visible. A chemistry answer without method context is hard to audit.</figcaption>
</figure>

## Why this matters

ChemGraph is useful as a test case because it touches many parts of a real
scientific-agent workflow: molecule identity, tool choice, simulation files,
structured results, saved sessions, UI state, and evaluation. Each piece can be
mostly right while the overall answer is still hard to trust.

The improvement I care about is simple: before the agent gives a final number,
it should show enough of the chain for another person to inspect it.

<figure>
  <img src="/images/chemgraph/chemgraph-methane-combustion-e2e-after-fix.png" alt="ChemGraph methane combustion result after result display and validation fixes." width="780" height="493" loading="lazy" />
  <figcaption>A reaction question after result display fixes. The point is not only the value; it is whether the result has a visible path.</figcaption>
</figure>

<figure>
  <img src="/images/chemgraph/chemgraph-ftir-water-process-persistent-after-routing.png" alt="ChemGraph water infrared spectrum workflow with the process still visible after routing." width="1920" height="1080" loading="lazy" />
  <figcaption>A spectrum-style question with the process still visible. This matters when a user wants to inspect what actually ran.</figcaption>
</figure>

## My read

I would still treat ChemGraph as a research workflow tool, not a push-button
scientific authority. Any serious use still needs known-answer tests, domain
review, and careful checking of molecule state, method, and units.

But this local run made one thing clear to me. Scientific agents should be
evaluated on whether they expose their work. A fluent answer is not enough. A
trace that another scientist can inspect is the useful part.

Sources: [ChemGraph GitHub](https://github.com/argonne-lcf/ChemGraph),
[ChemGraph docs](https://argonne-lcf.github.io/ChemGraph/),
[evaluation docs](https://argonne-lcf.github.io/ChemGraph/evaluation/),
[MCP server docs](https://argonne-lcf.github.io/ChemGraph/mcp_servers/), and
the related HPC preprint,
[Multi-Agent Orchestration for High-Throughput Materials Screening on a Leadership-Class System](https://arxiv.org/abs/2604.07681).

Practical next step: take one known computational chemistry task and ask whether
the agent can return an answer together with a trace another scientist could
audit.
