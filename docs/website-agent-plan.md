# Website Agent Plan

> **Update (2026-07-06):** `/agent/` is now the **ChemGraph live demo**, not the
> Loopi retrieval site-agent described below. Loopi moved to the corner
> **ChatWidget** (on every page); it's still backed by `scientificloop-agent-api`.
> For the current `/agent/` demo see **`docs/chemgraph-agent-demo.md`**. The
> Loopi/RAG details below still describe the widget's backend + guardrails.

This repo owns the public website and static website-agent UI only.

## Current Phase

Phase 1: public-safe site agent with optional backend API.

Implemented routes:

- `/agent/`
- `/zh/agent/`

Default behavior remains browser-side and rules-based. When
`PUBLIC_AGENT_API_URL` is set at build/dev time, the UI calls the
`scientificloop-agent-api` backend for RAG / LLM answers with citations.

The public agent must:

- use only public website corpus and public portfolio links
- cite public sources in generated answers
- preserve project status such as `in progress`, `prototype`, or `pre-v0.1`
- avoid turning plans or experiments into completed accomplishments
- avoid storing visitor questions or reading private files

## Repo Boundaries

| Concern | Owner |
|---|---|
| Public website, static pages, static agent UI | `lu-zhang-site` |
| Public-safe RAG / LLM website agent API | `scientificloop-agent-api` |
| Scientific retrieval / RFB evidence backend | `rfb-formulation-agent` |
| Career positioning, resumes, LinkedIn copy | `job-hunting` |
| Human-visible wiki / long-term notes | `/mnt/c/VMShare/wiki/hq` |
| VoiceRAG demo | `tipc` / `voiceagent-tipc` |

## Domain Plan

Canonical professional domain:

```text
https://sciencesloop.com/
```

The old GitHub Pages URL and temporary Vercel URL should not be used in public
profiles, resumes, or LinkedIn links except as operational deployment fallbacks.

## Backend Wiring

Local development:

```bash
cd ../scientificloop-agent-api
node scripts/build-corpus.mjs --site ../sites/lu-zhang-site
npm run dev

cd ../sites/lu-zhang-site
PUBLIC_AGENT_API_URL=http://127.0.0.1:8787/api/agent npm run dev
```

Production target after domain migration:

```text
https://api.sciencesloop.com/api/agent
```

Then build the site with:

```bash
PUBLIC_AGENT_API_URL=https://api.sciencesloop.com/api/agent npm run build
```

Keep private employer, Workday, family, health, finance, address, token, and
credential files out of retrieval. Do not allow the public agent to send emails,
submit forms, or perform irreversible actions.
