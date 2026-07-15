# Live-demo registry and site indexing

`src/data/demos.ts` is the **single source of truth** for SciencesLoop's public
live demos. Do not add a new public demo by manually copying cards into several
pages.

Each registry entry owns its:

- stable `id`;
- English and Chinese title, tagline, and summary;
- public route (`path`);
- optional public article (`articlePath`) and repository (`repoUrl`);
- tags; and
- homepage visibility (`featured`).

## Pages generated from the registry

| Surface | Rule |
| --- | --- |
| Home (`/`, `/zh/`) | Shows demos where `featured: true`. |
| Projects (`/projects/`, `/zh/projects/`) | Shows every registry demo in the Science AI group. |
| Agent index (`/agent/`, `/zh/agent/`) | Shows every registry demo except the ChemGraph demo that is already the page's primary content. |
| Lab (`/lab/`, `/zh/lab/`) | Its molecular-discovery river selects ChemGraph, MIST, and Redox by stable registry ID. Add a new molecular demo to that explicit selection only when it belongs to this long-term research line. |
| Blog and RSS | Markdown posts in `src/blog/` are discovered automatically; use the registry's `articlePath` to keep the demo-to-article relation explicit. |

Astro generates the sitemap from public pages at build time. A demo route is
therefore indexed when its route page exists and `npm run build` succeeds.

## Add or update a demo

1. Create or update its English route and Chinese counterpart under
   `src/pages/agent/` and `src/pages/zh/agent/`.
2. Add or update **one** record in `src/data/demos.ts`.
3. Use a stable, lowercase hyphenated `id`. Do not rename an existing ID only
   for copy changes because `/lab/` selects molecular projects by ID.
4. Set `featured: true` only for a demo intended for the home-page systems
   grid. It will still appear on Projects and Agent indexes when false.
5. If there is a public project note, add the English `articlePath`. Publish a
   Chinese rewrite in `src/blog/` when appropriate; the blog/RSS indexes it
   automatically.
6. Keep claims in the registry's summary public-safe and conservative. Do not
   include secrets, internal Git state, private repositories, or unverified
   performance claims.
7. Run `npm run content:guard` and `npm run build`. Check the route, home,
   Projects, Agent index, Lab (when applicable), article, and RSS before push.

## Do not bypass the registry

Avoid adding one-off live-demo cards to `index.astro`, `projects.astro`,
`agent.astro`, or `lab.astro`. Those pages intentionally map the registry.
Manual cards are reserved for non-demo systems, private overviews, and
historical projects.

## Parallel-work rule

This repository is often edited through separate worktrees. Before merging or
pushing a registry change:

1. fetch `origin/main`;
2. rebase the focused commit(s) on the current main branch;
3. verify the build after the rebase; and
4. push only after all public pages and article routes return expected results.

If an article or page exists only on another agent branch, integrate its
verified commit before publishing a registry entry that points to it. A registry
link must never intentionally point to a 404 page.
