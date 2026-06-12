# scientificloop.com Migration Plan

Target domain:

```text
scientificloop.com
www.scientificloop.com
```

## Current Production

The site currently deploys through GitHub Pages:

```text
https://rockyzl.github.io/lu-zhang-site/
```

The current GitHub Actions workflow builds with:

```text
ASTRO_SITE=https://rockyzl.github.io
ASTRO_BASE=/lu-zhang-site
```

Do not change those values until the domain is registered and DNS is ready.

## Recommended Migration

1. Register `scientificloop.com`.
2. In GitHub Pages settings for `rockyzl/lu-zhang-site`, set custom domain:
   `scientificloop.com`.
3. Add DNS records at the registrar:
   - `A` records for apex domain to GitHub Pages IPs.
   - `CNAME` record for `www` to `rockyzl.github.io`.
4. Wait for GitHub Pages to verify DNS and issue HTTPS.
5. Add `public/CNAME` with:

   ```text
   scientificloop.com
   ```

6. Update `.github/workflows/deploy.yml`:

   ```text
   ASTRO_SITE=https://scientificloop.com
   ASTRO_BASE=/
   ```

7. Update hard-coded public links in:
   - `README.md`
   - `public/robots.txt`
   - `src/layouts/Base.astro`
   - `src/data/ai_projects.json`
   - CV/download references if needed

8. Rebuild and verify:

   ```bash
   npm run build
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
https://scientificloop.com          -> GitHub Pages frontend
https://api.scientificloop.com      -> Vercel backend API
```

Set the frontend build variable to:

```text
PUBLIC_AGENT_API_URL=https://api.scientificloop.com/api/agent
```
