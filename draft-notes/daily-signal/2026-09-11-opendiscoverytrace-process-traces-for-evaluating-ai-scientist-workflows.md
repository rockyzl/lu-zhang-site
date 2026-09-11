# Daily signal sidecar - 2026-09-11

## Selected Signal

- Title: OpenDiscoveryTrace: Process Traces for Evaluating AI Scientist Workflows
- URL: https://arxiv.org/abs/2609.09203
- Source: arXiv cs.AI
- Score: 9.00

## Candidate Review

- Signal: OpenDiscoveryTrace: Process Traces for Evaluating AI Scientist Workflows
- Primary source: https://arxiv.org/abs/2609.09203
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

1. [OpenDiscoveryTrace: Process Traces for Evaluating AI Scientist Workflows](https://arxiv.org/abs/2609.09203)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 9.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09203v1 Announce Type: new Abstract: Existing benchmarks for autonomous AI scientists evaluate only final outputs---generated code, hypotheses, or papers---yet discard the reasoning process by which those outputs were obtained. This makes it impossible to audit scientific methodology, diagnose failure modes, or distinguish systematic reasoning from fortunate guessing. We present \textbf{OpenDiscoveryTrace}, a public dataset of 558 complete AI scientific agent trajectories that captures how models reason, not just what they produce. Each trajectory records a structured 9-field-per-step trace---including thoughts, tool calls, observations, errors, revision triggers, and self-reported confidence---as models execute 124 scientific tasks spanning drug discovery, materials science, genomics, and scientific literature analysis. The dataset covers seven models: three frontier models (GPT-5.4, Claude Opus 4.6, and Gemini 3.1 Pro; 124 trajectories each, fully balanced across domains and difficulty levels) and four open-weight models (Qwen2.5-7B, Mistral-7B-v0.3, Phi-3.5-mini, and Qwen2.5-1.5B; 30 each), plus 60 live-retrieval variant trajectories. Pilot analysis on 363 LLM-judged trajectories reveals that process traces expose behavioral differences invisible to output-only evaluation: all three frontier models achieve comparable success rates (84--89%), yet Claude Opus 4.6 produces 30$\times$ more errors than GPT-5.4 (2.5 vs. 0.08 per trajectory, $p < 0.0001$, Cliff's $\delta = 0.613$), with qualitatively different error profiles---66.7% tool misuse for Claude versus 83.6% reasoning errors for GPT-5.4. We define five benchmark tasks with baselines from logistic regression, random forests, LSTMs, and Transformer models. The dataset, trace schema, agent harness, and benchmark definitions are publicly available under CC BY 4.0 to support research on process-level evaluation, scientific agent auditing, and AI governance.

2. [Adaptive Entangled Game Modules in Artificial General Intelligence](https://arxiv.org/abs/2609.09226)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09226v1 Announce Type: new Abstract: We introduce a probability-wave framework for modeling the collective behavior of interacting adaptive agents, deriving testable eigenmodes through a generalized behavioral intelligence (GBI) nonlocal probability-wave equation. This framework captures a broad range of human intelligence behaviors with analytical mechanisms and offers an indirect method to examine the Liu-Chen-Ao (LCA) hypothesis of nonlocal entangled nerve fibers in the brain through collective trader behaviors. Our empirical analysis of Chinese intraday stock market data demonstrates that adaptive entangled game modes explain 82-94% (89% overall) of observed decision patterns, a sharp contrast to the predictions of neoclassical finance based on independent rational agents. Moreover, 2-12% of behaviors show adaption to intraday news, events, and environments, characterized by dual equilibrium states and abrupt reference point shifts, while purely independent modes occur in less than 5% of cases. These findings empirically support the LCA hypothesis, as observable trading behaviors reflect underlying brain mechanisms and internal intelligence decision-making in behavioral psychology. Our results highlight the necessity of incorporating adaptive entangled game modules into artificial general intelligence (AGI) architectures, addressing the limitations of conventional artificial neural network (ANN)-based AI, which relies on trillions of opaque parameters. By integrating ANN-based AI with probability-wave-based entangled-brain simulations, machine learning can enrich AGI foundation models (FMs) and facilitate the development of human-like processing units (HPUs) that leverage brain-inspired mechanisms. Such HPUs may ultimately create more compact, efficient, and robust AGI systems, particularly for embodied intelligence and robotics.

3. [Decision-Focused Active Learning for Scale-Aware Critical-Materials Recovery](https://arxiv.org/abs/2609.09413)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09413v1 Announce Type: new Abstract: Choosing a recovery process for scale-up requires connecting laboratory results with product requirements, process costs, and scale effects. We analyze records from Pacific Northwest National Laboratory's Computer Intelligence for Critical Element Recovery and Optimization (CICERO) workflow for autonomous selective precipitation. Active learning uses prior results to choose experiments. In a conditional retrospective benchmark with fitted models and recycled neodymium-iron-boron (NdFeB) magnet records, active learning finds the best recorded result with fewer experiments than nonadaptive space filling. Enrichment is the selected rare-earth-to-iron ratio relative to that in the feed. Adaptive policies reach the recorded enrichment maximum by 16 to 24 wells (individual experiments), versus 48. Our two-stage reconstruction ties two adaptive alternatives at 16 wells. Conditional analyses of recycled samarium-cobalt (SmCo) magnets show a Round 2 tradeoff between purity and nominal yield, the recovery fraction calculated from an assumed starting amount - NdFeB Round 1 routes differ in enrichment. Rankings for produced water from oil and gas extraction depend on phase and dilution assumptions requiring confirmation. We propose choosing batches by their expected reduction in downstream Bayes risk: the minimum expected loss among available process decisions under current beliefs. In exploratory simulations, a hybrid that filters candidates has lower estimated loss than the implemented joint search across routes and conditions. Differences involving the synthetic two-stage policy are small relative to estimation uncertainty. We outline a pre-registered prospective test under a shared loss and logging standard, requiring clarified measurements and records, a defined process decision and relevant outputs, credible economic inputs, and validation at the intended scale.

4. [Subagents vs Agent Skills: Executing Reusable Knowledge for Long-Horizon Agentic Tasks](https://arxiv.org/abs/2609.09233)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09233v1 Announce Type: new Abstract: How can language model agents effectively leverage libraries of reusable knowledge to solve long-horizon tasks? Recent work has increasingly focused on agent skills: reusable capabilities represented as skill packages, i.e., multi-file bundles containing instructions, scripts, and other resources that help agents perform specific tasks. Agent skills are typically executed by loading their skill instructions into an agent's context and relying on the agent to follow them. As task horizons grow, however, this approach becomes increasingly brittle, because reasoning quality degrades as more information accumulates in the context window. We investigate an alternative approach in which skill packages are instead invoked as subagents. Rather than loading skill instructions into the main context, subagent execution spawns fresh context windows dedicated to solving individual subtasks. We show that subagent execution outperforms agent-skill execution when skill packages expose clear input-output contracts and their instructions encode the procedural knowledge needed to fulfill those contracts. The tradeoff is additional communication overhead, as extra tokens are required to coordinate between the main agent and its subagents. Our results show that the benefit of reusable knowledge depends not only on its content, but also on how it is organized and invoked.

5. [A Community-Developed Domain Ontology for Magnetic Materials](https://arxiv.org/abs/2609.11464)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11464v1 Announce Type: cross Abstract: Magnetic materials play a crucial role in energy-related technologies, mobility, and sensing, but their complex multiscale behaviour and the coexistence of multiple unit systems pose persistent challenges for data exchange and interpretation. This paper presents a domain ontology for magnetic materials, developed within the European Union funded Magnetic Multiscale Modelling Suite (MaMMoS) project and aligned with the Elementary Multiperspective Material Ontology (EMMO). The ontology formalises intrinsic, hysteretic, and microstructural properties across multiple length scales and supports semantic interoperability between simulation tools, databases, and experimental workflows. One key feature of the ontology is its code-based and human-readable structure, enabled through the EMMOntoPy framework, which allows for direct manipulation and versioning without relying on opaque .owl or .ttl files. This facilitates collaborative development and improves transparency. The ontology supports FAIR (Findable, Accessible, Interoperable, Reusable) principles and is openly available for extension by the community. The aim of the MaMMoS project is to foster reproducibility, improve traceability, and promote the adoption of ontology in the magnetism domain. The ontology that has been developed already serves as the foundation for multiple software tools that handle all kinds of magnetic material data.

6. [Rapidly scaling online storage to serve over 1 billion ChatGPT users](https://openai.com/index/scaling-storage-one-billion-users-part-one)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Fri, 11 Sep 2026 10:00:00 GMT
   - Summary: Learn how OpenAI evolved Habitat from a Python library into a globally distributed storage platform serving 1 billion ChatGPT users and 22M requests per second.

7. [Introducing ChatGPT for Financial Services](https://openai.com/index/introducing-chatgpt-financial-services)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 10 Sep 2026 07:00:00 GMT
   - Summary: Introducing ChatGPT for Financial Services, combining built-in financial data and GPT-6 Astra for research, modeling, and client-ready materials.

8. [GPT-6 Astra: The next generation in intelligence for work](https://openai.com/index/gpt-6-astra-next-generation-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 09 Sep 2026 11:00:00 GMT
   - Summary: Meet GPT-6 Astra, OpenAI’s most capable model for business, with advanced reasoning, computer use, and stronger writing and design judgment.

9. [Rebuilding AUTOMATIC1111 with Gradio Workflow](https://huggingface.co/blog/gradio-workflow-1111)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

10. [Gradland: On Phenomenal Experience, Differentiated Across Many Dimensions](https://arxiv.org/abs/2609.09306)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09306v1 Announce Type: new Abstract: This paper investigates the hypothesis that the first-order structure of physical interactions, i.e. gradients or Jacobians, characterizes the structure of phenomenal experience. It does so in an idealized world inhabited by neural networks, Gradland, where the physics are known and the functions are (mostly) differentiable. The paper introduces two measures of Jacobian structure: effective rank and cohesion, based on Kirchhoff complexity. Applying the measures to a series of worked examples shows the hypothesis accounts for: (1) the duration of experience, that it can prolong over hundreds of milliseconds; (2) the difference between what is experienced vividly and obscurely; (3) the experience of texture; (4) the blooming buzzing confusion presumably experienced by newborns; (5) the difference between ideas that are held distinctly in mind and ideas that are confused; (6) what learning is like; and finally (7) the paper explains the function of rich, dense experience.

11. [An Autonomous GeoAI Agent for Arctic Eco-Navigation](https://arxiv.org/abs/2609.09374)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09374v1 Announce Type: new Abstract: Arctic maritime navigation is becoming increasingly important as changing sea-ice conditions expand seasonal accessibility while simultaneously introducing substantial operational, environmental, and community risks. Arctic route planning is inherently a multi-criteria problem: routes that improve vessel safety or efficiency may increase exposure to sea ice, sensitive ecosystems, or nearby communities. Existing routing methods prioritize travel time, fuel use, and navigational risk, often overlooking ecological and community impacts. We introduce a human-in-the-loop, multi-agent GeoAI system for Arctic eco-navigation that integrates operational, physical, ecological, and community-related criteria within a unified routing framework. Multiple specialized agents coordinate geospatial data acquisition and preparation, multi-objective route generation, and skyline-based decision support. The ecological criteria explicitly account for exposure to sensitive areas, including Essential Fish Habitat and seal critical habitat. By considering these ecosystem impacts and potential community burdens while keeping consequential value judgments under human control, the framework supports safer, more transparent, and socially responsible Arctic navigation. Project page and code are publicly available. https://samiraat.github.io/Arctic-Eco-Navigation-Agent/, https://github.com/samiraat/Arctic-Eco-Navigation-Agent

12. [Valerant: An Automatic Navigable Game Map Generator via Action-Conditioned World Model Exploration](https://arxiv.org/abs/2609.09418)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09418v1 Announce Type: new Abstract: World Action Models (WAMs) couple predictive world modeling with action generation, allowing anticipated future states to guide agent behavior. Although WAMs are rapidly advancing embodied AI, general-purpose counterparts remain largely unexplored in games. Existing game-oriented approaches often combine action-conditioned world models with external policies and reward functions to realize WAM-like decision-making, yet they operate mainly in 2D visual observation space and do not instantiate persistent 3D geometry. Extending this paradigm to 3D games introduces a distinct challenge. In autonomous driving and robotics, the physical environment exists independently of the model, providing a persistent 3D world in which selected actions can be executed. Games have no such external substrate; the virtual world itself must be instantiated. Most playable games require a persistent and navigable space, while 3D games additionally require explicit geometry that supports movement and interaction. Action-conditioned video rollouts provide visual observations but not this spatial representation. We present \textsc{Valerant}, a training-free framework that transforms a pretrained action-conditioned world model into a WAM for exploring and constructing 3D game maps. By coupling predictive visual rollouts with SLAM-based spatial reconstruction and exploration-driven action selection, \textsc{Valerant} progressively transforms a single image into a persistent 3D game map. This framework extends WAM-based interaction beyond 2D visual simulation and offers a new approach to reducing manual effort in 3D game-map creation.

13. [XAI-Arena: Can LLMs Assess the Quality of XAI Explanations?](https://arxiv.org/abs/2609.09428)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09428v1 Announce Type: new Abstract: Evaluating the quality of explanations produced by explainable AI (XAI) methods remains challenging because existing approaches often rely on subjective human judgment, limiting reproducibility, scalability, and comparability between studies. We examine whether LLMs can serve as a reproducible and scalable mechanism to make comparative assessments of the quality of XAI explanations. We introduce XAI-Arena, an LLM-as-a-judge framework for scalable, reproducible, multidimensional, and stakeholder-sensitive evaluation of XAI explanation quality. XAI-Arena then allows us to compare XAI explanations along various dimensions, namely, perceived simplicity, clarity, task adequacy, trust calibration, actionability, transparency, faithfulness, and overall interpretability. We then benchmark XAI explanation methods across various datasets, machine learning models, and stakeholder personas. Human validation shows a strong positive association between LLM-generated and human ratings (Spearman's rho=.693, p<.001). Together, LLM-based evaluations can capture systematic differences in XAI explanation quality and provide a scalable and reproducible framework for comparative assessment of XAI explanations.

14. [Do Agents Know When They Succeed? Calibrating Agent Confidence from Internal Representations](https://arxiv.org/abs/2609.09448)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09448v1 Announce Type: new Abstract: As agentic systems getting adopted rapidly in safety critical applications, it is vital to measure the confidence associated with the agentic actions. In comparison to the traditional machine learning systems, agentic workflows have complex failure modes with planning, tool invocation and dynamic environment interactions. In this paper, we investigate whether model's internal representations provide stronger signals of eventual task success in multi-turn agentic setups. We introduce two complementary methods: Latent Trajectory Dynamics (LTD), which summarizes changes in residual-stream representations across an an interaction trajectory, and the Action Representation Probe (ARP), which predicts success from representations formed at action decisions. Across three interactive benchmarks (Bash, SQL, Python) and three model families (Qwen14B, Qwen7B, DeepSeek6.7B), our methods consistently outperform surface level generation and sequence-based calibration baselines providing a zero-overhead reliability monitor that requires neither prompt alterations nor multi-sample rollouts.

15. [A new generation of effective core potentials: Selected heavy 5d and 6p elements](https://arxiv.org/abs/2609.10853)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.10853v1 Announce Type: new Abstract: We expand the correlation-consistent effective core potentials (ccECPs) library by developing semi-local pseudopotentials and matching basis sets by heavy-elements from $5d$ (Hf, Os, Hg) and $6p$ (Tl, Po, At, Rn) blocks. In order to accurately capture scalar relativistic effects, spin-orbit coupling, and electron-electron correlation, we implement a tiered core-valence partitioning strategy across three distinct resolutions. This includes a small 60-core (Hf, Os, Hg) that explicitly correlates subvalence shells, a large 78-core definition for the main-group elements that rigorously accounts for core polarization and relaxation effects in sparse valence environments, and an intermediate 68-core partition for Hg and Tl. This 68-core architecture represents a unique development in the ccECP library, optimizing the balance between accuracy and computational efficiency in a manner unexplored for ligther elements. Optimized against relativistic all-electron CCSD(T) references, the ccECPs deliver outstanding atomic precision, achieving a global average atomic low-lying states deviation of just 0.045 eV. This accuracy translates directly to robust molecular transferability, systematically restricting dissociation energy discrepancies to under 0.03 eV, equilibrium bond lengths to within 0.005 {\AA}. By enforcing a regularized, finite potential at the origin for enhanced numerical stability in stochastic quantum Monte Carlo methods, this library removes a critical methodological bottleneck for predictive many-body simulations of heavy-element systems and materials.

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

21. [The AI policy window is open. We need to act.](https://openai.com/index/ai-policy-window)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 09 Sep 2026 13:00:00 GMT
   - Summary: Chris Lehane argues that stronger AI capabilities require stronger safety evidence, shared standards, and durable policy action while the policy window remains open.

22. [Paul Christiano joins OpenAI Foundation Board](https://openai.com/index/paul-christiano-joins-openai-foundation-board)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 09 Sep 2026 17:00:00 GMT
   - Summary: Paul Christiano joins the OpenAI Foundation Board and its Safety and Security Committee, bringing experience in AI alignment, safety, and standards.

23. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

24. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

25. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

26. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

27. [IBM releases SOTA Granite Time Series PatchTST-FM-r2 model with commercial-friendly license](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 09 Sep 2026 15:36:24 GMT

28. [Safety for Whom? Refusing the Right Subset of a Topic, Not the Whole Topic](https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 08 Sep 2026 14:23:07 GMT

29. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

30. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

31. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

32. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

33. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

34. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

35. [The Open ASR Leaderboard Adds Its First Global South Language](https://huggingface.co/blog/open-asr-leaderboard-global-south)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 GMT

36. [The Menu Is an Execution Prior: State-Path Tool Menus for Online Agents](https://arxiv.org/abs/2609.09395)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.09395v1 Announce Type: new Abstract: Language models act through tools, yet practical agents face libraries containing thousands of interfaces. We introduce the tool menu as the short, ordered subset of available tools shown to an agent before execution. The agent can call only tools in this menu. Multi-step tasks require the final action and the prerequisite tools that create its inputs in a usable order. Current constructors rank tools by request relevance, which can surface the final action while omitting or delaying less obvious producers. We introduce the state path, a pre-execution route from the observable request state to the desired outcome, and propose State-Path Tool Menu to learn it. Our framework treats the menu as an execution prior over these routes. Its encoder represents which tools can run from the current state, how their outputs satisfy later inputs, and which orders recur in training paths. A retriever covers an executable entry, the missing-input producers, and the final action. A reranker then places producers before consumers. On ToolBench, our menu raises online success from 0.737 to 0.898 and outperforms retrieval, reranking, generation, and routing baselines without changing the agent. The State-Path menu also covers more complete chains with 32 tools than the official list covers with 128, and its success gain persists across executor families with different model capacities. Our code is at https://github.com/Met2348/State-Path.

37. [A Two-Mirror Faceted Projection System for EUV Lithography](https://arxiv.org/abs/2609.11299)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11299v1 Announce Type: cross Abstract: We propose an all-reflective two-mirror projection system for extreme ultraviolet (EUV) lithography operating at exposure wavelengths of $13.5$~nm (Mo/Si) and $11.2$~nm (Ru/Be), delivering a fourfold ($4\times$) demagnification of the periodic mask pattern at a numerical aperture approaching unity ($\mathrm{NA}_{\max} \approx 0.993$). In contrast to conventional EUV projection objectives that incorporate 6--10 aspheric mirrors with an overall optical throughput of less than $15\%$, the proposed design redirects each accepted discrete spatial diffraction order scattered by the mask onto the wafer via a dedicated pair of planar mirror facets. The number of reflections is strictly fixed at two for all accepted orders, retaining $50$--$60\%$ of the power leaving the mask in each accepted order. We derive a spatial geometry providing rigorous optical path length equalization across all diffraction orders, thereby removing order-dependent propagation phase shifts. Individually optimized 30-bilayer Bragg multilayer coatings are designed for each facet using the transfer matrix method combined with global evolutionary optimization algorithms. The architecture is generalized to a three-dimensional vector formulation with a two-dimensionally periodic mask. Utilizing inverse lithography technology, Fourier parameterization, and a differentiable electromagnetic modal waveguide solver, we solve the synthesis problem for binary absorber masks (La absorber on a Ru/Be/Sr multilayer mirror). We demonstrate simulated aerial images of sub-10-nm features on the wafer (isolated peaks with a full width at half maximum (FWHM) of approximately $5.4$~nm and line pairs with a critical dimension of $6$~nm) and find that the two peaks remain resolved for the tested wafer defocus values from $0$ to $5$~nm along the $z$-axis.

38. [Instabilities in self-consistent diagrammatic approaches and how to cure them](https://arxiv.org/abs/2609.11405)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11405v1 Announce Type: cross Abstract: While self-consistent diagrammatic approaches are widely used to compute the physical properties of correlated quantum materials, their applicability may get severely hindered precisely in the parameter regions, where the most exciting physics is observed. One of the major issues, referred to as "misleading convergence", is the tendency of iterative schemes to converge to unphysical fixed points for intermediate-to-strong electronic interactions, regardless of numerical accuracy of the computation. Here, we explicitly verify that the origin of this problem in several established self-consistent many-electron approaches, defined in the general diagrammatic framework of the boson-exchange formalism, resides exclusively in the stability condition of the respective iteration schemes, and not in an intrinsic breakdown of their self-consistent diagrammatic description. This insight enables a simple and general remedy, as recently proposed in Phys. Rev. Lett. 137, 016502 (2026): The redefinition of the iterative procedure, by inverting the unstable eigendirections of the Jacobian associated to the fixed point of the self-consistent algorithm. We illustrate the successful outcome of this procedure by means of systematic calculations performed on testbed, exactly solvable, models. Our results demonstrate that the physical fixed point of the diagrammatic schemes we considered can be stabilized, de facto, across the entire parameter range, including the most challenging nonperturbative/strong-coupling regimes.

39. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.86; Date: 2026-09-11T14:40:57Z; Popularity: 1,859 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

40. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-09-10T10:11:50Z; Popularity: 485 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

41. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-08T23:35:03Z; Popularity: 362 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

42. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-09-08T08:23:44Z; Popularity: 243 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

43. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

44. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

45. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

46. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

47. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

48. [M3-Former: Multimodal Transformer with Mixture-of-Experts for Long-Term Vessel Trajectory Prediction](https://arxiv.org/abs/2609.10559)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.10559v1 Announce Type: new Abstract: To address the challenges of behavioral multimodality, limited semantic utilization, and long-term error accumulation in vessel trajectory prediction, this paper proposes M3-Former, a multimodal trajectory prediction framework enhanced by large language models (LLMs). The proposed framework incorporates vessel static attributes and navigational intent as semantic priors for long-term trajectory modeling. Specifically, a unified multimodal representation space is constructed, in which static semantic information is encoded by a pre-trained LLM and aligned with dynamic trajectory features through self-attention. To jointly capture global route planning and local motion variations, a dual-granularity Mixture-of-Experts (MoE) architecture is introduced, where sequence-level experts model global navigation trends and token-level experts refine fine-grained maneuvering behaviors. In addition, a Steering-Weighted Cross-Entropy loss is designed to alleviate the long-tail distribution of sparse turning samples and improve prediction accuracy in critical maneuvering scenarios. Experiments on a real-world Danish AIS dataset demonstrate that M\textsuperscript{3}-Former consistently outperforms state-of-the-art baselines across prediction horizons from 1 to 4 hours. In the 4-hour prediction task, the proposed method reduces Average Displacement Error (ADE) and Final Displacement Error (FDE) by 4.4\% and 5.1\%, respectively, compared with the strongest baseline. Qualitative and ablation analyses further verify that semantic fusion effectively reduces long-term trajectory drift, while the dual-granularity MoE improves robustness in complex waterways and route-branching scenarios. The proposed framework establishes a semantic-guided hierarchical prediction paradigm, in which high-level navigational intent and local motion dynamics are jointly modeled for robust long-term vessel trajectory forecasting.

49. [Halo: Improving forecast accuracy through heteroscedastic estimation](https://arxiv.org/abs/2609.10589)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.10589v1 Announce Type: new Abstract: Heteroscedastic forecasting, where a network estimates a scale parameter alongside a location parameter, is normally motivated by uncertainty quantification. This paper shows it also improves the point estimate, in contrast to reported negative results for heteroscedastic estimation outside time series. Halo is a modification that reuses an existing deep forecaster's architecture, giving it a second output for the scale of its implied distribution and training it under the matching negative log likelihood. Adapting three state-of-the-art models --- a transformer, a graph network paired with a variational autoencoder, and a single-layer convolutional network --- under both Gaussian and Laplacian losses demonstrates the phenomenon. On the five electricity price markets of a standard forecasting benchmark, Halo improves MSE and MAE in 28 of 30 model-market-metric comparisons, cutting average MSE by 2.6% to 16.5% and average MAE by 1.7% to 11.0%. Two findings emerge: (1) whether the scale estimate comes from a second projection head or from a full parallel network matters far less than whether the network estimates scale, and (2) the improvement holds under the hyperparameters already tuned for the point-estimate baseline, so retuning is optional.

50. [Conformal Calibration Transfer](https://arxiv.org/abs/2609.10737)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.10737v1 Announce Type: new Abstract: Conformal prediction converts point predictions into set-valued predictions with coverage guarantees under exchangeability between calibration and deployment data. We study conformal calibration transfer, where this requirement fails because labeled calibration is available only in a source space, while prediction sets are needed in a target space linked to the source through unlabeled paired observations (e.g., paired modalities or sensor changes). We propose Transported Conformal Calibration (TCC): we transport labeled source calibration into the target space using the paired data, and then correct residual post-transport mismatch using only unlabeled target inputs. We instantiate this correction with two complementary methods: TCC-KS, which uses a label-free uncertainty surrogate to detect mismatch and adjust calibration conservatively, and weighted-TCC, which reweights transported calibration toward the target domain for improved efficiency when weights are stable. We provide finite-sample target-domain coverage guarantees that adapt to an observable measure of mismatch. Across CIFAR-100-C, Tiny-ImageNet-C, and SEN12MS, we show reliable target-domain coverage transfer without labeled target calibration data, with label-free diagnostics that predict when correction is needed.

51. [A Bellman Optimality Equation for Plasticity](https://arxiv.org/abs/2609.10776)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.10776v1 Announce Type: new Abstract: In continual reinforcement learning, carefully managing the stability-plasticity tradeoff remains a core challenge. Recent work by Abel et al. (2025) formalized this dilemma by defining plasticity as the generalized directed information from an agent's observations to its actions, and empowerment as the generalized directed information from its actions to its observations. This formulation successfully reframes the traditional stability-plasticity tradeoff as an empowerment-plasticity tradeoff. However, while extensive literature exists on optimizing for empowerment, there is currently no research addressing the optimization of plasticity under this new definition. This paper presents preliminary work toward optimizing plasticity within Markov decision processes. We show that there exists a Bellman optimality equation for optimizing plasticity similar to previous work for empowerment.

52. [A Geometrically Parameterized Quasi-Stationary 3D Model for High-Frequency Induction Tube Welding](https://arxiv.org/abs/2609.11250)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11250v1 Announce Type: new Abstract: A three-dimensional multiphysics finite element framework for the simulation of high-frequency induction welding of tubes is presented. The model couples a time-harmonic magnetic scalar potential formulation with a stabilized quasi-stationary advection-diffusion heat transport equation, enabling accurate prediction of electromagnetic and thermal fields under industrial operating conditions. The framework incorporates parameterized geometry generation and semi-automated, physics-tailored mesh construction and is implemented using the open-source tools GetDP and Gmsh. Validation against measurements from a commercial induction welding line for AISI 304 stainless steel tubes demonstrates good agreement with operating data. The validated model is subsequently applied to investigate the influence of impeder material by comparing a conventional FeNiZnV ferrite with the soft magnetic composite Ferrotron 559H for the induction welding of AISI 304 stainless steel tubes.

53. [Stress-Testing Dynamical and Generative Downscaling Using Subseasonal Extreme Precipitation Forecasts](https://arxiv.org/abs/2609.11696)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11696v1 Announce Type: new Abstract: Coarse spatial resolution limits the ability of subseasonal prediction models to resolve extreme precipitation. Downscaling with either dynamical or deep generative models can overcome this issue, but the comparative performance of these models for extremes across different atmospheric regimes remains poorly understood. In this work, we evaluate the Weather Research and Forecasting (WRF) model against a diffusion-based generative model by downscaling two physically distinct, extreme precipitation events up to lead times of 3 weeks. For a fair comparison with WRF, which can downscale boundary conditions from different driving models without model-specific training, the diffusion model is trained in an unpaired fashion. Both approaches improve upon the raw European Centre for Medium-Range Weather Forecasts forecasts, in comparison to fused rain gauge-radar observations in Switzerland (CombiPrecip), but exhibit regime-dependent strengths. WRF achieves the highest probabilistic skill for a multicell, non-stationary event. Conversely, the diffusion model is more consistent across different performance metrics for the two events, outperforming WRF in a more stationary supercell event. These results demonstrate that explicit dynamical modeling can add value for specific precipitation events for subseasonal lead times, and that generative downscaling adds value more broadly in different situations.

54. [A Robust All-Mach Six-Equation Diffuse-Interface Method for Multiphase Flows with Surface Tension](https://arxiv.org/abs/2609.10727)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.10727v1 Announce Type: cross Abstract: A robust finite-volume framework is presented for the simulation of compressible multiphase flows with surface tension across a wide range of Mach numbers. The method is based on a two-pressure, six-equation diffuse interface model incorporating viscous, gravitational, and capillary effects through the continuum surface force formulation. To consistently account for capillary-induced pressure jumps, an HLLC Riemann solver is developed using generalized Riemann invariant analysis, and the instantaneous pressure relaxation procedure is modified to preserve the Laplace pressure jump during phase equilibration. To overcome the excessive numerical diffusion of conventional approximate Riemann solvers in the low-Mach regime, a robust low-Mach correction is proposed by extending our previous formulation with a modified scaling strategy that remains stable in regions of strong pressure variation. The resulting method retains accuracy from nearly incompressible flows to compressible regimes while preserving the robustness of the six-equation formulation. The numerical framework is validated using a series of benchmark problems involving surface tension, viscosity, gravity, and compressibility. The results demonstrate accurate prediction of interface dynamics, capillary pressure, and low-Mach flow features, while significantly reducing numerical dissipation without compromising stability. The proposed methodology provides an efficient and reliable approach for the simulation of complex multiphase flows spanning a broad range of flow regimes.

55. [Interface-Controlled Phase Stability in Polymorphic HfO$_2$ Revealed by Machine-Learning Atomistic Simulations](https://arxiv.org/abs/2609.11307)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11307v1 Announce Type: cross Abstract: HfO$_2$ exhibits rich polymorphism, and competition among different phases underpins many of its functional properties. Yet bulk free-energy relations alone cannot explain phase selection at mixed-phase boundaries, where interface orientation and structural continuity constrain collective rearrangements. Here, using machine-learning atomistic simulations and a Hf-centered local phase classification scheme, we show that crystallographic interface matching redirects phase competition and accessible transformation pathways. The M(100)/T(100) interface remains pinned as an M/T mixture throughout 3 ns simulations from 300 to 1800 K. M/PO, M/AO, and PO/AO interfaces retain two-phase coexistence up to 900 K, whereas all T/PO interfaces become PO-dominant. At 1800 K, all non-M interfaces become T-dominant, while M-containing interfaces retain a monoclinic majority. Nudged elastic band calculations reveal lower-barrier routes through interface states. For M(100)$\rightarrow$T(100), the interface-mediated route in a long cell ($\sim$12 nm) yields a barrier of 136.03 meV/f.u., 29.2 % lower than the direct route in a short cell ($\sim$3 nm). This difference is associated with sequential phase-front motion absent from the short cell. These results identify phase boundaries as active participants in phase stability and transformation and establish interface orientation and crystallographic matching as variables for stabilizing metastable polymorphs and directing phase conversion in HfO$_2$.

56. [Kinetic modeling of molecular beam formation in a cryogenic buffer-gas cell](https://arxiv.org/abs/2609.11544)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11544v1 Announce Type: cross Abstract: Cryogenic buffer-gas cells are widely used to produce cold molecular beams, but the microscopic dynamics governing beam formation remain challenging to model. Here we present fully kinetic simulations of a cryogenic buffer-gas cell using the Direct Simulation Monte Carlo method implemented in the PICLas framework, treating the buffer gas and ablated molecules within a single unified model. We capture characteristic features of cryogenic buffer-gas sources, including plume cooling, directed transport toward the aperture, and the formation of a slow molecular beam, while also resolving energy transfer from the hot ablation plume to the helium buffer gas that is inaccessible to existing approaches relying on the background-gas approximation. Our results demonstrate that fully kinetic simulations can provide detailed insights into buffer-gas cell dynamics and open a route toward a systematic optimization of such sources.

57. [kobra: a new Vlasov code intended for plasma-wall modeling](https://arxiv.org/abs/2609.11563)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 11 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11563v1 Announce Type: cross Abstract: In a fusion device plasma-wall interactions \edit{on the sheath scale} can be modeled as a collisionless problem. When modeling these regions particle-in-cell codes suffer from statistical error originating from undersampling the velocity space. On the other hand, Vlasov codes do not have this issue as they evolve the full distribution function. Here, we present a new finite-volume Vlasov code, kobra, equipped with adaptive-mesh refinement to reduce computational effort. Currently, the code solves the Vlasov-Poisson equations. We validate our code in 1d1v and 1d2v using established benchmarks, i.e. the two-stream instability, Landau damping, the Dory-Guest-Harris instability, and also a classical electrostatic plasma sheath. We find that the code reproduces the theoretical properties of these problems well. More importantly, the adaptive grid provides a computational gain that is likely to scale to higher dimensional, plasma-wall simulations.

58. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

59. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.74; Date: 2026-09-09T12:52:30Z; Popularity: 740 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

60. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-11T14:25:29Z; Popularity: 225 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

61. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.14; Date: 2026-09-11T16:51:56Z; Popularity: 1,137 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

62. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-08T11:15:39Z; Popularity: 123 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

OpenDiscoveryTrace: Process Traces for Evaluating AI Scientist Workflows

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.09203

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
