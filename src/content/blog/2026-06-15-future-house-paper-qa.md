---
title: "Scientific RAG should leave an evidence trail, not just an answer"
description: "A daily AI-for-science signal from Future House's PaperQA2, and what it suggests about citation-grounded scientific agents."
date: "2026-06-15"
lang: "en"
status: "draft"
featured: false
tags:
  - AI for Science
  - SciencesLoop
  - daily signal
  - RAG
  - scientific agents
---

**Scientific RAG should leave an evidence trail, not just an answer**

The daily signal I am looking at is [Future-House/paper-qa](https://github.com/Future-House/paper-qa), the open-source repository behind PaperQA2. The repository describes it as a RAG system for answering questions from scientific documents with citations, with support for PDFs, text files, Microsoft Office documents, and source code files.

That matters because scientific RAG has a different failure mode from ordinary chat search. In science, a plausible answer is not enough. A useful answer has to show where the evidence came from, what was retrieved, what was ignored, and how confidently a researcher should act on it.

## What the source actually says

From the public repository README, PaperQA2 is positioned as a package for high-accuracy retrieval-augmented generation over scientific literature. The README highlights a few concrete system ideas:

- grounded answers with in-text citations
- metadata-aware document handling
- LLM-based reranking and contextual summarization
- agentic RAG, where the system can iteratively refine queries and answers
- local full-text search over a repository of documents
- configurable model and embedding backends through LiteLLM

Those are source facts, not my benchmark claims. I have not independently evaluated the system yet. My read is about the workflow pattern it represents.

## The useful pattern

For a scientific agent, the answer is only one artifact. The more important artifact is the path:

```text
Question
  -> retrieved evidence
  -> ranked context
  -> cited answer
  -> uncertainty or caveat
  -> human review
  -> next experiment, simulation, or reading step
```

This is closer to a lab notebook than a chatbot. A lab notebook does not merely say "this electrolyte looks promising." It records what was measured, under what conditions, what failed, and what the next reasonable test should be. A scientific RAG system should have the same spirit: the response should be inspectable after the fact.

## A concrete scenario

Imagine a battery researcher asking:

> Which classes of redox-active molecules have evidence for improved stability in nonaqueous flow batteries?

A weak assistant gives a confident paragraph and a few paper titles. That may be useful for orientation, but it is not enough to trust.

A stronger scientific workflow would return something more structured:

- the query it actually searched
- the papers or sections it used
- the extracted claims
- the citations attached to each claim
- any conflicting evidence
- the missing evidence that would change the conclusion
- a proposed next reading or validation step

The difference is small on the surface but large in practice. One output asks the researcher to trust the model. The other gives the researcher something to audit.

## Why this is not just "better search"

Search retrieves documents. Scientific work needs a chain of responsibility across documents, claims, and actions.

In an AI-for-science setting, a RAG system may sit upstream of real decisions: which paper to read, which molecule to synthesize, which simulation to run, which dataset to trust, or which experimental protocol deserves time. That makes the retrieval layer part of the scientific workflow, not a convenience feature.

This is where PaperQA2 is a useful signal. Its public materials emphasize citation-grounded answers and agentic query refinement. Whether a given deployment is good depends on the corpus, models, settings, evaluation set, and human review process. But the direction is right: scientific agents need retrieval and citation behavior that can be tested, not just prompt wording that sounds careful.

## What I would test first

Before trusting any scientific RAG system, I would start with a small benchmark where the answer is already known.

For example:

1. Pick 20 domain questions with known source papers.
2. Include near-miss papers that use similar terminology but do not answer the question.
3. Ask the system to answer with citations and uncertainty.
4. Score citation precision, answer correctness, and whether the caveat is visible.
5. Inspect failure cases manually.

The most interesting failures are usually not dramatic hallucinations. They are quieter:

- the system cites a relevant paper but the wrong section
- it merges two claims that were measured under different conditions
- it misses a negative result
- it overstates what a benchmark or paper actually showed
- it gives a reasonable answer without enough trace to audit

Those are the failures that matter in scientific work.

## The SciencesLoop angle

For SciencesLoop, this reinforces a simple design principle:

> A scientific agent should produce a reviewable work product, not just a fluent response.

That means the product surface should include the answer, but also the evidence trail, retrieval trace, source list, evaluation result, and next-step recommendation. It should be possible for a scientist to ask, "Why did the agent say this?" and get a useful answer without rerunning the whole conversation from memory.

The practical direction is an evidence-first agent pattern:

```text
source corpus -> retrieval -> cited answer -> eval check -> review gate -> next action
```

This is the difference between an assistant that sounds scientific and a workflow that can support scientific work.

## Watch-for

I would not treat repository popularity, benchmark language, or "AI scientist" framing as evidence of reliability. They are signals to investigate.

The real question is narrower and more useful:

Can the system answer a known scientific question, cite the right evidence, expose its uncertainty, and make the next step easier to inspect?

That is the kind of small, repeatable test I would want to run before building on top of it.

Source: [Future-House/paper-qa](https://github.com/Future-House/paper-qa). Related project documentation is linked from the repository homepage.

## LinkedIn Draft

I am watching one useful AI-for-science pattern today: scientific RAG that leaves an evidence trail.

Future House's PaperQA2 repository describes a RAG system for answering questions from scientific documents with citations. The important part is not just "better search." It is the workflow shape:

question -> retrieved evidence -> cited answer -> caveat -> human review -> next step

For scientific work, a plausible answer is not enough. The output needs to be inspectable: which sources were used, which claims were extracted, where uncertainty remains, and what should be checked next.

My SciencesLoop angle: I would test any scientific RAG system first on known-answer questions, then score citation precision, answer correctness, and failure visibility before trusting it in real research workflows.

Source: https://github.com/Future-House/paper-qa

What would make a scientific agent answer trustworthy enough for your own workflow?
