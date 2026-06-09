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

The current `/agent/` page is a static public-safe site router. For a real
ScientificLoop agent:

- Keep this repo as the public frontend.
- Build backend in a separate repo such as `scientificloop-agent-api`.
- Allowlist only public site pages, papers, patents, GitHub repos, and public
  portfolio content.
- Return cited answers.
- Do not ingest private job-hunting, employer, Workday, health, family,
  finance, address, token, or credential files.
