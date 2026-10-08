# Daily signal sidecar - 2026-10-08

## Selected Signal

- Title: GAMEGO: Training Game-Dev Agents with Synthetic Trajectories Anchored in Real-World Assets
- URL: https://arxiv.org/abs/2610.06910
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: GAMEGO: Training Game-Dev Agents with Synthetic Trajectories Anchored in Real-World Assets
- Primary source: https://arxiv.org/abs/2610.06910
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Make the evidence path inspectable before trusting the answer.
- Failure mode: The system may cite related sources without proving that the cited section supports the claim.
- Practical test: Use known-answer questions, near-miss sources, citation precision checks, and replayable retrieval traces.
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

1. [GAMEGO: Training Game-Dev Agents with Synthetic Trajectories Anchored in Real-World Assets](https://arxiv.org/abs/2610.06910)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06910v1 Announce Type: new Abstract: Recent advances in Large Language Models (LLMs) have demonstrated remarkable capabilities in web front-end execution, with browser-based game generation emerging as a particularly prominent frontier. While previous efforts frequently rely on complex multi-turn workflows or focus on static game evaluation benchmarks, this work targets direct end-to-end real-world game synthesis driven by coding agents. However, generating complex games directly from sparse user queries often forces coding agents to make underspecified assumptions, yielding incomplete mechanics, disconnected gameplay flows, and limited visual aesthetics. To resolve this issue, this paper presents GameGo, a scalable framework that systematically transforms brief game seeds into comprehensive Product Requirements Documents grounded in industry game-development practices. To retain core gameplay constraints without restricting design exploration, GameGo uses task-specific dynamic compression to maximize information density while preserving instruction following. Based on this pipeline, GameGoData is constructed with 55,060 development trajectories across 2D, 2.5D, and 3D games, alongside GameGoBench, a benchmark comprising 124 diverse game queries. Training GameGoCoder on GameGoData yields a model that outperforms matched baselines and is comparable to frontier models across gamedev benchmarks. All code, datasets, and models will be made publicly available.

2. [Bounded Autonomy and Verifiable Safety for Agentic AI Enabled Automation](https://arxiv.org/abs/2610.08815)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.08815v1 Announce Type: new Abstract: Agentic AI-enabled automation cannot be safely deployed in high-stakes environments on probabilistic reasoning alone. A recurring risk is epistemic drift: as reasoning deepens, system behavior may move away from subject-matter-expert constraints for safe operation. This paper presents BRaVeS, a bounded reasoning and safety-governance framework termed the Defensible Next-Gen Reasoning System (DNRS). BRaVeS encodes SME-defined constraints as invariant anchors, proposes MoDA-Style (Mixture of Depths Attention) depth-aware access as a candidate mechanism for keeping these anchors visible during inference, and uses a state hierarchy (SMARtAutonomy) to reduce autonomy as epistemic risk increases. To formalize bounded recovery, we introduce the Lyapunov-Bounded Consensus Framework (LBCF), which maps continuous epistemic-risk signals into a finite K-bag abstraction and applies shielded state transitions that enforce Lyapunov-style energy descent or route the system to a human-mediated terminal state. The formal convergence result applies to the finite LBCF abstraction under fixed thresholds and feasible-shield assumptions; it does not prove safety of the full continuous neural activation space. We evaluate the framework through a discrete event Monte Carlo simulation using HAI 22.04 industrial-control-system time-series data with synthetic noise and sensor-degradation regimes. Across the tested parameter-grouping strategies and thresholds, the LBCF process achieved finite-step convergence and no safety-guard violations. These results provide simulation-based evidence that bounded governance behavior can be enforced under the stated abstraction, while motivating future work on deployed transformer implementations, live human-in-the-loop validation, and broader adversarial settings.

3. [How Oracle turns days of work into minutes with ChatGPT and Codex](https://openai.com/index/oracle)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 08 Oct 2026 16:00:00 GMT
   - Summary: Across recruiting, engineering, and operations, Oracle turns specialist knowledge into fast, repeatable workflows with ChatGPT Work and Codex.

4. [How Jump Trading is scaling quant research with ChatGPT](https://openai.com/index/jump-trading)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 06 Oct 2026 12:00:00 GMT
   - Summary: Jump Trading uses OpenAI to expand quantitative research. See how longer-running AI workflows combine multiple data sources with human review.

5. [Agent Lightning v1.0: A 3,500-Line Lightweight Agentic RL Framework for Training Agents with Real Harnesses](https://www.microsoft.com/en-us/research/blog/agent-lightning-v1-0-a-3500-line-lightweight-agentic-rl-framework-for-training-agents-with-real-harnesses/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 07 Oct 2026 16:00:00 +0000
   - Summary: Training AI agents with reinforcement learning can be challenging because their tools, context, and decision-making are managed by complex frameworks. Agent Lightning connects existing agents to RL training, making it easier to improve them without rebuilding them. The post Agent Lightning v1.0: A 3,500-Line Lightweight Agentic RL Framework for Training Agents with Real Harnesses appeared first on Microsoft Research .

6. [Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning](https://huggingface.co/blog/open-tts-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 GMT

7. [Text2Dashboard: A Governed Agent Architecture for Natural-Language Dashboard Generation over Enterprise DataBrain](https://arxiv.org/abs/2610.06914)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06914v1 Announce Type: new Abstract: Text2Dashboard is a DataBrain-specific prototype that turns natural-language analytic requests into inspectable dashboards. An installable Codex plugin and standalone Agent Runtime combine schema-constrained model decisions with typed tools, persistent state, and deterministic Hooks for approval, audit, checkpointing, recovery, and failure handling. The pipeline resolves entities, discovers metadata, enforces read-only SQL, composes dashboards, and applies static checks, dynamic preflight, and browser inspection. The model proposes actions while deterministic software controls execution and records state transitions. We evaluate the workflow on frozen real-DataBrain tasks and controlled Hook faults. Strict success was 6/8 on metadata and SQL tasks: metadata selection passed 4/4, all four SQL tasks met semantic criteria, and 2/4 met the exact output-column contract. The final release passed 4/4 single-panel dashboard tasks, one two-panel task, and one existing-dashboard refinement; a parameterised task exceeded its step limit. All ten fault scenarios met their specified outcomes without unapproved external side effects. Model inference accounted for over 97\% of observed runtime in every reported group. These small, DataBrain-specific results do not establish production readiness, general text-to-SQL accuracy, or an efficiency advantage over manual dashboard construction.

8. [Principles that Guide, Actions that Inform: Agent Evolution via Knowledge Abstraction](https://arxiv.org/abs/2610.06964)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06964v1 Announce Type: new Abstract: Large language model (LLM) agents have demonstrated strong capabilities in interactive environments, yet their ability to continually evolve from experience remains limited. Although fine-tuning enables adaptation, its dependence on parameter access and high computational costs restrict its flexibility, especially for large-scale and closed-source LLMs. External memory offers an alternative by allowing agents to accumulate experience without modifying model parameters. However, existing methods mainly focus on experience representation and organization, while the acquired knowledge remains tightly coupled with specific tasks and contexts, limiting generalization. A key challenge is how to transform concrete interactions into abstract and reusable knowledge that guides future decisions beyond individual experiences. To address this challenge, we propose SAGA (\underline{\textbf{S}}elf-evolving \underline{\textbf{A}}gents through Experience-\underline{\textbf{G}}rounded \underline{\textbf{A}}bstraction), a framework for experience-grounded knowledge abstraction and utilization in LLM agents. SAGA progressively transforms interaction trajectories into episodic descriptions, reusable procedures, and principles with explicit applicability conditions, while maintaining links to execution evidence. Retrieved principles are instantiated into task-specific guidance and used to refine candidate actions through corrective feedback and resampling. This creates an execution--abstraction feedback loop, where accumulated knowledge guides future interactions and new experiences continuously update hierarchical memory. Experiments on ScienceWorld and ALFWorld demonstrate improved task performance, with ablation studies highlighting the importance of contextual instantiation and action regulation for leveraging principle-level knowledge.

9. [AegisFlow: A Multi-Agent Agentic AI Framework for Autonomous Remediation and Self-Healing in Fragile Data Ecosystems](https://arxiv.org/abs/2610.06971)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06971v1 Announce Type: new Abstract: Traditional data pipelines are notoriously brittle, often failing due to upstream schema drift, API contract changes, or website DOM modifications. Present observability tools only raise alerts but for human engineers, resulting in a high Mean Time to Repair (MTTR) and operational fatigue. In this paper we propose AegisFlow (Agentic Engine for Intelligent Self-healing and Graph-driven Operations for Workload remediation), a novel agentic framework that closes the loop between detection and resolution. AegisFlow uses a Watchdog agent to collect runtime telemetry and has a Repair agent to automatically create, test and deploy code patches based on Large Language Models (LLMs). The framework presents the non-intrusive execution model called Parallel Shadow Patching, a non-intrusive execution model based on the Monitor, Analyze, Plan, Execute, Knowledge (MAPE-K) loop to generate and verify patches in digital twin environments. Through experimental testing, we have evaluated AegisFlow across five common failure scenarios, and see 98.1 percent improvement in MTTR (from an average of 170 minutes per patch to 3.2 minutes) and a patch success rate of 92 percent . In particular, the system is successful in dealing with changes in the JSON schema (96 percent ) and punctuation drift (98 percent ), and is least successful in Shadow DOM cases (85 percent ). AegisFlow frees up about 98 percent of data engineering on-call time from firefighting and reallocates it towards innovation. The framework is deployment agnostic consisting of a system that can be deployed in a plugin fashion into an existing pipeline orchestration system with minimal uplift to the existing system.

10. [EPOCH: Reliable Discovery through Evidence-Governed Search](https://arxiv.org/abs/2610.06986)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06986v1 Announce Type: new Abstract: AI research agents are increasingly used to search over programs, mathematical constructions, and proofs. However, existing systems typically optimize evaluator feedback without adequately governing how that feedback is interpreted, challenged, and reused. As a result, promising but fragile candidates can be promoted as discoveries, while benchmark improvements, finite certificates, and theorem-level claims are too easily conflated. We introduce EPOCH, an evidence-governed architecture designed to close this gap. EPOCH implements an evidence-governed discovery loop by combining explicit task contracts, typed memory, active falsification, admission checks, and independent replay, so that each candidate is evaluated against the strength and scope of the claim it supports. EPOCH achieves state-of-the-art aggregate performance on AlgoTune, substantially exceeding the strongest baseline in mean normalized score (0.65 vs. 0.53), and attains the highest mean score on the internal Math14 suite (0.57). It further shows favorable held-out behavior under official-test replay and leads the descriptive aggregate on AgentHPO. Across ten discovery problems, EPOCH delivers substantial task-specific advances, including improved executable constructions, optimized algorithms, counterexamples, and proof-supported results. These advances demonstrate its ability to convert search into concrete progress across mathematical and computational domains. Together, the results suggest that evidence governance is a necessary step toward AI research agents that produce not only stronger solutions, but also more trustworthy scientific discoveries.

11. [When better traffic forecasts fail to improve signal control: a layered diagnostic study of forecast-to-decision value](https://arxiv.org/abs/2610.06992)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06992v1 Announce Type: new Abstract: Improved traffic forecasts do not necessarily yield better signal-control decisions. We investigate this gap through a layered diagnostic study using 29 days of reconstructed demand from Xuancheng, China, with seven dates reserved for testing. The framework evaluates point forecasts, conformal intervals, dependence-aware scenarios, and matched closed-loop controllers. Entry-level and movement-level forecasts reduce mean absolute error by 4.03% and 3.92%, respectively, relative to historical means. A nominal 90% conformal interval achieves 90.72% marginal coverage but only 75.66% on an ex-post high-demand subset. Interface audits identify decision-time leakage and reveal that only two of nine controlled intersections offer multiple effective actions. We correct the temporal interface and compare causal forecasts with a five-second event oracle using exhaustive joint-action search. A synthetic positive control demonstrates that future information can reduce the internal rollout cost by 61.5%. On the frozen test dates, however, causal forecasts and the event oracle increase queue vehicle?seconds by 6.09% and 3.39% relative to the matched no-future rollout, while the oracle reduces spillback exposure by 3.78%; paired-day bootstrap intervals cross zero. These findings indicate that forecast value depends on temporal observability, action identifiability, dynamics consistency, and objective alignment. The proposed protocol provides a practical way to diagnose where predictive improvements fail to translate into operational benefits.

12. [Pollo AI turns creative ideas into campaigns with OpenAI](https://openai.com/index/pollo-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 08 Oct 2026 12:00:00 GMT
   - Summary: With GPT-5.6, GPT-6 Astra, and GPT‑Image‑2.5, Pollo AI helps creators turn bold ideas into detailed images and cinematic video ads.

13. [Disrupting AI-enabled “false front” operations](https://openai.com/index/disrupting-ai-enabled-false-front-operations)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 GMT
   - Summary: OpenAI disrupted two AI-enabled influence operations that used false-front journalists and a think tank to spread geopolitical messaging.

14. [Helping teens learn, plan, and shape the future of AI](https://openai.com/index/teens-learn-and-plan)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 07 Oct 2026 12:00:00 GMT
   - Summary: College Planner is coming to ChatGPT for Teens to help students manage college applications, alongside new flashcards, quizzes, and a teen AI council.

15. [Radisson Hotel Group brings hotel discovery into ChatGPT](https://openai.com/index/radisson)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 07 Oct 2026 07:00:00 GMT
   - Summary: Radisson partnered with Accenture to build a ChatGPT plugin using OpenAI technology, helping travelers find, compare, and book hotels while planning their trips.

16. [GPT-6 and Intelligent UI for everyone](https://openai.com/index/gpt-6-for-everyone)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 07 Oct 2026 00:00:00 GMT
   - Summary: GPT‑6 is rolling out globally in ChatGPT with Intelligent UI, delivering faster responses with visuals and interactive experiences you can explore and use directly.

17. [Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 06 Oct 2026 12:00:00 GMT
   - Summary: OpenAI publishes new results on open problems in mathematics from an internal frontier model and shares Lean proof formalizations and research details on GitHub.

18. [Atlassian and OpenAI expand partnership to turn enterprise knowledge into action](https://openai.com/index/atlassian-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 06 Oct 2026 16:00:00 GMT
   - Summary: Atlassian and OpenAI are expanding their partnership to connect frontier models with enterprise knowledge and help teams plan, build, and deliver work.

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

25. [Introducing Falcon ASR](https://huggingface.co/blog/tiiuae/falcon-asr)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 07 Oct 2026 13:21:03 GMT

26. [One Model Family, Two Gold-Level Results: Fine-Tuning Nemotron for IOI and IMO](https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 07 Oct 2026 12:45:31 GMT

27. [The Agent Said It Was Done. The Database Disagreed.](https://huggingface.co/blog/microsoft/thinkingbox)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Sat, 03 Oct 2026 22:56:48 GMT

28. [Open-sourcing AstaBrief, the fast report-generation model in Asta](https://huggingface.co/blog/allenai/astabrief)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 02 Oct 2026 15:19:50 GMT

29. [AutoSynthData: Generating Training Data for Enterprise Agents](https://huggingface.co/blog/ServiceNow-AI/autosynthdata)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 02 Oct 2026 04:01:31 GMT

30. [Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents](https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 29 Sep 2026 13:07:00 GMT

31. [Holo4: powering generalist computer-use agents](https://huggingface.co/blog/Hcompany/holo4)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 09:44:05 GMT

32. [Welcome RL Environments to the hub](https://huggingface.co/blog/rl-environments)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 GMT

33. [FluidPD: In-Place Elasticity for SLO-Aware Prefill-Decode Disaggregated LLM Serving](https://arxiv.org/abs/2610.06917)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06917v1 Announce Type: new Abstract: Prefill-decode disaggregation is becoming a common architecture for LLM serving because it separates two phases with distinct execution patterns and SLO objectives. Existing systems typically combine a fixed prefill/decode worker ratio with request routing across workers. However, real-world workloads exhibit both short bursts and sustained shifts in the prefill-to-decode demand ratio. As a result, a configuration that is well provisioned at one time may quickly become mismatched, causing latency SLO violations even when idle capacity exists elsewhere. Existing autoscaling mechanisms can add capacity, but they react slowly, require spare GPUs, and do not directly address short-timescale phase imbalance. We present FluidPD, a P/D-disaggregated serving system that provides SLO-aware in-place elasticity. FluidPD introduces two complementary mechanisms. FluidToken handles transient imbalance by offloading a bounded portion of prefill computation to decode workers when decode-side slack is available. FluidRole handles sustained imbalance by reassigning running workers between prefill and decode roles in place, avoiding model reload and engine restart. Both mechanisms are guided by lightweight pressure indices that expose prefill and decode-side resource pressure before they appear as SLO violations. Across production Azure trace workloads, FluidPD improves overall SLO attainment over static SGLang by up to 94.6 percentage points, demonstrating that SLO-aware in-place P/D elasticity improves service quality without provisioning additional workers.

34. [Anchor Divergence for Semantic Geometry in Contrastive Learning](https://arxiv.org/abs/2610.06919)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06919v1 Announce Type: new Abstract: This paper concerns how semantic context determines geometry in learned vector representations. Similarity is typically measured using cosine similarity, which provides a single fixed geometry. Semantic similarity, however, is inherently context dependent: two images may be similar because they depict the same object, share a visual style, or are relevant to the same clinical finding. We show that contrastive representations naturally encompass a family of geometries that can be specialized to particular semantic structure. The key idea is to use an interplay between contrastive learning, exponential families, and information geometry to establish a correspondence between probability distributions over "anchors" and Bregman geometries on the representation space. We use this correspondence to define "Anchor Divergences", a method for specifying context-specific semantic geometries on fixed representations. Under this correspondence, modeling the anchor distribution models the geometry itself. Experiments on retrieval show that anchor divergences provide an effective and efficient way to specify context-specific semantic similarity.

35. [Metonymic Circuits for Abstract Concept Grounding in Vision Transformers](https://arxiv.org/abs/2610.06928)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.06928v1 Announce Type: new Abstract: We study how Vision Transformers ground abstract concepts (e.g., angry) when training data provide limited direct referential evidence. We hypothesize a metonymic grounding mechanism in which abstract predictions are driven by concrete, interpretable anchor concepts (e.g., fire) that bridge visual signals to abstract semantics. By applying Transcoders on CLIP and DINO vision encoders, we recover intermediate features that can be associated with semantic labels for more concrete concepts, and trace their contributions in circuits underlying abstract concept recognition. Experiments on a carefully curated icon dataset reveal structured metonymic circuits, in which perceptual primitives dominate early layers and object-like anchors precede abstract targets. Images containing rendered text instead recruit a distinct perceptual-to-textual route. Causal interventions further validate that metonymic intermediates are functionally involved in grounding abstract concepts.

36. [Task-Oriented Key-Layer KV Communication for Efficient Latent Multi-Agent Collaboration](https://arxiv.org/abs/2610.08820)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.08820v1 Announce Type: new Abstract: Large language model-based multi-agent systems improve complex problem solving through collaboration, while latent communication directly transmits model internal states to avoid the high inference costs of natural language. However, existing KV-based latent communication methods prioritize sender-side state fidelity, leading to substantial communication and computation overhead and potentially introducing redundant information. To address these limitations, we revisit latent communication from a task-oriented perspective, shifting its objective from sender-side state fidelity to receiver-side task sufficiency. Under this formulation, we propose KITE, a training-free framework for task-oriented key-layer KV communication. KITE identifies a task-effective key layer using a receiver trajectory distortion criterion, transmits only the latent working memory associated with the key layer, and further uses the same layer as the entry point for autoregressive latent reasoning. Experiments on seven benchmarks across two model families and three model scales show that, compared with full-layer KV communication, KITE reduces communication volume by 28-36$\times$, achieves up to 3$\times$ end-to-end inference speedup, and improves accuracy by up to 23.3 percentage points.

37. [Convergence of Roberts flow dynamos in Eulerian and Lagrangian codes](https://arxiv.org/abs/2610.08996)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.08996v1 Announce Type: new Abstract: Standard benchmark tests for numerical magnetohydrodynamics codes focus on one- and two-dimensional problems that ignore the possibility of dynamos, i.e., an exponential instability converting kinetic energy into magnetic energy. They also tend to ignore magnetic helicity conservation that can have dramatic effects in periodic domains. The existence of magnetic diffusion is crucial for dynamos, as was exemplified by the impossi- bility of finding dynamo solutions when using Euler potentials, which is a perfectly valid approach in the absence of magnetic diffusion. The Roberts flows I, II, III, and IV are two- dimensional flows that support three-dimensional dynamos, all of which are also large- scale dynamos in the sense that their planar averages are of significant strengths, even though flow II is pointwise non-helical. Here we demonstrate the numerical convergence properties of solutions obtained using discretisation schemes of second, sixth, and tenth order in the mesh width in the Pencil Code, compare the results with the SPH- based SWIFT code, and present a list of averaged quantities that facilitate their use in characterising the solutions as benchmarks. In addition, we present a procedure to obtain two-dimensional time-independent magnetic field visualisation for all Roberts flows, and perform per-pixel comparison between the Pencil and SWIFT codes. The rich combination of features makes Roberts flows an excellent dynamo benchmark for the direct numerical simulations of magnetohydrodynamics equations.

38. [Reliable Uncertainty Estimation for Machine-Learned Multigroup Cross Sections Without Retraining](https://arxiv.org/abs/2610.09231)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.09231v1 Announce Type: new Abstract: Uncertainty quantification in machine learning models is essential for nuclear energy applications. While machine learning models can make both uncertainty and point predictions, these models are often significantly more difficult to train jointly than models that make point predictions alone. Split conformal prediction is a family of methods for computing distribution-free prediction intervals by calculating nonconformity scores corresponding to a target quantile in a calibration dataset. Although conformal prediction only guarantees marginal coverage, normalizing nonconformity scores enables predictive interval widths to be calculated on a per-sample basis, providing an approximation to conditional coverage. In this work, we connect uncertainty predicting neural networks to pre-trained networks that estimate shielding factors in multigroup neutron cross sections. We train the uncertainty models on the same OpenMC data used by the pre-trained models, whose weights and biases remain fixed. The outputs of the uncertainty models are the standard deviations of the residual, separated into contributions from the model and tally uncertainty. Their corresponding variances are combined in quadrature to provide a normalizing factor for conformal prediction, providing interval widths that are adaptive on a per-sample basis. Baselines for comparison are established using Mondrian conformal prediction, and by using the ground truth OpenMC uncertainties as normalizers in the conformal framework. We use predicted uncertainty interval widths and the severity of predictions that overshoot the interval widths as bases for comparing our normalizer with the baselines. We find that our method dramatically reduces both interval widths and the degree to which predictions fall outside these widths.

39. [Self-Shielded Multigroup Microscopic Cross Section Generation Using Targeted Artificial Neural Networks](https://arxiv.org/abs/2610.10464)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.10464v1 Announce Type: new Abstract: Multigroup neutron transport models are used widely in simulation codes due to their memory and compute efficiency compared to continuous energy methods. However, multigroup codes rely on nuclear data prepared using approximate methods that require significant manual effort and expertise to account for self-shielding effects. In addition, multigroup nuclear data libraries prepared in this way can be limited in their applicability for modeling diverse reactors and operating conditions. Here we show that trained artificial neural networks can predict self-shielded microscopic cross sections accurately in pincell simulations containing uranium dioxide fuel with a fixed geometry and temperature. The model's predictive accuracy remains high across fuel enrichment and burnup ranges encountered in light water reactors. Critically, the neural networks' predictions require only the atomic concentration of the fuel's constituent nuclides as inputs. The networks are trained using 8,704 samples of training and validation data generated using continuous energy OpenMC pincell simulations. The trained neural networks predict self-shielded total, fission, absorption, elastic, and total scattering cross sections for combinations of 90 nuclides in the CASMO-8 energy group structure. The neural networks' predictions of self-shielded cross sections are validated by comparison with 1,500 samples of reference cross sections unseen during training and tallied using OpenMC simulations. The predicted and ground truth cross sections in the test data set agree to within 0.119% on average. When the predicted cross sections are used in a multigroup eigenvalue run, they achieve a mean absolute error in keff of 200 pcm.

40. [Simplicial closure fragments the explosive cooperation transitions in higher-order public goods games](https://arxiv.org/abs/2608.17968)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2608.17968v1 Announce Type: cross Abstract: Hypergraph (HG) and simplicial complex (SC) are two common representations of higher-order networks, and are often expected to differ mainly quantitatively when they encode comparable group interactions. Here we show that this expectation fails in evolutionary cooperation dynamics. Using a controlled higher-order public goods game (PGG) with minimal ad hoc parameters, we compare cooperation transitions on randomized HG and SC constructed from the same triangular backbone. We find that the impact of simplicial closure is selective: when the cooperation transition is continuous-like on HG, imposing simplicial closure mainly broadens the transition without changing its qualitative nature; however, when the transition is explosive and first-order-like on HG, simplicial closure will fragment the compact low/high bistability into a broad ensemble of metastable final states. Detailed analysis reveals that this selective effect arises from the dual role of simplicial closure in cooperative-nucleus dynamics: it promotes the survival of local cooperative nuclei while suppressing their conversion into system-wide cascades. Further experiments confirm that this fragmentation is not tied to a specific payoff form, but is a generic feature of explosive cooperation transitions in higher-order PGGs.

41. [Early onset of the hot circumgalactic medium around Milky Way galaxies](https://arxiv.org/abs/2610.08931)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.08931v1 Announce Type: cross Abstract: Hot coronae are key regulators in Milky Way (MW)-type galaxy formation and are thought to emerge once a galaxy's dark matter halo crosses a critical mass threshold, $M_{\mathrm{vir}}\sim10^{12} {\mathrm{M}}_\odot$, so that accretion shocks can heat infalling gas to virial temperatures, $T_{\mathrm{vir}}$. Here we investigate the roles of stellar feedback and accretion shocks in establishing the circumgalactic medium (CGM) around MW-mass galaxies using the VINTERGATAN cosmological simulation suite. We find that stellar feedback drives the early formation of a hot CGM, with $T_{\mathrm{CGM}}\sim T_{\mathrm{vir}}$. By contrast, in feedback-free simulations, accretion shocks alone do not produce a CGM with comparably high average temperatures at early epochs ($z>2$), independent of gas metallicity. We show that CGM virialisation (defined when halo-gas cooling time exceeds the free-fall time) begins with the emergence of a hot corona ($T>10^5$ K) that can appear as early as $z\approx3$ at virial radius, $R_{\mathrm{vir}}$, when feedback is included. This is much earlier than predicted by accretion-shock theory or feedback-free models ($z\lesssim1$). While accretion shocks alone produce an inside-out virialisation pattern, feedback can alter this behaviour, driving a rapid transition ($\lesssim0.5$ Gyr) that is either outside-in or nearly simultaneous throughout the halo. Finally, these early-forming coronae are largely stable from formation through to the present day, but can appear to evolve simply because the definition of $R_{\mathrm{vir}}$ grows with time. This 'CGM pseudo-evolution' is analogous to the pseudo-evolution of dark matter haloes and should be taken into account when interpreting the evolution of hot coronae.

42. [Full molecular dynamics simulations of a single trapped ion in a neutral bath](https://arxiv.org/abs/2610.09268)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.09268v1 Announce Type: cross Abstract: We present full molecular dynamics simulations that explicitly incorporate the simultaneous interactions between a trapped ion and a bath of neutral atoms. In contrast to conventional molecular dynamics treatments, this framework enables a systematic assessment of how the atomic-gas density influences both the ion's cooling dynamics and its steady-state mean kinetic energy. Our results show that the gas density measurably modifies the ion's average kinetic energy, albeit only weakly, in qualitative disagreement with predictions obtained from standard molecular dynamics simulations. In addition, the calculations indicate that short-range features of the atom-ion interaction potential become increasingly consequential as the atomic density increases. Simulations including many atoms yield higher mean kinetic energies than standard molecular dynamics, a trend we attribute to the transient formation of molecular-ion complexes. Finally, we observe that for a fixed ion, lighter atomic baths lead to a smaller final ion average kinetic energy than heavier atomic baths.

43. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.98; Date: 2026-10-08T18:20:27Z; Popularity: 1,977 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

44. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-10-06T16:30:21Z; Popularity: 487 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

45. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-10-08T11:57:41Z; Popularity: 371 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

46. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-10-07T09:38:20Z; Popularity: 250 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

47. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.15; Date: 2026-10-08T19:03:37Z; Popularity: 152 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

48. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-09-28T14:58:43Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

49. [What AI gets wrong and what failure teaches us](https://www.microsoft.com/en-us/research/podcast/what-ai-gets-wrong-and-what-failure-teaches-us/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 06 Oct 2026 16:19:06 +0000
   - Summary: Jennifer Neville did not want to go into computer science—but that’s exactly where she landed. Neville discusses the starts and stops that led to her professional sweet spot and her work identifying “surprising failures” making it hard for AI to handle complexity. The post What AI gets wrong and what failure teaches us appeared first on Microsoft Research .

50. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

51. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

52. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

53. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

54. [KVFetch: Temporal Prefetching for the Missing Half of KV Cache Compression](https://arxiv.org/abs/2610.08811)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.08811v1 Announce Type: new Abstract: As context windows scale to tens or hundreds of thousands of tokens, KV cache compression has become essential for efficient LLM inference. Existing methods fall into three families: score-based eviction, summary compensation, and offload-and-recall. Yet all three decide what to keep or recall by content relevance to the current query. We show this shared design is structurally incomplete. A cache supports two access modes: associative lookup by content and sequential traversal by position; current compressors implement only the first. The gap matters in practice: retrieval-augmented generation, code completion, and structured-data extraction all require the model to reproduce identifiers, field values, or code tokens verbatim from the context. Under compression, content-based eviction retains the head of such a sequence but discards its continuation, causing verbatim copying to break irreversibly midway, a failure we call sequential forgetting. This failure resists better scoring, larger budgets, summary compensation, and dynamic re-scoring; it is the dominant source of remaining quality loss under compression. We propose KVFetch, a training-free, drop-in framework that opens a temporal recall channel for any score-based compressor. It demotes evicted candidates to a quantized cold tier, detects active copying through a monotone read pointer, and prefetches positional successors into fixed-size hot-tier slots without increasing attention cost. On RULER-16K under an iso-budget control, KVFetch recovers verbatim copying from 0.8 to 78.4 and raises the 13-task average by +8.4, with gains concentrating on tasks that require sequential access. On LongBench, where no task requires sequential access, the channel remains dormant and imposes no cost.

55. [DenoFlow: Flow Matching for SSVEP Denoising under Real Physiological Artifacts](https://arxiv.org/abs/2610.08817)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.08817v1 Announce Type: new Abstract: Electroencephalography (EEG)-based brain-computer interfaces (BCIs), particularly steady-state visual evoked potential (SSVEP) systems, are highly vulnerable to noise and artifacts, which severely degrade decoding accuracy. Although recent denoising approaches have shown promise, they are fitted without paired ground truth, can settle on reproducing their input, and are optimized on waveform distance alone, which says nothing about whether the output stays decodable. To address these issues, we propose DenoFlow, which casts SSVEP denoising as transport: instead of learning a direct map from a contaminated trial to a clean one, a field network regresses the velocity of the straight path between them, following the rectified-flow formulation, and denoising integrates that field forward from the observation. The field network is an encoder-decoder that sees the contaminated trial at every layer and the path position at its bottleneck, and a classifier trained alongside it supervises the integrated output. Because the observation itself is both the conditioning input and the starting point of the integration, the model never generates a trial from noise, and training reduces to regression, removing the adversarial min-max game. To obtain paired data on datasets with no ground truth, we injected physiological artifacts of the recorded electromyography (EMG) and electrooculography (EOG) signals under a controlled signal-to-noise target. Experiments on two public SSVEP datasets with five popular SSVEP decoders showed that DenoFlow outperformed seven baseline denoising models on both signal fidelity and downstream decoding accuracy. Code is available at https://github.com/wzwvv/DenoFlow.

56. [Just for FUNS: LLM-Guided Spatio-Temporal Graph Node Generation for Forecasting Unobserved Node States](https://arxiv.org/abs/2610.08818)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.08818v1 Announce Type: new Abstract: Spatio-temporal forecasting is a cornerstone of logistics, urban planning, and intelligent transportation systems. However, constrained by deployment costs and maintenance resources, sensor networks often lack comprehensive spatial coverage, rendering Forecast Unobserved Node States (FUNS) a critical yet formidable challenge. Conventional models rely on historical observations and typically falter when encountering nodes without prior records. To address this, we redefine the problem as a conditional generation task on spatio-temporal graphs and propose GenST, a framework that introduces Large Language Models (LLMs) as a semantic bridge, leveraging a pre-trained LLM fine-tuned to extract rich semantic features from node descriptions, such as functional zones and road network structures, to compensate for missing spatio-temporal signals. Specifically, we design a two-stage generative architecture: a Spatio-Temporal VAE first compresses spatio-temporal dynamics into a latent space, followed by a Generative Transformer (GenT) that reconstructs the future states of unobserved nodes from noise, guided by multi-modal conditions including semantics, geographic coordinates, and neighborhood contexts. Experiments on six traffic and two non-traffic datasets show GenST significantly outperforms existing baselines in zero-shot prediction tasks, demonstrating the practical potential of semantic-guided generation for mitigating spatio-temporal data sparsity.

57. [Nonlinear Spectral Computing](https://arxiv.org/abs/2610.09081)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.09081v1 Announce Type: cross Abstract: Many machine learning algorithms rely on the Fourier transform, which is also the inner core of many analog computing devices and, specifically, of optical computing. The square of the modulus of the Fourier spectrum naturally maps onto pairwise interactions, as in the renowned Ising model, making it applicable to combinatorial optimization. Here we show how the nonlinear Fourier transform, related to integrable nonlinear partial differential equations, significantly widens the computational capability and also enables a wide variety of computing gates. We study specifically the case of the nonlinear Schr\"odinger equation; we introduce an input composed by ``tokens'', i.e., batches of information encoded in a multi-step potential, and we show how the nonlinear spectral computing arising in the wave propagation not only generalizes combinatorial optimization to higher order problems, but also realizes boolean gates. In the weakly nonlinear regime, nonlinearity generates higher-order interactions as perturbative corrections to the pairwise terms. In the solitonic regime, the discrete nonlinear spectrum performs digital computation through soliton generation. By using four input tokens, we demonstrate the programmability of all 256 Boolean functions of three variables, including 3-SAT instances. Our results show that integrable nonlinear propagation provides an unprecedented single physical platform for higher-order and logical computation, opening the way to a rich variety of new algorithms for analog computing, machine learning, and classical and quantum information processing.

58. [Heat Transport of the $\beta$-Fermi--Pasta--Ulam--Tsingou chain in the long-wave limit](https://arxiv.org/abs/2610.09405)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.09405v1 Announce Type: cross Abstract: Resolving the anomalous conductivity exponent of the symmetric $\beta$-Fermi--Pasta--Ulam--Tsingou chain by molecular dynamics can require very large systems because of long finite-size crossovers and thermal-contact resistance. Motivated by this computational challenge, we derive a long-wavelength continuum description and investigate whether the kinetic-theory scaling $\kappa\propto L^{2/5}$ becomes accessible with a moderate number of numerical degrees of freedom. The nonlinear elastic field retains the cubic stress of the microscopic interaction and exchanges heat with Langevin reservoirs. A flux-conservative spatial discretization constructs the force and energy current from the same stress, providing a consistent interior transport estimator. For $L>8$, corresponding to approximately $10^3$ mesh nodes and above at the reference resolution, the fitted exponent is $0.399\pm0.004$. Mesh refinement supports the stability of this exponent between the two finer resolutions, although the conductivity amplitude remains resolution-dependent. The main result is thus an accessible finite-size regime near $2/5$, rather than convergence of the absolute conductivity as the mesh spacing vanishes. This formulation provides a practical route to studying anomalous transport in anharmonic systems and a conservative continuum framework for investigating energy flow in nonlinear elastic media.

59. [Machine-learning-assisted phase-amplitude reduction for fast synchronization of airfoil wakes with constrained fluctuations](https://arxiv.org/abs/2610.09543)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.09543v1 Announce Type: cross Abstract: This study considers rapidly modifying the wake shedding frequency of the flow around an airfoil using sparse sensor information, subject to constraints on the lift coefficient fluctuations. This is achieved by combining phase-amplitude reduction with nonlinear machine-learning-based sparse sensor reconstruction. We derive time-varying phase and amplitude sensitivity fields that identify the optimal spatial locations and timing for actuation from merely three sensors. Through the sensitivity fields, we analytically obtain the optimal waveform for fast synchronization of wake shedding frequency while minimizing amplitude deviation of aerodynamic responses. The proposed approach is evaluated using flows over various NACA airfoils at several post-stall angles of attack, all of which exhibit unsteady periodic vortex shedding. With the identified optimal forcing, the wake frequency is altered much faster than with a standard sinusoidal actuation. Furthermore, the amplitude-penalized forcing achieves $20\%$ suppression of the lift coefficient fluctuation compared to the optimal forcing without amplitude penalty. The current amplitude-penalized technique may offer an efficient path for fast flow modification without causing detrimental fluctuations in periodic aerodynamic and aeroelastic systems with fluid-structure interactions.

60. [Performance Portable $\mathrm{SU}(N)$ Lattice Gauge Theory Simulation with Kokkos](https://arxiv.org/abs/2610.09766)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 08 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.09766v1 Announce Type: cross Abstract: The increasing diversity of high performance computing systems makes separate, architecture specific implementations of lattice gauge theory algorithms costly to maintain. We present \texttt{kwqft}, a performance portable Kokkos implementation of Wilson pure gauge Monte Carlo simulation for $\mathrm{SU}(N)$ Yang-Mills theory in an arbitrary number of space-time dimensions. The gauge group order $N$ and the dimension $D$ are compile time parameters. A single source targets the Serial, OpenMP, CUDA, HIP, and SYCL execution spaces, with MPI halo exchange overlapped with interior updates. The implementation reproduces the exact two-dimensional plaquette and published three and four dimensional values for gauge groups up to $\mathrm{SU}(17)$. On an NVIDIA A100 the Kokkos CUDA backend is competitive with a native CUDA code, SIMD acceleration improves the OpenMP path on Armv9 processors, and a large scale speedup is demonstrated for an $\mathrm{SU}(4)$ lattice on the LineShine supercomputer, currently ranked first on the TOP500 list.

61. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.77; Date: 2026-10-08T02:07:45Z; Popularity: 767 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

62. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

63. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.38; Date: 2026-10-08T16:36:32Z; Popularity: 1,375 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

64. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.24; Date: 2026-10-06T20:59:38Z; Popularity: 237 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

GAMEGO: Training Game-Dev Agents with Synthetic Trajectories Anchored in Real-World Assets

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2610.06910

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
