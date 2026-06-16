# LinkedIn 中文草稿: PaperQA2 / scientific RAG evidence trail

## 主帖

做科研文献综述时，找到论文只是起点。更花时间的是判断一个结论到底有没有被证据支撑。

这也是我今天写这篇 PaperQA2 note 的原因：我先把它看成一个 workflow signal；是否适合作为工具推荐，还需要本地测试。

当前 repo 强调带引用回答、reranking、contextual summarization、本地全文搜索和 agentic query refinement；论文则把 PaperQA2 作为多步文献 agent 来评估。

我想检查的是，它能不能形成一个可审查的工作面：

question -> retrieved evidence -> cited answer -> uncertainty -> review gate -> next action

科研场景里，答案的价值取决于 evidence path 能不能事后检查。用了哪些 source sections？哪个 claim 来自哪里？有没有漏掉 negative result？

更安静、也更危险的错误，是引用了相关论文却引用错 section，或者把不同实验条件下的结论合并了。

我已经读了 repo 和论文；还没有本地运行 PaperQA2。我的第一步测试会很小：known-answer questions、near-miss papers、citation precision、answer correctness、caveat visibility，以及 retrieval trace 能不能 replay。

文章：https://sciencesloop.com/zh/blog/2026-06-15-future-house-paper-qa-zh/

如果放到你的科研流程里，你会需要看到哪些 trace，才会把 agent 的回答用于下一篇论文、下一次模拟或下一步实验？

## 第一评论

来源：

Repo: https://github.com/Future-House/paper-qa

Paper: https://arxiv.org/abs/2409.13740

我把 source links 放在评论里，这样 LinkedIn 的 preview card 会优先指向 SciencesLoop 文章。
