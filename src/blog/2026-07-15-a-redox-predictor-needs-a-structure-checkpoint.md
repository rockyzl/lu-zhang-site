---
title: "A redox predictor needs a structure checkpoint"
description: "A project note on the SciencesLoop Redox RFB Predictor: why name resolution, editable structures, and explicit confirmation come before an electrochemical prediction."
date: "2026-07-15"
lang: "en"
status: "project note"
featured: true
tags:
  - AI for Science
  - molecular machine learning
  - flow batteries
  - molecular identity
  - scientific workflow
---

**A molecule name is not yet a model input. It is a request to identify a
molecule.**

I built the [SciencesLoop Redox RFB Predictor](/agent/redox-rfb-predictor/) to
estimate an organic molecule's aqueous redox potential from its structure. The
first version accepted a SMILES string. That was technically enough for the
model, but it was not enough for a useful scientific interface.

Most people do not begin with canonical SMILES. They begin with a name: TEMPO,
p-benzoquinone, anthraquinone, or a shorthand from a paper. A name can be
misspelled, ambiguous, or refer to a different charge or radical state. If the
system silently turns that name into a structure, the model may return a clean
number for the wrong molecule.

That is the failure mode I wanted to make visible.

<figure class="article-figure">
  <img src="/images/blog/redox-structure-checkpoint.svg" alt="Workflow diagram from chemical name or SMILES to name options, editable RDKit structure, user confirmation, and redox-potential prediction." width="1200" height="500" loading="lazy" />
  <figcaption>Conceptual SciencesLoop diagram. The prediction happens only after the molecular structure is visible, editable, and explicitly confirmed.</figcaption>
</figure>

## The live workflow

The demo now has four separate steps:

1. Enter a SMILES string or a chemical name.
2. If it is a name, inspect possible standardized name matches before seeing a
   structure.
3. Inspect the RDKit-rendered 2D structure and canonical SMILES. Edit the
   SMILES directly, redraw it, or ask the structure assistant for up to three
   proposed edits.
4. Confirm one structure, then request the potential prediction.

For name lookup, the service uses [PubChem PUG-REST](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest)
first. This is important. An LLM can be useful for a typo or a requested
structure change, but it should not be the default authority for a chemical
identity. When PubChem has no match, the LLM may propose labeled candidates;
each candidate is then parsed and drawn by RDKit before it is shown.

The user still makes the final identity check. RDKit can tell us whether a
SMILES parses and can render it. It cannot tell us whether that valid SMILES is
the molecule the user meant.

## A concrete example: TEMPO

`TEMPO` is a good stress test because it is a nitroxide radical and the charge
or radical state matters. In the demo, entering `tempo` first shows possible
name matches. Selecting `TEMPO` retrieves the PubChem structure, which is then
canonicalized by RDKit as:

```text
CC1(C)CCCC(C)(C)N1[O]
```

The user sees that structure before prediction. They can also ask the structure
assistant for the oxoammonium form, inspect the returned candidate, and either
select it or edit its SMILES. This does not make the resulting electrochemical
number experimentally trustworthy. It only makes the structure passed to the
model inspectable.

That distinction matters here because the current model was trained mainly on
RedDB quinones and aza-aromatics. TEMPO-like radicals sit outside its main
training chemistry. A correctly resolved input can still be an extrapolation.

## What actually predicts the number

The live prediction model is deliberately simple and fixed:

```text
confirmed canonical SMILES
  → 26 RDKit descriptors + 1,024-bit Morgan fingerprint
  → Random Forest with 300 trees
  → estimated aqueous redox potential, V vs SHE
```

The target is RedDB's DFT-derived aqueous redox-potential scale, not an
experimental measurement. RedDB is a computational database of electroactive
molecules developed for redox-flow-battery research; the underlying data paper
is [Sengul et al., *Scientific Data* (2022)](https://doi.org/10.1038/s41597-022-01832-2).

The LLM is outside this prediction path. Its constrained job is to help with a
name that PubChem cannot resolve or a user-requested structure edit. It does
not estimate potential, run DFT, or replace review of the displayed molecule.

## My read

The interesting part of this demo is not the chat box. It is the checkpoint.

For molecular machine learning, the user-facing chain should be visible:

```text
requested name → chosen identity → displayed structure → confirmed model input → prediction
```

Otherwise a reasonable-looking prediction can hide the most basic error in the
workflow: the wrong molecule was sent to the model.

The next improvement I would make is an explicit applicability-domain warning.
The interface already says that molecules far from the quinone and aza-aromatic
training domain are extrapolations. I want to turn that into a concrete,
structure-based signal before anyone uses the demo for screening decisions.

Try the [live Redox RFB Predictor](/agent/redox-rfb-predictor/). The full
implementation, endpoints, and operational rules are documented in the
[public repository](https://github.com/rockyzl/redox-rfb-predictor).
