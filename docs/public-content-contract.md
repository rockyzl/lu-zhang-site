# Public content contract

Single source of truth for what may appear on the **public** site (sciencesloop.com).
All project/portfolio data must derive from this. When in doubt, exclude.

## Visibility levels
- `public_repo` — public GitHub repo; repo link OK.
- `public_demo` — has a public live demo; demo link OK; repo may stay hidden.
- `private_case_study` — private repo; **describe only**, NO repo link, NO private URL.
- `excluded` — never appears on the public site in any form.

## Portfolio project set (public site)

| Project | Visibility | Links allowed | Notes |
|---|---|---|---|
| Scientific Agent Lab | public_repo | repo | grounded agents + eval harness |
| Scientific Foundation Model Lab | public_repo | repo | ML teaching / training wizard |
| Realtime Synthetic Call Center | public_repo | repo | realtime voice sim |
| SciencesLoop Agent API | public_demo | live demo only | RAG + attribution guardrail |
| SciFM Registry (Science FM series) | private_case_study | none | model-usability registry |
| RFB Formulation Agent | private_case_study | none | flow-battery formulation agent |
| Property OS — Voice/SMS Operations Agent | private_case_study | none | see wording rules below |
| Insurance FNOL Agent | private_case_study (optional) | none | abstract, product-framed |

## Grouping (Projects page)
- **Agent Infrastructure** — Scientific Agent Lab, SciencesLoop Agent API, Realtime Synthetic Call Center
- **Science AI** — Scientific Foundation Model Lab, SciFM Registry, RFB Formulation Agent
- **Operations AI** — Property OS, Insurance FNOL Agent (optional)

Homepage Featured = 3 only: **Scientific Agent Lab · SciencesLoop Agent API · Property OS**.

## Property OS wording rules (private_case_study)
- Frame as **"property operations"** — never "landlord", "tenant", "rent".
- Use "operations workflow" / "service requests"; "financial ledger" only as a *boundary* concept, never its contents.
- Allowed: Twilio ConversationRelay, real-time voice + SMS, hard-coded safety screen,
  access-gated read-only ops console, operational/financial data separation.
- Forbidden: real domains (monitor./rental.sciencesloop.com), any address/street,
  tenant/owner names, phone numbers, rent/repair dollar figures, the repo, data screenshots.

## FORBIDDEN in shipped `dist/` (build-time grep must return zero)
- Tenant / owner / family member names; property street names / addresses
- Phone patterns: `+1`, `555-01`, any 10-digit sequences tied to contacts
- Real ops domains: `monitor.sciencesloop.com`, `rental.sciencesloop.com`
- Rent / repair / financial dollar figures from private data
- Health terms: MyChart, diagnosis, patient, EEHealth
- Gmail snippets / email bodies; internal filesystem paths (`/home/lu2`, `/opt/`)
- Twilio / Cloudflare / OpenAI account IDs, keys, tokens, tunnel IDs
- Private repo URLs (home-ops, family-*, health-*, job-hunting, etc.)
- Privacy gate: `Erge`, `尔格`, "sponsoring company", "talent program"
- Words "landlord", "tenant", "rent" anywhere in Property OS copy

## Hard-excluded repos (never on public site)
home-ops, family-recovery-log, family-records, health-tracker, lucas-china-trip,
lucas-summer, second-brain, job-hunting, stock-screener, meditation-study,
personal-trainer, desk-activity-monitor, rocky-daily-info-log, openclaw-private-backup,
rocky-agent-knowledge-share, personal_app, communication-coach, rag_qa, aigc_podcast_factory,
roof-prediction, guangnian-energy-agent (or downgrade to unlinked "earlier RAG prototype").
