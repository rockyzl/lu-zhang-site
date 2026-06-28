# sciencesloop.com Migration Plan

Target domain:

```text
sciencesloop.com
www.sciencesloop.com
```

## Current Production

The canonical public deployment is:

```text
https://sciencesloop.com
https://www.sciencesloop.com
```

The Vercel preview/fallback deployment may still exist for operational checks,
but public materials should point only to SciencesLoop.

## DNS Reference

If DNS ever needs to be repaired, Vercel commonly asks for:

```text
A sciencesloop.com 76.76.21.21
A www.sciencesloop.com 76.76.21.21
```

Alternatively, move nameservers to:

```text
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Verify domain state with:

```bash
npx vercel domains inspect sciencesloop.com
npx vercel domains inspect www.sciencesloop.com
```

## Agent Backend Path

The `/agent/` page now supports two modes:

- static public-safe fallback when `PUBLIC_AGENT_API_URL` is not set
- real public-safe RAG / LLM mode through `scientificloop-agent-api` when
  `PUBLIC_AGENT_API_URL` is set

- Keep this repo as the public frontend.
- Keep backend code in the separate `scientificloop-agent-api` repo.
- Allowlist only public site pages, papers, patents, GitHub repos, and public
  portfolio content.
- Return cited answers.
- Preserve factual status labels such as `in progress`, `prototype`, and
  `pre-v0.1`.
- Do not ingest private job-hunting, employer, Workday, health, family,
  finance, address, token, or credential files.

Recommended production split after domain setup:

```text
https://sciencesloop.com          -> Vercel frontend
https://api.sciencesloop.com      -> Vercel backend API
```

Set the frontend build variable to:

```text
PUBLIC_AGENT_API_URL=https://api.sciencesloop.com/api/agent
```
