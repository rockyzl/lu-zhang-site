# LinkedIn Draft: PaperQA2 / scientific RAG evidence trail

In scientific literature review, finding papers is only the start. The slower work is checking whether a conclusion is actually supported.

That is why I'm treating Future House's PaperQA2 as a workflow signal, not a tool recommendation yet.

The current repo highlights cited answers, reranking, contextual summarization, local full-text search, and agentic query refinement. The paper evaluates PaperQA2 as a multi-step literature agent.

The inspection surface I want is:

question -> retrieved evidence -> cited answer -> uncertainty -> review gate -> next action

For scientific work, a fluent answer is only useful if the evidence path can be inspected later. Which source sections were used? Which claim came from where? What uncertainty remains?

In materials or battery review, the dangerous errors are often quiet: citing the right paper but the wrong section, merging results measured under different conditions, or missing a negative result.

I have read the repo and paper; I have not run PaperQA2 locally yet. My first test would be small: known-answer questions, near-miss papers, citation precision, answer correctness, caveat visibility, and replayable retrieval traces.

Article: https://sciencesloop.com/blog/2026-06-15-future-house-paper-qa/
Repo: https://github.com/Future-House/paper-qa
Paper: https://arxiv.org/abs/2409.13740

Would you trust a cited scientific answer without source-section trace, or would you need a replayable retrieval path first?
