# Agent Instructions

This repo may be edited by multiple local agents. Follow `CLAUDE.md` first.

For parallel work:

- Read `/home/lu2/dev/personal/records/agent-comms/active-work.md`.
- Update the active-work table before taking ownership of files.
- Do not edit another active agent's files.
- Use `/home/lu2/dev/personal/records/agent-comms/` for handoffs.
- Run `npm run build` before claiming site changes are complete.

## Live demos and public indexing

Before adding or changing a public demo, read
[`docs/demo-registry.md`](docs/demo-registry.md). `src/data/demos.ts` is the
single source of truth for live-demo cards across Home, Projects, Agent, and
Lab. Do not manually duplicate a live-demo card on those pages. Add the route,
then update the registry, then build and verify every generated surface.
When a new demo also needs a public project article, use the
`sciencesloop-demo-article` skill.

Use the shared skill `scientificloop-writing` for SciencesLoop posts, LinkedIn
drafts, and public AI-for-science writing.
