# lu-zhang-site

Personal site for Lu Zhang — battery scientist & data engineer.

## Stack

- Astro 5 (static site generator)
- Vanilla CSS, no frameworks
- Data sourced from `张鲁-申报材料-工作文档/研究报告/学术成果完整记录.md`

## Develop

```bash
npm install
npm run data    # regenerate src/data/*.json from source markdown
npm run dev     # dev server at http://localhost:4321
npm run build   # static output to dist/
```

## Layout

```
src/
  data/           publications.json, patents.json, conferences.json (auto-generated)
  layouts/Base.astro
  pages/
    index.astro       home
    about.astro       bio + CV
    publications.astro  143 papers, filterable
    patents.astro     23 US patents
    talks.astro       38 conference abstracts
    projects.astro    DOE projects (stub, expand later)
    ai.astro          AI/data engineering work (stub, expand later)
scripts/
  parse_md.py     MD → JSON parser
```

## Deploy

GitHub Pages — push to `main`, enable Pages on the repo.
