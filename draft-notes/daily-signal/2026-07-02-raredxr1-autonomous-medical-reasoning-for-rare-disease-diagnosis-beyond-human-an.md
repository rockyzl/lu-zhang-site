# Daily signal sidecar - 2026-07-02

## Selected Signal

- Title: RareDxR1: Autonomous Medical Reasoning for Rare Disease Diagnosis Beyond Human Annotation
- URL: https://arxiv.org/abs/2607.00147
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: RareDxR1: Autonomous Medical Reasoning for Rare Disease Diagnosis Beyond Human Annotation
- Primary source: https://arxiv.org/abs/2607.00147
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

1. [RareDxR1: Autonomous Medical Reasoning for Rare Disease Diagnosis Beyond Human Annotation](https://arxiv.org/abs/2607.00147)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00147v1 Announce Type: new Abstract: Rare disease differential diagnosis is a critical yet arduous clinical task, requiring physicians to identify precise phenotypes from complex, unstructured patient symptoms and execute intricate reasoning within a vast search space. However, existing AI approaches typically rely on pipeline-based phenotype extraction or retrieval-augmented generation, which suffer from critical information loss due to predefined ontologies, retrieval bottlenecks, and a lack of diagnostic logic. To address these challenges, we introduce RareDxR1, an end-to-end reasoning-centric large language model designed for open-domain rare disease diagnosis directly from unstructured clinical notes. We design a progressive end-to-end training framework by synergizing knowledge internalization with autonomous evolutionary learning, thereby bypassing reliance on structured phenotypes and closed-set decision-making. To overcome the limitations of RAG and phenotype restriction, we enabled the deep internalization of fragmented rare-disease knowledge directly into the model's parameters. Moreover, to bridge the gap between model generation and expert reasoning, we propose Reflection-Enhanced Reasoning Sampling (RERS), a strategy that synthesizes expert-level diagnostic trajectories by learning from failures without human annotation. Additionally, we propose a dual-level curriculum reinforcement learning approach for gradually mastering rare disease diagnosis. Experimental results demonstrate that RareDxR1 achieves state-of-the-art accuracy across different benchmarks, marking a significant breakthrough in open-domain rare disease diagnosis. Our code and dataset will be publicly available.

2. [Seed2.0 Model Card: Towards Intelligence Frontier for Real-World Complexity](https://arxiv.org/abs/2607.00248)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00248v1 Announce Type: new Abstract: We present Seed2.0, a model series that takes a meaningful step toward solving complex, real-world tasks. Our approach begins with identifying users' genuine needs and constructing a reliable, forward-looking evaluation system by selecting and abstracting benchmarks grounded in these needs and in realistic, complex scenarios. Guided by this evaluation system, Seed2.0 targets two persistent challenges, long-tail knowledge and complex instruction following, substantially improving the model's reliability on intricate, long-horizon tasks. Beyond these, Seed2.0 delivers world-leading reasoning intelligence, visual understanding, and search capabilities that address the most common needs of a broad user base. Through extensive real-world use cases documented in this model card, we demonstrate that Seed2.0 begins to exhibit the ability to handle initial complex real-world tasks, delivering greater value to hundreds of millions of users.

3. [InternScience/InternAgent](https://github.com/InternScience/InternAgent)
   - Source: GitHub repository search; Group: Open source; Score: 5.34; Date: 2026-07-02T12:18:54Z; Popularity: 1,345 stars
   - Summary: InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery

4. [ruc-datalab/DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze)
   - Source: GitHub repository search; Group: Open source; Score: 5.30; Date: 2026-07-02T11:56:24Z; Popularity: 4,302 stars
   - Summary: DeepAnalyze is the first agentic LLM for autonomous data science. 🎈你的AI数据分析师，自动分析大量数据，一键生成专业分析报告！

5. [Introducing GeneBench-Pro](https://openai.com/index/introducing-genebench-pro)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 30 Jun 2026 00:00:00 GMT
   - Summary: Introducing GeneBench-Pro, a new benchmark testing AI performance in genomics, biology, and scientific research using complex, real-world datasets.

6. [Mapping Europe’s AI Workforce Opportunity](https://openai.com/index/mapping-ai-jobs-transition-eu)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 29 Jun 2026 07:00:00 GMT
   - Summary: A new OpenAI report maps how AI could reshape jobs across the EU, highlighting which occupations may face automation, growth, or workflow changes.

7. [Helping build shared standards for advanced AI](https://openai.com/index/helping-build-shared-standards-for-advanced-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 23 Jun 2026 13:00:00 GMT
   - Summary: OpenAI helps build shared standards for advanced AI, supporting evaluation frameworks, safety practices, and global cooperation through the Appia Foundation.

8. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

9. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

10. [Experimenting with the proposed Cross-Origin Storage API in Transformers.js](https://huggingface.co/blog/cross-origin-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

11. [Bounded Morality: Defining the Space of Moral Computation](https://arxiv.org/abs/2607.00002)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00002v1 Announce Type: new Abstract: Moral cognition has traditionally been modeled as adherence to fixed ethical theories--deontology, consequentialism, virtue ethics--implemented as static rules or value functions. We propose Bounded Morality, a formal framework for analyzing the computational demands of moral problems faced by finite agents. Extending Herbert Simon's notion of bounded rationality, we formalize moral situations along two orthogonal dimensions: moral breadth, the scope of entities treated as morally relevant, and moral depth, the inferential integration required to evaluate their interactions. Limited resources impose an unavoidable tradeoff between these dimensions, defining a feasible space of moral computation. Within this space, ethical theories correspond to locally efficient strategies adapted to different demand regimes rather than competing accounts of moral truth. The framework yields a formal notion of moral regret and moral progress under constraint, and implies that moral alignment in artificial systems depends on the scaling and allocation of moral reasoning capacity rather than on direct imitation of human judgments.

12. [Making Failure Safe: A Constrained, Verifiable Agent Framework for Open-Web Data Collection](https://arxiv.org/abs/2607.00035)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00035v1 Announce Type: new Abstract: LLMs and agents can generate web scrapers from natural-language requirements, but direct generation remains unreliable because of dependency errors, broken selectors, schema mismatches, and heterogeneous page structures. We propose a constrained, verifiable agent framework that shifts LLM output from free-form code to typed JSON collector configurations, combining a six-type collector taxonomy, template and utility-function constraints, static Airflow DAG execution, rule-based quality checking, and structured feedback correction. Experiments on 138 tasks show that the taxonomy supports description-based requirement typing, while confirming that stable instantiation requires completing source, field, and execution constraints beyond the initial description. On 80 independently source-verified tasks, the framework runs with zero execution-stage LLM tokens and the lowest average wall-clock time, trading moderate one-shot quality for a reusable, deterministic, and verifiable execution path suited to repeated scheduled collection. These results position the framework as a reusable, low-cost, and verifiable execution path for repeated open-web data collection.

13. [Solution space path planning for supporting en-route air traffic control](https://arxiv.org/abs/2607.00064)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00064v1 Announce Type: new Abstract: As technology advances, many path-planning algorithms have been proposed for Air Traffic Management, yet their operational adoption in tactical control remains limited, revealing a misalignment between algorithmic design priorities and air traffic controllers' needs. This underscores the need for decision-support solutions that are inherently interpretable, computationally efficient, and explicitly designed for human use. Focusing on this design challenge, this study develops a conflict-free path-planning algorithm for en-route Air Traffic Control (ATC) designed to be compatible with two guiding considerations: (1) the interpretability and flexibility offered by solution-space displays, which motivate constructing an algorithm that exposes all feasible safe actions and accommodates shifting optimization goals; and (2) the decision logic controllers naturally apply when enforcing operational constraints, such as separation standards, maneuverability limits, waypoint minimization, and routing practicality. Centered on these principles, the algorithm integrates three intent-based conflict detection methods -- distance-based, time-interval-based, and zone-based -- within a solution-space framework to identify conflict-free paths in computationally efficient ways. Additionally, vertex-based and edge-based search nodes are proposed for solution space path planning (SSPP), resulting in two variants -- SSPPV and SSPPE, respectively, which are evaluated in terms of computational speed and solution quality. Empirical results show that SSPPV paired with zone-based conflict detection achieves the best performance, computing paths in 3.69 ms on average in operational-relevant scenarios based on the Delta sector of the Maastricht Upper Area Control Centre (MUAC) using a 5 nmi grid.

14. [From Signals to Structure: How Memory Architecture Drives Language Emergence in LLM Agents](https://arxiv.org/abs/2607.00233)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00233v1 Announce Type: new Abstract: How do two agents invent a shared language from scratch? In a Lewis signaling game, a sender and receiver must coordinate on a code using only their interaction history. We study five memory architectures across varying channel configurations with LLM agents and find that memory architecture matters more than channel capacity. Agents with a persistent private notebook benefit from surplus channel capacity and avoid the high-capacity collapse seen in stateless agents, achieving the most reliable coordination ($0.867 \pm 0.023$ at capacity = 25). Stateless agents peak at moderate capacity and then degrade as the vocabulary grows beyond what a rolling context window can track The notebook externalizes learned conventions, freeing agents from having to re-derive codes each round. An information bottleneck-inspired argument predicts an optimal capacity equal to the number of objects. Instead, the bottleneck (capacity = 8) proves to be a fragility point, and surplus capacity is generally better. We show that channel capacity alone cannot predict coordination; memory architecture determines whether agents turn interaction history into stable conventions, and both dimensions are needed to understand how signals become language.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.17; Date: 2026-07-02T15:36:30Z; Popularity: 2,171 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-06-29T15:21:43Z; Popularity: 19 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

17. [How ChatGPT adoption has expanded](https://openai.com/index/how-chatgpt-adoption-has-expanded)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 09:00:00 GMT
   - Summary: New OpenAI Signals data shows how ChatGPT adoption is growing globally, with users increasing usage, exploring more capabilities, and driving growth across regions and languages.

18. [Inside Genebench-Pro](https://openai.com/index/genebench-pro/case-studies)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

19. [Core dump epidemiology: fixing an 18-year-old bug](https://openai.com/index/core-dump-epidemiology-data-infrastructure-bug)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT
   - Summary: OpenAI engineers used large-scale core dump analysis to debug rare infrastructure crashes, uncovering both a hardware fault and a long-standing software bug.

20. [HP Inc. launches Frontier strategic partnership with OpenAI](https://openai.com/index/hp-frontier-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 28 Jun 2026 17:00:00 GMT
   - Summary: HP Inc. scales its OpenAI Frontier partnership to deploy AI across customer experiences, software development, and enterprise operations.

21. [Previewing GPT-5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 26 Jun 2026 10:00:00 GMT
   - Summary: OpenAI previews GPT-5.6 Sol, a next-generation model with stronger capabilities in coding, science, and cybersecurity, paired with its most advanced safety stack.

22. [How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 25 Jun 2026 02:00:00 GMT
   - Summary: A new OpenAI research paper shows how AI agents are transforming work, enabling longer, more complex tasks and expanding productivity across roles.

23. [OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 24 Jun 2026 06:00:00 GMT
   - Summary: OpenAI and Broadcom introduce Jalapeño, a custom AI chip built for LLM inference to improve performance, efficiency, and scale across AI systems.

24. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](https://huggingface.co/blog/cerebras-gemma4-voice-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 GMT

25. [ScarfBench: Benchmarking AI Agents for Enterprise Java Framework Migration](https://huggingface.co/blog/ibm-research/scarfbench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 18:32:50 GMT

26. [Why Specialization Is Inevitable](https://huggingface.co/blog/Dharma-AI/why-specialization-is-inevitable)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 14:39:11 GMT

27. [Featuring Every Eval Ever Results on Hugging Face Model Pages](https://huggingface.co/blog/eee-community-evals)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

28. [DiScoFormer: One transformer for density and score, across distributions](https://huggingface.co/blog/allenai/discoformer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 29 Jun 2026 18:02:48 GMT

29. [Run a vLLM Server on HF Jobs in One Command](https://huggingface.co/blog/vllm-jobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 26 Jun 2026 00:00:00 GMT

30. [Accelerating Transformers Fine-Tuning with NVIDIA NeMo AutoModel](https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 16:00:13 GMT

31. [Introducing the FFASR Leaderboard: Benchmarking ASR in the Real World](https://huggingface.co/blog/ffasr-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 00:00:00 GMT

32. [Shipping huggingface_hub every week with AI, open tools, and a human in the loop](https://huggingface.co/blog/huggingface-hub-release-ci)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

33. [Constructive Alignment: Governing Preference Dynamics in Human-AI Interaction](https://arxiv.org/abs/2607.00001)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00001v1 Announce Type: new Abstract: Most approaches to AI alignment treat human preferences as fixed targets to be inferred and optimized. This assumption conflicts with extensive empirical evidence showing that preferences are layered, dynamic, and constructed through interaction--particularly with adaptive technologies. As AI systems become more persistent, personalized, and socially embedded, they increasingly participate in shaping what people attend to, value, and endorse over time. We introduce Constructive Alignment, a paradigm that reframes alignment as a control problem over evolving human preference trajectories rather than static preference satisfaction. Drawing on behavioral economics, psychology, and constructivist social theory, we model preferences as layered state variables that evolve under interaction with AI systems. We formalize this view using a control-theoretic framework in which system actions and interaction design jointly influence both world states and human evaluative states. We argue that alignment is not primarily about controlling AI behavior, but about regulating how AI systems influence the evolution of human preferences--ensuring that value trajectories remain coherent, reflectively endorsed, epistemically grounded, bounded against manipulation, and empowering under uncertainty. Alignment thus becomes a problem of governing long-term value formation rather than simply satisfying static preferences.

34. [The MMM Data Model -- A Normative Specification for Knowledge Interoperability in a Decentralisable Knowledge Commons](https://arxiv.org/abs/2607.00032)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00032v1 Announce Type: new Abstract: Many information systems are built around documents: self-contained units optimised for print production and linear reading. While effective for large-scale dissemination, the document-centric organisation constrains how knowledge can be structured, updated, shared, and reused. Formal approaches address some of these limitations but struggle to achieve widespread contribution and adoption due to their prioritisation of formal structure over other system properties such as human usability and scope. AI systems are reshaping document production, but without providing a unified portable alternative to traditional documents for humans' expression and exchange of knowledge. This paper presents MMM, a data model for knowledge documentation that emerged from the practical needs of interdisciplinary collaborative research, and positioned here within a comparative analysis of the design space of information systems. MMM combines a small set of normative constraints with the expressive freedom of free-text labels. It is designed for interoperability across disciplines, applications and deployments without requiring semantic convergence. A reference implementation and pilot deployment data demonstrate implementability and early usability.

35. [A Contextual-Bandit Oversight Game with Two-Sided Informational Asymmetry](https://arxiv.org/abs/2607.00155)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00155v1 Announce Type: new Abstract: We study runtime human oversight of an AI agent when private information runs in both directions: the human privately knows her reward function, while the AI privately knows the quality of the action it proposes. This is the kind of asymmetry that arises naturally when an autonomous robot or software agent has inspected a situation its human supervisor cannot directly assess. Building on Cooperative Inverse Reinforcement Learning (CIRL) and the Oversight Game, we introduce a contextual-bandit team game with two-sided asymmetric information and a play/ask/trust/oversee interface. The bandit structure removes physical state transitions and thereby yields exact one-shot characterizations that would remain conjectural in the full POMDP setting, though the common belief remains a dynamically controlled state across rounds. We give two one-shot characterizations, a team optimum and a behaviorally natural myopic rule, whose gap is a slab of avoidable harm: a region in which the AI privately knows the proposed action is harmful and shutdown would help, yet a myopic human, trusting her prior, declines to oversee. We show this gap is the price of non-credible oversight communication, and give a partial analysis of how it resolves dynamically over repeated rounds through passive learning and active signaling with a one-period-lagged oversight response.

36. [Constructing Epistemic AI Literacy: Detecting Epistemic Aims and Processes in Student-AI Co-Programming](https://arxiv.org/abs/2607.00211)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00211v1 Announce Type: new Abstract: Epistemic thinking plays a central role in students' learning processes when applying generative artificial intelligence (GenAI), particularly in programming contexts where learners must construct queries, evaluate and validate AI-generated outputs, and regulate problem-solving strategies. This study introduces the conceptual framework of Epistemic AI Literacy (EAIL), reframing AI literacy as a process-oriented epistemic phenomenon that emerges through dynamic human-AI interactions across different domains. Drawing on the AIR (epistemic aims, ideals and reliable epistemic processes) framework, this study examines how epistemic aims and epistemic processes are enacted in GenAI-supported co-programming activities and explores scalable approaches for operationalizing these constructs in interaction data. Using a large dialogue dataset of human-AI co-programming, this study identifies observable dimensions of epistemic aims (i.e., mastery-oriented aims) and epistemic processes (i.e., outsourcing, explanation seeking, verification seeking, prompt monitoring, and epistemic justification). The results reveal a prevalent lack of EAIL, with 78.8% of student-GenAI interactions relying on non-mastery-oriented aims and less reliable epistemic strategies like outsourcing and verification-seeking. Conversely, only 11.1% of interactions showed high epistemic engagement, where mastery-oriented aims were coupled with advanced epistemic strategies like epistemic justification in a more reliable epistemic process.

37. [A Scoping Review of Physics Informed Machine Learning for Wave Propagation Modeling in Seismology](https://arxiv.org/abs/2607.00178)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00178v1 Announce Type: new Abstract: \emph{Background:} Standard numerical methods accurately simulate seismic waves but are computationally expensive, particularly for inverse problems. Machine learning approaches have been proposed as alternatives that can reduce computational cost while maintaining acceptable physical accuracy. \emph{Objective:} To map how physics-informed machine learning methods have been applied to seismic wave propagation modeling based on partial differential equations. \emph{Methods:} A scoping review was conducted using the OpenAlex and Scopus databases. Selected studies were classified by problem type (forward or inverse) and machine learning strategy to identify research trends, methodological patterns, and gaps in the literature. \emph{Results:} Physics-informed machine learning has been applied to both forward modeling and inversion in seismology, often reaching accuracy comparable to standard numerical methods at lower computational cost. Application of three mechanisms for incorporating physical knowledge were identified: observational bias, inductive bias, and learning bias. To evaluate methodological reproducibility of a representative method, the original PINN framework was replicated in PyTorch, obtaining results consistent with and in most cases more accurate than those originally reported. From the reviewed literature, limitations remain in benchmarking consistency, training cost, and scalability to three-dimensional and experimentally validated problems. \emph{Conclusions:} Standard numerical methods remain the basis of seismological workflows, while physics-informed machine learning offers complementary approaches that are useful for inverse problems and surrogate modeling. Future work should focus on consistent benchmarking, hybrid formulations, and validation under realistic geophysical conditions.

38. [Verification of a sequential thermo-poroelasticity formulation in PFLOTRAN](https://arxiv.org/abs/2607.01156)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01156v1 Announce Type: new Abstract: We present the verification of a thermo--hydrologic--mechanical capability implemented within the PFLOTRAN framework, with emphasis on benchmark-based assessment of the THM implementation. The thermal--hydrologic (TH) equations for mass and energy balance are solved on control-volume blocks or Voronoi cells, while the quasi-static momentum balance is solved on an element-based dual mesh. The coupling is achieved using a strictly sequential, non-iterative fixed-stress split strategy in which the TH system is solved implicitly for pressure and temperature, followed by a mechanics update for the displacement unknowns. Several verification problems are set up against poroelastic and thermo-poroelastic benchmarks, demonstrating agreement with analytical or semi-analytical benchmark responses for pressure diffusion, the temperature field, and mechanical deformation. In addition, we propose a treatment for discontinuities (e.g., fractures) based on mapping between mechanical and flow degrees of freedom, and validate the approach by comparison to an analytical solution. This work establishes the basis for thermo-poroelastic coupling in PFLOTRAN and provides a solid modeling foundation for a range of applications (e.g., enhanced geothermal systems and other subsurface energy storage) involving coupled thermal--hydrologic--mechanical (THM) processes in geologic porous media.

39. [A Multi-Resolution Finite-Volume Inspired Deep Learning Framework for Spatiotemporal Dynamics Prediction](https://arxiv.org/abs/2607.00460)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00460v1 Announce Type: cross Abstract: Predicting complex spatiotemporal dynamics in physical processes often demands computationally expensive numerical methods or data-driven neural networks that suffer from high training costs, error accumulation, and limited generalizability to unseen parameters. An effective approach to address these challenges is leveraging physics priors in training neural networks, known as physics-informed deep learning (PiDL). In this work, we introduce the Multi-Resolution Finite-Volume-inspired network, MuRFiV, designed to capitalize on the conservative property of finite volume on the global scale and the expressive power of deep learning on the local scale. We demonstrate the effectiveness of MuRFiV on several spatio-temporal systems governed by partial differential equations (PDEs), including Burgers' equation, shallow water equations, and incompressible Navier-Stokes equations. By embedding PDE information into the deep learning architecture, MuRFiV achieves strong long-term prediction accuracy and remains stable over very long autoregressive rollouts, significantly outperforming data-driven neural network baselines. This result highlights the promise of combining multiresolution learning with finite-volume-inspired inductive bias for accurate and robust long-term prediction of complex dynamics.

40. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.45; Date: 2026-07-02T12:58:59Z; Popularity: 453 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

41. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-02T11:25:33Z; Popularity: 1,278 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-07-02T08:22:03Z; Popularity: 219 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.20; Date: 2026-07-02T08:05:16Z; Popularity: 198 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

44. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

45. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

46. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

47. [SNAP-FM: Sparse Nonlinear Accelerated Projection for Physics-Constrained Generative Modeling](https://arxiv.org/abs/2607.00095)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00095v1 Announce Type: new Abstract: Generative models have emerged as scalable surrogates for physical simulation, yet they offer no guarantee that their outputs respect the conservation laws, boundary conditions, and nonlinear invariants that govern the underlying physics. Constrained sampling closes this gap, enforcing such constraints exactly at inference time without retraining, but at a computational cost: projection, correction, and trajectory-optimization steps are repeated during sampling, with these steps becoming expensive for nonlinear constraints. Standard ML frameworks exacerbate this: their dense tensor algebra and limited sparse solver composability obscure the structure that physical constraints naturally induce, making efficient batched nonlinear optimization difficult to realize in practice. We address this bottleneck by exploiting the structure that sample-wise batching and local PDE couplings induce in the projection subproblems -- namely, block-sparse Jacobian and KKT systems -- exposing this structure using ExaModels.jl and solving the resulting sparse nonlinear programs with MadNLP.jl and GPU sparse factorization. Applied to Physics-Constrained Flow Matching (PCFM), on PDE benchmarks with linear, nonlinear, one-dimensional, and two-dimensional constraints, this approach accelerates nonlinear constraint projection while maintaining constraint satisfaction. These results show that sparse GPU nonlinear optimization is a practical foundation for constrained generative sampling in scientific machine learning.

48. [Verifiable Rewards for Calibrated Probabilistic Forecasting](https://arxiv.org/abs/2607.00164)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00164v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards can in principle train calibrated probabilistic forecasters, since a proper scoring rule such as the Brier score is computed from outcomes alone and is minimized in expectation by the true probability. In practice it degrades calibration, and existing remedies address epistemic uncertainty, where a model's confidence accompanies a verifiably correct or incorrect answer. We study aleatoric forecasting, where the forecast itself is the output and the label is one stochastic outcome, taking NFL in-game win probability as a testbed with the betting market as a reference. Rewarding the realized per-play outcome fails, because the single outcome is a noisy target and the policy gradient corrupts the chain of thought. We introduce a verifiable, label-free reward, a state-conditioned empirical win rate estimated from past outcomes, that removes the label noise, and we keep the gradient off the reasoning, by direct prediction or a gradient mask, so it cannot be corrupted. Trained with this reward alone, without human labels or supervised fine-tuning, a 7B model reaches the calibration of the betting market by direct prediction and is better calibrated than a zero-shot frontier model. That frontier model and a tabular estimator reach the same Brier score as this model, identifying the market's small remaining edge as live in-game information beyond their shared inputs. Masking the gradient, rather than dropping the chain of thought, preserves reasoning from which the forecast follows, which ordinary chain-of-thought training corrupts.

49. [Scaling Up Thermodynamic AI Models](https://arxiv.org/abs/2607.00170)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00170v1 Announce Type: new Abstract: Thermodynamic computing devices based on the Ising model show great promise for low-power AI inference and edge computing, but scalable methods for training large models for such hardware remain limited. Prior theory shows that the time-averaged behavior of high-temperature Gibbs-sampled Ising systems can implement feed-forward neural inference. We turn this theoretical correspondence into a scalable and purely backpropagation-based algorithm for training deep convolutional networks for thermodynamic inference on Ising machine hardware. Our image classification models achieve accuracies of 94.9% on CIFAR-10 and 76.0% on CIFAR-100 under binary Gibbs sampling. We then develop and experimentally validate a mathematical theory relating inference cost to accuracy and controlling autocorrelation times. Subsequently, we calculate asymptotic results showing that inference cost is bounded by a well-controlled tradeoff with performance and exhibit algorithms for computing optimal inference schedules. Finally, we discuss implications for hardware development and the future of high-temperature thermodynamic AI models.

50. [TallyTrain: Communication-Efficient Federated Distillation](https://arxiv.org/abs/2607.00173)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00173v1 Announce Type: new Abstract: Federated learning is bandwidth-bound on two orthogonal axes: model size, which limits how often parameter-averaging methods can afford to merge, and class count, which makes per-probe soft-label distillation prohibitive at large vocabularies. Both ceilings tighten as modern systems scale. We collapse the class-count axis to $\lceil \log_2 C \rceil$ bits per probe by transmitting only each peer's $\arg\max$ class index, where $C$ is the number of output classes. The resulting protocol, TallyTrain, is not merely compressed: under non-IID training it can be preferable to soft-label distillation, because under-trained peers are confidently wrong and majority voting filters this noise where soft-label averaging amplifies it. Across standard benchmarks, TallyTrain matches or beats soft-label distillation at up to three orders of magnitude less communication. We also relax the model-size axis: we compose the cheap hard-label consensus with sparse parameter merges to obtain a bandwidth-bridge variant, which Pareto-dominates every tested operating point of the standard FedAvg, FedProx and FedDF baselines.

51. [LSR-Net: Long-Short-Range Operator Learning for Pattern Dynamics on Manifolds](https://arxiv.org/abs/2607.00750)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00750v1 Announce Type: new Abstract: We propose the Long-Short-Range Neural Network (LSR-Net), an extensible operator-learning framework for predicting pattern dynamics on planar domains, spherical surfaces, and general manifolds. The method decomposes the forward evolution operator into a long-range component, represented by a compact Fourier multiplier constructed via the Sum-of-Exponentials (SOE) approximation, and a short-range component adapted to the underlying geometry and its intrinsic symmetries. For general manifolds represented by irregularly sampled point clouds, the long-range component is implemented by Gaussian gridding onto an auxiliary regular grid, where the Fourier multiplier is efficiently applied in k-space using FFT and the result is interpolated back to the original sample points. We evaluate LSR-Net on several benchmark systems, including the Allen-Cahn, Cahn-Hilliard, Schnakenberg, and Turing systems, over planar domains, spherical surfaces, and a blob-shaped manifold. Numerical results demonstrate that LSR-Net consistently achieves higher accuracy and improved stability compared with baseline operator-learning models. In particular, for Allen-Cahn dynamics on the sphere, the RMSE is reduced by approximately three orders of magnitude compared with the Spherical Fourier Neural Operator (SFNO). Rotation and reflection equivariance tests further confirm that the learned operator is consistent with these geometric transformations. These results indicate that LSR-Net provides an effective and robust approach for learning pattern dynamics on complex geometries.

52. [Lanczos Method for QRPA Strength Functions in Atomic Nuclei](https://arxiv.org/abs/2607.01114)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01114v1 Announce Type: new Abstract: We present a symmetric Lanczos method for computing charge-changing QRPA strength functions in atomic nuclei. Starting from the finite-amplitude-method formulation of the QRPA linear-response problem, we derive equivalent spectral representations and, in the real case, a reduced eigenvalue problem involving the matrix products $MK$ and $KM$, where $M\equiv A+B$ and $K\equiv A-B$ are formed from the usual QRPA matrices $A$ and $B$. The resulting formulation enables a matrix-free Lanczos approximation of the Lorentzian-smeared strength function over a broad energy interval from a single Krylov run, in contrast to conventional frequency-by-frequency response calculations. Numerical tests for $^{112}$Sn and $^{150}$Nd first show that GMRES reproduces the converged iterative FAM strength profiles while requiring fewer iterations. Using GMRES as the frequency-by-frequency reference, we then show that the Lanczos approximation reproduces the same strength profiles with reduced overall cost. These results indicate that symmetric Lanczos projection provides an efficient and accurate approach for QRPA strength-function calculations when spectral information is required over an extended frequency range.

53. [A High-Order Arbitrary Lagrangian-Eulerian Discontinuous Galerkin Method for the Boltzmann Equation in Nearly Incompressible Flows](https://arxiv.org/abs/2607.00199)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00199v1 Announce Type: cross Abstract: We propose the arbitrary Lagrangian-Eulerian (ALE) form of the Galerkin-Boltzmann formulation for the simulation of nearly incompressible flows with moving boundaries. The continuous Boltzmann equations are mapped to a reference state to compensate the mesh motion with an advection term. The resulting system is discretized in space using the discontinuous Galerkin method on unstructured meshes. A semi-analytic Runge-Kutta time discretization is used to overcome the stiffness introduced by the continuous Boltzmann equations. The well-known geometric conservation law is shown to be satisfied by the time and space discretizations and consistent update of geometric factors of the discretization. The implementation is on the GPU accelerated kernel library libParanumal and validated by a free stream preservation and moving Taylor-Green vortex test cases. Then, the capabilities are shown using a plunging symmetric airfoil in two-dimensions and moving carangiform fish in three-dimensions using perfectly matched layers.

54. [When is vaccine prioritization worth optimizing?](https://arxiv.org/abs/2607.00484)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00484v1 Announce Type: cross Abstract: Optimizing vaccine prioritization is often treated as the default policy response when vaccine supply is limited. Yet optimized prioritization carries administrative, ethical and communication costs, motivating an upstream question: whether differences among vaccine allocations can alter epidemic outcomes enough to make optimization epidemiologically necessary. We show that optimization is not always worth pursuing: in some regimes, vaccination markedly reduces epidemic burden, but many feasible allocation rules perform almost equally well, making the necessity of optimization low. We quantify this necessity as the range of epidemic outcomes generated by different allocations under fixed supply and show that it is governed by competition between vaccinating high-contact groups to slow transmission and vaccinating groups that benefit most directly: necessity is low when these protection routes are balanced and high when one dominates. Increasing transmission intensity changes this balance and drives a transition in the optimal allocation from transmission-focused prioritization toward direct protection. Different prevention objectives exhibit distinct transition thresholds, creating regimes in which optimizing one objective substantially compromises another, thereby revealing when the choice of prevention target matters most. This framework reframes vaccine prioritization as a prior decision problem, identifying when optimization is warranted, when simpler rules suffice, and when prevention goals conflict.

55. [A Nonstandard Finite Difference Scheme for a Nonlinear Parabolic Equation with p-Laplacian-Type Diffusion](https://arxiv.org/abs/2607.00489)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00489v1 Announce Type: cross Abstract: We propose and analyze a nonstandard finite difference (NSFD) scheme for nonlinear parabolic equations involving a p-Laplacian-type diffusion operator in one- and two-dimensional spatial domains. Following Mickens' design principles, the proposed discretization employs a nonlinear denominator function phi(.) together with a nonlocal approximation of the nonlinear diffusion term Delta_p, yielding a structure-preserving discrete model. The scheme is designed to retain key qualitative properties of the continuous problem, including positivity, boundedness, and stability, which may be lost by standard finite difference methods (FDMs). We establish the well-posedness of the continuous model, derive the NSFD scheme, and investigate its consistency, convergence, and local truncation error. Numerical experiments confirm the theoretical results and demonstrate that, unlike the standard explicit FDM, the proposed NSFD scheme avoids spurious oscillations and nonphysical negative solutions even for relatively large time-step sizes.

56. [The BiP-PRISM algorithm for fast and scalable core-loss STEM-EELS simulations](https://arxiv.org/abs/2607.00756)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.00756v1 Announce Type: cross Abstract: Quantitative interpretation of atomic-resolution STEM-EELS requires dynamical simulation of the electron probe before and after core-loss transitions, which is computationally expensive. While the PRISM algorithm accelerates this by reusing scattering matrices, we introduce beam partitioning for both the probe-forming ($\mathcal{S}_1$) and detector-propagating ($\mathcal{S}_2$) PRISM matrices to further reduce computational and memory costs. Each matrix is calculated on a sparse set of parent beams and reconstructed via natural-neighbor interpolation locally at the ionized atom. A locality result demonstrates that the total error is governed entirely by this on-atom reconstruction error. The resulting BiP-PRISM algorithm removes per-scan exit wave propagation and significantly reduces memory requirements, enabling full-resolution elemental mapping, 4D cubes, and momentum-resolved qEELS on consumer-grade GPUs. We characterize the approximation's validity regime and demonstrate the simulation of a multimodal five-edge oxide-interface map and an FePt nanoparticle Fe-L map at 5x memory reduction, showing that the algorithm achieves high accuracy with significantly lower computational demands.

57. [How Physical Dynamics Shape the Properties of Ising Machines: Evaluating Oscillators vs. Bistable Latches as Ising Spins](https://arxiv.org/abs/2603.06843)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 02 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2603.06843v3 Announce Type: replace Abstract: Ising machines exploit the natural dynamics of physical systems to minimize the Ising Hamiltonian and thereby address computationally hard combinatorial optimization problems. This paradigm has motivated a range of physical implementations. In the electronic domain, coupled networks of oscillators and bistable latches have emerged as two prominent realizations of Ising machines and are the focus of the present work. Despite this common abstraction, we demonstrate that differences in the underlying physical dynamics of oscillators and latches lead to fundamentally different stability properties of the resulting dynamical systems. Specifically, we show analytically that in Bistable Latch Ising Machines (BLIMs) all discrete Ising configurations possess identical linear stability, whereas in Oscillator Ising Machines (OIMs) the Jacobian spectrum depends explicitly on the spin configuration, enabling selective destabilization of higher-energy states. We further corroborate this analysis using finite-noise perturbation experiments initialized near prescribed Ising configurations. These results highlight how the characteristics of the device nonlinearity directly shape the local dynamical properties of Ising machine implementations.

58. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

59. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.68; Date: 2026-06-30T16:59:22Z; Popularity: 679 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

60. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.59; Date: 2026-07-02T15:37:18Z; Popularity: 595 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

61. [facebookresearch/airs-bench](https://github.com/facebookresearch/airs-bench)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-02T10:09:05Z; Popularity: 100 stars
   - Summary: AIRS-Bench: an AI Research Science benchmark for quantifying the end-to-end AI research abilities of LLM agents

62. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-06-28T20:50:08Z; Popularity: 99 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

63. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

64. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

RareDxR1: Autonomous Medical Reasoning for Rare Disease Diagnosis Beyond Human Annotation

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.00147

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
