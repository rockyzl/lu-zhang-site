# lu-zhang-site

[![Live site](https://img.shields.io/badge/live-rockyzl.github.io%2Flu--zhang--site-b8531a?style=flat-square)](https://rockyzl.github.io/lu-zhang-site/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/rockyzl/lu-zhang-site/deploy.yml?branch=main&style=flat-square&label=deploy)](https://github.com/rockyzl/lu-zhang-site/actions/workflows/deploy.yml)
[![Astro](https://img.shields.io/badge/built%20with-Astro%205-bc52ee?style=flat-square&logo=astro)](https://astro.build)
[![License](https://img.shields.io/badge/license-MIT-2d5d5e?style=flat-square)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/rockyzl/lu-zhang-site?style=flat-square)](https://github.com/rockyzl/lu-zhang-site/commits/main)

Personal site for **Lu Zhang** — battery scientist & data engineer.
14+ years at Argonne National Laboratory · R&D 100 Award (2014) · 143 papers · 28 patents.
Live: <https://rockyzl.github.io/lu-zhang-site/>

## Stack

- Astro 5 (static site generator, zero default JS)
- Vanilla CSS — Inter (sans) + Newsreader (serif) via Google Fonts
- Data: hand-curated JSON in `src/data/` (publications generated from a separate markdown source)

## Develop

```bash
npm install
npm run data    # regenerate src/data/{publications,patents,conferences}.json from source markdown
npm run dev     # dev server at http://localhost:4321
npm run build   # static output to dist/
```

### Data source for `npm run data`

The `parse_md.py` script reads a master ledger from a separate, private repo
(申报材料 / application materials). It looks up the file in this order:

1. `$LU_SITE_DATA_SOURCE` env var, if set — absolute path to `学术成果完整记录.md`
2. Default fallback — `../zip/张鲁-申报材料-工作文档/研究报告/学术成果完整记录.md`
   relative to this repo, i.e., a sibling-repo layout.

Most JSON files in `src/data/` are NOT auto-generated and live independently
(news, featured, ai_projects, projects, invited_talks, patents_extra). Edit
those by hand when content changes.

## Layout

```
src/
  data/             publications, patents, conferences (auto-generated)
                    + news, featured, ai_projects, projects, invited_talks,
                      patents_extra (hand-edited)
  layouts/Base.astro
  lib/url.ts        helper: prefix paths with site BASE_URL
  pages/
    index.astro         home — hero + news + featured + AI spotlight
    about.astro         bio + recognition + service & review
    publications.astro  143 papers, filterable
    patents.astro       28 issued + applications + non-provisional draft
    projects.astro      18 projects across 4 categories
    talks.astro         13 invited + 38 abstracts
    ai.astro            shipped AI projects
  styles/global.css
public/
  images/{news,ai}/   curated illustrations and screenshots
scripts/
  parse_md.py                       markdown → JSON parser
  corresponding_overrides.json      whitelist of confirmed corresponding-author papers
```

## Deploy

`.github/workflows/deploy.yml` runs on every push to `main`:

1. checkout → `npm ci` → `npx astro build` (with `ASTRO_BASE=/lu-zhang-site/`)
2. upload `dist/` as a Pages artifact
3. publish to GitHub Pages

Typical end-to-end: ~30 seconds from `git push` to live URL update.
