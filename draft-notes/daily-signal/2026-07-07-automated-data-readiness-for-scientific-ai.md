# Daily signal sidecar - 2026-07-07

## Selected Signal

- Title: Automated Data Readiness for Scientific AI
- URL: https://arxiv.org/abs/2607.02771
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Automated Data Readiness for Scientific AI
- Primary source: https://arxiv.org/abs/2607.02771
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

Total candidates reviewed after duplicate-source filtering: 62

1. [Automated Data Readiness for Scientific AI](https://arxiv.org/abs/2607.02771)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02771v1 Announce Type: new Abstract: Leadership computing facilities steward large-scale scientific datasets that routinely require substantial transformation before serving as AI training data. However, no existing framework fully unifies automated transformation, readiness assessment, provenance tracking, and agent-native deployment. We present REDI, an open-source framework that addresses this gap through a unified five-stage pipeline (ingest, preprocess, transform, structure, and output) with per-stage instrumentation for reproducibility and deployment as an agent-callable skill; companion tool SetGo automates FAIR compliance and catalog publication. Evaluated across climate, proteomics, materials science, and nuclear fusion, REDI transforms all datasets from raw to AI-ready, with outputs validated against domain-expert references, and preliminary results show near-ideal parallel scaling to 100 nodes on Frontier for the climate case. Provenance-instrumented profiling reveals file I/O as the dominant pipeline cost, with format selection a first-order optimization lever. These results establish REDI as a cross-domain platform providing automated data readiness for scientific AI, transforming data preparation bottlenecks into reproducible, reusable community assets.

2. [Mapping Europe’s AI Workforce Opportunity](https://openai.com/index/mapping-ai-jobs-transition-eu)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 29 Jun 2026 07:00:00 GMT
   - Summary: A new OpenAI report maps how AI could reshape jobs across the EU, highlighting which occupations may face automation, growth, or workflow changes.

3. [Helping build shared standards for advanced AI](https://openai.com/index/helping-build-shared-standards-for-advanced-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 23 Jun 2026 13:00:00 GMT
   - Summary: OpenAI helps build shared standards for advanced AI, supporting evaluation frameworks, safety practices, and global cooperation through the Appia Foundation.

4. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

5. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

6. [iFLYTEK-Embodied-Omni Technical Report](https://arxiv.org/abs/2607.02542)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02542v1 Announce Type: new Abstract: General-purpose embodied agents must understand multimodal instructions, anticipate how their environment will evolve, and produce precise control actions over extended horizons. Existing approaches typically specialize in visual-language reasoning, video-based world modeling, or action generation, while cascaded pipelines that first synthesize future observations and then infer actions can introduce interface bottlenecks and compound prediction errors. We present iFLYTEK-Embodied-Omni, a unified multimodal foundation model that jointly models vision(videos and images), language, and action within a single Omni framework. Its modality-specific visual-language, video-generation, and action-generation components communicate through shared multimodal self-attention. This design establishes brain-cerebellum collaboration: the vision-language modeland video generation model form a high-level brain for instruction understanding, task planning, progress tracking, and future visual-state prediction, whereas the action generation modelserves as a low-level cerebellum that directly converts planned subgoals and shared multimodal context into executable action chunks. To develop these capabilities, we combine action-annotated and action-free embodied videos from human demonstrations and robot interactions with embodied reasoning, embodied perception, and general-purpose image-text data to construct a comprehensive dataset. We further adopt a four-stage strategy that progressively trains the VLM, VGM, and AGM before jointly fine-tuning the complete model.

7. [ASK in the Dark: Uncertainty-Gated LLM Assistance under Partial Observability](https://arxiv.org/abs/2607.02686)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02686v1 Announce Type: new Abstract: Reinforcement learning agents operating under partial observability must act on incomplete information, making them natural candidates for guidance from small language models (SLMs) that carry broad reasoning priors. Yet integrating SLM guidance into this setting has proven difficult: across all test environments, vanilla uncertainty-gated approaches achieve an overwrite rate at or near zero, meaning the SLM almost never contributes an independent action. We trace this failure to the bare egocentric prompt, which provides insufficient context for genuine reasoning, and identify it as a context problem rather than a capacity problem. We propose ASK+, which supplies the SLM with trajectory-aware context (a partially revealed map, visited positions, and action history) and structured chain-of-thought reasoning, converting it from a passive redundancy check into a more informative consultant that occasionally corrects the policy. We further establish that the predictive entropy signal used for selective querying measures action uncertainty rather than state uncertainty and remains informative in POMDPs, making uncertainty-gated assistance viable beyond fully observable settings. The stateful prompt drives substantial gains: on DoorKey, where vanilla ASK matches PPO (both 89%), ASK+ reaches 93% success; on FourRooms, success climbs from 53% to 70%; on HigherLower, accuracy reaches 73.7%, matching the SLM-only upper bound. Across all environments, Qwen3.5-2B matches or exceeds Qwen3.5-4B, confirming that prompt design and selective gating dominate the impact of model scale, enabling guidance without large models.

8. [Object-Centric Environment Modeling for Agentic Tasks](https://arxiv.org/abs/2607.02846)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02846v1 Announce Type: new Abstract: Large language model (LLM) agents can improve through accumulated experience, but free-form textual memories become difficult to maintain, validate, and reuse as interactions grow. Recent symbolic approaches learn executable skills or programmatic world models, yet often store local procedures or assume simplified dynamics. We propose Object-Centric Environment Modeling (OCM), which organizes experience into an executable object-centric environment model. OCM maintains two connected code bases: object knowledge, which defines environment entities and mechanisms as Python classes, and procedure knowledge, which records reusable interaction patterns that must import and use the object model. OCM works in an online setting: after each episode, OCM reflects on the trajectory, updates both knowledge bases, and verifies that all procedures execute against the updated object model. During future interaction, the agent uses progressive knowledge disclosure to inspect compact code signatures first and read source code only when needed. Experiments show that OCM achieves the best average rank across benchmarks and reduces invalid actions, demonstrating that agents can benefit from building object-centric environment models.

9. [MedCalc-Pro: Solving Complex Medical Calculations with LLM Agents](https://arxiv.org/abs/2607.02879)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02879v1 Announce Type: new Abstract: Current benchmarks for evaluating large language models (LLMs) in medical calculation are largely based on simplified settings, where each patient case corresponds to a single calculator and the required tool is explicitly specified in the query. However, real clinical scenarios often require multiple calculators for joint evaluation, nested-scale calculation, and fuzzy queries that do not directly specify the target calculator. To this end, we propose a new medical calculation benchmark, MedCalc-Pro, which covers three progressively challenging task settings: single-calculator, multi-calculator, and nested-calculator calculation settings. MedCalc-Pro contains 2,268 real-world clinical cases, covering 77 medical calculators across 14 clinical departments. Meanwhile, to address the limited performance of existing frameworks and methods in complex clinical scenarios, we further propose a more generalizable agent framework that supports multi-tool selection and nested-tool calling, while suppressing parameter error propagation through structured validation and evidence review. We conduct systematic comparisons across open-source, closed-source, and medical-specialized LLMs, and the results show that our framework achieves the best performance across all three task settings. This work provides a new benchmark and method for evaluating and applying LLMs in challenging medical calculation scenarios.

10. [Oyster-II: Reinforcement Learning for Constructive Safety Alignment in Large Language Models](https://arxiv.org/abs/2607.02914)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02914v1 Announce Type: new Abstract: Large language models (LLMs) have demonstrated remarkable capabilities across diverse applications, yet ensuring their simultaneous safety, helpfulness, and trustworthiness remains a persistent challenge. Conventional refusal-oriented alignment strategies mitigate harmful content generation but systematically fail to serve legitimate user needs, often withholding information that could safely and constructively address the underlying intent of sensitive queries. Building upon the constructive safety paradigm pioneered by Oyster-I, which moves beyond blanket refusal toward thoughtful, response-oriented safety alignment, we identify two critical limitations of its Supervised Fine-Tuning (SFT)-based scheme: insufficient safety generalization to out-of-distribution scenarios and a phenomenon we term safety chain-of-thought (CoT) over-generalization, wherein safety-oriented reasoning patterns are excessively applied to benign queries, degrading helpfulness and user experience. To address these limitations, we propose Oyster-II, a reinforcement learning (RL)-based constructive safety alignment framework that adopts a Zero-RL paradigm combined with a multi-stage reinforcement learning strategy.Evaluated across extensive benchmarks, Oyster-II comprehensively surpasses both Qwen3-14B and its predecessor Oyster-I on safety dimensions, achieving cross-scale performance comparable to Qwen3-Max and Qwen3.5-397B.

11. [dpti: An Automated Thermodynamic Integration Workflow for Phase Diagram Calculations with Machine Learning Interatomic Potentials](https://arxiv.org/abs/2607.05015)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.05015v1 Announce Type: new Abstract: Thermodynamic integration (TI) is a widely used approach for computing free energies and phase diagrams. However, TI calculations driven by machine learning interatomic potentials (MLIPs) remain technically challenging because they require careful design of reversible integration paths and many closely related molecular dynamics (MD) tasks for each phase and state point. To address these challenges, we present dpti, an open-source Python package that automates TI workflows for phase diagram calculations with MLIPs. dpti connects reference systems with analytically known free energies to MLIP-described atomic and molecular solids and liquids through reversible integration paths. Given JSON input files, dpti generates and runs the required MD tasks, computes free energy contributions, estimates errors, and propagates coexistence points into phase boundaries. We demonstrate the usage of dpti with two examples driven by Deep Potential models: a silica phase diagram involving beta-quartz, coesite, and melt, and the ice Ih-liquid water phase boundary. dpti provides a useful tool for automated phase diagram calculations of materials modeled by MLIPs.

12. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.27; Date: 2026-07-07T15:58:43Z; Popularity: 2,274 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

13. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-04T02:17:48Z; Popularity: 20 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

14. [How ChatGPT adoption has expanded](https://openai.com/index/how-chatgpt-adoption-has-expanded)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 09:00:00 GMT
   - Summary: New OpenAI Signals data shows how ChatGPT adoption is growing globally, with users increasing usage, exploring more capabilities, and driving growth across regions and languages.

15. [Core dump epidemiology: fixing an 18-year-old bug](https://openai.com/index/core-dump-epidemiology-data-infrastructure-bug)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT
   - Summary: OpenAI engineers used large-scale core dump analysis to debug rare infrastructure crashes, uncovering both a hardware fault and a long-standing software bug.

16. [Inside Genebench-Pro](https://openai.com/index/genebench-pro/case-studies)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

17. [HP Inc. launches Frontier strategic partnership with OpenAI](https://openai.com/index/hp-frontier-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 28 Jun 2026 17:00:00 GMT
   - Summary: HP Inc. scales its OpenAI Frontier partnership to deploy AI across customer experiences, software development, and enterprise operations.

18. [Previewing GPT-5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 26 Jun 2026 10:00:00 GMT
   - Summary: OpenAI previews GPT-5.6 Sol, a next-generation model with stronger capabilities in coding, science, and cybersecurity, paired with its most advanced safety stack.

19. [How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 25 Jun 2026 02:00:00 GMT
   - Summary: A new OpenAI research paper shows how AI agents are transforming work, enabling longer, more complex tasks and expanding productivity across roles.

20. [OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 24 Jun 2026 06:00:00 GMT
   - Summary: OpenAI and Broadcom introduce Jalapeño, a custom AI chip built for LLM inference to improve performance, efficiency, and scale across AI systems.

21. [Hugging Face Models on Foundry Managed Compute](https://huggingface.co/blog/microsoft/foundry-managed-compute)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 15:20:06 GMT

22. [LeRobot v0.6.0: Imagine, Evaluate, Improve](https://huggingface.co/blog/lerobot-release-v060)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

23. [PRX Part 4: Our Data Strategy](https://huggingface.co/blog/Photoroom/prx-part4-data)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 15:30:55 GMT

24. [🤗 Kernels: Major Updates](https://huggingface.co/blog/revamped-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 00:00:00 GMT

25. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](https://huggingface.co/blog/cerebras-gemma4-voice-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 GMT

26. [ScarfBench: Benchmarking AI Agents for Enterprise Java Framework Migration](https://huggingface.co/blog/ibm-research/scarfbench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 18:32:50 GMT

27. [Why Specialization Is Inevitable](https://huggingface.co/blog/Dharma-AI/why-specialization-is-inevitable)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 14:39:11 GMT

28. [Featuring Every Eval Ever Results on Hugging Face Model Pages](https://huggingface.co/blog/eee-community-evals)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

29. [DiScoFormer: One transformer for density and score, across distributions](https://huggingface.co/blog/allenai/discoformer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 29 Jun 2026 18:02:48 GMT

30. [Run a vLLM Server on HF Jobs in One Command](https://huggingface.co/blog/vllm-jobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 26 Jun 2026 00:00:00 GMT

31. [Internal Pluralism and the Limits of Pairwise Comparisons](https://arxiv.org/abs/2607.02672)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02672v1 Announce Type: new Abstract: Local pairwise comparisons are a standard tool for learning how people want decision rules to work, e.g., in participatory design or alignment. However, their use builds in two strong assumptions: that local comparisons are sufficient evidence about how a person wants an automated decision rule to behave, and that people can always answer those comparisons decisively. We investigate how these assumptions may be compromised under internal pluralism: the idea that an individual evaluates decision rules according to multiple authoritative priorities about how the rule should behave. We provide a formal model of such pluralistic preferences over decision rules, which then lets us identify two distinct failures of forced local pairwise comparison data. First, priorities such as proportionality, egalitarianism, and equal treatment are inherently global: what they imply in one case can depend on what happens elsewhere, so local comparisons may fail to capture them. Second, even when priorities are representable locally, tension between strongly-held priorities can generate internal conflict, producing potentially costly behavioral distortions when comparisons are forced. We then use our model to investigate the alternative -- allowing people to report indecision -- and our findings suggest that doing so can considerably reduce the number of queries needed to learn preferences accurately. We conclude by describing how our model points toward preference-learning methods that elicit these priorities directly, yielding more faithful and interpretable accounts of what people value.

32. [SwarmResearch: Orchestrating Coding Agents for Open-Ended Discovery](https://arxiv.org/abs/2607.02807)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02807v1 Announce Type: new Abstract: Long-running coding agents such as autoresearch can persistently discover optimizations for open-ended problems. However, they tend to converge onto a single high-level approach, then proceed with low-level edits while missing other superior approaches to the problem. We hypothesize two harness-level design choices contribute to this behavior: accumulating context in a single long-running agent and only exposing a single program state to edit. We introduce SwarmResearch, an orchestrator-subagent harness in which a Shepherd Agent uses global context to steer a population of Search Agents, each operating with local context in their respective git branch. On open-ended optimization tasks, SwarmResearch discovers better or comparable solutions to state-of-the-art LLM-guided evolution and multi-agent techniques on 13/15 tasks, driven by higher-level exploration. Compared with fixed scaling of serial and parallel agents, SwarmResearch's orchestrator-guided scaling discovers better-performing solutions by adapting parallelism at different search depths.

33. [VERITAS: Towards a General-Purpose Replication Tool for Scientific Research](https://arxiv.org/abs/2607.02931)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02931v1 Announce Type: new Abstract: AI tools are accelerating scientific publication while the systems that review it struggle to keep up, and independent verification of published research has become both harder and more important. As manual replication is slow and expensive, a growing line of work uses coding agents to automate parts of the process. Existing efforts are largely packaged as benchmarks with companion agents that only run inside the benchmark's own pipeline, and no general-purpose replication tool exists. We present VERITAS, a domain-agnostic replication framework built around CLI coding agents. Given a paper, a code repository, or both, VERITAS extracts the paper's claims, runs the methodology while resolving issues as they arise, and judges each claim against the evidence from experiment runs. The pipeline returns an importance-weighted Replication Score, a severity-rated log of every fix applied, and the patched codebase. We evaluate VERITAS on CORE-Bench and ReplicationBench, 65 papers spanning computer science, social science, medicine, and astrophysics. Against two strong Claude Code baselines on the same model and host environment, VERITAS achieves state-of-the-art performance and leads on every metric on both benchmarks.

34. [A Sliding-Window-Based Reinforcement Learning for Dynamic Assembly Flow Shop Scheduling with Multi-Product Delivery](https://arxiv.org/abs/2607.02941)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02941v1 Announce Type: new Abstract: Multi-product kitting delivery imposes significant challenges for real-time scheduling in hybrid manufacturing systems that integrate processing and assembly, as dynamic order arrivals simultaneously alter supply dependencies and the set of feasible job-machine assignments. This paper proposes a sliding-window-based reinforcement learning (SWRL) framework for end-to-end online scheduling in the flexible assembly flow shop scheduling problem with complex kitting constraints. The problem is formulated as a heterogeneous graph-based Markov decision process that captures the dual-layer kitting structure and the tail-product bottleneck dynamics that produce a sparse reward landscape. To address the resulting challenges, SWRL integrates a sliding-window filtering mechanism that filters inactive nodes and prioritizes kitting-critical operations, a spatiotemporal graph encoding network that tracks bottleneck shifts across consecutive decision states, and a dynamic action mapping module with a constrained waiting strategy that adapts to the changing action space under variable topologies. Experiments on real-world instances from a home appliance manufacturer demonstrate that SWRL achieves consistent tardiness reductions over classical dispatching rules and existing deep reinforcement learning methods, and exhibits robust performance across varying resource configurations, order loads, and arrival concentrations.

35. [Auditing the Audit: Five Failure Modes in Benchmark-Validity Audits](https://arxiv.org/abs/2607.02586)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02586v1 Announce Type: new Abstract: Governance frameworks ask AI providers and auditors for documented evaluation evidence, and perturbation-based construct-validity audits are a common form of that evidence. We argue the audits are themselves fragile: their conclusions can be silently manufactured by implementation details that readers cannot see in the reported numbers. We name five classes of pipeline failure and demonstrate each in a self-audit over safety benchmarks and open-weight instruction-tuned models. Under a unified six-point due-diligence gate, every cell lands in a non-confirmatory bucket, and no cell reaches confirmatory. The evidence here is a single two-model, five-benchmark case study, and F1--F5 is an illustrative, deliberately non-exhaustive starting taxonomy -- not a comprehensive partition of audit failures. We position the gate as a withholding and disclosure protocol for assurance-grade evidence, supplementary to (not a replacement for) classical construct-validity evidence, and not as a route to benchmark-validity verdicts.

36. [CodeJeNN: A simple C++ neural network generator for physics applications](https://arxiv.org/abs/2607.02746)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02746v1 Announce Type: new Abstract: Machine learning has shown speedups for numerical methods in physics applications, but integrating Python-based libraries into high-performance C++ solvers creates performance bottlenecks. We present CodeJeNN, which bridges this gap by auto-generating self-contained C++ code from trained Keras models for inference. This eliminates external dependencies through minimal inlined functions, allowing seamless integration into existing frameworks. We describe the Keras-to-C++ workflow, supported architectures, and limitations. CodeJeNN is demonstrated through inference benchmarks against Keras in eager and JIT modes and a CFD test case modeling viscosity in a hydrogen-air mixing layer, showing speedups without sacrificing accuracy.

37. [Accelerating Multi-scale Simulations of Nuclear Components via PCYS Interpolation Tables](https://arxiv.org/abs/2607.04556)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.04556v1 Announce Type: new Abstract: Zirconium alloy core components in nuclear reactors, such as spacer grids and fuel cladding, undergo anisotropic dimensional changes driven by coupled irradiation creep and growth. While micromechanical crystal plasticity frameworks like the Viscoplastic Self-Consistent (VPSC) formulation capture these microstructurally driven phenomena, their integration into macroscopic Finite Element Method (FEM) solvers is computationally prohibitive for engineering-scale components. To bridge this gap, this work presents a multi-scale framework implemented within the open-source FEM solver Code_Aster. The developed interface uses a 5D Interpolation Table (IT) as a static material surrogate to govern instantaneous viscoplastic responses, coupled with a periodic recalibration and first-order Taylor series linearization scheme to track microstructural drift due to radiation damage without on-the-fly database updates. The predictive accuracy, numerical stability, and performance of this Polycrystal Yield Surface (PCYS) interpolation approach are benchmarked against VPSC-FEM simulations under continuous high-dose irradiation scenarios. Material-level assessments demonstrate that the linearization scheme bounds relative errors below 1% for representative deformation paths, maintaining structural compatibility. Furthermore, structural simulations of a spacer grid domain revealed meaningful computational savings, overcoming the multi-scale computational penalty while preserving microstructural fidelity. The proposed framework shows potential for multiphysics structural assessments and safety margin evaluations of core internals over operational lifespans.

38. [Transferable inference of turbulence models for urban flows with the Parameter-Regularised Ensemble Kalman Filter](https://arxiv.org/abs/2607.03571)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.03571v1 Announce Type: cross Abstract: The accurate simulation of urban flow is key to designing building ventilation, understanding cities' micrometeorology, and predicting pollutant dispersion. Reynolds-Averaged Navier-Stokes (RANS) simulations are a common modelling approach for simulating urban flow, but their accuracy depends on the closure model and its parameters. These parameters are inferred from benchmark cases, but they are not necessarily suitable for realistic urban environments, which involve different physical mechanisms. This is referred to as the transferability problem of RANS urban modelling. The objective of this work is to propose a robust Bayesian method to {sequentially} infer RANS parameters for urban flow modelling. Key to the approach is the mathematical derivation of the parameter-regularised ensemble Kalman filter (PR-EnKF), which is the analytical solution of the data assimilation problem for the sequential parameter estimation. The cost functional is regularised using the prior knowledge on the turbulence parameters, thereby ensuring that the Bayesian updates remain within physical ranges. The parameters are first inferred on an isolated building, and then transferred to three cases of increasing complexity: (i) a high-rise building, (ii) a multi-building array, and (iii) the Shinjuku district urban environment. Results show that the PR-EnKF achieves faster convergence, reducing parameter uncertainty by an order of magnitude and reconstruction errors by up to 50%. Because of the regularisation, the PR-EnKF selectively updates the most important parameters. This work enables robust large-scale urban flow simulation whilst reducing the computational overhead of model optimisation for urban planning and air quality assessment.

39. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.46; Date: 2026-07-07T07:54:26Z; Popularity: 458 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

40. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.31; Date: 2026-07-07T13:38:58Z; Popularity: 1,313 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

41. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-07-06T17:39:18Z; Popularity: 226 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

42. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-07T02:38:57Z; Popularity: 205 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

43. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

44. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

45. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

46. [Evaluating Time Series Foundation Models for Electricity Price Forecasting: Contamination Risk, Distributional Shifts, and Covariate Dependence](https://arxiv.org/abs/2607.02623)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02623v1 Announce Type: new Abstract: Time series foundation models (TSFMs) have shown strong zero-shot forecasting performance, but their generalization in covariate-driven, non-stationary settings is underexplored. Electricity price forecasting (EPF) presents a challenging testbed due to complex temporal dependencies, distributional shifts, and strong reliance on structural and contextual information. We propose a two-dataset-benchmarking framework for EPF to mitigate contamination risk and enable fair evaluation of TSFMs. We examine key aspects of EPF including point and probabilistic forecasting performance, tail behavior, price spikes, and comparisons against domain-specific methods. We find that TSFMs are highly competitive and often outperform general-purpose baselines. Yet, their performance depends critically on covariate support, and they do not consistently surpass domain-specific methods tailored to EPF. Interestingly, simple ensembles of TSFMs and domain-specific methods appear to have significant potential, suggesting that the two approaches capture complementary predictive information.

47. [Federated Learning for Object Detection: Enabling Collaborative Drone Learning Without Centralizing Data](https://arxiv.org/abs/2607.02636)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02636v1 Announce Type: new Abstract: Object detection is a fundamental capability for AI-driven perception in safety-critical drone and edge-vision systems, including disaster response, operational security environments, infrastructure monitoring and defense applications. Robust model performance in such environments depends on large, continuously updated datasets. However, training high-performing detectors typically requires centralizing aerial imagery, which raises privacy, regulatory, storage, and bandwidth challenges. This is especially problematic in distributed drone deployments, where visual data is generated onboard and is often impractical or undesirable to transfer to a centralized infrastructure. In this work, we apply Federated Learning (FL) for object detection, enabling drones to improve a shared model while keeping image data local and private. We implement a federated object detection pipeline using the Sherpa.ai FL platform on the KIIT-MiTA dataset, and compare it with Single-drone and Centralized baselines using mean Average Precision (mAP) at IoU thresholds of 0.50 and 0.50-0.95. In our experiments, the proposed FL approach remains close to Centralized training while dramatically improving over Single-drone training, with the best lightweight model (YOLO26 nano), suitable for deployment even on very limited edge infrastructure, achieving relative gains of 52.89% and 67.80% in mAP@0.50 and mAP@0.50:0.95, respectively. These results show that FL enables scalable, high-performing, and privacy-preserving object detection across distributed drone fleets without data centralization.

48. [Weighted Conformal Prediction for Lab-to-Track Thermal Transfer in EV Motorsport Powertrains](https://arxiv.org/abs/2607.02722)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02722v1 Announce Type: new Abstract: Predicting thermal volatility in high-performance EV powertrains is difficult as internal temperatures are rarely observable outside the lab, and models calibrated on lab drive cycles fail when deployed against real-world loads. We study this lab-to-track transfer problem using conformal prediction, offering distribution-free uncertainty bounds. We implement Ensemble Batch Prediction Intervals (EnbPI; Xu & Xie, 2021), a leave-one-out bootstrap-ensemble conformal method for autocorrelated time series, and calibrate it on real CALCE lithium-ion cycler data (A123 SP20 cells, FUDS profile). We evaluate it under a genuine, measured covariate shift: a second real CALCE test condition (US06 Highway Driving Schedule at 45{\deg}C). The unweighted EnbPI bound, achieving its nominal 95% coverage in-distribution (measured: 95.00%), degrades to 70.13% empirical coverage under this real shift. We introduce a weighted EnbPI procedure combining EnbPI's ensemble residuals with density-ratio weighting (Tibshirani et al., 2019), estimating the density ratio via a probabilistic domain classifier. This recovers coverage to 72.42%, a modest, honestly-reported improvement, not a complete fix. We additionally apply the calibrated model to real 2023 Formula 1 telemetry (Monza and Silverstone, driver VER) as an unsupervised out-of-distribution diagnostic. Because no internal thermal channel exists in public trackside telemetry, we report only unsupervised flag rates (65.6% at Monza, 58.0% at Silverstone, well above the 5% in-distribution base rate) and note inconsistent associations between flags and braking/DRS zones. We conclude that conformal domain adaptation is a promising but only partially solved tool for this problem, detailing exactly where it falls short.

49. [Out-of-Distribution Generalization of Risk Aversion in Language Models](https://arxiv.org/abs/2607.02755)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02755v1 Announce Type: new Abstract: Training AIs to be risk-averse in resources could offer a failsafe in the event that AIs turn out misaligned. Misaligned but risk-averse AIs would tend to prefer low-risk, low-reward strategies like cooperation over high-risk, high-reward strategies like rebellion, limiting the downsides of any misalignment. But we can only feasibly train AIs to be risk-averse on low-stakes gambles, and we will only be safe if their risk aversion generalizes to astronomically-high-stakes gambles. Will it? To shed light on this question, we introduce RiskAverseOOD: a benchmark for measuring how well risk aversion generalizes out of distribution. We then offer some initial results. Using a variety of methods to make Qwen3-8B choose risk-aversely when the stakes are low, we find that we can induce substantial risk aversion when the stakes are astronomically high. Our models' learned risk aversion generalizes at least partially across 98 orders of magnitude. From a baseline 2% rate of choosing a safe `Cooperate' option, we see rates around 70% (SFT and tie training), 52% (DPO), and 39% (activation steering). In another experiment, our fine-tuned reward model reliably scores risk-averse reasoning above risk-neutral or excessively risk-averse alternatives (99.6% pairwise accuracy). We replicate these effects at different scales (Qwen3-1.7B and Qwen3-14B) and across model families (Gemma-3-12B-IT and Llama-3.1-8B-Instruct). Overall, we find that risk aversion learned at low stakes can generalize OOD to astronomically high stakes, though not yet consistently enough to serve as a reliable failsafe. Achieving that level of consistency is an open problem.

50. [Restoring the uniform density limit in Perdew-Zunger self-interaction correction](https://arxiv.org/abs/2607.03997)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.03997v1 Announce Type: new Abstract: The Perdew-Zunger self-interaction correction (PZ-SIC) makes approximate density functionals exact for all one-electron densities, but sacrifices exactness for uniform densities. I show that an alternative to the orbital density ansatz employed in PZ-SIC restores the uniform density limit. The new ansatz also eliminates the need to evaluate approximate density functionals on lobed one-electron densities extracted from smooth many-electron densities, thereby reducing orbital dependence and lobed density error. I demonstrate the alternative ansatz in a broadly accurate nonempirical locally scaled self-interaction-corrected generalized gradient approximation.

51. [Hyper Boris integrators for kinetic plasma simulations and their connection to 3D rotation representations](https://arxiv.org/abs/2607.04465)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.04465v1 Announce Type: new Abstract: Particle-in-cell (PIC) simulation is one of the most important research tools in theoretical plasma physics. To solve the motion of charged particles, the Boris method (a.k.a. the Boris integrator/pusher/solver) has been used for more than a half century. Although the Boris solver has good accuracy, the demand for high-accuracy numerical solvers has been increasing, and new integrators have been actively developed. In this contribution, we present novel high-accuracy particle integrators, the hyper Boris integrators, for nonrelativistic kinetic simulations. We further discuss their connection to 3D rotation representations.

52. [Watts per event: evaluating Sustainability of HEP Event Generators beyond the LHC era](https://arxiv.org/abs/2607.05018)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.05018v1 Announce Type: new Abstract: The development, tuning and operation of Monte Carlo event generators beyond the LHC era require vast amount of resources. In this study we investigate the sustainability of these software with a containerized set of tools (named 77rev/propripy), by benchmarking the HIJING++ heavy-ion Monte Carlo event generator. We analyze the performance of various CPU architectures and show that by choosing the level of multithreading properly, the cost of event generation can be optimized. The presented approach can reduce the energy footprint of high-energy physics event generators and therefore alleviate the ever-increasing, ubiquitous computational challenges.

53. [Robust optical design and closed-form tolerancing through autodiff-based Hessian spectral analysis](https://arxiv.org/abs/2607.03067)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.03067v1 Announce Type: cross Abstract: Robust optical design demands quantitative knowledge of how manufacturing and alignment tolerances degrade system performance. We show that analysing the perturbation eigenmodes of the Hessian matrix gives qualitative insight about the mechanisms of performance degradation (such as couplings) that is invisible to classical sensitivity-matrix analysis based on the Jacobian alone. Via the envelope theorem, we prove that the first-order sensitivity of the fully compensated system is identical to that of the uncompensated one; refocusing only acts at second order through the Schur complement of the Hessian. We propose the trace of the tolerance-scaled Hessian %,$\Tr(\mathbf{S}\mathbf{H}\mathbf{S})$, as a single scalar robustness metric. Demonstrated on an off-axis three-mirror anastigmat and scaled to a twenty-three-parameter surface-figure model, eigenmode decomposition reveals the dominant sensitivity directions and yields deterministic tolerance budgets that replace costly Monte Carlo sampling.

54. [CSympNet-ID: conformal-symplectic map learning for linearly damped Hamiltonian systems](https://arxiv.org/abs/2607.03339)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.03339v1 Announce Type: cross Abstract: Learning dissipative dynamics from discrete observations is essential for reliable long-horizon prediction and physically meaningful parameter identification. For linearly damped Hamiltonian systems, the exact flow is generally not symplectic but conformally symplectic, contracting the canonical symplectic form by a scalar factor that reflects the net dissipation. We propose Conformal Symplectic Networks with damping identification (CSympNet-ID), a discrete-time map-learning framework that learns the one-step flow map directly from snapshot pairs while enforcing exact discrete conformal symplecticity by construction, without penalty terms or projection. The architecture composes an exact symplectic neural core with explicit diagonal scaling layers whose factors are parameterized exponentially by a scalar damping-rate parameter, thereby guaranteeing positivity and interpretability of the learned dissipation factor. We establish a scaling-conjugacy factorization for conformal symplectic maps and derive a pointwise-in-step density result for CSympNet-ID. We evaluate an irregular-step damped oscillator, a damped spring-mass chain, a damped nonlinear cubic oscillator, and additional high-dimensional extensions. CSympNet-ID gives the most favorable overall results among the compared models in the reported experiments, particularly in data-scarce regimes, target contraction-law recovery, and high-dimensional tests where unstructured baselines degrade rapidly.

55. [Physical Systems as Objects: A Structural Correspondence for Computational Physics Education](https://arxiv.org/abs/2607.03457)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 07 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.03457v1 Announce Type: cross Abstract: Physical systems and objects in the object-oriented programming (OOP) paradigm share a common organizational structure: identity, state, and governing laws. We argue that making this structural correspondence explicit, rather than leaving it as tacit knowledge embedded in scientific software, provides a natural and general basis for teaching computational physics. The correspondence is independent of both programming language and mathematical formalism, applying equally to differential equations, eigenvalue problems, and variational principles. To illustrate this idea, we present Ollin, an open-source Python framework for computational physics education organized around the correspondence principle. Four examples spanning mechanics, celestial mechanics, quantum mechanics, and variational optics demonstrate that the same representational structure can be preserved across diverse physical domains. In each case, the class definition serves as the physical model, its attributes encode the state and physical parameters of the system, and its methods encode the governing laws, regardless of whether those laws are integrated, diagonalized, or optimized. More broadly, the correspondence principle provides a conceptual framework for relating the organization of physical models to the organization of code.

56. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

57. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.69; Date: 2026-07-07T14:17:44Z; Popularity: 685 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

58. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.60; Date: 2026-07-06T01:34:45Z; Popularity: 601 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

59. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-07T15:19:45Z; Popularity: 102 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

60. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-04T20:35:11Z; Popularity: 100 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

61. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

62. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Automated Data Readiness for Scientific AI

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.02771

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
