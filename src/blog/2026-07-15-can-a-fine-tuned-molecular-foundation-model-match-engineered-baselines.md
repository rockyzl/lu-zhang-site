---
title: "Can a fine-tuned molecular foundation model match engineered traditional models?"
description: "An independent QM9 case study comparing a released fine-tuned MIST checkpoint with Ridge, XGBoost, MLP, and two carefully separated ensembles."
date: "2026-07-15"
lang: "en"
status: "case study"
featured: true
tags:
  - AI for Science
  - molecular foundation models
  - transfer learning
  - QM9
  - model evaluation
---

**A molecular foundation model is attractive because one learned representation may be adapted to many prediction tasks. The practical question is whether that reuse can match a traditional model engineered for one dataset.**

I tested that question with MIST and QM9. The released predictor belongs to the MIST-28M family and its repository name reports approximately 26.9 million parameters. The comparison began simply, with an ECFP fingerprint and Ridge regression. That first result was weak. Better fingerprints, molecular descriptors, nonlinear models, hyperparameter search, and an ensemble were all needed before the traditional route became competitive. This iteration is the most useful part of the story: model comparison is also systems engineering.

The attribution is important. The University of Michigan Electrochemical Energy Group developed, pretrained, fine-tuned, and released MIST. I independently designed and implemented this benchmark, trained the Ridge, XGBoost, and MLP comparators, evaluated the saved predictions, and analyzed the results. This is not an official MIST study and I did not train the released MIST checkpoint.

## The question and the data

[QM9](https://doi.org/10.1038/sdata.2014.22) contains computed quantum-chemical properties for 133,885 small organic molecules. I used all 12 targets exposed by the reconstructed public MIST workflow: dipole moment, polarizability, HOMO, LUMO, HOMO-LUMO gap, electronic spatial extent, zero-point vibrational energy, internal energies at 0 K and 298 K, enthalpy, free energy, and heat capacity. These are density-functional-theory calculations, not experimental battery measurements.

The candidate split reconstructed from pinned public MIST code had 107,108 training rows, 13,388 validation rows, and 13,389 test rows. A sensitivity check removed exact test duplicates and retained 13,370 rows. Feature and hyperparameter decisions used training and validation labels. Test labels were read after the original selection manifest was frozen.

The score is mean normalized MAE: for each property, MAE is divided by that target's training-set standard deviation, then the 12 values are averaged. Lower is better. This makes differently scaled targets comparable, while preserving the individual target results for inspection.

## What the traditional pipeline required

The first locked baseline used 2,048 binary ECFP4 bits with Ridge. ECFP encodes whether local molecular substructures occur; it is a computable structural representation, not a list of measured properties. That baseline reached 0.36969 on validation.

The next iteration counted substructure occurrences rather than recording only presence or absence. Count ECFP reduced validation error to 0.23329. I then added 17 global descriptors: molecular weight, atom, bond and ring counts, rotatable bonds, hydrogen-bond donors and acceptors, TPSA, LogP, fraction sp3, formal charge, C/N/O/F counts, and aromatic-atom count. Count ECFP plus those descriptors produced a 2,065-dimensional representation and reduced Ridge validation error to 0.15130.

Linear regression had reached its useful limit, so I compared five XGBoost configurations and five MLP configurations. XGBoost used validation-based early stopping; the MLP used validation loss and patience. The best XGBoost configuration scored 0.09403 on validation, and the best MLP scored 0.10124. The full feature-screening, tuning, fitting, prediction, and reporting run took 2,183 seconds, or 36.4 minutes, on an NVIDIA RTX PRO 2000 Blackwell Generation Laptop GPU.

The direct lesson was that the first reasonable baseline was nowhere near the final result. The gain did not come from one clever parameter. It came from several controlled iterations, saved artifacts, validation-only choices, and a final blend.

## Layer 1: compare the routes independently

The clean scientific comparison keeps the fine-tuned model outside the traditional comparator. A traditional-only ensemble combined the engineered Ridge, XGBoost, and MLP validation predictions with nonnegative weights. Validation selected 59.02% XGBoost, 40.98% MLP, and approximately 0% Ridge.

On the common test set, the mean normalized MAE values were:

- traditional-only ensemble: **0.08740**;
- XGBoost: **0.09434**;
- released fine-tuned MIST: **0.09506**;
- MLP: **0.10036**;
- engineered Ridge: **0.14984**.

The original locked binary-ECFP Ridge scored 0.37005 on test, which shows how much the traditional pipeline changed during development. XGBoost and MIST differed by only 0.00073 in this single point estimate. I read that as near parity, not a decisive XGBoost win.

<figure class="article-figure">
  <img src="/images/blog/mist-transfer-two-layer-result.svg" alt="Two-layer benchmark chart showing the traditional-only comparison separately from the supplemental all-model ensemble." width="1200" height="720" loading="lazy" />
  <figcaption>
    Original SciencesLoop result diagram based on the saved benchmark artifacts. It separates the primary comparison from the supplemental ensemble. It shows point estimates on one reconstructed split; it does not prove that pretraining caused the observed performance or establish uncertainty across new splits.
  </figcaption>
</figure>

Across the 12 properties, there was no single winner with the same advantage everywhere. MIST was lower than the traditional ensemble for dipole moment, HOMO, and HOMO-LUMO gap. The traditional ensemble was lower for the other nine targets, although some gaps were small. Against XGBoost alone, MIST was lower on heat capacity, HOMO, LUMO, gap, and dipole moment. This pattern is more informative than one overall rank: the model families make different errors.

## A precise reporting correction

The first report placed an all-model blend at the top. That was a valid engineering result, but it mixed MIST into the comparator and blurred the research question. I corrected the primary view after seeing the first test report so that the traditional ensemble excludes MIST.

This correction is explicitly **post-specified**. Its weights were still selected from validation predictions only; test labels did not select the new weights. Even so, the reporting decision itself happened after the initial test result was known. I therefore treat 0.08740 as a transparent exploratory estimate rather than a pristine preregistered primary result.

That distinction matters. A benchmark should record when a decision was made, as well as which data selected it.

## Layer 2: combine all model families

After the independent comparison, a second systems question is reasonable: do the two routes contain complementary information?

The validation-selected all-model ensemble used 39.32% MIST, 32.72% MLP, 27.96% XGBoost, and 0% Ridge. It reached **0.08116**, a 7.1% reduction from the traditional-only ensemble. This is a useful supplemental result. It suggests complementary prediction errors, but it cannot replace the independent MIST-versus-traditional comparison.

Layer 1 asks whether the released fine-tuned model can match optimized task-specific single models: on this split, MIST and XGBoost are close. Layer 2 asks whether combining model families helps: on this split, it does.

## What can fail in this comparison

Several boundaries remain.

- The result uses one candidate random split. Similar molecules can make a random split easier than a scaffold-held-out test.
- The released MIST checkpoint was already fine-tuned on QM9. This experiment cannot isolate how much came from pretraining, the fine-tuning recipe, model capacity, or data exposure.
- The 12 labels are computed quantum-chemistry targets. Performance here does not establish transfer to experimental electrolyte properties.
- The MLP run emitted a CUDA/cuBLAS bitwise-determinism warning. Saved predictions are auditable, but exact bitwise reruns may vary.
- Model selection across many configurations can overfit validation, even when test labels remain closed.
- A mean across 12 targets can hide property-specific failures, which is why the per-target table and predictions remain part of the record.

These limits are reasons to design the next experiment carefully, not reasons to discard the current result.

## What the new paper protocol changes

I have implemented a paper-oriented evaluation protocol with five predetermined seeds, grouped-random and Bemis-Murcko scaffold splits, duplicate-safe grouping, paired bootstrap 95% confidence intervals, per-target statistics, similarity strata, and training, inference, memory, and artifact records. It freezes every traditional-model and ensemble decision before opening test metrics.

That protocol currently provides infrastructure and smoke-test evidence. It does **not** yet provide a new five-seed MIST result. The released QM9-fine-tuned checkpoint is deliberately forbidden on the new splits because its prior QM9 exposure would break the intended training boundary.

The next controlled test needs a MIST base checkpoint whose provenance shows no use of the new split labels. I would first freeze the encoder and train only a regression head. Then I would compare that with LoRA plus a task head under the same splits and budgets. Those two arms would begin to separate representation reuse from task-specific parameter updates. Only after that run could I make a stronger statement about the value of fine-tuning.

## My conclusion

The concise result is that a released fine-tuned molecular foundation model matched a heavily tuned task-specific single model on this QM9 split. The traditional route achieved a better score only after feature engineering, ten nonlinear-model configurations, and an ensemble. Combining MIST with the traditional models improved the systems result again.

I find the near parity more interesting than declaring a winner. MIST offers a reusable modeling route; the traditional pipeline shows what careful task-specific engineering can still achieve. The next study should measure whether that relationship holds across seeds, molecular scaffolds, and controlled frozen-head and LoRA training.

Primary resources: [MIST paper](https://arxiv.org/abs/2510.18900), [official MIST repository](https://github.com/BattModels/mist), [official fine-tuning notebooks](https://github.com/BattModels/mist-demo), [released QM9 checkpoint](https://huggingface.co/mist-models/mist-26.9M-kkgx0omx-qm9), and [QM9 data paper](https://doi.org/10.1038/sdata.2014.22).

Independent artifacts: [benchmark repository](https://github.com/rockyzl/mist-transfer-benchmark), [version-pinned result report](https://github.com/rockyzl/mist-transfer-benchmark/blob/e4dbc3f04853e3cdc82d2f45ef1b83367b0705fd/docs/qm9_extended_comparison_v1.md), [aggregate-results explorer](https://rockyzl.github.io/mist-transfer-benchmark/), and the [saved-result molecular prediction demo](/agent/molecular-property-predictor/).
