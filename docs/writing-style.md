# SciencesLoop — Daily "AI × Science" Writing Style Guide (v1)

This guide governs the daily one-item posts on sciencesloop.com. Use it as the
short operational checklist next to the fuller
`docs/scientificloop-writing-style.md`.

It is informed by technical documentation style guides, popular science writing
guidance, AI newsletters, and Lu's own scientist values: evidence,
traceability, preserved uncertainty, and no fake claims.

## Voice

One line: **a former Argonne battery scientist, now building AI agents, calmly and
specifically explaining one thing he genuinely understands to a fellow scientist —
opinionated, checkable, never hyped.**

- Specific, direct, with a genuine opinion.
- Technically accurate *and* readable by a non-specialist (Andrew Ng's *The Batch*).
- Honest about limits; preserve uncertainty instead of flattening it into confidence.
- Calmer than Sentry (at most half a joke per post), looser than a journal paper.

## Daily / short post structure

Borrows Import AI's skeleton + Willison's hands-on framing + The Rundown's "why / how":

1. **Hook (1–2 sentences)** — open on a concrete or counter-intuitive fact. No windup.
2. **What it is (2–4 sentences)** — what the thing actually is; define any term in one
   line, written for a smart non-specialist.
3. **My read / why it matters (2–4 sentences)** — your angle: what it means for a
   scientific workflow (retrieval, experiment planning, evaluation, traceability).
   This is where the opinion goes.
4. **Watch-for / caveat (1–2 sentences)** — what it does NOT yet solve, what to be
   skeptical of. (Preserve uncertainty; counters over-claiming.)
5. **Source + one-line next step** — Read the paper / Get the code / Try it.

Length: **English 120–250 words**. Chinese is a rewrite, not a literal translation,
of comparable length.

## Medium / long article structure

Use this only when a source deserves more depth than a daily note.

1. **Problem hook** — start with a recognizable scientific or engineering
   workflow problem.
2. **Nut graf** — tell readers what they will learn and why it matters.
3. **Source facts** — summarize the paper/tool/repo/announcement with links.
4. **Scenario** — show one realistic workflow, not a generic description.
5. **Trace or diagram** — show `question -> evidence -> tool/action -> artifact
   -> evaluation -> human review`.
6. **Mechanism** — explain the technical pieces that matter.
7. **Failure modes** — cite the trust, benchmark, retrieval, or safety gap.
8. **Next test** — end with a checklist or experiment the reader could try.

See `docs/scientificloop-writing-style.md` for the full rich technical article
playbook.

## House rules

- Active voice; present tense for current behavior.
- Sentence case for headings ("Configure notifications", not Title Case).
- Short sentences (8–15 words on average); run it through a Hemingway-style check.
- Plain words; explain jargon and abbreviations on first use.
- Meaningful link text ("see the paper"), never "click here".
- Bold sparingly (≤5 contiguous words); don't rely on bold alone to convey meaning.
- Don't assume the reader shares your level of expertise.

## Banned language (using it = slop)

`revolutionary`, `game-changer`, `groundbreaking`, `unleash`, `supercharge`,
`"the future of …"`, calling a prototype "production", unsourced superlatives,
emoji pile-ups, empty openers ("In today's fast-paced world …").

This directly enforces the anti-"over-claiming" cleanup SciencesLoop already did,
and matches what HN/LinkedIn readers reject in AI content.

## Bilingual

- English is the primary draft (reaches international peers / LinkedIn).
- Chinese version is **rewritten, not translated**; give the term in Chinese + English
  on first use.
- Both versions follow the same 5-part structure and the same banned list.

## Courses / reference library

- **Style rules** — [GitHub Docs Style Guide](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide)
- **Writing science for a general audience** — [SMU Popular Science guide](https://studio.smu.ca/ac-resources/popular-science)
- **Extended** — [awesome-technical-writing](https://github.com/BolajiAyodeji/awesome-technical-writing) (Google / Microsoft / Red Hat style guides, *Docs for Developers*)
- **AI newsletter analysis** — [Zapier: best AI newsletters](https://zapier.com/blog/best-ai-newsletters/)
- **Model posts** — Import AI (Jack Clark), Simon Willison, Ahead of AI (Raschka), Interconnects (Lambert), The Batch (Ng)
- **Skills** — `getsentry/skills@blog-writing-guide` (voice), `mattpocock/skills@writing-shape` (co-writing process)
