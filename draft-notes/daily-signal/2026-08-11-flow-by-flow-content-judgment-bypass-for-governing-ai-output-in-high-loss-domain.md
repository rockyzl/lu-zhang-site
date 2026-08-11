# Daily signal sidecar - 2026-08-11

## Selected Signal

- Title: Flow-by-Flow:Content-Judgment Bypass for Governing AI Output in High-Loss Domains
- URL: https://arxiv.org/abs/2608.07474
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Flow-by-Flow:Content-Judgment Bypass for Governing AI Output in High-Loss Domains
- Primary source: https://arxiv.org/abs/2608.07474
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Use a small known-answer test before adopting a broad claim.
- Failure mode: A benchmark result may not transfer to the corpus, task, or failure mode that matters in real work.
- Practical test: Recreate a small slice of the benchmark with explicit pass/fail criteria and failed-example review.
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

Total candidates reviewed after duplicate-source filtering: 70

1. [Flow-by-Flow:Content-Judgment Bypass for Governing AI Output in High-Loss Domains](https://arxiv.org/abs/2608.07474)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07474v1 Announce Type: new Abstract: Prior work showed that human-in-the-loop oversight becomes structurally untenable in high-loss domains when AI output velocity V exceeds human cognitive capacity C_max. The operative constraint, however, is not V alone but V x L, where L denotes per-item cognitive load. L consists of triage, judgment, and response, which respond asymmetrically to AI capability improvement. Triage cost does not decline as models become more capable, because semantic indeterminacy is inherent in general-purpose design. Response cost is invariant to accuracy improvements. Only judgment cost faces downward pressure, and this pressure often operates by inducing omission rather than genuine reduction. Capability improvement therefore restructures L rather than reducing it. Governance mechanisms based on evaluating whether AI output is correct either delegate that evaluation to AI and inherit hallucination risk, or delegate it to humans and face the V x L ceiling. We propose Flow-by-Flow, a governance paradigm that controls supervisory load without evaluating content. A cognitive cost score based on formal, countable features imposes nonlinear costs on high-volume production, while an institutional capacity cap keeps processing volume within C_max. We derive four design invariants for any content-judgment-bypass exceedance pathway: no content judgment, no scalable consumption of examiner capacity, identity-bound per-application friction, and no batch clearance. One reference implementation is discussed to show that these invariants are jointly satisfiable, while its practical difficulties are explicitly acknowledged. An illustrative Monte Carlo analysis across 1,000 parameter draws suggests that composite multi-metric flow control outperforms supervision reinforcement alone in 90.8% of trials.

2. [The Knowing-Saying Gap: When Probes See Errors that Confidence Misses](https://arxiv.org/abs/2608.07528)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07528v1 Announce Type: new Abstract: Linear probes detect corrupted context in language models with near-perfect accuracy, yet this does not translate into reliable failure prediction. The result is a dissociation with direct implications for deployment monitoring. Across multi-hop arithmetic chains, probes that detect corruption turn out to be uninformative about final answer correctness; models forced into structured confidence formats collapse to two values with indistinguishable error rates; and probe persistence across hops fails to separate correct from incorrect outcomes, refuting our pre-registered "persistence beats peak" hypothesis. This pattern of knowing but not saying generalises across model families including reasoning models. As a real-time monitor, probe-based interventions are sharply model and error-type dependent: branch-and-pick is net-positive across models and uniquely non-breaking on Llama-3.1-8B (4 rescued, 0 broken), while reprompt and replace-prior break correct traces at roughly the rate they rescue wrong ones. Probe-based monitoring is a necessary complement to verbalised confidence, but no single intervention dominates, and the deployable answer is model-aware, error-type-aware routing.

3. [Dynamic Coalition Formation and Communication Pricing in Skill-Based Agentic AI Systems](https://arxiv.org/abs/2608.07532)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07532v1 Announce Type: new Abstract: Modern agentic AI systems combine multiple large language model agents with heterogeneous skills, yet most architectures either fix communication in advance or allow full broadcast. Both can be inefficient because token cost, latency, redundancy, and error propagation increase with the number of active agents and communication links. We model agent selection and communication as a cooperative game with task-conditioned net utility $U(C\mid x)=V(C\mid x)-\sum_{i\in C}c_i$, separating coalition-level costs from agent activation costs. We propose a marginal-value activation rule and greedy router, extend the model to optimize communication edges with per-edge costs, and use estimated Shapley values to predict which agents are worth contacting before and during execution. We connect the problem to submodular maximization and prove two limited guarantees: a curvature-refined bound for a monotone, cardinality-constrained special case, and a tight $1/2$-approximation, with a correction for signed objectives, for an unconstrained non-monotone case via double greedy. Neither guarantee applies directly to the main router, which remains a heuristic. We also prove a Shapley-submodularity sandwich bound linking the error of marginal-value routing to a per-agent diminishing-returns quantity. In synthetic experiments, greedy routing achieves $99.5%$ of brute-force-optimal utility while activating $1.96$ of $8$ agents on average, compared with $38.8%$ for full broadcast. Performance is robust to activation cost and redundancy weight but falls to $66%$ under strong violations of submodularity or noisy value estimates. We distinguish the framework from Shapley pricing, hedonic coalition formation, and communication-graph pruning, and propose evaluation on real multi-agent LLM benchmarks.

4. [MetaSpace: Metamorphic Testing for Spatial Cognition in Embodied Agents](https://arxiv.org/abs/2608.07533)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07533v1 Announce Type: new Abstract: An embodied agent is an intelligent entity that interacts with its environment through a physical body. Currently, the evaluation of embodied agents primarily relies on two paradigms: (1) manually annotated Visual Question Answering (VQA) pairs and (2) high-level task completion metrics, such as success in navigation or manipulation. The former is labor-intensive and subject to variability in annotation quality. The latter may obscure critical vulnerabilities, allowing agents to complete tasks through suboptimal means or safety violations, thereby concealing safety risks and inefficiencies. Given that spatial cognition is the cornerstone for executing embodied tasks, there is a pressing need to assess whether embodied agents possess robust spatial cognition during task execution. Inspired by metamorphic testing principles in software engineering, we propose MetaSpace, a novel framework designed to evaluate the spatial cognition of agents. By leveraging spatiotemporal multimodal states derived from real execution trajectories, MetaSpace automatically generates test cases based on predefined metamorphic relations (MRs) grounded in logical rules and physical laws. Crucially, we encode these MRs as executable rules in a logic programming language (Prolog). Violations of these relations indicate failures in spatial cognition. Our empirical evaluation across three embodied scenarios demonstrates that MetaSpace successfully detects 90,422 spatial cognition errors in state-of-the-art (SOTA) MLLM-driven agents. We introduce the Spatial Cognition (SC) score to quantify performance. Results indicate that all SOTA agents achieve average scores between 0.44 and 0.52, significantly lower than the human benchmark of 0.96.

5. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

6. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

7. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

8. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

9. [NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative Simulation to Surgical Robotics](https://huggingface.co/blog/nvidia/cosmos-h-dreams)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 27 Jul 2026 09:32:20 GMT

10. [Determinization in Structure Theories: A Unified Framework via Closure, Comparability, and Joint Admissibility](https://arxiv.org/abs/2608.07476)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07476v1 Announce Type: new Abstract: We develop a formal framework for constructing canonical interpretations from plural structure theories. A structure theory is a triple T = ({\Sigma}, A, I) consisting of a signature, axioms, and an inference policy, whose admissible interpretation family collects all globally consistent assignments of structural conclusions. We distinguish three levels of canonicalization: closure stabilization (per-seed convergence), global completion (seed-independent convergence), and determinization (a unique admissible interpretation). Non-determinism is classified into epistemic plurality (Type E) and structural plurality (Type S), with a refined Type S-strong subclass characterized by the absence of common upper bounds. Two canonicalization mechanisms arise: operator-based completion and selector-based construction. We provide sufficient structural conditions under which these mechanisms exist, and show that pure inference-based completion reduces to a saturated closure operator under positive, non-retractive rules with an additional soundness condition. For Type E theories, closure stabilization is established, while full determinization depends on a global confluence property that remains open. For Type S-strong theories, determinization is achieved via canonical selection. We further show that multi-level canonicalization forms a structurally non-commutative system via staged operators, and provide a conditional classification theorem reducing theory-intrinsic mechanisms to closure or selection. The framework also applies to LLM-assisted reasoning, where hallucination can be viewed as unsupported canonicalization.

11. [When LLM Agents Negotiate: Private Information and Dynamic Bargaining in Supply Chains](https://arxiv.org/abs/2608.07538)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07538v1 Announce Type: new Abstract: As LLM agents move from decision support to autonomous procurement, firms need to know whether delegated negotiators create value, divide it predictably, and avoid money-losing contracts. We study this in a canonical supply chain bargaining problem: a buyer with private demand information negotiates a quantity-payment contract with an uninformed seller. We benchmark nine LLMs from OpenAI, Google, and Alibaba against a validated Perfect Bayesian Equilibrium across 9,840 LLM-to-LLM negotiations. First, capability governs value creation. Agents agree in 98.9% of negotiations and capture 95.4% of first-best surplus undiscounted, but average 2.98 rounds against the benchmark's 1.25, and this delay erodes 21-34% of surplus. Capability also governs reliability: baseline models accept individually irrational contracts in 19.2% of cases, versus 0.0-0.6% at mid-tier and flagship, making automated profit verification the binding guardrail below that threshold. Second, surplus capture is relational. Provider identity predicts who captures surplus better than capability rank: self-play buyer shares average 40% for OpenAI, 50% for Google, and 70% for Alibaba's Qwen, an ordering that survives restricted communication and no discounting. Reversing which provider sells moves the division by 7-18 percentage points, and the capable Qwen flagship is the weakest cross-family seller: vendor choice is a first-order distributional decision. Third, the prompt is a strategic lever. Delegation separates the principal's economic patience from the agent's prompted strategic patience, a free deployment choice that is the single strongest driver of surplus division (90% of explained variance). Together these establish an equilibrium-referenced audit of AI agents along three dimensions: discounted efficiency, distributional profile, and operational reliability.

12. [Nonadiabatic Molecular Dynamics on Real-time Excited-State Surfaces via Machine Learning Hamiltonians](https://arxiv.org/abs/2608.08095)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.08095v1 Announce Type: new Abstract: Simulating the coupled, nonequilibrium dynamics of electrons and nuclei is a central challenge in chemistry, physics, and materials science, governing phenomena from photocatalysis to quantum information. The primary bottleneck has been the lack of a general, accurate, and efficient method for modeling the complete excited-state landscape: the potential energy surfaces, forces, and non-adiabatic couplings for multiple electronic states. While machine learning has revolutionized ground-state simulations and shown promise for excited states in molecules, a unified framework that solves the complete multi-state problem for general condensed matter systems has remained elusive. Here we introduce on-the-fly N${^2}$AMD (Neural network NAMD), a machine learning framework that makes on-the-fly NAMD in solids a reality. By employing an equivariant neural network to predict the system Hamiltonian, the framework delivers excited-state energies, forces, and non-adiabatic coupling vectors at a fraction of the cost of ab initio calculations. Crucially, it allows simulations with hybrid functional accuracy, a level of approach previously inaccessible for NAMD. We showcase its capabilities with three topical examples: correcting order-of-magnitude errors in carrier dynamics predicted by conventional procedure in a MoS$_2$/WS$_2$ heterostructure, simulating previously inaccessible photoinduced ferroelectric switching, and capturing real-time polaron formation in TiO$_2$ at the hybrid-functional level. On-the-fly N${^2}$AMD moves beyond the limitations of equilibrium theory, establishing a new paradigm for the predictive, first-principles design of materials operating far from equilibrium.

13. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.68; Date: 2026-08-11T13:54:22Z; Popularity: 2,678 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

14. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-08-07T03:01:58Z; Popularity: 23 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

15. [OpenAI’s letter to Governor Abbott on responsible AI infrastructure in Texas](https://openai.com/index/responsible-ai-infrastructure-texas)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 14:00:00 GMT
   - Summary: OpenAI sent Governor Greg Abbott a letter outlining its commitment to responsible AI infrastructure in Texas. The letter supports reliable, transparent growth that benefits Texans.

16. [Model ML completes finance work more efficiently with GPT-5.6 Sol](https://openai.com/index/model-ml)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 12:00:00 GMT
   - Summary: Model ML uses GPT-5.6 Sol to carry finance work from research and analysis through editable, traceable PowerPoint decks and Excel workbooks.

17. [What building an AI-native finance function taught me](https://openai.com/index/building-an-ai-native-finance-function)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 17:00:00 GMT
   - Summary: OpenAI CFO Sarah Friar shares five lessons for building an AI-native finance function, from automated forecasting to stronger controls and AI ROI.

18. [Expanding Daybreak as the Cyber Defense Window Narrows](https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 10:00:00 GMT
   - Summary: Meet GPT-5.6-Cyber, OpenAI’s cybersecurity-specific model available through Daybreak Red for authorized vulnerability research, exploit validation, and security testing.

19. [Putting frontier cyber models in more trusted hands](https://openai.com/index/putting-frontier-cyber-models-in-more-trusted-hands)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 10:00:00 GMT
   - Summary: Approved Daybreak partners can use OpenAI’s frontier cyber models to deliver authorized, governed cybersecurity services to customers.

20. [Premium seats are coming to ChatGPT Business](https://openai.com/index/premium-seats-chatgpt-business)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT
   - Summary: Premium seats are coming to ChatGPT Business. Sign up by August 20 to get $100 in workspace credits and unlock higher usage for your team's most demanding work.

21. [How Zapier transformed core marketing processes with ChatGPT Work](https://openai.com/index/zapier)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT
   - Summary: The enterprise marketing team at Zapier uses ChatGPT Work to reduce the number of drop-offs in its lead funnel, build campaign assets, and automate reporting.

22. [Virgin Atlantic sharpens customer journeys with ChatGPT Work](https://openai.com/index/virgin-atlantic/chatgpt-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT
   - Summary: Virgin Atlantic is accelerating research, product planning, and decision-making with ChatGPT Work, helping teams connect signals across the customer journey.

23. [How HSP GRUPPE builds AI capabilities for tax advisory](https://openai.com/index/hsp-gruppe)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 07 Aug 2026 09:00:00 GMT
   - Summary: Discover how HSP GRUPPE uses ChatGPT Enterprise to boost productivity, improve work quality, and create more capacity for tax advisory and client service.

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [Thinking of ACE? We Can Do It with Fewer Tokens](https://huggingface.co/blog/ibm-research/altk-evolve-sldd)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 11 Aug 2026 13:37:10 GMT

26. [Build Low-Latency Multilingual Voice Agents: Open Weights & Full Deployment Control with NVIDIA Magpie TTS](https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 16:25:36 GMT

27. [Making Knowledge Distillation Cheap Enough to Run at Scale](https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 10:05:36 GMT

28. [Meta is back with Muse Glimmer: local, agentic, multimodal, and open source](https://huggingface.co/blog/muse-glimmer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT

29. [TutorMoments: Do AI tutors know when to help and when to hold back?](https://huggingface.co/blog/allenai/tutormoments)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 07 Aug 2026 17:53:32 GMT

30. [Baseten on Hugging Face Inference Providers 🔥](https://huggingface.co/blog/baseten)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 06 Aug 2026 00:00:00 GMT

31. [Deploy local agents everywhere with LFM2.5-2.6B](https://huggingface.co/blog/LiquidAI/lfm2-5-2-6b)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 04 Aug 2026 13:58:29 GMT

32. [GPU Management: Why Idle GPUs Are the New Grounded Aircraft](https://huggingface.co/blog/Dharma-AI/gpu-management)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 30 Jul 2026 15:09:09 GMT

33. [Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 GMT

34. [Towards an Argumentative Foundation for Evaluative AI](https://arxiv.org/abs/2608.07473)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07473v1 Announce Type: new Abstract: Evaluative AI (EAI) has been recently proposed as a way to support human decision-making, not by producing a single recommendation, but by presenting competing hypotheses together with evidence for and against each. In this position paper, we advocate (computational) argumentation as a particularly suitable paradigm to provide a formal, computable foundation for forms of EAI that are explainable and contestable, setting the ground for a long-term research agenda towards distributed and human-centred EAI systems.

35. [Emotion in an active inference model of human driving](https://arxiv.org/abs/2608.07480)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07480v1 Announce Type: new Abstract: Active inference has emerged as a principled framework for modeling adaptive behavior by balancing goal-directed action with uncertainty reduction. It has been successfully applied across biological and artificial systems, including recent work on human driving. However, existing active inference models of driving have yet to address an important determinant of behavior in traffic: affective state, which significantly influences decision-making. Prior work in non-traffic domains has explored active inference agents in which emotions are represented along the axes of valence and arousal in the circumplex model. However, this work has been limited to simplified settings with discrete state spaces. In this work, we propose an expanded formulation of valence and arousal that can be extracted from a more complex active inference model of driving with continuous states. In particular, we condition affective estimates not only on the current state but also on predicted future outcomes. We evaluate the proposed approach in two interactive driving scenarios and show that the resulting emotion signals correspond to affective patterns reported in similar scenarios.

36. [Training Variable Long Sequences with Data-Centric Parallel](https://arxiv.org/abs/2608.07524)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07524v1 Announce Type: new Abstract: Training deep learning models on variable long sequences poses significant computational challenges. Existing methods force a difficult trade-off between efficiency and ease-of-use. Simple approaches use static configurations that cause workload imbalance low efficiency, while complex methods introduces significant complexity and code change for new models. To break this trade-off, we introduce Data-Centric Parallel (DCP). Its core principle is to let the data itself drive the runtime. It achieves this by dynamically adjusting direct runtime settings (e.g., parallel size, gradient accumulation, recomputation) based on each batch's sequence length. Empirical results demonstrate that our method achieves up to a 2.88$\times$ speedup on 32 H200 GPUs. Designed for generalization, it can be integrated into any model with 10 lines of code. We anticipate this simple yet effective approach will serve as a robust baseline and facilitate future advancements in distributed training for variable long sequences.

37. [NL2SHACL-Bench: A Benchmark Suite for Natural Language to SHACL Translation](https://arxiv.org/abs/2608.07530)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07530v1 Announce Type: new Abstract: SHACL is a core technology for validating the conformance of RDF knowledge graphs (KGs). Yet, authoring SHACL shapes requires technical expertise that most domain experts lack. Translating natural language requirements into SHACL (NL2SHACL) would lower this barrier. However, there is no dedicated benchmark for NL2SHACL, and evaluating generated shapes requires methods beyond string comparison, as semantically equivalent shapes can differ in serialisation and structure. To tackle these challenges, we present NL2SHACL-Bench, a benchmark suite for natural language to SHACL translation. Using NL2SHACL-Bench, we evaluate four state-of-the-art large language models (LLMs) for this task. Our results show that current LLMs are highly capable of generating syntactically valid SHACL, but still struggle to produce semantically equivalent constraints for complex logical and structural patterns. This indicates that NL2SHACL-Bench provides a meaningful basis for measuring advances in the NL2SHACL state of the art.

38. [SkillConsist: Detecting Inconsistencies in Agent Skills via Bidirectional Graph Alignment](https://arxiv.org/abs/2608.07639)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07639v1 Announce Type: new Abstract: Agent Skills provide reusable capabilities to LLM agents. Agent Skill inconsistencies can expose undisclosed dangerous behavior or cause wrong Skill selection. Recent Agent Skill research has increasingly examined Agent Skill consistency detection. Existing methods evaluate behaviors or security-property graphs against predefined categories or declared scopes. More recently, PL-HCL uses an LLM-based model to learn consistency across metadata, instructions, and resources. However, declaration and implementation behavior can be mixed across text and code, and a concise declaration can correspond to multiple connected implementation steps. We present SkillConsist to address both challenges. An LLM separates declaration and implementation content into behavior records on the implementation and declaration sides, while static analysis supplements implementation records. These records form declaration and implementation behavior graphs, respectively. Starting from a behavior record on either side, bidirectional graph alignment searches the other graph for a candidate subgraph and expands it along behavior relations until it completely expresses the source-side behavior. Graph differencing identifies conflicts between aligned subgraphs and outputs the detection results. We construct a 633-Skill benchmark from ClawHub's 500 most-downloaded public Skills and 133 Skill-Inject packages. The benchmark contains 319 inconsistent and 314 consistent Skills and 442 localized inconsistency annotations. On this benchmark, SkillConsist achieves 86.85% precision, 89.03% recall, and 87.93% F1 for package-level detection, improving F1 over the best baseline by 20.43 percentage points. For localization, it achieves 67.60% precision, 58.14% recall, and 62.52% F1.

39. [CODS: Iterative Bellman-Residual Data Selection for Reusable Offline Reinforcement Learning](https://arxiv.org/abs/2608.07719)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07719v1 Announce Type: new Abstract: Offline reinforcement learning repeatedly trains policies from a fixed transition pool, making redundant data costly across seeds and hyperparameters, while naive subsampling can remove rare transitions needed for long-horizon credit assignment. We introduce CODS, a critic-guided selector that alternates between fitting an algorithm-matched critic and acquiring high-residual transitions before freezing a reusable subset. Unlike prioritized replay, CODS produces a static artifact; unlike one-shot residual selection, it refreshes scores as the critic changes. At a 10\% budget, CODS retains 96.6\% of eligible-pool performance across 20 valid D4RL task--algorithm cells. It exceeds ReDOR and OPER on 19/20 cells and every other subset baseline on 20/20; all six subset advantages remain significant under predeclared hierarchical inference with Holm correction. Holding total selector updates fixed, five acquisition rounds improve four representative cells by 11.23 points over one round and saturate thereafter. Equal-pass and equal-hour evaluations clarify that reuse, rather than a single-run speedup, creates the compute advantage. Mechanism and corruption interventions expose both useful sparse-reward enrichment and sensitivity to outliers. Finally, a whole-trace extension retains 95.4\% of pooled ALFWorld success and 96.5\% of pooled GSM8K exact match. CODS is therefore a reusable selection procedure, not a formal coreset guarantee.

40. [Neural Operators for Immersed-Boundary Soft Swimmers Locomotion](https://arxiv.org/abs/2608.07722)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07722v1 Announce Type: new Abstract: High-fidelity immersed-boundary simulation resolves the coupled motion of a deforming swimmer and its surrounding flow, but the resulting cost limits repeated evaluations for engineering design, parameter studies, and control. We develop neural-operator surrogates for temporal prediction of the hydrodynamic fields generated by planar and volumetric eel swimmers. The surrogates are trained on regular-grid fields exported from adaptive fluid--structure simulations and are conditioned on swimmer geometry and Reynolds number. The planar model jointly predicts two velocity components, scalar vorticity, and pressure. On five held-out high-Reynolds-number trajectories, its full-domain global relative L^2 error is 3.51 %. The volumetric formulation uses three target-specific models with a common multichannel input: one model predicts three-dimensional velocity, one predicts vorticity, and one predicts pressure. Their full-domain global relative L^2 errors on five held-out within-range trajectories are 3.44 %, 5.58 %, and 19.2 %. Together, the results demonstrate the feasibility of field-resolved neural surrogates for moving-boundary swimmer flows while identifying pressure accuracy and physical consistency as priorities for further development.

41. [Coordinate-Residual Physics-Driven Neural Network for Electromagnetic Inverse Scattering](https://arxiv.org/abs/2608.09382)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.09382v1 Announce Type: new Abstract: Electromagnetic inverse scattering is a nonlinear and ill-posed problem, where accurate reconstruction is challenging due to measurement limitations, noise, and high computational costs, especially for 3-D imaging. Although physics-driven neural networks (PDNNs) reduce the dependence on labeled training data, existing accelerated PDNN frameworks often rely on preliminary reconstruction-based region selection, which may introduce instability when the selected region is inaccurate. In this paper, a coordinate-residual physics-driven neural network (CRPDNN) is proposed for 3-D electromagnetic inverse scattering. The proposed solver directly reconstructs the unknown contrast distribution using normalized spatial coordinates and a residual convolutional network, without requiring a preliminary reconstruction. For the reported noise-free 3-D synthetic cases, CRPDNN achieves an average relative error of 2.10\%, compared with 7.97\% for CSI and 3.99\% for $L_{2/3}$-FBE-WCIE, while providing approximately 5.5- and 12.1-fold speedups over the two baselines, respectively. Supplementary 2-D comparisons further confirm its stability and computational efficiency relative to existing PDNN frameworks. CRPDNN also maintains reliable reconstruction performance under noisy measurements, and the 3-D Fresnel experiments further indicate its potential for practical imaging applications. The related code is available at https://github.com/Physics-driven-methods.

42. [Leveraging generative models to assist Monte Carlo sampling](https://arxiv.org/abs/2608.07648)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07648v1 Announce Type: cross Abstract: Sampling high-dimensional probability distributions is a central task in scientific computing, with applications ranging from Bayesian inference to statistical physics and molecular simulation. Despite decades of methodological developments, two major challenges remain: scaling to high dimensions and efficiently exploring multimodal distributions characterized by metastable states. Classical approaches such as Markov chain Monte Carlo, tempering methods, or enhanced sampling based on collective variables have achieved major successes, but they also face intrinsic limitations. This tutorial review explores a new paradigm that has recently emerged at the interface of machine learning and computational statistical physics: the use of generative models as tools for sampling. In this context, models such as normalizing flows and diffusion models are not used in their traditional data-driven setting, but rather as flexible probabilistic models that can assist the sampling of distributions known only up to a normalization constant. This manuscript reviews the early development of this rapidly evolving field and discusses several methodological directions, including exact samplers based on generative models and strategies to train such models in the absence of data. While an exhaustive survey of the literature is not attempted, we present a selection of key ideas and methods, along with a discussion of their strengths and limitations. The review is intended to be an accessible tutorial for both physics and machine learning audiences, and it aims to provide a starting point for researchers interested in exploring this exciting area of research.

43. [Chemical potentials from structure factors: I. Neutral multi-component mixtures](https://arxiv.org/abs/2608.08357)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.08357v1 Announce Type: cross Abstract: The chemical potentials of multi-component mixtures underlie many physical and chemical phenomena, but remain challenging to compute. The S0 method enables the computation of chemical potentials from equilibrium molecular dynamics simulations, by leveraging the thermodynamic relationship between particle number fluctuations and derivatives of chemical potentials, followed by numerical integration along different compositions. Here we generalize the S0 method from two-component mixtures to neutral multi-component mixtures. We first extend the statistical mechanical formalism to high-dimensional compositional space, and then introduce a Gaussian process integration scheme combined with active learning to efficiently integrate chemical potentials and sample diverse compositions. We use this method to compute the mixing free energies of a molten metal alloy, and the solubilities of two paracetamol polymorphs in water-ethanol solvents. The extended S0 method provides a practical and scalable route for computing chemical potentials in neutral bulk multi-component mixtures from atomistic simulations.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.69; Date: 2026-08-11T12:56:42Z; Popularity: 1,687 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-11T07:13:10Z; Popularity: 478 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.32; Date: 2026-08-11T13:26:46Z; Popularity: 317 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-11T12:09:37Z; Popularity: 228 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

48. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

49. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

50. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

51. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

52. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

53. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

54. [Evolving Safety Landscape of Multi-modal Large Language Models: A Survey of Emerging Threats and Safeguards](https://arxiv.org/abs/2608.07535)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07535v1 Announce Type: new Abstract: Multi-modal large language models (MLLMs) integrate heterogeneous modalities through modality alignment and fusion, enabling stronger understanding and reasoning. However, this architectural shift reshapes the safety landscape of machine learning. Increased model complexity and cross-modal interactions give rise to novel threats, including compromised modality integration, modality misalignment, and fused safety risks, reflecting shifts in threat modeling beyond uni-modal assumptions. These shifts, in turn, impose new constraints on safety solutions not captured by existing frameworks rooted in uni-modal learning. Motivated by these challenges, this survey provides a systematic analysis of the evolving safety landscape of MLLMs. We first propose a multimodal grounded taxonomy of safety threats and analyze shifts in threat models, covering adversarial attacks, data poisoning, jailbreaks, and hallucinations. We then summarize updated safety assumptions and organize recent advances in MLLM safety strategies accordingly. Finally, we discuss open challenges and future directions to inform the development of more principled and scalable safety mechanisms for multimodal systems.

55. [Tracing sources of epistemic uncertainty in deep learning predictions: homo- and hetero-scedastic linearized estimators](https://arxiv.org/abs/2608.07630)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07630v1 Announce Type: new Abstract: We adapt two classical statistical estimators for quantifying uncertainty to modern deep learning, in order to provide clearer insights into uncertainty attributable to two sources : aleatoric uncertainty, or locally scarce data. Our approach leverages recent advances in approximate Fisher Information Matrices, to enable scaling to actual architectures. Experimental results demonstrate how each test points is differentially impacted by both sources, highlighting the practical utility of our estimators in improving the robustness of real-world applications.

56. [PhysAttNet: Enhancing Predictive Performance in Industrial and Astrophysical Time Series via Physics-Informed Attention](https://arxiv.org/abs/2608.07681)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07681v1 Announce Type: new Abstract: Accurate and robust time series forecasting is essential in many applications involving physical processes, such as manufacturing monitoring and astrophysical event detection. In these settings, predictive models must remain reliable under noise, variability, and measurement uncertainty while capturing temporally localized structures corresponding to physically meaningful events. Convolutional neural networks (CNNs) are widely used for such tasks due to their computational efficiency and strong representational capacity. However, their learned temporal representations often exhibit unstable or physically inconsistent attention patterns, reducing robustness, generalization, and interpretability. This paper introduces PhysAttNet, a physics-informed attention framework for time series forecasting. PhysAttNet augments a lightweight CNN forecaster with an attention head guided by domain-informed regularization reflecting the structural properties of physical signals. Specifically, three complementary constraints are imposed during training: an alignment regularization that encourages attention to follow smooth, peak-centered temporal structures derived from the input signal, a smoothness regularization that enforces continuous temporal evolution, and a sparsity regularization that promotes selective focus on informative intervals. These differentiable regularization terms introduce physics-guided inductive bias without requiring annotated explanations or manual supervision. Experiments on two distinct applications, namely predicting cutting forces during milling and forecasting flares in blazar time series, demonstrate that PhysAttNet improves forecasting accuracy, generalization, and prediction performance on structurally important events.

57. [Finite Constant Frontiers and Auditable Regret Certificates for Average-Reward Reinforcement Learning](https://arxiv.org/abs/2608.07725)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07725v1 Announce Type: new Abstract: Average-reward reinforcement-learning regret is known up to logarithmic factors, but the numerical content of published guarantees is difficult to compare because probability mode, structural parameter, logarithmic normalization, prior information, and planning assumptions differ. We introduce a constant-aware comparison protocol and derive an explicit finite lower certificate for communicating MDPs. The construction is a binary tree of two-state blocks; its proof uses exact trajectory-level Bernoulli KL divergence and keeps action budget, diameter, occupancy, navigation cost, and terminal bias explicit. A common closed-form envelope improves the published coefficient $0.015$ across a finite frontier: $0.0200$ in a moderate regime and up to $0.0291$ under stronger action, diameter, and horizon conditions, a $94\%$ increase. The limiting coefficient is $\frac1{32}\sqrt{(A-3)/A}$. For upper bounds, we give an auditable composition rule for a span-constrained optimistic learner, but do not claim a coefficient while adaptive directional-variance and planning certificates remain open. We also formalize valid expectation conversion and constant comparability. Controlled diagnostics test diameter dependence, bonus-by-width interactions, span misspecification, and the finite lower certificate on its exact family.

58. [Autonomous Lindblad Realizability of Nonunitary Linear Dynamics with a Carleman Lattice Boltzmann Application](https://arxiv.org/abs/2608.09808)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.09808v1 Announce Type: new Abstract: Carleman lifting converts nonlinear polynomial dynamics into finite linear systems, but the resulting truncations are generally nonunitary and need not correspond to physical quantum evolution. We prove that a finite linear endpoint admits an autonomous Gorini--Kossakowski--Sudarshan--Lindblad (GKSL) realization on vacuum coherences if and only if it is invertible and power bounded. The construction is explicit and realizes the nonunitary map directly as open-system dynamics, with no endpoint postselection and with one encoding and one decoding over repeated timesteps. We apply the result to the complete D2Q9 multiple-relaxation-time lattice Boltzmann (LB) timestep by compiling collision and periodic streaming into a single Carleman endpoint. The resulting GKSL evolution reproduces the classical Carleman trajectory over multiple timesteps, while the remaining discrepancy from nonlinear LB dynamics is the expected Carleman truncation error. The result establishes a general criterion for autonomous open-quantum realization of finite nonunitary dynamics, with Carleman--LB dynamics as a concrete example.

59. [PASCHEN-1D: A one-dimensional fluid plasma solver with multi-mechanism surface emission and flexible external circuit coupling](https://arxiv.org/abs/2608.07721)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.07721v1 Announce Type: cross Abstract: We present PASCHEN-1D (Plasma Advanced Solver with Coupled High-fidelity Emission and external Network), a one-dimensional time-dependent fluid plasma solver developed for self-consistent simulation of gas discharges and plasma breakdown with coupled electrode surface emission and flexible external circuit networks. The code solves drift-diffusion continuity equations for electrons and ions together with Poisson's equation. It is dynamically coupled to lumped RLC circuits, which self-consistently treat plasma transport, plasma-surface interaction, dielectric effects, and circuit response within a single framework. The electrode emission module includes ion-induced secondary electron emission, Fowler-Nordheim and Murphy-Good field emission, Richardson-Dushman thermionic emission, and photoemission based on a general, exact quantum mechanical emission theory. A finite-volume formulation with Kurganov-Tadmor fluxes, explicit diffusion, and fourth-order Runge-Kutta time integration is employed to ensure stable transient (sometimes ultrafast) evolution across breakdown and glow regimes. The solver is validated against multiple benchmark cases, including nanosecond pulsed dielectric-barrier discharges, DC breakdown and glow transitions, and Paschen curve construction for argon and nitrogen, with results consistent with published studies. With high-fidelity emission physics and a flexible circuit-coupling framework, PASCHEN-1D provides a versatile and efficient tool for modeling breakdown and transient discharge phenomena.

60. [Multiphysics Modeling of Thermo-Viscoelastic Damage in Functionally Graded Abradable Coatings with Probabilistic Geometric Tolerance Analysis](https://arxiv.org/abs/2608.08116)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.08116v1 Announce Type: cross Abstract: In aircraft engines, functionally graded abradable coatings are used to control blade-tip clearance, but their durability is governed by effects that are often treated separately in existing models, including temperature-dependent viscoelastic softening, progressive damage, deposition-induced microstructural modulation, and geometric tolerances. This study integrates these effects within a unified multiphysics--probabilistic framework. The solved domain is a local through-thickness coating column driven by prescribed strain and temperature histories that include thermal eigenstrain and coating--substrate expansion mismatch. The results show that periodic property modulation increases end-of-cycle damage relative to the monotonic gradient and concentrates the maximum stress within a localized modulation crest. Propagating symmetric geometric tolerances through the coupled solver produces a strongly right-skewed damage distribution and a higher classification-level exceedance probability for the modulated gradient than for the monotonic gradient. This exceedance behavior cannot be obtained from a deterministic analysis performed at nominal geometry. The implementation is verified through spatial and temporal refinement, closed-form unit tests, nested Monte Carlo convergence with Wilson confidence intervals, and a hold-out-validated polynomial response surface. Numerical verification is clearly distinguished from experimental validation, and the simulated case is presented as a generic benchmark rather than an identified material model. The framework links deposition parameters and tolerance bands to damage-exceedance risk, supporting reliability-oriented screening of graded and multilayer coating systems.

61. [High-Resolution Weighted Essentially Non-Oscillatory Compact Least-Squares Schemes with Implicit Time Integration for Compressible Navier-Stokes Equations on Curvilinear Grids](https://arxiv.org/abs/2608.08117)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.08117v1 Announce Type: cross Abstract: This paper presents a family of high-resolution weighted essentially non-oscillatory compact least-squares schemes with implicit time integration for the compressible Navier-Stokes equations on curvilinear grids. Compared with the original compact least-squares schemes, the proposed method introduces two main improvements. First, instead of enforcing the accuracy constraints over the entire computational domain, including discontinuous regions, it constructs the reconstruction matrix only along smooth reconstruction lines using an accuracy-preserving weighting strategy. This treatment effectively suppresses the persistent high-frequency oscillations observed in the original compact least-squares schemes and yields sharper profiles near discontinuities. Second, the method simplifies the shock-capturing procedure and improves efficiency by using a single set of polynomials, whereas the original compact least-squares schemes require both unlimited and limited polynomials. Combined with spectral optimization, the proposed method exhibits more favorable spectral properties than conventional weighted essentially non-oscillatory schemes. The smoothness indicators and penalty matrices are constructed through an efficient iterative procedure with modest additional cost. Numerical results for inviscid and viscous one-, two-, and three-dimensional flows demonstrate that the proposed method provides robust shock-capturing capability while maintaining high resolution in smooth regions and across contact discontinuities.

62. [Exploring Particle Geodesics in a Warp Drive Spacetime](https://arxiv.org/abs/2608.08213)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.08213v1 Announce Type: cross Abstract: Although the Alcubierre Warp Drive is theoretically capable of providing faster-than-light travel, it may be difficult to use for this purpose. But is it useful for slower-than-light travel? We begin by observing the that the warp bubble will act to protect the ship from dust particles and other space debris (a potentially serious hazard even at 10% the speed of light). We then explore several modifications of the Alcubierre Warp Drive, e.g. a "deflector shield", with the perspective of keeping a ship safe from collisions with particles, projectiles, rogue planets, and other dangers of space travel.

63. [Eikonal Regularisation in Physics-Informed Neural Networks for Three-Dimensional Level-Set Advection: Transferability of Two-Dimensional Design Principles](https://arxiv.org/abs/2608.08322)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 11 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.08322v1 Announce Type: cross Abstract: Physics-informed neural networks applied to the level-set formulation of interface advection commonly augment the residual and initial-condition losses with an eikonal regulariser, penalising the deviation of $\|\nabla\phi\|$ from unity. A previous two-dimensional study identified this weight as the dominant hyperparameter and found its optimum shifts by four orders of magnitude between rigid-body and deforming flows, but left open whether these principles transfer to three dimensions and whether single-seed results survive run-to-run variability. We answer both by repeating the weight selection across four 3D benchmarks (translating sphere, rotating sphere, slotted sphere, reversed vortex), sweeping six weights with three seeds at full training budget under a pre-registered selection rule. The ordering transfers: the selected weight tracks how far the exact solution departs from the signed-distance property, spanning four decades from $10^{-1}$ where it holds exactly to $10^{-5}$ where the interface is stretched. Values transfer only benchmark by benchmark; two of four carry over unchanged and two do not, so inheritance must be verified. The multi-seed protocol reveals that at small weights the seed-to-seed standard deviation equals the error itself, and the regulariser reduces it by more than an order of magnitude, buying reproducibility as well as accuracy. We benchmark against a fifth-order WENO solver on identical grids and error measures; the classical scheme is more accurate on all four problems, by two orders of magnitude on smooth rigid advection, with a margin that narrows with geometric difficulty and is smaller in volume conservation than in the field norm. Finally, we show that the relative $L_2$ error cannot certify the preservation of thin features, and report a feature-restricted measure that can.

64. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

65. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-10T16:05:18Z; Popularity: 718 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

66. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.66; Date: 2026-08-11T09:01:29Z; Popularity: 661 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.17; Date: 2026-08-11T08:10:44Z; Popularity: 167 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.11; Date: 2026-08-10T06:32:49Z; Popularity: 109 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Flow-by-Flow:Content-Judgment Bypass for Governing AI Output in High-Loss Domains

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.07474

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
