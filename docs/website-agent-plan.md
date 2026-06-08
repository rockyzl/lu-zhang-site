# Website Agent Plan

This repo owns the public website and static website-agent UI only.

## Current Phase

Phase 0: static, public-safe site agent.

Implemented routes:

- `/agent/`
- `/zh/agent/`

The agent is browser-side and rules-based. It does not call an LLM, store user
input, or require API keys.

## Repo Boundaries

| Concern | Owner |
|---|---|
| Public website, static pages, static agent UI | `lu-zhang-site` |
| Scientific retrieval / RFB evidence backend | `rfb-formulation-agent` |
| Career positioning, resumes, LinkedIn copy | `job-hunting` |
| Human-visible wiki / long-term notes | `/mnt/c/VMShare/wiki/hq` |
| VoiceRAG demo | `tipc` / `voiceagent-tipc` |

## Domain Plan

Target professional domain: `scientificloop.com`.

Do not switch this repo's `site`, `base`, `CNAME`, resume links, or LinkedIn
links until DNS and HTTPS are verified.

Current production fallback remains:

```text
https://rockyzl.github.io/lu-zhang-site/
```

## Future Backend

If the static agent becomes a real LLM/RAG agent:

- Put backend code in `rfb-formulation-agent` or a new
  `scientificloop-agent-api` repo.
- Use only public allowlisted sources.
- Cite public pages or papers.
- Keep private employer, Workday, family, health, finance, and talent-program
  private files out of retrieval.
- Do not allow the public agent to send emails, submit forms, or perform
  irreversible actions.
