---
title: "加入 EIS，能让电池衰减预警更准吗？"
description: "基于公开 KIT 电池老化数据的项目笔记：在完整工况留出验证中，比较容量历史模型与加入 EIS 后的同一模型。"
date: "2026-08-03"
lang: "zh"
status: "项目笔记"
featured: false
tags:
  - AI for Science
  - 电池健康
  - 电化学阻抗谱
  - 机器学习
  - 模型评估
---

**测一次容量，可以知道电池现在的健康状态。更难的问题是：这次检查已经拿到的信息，能不能帮助我们提前看见后面的衰减？**

我用公开的 KIT 电池老化数据做了一个完整的机器学习项目。在每次已经完成的电池检查点，模型预测它到未来第三次检查时还会损失多少个 SoH 百分点。然后我把同一个模型比较两次：第一次只用容量历史和老化工况，第二次再加入 EIS（电化学阻抗谱）特征。

结果不是一个整齐的“EIS 更好”。在一种重要组合里，加入 EIS 与更低的开发误差相关；但在另外一些组合里，它没有明显帮助，误差甚至更大。

这些结果可以在 [228 个电芯的交互式历史回放](/zh/agent/battery-early-warning/) 中查看。它是开发阶段的历史回放，不是实时电池监控系统。

## 数据是什么，模型预测什么

项目使用公开的 [KIT battery ageing result data](https://publikationen.bibliothek.kit.edu/1000169196) 和相应的 [data descriptor](https://doi.org/10.1038/s41597-024-03831-x)。数据包括 228 个 commercial NMC/C+SiO 电芯、76 种 operating conditions，每种条件有 3 个真实重复电芯。电芯在寿命过程中接受多次标准检查，结果包括容量、EIS 和 pulse measurements。这份源数据不是我创建的；这里是独立重建，也不是 KIT 官方研究。

数据里有三种不同的老化过程：

- **Calendar ageing：**电芯在某个电压或 SoC 附近静置；
- **Cyclic ageing：**电芯在受控条件下重复充放电；
- **Driving-profile ageing：**电芯承受由驾驶工况产生的动态负载。

我把三种模式分开训练和报告。静置天数、完整充放电循环和动态驾驶负载不是同一种 exposure，不能全塞进一个笼统的 cycle number。

对某个电芯在检查点 `t` 的状态，SoH 和预测目标定义为：

```text
SoH_t (%) = 100 × Capacity_t / Q0
H3 future loss = SoH_t − SoH_t+3
```

`H3` 是未来第三次**已经完成的检查**，不是固定三天、三周或三个循环。Ground truth 来自以后真实测到的容量。如果数据末端没有第三次未来检查，就标记为 unavailable，不能把 loss 填成 0。

完整 inventory 有 3,999 个容量 endpoint 和 3,993 个可用 EIS acquisition。要求历史信息充足、有匹配的 EIS，并且有准确 H3 结果以后，最终用于配对比较的是 180 个电芯的 2,919 个检查快照。这里的 2,919 是重复检查记录，不是 2,919 个独立电池。

## B 和 D_CORE 分别使用什么

实验比较两个输入视图：

```text
B
  容量 / SoH 历史
  + 最近的衰减趋势
  + 已经历的时间或使用量
  + 老化工况

D_CORE
  B 的全部信息
  + 当前检查点的 EIS 特征
```

`B` 不是一个故意做弱的 baseline。它固定使用 12 个输入，包括当前和过去的 SoH、最近的 signed loss、检查顺序、elapsed days、归一化 throughput、老化温度、充放电倍率和 profile 信息。

`D_CORE` 在 B 上加入当前检查点、室温、50% SoC 的 EIS 特征。缺失值会保留缺失标记，不会被悄悄当成物理上的 0。

为了尽量公平，B 和 D_CORE 使用相同的 snapshots、target、sample weights、held-out groups 和 model family。计划中的主要差别只有 EIS。这能减少几种常见的比较偏差，但它仍然是观察性的 development benchmark，不能证明 EIS 造成了性能变化。

## 数据怎样拆，才不会把同一个电池泄漏到两边

这套数据有明确的层级：

```text
operating condition
  → 3 个真实电芯
      → 多次 check-up
          → 一条 EIS spectrum
              → 很多 frequency rows
```

如果随机拆 frequency rows 或 check-ups，同一个电芯甚至同一种工况的信息就可能同时进入训练和验证，分数会虚高。我在每一种 ageing mode 内建立三个 outer folds，每次留出完整 operating conditions。同一条件的三个电芯及其全部检查记录始终在一起。

正式拟合的模型保持简单：

- **ElasticNet：**带 regularization 的线性回归；
- **HGB：**受约束的 histogram gradient-boosted tree 模型。

另外保留两个容易解释的 B-only 参照：假设未来 loss 为 0，以及把最近一次 loss 斜率延长三次检查。本轮没有 hyperparameter search、ensemble、根据结果筛变量，也没有选 champion。所有需要学习的 preprocessing 都只在每个 outer-training partition 内拟合。

固定计划完成了 54/54 fits，产生 23,352 条 out-of-fold predictions。GitHub CI 又在一台干净的新环境中重新安装和检查项目：294 个 tests 通过，1 个可选 test 跳过，Ruff lint 和 format checks 通过。CI 不会重新下载 69.4 GB 数据并训练；它检查的是别人 clone 项目以后，代码和 synthetic contracts 能否重复运行。

## 加入 EIS 后，结果发生了什么

Primary metric 是按 condition 等权的 MAE，单位是 SoH percentage points。先在每个 held-out condition 内计算误差，再让每个 condition 等权，避免检查次数多的条件控制总分。

配对差值统一定义为：

```text
delta = MAE(D_CORE) − MAE(B)
```

负数表示加入 EIS 后误差下降。下面的区间来自 2,000 次 whole-condition paired bootstrap。

| 老化模式 | 模型 | B MAE | D_CORE MAE | Delta MAE 和 95% 区间 | 大白话解释 |
| --- | --- | ---: | ---: | --- | --- |
| Calendar | ElasticNet | 0.209 | 0.260 | +0.051 [-0.020, +0.144] | 点估计变差，方向不明确 |
| Calendar | HGB | 0.139 | 0.138 | -0.001 [-0.013, +0.009] | 没有明显变化 |
| Cyclic | ElasticNet | 5.113 | 5.918 | +0.804 [+0.285, +1.361] | 变差信号 |
| Cyclic | HGB | 5.809 | 5.184 | -0.625 [-1.056, -0.241] | 改善信号 |
| Driving profile | ElasticNet | 4.791 | 4.461 | -0.330 [-1.208, +0.433] | 点估计改善，方向不明确 |
| Driving profile | HGB | 4.239 | 4.453 | +0.215 [+0.036, +0.384] | MAE 变差 |

最清楚的对比出现在 cyclic ageing。同样加入 EIS，HGB 的 MAE 降低了 0.625 个百分点，而 ElasticNet 的 MAE 增加了 0.804 个百分点。Calendar HGB 几乎没变。Driving profile 的结果互相矛盾，而且只有 11 个 eligible conditions，证据更弱。

因此，我现在只接受一个有限的结论：在这次 condition-held-out development comparison 中，EIS 的关联增量取决于 ageing process 和 model family。目前没有统一赢家，也不能说 EIS 在因果上提高了预测。

## 第一次训练失败，也应该留在项目记录里

第一次正式 paired run 在 54 个 fits 中完成 42 个后停止。失败发生在一个病态 D_CORE feature matrix 上的 ElasticNet 拟合。我没有从中间继续，也没有只报告已经完成的部分，而是把失败目录保持为不可修改的记录。

只读数据审查和另外一个 synthetic stress test 都支持同一个工程判断：旧的 iteration budget 不足。修复只把 ElasticNet 的最大 numerical iteration 次数从 5,000 提高到 250,000；regularization、features、folds、weights、target 和 metrics 都没有变化。之后用新的授权目录从头运行。

这对我来说是项目里很重要的一道伤疤。提高迭代上限只能说明 solver 最终收敛了，不能说明模型的泛化能力因此变好。

## 在线 Demo 能看什么

页面把保存下来的 development predictions 做成 fleet replay。你可以：

1. 查看全部 228 个电芯，并看到哪 180 个有配对预测；
2. 在 calendar、cyclic 和 driving profile 之间切换；
3. 沿着某一个电芯的历史 check-ups 前进；
4. 切换 ElasticNet / HGB，并并排比较 B 与 D_CORE；
5. 只有当预测在历史回放中“到期”以后，才打开真实 H3 结果；
6. 查看总体 error、paired delta、区间和数据缺失原因。

这个 Demo 不会在线重新训练模型，也不模拟未来电池物理过程。它展示的是经过 hash 绑定的、已经保存的 development OOF predictions。Final / protected-test 选项保持禁用，因为那一步还没有做。

## 现在还不能说什么

项目结果公开出来，是为了让人检查流程；但 run manifest 仍明确标记为 development-only。它没有 protected 或 external test，没有选定最终模型，也没有 publication 或 deployment approval。

它也没有预测：

- 突然故障或 thermal runaway；
- remaining useful life；
- 什么时候换电池；
- 生产告警阈值；
- 安全收益或成本节省。

如果以后要进入真实应用，需要先冻结模型、做 protected 或 external evaluation，再进行 prospective check-ups，定义决策阈值，并实际测量漏报、人工审查负担、提前量和维护结果。

我下一步最想做的 practical test 不是继续堆更复杂的模型，而是先解释：为什么 cyclic HGB 和 ElasticNet 在看到同一组 EIS 特征后，会朝相反方向变化。这个分析问题应该先冻结，再打开新的 outcome evidence。

可以直接试用 [电池衰减预警历史回放](/zh/agent/battery-early-warning/)，也可以查看 [公开 KIT 实现分支](https://github.com/rockyzl/battery-eis-soh-benchmark/tree/protocol/soh-target-v2)。
