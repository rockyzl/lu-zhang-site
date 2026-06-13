---
title: "Agentic Scientific Workflows: From Search to Traceable Decisions"
description: "A working model for scientific agents that retrieve evidence, plan the next step, preserve uncertainty, and leave a decision trail."
date: "2026-06-12"
lang: "en"
status: "working note"
featured: true
tags:
  - AI agents
  - scientific workflow
  - RAG
  - evaluation
---

Scientific work rarely fails because one answer is missing. It usually fails because the path from question to evidence to decision is unclear.

That is why I think scientific agents should be designed as workflow systems, not just chat interfaces. A useful agent should help a scientist or engineer do four things:

1. Frame the question tightly enough to search.
2. Retrieve evidence from a known public or internal corpus.
3. Preserve uncertainty instead of flattening it into confidence.
4. Leave a trace that another person can inspect.

For AI for Science, the trace matters as much as the answer. If an agent suggests a molecule, a formulation, a paper, or an experimental next step, the user should be able to see where the suggestion came from and what assumptions were used.

My current SciencesLoop direction is built around that pattern: retrieval, tool use, evaluation, and human review. The agent should be able to answer, but it should also route the visitor or researcher to the next useful action: read a source, compare candidates, inspect a trace, or refine the question.

The practical design goal is modest: make scientific navigation less brittle. The long-term goal is stronger: turn repeated expert workflows into evaluated, auditable agent systems.
