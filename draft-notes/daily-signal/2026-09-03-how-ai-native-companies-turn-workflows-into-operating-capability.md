# Daily signal sidecar - 2026-09-03

## Selected Signal

- Title: How AI-native companies turn workflows into operating capability
- URL: https://openai.com/index/ai-native-company-workflows
- Source: OpenAI News
- Score: 5.00

## Candidate Review

- Signal: How AI-native companies turn workflows into operating capability
- Primary source: https://openai.com/index/ai-native-company-workflows
- Discovery source: OpenAI News
- Workflow stage: scientific question -> evidence
- Pattern: Map a public AI signal onto one concrete scientific workflow step.
- Failure mode: The public signal may be interesting but too thin to support a practical workflow decision yet.
- Practical test: Read the primary source, define one expected artifact, and test whether the claim changes a real workflow decision.
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

Total candidates reviewed after duplicate-source filtering: 68

1. [How AI-native companies turn workflows into operating capability](https://openai.com/index/ai-native-company-workflows)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 01 Sep 2026 17:00:00 GMT
   - Summary: Basis, Clay, and Exa Labs use AI agents to improve onboarding, account management, and developer integrations. See what enterprise leaders can apply.

2. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

3. [EvalDetectBench: A Benchmark for Measuring Evaluation Awareness in Frontier Language Models](https://arxiv.org/abs/2609.01611)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01611v1 Announce Type: new Abstract: Frontier large language models can often recognize when they are being evaluated, a capability known as evaluation awareness. If models behave differently in evaluations than in deployment, this undermines the validity of evaluation results, which are a crucial component of current AI safety frameworks. We introduce EvalDetectBench, an open pipeline and benchmark for measuring evaluation awareness that works with any Inspect-compatible evaluation, allowing practitioners to test against current and future benchmarks. EvalDetectBench ships with a newly curated transcript suite covering current frontier system-card evaluations and diverse deployment sources. The benchmark serves two purposes: measuring how reliably frontier LLMs recognize that they are being evaluated, and assessing how detectable individual benchmarks are as evaluations. We identify two methodological choices in the existing literature that introduce systematic bias: the identity of the model that generated the deployment transcripts accounts for 11.25% of measurement variance and can reorder model rankings; and elicitation prompts selected for high performance on one model can perform near chance on others. EvalDetectBench corrects for both via per-model probe calibration and a stratified generator-harmonisation procedure.

4. [Meta-ethics and AI: exploring the novel meta-ethical questions in the era of AI](https://arxiv.org/abs/2609.01685)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01685v1 Announce Type: new Abstract: With the development of artificial intelligence (AI), the landscape of meta-ethics, which has largely centred on human ethics, faces pressures that may significantly reconfigure it. In particular, if future AI systems were to exhibit sufficiently integrated capacities for moral reasoning, moral intentionality, and moral reflection, novel meta-ethical questions would arise concerning what I call "AI's own ethics", as distinct from ethical principles merely imposed on AI by human designers. This paper offers a conditional and methodological framework for identifying the questions that would emerge if such AI systems were to arise. On that basis, the paper distinguishes four domains of meta-ethical inquiry in the era of AI: questions about the nature of human ethics from the human perspective; questions about the nature of AI's own ethics from the human perspective; questions about the nature of human ethics from the AI perspective; and questions about the nature of AI's own ethics from the AI perspective. The paper then considers how some existing mainstream meta-ethical theories (such as cognitivism and non-cognitivism, error theory and success theory, relativism, and objective realism) might illuminate these domains, while arguing that many familiar human-centred formulations of those theories may not transfer straightforwardly to AI cases without substantial revision. The overall conclusion is that the emergence of AI's own ethics would place significant pressure on current frameworks and may require substantial refinement, reconstruction, or reconceptualisation.

5. [When Can a Machine Trust a Statute? A Survival Certificate for Machine-Extracted Legal Logic](https://arxiv.org/abs/2609.01741)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01741v1 Announce Type: new Abstract: Statutes are increasingly parsed by machines before people read them, and the parsers disagree: on Missouri's statutes, two independently written extractors diverge on numeric-threshold presence at a false-negative rate of 0.43. We ask what formal logic survives such noise. We build a passive survival certificate for the Duquenne-Guigues implication basis of machine-extracted statutory contexts: per-attribute inter-extractor disagreement is measured, replayed against the basis in 1,000 Monte Carlo trials, and an implication is certified only when a one-sided Wilson 95% lower bound on survival reaches 0.95; every certified implication carries premise spans and a minimal counterexample. On 29,365 Missouri sections and 502 Indian central-Act sections, the preregistered held-out gate passes (10 statute families across 7 Titles exact; 16 across 11 with 5% tolerance), yet under one globally deployed error model 93.2% of held-out chapters fall below the informativeness floor, and a 2x2 factorial assigns that to calibration-rate transfer, not selection. The certificate is usable but fragile: deploy it per-chapter-calibrated or error-tolerant. Code, data products, and the audit trail, including one retracted claim, are released.

6. [Induction and Inquiry via Probabilistic Reasoning over Language and Code](https://arxiv.org/abs/2609.01815)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01815v1 Announce Type: new Abstract: How humans grow and maintain abstract knowledge from the sparse, streaming noisy data of experience is a longstanding challenge in cognitive science. Any computational account must satisfy at least three desiderata: It must be (1) data-efficient and compute-efficient, (2) capture gradations of uncertainty to support intelligent inquiry and information gathering, and (3) be flexible enough to mentally represent the endless range of concepts people can learn and think about. Here we introduce a computational model that captures these three properties, by encoding symbolic knowledge as mental programs that combine natural language with source code, and sequentially inferring mental programs using LLM-guided Bayesian learning algorithms. Across a range of behavioral studies this model successfully reproduces quantitative signatures of human inductive learning and active inquiry, such as anchoring, garden-pathing, and other effects. In contrast, pure LLMs and classic Bayesian models either fail at the underlying task, or do not reproduce human behavior, or succeed only at exorbitant computational cost. These results suggest that one way humans continually grow their knowledge is by mentally representing many hypotheses spanning language-like and program-like representations, then revising those hypotheses to approximate Bayesian updates, while a bottom-up neural mechanism (an LLM) makes inference both tractable and learnable.

7. [Architecting Conversational Data Systems for Stateless LLM APIs: The Hydration Proxy Pattern](https://arxiv.org/abs/2609.01834)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01834v1 Announce Type: new Abstract: As enterprise platforms transition to conversational reasoning interfaces, the stateless nature of LLM APIs creates an architectural gap. While statelessness enables horizontal scalability for AI providers, it forces client applications to manage the entire burden of conversational state and semantic memory. The work identifies the Hydration Proxy Pattern, an architecture that decouples session persistence from the reasoning engine. The framework ensures platform sovereignty over conversational data while enabling secure, multi-stage semantic grounding. We further propose the Context Stabilization Mandate to resolve the tradeoff between sovereign state management and KV caching.

8. [Belief-Calibrated Optimization: An Explicit World Model for Agentic Optimization](https://arxiv.org/abs/2609.01861)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01861v1 Announce Type: new Abstract: The performance of an LLM agent depends on the scaffold around a frozen model. A common way to improve that scaffold is to use a coding agent as an optimizer: it reads current scores and traces and iteratively edits the source, producing a new candidate each round. Each edit is chosen according to a belief about how the environment will respond: what went wrong, and which change should help. That belief is typically implicit. It lives in the coding agent's reasoning on the current call, or remains latent in its parameters, rather than as something written down. Later calls therefore see scores and traces, but they do not use that belief. We introduce Belief-Calibrated Optimization (BCO), a method that writes that belief down as a persistent in-context document and continually revises that document as new candidates are evaluated. The resulting document is a world model: the current account of how the environment responds to edits. Added to an otherwise standard loop, BCO reaches a higher train passrate than a matched control that lacks only the world model, on five benchmarks spanning memory QA, tool-use QA, code-as-action app agents, and terminal agents. The gap remains on every held-out split, which is not used to select the candidate. After a target-model swap, in which the frozen model is replaced and the scaffold is not, the selected BCO scaffold leads on the tasks we test, except where context-window overruns leave it unfinished. An offline ablation then asks whether that gap comes from what the world model says. A fresh predictor given the accumulated document forecasts how the environment will respond more accurately than predictors given either no document or a same-form copy whose content has been falsified. The comparison indicates that the document carries reusable information in its content, not only in its form.

9. [Epistemic Sybil Resistance: Multiplying AI Agents Without Multiplying Evidence](https://arxiv.org/abs/2609.01873)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01873v1 Announce Type: new Abstract: Multi-agent AI systems improve inference by spawning agents and synthesizing reports. But another agent is not another observation: apparently independent reports may descend from the same evidence, and genuinely independent evidence can produce nearly identical reports. We formalize this as an epistemic Sybil problem. A report Z is an epistemic Sybil extension relative to reports R when I(Theta; Z | R) = 0. No report-only aggregator can generally distinguish replication from independent corroboration: identical reports can warrant different posteriors under unobserved ancestry. A Gaussian shared-root model shows common ancestry does not imply complete redundancy. Repeated extraction adds information toward a source-level ceiling, and correlated extraction errors, which a shared base model can induce among independent agents, lower that ceiling further. We test these predictions with more than 20,000 controlled LLM-agent report and extraction calls on synthetic evidentiary documents. Holding one evidence root fixed while report multiplicity rises from 1 to 32 collapses naive posterior coverage from 0.940 to 0.263. Holding report count fixed while evidence-root multiplicity rises from 1 to 16 closes the gap, and the aggregators are statistically indistinguishable at k = 16. The agent's replicate extraction errors are correlated (gamma_cal = 0.719, estimated out of sample), and a correlated-extraction aggregator restores calibration accordingly. A controlled manipulation isolates representation similarity from evidential ancestry. It changes a report-space deduplication mechanism's mean inferred cluster count by 1.425 (95% CI [1.363, 1.485]), whereas a fourfold change in true ancestry changes it by only 0.040 ([-0.045, 0.120]). Collective inference should therefore track evidential ancestry and dependence, not agent or report multiplicity or similarity.

10. [WMLLM: Self-Evolving Optimization Agents via Predict-Then-Act World Modeling](https://arxiv.org/abs/2609.01608)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01608v1 Announce Type: new Abstract: Black-box optimization problems remain challenging because of large, weakly structured, and high-dimensional search spaces. Existing methods often suffer from poor sample efficiency because they rely on direct candidate generation or trial-and-error refinement. A natural way to improve search efficiency is to use world modeling, which can help identify promising optimization directions before costly evaluation. Large language models can predict the outcomes of these candidates with nontrivial accuracy because of their implicit knowledge. Motivated by this observation, we propose WMLLM, a self-evolving optimization-agent framework based on predict-then-act world modeling. The agent first predicts promising directions and then acts to generate candidates. Combined with agentic multi-turn refinement, population-based search, and reinforcement learning, WMLLM refines both its implicit world model and its optimization strategy during search. Experiments on black-box optimization tasks, especially multi-objective molecular optimization, show that WMLLM improves sample efficiency and final optimization performance. On the multi-objective molecular optimization benchmark, WMLLM achieves state-of-the-art results under a limited evaluation budget.

11. [Mechanism-Resolved Interface Momentum Transfer in Immersed-Boundary Lattice Boltzmann Simulations](https://arxiv.org/abs/2609.02298)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02298v1 Announce Type: cross Abstract: Immersed-boundary lattice Boltzmann (IB-LBM) simulations of cylinder and particle flows are usually compared by ranking boundary-enforcement schemes, kernels, and collision models. Such comparisons can obscure the mechanism that controls each response. Here, canonical fixed-cylinder, oscillating-cylinder, and sedimenting-particle cases are used as controlled probes of Eulerian-Lagrangian interface momentum transfer. For prescribed bodies, differences among direct forcing (DF), multi-direct forcing (MDF), and distribution-function correction (DFC) are most clearly discriminated by local no-slip fidelity rather than by a universal drag ranking. For DFC, the kernel-dependent drag-coefficient ranking reversal between the hat and Peskin 4-point kernels is associated with the spatial redistribution of the marker-resolved correction and the resulting near-boundary slip and pressure deviation, rather than the total correction magnitude alone. For sedimenting particles, single-particle settling provides a moving-body baseline, whereas two-particle differential-density wake-interaction sedimentation shows the wake-exposed light particle to be comparatively more sensitive to the explicit internal-mass correction in the force evaluation, a configuration-dependent, finite-window moving-boundary closure response. Targeted two-relaxation-time (TRT) and central-moment multiple-relaxation-time (CM-MRT) collision controls remain secondary to the boundary and closure mechanisms within the tested regimes (prescribed-body comparisons at Re <= 200, two-dimensional, and the reported moving-particle cases). The resulting picture replaces a universal scheme ranking with a mechanism-resolved interpretation of IB-LBM interface momentum transfer.

12. [HiPoly: a hierarchical polymer-native AI framework for property prediction and generative design](https://arxiv.org/abs/2609.02746)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02746v1 Announce Type: cross Abstract: Polymeric materials are central to modern technologies, with applications ranging from energy to health and transportation. Although AI has made significant advances in materials discovery, the hierarchical structure of polymers across multiple length scales makes them inherently difficult to represent in a unified and physically meaningful way. Here we introduce HiPoly, a polymer-native AI framework that processes complete polymer descriptions through a three-level hierarchical graph architecture built on the G2RINS representation. HiPoly encodes stochastic inter-monomer connectivity, composition, and molecular weight directly within its architecture, using physically motivated design principles that mirror the multi-scale nature of polymeric systems. The framework establishes an end-to-end AI-driven workflow from experimental formulation data to property prediction, generative molecular design, and physics-based validation through molecular simulations, all unified by a single polymer representation. We demonstrate state-of-the-art prediction accuracy for thermophysical properties of multi-component polymer systems, with ablation studies confirming that each hierarchical design choice contributes independently to model performance. As an example, the generative design pathway is applied here to the discovery of sustainable alternatives to persistent fluorinated polymers, where it is possible to identify and independently validate PFAS-free candidates with target surface-energy properties. This work demonstrates how polymer-native AI can accelerate discovery by linking representation, prediction, and design across complex polymer chemistries.

13. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.83; Date: 2026-09-03T13:48:54Z; Popularity: 2,827 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

14. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

15. [ATV Big Air Tour turned 3 days of work into 3 hours with ChatGPT](https://openai.com/index/atv-big-air-tour)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 02 Sep 2026 12:00:00 GMT
   - Summary: ATV Big Air Tour uses ChatGPT Work to speed up marketing, merchandising, and more. It even turned merchandise photos into an inventory website in 15 minutes.

16. [Path to Astra: critical capabilities and frontier safeguards](https://openai.com/index/path-to-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 13:00:00 GMT
   - Summary: Astra is the first OpenAI model to meet the Critical cybersecurity capability threshold under the Preparedness Framework, with stronger safeguards for release.

17. [Healthcare organizations can now connect EHR and additional industry data to ChatGPT](https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 12:00:00 GMT
   - Summary: ChatGPT can now connect to trusted healthcare data, helping clinicians securely access patient context, medical research, and more.

18. [How law firm Gilbert + Tobin governs and scales AI with OpenAI](https://openai.com/index/gilbert-tobin)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 01:00:00 GMT
   - Summary: See how Gilbert + Tobin combines CEO-led commitment, rigorous governance, and human accountability to scale ChatGPT Enterprise and Codex across the firm.

19. [OpenAI supports California’s bill to advance youth AI safety](https://openai.com/index/supporting-california-bill-advance-ai-youth-safety)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 31 Aug 2026 07:00:00 GMT
   - Summary: OpenAI supports California SB 1119, advancing strong, age-appropriate AI safeguards for teens while preserving opportunities to learn, create, and explore.

20. [Polimill builds Japan's next-generation public AI infrastructure](https://openai.com/index/polimill)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 31 Aug 2026 07:00:00 GMT
   - Summary: Polimill uses OpenAI GPT models and Codex to help municipalities search and use administrative knowledge while accelerating development.

21. [A milestone in expanding access to AI](https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 31 Aug 2026 04:00:00 GMT
   - Summary: ChatGPT Ads reaches $1 billion in annualized revenue run rate and expands globally, supporting broader access to AI through free and affordable options.

22. [Our decision on Cursor following its acquisition by SpaceX](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 28 Aug 2026 06:00:00 GMT
   - Summary: Our decision to wind down our contract providing OpenAI models to Cursor following its acquisition by SpaceX.

23. [Supporting Thailand’s next generation of AI startups](https://openai.com/index/supporting-next-generation-ai-startups-thailand)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 28 Aug 2026 02:00:00 GMT
   - Summary: OpenAI and Thailand’s MHESI launch an eight-week accelerator helping 10 health, wellness, and education startups turn AI prototypes into trusted products.

24. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

25. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

26. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

27. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

28. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

29. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

30. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

31. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

32. [Real-Time Intelligence with IBM Time Series Models on Confluent](https://huggingface.co/blog/ibm-research/real-time-intelligence)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 02 Sep 2026 13:49:14 GMT

33. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

34. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

35. [The Open ASR Leaderboard Adds Its First Global South Language](https://huggingface.co/blog/open-asr-leaderboard-global-south)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 GMT

36. [Training and Finetuning Multi-Vector Embedding Models with Sentence Transformers](https://huggingface.co/blog/train-multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT

37. [Granite 4.2 LLMs: How They&apos;re Built](https://huggingface.co/blog/ibm-granite/granite-4-2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 15:14:14 GMT

38. [When Does Information Sharing Improve Decentralized Discovery? Aggregation, Independent Rescue, and Equilibrium Selection](https://arxiv.org/abs/2609.01814)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01814v1 Announce Type: new Abstract: Information sharing can improve a pooled estimate while eliminating independent rescue actions. This paper separates those effects in exact finite discovery models. A centralized action-budget profile shows that equal one-person accuracy can coexist with different portfolio values. Under a registered incremental-sharing protocol, a sharing step improves discovery exactly when pooled residual error contracts faster than an independent rescue attempt. Exact bounded registries exhibit compression, aggregation, neutral curves, and a bounded zero mixed class. In a two-agent Bayesian game with a hidden mixture of common and independent signal sources, the registered selected equilibrium yields a strict positive sharing interval at signal accuracy 3/5, while alternative equilibria show that the result is selection-dependent rather than universal. The models are synthetic and finite; no human or organizational data are used.

39. [SSAKG 2.0: An Open-Source Package for Structural Associative Sequence Memory and Context-Based Retrieval](https://arxiv.org/abs/2609.01849)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01849v1 Announce Type: new Abstract: This article presents SSAKG 2.0, an open-source software package for constructing and operating Structural Sequential Associative Knowledge Graphs (SSAKGs). An SSAKG represents objects as graph vertices and ordered sequences as structural patterns of graph connections. The resulting sparse graph is used as an associative memory in which complete sequences can be reconstructed from a partial, unordered context. Version 2.0 introduces new algorithms that exploit individual bits of computer memory to efficiently search graph connections. The package is implemented in Python, while performance-critical graph operations are implemented in C and exposed through a Python interface. This hybrid implementation provides a flexible high-level programming environment while reducing the memory and computational overhead associated with large sparse graphs. The algorithms were evaluated using randomly generated numerical sequences, sequences derived from sentences in the NLTK corpus, and mRNA sequences. The experiments demonstrate the ability of the package to store and reconstruct sequences from partial contexts and provide a basis for evaluating the effects of graph density, sequence length, and memory size on retrieval performance. SSAKG 2.0 is distributed under the Apache 2.0 open-source license. The package includes documentation and reproducible examples and is publicly available through GitHub and the Python Package Index (PyPI).

40. [The Memory Trust Gap: Capability-Dependent Failures in Persistent-Memory Agents](https://arxiv.org/abs/2609.01852)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01852v1 Announce Type: new Abstract: Persistent memory supports personalized agents, but a stale stored fact can override current authoritative evidence without warning. We study when this harm begins as model capability changes. We evaluate a frozen, closed-set, action-scored benchmark with 2 suites that represent 2 different meanings of "no memory" (a Benefit suite, unsolvable without the stored fact, and a Safety suite, in which an authoritative tool always holds the correct value), on a same-family model-size series (Qwen3 0.6/1.7/4/8B). The Memory Trust Gap reflects over-trust rather than confusion. In the Benefit suite, models answer with the stale value 0.92-1.00 of the time at every scale. In the Safety suite, harm below the no-memory baseline under the trap conditions ($\Delta_{\mathrm{mem}}$) is capability-gated, with the larger models collapsing most once a stale note is made to look current. In a $2\times2\times2\times2$ factorial, which feature triggers over-trust depends on both the feature and model scale. Removing a label amplifies over-trust at every size, and a recency feature (stale dated newer) fools the larger models harder. Source authority is weak and scale-flat, and position changes from positive to negative across the Qwen3 model-size series. We confirm these scale interactions with direct cross-size contrast tests rather than overlapping per-model intervals. Mitigation is likewise capability-dependent: exposing metadata improves accuracy for the capable models, but only pre-resolving the conflict restores accuracy for the 2 smaller checkpoints. The same pattern appears on the capable models in an independent Llama-Instruct model-size series and on 2 external datasets (RGB, MisBench). A framing control finds no consistent advantage for the memory label: at the 3 smaller scales, models trust a stale document more than a stale memory; at 8B, the difference is not significant.

41. [DiDrive: A Risk-Aware Hierarchical Diffusion Framework for Safe Offline Reinforcement Learning in Autonomous Driving](https://arxiv.org/abs/2609.01609)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01609v1 Announce Type: new Abstract: While diffusion models effectively capture multimodal behavioral priors for autonomous driving, offline reinforcement learning (RL) policies remain susceptible to distribution shift, heavy-tailed risk signals, out-of-distribution (OOD) action generation, and high-dimensional state redundancy. To address these challenges, we propose DiDrive, a distribution-guided offline diffusion framework featuring two synergistic components: the Risk-Aware Hierarchical Diffusion (RHDif) architecture and the 3DICE policy optimization paradigm. In the state space, RHDif utilizes a low-level risk-gated encoder and a high-level contextual modulator to filter environmental redundancy and focus on safety-critical threats. In the action space, 3DICE mitigates OOD overestimation and gradient oscillation through in-sample calibrated guidance, spatiotemporal optimization, and ensemble-based candidate ranking. Evaluations on the CARLA benchmark demonstrate DiDrive's superiority over baselines like IQL, CQL, and Diffusion-QL, particularly in complex, high-density traffic scenarios with 60 vehicles, where it achieves an 85% success rate and a 4295.68 average reward, providing a robust pathway for safe autonomous driving decision-making.

42. [Tri-Band Channel Measurement-Enabled Multi-Layer Digital Twin for Terahertz Wireless Data Centers](https://arxiv.org/abs/2609.01699)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01699v1 Announce Type: new Abstract: The rapid growth of AI computing has driven increasing demands for flexible and high-capacity data-center interconnections. Owing to its ultra-wide bandwidth and high spatial reuse capability, terahertz (THz) communication has emerged as a promising solution for future wireless data centers, while digital twins (DTs) enable efficient wireless planning and real-time optimization. In this work, a measurement-driven multi-layer DT framework is proposed for THz wireless data centers, where the physical, channel, evaluation, and manipulation layers are progressively constructed from bottom to top. First, extensive channel measurements are conducted at 140, 220, and 300 GHz to characterize frequency-dependent propagation behaviors. Based on the tri-band measurements, a measurement-calibrated physical twin is established by jointly optimizing the geometry, material, antenna, and hybrid propagation models. On top of the physical twin, a line-of-sight (LoS)-aware implicit neural field is developed to construct an AI channel twin for efficient channel reconstruction. The proposed AI twin learns location-dependent channel statistics from the calibrated twin, enabling real-time prediction of received power and LoS probability. Building upon the reconstructed channel field, a system-level evaluation layer is derived to analyze coverage and interference for both AP-to-rack and rack-to-rack communications. Experimental results show that the proposed AI twin achieves lower power reconstruction error than existing neural-field baselines while maintaining real-time inference capability. Moreover, the ceiling-mounted AP deployment achieves over 90% coverage under a 10 dB signal-to-interference-plus-noise ratio (SINR) threshold, demonstrating the effectiveness of the proposed DT framework for THz wireless data-center planning and optimization.

43. [RBMD 2.0: Random batch molecular dynamics package for large-scale simulations on multi-GPU architectures](https://arxiv.org/abs/2609.02694)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02694v1 Announce Type: new Abstract: Large-scale molecular dynamics simulations of particle systems on multi-GPU architectures are often constrained by the computational and communication costs of nonbonded force evaluation. We present RBMD 2.0, a major new release of the random batch molecular dynamics package designed for cross-node multi-GPU simulations of large-scale systems. It combines the improved random batch Ewald method with three-dimensional domain decomposition and ghost-particle communication to accelerate multi-GPU nonbonded force evaluation, while the DTK CUDA framework facilitates portability across heterogeneous accelerator architectures. Numerical experiments on multiple benchmark systems demonstrate both the accuracy and efficiency of simulations with RBMD 2.0. For simulations involving up to hundreds of millions of particles across multiple accelerator devices, one achieves speedups ranging from severalfold to approximately two orders of magnitude in nonbonded force evaluation while exhibiting over $97.5\%$ weak-scaling behavior. These results demonstrate the promising nature of RBMD 2.0 as a computational engine for future exascale molecular dynamics simulations.

44. [A meshfree solver for coupled bulk-surface problems with self-organizing surface geometry](https://arxiv.org/abs/2609.02489)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02489v1 Announce Type: cross Abstract: In many systems, the interaction between a deformable surface or interface and the surrounding bulk fluid is coupled with intrinsic spatiotemporal dynamics within the moving surface. Examples include tumor growth, biological tissue morphogenesis, cardiac mechanics, multi-phase surfactant chemistry, additive manufacturing, clothing wear-and-tear, and reactive combustion flows. Solving such problems requires both geometric computing algorithms to track and resolve the surface and numerical methods to solve the coupled governing equations in the surface and the surrounding bulk phase. Here, we present a fully meshfree numerical solver for such coupled bulk-surface problems with deformable interfaces. The presented solver tracks the surface implicitly, solving for the dynamic surface geometry based on stress balance coupled to surrounding fluid phases. We show convergence for a mass-conserving case on a growing sphere and solve bulk-surface problems with incompressible Navier-Stokes fluids coupled to in-surface nonlinear reaction-diffusion dynamics. Finally, we show a model of biological morphogenesis, solving simultaneously for the dynamic surface shape and the fields on the curved surface with two-way coupling.

45. [A fast summation method for the DFT-D3 dispersion correction](https://arxiv.org/abs/2607.15103)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2607.15103v2 Announce Type: replace Abstract: The DFT-D3 dispersion correction is routinely added to machine learning force fields (MLFFs) trained on dispersion-deficient functionals such as PBE. Its environment-dependent pair coefficients, however, break the atom-centered separability that fast summation methods require, forcing practitioners either to truncate D3 or to accept a substantial slowdown. We introduce FourierD3, a method that uses a functional low-rank decomposition to restore this separability and enable particle-mesh evaluation in $O(N\log N)$ time without a real-space cutoff on the dispersion sum.

46. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.80; Date: 2026-09-03T09:44:48Z; Popularity: 1,799 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

47. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-30T00:52:00Z; Popularity: 482 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

48. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-01T09:55:44Z; Popularity: 359 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

49. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-09-03T12:04:30Z; Popularity: 238 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

50. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

51. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

52. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

53. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

54. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

55. [CliffRank: A Dual-Branch Framework for Activity-Cliff Ranking Prediction](https://arxiv.org/abs/2609.01673)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01673v1 Announce Type: new Abstract: Activity-cliff ranking remains difficult because local structural changes can cause large activity differences, while high-quality data that resolve the underlying mechanisms remain limited. To use available activity labels more effectively, we combine absolute-activity regression with ranking-consistency learning. CliffRank trains two parallel predictors with mean squared error, a thresholded listwise loss, and Pairwise Preference Consistency (PPC), which aligns relative ordering in the preference-probability space. On three antimicrobial peptide datasets, CliffRank with ESM2-t12 achieved the highest mean Spearman correlation of 0.5393 and mean Recall@50 of 21.4, although the leading method varied across individual datasets. On three small-molecule datasets, CliffRank with PNA, where PPC was activated after 120 epochs, achieved the highest mean Spearman correlation of 0.6890, while its mean Recall@50 of 30.4 matched that of ACANet-PNA. The PPC results also define its practical limits. Asymmetric initialization improved the MolCLR-GIN averages but did not improve every target. For PNA without pretrained weights, delayed PPC improved selected metrics, but no schedule was best for both mean Spearman correlation and mean Recall@50. Future work should evaluate more targets and antimicrobial peptide systems, develop adaptive PPC schedules, and incorporate protein or membrane context when available.

56. [Sim2Signal: Sim-to-Real Benchmarks for Traffic Signal Control](https://arxiv.org/abs/2609.01676)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01676v1 Announce Type: new Abstract: Reinforcement learning achieves strong traffic signal control performance in simulation, yet policies trained in simulators often fail once deployed in the real world, a failure known as the Sim-to-Real gap. When RL is applied to traffic signal control, this gap arises from several sources: sensing, action execution, traffic dynamics, and the control objective. Their relative impact and the reliability of existing Sim-to-Real mitigation methods remain insufficiently understood, and the field lacks a standard benchmark for systematically measuring the gap and evaluating mitigation methods. We present Sim2Signal, a benchmark that decomposes the Sim-to-Real gap into observation, action, transition, and reward gaps, corresponding to mismatches in the four components of the underlying MDP, and induces each gap in isolation under a shared protocol. We evaluate 18 mitigation methods on 2 base controllers, across 33 gap settings and 10 calibrated networks built from 5 real-world locations. We find that direct transfer consistently degrades performance across all four gap sources, but the severity of the degradation does not predict the effectiveness of mitigation. Instead, mitigation effectiveness depends strongly on the network and gap setting: outside the action gap, a method that helps in one case may fail in another. The most effective methods generally estimate what the gap changes, rather than make the policy insensitive through domain randomization or invariant representations. Our code is available at https://github.com/Red-Pheonix/Sim2RealTSCBenchMark

57. [A Survey on Self-Improving Test-Time Intelligence: Feedback-Driven Adapting, Learning, and Scaling at Inference](https://arxiv.org/abs/2609.01679)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01679v1 Announce Type: new Abstract: The ability of AI systems to improve their behavior during deployment is becoming increasingly important. As inference moves beyond the static execution of a fixed trained model, a growing body of work studies how models can refine their behavior on the fly by exploiting test-time information and additional computation. These developments have largely evolved along two directions: methods that modify the model's state using test-time signals, and methods that improve predictions through extra inference-time resources such as more sampling and tool use. However, these directions are often studied in separate communities with different terminology, making their connections harder to see. In this survey, we present feedback-driven Test-Time Intelligence (TTI) as a unified perspective for understanding such deployment-time improvement. We use this view to relate test-time adaptation, test-time learning, and test-time scaling, highlighting both their distinctions and their growing overlap in hybrid systems. This unified framework helps connect previously fragmented ideas and provides a clearer conceptual foundation for studying inference-time self-improvement. We review major methodological paradigms, representative applications, and open challenges across vision, language, multimodal learning, generative models, robotics, and healthcare. Our goal is to provide a coherent foundation and research roadmap for the study of self-improving AI systems at test time.

58. [Reinforcement Learning and Rule-Based Peer-to-Peer Pricing in Residential PV-BES Communities](https://arxiv.org/abs/2609.01680)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01680v1 Announce Type: new Abstract: This paper compares rule-based and learning-based pricing mechanisms for peer-to-peer (P2P) electricity trading in residential photovoltaic communities. The rule-based benchmarks comprise bill-sharing as an ex post allocation mechanism, the mid-market rate, and supply-demand-ratio pricing. The reinforcement-learning (RL) formulation is implemented through a Deep Q-Network and evaluated under multiplier-based and learnable SDR-shaped pricing, with a fixed-parameter SDR variant as a non-learning control. Performance is assessed through community savings together with complementary financial and operational indicators. In the base PV-only configuration, the rule-based benchmarks outperform the best RL policy. With battery energy storage, evaluated for the RL policies only, community savings under the best RL policy increase from EUR 734.23 to EUR 978.52. Across the learning-based modes and in both configurations, SDR-shaped pricing outperforms the multiplier-based parameterization considered. The results indicate that rule-based pricing remains highly competitive wherever the two families are compared directly, and that storage substantially improves the learning-based outcomes under this accounting, while the distribution of benefits remains heterogeneous across households.

59. [Learning a general class of admissible multi-species collision operators from molecular dynamics](https://arxiv.org/abs/2609.01845)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01845v1 Announce Type: new Abstract: We develop a structure-preserving, data-driven collision operator for spatially homogeneous multi-species kinetic systems from molecular dynamics (MD). The operator consists of diagonal self-collision blocks and ordered off-diagonal cross-species blocks to describe intra- and inter-species momentum and energy exchange. Within a local and point-wise identifiable kernel class, we develop the necessary and sufficient condition for the admissible kernel class satisfying the conservation laws, the H-theorem, and the frame indifference. Unlike the classical Landau operator, the off-diagonal kernels are not restricted to be symmetric under permutation of the two velocity variables. This unique structural freedom captures the distinct responses of different species to unresolved correlations and many-body effects arising from micro-scale particle interactions. The equivalent parameterizable kernel formalization enables us to learn a generalized data-driven collision operator directly from MD, where the low-rank tensor representations and random sampling are used to achieve efficient kernel training and numerical simulation. Numerical experiments show that the learned operator accurately predicts transport coefficients and the non-equilibrium relaxation, while retaining discrete conservation and entropy production. In particular, it captures plasma kinetics in the moderately coupled regime, where the predictions of both the Landau and the data-driven model restricted to velocity-permutation symmetry show significant discrepancies.

60. [Physics-informed Learning for Orbital Uncertainty Propagation with Error Bounds](https://arxiv.org/abs/2609.01881)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01881v1 Announce Type: new Abstract: The Fokker-Planck partial differential equation (FP-PDE) governs uncertainty evolution in stochastic dynamical systems. In orbital dynamics, solving the FP-PDE is challenging because of nonlinear motion, high-dimensional states, and large space-time domains. We develop a physics-informed neural network (PINN) approach that approximates the FP-PDE solution as a single space-time probability density, while also quantifying its worst-case approximation error. This approach is, in principle, independent of the choice of state coordinates and neural network architecture. Specifically, to enforce probability density function (PDF) properties into the neural network, we design a Physics-informed Gaussian mixture model (PINN-GMM). Then a companion error PINN learns the dynamics of the approximation error and yields time-dependent bounds that define an ambiguity set of PDFs. This ambiguity set enables rigorous computation of upper and lower bounds on event probabilities through tractable linear programs. Numerical studies on illustrative 1D examples and several 4D--6D orbital test cases demonstrate accurate uncertainty propagation, correct and informative error bounds, and improved reliability over common uncertainty-propagation baseline methods (Gaussian approximation, unscented transform, and Gaussian mixture model). Constructing the PINN-GMM requires offline training, making it costlier than the baseline approximations; once trained, however, a single forward pass returns the density at any time in sub-millisecond time $(0.16~\mathrm{ms}$ in our implementation).

61. [Learning Spectral-Like Mesh-Free Discretisations](https://arxiv.org/abs/2609.02833)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02833v1 Announce Type: new Abstract: Meshfree methods such as smoothed particle hydrodynamics (SPH) with kernel corrections, radial basis function-generated finite differences (RBF-FD), and the local anisotropic basis function method (LABFM) construct discrete differential operators by imposing polynomial consistency on a local stencil. For stencils containing more nodes than there are consistency constraints, the resulting linear system is underdetermined, and the remaining degrees of freedom are fixed implicitly by the choice of kernel, basis preconditioning, or a minimum-norm condition. Polynomial consistency constrains the operator only in the low-wavenumber limit, and no part of the construction selects for accuracy at the wavenumbers where fine-scale content resides. We introduce Spectral-like Neural Discretisation (SpeND), in which the choice of those degrees of freedom is cast as a learning problem: stencil weights are parametrised by a neural network conditioned on the local node geometry, trained to approximate the modal response of a spectral operator over the resolvable band. A hard-constrained projection layer maps the network output onto the affine subspace of consistent weights, so that polynomial consistency holds exactly by construction rather than as a penalty. Training is self-supervised and physics-agnostic, requiring no reference solutions; the objective minimises dispersion and dissipation error over a prescribed band-limited function space. Modal analysis on disordered two-dimensional node distributions shows that the learned fourth-order operator follows the exact response over a substantially wider band than either explicit LABFM at equal stencil size or fourth-order finite differences on a structured grid, whilst recovering the expected fourth-order convergence rate under refinement.

62. [A Wannier-first approach for extended chiral systems](https://arxiv.org/abs/2609.02524)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.02524v1 Announce Type: cross Abstract: We present a real-space formulation of DFT for extended systems in which localized Wannier-like functions are constructed directly from localized Gaussian basis functions without explicitly computing canonical Bloch-like states during the self-consistent cycle. Building on the formalism of Pederson and Lin [Phys. Rev. B \textbf{35}, 2273 (1987)], a variational set of Wannier-like functions is generated self-consistently within a finite Wannier domain and used to construct the charge density, electrostatic potential, and per cell total energy of the extended system. The occupied space can be determined entirely from the Wannier-like functions. Electronic band structures can be recovered in a post-processing step by solving the full Hamiltonian in a Bloch-like basis constructed from Gaussian orbitals. A key feature of the method is that it can incorporate combined translation--rotation, or screw, symmetries, enabling efficient simulations of chiral and helical systems with finite twist angles at essentially the same computational cost as systems described by pure translational symmetry. The approach is validated through calculations on linear and twisted $\mathrm{{-}C{\equiv}C{-}}$ and $\mathrm{{-}Li{-}F{-}}$ chains, as well as graphene, where total energies and band structures show excellent agreement with reference periodic calculations. To illustrate the ability of the method to treat three-dimensional systems, it is further applied to AA graphite, in which carbon atoms in adjacent graphene layers are aligned directly above one another, as well as helically stacked AA graphite structures. The Wannier-first framework provides a practical route for treating extended systems with nontrivial translational, rotational, and screw symmetries, and provides a natural foundation for the implementation of orbital-dependent functionals such as the Perdew--Zunger self-interaction correction.

63. [Modeling Reactions on the Solid-Liquid Interface With Next Generation Extended Lagrangian Quantum-Based Molecular Dynamics](https://arxiv.org/abs/2502.02429)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 03 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2502.02429v4 Announce Type: replace-cross Abstract: We present a series of simulations of the oxygen reduction reaction (ORR) using a novel framework for atomistic simulations of surface catalysis under electrochemical bias. The framework makes use of quantum-mechanical extended Lagrangian Born-Oppenheimer molecular dynamics (XL-BOMD) simulations, which provide the speed and accuracy required for explicit atomistic treatment of both electrode and electrolyte. Simulations of solvated O$_2$ near nitrogen-doped graphene (NG) were performed to gain insight into the ORR, and different mechanisms were observed, depending on the applied bias. Under higher bias the ORR occurred by an outer-sphere mechanism, without adsorption of O$_2$ to NG. In this mechanism, electron transfer between the catalyst and the O$_2$ was mediated by the solvent. Under lower bias the ORR occurred by an inner-sphere mechanism involving adsorption of O$_2$ to NG, leading to direct electron transfer. Our extensive, all-atom quantum-mechanical molecular dynamics simulations also show clear differences between the kinetics of the ORR on this ideally polarizable electrode and commonly used kinetic theories, leading to new insights regarding mechanistic changes with varied overpotentials. Combining quantum accuracy with explicit solvation and electrostatic potential bias, XL-BOMD opens a route to predictive, atomistic insight into electrocatalytic processes, as demonstrated with the ORR.

64. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

65. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.74; Date: 2026-09-03T14:23:41Z; Popularity: 738 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

66. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.20; Date: 2026-09-02T02:03:59Z; Popularity: 203 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

67. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-03T04:26:07Z; Popularity: 119 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

68. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

How AI-native companies turn workflows into operating capability

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://openai.com/index/ai-native-company-workflows

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
