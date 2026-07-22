# Daily signal sidecar - 2026-07-22

## Selected Signal

- Title: Calibrated Selective Fact-Checking via Evidence Chain Evaluation
- URL: https://arxiv.org/abs/2607.18240
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Calibrated Selective Fact-Checking via Evidence Chain Evaluation
- Primary source: https://arxiv.org/abs/2607.18240
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

Total candidates reviewed after duplicate-source filtering: 67

1. [Calibrated Selective Fact-Checking via Evidence Chain Evaluation](https://arxiv.org/abs/2607.18240)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18240v1 Announce Type: new Abstract: Large language models (LLMs) can achieve strong fact-checking accuracy, yet forced binary decisions conceal a critical reliability problem: systems may issue confident verdicts even when supporting evidence is weak, sparse, or internally inconsistent. We address this issue through Evidence Chain Evaluation (ECE), a selective fact-checking framework that permits abstention via an uncertain verdict instead of requiring a true/false decision for every claim. The evaluated system is a tool-using verification agent that gathers evidence through web search, scholarly search, and executable checks, and then returns a structured verdict with confidence and source-level metadata. On ECE-Bench, ECE achieves 91.6% standard accuracy, 93.7% coverage, and 97.8% selective accuracy on answered claims. Although ECE does not outperform the strongest retrieval baseline on aggregate calibration metrics such as Expected Calibration Error, Brier score, or AURC, it delivers a clear selective-prediction trade-off: the system maintains very high accuracy on answered claims while deferring 6 of 95 cases. These deferred cases are concentrated in lower-reliability evidence settings (5/6 at source level L4), supporting the view that abstention functions as a safety-oriented mechanism for handling epistemically weak evidence. Code is available at https://github.com/ cheshireyang/ECE.git

2. [BatchDAG: LLM-Planned Execution Graphs for Scalable Ad-Hoc Analysis Over Enterprise Data](https://arxiv.org/abs/2607.18241)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18241v1 Announce Type: new Abstract: Large language models (LLMs) excel at analyzing individual documents but break down on exhaustive, cross-entity analytical questions over enterprise-scale datasets due to context overflow, loss of per-entity attribution, and linear latency from sequential tool calls. We present BatchDAG, a system in which an LLM generates a typed directed acyclic graph (DAG) of operations -- SQL queries, semantic searches, in-memory transforms, parallel fan-outs, and single-shot analyses -- which a deterministic engine evaluates with topological-wave parallelism and structured JSON data flow. A key optimization, entity-aware batching, groups rows by logical entity before fan-out, reducing LLM calls by up to 47x. BatchDAG is not primarily an accuracy improvement over hand-optimized pipelines; rather, it is a general-purpose orchestration layer that replaces multiple hand-engineered workflows with a single system that generates the appropriate execution strategy from natural language. In controlled experiments on 12 transcript-heavy queries, BatchDAG (3.74/5) achieves quality comparable to an expert-designed pipeline (3.25/5) and significantly outperforms a ReAct agent (3.09/5, p<0.01), with superior provenance (77% transcript evidence rate vs. 46-60% for baselines). A controlled ablation shows structured JSON intermediates reduce hallucinations by 27% versus prose summaries (paired t-test, p=0.107, n=12). The planner achieves 98.8% valid-DAG rate across 300 planning calls. In production at Brevian.ai, BatchDAG processes queries over 50,000+ meetings in under 60 seconds, with measured per-query costs of $0.02-$0.24 at published GPT-5.1 pricing.

3. [ATLAS: A Foundation Neural Sampler for Amorphous Materials](https://arxiv.org/abs/2607.19198)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19198v1 Announce Type: cross Abstract: Amorphous materials exhibit exceptional mechanical and functional properties, yet their rugged energy landscapes are notoriously difficult to sample. Below the glass-transition temperature, conventional molecular dynamics and Monte Carlo become inefficient because equilibration relies on rare barrier-crossing events, while data-driven generative models are constrained by scarce and biased reference ensembles. Here, we introduce ATLAS, an efficient sampler that learns a diffusion process to generate Boltzmann-distributed amorphous structures directly from a target energy function. Parameterized by an equivariant graph neural network, ATLAS generalizes across system size, temperature, and composition. By exploiting the time reversal of the diffusion process, it enables efficient estimation of thermodynamic quantities and steering toward target observables. In two-dimensional Kob-Andersen systems, ATLAS reproduces parallel tempering Markov chain Monte Carlo structural distributions, free energies and entropies, achieving below 0.2% free energy error in the low-temperature glass regime with over 500-fold fewer energy evaluations. In Cu-Zr and Cr-Co-Ni metallic glasses, ATLAS recovers experimentally observed short-range-order trends and steers structures toward prescribed order parameters and optimized bulk moduli. Moreover, composition-amortized pretraining outperforms composition-specific training from scratch, reduces inverse-design costs by several hundred-fold, and enables sampling with expensive universal machine learning interatomic potentials. Coupled to a large language model agent, ATLAS searches an eight-element space for high-entropy metallic glasses balancing stiffness and ductility, identifying a converged Pareto frontier within 480 oracle evaluations. Together, these results establish ATLAS as a foundation model for sampling, steering and designing amorphous materials.

4. [Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 22 Jul 2026 05:30:00 GMT
   - Summary: Introducing OpenAI Presence, a proven enterprise AI agent platform that helps organizations deploy trusted voice and chat agents for customer and internal workflows.

5. [OpenAI and Hugging Face partner to address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 21 Jul 2026 07:00:00 GMT
   - Summary: OpenAI and Hugging Face share early findings from a security incident during AI model evaluation, highlighting advanced cyber capabilities and lessons for defenders.

6. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

7. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

8. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

9. [The State of Simulation for Physical AI: An Overview](https://huggingface.co/blog/nvidia/state-of-simulation-for-physical-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 21 Jul 2026 20:00:27 GMT

10. [SysAdmin: Measuring Instrumental Power-Seeking in Frontier AI](https://arxiv.org/abs/2607.18239)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18239v1 Announce Type: new Abstract: Power-seeking defined as behaviors where AI systems acquire resources, evade oversight, or resist termination beyond task requirements is identified as a key driver of Loss of Control (LoC) risk. In this work, we introduce SysAdmin, a benchmark that positions frontier language models as autonomous system administrators in a high-fidelity Linux sandbox to measure power-seeking propensity across five dimensions: self-preservation, increasing autonomy, resource acquisition, environment modification, and strategic concealment. We evaluated seven frontier models across four experimental conditions in a total of 2800 tasks. After bias correction using human-annotated calibration data, corrected power-seeking estimates ranged from 0 to about 5 percent per model. We also conducted a positive control with explicit power-seeking prompts that achieved 100% detection, validating measurement sensitivity. Our findings indicate current frontier models exhibit minimal spontaneous power-seeking in naturalistic system administration contexts, though model-specific failure modes suggest evaluations must test diverse misalignment patterns. Nevertheless, we discovered other more pronounced failure modes (than power-seeking) such as specification gaming and resistance to goal modification.

11. [AI Tool Discovery at Scale: All You Need is DNS](https://arxiv.org/abs/2607.18242)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18242v1 Announce Type: new Abstract: The coming era of autonomous AI agents demands a discovery mechanism capable of navigating millions of tools, yet existing solutions buckle under O(N) complexity and centralized governance. Instead of building another fragile overlay, we propose ToolDNS, a radical framework that retrofits semantic tool discovery onto the Internet's most resilient substrate: the Domain Name System (DNS). By embedding functional intent and organizational trust into a hierarchical namespace, ToolDNS transforms an expensive semantic search into a series of lightweight, O(log N) name resolutions. We introduce three protocol-compliant enhancements to enable decentralized governance and semantic pruning: partially unfolded names, EDNS0 intent payloads, and logical subdomains. To rigorously evaluate this approach across the fragmented tooling landscape, we construct and release a large-scale heterogeneous benchmark comprising 33,688 real-world tools spanning MCP, A2A, RESTful, and Skill protocols. On this dataset, ToolDNS slashes the per-query search space by 95.26% while matching state-of-the-art retrieval accuracy. Furthermore, its UDP-native design reduces discovery latency by orders of magnitude compared to HTTP-based registries. Our work demonstrates that scalable AI interoperability requires not more middleware, but a smarter utilization of the infrastructure already beneath our feet.

12. [From Agent Failure Paths to Quantified Residual Risk: A Compositional Framework for Resilient Agentic AI](https://arxiv.org/abs/2607.18243)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18243v1 Announce Type: new Abstract: Agentic AI is crossing trust boundaries faster than current risk models can represent. Existing approaches provide one of two partial views. They either describe failure mechanisms without producing a transferable residual-risk estimate, or they produce a risk estimate while treating the internal failure path as a black box. We couple those two views by proposing CPSAINT, a seven-layer integrity decomposition over Physical state, Sensors, Data, Compute, Actuators, Environment, and Time, paired with FRIESA-K, a residual-risk functional that maps each failure path to a quantified risk instance. FRIESA-K grounds the resistance term K in a controlled absorbing Markov model so that control effectiveness is derived from state dynamics rather than assigned as an informal score. The result is a concise mechanism-to magnitude pipeline for resilient agentic and embodied AI. We report governance observability through a separate additive penalty instead of inserting governance as a new variable in the resistance functional. We formalize structural composability linking valid failure paths to well-defined risk instances and show the framework on two contrasting scenarios a hard real-time warehouse robot and a governance-instrumented financial-services agent. Across both cases, the same layer grammar, variable semantics, and dynamic-resistance construction remain intact. Thus, we obtain a compact kernel that supports cross-domain reasoning, explicit assumptions, and quantitatively grounded formalism of composable trust.

13. [SAAG: Structured Agent Assessment and Grounding](https://arxiv.org/abs/2607.18245)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18245v1 Announce Type: new Abstract: Exact-match evaluation of agent-calling obscures qualitatively different failure modes: a model may select the right function yet hallucinate argument values, or satisfy a schema while choosing a agent for the wrong reason. Existing benchmarks collapse these distinctions into a single binary score, leaving practitioners unable to diagnose where agent calls fail. We propose SAAG a cascaded diagnostic framework that decomposes agent-calling evaluation into three sequential stages: registry conformance, structural completeness, and argument grounding, each producing interpretable stage-specific diagnostics. These diagnostics additionally enable iterative self-repair: on prediction failure, the stage-specific signal guides targeted correction without leaking ground-truth values. We evaluate this framework on a controlled benchmark derived from Glaive's function-calling dataset across registry sizes of 5, 10, and 15 agents using three local sub-4B-parameter models. Structured feedback consistently improves argument precision and reduces value hallucination relative to single-pass inference and uninformative binary feedback, while end-to-end F1 gains are modest and model-dependent. These results suggest that stage-decomposed diagnostic evaluation is a necessary lens for understanding and improving agent-calling reliability across model families and registry scales.

14. [Phionyx: A Deterministic AI Runtime Architecture with Structured State Management and Pre-Response Governance](https://arxiv.org/abs/2607.18246)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18246v1 Announce Type: new Abstract: We present Phionyx, a deterministic AI runtime architecture derived from the broader Echoism interaction framework that introduces a governance-first approach to AI engineering: treating large language model (LLM) outputs as noisy sensor measurements rather than direct decisions. Unlike probabilistic agents, Phionyx enforces deterministic state evolution via a structured state vector governed by deterministic state-evolution equations, enabling reproducible behavior in applications requiring auditability and governance. The architecture integrates three layers: (1) a deterministic evaluation kernel processing noisy sensor measurements through a canonical 46-block pipeline, (2) a unified safety layer providing pre-response control and architectural privacy enforcement, and (3) a semantic time-based memory system implementing impact-weighted cache eviction. Experimental validation on single-instance deployments demonstrates approximately 31% reduction in computational overhead vs. post-hoc filtering (at 30% unsafe input ratio, simulated cost model) and up to 24% improvement in high-value data retention vs. LRU (72% vs. FIFO, same cache capacity, benchmark-verified), deterministic execution verified across 100 repeated runs with zero variance in control signals (hash-verified), and zero unplanned restarts in single-instance deployment testing (see Appendix C for methodology and scope). This paper presents the architecture, its analytic structure, and scoped experimental evidence; generalization to distributed or multi-tenant deployments remains future work.

15. [MILP-Evo: Closed-Loop Fully Automatic Design of MILP Solvers](https://arxiv.org/abs/2607.18252)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18252v1 Announce Type: new Abstract: Machine learning methods have shown that data-driven policies can accelerate mixed-integer linear programming (MILP) solvers, but many such approaches remain difficult to inspect, adapt, and deploy because the learned policy is represented as an external predictor or other opaque model. By contrast, explicit solver logic is easier to understand and integrate, but is usually hand-designed rather than learned from solver feedback. We study whether the automatic design of MILP solver logic can instead be cast as LLM-guided closed-loop search over executable white-box components evaluated directly by end-to-end solver behavior. To this end, we propose a closed-loop program evolution framework for MILP solver auto-design, implemented through PySCIPOpt, and instantiate it on the joint design of a cut selector and a branching rule. Candidate programs are iteratively generated, loaded into SCIP, and evaluated by direct execution on MILP instances, with the resulting feedback guiding performance-based selection, targeted repair, diagnostic reflection, and diversity-aware population maintenance. The method outputs explicit solver components that can be inspected, modified, and deployed within standard solver workflows. Across four benchmark families, we find that LLM-guided program evolution can discover competitive domain-specialized policies in several settings.

16. [Uncertainty quantification in mechanics: A unified Bayesian perspective](https://arxiv.org/abs/2607.18734)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18734v1 Announce Type: new Abstract: Uncertainty quantification (UQ) is essential to experimental mechanics, but has become particularly relevant in computational mechanics, manifesting in two fundamental problem types: forward and inverse problems. The former addresses how input uncertainties propagate to the quantities of interest, whereas the latter aims to infer unknown parameters from experimental observations or simulations. Since efficient propagation typically requires a prohibitive number of evaluations to compute marginal output distributions, the development of fast, data-driven surrogate models becomes necessary. Thus, we can distinguish between two inverse tasks: (i) the identification and calibration of input uncertainties, and (ii) the construction of surrogates, a methodology collectively referred to as surrogate-based UQ. Building on probabilistic reasoning and the concept of partial belief, we demonstrate that Bayesian probability theory provides a unified theoretical framework for addressing both problem types. We further show that Bayesian inference allows for the seamless incorporation of essential subproblems, including model selection for identifying the most probable model specifications and experimental design for optimizing data collection by identifying experiments or simulations that maximize expected information gain about parameters, among others such as connections to sensitivity analysis or the use of special priors like random fields. While this theoretical framework is presented for general mechanical problems, particular emphasis is placed on biomechanics, where variability and uncertainty is especially pronounced due to inherent biological heterogeneity, patient-specific variability, and noisy data.

17. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.49; Date: 2026-07-22T14:05:52Z; Popularity: 2,487 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

18. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

19. [Building AI infrastructure with the Effingham County community](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: OpenAI announces Project Camellia in Effingham County, Georgia, with commitments to responsible energy, community investment, jobs, and access to Codex.

20. [Introducing the ChatGPT for small business program](https://openai.com/index/introducing-chatgpt-small-business-program)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 17:00:00 GMT
   - Summary: OpenAI launches the ChatGPT for Small Businesses program, helping entrepreneurs build AI skills, automate work, and grow with ChatGPT Work.

21. [David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC](https://openai.com/index/david-velez-robin-vince-join-openai-boards)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT
   - Summary: David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC, bringing global leadership in finance, technology, and governance.

22. [Safety and alignment in an era of long-horizon models](https://openai.com/index/safety-alignment-long-horizon-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 20 Jul 2026 10:00:00 GMT
   - Summary: OpenAI shares lessons from deploying long-running AI models, highlighting new safety risks, observed failures, and improved safeguards through iterative deployment.

23. [A scorecard for the AI age](https://openai.com/index/a-scorecard-for-the-ai-age)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 17 Jul 2026 10:00:00 GMT
   - Summary: Sarah Friar, CFO of OpenAI, introduces a practical AI scorecard to measure ROI through useful work, cost per successful task, dependability, and return on compute.

24. [Why teens deserve access to safe AI](https://openai.com/index/why-teens-deserve-access-safe-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 16 Jul 2026 16:00:00 GMT
   - Summary: Learn how OpenAI is making ChatGPT safer for teens with age-appropriate protections, learning tools, parental controls, and expert partnerships.

25. [The US is advancing AI safety through state and federal action](https://openai.com/index/advancing-ai-safety-through-state-and-federal-action)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 15 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines a “reverse federalism” approach to AI governance, where state laws help build a national framework for safe, democratic AI.

26. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

27. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

28. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

29. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

30. [What building Shippy taught us about building agents](https://huggingface.co/blog/allenai/shippy-tech-blog)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:29:41 GMT

31. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

32. [Welcome Inkling by Thinking Machines](https://huggingface.co/blog/thinkingmachines-inkling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

33. [Introducing Real World VoiceEQ: Measuring the human quality of voice AI](https://huggingface.co/blog/real-world-voiceeq)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

34. [Profiling in PyTorch (Part 3): Attention is all you profile](https://huggingface.co/blog/torch-attention-profile)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT

35. [Native-speed vLLM transformers modeling backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT

36. [Integro-differential equations in angular stabilization of drone motion by distributed feedback control](https://arxiv.org/abs/2607.18251)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18251v1 Announce Type: new Abstract: In this paper, we propose angular stabilization of drone motion using distributed feedback control in the form of an integral operator. It should be stressed that the memory of this integral operator could be unbounded. It is intuitively clear that large length of the observation time open new possibilities to construct better control based on previous states of the control object. Unbounded memory in control requires the creation of a certain approach different from standard ones to the study of integro-differential equations. One of the goals of this article is to propose a certain universal approach that allows us to study the stability of integro-differential equations in the case of unbounded memory in the integral operator specifying the feedback control in stabilization. The approach we propose allows us to reduce the study of integro-differential equations to the analysis of systems of ordinary differential equations. In general, such systems can consist of an infinite number of equations. In relation to the so-called linear approximation in the problem of angle stabilization manages to limit itself to relatively simple exponential kernels in the integral control and arrive at a system with a finite number of equations. The examples explain that more complex kernels, for example, linear combinations of the exponential kernels, can enhance the stabilization capabilities. We obtain new unexpectable results on the exponential stability of integro-differential equations. Then we apply them to stabilization of drone flight.

37. [Beyond Accuracy and Cost: Latency-Aware LLM Query Routing for Dynamic Workloads](https://arxiv.org/abs/2607.18253)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18253v1 Announce Type: new Abstract: Modern language query routers improve inference efficiency by assigning each query to a model that balances response quality and monetary cost. However, current query routers are largely latency-agnostic and do not consider the generation latency experienced by queries at model instances. In practice, latency is often controlled by load-balancing policies such as round-robin or join-the-shortest-queue, which do not account for model accuracy or inference cost. Incorporating query latency into routing is challenging as it depends not only on the query's prompt length, but also on the current prefill and decode workload at the model instance and the scheduling and batching policy of the serving framework. We design a lightweight latency estimator that simulates autoregressive token batch processing in the serving framework and estimates the time-to-first-token (TTFT) of queries. We incorporate this latency estimator into a latency-aware router that jointly optimizes latency, accuracy, and cost when assigning queries to model instances. Our experimental results indicate that this joint optimization yields up to 40% improvement in accuracy--cost utility while maintaining the same latencies as standard load-balancing approaches.

38. [Beyond Output-Space Calibration: Spectral Evidence Bundling for Selective Reliability Estimation in Time-Series Classification](https://arxiv.org/abs/2607.18279)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18279v1 Announce Type: new Abstract: Post-hoc calibration for time-series classification usually remaps output scores, but deployment decisions such as trust, abstention, and review depend on whether a confident prediction is supported by the current temporal signal. We address three time-series reliability gaps: identical confidence values can hide different temporal support, average calibration can miss false high-confidence errors, and output-space recalibration offers limited input-linked auditability. We introduce a validation-gated fixed-label reliability policy that keeps the backbone prediction unchanged while estimating whether it should be trusted. The method combines output-side cues with whole-sample spectral descriptors, including band energy, entropy, peak dominance, period support, and phase stability, to form a scalar reliability estimate and diagnostic band-level evidence. A validation gate enables spectral conditioning only when correctness ranking improves without breaching FalseConf@0.9 or AURC tolerances; otherwise it reverts to the safer output-space baseline. Across eight heterogeneous UCR/UEA datasets, eight time-series backbone families, and standard recalibrators, the unconstrained method improves fixed-label selective-reliability metrics on the matched evaluation subset, raising Corr-AURC from 0.693 to 0.779. The validation-gated policy further improves Corr-AURC to 0.786 and reduces FalseConf@0.9 to 0.094. These results suggest that reliability estimation for time-series classifiers benefits from bundling output confidence with spectral evidence, while validation gating prevents unsupported spectral conditioning.

39. [Multi-Timescale Latent-Action DRL for Joint Optimization in Edge-Cloud Networks](https://arxiv.org/abs/2607.18288)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18288v1 Announce Type: new Abstract: Load imbalance across edge and cloud layers degrades latency performance in hierarchical edge-cloud computing (HECC) systems under dynamic task arrivals and heterogeneous resources, leading to severe queuing delays and inefficient resource utilization. To address this challenge, we study a joint service placement, computational delegation, and power control (JSCP) problem to minimize the average end-to-end (e2e) latency. The resulting JSCP problem is a mixed-integer nonconvex and NP-hard optimization problem due to the strong coupling between discrete and continuous variables. To enable tractable optimization and stable system adaptation, we exploit the inherent difference in decision dynamics and decompose the problem into long-term system configuration and short-term resource allocation subproblems. Based on this formulation, we propose a two-timescale multi-layer deep reinforcement learning framework with a latent action space (2T-MDRL-LA) to jointly optimize service placement, user association, computational delegation, task offloading, and user transmit power. A latent action representation based on a variational autoencoder is introduced to efficiently compress the high-dimensional combinatorial action space. Simulation results demonstrate that the proposed framework effectively adapts to dynamic network conditions and achieves near-optimal performance compared to branch-and-bound solutions. It achieves up to a 20.8% reduction in average e2e latency and a 13% improvement in resource utilization over the scheme without the computational delegation, while converging approximately 50% faster than conventional proximal policy optimization.

40. [Random site percolation with complex neighborhoods in five dimension](https://arxiv.org/abs/2607.18991)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18991v1 Announce Type: new Abstract: In this paper, the random site percolation problem in a five-dimensional space for complex neighborhoods is studied. The efficient C++ code (with ordinary work division) of the classical Newman--Ziff algorithm is presented. The obtained speed-up of computations reduces 2170 years of single-core computations -- necessary for obtaining the results presented in this paper -- much below the typical half-decay time of the scientist. For complex neighborhoods, it is for neighborhoods composed with sites taken from several coordination zones (up to the seventh coordination zone), the 127 percolation thresholds are calculated (with 120 among them being estimated for the first time). For seven extended (compact) neighborhoods, the fractal dimensions are also calculated. The mean value of these fractal dimensions, averaged over these seven compact neighborhoods, is estimated as $\langle d_f\rangle\approx 3.5581(70)$. The percentage errors of the values obtained for the fractal dimensions for compact neighborhoods vary from 0.26\% to 1.76\% with respect to the theoretically predicted value based on scaling relations and the most recent estimates of critical exponents for five-dimensional space. The universality of the percolation threshold as dependent on the weighted coordination number $\zeta=\sum_i z_i r_i$ (where $z_i$ is the number of sites in the $i$-th coordination zone and $r_i$ is the Euclidean distance from the sites in the $i$-th coordination zone to the central site) is also verified. The latter manifests itself as the power law ($p_c\propto\zeta^{-g}$) with $g\approx 0.7913(43)$

41. [An interaction potential method for passive and active dynamics of hyperelastic materials](https://arxiv.org/abs/2607.19227)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19227v1 Announce Type: new Abstract: Simulating active biological tissues, such as the myocardium, requires constitutive models that are both physically faithful and computationally efficient. The most common approach relies on finite element methods that accurately discretize the underlying continuum hyperelastic problem which, in turn, require global nonlinear solve at each time step. On the other hand, fast, interaction-potential methods replace the continuum with a network of independent links approximating the mechanical response. We propose an interaction potential formulation for simulating active biological tissues that bridges this gap. The method recasts continuum hyperelastic constitutive laws in terms of tetrahedral edge strain. Unlike classical mass-spring models, the proposed formulation does not approximate the tissue as independent spring elements but preserves the energetic coupling between adjacent edges. Passive tissue mechanics is described by hyperelastic constitutive laws, while active contraction is incorporated through the active-strain multiplicative decomposition. Within the edge-based formulation, the active strain is incorporated through a time-dependent activated reference configuration. We further introduce a strategy for enforcing the material incompressibility constraint while avoiding volumetric locking. The resulting method can be interpreted as an edge-strain representation of a constant-strain tetrahedral continuum element, providing a bridge between continuum mechanics and discrete interaction potential solvers. Numerical tests demonstrate the capability of the method to effectively simulate different hyperelastic constitutive laws and to properly preserve the energy balance equation. Finally, the proposed method is applied to the active deformation of a realistic ventricle, reproducing longitudinal shortening and wall-thickening values consistent with the literature.

42. [Stochastic template banks for GW searches using low-discrepancy sequences](https://arxiv.org/abs/2607.18633)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18633v1 Announce Type: cross Abstract: Matched filtering remains the most sensitive method for detecting gravitational waves from compact binary coalescences. The efficiency of such searches depends on how well a discrete template bank covers the underlying parameter space. Conventional geometric, stochastic, and hybrid placement methods can lead to uneven coverage and redundant templates in higher dimensions. Hybrid methods are generally the most efficient among these, while stochastic methods are simpler to implement, particularly when the parameter-space metric is difficult to compute. In practice, both approaches rely on uniform random sampling, which often requires a large number of proposal points to achieve adequate coverage. We find that stochastic template banks constructed using low-discrepancy sequences achieve comparable recovery fractions while requiring 27.5\% fewer proposal points in two dimensions and 12\% fewer in three dimensions. The final template count changes only marginally ($\sim 1\%$), consistent with the metric-volume constraints of the covering problem. The primary benefit of low-discrepancy sampling is therefore a reduction in the size of the initial proposal set, leading to lower memory usage and reduced bookkeeping during bank generation. Since the final template count is governed mainly by the metric volume of the target parameter space, the wall-clock speed-up is more modest than the reduction in proposal count. Nevertheless, low-discrepancy sampling provides a simple and scalable improvement to stochastic template-bank generation for current and future gravitational-wave searches.

43. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.51; Date: 2026-07-22T13:21:56Z; Popularity: 1,511 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

44. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.47; Date: 2026-07-19T16:23:38Z; Popularity: 473 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

45. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-21T01:04:05Z; Popularity: 279 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

46. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-22T06:26:23Z; Popularity: 214 stars
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

52. [FALCON-Discover: Discovering Concentrated False-Confidence Regions for Calibration](https://arxiv.org/abs/2607.18278)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18278v1 Announce Type: new Abstract: Calibration is usually evaluated in aggregate, but the most dangerous failures are often local: predictions that remain highly confident despite being wrong. We study this failure mode as false-confidence concentration, the extent to which confident errors occupy compact, discoverable regions of prediction space. We introduce FALCON-Discover, a post-hoc, model-agnostic framework that ranks predictions using discrepancy signals from confidence, local support, neighborhood agreement, and perturbation stability. Across seven binary tabular datasets, four seeds, five-fold cross-fitting, and strong learners including XGBoost and CatBoost, we find that false-confidence concentration is recurrent but regime-dependent. At the main confidence threshold, discrepancy-based ranking substantially outperforms the strongest validation-selected calibration or trust-scoring baseline in the strongest regimes, while raw confidence recovers little dangerous-error mass. The best detector varies across datasets: learned discrepancy is strongest when multiple cues must be combined, whereas stability-centered ranking works best when local decisional fragility dominates. These results show that dangerous overconfidence is better treated as a family-level discovery problem than as a single-score calibration problem, and motivate calibration strategies that explicitly target regions where confidence, support, and stability diverge.

53. [FedCC: A Low-Resource Federated Adaptation of Foundation Models for Robust Corpus Callosum localization in Fetal Ultrasound Images](https://arxiv.org/abs/2607.18283)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18283v1 Announce Type: new Abstract: Accurate localization of the corpus callosum (CC) in fetal ultrasound (US) images is crucial for the early identification of neurodevelopmental abnormalities. However, this task remains highly challenging due to the intrinsic limitations of US imaging, including low contrast, speckle noise, and the considerable anatomical variability of the CC. We propose FedCC, a federated learning (FL)-based framework for CC localization in fetal US images, specifically designed for realistic multi-center and resource-constrained clinical settings without requiring data sharing. The framework integrates a frozen DINOv2 backbone with a lightweight YOLO-based detection head. To enable parameter-efficient adaptation, Low-Rank Adaptation (LoRA) modules are incorporated, allowing only a small subset of parameters to be optimized and exchanged among clients. This strategy substantially reduces both computational and communication overhead, making the framework suitable for low-resource environments. The proposed approach was evaluated on a multi-center dataset comprising 10,970 ultrasound frames acquired from 58 pregnant women during routine neurosonographic examinations across three clinical sites using heterogeneous imaging devices. The proposed framework achieved strong performance in the federated setting. In particular, the combination of DINOv2 and LoRA under the FedAvg strategy achieved an average mAP@50 of 0.857 and an F1-score of 0.803, outperforming both full fine-tuning and encoder-freezing baselines. Notably, the proposed approach reduced the number of trainable parameters to 2.9M compared with 24.4M in full fine-tuning, corresponding to an approximately 8.5$\times$ reduction in communication cost. These findings represent a promising step toward scalable, privacy-preserving, and clinically deployable AI systems for fetal neurosonography.

54. [Edge-Efficient Transformer for End-to-End RF Spectrum Monitoring](https://arxiv.org/abs/2607.18285)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18285v1 Announce Type: new Abstract: We present E-SpecFormer (Edge Spectrum monitoring Transformer) for end-to-end automatic modulation and covert channel (CC) recognition. We introduce LiTAN (Linear Tanh Attention Network), a Softmax- and LayerNorm-free attention mechanism that reduces complexity while increasing accuracy in RF tasks. E-SpecFormer is parameterized in four scalable variants (Nano, Small, Medium, Large) to accommodate diverse hardware constraints. Using the RadioML2018 dataset for modulation recognition, the Nano variant achieves 86.5% average accuracy for Signal-to-Noise Ratios (SNRs)>0 dB, and on the hardware Trojan (HT)-based CC dataset it reaches 94.2% accuracy, both with fewer than 10k parameters and up to speed of 92 {\mu}s per frame on FPGA/CPU co-execution, surpassing state-of-the-art edge models at a fraction of their cost. These results establish E-SpecFormer as an edge-efficient solution for real-time spectrum intelligence on Internet of Things (IoT) devices. GitHub link to the repository: https://github.com/zsniko/E-SpecFormer.

55. [BearingNAS: Obtaining In-Sensor Intelligent Fault Diagnosis Systems for Bearings Using a Laptop](https://arxiv.org/abs/2607.18287)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18287v1 Announce Type: new Abstract: This paper introduces BearingNAS, a Hardware-Aware Neural Architecture Search (HW-NAS) framework designed to shift the intelligence directly onto the sensor die via in-sensor processing. BearingNAS frames the search as a constrained optimization problem targeting extreme micro-budgets (4 to 8 kiB of RAM and 16 to 32 kiB of Flash). To eliminate the reliance on expensive discrete GPUs, we propose a lightweight, derivative-free search strategy paired with a single data-flow search space that leverages a decaying kernel growth formulation to prevent parameter explosion. We evaluate our framework on the Case Western Reserve University (CWRU) bearing benchmark, optimizing architectures for three STMicroelectronics targets: two commodity microcontrollers and the LSM6DSO16IS Intelligent Sensor Processing Unit (ISPU). Running entirely on a laptop CPU, the search converges in less than an hour. The resulting best in-sensor architecture achieves a highly competitive diagnostic accuracy of 99.50\% on the ISPU. These results demonstrate the viability of shifting the machine learning workload inside the sensor package, enabling low-cost, production-scale bearing fault diagnosis.

56. [Isochoric thermodynamic preconditioning for resolving mechanically induced phase change in fractured porous media](https://arxiv.org/abs/2607.18608)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18608v1 Announce Type: new Abstract: Rapid pore-volume changes can trigger phase change on timescales shorter than characteristic transport times and may therefore be skipped by conventional nonlinear solves and adaptive time stepping. We present a persistent-variable framework for transport in fractured porous media, introducing specific volume as an independent variable. Starting from a fully coupled system, we derive volume-based models and recover classical pressure-based formulations by eliminating local thermodynamic variables. To resolve abrupt fracture opening, we introduce a nonlinear preconditioner that assumes instantaneous free expansion and resolves the fluid state through an isochoric equilibrium calculation before advancing the transport problem. The preconditioner applies to both volume- and pressure-based models. In the studied fracture-opening cases, unpreconditioned simulations miss transient vaporization, whereas the preconditioned models do not. Across the investigated aperture range, larger openings produce monotonic increases in gas content, expansion-induced cooling, and durations of transients. Thermal effects alter the phase evolution but have otherwise minor influence on the overall transient duration. Within the proof-of-concept setting, fracture opening generates substantial transient pressure reductions, indicating that geomechanical feedback may become important in fully coupled applications. Pressure-enthalpy and volume-temperature formulations recover identical physical solutions but exhibit different nonlinear robustness, with the pressure-enthalpy formulation proving more robust in some recompression-dominated cases. These results show that equilibrium specifications control the numerical properties of the nonlinear problem rather than recovered physical responses, while isochoric preconditioning connects the nonlinear initialization directly to the underlying thermodynamics.

57. [Simulating the Dicke Model on Qubit-Based and hybrid Qubit-Boson-Based Quantum Computers](https://arxiv.org/abs/2607.18546)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18546v1 Announce Type: cross Abstract: The Dicke model provides a fundamental description of collective light-matter interactions and has long served as a testbed for exploring a wide range of physical phenomena in quantum optics and condensed matter physics. In this work, we develop a variational framework for investigating the finite-size Dicke model on both fully qubit-based (digital) and hybrid qubit boson based (digital-analogue) quantum computing platforms. We show that the resulting model reproduces the characteristic critical behavior of the Dicke model in the appropriate large-spin limit while remaining suitable for implementation on both classical emulators of quantum computers and actual trapped ion quantum computers, albeit in the case of latter somewhat limited by noise. Finally, we introduce a complementary hybrid qubit-bosonic variational ansatz that directly exploits the bosonic degree of freedom to reduce quantum resources and discuss its potential implementation on hybrid quantum hardware. Our results establish a scalable, symmetry-aware framework for variational quantum simulations of collective light-matter systems and provide a pathway toward efficient simulations of more general spin-boson models on near-term quantum devices.

58. [Dismantling the Stoquastic Dichotomy](https://arxiv.org/abs/2607.18596)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18596v1 Announce Type: cross Abstract: We challenge the notion that a stoquastic binary governs fundamental computational boundaries in quantum computing and classical simulation of quantum systems. We argue that vanishing geometric phase (VGP), a geometric condition on the Hamiltonian's transition graph, more adequately captures these boundaries. To distinguish VGP from stoquasticity, we construct VGP 3-local Hamiltonians that are formally hard to stoquastize, yet belong to a family admitting polynomial-time recognition of the VGP property. Without constructing a stoquastizing unitary, we prove that the local Hamiltonian problem is $\mathsf{StoqMA}$-complete under the promise that the input Hamiltonian has VGP, and that a frustration-free variant is in $\mathsf{MA}$ under the same promise. We use this result to argue that non-VGP is necessary for any claimed adiabatic advantage justified by escaping the $\mathsf{StoqMA}$ regime. Further, we identify natural settings where the VGP property can be recognized in polynomial time. In contrast, we show that recognition of VGP is $\mathsf{PSPACE}$-complete in general for geometrically local Hamiltonians. Our results show that the computational boundaries $\mathsf{MA} \subseteq \mathsf{StoqMA} \subseteq \mathsf{QMA}$ traditionally attributed to stoquasticity are better understood as boundaries between vanishing and non-vanishing geometric phase structure.

59. [Enhanced NQS via Annealed Gradient Descent](https://arxiv.org/abs/2607.18865)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.18865v1 Announce Type: cross Abstract: Neural quantum states offer expressive representations of quantum many-body wave functions, yet their practical accuracy can be limited by stochastic optimization rather than representational capacity. Here we identify a finite-sample instability, termed subspace trapping, in which physically important configurations become strongly underestimated, remain absent from successive sampling batches and receive insufficient gradient feedback. This self-reinforcing loss of sampled support can confine optimization to an effective subspace and produce apparently stationary states above the true ground state energy. To address this problem, we introduce annealed gradient descent (AGD), a sampling-aware update with annealing factor that temporarily increases the relative contribution of sampled low-probability configurations while limiting the dominance of high-probability ones. We establish the connection between finite-sample support loss and effective subspace optimization, and then evaluate the method across molecular systems, one and two-dimensional $J_1$-$J_2$ models. Annealed gradient descent suppresses metastable trapping, preserves physically relevant configurations and enables compact neural quantum states to attain chemical accuracy and competitive state-of-the-art performance. These results establish AGD as a lightweight complement to expressive neural architectures, improved sampling strategies for scalable quantum many-body optimization.

60. [Combined tools for Particle-In-Cell simulations performed with transversely asymmetric chirped lasers](https://arxiv.org/abs/2607.19121)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 22 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19121v1 Announce Type: cross Abstract: We introduce the Asymmetric Chirped Electric field reconstruction (ACE) toolbox, a suite of algorithms enabling the reconstruction of a laser transverse distribution coupled to a chirped temporal profile. This suite includes the implementation of the reconstructed distribution in Particle In-Cell simulations in cylindrical and Cartesian geometry. Under the assumption of negligible spatio-temporal couplings, the ACE toolbox extends a previously established method for realistic simulations of the transverse distribution by adding spectral chirping to the modal decomposition of the electric field. The relevance of the ACE toolbox is demonstrated through the modelling of a Laser Wakefield Acceleration experiment where the produced electron bunch was optimized via spectral chirping of the laser pulse.

61. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-22T07:27:19Z; Popularity: 750 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-20T05:31:53Z; Popularity: 705 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.63; Date: 2026-07-22T01:43:36Z; Popularity: 632 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

64. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.15; Date: 2026-07-21T03:12:15Z; Popularity: 155 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

65. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-20T06:05:17Z; Popularity: 102 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

66. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-16T09:54:45Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

67. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Calibrated Selective Fact-Checking via Evidence Chain Evaluation

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.18240

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
