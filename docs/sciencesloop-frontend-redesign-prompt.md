# SciencesLoop frontend redesign prompt

You are a principal frontend designer and engineer redesigning the public website for **SciencesLoop LLC**, an early-stage scientific software company.

## Company

SciencesLoop is developing an evidence-gated workflow layer for existing laboratories, starting with offline CV/EIS analysis in electrochemistry. The product direction is to turn instrument exports into reproducible, reviewable scientific decisions while preserving provenance, surfacing uncertainty and anomalies, and requiring human approval when evidence is incomplete. It does **not** currently control instruments, claim wet-lab validation, or claim committed National Laboratory or university partnerships.

## Brand idea

**Turn instrument data into decisions you can defend.**

The site should feel like a precise scientific instrument: calm, exact, inspectable, and quietly advanced. It must not look like a personal academic site, a grant application, a generic AI startup template, or a dashboard made of repeated cards.

## Visual direction

- Combine high-end scientific instrumentation with restrained Swiss editorial design.
- Use an obsidian / near-black hero and warm mineral-white content surfaces.
- Use one signal color (acid-lime or spectral green) for states, traces, and action—not decorative gradients.
- Use large, decisive sans-serif typography with a compact mono face for evidence labels and instrument metadata.
- Create a custom visual centerpiece from HTML/CSS/SVG: a live-looking electrochemical signal trace flowing through **ingest → analyze → gate → review**. It must communicate the product in seconds and remain honest about being a conceptual workflow visualization.
- Prefer thin rules, deliberate asymmetry, generous negative space, and data-like annotations.
- Avoid glassmorphism, blobs, stock laboratory imagery, animated spinning logos, excessive rounded cards, generic robot/brain imagery, fake customer logos, fake metrics, and unsupported claims.

## Homepage narrative

The homepage should answer, in order:

1. What is this? Scientific workflow software for existing laboratories.
2. What does it do? Turns CV/EIS instrument data into a traceable decision packet.
3. Why is it different? Evidence gates, replayable transformations, explicit uncertainty, and human review.
4. What exists now? Public workflow demonstrations; product and laboratory validation remain in development.
5. What should a visitor do? Inspect evidence, understand the workflow, or discuss a validation use case.

## Required copy

Hero eyebrow: `SCIENTIFIC WORKFLOW SYSTEMS / ELECTROCHEMISTRY`

Hero headline: `Turn instrument data into decisions you can defend.`

Hero body: `SciencesLoop is developing an evidence-gated workflow layer for existing laboratories, starting with offline CV/EIS analysis in electrochemistry. Preserve provenance, surface uncertainty, and prepare every result for human review—without replacing or controlling the instrument.`

Primary CTA: `Inspect the evidence`

Secondary CTA: `See the workflow`

Three capabilities:

- `Reproducible ingestion` — Normalize existing CV/EIS exports, record every transformation, and replay analysis from the original source files.
- `Evidence gates` — Check completeness, provenance, uncertainty, and anomaly conditions before a claim advances; abstain when required evidence is missing.
- `Decision packets` — Package inputs, calculations, limitations, and approval state into an auditable handoff for scientists and laboratory teams.

Final CTA: `Discuss a validation use case`

## Information architecture

- Ship English only for now. Preserve the existing Chinese source and control its public navigation/discovery through one explicit code-level feature flag that defaults to off. Re-enabling Chinese later should not require recreating pages.
- Simplify the top navigation to: Product, Evidence, Notes, Company, and one compact contact action. Show the language switch only when the Chinese feature flag is enabled.
- The homepage should use at most four major sections after the hero.
- Keep current evidence boundaries and public-safe claims.
- Do not remove working legacy routes; redesign the company-facing shell and homepage first.

## Interaction

- Motion should be subtle and functional: signal-line draw, scanning cursor, gate-state transition, and reduced-motion fallback.
- Strong keyboard focus, semantic markup, accessible contrast, and responsive behavior from 360px through wide desktop.
- The hero must remain striking without JavaScript.

## Technical constraints

- Existing Astro static site; work primarily in `src/pages/index.astro`, `src/pages/zh/index.astro`, `src/layouts/Base.astro`, and `src/styles/global.css`.
- No new heavy framework or runtime dependency.
- Preserve canonical, schema, preview noindex, RSS, and existing routes. Suppress Chinese hreflang/public discovery while the Chinese feature flag is off; restore it when enabled.
- Run `npm run content:guard` and `npm run build`.
- Deliver a visible QA deployment before production. Production deployment requires explicit approval.

## Deliverable

Implement the redesign—not merely a mood board. Produce the public English homepage, retain compatible Chinese source for later re-enablement, refine the shared header/footer, add responsive CSS, and build the custom signal/workflow visual. Explain the key design decisions and flag any remaining claim or accessibility risk.

## Authoritative implementation addendum

The company is building an **evidence-aware control plane for scientific R&D**. The long-term loop is:

`scientific intent → evidence → models → experiment design → human approval → instruments → measurements → analysis → next experiment`

The first controlled proof of concept is adaptive electrochemistry using a cyclic-voltammetry workflow. The public site must present every existing demo as evidence for this single control-plane thesis, not as an unrelated product catalog.

### Required homepage flow

1. **Hero:** exact headline `From scientific intent to measurement—and back.` The supporting copy must state that SciencesLoop connects models, protocols, existing instruments, and human review into traceable experimental loops, starting with adaptive electrochemistry. Show the status `Adaptive electrochemistry · Working prototype`.
2. **Interactive loop:** `Objective → Evidence → Protocol → Approval → Instrument → Measurement → Analysis → Next Experiment`. A data pulse pauses visibly at Human Approval; approval uses amber and returning measured data uses cyan. Every node must work with pointer and keyboard; include reduced-motion behavior.
3. **Problem:** `Powerful models. Disconnected laboratories.` Cover fragmented evidence, legacy instrument boundaries, and unreviewable decisions without claiming every lab has the same problem.
4. **Platform:** `A control plane for the experimental loop.` Present five connected layers as a structured diagram, not five generic cards: evidence/data; models/computation; protocol-as-code; instrument adapters/safety gates; trace/evaluation/human review. For each, show input, operation, artifact, and review boundary.
5. **Electrochemistry proof:** `Starting with adaptive electrochemistry.` Show a clearly labeled illustrative CV interface with experiment, sample, instrument/simulator status, scan rate, potential window, raw-data artifact, analysis status, proposed next action, and human approval required. Never imply autonomous hardware execution.
6. **Trust audit:** `Trust is part of the architecture.` Show evidence provenance, reproducible records, missing-data/uncertainty handling, and human/safety boundaries as an audit trail rather than cybersecurity marketing.
7. **Audience:** `Designed for laboratories that already have valuable science.` Provide paths for research labs, scientific R&D teams, and instrument/platform partners, each ending in a small concrete action.
8. **Lab evidence:** Prioritize adaptive electrochemistry, Scientific Agent Lab, redox prediction with molecular identity confirmation, battery early-warning replay, and evidence-grounded retrieval. State maturity, availability, code/evidence status, and limitations. Move unrelated personal projects out of the primary narrative.
9. **Founder:** brief `Scientist & AI Engineer` treatment; electrochemical energy research, scientific publication/invention record, and production AI engineering. Company remains primary.
10. **Final CTA:** `Begin with one controlled loop.` Offer `Discuss a Pilot` and `Explore the Technical Approach` without aggressive sales language.

### Navigation and content architecture

Use `Platform`, `Electrochemistry`, `Lab`, `Field Notes`, and `About`, plus `Explore the Loop` and `Discuss a Pilot`. Keep the header compact and sticky. Preserve personal/career/archive content in secondary routes. English is publicly exposed now; Chinese sources remain buildable and can be restored through `PUBLIC_ENABLE_ZH`.

Retain the existing public chatbot functionality. Reframe and restyle it as a bounded SciencesLoop site/lab guide that helps visitors inspect platform concepts, evidence, and workflow pages. It must not imply scientific authority, autonomous instrument control, or replacement of human review. Keep it keyboard accessible, usable on mobile, and visually subordinate to the page rather than removing it.

### Implementation quality bar

- Inspect and preserve Astro routing, base-path URL helpers, deployment, analytics/SEO/privacy behavior, current demos, blog, and external links.
- Use reusable Astro components and data-driven content; do not build a monolithic homepage.
- The loop visual must be a real HTML/CSS/SVG interaction, not a fake screenshot or stock asset.
- No unsupported metrics, customer logos, funding, partner, deployment, or hardware claims.
- Capture desktop, tablet, and mobile screenshots; verify keyboard, reduced motion, overflow, contrast, build, content guard, routes, and metadata.
- Production remains unchanged until the QA preview is reviewed and explicitly approved.
