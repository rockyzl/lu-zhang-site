---
title: "FieldGamma：伽马能谱一旦偏移，0.96 的分数还剩多少？"
description: "五类有限数据放射性同位素分类器的受治理合成基准、ANSI N42 互操作性，以及 validation accuracy 掩盖的负面结果。"
date: "2026-08-25"
lang: "zh"
status: "项目笔记"
featured: true
tags:
  - AI for Science
  - 放射性同位素识别
  - 有限数据机器学习
  - 测试与评估
  - ANSI N42
---

**如果只看熟悉数据上的分数，三个模型都接近 0.96；把低计数、高背景、校准漂移和分辨率退化一起加进来以后，最好的 shifted macro-F1 只剩 0.118，而且对应 87% 的纯背景误报。**

这就是我做 FieldGamma 的原因。它不是一个“训练模型、展示 accuracy”的 notebook，而是一套从有限数据实验、预测级审计、R 统计复算，到 ANSI N42 文件解析、传感器回放、FastAPI 和失败测试的完整 T&E 原型。

边界必须先说清楚。训练和评测使用的是**合成伽马能谱**：我用 [Sandia PyRIID](https://github.com/sandialabs/pyriid) 读取 [Sandia BALDR study](https://github.com/sandialabs/BALDR-Study-07.04) 公开的 GADRAS 派生 Falcon 5000 seed signatures，再按冻结协议生成数据。公开 N42 文件只用于 parser 和 replay 互操作检查，不用于证明分类器在实测数据上有效。项目没有接入真实探测器，也没有做 laboratory 或 field deployment。

可以先打开 [交互式结果页](/zh/agent/fieldgamma/)，也可以直接看 [完整 GitHub 仓库](https://github.com/rockyzl/fieldgamma)。

![FieldGamma 结果：在每种同位素 25 条合成标注光谱时，三个模型的 validation macro-F1 都在 0.96 左右，但 compound-shift F1 降到 0.015、0.096 和 0.118；对应的纯背景误报率分别为 6.7%、26.3% 和 87%。](/images/blog/fieldgamma-shift-gap.svg)

## 我先冻结的问题

这个项目只问一个具体问题：

> 当每种同位素只有 1、5、10、25 条标注合成能谱时，五类分类器在独立同分布数据和固定复合偏移下分别怎么变化？

已知类别来自公开 seed library 中的六种同位素，另外三种同位素完全不进入训练，专门作为 OOD。三个 random seeds 分别生成互不重叠的 training、validation、in-distribution test、compound-shift test、background-only 和 OOD 数据。

复合偏移故意设得很难：

- acquisition time 从训练时的 20–60 秒降到 3–12 秒；
- source-to-background ratio 降到 1–12；
- background rate 从 50 提高到 85 counts/s；
- channel calibration 漂移 1.2%；
- 用 1.25 个 rebinned channels 的 Gaussian blur 模拟分辨率退化。

这四种变化是一起出现的。因此 v1 能回答“模型在组合压力下会不会坏”，但不能回答到底是哪一个因素造成主要损失。下一轮如果要拆原因，应该先冻结 factorial ablation，再打开新结果。

## 同一个 abstain 规则，放到四条测试通道里

我比较了 Poisson spectrum template、L1-normalized logistic regression、Random Forest、XGBoost 和一个小型 1D CNN。

每个模型都输出六种已知同位素的概率。然后在固定 threshold grid 中选择一个 abstain 阈值：低于阈值就输出 `__unknown__`。这个阈值只能看 known validation 和 validation background，不能看 protected test。

正式 run 一共完成 60 个预注册 fits：5 个模型 × 4 个数据预算 × 3 个 seeds。运行时间 76.1 秒，峰值内存 1.20 GiB。start manifest 记录了干净 Git commit、protocol hash、所有输入文件 SHA-256 和完整命令；终止后又生成 prediction-level output、telemetry、selected artifact 和 artifact inventory。

## Validation 赢家在偏移测试里几乎不再工作

每种同位素 25 条标注光谱时，最强的三类模型结果如下：

| 模型 | Validation macro-F1 | Compound-shift macro-F1 | 纯背景误报率 | OOD 未知拒绝率 |
| --- | ---: | ---: | ---: | ---: |
| Random Forest | 0.961 | 0.015 | 0.067 | 0.919 |
| XGBoost | 0.961 | 0.096 | 0.263 | 0.281 |
| Poisson template | 0.956 | 0.118 | 0.870 | 0.131 |

按冻结的 validation selection rule，Random Forest 被选中。只看 validation F1 和 OOD rejection，它很漂亮。但进入 compound shift 后，macro-F1 只剩 0.015，相对下降 98.4%；它只对大约 7% 的 shifted spectra 给出已知同位素判断，其余基本都 abstain。

因此它的背景误报率只有 6.7%，但“很少误报”不能单独证明系统可用。一个几乎不触发的 alarm 可以很安静，也可以毫无检出价值。

Poisson template 是相反的失败。它对约 91% 的 shifted spectra 给出判断，shifted F1 也是候选中最高的 0.118；但它同时对 87% 的纯背景报警。Sensitivity 不能脱离 false alarm 单独庆祝。

XGBoost 处在中间：shifted F1 比 Random Forest 高，但背景误报升到 26.3%，OOD rejection 只有 28.1%。这三类模型构成的不是一个排行榜，而是一张不可接受取舍的地图。

Logistic regression 和小型 1D CNN 在 validation-selected 阈值下大部分 abstain。我把它们作为 negative controls 留在正式结果中。Protected test 打开以后，没有再为了好看去改 architecture、normalization 或 threshold grid。

## R 从 96,000 条预测重新算，而不是相信 Python 汇总

Python runner 导出了 96,000 条 prediction rows。独立 R 脚本从这些行重新计算全部 60 个候选的 in-distribution F1、shifted F1、background false-alarm rate 和 OOD unknown rejection。

Python 与 R 的最大绝对差是 `1.11 × 10⁻¹⁶`。R 还在 seed 与 true-isotope strata 内做了 500 次 descriptive bootstrap，并用 exact Poisson test 检查 gross shifted-source 与 background-only 的 counts/exposure 处理。

这些区间只描述当前 synthetic generator 产生的样本。它没有包含真实 detector、shielding、source geometry、calibration procedure、环境背景和现场操作造成的不确定性。

## N42 是软件接口证据，不是分类器证据

很多辐射探测设备使用 ANSI/IEEE N42 格式交换能谱。FieldGamma parser 处理 channel counts、counted-zero compression、ISO duration、polynomial energy calibration 和 deviation pairs。

我用同一份公开 Mn-56 N42 fixture，与 [Sandia SpecUtils](https://github.com/sandialabs/SpecUtils) 做交叉检查：

- 16,384 个 channels 完全一致；
- 698,514 total counts 完全一致；
- 1,800 秒 live time 完全一致；
- energy edges 差异不超过 0.0003 keV。

这证明 parser 在一份公开文件上的互操作性。它不证明模型能识别实测 Mn-56，因为这份文件没有进入 classifier validation。

发布的 Random Forest artifact 可以直接由 FastAPI 加载。API 提供 health、prediction、N42 inspect、replay 和 telemetry endpoints。Replay 把一条完整 spectrum 按一秒一帧重新采样，再让累计 counts 进入同一个模型。测试覆盖 negative/nonfinite counts、错误 channel 数、malformed XML、确定性 replay、累计计数单调性，以及正式发布模型的加载路径。

## 这个项目补了什么，仍然没补什么

FieldGamma 能诚实证明三件事：我可以做 limited-data ML、把统计测试做成可审计流程、并把算法接到标准化 sensor-data software boundary。

它不能把我没有的经历变出来。它不等于多年 nuclear physics 经验，不等于真实 gamma detector integration，也不等于 field deployment。

下一步要真正进入 detector work，至少需要：

1. 预注册 shift ablation，分开测 low count、background、calibration 和 resolution；
2. 使用有 detector 与 source geometry 记录的 measured spectra；
3. 做 detector-specific calibration、drift monitoring 和 background collection；
4. 在 domain expert 与 radiation-safety review 下完成 laboratory hardware integration；
5. 用 probability of detection、false alarms、time to detect 和人工审查负担定义 acceptance criteria，而不是只看 accuracy。

在那之前，我认为最值得公开的就是这次失败：0.96 的 validation score 没有穿过冻结偏移；每一种看似恢复的办法，又带来了新的 operational cost。

FieldGamma 是我的独立项目。Sandia National Laboratories、美国能源部、NIST 与上游作者没有赞助或背书本项目。

[打开交互式结果页](/zh/agent/fieldgamma/)，或 [检查代码、protocol、model card 和 manifests](https://github.com/rockyzl/fieldgamma)。
