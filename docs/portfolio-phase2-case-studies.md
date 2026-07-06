# Portfolio redesign — Phase 2: case-study project model

Phase 1 = positioning + IA (homepage reposition, /projects/ ↔ /research-archive/ split,
nav, Systems I Build, bilingual). Phase 2 (this doc) upgrades projects from repo-cards
into **case studies**. Do Phase 2 after Lu reviews the Phase-1 preview.

## Principle
Stop presenting projects as `name / repo / tags / blurb`. Present them so a visitor
learns: what is this, who is it for, can I try it, is there code, what did Lu build,
why does it matter, and what engineering judgment does it prove. Borrow the
information architecture of strong AI case-study pages (problem → solution → result →
stack), NOT the salesy tone. Tone: technical, calm, credible, evidence-first.

## Canonical project content model (data shape)
```
title, status, category, oneLiner,
useCase, problem, built, myRole, whyItMatters,
links {repo?, demo?, caseStudy?, notes?},   // private -> "Case study only · Private repo not linked"
stack: [...],
safety: [...],                              // eval / safety / privacy boundaries
privacyNotes: [...]                         // public-safe rules (from public-content-contract.md)
```
Private projects: links show "Case study only · Private repo not linked" (signals maturity,
not weakness). No repo, no private URL, no real-data screenshots, no family/health/finance/
property-sensitive content.

## Categories (Projects page)
- **Featured AI Systems** — Scientific Agent Lab · SciencesLoop Agent API · Property OS
- **Agent + RAG Infrastructure** — Scientific Agent Lab · SciencesLoop Agent API · Realtime Synthetic Call Center
- **Science AI Systems** — SciFM Registry · RFB Formulation Agent · Scientific Foundation Model Lab
- **Operations AI** — Property OS · Insurance FNOL Agent (if safe + coherent)

## Status system (assign one to every demo/project)
- **Featured** — Scientific Agent Lab, SciencesLoop Agent API, Property OS
- **Active case study** — SciFM Registry, RFB Formulation Agent, Realtime Synthetic Call Center, Insurance FNOL Agent (if safe)
- **Listed project** — Scientific Foundation Model Lab
- **Archive / hidden from main portfolio** — meditation-study, lu-zhang-site, guangnian-energy-agent
  (unless rewritten as an unlinked "earlier RAG prototype"), anything personal/family/health/finance/property-data.

## Case-study detail page structure (top 3–5 projects)
1. Hero — name · one-line use case · status badge · links (demo/repo/write-up)
2. The problem
3. The system (what was built)
4. Architecture — simple flow: User → Interface → Agent → Retrieval/Tools → Safety/Eval → Response
5. Demo / usage (public-safe screenshots or sample interaction only)
6. Engineering choices / tradeoffs
7. Safety & evaluation (what it can't do; how it's constrained/tested)
8. Status & next steps

## Canonical copy already approved by Lu
- **SciencesLoop Agent API** (Live public demo): retrieval-grounded agent answering
  questions about Lu's public work; public/private corpus boundary; attribution guardrails;
  fallback behavior; live website interface. Stack: RAG · LLM API · retrieval guardrails · website integration.
- **Property OS** (Private case study): real-time voice + SMS assistant for property
  operations; Twilio ConversationRelay voice; LLM reasoning with a hard-coded safety screen;
  Cloudflare Access-gated read-only console; operational/financial data separation. Links:
  "Case study only · Private repo not linked". Wording per public-content-contract.md
  (no landlord/tenant/rent; no real domains/addresses/figures).
- **Scientific Agent Lab** (Public repo): evidence-grounded scientific agents; retrieval
  grounding; cited-source answers; deterministic eval harness. Stack: Python · RAG · LLM agents · eval harness.
