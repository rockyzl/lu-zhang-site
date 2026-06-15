# ScientificLoop Writing Style

ScientificLoop posts should be useful, small, and evidence-linked. The goal is
not to chase AI news. The goal is to build a public thinking trail around AI for
Science, scientific agents, RAG, evaluation, MLOps, and battery/materials
discovery.

## Positioning

Write as a scientist-engineer building practical AI systems for scientific work.

The voice should combine:

- Scientific judgment from materials, batteries, electrochemistry, and
  autonomous discovery.
- Applied AI engineering judgment from RAG, agents, evaluation, workflow design,
  and MLOps.
- A cautious builder's mindset: what works, what fails, what should be measured,
  and what should stay human-reviewed.

Avoid sounding like a venture blog, hype thread, product launch, or generic AI
news summary.

## Daily Output Rule

Resource pool can be large. Output must be small.

Each day:

1. Scan many sources.
2. Rank popular or high-signal items.
3. Pick one signal worth explaining.
4. Study the writing shape of similar high-performing posts.
5. Write one short post.
6. Cite the source link.
7. Explain what it means for ScientificLoop.
8. Publish only after checking claims and links.

Target length: 300-700 words for website posts, 120-220 words for LinkedIn.

## Style Sources

Use these as style references, not as content to copy.

- [GitHub Docs style guide](https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide):
  clear headings, direct wording, consistent
  terminology, precise links, and useful structure.
- [Awesome Technical Writing](https://github.com/BolajiAyodeji/awesome-technical-writing):
  source discovery for technical writing courses, style guides, documentation
  systems, communities, and tools.
- [Popular science writing guidance](https://studio.smu.ca/ac-resources/popular-science):
  hook early, define technical terms, balance dense information with examples,
  and close by explaining why the topic matters.
- [AI newsletter analysis](https://zapier.com/blog/best-ai-newsletters/):
  reduce noise, keep one practical takeaway, and make the reader feel current
  without drowning them in links.

The ScientificLoop blend is:

```text
GitHub clarity + technical workflow + popular-science hook + AI-newsletter brevity
```

Do not imitate a writer's phrasing. Extract only structure, pacing, and reader
orientation.

## Source Pool

Use these as a watchlist, not as a commitment to cover everything.

### Frontier Labs

- OpenAI
- Google DeepMind
- Anthropic
- Meta FAIR
- Microsoft Research
- NVIDIA Research

### AI For Science Labs

- FutureHouse
- Lila Sciences
- Arc Institute
- Chan Zuckerberg Initiative
- Isomorphic Labs
- Recursion

### Academic Sources

- arXiv
- bioRxiv
- chemRxiv
- Nature
- Science
- Cell
- Papers with Code

### Open Source

- GitHub Trending
- GitHub repository search
- Hugging Face
- Awesome lists

### Social And Community Signals

- X.com
- LinkedIn posts
- Reddit
- Hacker News
- YC
- Product Hunt

Use official APIs/RSS/CLI where available. Treat LinkedIn, X.com, Reddit, and
other social sources as manual-review sources unless a stable public API or feed
is configured.

### Video

- YouTube channels
- Conference talks
- Demo videos

### Company And Product Signals

- Scientific agents
- Lab automation
- Molecular design
- Materials discovery
- Literature review tools
- Experiment planning tools
- Scientific workflow automation

## Post Structure

Use this structure for most daily posts.

### 1. Signal

What happened? One source, one tool, one paper, one repo, or one demo.

Keep it factual. Do not overstate the source.

### 2. Why It Matters

Explain the practical pattern:

- Does it improve retrieval?
- Does it make evaluation easier?
- Does it help tool use or workflow state?
- Does it connect models to experiments?
- Does it make scientific work more traceable?
- Does it reduce manual friction for a scientist?

### 3. ScientificLoop Angle

Explain how this affects the ScientificLoop direction:

- A feature to test.
- A workflow pattern to borrow.
- A failure mode to avoid.
- A source to add to the agent corpus.
- A benchmark or small demo to build.

### 4. Useful Question

End with one practical question, not a slogan.

Good examples:

- What would make this reliable enough for a scientist to trust?
- Where should the human review gate sit?
- What evidence should the agent cite before suggesting the next experiment?
- Is this a tool, a workflow, or just an interface?

## Rich Technical Article Structure

Use this when a topic needs more than a short daily signal. Do not expand just
to make the article look substantial. Expand only when there is a real scenario,
trace, diagram, caveat, or implementation lesson.

1. **Problem hook.** Start with a scientific or engineering bottleneck the
   reader recognizes.
2. **Nut graf.** Say what the article explains, why it matters, and who should
   care.
3. **Source facts.** Summarize the paper/tool/repo/announcement with a link.
4. **Concrete scenario.** Use one realistic workflow, clearly labeled if
   hypothetical.
5. **Diagram or trace.** Prefer a simple original flow:

   ```text
   Question -> Evidence -> Tool/action -> Artifact -> Evaluation -> Human review -> Next step
   ```

6. **Technical mechanism.** Explain retrieval, tool state, artifacts,
   benchmarks, MLOps, data flow, or evaluation only as far as needed.
7. **Use cases.** List plausible applications, not promised capabilities.
8. **Failure modes.** Name missing citations, weak benchmarks, unsafe
   automation, private-data risk, or physical-validation gaps.
9. **Practical next step.** End with a checklist, small test, or follow-up
   research question.

Strong technical articles feel useful because they let the reader inspect the
path from problem to evidence to decision.

## LinkedIn / Short Technical Post Shape

Use this shape when adapting a website note to LinkedIn:

1. Open with one technical tension.
2. Explain the source in one or two sentences.
3. Give one reusable pattern.
4. Add one caveat.
5. Ask one expert-level question.
6. Link the source.

Target length: 120-220 words. One post, one idea.

Good question examples:

- What would you benchmark first?
- Where should the human review gate sit?
- What artifact would make this output auditable?
- Where would this fail in a real lab workflow?

## Tone

Use:

- Clear, compact sentences.
- Concrete nouns: corpus, citation, trace, workflow, benchmark, candidate,
  experiment, retrieval, evaluation.
- Modest claims: "I am testing", "this suggests", "a useful pattern is",
  "the failure mode is".
- First-person judgment when useful: "My read is", "I would watch", "For
  ScientificLoop, this matters because".

Avoid:

- Hype: revolutionary, game-changing, mind-blowing, everything changes.
- Empty AI words: unlock, transform, seamless, magical, next level.
- Overclaiming autonomy.
- Unsupported metrics.
- Employer-private details.
- Personal job-search details.

## Claim Safety

Every post should pass these checks:

- Is the source linked?
- Are facts separated from interpretation?
- Is any prototype clearly called a prototype?
- Does the post avoid private or confidential context?
- Would the claim survive an interview follow-up?
- Is the ScientificLoop connection real, not forced?

## Preferred Titles

Use titles that describe the idea, not the hype.

Good:

- "A Repo Worth Watching: Scientific Agent Skills"
- "Why Scientific Agents Need A Trace"
- "The Small Missing Piece In AI Literature Review Tools"
- "What A Lab Automation Demo Suggests For ScientificLoop"

Weak:

- "The Future Of Science Is Here"
- "This AI Tool Changes Everything"
- "Amazing New Agent For Research"

## LinkedIn Adaptation

Website posts can be more analytical. LinkedIn posts should be shorter and more
conversational:

1. State the signal.
2. Give one practical takeaway.
3. Connect it to ScientificLoop.
4. Ask one question.

Do not post more than one idea at a time.

## Daily Signal Workflow

Use the short workflow when the goal is "one useful thing today."

```bash
npm run daily:signal -- --dry-run
npm run daily:signal
```

The workflow searches:

- RSS sources from `src/data/ai_radar_sources.json`.
- GitHub repository search, ranked by stars and relevance.
- Hacker News search, ranked by discussion signal.

It also carries configured page/watchlist sources into the sidecar log as
article idea sources. These links are prompts for manual review, not automatic
facts. Reopen the primary source before repeating any claim.

It generates a draft Markdown post in `src/content/blog/`. The draft must still
be reviewed and edited before publishing.

Manual-review sources, such as LinkedIn, X.com, Reddit, YouTube, YC, Product
Hunt, and company pages without stable RSS, can be used as inputs, but should
not be auto-published without human review.
