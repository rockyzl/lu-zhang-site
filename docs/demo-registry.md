# Live-demo registry and site indexing

`src/data/demos.ts` is the **single source of truth** for SciencesLoop's public
live demos. Do not add a new public demo by manually copying cards into several
pages.

The build also publishes a deterministic, public-safe snapshot at
[`/data/demos.json`](/data/demos.json). It is derived from the same TypeScript
registry and is not a second file to edit. The payload has a `schemaVersion`
and the public card fields; it intentionally has no generated timestamp, secret,
private status, or internal filesystem metadata.

Repository URLs are copied exactly. This matters when the public work lives on
a durable non-default branch: for example, the KIT battery replay intentionally
links to `protocol/soh-target-v2` rather than the repository's unrelated default
branch. Consumers must not rewrite `repoUrl` to a repository homepage.

Each registry entry owns its:

- stable `id`;
- English and Chinese title, tagline, and summary;
- public route (`path`);
- optional public article (`articlePath`) and repository (`repoUrl`);
- optional typed public sources (`sources`) for datasets, papers, licenses, and documentation;
- tags; and
- homepage visibility (`featured`).

## Pages generated from the registry

| Surface | Rule |
| --- | --- |
| Home (`/`, `/zh/`) | Shows demos where `featured: true`. |
| Projects (`/projects/`, `/zh/projects/`) | Shows every registry demo in the Science AI group. |
| Agent index (`/agent/`, `/zh/agent/`) | Shows every registry demo except the ChemGraph demo that is already the page's primary content. |
| Lab (`/lab/`, `/zh/lab/`) | Both research rivers use explicit stable-ID allowlists. The molecular-discovery river currently selects ChemGraph, MIST, Redox, and the molecular-discovery workflow. The trustworthy-scientific-AI river currently selects Condition Monitoring, KIT Battery Early Warning, Preventive Health, and Guideline Faithfulness. A registry entry does not enter Lab automatically; add it to one river only when it belongs to that long-term research line. |
| Blog and RSS | Markdown posts in `src/blog/` are discovered automatically; use the registry's `articlePath` to keep the demo-to-article relation explicit. |

Astro generates the sitemap from public pages at build time. A demo route is
therefore indexed when its route page exists and `npm run build` succeeds.

## Reuse outside Astro

Browser JavaScript can read the snapshot directly:

```js
const registry = await fetch("https://sciencesloop.com/data/demos.json").then((response) => response.json());
for (const demo of registry.demos) console.log(demo.id, demo.path);
```

Python can consume the same public data without parsing TypeScript:

```python
import json
from urllib.request import urlopen

with urlopen("https://sciencesloop.com/data/demos.json") as response:
    registry = json.load(response)

for demo in registry["demos"]:
    for source in demo.get("sources", []):
        print(source["kind"], source["label"]["en"], source["url"])
```

For Jinja2, fetch or load the JSON in the Python application and pass
`registry["demos"]` into the template. Optional sources can be rendered without
creating a second registry:

```jinja2
{% for demo in demos %}
  <h2>{{ demo["title"][locale] }}</h2>
  {% for source in demo.get("sources", []) %}
    <a href="{{ source["url"] }}">{{ source["label"][locale] }}</a>
  {% endfor %}
{% endfor %}
```

Jinja2 remains only a renderer; do not create a second Jinja-specific demo
registry.

Each optional `sources` entry has exactly three public fields: a finite `kind`
(`dataset`, `paper`, `license`, or `documentation`), a bilingual `label`, and an
HTTPS `url`. Source kinds and URLs must be unique within one demo. Keep the list
ordered from the primary evidence to supporting material.

Every production `npm run build` automatically runs `npm run registry:check`.
It fails if the JSON differs from the TypeScript registry, an ID or tag is
duplicated, localized public fields are missing, or a registered English/Chinese
demo or article route was not generated. It also rejects unknown source fields or
kinds, missing bilingual source labels, credential-bearing URLs, non-HTTPS URLs,
and duplicate source kinds or URLs.

## Add or update a demo

1. Create or update its English route and Chinese counterpart under
   `src/pages/agent/` and `src/pages/zh/agent/`.
2. Add or update **one** record in `src/data/demos.ts`.
3. Use a stable, lowercase hyphenated `id`. Do not rename an existing ID only
   for copy changes because `/lab/` selects its curated research projects by ID.
4. If the demo belongs in Lab, add its stable ID to exactly one of Lab's
   explicit river allowlists. Registry membership alone does not opt a demo
   into Lab.
5. Set `featured: true` only for a demo intended for the home-page systems
   grid. It will still appear on Projects and Agent indexes when false.
6. If there is a public project note, add the English `articlePath`. Publish a
   Chinese rewrite in `src/blog/` when appropriate; the blog/RSS indexes it
   automatically.
7. Keep claims in the registry's summary public-safe and conservative. Do not
   include secrets, internal Git state, private repositories, or unverified
   performance claims.
8. When a demo depends on public evidence, add typed `sources` in the same record
   instead of maintaining an unrelated source list elsewhere.
9. Run `npm run content:guard` and `npm run build`. Check the route, home,
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
