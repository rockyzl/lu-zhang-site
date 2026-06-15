# LinkedIn 中文草稿: PaperQA2 / scientific RAG evidence trail

今天看到一个值得关注的 AI for Science 模式：scientific RAG 不应该只给答案，而要留下 evidence trail。

Future House 的 PaperQA2 repo 和论文展示了一个面向科学文档问答的 RAG 系统。对我来说，重点不是“更好的搜索”，而是 workflow shape：

question -> retrieved evidence -> cited answer -> caveat -> human review -> next step

科研场景里，一个合理答案不够。输出需要可以检查：用了哪些来源，提取了哪些 claim，哪里还有 uncertainty，下一步应该查什么。

我的 SciencesLoop 角度：真正有用的单位不是 chat message，而是 reviewable research artifact。

我会先用 known-answer questions 测任何 scientific RAG 系统，评分 citation precision、answer correctness、caveat visibility，以及 retrieval trace 能不能 replay。

Source: https://github.com/Future-House/paper-qa
Paper: https://arxiv.org/abs/2409.13740

如果是你的科研流程，什么样的 agent answer 才值得信任？
