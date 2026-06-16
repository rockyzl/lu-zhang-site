# Loop Engineering For Scientific Workflows

Draft status: first internal learning note.

Source caveat: this note started from the YouTube title and public metadata.
Afterward, a Chinese transcript was available and fetched locally for the
shorter companion note in `docs/loop-engineering-notes.md`. Treat this file as a
workflow interpretation draft, not a verbatim transcript or final public article.

What I used from the sources:

- The YouTube video title gave the starting question: the control point is
  moving from prompt to loop.
- Addy Osmani's note gave the practical parts: automations, worktrees, skills,
  connectors, subagents, and memory.
- Louis Bouchard's note made the trigger, verifiable goal, and hard brakes
  explicit.
- Developers Digest gave a compact map of goals, interval loops, automations,
  security scans, memory, and human-in-the-loop checkpoints.

## What I Think It Means

My current read is simple: loop engineering means designing the repeated work
around an AI agent.

With normal prompting, I ask one question, inspect the answer, then ask the next
question. I am the loop. I notice what failed. I paste the error. I tell the
model to try again. I decide when to stop.

With loop engineering, some of that repeated control is written down as a small
system. The system starts from a trigger, gives the agent context, lets it take
an action, checks the result, records state, and decides whether to continue,
retry, ask for help, or stop.

A plain automation runs a fixed set of steps. A loop reads the current state,
chooses the next step, checks the result, and decides whether another pass is
needed.

For scientific work, this matters because many research tasks already look like
loops:

- search papers;
- read abstracts;
- keep or reject evidence;
- check the original method;
- compare claims;
- find missing controls;
- revise the question;
- repeat.

The AI part is not magic here. The useful part is forcing myself to name the
steps, the stop rule, and the checks. That is what I want to learn from this
idea.

## Prompting vs Loop Engineering

Prompting is still useful. If I need a quick summary of one paper or a first
draft of a search query, one prompt may be enough.

Loop engineering is for work that repeats and has feedback. A literature review
is a good example. I do not only want "summarize these papers." I want:

1. search for candidate papers;
2. remove weak or unrelated results;
3. extract claims, methods, materials, datasets, and limitations;
4. check whether each claim is supported by the cited paper;
5. mark uncertainty;
6. update a review table;
7. stop when the question has enough evidence or when the loop is no longer
   finding new useful papers.

The prompt becomes one part of the system. The harder questions move outside the
prompt:

- What sources can the agent use?
- What counts as enough evidence?
- What should be checked by code, by another model, or by a human?
- How many retries are allowed?
- Where is the state stored?
- What should happen when the evidence is mixed?

For science, I would rather have a plain loop with a visible evidence table than
a beautiful one-shot summary that hides how it chose the papers.

## The Parts Of A Loop

This is the version that makes sense to me right now.

**Trigger**

Something starts the loop. It could be a manual command, a daily schedule, a new
paper alert, a new PDF in a folder, a failed reproducibility check, or a research
question added to a queue.

**Goal**

The loop needs a goal that can be checked. "Understand battery electrolyte
papers" is too vague. "Find 10 recent papers on fluorinated ether electrolytes
for lithium metal batteries and extract electrolyte composition, cell type,
cycling conditions, Coulombic efficiency, and failure notes" is much better.

**Context**

The agent needs the right material, not everything. For a paper loop, context
might include the research question, inclusion and exclusion rules, known
keywords, trusted databases, a citation format, and examples of good and bad
evidence.

**Skills**

A skill is project memory written as instructions the agent can reuse. For a
science loop, a skill might define the extraction schema, trusted sources,
review rules, stop conditions, and examples of claims that should be rejected.
Without this, the loop relearns the same rules each run.

**Tools**

The loop needs tools to act. For scientific workflows, that could be search,
PDF parsing, citation lookup, table extraction, code execution, unit conversion,
plot checking, notebook execution, or access to a lab inventory system.

**Isolation**

If more than one agent is working, the loop needs separate workspaces or clear
file ownership. In code this can be a git worktree. In research work it might
be separate folders for different search strategies, parsers, or analysis
notebooks. The point is simple: parallel work should not quietly overwrite
itself.

**State**

The loop needs a memory outside the chat. A Markdown note, CSV, SQLite database,
Zotero collection, or issue board can hold what was searched, what was kept,
what failed, and what needs human review.

**Verifier**

The loop needs a check that is stronger than the same agent saying "done." In
software, this might be tests. In science, it might be citation checks, schema
validation, duplicate detection, unit checks, figure-value checks, or a second
agent that argues against the first agent's evidence selection.

**Stop Rule**

The loop needs to know when to stop. Good stop rules can be simple:

- stop after 30 papers;
- stop after 3 search rounds with no new relevant papers;
- stop when every extracted claim has a source link and confidence label;
- stop when the human review queue has more than 10 uncertain items;
- stop when token or cost budget is reached.

Without a stop rule, the loop can keep polishing, retrying, or searching without
making the scientific answer better.

**Budget And Brakes**

The loop also needs limits: maximum papers, maximum iterations, maximum runtime,
maximum token cost, and a "no progress" rule. A loop that keeps running after
it stops learning is not doing research. It is spending budget.

## How This Maps To Scientific Work

I see loop engineering as a way to make scientific AI work more inspectable.

The useful mapping is:

```text
scientific question
-> evidence search
-> evidence selection
-> claim extraction
-> interpretation
-> experiment or simulation plan
-> reproducibility check
-> human decision
```

Each stage can have a small loop.

For paper search, the loop can try search terms, collect candidates, remove
duplicates, and record why each paper was kept or rejected.

For evidence selection, the loop can compare abstracts and methods against the
question. If I ask about solid-state electrolytes, it should not quietly include
liquid electrolyte papers because the title has similar words.

For claim interpretation, the loop can extract a claim and then check the
original figure, table, or method section. This is where I care as a chemist. A
fluent summary is cheap. The hard part is whether the method supports the claim.

For experiment planning, the loop can draft candidate experiments, list
controls, name safety checks, and mark assumptions. It should not decide the
experiment alone. It can prepare the review.

For reproducibility checks, the loop can rerun notebooks, compare reported
values, check units, and flag missing details such as current density,
temperature, catalyst loading, electrolyte concentration, or sample size.

The loop is useful when it leaves a trail. I want to see the rejected papers,
the extracted evidence, the uncertain claims, and the checks that passed or
failed.

## A Literature Review Loop

Here is a first practical loop I would try.

Question:

```text
What recent evidence supports using fluorinated ether electrolytes to improve
lithium metal battery cycling stability?
```

Trigger:

```text
Manual run, then weekly run if the first result is useful.
```

Inputs:

- research question;
- date range;
- search terms;
- inclusion rules;
- exclusion rules;
- fields to extract;
- maximum papers per run;
- output table path.

Loop:

1. Search Google Scholar, Semantic Scholar, Crossref, or another allowed source.
2. Save candidate title, DOI, year, venue, and abstract.
3. Remove duplicates.
4. Score relevance against the question.
5. Keep papers that study lithium metal batteries with fluorinated ether
   electrolyte components.
6. Reject papers that only mention the topic in passing.
7. For each kept paper, extract materials, cell setup, cycling conditions,
   reported metrics, and main claim.
8. Check whether the main claim points to a figure, table, or experiment.
9. Mark each row as `supported`, `unclear`, or `needs human check`.
10. Write a short summary of what changed since the last run.

State:

```text
docs/research-notes/electrolyte-loop-state.csv
docs/research-notes/electrolyte-loop-review.md
```

Verifier:

- every kept paper must have DOI or stable URL;
- every extracted metric must include units;
- every strong claim must include a source section, figure, or table;
- every paper must have a keep/reject reason;
- no row can have an empty uncertainty field.

Stop rule:

- stop after 30 candidate papers;
- stop after 10 kept papers;
- stop after 3 search queries with no new kept papers;
- stop if more than 5 rows need human review.

Human output:

The loop should not write the final conclusion. It should give me an evidence
table and a short list of claims worth checking.

## Where Humans Still Need To Check

The human check is not decoration. It is the scientific control.

I would still check:

- whether the research question is framed correctly;
- whether the search terms miss a whole subfield;
- whether a paper is being included for the wrong reason;
- whether the reported metric is comparable across studies;
- whether the model confused similar materials or acronyms;
- whether the experiment has enough controls;
- whether the result is actually reproducible;
- whether the conclusion is stronger than the evidence.

In chemistry, small details change the meaning. A cycling result at one current
density may not support a claim at another. A catalyst loading can make a fair
comparison unfair. A method that works in coin cells may not transfer to pouch
cells. The loop can flag these details, but I would not let it make the final
judgment by itself.

## Failure Modes

**Vague goals**

If the goal is vague, the loop will still produce output. That is dangerous
because the output can look organized. "Find important papers" is too loose.
"Find papers that meet these rules and explain why each was kept" is safer.

**Hidden evidence selection**

The loop may choose papers based on title match, citation count, or easy access,
then present the result as if it found the best evidence. I want keep/reject
reasons saved for every candidate.

**Citation drift**

The summary may cite a real paper but attach the wrong claim to it. This is one
of the main reasons I would require claim-to-figure or claim-to-section checks.

**Unit and condition errors**

Scientific claims often depend on units and conditions. mA/cm2, C-rate,
temperature, pH, solvent ratio, catalyst mass, and sample size are not small
formatting details. A loop that drops these details can mislead the whole review.

**Over-retry**

If the loop fails, it may keep retrying the same weak strategy. It needs a retry
limit and a "no progress" check.

**Cost creep**

Long loops can use a lot of tokens and API calls. For SciencesLoop, I would set
a small budget first and make the loop stop early with a useful partial result.

**False confidence from a verifier**

A second agent can help, but it is still an AI check. It can miss the same
scientific issue as the first agent. For high-stakes claims, the verifier should
include deterministic checks where possible: schema checks, unit checks, DOI
checks, notebook reruns, and exact source links.

## A Simple Starting Loop For SciencesLoop

I would start with a small weekly literature triage loop, not a full research
agent.

Goal:

```text
Find 5-10 new AI-for-science papers or tools worth reviewing for SciencesLoop.
For each item, record the workflow stage, source link, evidence quality,
reproducibility clues, failure mode, and a practical test.
```

Trigger:

```text
Manual run on Monday morning.
```

Inputs:

- known source list;
- search terms;
- SciencesLoop signal card fields;
- examples of good notes;
- examples of topics to skip.

Actions:

1. Search recent papers, repos, and technical posts.
2. Save candidates with source links.
3. Deduplicate.
4. Assign each candidate to a workflow stage:
   `question`, `evidence`, `tool/model`, `hypothesis`,
   `experiment/simulation`, `conclusion`, `reproducibility`,
   or `publication/decision`.
5. Write one sentence on why it matters.
6. Write one failure mode.
7. Write one practical test.
8. Put uncertain items in a review queue.

Checks:

- no candidate without a source URL;
- no candidate without a workflow stage;
- no "sounds cool" reason without a concrete scientific task;
- no final claim unless the source supports it;
- stop after 10 candidates or 45 minutes.

Output:

```text
docs/research-notes/sciencesloop-weekly-triage.md
```

My judgment: this is useful because the cost of a bad triage note is low. The
loop can help me notice sources and prepare a review. I still decide what is
worth writing.

## What I Would Not Automate Yet

I would not automate final scientific conclusions.

I would also avoid fully automated experiment planning where the output could be
used directly in a lab without review. The loop can suggest controls, surface
risks, and find missing parameters. A human should still check safety, material
availability, instrument limits, and whether the experiment answers the real
question.

I would not automate peer-review-like judgment yet. The loop can prepare a
review table, find missing citations, and compare claims to evidence. It should
not decide that a paper is "good" or "bad" without a human reading the key
sections.

I would be careful with automated literature rankings. Ranking can hide bias
toward famous labs, high-citation papers, English-only sources, easy-to-parse
PDFs, or papers that use the same words as my query. For now, I would rather
have a transparent evidence table than a ranked list that looks too clean.

## Great Resources To Revisit

These are worth keeping in the SciencesLoop reading list.

| Resource | Why it is useful |
|---|---|
| Addy Osmani - Loop Engineering | Best practical map of the parts: automations, worktrees, skills, connectors, subagents, and memory. Useful when I need to design the loop shape. |
| Louis Bouchard - Loop Engineering Explained | Good plain explanation of why trigger, verifiable goal, and hard brakes matter. Useful when I need to decide whether a task deserves a loop at all. |
| Developers Digest - Loop Engineering in 9 Minutes | Short chaptered walkthrough of goals, interval loops, automations, memory, and human-in-the-loop checks. Useful for a quick refresher. |
| YouTube video that triggered this note | Useful as the Chinese-language signal that this idea is spreading. I should not treat it as a quoted source unless I can retrieve and check the full transcript. |

My read: Addy is the best architecture reference, Louis is the best cautionary
explanation, and Developers Digest is the best quick orientation. For
SciencesLoop, I would use them as engineering references, then translate the
idea into scientific workflows myself.

## Sources

- https://www.youtube.com/watch?v=fS-3o4Tz5cI
- https://addyosmani.com/blog/loop-engineering/
- https://www.louisbouchard.ai/loop-engineering/
- https://www.developersdigest.tech/tutorials/nKlF15Ic78w
