# Daily signal sidecar - 2026-08-13

## Selected Signal

- Title: From Monolithic to Modular: Segment-level Automatic Prompt Optimization
- URL: https://arxiv.org/abs/2608.11219
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: From Monolithic to Modular: Segment-level Automatic Prompt Optimization
- Primary source: https://arxiv.org/abs/2608.11219
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
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

Total candidates reviewed after duplicate-source filtering: 70

1. [From Monolithic to Modular: Segment-level Automatic Prompt Optimization](https://arxiv.org/abs/2608.11219)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11219v1 Announce Type: new Abstract: Automatic Prompt Optimization (APO) often rewrites prompts monolithically, which can improve one behavior while degrading others. We present SAPO, a segment-level APO method that decomposes prompts into role, context, tasks, and output format, then applies targeted improvements based on top-5 and bottom-5 examples. The optimization loop uses one LLM with static meta-prompts and structured outputs for segmentation, weakness analysis, and candidate generation. We describe a train/validation protocol and a two-stage generation process: (1) segment-level diagnosis and recommendation extraction, (2) candidate synthesis constrained by weak/strong segment signals. Using the evaluation setup across SQuADv2, TweetEval, XSUM, CommonGen, and GSM8K on GPT-3.5-Turbo and GPT-4o-mini, SAPO achieves the best average score against Zero-shot and strong APO baselines including APE, OPRO, EvoPrompt, GEPA, and StraGO.

2. [A Conceptual Framework for Refining Influence Knowledge from Simulation Evidence in Cyber-Physical Systems](https://arxiv.org/abs/2608.11221)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11221v1 Announce Type: new Abstract: Cyber-physical systems (CPS) are typically developed by multiple stakeholders who produce artefacts tailored to their specific domains of expertise. The behaviour of these systems emerges from the interaction between those artefacts and their operational environment. Simulation and co-simulation have become essential approaches for analysing CPS behaviour and, through simulation campaigns, developers can explore system responses under changing conditions, including interactions with the environment. However, the lack of details and understanding of some environmentmediated interactions (typically the ones beyond direct sensing and actuation), which remain unmodelled due to their complexity, a lack of time, or a lack of domain experience, hinders the proper comprehension and exploitation of simulation results. To address these limitations, we propose a conceptual framework leveraging the novel concept of Influences to support the iterative and incremental refinement of simulation campaigns and deepen the understanding of the system behaviour. We demonstrate the proposed approach through a case study involving a mobile robot implemented using Simulink/Gazebo co-simulation.

3. [Reinforcement learning with reputation-based adaptive exploration promotes cooperation](https://arxiv.org/abs/2604.08103)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2604.08103v2 Announce Type: replace Abstract: Reinforcement learning provides a framework for studying how individuals adjust their behavior through repeated interaction and feedback in social dilemmas. In Q-learning, exploration controls how often agents choose actions other than those favored by their current learned Q-values. Yet existing models usually treat the exploration rate as a constant parameter. In systems with social evaluation, however, trial-and-error behavior carries different costs and opportunities for agents with different reputations, making exploration dependent on social standing rather than uniform across agents. Herein, we develop a spatial prisoner's dilemma model in which Q-learning agents adapt their exploration rates according to local reputation differences, while reputation is updated through an asymmetric, state-dependent rule. Results show that adaptive exploration and asymmetric reputation updating each promote cooperation, but their combination produces a stronger reinforcing effect than either mechanism alone. Low-reputation agents explore more and can recover reputation through cooperation, while high-reputation agents explore less and avoid reputation losses caused by defection. This mechanism also reorganizes cooperation in space, producing a stable checkerboard-like coexistence at intermediate reputation concern. In addition, cooperation is most vulnerable at intermediate baseline exploration rates, whereas stronger asymmetric reputation updating mitigates this exploration-induced disruption. These results suggest that reputation can act not only as a record of past behavior, but also as a dynamic signal that regulates exploratory behavior during learning and thereby stabilizes cooperation.

4. [Daybreak models are now available on AWS](https://openai.com/index/daybreak-models-are-now-available-on-aws)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 11 Aug 2026 10:00:00 GMT
   - Summary: OpenAI and AWS are making Daybreak cybersecurity capabilities available through Amazon Bedrock to support enterprise security workflows.

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

10. [Dynamic Governance of Multi-LLM Agent Systems for Collaborative Conversational Outcomes](https://arxiv.org/abs/2608.11207)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11207v1 Announce Type: new Abstract: When two LLM agents with structurally opposed objectives interact across multiple turns, the absence of a shared goal function produces not competition but collapse: the visitor capitulates, the site agent stops varying its approach, and the conversation terminates without achieving either agent's stated objective. This paper asks whether a control-theoretic governance layer can substitute for that missing goal function. The Experience Orchestrator (EO) addresses this in a simulated financial services environment where a site agent guides a visitor toward advisor contact while the visitor maintains psychologically realistic resistance. EO governs the joint trajectory through three mechanisms: a Contextual Bandit (CB) that selects content arms calibrated from real-world web analytics, a PID controller that enforces behavioral consistency via dynamic schema constraints, and a POMDP belief tracker that maintains a probabilistic model of visitor intent. Across 60,000 simulations, EO achieves a +32 percentage point lift in high-intent advisor contact rate (78.1% vs. 46.1% over a naive LLM control), with CB variant selection accounting for 97% of between-factor outcome variance -- confirming that the governance policy, not environmental initial conditions, determines where trajectories end up. Persona-level analysis reveals two distinct regimes: for visitors with no natural inclination toward conversion, the governance layer is the difference between a functional system and a non-functional one; for visitors already near alignment, a naive LLM's empathetic defaults are largely sufficient. All findings are conditional on LLM-to-LLM simulation. The PID controller has not been calibrated against real human unpredictability, and validating EO on live traffic is the critical next step.

11. [A Forced-Structure Reduction and Verifiable Bounds for Conway's 99-Graph](https://arxiv.org/abs/2608.11211)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11211v1 Announce Type: new Abstract: Conway's 99-graph problem asks whether a strongly regular graph with parameters $\mathrm{srg}(99,14,1,2)$ exists. We report a systematic, fully reproducible attack by an autonomous AI research agent, scored under the track's partial-credit metric. Our verifiable contributions are: (1) an exhaustive proof that no circulant graph on $\mathbb{Z}/99$ satisfies more than $3366/4950=68.0\%$ of the constraints ($33$ of $49$ difference-classes), with the same ceiling for the other abelian group of order $99$; (2) a forced-structure reduction: $\lambda=1$ makes each neighbourhood a perfect matching and $\mu=2$ puts the outer vertices in bijection with non-matched neighbour-pairs, collapsing existence to a $12$-regular graph on $84$ vertices, encoded for CP-SAT and validated by recovering the unique $\mathrm{srg}(9,4,1,2)$; (3) a validated prescribed-automorphism orbit-existence framework (fixed-point-free and single-fixed-point actions, checked on $\mathrm{srg}(9,4,1,2)$ and the Paley graph $\mathrm{srg}(13,6,2,3)$), and (4) a best verified artifact at $69.43\%$, with evidence that this is a robust frontier (fourteen distinct methods, none exceeding it) entangled with the open question, since any provable bound below $4950$ is a non-existence proof.

12. [Detecting a Route Flip Is Easier Than Knowing Whether to Fix It: Causal Route-Mediated Damage in Quantized Mixture-of-Experts](https://arxiv.org/abs/2608.11212)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11212v1 Announce Type: new Abstract: Top-k Mixture-of-Experts (MoE) routing is discontinuous, so a deployment-motivated numerical disturbance -- simulated 4-bit KV-cache quantization read by a protected BF16 gate -- pushes tokens across decision boundaries and flips which experts fire. This paper proposes no new mitigation; it supplies a causal apparatus, empirical findings, and a detection-limit result. A four-run apparatus prices the route-mediated fraction (RMF) of quantization damage, a token-level attribution decomposes it by mechanism, and pre-registered probes carry the findings across three architectures. On OLMoE-1B-7B at 4-bit KV (pilot), about a third of the damage is routing-mediated: RMF ~ 0.31 (discovery 0.31 [0.20, 0.41]; process-replicated mean 0.313 +/- 0.020; pre-registered re-execution 0.231). The deployable router margin detects that a flip occurred (AUC 0.772) but cannot tell a harmful flip from a helpful one (at chance): among the tested local, inference-observable router statistics we find no predictor of a flip's loss sign above chance -- an empirical benefit-detection barrier bounding selective repair restricted to this feature family. The signed-flip tax and sign-inseparability carry cross-model; the clean-reference remedy's payout is architecture-modulated; a controlled same-checkpoint flag-swap re-scopes the gate's normalization convention to a damage-magnitude moderator, not a route-recoverability mechanism. A real int4 KV kernel yields a fraction compatible with the fake-quant dose curve but underpowered (95% CI [-0.111, 0.394] includes zero) -- ruling out gross disagreement, not an independent replication. Hypotheses, thresholds, and evaluations were pre-registered before measurement, with misses reported; a pre-registered held-out read replicates the partition and the near-cancelling tax out of sample, while the strict impossibility exclusion narrowly misses.

13. [Poor Man's Agentic Modeling: Simulating Large LLM-Agent Societies on a Laptop](https://arxiv.org/abs/2608.11215)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11215v1 Announce Type: new Abstract: Simulating societies of many large language model (LLM) agents is expensive, yet the questions asked of such simulations are usually macroscopic: phase behaviour, stylised facts, and scaling with the number of agents $N$, not the cognition of any single agent. We turn a statistical-physics observation into a method: replace each LLM agent by a low-parameter model fitted from a few hundred to a few thousand cheap queries, then run the society at any $N$ on a laptop. Whether this works is decided before the simulation runs, chiefly by what each agent perceives. We introduce an [interaction order x memory] taxonomy that maps perception and memory to an effective theory and a predicted $N$-trend of the surrogate error. We validate it on a faithful reimplementation of the LLM macroeconomy EconAgent and seven further named LLM simulations, with agent decisions cloned from genuine LLM elicitations (primarily DeepSeek) for a few dollars; the predicted error trends hold cell by cell, and the two refuted predictions, both on a strongly saturating response and traced to its curvature, are themselves matched quantitatively by the theory with no free parameters.

14. [MaSRead: Content-Addressed Reading of Replicated Latent Stores](https://arxiv.org/abs/2608.11218)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11218v1 Announce Type: new Abstract: Independent agents that reason in latent space can share computed state as key-value cache fragments rather than text. Merged by a conflict-free replicated data type, these fragments form a store that converges under any delivery order or duplication. Yet a later query, unknown at encode time, cannot reliably read the merged cache: colocated fragments interfere, so colocation is not addressability. MaSRead addresses the read to content. It routes through opaque keyed tag sets derived from fragment words and decodes each selected fragment under a hard attention mask that hides the rest. Under lexical connectivity, a graph walk reaches the fragments required by a multi-hop query. Across chain, pipeline, symmetric, hub, and natural-language stores, MaSRead recovers visited fragments in isolation, remains effective as unrelated fragments accumulate, and transfers to another model family. After routing, materialized decoding depends on fragment length rather than total store size; end-to-end work still includes store-dependent routing and one read per visited fragment. The limits are explicit: lexical routing can miss disconnected evidence, and answer composition remains bounded by the frozen reader. Thus a replicated latent store becomes selectively readable for later queries when the needed fragments connect to the query through content.

15. [Effects of Soret Diffusion and Radiative Heat Loss on the Evolution of Buoyant Flame Kernels in Ultra-Lean Hydrogen-Air Mixture](https://arxiv.org/abs/2608.12223)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.12223v1 Announce Type: cross Abstract: Ultra-lean hydrogen flames under terrestrial gravity are governed by a coupled interaction among preferential diffusion, thermal diffusion, heat loss, and self-induced convection. This study numerically examines combustion in a quiescent 6~vol.\% H$_2$--air mixture using detailed chemistry and a low-Mach-number formulation. A complete calculations set was considered, with Soret diffusion and optically thin radiative heat loss independently enabled and disabled. One-dimensional spherical calculations were used to isolate the initial post-ignition flame kernel growth, while two-dimensional planar and axisymmetric simulations described its subsequent buoyant rise, deformation, and breakup. Over the analyzed interval, the spherical flame-front radius followed $R_f^2\approx Kt$ rather than constant-speed expansion. Soret diffusion increased the effective growth coefficient $K$, whereas radiation reduced it. The axisymmetric calculations reproduced the experimentally measured leading-point trajectory substantially better than the planar formulation. Soret diffusion produced larger, faster-rising kernels and maintained a more nearly circular upper cap, whereas radiation had a weaker effect on trajectory but increased relative lateral flattening. In all cases, a toroidal vortex stretched the flame segment and caused local extinction and fragmentation. Soret diffusion delayed breakup, while radiation advanced it; their combined effect on breakup time was nearly compensating. The results show that Soret transport and radiation primarily alter kernel growth and resistance to vortex-induced extinction, while the qualitative breakup pathway remains hydrodynamically controlled.

16. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.70; Date: 2026-08-13T13:57:42Z; Popularity: 2,696 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

17. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-08-07T03:01:58Z; Popularity: 23 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

18. [From assistance to execution: How enterprises put AI to work](https://openai.com/index/how-enterprises-put-ai-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 12 Aug 2026 06:00:00 GMT
   - Summary: OpenAI research reveals how enterprises are adopting agentic AI, using ChatGPT and Codex, and how frontier firms are pulling ahead in AI adoption.

19. [How RingCentral builds AI-native work from engineering to ops](https://openai.com/index/ringcentral)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 12 Aug 2026 00:00:00 GMT
   - Summary: See how RingCentral uses ChatGPT Work and Codex to accelerate AI product development and centralize operational intelligence across engineering and operations.

20. [Testing ads in ChatGPT](https://openai.com/index/testing-ads-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 11 Aug 2026 10:00:00 GMT
   - Summary: OpenAI begins testing ads in ChatGPT to support free access, with clear labeling, answer independence, strong privacy protections, and user control.

21. [OpenAI’s letter to Governor Abbott on responsible AI infrastructure in Texas](https://openai.com/index/responsible-ai-infrastructure-texas)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 14:00:00 GMT
   - Summary: OpenAI sent Governor Greg Abbott a letter outlining its commitment to responsible AI infrastructure in Texas. The letter supports reliable, transparent growth that benefits Texans.

22. [Model ML completes finance work more efficiently with GPT-5.6 Sol](https://openai.com/index/model-ml)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 12:00:00 GMT
   - Summary: Model ML uses GPT-5.6 Sol to carry finance work from research and analysis through editable, traceable PowerPoint decks and Excel workbooks.

23. [What building an AI-native finance function taught me](https://openai.com/index/building-an-ai-native-finance-function)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 17:00:00 GMT
   - Summary: OpenAI CFO Sarah Friar shares five lessons for building an AI-native finance function, from automated forecasting to stronger controls and AI ROI.

24. [Putting frontier cyber models in more trusted hands](https://openai.com/index/putting-frontier-cyber-models-in-more-trusted-hands)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 10:00:00 GMT
   - Summary: Approved Daybreak partners can use OpenAI’s frontier cyber models to deliver authorized, governed cybersecurity services to customers.

25. [Expanding Daybreak as the Cyber Defense Window Narrows](https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 10:00:00 GMT
   - Summary: Meet GPT-5.6-Cyber, OpenAI’s cybersecurity-specific model available through Daybreak Red for authorized vulnerability research, exploit validation, and security testing.

26. [Premium seats are coming to ChatGPT Business](https://openai.com/index/premium-seats-chatgpt-business)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT
   - Summary: Premium seats are coming to ChatGPT Business. Sign up by August 20 to get $100 in workspace credits and unlock higher usage for your team's most demanding work.

27. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

28. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

29. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

30. [Introducing OlmoEarth embeddings: Custom embedding exports from OlmoEarth Studio for downstream analysis](https://huggingface.co/blog/allenai/olmoearth-embeddings)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 16:14:36 GMT

31. [LFM2.5-VL-3B for Better and Faster Vision Capabilities for the Edge](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-3b)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 14:00:51 GMT

32. [Thinking of ACE? We Can Do It with Fewer Tokens](https://huggingface.co/blog/ibm-research/altk-evolve-sldd)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 11 Aug 2026 13:37:10 GMT

33. [Build Low-Latency Multilingual Voice Agents: Open Weights & Full Deployment Control with NVIDIA Magpie TTS](https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 16:25:36 GMT

34. [Making Knowledge Distillation Cheap Enough to Run at Scale](https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 10:05:36 GMT

35. [Meta is back with Muse Glimmer: local, agentic, multimodal, and open source](https://huggingface.co/blog/muse-glimmer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 00:00:00 GMT

36. [Baseten on Hugging Face Inference Providers 🔥](https://huggingface.co/blog/baseten)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 06 Aug 2026 00:00:00 GMT

37. [GPU Management: Why Idle GPUs Are the New Grounded Aircraft](https://huggingface.co/blog/Dharma-AI/gpu-management)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 30 Jul 2026 15:09:09 GMT

38. [Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident](https://huggingface.co/blog/agent-intrusion-technical-timeline)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 27 Jul 2026 00:00:00 GMT

39. [Distribird: Literature-Informed Prior Distribution Design for Bayesian Model Calibration](https://arxiv.org/abs/2608.11210)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11210v1 Announce Type: new Abstract: Bayesian calibration of process-based models requires a prior distribution for each model parameter. Despite decades of methodological work, researchers almost always fall back on uniform priors. The main reason is that building informative priors from scientific literature is slow and needs both domain and statistical expertise. We present \textbf{Distribird}, an agentic web application that automates this process. Given a parameter name, physical description, and domain context, Distribird deploys a multi-agent pipeline that searches the literature, extracts and weights reported values by domain relevance, and fits a probability distribution via AIC model selection. When no literature is available, the system falls back to sensible uninformative alternatives, and clearly reports both the evidence behind and the confidence level of every prior it produces. It is designed for the problems where the models have physically interpretable parameters, where domain knowledge exists in the published literature. We evaluate the tool on 24~parameters across 10 scientific domains comparing three open-weight models (Qwen3.6 27B, Gemma 4 31B, Mistral Small 4 119B) with a single-prompt LLM baseline. On prior quality the full pipeline \emph{matches} this baseline. Every prior is traced to the specific papers and values from which it was constructed; a built-in validity layer declines to produce priors for out-of-scope requests, whereas the single-prompt baseline returns confident but unfounded priors for them in 11 of 30~model--parameter cases; and every language-model call runs locally, so no parameter description or unpublished modelling detail is transmitted to a third-party LLM provider (only generated search terms reach the public literature databases). For scientific use, we argue these properties matter more than a marginal improvement in point-estimate accuracy.

40. [AutoWorldModel-Bench: A State-Centric Benchmark for Automated World-Model Research](https://arxiv.org/abs/2608.11216)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11216v1 Announce Type: new Abstract: World modeling is an unsettled field: architectures, training objectives, and state representations interact in complex ways, and no single recipe dominates across environments. This makes it an ideal testbed for AI coding agents acting as autonomous researchers--a setting in which the improvement direction is not specified in advance, unlike the engineering-to-spec tasks that dominate current agent benchmarks. We introduce AutoWorldModel-Bench, a closed-loop benchmark in which frontier coding agents autonomously improve a provided world-model starter under a fixed compute budget. The benchmark spans eight game environments under a unified structured-state representation--ground-truth entity state extracted from each game and consumed through a shared tensor format--which isolates dynamics modeling from perception and enables minutes-per-run iteration. Across 64 sessions, Codex-5.4 and Claude Opus 4.6 improve their starter on 63; in 91% of sessions the winning edit is a non-trivial research-style modification--a new objective, representation, rollout procedure, or architectural change--rather than a hyperparameter tweak. Our benchmark offers a setting in which frontier coding agents can be evaluated on open-ended research rather than engineering-to-spec problems.

41. [LLMs in Process Diagram Engineering: From Optimal PFDs to Validated P&IDs](https://arxiv.org/abs/2608.11220)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11220v1 Announce Type: new Abstract: Nowadays, the creation of a process flow diagram (PFD) and its subsequent transformation into a piping and instrumentation diagram (P&ID) is predominantly performed manually. Applying artificial intelligence in the task could potentially lead not only to process automation and time savings, but also to financial gains by exploring numerous diagram's topology options and reducing manual labor. This research presents P&ID Pilot - a practical end-to-end AI pipeline capable of handling flowsheet developing for both stages. The first stage focuses on PFD synthesis, whereas the second is directed toward modifying the generated PFD into P&ID. After comparing four different methods, the hybrid approach combining genetic algorithms (GA) and large language models (LLM) is shown to generate the optimal valid PFD topology, achieving the lowest loss value among all the methods, while satisfying the required outlet flow parameters without engineering-rule violations. For the second stage, the proposed LLM-based agent successfully transforms the generated PFD into a source-grounded P&ID by producing validated, executable modifications through a restricted engineering software development kit, achieving 100% execution success while maintaining compliance with domain-specific rules and reference graph structures. This unified pipeline - coupling GA/LLM-driven synthesis with an LLM-based transformation agent - offers a feasible path toward end-to-end process design automation by producing validated, deployable outputs and substantially reduces manual engineering effort.

42. [Dynamics Models for Offline Hyperparameter Selection in Real-World RL](https://arxiv.org/abs/2608.11349)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11349v1 Announce Type: new Abstract: A key obstacle to deploying reinforcement learning in real-world systems is hyperparameter selection, particularly when simulators are unavailable and online experimentation is costly. Prior work has proposed calibration models trained on offline data to approximate environment dynamics and enable offline hyperparameter selection, but these methods have so far been evaluated only in simple simulated settings. In this paper, we present the first application of calibration models in a real-world industrial setting: a municipal water treatment plant. We evaluate several calibration model approaches, including a k-nearest neighbors model with a Laplacian distance metric, on high-dimensional, non-stationary sensor data for nexting prediction tasks. Our results show that these models can generate realistic long-horizon rollouts and recover meaningful hyperparameter sensitivity trends. We further examine how calibration models scale to year-long datasets, how they support the selection of fine-tuning learning rates for pre-trained agents, and how robust they are under distribution shift. Overall, our findings provide a proof of concept for using offline dynamics models to support RL deployment in real-world environments, while highlighting important practical challenges for future work.

43. [Variational Parameter Calibration with Physics-Aware Latent-Space Surrogates](https://arxiv.org/abs/2608.11435)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11435v1 Announce Type: cross Abstract: Forward and inverse modeling of parametric dynamical systems requires surrogate models that are not only accurate for state prediction, but also informative for parameter calibration. However, a systematic end-to-end differentiable formulation for coupling deep-learning-based reduced-order surrogates with variational parameter estimation remains underdeveloped. In this work, we introduce a physics-aware neural-network-based latent-space framework for reduced-order forward modeling and variational parameter estimation. The proposed autoencoder-based approach yields a differentiable surrogate that maps physical parameters to predicted flow fields through a latent representation. The observable supervision is used during offline training to encourage the latent variables to retain information correlated with system parameters, while the online inverse problem is solved in the parameter space through the surrogate-induced observation operator. The method is evaluated on two computational-fluid-dynamics benchmarks. The results show that reconstruction accuracy alone is insufficient for inverse modeling, owing to the lack of end-to-end differentiability or physics awareness for variational parameter calibration. Quantitative latent-space analysis further shows that observable supervision improves case-level separability and temporal organization of latent representations. Experiments with realistic measurement settings, including noisy, low-resolution, randomly masked, and block-wise partial observations, demonstrate the robustness of the proposed framework and show that it generally reduces calibration error and variability compared with the standard surrogate models.

44. [RECAST: A Machine-Learning Framework for Correction and Super-Resolution of Coarse-Grid PDE Solvers](https://arxiv.org/abs/2608.11572)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11572v1 Announce Type: cross Abstract: Coarse-grid numerical solvers can substantially reduce the computational cost of time-dependent PDE simulation, but under-resolution often degrades both the trajectory and the spatial fidelity of the solution. We introduce RECAST (Recurrent Error Correction And Super-resolution of coarse-grid Trajectories), a machine-learning framework designed to restore this lost accuracy while retaining coarse-grid evolution. RECAST combines learned correction within the numerical time-stepping loop with reconstruction of the corresponding fine-grid state from the corrected coarse history. We evaluate the framework on six one-dimensional PDE systems spanning transport, diffusion, dispersion, reaction, and wave dynamics, using spatial grids coarsened by factors of 8-16 and 1000-step closed-loop rollouts from unseen initial conditions. Across the test cases, RECAST remains closely aligned with the fine-grid reference solutions and reduces time-averaged relative error by approximately 50-92% compared with the corresponding uncorrected coarse-grid solvers. Additional tests show generalization to unseen PDE parameter values, while comparison with a contemporary coarse-correction architecture shows that RECAST achieves lower error and better long-horizon agreement with the fine-grid reference over 5000-step rollouts. These results demonstrate that the learned correction and reconstruction capabilities of RECAST can enable substantially coarser PDE evolution without the corresponding loss of solution fidelity, providing a proof-of-concept route toward machine-learning acceleration of higher-dimensional numerical simulations across science and engineering.

45. [Data-Efficient Adaptation of DPA-4 Force Fields to DFT+U Energetics: A Case Study in NiO](https://arxiv.org/abs/2608.11812)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11812v1 Announce Type: cross Abstract: Foundation machine-learned force fields (MLFFs) are often pretrained on broad materials datasets whose electronic-structure conventions may not reproduce the phase energetics required for a specific correlated material. Using NiO as a case study, we examine whether incorrect source-level phase energetics can be corrected efficiently through target-level fine-tuning. Along a common structural interpolation, non-spin-polarized PBE and ferromagnetic PBE+U predict opposite energetic orderings of the octahedral Oct and square-planar Sqr phases. Pretrained DPA-4 models adapt rapidly to the NiO PBE+U surface, reaching energy and force root-mean-square errors (RMSEs) of approximately 0.5 meV/atom and 30 meV/{\AA}, respectively, with approximately 170 PBE+U labels. Crucially, models previously fine-tuned to the opposing no-U surface recover the qualitative PBE+U phase ordering with nearly the same target-data efficiency as models fine-tuned directly from their respective pretrained initializations. Our results show that incorrect source-level phase energetics can be reversed through target-level fine-tuning, and suggest a practical multi-fidelity strategy in which pretraining prioritizes broad, consistent, and affordable data, while compact target-level datasets impose energetics through application-specific fine-tuning.

46. [anyakrakusuma: A Python Library for Entropic Schr\"odinger Bridges on Idealized Geometries](https://arxiv.org/abs/2607.18184)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2607.18184v2 Announce Type: replace Abstract: We present anyakrakusuma, an open-source Python library that solves the discrete static Schr\"{o}dinger bridge problem, the entropically regularized counterpart of optimal transport, through a log-domain Sinkhorn--Knopp iteration and reconstructs the entropic interpolation between two empirical point clouds. The solver is paired with a diagnostic pipeline that characterizes the optimal coupling and the intermediate distributions through information-theoretic and geometric measures. We exercise the library on four idealized planar cases spanning a circle-to-circle dilation, a spiral-to-mixture fragmentation, a rigid reorientation of two moons, and a Lissajous-to-trefoil deformation. The log-domain formulation is necessary rather than merely convenient at the parameters studied, where the cost-to-regularization ratio reaches four hundred and the Gibbs kernel underflows double precision across most of its range; the iteration nonetheless attains a marginal residual of $10^{-9}$ and unit marginal fidelity in every case. Residual histories decay geometrically over approximately eight decades at per-iteration contraction factors between $0.966$ and $0.976$, which are local rates near the fixed point that lie many orders of magnitude below the worst-case Hilbert-metric bound. The covariance analysis recovers an imposed ninety-degree reorientation to within $0.07^\circ$, roughly forty times smaller than its uncertainty, across a masked interval of near-isotropy on which the principal axis is unobservable. The diagnostics are reported with explicit attention to the regimes in which each is well defined, including the differential entropy, which is meaningful only on the open interpolation interval. The presented cases are constructed rather than measured; quantitative application to empirical point clouds requires further study.

47. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.70; Date: 2026-08-13T14:31:45Z; Popularity: 1,704 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

48. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-13T07:08:15Z; Popularity: 479 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

49. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.33; Date: 2026-08-13T13:36:44Z; Popularity: 332 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

50. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-11T18:04:13Z; Popularity: 229 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

51. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

52. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

53. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

54. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

55. [FarSky: Task-Aware Latent-Space Coupling for Generative Intra-Hour Solar Forecasting](https://arxiv.org/abs/2608.11254)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11254v1 Announce Type: new Abstract: Accurate solar irradiance forecasting is essential for the reliable integration of photovoltaic power into modern electricity grids. All-sky imagers (ASI) provide high-resolution observations of clouds, making them well suited for intra-hour forecasting. Recent deep learning approaches have substantially improved forecast accuracy but are often limited by deterministic predictions and a reduced capability to anticipate ramp events. This work proposes FarSky, a generative forecasting framework that leverages latent-space coupling to learn task-aware representations of sky images. A multi-task autoencoder first learns a shared latent representation for image reconstruction and irradiance estimation. A latent diffusion model then generates future latent states conditioned on recent observations, from which irradiance forecasts are directly decoded. Probabilistic forecasts are inherently obtained through stochastic sampling. The framework is developed using a multi-year ASI dataset acquired at the Plataforma Solar de Almer\'ia, Spain, and evaluated on two independent test datasets against persistence, state-of-the-art end-to-end, and generative forecasting approaches. FarSky achieves the best overall deterministic and probabilistic forecasting performance, improving forecast skill by up to 11 percentage points. Furthermore, it substantially improves ramp event detection over existing methods, achieving F1-scores above 60%. These results demonstrate the potential of combining generative models with task-aware latent-space coupling for solar forecasting.

56. [Basin: Efficient and Extensible Numerical Optimization in Rust](https://arxiv.org/abs/2608.11279)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11279v1 Announce Type: new Abstract: Basin is a numerical optimization library for the Rust programming language. Numerical optimization is the task of finding the inputs that minimize a function, and it is a fundamental element across the sciences: fitting a model to data, calibrating a simulation, training a machine learning model, or choosing engineering parameters that minimize cost. Basin gives users a single, consistent way to both state and solve such problems, with a broad catalog of solvers and first-class support for constraints.

57. [Terminal Symmetry as a Decision Resource: Statewise Refinement for Anytime Verified Construction](https://arxiv.org/abs/2608.11318)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11318v1 Announce Type: new Abstract: Many sequential construction tasks exhibit exact symmetry at completion while their execution remains directed and history-dependent. We develop a decision-resource view of terminal symmetry: process evidence supplies directionality, terminal correspondence transports that structure across equivalent outcomes, realized-state evidence refines its current decision relevance after transitions, and a fixed verifier certifies execution. This decomposition yields transport--refine--certify. \method{} instantiates the principle with an episode-fixed transported process structure, its state-restricted process rank, a state-dependent residual rank refreshed after accepted transitions, and an ordinal rank meet whose top-$k$ set is exactly the union of the two proposal prefixes. The meet provides a completion guarantee under prefix coverage and attains the tight worst-case verifier-query bound under the corresponding prefix information model; a two-state construction predicts a strict post-transition dynamic--static separation. Across CAD assembly, Mini-Programs, and exact-fill packing, statewise refresh improves anytime AUC by up to $6.77$, $21.75$, and $8.68$ points, respectively. On 1,135 target-removal episodes from the official GRN OOD scenes, \method{} attains the lowest mean capped verifier cost at all three scales among the compared GRN and CDGS-style planners. The statewise signal also transfers across aggregation and scheduler organizations. Terminal symmetry thereby becomes a reusable decision resource for directed construction.

58. [Weightless Fine-Tuning: Personalizing LLMs via Logit-Space Transport](https://arxiv.org/abs/2608.11342)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11342v1 Announce Type: new Abstract: Supervised fine-tuning (SFT) is a standard approach for adapting LLMs to a target distribution, but in settings such as personalization, where each author requires separate weight access, optimization, storage, and retraining, its costs become prohibitive. We propose Weightless Fine-Tuning (WFT), a training-free decoding-time method that approximates the distributional effect of SFT without weight updates. WFT computes supervised residuals on an author's training sequence and transports them to the current prompt through a cross-prefix transport operator estimated from dropout-induced cross-covariance. The operator captures how a perturbation at one context propagates to predictions at another, replacing gradient-based parameter updates with logit-space corrections. On three LaMP personalization benchmarks, WFT achieves the best average performance across datasets, matches or exceeds SFT on individual tasks, and outperforms other lightweight baselines on average. In a budget-controlled comparison, WFT approaches SFT performance using less than 7% of the effective computation. Logit-level analysis shows a cosine similarity of 0.875 between the logit shifts induced by WFT and SFT over 95% of the next-token probability mass, suggesting that WFT captures the distributional effect of supervised adaptation without modifying model weights.

59. [Market-Information-Aware Gated-LoRA of Foundation Models for Transferable Day-Ahead Electricity Price Forecasting](https://arxiv.org/abs/2608.11359)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11359v1 Announce Type: new Abstract: Electricity price forecasting is crucial for market participants but remains difficult because prices are volatile, market-specific, and closely tied to anticipated system conditions. Existing supervised methods depend largely on market-specific historical data, limiting their use in newly established or data-scarce markets. This paper proposes a market-information-aware adaptation framework that transfers the Chronos-2 time-series foundation model to day-ahead electricity price forecasting. It first constructs a multi-source market information (MSMI) interface aligning 7-day price context with pre-clearing supply--demand, reserve, maintenance, generator-capacity, and intertie variables, and then trains a source-domain gated low-rank adapter (LoRA), updating about $1\%$ of model parameters without target-market labels. The gate scales the frozen source adapter according to reserve-tightness and operating-state signals. A leave-one-market-out protocol is adopted for evaluating cross-market transferability. Experiments on four Chinese provincial day-ahead spot markets show that the proposed framework reduces the average MAE/RMSE by $6.24\%/7.99\%$ relative to market-information-aware zero-shot Chronos-2 and by $3.05\%/3.52\%$ relative to vanilla Source-LoRA. Experiments show that the gain is not reproduced by a learned global scalar or by random gate initialization, while the additional improvement over Source-LoRA is limited. These results suggest that market-structured inputs and state-dependent gated LoRA can provide a practical transfer path for data-scarce electricity markets.

60. [Symbolic Machine Learning for Vapor-Liquid Equilibrium Prediction in Cx-N2 Binary Mixtures](https://arxiv.org/abs/2608.11255)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11255v1 Announce Type: cross Abstract: Accurate prediction of vapor--liquid equilibrium (VLE) for hydrocarbon-nitrogen mixtures remains challenging for cubic equations of state, particularly across broad ranges of composition and hydrocarbon chain length. While deep learning models can provide accurate predictions, they often lack interpretability and explicit analytical expressions. In this work, we propose a symbolic machine learning approach to discover interpretable symbolic corrections to Peng-Robinson equation-of-state (PR-EOS) predictions from experimental data. The proposed approach adopts a two-level strategy: symbolic expressions are first identified for individual hydrocarbon systems, after which their coefficients are represented as functions of carbon number to enable accurate prediction across different hydrocarbon systems. The results demonstrate significantly improved prediction accuracy over the original PR-EOS across all hydrocarbon-nitrogen systems. Overall, the proposed approach provides an interpretable symbolic correction framework for improving PR-EOS predictions of hydrocarbon-nitrogen VLE.

61. [Improved quantum sampling methods for molecular simulations](https://arxiv.org/abs/2608.11569)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11569v1 Announce Type: cross Abstract: Quantum-selected configuration interaction (QSCI) methods use a quantum computer to identify dominant electronic configurations in the molecular ground state, while a classical computer diagonalizes the Hamiltonian within the reduced subspace spanned by those configurations. Sample-based quantum diagonalization (SQD), a leading QSCI approach, uses iterative classical post-processing to correct noisy quantum measurement to ensure that the corresponding configurations remain physically sensible. In this work, we show that SQD performance can be strongly influenced by uncontrolled growth of the classical diagonalization subspace. When classical resources are not explicitly constrained, classical uniform random sampling can reproduce SQD benchmarks as noise increases the diversity of sampled configurations. We show any fair benchmarking protocol of SQD must explicitly control diagonalization size over unique samples. We then address the problem of efficiently discovering physically relevant, energy-lowering configurations by introducing a measurement protocol based on non-orthogonal configuration interaction (NOCI). By distributing measurements across orbital bases optimized with respect to the molecular Hamiltonian, we obtain improved sample efficiency relative to measurements performed solely in the Hartree--Fock basis. Importantly, these improvements persist even under fixed classical resource budgets, demonstrating that the resulting configurations are of higher quality rather than being more numerous. Under our proposed benchmarking procedure, we establish measurement-basis engineering as a promising route to improving quantum sampling methods for electronic structure.

62. [Spin lifetime anisotropy in graphene induced by the SiO2 interface](https://arxiv.org/abs/2608.11615)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11615v1 Announce Type: cross Abstract: Understanding how common dielectric substrates influence the spin transport properties of graphene is essential for advancing graphene-based spintronic technologies. Here we use a comprehensive set of numerical simulations to reveal how a SiO$_2$ substrate modifies the spin texture and governs spin relaxation in graphene. Using first-principles density matrix dynamics simulations, as well as tight-binding (TB) transport simulations, we quantify the effects of electron-phonon scattering, impurity scattering, and electrostatic disorder on the spin relaxation process. We find that a 2D SiO$_2$ substrate induces a predominantly Rashba-type helical spin texture in graphene, leading to a spin lifetime anisotropy of 1/2. Meanwhile, bulk SiO$_2$ breaks in-plane symmetry in graphene, leading to anisotropic in-plane and out-of-plane components in the spin texture, which we capture with a newly-developed TB model of graphene. Transport simulations under realistic disorder conditions reveal a spin lifetime anisotropy between 0.5 and 1, similar to what is seen in measurements of graphene spin valves on a SiO$_2$ substrate. Our results reveal a more complex picture of spin relaxation at the ubiquitous graphene/SiO$_2$ interface, beyond the standard Rashba model, providing critical insight for interpreting experiments and guiding substrate engineering for graphene spintronics.

63. [Spiral structure from the interference of gravitational eigenmodes in ultralight dark matter halos](https://arxiv.org/abs/2608.11974)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 13 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.11974v1 Announce Type: cross Abstract: We use a variety of analytic and numerical techniques to approximate the geometry of individual dark matter halos when modeled as collections of ultralight scalar bosons (ULDM), followed by an analysis on the future directions and implications of this work. Ultimately, we aim to understand the morphology and creation of complex structures (like spirals) in galaxies from a geometric standpoint and to investigate the connection between dark matter and baryonic matter in galaxies. We find that superpositions of gravitational eigenmodes for ULDM in a fixed background potential can yield spiral density perturbations which rotate on the order of one hundred million years and appear within ten to twenty kpc of the halo center, both features comparable to realistic galaxies, and that this model provides a natural explanation for the density waves necessary to seed baryonic spirals.

64. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

65. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-10T16:05:18Z; Popularity: 718 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

66. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.66; Date: 2026-08-13T04:11:30Z; Popularity: 663 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.17; Date: 2026-08-13T04:25:59Z; Popularity: 169 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.11; Date: 2026-08-11T20:05:29Z; Popularity: 111 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-08-13T13:29:17Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

From Monolithic to Modular: Segment-level Automatic Prompt Optimization

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.11219

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
