# Daily signal sidecar - 2026-07-01

## Selected Signal

- Title: Contrastive Reflection for Iterative Prompt Optimization
- URL: https://arxiv.org/abs/2606.30840
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Contrastive Reflection for Iterative Prompt Optimization
- Primary source: https://arxiv.org/abs/2606.30840
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

Total candidates reviewed after duplicate-source filtering: 67

1. [Contrastive Reflection for Iterative Prompt Optimization](https://arxiv.org/abs/2606.30840)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30840v1 Announce Type: new Abstract: LLM agents are becoming central to information retrieval: they issue retrieval queries, synthesize answers, and increasingly serve as judges for IR evaluation. Improving the prompts that control these agents is an optimization problem, but in applied IR settings it often looks less like blind search and more like debugging. Engineers need to know which behavior failed, which nearby behavior still worked, what distinguishes the two, and whether a prompt edit improves held-out quality without introducing regressions. We present Contrastive Reflection, an iterative prompt-optimization framework for agentic IR workflows. The framework starts from a task-centric quality definition: QA agents expose retrieval or reasoning traces, and grading agents expose dimension-level scores and rationales. These structured traces are used to identify error-anchored behavioral slices, add nearby successful examples from the same region, and ask a Teacher LLM to propose a targeted prompt edit. Candidate edits are accepted only when validation performance improves, optionally subject to regression checks. We instantiate the framework with a tree-based slice selector, but the contribution is the contrastive reflection loop rather than the tree itself. On a public HotpotQA retrieval-augmented QA setup, one tree-selected contrastive repair improves held-out exact-match accuracy from 51.4% to 60.4%. Failure-only and random-evidence variants improve less and break more previously correct examples. A light instruction-only comparison places the method near modern prompt optimizers: MIPROv2 reaches 59.4% and GEPA 57.0%. The result is an interpretable optimization loop for IR agents, aimed at making prompt repair more inspectable and validation-driven.

2. [BayesBench: Evaluating LLM Belief Trajectories Under Multi-Turn Evidence Accumulation](https://arxiv.org/abs/2606.30850)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30850v1 Announce Type: new Abstract: Large language models (LLMs) are typically deployed in multi-turn conversations, where each turn provides new evidence that should reduce epistemic uncertainty about their environment. Acting rationally then requires inferring the unobserved quantities that govern it and updating beliefs about them as evidence accumulates. Yet most evaluations only score the model's final-turn answer in a single-turn format, leaving this process unexamined. We ask how closely LLMs' belief updates match those of a rational Bayesian reasoner in multi-turn settings, and introduce BayesBench, a suite of simulation environments that probe this across three progressively complex tasks: (i) Bayesian estimation, where the model infers an unknown parameter from sequential evidence; (ii) Bayesian prediction, where the model turns inferred beliefs about a latent variable into outcome forecasts; and (iii) latent-framed Bayesian prediction, where observations are filtered through a user-persona framing, requiring joint inference over the latent state and the persona. Across seven LLMs (3B--70B), scaling improves latent inference and evidence accumulation, with updates occasionally matching the Bayesian posterior. However, these gains do not reliably carry over to downstream prediction, exposing a gap between inferring latent structure and using it to rationally update beliefs about the target outcome.

3. [Investigating Multi-Agent Deliberation in Law](https://arxiv.org/abs/2606.30906)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30906v1 Announce Type: new Abstract: Artificial Intelligence is increasingly applied to the field of law, and has the potential to increase access to justice. One particular movement that is gaining traction is that of agentic AI, wherein AI agents, based on Large Language Models (LLMs) can take autonomous actions. In particular, multi-agent approaches in the legal domain remain largely unexplored. In this paper, we investigate multi-agent deliberation methods for legal reasoning tasks using LLMs. We explore multi-agent deliberation (MAD) and introduce two novel multi-agent frameworks inspired by courtroom procedures and legal argumentation. Our experiments on both legal and non-legal benchmarks reveal that multi-agent frameworks achieve comparable overall performance to baseline large language models, but produce significantly distinct answers. Notably, these approaches can successfully solve cases that the baseline fails to address, and vice versa. We conduct a qualitative evaluation and highlight scenarios where multi-agent frameworks outperform monolithic approaches. For example, multi-agent approaches appear better suited for answering questions that require critical thinking from multiple perspectives. Our work positions multi-agent systems as a promising direction for AI in the legal domain, while demonstrating the potential of law-inspired multi-agent approaches for deliberation.

4. [AgRefactor: Self-Evolving Agentic Workflow for HLS Compatibility and Performance](https://arxiv.org/abs/2606.30949)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30949v1 Announce Type: new Abstract: High-Level Synthesis (HLS) provides a fast path from concepts to silicon, but converting real-world software into synthesizable HLS code remains challenging due to restrictive language support and the gap between software and hardware programming practices. Existing automated and LLM-based refactoring approaches partially address this problem, yet they often lack flexibility, struggle to scale, and incur high computational costs. We introduce AgRefactor, an LLM-based multi-agent workflow for refactoring software into HLS-compatible programs. AgRefactor incorporates a self-evolving memory system that accumulates and retrieves factual and strategic knowledge across tasks, improving robustness and efficiency on unseen programs. To reduce cost and enhance scalability, it integrates automated refactoring tools, enabling agents to balance LLM-driven rewrites with efficient tool-based transformations. On 9 out of 11 challenging real-world benchmarks, which are 5-10x longer than the most complex cases studied in prior work, AgRefactor outperforms or matches the state-of-the-art automated refactoring tool and a strong LLM-based baseline built on the same framework backbone. Further agentic performance optimization yields a 6.51x geometric mean speedup over the SoTA pragma tuning tool and a 1.20x speedup over optimized open-source designs with less than 20% extra resources. AgRefactor is fully-automated and open-sourced.

5. [InternScience/InternAgent](https://github.com/InternScience/InternAgent)
   - Source: GitHub repository search; Group: Open source; Score: 5.34; Date: 2026-07-01T08:05:45Z; Popularity: 1,342 stars
   - Summary: InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery

6. [ruc-datalab/DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze)
   - Source: GitHub repository search; Group: Open source; Score: 5.30; Date: 2026-07-01T15:20:50Z; Popularity: 4,299 stars
   - Summary: DeepAnalyze is the first agentic LLM for autonomous data science. 🎈你的AI数据分析师，自动分析大量数据，一键生成专业分析报告！

7. [Introducing GeneBench-Pro](https://openai.com/index/introducing-genebench-pro)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 30 Jun 2026 00:00:00 GMT
   - Summary: Introducing GeneBench-Pro, a new benchmark testing AI performance in genomics, biology, and scientific research using complex, real-world datasets.

8. [Mapping Europe’s AI Workforce Opportunity](https://openai.com/index/mapping-ai-jobs-transition-eu)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 29 Jun 2026 07:00:00 GMT
   - Summary: A new OpenAI report maps how AI could reshape jobs across the EU, highlighting which occupations may face automation, growth, or workflow changes.

9. [Helping build shared standards for advanced AI](https://openai.com/index/helping-build-shared-standards-for-advanced-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 23 Jun 2026 13:00:00 GMT
   - Summary: OpenAI helps build shared standards for advanced AI, supporting evaluation frameworks, safety practices, and global cooperation through the Appia Foundation.

10. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

11. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

12. [Experimenting with the proposed Cross-Origin Storage API in Transformers.js](https://huggingface.co/blog/cross-origin-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

13. [What Drives Interactive Improvement from Feedback?](https://arxiv.org/abs/2606.30774)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30774v1 Announce Type: new Abstract: We study when natural-language feedback produces improvement beyond the gains obtainable from repeated attempts alone. In multi-turn language agent setting, higher final accuracy can reflect useful feedback, but it can also arise from resampling, format correction, or additional test-time computation. To separate these effects, we introduce a controlled student-teacher protocol across Omni-MATH, Codeforces, BBEH Linguini, and ARC-AGI1, evaluating thirteen open-weight models in both student and teacher roles. We compare external feedback, self-feedback, and unguided self-refinement, while varying interaction history, task difficulty, and teacher access to privileged task information. Across settings, we find that multi-turn improvement is often not evidence of feedback use: self-generated feedback adds little beyond unguided self-refinement, whereas the strongest external teachers produce substantially larger feedback-specific gains, suggesting that useful feedback must provide guidance beyond generic retry. Dense student-teacher interaction matrices further show that interactive gains are driven more by the student's ability to use feedback than by the teacher's identity, although teacher choice remains important for a fixed student. These results suggest that feedback-based agents should be evaluated against repeated-attempt baselines, and that ability to act on feedback, not merely feedback availability, is a central bottleneck for interactive improvement. We release our controlled student-teacher evaluation framework at https://j-lojek.github.io/feedback-generation-is-a-bottleneck/.

14. [How Can AI Find My Model? A Model-Finding Experimental Study Considering Data Formats, Embeddings, and Retrieval Strategies](https://arxiv.org/abs/2606.30846)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30846v1 Announce Type: new Abstract: Discovering simulation models for reuse remains a fundamental challenge in Modeling and Simulation (M&S). When many models coexist, identifying those that align with a given modeling intent remains difficult. Recent advances in Artificial Intelligence (AI), particularly retrieval-based approaches, offer a promising pathway to operate at this semantic layer. In this paper, we present an experimental study investigating the impact of data representation, transformer-based embedding models, and retrieval strategies on the discovery of simulation models using natural language queries. We evaluated performance across multiple query types using standard information retrieval metrics, including recall@5 and nDCG@5. Results show that data representation matters, open-source embedding models can achieve high performance, and reranking methods are important, especially as query complexity increases. This work provides a baseline for AI-driven model discovery and discusses its role in advancing toward AI-driven composability and interoperability.

15. [When Does Learning to Stop Help? A Cost-Aware Study of Early Exits in Reasoning Models](https://arxiv.org/abs/2606.30852)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30852v1 Announce Type: new Abstract: Reasoning models spend different amounts of useful computation across instances, but it remains unclear when a learned stopping rule improves over simple confidence or convergence thresholds. We study this question with LearnStop, a hidden-state-free checkpoint stopper for reasoning language models. At fixed budget checkpoints, LearnStop probes a short answer from the current reasoning prefix and predicts prefix correctness from online features such as answer confidence, entropy, prefix vote share, answer stability, and backtracking-marker density. Across 18 task-model settings spanning GSM8K, MATH-500, MMLU-Pro, AIME-90, GPQA, Qwen3, and DeepSeek-R1 distillations, the answer is task-dependent. On free-form math, learned multi-feature stopping improves the fixed-budget frontier and often beats scalar exits: on GSM8K with Qwen3-32B, the empirical frontier reaches a post-hoc peak adapt gain of +0.157, validation-selected operating points preserve positive gains, and the paired gain over the strongest scalar baseline is +0.028. On multiple-choice and very hard settings, scalar confidence, entropy, or stability rules are competitive or stronger. We therefore frame learned stopping not as a universal replacement for scalar exits, but as a tool whose value depends on trajectory structure. We further provide validation-selected operating points, paired bootstrap tests, finite-grid lost-correct risk calibration, cost accounting under KV-fork, prefix-cache, and black-box regimes, H100 serving profiles, checkpoint-schedule sweeps, transfer analyses, and robustness checks. The main practical finding is that learned stopping is useful when many questions become correct before full budget but do not exhibit a single reliable scalar stopping signal; its benefits largely disappear when confidence or answer convergence already solves the stopping problem.

16. [RoPoLL: Robust Panel of LLM Judges](https://arxiv.org/abs/2606.30931)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30931v1 Announce Type: new Abstract: The LLM Jury, a Panel of LLM Evaluators (PoLL) reporting consensus scores, has become a practical alternative to single-judge LLM evaluation, yet its statistical behavior remains poorly understood. We formalize the LLM Jury under the Huber contamination model and show that PoLL incurs unbounded bias under any positive contamination, regardless of jury size, whenever a single judge fails in a biased, LLM-typical way (mode collapse, sycophancy, safety refusal). Framing jury consensus as classical robust mean estimation, we propose RoPoLL (Robust Panel of LLM-as-Judge), which preserves the PoLL panel but replaces the aggregation function with a robust mean estimator, instantiated with the geometric median (GM): tuning-free, with the optimal finite-sample breakdown point 1/2. A finite-sample error bound and a matching information-theoretic minimax lower bound agree on the parametric rate sigma*sqrt(d/N) and differ on the breakdown floor by a factor of sqrt(d), a statistical-computational gap that polynomial-time RoPoLL pays relative to the intractable Tukey halfspace median. Across 13 open-weight judges (4B-675B), three reward-model benchmarks, and four corruption regimes at rates up to 50%, RoPoLL dominates PoLL on every biased corruption type: by about 19% on cross-dimensional attacks at matched compute, and by orders of magnitude on heavy-tailed Byzantine adversaries. A 3-judge RoPoLL committee at 38B beats Mistral-Large-3 (675B) by 1.31x on HelpSteer-2 under 30% bimodal-random corruption, an 18x parameter advantage at better accuracy; a Noisy-GT control confirms the premium is paid against biased contamination, not benign imprecision.

17. [Computed materials proposals depart from the structural memory of experimental discovery](https://arxiv.org/abs/2606.30967)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30967v1 Announce Type: cross Abstract: Generative AI and high-throughput DFT pipelines propose millions of inorganic crystal structures, but lack a calibrated reference frame against experimentally realized chemistry. Here we embed 167,500 Inorganic Crystal Structure Database entries in a continuous structural-similarity space, partition it into graph communities, and replay them in time. Experimental discovery shows strong structural memory: 82.9% of new formulas enter pre-existing communities; new-community formation falls from 40.2% (1930s) to 2.6% (2010s). The communities are chemically meaningful, positively identifying nine textbook field-defining renaissances, including cuprates, colossal-magnetoresistance manganites, MAX phases, and Li-ion battery cathodes. Projecting GNoME, MatterGen-public, Materials Project, JARVIS-DFT, and Alexandria-PBE into frozen historical maps yields a cutoff-robust ordering: held-out ICSD > MatterGen > {GNoME ~ MP-theoretical} > JARVIS > Alexandria. Structural departure from experimental basins is not specific to generative AI but general across the tested computed sets. Combining structural proximity with reduced-formula precedent defines a historical synthesizability prior for triaging computed materials.

18. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.14; Date: 2026-07-01T12:43:45Z; Popularity: 2,145 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

19. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-06-29T15:21:43Z; Popularity: 19 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

20. [How ChatGPT adoption has expanded](https://openai.com/index/how-chatgpt-adoption-has-expanded)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 09:00:00 GMT
   - Summary: New OpenAI Signals data shows how ChatGPT adoption is growing globally, with users increasing usage, exploring more capabilities, and driving growth across regions and languages.

21. [Core dump epidemiology: fixing an 18-year-old bug](https://openai.com/index/core-dump-epidemiology-data-infrastructure-bug)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT
   - Summary: OpenAI engineers used large-scale core dump analysis to debug rare infrastructure crashes, uncovering both a hardware fault and a long-standing software bug.

22. [Inside Genebench-Pro](https://openai.com/index/genebench-pro/case-studies)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

23. [HP Inc. launches Frontier strategic partnership with OpenAI](https://openai.com/index/hp-frontier-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 28 Jun 2026 17:00:00 GMT
   - Summary: HP Inc. scales its OpenAI Frontier partnership to deploy AI across customer experiences, software development, and enterprise operations.

24. [Previewing GPT-5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 26 Jun 2026 10:00:00 GMT
   - Summary: OpenAI previews GPT-5.6 Sol, a next-generation model with stronger capabilities in coding, science, and cybersecurity, paired with its most advanced safety stack.

25. [How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 25 Jun 2026 02:00:00 GMT
   - Summary: A new OpenAI research paper shows how AI agents are transforming work, enabling longer, more complex tasks and expanding productivity across roles.

26. [OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 24 Jun 2026 06:00:00 GMT
   - Summary: OpenAI and Broadcom introduce Jalapeño, a custom AI chip built for LLM inference to improve performance, efficiency, and scale across AI systems.

27. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](https://huggingface.co/blog/cerebras-gemma4-voice-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 GMT

28. [ScarfBench: Benchmarking AI Agents for Enterprise Java Framework Migration](https://huggingface.co/blog/ibm-research/scarfbench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 18:32:50 GMT

29. [Why Specialization Is Inevitable](https://huggingface.co/blog/Dharma-AI/why-specialization-is-inevitable)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 14:39:11 GMT

30. [Featuring Every Eval Ever Results on Hugging Face Model Pages](https://huggingface.co/blog/eee-community-evals)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

31. [DiScoFormer: One transformer for density and score, across distributions](https://huggingface.co/blog/allenai/discoformer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 29 Jun 2026 18:02:48 GMT

32. [Run a vLLM Server on HF Jobs in One Command](https://huggingface.co/blog/vllm-jobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 26 Jun 2026 00:00:00 GMT

33. [Accelerating Transformers Fine-Tuning with NVIDIA NeMo AutoModel](https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 16:00:13 GMT

34. [Introducing the FFASR Leaderboard: Benchmarking ASR in the Real World](https://huggingface.co/blog/ffasr-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 00:00:00 GMT

35. [Shipping huggingface_hub every week with AI, open tools, and a human in the loop](https://huggingface.co/blog/huggingface-hub-release-ci)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

36. [Beyond expert users: agents should help users construct preferences, not just elicit them](https://arxiv.org/abs/2606.30863)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30863v1 Announce Type: new Abstract: Agents typically assume an expert user -- one with well-formed preferences about what they want -- and default to clarifying questions whenever the task is underspecified. We argue this assumption is unrealistic. Users often lack the domain knowledge to have completely specified preferences; if asked about their preference on some feature, the user may be unable to answer without the agent helping the user to learn some domain knowledge needed to form a preference for that feature, e.g., via examples or explanations. To formalize these principles, we draw on the Search-Experience-Credence framework from Information Economics to introduce CoPref, a model of how users construct preferences based on agent dialog actions. We then study these ideas concretely in agentic recommender systems, proposing CoShop, an interactive benchmark. In CoShop, an agent converses with and makes recommendations for a CoPref user. The agent's performance depends on whether it can help the user gain the knowledge needed to specify the task well. Evaluating five frontier models, we find that no agent exceeds 56% accuracy on CoShop despite five turns of interaction. Failures stem not from agents' ability to find items, but from how little the interaction expands what users know about what they want.

37. [Why Solve It Twice? Hierarchical Accumulation of Skills for Transfer-Efficient ML Engineering](https://arxiv.org/abs/2606.30911)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30911v1 Announce Type: new Abstract: ML engineering agents waste compute rediscovering known techniques because every competition is a cold start. We present HASTE, a hierarchical multi-agent system that organizes cross-competition knowledge into three scope tiers (global, domain, and competition-specific), each coupled to a matching agent level. An orchestrator coordinates domain specialists and promotes learning between tiers via LLM-driven abstraction. A controlled ablation provides evidence for scoped loading: holding a 159-skill inventory constant across 8 competitions, tiered loading achieves a 100% medal rate while flat loading reaches only 62.5%, the same medal rate as loading no skills, and consumes 2x the output tokens. On the full MLE-Bench Lite benchmark (22 Kaggle competitions), HASTE reaches a medal rate of 77.3% using Claude Sonnet 4.6 at 12h per competition. In a cold-start run, the system begins with no accumulated skills. In warm-start runs, it reloads skills learned from earlier competitions, using only global and domain-level skills for transfer across competitions. Warm starts use 52% fewer refinement iterations, and the fraction of proposed changes kept by the agent rises from 42% at low inventory to 85% once 50+ skills are available. These results suggest that better knowledge organization can partly substitute for model strength and compute budget in ML-engineering agents.

38. [From Search to Synthesis: Training LLMs as Zero-Shot Workflow Generators](https://arxiv.org/abs/2606.30704)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30704v1 Announce Type: new Abstract: Large language models (LLMs) excel across a wide range of tasks, yet their instance-specific solutions often lack the structural consistency needed for reliable deployment. Workflows that encode recurring algorithmic patterns at the task level provide a principled framework, offering robustness across instance variations, interpretable traces for debugging, and reusability across problem instances. However, manually designing such workflows requires significant expertise and effort, limiting their broader application. While automatic workflow generation could address this bottleneck, existing methods either produce instance-specific solutions without learning task-level patterns, or cannot generalize beyond their training configurations. We present MetaFlow, which casts workflow generation as a meta-learning problem: given a task and an operator set, the model learns to compose solution strategies. MetaFlow trains in two stages: supervised fine-tuning on synthetic workflow data, followed by reinforcement learning with verifiable rewards (RLVR) that uses execution feedback across problem instances in the task to improve end-to-end success. The resulting model produces effective workflows for trained tasks and exhibits strong generalization to untrained tasks and novel operator sets. Across benchmarks in question answering, code generation, and mathematical reasoning, MetaFlow achieves performance comparable to state-of-the-art baselines on in-domain tasks with single inference, while demonstrating remarkable zero-shot generalization capabilities on out-of-domain tasks and operator sets.

39. [Joint discovery of governing partial differential equations from multi-source datasets by competitive optimization](https://arxiv.org/abs/2606.30699)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30699v1 Announce Type: cross Abstract: Discovering governing equations directly from observational data is a key step towards interpretable scientific machine learning. Current data-driven approaches typically operate on a single dataset, inherently limiting their performance when faced with restricted observations. In practice, multiple datasets are often available for the same physical system, distinguished only by distinct initial conditions or boundary configurations. Here, we present a competitive optimization framework designed to discover shared partial differential equations (PDEs) from multi-source datasets, termed MCO-PDE. The framework first trains independent neural surrogates for each data source, and then employs a soft-competitive weighting mechanism to dynamically assess dataset credibility and aggregate a consensus global coefficient. Integrated with a genetic algorithm for structural search, this approach simultaneously identifies the functional forms and parameters of the governing laws. We demonstrate that fusing as few as 50 observations per dataset across seven cases recovers canonical equations with high accuracy. The framework inherently handles two- and three-dimensional domains characterized by irregular boundaries and heterogeneous coefficients, and successfully extracts physically meaningful laws from real-world wave-tank experiments. Overall, this work establishes a promising route for automated scientific discovery via heterogeneous data fusion.

40. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.45; Date: 2026-06-30T22:59:37Z; Popularity: 451 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

41. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-01T09:24:36Z; Popularity: 1,278 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-07-01T05:32:43Z; Popularity: 218 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.19; Date: 2026-07-01T15:29:25Z; Popularity: 195 stars
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

47. [Joint discovery of governing partial differential equations from multi-source datasets by competitive optimization](https://arxiv.org/abs/2606.30699)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30699v1 Announce Type: new Abstract: Discovering governing equations directly from observational data is a key step towards interpretable scientific machine learning. Current data-driven approaches typically operate on a single dataset, inherently limiting their performance when faced with restricted observations. In practice, multiple datasets are often available for the same physical system, distinguished only by distinct initial conditions or boundary configurations. Here, we present a competitive optimization framework designed to discover shared partial differential equations (PDEs) from multi-source datasets, termed MCO-PDE. The framework first trains independent neural surrogates for each data source, and then employs a soft-competitive weighting mechanism to dynamically assess dataset credibility and aggregate a consensus global coefficient. Integrated with a genetic algorithm for structural search, this approach simultaneously identifies the functional forms and parameters of the governing laws. We demonstrate that fusing as few as 50 observations per dataset across seven cases recovers canonical equations with high accuracy. The framework inherently handles two- and three-dimensional domains characterized by irregular boundaries and heterogeneous coefficients, and successfully extracts physically meaningful laws from real-world wave-tank experiments. Overall, this work establishes a promising route for automated scientific discovery via heterogeneous data fusion.

48. [Accelerometry-Derived Digital Biomarkers for Cardiometabolic Risk: A Population-Representative Tabular Benchmark with Uncertainty Quantification](https://arxiv.org/abs/2606.30702)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30702v1 Announce Type: new Abstract: Structured tabular data dominates clinical medicine, yet existing benchmarks fail to reflect real-world properties like complex survey sampling, demographic oversampling, and subgroup fairness. We introduce the NHANES Accelerometry Cardiometabolic Benchmark, derived from NHANES 2003-2006, comprising 1,381 adults with hip-worn accelerometry, fasting laboratory biomarkers, dietary intake, and anthropometrics. We evaluate three tabular learning methods -- ridge regression, XGBoost, and the foundation model TabPFN v2 -- to predict glycated haemoglobin (HbA1c), fasting triglycerides, and C-reactive protein (CRP) from activity phenotypes and lifestyle covariates. TabPFN v2 achieves the best overall performance (HbA1c R^2=0.156, CRP R^2=0.383), while triglycerides remain largely unpredictable (R^2 < 0.05), consistent with known genetic dominance. We apply split conformal prediction to generate distribution-free 90% prediction intervals and evaluate demographic coverage equity across sex and race/ethnicity subgroups. Marginal coverage aligns with the 90% target for CRP and HbA1c but falls below for triglycerides. At the subgroup level, we observe localized undercoverage (e.g., HbA1c for Mexican American participants), illustrating the gap between marginal guarantees and the conditional coverage required for clinical fairness. Code and data are at https://github.com/felizzi/nhanes-accel-cardiometabolic-benchmark.

49. [Hierarchical Global Attention (HGA)](https://arxiv.org/abs/2606.30709)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30709v1 Announce Type: new Abstract: Hierarchical Global Attention (HGA) is a drop-in replacement for dense causal attention in pretrained long-context transformers. HGA preserves the original checkpoint parameters: the pretrained $W_Q$, $W_K$, $W_V$, and $W_O$ projections remain unchanged, no calibration parameters are introduced, and no retraining is required. Applied to Qwen3-30B-A3B-Instruct-2507-FP8 on a single RTX~5090 (32GB), the patched model runs out of the box at a 64K-token context, where token-level K/V storage is not feasible on this hardware. Unlike previous sparse-attention methods, HGA performs hierarchical two-level routing. It first retrieves relevant chunks using compact RoPE-aware summaries and then refines the selection by routing only the most relevant groups before performing exact token-level attention. This hierarchical retrieval significantly reduces the number of fetched tokens while preserving exact attention over the retrieved token set, making RAM- and NVMe-backed storage practical. The full historical token K/V resides in host RAM or NVMe storage, while only a small routed working set is transferred to GPU memory during attention. Consequently, GPU memory consumption depends primarily on model weights and the routed working set rather than on the total context length. Across all tested context lengths (4K - 64K tokens), routed attention remains within approximately $0.01$--$0.02$ nats of dense attention while the sparsity used is just about 3%. These results suggest that the approximation introduced by hierarchical routing is small, and that the remaining quality gap is likely dominated by long-context positional encoding rather than by the routing algorithm itself.

50. [ReactionAtlas: Ab origine exploration of chemical reaction networks with machine learning](https://arxiv.org/abs/2606.30778)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30778v1 Announce Type: new Abstract: Mapping a chemical reaction network, the graph of minima and transition states (TS) and the elementary reactions connecting them, is the natural language of chemistry, from catalysis to combustion to the origin of life. Constructing such a reaction network for a given chemistry has been impractical: it requires finding and characterizing tens of thousands of TS, a task for which traditional methods such as density functional theory (DFT) are typically prohibitively slow and require reactant and product as input. We introduce ReactionAtlas, which builds a reaction network $\textit{ab origine}$ from a handful of seed molecules and without hand-crafted rules. Specifically, our machine-learned generative model proposes reactions from kinetically sampled candidate compounds and a DFT-trained machine learned force field (MLFF) filters them to valid TS, the resulting products of which enter the search as new seeds. Starting from eight pre-biotic seeds (CH$_2$O, H$_2$O, OH$^-$, H$_3$O$^+$, CO$_2$, H$_2$CO$_3$, HCO$_3^-$, H), ReactionAtlas discovers $\sim$47,000 reactions among $\sim$12,000 compounds. The MLFF TSs match the PBE0 references within 0.5 \r{A} RMSD in 85% of the cases and can be easily brought to the PBE0 level. Thus, ReactionAtlas maps small carbohydrate chemistry up to C$_4$H$_8$O$_4$ at unprecedented scale and accuracy, including charge and stereo information. It enables novel insights into many well-studied reaction paths, including the formose cycle, which we highlight for its centrality to the chemical origins of life. Notably, our framework also allows establishing alternative reaction pathways for formose chemistry.

51. [Predictable GRPO: A Closed-Form Model of Training Dynamics](https://arxiv.org/abs/2606.30789)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30789v1 Announce Type: new Abstract: Group Relative Policy Optimization (GRPO) has become a standard tool for improving the reasoning ability of large language models, yet its training dynamics are still described empirically: reward trajectories are fit with low-parameter functional forms whose constants carry no mechanistic meaning, and hyperparameter choices remain a matter of trial and error. We develop a first-principles reduced-order model of these dynamics. The reduction has three consequences. First, it subsumes the empirical single-exponential saturation law as its overdamped limit, recasting the fitted plateau, timescale, and size exponent as the fixed point, inverse stiffness, and curvature-scaling exponent of the underlying potential, and adding, through the retained inertial term, the slow-start phase the single exponential cannot represent. Second, it yields predictions tied to independently measurable quantities rather than fitted ones: group-size invariance of the deterministic trajectory with a $1/G$ stationary fluctuation, a sharp stability threshold in the refresh interval, and an overdamped-to-oscillatory transition. Third, it furnishes diagnostics that separate failure modes a reward curve alone conflates -- reward hacking, advantage degeneracy, policy concentration, and dynamical instability. Across three models and two group sizes, the closed-form trajectory fits training reward to $R^2 \geq 0.91$ and the predicted group-size invariance holds on both the reward curve and out-of-distribution transfer to eight math benchmarks. The stability and oscillatory predictions are exercised in a controlled exact-reduction setting where the mean-field assumption holds exactly: a softmax-bandit reduction reproduces the predicted overdamped-to-oscillatory transition and locates the refresh-interval stability threshold at the independently measured stiffness, with a deep-network demonstration left to future work.

52. [Gradient Smoothing: Coupling Layer-wise Updates for Improved Optimization](https://arxiv.org/abs/2606.30813)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30813v1 Announce Type: new Abstract: Deep neural networks with repeated architectural blocks, such as transformers, often exhibit structured relationships across layers that emerge during training. Motivated by this observation, we introduce \emph{Depth-wise Gradient Augmentation}, a general optimization paradigm in which the update applied to each layer is obtained by transforming the collection of block-wise optimizer updates along the depth dimension. Within this framework, we study \emph{Gradient Smoothing}, a family of depth-wise smoothing methods, and instantiate it with a simple local \emph{Window Smoothing} operator. The resulting method operates directly on block-wise updates produced by arbitrary base optimizers (e.g., SGD, Adam, Muon), incurs minimal computational overhead, and is compatible with existing optimization pipelines. We evaluate Gradient Smoothing across a diverse set of architectures and training regimes, including language model pretraining, RL post-training of LLMs for reasoning, diffusion modeling, and image classification with Vision Transformers. Across these settings, Gradient Smoothing consistently improves optimization and generalization performance without modifying model architectures or training objectives. We further show that it promotes more structured representation evolution across depth, consistent with its interpretation as a structured depth-wise preconditioning method. Together, these results establish Depth-wise Gradient Augmentation as a promising framework for exploiting cross-depth structure in optimization and demonstrate Gradient Smoothing as a simple and broadly applicable instantiation.

53. [Relaxation of Incommensurate Structures via Quantum Models](https://arxiv.org/abs/2606.31104)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.31104v1 Announce Type: new Abstract: Accurately modeling structural relaxation in incommensurate systems is intrinsically challenging due to the absence of global translational symmetry. In this work, we develop a variational quantum framework for structural relaxation in incommensurate Schr\"{o}dinger models, where displacement fields are formulated on the configuration space and the electronic Hamiltonian is represented in reciprocal space. This yields well-defined relaxed energy, local density of states, and forces through thermodynamic limits. We propose an anisotropic scattering-channel approximation, and prove exponential convergence of the approximate equilibria. Numerical experiments are performed to support the analysis and show that the model captures domain-wall formation and its impact on the electronic spectrum.

54. [P3MaZe: a Mass-Zero constrained-dynamics formulation of particle-mesh electrostatics](https://arxiv.org/abs/2606.31379)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.31379v1 Announce Type: new Abstract: We introduce P3MaZe, a real-space particle-mesh electrostatic method that combines the standard short-range/long-range decomposition of Particle-Particle Particle-Mesh (P3M) electrostatics with the Mass-Zero constrained dynamics (MaZe) framework. In this formulation, the smooth long-range electrostatic potential is represented on a mesh as a zero-inertia auxiliary field, while the discretized Poisson equation is enforced as a holonomic constraint during molecular dynamics. By retaining the standard P3M decomposition, P3MaZe preserves the systematic accuracy controls associated with the real-space cutoff, the Ewald splitting, the mesh spacing, and the charge-assignment procedure, while replacing the conventional multigrid Poisson solver by a constrained correction problem. The method is validated for molten NaCl and simple point-charge flexible water (SPC/Fw). Structural, translational, collective, and rotational dynamical observables are in quantitative agreement with those obtained with established electrostatic methods, including real-space P3M, and Ewald summation. The constrained formulation consistently requires fewer multigrid iterations than the corresponding real-space P3M solver while retaining the expected linear scaling with system size. These results establish P3MaZe as a promising new direction for scalable real-space electrostatics in large-scale molecular simulations.

55. [Navigating committor landscape of biomolecules with a general pairwise interaction model](https://arxiv.org/abs/2606.31832)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.31832v1 Announce Type: new Abstract: Sampling rare conformation transitions between metastable states is a central challenge in atomistic simulations. While the committor function serve as an ideal reaction coordinate for driving enhanced sampling, their high-dimensional inputs and complex functional forms limit the efficacy of standard feedforward neural networks in modeling them. Inspired by recent breakthroughs in biomolecular structure prediction, we propose a novel committor learning framework grounded in the AlphaFold 3 paradigm. By integrating a lightweight, differentiable atom-level embedding with a simplified Pairformer architecture, our method inherently captures intricate dynamical features of diverse biosystems without requiring specialized prior knowledge. We demonstrate the superior expressiveness and accuracy of the proposed framework across multiple atomistic processes. For the folding of the chignolin mini-protein, our model reveals the finer-grained structure of its transition state ensemble (TSE) and a detailed bifurcated reaction mechanism. Furthermore, for calixarene host-guest systems, we develop a unified committor model that elucidates how ligand substituents regulate the ratio between distinct binding pathways, offering new perspectives for structure-based drug design.

56. [Conditional Normalizing Flow for Gas-Surface Scattering from Thermal to Hypersonic Velocities](https://arxiv.org/abs/2606.31928)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.31928v1 Announce Type: new Abstract: Accurate aerodynamic modeling of satellites in very low Earth orbit (VLEO) requires gas-surface interaction (GSI) models that capture the full velocity spectrum from thermal to orbital speeds. Atmospheric particles initially strike spacecraft surfaces at hypersonic velocities of 6 000 - 10 000 m/s. Due to surface roughness and complex geometries, especially within air-breathing electric propulsion (ABEP) intake systems, multiple collisions occur, progressively reducing the particle velocities. A recent machine learning framework for deriving scattering kernels from molecular dynamics (MD) simulations has shown promise, but remains limited to high-velocity single impacts and possibly violates fundamental equilibrium principles such as detailed balance. This work extends this machine learning based scattering kernel to cover the complete velocity range using conditional normalizing flows trained with physics-informed constraints, enabling accurate modeling of multi-bounce scenarios in realistic VLEO applications. We train a conditional Real-valued Non-Volume Preserving (cRealNVP) model on expanded molecular dynamics simulations covering velocities from thermal to hypersonic speeds, incorporating a detailed balance loss term. The resulting model demonstrates improved accuracy compared to previous approaches even in the original high-velocity regime, while successfully capturing thermal-velocity scattering. Quantitative assessment shows that thermalization is approximated within acceptable tolerances. This framework provides essential capabilities for accurate ABEP intake optimization and VLEO mission planning while offering a general methodology applicable to broader rarefied gas dynamics problems requiring thermodynamic consistency.

57. [Interpolation of Microscale Stress and Strain Fields Based on Mechanical Models](https://arxiv.org/abs/2104.09749)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2104.09749v1 Announce Type: cross Abstract: In this short contribution we introduce a new procedure to recover the stress and strain fields for particle systems by mechanical models. Numerical tests for simple loading conditions have shown an excellent match between the estimated values and the reference values. The estimated stress field is also consistent with the so called Quasicontinuum stress field, which suggests its potential application for scale bridging techniques. The estimated stress fields for complicated loading conditions such as defect and indentation are also demonstrated

58. [LinApart3: efficient algorithm for multivariate partial fraction decomposition with linear denominators](https://arxiv.org/abs/2606.30708)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30708v1 Announce Type: cross Abstract: We present LinApart3, an efficient multivariate partial fraction decomposition algorithm for rational functions with linear denominators. Our decomposition algorithm guarantees that each term contains at most as many distinct denominators from the original set as partial fraction variables, introduces no spurious singularities, is independent of variable ordering, and is insensitive to the presence of spectator variables. While general multivariate approaches based on Gr\"obner bases or Leinartas' method handle arbitrary polynomial denominators, they suffer from intermediate expression swell. LinApart3 replaces polynomial-ideal computations with linear algebra and residue extraction by exploiting the geometry of the hyperplane arrangement defined by the denominators, circumventing this issue just as LinApart did in the univariate case. Because the individual basis contributions are independent, the algorithm is moreover naturally parallelizable. To showcase the utility of our algorithm we implemented the algorithm both in Wolfram Mathematica and FORM.

59. [Introducing AuriGLOBES: the effect of compressive tides, compact object-induced mass loss, and size evolution on modelling globular clusters](https://arxiv.org/abs/2606.30746)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30746v1 Announce Type: cross Abstract: Globular clusters (GCs) are long time survivors of galaxy assembly and evolution yet their emergence from an initial cluster population is still poorly constrained. We present the Auriga GLOBular clustEr Simulations (AuriGLOBES) a physically motivated subgrid model for star cluster (SC) formation and evolution that includes enhanced mass loss from compact object remnants. With this model, implemented in the Auriga cosmological galaxy formation model, we run a suite of zoom-in cosmological simulations comprising 9 Milky Way mass and 5 lower mass galaxies. We demonstrate that our model produces plausible GC populations compared to the Milky Way/M31 systems and reproduces the empirical GC system mass -- halo mass relation within a 2$\sigma$ scatter. We show that the formation of SCs in tidally compressive, high-pressure gas in addition to enhanced mass loss from compact object remnants heating is required to capture the transformation of an initial Schechter mass function to the characteristic observed GC mass function in the Milky Way/M31 systems. The resulting GC populations show spatial and metallicity distributions qualitatively similar to the Milky Way/M31 systems, as well as a variety of age distributions that correlate with the star formation history of the simulated galaxies. However, the peak of the age distribution of Milky Way GCs is older than any of our simulated Milky Way-mass galaxies, which is attributed to unrepresented star formation and galaxy assembly histories. AuriGLOBES represents a reliable framework for the study of GC populations through cosmic history and a robust foundation for future applications for a model of stellar streams arising from GCs disruption.

60. [Time-dependent adaptive mesh refinement solver for the Gross-Pitaevskii-Poisson equations](https://arxiv.org/abs/2606.30827)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 01 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2606.30827v1 Announce Type: cross Abstract: This work presents a new numerical code for solving the time--dependent Gross--Pitaevskii--Poisson (GPP) system using adaptive mesh refinement (AMR). The code is designed to study the nonlinear dynamics of self--gravitating bosonic matter in three spatial dimensions under periodic boundary conditions. It combines high--order spatial discretization, explicit time integration, and dynamic refinement driven by the magnitude of the gravitational potential. The implementation is validated through a set of test problems in the nonlinear regime. These benchmarks demonstrate that the solver accurately preserves global conservation laws, resolves strong wave interference and phase singularities, and maintains consistency across refinement levels in highly dynamical scenarios.

61. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.68; Date: 2026-06-30T16:59:22Z; Popularity: 679 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.59; Date: 2026-06-29T20:23:09Z; Popularity: 592 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

64. [facebookresearch/airs-bench](https://github.com/facebookresearch/airs-bench)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-01T11:45:15Z; Popularity: 100 stars
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

Contrastive Reflection for Iterative Prompt Optimization

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2606.30840

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
