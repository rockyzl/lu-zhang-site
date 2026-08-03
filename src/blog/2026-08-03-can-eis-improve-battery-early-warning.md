---
title: "Can EIS improve battery early warning?"
description: "A public KIT battery-ageing case study comparing capacity-history models with the same models after adding EIS, using condition-held-out development predictions."
date: "2026-08-03"
lang: "en"
status: "project note"
featured: false
tags:
  - AI for Science
  - battery health
  - electrochemical impedance spectroscopy
  - machine learning
  - model evaluation
---

**Measuring a battery's capacity tells me its health now. The harder question is whether the evidence available at this check-up says something useful about what comes next.**

I built a public-data benchmark around that question. At each completed battery check-up, the models predict how many state-of-health percentage points the cell will lose by its third subsequent completed check-up. I then compare the same model twice: first with capacity history and operating context, and again after adding electrochemical impedance spectroscopy (EIS) features.

The comparison produced a result I trust more than a tidy leaderboard: adding EIS was associated with lower development error in one important model-and-ageing combination, higher error in others, and little clear difference elsewhere.

You can inspect that behavior in the [interactive 228-cell replay](/agent/battery-early-warning/). It is a historical development replay, not a live battery monitor.

The source result data were published by Matthias Luh and Thomas Blank (2024) under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The interface uses transformed, derived replay data rather than presenting the source tables unchanged.

## The data and the prediction target

The project uses the public [KIT v2 processed result data](https://doi.org/10.35097/1969) and its [data descriptor](https://doi.org/10.1038/s41597-024-03831-x). The study contains 228 commercial NMC/C+SiO cells tested under 76 operating conditions, with three physical replicate cells per condition. Repeated diagnostic check-ups include capacity, EIS, and pulse measurements. I did not create this source dataset; this is an independent reconstruction and is not an official KIT study.

The cells age in three different ways:

- **Calendar ageing:** cells are stored near a set voltage or state of charge.
- **Cyclic ageing:** cells repeatedly charge and discharge under controlled conditions.
- **Driving-profile ageing:** cells experience a dynamic load derived from a driving profile.

I keep those modes separate. A calendar day, an equivalent full cycle, and a dynamic driving profile are different exposures. Mixing them into one generic cycle counter would hide that difference.

For a cell at check-up `t`, I define state of health from its measured capacity and frozen initial capacity:

```text
SoH_t (%) = 100 × Capacity_t / Q0
future loss at H3 = SoH_t − SoH_t+3
```

`H3` means the third subsequent completed check-up. It is not a fixed number of days or cycles. The ground truth comes from the later measured capacity. If a record has no third future check-up, I mark it unavailable instead of assigning zero loss.

The full inventory contains 3,999 capacity endpoints and 3,993 usable EIS acquisitions. After requiring enough history, a matched EIS view, and exact H3 truth, the paired comparison contains 2,919 snapshots from 180 cells. These are repeated check-ups, not 2,919 independent batteries.

## What B and D_CORE mean

The experiment compares two input views:

```text
B
  capacity/SoH history
  + recent loss trends
  + elapsed exposure
  + operating context

D_CORE
  all B inputs
  + current-check-up EIS features
```

`B` is deliberately a strong baseline. It contains 12 fixed inputs, including current and recent SoH, signed capacity-loss trends, check-up order, elapsed time, normalized throughput, ageing temperature, rates, and profile context.

`D_CORE` adds features derived from the current check-up's room-temperature, 50%-state-of-charge EIS spectrum. Missing values remain visible through missingness indicators; they are not silently treated as physical zeros.

For a fair comparison, B and D_CORE use the same eligible snapshots, target, sample weights, held-out groups, and model family. The only intended difference is the added EIS view. This controls several common sources of comparison bias, but it does not turn an observational benchmark into a causal experiment.

## Training without mixing related cells

The data hierarchy matters:

```text
operating condition
  → three physical cells
      → repeated check-ups
          → one EIS spectrum
              → many frequency rows
```

A random row split would let related measurements from the same cell or condition appear on both sides of validation. I instead use three outer folds within each ageing mode and hold out complete operating conditions. All three replicate cells and all their check-ups stay together.

The fitted candidates are intentionally modest:

- **ElasticNet**, a regularized linear regression model;
- **HGB**, a constrained histogram gradient-boosted tree model.

I also retain two transparent B-only references: predicting zero future loss and extending the most recent loss slope. There was no hyperparameter search, ensemble, outcome-driven variable selection, or champion selection in this run. Learned preprocessing was fitted only within each outer-training partition.

The fixed plan completed 54 of 54 fits and produced 23,352 out-of-fold prediction rows. GitHub CI then rebuilt the project in a clean environment: 294 tests passed, one optional test was skipped, and Ruff lint and format checks passed. CI does not rerun the 69.4 GB source-data training job; it checks the code and synthetic contracts needed for another person to clone and inspect the workflow.

## What happened when EIS was added

The primary error is condition-balanced mean absolute error (MAE), measured in SoH percentage points. Each operating condition receives equal weight. For each matched comparison:

```text
delta = MAE(D_CORE) − MAE(B)
```

A negative delta means lower error after adding EIS. The intervals below come from 2,000 paired bootstrap resamples of whole operating conditions.

| Ageing mode | Model | B MAE | D_CORE MAE | Delta MAE and 95% interval | My bounded read |
| --- | --- | ---: | ---: | --- | --- |
| Calendar | ElasticNet | 0.209 | 0.260 | +0.051 [-0.020, +0.144] | Point estimate worsened; direction is unclear |
| Calendar | HGB | 0.139 | 0.138 | -0.001 [-0.013, +0.009] | No clear change |
| Cyclic | ElasticNet | 5.113 | 5.918 | +0.804 [+0.285, +1.361] | Worsening signal |
| Cyclic | HGB | 5.809 | 5.184 | -0.625 [-1.056, -0.241] | Improvement signal |
| Driving profile | ElasticNet | 4.791 | 4.461 | -0.330 [-1.208, +0.433] | Point estimate improved; direction is unclear |
| Driving profile | HGB | 4.239 | 4.453 | +0.215 [+0.036, +0.384] | MAE worsened |

The cyclic result is the clearest contrast. The same EIS view lowered HGB's MAE by 0.625 percentage points, while it increased ElasticNet's MAE by 0.804 points. Calendar HGB was essentially unchanged. The driving-profile evidence is mixed and is supported by only 11 eligible conditions.

My conclusion is narrow: in this condition-held-out development comparison, the incremental association of EIS depends on both the ageing process and the model family. There is no universal winning model and no evidence here that EIS caused better predictions.

## The failed run was part of the evidence

The first governed paired run stopped after 42 of 54 fits. The failure occurred in an ElasticNet fit on an ill-conditioned D_CORE feature matrix. I kept that failed run immutable instead of resuming it or reporting the completed subset.

A read-only audit and a separate synthetic stress test supported convergence-budget exhaustion. The correction changed only ElasticNet's maximum numerical iteration budget, from 5,000 to 250,000. It did not change the regularization, features, folds, weights, targets, or metrics. A new authorized run then started from the beginning.

This matters to me because a benchmark is also a record of what failed. A larger iteration limit made the solver finish; it did not prove that the resulting model generalizes better.

## What the demo lets you inspect

The online interface turns the saved development predictions into a fleet replay. You can:

1. view all 228 cells and see which 180 have paired predictions;
2. switch among calendar, cyclic, and driving-profile ageing;
3. move through historical check-ups for one cell;
4. compare B and D_CORE with either ElasticNet or HGB;
5. reveal the measured H3 result only after that prediction has matured in the replay;
6. inspect aggregate errors, paired deltas, intervals, and missing-data reasons.

The replay does not call a model live or simulate future battery physics. It displays hash-bound, saved out-of-fold predictions from the completed development run. The final/protected-test option remains disabled because that evaluation has not happened.

## What this result does not establish

The result is public so the workflow can be inspected, but the underlying run remains explicitly marked as development-only. It has no protected or external test, no selected champion, and no publication or deployment approval.

It also does not predict:

- sudden failure or thermal runaway;
- remaining useful life;
- replacement timing;
- a production alarm threshold;
- safety or cost savings.

A future operational study would need a frozen model, external or protected evaluation, prospective check-ups, decision thresholds, and measurement of missed cases, review burden, lead time, and maintenance outcomes.

The practical test I would run next is not another broad model search. I would first explain why cyclic HGB and ElasticNet react in opposite directions when given the same EIS view, then freeze that analysis before opening any new outcome evidence.

Try the [interactive battery early-warning replay](/agent/battery-early-warning/) or inspect the [public KIT implementation branch](https://github.com/rockyzl/battery-eis-soh-benchmark/tree/protocol/soh-target-v2).
