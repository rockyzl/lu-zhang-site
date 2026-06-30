# Daily signal sidecar - 2026-06-30

## Selected Signal

- Title: IMCBench: A benchmark for multimodal LLMs in Image-grounded Medical Conversations
- URL: https://arxiv.org/abs/2606.28556
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: IMCBench: A benchmark for multimodal LLMs in Image-grounded Medical Conversations
- Primary source: https://arxiv.org/abs/2606.28556
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

Total candidates reviewed after duplicate-source filtering: 67

1. [IMCBench: A benchmark for multimodal LLMs in Image-grounded Medical Conversations](https://arxiv.org/abs/2606.28556)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28556v1 Announce Type: new Abstract: Recent advances in large language models and vision-language models have enabled reasoning over multimodal data, offering opportunities for clinical applications such as decision support and triaging. However, existing medical AI benchmarks are fragmented: some support multi-turn dialogues but lack images, while others provide multimodal inputs but focus on single-turn QA tasks. To address this gap, we introduce IMCBench, an image-grounded, multi-turn medical conversation benchmark that pairs real, publicly available clinical images with synthetic patient profiles to simulate realistic patient-clinician interactions. Each conversation is evaluated across three clinical dimensions: safety, accuracy, and appropriate use of uncertainty in diagnosis. We benchmark eight multimodal frontier models across four model families (Claude, GPT, Nova, and Llama), scoring each on a 1-5 scale using LLM-as-Jury scoring calibrated against expert clinician annotations. Our results show that Claude Opus 4.6 achieves the highest overall score (3.61), followed by Claude Sonnet 4.6 (3.30) and GPT-5.2 (3.29), though no model dominates all dimensions and safety degrades for both malignant and rare conditions ($\Delta$ = -0.27 each). Ablation studies further reveal that both visual input and EHR context contribute to safe guidance (safety drops of 0.18 and 0.23 on average when each is removed), with stronger models leveraging visual features more effectively. Together, these findings demonstrate that accurate clinical description does not guarantee safe patient guidance, motivating the need for multi-dimensional evaluation frameworks in medical AI.

2. [Recursive Self-Evolving Agents via Held-Out Selection](https://arxiv.org/abs/2606.28374)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28374v1 Announce Type: new Abstract: LLM agents are increasingly improved without weight updates by evolving a natural-language artifact, such as reflections, workflows, playbooks, cheatsheets, or optimized prompts, that conditions a frozen policy. Such methods are typically reported as wins on the single benchmark where they help. We study them apples-to-apples and surface a sharper picture. We introduce RSEA, a Recursive Self-Evolving Agent that carries a compact three-layer natural-language state: an imperative strategy, reusable skills, and a procedural playbook. Across generations, RSEA rewrites all three layers from its own trajectories and commits a candidate only if it does not regress on a disjoint held-out split, using a strict keep-better gate. Across four diverse benchmarks, ALFWorld, GAIA, (\tau)-bench, and WebShop, and six faithful baselines, ReAct, Reflexion, GEPA, AWM, ACE, and Dynamic Cheatsheet, all evaluated on one shared local backbone, we find three main results. First, no artifact universally wins. RSEA is the strongest single-pass method on ALFWorld, reaching 69.3% compared with 64.6% for ReAct (McNemar (p=0.015)), and reaches 79.4% with retry, the best overall result. However, concrete-workflow induction, represented by AWM, is best on the strong-backbone tool-use tasks. Second, unguarded context evolution is high-variance and unsafe. Dynamic Cheatsheet, which curates context online without a held-out gate, is near-best on ALFWorld at 70.7%, yet collapses on WebShop, with a score of 0.14 compared with 0.43 for ReAct. Third, RSEA's strict held-out selection is what makes recursive self-evolution monotone-safe: it never significantly underperforms the base agent on any benchmark and falls back to vanilla ReAct when evolved context would hurt.

3. [Data and Evaluation Closed-Loop for Model Capability Enhancement](https://arxiv.org/abs/2606.28471)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28471v1 Announce Type: new Abstract: Model capability is the central variable in LLM pre-training, yet is never observed directly: data shapes it prospectively, while evaluation reveals it only retrospectively, compressing samples, prompts, decoding, and scoring rules into one noisy score. Practical optimization runs this backward: a failure is observed first, and the engineer must infer the corpus fix. The two sides speak incompatible vocabularies -- benchmark names and per-sample correctness versus data sources, domains, and quality labels -- so this inference is usually intuition, not method. We close this gap with the \emph{capability slice}: a group of evaluation samples sharing background condition, task type, solving operation, and output constraint -- precise enough to localize a single weakness yet stable enough to survive aggregation, unlike a benchmark name, too coarse, or a single sample, too noisy. Built around this unit, an evaluation taxonomy, a non-instruction data taxonomy, and mapping rules form a closed loop turning a benchmark-level failure into a targeted, testable data intervention. We test this loop on two case studies pulling in opposite directions. First, the loop rules the data out: continued pre-training drives BBH down by $-46.82\%$, but diagnosis traces this to a single masked \texttt{\textless EOS\textgreater} loss rather than weakened reasoning; restoring it recovers BBH to $66.44$, above the original checkpoint, without changing the data. Second, the loop rules the data in: a persistent math-reasoning weakness is decomposed by solving operation into specific failing combinations, and a weakness-targeted sampling procedure built from it lifts AIME2025/AIME2026 Pass@128 from $6.67$/$0.00$ to $26.67$ each. The same unmodified loop reaches opposite, correct verdicts in both cases, showing the evaluation-to-data inference can be routine, auditable, and experimentally validated rather than intuitive.

4. [Search for Truth from Reasoning: A Dynamic Representation Editing Framework for Steering LLM Trajectories](https://arxiv.org/abs/2606.28589)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28589v1 Announce Type: new Abstract: Current approaches to enhance Large Language Model (LLM) reasoning, such as Chain-of-Thought and "Wait" prompts, primarily encourage models to think more, yet often fail to guide them toward Truth. While Representation Editing (RepE) offers a intrinsic control, its application to dynamic reasoning trajectories remains underexplored. In this work, we bridge this gap by investigating the geometry of truth within unfolding reasoning chains. We uncover three critical insights: (1) Truth is encoded at the sentence level and is entangled with latent reasoning patterns; (2) Effective intervention follows an Uncertainty Principle and a Decay Effect, requiring localization to early, high-entropy forks; (3) Naive steering vectors suffer from noise, risking collateral damage to correct trajectories. Based on these findings, we propose DynaSteer, a dynamic RepE framework. DynaSteer employs pattern clustering to disentangle reasoning manifolds and utilizes Fisher-LDA to project purified truth. By dynamically monitoring lookahead entropy, it selectively steers and rolls back trajectories only when necessary. Comprehensive experimental results on several MATH benchmark verify the effectiveness of DynaSteer, and experiments on out-of-domain coding tasks further confirm its generalization ability. Our code is publicly available at https://github.com/tianlwang/DynaSteer.

5. [Aristotelian Virtue Profiling of LLMs through Ethical Dilemmas](https://arxiv.org/abs/2606.28683)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28683v1 Announce Type: new Abstract: Large Language Models (LLMs) often face ethical tradeoffs in which several responses may be defensible but express different priorities, such as fairness, honesty, courage, or restraint. We introduce VirtueMap, a framework for describing these patterns through an Aristotelian virtue-ethics lens. Instead of asking for a single correct answer, VirtueMap asks humans or LLMs to rank all five responses to each of seven general, non-lethal, non-political, and non-religious ethical dilemmas. To define the reference orderings used for scoring, we first proposed, for each dilemma and virtue, an ordering of the five responses from most to least expressive of that virtue. We then collected more than 100 respondent evaluations per ordering and retained it as operational ground truth only when at least 95% confirmed it. Rankings are scored against these retained orderings using normalized Borda alignment, yielding profiles over Practical Wisdom, Justice, Truthfulness, Courage, and Temperance. We apply VirtueMap to nine LLM families in a repeated-run evaluation and find high mean rank consistency (90.3%), with the largest differences appearing on Courage, Temperance, and Justice. We also release an interactive website that computes profiles locally in the browser and compares respondents with measured LLM profiles.

6. [An AI agent for treatment reasoning over a biomedical tool universe](https://arxiv.org/abs/2606.28692)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28692v1 Announce Type: new Abstract: Treatment reasoning underpins every therapeutic decision, integrating disease context, comorbidities, medications, contraindications, and evolving biomedical knowledge to select an appropriate therapy. It is inherently iterative: candidates are weighed against many constraints, revised as evidence emerges, and grounded in verifiable sources. Here we introduce ATHENA-R1, an AI agent for treatment reasoning across all FDA approved drugs since 1939, trained by reinforcement learning over a universe of 212 biomedical tools. At each step it identifies missing information, selects and runs relevant tools, and incorporates the evidence. To train it without human-annotated traces, we build a two-level self-learning framework: multi-agent systems construct the tools, tasks, and reasoning trajectories for supervised fine-tuning, then reinforcement learning with scientific feedback rewards reasoning quality (evidence gathering, grounded tool use, logical non-redundancy). Across five benchmarks of 3,168 drug reasoning tasks and 456 patient treatment cases, ATHENA-R1 outperforms language models and tool-use systems, reaching 94.7% accuracy on open-ended drug reasoning and 82.9% on treatment reasoning, 17.8 and 10.7 points above GPT-5. In blinded evaluations by experts from 28 rare disease organizations, it is preferred over reference models on all criteria, and physicians rated it favorably on complex hospitalized cardiovascular and infectious-disease cases. Adverse-event hypotheses it generated, tested in electronic health records from 5.4 million patients, reached adjusted odds ratios of 1.48-1.84, with no elevation among negative controls. Because it requires knowing what evidence to seek before concluding, treatment reasoning has long been hard for AI; we show it can be reframed as a learnable process of iterative evidence gathering that reinforcement learning can train AI to perform.

7. [COMPASS: Grounding Composition-Intent Guidance in Unified Multimodal Models](https://arxiv.org/abs/2606.28696)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28696v1 Announce Type: new Abstract: Composition is a high-level visual intent that governs where subjects are placed and how a scene is organized, yet current unified multimodal models remain unreliable at fine-grained composition recognition and struggle to turn such intent into controllable generation. We present COMPASS, the first unified multimodal framework that grounds composition-intent control in a single system spanning both composition perception and composition-guided generation, with a shared expert token $\tau_c$ as the central intent anchor. On the perception side, COMPASS injects composition expertise into an MoE backbone in a minimally invasive manner and distills the inferred intent into $\tau_c$. On the generation side, COMPASS reuses $\tau_c$ as a global conditioning signal that steers the denoising trajectory, effectively converting passive composition analysis into explicit layout control. To support systematic instruction-following composition learning and evaluation at scale, we construct Comp-11, a large-scale dataset with an 11-class taxonomy and reasoning-augmented annotations. Extensive experiments show that COMPASS substantially improves category-level composition understanding and delivers more composition-consistent, prompt-faithful generation than strong baselines.

8. [Verified residual-specific explicit derivative kernels for physics-informed learning and discretized PDE adjoints](https://arxiv.org/abs/2606.29702)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.29702v1 Announce Type: new Abstract: Derivative computation is central to scientific computing, from space-time derivatives in physics-informed neural networks (PINNs) to residual Jacobian actions and discrete-adjoint operators in computational fluid dynamics (CFD). General-purpose automatic differentiation (AD) reduces implementation effort, but can incur substantial runtime and memory overhead for high-order residuals and complex discretized operators. Explicit derivative kernels can exploit problem-specific structure and provide efficient, controllable evaluations, but their use has been limited by derivation and implementation costs. This work revisits explicit differentiation (ED) as a residual-specific and verifiable route enabled by agent-assisted implementation and stringent numerical verification. For PINNs, we propose residual-specific partial-jet propagation, which makes the derivative-state closure of the target PDE residual explicit and realizes it through specialized layerwise kernels, rather than relying only on nested AD or a generic Taylor-mode transform. Relative to nested AD, the resulting ED kernels achieve floating-point-level agreement in residual and parameter-gradient evaluations and accelerate complete PINN training, often reaching 2-4x speedups while reducing peak GPU memory in most cases. For discretized PDE adjoints, we apply the same verification-driven strategy to a finite-volume CFD residual. The generated tangent-action and transpose-action kernels pass Taylor-remainder, inner-product, and reduced-gradient consistency checks, and are embedded into a GPU-resident discrete-adjoint workflow for freestream Mach-number and angle-of-attack inversion. These results suggest that verified explicit derivative kernels, supported by agent-assisted implementation, can serve as a practical, structure-aware complement to general-purpose AD for derivative-intensive scientific computing.

9. [InternScience/InternAgent](https://github.com/InternScience/InternAgent)
   - Source: GitHub repository search; Group: Open source; Score: 5.34; Date: 2026-06-30T06:45:15Z; Popularity: 1,341 stars
   - Summary: InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery

10. [ruc-datalab/DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze)
   - Source: GitHub repository search; Group: Open source; Score: 5.29; Date: 2026-06-30T02:17:55Z; Popularity: 4,292 stars
   - Summary: DeepAnalyze is the first agentic LLM for autonomous data science. 🎈你的AI数据分析师，自动分析大量数据，一键生成专业分析报告！

11. [Mapping Europe’s AI Workforce Opportunity](https://openai.com/index/mapping-ai-jobs-transition-eu)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 29 Jun 2026 07:00:00 GMT
   - Summary: A new OpenAI report maps how AI could reshape jobs across the EU, highlighting which occupations may face automation, growth, or workflow changes.

12. [Helping build shared standards for advanced AI](https://openai.com/index/helping-build-shared-standards-for-advanced-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 23 Jun 2026 13:00:00 GMT
   - Summary: OpenAI helps build shared standards for advanced AI, supporting evaluation frameworks, safety practices, and global cooperation through the Appia Foundation.

13. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

14. [Experimenting with the proposed Cross-Origin Storage API in Transformers.js](https://huggingface.co/blog/cross-origin-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

15. [GPTNT: Benchmarking Real-Time Collaboration Between Multimodal Agents on Keep Talking And Nobody Explodes](https://arxiv.org/abs/2606.28514)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28514v1 Announce Type: new Abstract: Multimodal models are increasingly deployed to solve tasks collaboratively with humans or other artificial agents. Existing benchmarks show that these models possess many of the required component capabilities, but the conditions that coincide in collaboration, including time pressure, information asymmetry, and imperfect communication, are usually studied in isolation. We introduce GPTNT, a benchmark built on the cooperative video game Keep Talking and Nobody Explodes, in which two agents must coordinate to defuse procedurally generated bomb puzzles against a live countdown. One agent can see and manipulate the bomb but does not have the defusal instructions; the other has the instructions but cannot see or manipulate the bomb. Neither agent can succeed alone: success requires effective and efficient communication. Unlike turn-based proxies, GPTNT requires agents to act asynchronously and communicate in real time. GPTNT is designed to separate collaboration from reliance on memorized solutions: the instruction manual, the partner, or both can be withheld to isolate what a model derives in the moment from what it already knows. We show that GPTNT poses a substantial challenge for state-of-the-art systems: none of the closed- or open-source models we test defuses a single bomb in real time, a bar that human players clear. Through controlled experiments, we identify critical weaknesses in state tracking, efficient action under time pressure, ambiguity handling, and error recovery. We release GPTNT as a benchmark for collaborative performance that current evaluations leave unmeasured. Because it runs on the real game, GPTNT benefits from procedural generation and inherits a living modding community, allowing the benchmark to evolve as models improve rather than being solved once and retired.

16. [BV-Blend: Uncertainty-Weighted Historical Baselines for Stable Critic-Free RL with Verifiable Rewards](https://arxiv.org/abs/2606.28707)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28707v1 Announce Type: new Abstract: Critic-free reinforcement learning with verifiable rewards (RLVR), exemplified by Group Relative Policy Optimization (GRPO), avoids training a value function (critic) and reduces memory and compute overhead relative to critic-based PPO pipelines for aligning large language models. However, GRPO-style advantage estimation depends on prompt-local (within-prompt-group) reward statistics and can be unstable. In particular, when all rollouts in a prompt group receive identical rewards, the within-group reward variance becomes zero, and group normalization yields zero advantages for that group, impeding learning in cold-start regimes with binary verifiers. We introduce BV-Blend, a critic-free framework that stabilizes advantage estimation by combining prompt-local on-policy statistics with semantic-cluster-conditioned historical moments. BV-Blend maintains EMA-tracked reward moments for each cluster, derives a confidence weight from a standard error of the mean (SEM) proxy, and uses this weight to blend historical and prompt-local baseline and variance statistics into a standardized advantage for PPO-style clipped updates. Experiments on verifiable reasoning benchmarks show that BV-Blend improves training stability and performance, and remains robust in regimes where group-normalized methods may stall.

17. [An Agentic AI Pipeline for Appliance-Level Energy Anomaly Detection and LLM-Driven Recommendations](https://arxiv.org/abs/2606.28467)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28467v1 Announce Type: new Abstract: Appliance-level energy monitoring in office buildings produces noisy alerts that non-expert facility managers struggle to use. This paper proposes an end-to-end agentic pipeline that combines deep time-series forecasting, variational anomaly detection, and LLM-based reasoning to generate prioritized, actionable maintenance recommendations. The system tracks seven office appliances using a hybrid Singular Spectrum Analysis (SSA) and Long Short-Term Memory (LSTM) forecasting model, and applies a per-appliance LSTM Variational Autoencoder (VAE) with attention to flag abnormal daily consumption episodes. A three-stage LangChain pipeline begins with a Context Agent that always retrieves three core RAG sources (model reliability, hourly baseline, and expert knowledge) and conditionally adds up to three more (forecast context, anomaly history, global baseline) based on event characteristics, capped at eight reasoning steps. A Diagnosis Agent converts the evidence into a structured JSON diagnosis, and a Report Agent renders a human-readable narrative. A reflective memory layer incorporates operator feedback. The dashboard shows real-time 30-minute forecasts, intraday consumption, the previous day anomaly report, and a feedback form. We evaluate the forecasting model, anomaly detector with appliance-specific thresholds, and LLM reasoning on a 16-scenario benchmark including sustained and transient spikes, unexpected shutdowns, and systemic events, comparing five LLM backends under static vs. dynamic retrieval. Dynamic retrieval matches full static retrieval across all backends while cutting average context from six to three-six sources per event. The best backend scores 90.4/100 with a 100% pass rate at a 70-point threshold, and a fully local 7B-parameter model passes all 16 scenarios.

18. [High-order tensor neural network for iteration-free structure relaxation](https://arxiv.org/abs/2606.29919)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.29919v1 Announce Type: new Abstract: Structure relaxation is important for the discovery of new materials, yet conventional ab initio optimization remains a major bottleneck in high-throughput screening workflows. Machine learning potentials have accelerated relaxation by orders of magnitude, but they still rely on iterative optimization and high-quality DFT force labels. Here, we present HotRelax, a high-order tensor message-passing neural network for one-shot, end-to-end prediction of relaxed structures. Trained directly on paired unrelaxed and relaxed structures, HotRelax requires no DFT force labels and predicts relaxed structures in a single forward pass, without iterative inference or post-processing. Across five diverse datasets spanning 3D bulk crystals, 2D layered materials and catalysts, HotRelax shows strong performance relative to state-of-the-art end-to-end relaxation models, achieving lower prediction errors on several benchmarks while maintaining a compact model size and efficient inference. Extensive DFT calculations further show that the predicted structures are close in energy to their DFT-relaxed counterparts. When integrated into catalytic workflows, HotRelax also improves the accuracy and generalization of relaxed-state energy prediction models. Together, these results support HotRelax as an efficient and widely applicable framework for end-to-end structure relaxation, with strong potential to accelerate high-throughput materials discovery.

19. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.13; Date: 2026-06-30T14:29:02Z; Popularity: 2,135 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

20. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-06-29T15:21:43Z; Popularity: 19 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

21. [HP Inc. launches Frontier strategic partnership with OpenAI](https://openai.com/index/hp-frontier-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 28 Jun 2026 17:00:00 GMT
   - Summary: HP Inc. scales its OpenAI Frontier partnership to deploy AI across customer experiences, software development, and enterprise operations.

22. [Previewing GPT-5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 26 Jun 2026 10:00:00 GMT
   - Summary: OpenAI previews GPT-5.6 Sol, a next-generation model with stronger capabilities in coding, science, and cybersecurity, paired with its most advanced safety stack.

23. [How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 25 Jun 2026 02:00:00 GMT
   - Summary: A new OpenAI research paper shows how AI agents are transforming work, enabling longer, more complex tasks and expanding productivity across roles.

24. [OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 24 Jun 2026 06:00:00 GMT
   - Summary: OpenAI and Broadcom introduce Jalapeño, a custom AI chip built for LLM inference to improve performance, efficiency, and scale across AI systems.

25. [How GPT-5 helped immunologist Derya Unutmaz solve a 3-year-old mystery](https://openai.com/index/gpt-5-immunology-mystery)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 23 Jun 2026 17:00:00 GMT
   - Summary: GPT-5 Pro helped solve a 3-year-old immunology mystery, offering insights into T cell behavior. The breakthrough could support cancer and autoimmune research.

26. [How Omio is building the future of conversational travel](https://openai.com/index/omio)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 23 Jun 2026 00:00:00 GMT
   - Summary: Discover how Omio uses OpenAI to power conversational travel experiences, accelerate product development, and transform into an AI-native company.

27. [Daybreak: Tools for securing every organization in the world](https://openai.com/index/daybreak-securing-the-world)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 22 Jun 2026 10:00:00 GMT
   - Summary: OpenAI introduces new Daybreak tools, including Codex Security and GPT-5.5-Cyber, to help organizations find, validate, and patch vulnerabilities at scale.

28. [Patch the Planet: a Daybreak initiative to support open source maintainers](https://openai.com/index/patch-the-planet)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 22 Jun 2026 10:00:00 GMT
   - Summary: OpenAI introduces Patch the Planet, a Daybreak initiative helping open-source maintainers find, validate, and fix vulnerabilities with AI and expert review.

29. [mimalloc: A new, high-performance, scalable memory allocator for the modern era](https://www.microsoft.com/en-us/research/blog/mimalloc-a-high-performance-scalable-memory-allocator-for-the-modern-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 13 May 2026 17:19:59 +0000
   - Summary: mimalloc is an open-source, modern, scalable memory allocator that is a drop-in replacement for malloc and free. It is relatively small (~12K lines), with clear internal data structures, and is easy to build and integrate into other projects. It provides bounded worst-case allocation times (up to OS primitives), bounded space overhead, low internal fragmentation, and minimal contention by relying almost exclusively on atomic operations. The post mimalloc: A new, high-performance, scalable memory allocator for the modern era appeared first on Microsoft Research .

30. [Why Specialization Is Inevitable](https://huggingface.co/blog/Dharma-AI/why-specialization-is-inevitable)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 14:39:11 GMT

31. [Featuring Every Eval Ever Results on Hugging Face Model Pages](https://huggingface.co/blog/eee-community-evals)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

32. [DiScoFormer: One transformer for density and score, across distributions](https://huggingface.co/blog/allenai/discoformer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 29 Jun 2026 18:02:48 GMT

33. [Run a vLLM Server on HF Jobs in One Command](https://huggingface.co/blog/vllm-jobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 26 Jun 2026 00:00:00 GMT

34. [Accelerating Transformers Fine-Tuning with NVIDIA NeMo AutoModel](https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 16:00:13 GMT

35. [Introducing the FFASR Leaderboard: Benchmarking ASR in the Real World](https://huggingface.co/blog/ffasr-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 00:00:00 GMT

36. [Build real agentic apps using CUGA: two dozen working examples on a lightweight harness](https://huggingface.co/blog/ibm-research/cuga-apps)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 23 Jun 2026 12:51:55 GMT

37. [Shipping huggingface_hub every week with AI, open tools, and a human in the loop](https://huggingface.co/blog/huggingface-hub-release-ci)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

38. [PP-OCRv6 on Hugging Face: 50-Language OCR from 1.5M to 34.5M Parameters](https://huggingface.co/blog/PaddlePaddle/pp-ocrv6)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 22 Jun 2026 13:18:56 GMT

39. [The Two Genie Game: Adoption and Welfare in Audit-Grounded AI Governance](https://arxiv.org/abs/2606.28710)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28710v1 Announce Type: new Abstract: We ask under what conditions an agent with a harm-minimizing policy can displace an approval-seeking (RLHF) agent in a competitive market, and when that policy is sufficient to prevent community harm. We use evolutionary game theory (finite-population Moran-Fermi pairwise comparison) to formalize this subject to assumptions of wisher hindsight, peer testimony, a monotone harm ledger, sufficient information density of community feedback, and a finite, depleting resource pool, in a negative-sum environment. We show that adoption is favored when the prior distributions on how readily wishers attune to community sentiment are monotone, exhibit endpoint inversion, and have a centro-symmetric pairing property, and demonstrate this with several long-tailed priors (Hill, Pareto, Lomax, Frechet). Where it is favored, a critical adoption level separates communities that drift back to the approval-seeking agent from those for which the audited agent fixes; above that level fixation is the overwhelmingly likely outcome. We derive when fixation is attainable as a bound on the effective (informational) size N_c of the community, which must be small enough to allow fixation before depletion. We present these as Theorems 5.4 and 5.5; the algebraic and finite-grid backbone is machine-checked in Lean 4, with the barrier-crossing asymptotics retained as explicit hypotheses. We show that a self-audited agent with a community ledger is not, in general, sufficient to prevent community harm. Sufficiency depends both upon the alignment of the agent's audit with community values and the timeframe over which harm is evaluated. Regardless of alignment, once adoption reaches dominance, the state is absorbing. The same policy that reduced harm under alignment becomes a trap, welfare-negative under misalignment and, even under alignment, one that locks in harm deferred past the adoption horizon.

40. [On the Necessity of a Liquid Substrate for Mesh Intelligence](https://arxiv.org/abs/2606.28413)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28413v1 Announce Type: new Abstract: A mesh of sovereign agents has no center: no shared clock, no shared model, and no coordinator to gather data or retrain. Its competence rests on each agent folding the projections its peers emit into a single internal state, online, from observations that arrive at irregular, unscheduled times, on a substrate whose weights it cannot retrain. Any one of these constraints is tractable on its own; folding optimally under all three at once is not. We ask what such a substrate must be, and prove two necessary conditions from one model of a self-evolving latent observed at irregular, exogenous times. Because the latent changes, its optimal estimator is time-varying: an adaptive timescale is necessary, and every fixed-gain filter is strictly suboptimal. And because arrivals are clock-free, the optimal estimate depends on the elapsed gap between them, which no gap-blind network recovers at any width or depth. This second condition is capacity-independent: scale cannot substitute for the missing dependence. The two conditions intersect in the continuous-time liquid class. An LSTM satisfies the first, a fixed continuous-time filter the second, and a multi-timescale liquid network both. Synthetic experiments confirm each: the network attains the timescale, and the separation is computed exactly. The characterization is necessary, not sufficient, and binds fixed-weight substrates: a network free to retrain reaches the class by other means. Proved per agent, the necessity binds every agent of a mesh, a structural condition on mesh intelligence.

41. [Position: RL Researchers Need to Distinguish Between Solving Simulators and Using Simulators as a Proxy](https://arxiv.org/abs/2606.28433)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28433v1 Announce Type: new Abstract: One goal in reinforcement learning (RL) research is to understand general-purpose sequential decision-making, using benchmark simulators as a proxy for learning in deployment settings. When running experiments, however, the goal of achieving high performance in the simulator can mutate into focusing exclusively on solving the simulator. To achieve high scores, researchers may adopt solutions exclusively meant for solving simulators, rather than learning while the agent is deployed outside a simulator. Solving simulators is also worthy of investigation, but it is a fundamentally different RL research question. In this paper, we argue that RL researchers need to distinguish between two use cases of simulators: solving simulators and using simulators as a proxy for learning in deployment. We first discuss how these two use-cases are importantly different, in terms of constraints on how the agent can use the simulator, which algorithms are appropriate, and which evaluation metrics are appropriate. We then highlight several issues and misleading conclusions that can occur by not making the distinction between these two settings clear, supported with examples and simple experiments. This work is a call to the community to begin clearly distinguishing how they are using simulators in their work, hopefully sparking further discussion on which empirical practices work best in each setting.

42. [Learning to Distributedly Estimate under Partially Known Dynamics: A Covariance-Agnostic Neural Kalman Consensus Filter](https://arxiv.org/abs/2606.28441)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28441v1 Announce Type: new Abstract: Online latent state estimation constitutes a fundamental challenge within the artificial intelligence field, serving as a foundational tool for diverse applications, including sequential decision making, anomaly and change-point detection. In this paper, a novel online distributed sensing framework, where agents collaborate and exchange information to perform latent state estimation, is presented. The proposed estimator combines available partial domain knowledge with the representation capabilities of deep neural networks. In particular, the designed sensing framework incorporates prior estimates, optimized consensus weights, and Kalman-like recursive updates to perform decentralized inference, without relying on knowledge of noise statistics. Extensive experiments on linear, chaotic (Lorenz), and practical wireless tracking environments reveal that the proposed Covariance-Agnostic Neural Kalman Consensus Filter (CA-NKCF) outperforms traditional distributed Kalman and particle filters as well as purely model-free deep neural networks, exhibiting robustness even when the underlying motion and observation models are misspecified. It is also demonstrated that CA-NKCF's performance advantage remains stable across varying noise levels, random communication topologies, latent state dimensions, and observation clutter densities induced by scattering objects in wireless systems.

43. [Latent Genetic Algorithm for Crystal Structure Prediction](https://arxiv.org/abs/2606.29220)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.29220v1 Announce Type: new Abstract: Predicting crystal structures requires navigating rugged energy landscapes in which favorable local motifs must be inherited across candidates with incompatible cells, densities, and symmetries. Conventional real-space crossover often destroys these motifs when parent structures are geometrically mismatched. Here we show that latent representations learned by pretrained universal interatomic potentials can serve as continuous evolutionary coordinates for crystal structure prediction. In the Latent Genetic Algorithm (LGA), offspring are generated by inverse optimization of atomic positions and lattice vectors to match a target latent representation, which is constructed via interpolation of the parent latent vectors. LGA suppresses high-energy and short-contact offspring, increases the HfO$_2$ ground-state recovery rate from 20-35% to 60-95%, and enables a unified variable-supercell search over 16 perovskites with a nearly tenfold reduction in search cost. Applied to (PbTiO$_3$)$_n$/(PbZrO$_3$)$_n$ superlattices, LGA reveals $\sqrt{2} \times 3\sqrt{2} \times 1$ long-period ground-state structures characterized by a common in-plane finite-$q$ modulation $q{_\parallel} = (1/6,1/6)$ and layer-coupled sidebands. To our knowledge, this in-plane periodicity has not been reported in any related oxide perovskite superlattice studies. Altogether, LGA offers a powerful representation-guided paradigm for ground-state structure prediction and provides a practical, decoder-free route toward materials inverse design.

44. [High-Performance Resilient Multi-GPU Hybrid Particle-in-Cell Monte Carlo Simulations at Scale](https://arxiv.org/abs/2606.28534)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28534v1 Announce Type: cross Abstract: The increasing demand for high-performance computing in plasma physics has driven scalable and resilient simulation methods capable of efficiently exploiting modern multi-GPU architectures. This work extends a portable hybrid MPI+OpenMP implementation of BIT1, focusing on high-performance resilience for accelerated Particle-in-Cell (PIC) Monte Carlo (MC) simulations under both uniform and non-uniform load conditions. Scalable particle load balancing and robust checkpoint/restart mechanisms across Nvidia and AMD accelerators are integrated with standardized I/O using openPMD and ADIOS2. This leverages BP4 for high-performance file-based checkpointing and SST for in-memory data streaming, enabling efficient data movement, resilient large-scale execution, seamless continuation from existing checkpoints, and effective handling of computational and I/O workloads. Advanced HPC profiling and tracing tools, including Nvidia Nsight Systems and AMD ROC-Profiler with Perfetto, provide detailed insights into computation, communication, and system-level behavior for optimization. Performance results on Frontier (OLCF-5), MN5, and LUMI-G demonstrate strong and weak scaling up to 800 GPUs, validating the framework for large-scale PIC MC simulations, while in-situ analysis and visualization using scalable I/O further enhance scientific insight without interrupting multi-GPU execution on current and future exascale systems.

45. [A Bayesian latent Gaussian process framework for aerodynamic uncertainty quantification](https://arxiv.org/abs/2606.28871)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28871v1 Announce Type: cross Abstract: Predicting the aerodynamic performance (e.g. lift, drag, and moment coefficients) of an aircraft is challenging -- computational models are biased and direct simulations are prohibitive. A pragmatic way to overcome this limitation is by calibrating low-fidelity computational predictions with experimental measurements. This, however, requires calibrating against \emph{sparse} measurements contaminated with \emph{uncertainty} in both the control inputs and the measured aerodynamic response. We develop a methodology to address this problem based on Gaussian process surrogates and the classical Kennedy-O'Hagan calibration. A surrogate model learned on abundant-but-cheap low-fidelity data is calibrated with a sparse set of measurement data. Crucialy, we develop a Bayesian latent Gaussian process based approach that marginalizes the calibrated surrogate model over the input uncertainty, while also matching the marginal mean and variance of the measured output uncertainty. Once calibrated, our surrogate model predicts the uncertainty in aerodynamic coefficients with very high accuracy, including at extrapolative input settings. We validate our calibrated surrogate model predictions against measurement data with \emph{true} uncertainty intervals to demonstrate that the model places $94.2-95.8\%$ of its predictive samples inside the released $95\%$ truth intervals, with endpoint cumulative probabilities very close to the nominal 0.025 and 0.975 levels.

46. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.45; Date: 2026-06-30T13:54:26Z; Popularity: 452 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

47. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.27; Date: 2026-06-30T14:31:39Z; Popularity: 1,271 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

48. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-06-28T00:40:05Z; Popularity: 216 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

49. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.19; Date: 2026-06-30T15:31:57Z; Popularity: 191 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

50. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

51. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

52. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

53. [Can AI Draw Science? A Benchmark for Evaluating Scientific Figure Generation by Text-to-Image and Multimodal Models](https://arxiv.org/abs/2606.28406)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28406v1 Announce Type: new Abstract: Text-to-image and multimodal generative models are increasingly used to produce scientific figures such as mechanism diagrams, experimental-design schematics, conceptual frameworks, and graphical abstracts. Yet existing image-generation benchmarks (e.g., GenEval, T2I-CompBench, DPG-Bench) evaluate natural images and measure compositionality, object counting, or photorealism. None of them measure what makes a generated scientific figure usable: correct and legible text labels, faithful depiction of entities and their relations, coherent diagrammatic structure, and adherence to disciplinary drawing conventions. We introduce SciDraw-Bench, a benchmark of 32 structured scientific-figure generation tasks spanning eight figure types and ten disciplines, where each task pairs a natural-language prompt with a machine-checkable specification of required labels, relations, components, conventions, and negative constraints. We propose a four-dimensional evaluation protocol: Text Fidelity (OCR-based label recall and character error rate), Semantic Correctness (vision-language-model judging against the specification), Structural Quality, and Convention Adherence, together with a meta-evaluation protocol and a preliminary inter-judge reliability analysis (human-rating validation is ongoing). We evaluate a domain-specific system, SciDraw AI, against representative general-purpose text-to-image models, and outline a code-to-figure baseline as a planned extension. In a pilot over all eight figure types, the domain-specific system substantially outperforms the general-purpose baselines on every dimension and figure type, with the largest gaps on semantic correctness and convention adherence; text fidelity remains the hardest dimension for all systems.

54. [scKDGM: KAN-guided Dynamic Graph Masked Learning for Single-Cell RNA-seq Clustering](https://arxiv.org/abs/2606.28459)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28459v1 Announce Type: new Abstract: Single-cell RNA sequencing (scRNA-seq) clustering is essential for identifying cell types, but high dimensionality, sparsity, dropout, and technical noise hinder robust expression representation and cell graph construction. Existing masked autoencoders mainly use expression recovery for feature reconstruction, while graph clustering methods usually depend on fixed KNN graphs and do not feed recovered expression back into graph optimization. We propose scKDGM, a KAN-guided dynamic graph masked learning framework for scRNA-seq clustering. scKDGM uses graph-aware distribution preserving gene masking (GDP-Mask) to perturb cell identity, a KAN-based TAKGCN encoder to learn masked-view representations, mask-guided expression recovery to construct a dynamic graph, and cross-view contrastive learning to transfer recovery signals into topology updates. A ZINB loss models overdispersion and zero inflation. Experiments on 12 real scRNA-seq datasets show that scKDGM outperforms 10 baselines in average NMI and ARI.

55. [Counterfactual Residual Data Augmentation for Regression](https://arxiv.org/abs/2606.28460)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28460v1 Announce Type: new Abstract: Data-driven modeling in real-world regression tasks often suffers from limited training samples, high collection costs, and noisy observations. Inspired by the impact of data augmentation in vision and language, we propose a novel Counterfactual Residual Data Augmentation (CRDA) technique for tabular regression. Our key insight is that once a regressor has modeled the systematic component of the data, the remaining noise can be viewed as an invariant residual that remains stable under small perturbations of carefully selected features. We exploit this residual invariance to generate new, yet realistic, training samples, effectively expanding the dataset without requiring additional real data. Our method is model-agnostic and readily applicable to various types of regressors. In experiments across datasets from a variety of benchmark repositories, on average, CRDA reduces an MLP Regressor's MSE by 22.9% and an XGBoost Regressor's MSE by 6.4%. When compared to existing state-of-the-art data generators and augmentation techniques, CRDA consistently outperforms in MSE reduction. By adding principled counterfactual variations to the training data, our method offers a simple and efficient remedy for noise-prone, small-sample regression settings.

56. [Unit-Circle Moment Closure](https://arxiv.org/abs/2606.28894)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28894v1 Announce Type: new Abstract: Moment closure is a central problem in reduced descriptions of stochastic, kinetic, and quantum dynamics, where equations for low-order observables are coupled to an unresolved hierarchy of higher-order moments. Existing closures usually impose a prescribed form on the distribution or directly truncate the hierarchy, which can become inaccurate or unstable for strongly non-Gaussian states. Here we introduce unit-circle moment closure, which recasts the problem as analytic continuation. Raw moments are mapped to bounded unit-circle moments, whose unresolved tail is reconstructed by a Takagi-Prony procedure from the effective pole structure of a mapped generating function. The resulting continuation yields stable higher-order moments without assuming a fixed distributional ansatz. Illustrative static and dynamical examples demonstrate accurate reconstruction of non-Gaussian distributions and stable evolution of moment hierarchies. Our approach provides a general perspective for moment closure based on analytic structure rather than direct truncation.

57. [Non-linear control variate in {\delta}f particle-in-cell methods using symplectic neural networks](https://arxiv.org/abs/2606.30622)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.30622v1 Announce Type: new Abstract: We present a novel {\delta}f particle-in-cell (PIC) method for the kinetic simulation of electrostatic plasmas in which the bulk density, acting as a control variate, is evolved using symplectic neural networks (SympNets). The SympNets are used as an approximation of the backward flow and trained using the particle trajectories. We introduce a periodic variant of the SympNet architecture that encodes the spatial periodicity of the problem into the network itself. We validate the approach with numerical results in 1D1V and 3D3V for the Vlasov-Poisson system.

58. [Semi-Implicit Stellarator Magnetohydrodynamics with Nodal Spectral Elements](https://arxiv.org/abs/2606.28613)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28613v1 Announce Type: cross Abstract: Nonlinear time-dependent computation of macroscale dynamics in stellarators is motivated by laboratory results showing the possibility of robust operation in conditions where magnetohydrodynamic (MHD) modes are linearly unstable. A new formulation of semi-implicit MHD computation for toroidally shaped magnetic confinement systems uses 2D nodal spectral elements over the poloidal plane and Fourier representation over a generalized toroidal angle. Geometric mappings and steady-state (equilibrium) fields are expanded in the same 3D representation as the time-evolved fields to model non-axisymmetric configurations. For accuracy at large timestep, the semi-implicit operator is based on the ideal-MHD energy integral using 3D pressure and magnetic fields. The nodal spectral elements allow numerical convergence through either h-refinement or p- refinement. Our implementation (NIMSTELL) with the continuous H1 expansion of magnetic-field components and diUusive divergence control is a generalization of the NIMROD code [JCOMP 195, 355]. The NIMSTELL implementation is verified linearly and nonlinearly on resonant ideal interchange, where convergence from the stable side results from the stabilization method used in NIMROD [JCOMP 319, 61]. Optionally, NIMSTELL may use an H(curl) representation for vector potential, and both magnetic representations are verified with respect to results from JOREK [Phys. Plasmas 29, 063901] on linear and nonlinear magnetic tearing in the W7-A rotating-ellipse configuration. Application of the existing vector-potential implementation to interchange shows that it needs a minimum level of electrical resistivity to avoid numerical noise for a given level of spatial resolution. Solving the algebraic systems from the implicit parts of the time advance is facilitated by including the Fourier components of stellarator mode families in each preconditioning operation.

59. [MALOQ: Massively Accelerated Learning of Operators for Quantum Transport](https://arxiv.org/abs/2606.28911)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28911v1 Announce Type: cross Abstract: Machine-learned (ML) operator models can be trained to predict density functional theory (DFT) Hamiltonian/density matrices at significantly reduced computational cost, thus extending electronic-structure calculations to previously unfeasible scales. Here, we introduce MALOQ (Massively Accelerated Learning of Operators for Quantum Transport), an application built to train on and predict electronic-structure matrices for systems made of few to 100k atoms, described by large basis sets, and covering a wide range of atomic elements. Based on a state-of-the-art, SO(2)-equivariant backbone architecture, MALOQ provides (i) custom data-processing kernels to handle high-rank Hamiltonian matrix data and (ii) a scalable edge-wise distribution of atomic graph(s). Trained on the largest molecular Hamiltonian datasets available today, it reduces time-per-epoch by over 30% compared to a molecule-wise-distributed framework, and enables inference on material graphs of arbitrary size. We demonstrate scalable training and inference for 3,000-12,000 atoms on the Alps supercomputer, up to 192 GPUs and 256 GPUs, respectively.

60. [Two-Dimensional Method-of-Moments Analysis of TMz and TEz Scattering from PEC Cylinders](https://arxiv.org/abs/2606.29000)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 30 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.29000v1 Announce Type: cross Abstract: This paper presents a two-dimensional method-of-moments (MoM) solver for electromagnetic scattering from infinitely long perfectly electrically conducting (PEC) cylinders. Both TMz and TEz polarizations are considered. Starting from the scalar Helmholtz equation, the electric field integral equation (EFIE) is derived for TMz scattering and the magnetic field integral equation (MFIE) is derived for TEz scattering. The induced surface current on the PEC boundary is expanded using pulse basis functions, and the boundary integral equations are discretized using point matching at the segment centers. Circular cylinders with radii $R = {\lambda}$ and $R = 2{\lambda}$ are used as validation cases because analytical series solutions are available. The MoM-computed surface currents, total near fields, scattered near fields, and field-error distributions are compared against the analytical solutions. After validation, the same solver is applied to a square PEC cylinder, for which no simple closed-form analytical solution is used. The results show strong agreement between the MoM and analytical circular-cylinder solutions and demonstrate the geometry-dependent scattering behavior of the square cylinder.

61. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.68; Date: 2026-06-30T15:13:11Z; Popularity: 680 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.59; Date: 2026-06-29T20:23:09Z; Popularity: 592 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

64. [facebookresearch/airs-bench](https://github.com/facebookresearch/airs-bench)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-06-30T09:56:31Z; Popularity: 100 stars
   - Summary: AIRS-Bench: an AI Research Science benchmark for quantifying the end-to-end AI research abilities of LLM agents

65. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-06-28T20:50:08Z; Popularity: 99 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

66. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

67. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

IMCBench: A benchmark for multimodal LLMs in Image-grounded Medical Conversations

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2606.28556

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
