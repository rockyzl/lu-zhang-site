# Loop Engineering Notes

Source note:

- Video: [Loop Engineering 火了：AI Agent 的杠杆，正在从 Prompt 移到 Loop](https://www.youtube.com/watch?v=fS-3o4Tz5cI), 灵姐说AI / Ling Talk AI, 2026-06-16, about 17 minutes.
- Transcript status: Chinese transcript available and fetched locally for summarization. This note is a summary and interpretation, not a verbatim transcript.
- Cross-reference: [Loop Engineering](https://addyosmani.com/blog/loop-engineering/) by Addy Osmani.

## One-Sentence Read

Loop engineering means designing the recurring control loop around an AI agent:
what wakes it up, what context it reads, what it does, who checks it, what gates
stop it, and what memory is written back so the next run is better.

This is different from writing one better prompt. The unit of work becomes a
repeatable cycle.

```text
goal -> plan -> execute -> observe -> review -> repair -> record memory -> next run
```

## Why This Matters Now

The video frames the recent interest in loop engineering as a response to a few
practical changes:

- coding agents can now work on longer tasks;
- models can call more tools and plugins;
- enterprise users care about repeatable, testable, auditable agent workflows;
- token cost, failure rate, permissions, and privacy become real problems once
  agents run inside production work.

My read: this is close to what we need for SciencesLoop. A scientific agent is
not useful only because it answers. It becomes useful when its work can repeat,
be checked, and improve without turning into hidden automation.

## The Two Levels

The video separates two ideas.

### Agent Loop

This is the basic mechanism:

```text
set goal -> plan steps -> execute -> observe result and process -> improve -> repeat
```

The important part is the observation step. Many people stop after execution.
Loop thinking asks whether the result and the process should be inspected before
the next run.

### Loop Engineering

This is the product and engineering layer around the agent loop. It asks:

- how the loop starts;
- what context and tools it gets;
- how parallel agents avoid conflicts;
- how the maker and reviewer roles are separated;
- how failures and lessons are written back into memory;
- when the loop stops or asks for a human decision.

## The 5:01 Point: Maker/Checker Loop

The user-provided timestamp lands near a useful part of the video: a two-agent
pattern.

The pattern is simple:

```text
agent A executes
agent B observes, critiques, or verifies
agent A repairs
the loop records what happened
```

This matters because the same agent that creates the answer can overfit to its
own plan. A separate reviewer changes the failure surface. The reviewer can
check the goal, acceptance criteria, source evidence, tests, and risky actions.

For SciencesLoop, this maps well to:

```text
Writer agent -> Review agent -> Build/test gate -> Publish decision
Research agent -> Evidence checker -> Signal card -> Article decision
API agent -> Eval harness -> Safety/citation check -> Deploy decision
```

The reviewer is not decoration. It deserves its own tokens and its own task.

## Components of a Good Loop

The video discusses Addy Osmani's framing as five components plus state/memory.
I would describe them this way for our own use.

### 1. Automation

The loop needs a trigger.

Examples:

- daily signal scan;
- scheduled API eval;
- site build after article changes;
- weekly backlog review;
- post-publication feedback check.

Without automation, the loop is only a manual run.

### 2. Worktree or Isolation

Parallel agents need a safe place to work.

Examples:

- separate git branch or worktree for site changes;
- API lane separate from content lane;
- no two agents editing the same file without a lock or explicit ownership.

The goal is not more agents. The goal is useful parallelism without hidden file
conflicts.

### 3. Skills

Skills are reusable experience.

Examples:

- article writing protocol;
- Workday application protocol;
- LinkedIn post protocol;
- Vercel deployment protocol;
- agent eval protocol.

Skill is memory in executable form. A loop uses skills repeatedly.

### 4. Connectors

Connectors give the agent hands.

Examples:

- GitHub / git;
- Gmail;
- Vercel;
- browser automation;
- RSS / arXiv / GitHub source collectors;
- future comments or CMS backend.

The risk is permission. More connectors increase capability and blast radius.

### 5. Subagents

Subagents let roles differ.

Useful roles:

- maker: writes code or content;
- reviewer: checks facts, tests, risks, and style;
- doc worker: records decisions and updates task lists;
- integration checker: builds, deploys, and smoke-tests;
- safety checker: looks for private data, invented claims, or unsafe URLs.

The role split is more important than the agent count.

### 6. State and Memory

The loop should write durable state.

Examples:

- `docs/live-task-list.md`;
- `docs/content-system-roadmap.md`;
- eval reports;
- daily signal sidecars;
- changelog or deployment notes;
- failure notes.

If the next run cannot see what the last run learned, the loop does not compound.

## Missing Pieces I Would Add

The video adds several practical points that are important for enterprise or
public-facing work.

### Acceptance Criteria

Every loop needs a stop condition.

Bad:

```text
Improve the article.
```

Better:

```text
Pass content guard, build, remove LinkedIn draft from public body, show source
links, and produce one reviewed LinkedIn post sidecar.
```

### Permission Boundaries

The loop must know what it can and cannot do.

Examples:

- never submit an application without human approval;
- never publish a LinkedIn post without review;
- never expose tokens or private job-hunting material;
- never auto-delete user files;
- never claim Lu did work that is not fact-backed.

### Human Gate

Some actions should pause for a human.

Examples:

- public post submission;
- job application submission;
- changing DNS;
- sending messages to real people;
- irreversible billing or payment actions.

### Observability

The process has to be visible, not only the final output.

For SciencesLoop this means:

- build logs;
- eval outputs;
- source links;
- article sidecars;
- task board updates;
- smoke-test results;
- clear commit messages.

## How This Applies to SciencesLoop

The most useful product loop right now is the publishing loop.

```text
collect signals
-> rank candidates
-> pick one source-backed signal
-> draft article
-> create visual signal card
-> write Chinese adaptation if useful
-> content guard
-> build
-> deploy
-> draft LinkedIn post
-> collect comments / feedback
-> update backlog
```

This can become a real product surface later. The immediate goal is simpler:
make the loop reliable enough that one useful signal can become one good article
without manual chaos.

## SciencesLoop Loop Candidates

### Daily Signal Loop

Trigger:

- daily or manual run.

Inputs:

- configured RSS, arXiv, GitHub, AI lab, and startup sources.

Checks:

- primary source exists;
- workflow stage is clear;
- practical test exists;
- no hype-only item.

Output:

- one article candidate;
- full candidate archive;
- sidecar with skipped items and reasons.

### Article Quality Loop

Trigger:

- new draft or edited article.

Checks:

- source-vs-interpretation boundary;
- no fake claims;
- no LinkedIn draft in article body;
- human voice pass;
- visual attribution;
- build pass.

Output:

- publishable article;
- LinkedIn main post and first-comment draft.

### Public Agent Safety Loop

Trigger:

- API code or corpus change.

Checks:

- eval harness;
- private-access prompt tests;
- citation source checks;
- unsafe URL checks;
- bilingual behavior checks.

Output:

- deploy/no-deploy decision;
- eval report;
- smoke-test evidence.

### Feedback Loop

Trigger:

- after a post or article goes live.

Inputs:

- LinkedIn comments;
- site comments if enabled;
- emails;
- analytics;
- manual reader feedback.

Checks:

- what confused readers;
- what evidence they asked for;
- which examples were missing;
- whether a follow-up article is warranted.

Output:

- revised article if needed;
- follow-up topic;
- source queue update.

## Failure Modes

Loop engineering can fail quietly.

- The loop runs, but no one checks whether the work improved.
- The reviewer role is too vague and rubber-stamps the maker.
- The loop writes memory, but future runs do not read it.
- Automation hides permission risk.
- More subagents create coordination noise.
- The loop optimizes for passing local checks while missing the real user need.
- Token cost grows faster than value.

The practical test is to ask:

```text
Did the next run become faster, safer, or better because of the previous run?
```

If the answer is no, it is automation, not compounding loop engineering.

## Working Definition for Future Articles

For SciencesLoop writing, I would use this definition:

> Loop engineering is the design of repeatable AI work cycles with triggers,
> tools, reviewer roles, gates, observable traces, and memory.

This keeps the concept grounded. It avoids turning "loop" into a vague slogan.

## Great Resources To Revisit

These are useful in different ways. I would not treat all of them as equal
evidence.

| Resource | How to use it |
|---|---|
| Addy Osmani - Loop Engineering | Best architecture reference for loop parts: automations, worktrees, skills, connectors, subagents, and memory. Use it when designing the loop shape. |
| Louis Bouchard - Loop Engineering Explained | Useful plain-language explanation of triggers, verifiable goals, hard brakes, and why loops should not run without stop rules. Use it as a cautionary reference. |
| Developers Digest - Loop Engineering in 9 Minutes | Useful quick refresher on goals, interval loops, automations, memory, security checks, and human-in-the-loop checkpoints. Use it for orientation, then verify with primary sources. |
| Ling Talk AI video | Useful Chinese-language signal and applied framing. Use it for concept adoption and examples, not as the only source for factual claims. |

My current source hierarchy:

```text
Addy Osmani primary architecture reference
-> Louis Bouchard / Developers Digest secondary explainers
-> Ling Talk AI video as Chinese-language adoption signal
-> our own SciencesLoop implementation notes as practical evidence
```

## Sources

- YouTube video: [Loop Engineering 火了：AI Agent 的杠杆，正在从 Prompt 移到 Loop](https://www.youtube.com/watch?v=fS-3o4Tz5cI)
- Addy Osmani: [Loop Engineering](https://addyosmani.com/blog/loop-engineering/)
- Louis Bouchard: [Loop Engineering Explained](https://www.louisbouchard.ai/loop-engineering/)
- Developers Digest: [Loop Engineering in 9 Minutes](https://www.developersdigest.tech/tutorials/nKlF15Ic78w)
- Internal next check: compare this note with our current `docs/live-task-list.md`,
  `docs/content-system-roadmap.md`, and daily signal generator.
