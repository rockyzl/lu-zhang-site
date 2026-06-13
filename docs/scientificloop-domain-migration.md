# scientificloop.com Migration Plan

Target domain:

```text
scientificloop.com
www.scientificloop.com
```

## Current Production

The GitHub repo is private, so GitHub Pages no longer serves the site. The
current public deployment is through Vercel:

```text
https://lu-zhang-site.vercel.app
```

Custom domains have been added to the Vercel project:

```text
scientificloop.com
www.scientificloop.com
```

DNS still needs to be configured at the domain registrar.

## DNS Required

Vercel currently asks for:

```text
A scientificloop.com 76.76.21.21
A www.scientificloop.com 76.76.21.21
```

Alternatively, move nameservers to:

```text
ns1.vercel-dns.com
ns2.vercel-dns.com
```

After DNS changes propagate, verify:

```bash
npx vercel domains inspect scientificloop.com
npx vercel domains inspect www.scientificloop.com
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
https://scientificloop.com          -> Vercel frontend
https://api.scientificloop.com      -> Vercel backend API
```

Set the frontend build variable to:

```text
PUBLIC_AGENT_API_URL=https://api.scientificloop.com/api/agent
```
