# SciencesLoop

[![Live site](https://img.shields.io/badge/live-sciencesloop.com-b8531a?style=flat-square)](https://sciencesloop.com/)
[![Astro](https://img.shields.io/badge/built%20with-Astro%205-bc52ee?style=flat-square&logo=astro)](https://astro.build)
[![License](https://img.shields.io/badge/license-MIT-2d5d5e?style=flat-square)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/rockyzl/lu-zhang-site?style=flat-square)](https://github.com/rockyzl/lu-zhang-site/commits/main)

SciencesLoop is an open research lab for Scientific AI: AI-native scientific
workflows, intelligent agents, scientific state systems, and evidence-driven
infrastructure for discovery.

Live: <https://sciencesloop.com/>

## Research Programs

- Scientific Workflow — agent orchestration, tool use, evaluation, and traceable
  execution for scientific work.
- Scientific State — representations that connect literature, data, simulation,
  experiment, and decision history.
- Scientific Foundation Models — practical experiments around molecular,
  materials, and domain-specific representation learning.
- Scientific Discovery — battery-materials evidence, flow-battery benchmarks,
  and closed-loop discovery patterns.

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

`parse_md.py` reads a master ledger from a separate private data repo.
Lookup order:

1. `$LU_SITE_DATA_SOURCE` env var, if set — absolute path to the markdown
2. Default fallback — `../zip/data/academic_record.md` (sibling-repo layout)

If neither is found the script exits with a clear error. The private data
repo is not part of this distribution and contents are out of scope.

Most JSON files in `src/data/` are NOT auto-generated and live independently
(news, featured, ai_projects, projects, invited_talks, patents_extra,
book_chapters, tech_reports, press, collaborators). Edit those by hand when
content changes; `npm run data` only regenerates publications + patents +
conferences from the private master.

## Layout

```
src/
  data/             publications, patents, conferences (auto-generated)
                    + news, featured, ai_projects, projects, invited_talks,
                      patents_extra (hand-edited)
  layouts/Base.astro
  lib/url.ts        helper: prefix paths with site BASE_URL
  pages/
    index.astro         home — SciencesLoop lab framing + programs + notes
    about.astro         people + founder bio + recognition + service & review
    programs.astro      Scientific AI programs and current prototypes
    publications.astro  99 publications total; indexed journal subset is filterable
    patents.astro       25 issued + 3 applications (28 total)
    projects.astro      funded research archive and evidence layer
    talks.astro         13 invited + 38 abstracts
    mentorship-collaborators.astro  mentorship, team growth, and collaborator record
  styles/global.css
public/
  images/{news,ai}/   curated illustrations and screenshots
scripts/
  parse_md.py                       markdown → JSON parser
  corresponding_overrides.json      whitelist of confirmed corresponding-author papers
```

## Deploy

The repo is private and deploys through Vercel.

Manual production deploy:

```bash
npx vercel deploy --prod
```

Custom domain target:

```text
sciencesloop.com
www.sciencesloop.com
```
