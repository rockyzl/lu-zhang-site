# sciencesloop.com Migration Plan

Target domain:

```text
sciencesloop.com
www.sciencesloop.com
```

## Current Production

The GitHub repo is private, so GitHub Pages no longer serves the site. The
current public deployment is through Vercel:

```text
https://lu-zhang-site.vercel.app
```

Custom domains have been added to the Vercel project:

```text
sciencesloop.com
www.sciencesloop.com
```

DNS still needs to be configured at the domain registrar.

## DNS Required

Vercel currently asks for:

```text
A sciencesloop.com 76.76.21.21
A www.sciencesloop.com 76.76.21.21
```

Alternatively, move nameservers to:

```text
ns1.vercel-dns.com
ns2.vercel-dns.com
```

After DNS changes propagate, verify:

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
