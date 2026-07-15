---
title: "一个氧化还原预测器，先要有结构确认点"
description: "SciencesLoop Redox RFB Predictor 项目笔记：为什么化学名称、可编辑结构和人工确认必须排在电化学预测之前。"
date: "2026-07-15"
lang: "zh"
status: "project note"
featured: false
tags:
  - AI for Science
  - molecular machine learning
  - flow batteries
  - molecular identity
  - scientific workflow
---

**分子名称还不是模型输入；它只是一次“请识别这个分子”的请求。**

我做了一个 [SciencesLoop Redox RFB Predictor](/zh/agent/redox-rfb-predictor/)，
根据有机分子的结构估计它的水系氧化还原电位。第一版只接收 SMILES。从模型角度这已经够了，但从科研工作流角度还不够。

大多数人一开始拿到的是名称：TEMPO、p-benzoquinone、anthraquinone，或者论文里的简称。名称可能拼错、可能有歧义，也可能没有说明电荷态或自由基态。如果系统悄悄把名称换成一个结构，模型就可能为错误分子给出一个看起来很干净的数字。

我想把这个失败点直接放到界面上。

<figure class="article-figure">
  <img src="/images/blog/redox-structure-checkpoint.svg" alt="从化学名称或 SMILES，到名称选项、可编辑 RDKit 结构、用户确认和氧化还原电位预测的流程图。" width="1200" height="500" loading="lazy" />
  <figcaption>SciencesLoop 概念图。只有当分子结构可见、可编辑、并被用户明确确认后，系统才会调用预测器。</figcaption>
</figure>

## 这个在线 Demo 怎样工作

现在页面把流程拆成四步：

1. 输入 SMILES 或化学名称。
2. 如果输入的是名称，先看可能的标准名称选项，再进入结构。
3. 查看 RDKit 绘制的二维结构和 canonical SMILES。用户可以直接改 SMILES、重新绘图，或者让结构助手提出最多三个编辑候选。
4. 选定并确认一个结构后，才请求电位预测。

名称查找优先使用 [PubChem PUG-REST](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest)。这是一个刻意的选择。LLM 可以帮助处理拼写问题，或者提出用户要求的结构修改；但它不应该成为化学身份的默认来源。当 PubChem 找不到匹配时，LLM 才可以给出带标签的候选结构。每个候选都会先由 RDKit 解析和绘制，才会显示给用户。

最终身份检查仍然由用户完成。RDKit 可以检查一个 SMILES 能否被解析并画出它，但不能判断这个合法的 SMILES 是否就是用户原本想表达的分子。

## 一个具体例子：TEMPO

`TEMPO` 是一个很好的压力测试，因为它是 nitroxide radical，电荷态和自由基态都很重要。Demo 中输入 `tempo` 后，系统会先显示可能的名称选项。选择 `TEMPO` 后，会从 PubChem 取得结构，再由 RDKit 标准化为：

```text
CC1(C)CCCC(C)(C)N1[O]
```

用户先看到这个结构，之后才能预测。用户也可以要求结构助手给出 oxoammonium form，检查返回的候选，再选择或继续编辑 SMILES。

这一步不会让预测数值自动变成实验上可信的结论。它只保证进入模型的结构是可检查的。

TEMPO 还说明了另一个边界：当前模型主要在 RedDB 的 quinone 和 aza-aromatic 化学空间中训练。TEMPO 这类自由基即使结构解析正确，对模型来说仍属于外推。

## 到底是什么模型在预测

在线路径使用的是一个固定、快速的模型：

```text
确认后的 canonical SMILES
  → 26 个 RDKit descriptors + 1024 位 Morgan fingerprint
  → 300 棵树的 Random Forest
  → 估计水系氧化还原电位，V vs SHE
```

标签来自 RedDB 的 DFT 派生水系氧化还原电位尺度，不是实验测量值。RedDB 是面向液流电池电活性分子的计算数据库；相关数据论文为 [Sengul et al., *Scientific Data* (2022)](https://doi.org/10.1038/s41597-022-01832-2)。

LLM 不在这条预测链中。它只在 PubChem 不能解析名称、或用户请求结构编辑时提供受限制的辅助。它不预测电位、不现场运行 DFT，也不取代对屏幕上分子结构的检查。

## 我的看法

这个 Demo 有价值的地方不是加了一个聊天框，而是加了一个确认点。

对 molecular machine learning 来说，用户应该能看见这条链：

```text
用户输入的名称 → 选择的身份 → 展示的结构 → 确认后的模型输入 → 预测
```

否则，一个看似合理的预测结果可能掩盖最基础的问题：送进模型的根本不是那个分子。

下一步我想加的是更明确的适用域警告。现在页面已经说明，远离 quinone 和 aza-aromatic 训练域的分子属于外推；我希望把它做成一个基于结构的可见信号，再让用户把结果用于筛选判断。

可以直接试用 [在线 Redox RFB Predictor](/zh/agent/redox-rfb-predictor/)。完整实现、API 和运行规则见 [公开仓库](https://github.com/rockyzl/redox-rfb-predictor)。
