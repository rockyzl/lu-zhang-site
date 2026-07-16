---
title: "A molecular workflow should show what it does not know"
description: "A project note on a public molecular-discovery demo: resolve identity, confirm structure, calculate structure descriptors, and make evidence gaps explicit instead of inventing properties."
date: "2026-07-16"
lang: "en"
status: "project note"
featured: false
tags:
  - AI for Science
  - molecular identity
  - RDKit
  - PubChem
  - scientific workflow
---

**A valid molecular structure is not the same thing as a supported molecular-property claim.**

The [Molecular Discovery Workflow Demo](/agent/molecular-discovery/) is a small, public window into a larger private prototype. It accepts a chemical name or a SMILES string, resolves a chemical identity through PubChem, asks the visitor to inspect the structure, and then calculates basic RDKit structure descriptors.

What it deliberately does *not* do is produce a plausible-looking redox potential, solubility, or conductivity number when no source-backed connector is active for that property.

## The workflow

```text
chemical name or SMILES
  → PubChem identity record
  → visible, editable structure confirmation
  → restricted RDKit analysis service
  → descriptors + explicit evidence gaps
```

For a name, the browser queries the public [PubChem PUG-REST API](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest) directly. This avoids treating an LLM guess as chemical identity and gives the visitor a record title, CID, two-dimensional structure, and SMILES to inspect. The visitor can still edit that SMILES before analysis.

After confirmation, a narrow public API sends only the selected SMILES through a local RDKit workflow. It returns structural facts such as molecular formula, molecular weight, LogP, topological polar surface area, and flagged functional groups. Those are calculated structure descriptors, not experimental measurements.

## Why the demo exposes gaps

The workflow also asks for redox potential, aqueous solubility, and conductivity. In this public deployment there is no connected, validated source for the first two and conductivity is not a property of one molecule alone: it depends on a formulation, concentration, salt, solvent, temperature, and more.

So the result reports a gap instead of a number:

```text
redox potential     → missing source-backed value
aqueous solubility  → missing for the exact molecular state
conductivity        → not a single-molecule property
```

That is a modest behavior, but it is the one I want from a scientific workflow. An interface should be able to distinguish “I calculated a descriptor” from “I have evidence for this property” and from “this question is underspecified.”

## Public boundary

The public service is intentionally narrower than the local project. It exposes one forward-analysis endpoint and a health check. It does not expose the MCP server, reverse-discovery search, databases, internal research routes, or interactive API documentation. Requests are rate limited, and visitors should not submit confidential or proprietary structures.

The demo is useful for inspecting a workflow boundary, not for making screening or experimental decisions. A next step is to attach real, versioned property sources—starting with carefully scoped redox evidence—and make the provenance and applicability limits visible alongside any future prediction.

Try the [live Molecular Discovery Workflow Demo](/agent/molecular-discovery/).
