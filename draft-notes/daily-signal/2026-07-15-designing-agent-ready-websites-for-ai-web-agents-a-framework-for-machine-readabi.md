# Daily signal sidecar - 2026-07-15

## Selected Signal

- Title: Designing Agent-Ready Websites for AI Web Agents: A Framework for Machine Readability, Actionability, and Decision Reliability
- URL: https://arxiv.org/abs/2607.12056
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Designing Agent-Ready Websites for AI Web Agents: A Framework for Machine Readability, Actionability, and Decision Reliability
- Primary source: https://arxiv.org/abs/2607.12056
- Discovery source: arXiv cs.AI
- Workflow stage: tool/model -> reproducibility
- Pattern: Turn a model response into a traceable workflow artifact.
- Failure mode: The workflow may look agentic while hiding state, tool errors, or handoff decisions.
- Practical test: Run one narrow task with logged tool calls, expected artifacts, failure injection, and a human review gate.
- Evidence Quality: Unknown until human review
- Reproducibility: Unknown until human review
- Workflow Utility: Candidate
- Transferability: Unknown until human review
- Validation Cost: Unknown until human review
- Run Status: automated scan only; source not yet reviewed in detail
- Publish decision: draft for human review

## Why This Won

Selected by the automated ranker because it matched the AI-for-science keyword
set and had a strong source/popularity signal. Human review is still required
before publishing.

## Claims Checked / Not Repeated

- Do not repeat adoption numbers, benchmark claims, or "AI scientist" marketing
  phrases without source verification.
- Public post should separate source facts from SciencesLoop interpretation.
- Treat this as a candidate workflow to test, not a trusted tool recommendation.

## Other Candidates Reviewed

Total candidates reviewed after duplicate-source filtering: 65

1. [Designing Agent-Ready Websites for AI Web Agents: A Framework for Machine Readability, Actionability, and Decision Reliability](https://arxiv.org/abs/2607.12056)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.12056v1 Announce Type: new Abstract: Online shopping is increasingly shifting toward a model in which AI agents independently search for products, compare options, evaluate constraints, and carry out parts of the purchasing process for users. Website design must now support both human and agent-mediated interaction. This paper introduces the agent-ready website, a design framework for enhancing the readability, interpretability, verifiability, and actionability of e-commerce platforms for AI agents. Existing web design, SEO, and generative engine optimization (GEO) metrics do not fully assess a website's capacity for agent-mediated interaction. The proposed framework is structured around three dimensions agent interpretability, agent executability, and agent decision reliability supported by features such as machine readability, semantic clarity, agent actionability, and contextual decision-reliability signals. The framework is evaluated through a controlled experiment comparing a human-oriented baseline and an agent-ready version of an identical website prototype, with identical catalogs, pricing, stock, and shopping workflows. The evaluation involved five tasks, three browser-agent models (GPT-4.1, Gemini-2.5 Flash, and Grok-4 Fast), and 300 runs, measuring PASS,PARTIAL,FAIL outcomes, strict and functional success rates, error patterns, step counts, and token consumption. The agent-ready website achieved 134 PASS runs out of 150 versus 74 out of 150 for the baseline (strict success rates of 89.3% vs. 49.3%), with the largest gains in product detail extraction, comparison, and multi-constraint selection. It also reduced PARTIAL outcomes from 43 to 3 and lowered the average step count from 9.31 to 6.49. These results provide preliminary evidence that enhanced structural clarity, action cues, evidence signals, and temporal validity indicators can substantially improve the reliability and efficiency of AI browser agents.

2. [Operationalising Multi-Dimensional Evaluation for Conversational Agents: A Scalable, Governed Pipeline with Selective Re-evaluation and Model Benchmarking](https://arxiv.org/abs/2607.12085)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.12085v1 Announce Type: new Abstract: Evaluating retail conversational agents requires methods beyond lexical-overlap metrics to assess intent alignment, factuality, helpfulness, clarity, tone, and overall response quality. Although LLM-as-a-judge methods provide scalable alternatives to human evaluation, production deployment introduces challenges in governance, reproducibility, cost, schema consistency, traceability, and reliability. We present GenAI Evaluation, a governed, configuration-driven pipeline for large-scale evaluation of retail conversational systems. It processes production chatbot logs through normalization, sharding, asynchronous execution, and schema-constrained LLM scoring. The framework evaluates helpfulness, truthfulness, clarity, tone alignment, and translation-specific dimensions. Selective re-evaluation processes only incomplete, malformed, or schema-invalid records, while schema locking, versioned configurations, validation logs, and record-level provenance support auditability. The framework processes approximately 50,000 records daily and has evaluated more than two million interactions. Validation used 12,980 stratified-random human-labeled records from four trained annotators. Classification covered 14 intents, 156 sub-intents, 18 major domains, and 129 sub-domains. The pipeline achieved a macro F1 score of 0.93 and 89% human-acceptability accuracy for translation.

3. [How to manage AI investments in the agentic era](https://openai.com/index/managing-ai-investments-in-agentic-era)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 14 Jul 2026 10:00:00 GMT
   - Summary: Learn how enterprises can manage AI investments in the agentic era by measuring useful work per dollar, improving efficiency, and scaling high-value workflows.

4. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

5. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

6. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

7. [Run AI workloads on any cloud, store on Hugging Face: zero-egress storage with SkyPilot](https://huggingface.co/blog/skypilot-hf-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

8. [Optimal Adaptive Market Making: A Theoretical Framework for High-Yield Liquidity Provision in Perpetual Futures Markets](https://arxiv.org/abs/2607.11888)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11888v1 Announce Type: new Abstract: We develop a rigorous theoretical framework for optimal market making in perpetual futures markets with zero maker fees. We model the market maker's problem as a stochastic optimal control problem on a filtered probability space, where the controls are adaptive bid-ask spreads and inventory hedging decisions across two exchanges. Our contributions include: (i) a PnL decomposition theorem separating revenue into spread income, adverse selection loss, inventory carrying cost, hedging friction, and funding rate exposure; (ii) the Hamilton-Jacobi-Bellman equation for the joint spread-inventory-hedging control problem under CARA utility with a verification theorem; (iii) High-APY Regime Theorems characterizing profitable regions via five dimensionless parameters, culminating in a Master APY Formula; (iv) analysis of zero-fee economics on decentralized perpetual exchanges with optimal entry-exit thresholds; (v) optimal cross-exchange hedging policies with funding rate dynamics and a hedge regime trichotomy; (vi) a robustness margin quantifying parameter uncertainty tolerance; (vii) exponential drawdown probability bounds and a universal APY-VaR identity; (viii) ergodic inventory distribution under optimal control with Bayesian adaptive estimation; (ix) Kelly-optimal leverage with ruin boundaries; and (x) multi-pair portfolio allocation with diversification saturation results. Numerical analysis with twenty-three figures reveals phase transitions between profitable and unprofitable regimes. Our framework unifies and extends the Avellaneda-Stoikov, Gueant-Lehalle-Fernandez-Tapia, and Glosten-Milgrom paradigms for modern decentralized venue microstructure.

9. [In-Context Reinforcement Learning under Non-Stationarity: A Survey](https://arxiv.org/abs/2607.11906)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11906v1 Announce Type: new Abstract: The development of decision-pretrained transformers, algorithm distillation, long-context meta-RL, and retrieval-augmented agents has renewed interest in in-context reinforcement learning (ICRL): the ability of a pretrained or fine-tuned decision model to infer latent task rules and improve future behavior from interaction context, without test-time parameter updates. This line of work asks when trial-and-error evidence, rewards, transitions, demonstrations, feedback, or retrieved experience can make learning-like computation happen inside the context window. However, existing surveys of ICRL mainly organize the field around pretraining objectives, architectures, context formats, evaluation protocols, and theoretical mechanisms, while the non-stationary setting remains comparatively underexamined. In changing environments, accumulated context is not merely more evidence about a fixed task: the reward specification, transition kernel, observation channel, action interface, constraint model, or demonstration and memory distribution can fall out of alignment with the current regime. Previously useful context can therefore become stale, misleading, or useful again when an old regime returns. We survey non-stationary ICRL as the problem of adapting through context while deployed policy parameters remain fixed: the policy must infer both the current decision rule and which parts of its accumulated evidence still support that rule. We define non-stationary ICRL, relate it to meta-RL, decision sequence modeling, retrieval-augmented RL, value- and model-aware ICRL, and reward-feedback agents, and organize the literature along three questions: what changes, how the change unfolds, and how observable the change is to the agent.

10. [Ontology-Amplified Distillation and Contextuality Auditing for Sovereign Enterprise Language Models: A Combined Proof-of-Mechanism and Negative-Results Method Study](https://arxiv.org/abs/2607.11948)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11948v1 Announce Type: new Abstract: Regulated financial institutions operating under data-residency rules need tenant-owned language models that can run inside the institution's perimeter. This paper combines two related FAOS studies into one mechanism-and-control article. First, it reports a reduced-power proof-of-mechanism study of ontology-amplified distillation: a Qwen3.6-27B student is adapted to the Foundation AgenticOS ontology through supervised fine-tuning on frontier-teacher trajectories and ontology-grounded direct preference optimization (DPO), trained locally on a single Apple M5 Max from 47 synthetic, English-language, cross-domain preference pairs. On 40 held-out Vietnamese financial-domain tasks, the distilled student grounds 36 of 40 tasks (grounded rate 0.90; mean ontology term-coverage r_onto = 0.95 on a metric floored at 0.50), equal to the GPT-5 frontier baseline, which also grounds 36 of 40. The outcome is underpowered to establish equivalence: the paired-difference 95% confidence interval spans +/-4 tasks, and the run does not test or show the pre-registered amplification prediction that the student should exceed the frontier. Second, the paper consolidates a contextuality-audit method for enterprise-agent routing. In a separate negative-results pilot, the corrected canonical Contextuality-by-Default degree is zero for all Phase 1.3 groups in both the local-Qwen run and an explicitly labeled Gemma replication check; the useful signal is direct influence and construct coupling, not surviving residual contextuality. Together, the studies pair an ontology-grounded model-building mechanism with a governance diagnostic for deciding when apparent disagreement should trigger prompt standardization, multi-agent synthesis, or human review. The evidence supports neither deployability, safety, superiority, statistical equivalence, nor a contextuality-positive routing rule.

11. [Graph Feedback Controls Consensus and Clique Formation in Open-Weight Language-Model Populations](https://arxiv.org/abs/2607.12077)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.12077v1 Announce Type: new Abstract: Multi-agent language-model systems increasingly route local interactions, yet the runtime interaction graph is often treated as an implementation detail. We study convention formation in open-weight LM populations spanning 1.1B-32B parameters with a naming-game protocol. Restricted first-token scores over tokenizer-safe labels let us measure prompt-conditioned score-state distributions, construct state-similarity graphs, and separate sampled-label agreement from latent state-space consensus. Across controlled interventions, in the main open-weight repair grids, retained partner-label evidence is necessary but not sufficient: homophilous threshold-similarity routing deletes cross-basin exposure and amplifies fragmentation, while bridge-seeking routing often repairs fragmentation when memory is available. In a three-seed mixed four-model grid, threshold-similarity produces no final behavioral or state consensus in 189 setting-seed runs, whereas state-component and label-disagreement bridges recover final behavioral consensus in 14/18 retained-memory runs. Across homogeneous model populations, retained history generally shifts fragmented dynamics toward consensus; the clearest case is Qwen2.5-32B, which reaches stable behavioral and final state consensus in all 18 retained-history well-mixed settings, while threshold-similarity reaches neither form of consensus in 189 settings. Robustness over state thresholds, population size, and vocabulary size preserves the qualitative ordering, and early-window graph-energy features provide useful within-grid diagnostics.

12. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.38; Date: 2026-07-15T15:01:47Z; Popularity: 2,382 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

13. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-14T09:13:51Z; Popularity: 21 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

14. [How data science teams use ChatGPT Work](https://openai.com/academy/codex-for-work/how-data-science-teams-use-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 GMT
   - Summary: See how data science teams can use ChatGPT Work to build root-cause briefs, impact readouts, KPI memos, scoped analyses, and dashboard specs from real work inputs.

15. [How sales teams use ChatGPT Work](https://openai.com/academy/codex-for-work/how-sales-teams-use-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 14 Jul 2026 00:00:00 GMT
   - Summary: See how sales teams can use ChatGPT Work to create pipeline briefs, meeting prep packets, forecast reviews, account plans, and stalled-deal diagnoses from real work inputs.

16. [Getting started with ChatGPT](https://openai.com/academy/getting-started)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT
   - Summary: Learn how to use ChatGPT, start your first conversation, and discover simple ways to write, brainstorm, and solve problems with AI.

17. [GPT-5.6 is now the preferred model in Microsoft 365 Copilot](https://openai.com/index/gpt-5-6-preferred-model-microsoft-365-copilot)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 13:00:00 GMT
   - Summary: Learn how GPT-5.6 powers Microsoft 365 Copilot with stronger AI capabilities across Word, Excel, PowerPoint, Chat, and Cowork for faster, higher-quality work.

18. [GPT-5.6: Frontier intelligence that scales with your ambition](https://openai.com/index/gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: More intelligence from every token, stronger performance per dollar, and more capability on demand for your hardest work.

19. [GPT-5.5 Bio Bug Bounty](https://openai.com/index/bio-bug-bounty)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: Details about the OpenAI Bio Bounty program

20. [ChatGPT is now a partner for your most ambitious work](https://openai.com/index/chatgpt-for-your-most-ambitious-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: ChatGPT Work is an agent that can take action across your apps and files, stay with a project for hours if needed, and turn a goal into finished work.

21. [Our approach to government and national security partnerships](https://openai.com/index/government-national-security-partnerships)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 13:30:00 GMT
   - Summary: Learn how OpenAI approaches government and national security partnerships, with principles for responsible AI use, democratic accountability, and public safety.

22. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

23. [Introducing Real World VoiceEQ: Measuring the human quality of voice AI](https://huggingface.co/blog/real-world-voiceeq)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

24. [Profiling in PyTorch (Part 3): Attention is all you profile](https://huggingface.co/blog/torch-attention-profile)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT

25. [Data for Agents](https://huggingface.co/blog/nvidia/open-data-for-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 17:16:05 GMT

26. [Native-speed vLLM transformers modeling backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT

27. [From Hugging Face to Amazon SageMaker Studio in one click](https://huggingface.co/blog/amazon/one-click-to-sagemaker-studio)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 21:15:33 GMT

28. [Hugging Face Models on Foundry Managed Compute](https://huggingface.co/blog/microsoft/foundry-managed-compute)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 15:20:06 GMT

29. [LeRobot v0.6.0: Imagine, Evaluate, Improve](https://huggingface.co/blog/lerobot-release-v060)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

30. [PRX Part 4: Our Data Strategy](https://huggingface.co/blog/Photoroom/prx-part4-data)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 15:30:55 GMT

31. [🤗 Kernels: Major Updates](https://huggingface.co/blog/revamped-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 00:00:00 GMT

32. [GRID: Grammar-Railed Decoding for Enterprise SQL Generation](https://arxiv.org/abs/2607.11951)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11951v1 Announce Type: new Abstract: Large language models can write SQL, but enterprise deployment demands more than plausible text: outputs must be syntactically valid, must respect per-role and per-schema policy, must carry provable (not best-effort) guarantees, must not slow down as generations grow, and must leave a compliance-grade record of every decision. We present GRID (Grammar-Railed Decoding), a grammar-constrained decoding engine that keys exact next-token masks on parser configurations (lexer scan state x LALR(1) stack) rather than on token sequences, and uses the incrementally advanced LALR(1) parser itself as a viable-prefix oracle. LLM tokens are bridged to grammar terminals by a byte-level trie walk with a context-independent/context-dependent split that makes cache-key soundness hold by construction. Role-based access control is compiled into the language: role projections subset the grammar's productions and schema lexicons restrict identifier terminals, so forbidden verbs and identifiers are unreachable at mask level. Four guarantees (soundness, completeness, termination, and near-constant per-token cost) are stated with explicit preconditions and each paired with a test or benchmark. Rust kernels bring the per-token mask to a 3.6-6.7 us median, ahead of llguidance at p50 and p90 on two tokenizers with zero false rejects; per-token guard cost is position-flat at n=16,000. On Spider, constrained decoding is worth +13 execution-accuracy points at 0.5B, and one checker-guided repair pass over the provably mask-unenforceable residue (column-level policy) lifts a 7B model to 94.5% executable. A hash-chained per-token audit trail replays bit-identically with 100% tamper detection. We state plainly what the mask cannot do (distribution faithfulness, column-level RBAC, non-LALR(1) languages) and where measured cost remains.

33. [Calibration-First Reward-Component Auditing for Reinforcement Learning Control in Smart Greenhouses](https://arxiv.org/abs/2607.11959)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11959v1 Announce Type: new Abstract: Greenhouse reinforcement learning can test climate-control ideas at a speed and scale that is difficult to achieve with crop experiments alone. For smart-greenhouse control, however, a single simulator return is not enough: a grower or control engineer also needs to know when the policy heats, enriches CO2, vents, manages humidity, deploys screens, or uses lamps.We propose a reproducible calibration-first reward audit framework that keeps named greenhouse-control reward components comparable across simulator training, facility-adapted rollouts, logged Autonomous Greenhouse Challenge records, and actuator-rule distillation. In GreenLight-Gym, the framework decomposes the scalar reward into conditional temperature, CO2, humidity and vapor-pressure-deficit, screen, and actuation-proxy terms; adapts GreenLight to the second Autonomous Greenhouse Challenge logged climate traces; and scores the same components on logged greenhouse data.

34. [Optimization Is Not All You Need](https://arxiv.org/abs/2607.11977)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11977v1 Announce Type: new Abstract: In 2019, OpenAI released two million GPT-2 outputs-ungrammatical, half broken-to aid the detection of machine-generated text. The alignment that produced their more fluent successors is usually regarded as an engineering achievement; we read it instead as the newest expression of optimization culture: the conviction, older than the technology, that measurable improvement along predefined axes exhausts the question of value. Tracing that conviction through the stack-pretraining, decoding, preference tuning, benchmarking, interface-and back through its genealogy in the audit society, we arrive at the limit: an optimization procedure can measure how improbable a piece of generated text is; it cannot tell whether that unlikelihood is error or invention. A procedure that cannot make that distinction has nonetheless, within half a decade, assumed the authority to set the protocols of legitimate language. Held for centuries by academies and schoolrooms, grammars and examiners, this authority has been given over to loss functions, reward models, benchmarks, and system prompts: an apparatus that executes the office of judgment with no capacity for judging.

35. [LP Mining with LP2Graph: A Use Case for Railway Rescheduling](https://arxiv.org/abs/2607.11980)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11980v1 Announce Type: new Abstract: Like many optimization-driven domains, railway rescheduling relies on Mixed-Integer Linear Programming (MILP), yet the field's modeling knowledge is scattered across hundreds of papers in incompatible notations, and narrative surveys organize it subjectively: they classify models by vocabulary rather than by structure, and reproduce neither. We present LP Mining with LP2Graph, a method that mines the structure of published LP and MILP formulations into a reproducible dataset and an induced taxonomy. Its core, LP2Graph, represents each formulation admitted by its canonical grammar as a typed variable--equation graph derived from a single canonical model; once a source is extracted into that model, everything downstream is deterministic. Each source is parsed into this model, homologized, and clustered bottom-up (over variables, then constraints and the objective, then whole-model structure) and, separately, by application domain and solution approach; the resulting groups are labeled by a rule-seeded, self-updating classifier. We validate the representation rather than assume it: per-cluster representatives are regenerated as independent LaTeX and re-solved across CBC, HiGHS and Gurobi against the optimum reported in the source paper. The outcome is an objective, repeatable taxonomy of variables, constraints and model types: the principled foundation on which our raiLPminer line of automated railway-rescheduling model development builds.

36. [How Query Visibility Changes KV-Cache Compression Rankings: A Matched-Budget Audit](https://arxiv.org/abs/2607.11942)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11942v1 Announce Type: new Abstract: KV-cache compression methods are predominantly evaluated with the query appended to the context before compression -- a query-aware protocol. Yet the economic case for a compressed KV cache is reuse: compress a document once, answer many future questions against it. In that deployment, compression must happen query-agnostic -- before any question is seen. We present a matched-budget audit of six published compression methods against three trivial baselines on three open 7-9B models (144,300 paired evaluations on RULER-8192; 40,800 on LongBench; 50,000-resample paired bootstrap throughout). Everything is held fixed -- model, compression ratio, instances, decoding -- except the scoring rule. Three findings. (1) Query visibility changes the rankings: under the agnostic protocol, of the five audited methods that share a common attention backend, only KeyDiff beats a best-of-3 trivial baseline consistently (31 of 36 cells), and the most widely deployed method, SnapKV, loses to "keep the start and the recent window" on average (-0.066). (2) The per-method drop between the two protocols is ordered consistently with how visible the question is to each method's scoring signal, legible in its source code: from Delta=+0.198 for SnapKV (the question sits inside its 64-token observation window) down to Delta=+0.011 for KeyDiff (its score contains no query term at all).

37. [BattVAE-GP: Generative Modeling of Long-Horizon Battery Degradation with Uncertainty Quantification](https://arxiv.org/abs/2607.11943)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11943v1 Announce Type: new Abstract: Long-horizon physics-based simulations of battery degradation provide mechanistic insight but remain computationally expensive, limiting their use for dense exploration of operating conditions over extended cycle life. Here, we propose a hybrid physics-probabilistic learning framework for surrogate modeling of lithium-ion battery degradation trajectories at unseen charging rates. Cycle-resolved degradation data generated with a DFN/P2D electrochemical model in PyBaMM are first transformed into capacity-aligned voltage and derivative features and encoded using a Variational Autoencoder (VAE). The resulting two-dimensional latent space organizes degradation trajectories according to both cycle progression and charging protocol. A sparse multitask Gaussian process (GP) is then trained in this latent space using cycle number and C-rate as input variables, providing continuous interpolation of latent degradation dynamics together with posterior uncertainty estimates. Under protocol-level holdout evaluation, the latent-space GP accurately recovers unseen C-rate trajectories and exhibits uncertainty behavior consistent with the support of the training data. When queried at unseen interior C-rates, the model generates latent trajectories that remain coherently positioned between neighboring simulated protocols. Decoding the GP-predicted latent states through the frozen VAE decoder yields smooth voltage-capacity evolution, while Monte Carlo propagation of the GP latent posterior through an auxiliary latent to State of Health (SOH) predictor provides uncertainty-aware SOH estimates. The proposed BattVAE-GP framework therefore offers a computationally efficient and uncertainty-aware surrogate for long-horizon degradation modeling, providing a structured basis for extending battery health prediction toward richer operating conditions and future simulation-experiment fusion.

38. [A Collocated Boris Integrator in Flux Coordinates: Balancing Accuracy, Conservation, Cost and Robustness](https://arxiv.org/abs/2607.12272)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.12272v1 Announce Type: cross Abstract: When the guiding-center description fails and the full gyromotion must be resolved for energetic particles in complex configurations like stellarators, charged-particle integrators must be formulated directly in the curvilinear flux coordinates. The Boris algorithm, which adopts a staggered scheme in Cartesian coordinates, is phase-space-volume-preserving and second-order accurate; but a direct port to flux coordinates degrades the position update to first order, because the evolving basis vectors of the curvilinear frame make the starting-point metric deviate from the ideal midpoint metric. We construct a collocated, midpoint-predicted Boris algorithm in flux coordinates, restoring second-order accuracy at the cost of one additional field evaluation per step. In reactor-scale stellarator magnetic fields, the scheme recovers second-order convergence in every coordinate component, retains near-machine-precision energy conservation and a bounded magnetic moment, and demonstrates greater orbit robustness than Staggered Boris and RK4 at coarse time steps.

39. [Inverse Engineering of Optical Constants in Photochromic Micron-Scale Hybrid Films](https://arxiv.org/abs/2602.16180)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2602.16180v2 Announce Type: replace Abstract: Photochromic materials enable dynamic optical modulation through reversible transitions between distinct absorption states, with broad potential for smart windows, adaptive optics, and reconfigurable photonic devices. Micron-scale photochromic hybrid films present a particularly attractive platform for these applications, combining straightforward preparation with substantial optical modulation and scalability for high-volume fabrication. However, rational design of such films remains fundamentally constrained by the absence of well-defined optical constants. Unlike homogeneous thin films, micron-scale hybrid photochromic materials comprise active particles dispersed non-uniformly within polymer matrices. Conventional first-principles electromagnetic simulations face substantial computational costs and discrepancies between simulated and experimental particle distributions. Here, we introduce a data-driven framework that extracts effective optical constants directly from minimal experimental transmittance measurements. Our dual-state effective model approximates the complex inhomogeneous photochromic layer as a compressed homogeneous medium characterized by pseudo-refractive indices and pseudo-extinction coefficients for both pristine and UV-irradiated states. Through systematic optimization against experimental data from tungsten oxide-polyvinylpyrrolidone hybrid films, we determine wavelength-dependent pseudo-optical constants and compression ratios that enable accurate prediction of optical modulation within the tested thickness range. Our methodology establishes a framework for engineering hybrid photochromic systems and demonstrates how data-driven modeling can overcome limitations in characterizing complex nanostructured materials.

40. [Machine Learning Based Mesh Movement for Non-Hydrostatic Tsunami Simulation](https://arxiv.org/abs/2603.06152)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2603.06152v2 Announce Type: replace-cross Abstract: This study investigates the use of machine learning based mesh movement method, specifically the Universal Mesh Movement Network (UM2N), with depth integrated non-hydrostatic shallow water models. Motivation for this comes from the need for models which balance efficiency and accuracy for use in probabilistic coastal hazard assessment. Implementations are built on the discontinuous Galerkin finite-element (DG-FE) based software, Thetis, which leverages the partial differential equation (PDE) framework Firedrake for automated code generation. Verification on benchmark test cases and validation against laboratory measurements of coastal hazards, focusing on tsunami propagation, run-up, and inundation is performed. In these tests, the UM2N-driven meshes help resolve key non-hydrostatic dynamics including wave refraction over a conical shoal, run-up with wetting-drying on a conical island, and tsunami inundation in the Monai Valley laboratory benchmark, and yield numerical solutions in close agreement with reference fine-mesh computations and measured data. Notably, in the Monai Valley case, UM2N achieves a ~91% reduction in wave-peak error at the nearshore gauge compared with ~74% for the conventional Monge--Amp\`ere (MA) mesh movement, both relative to the coarse fixed mesh. The UM2N surrogate based approach accelerates the conventional mesh movement step, achieving a ~32% reduction in total runtime and ~2 times speed-up in mesh movement step time over the MA solver on GPU, while offering a significant improvement in robustness over long integration periods and under strongly nonlinear wave conditions.

41. [An HHL-Based Quantum-Classical Solver for the Incompressible Navier-Stokes Equations with Approximate QST](https://arxiv.org/abs/2603.18222)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2603.18222v4 Announce Type: replace-cross Abstract: In computational fluid dynamics (CFD), the numerical integration of the Navier-Stokes equations is frequently constrained by the Poisson equation to determine the pressure. Discretization of this equation often results in the need to solve a system of linear algebraic equations. This step typically represents the primary computational bottleneck. Quantum linear system algorithms such as Harrow-Hassidim-Lloyd (HHL) offer the potential for exponential speedups for solving sparse linear systems, such as those that arise from the discretized Poisson equation. In this work, we successfully couple HHL to a discretized formulation of the incompressible Navier-Stokes equations and demonstrate both accurate lid-driven cavity flow simulations as a fully integrated benchmark problem, and accurate flow of the Taylor-Green vortex. To address the readout limitation, we utilize a recent novel quantum state tomography (QST) approach based on Chebyshev polynomials and Quantum Amplitude Estimation (QAE), which enables approximate statevector extraction without full state reconstruction. Together, these results clarify the algorithmic structure required for quantum CFD, explicitly confront the measurement bottleneck, and establish benchmark problems for future quantum fluid simulations. We implement the solver using IBM's Qiskit framework and validate the hybrid quantum-classical simulation against standard classical numerical methods. Our results demonstrate that the hybrid solver successfully captures the global vortex dynamics of the lid-driven cavity problem and the Taylor-Green vortex, offering a robust pathway for integrating quantum subroutines into more practical higher-Reynolds number CFD workflows.

42. [Towards Chemically Accurate and Scalable Quantum Simulations on IQM Quantum Hardware: A Quantum-HPC Hybrid Approach](https://arxiv.org/abs/2604.01983)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2604.01983v2 Announce Type: replace-cross Abstract: We present a large-scale experimental study of quantum-computing-based molecular simulation carried out on IQM's Sirius 24-qubit superconducting processor, utilizing up to 16 operational qubits. The work employs Sample-based Quantum Diagonalization (SQD) together with the Local Unitary Cluster Jastrow (LUCJ) ansatz to estimate ground-state energies for a set of benchmark molecules, including H$_2$, LiH, BeH$_2$, H$_2$O, and NH$_3$. In addition, we introduce a Linear-CNOT variant of the Unitary Coupled-Cluster Singles and Doubles (LCNot-UCCSD) ansatz within the SQD workflow, trading higher circuit depth for reduced classical preprocessing. A comparison between these ans\"atze is provided, clarifying their respective strengths, limitations, and suitability for near-term quantum hardware. We further explore potential energy landscapes through 1D scans for H$_2$ and HeH$^+$ using both STO-3G and 6-31G basis sets, and for LiH and BeH$_2$ in STO-3G. Extending beyond this, we demonstrate the experimental construction of a full 2D potential energy surface for the water molecule on quantum hardware, mapped over a 32 $\times$ 32 grid in bond length and bond angle. To move beyond small benchmark systems, we combine SQD(LUCJ) with Density Matrix Embedding Theory (DMET) to compute active-space energies for a set of ligand-like molecules, as well as the pharmacologically relevant amantadine system. Across all studies, the majority of quantum-computed energies agree with reference FCI results, as well as with DMET-CASCI energies for embedded systems, to within chemical accuracy for the chosen basis sets. These results demonstrate the reliability of sample-based diagonalization approaches and underscore the potential of hybrid embedding strategies for extending quantum simulations to increasingly complex molecular systems, while also highlighting their practicality on current IQM quantum hardware.

43. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.47; Date: 2026-07-14T07:44:49Z; Popularity: 473 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.44; Date: 2026-07-15T14:30:18Z; Popularity: 1,444 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.27; Date: 2026-07-15T14:45:06Z; Popularity: 268 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

46. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-13T04:57:56Z; Popularity: 210 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

47. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

48. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

49. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

50. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

51. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

52. [Repairing Shape-Prior Shortcuts in Long-Range Single-Shot Fringe Projection Profilometry](https://arxiv.org/abs/2607.11928)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11928v1 Announce Type: new Abstract: Single-shot fringe projection profilometry (FPP) networks that regress depth directly can exploit a shape-prior shortcut, recovering depth from object boundaries rather than from fringe phase. On a photorealistic synthetic benchmark (15,600 fringe images, 50 objects at 1.5-2.1 m standoff), the best such UNet baseline plateaus at 14.54 mm object mean absolute error (MAE), and neither more data nor more capacity removes the shortcut, because neither changes the hypothesis space the optimizer searches. We introduce PhiCalNet, which outputs a wrapped-phase representation $(\sin\phi, \cos\phi)$ and maps it to depth through a fixed differentiable calibration layer, removing the shape-prior solution architecturally rather than by a loss penalty. Because the single-shot mapping is non-injective without fringe order, PhiCalNet takes the fringe order as auxiliary input, an assumption a sensitivity analysis shows tolerates realistic decoding error; a physics-informed (PINN) baseline with the same physics as a soft penalty yields no gain, isolating the architectural choice as the operative factor. PhiCalNet reduces object MAE 3.3x to 4.46 mm, its residual confined to 0.103% of pixels at the $\pm\pi$ wrap discontinuity, and a three-frame extension reaches 1.16 mm. Two checks agree: interpretability makes phase the most decodable internal feature, and pixel-wise conformal uncertainty quantification, to our knowledge the first for FPP, localizes error at the same discontinuity, where rejecting the top 5% of pixels by snapshot disagreement cuts root-mean-square error by 64% versus 3.5% for the baseline.

53. [Mirror Horizon: Viable Path Entropy as a Measure of Bounded Reflection](https://arxiv.org/abs/2607.11937)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.11937v1 Announce Type: new Abstract: Mirror Theory proposes that an intelligent system should be studied not only by what it represents, but by what coherent continuations it can sustain under repeated reflection. We make this claim operational through \emph{viable path entropy} (VPE), a finite-budget measure of verified continuation capacity. Given a mirror state, a rollout protocol, a verifier, and a mode map, VPE decomposes bounded capability into two parts: the probability of reaching a viable continuation and the diversity of verified continuation modes reached among successful rollouts. This paper restores the full theoretical scaffold behind the measure: intuition as local underdetermining constraint, taste as invariant-selecting pressure, reflection as taste-guided resolution of underdetermination, and geometry as the learned structure that makes future reflection stable. We then instantiate the theory in language-model reasoning experiments on GSM8K. Across Qwen2.5-Instruct models, 32 sampled rollouts per problem, and two reflection horizons, increasing the token budget from 96 to 160 substantially expands verified reachability, reduces zero-reachability, increases verified-mode entropy, and improves smoothed VPE. At 160 tokens, Qwen2.5-1.5B realizes the strongest mirror horizon among the tested models, even though Qwen2.5-3B has more parameters. This shows that mirror horizon is not parameter count, but accessible verified continuation capacity under a bounded reflection protocol. The result supports Mirror Theory as a measure-level account: capability is the structure of viable continuations made reachable, not merely one-shot accuracy or pass@k.

54. [Harvesting Reshapes Dynamical Populations](https://arxiv.org/abs/2607.12093)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.12093v1 Announce Type: cross Abstract: Harvesting -- the periodic removal of individuals above or below a threshold trait value -- reshapes heterogeneous populations without altering their underlying stochastic dynamics. We study how repeated harvesting events steer the evolution of probability densities for classes of stochastic processes exhibiting both normal and anomalous dynamics, as well as a prototypical predator-prey model. Removal of the upper portion of the density drives the system to a quasi-steady state when viewed at the ``harvesting clock''. This state depends only on the harvesting threshold and frequency but not on the initial conditions. Removal of the lower portion of the density fixes its shape while generating a constant effective drift that exceeds that of the unharvested mean. Our results suggest the possibility of manipulating the dynamics of stochastic populations through external selection interventions.

55. [Emergent coordination and propulsion of a model spherical ciliate](https://arxiv.org/abs/2607.12436)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.12436v1 Announce Type: cross Abstract: A longstanding challenge in biofluid dynamics research is a mechanistic understanding of the coordinated movement of motile cilia and its resulting ability to facilitate fluid transport. In this study, we develop numerical techniques to simultaneously compute the emergent coordination of and propulsion by filamentous model cilia covering the surface of a sphere. To accomplish this, we develop what we refer to as the filament oscillator model, in which each cilium has two dynamic degrees of freedom: a phase variable that maps to a specific shape in a prescribed sequence, and an angle that describes the overall orientation of the sequence. By varying a parameter related to cilium stiffness, we show that there is bistability between symplectic-like and diaplectic metachronal waves, provided that the stiffness is sufficiently low. Above the critical stiffness, only diaplectic waves emerge. Further, we analyse the propulsive capabilities and flow fields of the two emergent states, showing that diaplectic waves provide more efficient propulsion due to their shorter wavelengths. In addition, we examine how introducing beat-plane tilt leads to ciliate rotation while maintaining nearly identical emergent states and comparable swimming speeds.

56. [A Quantum Computing Approach to Track Reconstruction in Strip-Type Detectors](https://arxiv.org/abs/2607.12821)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.12821v1 Announce Type: cross Abstract: This study investigates the use of quantum annealing for particle track reconstruction in strip-type gaseous detectors. In such detectors, ghost hits and multiple hit combinations can turn pattern recognition into a combinatorial optimization problem. We formulate two reconstruction subproblems as quadratic unconstrained binary optimization problems. The first subproblem selects detector hits associated with a single photon track inside a localized candidate region. The second subproblem selects cluster triplets from different detector layers so that multiple track candidates can be handled within a single quantum processing unit(QPU) submission. The proposed formulations are tested using simulated DAMSA detector events. For the single track hit selection task, the QPU based reconstruction gives position and angular resolutions close to those obtained with a Kalman based reconstruction. In the simultaneous association task, valid cluster triplets are first extracted from the QPU samples and then connected using an association rule based on graph connectivity to construct track candidates. The DAMSA event topology studied here has low pileup and is dominated by the two photon signal from axion-like particle(ALP) decay. In this setting, the results show that the QUBO formulations can reproduce local reconstruction decisions. This provides a practical basis for further studies of reconstruction methods that combine quantum and classical computing in more complex tracking environments.

57. [High-Temperature Deformation Behavior of Co-Free Non-Equiatomic CrMnFeNi Alloy](https://arxiv.org/abs/2601.00619)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2601.00619v3 Announce Type: replace-cross Abstract: Cobalt-free high-entropy alloys (HEAs) have garnered interest for nuclear structural applications due to their good mechanical performance, thermal stability, and resistance to radiation-induced degradation, while avoiding long-lived Co radioisotopes. This study presents an experimental and computational investigation of the plastic deformation behavior of a non-equatomic CrMnFeNi alloy, designed to maintain a stability of fcc phase in a large domain of temperatures and to balance stacking fault (SF) energies for enhanced strain hardening and ductility. Tensile tests reveal a temperature-dependent reduction in mechanical strength, attributed to thermally activated deformation mechanisms and microstructural evolution. Molecular dynamics simulations of single- and polycrystals capture dislocation activity, SF formation, and twin nucleation as a function of strain and temperature. Electron backscatter diffraction (EBSD) confirms twin formation and grain boundary activity. The Schmid factor mapping is drawn to interpret local slip activity and anisotropic deformation behavior. The absence of Co leads to enhanced high-temperature strength compared to the Cantor alloy.

58. [The influence of implantation conditions on dopant activation in Al-implanted 4H-SiC: A MD study applying an Al potential fitted to DFT barriers](https://arxiv.org/abs/2604.22434)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 15 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2604.22434v2 Announce Type: replace-cross Abstract: The non-monotonic dependence of Al dopant activation on implantation temperature in 4H-SiC has been experimentally observed, but its atomistic origin remains unclear. We present a molecular dynamics (MD) study of Al implantation at $500$,K and $900$,K over seven doses from $1\times10^{13}$ to $7.5\times10^{14}$,cm$^{-2}$, followed by up to $100$,ns of annealing at $1500$--$2500$,K. Using the Gao-Weber potential combined with a reparameterized Morse potential for Al-SiC interactions fitted to DFT migration and kick-in/out barriers, we show that implantation at both temperatures reduces Frenkel-pair formation and extended amorphous pockets compared with room-temperature implantation. Above the Al solubility limit ($>10^{20}$,cm$^{-3}$), however, annealing reveals a non-monotonic temperature dependence. Samples implanted at $900$,K form larger, kinetically stable interstitial clusters that persist throughout annealing and act as sinks and trapping centers for Al, reducing substitutional incorporation. Although the $500$,K samples initially exhibit lower crystallinity, they contain a significantly larger fraction of substitutional Al after annealing. The simulations identify two regimes: a low-dose regime dominated by isolated point defects and small complexes, and a high-dose regime characterized by defect clustering and planar-defect formation with strong implantation-temperature dependence. These results explain the experimentally observed optimal implantation window between $500$ and $900$,K and suggest that controlled nanoscale amorphization at $500$,K enhances activation through regrowth-assisted incorporation while suppressing extended defects. The simulations also identify a new basal-plane diffusion path for Al and an activation mechanism involving kick-out of a carbon antisite; both were confirmed by DFT-NEB calculations.

59. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

60. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.70; Date: 2026-07-14T19:04:12Z; Popularity: 697 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

61. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.62; Date: 2026-07-15T12:51:41Z; Popularity: 621 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

62. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.15; Date: 2026-07-15T14:05:49Z; Popularity: 150 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

63. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-14T20:33:19Z; Popularity: 104 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

64. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

65. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Designing Agent-Ready Websites for AI Web Agents: A Framework for Machine Readability, Actionability, and Decision Reliability

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.12056

What would make a scientific agent output trustworthy enough for your own
workflow?

## Article Idea Sources

These configured sources are the recurring idea pool. RSS sources can be
auto-collected; page sources are manual watchlist links. Reopen the primary
source before repeating any claim.

1. OpenAI News (rss, Frontier AI labs) - https://openai.com/news/rss.xml; tags: OpenAI, frontier models, agents
2. Google DeepMind Blog (page, Frontier AI labs) - https://deepmind.google/blog/; tags: Google DeepMind, AI research, AI for Science
3. Anthropic News (page, Frontier AI labs) - https://www.anthropic.com/news; tags: Anthropic, agents, safety
4. Anthropic Engineering (page, Agent engineering) - https://www.anthropic.com/engineering; tags: Anthropic, engineering, agents
5. Addy Osmani Loop Engineering (page, Loop engineering) - https://addyosmani.com/blog/loop-engineering/; tags: loop engineering, agent workflows, skills, worktrees, subagents, memory
6. Louis Bouchard Loop Engineering (page, Loop engineering) - https://www.louisbouchard.ai/loop-engineering/; tags: loop engineering, agent loops, triggers, hard brakes, human review
7. Developers Digest Loop Engineering (page, Loop engineering) - https://www.developersdigest.tech/tutorials/nKlF15Ic78w; tags: loop engineering, automation, memory, human-in-the-loop, security scans
8. Ling Talk AI Loop Engineering Video (page, Loop engineering) - https://www.youtube.com/watch?v=fS-3o4Tz5cI; tags: loop engineering, Chinese AI commentary, agent loops, maker checker
9. Microsoft Research Blog (rss, AI research labs) - https://www.microsoft.com/en-us/research/feed/; tags: Microsoft Research, AI research, AI for Science
10. NVIDIA AI Blog (rss, AI infrastructure) - https://blogs.nvidia.com/blog/category/deep-learning/feed/; tags: NVIDIA, AI infrastructure, scientific computing
11. Hugging Face Blog (rss, Open-source AI) - https://huggingface.co/blog/feed.xml; tags: open source, models, agents
12. arXiv cs.AI (rss, Research preprints) - https://export.arxiv.org/rss/cs.AI; tags: arXiv, AI agents, research
13. arXiv cs.LG (rss, Research preprints) - https://export.arxiv.org/rss/cs.LG; tags: arXiv, machine learning, scientific ML
14. arXiv physics.comp-ph (rss, Scientific computing) - https://export.arxiv.org/rss/physics.comp-ph; tags: arXiv, scientific computing, simulation
15. FutureHouse (page, AI for Science startups) - https://www.futurehouse.org/; tags: AI scientist, scientific agents, startup
16. Lila Sciences (page, AI for Science startups) - https://www.lila.ai/; tags: AI for Science, scientific discovery, startup
17. Insilico Medicine News (page, AI for Science startups) - https://insilico.com/news; tags: drug discovery, AI for Science, startup
18. OpenAI GPT-Rosalind (page, AI for Science platforms) - https://openai.com/index/introducing-gpt-rosalind/; tags: life sciences, scientific workflows, trusted access
19. OpenAI GPT-Rosalind Capabilities (page, AI for Science platforms) - https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/; tags: life sciences, plugins, provenance, benchmarks
20. OpenAI Rosalind Biodefense (page, AI-bio governance) - https://openai.com/index/strengthening-societal-resilience-with-rosalind-biodefense/; tags: biosecurity, trusted access, public health
21. Google Gemini for Science (page, AI for Science platforms) - https://blog.google/innovation-and-ai/technology/research/gemini-for-science-io-2026/; tags: science skills, hypothesis generation, computational discovery
22. Google DeepMind Co-Scientist (page, Scientific agents) - https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/; tags: multi-agent, hypothesis generation, ranking, lab validation
23. Sanger AI Genomics Consortium (page, AI-ready scientific data) - https://www.sanger.ac.uk/news_item/google-deepmind-google-org-and-sanger-institute-to-launch-new-ai-consortium-for-genomics/; tags: AI-ready data, genomics, data generation
24. Anthropic Making Claude a Chemist (page, Scientific model evaluation) - https://www.anthropic.com/research/making-claude-a-chemist; tags: chemistry, scientific artifacts, model evaluation
25. CEPI Pandemic Preparedness Engine (page, AI-bio governance) - https://cepi.net/biosecurity-design-cepis-pandemic-preparedness-engine; tags: biosecurity, agentic workflow, vaccine R&D
26. FAI Nucleic Acid Synthesis Screening (page, AI-bio governance) - https://www.thefai.org/posts/in-support-of-mandatory-nucleic-acid-synthesis-screening-and-recordkeeping; tags: screening, recordkeeping, traceability, biosecurity
27. Arbor Hypothesis-Tree Refinement (page, Autonomous research workflows) - https://arxiv.org/abs/2606.11926; tags: hypothesis tree, research state, scientific agents
28. Arbor GitHub (page, Autonomous research workflows) - https://github.com/RUC-NLPIR/Arbor; tags: open source, hypothesis tree, scientific agents
29. AutoResearchClaw (page, Autonomous research workflows) - https://github.com/aiming-lab/AutoResearchClaw; tags: autonomous research, human-in-the-loop, verification
30. ResearchClawBench (page, Autonomous research evaluation) - https://github.com/InternScience/ResearchClawBench; tags: benchmark, autonomous research, scientific agents
31. SciResearcher (page, Scientific reasoning benchmarks) - https://arxiv.org/html/2605.01489v2; tags: scientific reasoning, tool use, computation-grounded tasks
32. Agentic AI Scientists Critique (page, Scientific agent evaluation) - https://arxiv.org/html/2605.08956v1; tags: evaluation, physical validation, benchmark validity
33. Bohrium / DP Technology (page, China AI for Science ecosystem) - https://www.dp.tech/en/product/bohrium; tags: AI for Science, scientific workflow, China AI
34. DeepSeek News (page, China AI ecosystem) - https://www.deepseek.com/; tags: China AI, frontier models
35. Zhipu AI (page, China AI ecosystem) - https://www.zhipuai.cn/; tags: China AI, agents, models
36. Moonshot AI (page, China AI ecosystem) - https://www.moonshot.cn/; tags: China AI, long context, agents
37. BAAI (page, China AI research) - https://www.baai.ac.cn/; tags: China AI, AI research, scientific research
38. QbitAI (page, China AI media) - https://www.qbitai.com/; tags: China AI, AI news, startups

## Publish Checks

- [ ] Source link works.
- [ ] Facts are separated from interpretation.
- [ ] No private or employer-confidential details.
- [ ] The SciencesLoop connection is real.
- [ ] The post is one idea, not a link dump.
