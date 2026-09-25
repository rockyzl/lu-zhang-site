# Daily signal sidecar - 2026-09-25

## Selected Signal

- Title: BaseCamp --- An Agentic AI Framework for Automating DNA Sequencing Data Pipelines
- URL: https://arxiv.org/abs/2609.28557
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: BaseCamp --- An Agentic AI Framework for Automating DNA Sequencing Data Pipelines
- Primary source: https://arxiv.org/abs/2609.28557
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

Total candidates reviewed after duplicate-source filtering: 64

1. [BaseCamp --- An Agentic AI Framework for Automating DNA Sequencing Data Pipelines](https://arxiv.org/abs/2609.28557)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28557v1 Announce Type: new Abstract: DNA sequencing pipelines, spanning quality control, alignment, variant calling, and annotation, are now reliably executed by workflow management systems that orchestrate established bioinformatics tools at scale. What remains manual is the decision layer surrounding that execution: selecting quality thresholds appropriate to a sample and platform, adjudicating borderline variant calls, diagnosing anomalies, and determining which findings warrant expert review. These decisions are repetitive, judgment-intensive, inconsistent across operators, and frequently undocumented. This paper introduces BaseCamp, a novel agentic AI framework for automating the decision layer of DNA sequencing pipelines. The framework decomposes the pipeline into six specialized AI agents, covering sample intake and quality control, alignment, variant calling, annotation, cross-stage monitoring, and reporting. Critically, BaseCamp agents do not perform sequence analysis: established tools execute alignment, calling, and annotation, while the agents select among them, configure them, interpret their output, and decide what follows. This confines language model reasoning to the judgment layer where it is reliable and preserves the reproducibility existing tooling guarantees. Agent reasoning is powered by a consortium of fine-tuned, domain-specialized large language models coordinated by a central reasoning LLM, executing locally so no sequencing data leaves the operating environment, under human-in-the-loop orchestration. Evaluation shows agent-generated configurations are concordant with expert practice, that an explicit filtering ledger renders inspectable what filtering otherwise removes without trace, and that cross-stage anomaly detection surfaces conditions execution monitoring misses. BaseCamp offers a generalizable blueprint for agentic automation of scientific data pipelines.

2. [When Should Forecasting Agents Reason? Behavioral Stress Tests for Reliability Routing](https://arxiv.org/abs/2609.28475)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28475v1 Announce Type: new Abstract: Forecasting agents increasingly combine language-model reasoning, retrieval, ensembling, and calibration, but it remains unclear when each behavior should be trusted. We study this question on ForecastBench-style binary forecasting tasks, treating the choice to retrieve, reason, defer to a market prior, or use a historical analog as an observable agent behavior rather than a hidden implementation detail. Our central finding is that mechanism choice is source-dependent: structured analogs dominate for some data-generating processes, while market/crowd-style and conservative baselines are better for others. We introduce ReliabilityRoute, a structural intervention that steers forecasting-agent behavior using reliability features such as historical coverage, market-prior availability, source-prior sharpness, evidence strength, evidence disagreement, and horizon. A fixed 2024-fitted rule closely matches a hand taxonomy without hard-coded source-name decisions, while a walk-forward self-adjusting rule refits thresholds from previously resolved vintages and obtains the best mean Brier score among our deterministic systems across 16 later LLM vintages. The gain is modest and historical/search baselines remain highly competitive. The main contribution is therefore a behavioral stress test showing that more reasoning is not always better; forecasting agents should first estimate which evidence source deserves control, routing policies should themselves adapt under auditable constraints, and reproducibility artifacts are available at https://github.com/louiswang524/forcastagent

3. [DEEPO: Dual-Entropy Enhanced Policy Optimization for Hallucination in MLLMs](https://arxiv.org/abs/2609.28570)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28570v1 Announce Type: new Abstract: Reinforcement learning (RL) is widely used to sharpen reasoning in multimodal large language models (MLLMs), yet its effect on hallucination is uneven. We trace this to two weak points in the \emph{correction chain} from reward to parameter update. At the rollout level, hard queries---those with high semantic entropy---frequently produce unanimously wrong sample groups, collapsing the group-relative advantage to zero exactly where hallucination risk is highest. At the optimization level, confident-but-wrong tokens are gradient-invisible: a categorical policy's expected score-gradient norm vanishes as its distribution sharpens, so the predictions that most need correction receive the weakest updates. We propose Dual-Entropy Enhanced Policy Optimization (DEEPO), a dual-stage enhancement combining signal variance regularization with gradient preconditioning: semantic-entropy-triggered expert prefixes inject grounded continuations on high-uncertainty queries, providing direct supervision and restoring advantage variance, while advantage-sign-aware Renyi preconditioning counteracts logit-level saturation so correction reaches confident errors in the operational confidence regime. Both branches improve over GRPO individually; their interaction is statistically significant on VideoMMMU---the most complex long-horizon task in our evaluation suite (+4.0$, 95\% CI [1.1, 6.9])---and additive elsewhere. DEEPO reduces hallucination while preserving accuracy and training stability.

4. [PAWS: Policy-driven Agentic World Simulation](https://arxiv.org/abs/2609.28547)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28547v1 Announce Type: new Abstract: Policy interventions propagate through public communication, institutional decisions, and stakeholder responses, yet datasets for financial multi-agent simulation rarely connect these processes to temporally aligned historical evidence. We introduce PAWS, a Policy-driven Agentic World Simulation dataset covering 36 verified U.S. financial and economic policy episodes, 12,727 policy-linked news records, and 65,291 source-grounded stakeholder actions. Each action is linked to its supporting news and represented by a multi-layer event frame capturing its interaction mode, financial-action family and subtype, semantic attributes, and conditional mappings to external taxonomies. Entities are resolved to normalized organizations, and actions are aligned with daily market-return context to support policy-agent simulation replay. On 2,522 stratified action samples, independent AI and human reviewers achieved 89.4% initial agreement on interaction mode, with disagreements subsequently adjudicated. Case studies of the 2008 short-selling ban and 2001 decimalization recover documented policy timelines and associated market patterns across both dense and sparse news settings. A replay study further shows that high accuracy can mask failure to detect rare stakeholder actions, identifying action timing and calibration as central challenges. PAWS provides an auditable substrate for evaluating agent influence, policy-response cascades, and action-outcome alignment in historically grounded financial simulations.

5. [Pistis Technical Report](https://arxiv.org/abs/2609.28554)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28554v1 Announce Type: new Abstract: We introduce the Pistis model family, comprising 27B- and 9B-parameter multimodal large language models built on Qwen3.6 and Qwen3.5, respectively, and developed through a general and scalable post-training framework. The framework first establishes a strong foundation through large-scale multimodal supervised fine-tuning (SFT). Building on this SFT foundation, we propose Interleaved Distillation and Reinforcement Learning (IDRL), a novel post-training paradigm that tightly integrates on-policy distillation and reinforcement learning within a single training loop. By alternating between the two objectives, rather than optimizing either in isolation or combining them in a static joint loss, IDRL enables more effective knowledge transfer, greater optimization stability, and more precise credit assignment for long-horizon agentic trajectories, leading to stronger performance while mitigating common capability trade-offs. At both model scales, the framework produces two specialized variants: Pistis-Thinking, designed to strengthen deep multimodal reasoning, and Pistis-Agentic, which additionally incorporates agentic trajectory data to support long-horizon planning, iterative reasoning, and tool use. Pistis-Agentic is particularly strong in multimodal search. Both scales outperform their corresponding base models. Beyond model-parameter optimization, we further introduce Pistis-Auto-Harnessing (PAH), a system-level method that automatically improves the agent's inference harness through iterative optimization. Experiments demonstrate that PAH enhances the model performance without updating the model parameters or increasing the interaction budget.

6. [TWIST: A Proposed Benchmark for Intervention Quality in Conversational Memory, with a Human-Validated Draft-Alignment](https://arxiv.org/abs/2609.28575)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28575v1 Announce Type: new Abstract: Long-conversation memory benchmarks increasingly test recall and prompted knowledge updates, and recent work studies evolving user beliefs and memory state. TWIST is a proposed benchmark suite for a complementary, unmeasured property: intervention quality -- whether a deployed memory system, exercised through its own ingest/recall/vet surface, acts correctly at belief change points. Four tracks cover unprompted tension detection, vetting outgoing drafts against the record, answering with current beliefs while preserving supersession history, and governing sensitive recall. The suite extends LoCoMo's corpora and harness, pairing every detect/block metric with a matched do-not-over-detect control: surface-matched hard negatives price false intervention, so no track can be gamed by flagging everything. The benchmark itself is validated first: independent, gold-blind double annotation with adjudication, judge decoy calibration, and a separability audit. On the human-validated Track B v1.0 key (161 items, post-adjudication kappa = 0.85), no tested configuration simultaneously achieves high contradiction recall, high hard-negative specificity, and high attribution: flat-RAG baselines detect 0.76-0.97 of true contradictions but falsely flag 16-43% of surface-matched safe drafts depending on backend, while a deployed coherence-oriented system almost never over-flags (0.98-1.00 specificity) yet catches 42% of true contradictions -- a trade-off no recall-only score can see. A 13-configuration baseline ladder localizes causes: every gold contradiction is detectable from its evidence alone (recall 1.000), calibrated models nearly solve the track given the full transcript -- consistent with substantial retrieval-coverage gaps -- and draft-only floors reveal model-dependent style priors. A system's TWIST profile, beside its recall score, measures whether memory knows when to intervene and when not to.

7. [Adversarial Closed-Loop Curriculum for Evolving Role-Playing Agents](https://arxiv.org/abs/2609.28609)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28609v1 Announce Type: new Abstract: Role-playing agents based on large language models have been widely applied in areas such as personalized assistance and social simulation. Recent RL methods typically train on a fixed scenario pool collected before learning begins. This creates a distributional bottleneck: as the agent improves, the scenarios where it performs poorly also change, while the training distribution remains static. Therefore, we propose AdvRole, an adversarial context rewriting framework that turns role-playing RL into a closed-loop curriculum. AdvRole alternates between an Actor that learns to role-play and a Rewriter that edits character profiles and dialogue contexts into actor-specific hard scenarios. The Rewriter is trained with a performance-gap reward, which favors rewrites that reduce the current Actor's score relative to the original scenario. As a result, the scenario pool evolves with the Actor and continuously targets under-mastered regions of the character-context space. Experiments on three role-playing benchmarks covering English and Chinese, as well as a new multilingual benchmark we release, show that AdvRole consistently outperforms baselines.

8. [Training Object Permanence in World Models](https://arxiv.org/abs/2609.28654)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28654v1 Announce Type: new Abstract: Object permanence and solidity are hallmarks of human cognitive priors. Recent studies show that video generation models, a paradigmatic class of current world models, have begun to show emerged reasoning abilities, making them ideal candidates for building human-like physical intelligence. Do video models have emerged object permanence in them? If not, could we train them with a core-cognition inspired dataset? We introduce WROP (World Reasoning with Object Permanence), a data infrastructure of 150 hand-designed cognitive science inspired tasks, divided into six cognitive categories. We build Blender generators that randomize speed, lighting, camera angle, and other nuisance parameters while preserving each task's cognitive structure, yielding 10,000+ samples per task. We release a 1.5M-sample training corpus and a 300-question exam. On this exam we evaluate 14 video models: 3 reference-to-video, 7 edit, and 4 continuation, among which PWM-WROP, our 16B world model. In a blind pairwise Elo study, PWM-WROP ranks first among continuation models and third overall, behind only a statistical tie between two reference-to-video models. We release the data, exam, model answers, scores, weights, and PWM, our native-PyTorch training stack on AWS Trainium2.

9. [Beyond Surface Style: Aligning Multi-Turn User Simulators with Behavioral Consistency](https://arxiv.org/abs/2609.28690)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28690v1 Announce Type: new Abstract: Faithful user simulation is fundamental to building, evaluating, and improving interactive AI at scale. However, plausible individual responses do not ensure that simulated users reproduce the intent evolution and outcomes observed in real interactions. We propose TRACER, a multi-turn user simulator that explicitly models users' evolving intent and learns to align simulated behavior with real interaction trajectories. TRACER is trained in two stages: supervised fine-tuning on real user dialogues, followed by multi-turn reinforcement learning. The RL stage combines hierarchical outcome- and trajectory-level rewards with deviation-aware advantage modulation, jointly mitigating reward sparsity and credit assignment in long dialogues. On real customer-service sessions organized into reference cohorts, TRACER-7B surpasses the strongest baseline by 11.4 conversion F1, while also achieving the lowest group-level conversion-rate error and semantic trajectory distance, and generalizing to out-of-distribution scenarios. Human Turing tests yield identification accuracy close to chance, supporting the perceived naturalness of generated conversations. Building on this simulator, we further introduce the Dynamic Marketing Benchmark, which jointly evaluates persuasion effectiveness and response quality of LLMs through simulated interactions, revealing that higher response quality does not necessarily correspond to higher conversion rates.

10. [Proaction boosts sales 60% and saves 75+ hours with Codex](https://openai.com/index/proaction)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 25 Sep 2026 19:00:00 GMT
   - Summary: With Codex, GPT-Live-1, and GPT-6 Astra, Proaction builds, operates, and sells modern fleet management faster.

11. [Two years of OpenAI Academy](https://openai.com/index/two-years-of-openai-academy)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 16:00:00 GMT
   - Summary: Marking two years of OpenAI Academy and bringing AI skills to even more communities.

12. [OpenAI extends cyber access to Ukraine for civilian defense](https://openai.com/index/openai-extends-cyber-access-to-ukraine-for-civilian-defense)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 13:00:00 GMT
   - Summary: OpenAI is extending access to its Daybreak program to the Government of Ukraine to support the cyber defense of civilian infrastructure.

13. [Sam Altman’s remarks at the United Nations Security Council](https://openai.com/index/sam-altman-un-security-council-remarks)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 12:00:00 GMT
   - Summary: OpenAI CEO Sam Altman discusses AI safety, human control, and international cooperation in remarks to the United Nations Security Council.

14. [Harvey turns legal context into stronger drafts with GPT-6 Astra](https://openai.com/index/harvey-from-context-to-confidence-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 12:00:00 GMT
   - Summary: GPT-6 Astra produces more structured, context-aware legal documents, freeing lawyers to focus on strategy.

15. [How invideo improves color grading 3x with GPT‑6 Astra](https://openai.com/index/invideo-builds-with-gpt-6-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 12:00:00 GMT
   - Summary: With GPT‑6 Astra, invideo plans edits with greater precision, improves color correction and grading threefold, and produces 50 custom effects in one day.

16. [Ringg’s AI agents resolve up to 65% of customer calls with OpenAI](https://openai.com/index/ringg)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 12:00:00 GMT
   - Summary: Using GPT-5.6, Ringg powers multilingual agents across voice, chat, WhatsApp, and web for 90% less cost vs. GPT-4.1.

17. [Introducing MentalHealthBench](https://openai.com/index/introducing-mentalhealthbench)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 10:00:00 GMT
   - Summary: MentalHealthBench is an expert-informed benchmark for evaluating helpful and safe AI responses across realistic mental health conversations.

18. [ChatGPT Ads expands to Southeast Asia and Taiwan](https://openai.com/index/chatgpt-ads-expands-southeast-asia-taiwan)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 02:00:00 GMT
   - Summary: ChatGPT Ads is expanding to Southeast Asia and Taiwan, giving eligible businesses new ways to reach people across more than 60 countries.

19. [Airbnb widens access to GPT-6 Astra and OpenAI frontier models](https://openai.com/index/airbnb-gpt-6-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 01:00:00 GMT
   - Summary: Learn how Airbnb is expanding access to GPT-6 Astra and OpenAI frontier models to help engineering teams solve bugs, design systems, and ship faster.

20. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

21. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

22. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

23. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [Accelerating vision-language models with LFM2.5-VL-DSpark](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 24 Sep 2026 14:08:57 GMT

26. [How UK AISI and EvalEval Are Making Benchmark Results Reproducible](https://huggingface.co/blog/evaleval-aisi)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

27. [Transformers now runs llama.cpp quants](https://huggingface.co/blog/transformers-llama-cpp-quants)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

28. [Jun Kim, oMLX creator and maintainer, joins Hugging Face to support the MLX community](https://huggingface.co/blog/omlx)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

29. [Pruning LLMs Like a Physicist: Block Removal as an Ising Optimization Problem](https://huggingface.co/blog/MultiverseComputingCAI/pruning-llms-like-a-physicist-block-removal-as-an)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 13:44:34 GMT

30. [tokenizers v1: encode, decode and scaling, measured](https://huggingface.co/blog/tokenizers-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 GMT

31. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

32. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

33. [TW3Cast: A Frozen Router of Lightly Fine-Tuned Foundation Models for Time-Series Forecasting on GIFT-Eval, Selected Entirely on the Training Split](https://arxiv.org/abs/2609.28506)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28506v1 Announce Type: new Abstract: TW3Cast is a time-series forecasting system that reaches position 3 of 130 entries on the GIFT-Eval benchmark by mean MASE rank, as of 2026-09-14. The two entries above it belong to the leaderboard's agentic category, multi-step systems that use agents or language models to reason about, generate or select forecasts. TW3Cast runs no agent and no language model. Its selection is a table computed once on the training split and then frozen, and its experts are public foundation models lightly fine-tuned on those training splits. For each of the 97 dataset, frequency and horizon configurations, the table serves one of four modes: a specialist, which is a LoRA or full fine-tune of Chronos-2, TiRex or Toto whose training data was cleaned and enriched by explicit rules; a quantile blend that contains a specialist; a blend of base models; or a selection tournament played on a backtest carved from the training split. Every decision in the table was taken on that backtest. A specialist is admitted the moment it beats the tournament there, so a candidate costs a few megabytes and minutes of GPU time, and a failed candidate changes nothing. Three guarded mechanisms protect the selection from its own biases: a dual accuracy and calibration criterion, an asymmetric margin against candidates that saw the series during training, and conservative per-window gates. The selection rules themselves were chosen inside a temporal meta-backtest. The best base model served alone reaches a mean MASE rank of 33.8, the tournament served on every configuration reaches 38.0, and the full router reaches 19.4. The routing table, the expert index, the pinned base-model revisions, the submitted score file and the dated snapshot of the public scores are released, and every leaderboard number in this paper regenerates from them by one script.

34. [Time-Series Foundation Models That Understand Data Revisions](https://arxiv.org/abs/2609.28576)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28576v1 Announce Type: new Abstract: Historical observations are not always fixed: statistical agencies revise previously published values as new evidence arrives. Forecasting from a contemporary download can therefore expose a model to information unavailable at the date it purportedly made a prediction. We propose VINTAGE-TS, a revision-aware adaptation of a time-series foundation model that distinguishes observation time from information-availability time. Its targets are the next period's first-published value and the value available a fixed number of days after that publication; neither is declared final truth. A joint predictive distribution preserves dependence between these targets and exposes uncertainty about their difference. We specify an ALFRED-based rolling evaluation, a matched Chronos-2 comparison, conventional and revision-aware baselines, and a separate audit of pretraining overlap. The accompanying software implements validity-interval reconstruction, delayed-label filtering, a frozen-backbone adapter interface, and reproducible diagnostics. An executed synthetic demonstration and a 25-configuration sensitivity suite verify the workflow, expose variation across seeds and revision regimes, and illustrate how hindsight contamination changes measured performance. Thirty one automated tests check temporal and integration contracts. Real ALFRED and Chronos-2 experiments have not been executed; no empirical foundation-model advantage is claimed.

35. [Uncovering Residential PV-EV Co-Adoption from Smart-Meter Data: Load Archetypes and Detection for Demand-Side Planning](https://arxiv.org/abs/2609.28578)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28578v1 Announce Type: new Abstract: The increasing adoption of electric vehicles (EVs) and rooftop photovoltaic (PV) systems is reshaping residential electricity demand and creating new challenges for demand-side management (DSM), tariff design, and low-voltage network planning. Much of the existing literature examines EV charging or PV generation in isolation, leaving the behavioral dynamics of household co-adoption less understood. We develop an integrated, two-part workflow to analyze advanced metering infrastructure (AMI) data. A discovery component applies dynamic time warping (DTW) k-means with DTW barycenter averaging to cluster daily import or export profiles into interpretable behavioral archetypes, while a predictive component trains a bidirectional long short-term memory (BiLSTM) model on 21-day windows and benchmarks it against tabular baselines for PV/EV activity detection. The EV activity labels are inferred from charging-like load signatures because charger measurements are unavailable. Using half-hourly AusNet residential data from Victoria, Australia, the clustering uncovers distinct patterns across PV-only, EV-only, co-adoption, and neither cohorts; for co-adopters, a midday-centered weekday export archetype accounts for approximately 50% of days. At validation-tuned thresholds, both BiLSTM and XGBoost achieve strong discrimination. BiLSTM obtains 0.991 for the area under the receiver operating characteristic curve (AUROC), 0.906 for macro-F1, and the highest recall on the most difficult class (0.836 for EV-only recall). Tree-based baselines remain competitive. Performance remains stable across plausible labeling rules (macro-F1: 0.894--0.914) and strictly forward temporal splits (macro-F1: 0.894--0.906).

36. [CTrex: A Research-Oriented Framework for Kernel- and Projection-Level Algorithm Development in CT Reconstruction](https://arxiv.org/abs/2609.30166)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30166v1 Announce Type: new Abstract: Micro-computed tomography (micro-CT) is increasingly applied to imaging scenarios in which object motion, deformation, truncated fields of view, continuous rotation, or unconventional scanning protocols violate assumptions underlying classical reconstruction pipelines. Existing reconstruction frameworks efficiently support standard geometries and workflows but offer limited control over how projection operators are discretized and evaluated. This restricts methodological exploration when accuracy depends on ray sampling, interpolation, or operator coupling. We introduce CTrex, a research-oriented, GPU-accelerated iterative reconstruction framework that exposes the projection-correction-backprojection pipeline down to the kernel level. Rather than treating these operators as fixed black boxes, CTrex represents them as editable computational building blocks within a unified iterative structure. This allows non-ideal acquisition effects to be incorporated directly into the numerical operators rather than treated as external corrections. CTrex combines GPU-level accessibility with an extensible geometry formulation based on homogeneous-coordinate view matrices, allowing rigid and affine transformations, detector misalignments, and time-varying geometries to be expressed consistently. It supports circular, helical, offset, and conveyor-belt trajectories while keeping GPU kernels agnostic to the trajectory definition. Applications in motion- and deformation-aware reconstruction, event-based 4D imaging, cylindrical-coordinate reconstruction, and extended-field-of-view CT illustrate how operator-level adaptations enable strategies difficult to realize in conventional frameworks. CTrex provides a flexible platform for CT reconstruction research under realistic and unconventional imaging conditions.

37. [Strong-Field-Driven Non-Linear Electron Dynamics in Thiophene Oligomers](https://arxiv.org/abs/2609.29284)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.29284v1 Announce Type: cross Abstract: The interaction between conjugated molecules and intense electric field pulses drives a plethora of intriguing nonlinear phenomena, including optical limiting. While excited-state absorption was recently identified as the primary mechanism for this effect in thiophene oligomers, open questions remain regarding field-dependent population dynamics under intense laser driving. Using real-time time-dependent density functional theory combined with a determinant-overlap population framework, we track the intensity-dependent nonlinear response of a single thiophene ring (1T) and quaterthiophene (4T) as prototypical members of the oligothiophene family with different length and symmetry. We demonstrate that extended $\pi$-conjugation in 4T lowers nonlinear excitation thresholds by orders of magnitude compared to 1T. State-resolved population dynamics reveal complete ground-state depletion accompanied by sequential excited-state absorption channels under intense driving. High-harmonic generation spectra explicitly reflect molecular symmetry constraints, while energy-resolved occupation densities confirm continuous orbital redistribution across the $\pi^*$-manifold. This work provides dynamic physical insights for engineering organic materials with tailored nonlinear optical properties.

38. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.92; Date: 2026-09-25T03:23:30Z; Popularity: 1,919 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

39. [Show HN: AI·rete·RAG – a Rete rule engine decides, RAG explains why](https://ai-rete-rag.com/)
   - Source: Hacker News; Group: Tech community; Score: 3.50; Date: 2026-09-22T16:15:06Z; Popularity: 44 points, 9 comments
   - Summary: HN discussion: 44 points, 9 comments.

40. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-23T21:10:10Z; Popularity: 487 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

41. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-09-23T11:14:46Z; Popularity: 367 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

42. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-24T17:38:47Z; Popularity: 247 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

43. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

44. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

45. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

46. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

47. [CARE: Condition-Aware Representation Regularization for Diffusion Models](https://arxiv.org/abs/2609.28561)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28561v1 Announce Type: new Abstract: Recent advances in diffusion models highlight the importance of representation regularization for improving sample quality and training efficiency. However, commonly used regularization methods often overlook the built-in conditions (such as labels or texts) which directly determine the generation target. In this work, we demonstrate how conditioning signals affect the feature distribution and introduce the CARE (Condition-Aware REpresentation regularization). CARE is a lightweight plug-and-play regularization framework that dynamically modulates feature distribution based on condition similarity. CARE leverages built-in conditioning signals to judiciously guide the representation space, promoting tighter feature clusters for similar conditions without relying on explicit alignment losses or external supervision. Empirically, CARE consistently improves both visual fidelity and convergence stability across both class-to-image and text-to-image tasks. On ImageNet, CARE achieves a 19.08\% reduction in FID in 400k training steps, leading to a 3.5$\times$ speed-up. When applied to text-to-image generation, CARE lowers FID by 16.61\% in 200k iterations and improves semantic alignment between generated samples and text prompts. Moreover, CARE can be seamlessly integrated with existing regularization methods, yielding additional performance gains.

48. [When Explanations Cannot Be Read: Measuring and Correcting SHAP and LIME Rendering for Right-to-Left Languages](https://arxiv.org/abs/2609.28565)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28565v1 Announce Type: new Abstract: Post hoc explanation methods such as SHAP and LIME are widely used to interpret text classifiers, but their visualizations are mainly designed for left-to-right languages. When applied to right-to-left (RTL) languages such as Urdu, Arabic, Persian, and Hebrew, the attribution values remain mathematically valid, while their visual presentation fails. Tokens appear out of sequence, connected letterforms break apart, and plot layouts do not follow the natural reading direction. This study addresses this gap as a visualization problem rather than a limitation of the explanation methods themselves. We present SHAP-RTL, a rendering layer that corrects reading direction and script shaping in SHAP and LIME visualizations, with per-language font selection, while preserving the original attribution values, feature ordering, and model outputs. The approach is evaluated on Urdu, Arabic, Hebrew, and Persian hate and offensive-language datasets using TF-IDF and logistic regression classifiers. Rendering correctness is measured by an OCR round trip over 200 feature words per language. Default rendering yields character error rates of 0.820 to 0.979, meaning the label no longer carries its token; the common reshape-and-reorder workaround fails for Urdu at 0.998, worse than no correction; and the Matplotlib 3.11.0 text rewrite inverts that workaround, while SHAP-RTL remains correct under both versions. The framework also verbalizes the same attributions as short contextual explanations in the reader's language, constrained to the identified features. Evaluation in this paper concerns rendering correctness; assessment of the generated explanations is left to future work. The study highlights the importance of language-aware visualization in making post hoc explainability more accessible across different writing systems.

49. [Leakage-Safe Machine Learning for Hydrogen Embrittlement Detection in 316L Stainless Steel: A Region-Held-Out Evaluation of Texture and Deep Features in SEM Micrographs](https://arxiv.org/abs/2609.28567)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28567v1 Announce Type: new Abstract: Scanning electron microscopy (SEM) is routinely used to characterize the microstructural changes caused by hydrogen embrittlement (HE) in structural steels. Machine learning can automate this characterization, but models are often evaluated using image-level splits. When several images come from the same specimen region, such splits leak information between the training and test sets. Here, we propose a region-held-out protocol for classifying as-received (AR) and hydrogen-charged (H2) SEM micrographs of 316L stainless steel, based on Leave-One-Region-Out (LORO) cross-validation over 14 spatial regions (8 AR, 6 H2; 31 images). We compared six feature-classifier combinations built on local binary patterns (LBP), grey-level co-occurrence matrices (GLCM), self-supervised convolutional embeddings pretrained on 143 unlabeled SEM images, and a convolutional neural network (CNN). The simplest texture approach, LBP with a support vector machine (LBP+SVM), performed best, achieving a balanced accuracy of 0.79, H2 recall of 0.69, and H2 precision of 0.82, outperforming every deep-learning and combined-feature model. A group-level permutation test (500 permutations sampled from the 3,003 possible region-to-label assignments) yielded p = 0.008, indicating that the result cannot be explained by a chance alignment of the region structure. Grad-CAM maps from a CNN trained on the full dataset tended to concentrate on localized surface and grain-boundary features, where hydrogen-induced morphological changes are known to occur. Under a leakage-safe, statistically validated protocol, texture descriptors recover a hydrogen-charging signature from SEM micrographs even with few samples, and the same protocol can be extended to larger HE detection studies in other alloy systems.

50. [Auditability Is Not One Property: Rule Overlap, Behavioural Agreement, and Composition in Reinforcement Learning](https://arxiv.org/abs/2609.28581)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28581v1 Announce Type: new Abstract: Reinforcement-learning (RL) policies are often distributed as opaque neural checkpoints, while training logs show that a run occurred without explaining what the policy learned. We study whether independently trained policies can be represented and composed through auditable discrete behavioral rules. We define auditability as six separately testable predicates: trace integrity, lossless coding, rule coverage, behavioral agreement, composition quality, and value-model reliability. Our protocol uses a shared frozen symbolizer, passive rule extraction, an append-only hash-bound ledger, exact environment replay, and offline confidence-ranked arbitration with an explicit blind-spot fallback. The results place strict limits on this description layer. Rule-set overlap does not imply behavioral agreement: policies may share symbolic rules while choosing near-chance-matching actions on fresh states. The fused policy therefore selects among existing rules rather than generating a new skill. On a conflict-dominated task, an apparent fusion failure is traced to an induction/deployment mismatch: rules induced from sampled actions were evaluated under argmax actions, and deployment-consistent re-induction reverses the arbitration ordering. A fitted-Q generalized-policy-improvement diagnostic also fails in both environments, limiting claims that rule fusion is superior to value-based composition. One exploratory comparison favors rule fusion, but its comparator is post hoc, the task is partly saturated, and the fused policy remains below the strongest held-out actor. We contribute an evidence-bounded audit and composition protocol, not a claim of universal interpretability or autonomous skill generation. Future work must add temporally extended skills, cross-skill interfaces, composition search, and independent novelty audits.

51. [Conditional preservation of chimera states under equitable network coarse-graining](https://arxiv.org/abs/2609.28733)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28733v1 Announce Type: new Abstract: Chimera states, characterized by the coexistence of coherent and incoherent dynamics in networks of coupled oscillators, are among the most intriguing collective phenomena in nonlinear systems and are strongly shaped by the underlying topology and initial conditions. Their analysis in large-scale networks remains computationally demanding and motivates the development of coarse-graining strategies that reduce network size while retaining the essential dynamical features of chimera behavior. In this Letter, we investigate whether equitable-partition-based quotient graphs can preserve chimera patterns under substantial reductions of network size. Using nonlocally coupled FitzHugh-Nagumo (FHN) oscillators, we exploit the fact that, for an equitable partition, the full-network dynamics restricted to the associated cluster-synchronous subspace coincide exactly with the quotient dynamics. We ask whether this structural exactness is sufficient to preserve chimera signatures after the network size reduction. Our results show that this is not necessarily the case: agreement between quotient and full-network chimera dynamics depends on the equitable partition, and exact quotient dynamics do not necessarily guarantee the transverse stability of the corresponding full-network trajectory. Importantly, when the cluster-synchronous solution becomes transversely unstable, the full network may depart from the exact quotient trajectory while remaining in a macroscopic chimera regime. Therefore, structural exactness and dynamical preservation are distinct requirements, and transverse stability provides a complementary criterion for assessing quotient-based coarse-graining of chimera states.

52. [A Physics-Driven Framework for Parametric Periodic-Flow Modeling and Finite-Amplitude Aeroelastic Response Analysis](https://arxiv.org/abs/2609.29280)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.29280v1 Announce Type: new Abstract: Periodic unsteady flows are common in forced-motion and fluid-structure interaction problems. Their parametric analysis typically requires repeated high-fidelity simulations, whereas existing reduced-order and surrogate models generally rely on pre-generated flow-field or aerodynamic data. This study proposes a purely physics-driven framework for solving parametric periodic flows and finite-amplitude aeroelastic responses. First, a Periodic Physics-Informed Neural Network (P-PINN) is developed to directly solve periodic flows by imposing temporal periodicity over a single motion cycle, thereby avoiding the need to resolve the long transient evolution preceding the establishment of the periodic state. The flow conditions and motion parameters are further incorporated as network inputs to construct continuous parametric representations of the periodic flow field and aerodynamic forces. On this basis, the parametric aerodynamic model is coupled with the structural dynamic equation through first-order harmonic balance to solve the response amplitude and frequency of a single-degree-of-freedom aeroelastic system. This framework is validated using forced-motion cases of a circular cylinder and an airfoil, demonstrating accurate reproduction of periodic aerodynamic forces, surface load distributions, and instantaneous flow fields under different flow and motion parameters compared with time-marching results. Furthermore, aeroelastic analysis is conducted for an elastically mounted circular cylinder at subcritical Reynolds numbers, and the resulting aeroelastic response agrees well with fully coupled CFD/CSD results. Once trained offline, the parametric model can be repeatedly evaluated for different structural parameter states, enabling the complete aeroelastic response curve to be obtained online within seconds, without repeated long-time fluid-structure interaction time marching.

53. [Monte Carlo sampling of first-order QED processes in laser and pulsar plasmas](https://arxiv.org/abs/2609.29325)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.29325v1 Announce Type: new Abstract: Monte Carlo sampling of strong-field quantum electrodynamics processes underpins simulations of high-intensity laser experiments and of astrophysical compact-object magnetospheres. Sampling an event requires the total rate of the process together with the cumulative probability that determines how energy is partitioned between the produced particles. Simulations typically tabulate both in advance and invert the tabulated probability numerically. Here we replace this procedure with elementary-function approximations for synchrotron radiation and the nonlinear Breit--Wheeler process. For each process, we approximate the auxiliary function that sets the total rate, as well as the cumulative probability, with Pad\'e approximants chosen so that the inversion reduces to a quartic equation. This yields the sampled quantum parameter---electron $\chi_e$ or photon $\chi_\gamma$---in closed form. The approximations and the particle spectra sampled from them agree with the exact results to within $1\%$. The procedure requires no lookup tables, no interpolation, and no numerical root finding, and can be inserted directly into radiative particle-in-cell codes.

54. [The Mechanics of Delta Learning: Target Design for Generalizable Scientific Machine Learning](https://arxiv.org/abs/2609.28782)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28782v1 Announce Type: cross Abstract: In scientific machine learning, $\Delta$-learning trains models on residual errors relative to physical baselines, assuming that more accurate baselines with smaller residual scales inherently improve downstream performance. Here, we demonstrate that residual scale alone is an insufficient heuristic for learnability. Evaluating molecular graph neural networks on total energy targets, we show that complex local descriptor baselines can yield small residual targets that are disproportionately rough within architecture-informed proxy spaces and harder to learn relative to their scale. Conversely, semi-empirical baseline reduces both scale and normalized roughness, improving in-domain and out-of-domain prediction. We introduce scale-normalized graph Dirichlet roughness ($D_{\text{IQR}}$) as a pre-training diagnostic for residual learnability and establish baseline complementarity as a core target-design principle, elevating target space formulation alongside model architecture as a key axis for scientific machine learning.

55. [Wave-driven propulsion of a flexible raft](https://arxiv.org/abs/2609.28884)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.28884v1 Announce Type: cross Abstract: Inertial propulsion in fluids generally arises from an unbalanced flux of momentum. For the case of wave-driven propulsion, momentum is transported away from an oscillating raft in the form of self-excited surface waves. While this mechanism has previously been analyzed for rigid rafts, the role of flexibility has yet to be investigated. In this work, we develop a fluid-structure interaction model for a periodically driven two-dimensional flexible raft resting at the free surface of a fluid. The raft is modeled as an Euler--Bernoulli beam and is coupled to a weakly dissipative quasi-potential model of the fluid beneath. Varying the flexural stiffness and forcing position reveals new features associated with the introduction of flexibility, including the possibilities of thrust enhancement and reversal. By projecting the raft response onto its free rigid-body and elastic modes, the fluid loading can be represented as a modal impedance, informing a computationally efficient reduced-order model. Analysis of the modal response and its symmetries facilitates physical interpretation of our key findings. For a uniform raft, excitation of any single mode in isolation is incapable of producing a net thrust, and thus efficient wave propulsion requires a blend of interfering modes with appropriately coordinated amplitudes and phases.

56. [Full-frequency GW from Cayley-transformed self-energy moments](https://arxiv.org/abs/2609.29271)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.29271v1 Announce Type: cross Abstract: The dynamical GW self-energy approximation is a key computational tool to provide the fundamental spectrum of electronic systems. We reformulate this approximation, representing the particle and hole parts of the GW self-energy through a highly compact set of Cayley-transformed moment constraints. The Cayley transformation maps real frequencies to the unit circle, keeping the moments bounded as their order increases, ensuring numerical stability and allowing resolution to be focused on an energy range of interest. We calculate these Cayley-transformed moments via an efficient O[N$^4$] scaling contour integration, and from them, construct a Hermitian upfolded Hamiltonian with a linearly scaling dimensionality with system size. A single-shot diagonalization of this effective Hamiltonian gives an explicit full-frequency G0W0 Green's function with manifestly real poles and non-negative spectral weights. This enables quasiparticle energies, satellite features, and their spectral weights to be obtained across the full G0W0 spectrum. Comparisons with exact G0W0 calculations and convergence across the GW100 test set and the larger Chlorophyll A molecule demonstrate substantially faster and more reliable convergence with moment order than an earlier monomial-moment approach. These Cayley moment representations therefore provide a stable, compact, and systematically improvable route to the complete spectral information of zero-temperature GW, without explicit frequency grids, plasmon-pole models and other common approximations, or analytic continuation.

57. [Prediction of Re-Ignition Times in Dielectric Barrier Discharges](https://arxiv.org/abs/2609.29277)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.29277v1 Announce Type: cross Abstract: Discharge ignition events in dielectric barrier discharges (DBDs) self-organise into spatio-temporal patterns with varying degrees of order. The complex dynamics of a DBD and intricate structure of occurring patterns complicate the formulation of predictive, mechanistic descriptions. We present the formulation of a reduced-order model that describes the re-ignition dynamics between consecutive discharges appearing at the same position inside a DBD arrangement. The model is derived from an equivalent electric circuit and validated against fluid-Poisson simulations and experiments performed with a multi-filament arrangement in air-like gas mixtures at atmospheric pressure driven by sinusoidal high-voltage waveforms. The experimental scenarios include a highly ordered regime where discharges ignite at regular time and space intervals generating a pattern stable over several periods, and an unstable regime with discharges appearing at seemingly random positions and times. The model accuracy is assessed in both regimes and it is found that the associated prediction uncertainty provides a quantitative measure of the spatial order of the discharge pattern.

58. [Uniform Stability of Scott-Vogelius Elements on Three-Dimensional Freudenthal Meshes in Degrees Four and Five: Resolving the Farrell-Mitchell-Scott Conjecture](https://arxiv.org/abs/2609.29608)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 25 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.29608v1 Announce Type: cross Abstract: We establish a uniform inf-sup stability estimate for the Scott-Vogelius finite element spaces on uniform Freudenthal tetrahedralizations of the unit cube for polynomial degrees k >= 4. This result completely settles the first conjecture of Farrell, Mitchell, and Scott for the critical degrees k = 4 and k = 5, complementing the known stability range for higher polynomial degrees. The main mathematical difficulties stem from the complex topological compatibility required at the singular vertices and the corresponding mean-value constraints across adjacent elements. We tackle these challenges by developing a unified barycentric skeleton-bubble calculus that explicitly constructs vertex jets, edge modes, and face transfers to globally route element means. The accompanying exact computations independently verify these finite-dimensional identities and provide reproducibility data.

59. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

60. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-22T09:57:28Z; Popularity: 749 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

61. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-09-25T13:10:44Z; Popularity: 1,275 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

62. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-24T19:08:03Z; Popularity: 232 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

63. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.13; Date: 2026-09-22T09:28:51Z; Popularity: 126 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

64. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-17T09:23:32Z; Popularity: 8 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

BaseCamp --- An Agentic AI Framework for Automating DNA Sequencing Data Pipelines

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.28557

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
