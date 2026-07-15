# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal academic and AI-for-science site for Lu Zhang (张鲁). Astro 5 static site, now deployed on Vercel at <https://sciencesloop.com/> with preview/fallback at <https://lu-zhang-site.vercel.app/>. Data layer is hand-curated JSON in `src/data/`. See `README.md` for the public-facing summary.

## Multi-agent collaboration

Claude Code, Codex, and other local agents may work at the same time, but they
must avoid overlapping writes.

- Shared mailbox: `/home/lu2/dev/personal/records/agent-comms/`
- Shared writing skill:
  - `~/.claude/skills/scientificloop-writing`
  - `~/.codex/skills/scientificloop-writing`
  - `~/.agents/skills/scientificloop-writing`
- Before parallel work, create or update a dated handoff in `records/agent-comms/`
  with status, file ownership, changed files, verified facts, and next action.
- One agent owns a file at a time. If another agent needs the same file, leave a
  note in the handoff rather than editing over it.
- Prefer separate git branches or worktrees for substantial parallel changes.
  Lead/integrator merges after `npm run build` passes.
- Do not publish or submit public/job materials with fabricated claims. Style
  and emphasis may change; facts must remain conservative and sourceable.

## Live demo registry and public indexes

Read `docs/demo-registry.md` before adding or changing a public Demo. The
single source of truth is `src/data/demos.ts`; Home, Projects, Agent, and Lab
derive their live-demo cards from it. Do not manually duplicate a live-demo card
on those pages. A demo can have an `articlePath` and `repoUrl`; integrate the
corresponding public article commit before publishing a registry link so it
cannot produce a 404.

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321 (NOT prefixed with /lu-zhang-site/)
npm run build    # static output to dist/, 26 pages (en + zh + cv)
npm run cv       # build then regenerate public/files/Lu_Zhang_CV.pdf via WeasyPrint
npm run data     # regenerate publications/patents/conferences from private markdown ledger
                 # — needs $LU_SITE_DATA_SOURCE or ../zip/data/academic_record.md
```

There's no test suite, no linter — just `npm run build` as the gate.

## Deploy: Vercel

GitHub Pages is no longer the public deployment path because this repo is
private. Use Vercel:

```bash
npm run build
npx vercel@latest deploy --prod --yes
```

Public URLs:

- Site: `https://sciencesloop.com/`
- Vercel fallback: `https://lu-zhang-site.vercel.app/`
- Agent API: `https://api.sciencesloop.com/api/agent`

If an old `rockyzl.github.io/lu-zhang-site/` link returns 404, that is expected.

## Stat numbers are constants, not computed

Home stat-bar (`src/pages/index.astro` + `src/pages/zh/index.astro`) reads from authoritative constants near the top of each file:

```
SCI_COUNT = 97          // local publications.json has only 87 verified journals — 10 missing
BOOK_CHAPTER_COUNT = 2
PATENT_COUNT_TOTAL = 28 // 25 issued + 2 published apps + 1 internal non-provisional
TALKS_TOTAL = 51        // = invitedData.talks.length (13) + conferences.length (38)
CITATION_COUNT = "4,700+"
H_INDEX = 39
FIRST_OR_CORRESP = 59
```

Don't switch back to `verifiedPubs.length` etc. — that path produced 128/3970/25 (wrong) when last tried, because publications.json `kind` and `role` fields are sparsely populated. The constants come from the private user-authoritative TSV in the sibling `zip` repo (see `~/dev/personal/zip/CLAUDE.md`).

## CV is rendered from cv.astro via WeasyPrint

`scripts/generate_cv.py` runs WeasyPrint on `dist/cv/index.html`. The `@page` rule in `cv.astro` sets per-page margin (`0.6in 0.65in`) so pages 2/3+ get top/bottom whitespace — earlier the padding was on `.cv` container which only padded the start of the flow. Don't revert to `@page { margin: 0 }`.

The CV's Mentorship section is data-driven from `src/data/mentees.json` — total counts and names render dynamically.

## Data files: curated vs auto-generated

| File | Source | Notes |
|---|---|---|
| `publications.json` | `npm run data` from private markdown | 128 entries; 87 are `kind: "journal" && verified` |
| `patents.json` | `npm run data` | 23 OSTI-verified issued |
| `patents_extra.json` | hand-curated | issued continuations + published apps + internal non-provisionals = +5 to reach 28 |
| `conferences.json` | `npm run data` | 38 abstracts |
| `mentees.json` | hand-curated | 5 students + 8 postdocs = 13 direct mentees, with bilingual `current_en/current_zh`, `role_en/role_zh`, `thrust_en/thrust_zh`. **Do not auto-derive — Lu Zhang has personally confirmed each.** |
| `collaborators.json` | OpenAlex export + hand patches | 184 entries; top names have hand-patched `institutions[]` so primary affiliation reflects current placement (Tesla / Factorial / Wildcat Discovery / Applied Materials / etc.) not "Argonne" default |
| `invited_talks.json` | hand-curated (`{talks: [...]}`) | 14 entries |
| `featured`, `news`, `ai_projects`, `projects`, `book_chapters`, `tech_reports`, `press` | hand-curated | edit directly |

Patent counts add up: `patents.json` (23) + `patents_extra.issued_continuations` (2) + `patents_extra.published_applications` (2) + `patents_extra.internal_applications` (1) = **28** total IP, of which 25 issued.

## Bilingual page sync

For every page in `src/pages/*.astro`, there's a `src/pages/zh/*.astro` mirror with the same logic but `../../` import paths instead of `../`. When you edit an English page that has structural changes (not just copy), sync to the zh sibling:

```python
src='src/pages/teaching.astro'
dst='src/pages/zh/teaching.astro'
content = open(src).read().replace('"../layouts/','"../../layouts/').replace('"../lib/','"../../lib/').replace('"../data/','"../../data/')
# Also ensure 张鲁 is preserved in zh-only titles (sed will revert it after sync)
content = content.replace('+ "Lu Zhang"', '+ "张鲁 Lu Zhang"').replace('TITLE + " — Lu Zhang"', 'TITLE + " — 张鲁 Lu Zhang"')
open(dst, 'w').write(content)
```

The `张鲁 Lu Zhang` bilingual name is required on zh pages (browser titles, nav, footer); en pages stay just `Lu Zhang`. `Base.astro` nav `.name` and footer `© 2026 ...` use `locale === "zh" ? "张鲁 Lu Zhang" : "Lu Zhang"`.

i18n lives in `src/i18n/strings.json` (flat keys like `home.lead.en` / `home.lead.zh`). Keys exposed publicly should reflect authoritative counts (97 SCI / 99 publications / 28 patents / 51 talks).

## Privacy gate (talent-program review window)

While Lu Zhang's 海外引才计划 application is under review, the linkage between **Zhiguang Li (graduate student)** ↔ **Zhejiang Erge Technology (founder)** must NOT appear on the public site. Specifically — when editing `mentees.json`, `collaborators.json`, `cv.astro`, or any i18n string that touches Zhiguang Li:

- `mentees.json` Zhiguang Li entry: `current_en: "private (not publicly listed)"` / `current_zh: "暂不公开"`. No `highlight_*` fields.
- `collaborators.json` Zhiguang Li `institutions`: keep ANL / Purdue. Do not list Zhejiang Erge / 浙江尔格.
- `cv.astro` Mentorship: no "Notable trajectory" paragraph naming Erge.
- Search `dist/` after build to verify zero matches for `Erge`, `尔格`, `sponsoring company`, `talent program` in shipped HTML.

The full mentee→sponsor narrative IS captured in private artifacts in the sibling `zip` repo + hq Obsidian wiki + Claude memory — do not delete it from there.

## Custom URL helper

All internal links go through `src/lib/url.ts` `u()` helper, which prepends `import.meta.env.BASE_URL`. Always use `u("/about/")`, never raw `<a href="/about/">` — the raw form 404s in production where the base path is `/lu-zhang-site/`.

## When something looks wrong

- **Number mismatch on home page**: check the constants in `index.astro` vs `mentees.json` / `patents_extra.json`. Don't switch to dynamic compute.
- **Stat says 87 / 128 / 38 / 13 invited**: stale; should be 97 / 99 / 51 / 51 (incl. 13 invited).
- **Mentor list missing someone**: edit `mentees.json` directly (don't try to derive from publications coauthor parsing — that misses students with no first-author papers, e.g., Peng Du).
- **Same name appears in both curated table AND auto-derived "Other publication-derived collaborators"**: `teaching.astro` filters auto-derived against `CONFIRMED_STUDENTS + CONFIRMED_POSTDOCS` names. If duplicates appear, check that the curated entry's `name` field matches exactly (including parenthetical 中文 names — the filter strips them via `name.split(" (")[0]`).
- **CV pages 2/3 lose top/bottom whitespace**: someone reverted the `@page { margin: 0 }` fix in `cv.astro` — restore `@page { margin: 0.6in 0.65in }` + `@media print { .cv { padding: 0; } }`.
- **Author shows just "Fang" / "Zhang" alone**: `publications.json` entry uses `"Last, F.; Last, F."` format which `authors.split(",")[0]` truncates. Convert to `"First Last, First Last, ..."` format consistent with the rest of the dataset.
