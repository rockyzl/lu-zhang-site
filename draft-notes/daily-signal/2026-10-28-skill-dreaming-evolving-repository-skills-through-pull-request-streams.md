# Daily signal sidecar - 2026-10-28

## Selected Signal

- Title: Skill Dreaming: Evolving Repository Skills through Pull Request Streams
- URL: https://arxiv.org/abs/2610.36188
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Skill Dreaming: Evolving Repository Skills through Pull Request Streams
- Primary source: https://arxiv.org/abs/2610.36188
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

1. [Skill Dreaming: Evolving Repository Skills through Pull Request Streams](https://arxiv.org/abs/2610.36188)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36188v1 Announce Type: new Abstract: Large language model (LLM) agents increasingly rely on reusable skills for complex software engineering tasks, making skill libraries essential for repository development and maintenance. However, repository-specific skills must evolve with changing code structures, implementation conventions, and maintenance requirements. Pull requests (PRs) provide a natural source of such knowledge by recording how repositories evolve through implementation and review. Meanwhile, new PRs must follow repository-specific implementation patterns, modify related components consistently, and ensure that existing tests continue to pass while adding coverage for new functionality. This creates a mutually reinforcing cycle: PRs provide knowledge for updating skills, while these skills improve future PRs, maintain repositories, and support further skill evolution. To enable this co-evolution of PRs, repositories, and skills, we propose Skill Dreaming, a framework that learns from PR streams to guide continuous repository development and maintenance. Given a repository and its PR history, Skill Dreaming builds a repository-specific skill library by extracting executable knowledge from validated PRs and continuously refines the skills as new PR information becomes available. These skills guide coding agents not only in implementing requested features but also in maintaining associated tests, documentation, compatibility, and repository conventions. By integrating PR analysis, skill management, code execution, and continuous integration, Skill Dreaming provides an end-to-end workflow for applying learned skills to repository changes and incorporating subsequent PR outcomes into future skill updates.

2. [MARQ: A Modular, LLM-Agnostic Requirement Quality Assessor Infused with Systems Engineering Knowledge](https://arxiv.org/abs/2610.36234)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36234v1 Announce Type: new Abstract: Requirements engineering (RE) is foundational to systems engineering (SE), as requirement defects can propagate downstream and adversely affect development outcomes. Although large language models (LLMs) are promising for requirement quality assessment, prior work shows that off-the-shelf models miss a large share of expert-identified defects, perform unevenly across quality criteria, and vary across executions. This study investigates whether infusing expert-derived SE knowledge can improve LLM-based requirement quality evaluation beyond off-the-shelf capability. We present MARQ, a modular, LLM-agnostic prototype that supplements LLMs with a criterion-specific knowledge stack operationalizing INCOSE requirement quality criteria and evaluated against off-the-shelf baselines on an expert-labeled NASA requirement set using Claude Opus 5, GPT-5.6 Sol, and the open-weight Gemma 3 12B, with 100 executions per model. MARQ achieves median F1 scores of 0.80 for Claude Opus 5, 0.62 for GPT-5.6 Sol, and 0.53 for Gemma 3 12B, compared with off-the-shelf baselines of 0.55, 0.52, and 0.18, respectively. However, the nature of these gains is model-dependent. Claude Opus 5 improves defect detection and false-alarm control; GPT-5.6 Sol gains detection and better execution-level consistency at the cost of more false alarms; and Gemma 3 12B reaches the performance of off-the-shelf proprietary models, although it remains highly variable. Criterion-level analysis shows gains concentrated in Correctness and Conformance, trade-offs between misses and false alarms within individual criteria, and model-dependent responses across several criteria. These findings position SE knowledge infusion as a promising model-agnostic pathway for strengthening trustworthy LLM-based RE support while underscoring the need for criterion-specific interventions and human-in-the-loop review.

3. [Legora is building the agentic operating system for legal work](https://openai.com/index/legora)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 28 Oct 2026 09:30:00 GMT
   - Summary: See how Legora uses OpenAI models, ChatGPT, and Codex to accelerate legal workflows, expand contract analysis, and free lawyers to focus on higher-value work.

4. [Greptile takes bug detection beyond code review with GPT-6 Astra](https://openai.com/index/greptile-code-review-codex-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 26 Oct 2026 22:00:00 GMT
   - Summary: How Greptile uses GPT-6 Astra to test user workflows, Daybreak to strengthen security, and Codex to reduce rework.

5. [Working with academic communities to build scientific understanding](https://openai.com/index/building-scientific-understanding-with-academic-communities)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 26 Oct 2026 14:30:00 GMT
   - Summary: OpenAI shares model results on the Kakeya conjecture, Exponential Time Hypothesis, and quantum chromodynamics—and how researchers can verify and build on them.

6. [Flint-interactive: A language for creating interactive data visualizations](https://www.microsoft.com/en-us/research/blog/flint-interactive-a-language-for-creating-interactive-data-visualizations/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Thu, 22 Oct 2026 16:00:00 +0000
   - Summary: Flint-interactive gives AI agents a language for creating interactive visualizations. Click a chart, filter data, highlight related content, and explore beyond the view the author originally chose. The post Flint-interactive: A language for creating interactive data visualizations appeared first on Microsoft Research .

7. [Counting the Bandages: On measuring the time that AI saves](https://arxiv.org/abs/2610.35942)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.35942v1 Announce Type: new Abstract: I consider what it means for AI assistance to save time. I contrast a stopwatch view, on which time saved is whatever the clock records, with a ledger view, on which it is a counterfactual that has to be read next to the errors the work lets through, and I argue for the latter. The argument has four parts. I define a model-free pair of quantities, time saved and excess escaped defects, and one decision number built from them: the break-even defect cost. I give a baseline model of checking in which, until the model is good enough not to check, a calibrated worker's escaped-defect rate does not depend on how good the model is; checking time grows with the logarithm of the model's error rate; and over-trust buys minutes on the clock at a larger cost in total minutes. I show what randomized studies can and cannot identify, and I replicate METR's developer study from its public data: the same 246 issues support a slowdown of 19% or 24% depending on the estimand (34% without adjusting for a chance imbalance), and AI helped on somewhere between 3% and 82% of them. Finally, I restate the published record, with stated bounds in place of imported point assumptions. In GDPval's own review-every-output workflow, review time alone caps GPT-5's speedup at 3.6x; the consultants outside the frontier were faster, and more often wrong. Last, I test two of the model's predictions in a small pre-specified experiment on AI reviewers checking AI drafts of the same kind of brief, built from SEC filings made after the models' training data were collected. Told the drafter's true error rate, the reviewer checked more as it rose, but all-or-nothing, switching near where its prompt's costs break even. Told that the drafter erred ten times less often than it did, it checked 7 fewer of 9 figures and let a wrong figure through in 22.5% of briefs instead of none: faster and worse, entirely through reduced effort.

8. [The Trinity:Capability-Driven Recursive Self-Improvement for Multimodal Agents](https://arxiv.org/abs/2610.36077)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36077v1 Announce Type: new Abstract: Multimodal intelligence can be viewed as human-guided co-evolution between worlds and agents through interaction. However, scaling this process faces two bottlenecks: constructing heterogeneous, verifiable environments is costly, and manual Harness iteration cannot keep pace with growing task diversity and complexity. A key insight is that tasks with different modalities and surface forms can share the same underlying capability requirements. We therefore introduce The Trinity, a recursive self-improvement framework coupling world generation with Harness evolution through three roles: Creator, Explorer, and Evolver. Drawing on verified execution trajectories, Evolver shifts the basis of task organization from surface categories to shared requirements, reorganizing the original task tree into a hierarchical capability tree. We introduce Capability-Driven Real2Sim2Real: for heterogeneous tasks at the same node, Creator abstracts their common requirements into simplified, verifiable simulated worlds for capability learning, while evaluation on original tasks measures transfer. Along this capability tree, Explorer progressively evolves reusable capability modules through selective inheritance, forming a Harness tree whose validated updates accumulate across iterations within a fixed topology. The resulting Harnesses specialize in different capabilities, motivating a Capability-Aware Harness Router that uses public task information to select compatible module configurations from the tree. Our evolved Harnesses improve mean performance by 34 points across 28 training benchmarks and 26 points across 18 unseen benchmarks, including two real-world embodied tasks.

9. [CohortFlow: A Steerable Clinical Cohort Curation Agent with Localized Semantic Correction](https://arxiv.org/abs/2610.36100)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36100v1 Announce Type: new Abstract: Language model agents for clinical cohort curation should accommodate evolving eligibility criteria without repeatedly processing unchanged requirements. We introduce CohortFlow, a steerable agent that represents natural language corrections as localized updates to a structured cohort specification and reconciles them with a persistent execution graph. Explicitly recorded semantic dependencies enable affected computations to be selectively invalidated while preserving valid prior results. On 100 scenarios derived from clinical-trial eligibility criteria, comprising 126 correction turns, localized steering achieves 77.0% requirement micro-F1 versus 76.4% for full regeneration using the same 8B model, a small numerical advantage that is not statistically significant ($p=0.493$). It reduces mean correction latency by 64.8% after completion and 44.3% during execution, with 38.1% fewer model calls. In a separate proof-of-concept evaluation over MIMIC, all 13 cohort states execute successfully, while correction trajectories demonstrate selective preservation of unaffected computations and recomputation of changed or dependent nodes. Together, these results show that localized semantic steering can substantially reduce correction latency and model calls while maintaining strong requirement-level accuracy.

10. [From Structural Feedback to Prompt Policies: Learning Faithful Text-to-Image Prompt Editors](https://arxiv.org/abs/2610.36146)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36146v1 Announce Type: new Abstract: Prompt optimization should improve the image a user receives without changing the scene the user requested. Yet stylistic rewriting can weaken object attributes and relations even when global text--image similarity remains high. We propose StruPO, a structure-aware prompt editor that uses a calibrated scene graph as a shared representation for policy conditioning and image-grounded supervision. The graph exposes what should be preserved, while deletion, reordering, and insertion provide a token-aligned way to modify the prompt. This turns structural feedback from an external critique into a training signal for a reusable editing policy. Learning from that signal requires handling both uncertain grounding and stochastic image generation. StruPO retains grounding confidence through smooth reward shaping and averages multiple images for each edit before computing group-relative advantages. Experiments span three disjoint 2K-prompt test sets and four frozen generation backbones, with comparisons to learned prompt optimizers, iterative structural feedback, diffusion-model fine-tuning, and inference-time attention control. StruPO improves the faithfulness--aesthetics trade-off, with consistent gains in relational fidelity. Independent automatic evaluators and a 15-annotator study provide complementary evidence, and human preference margins increase with relation complexity. Controlled ablations connect these gains to graph conditioning, local editing, and image-grounded learning. The resulting policy produces reusable optimized text in one pass after graph calibration, without an iterative critique--rewrite loop.

11. [Learning Human Sports Motion Feasibility via Quantile Regression on Tracking Data](https://arxiv.org/abs/2610.36183)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36183v1 Announce Type: new Abstract: We study time-to-arrival (TTA) in sports: the shortest plausible time a player needs to reach an arbitrary location on the pitch given their current kinematic state, estimated as the lower envelope of observed locomotion times. Rather than modeling space ownership through position density estimation or closed-form physics-based models, we cast TTA as a conditional quantile regression problem, estimating the lower quantile of locomotion time so the model learns a player's lower-envelope arrival time. We train the model on optical tracking data from all 64 matches of the PFF FC FIFA World Cup 2022 dataset, and evaluate a lightweight multilayer perceptron against six player-motion models from the literature, re-expressed as TTA predictors, and a learned reachable- hull baseline. Across our evaluation metrics, the MLP consistently outperforms every physics-based baseline. To probe the generality of the learned locomotion model, we further evaluate it on basketball tracking data and a single-game NFL tracking dataset, analyzing the transferability of player motion dynamics across sports. Our project is available at https://github.com/mguti97/TTA-Quantile.

12. [Lessons from Luck: Do LLM-Written Lessons Carry Chance into an Agent's Next Decision?](https://arxiv.org/abs/2610.33029)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33029v1 Announce Type: new Abstract: Self-improving agents write lessons from the outcomes of their runs; when outcomes are noisy, a lesson can carry chance into later decisions. We measure one link of this chain in a registered study. In 256 synthetic worlds, each a recurring task with two interchangeable tools of recorded reliability, a scripted previous run used the more reliable tool (a good decision) or the less reliable one (a bad decision), with an assigned outcome: success or a transient failure. A model wrote a lesson from the run with ReasoningBank's memory-writing instruction; a fresh session of the same model, holding the authoritative log and the previous result, chose the next run's first tool with one memory item: that lesson, the lesson from the other outcome, an irrelevant item, or an unreasoned directive. The protocol was frozen, deposited and timestamped before any confirmatory call; 11 LLM endpoints gave 90,084 answers. After a chance failure of the better tool, the panel's lessons carried the chance (registered reading luck-carrying; interaction +0.112, 95% interval [+0.097, +0.126]): readers named the worse tool in 11.6% of next runs with the lesson written from that failure, against 0.4% with an irrelevant item and 0.4% with the lesson written from a success. The effect was +0.042 where the log stated that failures are independent and +0.181 where it did not (descriptive). After a lucky success of the worse tool, the interaction was bounded below 0.10 (+0.002), a bound, not evidence of no harm. In exploratory readings, 6 endpoints carried the chance (up to +0.352); 5 were bounded below 0.10. In secondary comparisons, a three-sentence decision-quality note in the writing instruction lowered the worse-tool rate after a chance failure to 7.5%, and one instruction for both outcomes with a no-change option to 3.1%; neither met the registered harm-reduction rule at every such endpoint.

13. [The future of the firm](https://openai.com/index/the-future-of-the-firm)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 28 Oct 2026 10:00:00 GMT
   - Summary: How AI might enter the org chart—beneath, beside, and between us.

14. [Retell uses OpenAI models to help power 100M monthly calls](https://openai.com/index/retell-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 27 Oct 2026 15:00:00 GMT
   - Summary: GPT-6 Astra tops Retell’s voice agent benchmark, while Codex helps it reach a $1.6M annual revenue run rate per employee.

15. [OpenAI expands partnership with Oracle to bring its apps to ChatGPT](https://openai.com/index/oracle-apps-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 27 Oct 2026 07:00:00 GMT
   - Summary: OpenAI and Oracle are expanding their partnership to bring business applications and AI agents into ChatGPT and power new Oracle offerings.

16. [How Check Point accelerates vulnerability research with Daybreak](https://openai.com/index/check-point-daybreak)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 27 Oct 2026 00:00:00 GMT
   - Summary: With OpenAI Daybreak, Check Point speeds up the research behind new security protections, enabling its analysts to turn vulnerability intelligence into customer defenses faster.

17. [GPT-6.1 Sol helps CodeRabbit strengthen security across complex codebases](https://openai.com/index/gpt-6-1-sol-coderabbit-code-security)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 13:45:00 GMT
   - Summary: CodeRabbit uses GPT-6.1 Sol to investigate security risks across complex codebases. Its security agent helps developers review findings and proposed fixes.

18. [ChatGPT’s expanding world of work](https://openai.com/index/chatgpt-expanding-world-of-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 10:00:00 GMT
   - Summary: Explore OpenAI Signals data on 165 work activities across nearly 100 countries, revealing how people use ChatGPT for work and how usage changes over time.

19. [How Fanatics and OpenAI streamline the fan experience](https://openai.com/index/fanatics-streamline-fan-experience)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 26 Oct 2026 07:00:00 GMT
   - Summary: Fanatics uses OpenAI to help fans complete their game-day outfits with Shop the Look. Testing across roughly 30,000 MLB products showed 10% higher engagement.

20. [Introducing Quine: An AI research system designed for the complexity of biology](https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 29 Sep 2026 14:00:02 +0000
   - Summary: Biology doesn't operate in silos, and neither should the AI representation of it. Quine is an early-stage research effort to create a multimodal world model of biology. By connecting insights across biological scales and modalities, Quine helps scientists computationally search a space far larger than intuition allows and prioritize hypotheses before they reach the lab. Experimental results provide important feedback, helping researchers sharpen future research directions. The post Introducing Quine: An AI research system designed for the complexity of biology appeared first on Microsoft Research .

21. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

22. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

23. [NVIDIA Nemotron 3.5 Transcribe and Granary v2: Intelligent Multilingual Transcription You Can Prompt and Adapt](https://huggingface.co/blog/nvidia/nemotron-transcribe-granary)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 28 Oct 2026 14:58:17 GMT

24. [Build specialized multimodal models with LFM3](https://huggingface.co/blog/LiquidAI/lfm3)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 27 Oct 2026 17:16:52 GMT

25. [Can we trust LLMs to judge whether a research idea is novel?](https://huggingface.co/blog/allenai/novelty-bench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 27 Oct 2026 16:12:42 GMT

26. [Does Your Model Run on AWS Trainium? Look It Up](https://huggingface.co/blog/torch-neuronx-model-support)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 23 Oct 2026 00:00:00 GMT

27. [Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox](https://huggingface.co/blog/microsoft/thinkingbox-training)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 22 Oct 2026 22:24:34 GMT

28. [Ensemble forecasting with IBM Granite time-series models](https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 22 Oct 2026 07:51:31 GMT

29. [How Specializing the Vocabulary of SLMs Can Cut Inference Cost by 77% in Real Applications](https://huggingface.co/blog/Dharma-AI/vocabx-vocabulary-specialization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 17:35:36 GMT

30. [Profiling TorchNeuron (Part 1): System-level profiling on AWS Trainium.](https://huggingface.co/blog/amazon/profiling-torchneuron-part-1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 16:04:43 GMT

31. [Granite Speech 5.0: Transcribe, Translate, and Attribute more Accurately and Faster](https://huggingface.co/blog/ibm-granite/granite-speech-5)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 21 Oct 2026 14:58:18 GMT

32. [Hugging Face ❤️ TorchTPU: TPUs, Natively](https://huggingface.co/blog/hf-torchtpu)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 20 Oct 2026 00:00:00 GMT

33. [Enhancing Deep Learning Model Performance through Data Generation Strategies: Classification of Olive Tree Diseases](https://arxiv.org/abs/2610.35984)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.35984v1 Announce Type: new Abstract: Deep learning models are highly effective in a wide range of domains, particu larly in plant disease diagnosis. However, their performance is often limited by challenges such as insufficient data and class imbalance. In our work, we propose a comprehensive data generation strategy to overcome these limitations. First, we apply various data generation techniques, including traditional augmentation methods, CutMix, MixUp, and synthetic image generation using Deep Convolu tional Generative Adversarial Networks (DCGANs), to create new data samples. Second, we exploit this generated data in three scenarios: (S1) balancing class distribution in the original dataset, (S2) increasing the number of samples per class, and (S3) expanding the dataset while maintaining balanced classes. Third, we evaluate the impact of these data distributions (S1, S2, S3) on model perfor mance using the EfficientNetV2B0 architecture with pre-trained and fine-tuned weights. The experimental results show a substantial improvement in classifica tion accuracy, emphasizing the critical role of data diversity and class balance. These findings highlight the effectiveness and adaptability of the proposed strat egy of data generation and distribution for enhancing dataset quality, offering promising applications in plant disease detection and precision agriculture.

34. [Why and How to Do Science When AI Is Better at It: A Framework Grounded in Human Understanding and Direction](https://arxiv.org/abs/2610.36116)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36116v1 Announce Type: new Abstract: As AI begins to match or exceed human researchers at core scientific tasks, two questions become pressing: \emph{why} should humans keep doing science, and \emph{how} should they use AI when they do? This paper argues that the second can be answered only by answering the first. It holds that one indispensable aim of science is \emph{durable, collective human understanding of the world, pursued in service of human ends and values}. From this principle it derives a two-part test for when a research task can be delegated to AI. The first part, \emph{human understanding}, requires that the scientific community remain able to explain, defend and contest the resulting claims, and retain the skills to do so. The second, \emph{human direction}, requires that judgments about which questions matter and what findings mean stay with accountable humans. Applying the test to each phase of research in the Contributor Roles Taxonomy (CRediT) yields recommendations that fields can tailor to their questions and methods. The framework differs from existing guidance in three ways. It rests on an account of what science is for rather than on integrity norms. It holds even if AI outperforms human researchers, rather than depending on AI's current limitations. And it judges each use of AI by its effects on human understanding and direction rather than by the type of tool, across every phase of research, including peer review and the training of new researchers. It closes with the reforms needed to keep science aimed at human understanding and direction.

35. [Don't Pick a Winner: Knowledge Conflicts Need a Prior, Not a Rule](https://arxiv.org/abs/2610.36169)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36169v1 Announce Type: new Abstract: A retrieval-augmented language model answers from two sources, the retrieved context and its own knowledge, and the two disagree whenever the context is incomplete or wrong. Existing methods settle the disagreement with a rule fixed at design time: follow the context, amplify it in proportion to how far it moves the model, or trust the model's memory. Each rule is confidently wrong in some deployment. In a decision-theoretic model of two sources, the score of any fixed rule is linear in the share of reliable contexts while the best attainable score is convex, so every fixed rule is beaten wherever it is not exactly optimal; and a symmetric divergence between the two sources, the signal adaptive decoding uses, carries no information about which one is right. Resolving a conflict therefore needs two inputs that no existing method keeps: evidence about each source separately, and a prior on how often the context is right. We test these claims on GRACE, a benchmark that intervenes on the knowledge-graph context of a fixed question, so that what the model knows, what the context says and what is true are measured separately. There, every baseline from four families is strong on right contexts or on wrong ones, never on both. We then build the two inputs: the model states its knowledge as notes, a small policy voices each note with a calibrated confidence, a reader answers in two voices, and a selector commits or abstains under a prior $\pi$ applied as an exact prior shift. With $\pi$ set to the true share of right contexts, the system is above the best baseline at every mixture of GRACE contexts, by up to 26 points. Its overall score is 45.3 and 35.0 (Qwen3.5-35B-A3B, Llama-3.1-8B), against 29.4 and 27.5 for the best baseline. On preregistered ClashEval it beats same-backbone CK-PLUG and TCR by 12 and 26 points. Where the model lacks the knowledge, the gains vanish, as the theory predicts.

36. [Evolving to Match Capabilities: Improving Harness Self-Evolution via Skill Adaptation](https://arxiv.org/abs/2610.33024)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33024v1 Announce Type: new Abstract: Harness self-evolution offers a practical route for LLM agents to improve from execution experience without updating model parameters. Its effectiveness depends on whether models can successfully act on the guidance provided by their harnesses. However, we find that harness benefits are not uniform across model capabilities: skills that improve stronger models can provide little benefit or even degrade performance for weaker ones. Across seven models and three benchmarks, we identify 103 task-skill pairs where skills improve GPT-5.6-luna by 31.1 points but degrade Gemma-4-E4B by 8.8 points. In 86% of failed weak-model runs, the violated requirement is already stated in the skill. This motivates skill adaptation: reformulating existing skills to match the executor's capabilities and make their guidance easier to execute. To achieve this, we diagnose failures in tool execution, context management, instruction following, and verification, and distill these diagnoses into a fixed meta-skill that guides adaptation during harness self-evolution. Guided by the meta-skill, a capable external rewriter, Kimi-K3, adapts skills without execution evidence, improving the three weak executors by 5.1-14.1 points over the original skills. We then incorporate this adaptation into a five-round self-evolution loop, where each model revises its own skill from execution trajectories and verifier feedback. Across seven executors, from Gemma-4-E4B to Kimi-K2.5, the meta-skill consistently improves final scores by 2.0-5.1 points over the same loop without the meta-skill. Our findings provide practical design guidance for developing more effective harness self-evolution methods.

37. [Walk on Multiscale Media: Compiling Editable and Composable Transport Medium Prefabs for Monte Carlo PDE Solvers](https://arxiv.org/abs/2610.35952)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.35952v1 Announce Type: new Abstract: Monte Carlo PDE solvers enable mesh-free pointwise queries, but repeatedly traversing heterogeneous media is costly, particularly in scenes with reusable or dynamically changing materials. We introduce Walk on Multiscale Media (WoMM), which compiles fine-scale transport into reusable, editable and composable transport prefabs. A probabilistic interpretation of multiscale finite-element bases and condensed operators yields coarse transitions retaining fine-scale material effects. Each prefab combines port-level operators, entrance-dependent exit distributions, and Poisson-marked trajectory records, enabling incremental updates for overlapping absorption fields, gradient-field steering through path reweighting and transient diffusion. Integrated with conventional Walk-on-Spheres in a hybrid continuous--discrete solver, these prefabs accelerate repeated pointwise PDE queries and support interactive material edits without repeatedly solving the fine-scale problem.

38. [Evaluation of upper-scale mechanical parameters of particulate aluminum-based nanocomposites from molecular simulations](https://arxiv.org/abs/2610.36005)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36005v1 Announce Type: new Abstract: This paper focuses on the numerical and analytical determination of the mechanical parameters of aluminum-matrix nanocomposites using atomistic-scale simulations within a multiscale modeling framework. Molecular statics simulations were employed to evaluate the tensile and compressive behavior of Al based composites reinforced with nanosized alumina particles. Two classes of atomistic models were investigated. First, a unit-cell model containing a single Al2O3 monocrystal embedded in an aluminum matrix was used to examine the influence of the volume fraction of the ceramic inclusion on the effective mechanical properties. Second, a polycrystalline RVE model comprising an alumina particle was analyzed to assess the effect of the number of Al grains on effective properties. For each case, the mechanical response was characterized by stress-strain curves, enabling the identification of upper-scale material parameters associated with the elastic regime (bulk, shear and Young's modulus) and the damage stage (ultimate strength, ultimate strain, and failure strain). The isotropized elastic constants evaluated from molecular simulations were compared with classical Voigt-Reuss-Hill bounds to assess their applicability in the elastic regime. Finally, atomistic-scale simulation outputs provided insight into the dominant deformation/damage mechanisms (brittle versus ductile) and fracture modes (transgranular versus intergranular).

39. [Efficient regime boundary detection in discontinuous simulation models](https://arxiv.org/abs/2610.36092)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36092v1 Announce Type: new Abstract: Many computational models exhibit multiple operating regimes separated by abrupt or non-smooth transitions as the input parameters vary. Such regime transitions complicate the construction of global parametric reduced-order models, often necessitating large training datasets to capture the distinct system behaviors. Accurate regime boundary detection instead enables localized modeling strategies by partitioning the parameter space into regions of qualitatively distinct behavior. In many cases, regime switching corresponds to the excursion set of a simulator output. When such a quantity is discontinuous or non-smooth, regression-based algorithms for level set estimation can struggle to correctly approximate the boundary. In this work, we show that solving a resulting binary classification problem can improve sample efficiency and we further propose a novel adaptive sampling strategy for support vector machines. Unlike uncertainty-based sampling schemes, the proposed approach uses a continuous search space and efficiently explores the currently estimated boundary in its tangential directions by gradient-based dynamic sampling. Because the decision function admits analytical gradients, this exploration incurs negligible computational overhead relative to the underlying model evaluations. Then, a space-filling subset of the generated samples is selected as the next batch to be queried. We demonstrate improved sample efficiency compared to existing active learning algorithms on analytical and numerical examples. The proposed method provides a sample-efficient framework for regime boundary detection in a broad class of discontinuous simulation-driven problems.

40. [QMOMKit: A C++ library for quadrature-based moment methods](https://arxiv.org/abs/2610.36189)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36189v1 Announce Type: new Abstract: QMOMKit is an open-source C++ library for the phase-space evolution of population balance equations with quadrature-based moment methods. The present version implements the quadrature method of moments (QMOM) and the conditional quadrature method of moments (CQMOM). QMOMKit is designed to be independent of any particular application and can be used either as a standalone solver for spatially homogeneous population models or as a local phase-space solver coupled to a host application. It handles the numerical aspects of the evolution of a population in phase space, including quadrature reconstruction, advection of the quadrature abscissas, and changes to the population through moment sources and phase-space boundary contributions. The number of quadrature nodes is adapted to what the supplied moments support, subject to prescribed bounds of the phase-space coordinates, and the CQMOM implementation supports an arbitrary number of phase-space dimensions as well as any conditioning order. The principal numerical algorithms of QMOMKit are verified against analytical and manufactured solutions. Standalone spatially homogeneous applications, ranging from aerosol evaporation to particle dynamics and fragmentation, are compared with Monte Carlo solutions of the same population models, while coupling examples with OpenFOAM and deal.II demonstrate how QMOMKit can be embedded in finite-volume and discontinuous-Galerkin simulation frameworks. Together, these capabilities provide a tested and reusable foundation for a wide range of population-balance problems, and a basis for extending QMOMKit to other quadrature-based moment methods.

41. [Fast diagonalization for matrix-free inversion of the nodal even-parity operator in hybrid finite element SPN transport](https://arxiv.org/abs/2610.36716)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36716v1 Announce Type: new Abstract: The hybrid finite element method stores a dense inverse of the nodal even-parity operator for every node and energy group, and that storage limits the spatial and angular expansion orders, more tightly still on a GPU, whose memory is smaller than that of a host. This work introduces fast diagonalization for the nodal even-parity operator of the hybrid finite element SPN method: the stored dense inverse is replaced by the eigendecompositions of a planar, an axial and an angular factor, and the inverse is applied without being formed explicitly. Every even-parity moment of the SPN equations obeys an equation of the same diffusion form, with no mixed derivatives, so the angular coupling is the same in every spatial direction. On a node extruded along the axis, the operator is then an exact Kronecker sum of the three factors. The factorization merely recasts the computation, so the discretization and the solution are unchanged, and the nodes are not required to be identical to one another. The method is implemented for CPU and GPU hardware and compared with the dense inverse within one solver. On a pressurized water reactor core in SP3, the two paths agree to within round-off error, the storage falls from 3.76 GB to 821 kB, and the calculation is 4.15 times faster. On a 33-group fast reactor core, the dense inverse would occupy 24.9 GB and the dense path would need more memory than both the device and the host provide, whereas the factors occupy only 1.26 MB, so the solution can be obtained. The factorization thus reduces the storage of the nodal inverse by more than three orders of magnitude and brings multigroup core calculations at their required spatial expansion orders within the memory of a single GPU.

42. [DSMC Study of Hypersonic Boundary-Layer Unsteadiness Using Data-Driven Analysis](https://arxiv.org/abs/2610.36248)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36248v1 Announce Type: cross Abstract: The prediction of transition remains challenging because the receptivity amplitude is usually prescribed rather than measured. This work uses Direct Simulation Monte Carlo (DSMC) to study an unforced Mach 6 nitrogen boundary layer over a 120 mm flat plate, with no imposed inlet wave, wall signal, modal shape, or disturbance spectrum. The retained unsteady field is the intrinsic finite-particle stochastic fluctuation field carried by the DSMC representation. Changing the DSMC particle count provides an independent numerical control parameter that sets a predictable finite-particle noise floor while preserving the time-averaged boundary-layer flow. Dynamic Mode Decomposition (DMD) is then applied to unforced DSMC snapshots. The DMD eigenvalues and spatial modes estimate the quantities that appear in the LST normal-mode description, including frequency, temporal growth or decay, wavenumber, wavelength, phase speed, mode location, and amplification envelope. LST is used after extraction to test whether the data-derived structures occupy the expected second-mode band. The results show that DSMC data can connect a measured finite-particle stochastic disturbance level to second-mode instability dynamics without imposed disturbance spectra.

43. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.00; Date: 2026-10-28T13:26:34Z; Popularity: 1,996 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

44. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.78; Date: 2026-10-28T18:27:14Z; Popularity: 777 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

45. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-10-27T21:23:13Z; Popularity: 491 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.38; Date: 2026-10-27T09:25:27Z; Popularity: 384 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-10-27T21:02:24Z; Popularity: 235 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

48. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

49. [Called to serve: Tech, research, and positive impact](https://www.microsoft.com/en-us/research/podcast/called-to-serve-tech-research-and-positive-impact-with-chris-white/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 20 Oct 2026 16:00:00 +0000
   - Summary: Lab Director Chris White has worked on research challenges with real-world implications—from new approaches to wartime data analysis to tools for combating human trafficking. He talks to program manager Weishung Liu about the influences that led to the work and more. The post Called to serve: Tech, research, and positive impact appeared first on Microsoft Research .

50. [Proof-based general-purpose computing with Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 15 Oct 2026 16:00:00 +0000
   - Summary: Zero-knowledge proofs can verify computing results without rerunning workloads or exposing sensitive data. Magnetar helps bring them into the mainstream with support for standard programming languages, major speed gains, and quantum-resistant security. The post Proof-based general-purpose computing with Magnetar appeared first on Microsoft Research .

51. [Simulating student learning for better AI tutoring](https://www.microsoft.com/en-us/research/blog/simulating-student-learning-for-better-ai-tutoring/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 12 Oct 2026 16:00:00 +0000
   - Summary: StudentSim is a research system for evaluating and improving AI tutoring tools before they are tested with learners. It models how individuals may engage with tutors, giving feedback to improve tutor performance across subjects like chess, writing, and mathematics. The post Simulating student learning for better AI tutoring appeared first on Microsoft Research .

52. [What AI gets wrong and what failure teaches us](https://www.microsoft.com/en-us/research/podcast/what-ai-gets-wrong-and-what-failure-teaches-us/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 06 Oct 2026 16:19:06 +0000
   - Summary: Jennifer Neville did not want to go into computer science—but that’s exactly where she landed. Neville discusses the starts and stops that led to her professional sweet spot and her work identifying “surprising failures” making it hard for AI to handle complexity. The post What AI gets wrong and what failure teaches us appeared first on Microsoft Research .

53. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

54. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

55. [Can Language Models Learn While They Think? Testing Gradient Adaptation Across Architectures](https://arxiv.org/abs/2610.33025)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33025v1 Announce Type: new Abstract: Letting a language model take gradient steps on the text it is reading, known as dynamic evaluation, lowers its loss on the rest of the document. Its behaviour on hybrid linear-attention architectures, on diffusion language models, and on standard long-context benchmarks has not been measured. We measure it. With one SGD step per 128-token chunk on the MLP output projections of the last quarter of blocks, no training, and a 2k-token window, softmax-attention models (Qwen3-1.7B, Qwen3-4B, Gemma-4-E4B) lose 5-8% of their next-token loss over a document and outperform the same frozen model given the full 32k-token context. Hybrid Gated-DeltaNet models (Qwen3.5-4B, Qwen3.8-27B) gain under 1% at every learning rate: the linear-attention blocks already perform the adaptation. The mechanism transfers to masked-diffusion models with a larger effect, 8% on Nemotron-Diffusion-8B and 17-20% on DiffusionGemma-26B, once the rate is lowered and updates are clipped. Across RULER, BABILong, LongBench-v2, SCOTUS, HotpotQA, MuSiQue, ContractNLI and citation completion, at 100 or more items on two model sizes, weights updated on the full document recover none of the accuracy lost to context truncation: the adaptation is style and vocabulary, not retrieval. Writing facts with the next-token loss stores the prompt format rather than the fact (30% recall under chat prompting against 80% in context) and costs 36-38 GSM8K points at every dose. Writing a conclusion as behaviour instead, by distilling the model's own conclusion-conditioned judgments into a low-rank adapter, reaches the in-context ceiling (0.83 and 0.88 against 0.84 and 0.88 on 100 games) with GSM8K unchanged, and the conclusion can come from an inquiry loop that found it by asking information-gain questions.

56. [Physics Informed Neural Networks for Solving the Drift-Diffusion Equations](https://arxiv.org/abs/2610.33133)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33133v1 Announce Type: new Abstract: The drift-diffusion equations are the fundamental building block for the modeling, design, and optimization of modern semiconductor devices. Solutions of the drift-diffusion equations rarely give way to analytical forms, and exhibit strong nonlinearity, with the solutions ranging over several orders of magnitude. These attributes have led to research into numerical solvers, and while many commercial Technology Computer Aided Design (TCAD) packages now exist, they may require long simulation times, exhibit sensitivity to initial guesses, and rely on mesh generation. Further, these solvers are not well suited for inverse problems where the design parameters of a device are retrieved from its desired functional characteristics. To address all these challenges, this work demonstrates the usage of Physics Informed Neural Networks (PINNs) for the solution of the drift-diffusion equations with errors comparable to traditional simulation software using advanced training techniques to solve problems beyond the well-behaved equilibrium regime. For this study, we specifically choose an abrupt PN-junction in both one and two dimensions that features extreme gradients of the carrier concentrations at the Ohmic contacts and an abrupt discontinuity in the doping profile. Using the proposed PINN architecture, we are able to retrieve accurate results for all observables under all bias conditions. Additionally, we apply the PINN solver towards the inverse problem of retrieving doping profiles directly from desired electric field distributions or electrostatic potentials under non-zero applied biases. Our work establishes a powerful PINNs-based approach for semiconductor device modeling with the ability to solve inverse problems under non-equilibrium conditions for microelectronics research and discovery.

57. [How Much Fresh Data Should CTR Recalibration Use? A Temporal Evaluation of Post-hoc Calibration](https://arxiv.org/abs/2610.33168)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.33168v1 Announce Type: new Abstract: Offline evaluation of click-through rate (CTR) models still defaults to random splits, although deployed models score future traffic and downstream systems consume calibrated probabilities. On Avazu (40.4M impressions) we train logistic regression (LR), DeepFM, and DCN-v2 under two rolling temporal origins and a random split, three seeds per arm, and recalibrate each test day with Platt scaling and isotonic regression fitted on the preceding hours. At origin 1's nearest test day, random splits report LR's expected calibration error (ECE) at 55-62% of the temporal value in every seed (the deep models' ratio is seed-unstable), and no model's ECE is monotone in temporal distance. With a 6-hour fitting slice, recalibration removes up to 61% of ECE in badly miscalibrated cells but increases it in about a third of applications (14-17 of 48 across seeds). On fixed evaluation sets, a 12-hour slice cuts harm from 13-17 to 3-5 of 36 applications, and 24 hours raises it again. The 12-hour slice subsampled to the 1-hour slice's size (5% of the impressions; 20-25x faster to fit) recovers 88% of the full slice's gain, so impression count alone does not explain it. A slice-ECE gate shows no benefit out-of-origin, and in a simulated auction recalibration moves profit by only about -0.21% to +0.26%. Offline protocols should measure calibration temporally, over multiple origins and seeds; in this data, recalibration fitted on a wide time span beat the freshest few hours, which other logs must confirm.

58. [Reduced magnetohydrodynamics with electron inertia in pseudodipole coordinates](https://arxiv.org/abs/2610.36262)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36262v1 Announce Type: cross Abstract: We study the altitude-dependent structuring of field-aligned currents by driven Alfv\'en waves in an expanding auroral flux tube. The model uses the reduced magnetohydrodynamics (RMHD) long-thin ordering assumptions along with electron inertia. We derive a magnetic tension operator consistent with energy conservation in the expanding geometry. We compare uniform density with a prescribed profile containing a dense ionospheric end and a low-density upper region. The simulations produce localized current concentrations near the lower boundary and filamentary structures at greater heights. Broad structures remain visible in the magnetic and velocity stream functions while their perpendicular derivatives reveal finer magnetic field, velocity, and current structure. With the nonuniform density profile, the run with additional upper boundary reflection shows finer current structure and greater numerical dissipation. Spectral diagnostics show forward nonlinear energy transfer and altitude-dependent power-law-like intervals without a broad constant-flux range. The narrowest current concentrations span only a few grid cells, so their physical widths remain unresolved.

59. [Effective Noise Thresholds for Reliable Quantum Approximation Optimisation Algorithm under Noisy Environment](https://arxiv.org/abs/2610.36597)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36597v1 Announce Type: cross Abstract: Variational quantum algorithms are leading candidates for practical utilisation on noisy intermediate-scale quantum (NISQ) processors, but accumulating noise bounds the usefulness of circuit depths. For the quantum approximate optimisation algorithm (QAOA), this trade-off has mostly been addressed by searching for the best depth for a given device. In this work, we consider the inverse question: how much noise each depth can tolerate. Using GPU-accelerated noisy QAOA simulations for MaxCut on three graph families with 6 to 18 vertices, depths up to 10 and three noise channels, we fit the approximation ratios with a generalised logistic surface. We propose the effective noise threshold as the inflection boundary of the logistic surfaces, a noise boundary separating reliable and unreliable QAOA approximation regimes. In general, the threshold decreases as depth rises, indicating that deeper circuits demand for stricter noise requirement for reliable approximation. Its best and worst values over depth divide the noise axis into three regions: every depth remains effective, depth must be chosen with care, or no depth induces effective optimisation. Assessing on the ibm_marrakesh processor, although modelled gate errors understate factual noise, the threshold modeling remains beneficial in informing qualitative depth-dependence structure and identifying dominating noise channel in noisy QAOA.

60. [Local Metrics for Exact Streaming on Curvilinear Lattices: A Curvilinear D3Q27 Cumulant Lattice-Boltzmann Method](https://arxiv.org/abs/2610.36971)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.36971v1 Announce Type: cross Abstract: A three-dimensional curvilinear lattice-Boltzmann method is introduced for simulations on smoothly deformed grids while retaining exact one-to-one streaming on a uniform computational lattice. The coordinate transformation is represented locally through a metric-Gaussian equilibrium and a Christoffel-connection source in moment space. A dynamically reconstructed homogeneous-state perturbation streaming procedure preserves homogeneous physical states on warped meshes without interpolation in the advection step. The method is implemented on a D3Q27 lattice with a cumulant collision operator, while the geometric construction remains compatible with other local collision models. The formulation is assessed using two sets of tests. First, static non-orthogonal warped-cube cases validate the bulk curvilinear solver through a convected helical shear wave, the Taylor--Green vortex, and Arnold--Beltrami--Childress flow. These tests verify viscous decay, clean freestream preservation, vortex-breakdown dynamics, and the nonlinear inertial--pressure balance induced by geometric acceleration. Second, wall-bounded and moving-boundary demonstrations assess the boundary-compatible extension through warped plane Poiseuille flow, arbitrary Lagrangian--Eulerian (ALE) peristaltic pumping, and a two-way fluid--structure interaction (FSI) case with added-mass frequency shift. The results show that the proposed curvilinear LBM avoids interpolation-based transport, reduces geometry-locked numerical modes, preserves global mass and momentum to round-off accuracy in the tested warped periodic cases, and extends to wall-bounded ALE/FSI configurations with conservative treatment of mass and physically consistent momentum exchange.

61. [Spin-Orbit-Torque-Driven Recurrent Motion of Synthetic Antiferromagnetic Skyrmions for Magnetic Clocking](https://arxiv.org/abs/2610.37014)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 28 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37014v1 Announce Type: cross Abstract: Magnetic skyrmions in synthetic antiferromagnets have emerged as attractive information carriers for spintronic technologies due to their compensated topology, which mitigates the skyrmion Hall effect and facilitates reliable current-driven transport. Here we present a frequency-tunable magnetic clocking concept based on the recurring translational motion of SAF skyrmions and define the material conditions needed to realize it in a Pt/Co/Ru/Pt/Co multilayer. Using micromagnetic simulations, we investigate the combined effects of interfacial Dzyaloshinskii-Moriya interaction and interlayer Ruderman-Kittel-Kasuya-Yosida exchange coupling, delineating the parameter space in which coupled N\'eel-type skyrmions with opposite topological charges form a stable, topologically compensated pair. Under spin-orbit torque excitation, the SAF skyrmions exhibit resilient longitudinal transport with minimal transverse deflection using periodic boundary conditions. Periodic boundary conditions serve as an idealized model for closed-loop racetrack geometries, facilitating the study of continuous transport cycles and long-range steady-state dynamics. The oscillation frequency is readily modified by the applied current density and material characteristics, offering a pathway to field-free nanoscale timing components. Moreover, the threshold-activated initiation of recurrent transport mimics tonic-spiking behavior, indicating possible use in neuromorphic signal generation. This work establishes SAF skyrmions as versatile building elements for future spintronic functional devices by integrating topological protection, controllable transport, and cyclic dynamics.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.79; Date: 2026-10-28T16:49:18Z; Popularity: 787 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.44; Date: 2026-10-28T10:34:12Z; Popularity: 1,443 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

64. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.26; Date: 2026-10-28T18:26:51Z; Popularity: 259 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

65. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-10-19T17:32:52Z; Popularity: 56 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

66. [RobLe3/IICP](https://github.com/RobLe3/IICP)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-29T16:46:51Z; Popularity: 7 stars
   - Summary: Open specification and conformance material for intent-based AI agent discovery and routing

67. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Skill Dreaming: Evolving Repository Skills through Pull Request Streams

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2610.36188

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
