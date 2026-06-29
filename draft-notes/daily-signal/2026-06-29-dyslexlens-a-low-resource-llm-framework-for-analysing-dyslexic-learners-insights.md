# Daily signal sidecar - 2026-06-29

## Selected Signal

- Title: DysLexLens: A Low-Resource LLM Framework for Analysing Dyslexic Learners Insights from Online Forums
- URL: https://arxiv.org/abs/2606.27619
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: DysLexLens: A Low-Resource LLM Framework for Analysing Dyslexic Learners Insights from Online Forums
- Primary source: https://arxiv.org/abs/2606.27619
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Make the evidence path inspectable before trusting the answer.
- Failure mode: The system may cite related sources without proving that the cited section supports the claim.
- Practical test: Use known-answer questions, near-miss sources, citation precision checks, and replayable retrieval traces.
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

Total candidates reviewed after duplicate-source filtering: 66

1. [DysLexLens: A Low-Resource LLM Framework for Analysing Dyslexic Learners Insights from Online Forums](https://arxiv.org/abs/2606.27619)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27619v1 Announce Type: new Abstract: Dyslexic learners increasingly use artificial intelligence (AI) tools to support reading, writing, organisation, and study-related tasks. However, their lived experiences with these tools remain largely underexamined. This paper proposes DysLexLens, a low-resource LLM framework, designed to analyse dyslexic learners experience with AI through online forum discussions. DysLexLens is designed as an end-to-end, evidence-traceable architecture which transforms noisy social media posts into a dictionary-driven corpora, provides knowledge-graph (KG)-based question reasoning, generates verifiable query responses, and enables response evaluation through quantitative and human-grounded assessment. DysLexLens has four key features. First, it employs a dictionary-driven filtering method to construct a more focused Reddit corpus on dyslexia and AI, filtering out noisy and weakly related posts to improve the relevance of data collected from low-resource forum contexts. Second, it integrates LLM-assisted semantic analysis with KG-based query reasoning to uncover meaningful patterns. Third, it has quantitative evaluation metrics (RAGAS and Query Robustness) to measure LLM-generated response performance. Fourth, it provides structured qualitative validation guidelines for assessing response quality, with a specific focus on hallucination and evidence alignment. We demonstrate the effectiveness of DysLexLens using dyslexia-related Reddit forum data and 30 questions. The results show its potential generalisability to other low-resource forum data contexts. DysLexLens, sample data, questions and evaluation results are available at Github to support reproducibility.

2. [Internalizing the Future: A Unified Agentic Training Paradigm for World Model Planning](https://arxiv.org/abs/2606.27483)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27483v1 Announce Type: new Abstract: Large language model (LLM) agents have demonstrated strong capability in sequential decision-making, yet they remains fundamentally reactive in long-horizon tasks. Unlike humans who employ "what-if" reasoning to evaluate potential plans before commitment, standard agents lack an internal world model to simulate future outcomes. Therefore, we propose to internalize future-aware planning by training a single autoregressive model to verbalize both a prospective state rollout and a plan-conditioned success estimate-a textual analogue of the Q-value. Crucially, we identify a format-capability gap: simply fine-tuning agents on look-ahead traces during post-training leads to superficial mimicry of foresight without genuine predictive grounding. To bridge this gap, we introduce a three-stage training paradigm: (i) World Model Agentic Mid-Training (WM-AMT) to inject latent predictive capabilities into the policy; (ii) Format-Eliciting SFT (FE-SFT) to structure this injected capability; and (iii) Foresight-Conditioned Reinforcement Learning (FC-RL) to refine the calibration and utility of the generated simulations. Evaluated on search and mathematical reasoning tasks, our approach consistently outperforms other training baselines. Our results demonstrate that effective internal world modeling in LLM agents requires a capability-first training pipeline to achieve grounded and calibrated foresight.

3. [Odyssey: Constructing Verifiable Local Truth-Preserving Foundation Models](https://arxiv.org/abs/2606.27593)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27593v1 Announce Type: new Abstract: We introduce a categorical framework called ODYSSEY for constructing verifiable, local truth-preserving foundation models as compositions of foundries: building-block architectural components that specify a cover of local contexts, local representation families, restriction maps, gluing rules, obstruction policies, update obligations, and human-facing views. A foundry is an organized sheaf of knowledge that carries within it an argumentation component. Concrete foundries are built from generic foundries such as evidence/argument, operational decision, institutional/financial, market meaning, scientific challenge, research-program, assistant-build, and evaluation-harness foundries. Universal Foundry Learning (UFL) formalizes foundry construction as a composition of left and right Kan extensions, with left Kan extension rolling local artifacts into candidate foundries and right Kan extension enforcing the restriction, gluing, obstruction, and argumentation conditions required for promotion. Foundry SQL (FSQL) is a small typed query surface for slicing maintained foundry artifacts that uses TICKET (Topos Integration using Causal Kan Extension Transformers) certification for admitting external or pre-built models into durable ODYSSEY state. ODYSSEY is fully implemented and tested across a wide spectrum of concrete foundries, showing that the same categorical machinery supports domain construction, artifact replay, sheaf diagnostics, grounded Toulmin/local-LLM scrutiny, residual-obstruction ledgers, and optimized TICKET-compatible causal-claim extraction across heterogeneous sources. This paper is to be presented as a 2.5 hour tutorial at ICML 2026. The tutorial home page is at https://bit.ly/4ajS0nA.

4. [ToE: A Hierarchical and Explainable Claim Verification Framework with Dynamic Multi-source Evidence Retrieval and Aggregation](https://arxiv.org/abs/2606.27736)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27736v1 Announce Type: new Abstract: The rapid spread of fake news poses increasing threats to information ecosystems, especially as AI-generated misinformation under Generative Engine Optimization (GEO) poisoning allows adversarially crafted content to be systematically surfaced by retrieval systems, contaminating LLM reasoning. In this paper, we propose Tree of Evidence (ToE), a hierarchical evidence reasoning framework for automated fact-checking that models each claim as a dynamically expanding argument tree. ToE integrates a reinforcement learning-driven multi-source retrieval agent, an evidence evaluation agent, and an argument tree aggregation algorithm to iteratively decompose, retrieve, and verify claims through an explainable evidence chain. We further provide a theoretical analysis of the retrieval process, deriving a formal error bound that guarantees the learned policy converges to a neighborhood of the information-theoretically optimal policy. Experiments across multiple datasets and backbone LLMs demonstrate that ToE achieves improvements ranging from 4 to 24 percentage points over competitive baselines, with particularly pronounced gains on adversarially poisoned inputs.

5. [InternScience/InternAgent](https://github.com/InternScience/InternAgent)
   - Source: GitHub repository search; Group: Open source; Score: 5.34; Date: 2026-06-29T13:22:39Z; Popularity: 1,339 stars
   - Summary: InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery

6. [ruc-datalab/DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze)
   - Source: GitHub repository search; Group: Open source; Score: 5.29; Date: 2026-06-29T09:42:10Z; Popularity: 4,291 stars
   - Summary: DeepAnalyze is the first agentic LLM for autonomous data science. 🎈你的AI数据分析师，自动分析大量数据，一键生成专业分析报告！

7. [Mapping Europe’s AI Workforce Opportunity](https://openai.com/index/mapping-ai-jobs-transition-eu)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 29 Jun 2026 07:00:00 GMT
   - Summary: A new OpenAI report maps how AI could reshape jobs across the EU, highlighting which occupations may face automation, growth, or workflow changes.

8. [Helping build shared standards for advanced AI](https://openai.com/index/helping-build-shared-standards-for-advanced-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 23 Jun 2026 13:00:00 GMT
   - Summary: OpenAI helps build shared standards for advanced AI, supporting evaluation frameworks, safety practices, and global cooperation through the Appia Foundation.

9. [Experimenting with the proposed Cross-Origin Storage API in Transformers.js](https://huggingface.co/blog/cross-origin-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

10. [AI-Model Network: Concept, Current State and Future](https://arxiv.org/abs/2606.27382)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27382v1 Announce Type: new Abstract: While the primary function of computers lies in computation and processing, the core value of the Internet is rooted in sharing and collaboration. Computers create the Internet, and the Internet empowers the value of computers. The rapid development of the Internet, cloud computing, and big data is pushing artificial intelligence into the era of large models (LMs). However, the practical application of LMs is currently hindered by high training costs and deployment complexities, driving a shift toward lightweight, private, and domain-specific models. With the rapid proliferation and wide distribution of heterogeneous models, enabling effective interaction and collaboration among them has emerged as a critical bottleneck that urgently needs to be addressed in LM development. Drawing inspiration from the development of the Internet, this paper proposes the concept, vision, and system architecture of world wide AI-model network (AI-ModelNet). It is a novel paradigm that achieves interconnection, capability sharing, and collaborative reasoning by establishing pathways between models. We first briefly review the current state of single-model and multi-model research. Subsequently, the systemic vision and hierarchical architecture of AI-ModelNet are articulated, followed by validation of the framework's feasibility through a prototype system and diverse application cases. Finally, key directions for future research are discussed preliminarily.

11. [MER-R1: Multimodal Emotion Reasoning via Slow-Fast Thinking Synergy](https://arxiv.org/abs/2606.27652)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27652v1 Announce Type: new Abstract: We find that explicit reasoning does not necessarily translate into better multimodal emotion recognition (MER) accuracy, even though it makes predictions more interpretable. Specifically, for reasoning-based MLLMs, fast thinking by triggering direct answers often outperforms slow thinking after deliberative reasoning. Our empirical analyses show that fast thinking improves recall with broader and more confident predictions, whereas slow thinking favors precision through conservative filtering of incorrect categories. Building on these insights, we propose MER-R1, a reinforcement learning framework that turns slow-fast complementarity into explicit optimization. Dual-objective disentanglement separates recall and precision into two optimization signals, allowing them to be jointly optimized rather than traded off against each other. Slow-fast confidence calibration further aligns the final slow-thinking answer with fast-thinking intuition, strengthening correct emotions while suppressing incorrect ones. In this way, MER-R1 unifies the recall-oriented intuition of fast thinking with the precision-oriented selectivity of slow thinking. We further provide theoretical justification for this synergy, showing that it mitigates variance-induced interference during optimization. Extensive experiments on MER-UniBench and MME-Emotion show that MER-R1 achieves state-of-the-art performance and makes reasoning genuinely benefit emotion recognition.

12. [Towards Reliable and Robust LLM Planning: Symbolic Feedback-Driven Iterative Self-Refinement Framework](https://arxiv.org/abs/2606.27757)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27757v1 Announce Type: new Abstract: Large language models (LLMs) have attracted widespread attention from academia and industry, yet their deployment raises critical security concerns regarding robustness and reliability. Planning, a core component of intelligent behavior, remains challenging for LLMs, which often produce infeasible or incorrect solutions in long-horizon decision-making tasks due to inherent complexity. In this paper, we propose a symbolic feedback-driven iterative self-refinement framework to enhance the robustness and reliability of LLMs in long-horizon planning. Specifically, a natural language prompting mechanism is introduced to map logical symbols into natural language descriptions, enabling LLMs to better capture task constraints and semantics. We further design a symbolic verifier that identifies errors and converts them into corrective instructions interpretable by the LLM, thereby guiding self-refinement. In addition, we leverage a plan recognizer to infer goal reachability, facilitating more effective guidance toward desired goals. Empirical results demonstrate that the proposed framework consistently improves both feasibility and correctness in long-horizon planning tasks. This highlights its effectiveness in enhancing the reliability of LLM-based planning and potential to enable more trustworthy AI systems.

13. [Grounded Iterative Language Planning: How Parameterized World Models Reduce Hallucination Propagation in LLM Agents](https://arxiv.org/abs/2606.27806)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27806v1 Announce Type: new Abstract: World models for language agents come in two useful forms. An agent-based world model calls an LLM API and reasons flexibly in language, but its errors appear as hallucinated state changes that are hard to score with ordinary regression losses. A parameterized world model is a trained transition predictor; its errors are easier to measure with quantities such as NodeMSE, delta accuracy, and validity accuracy, but it is usually weaker as a standalone planner. We compare these two families on four graph-structured planning benchmarks and introduce operational hallucination metrics for the agent-based case. The comparison motivates \textbf{Grounded Iterative Language Planning} (GILP), which trains only a small parameterized backbone and combines it with API-based agent reasoning. The backbone supplies valid actions, predicted state deltas, risk, and value; the LLM drafts an action and imagined delta; and a consistency gate asks for revision when the two disagree. On real GPT-4o-mini calls, GILP reduces hallucinated-state rate from 0.176 to 0.035. In calibrated simulator ablations, it raises success from 0.668 to 0.838 while adding only ~22% extra LLM calls.

14. [OverFlowLight: Real-Time Gridlock Prevention and Traffic Signal Optimization for Urban Intersections](https://arxiv.org/abs/2606.27381)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27381v1 Announce Type: new Abstract: Queue overflow, a severe consequence of urban traffic congestion, occurs when vehicle queues exceed intersection capacity, obstructing upstream traffic and triggering cascading gridlocks. Prevailing traffic signal control (TSC) algorithms, primarily optimized for throughput, often fail to address overflow during peak hours, exacerbating congestion and creating safety hazards. We propose OverFlowLight, a real-time framework designed to preemptively resolve overflow and enhance overall TSC performance. It first introduces a mechanism to accurately detect overflow in real-time by leveraging multi-modal sensing from cameras and radars. Upon detection, it dynamically generates and inserts dedicated overflow phases into the signal cycle to clear the blocking queues. This is orchestrated by a hybrid control design that combines rapid rule-based overflow intervention with controller back ends such as reinforcement learning (RL) for longer-horizon efficiency. We conducted extensive real-world deployments of OverFlowLight across 43 intersections in three major cities. The framework demonstrates seamless integration with existing RL-based TSC agents, highlighting its modularity and practical applicability. Empirical results show that OverFlowLight reduces overflow incidents by 60.4% and increases network throughput by 18.2% compared to deployed baselines. Furthermore, it substantially diminishes the need for manual intervention common with expert-tuned signal plans. This work presents the first practical, scalable, and data-driven framework for actively preventing traffic gridlock, offering a crucial component for building resilient and efficient urban transportation systems. Our demonstration videos, codes and datasets are available at the anonymous URL, https://anonymous.4open.science/r/OverFlowLight-FBF9.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.12; Date: 2026-06-29T14:18:17Z; Popularity: 2,121 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-06-29T15:21:43Z; Popularity: 19 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

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

21. [How GPT-5 helped immunologist Derya Unutmaz solve a 3-year-old mystery](https://openai.com/index/gpt-5-immunology-mystery)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 23 Jun 2026 17:00:00 GMT
   - Summary: GPT-5 Pro helped solve a 3-year-old immunology mystery, offering insights into T cell behavior. The breakthrough could support cancer and autoimmune research.

22. [How Omio is building the future of conversational travel](https://openai.com/index/omio)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 23 Jun 2026 00:00:00 GMT
   - Summary: Discover how Omio uses OpenAI to power conversational travel experiences, accelerate product development, and transform into an AI-native company.

23. [Daybreak: Tools for securing every organization in the world](https://openai.com/index/daybreak-securing-the-world)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 22 Jun 2026 10:00:00 GMT
   - Summary: OpenAI introduces new Daybreak tools, including Codex Security and GPT-5.5-Cyber, to help organizations find, validate, and patch vulnerabilities at scale.

24. [Patch the Planet: a Daybreak initiative to support open source maintainers](https://openai.com/index/patch-the-planet)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 22 Jun 2026 10:00:00 GMT
   - Summary: OpenAI introduces Patch the Planet, a Daybreak initiative helping open-source maintainers find, validate, and fix vulnerabilities with AI and expert review.

25. [mimalloc: A new, high-performance, scalable memory allocator for the modern era](https://www.microsoft.com/en-us/research/blog/mimalloc-a-high-performance-scalable-memory-allocator-for-the-modern-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 13 May 2026 17:19:59 +0000
   - Summary: mimalloc is an open-source, modern, scalable memory allocator that is a drop-in replacement for malloc and free. It is relatively small (~12K lines), with clear internal data structures, and is easy to build and integrate into other projects. It provides bounded worst-case allocation times (up to OS primitives), bounded space overhead, low internal fragmentation, and minimal contention by relying almost exclusively on atomic operations. The post mimalloc: A new, high-performance, scalable memory allocator for the modern era appeared first on Microsoft Research .

26. [Run a vLLM Server on HF Jobs in One Command](https://huggingface.co/blog/vllm-jobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 26 Jun 2026 00:00:00 GMT

27. [Which tokens does a hybrid model predict better?](https://huggingface.co/blog/allenai/hybrid-token-prediction)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 25 Jun 2026 16:11:42 GMT

28. [Accelerating Transformers Fine-Tuning with NVIDIA NeMo AutoModel](https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 16:00:13 GMT

29. [Introducing the FFASR Leaderboard: Benchmarking ASR in the Real World](https://huggingface.co/blog/ffasr-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 00:00:00 GMT

30. [Build real agentic apps using CUGA: two dozen working examples on a lightweight harness](https://huggingface.co/blog/ibm-research/cuga-apps)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 23 Jun 2026 12:51:55 GMT

31. [Shipping huggingface_hub every week with AI, open tools, and a human in the loop](https://huggingface.co/blog/huggingface-hub-release-ci)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

32. [PP-OCRv6 on Hugging Face: 50-Language OCR from 1.5M to 34.5M Parameters](https://huggingface.co/blog/PaddlePaddle/pp-ocrv6)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 22 Jun 2026 13:18:56 GMT

33. [We got local models to triage the OpenClaw repo for FREE!*](https://huggingface.co/blog/local-models-pr-triage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 22 Jun 2026 00:00:00 GMT

34. [MosaicLeaks: Can your research agent keep a secret?](https://huggingface.co/blog/ServiceNow/mosaicleaks)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 18 Jun 2026 18:13:13 GMT

35. [When Does Personality Composition Matter for Multi-Agent LLM Teams?](https://arxiv.org/abs/2606.27443)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27443v1 Announce Type: new Abstract: Personality prompting shapes how large language models communicate, yet whether these behavioral shifts affect objective task outcomes remains under-explored. Prior work shows that agents prompted with low agreeableness produce adversarial language, while those prompted with high agreeableness become cooperative, but the relationship between communication style and task performance has not been systematically examined across multiple domains. In this work, we investigate whether personality composition matters for multi-agent team performance by manipulating personality traits across frontier LLMs on three task domains: structured coding, open-ended research collaboration, and competitive bargaining. We find that personality effects depend critically on task structure. In coding tasks, low agreeableness leads to large communication shifts that have little effect on milestone completion. In open-ended collaboration and bargaining, the same manipulation substantially degrades performance. We discuss implications for multi-agent system design and the limits of personality manipulation.

36. [Understanding Rollout Error in Graph World Models](https://arxiv.org/abs/2606.27780)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27780v1 Announce Type: new Abstract: World models are often used for planning by rolling learned dynamics forward. Many planning environments, however, are not vectors or images; they are graphs of agents, tools, skills, routes, and dependencies. In these settings, a local prediction error may stay local or spread through the graph, and the failure mode changes again when edges are predicted rather than fixed. This paper studies long-horizon rollout error in Graph World Models (GWMs). We formulate a unified fixed-edge and dynamic-edge GWM framework with action nodes for node-, edge-, and graph-level decisions. We develop graph-valued rollout bounds that separate topology-induced amplification from model-induced amplification, and we introduce a joint node-edge operator for dynamic-edge rollouts. Guided by the analysis, we propose Error-Aware GWM, which combines spectral regularization, rollout consistency, and critical-node weighting. Across synthetic topologies and heterogeneous agent-graph testbeds, rollout error and planning regret grow with horizon, dynamic-edge training is needed when structure evolves, and Error-Aware GWM prevents long-horizon divergence while preserving prediction accuracy. Real-world graph benchmarks clarify the scope of GWMs: they are most useful for dynamic graph rollout and agent planning, while specialized graph models remain strong on static or sparse prediction tasks.

37. [Unified Zero-Shot Time Series Forecasting: A Darts Foundation](https://arxiv.org/abs/2606.27438)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27438v1 Announce Type: new Abstract: Since its initial release in 2020, Darts has become a widely used open-source Python library for time series analysis. A series of foundation models have recently claimed accuracy improvements in zero-shot forecasting, promising a paradigm shift from training custom models to harnessing pre-trained general-purpose forecasters. Foundation models, however, are often released as isolated packages with fragmented interfaces and limited interoperability with common tooling, making joint evaluation and integration within complete pipelines difficult. In Darts, we developed a unified $\texttt{FoundationModel}$ class collection (Chronos-2, TimesFM 2.5, TiRex, PatchTST-FM) that provides standardized, full-cycle forecasting interfaces with minimal external dependencies for integrating foundation models into the ecosystem. Existing Darts pipelines can now use foundation models with only a name change; new pipelines can use them for zero-shot or fine-tuned forecasting, uncertainty estimation, and backtesting, combined with data processing and evaluation tooling, all within a unified framework.

38. [Boundary condition fidelity for bottom-hole pressure and CO2 plume prediction in geological carbon storage](https://arxiv.org/abs/2606.27515)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27515v1 Announce Type: new Abstract: Accurate prediction of bottom-hole pressure (BHP) and CO2 plume migration is essential for safe geological carbon storage, yet practical simulations often rely on truncated domains where artificial boundaries distort pressure diffusion and CO2 saturation footprints. In this study, we evaluate how boundary-condition fidelity affects BHP and CO2 plume prediction by comparing ten reduced-domain boundary treatments against full-domain reference simulations in homogeneous and heterogeneous reservoirs. We test uniform pore-volume multipliers, transmissibility modifiers, corner-adjusted pore-volume corrections, layered corrections, and gradual modifiers using BHP RMSE, NRMSE, peak pressure deviation, and plume Intersection over Union (IoU) as performance metrics. Our results show that conserving corner pore volume is the most important requirement for truncated-domain modeling. We find that uniform treatments which neglect corner storage generate large pressure errors, with BHP RMSE of 362 to 382 psi in the homogeneous model and 250 to 304 psi in the heterogeneous model, and yield plume IoU values near 0.80 to 0.84, indicating roughly 16 to 20% of the combined plume area is misrepresented. Corner-adjusted scenarios substantially reduce pressure errors and raise plume IoU above 0.94, but we observe that transmissibility correction is not universally beneficial. In homogeneous reservoirs, uniform transmissibility adjustment improves pressure fidelity; in heterogeneous reservoirs, it can over-restrict flow across variable-permeability boundary faces, increasing BHP error and contracting the predicted plume. We find the gradual modifier with transmissibility correction provides the most consistent performance, achieving BHP NRMSE below 3.7% and plume IoU above 0.97 in both reservoir types.

39. [Mosaic: A Benchmark Suite for Differentiable Physics Solvers](https://arxiv.org/abs/2606.27895)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27895v1 Announce Type: new Abstract: Differentiable partial differential equation (PDE) solvers underpin solver-in-the-loop ML training, gradient-based optimal control, and inverse problems, yet the practical cost of obtaining correct, usable gradients from a given solver on a given problem is largely undocumented. Integration effort, computational cost, gradient accuracy, and numerical conditioning vary widely across solvers and are discoverable only by trial and error. We introduce Mosaic, an extensible benchmarking framework for differentiable PDE solvers that standardizes access to solver gradients. Each solver is packaged as a containerized component (Tesseract) exposing a uniform gradient API regardless of language or automatic differentiation (AD) strategy, enabling researchers to evaluate, compare, and build on non-trivial physical solvers. Our evaluation of 14 solvers across fluid dynamics, structural mechanics, and heat transfer demonstrates that the benchmark surfaces practically relevant differences: order-of-magnitude variation in computational cost and Jacobian conditioning, alongside structural incompatibilities that eliminate solvers from realistic tasks entirely. Despite this variation, all solvers that produce gradients converge to similar optima, indicating that the practical barriers are memory limits, numerical stability, and setup compatibility rather than gradient accuracy alone. Mosaic is open-source and available at https://github.com/pasteurlabs/mosaic.

40. [Analysis, thermodynamics, and a numeric solver for a pressure-temperature equilibrium closure of the four-equation model](https://arxiv.org/abs/2606.27726)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27726v1 Announce Type: cross Abstract: We analyze an often used closure model for multi-material hydrodynamics where pressure temperature equilibrium (PTE) is assumed for every state; emphasis is placed on tabular equations of state. This multi-material model is often referred to as the four-equation model. The identification of the admissible set is presented and is proven to be convex, setting the foundation for development of invariant-domain methods for this model. A novel, robust, and efficient method is presented for solving the highly nonlinear system for the equilibrated pressure and temperature with an arbitrary number of materials. Additionally, we provide a detailed analysis of the thermodynamics of the mixture model for general equations of state and prove existence and uniqueness of the pressure-temperature equilibrium solution under some thermodynamic assumptions.

41. [A fast sum-of-Gaussians algorithm for the high-dimensional fractional Fokker-Planck equation](https://arxiv.org/abs/2606.28184)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.28184v1 Announce Type: cross Abstract: We present a fast, high-order algorithm for the free-space fractional Fokker-Planck equation (FFPE) in arbitrary spatial dimension. Its fundamental solution, corresponding to a Dirac-delta initial condition, is obtained from the explicit Fourier representation by applying a sum-of-Gaussians (SOG) approximation to the nonseparable stretched exponential, using its complete monotonicity as the Laplace transform of a one-sided $\alpha$-stable density. Each Gaussian term is an ordinary heat kernel and therefore factorizes across spatial coordinates. On a tensor-product grid, the separated form can be assembled in $O(MdN)$ work and storage, rather than forming all $O(N^d)$ grid values, where $M$ is the number of Gaussian terms and $N$ is the number of points per dimension. We prove an a~priori error estimate for the pure-fractional fundamental solution and give a parameter-selection procedure for prescribed accuracy over specified ranges of space and time. In numerical experiments the method achieves more than ten digits of relative accuracy, with $M$ growing only logarithmically in the inverse tolerance, and maintains this accuracy in dimensions up to $d=10^{5}$. This exceeds the dimensions reached in comparable radial-quadrature tests, where the integrand becomes increasingly oscillatory as the dimension grows. Because the method represents the fundamental solution as a separated sum of heat kernels, any initial datum given as a finite sum of tensor products can be evolved in closed form using only one-dimensional convolutions. This yields a computable class of high-dimensional solutions that is amenable to error analysis, and tensor neural networks provide one possible way to construct such separated representations for more general data.

42. [LieSolver: PDE-Constrained Learning for IBVPs via Lie Symmetries](https://arxiv.org/abs/2510.25731)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2510.25731v2 Announce Type: replace-cross Abstract: Initial-boundary value problems (IBVPs) provide the essential framework for modelling a wide range of phenomena in physics and engineering. We introduce a novel method for efficiently solving IBVPs using Lie symmetries to enforce the associated partial differential equation (PDE) exactly by construction. By leveraging symmetry transformations, our model embeds the underlying physical laws and learns the solution solely from initial and boundary data. Consequently, the boundary loss directly quantifies domain-wide error, enabling rigorous error estimation for well-posed IBVPs. We implement LieSolver and demonstrate its application to linear homogeneous PDEs, showing that it outperforms physics-informed neural networks (PINNs) in both speed and accuracy while yielding compact models. Overall, our approach significantly enhances the efficiency and reliability of predictions for PDE-constrained problems.

43. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.45; Date: 2026-06-29T10:13:06Z; Popularity: 451 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.26; Date: 2026-06-29T12:58:27Z; Popularity: 1,265 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-06-28T00:40:05Z; Popularity: 216 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

46. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.18; Date: 2026-06-29T06:19:18Z; Popularity: 180 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

47. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

48. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

49. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

50. [GridSFM: A new, small foundation model for the electric grid](https://www.microsoft.com/en-us/research/blog/gridsfm-a-new-small-foundation-model-for-the-electric-grid/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 13 May 2026 16:00:20 +0000
   - Summary: Introducing GridSFM, a small foundation model that can predict AC optimal power flow in milliseconds, boosting efficiency and unlocking cost savings. Learn how GridSFM gives grid operators direct visibility into congestion, stability, and system health. The post GridSFM: A new, small foundation model for the electric grid appeared first on Microsoft Research .

51. [PairSAE: Mechanistic Interpretability from Pair Representations in Protein Co-Folding](https://arxiv.org/abs/2606.27440)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27440v1 Announce Type: new Abstract: Foundation models for structural biology have achieved remarkable performance in predicting biomolecular structure and show promise for the design of proteins and small molecules. Yet understanding which internal features drive their outputs remains challenging. Standard sparse autoencoders (SAEs), effective on transformer-style sequence embeddings, do not transfer cleanly to pairformer-like architectures: naively operating on pairwise representations yields a quadratic blow-up of features and obscures concepts distributed jointly across sequence and pair representations. We introduce PairSAE, which summarizes pairwise tensors via an N-mode SVD into token-wise interaction roles, then uses a sparse autoencoder to learn a shared set of token-level features that decode into both sequence and pair representations. Evaluated on Boltz-2 activations for PLINDER protein-ligand complexes, PairSAE yields interpretable features that align with UniProt annotations and predict Boltz-2 affinity values. These results indicate that PairSAE links the latent space of foundation models for structural biology to interpretable structural concepts, clarifying what the model "knows" while avoiding pairformer-induced pitfalls that limit conventional SAEs.

52. [Prism Transformer: Progressive Head Schedules for Hierarchical Attention Processing](https://arxiv.org/abs/2606.27449)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27449v1 Announce Type: new Abstract: Multi-head attention conventionally partitions the hidden dimension equally across all heads at every layer, enforcing an identical representational subspace dimension (dh = dmodel/h) throughout the models depth. In this work, we identify this uniform allocation as a fundamental structural bottleneck: due to their restricted dimensional space, early-layer heads are unable to faithfully capture complex, high-dimensional contextual patterns. To resolve this, we introduce the Prism Transformer, a novel architectural paradigm that replaces the static, uniform head configuration with a progressive head schedule. By monotonically increasing the head count across layers, the Prism Transformer naturally establishes a local-to-global representational hierarchy: early layers leverage fewer, exceptionally wide heads to capture complex, local compositional patterns, while deep layers deploy many, narrow heads to decompose these patterns into specialized linguistic features. Crucially, this structural shift is parameter-neutral, compute-neutral, and introduces zero training or inference overhead, preserving identical weight matrices and FLOP budgets as the standard Transformer. Across three model scales (124M, 354M, and 757M), the Prism Transformer consistently outperforms uniform baselines, achieving consistent reductions in validation loss alongside consistent gains on downstream zero-shot benchmarks (including PIQA, HellaSwag, ARC-Easy, and WinoGrande). Our findings demonstrate that non-uniform subspace allocation unlocks latent capacity within the standard Transformer budget, enabling more effective use of model capacity.

53. [Productionized Fairness Measurement Under Privacy Constraints](https://arxiv.org/abs/2606.27558)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27558v1 Announce Type: new Abstract: Fairness measurements in the form of disaggregated evaluations often rely on demographic signals that are legally constrained or culturally sensitive. Race and ethnicity signals are among the more difficult signals to curate and use for this task. This paper presents Privacy-Preserving Probabilistic Race/Ethnicity Estimation (PPRE) as a method for enabling fairness measurements with respect to race/ethnicity for U.S.\ LinkedIn members in a privacy-preserving manner. PPRE applies privacy technologies (specifically: secure two-party computation, differential privacy, and additive homomorphic encryption) on top of two race/ethnicity demographic signal sources (the Bayesian Improved Surname Geocoding estimator and a sparse golden survey set of self-reported demographics) to power a fairness measurement solution with respect to US-based race/ethnicity demographics. We detail its privacy guarantees and demonstrate its application on candidate- and viewer-side fairness measurements. We close with a transferable framework for institutions seeking to implement similar privacy-preserving measurement infrastructure.

54. [Nonlinear Freezing of Vibrational Polariton Transport via Mesoscale Simulations](https://arxiv.org/abs/2606.27463)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27463v1 Announce Type: cross Abstract: Two-dimensional real-space imaging of vibrational polariton transport in planar Fabry--P\'erot microcavities is numerically simulated via the mesoscale cavity molecular dynamics approach, which self-consistently propagates $\sim\!2\times10^4$ realistic molecular simulation cells on a two-dimensional grid coupled to the same number of cavity modes. Beyond the well-known polariton ballistic-to-diffusive turnover in the linear response regime, these atomistic simulations reveal a nonlinear freezing mechanism of vibrational polariton transport, i.e., under strong pumping of the upper polariton, the initially ballistically propagating upper polariton completely freezes and localizes energy to molecules at specific locations. This mechanism originates from pump-induced breaking of the in-plane translation symmetry: significant molecular excitations at the pulse hot spot broaden the polariton density of states, thus funneling population to the $k_{\parallel}\rightarrow 0$ band edge with vanishing group velocities.

55. [Interface tracking with Microscale Topological Surgery for two-dimensional filament breakup](https://arxiv.org/abs/2606.27615)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27615v1 Announce Type: cross Abstract: We design and implement a Microscale Topological Surgery (MTS) algorithm to detect and enforce topological transitions in two-dimensional tracked interfaces. The method combines classical Lagrangian tracking with an intermittent topological processor that: (i) constructs Eulerian snapshots from which an interface family with microscale-resolved topology is extracted, (ii) infers adjacency topology between dual Lagrangian and Eulerian interface families, and (iii) performs interface surgery to stitch the two families together across microscale defect regions. A novel long-time nonlinear alternating-shear flow is introduced, in which repeated stretching and folding generate rich multiscale interface dynamics with filamentation at microscales. Using the MTS algorithm and a posteriori geometric and material diagnostics, we compute and visualize microscale filament-breakup dynamics. Error analysis and scaling studies demonstrate second-order geometric convergence and optimal computational scaling of the MTS algorithm, with topology-processing costs comparable to those of the underlying Lagrangian evolution. Ensemble simulations generated by pseudo-random perturbations of the flow further reveal coherent droplet size distributions and statistically robust filament-breakup dynamics.

56. [Extracting behavioural properties from face-to-face interactions temporal networks: a measure of egonet persistency](https://arxiv.org/abs/2606.27860)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27860v1 Announce Type: cross Abstract: Understanding how individuals repeat social interactions over time is a central problem in the analysis of temporal networks. In social systems, repeated interactions shape processes such as information diffusion, collective coordination, and the emergence of social structure. Existing measures of egonet persistence often conflate genuine behavioural regularities with structural effects such as node degree, making it difficult to distinguish meaningful temporal correlations from random mixing. In this work, we introduce the Neighbourhood Persistency Criterion (NPC), a statistically grounded framework for quantifying egonet persistence across time. NPC combines classical similarity measures with tailored null models controlling for network topology and interaction weights. We apply this framework to high temporal resolution face-to-face interaction networks collected at four Computational Social Science conferences using the SocioPatterns platform. Our results reveal a common behavioural structure across events, characterised by an exploration$\unicode{x2013}$exploitation trade-off in social interactions. While many individuals alternate between both strategies, others exhibit stable interaction patterns throughout the event. Importantly, these behaviours show little systematic association with socio-demographic attributes, suggesting that interaction strategies are shaped primarily by contextual factors rather than stable individual traits. NPC thus provides a flexible and interpretable tool for studying egonet persistence in temporal networks and social systems.

57. [$\texttt{SMaSH}$ : Simplify Massive Spinor Helicity](https://arxiv.org/abs/2606.27928)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2606.27928v1 Announce Type: cross Abstract: We present $\texttt{SMaSH}$, a $\texttt{Mathematica}$ package to do spinor helicity computations in four spacetime dimensions $\href{https://github.com/aakash-kmr/SMaSH}{\text{(github)}}$. It can handle massive spinor helicity computations with explicit little group indices which is a novel feature. It can also handle massless as well as off-shell spinor helicity variables. It is designed to compute perturbative computations; it comes with predefined three point amplitudes and propagators for any masses and spins (arXiv:1709.04891). It can implement the high energy limit over an expression, check the discrete $\tt{C,P,T}$ transformations, compute contact terms and impose gauge invariance for any scattering process. We have shown the usage of such functions for computing gauge invariant Weinberg minimal amplitudes (arXiv:2506:12431, arXiv:2504:06343). The package can also generate both real and complex numerical kinematics for any $n$-point scattering for arbitrary masses and energy scales by implementing the $\tt{RAMBO}$ algorithm. It is also rich with basic spinor helicity manipulations like Schouten simplification, Clifford algebra manipulation, conversion between spinor helicity and Lorentz vectors, derivative w.r.t. spinors and their scalars, helicity scaling etc.

58. [Adaptive Probability Flow Residual Minimization for High-Dimensional Fokker-Planck Equations](https://arxiv.org/abs/2512.19196)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2512.19196v4 Announce Type: replace Abstract: Solving high-dimensional Fokker-Planck (FP) equations remains a challenging problem in computational physics and stochastic dynamics, due to the curse of dimensionality, unbounded domains, and complex probability landscapes. In this work, we propose an adaptive probability flow residual minimization (A-PFRM) method for this problem. The second-order FP equation is reformulated as an equivalent first-order continuity equation associated with the probability flow ordinary differential equation, based on which a loss function is constructed to train neural network approximations without Hessian computation. To further improve the computational efficiency, the Hutchinson trace estimator is applied to compute the divergence in the corresponding score function, such that the training time can be dimension-independent on GPUs. Adaptive sampling strategies are employed to generate the collocation points, and our analysis shows that the Kullback-Leibler divergence between our A-PFRM approximation and the exact solution is bounded by the residual loss weighted by the estimated density function. Numerical experiments are presented to demonstrate the performance of A-PFRM, which include Ornstein-Uhlenbeck (OU) processes problems, Brownian motions with time-varying diffusion, and Geometric OU processes featuring non-Gaussian solutions up to one hundred dimensions.

59. [Effects of relational graph modularity and depth on the learning performance of neural networks](https://arxiv.org/abs/2507.10005)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 29 Jun 2026 00:00:00 -0400
   - Summary: arXiv:2507.10005v2 Announce Type: replace-cross Abstract: In recent years, graph-based machine learning techniques, such as reinforcement learning and graph neural networks, have garnered significant attention. While some recent studies have started to explore the relationship between the graph structure of neural networks and their predictive performance, they often limit themselves to a narrow range of model networks, particularly lacking mesoscale structures such as communities. Our work advances this area by conducting a more comprehensive investigation, incorporating realistic network structures characterized by heterogeneous degree distributions and community structures, which are typical characteristics of many real networks. These community structures offer a nuanced perspective on network architecture. Our analysis employs model networks such as random and scale-free networks, alongside a comparison with a biological neural network and its subsets for more detailed analysis. We examine the impact of these structural attributes on the performance of image classification tasks. Our findings reveal that structural properties do affect performance to some extent. Specifically, networks featuring coherent, densely interconnected communities demonstrate enhanced learning capabilities. Crucially, we find that this advantage is depth-dependent: extending the architecture to eight layers reverses the effect entirely. This comparison with the biological neural network emphasizes the relevance of our findings to real-world structures, suggesting an intriguing connection worth further exploration. This study contributes meaningfully to network science and machine learning, providing insights that could inspire the design of more biologically informed neural networks.

60. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

61. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.68; Date: 2026-06-29T03:23:53Z; Popularity: 678 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

62. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.59; Date: 2026-06-29T16:11:05Z; Popularity: 591 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

63. [facebookresearch/airs-bench](https://github.com/facebookresearch/airs-bench)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-06-27T04:56:00Z; Popularity: 99 stars
   - Summary: AIRS-Bench: an AI Research Science benchmark for quantifying the end-to-end AI research abilities of LLM agents

64. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-06-28T20:50:08Z; Popularity: 99 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

65. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

66. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

DysLexLens: A Low-Resource LLM Framework for Analysing Dyslexic Learners Insights from Online Forums

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2606.27619

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
