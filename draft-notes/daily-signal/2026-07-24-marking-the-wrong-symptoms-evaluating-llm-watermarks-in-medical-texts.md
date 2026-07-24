# Daily signal sidecar - 2026-07-24

## Selected Signal

- Title: Marking the Wrong Symptoms: Evaluating LLM Watermarks in Medical Texts
- URL: https://arxiv.org/abs/2607.20462
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: Marking the Wrong Symptoms: Evaluating LLM Watermarks in Medical Texts
- Primary source: https://arxiv.org/abs/2607.20462
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

1. [Marking the Wrong Symptoms: Evaluating LLM Watermarks in Medical Texts](https://arxiv.org/abs/2607.20462)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20462v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly integrated into clinical workflows, stressing the need for reliable traceability of model-generated output with watermarking. Yet, most watermarks are evaluated on general-purpose benchmarks, leaving domains like medicine, where small token-level perturbations can result in significant semantic changes, underexplored. In this work, we present the first rigorous study of how LLM watermarks affect medical performance, benchmarking 5 watermarking schemes across 11 LLMs and 7 VLMs on various tasks spanning unimodal and multimodal clinical reasoning. Importantly, we complement existing evaluations by introducing a human-expert-validated pipeline for systematically auditing medical reasoning quality, terminological precision, and induced hallucinations. Our results reveal that watermarking can induce substantial degradation across multiple failure modes, including lexical corruption, hallucinated terminology, and amplified misattribution or omission of image findings. Notably, we find that the absence of domain-specific analyses, combined with aggregate metrics that miss failures inherent to clinical text, can systematically obscure practical watermark-induced degradations. Our findings establish domain-specific evaluation as a prerequisite for the safe deployment of watermarked models in medicine, where current benchmarks can otherwise mask clinically consequential failures.

2. [Launch HN: Screenpipe (YC S26) – Record how you work and turn that into agents](https://news.ycombinator.com/item?id=49024620)
   - Source: Hacker News; Group: Tech community; Score: 7.95; Date: 2026-07-23T16:48:38Z; Popularity: 79 points, 60 comments
   - Summary: HN discussion: 79 points, 60 comments.

3. [JAXBench: Benchmarking Autonomous TPU Kernel Optimization](https://arxiv.org/abs/2607.20466)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20466v1 Announce Type: new Abstract: Rigorous benchmarks have driven progress in autonomous GPU kernel performance optimization by establishing a shared target to hillclimb on, but no equivalent exists for TPUs. We present JAXBench, a TPU-native benchmark suite for AI-generated kernel optimization on Google Cloud TPUs. JAXBench comprises 50 JAX workloads that are both relevant and provide headroom for optimization. We extract 17 production ML operators from architectures in the public MaxText library such as Llama-3.1, DeepSeek-V3, Mixtral, Mamba-2, and AlphaFold2, and translate 33 operators from KernelBench that are validated for correctness and set with new problem sizes that achieve high TPU v6e MXU utilization. Eight of the 17 production operators ship with hand-optimized Pallas kernels from the public Tokamax library and block-size tuned to establish an expert upper-bound baseline. We evaluate four feedback-driven methods on generating candidate Pallas kernels for JAXBench. Across the full suite with Gemini 3 Flash, we find that target-specific context matters more than model scale on a sparsely-documented DSL like Pallas. Conditioning on curated TPU documentation raises per-sample correctness from 5.8% to 37.3% and solves 48 of 50 benchmarks at a 1.28x geomean speedup. Search structure yields significant gains once correctness is achieved, with Autocomp's beam-search pipeline reaching a 1.36x geomean speedup over XLA. On the 8 hand-tuned kernels, Autocomp reaches 1.60x geomean over XLA, recovering most of the 2.08x Tokamax upper bound but trailing on the specialized paged and ragged attention operators. High-quality TPU kernel optimization remains a challenging task, and we release the JAXBench benchmark, evaluation harness, and baseline results to support open source contributions.

4. [DataPrep-Bench: Benchmarking LLMs as Training Data Preparators](https://arxiv.org/abs/2607.20465)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20465v1 Announce Type: new Abstract: The quality of training data fundamentally determines the capabilities of large language models (LLMs), yet no unified benchmark exists to measure how well LLMs, agents, and data-centric workflows actually prepare training data end to end. We view LLM-driven data preparation as comprising two complementary capabilities: data construction, which transforms raw sources into supervised training data, and data quality evaluation, which predicts the training value of candidate datasets before downstream training; throughout, "quality" refers to downstream training utility rather than surface-level textual properties. We introduce DataPrep-Bench, the first unified benchmark that jointly evaluates both capabilities under a shared downstream-grounded protocol over six domains and multiple base models. For data construction, methods consume identical raw sources and are scored by fine-tuning a base model on their outputs jointly with Dolly-15k; alongside this track we release Data-Construction-Skill, a skill-guided agent that lifts the Dolly-only baseline by nearly 20 points absolute on Llama-3.1-8B Finance and is competitive with the strongest agent- and DataFlow-based methods in knowledge-extraction-dense domains. For data quality evaluation, scoring functions are scored by Pearson correlation with downstream performance on a shared candidate pool; we release the Distributional Alignment Score (DAS), a distribution-based evaluator that uses MMD between a candidate dataset and a domain proxy. DAS attains the strongest cross-model correlation in four of six domains and is the only metric clearing r > 0.70 simultaneously in Math, Science, and Medical, outperforming existing quality-, diversity-, and heuristic-based evaluators. DataPrep-Bench provides a unified, downstream-grounded framework for measuring progress on both capabilities as co-equal targets of LLM-driven data preparation.

5. [Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 22 Jul 2026 05:30:00 GMT
   - Summary: Introducing OpenAI Presence, a proven enterprise AI agent platform that helps organizations deploy trusted voice and chat agents for customer and internal workflows.

6. [OpenAI and Hugging Face partner to address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 21 Jul 2026 07:00:00 GMT
   - Summary: OpenAI and Hugging Face share early findings from a security incident during AI model evaluation, highlighting advanced cyber capabilities and lessons for defenders.

7. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

8. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

9. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

10. [The State of Simulation for Physical AI: An Overview](https://huggingface.co/blog/nvidia/state-of-simulation-for-physical-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 21 Jul 2026 20:00:27 GMT

11. [AINTMA: Agentic AI Architecture for Autonomous Test Management with Generative Intelligence, Secure Cloud Communication and Adaptive Quality Analytics](https://arxiv.org/abs/2607.20452)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20452v1 Announce Type: new Abstract: Modern software quality assurance demands intelligent, autonomous systems capable of adaptive decision-making across distributed cloud environments. This paper presents AINTMA (Agentic Intelligent Test Management Architecture), a multi-agent agentic AI system that transforms traditional test management into an autonomous quality intelligence ecosystem. AINTMA deploys six specialized AI agents (Test Discovery, Risk Assessment, Reinforcement Learning Prioritization, Execution Orchestration, Generative Quality Intelligence, and Cloud Security Monitor) coordinated through a secure multi-agent communication framework over a cloud-native microservices infrastructure. The Generative Quality Intelligence agent employs large language models to produce plain language quality narratives, defect risk summaries, and data-augmented test recommendations. The RL Prioritization agent models test selection as a Markov Decision Process, learning contextual policies from large-scale historical test execution data (47 features, rolling 36-month window). Secure cloud communication is enforced through a zero-trust API gateway with OAuth2/JWT authentication, encrypted inter-agent messaging, and multi-tenant isolation. Evaluation across 12 heterogeneous software projects over 18 months demonstrates: 88.4% test prioritization accuracy (APFD, vs. 51.2% random, 82.1% best commercial baseline); 43% test cycle time reduction; defect escape rate reduced from 8.3% to 2.1%; 340% ROI at 9-month payback. The agentic architecture scales to 50,000+ test cases with sub-400ms response time, and the generative intelligence module achieves 4.3/5.0 developer usefulness rating. AINTMA demonstrates that agentic AI, combining autonomous multi-agent coordination, generative intelligence and secure smart connectivity, can fundamentally advance software quality management in cloud-scale enterprise environments.

12. [InferenceBench: A Benchmark for Open-Ended LLM Inference Optimization by AI Agents](https://arxiv.org/abs/2607.20468)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20468v1 Announce Type: new Abstract: AI agents are increasingly used to automate research and development tasks, yet existing benchmarks typically evaluate them on prescribed workflows or narrow action spaces. Even nominally open-ended tasks can often be solved by retrieving a well-known recipe and tuning a few hyperparameters, making it unclear whether strong results reflect genuine optimization or memorized solutions. We introduce InferenceBench, where an agent must deploy an OpenAI-compatible inference server and optimize the speed of LLM inference. Each agent receives a target LLM, one H100 GPU, an optimization scenario, and a wall-clock time budget of two hours. Three optimization scenarios isolate distinct bottlenecks of inference (prefill latency, decode latency, and concurrent request throughput) and a fourth balances all three at the same time. Across 15 frontier agent configurations, agents reliably improve over a naive PyTorch baseline (up to $8.08\times$) and often match or exceed serving engines with default settings ($4.05\times$ for vLLM), but still fall below a simple hyperparameter search under the same time budget (up to $11.53\times$). Qualitative analysis of agent trajectories shows that although agents enumerate many relevant optimization techniques, they overwhelmingly converge on a single inference framework. They test only a few distinct configurations and spend the remaining budget re-measuring, repairing, or optimizing hyperparameters rather than exploring substantially different strategies. This suggests the bottleneck is not domain knowledge, but the ability to propose diverse configurations, evaluate them systematically, and submit the best identified solution. Overall, InferenceBench reflects the ability of agents to operate in an open-ended AI engineering setting, where memorized solutions lead to limited improvements.

13. [DecodeShare: Tracing the Shared Subspace of LLM Decode-Time Decisions](https://arxiv.org/abs/2607.20469)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20469v1 Announce Type: new Abstract: Large language models (LLMs) handle many tasks with one set of parameters, but under KV-cached inference it is unclear what task-general structure, if any, is used at decode time rather than during prefill. We propose DecodeShare, a protocol that identifies a low-dimensional subspace consistently shared across tasks in decode-time hidden states, and then tests its causal role by removing that subspace only during decoding. In our experiments, disturbing the discovered shared subspace degrades decision performance far more than disturbing either a prefill-derived or random subspace under the same intervention budget. We further show this decode-shared subspace has practical consequences for activation steering: common steering directions can overlap the task-general decode channel. Projecting out this shared subspace directly separates the functional roles of the two components, while evaluating steering vectors at decode-time yields more reliable signal for downstream deployment than prefill-based proxies. Despite its compactness, the shared subspace can serve as a high-leverage causal channel at decode time. Code is available at: https://github.com/Zishan-Shao/decodeshare.git.

14. [Benchmarking the Personalization Capabilities of Large Language Models](https://arxiv.org/abs/2607.20471)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20471v1 Announce Type: new Abstract: Personalization, the act of varying a message to induce action from a specific receiver while keeping sender, channel, and time fixed, has a long tradition in psychology and marketing as a two-party problem in which sender and receiver have independent objectives. Large language models remove the bounded-inventory constraint of classical retrieval-and-ranking approaches by generating a continuum of message variants conditioned on inferred receiver state, raising the question of how well current models perform personalization in the classical sense. Existing LLM personalization benchmarks measure sender-side adaptation, in which the receiver is the same user the model is serving. The two-party question, whether a generated message induces its intended action in a third party, has been investigated only through A/B tests and small-scale human studies that cannot be re-run against a new model on demand. We adapt the Bayesian Persuasion framework of Kamenica and Gentzkow (2011) to generative agents and instantiate the formulation in sales, where receiver actions are routinely logged against the outreach that induced them. We release SDR-Bench, a public corpus of 6,279 customer success stories spanning 22 industries and approximately 200 enterprises, served through a temporally constrained simulation that prevents future-data leakage. Across frontier LLMs and deep-research agents, we observe a consistent personalization plateau and on a Fortune 100 tech cohort no model statistically separates successful from unsuccessful outreach. A field deployment with 12 professional sales representatives validates the framework, with 48 percent of model-generated content rated immediately useful and senior-expert agreement at Pearson 0.82. We release SDR-Arena and SDR-Bench publicly to support reproducible study of generative personalization at scale.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.51; Date: 2026-07-24T13:13:20Z; Popularity: 2,513 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

17. [Launching Health in ChatGPT](https://openai.com/index/health-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT
   - Summary: Health in ChatGPT now lets eligible U.S. users securely connect medical records and Apple Health to get more personalized insights and better understand their health.

18. [Building AI infrastructure with the Effingham County community](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: OpenAI announces Project Camellia in Effingham County, Georgia, with commitments to responsible energy, community investment, jobs, and access to Codex.

19. [How news organizations are using AI to advance their vital missions](https://openai.com/index/how-news-organizations-are-using-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: News organizations are using AI to strengthen reporting, grow audiences, and improve business operations, with OpenAI tools supporting journalists and publishers worldwide.

20. [Advancing the next era of national science](https://openai.com/index/advancing-the-next-era-of-national-science)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines its commitment to advancing American science working with the U.S. Department of Energy and national labs to use frontier AI to accelerate discovery.

21. [NTT DATA Group cuts incident analysis to 30 minutes with Codex](https://openai.com/index/ntt-data)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 GMT
   - Summary: NTT DATA Group uses ChatGPT Enterprise and Codex to help 9,000 employees automate work, cut incident analysis to 30 minutes, and scale secure AI adoption.

22. [Introducing the ChatGPT for small business program](https://openai.com/index/introducing-chatgpt-small-business-program)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 17:00:00 GMT
   - Summary: OpenAI launches the ChatGPT for Small Businesses program, helping entrepreneurs build AI skills, automate work, and grow with ChatGPT Work.

23. [David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC](https://openai.com/index/david-velez-robin-vince-join-openai-boards)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT
   - Summary: David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC, bringing global leadership in finance, technology, and governance.

24. [Safety and alignment in an era of long-horizon models](https://openai.com/index/safety-alignment-long-horizon-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 20 Jul 2026 10:00:00 GMT
   - Summary: OpenAI shares lessons from deploying long-running AI models, highlighting new safety risks, observed failures, and improved safeguards through iterative deployment.

25. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

26. [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers](https://huggingface.co/blog/nunchaku-diffusers)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT

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

35. [ClickGuard: Detecting and Spoiling Clickbait News with Informativeness Measures and Large Language Models](https://arxiv.org/abs/2607.20463)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20463v1 Announce Type: new Abstract: This paper presents an AI-driven browser extension that identifies clickbait to help users avoid misleading Internet articles. Moving beyond traditional detection, the application employs a hybrid machine learning architecture that combines transformer-based embeddings with linguistically motivated features and a custom "baitness" score. After evaluating various natural language processing techniques -- from classic vectorizers to large language model (LLM) embeddings -- an XGBoost-based model was developed that achieves an F1-score of 91% on the open combined dataset. Most importantly, the tool can warn users before and after they access a clickbait article. After opening an article, the user receives a percentage score indicating the likelihood that it is clickbait. The prediction is explained based on the analyzed metrics, including those specifically developed within the proposed system. The browser extension also provides a clickbait spoiler -- a one- to two-sentence summary of the entire article. Demo video:https://www.youtube.com/watch?v=IJ1gkQV82C4}{https://www.youtube.com/watch?v=IJ1gkQV82C4

36. [Stochastic Sampling is Epistemically Shallow: The Dimensionality Gap Between Temperature Variation and Model Diversity in LLMs](https://arxiv.org/abs/2607.20464)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20464v1 Announce Type: new Abstract: When a language model gives different answers on repeated runs, does that variation reveal what it does not know? Self-consistency turns the variation into a per-question uncertainty estimate via majority voting. But does the same variation reveal cross-question structure -- related questions flipping together, the way a diverse ensemble does? We compare two regimes on the same questions: one model run $100$ times at $\tau=1$ versus an ensemble of $24$ LLMs run once each at $\tau=0$. A Marchenko--Pastur random-matrix test separates signal from sampling noise on both sides. Within any single model, at most one dimension rises above noise across five families and three benchmarks (MMLU, HellaSwag, GSM8K). Across the ensemble, four eigenvalues clear the noise edge, while a matched-difficulty Bernoulli null produces at most one in $500$ Monte Carlo draws. Self-consistency gives accurate per-question uncertainty but no detectable cross-question structure; only a diverse ensemble surfaces what a model does not know.

37. [DC-Leap: Training-Free Acceleration of dLLMs via Draft-Guided Contiguous Leaping Decoding](https://arxiv.org/abs/2607.20467)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20467v1 Announce Type: new Abstract: While parallel decoding is central to the efficiency of Diffusion Large Language Models (dLLMs), current strategies are often hindered by overly conservative confidence thresholds. These thresholds, necessitated by the Joint Probability Dependence Error (JPDE), result in redundant denoising iterations and suboptimal inference speeds. To overcome this, we propose DC-Leap, a training-free framework that enables reliable acceleration of dLLMs in the moderate-confidence regime. DC-Leap introduces a Dynamic Contiguous Verification strategy that integrates strictly-ordered causal constraints into the parallel decoding process. By progressively validating token dependencies, this mechanism effectively neutralizes the JPDE, enabling reliable acceleration with comparable performance. Furthermore, DC-Leap incorporates the draft-guided decoding mechanism, where the draft helps extend the context by leaping forward across multiple tokens, providing look-ahead context and retaining the structural benefits of bidirectional attention during inference. Extensive experiments on standard benchmarks demonstrate that DC-Leap achieves substantial speedups, up to 53.19x on MBPP for long-sequence generation, and up to 105.02x when combined with KV-Cache with comparable generation quality. Code is available at https://github.com/ffh-wyls/DC-Leap .

38. [PlanE: Meta Planning of Data, Tuning, and Inference for Extractive-based LLMs](https://arxiv.org/abs/2607.20470)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20470v1 Announce Type: new Abstract: Enhancing the task-specific capabilities of Large Language Models (LLMs) primarily requires substantial instruction-tuning datasets. However, the sheer volume of such data imposes a considerable annotation cost, and a lack of optimization methods for tailoring LLMs to specific tasks. To address the above issues, we propose a \textbf{Plan}ning framework for constructing \textbf{E}xtractive-based LLMs called \textbf{PlanE}, which includes data decomposition, instruction tuning, and prompt inference. Additionally, we introduce a Data-Tuning-Inference (DTI) planner, aimed at selecting the optimal base-LLM and its DTI combinations for specific datasets to improve construction efficiency. The experimental results demonstrate the effectiveness of our PlanE from two views: (1) across different datasets using the same base-LLM, and (2) on the same dataset using different base-LLMs. Furthermore, we validate the generalizability of the proposed DTI planner under different optimization objectives. The codes are publicly available at https://github.com/gugugu-469/PlanE.

39. [Multimodal CoLRAG-TF: Triple-Filtered Retrieval for Complex PDFs](https://arxiv.org/abs/2607.20517)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20517v1 Announce Type: new Abstract: Retrieval-augmented generation (RAG) over heterogeneous PDF collections remains challenging due to multimodal content, domain-specific terminology, and the need for multi-hop reasoning across dispersed evidence. We present Multimodal CoLRAG-TF, a four-axis fusion architecture that integrates dense text embeddings, BM25 keyword matching, knowledge-graph triple filtering, and image-based similarity for robust retrieval over complex documents. Our system constructs a multimodal index of 2,403 blocks extracted from 43 Japanese disaster lesson PDFs, supported by a hybrid OCR pipeline and LLM-based caption generation. To enhance compositional reasoning, we extract 11,414 OpenIE triples and index them with FAISS, enabling sub-second triple lookup and hierarchical propagation of relevance signals. A HippoRAG2-inspired coarse-to-fine retriever (volume $\to$ chapter $\to$ block) narrows the search space before final fusion scoring. Bayesian optimization over fusion weights reveals that the triple axis must dominate ($\alpha_\text{triple} = 0.44$) to counteract lexical bias and sustain multi-hop retrieval quality. Evaluated on a 457-pair benchmark, Multimodal CoLRAG-TF achieves a Retrieval Recall of 0.9909 and a 71.6$\%$ improvement in multi-hop answer similarity over single-hop queries. An image-to-lesson pipeline using a vision LLM further demonstrates the applicability of the approach to visual inputs. These results show that triple-filtered multimodal fusion is essential for structured reasoning over noisy, heterogeneous PDFs and provides a general framework applicable beyond the disaster domain.

40. [Adaptive Depth in Looped Transformers: Diagnosing Learned Halting Gates and Trajectory Readouts](https://arxiv.org/abs/2607.20519)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20519v1 Announce Type: new Abstract: Looped Transformers increase test-time computation by repeatedly applying a shared recurrent block. Learned halting objectives in looped Transformers typically use a single exit distribution both as the inference-time stopping rule and as the training-time weighting of per-depth losses. This entangles exit selection with trajectory formation: the gate not only chooses which recurrent state to use, but also determines how strongly each intermediate state is supervised. Consequently, poor adaptive-compute performance can arise from the readout, the induced trajectory, or their interaction. We study adaptive depth in looped Transformers through this trajectory--readout lens, across controlled synthetic tasks (modular arithmetic and binary parity) and large-scale Ouro-1.4B and 2.6B checkpoints. We find that fixed-prior depth supervision, which shapes the trajectory without an input-dependent halting policy, produces difficulty-aware trajectories whose intermediate states expose useful stopping signals, and that simple post-hoc confidence readouts often match or outperform learned linear and MLP gates. Fitting gates on frozen trajectories localizes the failure: it appears to stem mainly from the trajectory induced by joint gate training rather than from limited gate expressivity. The same pattern is present in Ouro evaluations, where pretrained ponder gates are competitive but not uniformly Pareto-optimal, and measured latency confirms that the resulting reductions in average exit depth translate into practical inference-time savings. Our systematic diagnostic evaluation reframes adaptive depth in looped Transformers as a joint problem of trajectory formation and exit readout, rather than gate learning alone, highlighting a distinction that prior learned-halting work has often left implicit.

41. [Matrix-free phase-field modeling of fracture in micromechanical testing simulations of inelastic materials](https://arxiv.org/abs/2607.21150)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21150v1 Announce Type: new Abstract: Resolving steep damage gradients across diffuse cracks in the phase-field modeling of fracture favors the use of high-order finite elements, for which matrix-free methods can provide superior performance and scalability. Here, we implement the Peric & Dettmer constitutive framework for visco-elastoplastic materials in an open source solid mechanics library supporting matrix-free operators for high-order finite elements with p-multigrid preconditioning on GPUs. We introduce a rheological fracture element assembled in series so that inelastic and fracture properties can appear to affect each other only at homogenization length scales. Numerical simulations of tensile and compressive tests are conducted for synthetic particle-matrix microstructures on an El Capitan high performance computing prototype. Results are shown to reproduce characteristic inelastic responses and crack propagation patterns.

42. [Cycle-Consistent and Uncertainty-Aware Neural Surrogates for Tokamak Edge Plasmas](https://arxiv.org/abs/2607.21407)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21407v1 Announce Type: new Abstract: The boundary and divertor plasma govern how a tokamak exhausts power and particles, setting heat fluxes, target conditions, and the onset of detachment. Predicting these quantities is essential for operating current and future devices, but edge simulations that resolve them are too slow for parameter scans, optimization, or real-time control. Machine-learning surrogates offer a fast alternative, yet most are forward-only: they cannot recover input parameters from observations or assess the reliability of their predictions. We introduce a cycle-consistent neural surrogate for edge plasmas, combining a conditional U-Net forward model with an optimization-based inverse method built on the frozen forward network. The forward model maps five control parameters to two-dimensional plasma-state fields on the SOLPS-ITER mesh; the inverse method enforces consistency between forward and inverse predictions, a self-supervised quality check needing no ground-truth labels at inference. An ensemble of multilayer perceptrons also predicts electron temperature and density profiles at the outboard midplane and divertor targets, with uncertainty estimates that flag where more simulations are needed. The forward model achieves normalized root-mean-square errors below 2.6% and Pearson correlations above 0.95 for all fields. Cycle-consistency regularization raises the average cyclical $R^2$ from 0.59 to 0.99 without degrading forward accuracy and enables recovery of the core fueling rate; all five control parameters are recovered with Pearson $r\ge0.97$. A $k$-d tree warm start yields a database completion rate above 95%, versus roughly 30% outright failures when cold-started. With about $4\times10^6$ parameters, the model produces full 2D predictions in milliseconds, five to six orders of magnitude faster than SOLPS-ITER, enabling real-time control, parameter scans, uncertainty analysis, and digital twins.

43. [An unfitted boundary algebraic equation method with Calder\'on preconditioning for 2D Stokes flow in irregular geometry](https://arxiv.org/abs/2607.21295)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21295v1 Announce Type: cross Abstract: We present an unfitted boundary algebraic equation method for the two-dimensional exterior/interior Stokes equations on a staggered MAC grid. By constructing an explicit free-space pair of velocity and pressure lattice Green's functions (LGFs) from free-space Laplace LGFs, we represent homogeneous fields using sources supported exclusively on thin staggered boundary layers. This formulation imposes physical Dirichlet data at cut points via local interpolation, while sampled-normal rank updates remove hydrostatic null modes associated with single or multiple obstacles. The workflow parallels that of classical boundary integral formulations and requires no artificial boundary conditions for exterior flows, but follows a discretize-then-represent route and does not require singular/near-singular quadrature. The resulting dense boundary system is solved via GMRES, utilizing a componentwise discrete Calder\'on preconditioner built from the scalar Laplace kernel and padded FFTs for fast volume convolutions. Extensive numerical validation, including multiply connected domains, narrow gaps, and Moffatt eddies, confirms discrete incompressibility to solver accuracy and recovers the expected Moffatt eddy scaling. We achieve second-order velocity and pressure convergence and bound maximum discrete divergence within numerical accuracy. The discrete Calder\'on preconditioner reduces the condition number by orders of magnitude and yields nearly mesh-independent conditioning in exterior configurations, while remaining effective---though more demanding---for narrow-gap and fine-grid interior problems.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.53; Date: 2026-07-24T12:47:07Z; Popularity: 1,531 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-07-24T05:53:25Z; Popularity: 476 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-24T04:30:32Z; Popularity: 281 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-24T04:39:04Z; Popularity: 215 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

48. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

49. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

50. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

51. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

52. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

53. [The Active Ingredient in Muon's Grokking](https://arxiv.org/abs/2607.20512)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20512v1 Announce Type: new Abstract: The Muon optimizer reaches the grokking threshold on modular arithmetic faster than AdamW. Prior work attributes this to "spectral-norm constraints plus orthogonalized momentum" but does not isolate which mechanism matters. To better understand Moun's behavior, we run multi-seed and multi-learning-rate sweeps to decompose and stress-test the effect. First, an ablation shows the speedup comes from orthogonalization (the Newton-Schulz iteration): orthogonalize-only matches full Muon, whereas spectral-only is no faster than AdamW and is unreliable, and this verdict holds across learning rates. Second, a mechanistic analysis finds that orthogonalizing optimizers reach generalization at roughly 3x lower spectral norm and, controlling for how much the embedding actually moves, settle into a lower-norm solution rather than simply perturbing the embedding less. Third, reducing the Newton-Schulz iteration count from five to one accelerates reaching the threshold but makes the grokked solution fragile, prone to transient collapse, with fragility that grows with learning rate; a single iteration is fast and stable only at small learning rate, while the canonical five iterations are the learning-rate-robust choice. We also show spectral scaling can be dropped at no measured cost. A methodological thread runs throughout: under a stability-aware metric, "faster" claims about grokking optimizers can invert, so we report both first-crossing and sustained-grok times. To support reproducibility, we release our full training and analysis code at https://github.com/louiswang524/muon-grokking-frontier

54. [Scaling Closed-Loop Feature Channel Configuration with LLMs](https://arxiv.org/abs/2607.20516)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20516v1 Announce Type: new Abstract: Promising initial results in closed-loop large-language-model-based channel-configuration search demonstrated that neural-network widths can be optimized directly through executable code generation and accuracy feedback. However, those results were obtained from a relatively sparse set of valid evaluations, leaving open whether the observed optimization behavior transfers to a denser sampling regime and whether additional architectural regularities emerge when more generated networks are evaluated. To test this, the same search setting is scaled to 250 candidate networks per fine-tuning cycle. The analysis covers 2000 generated candidates from 8 complete cycles, yielding 462 verified CIFAR-100 evaluations after task and metadata filtering. Per-cycle mean accuracy exhibits a positive linear trend with slope 9.87e-4 (p=0.043), while the high-performing frontier improves more strongly: the best observed accuracy increases from 0.3144 to 0.3676, and both the top-5 and top-10 cycle-level means exhibit positive trends. The scaled run also reveals improved parameter efficiency. The best model reaches 0.3676 with 11.8M parameters, compared with an early high-performing model at 0.3144 with 166.5M parameters. Beyond accuracy, the larger sample exposes architectural regularities that were difficult to assess from sparse observations. Non-power-of-two channel widths occur in 41.8% of verified candidates, and the strongest models share structured channel-allocation patterns characterized by moderate early widths and expanded middle or later blocks. These findings indicate that the channel-search signal observed in the initial study transfers

55. [CLOE: Christoffel Loss Autoencoder for Anomaly Detection](https://arxiv.org/abs/2607.20530)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20530v1 Announce Type: new Abstract: Semi-supervised anomaly detection plays a key role in diverse fields such as process monitoring, healthcare, and finance. However, lightweight methods often struggle with high-dimensional data and typically require careful tuning of multiple hyperparameters. Among existing approaches, Christoffel Function--based methods are attractive due to their simplicity, requiring at most a single hyperparameter. They also benefit from a well-established theoretical foundation that yields several interesting results for data science. However, their main limitation is poor scalability to high-dimensional settings. In this paper, we introduce CLOE, a new method that combines an autoencoder for dimensionality reduction with a Christoffel Function--based detector applied in the latent space. To better align representation learning with anomaly detection, we design a novel loss function that leverages the Christoffel Function to guide the autoencoder toward representations that better capture the support of the normal data distribution. We further propose a principled procedure to set the detection threshold and an efficient strategy to tune the single remaining hyperparameter. Experiments on multiple high-dimensional tabular anomaly detection benchmarks demonstrate that CLOE achieves superior performance compared to existing methods, while preserving the lightweight and low-tuning advantages of Christoffel Function--based approaches.

56. [A Single-Trace Surface Integral Equation Solver for Simulation of Open Bianisotropic Metasurfaces Described by Generalized Sheet Transition Conditions](https://arxiv.org/abs/2607.20659)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20659v1 Announce Type: new Abstract: A single-trace surface integral equation (SIE) solver incorporating generalized sheet transition conditions (GSTCs) is presented for the simulation of three-dimensional (3D) open bianisotropic metasurfaces. The metasurface is modeled as an infinitesimally thin, non-enclosing sheet across which the GSTCs enforce the electromagnetic field discontinuities through four surface susceptibility tensors. The proposed solver uses a single set of equivalent surface currents on the sheet, in place of the two sets used by prior multi-trace formulations. The scattered fields on both faces of the sheet, expressed through SIE operators acting on these currents, are substituted into the GSTCs. The resulting system of equations is then discretized using Rao--Wilton--Glisson basis functions. This solver models an open metasurface directly, without an artificial closure, and applies to both planar and curved geometries. It is validated against analytical solutions for polarization rotation and perfect reflection, and is used to model a realistic broadband absorber whose susceptibility tensors are retrieved from full-wave simulation data. A direct comparison shows that the single-trace formulation attains lower error than a multi-trace formulation while using significantly fewer unknowns.

57. [STORM: RDMA-based Monte Carlo Transport Scheme for Distributed-Memory Particle Simulations](https://arxiv.org/abs/2607.20639)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20639v1 Announce Type: cross Abstract: Monte Carlo particle transport enables high-fidelity astrophysical radiation and neutrino simulations - from core-collapse supernovae and neutron-star mergers to accretion flows - by handling multidimensional geometries, frequency dependence, and moving media without angular discretization. However, inter-rank communication limits scalability on unstructured meshes: standard two-sided MPI requires receivers to post receives and poll completions, creating per-iteration progress overhead that grows with the number of communication partners. Such problems have not demonstrated high scaling efficiency at $O(10^4)$ cores. We present STORM (Scalable Transport via One-sided Remote Memory), an open-source library for Monte Carlo transport on general meshes, physics, and boundary conditions. STORM provides a lock-free, mesh-independent communication layer that replaces MPI's matched-send/receive semantics with Remote Direct Memory Access (RDMA) - one-sided operations that write directly into a remote rank's memory without involving its CPU. Each rank pair shares a single-producer, single-consumer ring buffer; RDMA writes transfer particles while receivers remain passive. A two-sided MPI backend provides a portable fallback. In an adversarial uniform-emission benchmark, the RDMA backend sustains $>97\%$ weak-scaling and $>88\%$ strong-scaling efficiency up to 13,440~cores (112~cores per network adapter), with $1.14$-$1.27\times$ speedups over the two-sided alternative. In a Hohlraum IMC benchmark at 4480 ranks, it is $1.41\times$ faster because MPI progress overhead is reduced by $6.1\times$. By decoupling communication from physics models and mesh representations, STORM removes a barrier to scaling Monte Carlo transport in astrophysical multiphysics codes, enabling coupled radiation-hydrodynamics with energy- and angle-resolved photon or neutrino transport on dynamically evolving meshes at scale.

58. [Hierarchical Log-Gaussian Relaxation on a Fixed D3Q125 Velocity Set](https://arxiv.org/abs/2607.20846)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20846v1 Announce Type: cross Abstract: We develop a hierarchical order-resolved relaxation model for a fixed D3Q125 discrete-velocity kinetic formulation. Conventional adaptive collision models often use one scalar rarefaction or nonequilibrium indicator for all retained moment orders, thereby coupling distinct kinetic sectors. Here, a shared macroscopic-gradient background is combined separately with second-, third-, and fourth-order thermodynamic nonequilibrium indicators to define effective measures K2, K3, and K4, each driving its own log-Gaussian relaxation spectrum. Pure-order perturbation tests verify selective activation, with nonmatching sectors remaining at roundoff level. Homogeneous mixed-order, amplitude, and composition tests show lower residual nonequilibrium than a common-sensor model while preserving positive populations. In a smooth periodic compression wave at the stated reference discretization and in the TNE-only sensor limit, the peak total nonequilibrium intensity is reduced by 6.565%, with reductions throughout the domain and in all retained moment sectors. Additional timestep, transport-discretization, relaxation-spectrum, uniform-boost, long-time, and shear-wave studies show that the sign of the hierarchical correction is robust over the tested configurations, while its magnitude depends on timestep, transport scheme, sensor frame, and relaxation spectrum. The periodic benchmarks preserve the principal global invariants to floating-point accuracy and remain positive. These results establish the mechanism and numerical behavior of order-resolved activation on a fixed velocity set; independent kinetic-reference validation is still required before claiming universal accuracy improvement.

59. [Machine learning based prediction of optical properties in two-dimensional Mo-W-S-Se-Te transition-metal dichalcogenide alloys through physics-informed sampling](https://arxiv.org/abs/2607.21246)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21246v1 Announce Type: cross Abstract: Two-dimensional transition-metal dichalcogenide (TMD) alloys provide a compositionally tunable platform for controlling the optical and electronic properties. However, systematic prediction of their dielectric response across multicomponent alloy spaces remains challenging owing to the combinatorial cost of first-principles calculations. In this work, we combined ab initio optical-property calculations with a tabular foundation-model regression to predict the real and imaginary components of the frequency-dependent dielectric function for Mo-W-S-Se-Te TMD alloys. A dataset of 99 alloy structures spanning binary, ternary, quaternary, and quinary compositions was generated using density functional theory (DFT). The resulting polarization-dependent dielectric spectra were used to train a tabular prior-fitted network (TabPFN) and evaluated against the conventional Extra Trees and XGBoost models. To accommodate the in-context capacity limit of TabPFN, we introduced a non-uniform, physics-informed energy subsampling strategy that concentrates sampling in the optically active region above the band gap, where interband absorption is strongest. Trained solely on quaternary alloys, our TabPFN reconstructed the dielectric spectra of held-out quaternary compositions with an R2 > 0.98 and a mean absolute error below 0.10 for all four dielectric components, outperforming both baselines while requiring no gradient-based training or hyperparameter tuning. Our model further predicted derived optical quantities, including refractive index, extinction coefficient, and absorption coefficient. Additionally, our model generalized in a zero-shot manner to binary, ternary, and quinary alloys absent from the training set, with quinary predictions achieving an R2 > 0.97.

60. [Tailoring optical Schr\"odinger cat states via orientation-dependent high-harmonic generation in $\rm{H}_2^+$](https://arxiv.org/abs/2607.21248)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21248v1 Announce Type: cross Abstract: We theoretically demonstrate that the molecular orientation angle $\theta$ provides a structurally intrinsic, continuously tunable control parameter for engineering optical Schr\"{o}dinger cat states via high-harmonic generation (HHG) in H$_2^+$. Coupling time-dependent Schr\"{o}dinger equation simulations to the fully quantized HHG framework, we evaluate the Wigner functions of the post-selected harmonic-mode states under two complementary conditioning strategies. Conditioning on resonance-enhanced low-order harmonics exploits the complementary dipole selection rules of the $1\sigma_g\to1\sigma_u$ and $1\sigma_g\to1\pi_u$ transitions, driving a kitten-cat crossover whose direction is opposite in the two channels as $\theta$ is varied. Conditioning on plateau harmonics instead exploits two-center destructive interference, producing a reentrant cat$\to$kitten$\to$cat transition controlled by the order-dependent interference angle $\theta^*(q)$. In both cases the crossover is decoupled from the laser intensity, focal geometry, and molecular density, offering a degree of control with no counterpart in atomic targets.

61. [A general synthetic iterative solver for axisymmetric rarefied gas and electrostatic charged-particle flows](https://arxiv.org/abs/2607.21277)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21277v1 Announce Type: cross Abstract: An axisymmetric general synthetic iterative scheme (AxiGSIS) is proposed to simulate rarefied gas flows and charged particle transport under prescribed electrostatic fields. This solver adopts a finite-volume discrete velocity method defined over the two-dimensional axisymmetric meridian plane paired with a three dimensional molecular velocity space. Under the GSIS framework, the kinetic solver computes nonequilibrium stress and heat flux, which are subsequently imported as corrective source terms into the macroscopic synthetic system. Fast iterative updates of low order flow primitive variables are performed on this macroscopic system, whose corrected flow fields are then fed back to the kinetic solver. This bidirectional coupling enables rapid propagation of macroscopic information and substantially accelerates steady state convergence, particularly in near continuum flow regimes. Four benchmark flows are examined: the Taylor Couette flow, neutral nozzle expansion flow, charged particle flow past an electrostatic sphere, and electrostatically accelerated charged-particle nozzle flow. Results show that AxiGSIS reproduces the reference kinetic solutions and accurately captures axisymmetric flow physics and charged-particle responses to prescribed electrostatic fields. Utilizing fewer spatial cells and iteration steps, AxiGSIS substantially cuts computational overhead relative to conventional kinetic iterations, particularly for low and moderate Knudsen number flows.

62. [Graph Neural Network Force Fields (GPTFF-mol) for Organic Molecules from Optimization Trajectories (OpenGEM26)](https://arxiv.org/abs/2607.21369)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 24 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.21369v1 Announce Type: cross Abstract: Density functional theory (DFT) serves as a reliable tool for atomistic molecular simulations, while machine learning potentials have become powerful complements to balance accuracy and efficiency. In this work, we release OpenGEM26 (Open Generated Ensemble of Molecules, 2026), a large-scale dataset comprising 200,000 unique molecules and 4.4 million conformations composed of H, C, N, O, S and Cl with up to ten heavy atoms. All calculations are carried out at the {\omega}B97X-D/Def2-SVP and Def2-TZVP levels with dispersion corrections, and complete structural optimization trajectories and abundant non-equilibrium structures are recorded. Statistical analyses confirm that this dataset covers a broader conformational space than QM9 in terms of energy, bond lengths and bond angles. A graph neural network-based potential GPTFF-mol is trained using the new dataset, achieving an energy mean absolute error of 16 meV/molecule, which is equivalent to 0.82meV/atom, and superior force prediction performance compared with ANI-2x. Validated by butane rotation and keto-enol tautomerization tests, the model accurately describes molecular dynamical behaviors and reaction barriers at distorted geometries. This work provides a high-quality resource and robust ML potential for efficient simulations of sulfur- and chlorine-containing organic molecules.

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-23T00:43:55Z; Popularity: 706 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

65. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.63; Date: 2026-07-24T11:09:55Z; Popularity: 635 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

66. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-07-24T04:05:03Z; Popularity: 156 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

67. [Show HN: Mwe-MCP – self-hosted memory for AI agents that knows who may know what](https://github.com/Fr4nZ82/mwe-mcp)
   - Source: Hacker News; Group: Tech community; Score: 2.15; Date: 2026-07-23T12:38:20Z; Popularity: 3 points, 0 comments
   - Summary: HN discussion: 3 points, 0 comments.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-23T11:51:14Z; Popularity: 103 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Marking the Wrong Symptoms: Evaluating LLM Watermarks in Medical Texts

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.20462

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
