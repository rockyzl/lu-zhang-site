# Daily signal sidecar - 2026-09-15

## Selected Signal

- Title: Can Autonomous LLM Agents Execute Multireference Quantum Chemistry Calculations?
- URL: https://arxiv.org/abs/2609.13357
- Source: arXiv physics.comp-ph
- Score: 9.00

## Candidate Review

- Signal: Can Autonomous LLM Agents Execute Multireference Quantum Chemistry Calculations?
- Primary source: https://arxiv.org/abs/2609.13357
- Discovery source: arXiv physics.comp-ph
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

Total candidates reviewed after duplicate-source filtering: 60

1. [Can Autonomous LLM Agents Execute Multireference Quantum Chemistry Calculations?](https://arxiv.org/abs/2609.13357)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 9.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13357v1 Announce Type: cross Abstract: Multireference electronic-structure calculations remain difficult to automate because critical workflow decisions, including active-space selection, state averaging, convergence recovery, and state identification, traditionally rely on expert judgment. Here, we investigate whether an autonomous large language model (LLM) agent can perform these tasks without human intervention. The agent selects active spaces using literature-grounded analogies or explicitly documented chemical reasoning, generates and submits ORCA calculations, analyzes outputs, and records all decisions in an auditable reasoning log. Benchmarking against 558 vertical transition energies (VTEs) from QUESTDB shows that an unguided baseline agent achieves 24.9% coverage with a mean absolute error (MAE) of 0.373 eV. Introducing a structured decision ladder increases coverage to 44.1% while reducing the MAE to 0.339 eV. The largest gains are observed for double and Rydberg excitations, demonstrating that expert-informed procedural guidance substantially improves active-space construction and state identification. When provided with complete workflow information, the agent successfully reproduces published QUEST calculations with an MAE of only 23 meV, resolving 75% of target configurations within seven attempts. These results demonstrate that contemporary LLM agents can autonomously execute and reproduce complex multireference quantum-chemical workflows, while highlighting the importance of structured reasoning frameworks for achieving reliable high-throughput and high-fidelity electronic-structure calculations.

2. [ZGCM-1: A Fully Open and Extremely Efficient Foundation Model for Math and Agentic Search](https://arxiv.org/abs/2609.13356)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13356v1 Announce Type: new Abstract: In this work, we present ZGCM-1, a fully open 7B dense foundation model trained from scratch with extreme data, system, and algorithmic efficiency. ZGCM-1 is founded on a core premise: compact models cannot passively memorize the open web, but can overcome parametric capacity limits by coupling deliberate internal thinking with active external tool use. To support this paradigm across a 256K context, we develop an end-to-end, high-efficiency open training recipe: Architecture & System Co-design: interleaved gated sliding-window and full attention, and a stable FP8 Muon optimizer; Progressive Curriculum & MDP Mid-Training: context scaling across 16K, 64K, and 256K, and the reformulation of interaction traces into Markov Decision Processes. Furthermore, we establish an AI-native R&D workflow where agent swarms autonomously manage cluster operations, data curation, and rapid diagnostic evaluation. Extensive evaluations show that ZGCM-1-7B is competitive across 7B model family on general benchmarks. On several challenging mathematical reasoning and agentic search suites, it remains competitive with frontier models orders of magnitude larger, such as Qwen3-235B-A22B and GLM-5.1. We also show that our pre-training design offers a ~4.2x efficiency improvement in 16K pre-training time-to-loss. Across the full development lifecycle, we distill eight actionable empirical findings-spanning architectural scaling, SFT quality pruning, long-context generalization, and agentic co-training dynamics. To facilitate community research, we open-source model weights from the pre-training, mid-training, and post-training stages, intermediate checkpoints, training code, per-stage data and data recipes, and W&B logs.

3. [Vibe Patenting: Evaluating LLM Judges for Professional Patent-Drafting Agents](https://arxiv.org/abs/2609.13422)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13422v1 Announce Type: new Abstract: LLM judges are increasingly used to evaluate and improve AI-generated outputs, yet their reliability for complex professional work remains unclear. We study this problem through Vibe Patenting, an end-to-end patent-drafting testbed for AI-agent evaluation. A separately-invoked LLM judge evaluates generated patent drafts and provides structured feedback for iterative revision. Across multiple inventions and drafting-agent configurations, judge-guided revision consistently improves judge-assessed quality, while unguided revision tends to saturate. Notably, iterative judge feedback enables a low-reasoning agent to approach the performance of a substantially more expensive high-reasoning agent. Stronger models and increased reasoning generally improve judge-assessed drafting quality, while domain-specific agentic workflows provide further gains. We validate the judge against independent evaluation by a professional patent attorney and find meaningful but strongly metric-dependent agreement and systematic calibration differences. These results highlight both the utility and limitations of LLM judges as evaluators and optimization signals for complex professional workflows.

4. [TimeThink: Eliciting Compositional Reasoning in Timeseries Large Language Models](https://arxiv.org/abs/2609.13457)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13457v1 Announce Type: new Abstract: Timeseries multimodal large language models (TS-MLLMs) have recently begun leveraging the reasoning capabilities of large language models (LLMs) for question-answering tasks. However, these models often fail to capture dynamic temporal patterns, providing only implicit reasoning that lacks the underlying explanations critical for high-stakes applications like healthcare. While reinforcement learning (RL)-based timeseries language models aim to address this, they often fall short because they are trained on narrow, in-distribution data and struggle with out-of-distribution compositional questions. To address these challenges, we present TimeThink, a synthetic framework for eliciting compositional timeseries reasoning. Core timeseries primitives (e.g., trend, seasonality) are domain-independent and can be deterministically generated. Guided by this premise, TimeThink first designs a synthetic data generator that produces atomic and composite question-answer pairs, providing objective ground truth with reasoning traces. Building on this framework, TimeThink employs a reinforcement learning with verifiable rewards (RLVR) training strategy that encourages explicit reasoning. Unlike template-reliant methods, this approach enables the model to learn the underlying logic of composition rather than simply imitating traces. Extensive experiments show that TimeThink, trained only on synthetic data, significantly outperforms strong baselines on both synthetic and real-world benchmarks.

5. [BudgetBench: A Budget-Tiered Protocol and Pilot Harness for Memory Strategy Evaluation in Local Large Language Model Agents](https://arxiv.org/abs/2609.13149)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13149v1 Announce Type: new Abstract: For local large language model agents, active context is a scarce resource: memory capacity, prefill latency, cache growth, and service objectives all constrain how many input tokens each call can afford. We present BudgetBench, an active-budget protocol and reference harness that treats the per-call input-token budget as the independent variable when comparing memory strategies. Holding the model, task, sampler, and decoding fixed, it sweeps budgets over 2K, 4K, 8K, 16K, and 32K tokens and records quality, budget utilization, latency, and, as a first-class outcome, budget-violation rates. The core contribution is this reusable measurement surface: a swappable MemoryStrategy contract, explicit budget enforcement, deterministic or versioned graders, prompt-audit metadata, and reproducibility artifacts, released at https://github.com/aviskaar/budgetbench. We substantiate the protocol with pilot studies rather than final rankings. Across a local qwen2.5:1.5b pilot (89 items each on SWE-bench Verified and LongBench v2), a hosted 50-item Qwen3 30B-A3B LongBench replication with exact tokenization, and a 500-item LongMemEval oracle study scored by the official GPT-4o evaluator, the harness exposes budget-compliance failures, non-monotonic quality curves, and operating points that single-budget evaluation hides. The budgeted-versus-full-context direction remains unresolved: the local slice is near-null and the hosted replication favors full context in point estimate. We report results transparently, including that the early pilot's tokenizer approximation undercounts some served-model prompts, so its violation rows are tokenizer-approximation diagnostics, not claim-bearing results; all timings are operational diagnostics. The reusable contribution is the protocol, harness, and failure-reporting discipline needed to scale fixed-budget memory-strategy evaluation.

6. [Rebuilding AUTOMATIC1111 with Gradio Workflow](https://huggingface.co/blog/gradio-workflow-1111)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

7. [Converge Then Diversify: Decoupling Convergence and Diversity in Multi-Objective Bayesian Optimisation](https://arxiv.org/abs/2609.13396)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13396v1 Announce Type: new Abstract: Multi-objective Bayesian optimisation (MOBO) is a sample-efficient approach for optimising expensive black-box functions with multiple objectives. In MOBO, the goal is to adequately approximate the Pareto front; that is, to obtain a high-quality solution set with 1) good convergence (closeness to the Pareto front) and 2) good diversity (spread across the Pareto front). Existing MOBO methods typically aim to accomplish these two tasks simultaneously, i.e., driving the search towards the Pareto front while maintaining a diverse set of nondominated solutions, such that the solutions, ideally, can gradually approach the entire front. When sufficient search budgets are available, this approach is effective. However, considering both convergence and diversity throughout the search is not easy and requires careful design. Under very tight budgets, there may not be enough solutions generated to be able to simultaneously approach the entire Pareto front. To address this issue, this paper proposes a \textit{converge-then-diversify} (CTD) approach that decouples convergence and diversity into two stages. In the first stage, CTD focuses on convergence, aiming to quickly drive the search toward a single point on the Pareto front. In the second stage, CTD focuses on diversity, aiming to spread solutions across the front. We present two simple instantiations of CTD by using widely adopted acquisition functions in the area. Experimental results show that, across all 446 pairwise comparisons, CTD statistically outperforms state-of-the-art methods in 72.9\% of the cases, performs equivalently in 21.1\%, and is statistically worse in only 6.1\%, with the advantage being particularly evident in settings with very tight evaluation budgets or in high-dimensional problems.

8. [Generalized Agent Iteration: One Formal Framework for Iterative Policy Improvement and Recursive Self-Improvement](https://arxiv.org/abs/2609.13406)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13406v1 Announce Type: new Abstract: When we speak of recursive self-improvement (RSI), are we speaking of a phenomenon, a mechanism, or a prospect? Towards autonomous and evolving intelligence, RSI is being claimed at many scales, while no single framework that formally describes these emerging instances exists. Its counterpart in the classical realm, iterative policy improvement, is characterized by generalized policy iteration (GPI), a framework of broad applicability with well-understood theoretical properties, but only where the update principle and the evaluation base lie outside the agent. In this paper, we propose Generalized Agent Iteration (GAI), a formal framework that describes iterative policy improvement and RSI as two cases of a single learning paradigm. GAI defines the agent as a configuration of modifiable components within a system and models the learning process as a cycle of agent evaluation and agent improvement. Two pivotal dials then distinguish the instances: whether the improving mechanism is part of the agent and whether the standard it is measured against is grounded outside it. The former dial delineates the boundary between GPI and RSI, and the latter determines a system's polarity as anchored, goal drift, or fully self-referential. Moreover, we use these coordinates to place existing systems on the same two axes and make the defects of recursive self-improvement statable one condition at a time. We see this paper as a first step toward exploring a formal characterization of RSI that rests on the classical account, makes existing systems comparable, and provides a principled basis for analyzing and designing new ones.

9. [Governing at Machine Speed: An Adaptive Intelligence Architecture for Real-Time AI Policy Enforcement](https://arxiv.org/abs/2609.13466)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13466v1 Announce Type: new Abstract: Enterprise AI adoption has reached 78% of organizations globally, yet the infrastructure to govern that adoption has not kept pace. This paper identifies and characterizes the attestation deficit, a structural condition in which organizations maintain governance policies but cannot produce auditable, tamper-evident evidence of enforcement within regulatory timelines. Drawing on empirical data from the Stanford 2026 AI Index Report (362 documented incidents), the IBM/Ponemon 2026 Cost of a Data Breach study (USD 4.99M average cost, 92% lacking access controls), and the EY/AIUC-1 Consortium survey (38% end-to-end monitoring, 17% agent-to-agent coverage), this paper demonstrates that the governance failure is organizational and architectural rather than technical. To address this deficit, we propose AGIL (Adaptive Governance Intelligence Layer), a conceptual five-layer architecture designed to use machine learning for real-time AI governance enforcement. The proposed layers include: (1) Autonomous Discovery for shadow AI detection via behavioral fingerprinting, (2) Behavioral Risk Classification unifying security, hallucination, privacy, and accountability scoring, (3) a Policy Enforcement Gateway for inline permit/deny/modify decisions at sub-100ms latency, (4) a Continuous Attestation Engine generating tamper-evident audit trails as a byproduct of enforcement, and (5) Adaptive Policy Intelligence for ML-driven policy evolution across jurisdictions. AGIL is presented as a theoretical framework and architectural proposal; empirical validation through controlled deployment remains a direction for future work.

10. [OrchSLM: Probing the Dynamics of Small Language Model Orchestration](https://arxiv.org/abs/2609.13470)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13470v1 Announce Type: new Abstract: Although large language models (LLMs) have demonstrated remarkable capabilities, their reliance on cloud-scale infrastructure poses fundamental challenges for deployment in agentic pipelines, including latency, privacy, connectivity, and substantial computational cost. Small language models (SLMs) offer a compelling alternative: recent studies suggest that many repetitive and narrowly scoped subtasks in agentic workloads may be better served by specialized SLMs than by monolithic LLMs. However, the limited capacity and context windows of SLMs can constrain long-horizon reasoning and interaction-heavy orchestration strategies such as iterative verification and debate. This motivates a complementary, non-interactive paradigm in which heterogeneous SLMs independently generate candidate solutions and a router orchestrates their cached samples without further model interaction. To further understand the mechanisms of such orchestration, we introduce OrchSLM, a routing framework that unifies existing non-interactive orchestration methods and exposes their underlying design choices as controllable parameters. Using OrchSLM as a systematic probe, we reveal how orchestration behavior emerges from diverse knobs, including the task structure, model-pool composition, and multi-agent consensus.

11. [Data-Driven Cohesive Zone Modeling within the Generalized Standard Materials Framework](https://arxiv.org/abs/2609.13629)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13629v1 Announce Type: new Abstract: Cohesive zone models are widely used to describe fracture and interfacial failure, yet most formulations prescribe problem-specific analytical traction-separation laws together with phenomenological rules for unloading and reloading, leading to specialized models for different cohesive behaviors. This work develops a unified learnable cohesive formulation within the generalized standard materials framework, in which the response is generated from learned constitutive functions while the underlying thermodynamic structure remains fixed. The surface free energy is decomposed into active and contact contributions, and irreversible damage evolution is governed by a learned mode-dependent damage resistance. The active energy is represented by an input-convex neural network, while the inverse damage resistance is represented by a monotone neural network. Convexity, monotonicity, normalization, and damage irreversibility are incorporated directly into the constitutive representation. Direct parameterization of the inverse resistance yields an explicit damage update and avoids local nonlinear inversion during constitutive evaluation. Material-point studies show that the formulation can represent qualitatively distinct cohesive responses, including plateaus, extended softening tails, irregular softening, nonlinear unloading, distinct Mode I and Mode II behaviors, and several classical mixed-mode cohesive laws. The framework therefore replaces law-specific model construction with a single thermodynamically structured representation capable of learning cohesive responses of broad functional complexity from data.

12. [Digital Twin of an Argon-Hydrogen Plasma Reactor](https://arxiv.org/abs/2609.15250)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.15250v1 Announce Type: new Abstract: The principal proof of concept revolves around an argon-hydrogen plasma reactor that melts, reduces, atomizes and quenches critical raw material in one step, with premium spherical powder as the deliverable output and control of the composition chemistry. Each usage of the reactor is monitored through thermocouples and pressure sensors, which provide a daily data source of the real-world experiments. The reactor is modeled through COMSOL Multiphysics, which represents the core solver used to provide multiphysics simulations. The usage of COMSOL is complemented with Artificial Intelligence (AI) models, to enable seamless data assimilation and optimization. This paper presents the COMSOL twin of the reaction chamber and converging-diverging nozzle, together with a custom phase-change particle-tracing layer validated on Ti-6Al-4V (Ti64). Moreover, we highlight how the synergy between COMSOL simulations and AI-based digital surrogates can be leveraged to build self-consistent optimization loops geared toward (i) fully autonomous live control of the reactor and (ii) optimization of the process.

13. [How Fyxer built an AI executive assistant people trust](https://openai.com/index/fyxer)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 12:00:00 GMT
   - Summary: Fyxer uses OpenAI models, fine-tuning, memory, and real user feedback to organize inboxes and draft emails in each user’s voice.

14. [Perplexity trusts GPT-6 Astra with end-to-end systems](https://openai.com/index/perplexity-improving-accuracy-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 GMT
   - Summary: Perplexity uses Astra to write communications, change software, and monitor production systems, and checks in much less frequently than with earlier models.

15. [Cognition helps Devin test its own work with GPT‑6 Astra](https://openai.com/index/cognition-devin-testing-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 11 Sep 2026 16:00:00 GMT
   - Summary: GPT‑6 Astra improves Devin’s ability to test software and show that it works, with the goal of helping engineers review less code and ship more.

16. [How a researcher uses Codex and ChatGPT to search for new antimicrobial molecules](https://openai.com/index/using-codex-chatgpt-to-search-for-new-antimicrobials)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 16:00:00 GMT
   - Summary: César de la Fuente’s lab uses Codex and ChatGPT to search living and extinct genomes for antimicrobial candidates to fight drug-resistant infections.

17. [Now everyone can put data to work](https://openai.com/index/put-data-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 15:00:00 GMT
   - Summary: Meet the Data agent in ChatGPT Work. Connect company data, uncover insights, and build interactive dashboards with AI using natural language.

18. [Expanding AI access and cyber defense for federal, state, local, and tribal governments](https://openai.com/index/expanding-ai-access-us-government)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 07:00:00 GMT
   - Summary: OpenAI and GSA will offer eligible federal, state, local, and tribal governments $0 license fees, 50% off usage, and expanded cyber defense support.

19. [Build more natural voice experiences with GPT‑Live‑1 in the API](https://openai.com/index/introducing-gpt-live-1-in-the-api)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT
   - Summary: GPT‑Live‑1 brings natural, full-duplex voice conversations to the API, with stronger instruction following, custom voices, and telephony support.

20. [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT
   - Summary: Build and launch cloud agents with the Agents API, a managed service powered by the Codex harness for orchestration, long-running sessions, and tool use.

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

25. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

26. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

27. [Safety for Whom? Refusing the Right Subset of a Topic, Not the Whole Topic](https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 08 Sep 2026 14:23:07 GMT

28. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

29. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

30. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

31. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

32. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

33. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

34. [Toward Self-Adaptive Physical AI: Can LLM Agents Manage Long-Horizon Physical Tasks?](https://arxiv.org/abs/2609.13436)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13436v1 Announce Type: new Abstract: Large Language Model (LLM) agents offer a promising path toward autonomously managing long-term physical tasks without human intervention. However, physical tasks require agents to continuously observe the environment, make consequential actions, and remain effective as the environment changes. Existing approaches either require substantial data and retraining, or primarily focus on agents operating in the virtual world. In this work, we explore the feasibility of building a self-adaptive physical AI agent that manages long-term physical tasks in a zero-shot manner and adapts to environmental changes without human intervention. We design a multi-agent framework that integrates planning, tool calling, observation, and verification, and evaluate it on agricultural tasks against reinforcement learning (RL) agents under different weather patterns. Our results show that zero-shot LLM agents can achieve comparable management outcomes to RL agents under the same weather pattern and adapt more effectively than RL when evaluated under a shifted environment, highlighting a promising path toward self-adaptive physical AI agents.

35. [LabAgent: Customize Any Research Hubs for Scientific Discoveries Using AI Agents](https://arxiv.org/abs/2609.13437)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13437v1 Announce Type: new Abstract: Scientific research is a continuous process that emphasizes inheritance. Methods developed by predecessors are often expanded upon by new researchers to explore more novel and in-depth scientific questions. However, the change of lab staff, such as student graduation, leads to a lack of personnel capable of replicating methods. Methods that have been developed with significant effort and resources cannot be continued. To address these limitations, we propose LabAgent, a reproduce and discovery harness tailored for a lab's continuous work. LabAgent employs two mechanisms to guarantee that all skills can be executed and verified and to record the corrective methods and experiences, allowing for direct correction or avoidance of similar errors. We applied LabAgent to drug property prediction, biomedical problem analysis, protein variant effect prediction, and statistical genetics in life science domains. LabAgent ranks first over commercial generalist agents in every domain, and demonstrates accurate reproduction of a published figure. Overall, these results demonstrate that LabAgent can effectively integrate and reasonably expand laboratory knowledge.

36. [Root-Cause Attribution Is a Search Problem: Continual Search for Long-Horizon Agent Failures](https://arxiv.org/abs/2609.13463)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13463v1 Announce Type: new Abstract: The increasing deployment of AI agents in long-horizon tasks yields massive execution logs. Diagnosing failures within these records is crucial for reliability, as it transforms outcome-level signals into actionable interventions. The sheer scale of the data renders human review impractical, driving the need for automated root-cause attribution (RCA). However, automated RCA methods using LLMs suffer from low diagnostic accuracy, especially as execution traces grow larger. They struggle because relevant information is often sparse, distributed across distant actions, and disconnected from the visible failure, reducing root-cause attribution to a massive search problem. Existing RCA methods typically rely on one-shot LLM judgments to diagnose failures from execution traces. While effective for shorter trajectories, these judges tend to settle on a plausible diagnosis early, leaving critical evidence in longer traces unexamined. We introduce Continual Search, an iterative framework that nudges the judge, over successive turns, to keep searching for unresolved diagnostic evidence. We evaluate Continual Search across four existing RCA benchmarks. Recognizing the lack of massive execution traces in current benchmarks, we introduce MegaRCA-Mix to evaluate RCA at scale. MegaRCA-Mix provides a challenging testbed of 50 human-annotated failure trials spanning long-horizon, execution-heavy tasks. Across multiple benchmark suites and model families, Continual Search consistently improves attribution performance. On MegaRCA-Mix, for example, it improves GPT-5.5's F1 score by more than 40\%, from $0.349$ to $0.498$. More interestingly, within the same model family, lower-tier models can even surpass their higher-tier counterparts, demonstrating that effective search supersedes raw model scale.

37. [A derivative-fidelity failure mode in physics-informed neural networks: strengthened benchmark evidence from function-value training](https://arxiv.org/abs/2609.13171)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13171v1 Announce Type: new Abstract: Physics-informed neural networks (PINNs) use automatic differentiation to impose differential-equation residuals, but good agreement in function values does not necessarily imply accurate derivatives. This paper formulates derivative fidelity as a failure mode of PINNs and tests it with one-dimensional benchmarks. Multilayer perceptrons are trained only on function values for sin(x) and exp(x), while second derivatives obtained by automatic differentiation are evaluated separately. The hypothesis is strengthened by additional tests over training-point density, activation functions, endpoint-dense evaluation, and both L2 and maximum-error diagnostics. The results show that visually accurate function approximation can coexist with substantially larger second-derivative errors, especially near high-curvature boundary regions. The experiment provides a diagnostic protocol for distinguishing value accuracy from physics-residual reliability.

38. [Digital quantum lattice Boltzmann evolution by reversible compute and open-system reset](https://arxiv.org/abs/2609.13953)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13953v1 Announce Type: new Abstract: Turbulent fluid simulation is computationally demanding because nonlinear interactions couple a wide range of scales. Quantum computing offers another computational model, but fluid evolution is nonlinear and dissipative whereas closed gate-based dynamics is linear and reversible. The lattice Boltzmann method (LBM) is an attractive discrete target because streaming is a local permutation, yet conventional collision reconstructs a nonlinear equilibrium and applies dissipative relaxation. We present a digital quantum lattice Boltzmann (QLBM) algorithm that keeps that nonlinear timestep in computational-basis registers. Each step writes the updated populations into a clean destination bank, uncomputes the workspace, and resets the obsolete source. The resulting channel is completely positive and trace preserving (CPTP), composes without intermediate measurement, and applies to any lattice Boltzmann stencil that can be evaluated reversibly into a clean bank. Forced D3Q19 homogeneous isotropic turbulence, in direct numerical simulation (DNS) and Smagorinsky large-eddy simulation (LES) at Reynolds number 15000 over one million lattice steps, shows statistical agreement in mass, energy budgets, spectra, and intermittency. The three-dimensional calculations use a digital-register emulator of the circuit. A separate D2Q9 implementation compiles the same contract to reversible gates and agrees bit-exactly with its integer twin. Two-bank storage and serial lattice depth limit near-term feasibility.

39. [Efficient calculation of inductive coupling for arrays of wire ring resonators](https://arxiv.org/abs/2609.14322)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.14322v1 Announce Type: new Abstract: Generalization of the inductance to the case of non-quasistatic electromagnetic field oscillations appears to be fruitful when considering wireless power transfer and RF metamaterials consisting of thin wire loop meta-atoms. When dealing with large systems of interacting loops carrying currents, efficiency and precision of calculation in the presence of retardation is crucial. In this work, we derive a series expansion of such generalized inductance and propose a way for its efficient numerical approximation. Illustrative examples are provided both for inductance convergence of a pair of two loops and extinction efficiency for scattering by metamaterial samples.

40. [Transformed in Translation: Two-Stage Structural Uncertainty in LLM-Based Scientific Autoformalization](https://arxiv.org/abs/2609.14808)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.14808v1 Announce Type: new Abstract: Scientific autoformalization turns verbal accounts into executable mathematics, but executable code does not settle which model has been constructed. We examine two sources of structural uncertainty: the formalizer that generates a response law, and the recurrence that turns that law into trajectories. In secondary analyses of an openly archived crossed experiment, we studied 320 response maps generated by two pinned language-model formalizers from five engineered cognitive accounts within one sparse quadratic grammar and 16 randomized blocks. With whole blocks held out, source-account identity was recovered at 78.8% accuracy (chance 20.0%) and formalizer identity at 96.3% (chance 50.0%; both p < 0.001). Program size was the stronger single feature family; a pre-specified exploratory comparison found no stable source-account predictive gain from local geometry beyond size. Holding every response map fixed, we then evaluated five recurrence families spanning 33 configurations and 1,013,760 finite-horizon trajectories. Added feedback, projection and leak produced sharply different outcome distributions. The consequential distinction was which comparisons survived: median cross-recurrence rank concordance was 0.73 for endpoint magnitude but 0.05 for settling, among the configuration pairs with defined rankings. Thus a common mathematical language did not erase translation provenance, and robust ordering under one observable did not transfer to another. Scientific autoformalization is usefully studied as model-space construction: the generated ensemble and its dynamical embedding are both part of the specification supporting a scientific claim.

41. [Agentic Porting, Construction and Initial Verification and Validation of Libraries within the Open Source Unified TRAnsient Multi-Physics Advanced Reactor simulation Kit (Outram Park) Part II: Nuclear Data and Neutronics](https://arxiv.org/abs/2609.15258)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.15258v1 Announce Type: new Abstract: An agentic Rust port of both Njoy and OpenMC was achieved to produce a convenient ENDF to Monte Carlo simulation pipeline in Outram Park. The code is still a prototype with much more extensive verification and validation studies required in future studies. Doppler-broadened cross sections of U-238 are demonstrated in this paper and compared to OpenMC pregenerated HDF5 files. Additionally, initial testing of the Monte Carlo ports from OpenMC were also performed with ICSBEP benchmarks and a FHR Pebble with TRISO Fuel used in the author's PhD dissertation. The addition of nuclear data and Monte Carlo case studies shifts the focus of Outram Park from a Multi-Phase simulation kit to a Multi-Physics simulation kit.

42. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.88; Date: 2026-09-15T17:09:24Z; Popularity: 1,879 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

43. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-15T07:56:05Z; Popularity: 486 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

44. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-12T05:39:44Z; Popularity: 363 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

45. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-14T03:11:45Z; Popularity: 246 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

46. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

47. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

48. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

49. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

50. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

51. [Early Prediction of Satellite Collision Probability Using a Hybrid TCN-Transformer Model for a CDM-Based Conjunction Analysis Framework](https://arxiv.org/abs/2609.13191)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13191v1 Announce Type: new Abstract: The rapid expansion of operational satellites and orbital debris has increased the frequency of close approach events in low Earth orbit (LEO), creating a higher operational burden for satellite operators. This problem is especially critical for satellites using electric propulsion, where low-thrust maneuver capability imposes additional time constraints on collision avoidance planning. In current practice, Conjunction Data Messages (CDMs) provide relative state, covariance, miss distance, time of closest approach, and probability of collision (PoC) information for conjunction assessment. However, the nonlinear propagation of orbital uncertainties and the sensitivity of PoC to covariance evolution make the interpretation of sequential CDMs challenging. This study proposes a learning-based framework for early prediction of satellite conjunction risk by estimating the PoC expected in the subsequent CDM update of the same close approach event. In the proposed methodology, an Unscented Transform-based propagation and backpropagation framework is first used to evaluate the sensitivity of the collision risk metric to CDM parameters. In addition, Principal Component Analysis is applied to the numerical CDM parameters to identify the features most relevant to PoC variation. The results obtained from the sensitivity analysis and PCA are then used to justify the selected raw CDM parameters and to construct derived metrics representing relative motion, encounter geometry, and covariance-related uncertainty. Using the resulting sequential enriched conjunction dataset, a hybrid Temporal Convolutional Network (TCN)-Transformer model is trained to learn the temporal evolution of conjunction risk. The framework is applied to CDMs received and analyzed within T\"UB\.ITAK UZAY, demonstrating its potential for earlier and more consistent operational risk evaluation for LEO satellite conjunctions.

52. [Exceptional-point conjugate symmetry and migration in fluid-loaded elastic waveguides: restructuring the physical dispersion spectrum](https://arxiv.org/abs/2609.14061)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.14061v1 Announce Type: new Abstract: The dispersion spectrum of a fluid-loaded elastic waveguide is a non-Hermitian system with eigenmodes on a two-sheeted Riemann manifold. Although exceptional points (EPs) organize avoided crossings, the topological rules by which fluid loading restructures the observable spectrum (both physically admissible modes and their connectivity) remain unknown, and conventional solvers fail to recover complete branches. Here we establish these rules. We prove that, for real elastic moduli and real fluid parameters, EPs obey a conjugate-pair symmetry, and that a pair on the physical sheet enforces an avoided crossing of real wavenumbers between the two modes it controls, yielding a topological criterion for mode identification. We then identify two independent reconstruction mechanisms. First, the physical observation space expands continuously: a mode observable above its vacuum cut-off can extend downward to the sound line, admitting solutions in a frequency band empty in vacuum; vacuum-anchored seeds above cut-offs continued downward capture such branches systematically. Second, EP migration rewires mode connectivity: as fluid density increases, conjugate pairs leaving the physical sheet (signaled by a sign reversal of the imaginary part of either the in-plane or the vertical wavenumber) leave the two previously coupled physical branch segments unconnected by any EP within the observation space; they become independent curves that may intersect freely on the real frequency axis, with the narrowest veerings losing their topological protection first. Mirror-symmetry breaking births additional EPs generically in the trapped regime but only conditionally in the leaky regime. Numerical computations on symmetric and asymmetric composite laminates under single- and double-sided water loading validate the framework, recovering multiple leaky branches missed by standard solvers.

53. [Neural Modal Decomposition: Architectural Priors from Observables](https://arxiv.org/abs/2609.14402)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.14402v1 Announce Type: new Abstract: Many engineering building blocks behave as multi-port linear time-invariant systems. RF cavities, photonic devices, and superconducting quantum chips, despite their different underlying physics, all share a common mathematical structure for their port-level response. Each entry of the response matrix is a sum of contributions from a small number of intrinsic resonant modes, the pole-residue form. A model capable of predicting such responses for arbitrary geometries and arbitrary port configurations, while simultaneously extracting the underlying eigenmode structure, would therefore establish a foundational design principle spanning all these domains. We propose a neural framework that learns this modal decomposition end-to-end, supervised only by system-level observables and without supervising the modal parameters themselves. The architecture decomposes into a port-independent pole predictor and two port-dependent coupling predictors whose outputs are combined entry-wise, separating intrinsic from port-dependent features. This factorization yields a single trained model that generalizes to port counts unseen during training, dissolving the $\mathcal{O}(N^2)$ scaling barrier of direct regression. Despite no modal supervision, the freely-parameterized poles converge to physically meaningful eigenmodes, verified by cross-validation against the AAA rational approximation algorithm. We instantiate the framework in radio-frequency electromagnetic surrogate modeling. A model trained only on 2-port data accurately predicts $N$-port responses unseen during training.

54. [A Symmetry-Constrained Fourier--Morse Framework for Compact Anisotropic Interaction Potentials](https://arxiv.org/abs/2609.15405)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 15 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.15405v1 Announce Type: new Abstract: Large-scale coarse-grained simulations of anisotropic particles require compact interaction models that retain orientation-dependent energetics. We present a symmetry-constrained Fourier--Morse framework in which the radial interaction is described by a Morse potential and its orientational dependence by Fourier expansions. The representation converges systematically with harmonic resolution, allows known orientational symmetries to be imposed directly, and supports further reduction through harmonic truncation and coefficient pruning. Its explicit Fourier structure also provides a natural basis for constructing or modifying model interactions with prescribed orientational symmetries. The parameterization requires only a sampled interaction landscape and is therefore independent of the method used to generate the reference data. We demonstrate the approach for four interaction classes of chiral $\alpha$-polyalanine helices, representing more than \num{300000} reference energy values with tens to a few hundred coefficients while reproducing equilibrium interaction features with meV- and m\AA{}-level errors. As a proof of concept, molecular-dynamics simulations using the reduced analytical potentials produce stable low-temperature configurations exhibiting local ordering motifs qualitatively consistent with those identified previously by Monte Carlo simulated annealing.

55. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

56. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.74; Date: 2026-09-15T08:39:23Z; Popularity: 742 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

57. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-15T16:54:33Z; Popularity: 1,232 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

58. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-15T09:10:11Z; Popularity: 230 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

59. [Show HN: Slowave – local adaptive memory for coding agents](https://github.com/slowave-ai/slowave)
   - Source: Hacker News; Group: Tech community; Score: 2.20; Date: 2026-09-14T19:49:12Z; Popularity: 4 points, 0 comments
   - Summary: HN discussion: 4 points, 0 comments.

60. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-12T06:53:29Z; Popularity: 123 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Can Autonomous LLM Agents Execute Multireference Quantum Chemistry Calculations?

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.13357

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
