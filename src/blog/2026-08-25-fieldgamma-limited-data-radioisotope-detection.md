---
title: "FieldGamma: what survives when a gamma spectrum shifts?"
description: "A governed synthetic benchmark of five limited-data radioisotope classifiers, ANSI N42 interoperability, and the negative result that validation accuracy concealed."
date: "2026-08-25"
lang: "en"
status: "project note"
featured: true
tags:
  - AI for Science
  - radioisotope identification
  - limited-data machine learning
  - test and evaluation
  - ANSI N42
---

**A model can look excellent on familiar spectra and still be useless when the count rate, background, calibration, and resolution move together. FieldGamma is my attempt to make that failure visible before calling a prototype “deployed.”**

I built FieldGamma as an independent radioisotope-classification and sensor-integration test bench. It combines a frozen limited-data benchmark, prediction-level audit artifacts, an independent R cross-check, ANSI N42 ingestion, deterministic sensor replay, FastAPI inference, monitoring, and failure tests.

The public result is deliberately bounded. The classifier benchmark uses **synthetic spectra** generated with [Sandia PyRIID](https://github.com/sandialabs/pyriid) from public GADRAS-derived Falcon 5000 seed signatures in the [Sandia BALDR study](https://github.com/sandialabs/BALDR-Study-07.04). A public N42 file is used to test parser and replay interoperability, not measured classifier performance. I have not connected FieldGamma to physical detector hardware or operated it in a laboratory or field setting.

You can [inspect the frozen result interactively](/agent/fieldgamma/) or [review the complete repository](https://github.com/rockyzl/fieldgamma).

![FieldGamma result: validation macro-F1 near 0.96 did not survive the frozen compound shift, and the model that retained the most shifted classifications produced an 87 percent background false-alarm rate.](/images/blog/fieldgamma-shift-gap.svg)

## The question I froze before running the test

The benchmark asks one narrow question:

> As the labeled training budget moves from 1 to 5, 10, and 25 synthetic spectra per isotope, how do five classifiers behave on independent in-envelope data and on a fixed combination of lower counts, stronger background, calibration drift, and resolution degradation?

The known-class set contains six isotopes selected from the public seed library. Three different isotopes are held out as out-of-distribution (OOD) sources. Each of three random seeds creates disjoint training, validation, in-distribution test, compound-shift test, background-only, and OOD partitions.

The compound shift is intentionally difficult:

- acquisition time drops from the 20–60 second training range to 3–12 seconds;
- source-to-background ratio drops into a 1–12 range;
- background count rate rises from 50 to 85 counts per second;
- calibration shifts by 1.2%;
- Gaussian blur degrades resolution by 1.25 rebinned channels.

These factors arrive together. That means v1 is a stress test, not a causal diagnosis of which shift component is responsible. A future study should pre-register a factorial ablation before opening new outcomes.

## Five models, one validation-only threshold rule

I compared:

- a spectrum-shape Poisson template;
- L1-normalized logistic regression;
- random forest;
- XGBoost;
- a small 1D convolutional neural network.

Every model returns probabilities across the six known isotopes. A fixed threshold grid determines when the model must abstain and return `__unknown__`. That threshold is selected using known validation spectra and validation background only. Protected-test labels are consumed only after the candidate and threshold are fixed.

The formal run completed 60 pre-registered fits: five models × four budgets × three seeds. It took 76.1 seconds and peaked at 1.20 GiB RSS. The run directory records its command, clean Git commit, protocol hash, input hashes, telemetry, prediction-level output, selected model artifact, and an artifact inventory.

## The validation winner failed the shift test

At 25 labeled spectra per isotope, the three strongest validation models were almost tied:

| Model | Validation macro-F1 | Compound-shift macro-F1 | Background false-alarm rate | OOD unknown rejection |
| --- | ---: | ---: | ---: | ---: |
| Random forest | 0.961 | 0.015 | 0.067 | 0.919 |
| XGBoost | 0.961 | 0.096 | 0.263 | 0.281 |
| Poisson template | 0.956 | 0.118 | 0.870 | 0.131 |

The frozen validation rule selected random forest. It looks attractive if I report only validation macro-F1 and OOD rejection. Under the compound shift, however, its mean macro-F1 fell to 0.015—a 98.4% relative loss. It produced a known-isotope decision on only about 7% of shifted synthetic spectra.

That abstention kept its background false-alarm rate near 6.7%. But a detector that rarely alarms under the target condition may be quiet without being useful.

The Poisson template shows the opposite failure. It retained decisions on roughly 91% of shifted spectra and reached the best shifted macro-F1 in the candidate set, 0.118. Yet it also alarmed on 87% of background-only spectra. Sensitivity without background discrimination is not an operational win.

XGBoost sat between those two extremes: more shifted classifications than random forest, but a 26.3% background false-alarm rate and weak OOD rejection. The result is not a champion leaderboard. It is a map of unacceptable trade-offs.

The logistic and 1D-CNN candidates largely abstained under their validation-selected thresholds. I left them in the result as negative controls. Once the protected test was open, I did not alter their architecture, normalization, or threshold grid to make the table look better.

## R recomputed the result instead of trusting the Python summary

The Python runner exported 96,000 prediction rows. An independent R script read those rows and recomputed in-distribution macro-F1, shifted macro-F1, background false-alarm rate, and OOD unknown rejection for all 60 candidates.

The largest Python/R absolute difference was `1.11 × 10⁻¹⁶`. R also produced 500-resample descriptive bootstrap intervals within seed and isotope strata, plus an exact Poisson comparison of gross shifted-source and background-only count rates.

Those intervals describe the generated synthetic spectra. They do not include uncertainty from detector construction, shielding, source geometry, calibration procedures, environmental backgrounds, or field operation.

## The N42 lane tests software integration, not the classifier

Radiation instruments commonly exchange spectra in ANSI/IEEE N42 formats. FieldGamma includes a tolerant N42 parser for channel counts, counted-zero compression, ISO duration fields, polynomial energy calibration, and deviation pairs.

I cross-checked it against [Sandia SpecUtils](https://github.com/sandialabs/SpecUtils) on a public Mn-56 N42 fixture. Both implementations produced:

- 16,384 channels;
- 698,514 total counts;
- 1,800 seconds live time;
- calibrated energy edges agreeing within 0.0003 keV.

That is useful interoperability evidence on one public fixture. It is not evidence that the trained classifier recognizes measured Mn-56—the fixture is not part of classifier validation.

The released random-forest artifact can be loaded by the FastAPI service. The service exposes health, prediction, N42 inspection, replay, and telemetry endpoints. Replay converts one spectrum into deterministic one-second count frames and accumulates them before each decision. Tests cover negative and nonfinite counts, wrong channel dimensions, malformed XML, deterministic replay, monotonic cumulative counts, and the exact released-model package layout.

## What I would require before calling this a detector project

FieldGamma closes three portfolio gaps honestly: it demonstrates limited-data ML, statistical T&E, and a sensor-data software boundary. It does **not** create nuclear-physics or field-deployment experience that I do not have.

The next credible phase would require:

1. a pre-registered shift-ablation study to separate low-count, background, calibration, and resolution effects;
2. controlled measured spectra from a documented detector and source geometry;
3. detector-specific calibration, drift monitoring, and background collection;
4. laboratory hardware integration with domain-expert and radiation-safety review;
5. acceptance criteria based on probability of detection, false alarms, time to detect, and review burden—not accuracy alone.

Until then, the most important output is the failure itself: a 0.96 validation score did not survive the frozen shift, and every apparent recovery came with another operational cost.

FieldGamma is an independent project. Sandia National Laboratories, the U.S. Department of Energy, NIST, and the upstream authors do not sponsor or endorse it.

[Try the interactive result explorer](/agent/fieldgamma/) or [inspect the code, protocol, model card, and result manifests](https://github.com/rockyzl/fieldgamma).
