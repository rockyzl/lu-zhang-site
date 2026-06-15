# LinkedIn Draft: PaperQA2 / scientific RAG evidence trail

I am watching one useful AI-for-science pattern today: scientific RAG that leaves an evidence trail.

Future House's PaperQA2 repository and paper describe a RAG system for answering questions from scientific documents with citations. What caught my attention is the workflow shape:

question -> retrieved evidence -> cited answer -> caveat -> human review -> next step

For scientific work, a plausible answer is not enough. The output needs to be inspectable: which sources were used, which claims were extracted, where uncertainty remains, and what should be checked next.

My read: the useful unit of work is not a chat message. It is a reviewable research artifact.

I would test any scientific RAG system first on known-answer questions, then check citation precision, answer correctness, caveat visibility, and whether the retrieval trace can be replayed.

Source: https://github.com/Future-House/paper-qa
Paper: https://arxiv.org/abs/2409.13740

What would make a scientific agent answer trustworthy enough for your own workflow?
