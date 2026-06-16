# Molecular Universe Map Deep Dive

Date: 2026-06-16

Sources inspected:

- https://molecular-universe.com/map
- https://www.ses.ai/mut
- https://developer.nvidia.com/blog/spotlight-accelerating-the-discovery-of-new-battery-materials-with-ses-ais-molecular-universe/

This note is a product-pattern review for SciencesLoop. It is not a scientific
validation of SES AI's Molecular Universe claims.

## What The Site Is Doing

Molecular Universe presents molecular discovery as a navigable map. The public
map page is a React/Umi app with a sign-in boundary, a top navigation system,
and a map-first interface. The visible product frame combines:

- a large colored molecular map;
- molecule cards and detail panels;
- cluster or "continent" descriptions;
- tabs for molecule categories such as organic molecules and anions;
- search, filter, prediction, formulation, design, manufacturing, and agent
  entry points;
- a sign-in flow for deeper workflows.

The SES AI product page describes Molecular Universe 0 as a battery-material
discovery software and service platform powered by AI and physics. SES describes
the map as a 512-dimensional world of small molecules projected into a
2-dimensional searchable map, with structural-similarity clusters called
"continents." SES also describes Map, Filter, Search, and Ask as the four
primary user-facing entry points.

Those are source claims and product descriptions. I have not independently
tested the database size, model quality, property predictions, or scientific
results.

## Reusable Product Pattern

The useful pattern is:

```text
large scientific search space
-> visual map
-> search / filter / agent query
-> selected entity
-> detail card
-> similar entities
-> save / compare / act
```

This is stronger than a normal search box because it gives the user a spatial
memory of the field. A researcher can see neighborhoods, clusters, outliers, and
nearby alternatives instead of reading a ranked list only.

For SciencesLoop, the direct analog is not "molecule map." It is a research and
workflow signal map.

## What Transfers To SciencesLoop

SciencesLoop is not trying to build a molecular database right now. The
transferable idea is the interface shape:

```text
AI-for-science signals
-> workflow-stage map
-> filter by evidence / reproducibility / validation cost
-> open one signal
-> inspect source claims, failure modes, and practical tests
-> find related signals
-> turn one signal into article, benchmark, or project task
```

The map should help answer:

- Where does this signal sit in scientific work?
- Is it about evidence, tools, experiment planning, evaluation, or publishing?
- What claims are source-backed?
- What would I test before trusting it?
- Which older signals are related?
- Which article or workflow should come next?

## Suggested SciencesLoop Feature

Build a lightweight `Research Signal Map`.

Start small and avoid pretending to have scientific embeddings or validated
semantic distances. Phase 0 can be a structured, source-backed map of our own
public signals.

Suggested entity schema:

```text
Signal
- id
- title
- source_url
- source_type: repo | paper | product | blog | video | dataset
- workflow_stage: question | evidence | tool | hypothesis | experiment |
  conclusion | reproducibility | publication
- reusable_pattern
- evidence_quality: low | medium | high | unknown
- reproducibility: low | medium | high | unknown
- workflow_utility: low | medium | high | unknown
- validation_cost: low | medium | high | unknown
- hype_risk: low | medium | high | unknown
- run_status
- practical_test
- related_signal_ids
- article_url
- next_action
```

The first version can render as cards grouped by workflow stage. A true 2D map
can come later.

## UI Suggestions

1. Add a `/signals/` or `/map/` page.

   Use workflow stages as the primary navigation, not technology labels. A user
   should be able to move from `evidence` to `evaluation` to `experiment` and
   see which tools or papers belong in each part of the loop.

2. Replace the dense public Signal Card with a compact visual card.

   Molecular Universe uses the map as orientation before detail. SciencesLoop
   can do the same with a small card:

   ```text
   Signal: PaperQA2
   Stage: Evidence -> Evaluation
   Run status: read, not locally run
   Practical test: known-answer questions with near-miss papers
   Risk: citation quality
   ```

   The detailed reasoning should stay in the article body or sidecar notes.

3. Add a detail panel for each signal.

   When a signal is selected, show:

   - source summary;
   - source-backed claims;
   - our interpretation;
   - failure modes;
   - practical test;
   - related signals;
   - article link;
   - open next task.

4. Add "related signals" rather than only related articles.

   Molecular Universe's similar-molecule pattern is useful. For SciencesLoop,
   related signals could connect PaperQA2, loop engineering, AI research radar,
   and future agent evaluation notes.

   Do not imply validated scientific relationships. Label relationships as
   editorial, workflow-stage, shared-source, or shared-failure-mode.

5. Make the agent map-aware.

   The homepage agent should eventually answer:

   - "Show me signals about scientific RAG evaluation."
   - "Which items have high validation cost?"
   - "What should I read after PaperQA2?"
   - "Which signals are ready for a deep dive?"

   This requires a structured signal index, not only article text chunks.

6. Add "use this signal" actions.

   A signal should be able to become:

   - a Daily Signal;
   - a technical note;
   - a benchmark task;
   - a GitHub issue;
   - a LinkedIn post;
   - a follow-up reading item.

## What Not To Copy

- Do not copy the visual density before the data model is ready.
- Do not use a map if the positions are arbitrary and unexplained.
- Do not imply model-validated relationships when relationships are editorial.
- Do not bury source evidence behind an attractive visualization.
- Do not mix private job-hunting notes or private repo data into the public map.

## Implementation Path

Phase 0: source-backed signal schema

- Create `src/data/signals.json`.
- Seed 5-10 public signals only.
- Include PaperQA2, Molecular Universe, loop engineering, and one daily-signal
  source.
- Build no new visualization yet.

Phase 1: signal index page

- Add `/signals/`.
- Filter by workflow stage, source type, run status, and validation cost.
- Show compact Signal Cards.

Phase 2: visual map

- Render a simple workflow-stage map or swimlane.
- Avoid force-directed graphs until there is enough data.
- Keep source links visible.

Phase 3: agent integration

- Add signal index to the public agent corpus.
- Return cited signal cards and article links.
- Add "next useful signal" recommendations.

Phase 4: dynamic intake

- Let Daily Signal scans write all candidates into the signal archive.
- Promote selected candidates into articles.
- Track reader feedback and follow-up tasks.

## Product Takeaway

Molecular Universe is useful for SciencesLoop because it treats search as a
navigation problem. The user is not only asking for one answer. They are moving
through a large scientific possibility space.

SciencesLoop can use the same idea at a smaller scale: turn papers, tools,
repos, and videos into a reviewable map of workflow signals. The first version
should stay honest and simple: source-backed cards, visible relationships, and
clear practical tests before any fancy map.
