# ChemGraph agent demo (`/agent/`)

**What it is:** the `/agent/` (+ `/zh/agent/`) page is a natural-language chat
demo of the **real ChemGraph agent** (Argonne LCF, LangGraph + ASE; Lu's
hardened fork). It is the site's flagship "loop engineering" showcase.

> Note: `/agent/` USED to be the Loopi retrieval site-agent. That moved to the
> corner **ChatWidget** (`ChatWidget.astro`, on every page). `/agent/` is now the
> ChemGraph demo. Any "Ask/Try Loopi" CTA must open the widget
> (`data-open-loopi` → clicks `[data-cw-launcher]`), NOT link to `/agent/`.

## Pieces

| Piece | Where |
|---|---|
| Frontend component | `src/components/ChemGraphDemo.astro` (bilingual via `locale` prop) |
| Page mounts | `src/pages/agent.astro`, `src/pages/zh/agent.astro` |
| Backend API | HF Space `rockyaaos-chemgraph-loop.hf.space` — source repo `github.com/rockyzl/chemgraph-loop` (private) |
| Endpoint override | `PUBLIC_CHEMGRAPH_URL` env (defaults to the HF Space URL) |
| Featured on | homepage `featuredSystems` #2 + Projects "Science AI" card (en+zh) |

## Frontend contract

- Sends `POST {query: <natural language>}` to `SPACE_URL/run`.
- Renders one of three response shapes:
  1. **result** — a rich card: molecule/formula + live/cached tag + audited
     badge, a **canvas 3D ball-and-stick** viewer (`mol3d`, custom, no external
     lib), a task-specific panel (energy / dipole vector / IR stick-spectrum +
     mode table / thermochemistry cards), and the agent **steps folded by
     default** (`<details>` — tool calls, SMILES, formula, CID, coordinates).
  2. **clarify** (`{clarify:true, message, suggestions}`) — a conversational
     bubble + clickable suggestion chips (out-of-scope molecule / unavailable
     heavy task). Not an error.
  3. **error** — 429 / 504 / network.

## Gotchas (don't relearn these)

- Component styles are `<style is:global>` with `cg-*` classes: the chat
  messages / cards are injected via `innerHTML` at runtime and never get
  Astro's scoping attribute, so scoped styles won't apply.
- `define:vars={{copy}}` JSON-serializes → **no functions in `copy`**; use
  placeholder strings + `.replace()`.
- Single page-scroll model (`scrollIntoView` + `scroll-margin-top`) so a tall
  answer reads 3D → result → steps from the top.

## Coverage (set by the Space, see its README)

energy/dipole = live, all 10 molecules · thermo = all 10 (cached) · IR = only
≤4-atom molecules (water, ammonia, CO2, formaldehyde, H2O2) — the ASE Infrared
step returns empty modes for ≥5 atoms. Everything else → clarification node.

## Change / deploy

- Frontend: edit `ChemGraphDemo.astro`, `npm run build`, then
  `npx vercel@latest deploy --prod --yes`.
- Backend (molecules, routing, prompts, precomputed spectra): edit in the
  `chemgraph-loop` repo and push to the HF Space — see that repo's README.
- Keep en/zh copy in sync inside the component's `copy` object.
