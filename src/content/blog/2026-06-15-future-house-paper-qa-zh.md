---
title: "Scientific RAG 不应该只给答案，而要留下证据链"
description: "从 Future House 的 PaperQA2 看 scientific RAG、引用、评估和可审查的科研 agent 工作流。"
date: "2026-06-15"
lang: "zh"
status: "daily signal"
featured: false
tags:
  - AI for Science
  - SciencesLoop
  - daily signal
  - RAG
  - scientific agents
---

**Scientific RAG 不应该只给答案，而要留下证据链。**

今天看的信号是 [Future-House/paper-qa](https://github.com/Future-House/paper-qa)，也就是 PaperQA2 背后的开源仓库，以及相关论文 [*Language agents achieve superhuman synthesis of scientific knowledge*](https://arxiv.org/abs/2409.13740)。

我关心的不是“它能不能用引用回答问题”这么简单。真正有意思的是：PaperQA2 把文献问答做成了一个 agentic workflow，包含搜索、选择证据、基于证据推理、生成引用答案，以及把足够多的中间结构暴露出来，让后续的人可以检查。

这和普通 chat search 的失败模式不一样。科研场景里，一个看起来合理的答案远远不够。真正有用的回答需要说明证据从哪里来，系统检索了什么，忽略了什么，以及研究者应该以多大信心继续行动。

我的 digest 是：scientific RAG 不应该按“chatbot 回答得顺不顺”来判断，而应该更像“lab notebook + search system + reviewer”。最后那段答案重要，但 trace 更重要。

## 源材料实际说了什么

从公开 README 看，PaperQA2 被定位成一个面向科学文献的高准确率 RAG 包。README 里提到几个具体系统能力：

- 带文内 citation 的 grounded answer
- metadata-aware 的文档处理
- LLM-based reranking 和 contextual summarization
- agentic RAG，也就是系统可以迭代改进 query 和 answer
- 对本地文档库做 full-text search
- 通过 LiteLLM 支持可配置的模型和 embedding backend

论文里的图更清楚地说明了一点：PaperQA2 不是一个单次 retrieval call，而是一个 agentic toolset。论文也报告了 question answering、article summarization、contradiction detection 等任务上的 benchmark 结果。这里我把这些都当作源论文自己的 claim，而不是我已经独立复现过的结果。

<figure class="article-figure source-figure">
  <img src="/images/blog/paperqa2-agentic-toolset.png" alt="PaperQA2 论文源图，展示 agentic toolset 和 benchmark summary。" loading="lazy" />
  <figcaption>
    源图：Skarlinski et al., arXiv:2409.13740, Figure 1，许可为 <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>。我引用这张图，是为了说明 PaperQA2 的公开表述本身就是 agentic toolset + evaluation，而不是简单的文档搜索 wrapper。
  </figcaption>
</figure>

这张图对 SciencesLoop 有价值，因为它把 search tools、answer generation、citation behavior 和 evaluation 放在同一个框架里。真实科研工作也更像这样：一个问题会展开成一系列证据操作，而不是一次模型回答。

## 有用的模式

对 scientific agent 来说，答案只是一个 artifact。更重要的 artifact 是路径。

<figure class="article-figure">
  <img src="/images/blog/scientific-rag-evidence-trail.svg" alt="Scientific RAG 证据链概念图，从 question 到 evidence、answer、caveat、review 和 action。" loading="lazy" />
  <figcaption>
    SciencesLoop 概念图。我的理解是：answer 应该和 evidence trail 一起交付，因为 trace 才能让另一个科学家审查这个输出。
  </figcaption>
</figure>

这更像 lab notebook，而不是 chatbot。实验记录本不会只写“这个 electrolyte 看起来不错”。它会记录测了什么，在什么条件下测的，什么失败了，下一步合理测试是什么。Scientific RAG 也应该有类似精神：回答之后还能被检查。

关键设计点是把每一步都当作 work product：

- query 是 work product，因为它定义了系统实际搜索了什么。
- retrieved papers 和 source sections 是 work product，因为它们定义了证据基础。
- extracted claims 是 work product，因为它们可以回到原文核查。
- answer 是 work product，因为它总结了一个判断。
- caveat 是 work product，因为它控制过度自信。
- next step 是 work product，因为它把阅读连接到行动。

这是我想带进 SciencesLoop 的部分。Agent 不应该只是回答。它应该产出一个 scientist 可以 audit、correct、reuse 的东西。

## 一个具体场景

想象一个电池研究者问：

> 哪些 redox-active molecule classes 有证据显示在 nonaqueous flow batteries 里稳定性更好？

一个弱 assistant 会给出一段很自信的总结，再列几个 paper title。这可以帮助入门，但不足以信任。

更强的 scientific workflow 应该返回更结构化的东西。

<figure class="article-figure">
  <img src="/images/blog/scientific-rag-scenario.svg" alt="电池材料问题中，弱回答和可审查 scientific RAG workflow 的概念对比。" loading="lazy" />
  <figcaption>
    SciencesLoop 概念场景。重点不是 agent 已经知道最终答案，而是它应该暴露 source-to-claim path，让研究者判断这个答案是否值得信任。
  </figcaption>
</figure>

表面差别不大，但实际差别很大。一个输出要求研究者信模型；另一个输出给研究者一个可以审查的对象。

这里可以用一个比喻，但要控制边界。我不太想把它叫作 “AI scientist”，这个词隐藏了太多问题。更准确的 mental model 是：

> 一个像 lab notebook、search analyst 和 careful reviewer 一样工作的 literature assistant。

Notebook 记录发生了什么。Search analyst 找到并排序证据。Reviewer 问证据是否真的支持 claim。三者都不替代科学家，但可以降低 inspection 的成本。

## 为什么这不只是“更好的搜索”

Search 检索文档。科研工作需要的是一条跨越 document、claim 和 action 的责任链。

在 AI for Science 里，RAG 系统可能位于真实决策的上游：读哪篇论文，合成哪个分子，跑哪个 simulation，相信哪个 dataset，或者哪个实验 protocol 值得花时间。这样一来，retrieval layer 就不是便利功能，而是科学工作流的一部分。

PaperQA2 是一个有用信号，因为它公开材料强调 citation-grounded answers 和 agentic query refinement。一个具体 deployment 好不好，取决于 corpus、models、settings、evaluation set 和 human review process。但方向是对的：scientific agents 需要可以测试的 retrieval 和 citation behavior，而不是听起来谨慎的 prompt wording。

论文 Figure 2 也有用，因为它不只展示 answer，还展示 example question/answer、performance、ablation 和 retrieval-stage analysis。我把它看作一个好的产品表达模式：把用户看到的答案和背后的 evaluation surface 一起展示。

<figure class="article-figure source-figure">
  <img src="/images/blog/paperqa2-litqa-workflow.png" alt="PaperQA2 论文源图，展示 LitQA example、performance comparison、ablations 和 DOI recall by stage。" loading="lazy" />
  <figcaption>
    源图：Skarlinski et al., arXiv:2409.13740, Figure 2，许可为 <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>。我不把它当作独立验证，而是把它当作一个有用的产品模式证据：answer 应该和 retrieval/evaluation diagnostics 一起出现。
  </figcaption>
</figure>

我的结论很实际：如果一个 scientific agent 不能说明它如何从 search recall 走到 selected context，再走到 attribution，那么我们很难判断这个答案是真的可靠，还是只是 fluent。

## 我会先怎么测试

在信任任何 scientific RAG 系统之前，我会先做一个很小的 known-answer benchmark。

例如：

1. 选 20 个领域问题，每个问题都有已知 source papers。
2. 加入 near-miss papers，它们术语相近，但不能真正回答问题。
3. 要求系统带 citation 和 uncertainty 回答。
4. 评分 citation precision、answer correctness 和 caveat visibility。
5. 手工检查失败案例。

<figure class="article-figure">
  <img src="/images/blog/scientific-rag-eval-matrix.svg" alt="Scientific RAG 评估矩阵，覆盖 source coverage、citation precision、answer correctness、caveat visibility 和 trace replay。" loading="lazy" />
  <figcaption>
    SciencesLoop 概念评估矩阵。这是我认为在真实科研场景中信任 scientific RAG workflow 之前，至少应该检查的 surface。
  </figcaption>
</figure>

最有意思的失败通常不是夸张 hallucination，而是更安静的错误：

- 系统引用了相关论文，但引用的是错误 section
- 把两个不同实验条件下的 claim 合并了
- 漏掉 negative result
- 夸大了 benchmark 或论文真正说明的东西
- 给出合理答案，但 trace 不够，无法 audit

这些才是科研工作里真正危险的失败。

所以我不希望文章或产品把 scientific agents 包装成魔法。更合理的目标是：让 reasoning path 更容易检查，让 failure cases 更容易发现，让下一步 human decision 更有依据。

## SciencesLoop 的角度

对 SciencesLoop 来说，这强化了一个简单设计原则：

> Scientific agent 应该产出可审查的 work product，而不只是流畅回答。

这意味着产品界面应该包含 answer，但也应该包含 evidence trail、retrieval trace、source list、evaluation result 和 next-step recommendation。科学家应该能够问：“为什么 agent 会这么说？”然后不需要从聊天记忆里重跑一遍，就能得到有用答案。

实际方向是 evidence-first agent pattern：

```text
source corpus -> retrieval -> cited answer -> eval check -> review gate -> next action
```

这就是“听起来像科学的 assistant”和“能支持科研工作的 workflow”之间的区别。

短期产品含义很具体。SciencesLoop 的 agent 页面未来应该展示：

- answer
- cited sources
- retrieved chunks 或 source sections
- agent planned next step
- evaluation 或 smoke-test status
- 什么证据会改变结论

这个 surface 比更长的回答更有价值。它让读者检查 reasoning，而不是只消费 response。

## 我的当前判断

PaperQA2 值得关注，因为它指向了一个更好的 scientific AI work unit。这个 unit 不是 chat message，而是 reviewable research artifact。

这个 artifact 可以是 literature answer、candidate molecule shortlist、experiment plan、contradiction report，或者 reading map。模式类似：

1. 明确问题。
2. 从已知 corpus 收集证据。
3. 把证据转成 claims。
4. 给 claims 附上 citations。
5. 显示 uncertainty 或 conflict。
6. 提出下一步 action。
7. 留下可审查 trace。

这是我更感兴趣的 AI for Science：少一点表演，多一点 accountable workflow。

## 需要警惕什么

我不会把 repo popularity、benchmark language 或 “AI scientist” 叙事本身当作可靠性证据。它们只是值得调查的信号。

真正的问题更窄，也更有用：

系统能否回答一个已知科学问题，引用正确证据，暴露不确定性，并让下一步更容易检查？

这才是我在真正构建之前想先跑的小型、可重复测试。

来源：[Future-House/paper-qa](https://github.com/Future-House/paper-qa) 和 PaperQA2 的 [arXiv 论文](https://arxiv.org/abs/2409.13740)。源图来自 Skarlinski et al.，许可为 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)。本文中的 SciencesLoop 图是概念解释，不是论文源图。

## 结论

我的 takeaway 很简单：scientific RAG 的未来不是更漂亮的 answer box，而是一条科学家可以检查的 evidence trail。

如果一个 agent 能回答、引用、暴露不确定性，并展示从 question 到 evidence 再到 next action 的路径，它才开始接近有用的科研基础设施。如果不能展示这条路径，它大多还只是一个 fluent interface。

这是我希望 SciencesLoop 推向的标准。

## LinkedIn 中文草稿

今天看到一个值得关注的 AI for Science 模式：scientific RAG 不应该只给答案，而要留下 evidence trail。

Future House 的 PaperQA2 repo 和论文展示了一个面向科学文档问答的 RAG 系统。对我来说，重点不是“更好的搜索”，而是 workflow shape：

question -> retrieved evidence -> cited answer -> caveat -> human review -> next step

科研场景里，一个合理答案不够。输出需要可以检查：用了哪些来源，提取了哪些 claim，哪里还有 uncertainty，下一步应该查什么。

我的 SciencesLoop 角度：真正有用的单位不是 chat message，而是 reviewable research artifact。

我会先用 known-answer questions 测任何 scientific RAG 系统，评分 citation precision、answer correctness、caveat visibility，以及 retrieval trace 能不能 replay。

Source: https://github.com/Future-House/paper-qa  
Paper: https://arxiv.org/abs/2409.13740

如果是你的科研流程，什么样的 agent answer 才值得信任？
