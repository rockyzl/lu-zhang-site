# Daily signal sidecar - 2026-10-07

## Selected Signal

- Title: RadOnc-Agent: An LLM-Orchestrated Framework for AI Workflows Across the Radiotherapy Care Pathway
- URL: https://arxiv.org/abs/2610.06923
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: RadOnc-Agent: An LLM-Orchestrated Framework for AI Workflows Across the Radiotherapy Care Pathway
- Primary source: https://arxiv.org/abs/2610.06923
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

1. [RadOnc-Agent: An LLM-Orchestrated Framework for AI Workflows Across the Radiotherapy Care Pathway](https://arxiv.org/abs/2610.06923)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06923v1 Announce Type: new Abstract: Artificial intelligence has advanced individual radiotherapy tasks, yet these capabilities remain separated across clinical stages, software environments and data modalities. This fragmentation contrasts with the longitudinal radiotherapy workflow from treatment decision-making through follow-up. Here we present RadOnc-Agent, an agentic artificial-intelligence framework that formalizes radiotherapy into four clinical phases and provides 26 callable functions through a conversational interface. A large-language-model controller maps clinical intent to schema-constrained calls, preserves patient and workflow context, and routes requests to specialist services. We evaluated system execution using 2,600 single-function requests (7,800 repeat executions), 200 prespecified synthetic cross-stage scenarios spanning four phases (600 executions), and 120 workflow instances from 60 de-identified patient records (360 clean executions) representing decision-to-planning and planning-to-adaptation. RadOnc-Agent selected the intended function in 98.79% of single-function executions, completed 96.50% of scripted cross-stage workflows, and completed 96.67% of real-patient workflow executions. In comparative ablations, removing longitudinal state reduced cross-stage completion from 96.50% to 84.00%, while disabling schema and identity validation increased mismatched backend dispatch from 0% to 95.28% in a replay/test evaluation. These findings establish the technical feasibility of an LLM-orchestrated architecture for coordinating heterogeneous radiotherapy capabilities and information across longitudinal workflows; they do not establish clinical correctness, clinical utility or prospective benefit.

2. [GAMEGO: Training Game-Dev Agents with Synthetic Trajectories Anchored in Real-World Assets](https://arxiv.org/abs/2610.06910)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06910v1 Announce Type: new Abstract: Recent advances in Large Language Models (LLMs) have demonstrated remarkable capabilities in web front-end execution, with browser-based game generation emerging as a particularly prominent frontier. While previous efforts frequently rely on complex multi-turn workflows or focus on static game evaluation benchmarks, this work targets direct end-to-end real-world game synthesis driven by coding agents. However, generating complex games directly from sparse user queries often forces coding agents to make underspecified assumptions, yielding incomplete mechanics, disconnected gameplay flows, and limited visual aesthetics. To resolve this issue, this paper presents GameGo, a scalable framework that systematically transforms brief game seeds into comprehensive Product Requirements Documents grounded in industry game-development practices. To retain core gameplay constraints without restricting design exploration, GameGo uses task-specific dynamic compression to maximize information density while preserving instruction following. Based on this pipeline, GameGoData is constructed with 55,060 development trajectories across 2D, 2.5D, and 3D games, alongside GameGoBench, a benchmark comprising 124 diverse game queries. Training GameGoCoder on GameGoData yields a model that outperforms matched baselines and is comparable to frontier models across gamedev benchmarks. All code, datasets, and models will be made publicly available.

3. [How Jump Trading is scaling quant research with ChatGPT](https://openai.com/index/jump-trading)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 06 Oct 2026 12:00:00 GMT
   - Summary: Jump Trading uses OpenAI to expand quantitative research. See how longer-running AI workflows combine multiple data sources with human review.

4. [Our approach to EU text provenance rules](https://openai.com/index/eu-text-provenance)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 05 Oct 2026 15:00:00 GMT
   - Summary: How OpenAI is approaching text watermarking under EU rules. Learn where watermarks apply, how detection works, and why access starts with researchers.

5. [Agent Lightning v1.0: A 3,500-Line Lightweight Agentic RL Framework for Training Agents with Real Harnesses](https://www.microsoft.com/en-us/research/blog/agent-lightning-v1-0-a-3500-line-lightweight-agentic-rl-framework-for-training-agents-with-real-harnesses/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 07 Oct 2026 16:00:00 +0000
   - Summary: Training AI agents with reinforcement learning can be challenging because their tools, context, and decision-making are managed by complex frameworks. Agent Lightning connects existing agents to RL training, making it easier to improve them without rebuilding them. The post Agent Lightning v1.0: A 3,500-Line Lightweight Agentic RL Framework for Training Agents with Real Harnesses appeared first on Microsoft Research .

6. [Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning](https://huggingface.co/blog/open-tts-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 GMT

7. [Text2Dashboard: A Governed Agent Architecture for Natural-Language Dashboard Generation over Enterprise DataBrain](https://arxiv.org/abs/2610.06914)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06914v1 Announce Type: new Abstract: Text2Dashboard is a DataBrain-specific prototype that turns natural-language analytic requests into inspectable dashboards. An installable Codex plugin and standalone Agent Runtime combine schema-constrained model decisions with typed tools, persistent state, and deterministic Hooks for approval, audit, checkpointing, recovery, and failure handling. The pipeline resolves entities, discovers metadata, enforces read-only SQL, composes dashboards, and applies static checks, dynamic preflight, and browser inspection. The model proposes actions while deterministic software controls execution and records state transitions. We evaluate the workflow on frozen real-DataBrain tasks and controlled Hook faults. Strict success was 6/8 on metadata and SQL tasks: metadata selection passed 4/4, all four SQL tasks met semantic criteria, and 2/4 met the exact output-column contract. The final release passed 4/4 single-panel dashboard tasks, one two-panel task, and one existing-dashboard refinement; a parameterised task exceeded its step limit. All ten fault scenarios met their specified outcomes without unapproved external side effects. Model inference accounted for over 97\% of observed runtime in every reported group. These small, DataBrain-specific results do not establish production readiness, general text-to-SQL accuracy, or an efficiency advantage over manual dashboard construction.

8. [Principles that Guide, Actions that Inform: Agent Evolution via Knowledge Abstraction](https://arxiv.org/abs/2610.06964)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06964v1 Announce Type: new Abstract: Large language model (LLM) agents have demonstrated strong capabilities in interactive environments, yet their ability to continually evolve from experience remains limited. Although fine-tuning enables adaptation, its dependence on parameter access and high computational costs restrict its flexibility, especially for large-scale and closed-source LLMs. External memory offers an alternative by allowing agents to accumulate experience without modifying model parameters. However, existing methods mainly focus on experience representation and organization, while the acquired knowledge remains tightly coupled with specific tasks and contexts, limiting generalization. A key challenge is how to transform concrete interactions into abstract and reusable knowledge that guides future decisions beyond individual experiences. To address this challenge, we propose SAGA (\underline{\textbf{S}}elf-evolving \underline{\textbf{A}}gents through Experience-\underline{\textbf{G}}rounded \underline{\textbf{A}}bstraction), a framework for experience-grounded knowledge abstraction and utilization in LLM agents. SAGA progressively transforms interaction trajectories into episodic descriptions, reusable procedures, and principles with explicit applicability conditions, while maintaining links to execution evidence. Retrieved principles are instantiated into task-specific guidance and used to refine candidate actions through corrective feedback and resampling. This creates an execution--abstraction feedback loop, where accumulated knowledge guides future interactions and new experiences continuously update hierarchical memory. Experiments on ScienceWorld and ALFWorld demonstrate improved task performance, with ablation studies highlighting the importance of contextual instantiation and action regulation for leveraging principle-level knowledge.

9. [AegisFlow: A Multi-Agent Agentic AI Framework for Autonomous Remediation and Self-Healing in Fragile Data Ecosystems](https://arxiv.org/abs/2610.06971)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06971v1 Announce Type: new Abstract: Traditional data pipelines are notoriously brittle, often failing due to upstream schema drift, API contract changes, or website DOM modifications. Present observability tools only raise alerts but for human engineers, resulting in a high Mean Time to Repair (MTTR) and operational fatigue. In this paper we propose AegisFlow (Agentic Engine for Intelligent Self-healing and Graph-driven Operations for Workload remediation), a novel agentic framework that closes the loop between detection and resolution. AegisFlow uses a Watchdog agent to collect runtime telemetry and has a Repair agent to automatically create, test and deploy code patches based on Large Language Models (LLMs). The framework presents the non-intrusive execution model called Parallel Shadow Patching, a non-intrusive execution model based on the Monitor, Analyze, Plan, Execute, Knowledge (MAPE-K) loop to generate and verify patches in digital twin environments. Through experimental testing, we have evaluated AegisFlow across five common failure scenarios, and see 98.1 percent improvement in MTTR (from an average of 170 minutes per patch to 3.2 minutes) and a patch success rate of 92 percent . In particular, the system is successful in dealing with changes in the JSON schema (96 percent ) and punctuation drift (98 percent ), and is least successful in Shadow DOM cases (85 percent ). AegisFlow frees up about 98 percent of data engineering on-call time from firefighting and reallocates it towards innovation. The framework is deployment agnostic consisting of a system that can be deployed in a plugin fashion into an existing pipeline orchestration system with minimal uplift to the existing system.

10. [EPOCH: Reliable Discovery through Evidence-Governed Search](https://arxiv.org/abs/2610.06986)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06986v1 Announce Type: new Abstract: AI research agents are increasingly used to search over programs, mathematical constructions, and proofs. However, existing systems typically optimize evaluator feedback without adequately governing how that feedback is interpreted, challenged, and reused. As a result, promising but fragile candidates can be promoted as discoveries, while benchmark improvements, finite certificates, and theorem-level claims are too easily conflated. We introduce EPOCH, an evidence-governed architecture designed to close this gap. EPOCH implements an evidence-governed discovery loop by combining explicit task contracts, typed memory, active falsification, admission checks, and independent replay, so that each candidate is evaluated against the strength and scope of the claim it supports. EPOCH achieves state-of-the-art aggregate performance on AlgoTune, substantially exceeding the strongest baseline in mean normalized score (0.65 vs. 0.53), and attains the highest mean score on the internal Math14 suite (0.57). It further shows favorable held-out behavior under official-test replay and leads the descriptive aggregate on AgentHPO. Across ten discovery problems, EPOCH delivers substantial task-specific advances, including improved executable constructions, optimized algorithms, counterexamples, and proof-supported results. These advances demonstrate its ability to convert search into concrete progress across mathematical and computational domains. Together, the results suggest that evidence governance is a necessary step toward AI research agents that produce not only stronger solutions, but also more trustworthy scientific discoveries.

11. [When better traffic forecasts fail to improve signal control: a layered diagnostic study of forecast-to-decision value](https://arxiv.org/abs/2610.06992)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06992v1 Announce Type: new Abstract: Improved traffic forecasts do not necessarily yield better signal-control decisions. We investigate this gap through a layered diagnostic study using 29 days of reconstructed demand from Xuancheng, China, with seven dates reserved for testing. The framework evaluates point forecasts, conformal intervals, dependence-aware scenarios, and matched closed-loop controllers. Entry-level and movement-level forecasts reduce mean absolute error by 4.03% and 3.92%, respectively, relative to historical means. A nominal 90% conformal interval achieves 90.72% marginal coverage but only 75.66% on an ex-post high-demand subset. Interface audits identify decision-time leakage and reveal that only two of nine controlled intersections offer multiple effective actions. We correct the temporal interface and compare causal forecasts with a five-second event oracle using exhaustive joint-action search. A synthetic positive control demonstrates that future information can reduce the internal rollout cost by 61.5%. On the frozen test dates, however, causal forecasts and the event oracle increase queue vehicle?seconds by 6.09% and 3.39% relative to the matched no-future rollout, while the oracle reduces spillback exposure by 3.78%; paired-day bootstrap intervals cross zero. These findings indicate that forecast value depends on temporal observability, action identifiability, dynamics consistency, and objective alignment. The proposed protocol provides a practical way to diagnose where predictive improvements fail to translate into operational benefits.

12. [Learning from Unreliable Trajectories: Adversarially-Robust Federated Q-Learning](https://arxiv.org/abs/2610.06918)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06918v1 Announce Type: new Abstract: We study federated reinforcement learning in which multiple agents interact with a common Markov decision process and communicate through a central server to collaboratively learn the optimal state-action value function. Our goal is to understand whether the sample-efficiency benefits of collaboration can be retained when a fraction of the agents behave adversarially and transmit arbitrarily corrupted information. To address this problem, we introduce Robust Async-Fed-Q, an epoch-based federated learning algorithm that combines variance-reduced estimation of the Bellman optimality operator at the agents with robust aggregation at the server. We establish high-probability finite-time guarantees showing that the proposed method preserves the statistical gains of collaboration among the honest agents while tolerating adversarial corruption. In particular, the effect of the adversarial agents decreases as the amount of data collected by each honest agent grows and eventually vanishes in the infinite-sample limit. We complement these guarantees with information-theoretic lower bounds that characterize the unavoidable statistical cost of adversarial corruption, leading to the first nearly matching upper and lower bounds for adversarially robust federated reinforcement learning. We further extend our framework to accommodate single-trajectory Markovian sampling and heterogeneous partial coverage, where different agents may explore different regions of the state-action space and learning relies on their collective coverage. Finally, our epoch-based design substantially improves the best known communication complexity for federated Q-learning under asynchronous sampling.

13. [Helping teens learn, plan, and shape the future of AI](https://openai.com/index/teens-learn-and-plan)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 07 Oct 2026 12:00:00 GMT
   - Summary: College Planner is coming to ChatGPT for Teens to help students manage college applications, alongside new flashcards, quizzes, and a teen AI council.

14. [Radisson Hotel Group brings hotel discovery into ChatGPT](https://openai.com/index/radisson)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 07 Oct 2026 07:00:00 GMT
   - Summary: Radisson partnered with Accenture to build a ChatGPT plugin using OpenAI technology, helping travelers find, compare, and book hotels while planning their trips.

15. [GPT-6 and Intelligent UI for everyone](https://openai.com/index/gpt-6-for-everyone)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 GMT
   - Summary: GPT‑6 is rolling out globally in ChatGPT with Intelligent UI, delivering faster responses with visuals and interactive experiences you can explore and use directly.

16. [Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 06 Oct 2026 12:00:00 GMT
   - Summary: OpenAI publishes new results on open problems in mathematics from an internal frontier model and shares Lean proof formalizations and research details on GitHub.

17. [Atlassian and OpenAI expand partnership to turn enterprise knowledge into action](https://openai.com/index/atlassian-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 06 Oct 2026 16:00:00 GMT
   - Summary: Atlassian and OpenAI are expanding their partnership to connect frontier models with enterprise knowledge and help teams plan, build, and deliver work.

18. [Building advertising for the way people use AI](https://openai.com/index/new-chatgpt-ads-format-and-measurement)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 05 Oct 2026 10:00:00 GMT
   - Summary: OpenAI introduces a new visual ad format in ChatGPT and expands measurement tools, attribution partnerships, and brand suitability for advertisers.

19. [Introducing Quine: An AI research system designed for the complexity of biology](https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 29 Sep 2026 14:00:02 +0000
   - Summary: Biology doesn't operate in silos, and neither should the AI representation of it. Quine is an early-stage research effort to create a multimodal world model of biology. By connecting insights across biological scales and modalities, Quine helps scientists computationally search a space far larger than intuition allows and prioritize hypotheses before they reach the lab. Experimental results provide important feedback, helping researchers sharpen future research directions. The post Introducing Quine: An AI research system designed for the complexity of biology appeared first on Microsoft Research .

20. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

21. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

22. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [Multimodal open d1 decision models for the edge](https://huggingface.co/blog/LiquidAI/open-d1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 07 Oct 2026 16:54:33 GMT

25. [One Model Family, Two Gold-Level Results: Fine-Tuning Nemotron for IOI and IMO](https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 07 Oct 2026 12:45:31 GMT

26. [The Agent Said It Was Done. The Database Disagreed.](https://huggingface.co/blog/microsoft/thinkingbox)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Sat, 03 Oct 2026 22:56:48 GMT

27. [Open-sourcing AstaBrief, the fast report-generation model in Asta](https://huggingface.co/blog/allenai/astabrief)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 02 Oct 2026 15:19:50 GMT

28. [AutoSynthData: Generating Training Data for Enterprise Agents](https://huggingface.co/blog/ServiceNow-AI/autosynthdata)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 02 Oct 2026 04:01:31 GMT

29. [Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents](https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 29 Sep 2026 13:07:00 GMT

30. [Holo4: powering generalist computer-use agents](https://huggingface.co/blog/Hcompany/holo4)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 09:44:05 GMT

31. [Welcome RL Environments to the hub](https://huggingface.co/blog/rl-environments)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 GMT

32. [How UK AISI and EvalEval Are Making Benchmark Results Reproducible](https://huggingface.co/blog/evaleval-aisi)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

33. [FluidPD: In-Place Elasticity for SLO-Aware Prefill-Decode Disaggregated LLM Serving](https://arxiv.org/abs/2610.06917)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06917v1 Announce Type: new Abstract: Prefill-decode disaggregation is becoming a common architecture for LLM serving because it separates two phases with distinct execution patterns and SLO objectives. Existing systems typically combine a fixed prefill/decode worker ratio with request routing across workers. However, real-world workloads exhibit both short bursts and sustained shifts in the prefill-to-decode demand ratio. As a result, a configuration that is well provisioned at one time may quickly become mismatched, causing latency SLO violations even when idle capacity exists elsewhere. Existing autoscaling mechanisms can add capacity, but they react slowly, require spare GPUs, and do not directly address short-timescale phase imbalance. We present FluidPD, a P/D-disaggregated serving system that provides SLO-aware in-place elasticity. FluidPD introduces two complementary mechanisms. FluidToken handles transient imbalance by offloading a bounded portion of prefill computation to decode workers when decode-side slack is available. FluidRole handles sustained imbalance by reassigning running workers between prefill and decode roles in place, avoiding model reload and engine restart. Both mechanisms are guided by lightweight pressure indices that expose prefill and decode-side resource pressure before they appear as SLO violations. Across production Azure trace workloads, FluidPD improves overall SLO attainment over static SGLang by up to 94.6 percentage points, demonstrating that SLO-aware in-place P/D elasticity improves service quality without provisioning additional workers.

34. [Anchor Divergence for Semantic Geometry in Contrastive Learning](https://arxiv.org/abs/2610.06919)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06919v1 Announce Type: new Abstract: This paper concerns how semantic context determines geometry in learned vector representations. Similarity is typically measured using cosine similarity, which provides a single fixed geometry. Semantic similarity, however, is inherently context dependent: two images may be similar because they depict the same object, share a visual style, or are relevant to the same clinical finding. We show that contrastive representations naturally encompass a family of geometries that can be specialized to particular semantic structure. The key idea is to use an interplay between contrastive learning, exponential families, and information geometry to establish a correspondence between probability distributions over "anchors" and Bregman geometries on the representation space. We use this correspondence to define "Anchor Divergences", a method for specifying context-specific semantic geometries on fixed representations. Under this correspondence, modeling the anchor distribution models the geometry itself. Experiments on retrieval show that anchor divergences provide an effective and efficient way to specify context-specific semantic similarity.

35. [Metonymic Circuits for Abstract Concept Grounding in Vision Transformers](https://arxiv.org/abs/2610.06928)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06928v1 Announce Type: new Abstract: We study how Vision Transformers ground abstract concepts (e.g., angry) when training data provide limited direct referential evidence. We hypothesize a metonymic grounding mechanism in which abstract predictions are driven by concrete, interpretable anchor concepts (e.g., fire) that bridge visual signals to abstract semantics. By applying Transcoders on CLIP and DINO vision encoders, we recover intermediate features that can be associated with semantic labels for more concrete concepts, and trace their contributions in circuits underlying abstract concept recognition. Experiments on a carefully curated icon dataset reveal structured metonymic circuits, in which perceptual primitives dominate early layers and object-like anchors precede abstract targets. Images containing rendered text instead recruit a distinct perceptual-to-textual route. Causal interventions further validate that metonymic intermediates are functionally involved in grounding abstract concepts.

36. [Event-Driven ML Pipeline Orchestration for Manufacturing: An AWS Industry Experience](https://arxiv.org/abs/2610.06890)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06890v1 Announce Type: new Abstract: We present an industry experience report on three years of operating an event-driven cloud infrastructure for continuous machine learning training in automotive manufacturing. Our system orchestrates GPU-accelerated training of product-specialized model pairs, a physics prediction model and a reinforcement-learning control policy, across multiple plants, coordinating long-running GPU workloads triggered by manufacturing events. The architecture combines Amazon ECS with EC2 GPU capacity providers, SQS-based messaging with dead-letter queues, and an admission-controlled Lambda dispatcher that enforces cluster concurrency limits. A Conductor orchestrator on ECS Fargate initiates dependency-aware retraining chains on a weekly schedule. The entire infrastructure is codified in modular Terraform with multi-account separation. From 40000+ production training jobs we report a 72-78% cost reduction versus always-on GPU infrastructure. A discrete-event simulation confirms that admission control is necessary (naive dispatch loses 65% of jobs) and that queue-draining matches AWS Step Functions latency while eliminating per-job startup overhead. We provide lessons learned and release the simulator and Terraform module skeletons as open-source artifacts.

37. [CrystalJev: thinking fast and slow with atomistic foundation models for materials discovery](https://arxiv.org/abs/2610.06985)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06985v1 Announce Type: cross Abstract: Atomistic foundation models triage millions of hypothetical materials but are used as slow simulators, their thresholded energies taken at face value. They are better read as fast decision-makers. CrystalJev queries a frozen interatomic potential once per unrelaxed structure and answers typed questions with calibrated probabilities, finite-sample guarantees and a rule for when to think slowly. Across 65 Matbench Discovery models, a 'stable' call is a probability in disguise, explained by a model's errors and the candidate population. Once trained, one forward pass decides nearly as well as a relaxation at a thirtieth of its cost, and a value-of-information theory sends slower computation only where decisions can change. The same layer answers electronic, mechanical and molecular questions. In a registered prospective test with 700 new density-functional calculations, single-pass forecasts calibrated only on existing data over-stated the stable fraction of unseen candidates (5.8%) by at most 2.1 percentage points.

38. [Molecular hydrogen formation on dust: The impact of gas-dust drift on formation efficiency](https://arxiv.org/abs/2610.07178)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.07178v1 Announce Type: cross Abstract: Molecular hydrogen is predominantly formed on dust-grain surfaces in the interstellar medium, where relative gas-dust motion can arise in dynamically active environments. While the dependence of H$_2$ formation on grain temperature and surface properties is well studied, the impact of gas-dust drift has received little attention. We investigate how gas-dust drift modifies H$_2$ formation, focusing on the competition between the drift-enhanced H-atom collision rate and reduced sticking at higher impact energies. We use an event-driven kinetic Monte Carlo model that follows individual H atoms on spherical silicate and carbonaceous grains, including adsorption, surface migration, thermal desorption, and Langmuir-Hinshelwood (LH) and Eley-Rideal (ER) reactions. Drift is described by a shifted Maxwellian velocity distribution, and we compare constant and impact-energy-dependent sticking probabilities. Drift produces increasingly anisotropic distributions of adsorbed H and H$_2$ formation across the grain surface. Assuming constant sticking, increasing drift enhances H$_2$ formation through the higher collision rate, with efficiencies up to $\epsilon=0.3-0.4$. With energy-dependent sticking, strong drift instead suppresses formation on both materials, reducing efficiencies to $\epsilon=0.01-0.03$. Carbonaceous grains remain efficient to higher dust temperatures than silicate grains. ER reactions dominate over most of the investigated parameter space and become increasingly important at strong drift as the reduced surface population suppresses LH reactions. Thus, enhanced collision rates under gas-dust drift do not necessarily increase H$_2$ formation. Models of dynamically active environments should account for both relative gas-dust velocities and their effects on sticking.

39. [Adjoint-State Identifiability of Piezo-Tunable Valley Splitting in 2D Magnetic Heterostructures](https://arxiv.org/abs/2610.07179)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.07179v1 Announce Type: cross Abstract: Controlling valley degrees of freedom with mechanical strain is a promising approach for solid-state information processing. Current theoretical literature routinely predicts strain-tuned valley splitting at the microscopic level but rarely evaluates whether these quantum predictions remain statistically recoverable in realistic macroscopic devices. This manuscript establishes a fully classical, partial differential equation-constrained multiscale inverse framework for quantifying the device-level identifiability of predicted strain-tunable valley effects in two-dimensional magnetic heterostructures, demonstrated here for a molybdenum disulfide and chromium tribromide heterostructure. First-principles structural relaxations confirm a chiral $C_3$ point-group symmetry which mathematically reduces the relevant exchange-strain coupling tensor to a single scalar. A partial differential equation-constrained adjoint-state architecture successfully bridges continuum elastodynamics to valley-resolved anomalous Hall transport. Density functional theory yields a coupling estimate of $\eta \approx -0.07$ meV whose 95% confidence interval is consistent with zero. Evaluating this specific coupling magnitude against established thermal noise and velocity saturation limits defines a safe operating window bounded between 262.0 and 22,337.6 V/cm. Rather than asserting a confirmed nonzero material property this bounded operational window functions as a precise diagnostic threshold. Deploying this rigorous statistical identifiability framework provides a necessary mathematical filter to determine the true experimental viability of theoretically predicted two-dimensional materials before complex physical fabrication.

40. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.97; Date: 2026-10-07T14:08:52Z; Popularity: 1,974 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

41. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-10-06T16:30:21Z; Popularity: 487 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-10-07T06:35:47Z; Popularity: 370 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-10-07T09:38:20Z; Popularity: 250 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

44. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.13; Date: 2026-10-07T19:10:30Z; Popularity: 134 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

45. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-09-28T14:58:43Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

46. [What AI gets wrong and what failure teaches us](https://www.microsoft.com/en-us/research/podcast/what-ai-gets-wrong-and-what-failure-teaches-us/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 06 Oct 2026 16:19:06 +0000
   - Summary: Jennifer Neville did not want to go into computer science—but that’s exactly where she landed. Neville discusses the starts and stops that led to her professional sweet spot and her work identifying “surprising failures” making it hard for AI to handle complexity. The post What AI gets wrong and what failure teaches us appeared first on Microsoft Research .

47. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

48. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

49. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

50. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

51. [TEMPEST: Temporal Embeddings for Scalable Driver Identification via Angular Margin Learning](https://arxiv.org/abs/2610.06855)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06855v1 Announce Type: new Abstract: Scalable driver identification requires embedding models that maintain discriminative performance as fleet size grows, yet existing triplet-loss formulations degrade rapidly with driver pool size and overfit to session-specific patterns under rigorous temporal evaluation. We introduce TEMPEST, a Temporal Convolutional Network embedding model trained with an additive angular margin (ArcFace) loss that enforces global class-level separation in a normalized angular space. TEMPEST maps 60-second multimodal driving windows to compact 96-dimensional embeddings, supporting truly dynamic enrollment without any retraining or classifier refitting. Under rigorous temporal evaluation on a 45-driver dataset, TEMPEST achieves 91.71% Rank-1 accuracy, outperforming the best classical model by 17.9 pp and the strongest triplet-loss baseline by 58.4 pp. TEMPEST degrades by only 4.3 pp when growing the subject pool from 10 to 45 drivers, compared to 22 pp and 32.5 pp for supervised and unsupervised triplet-loss baselines, and its cross-session advantage is corroborated on the public KIA Soul dataset, where it outperforms the best classical model by 7.3 pp within-session and 14.3 pp cross-session. With 720K parameters, a 2.80 MB footprint, and 50-epoch convergence, TEMPEST establishes a rigorous, reproducible baseline for scalable behavioral driver biometric identification.

52. [When Does External Guidance Help LLM Reasoning? A Bias-Variance Theory of Guidance-Augmented GRPO](https://arxiv.org/abs/2610.06861)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06861v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR) has become the dominant paradigm for eliciting multi-step reasoning in large language models, and a recent wave of methods (LUFFY, ExPO, PAPO, TAPO) further augments RL with \emph{external guidance} - expert traces, self-explanations, or retrieved thought patterns. Although each method reports empirical gains, none provides convergence rates, bias bounds, or an optimal weighting rule for the guidance signal. We close this gap with \emph{Guidance-Augmented GRPO} (GA-GRPO), a unified theoretical framework that casts external guidance as a stochastic guidance operator G re-writing the question distribution, and analyses the resulting policy-gradient estimator as a biased on-policy estimator whose bias is bounded by the total-variation guidance divergence delta\_G between the guidance-augmented sampling distribution and the policy's own distribution. The framework subsumes vanilla GRPO, LUFFY, ExPO, PAPO, and TAPO as special cases obtained by particular choices of G. Under smoothness and bounded-divergence assumptions we prove that GA-GRPO converges at rate O(1/sqrt(T)) to an O(delta sqrt(T))-neighbourhood of the GRPO stationary point, derive the closed-form MSE-optimal guidance weight lambda-star(T, delta, sigma\_0 squared) = sigma\_0 squared / (sigma\_0 squared + R\_max squared delta squared T), and prove a matching minimax lower bound showing the Omega(delta squared T) bias term is unavoidable. Experiments on Qwen2.5-Math-7B-Base across nine math and OOD benchmarks confirm that optimal-weight GA-GRPO matches or surpasses TAPO, LUFFY, ExPO, and vanilla GRPO while requiring 31\% fewer GPU-hours, and eight analysis experiments validate each theoretical prediction.

53. [Comparative review of hybrid forecasting models for short-term prediction of building thermal load](https://arxiv.org/abs/2610.06881)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06881v1 Announce Type: new Abstract: In this paper, a comparative review of different hybrid models for short-term forecasting of building thermal demand is carried out. Particularly, the assessment tackles the comparison of data-driven models enhanced with other state-of-the-art techniques. At the first step, the existing techniques reported in the literature are analysed. It is concluded that Metaheuristics or a data-driven model are used to identify the parameters of the basic model. The qualitative evaluation includes for each method the input and output features, main advantages and drawbacks. At the second step, an existing dataset of historical thermal demand from Scottish households, as well as historical weather forecasts are utilized to assess additionally the performance of existing hybrid methods. From the assessment of 13 hybrid methods, the Empirical Modal Decomposition - long short-term memory - Markov (EMD-LSTM-Markov) model can predict with the highest accuracy the day-ahead power pattern of heating and domestic hot water (DHW) demands. Though local power peaks are also accurately predicted, high power swells and spikes are underestimated. Other methods, such as Support Vector Machine - Simulated Annealing (SVM-SA) and Random Forest - Improved Sparrow Search Algorithm - LSTM (RF-ISSA-LSTM) predict a smooth pattern of heating and DHW demand profiles with rapid changes underestimating most power peaks.

54. [AttSVD:Prompt-Adaptive Low-Rank KV Cache Compression via Attention-Guided SVD](https://arxiv.org/abs/2610.06927)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06927v1 Announce Type: new Abstract: The key-value (KV) cache of autoregressive transformers grows linearly with context length and dominates memory at long context. Most training-free remedies evict low-importance tokens, an irreversible choice along the sequence axis. We instead keep every token and store it more cheaply along the "feature" axis. We therefore propose AttSVD, a new "interpretable" low-rank compression whose basis is derived from each prompt's own attention geometry: an online, per-prompt truncated SVD that keeps only the directions attention actually reads, cutting persistent per-head KV memory in proportion to the retained rank. We propose two decode-time caching strategies, accumulating and streaming, for short and long generation regimes. Furthermore, we propose two refinements that make compression adaptive. A per-matrix energy rule sizes the logit space and the attention mass independently. An attention-aware basis truncates only in the spaces attention actually reads, preserving both the attention logits and the attention output. The same factors also provide free, per-head interpretability insights into the effective rank and the geometry attention consumes. Across multiple models, on both an agentic benchmark and the full LongBench suite AttSVD stays on par with the dense cache while using up to 50% of the KV-cache memory.

55. [A density-based topology optimization framework for steady Navier-Stokes flow with design-dependent wall actuation](https://arxiv.org/abs/2610.06990)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06990v1 Announce Type: new Abstract: Design-dependent wall velocities are difficult to treat in density-based fluid topology optimization. This difficulty arises because the fluid-solid interface is represented implicitly and evolves with the design. This paper proposes a diffuse-interface formulation for topology optimization of steady incompressible Navier-Stokes flows with design-dependent wall actuation. A continuous topological description field parameterized by compactly supported radial basis functions (CS-RBFs) provides the local interface orientation, and its regularized projection defines the pseudo-density for Brinkman flow analysis. The wall velocity is imposed on a fixed mesh through an equivalent volumetric momentum source, which is localized by a diffuse-interface measure constructed from the pseudo-density and the gradient of the description field. Assuming a locally planar interface and uniformly distributed Wendland radial basis functions, the source coefficient is determined analytically by balancing the equivalent momentum input with the Brinkman resistance at the interface center. These assumptions also yield a characteristic transition-width estimate in terms of the projection steepness and support radius. Continuous adjoint analysis is performed to derive the design sensitivities. Two- and three-dimensional examples formulated using the analogy equation demonstrate the effectiveness of the proposed topology optimization method for flow-rate maximization. Body-fitted re-simulations verify the flow fields and transport performance of the optimized designs. The formulation is further extended to electroosmotic transport under the thin electric double layer (EDL) assumption using the Helmholtz-Smoluchowski relation.

56. [Constitutive-Set Mechanics: variational mechanics on an admissible set of constitutive laws](https://arxiv.org/abs/2610.07151)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.07151v1 Announce Type: new Abstract: A structural simulation needs a constitutive law, and experiments rarely determine one uniquely: several laws may fit the same data and satisfy the same physical constraints, yet differ where the structure is loaded in ways the tests never were. Constitutive-Set Mechanics (CSM) keeps all of those laws. It replaces the single law in the variational formulation by the admissible set, and lets the mechanics itself decide which members of the set affect the structural prediction. The framework rests on one observation: a finite element assembly consults the law only at the strains the structure reaches, so the incremental energy depends on the law through a weighted record of those strains, the occupation measure of the state. The energy of a state under the set is a support function on that measure, and the equilibrium solve one performs anyway supplies the information needed to bound the worst case. Equilibrium states become certificates on the robust response, rigorous on the upper side for any mechanics solver and two-sided under global minimisation; the certificate has at most one more state than the number of constitutive directions the structure interrogates; a coherence theorem identifies when the pointwise-worst material is one no single material can be; and constitutive inference acts on the same support function. The method is demonstrated on linear elasticity, a data-constrained constitutive function, phase-field fracture, an assembled finite-strain composite shell, and a membrane characterised by one-mode tests alone. On the shell the structure interrogates four of 226 constitutive directions; on the membrane the certified worst-case energy exceeds the reference more than fourfold, and the experiment that most contracts the certified prediction is not the one where the constitutive uncertainty is largest.

57. [Characteristics of extinction behavior of ammonia partial cracking simulated fuels in counterflow premixed flames under lean condition](https://arxiv.org/abs/2610.07605)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.07605v1 Announce Type: new Abstract: In this study, the lean extinction behaviors of CH4 and a 16% cracked ammonia surrogate fuel, CR16, in counterflow premixed flames were compared. Experiments were conducted along with one-dimensional simulations using OPPDIF; the GRI-Mech 3.0 and UCSD mechanisms were applied to CH4 and CR16, respectively. CR16 exhibited higher extinction strain rates and resilience to strain-induced blow-out (RSIB) than those of CH4 under lean conditions. At Phi = 0.66, although both flames had the same extinction strain rate, CR16 showed a higher RSIB because of its longer flame time. Near its extinction, CR16 sustained H2 consumption, radical reactions, and heat release through the interflame region toward the stagnation plane. Hydrogen oxidation coupled with nitrogen-related pathways, including NH2 + NO and HNO reactions, supported this behavior. These results clarify the chemical basis for the superior extinction resistance of economically favorable low-cracking-ratio ammonia fuel.

58. [A pressure-based coupled general synthetic iterative scheme for rarefied gas flow simulation](https://arxiv.org/abs/2610.07658)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.07658v1 Announce Type: new Abstract: This work develops a pressure-based coupled (PBC) GSIS. Within each GSIS iteration, a conventional kinetic solver advances the velocity distribution function, from which non-equilibrium constitutive relations are extracted. A PBC macroscopic solver then solves the steady macroscopic synthetic equations: continuity and momentum equations are solved as a coupled pressure-velocity system under fixed temperature, followed by a segregated temperature solve. A boundary treatment is constructed to maintain strict consistency between kinetic boundary fluxes and macroscopic boundary conditions throughout the macroscopic iterations. The proposed method is validated against direct simulation Monte Carlo (DSMC) data across multiple three-dimensional test cases, including tube-to-vacuum flows, a dynamic gas lock configuration for EUV lithography, divertors in nuclear fusion, and sphere flow at Mach numbers up to 10. Numerical results demonstrate that our GSIS-PBC preserves asymptotic-preserving properties and yields satisfactory accuracy across continuum-to-transitional flow regimes. For low-speed near-continuum internal flows, GSIS-PBC delivers wall clock time speed-ups of up to two orders of magnitude compared with the conventional iterative scheme, and substantially outperforms the original density-based GSIS for challenging low-Mach internal flow problems. For nuclear-fusion divertor flows, GSIS-PBC is faster than the DSMC by four orders of magnitude.

59. [Neural-Operator-Predicted Time-Dependent Reduced Subspaces for Projection-Based Simulation of Nonlinear PDEs](https://arxiv.org/abs/2610.08693)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.08693v1 Announce Type: new Abstract: Accurate numerical simulation of nonlinear partial differential equation initial value problems typically requires high-dimensional full-order discretizations at substantial computational cost. While purely data-driven surrogates can speed up prediction, these "black box" approximations do not necessarily satisfy the governing equations during inference. In this paper we present a hybrid framework, which combines neural operators with projection-based reduced-order modeling for nonlinear PDE simulation. The key idea is to train a neural operator to map the initial condition to a time-dependent reduced subspace, and then evolve low-dimensional reduced coordinates by solving the governing dynamical equations projected on this learned moving trial subspace. In this way, the network predicts an adaptive reduced representation rather than the full trajectory directly, while the online solver preserves a physics-based reduced evolution. We test this method on two representative nonlinear PDEs: the viscous Burgers' equation and the Fisher--KPP reaction--diffusion equation. In both cases, the proposed approach achieves successful reduced-order simulation with substantial wall-clock speedup relative to the corresponding full-order solver while maintaining relative errors on the order of \(10^{-2}\) to \(10^{-1}\) across the tested resolutions. These results demonstrate that a low-dimensional learned time-dependent reduced subspace can be used to predict solutions to nonlinear PDEs while retaining the advantages of projection-based reduced dynamics. Overall, this method provides a promising framework for fast and physically grounded data-assisted simulation of nonlinear PDEs.

60. [Time-Reversal Selection Rule for Twist Disorder](https://arxiv.org/abs/2610.06943)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06943v1 Announce Type: cross Abstract: Random layer rotations are ubiquitous in layered matter, from turbostratic films to rotationally disordered crystals, and strongly suppress transport across the layers. Generated by a symmetry operation, this disorder is absent on the rotation axis, so the thickness laws of conduction are set by how fast backscattering vanishes there. We show that a time-reversal selection rule decides this: each twist harmonic of the interlayer bond is either a frame rotation, whose backscattering cancels, or a coupling change, which scatters. A zero-set theorem turns the rule into universal thickness laws for electrons and phonons, fixed by band-edge symmetry; random twist increments rescale the backscattering but keep its order. Where the axis is unprotected, band nodes provide a second route: a transparent energy with heavy-tailed disorder and an $N^{-3}$ law. A first-principles forward-channel model of black phosphorus shows both routes; its random-twist films act as a symmetry filter that, relative to aligned stacks, retains a hundred times more of the electron than of the hole conductance at 64 layers. The symmetry of band edges and phonon branches thus decides what crosses a disordered stack, making stacking disorder a design element.

61. [Spontaneous Motion Generates Reversible Nonreciprocity in an Achiral Active Elastic Ring](https://arxiv.org/abs/2610.07050)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 07 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.07050v1 Announce Type: cross Abstract: Nonreciprocal mechanical response is usually associated with built-in directional couplings, structural chirality, or external driving. Whether an achiral active body can instead generate and reverse such directionality through its own motion remains less clear. Here we show that spontaneous rotation makes an active elastic ring with reciprocal passive interactions mechanically nonreciprocal. Off-center elastic forces reorient propulsion, coupling deformation back to motion. Reversing the rotation reverses the antisymmetric response, while a compensating control preserves finite directionality but strongly suppresses the near-Hopf resonance. Approaching Hopf, the selected response grows inversely with distance to onset and becomes a self-sustained traveling deformation above threshold. Thus nonreciprocity is selected by the dynamical state, while active feedback controls its critical amplification.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.77; Date: 2026-10-06T07:23:45Z; Popularity: 766 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.37; Date: 2026-10-07T15:42:01Z; Popularity: 1,367 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

65. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.24; Date: 2026-10-06T20:59:38Z; Popularity: 237 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

RadOnc-Agent: An LLM-Orchestrated Framework for AI Workflows Across the Radiotherapy Care Pathway

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2610.06923

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
