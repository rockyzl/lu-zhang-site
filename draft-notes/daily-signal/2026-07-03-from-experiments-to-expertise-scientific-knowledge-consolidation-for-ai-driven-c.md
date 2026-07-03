# Daily signal sidecar - 2026-07-03

## Selected Signal

- Title: From Experiments to Expertise: Scientific Knowledge Consolidation for AI-Driven Computational Physics
- URL: https://arxiv.org/abs/2603.13191
- Source: arXiv physics.comp-ph
- Score: 9.00

## Candidate Review

- Signal: From Experiments to Expertise: Scientific Knowledge Consolidation for AI-Driven Computational Physics
- Primary source: https://arxiv.org/abs/2603.13191
- Discovery source: arXiv physics.comp-ph
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

Total candidates reviewed after duplicate-source filtering: 69

1. [From Experiments to Expertise: Scientific Knowledge Consolidation for AI-Driven Computational Physics](https://arxiv.org/abs/2603.13191)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 9.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2603.13191v2 Announce Type: replace Abstract: While large language models (LLMs) have transformed AI agents into proficient executors of computational materials science, performing a hundred simulations does not make a researcher. What distinguishes research from routine execution is the progressive accumulation of knowledge - learning which approaches fail, recognizing patterns across systems, and applying understanding to new problems. However, the prevailing paradigm in AI-driven computational science treats each execution in isolation, largely discarding hard-won insights between runs. Here we present QMatSuite, an open-source platform closing this gap. Agents record findings with full provenance, retrieve knowledge before new calculations, and in dedicated reflection sessions correct erroneous findings and synthesize observations into cross-compound patterns. In benchmarks on a six-step quantum-mechanical simulation workflow, accumulated knowledge reduces reasoning overhead by 67% and improves accuracy from 47% to 3% deviation from literature - and when transferred to an unfamiliar material, achieves 1% deviation with zero pipeline failures.

2. [Auto-FL-Research: Agentic Search for Federated Learning Algorithms](https://arxiv.org/abs/2607.01366)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01366v1 Announce Type: new Abstract: Federated learning (FL) research often depends on many small but consequential algorithmic choices: optimizer variants, server aggregation rules, local training schedules, normalization, regularization, and model architecture. These choices are expensive to explore manually and difficult to compare fairly when candidate changes can also alter the FL training or evaluation path. In this work, we present Auto-FL-Research (AFR), a constrained coding-agent workflow for FL algorithmic recipe search. Agents may propose and implement candidate training algorithms, including server aggregation rules, client update schedules, local objectives, and registered model variants, while task profiles fix the mutation surface, compute budget, communication contract, and final model evaluation. Each campaign records candidate scores, runtime, edited files, artifacts, and failure status. We evaluate AFR on five healthcare cross-silo FLamby tasks and on grouped-client profiles for the five fixed LEAF datasets plus the LEAF synthetic task. Five-seed repeat evaluations support gains on four FLamby tasks and five of six LEAF profiles, while also exposing seed-sensitive and search-selected failure cases. Same-budget controls show that several gains correspond to FL-recipe changes, whereas other improvements are recovered by fixed-surface scalar controls or fail under repeat or held-out evaluation. These mixed outcomes are part of the contribution: they show how agent-generated candidates can be separated into repeated FL mechanisms, fixed-surface tuning effects, and selected single-run artifacts.

3. [Agent4cs: A Multi-agent System for Code Summarization in Large Hierarchical Codebases](https://arxiv.org/abs/2607.01425)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01425v1 Announce Type: new Abstract: Understanding large, complex codebases, especially those with obfuscated structures and incomplete documentation, remains a significant challenge. Existing code summarization solutions often rely on a single language model or coding assistant like Claude Code, and treat source code as flat text, underutilizing the rich interdependencies and hierarchical information within a repository. To address these shortcomings, we propose Agent4cs - a multi-agent framework that summarizes large codebases in a bottom-up fashion, where a summarization agent focuses on producing robust summaries; a keyword-extraction agent proactively identifies critical information from subfolders; and a quality-assurance agent iteratively refines the outputs for readability, coherence, and completeness. Evaluated on 7 frontier models, Agent4cs improves semantic consistency across all folder levels by average 8% compared to two structured prompting baselines with code segments. Furthermore, extensive evaluation on real-world datasets demonstrates up to 38% gains in normalized keyword coverage rate over the same baselines.

4. [Beyond Next-Token Prediction: An RLVR Proof of Concept for Tool-Use Agents on Atlassian Workflows](https://arxiv.org/abs/2607.01465)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01465v1 Announce Type: new Abstract: Large language models are trained to predict the next token, not to act inside a specific API. In niche enterprise SaaS workflows -- where success means hitting the right endpoint with the right nested arguments in the right order -- this objective mismatch shows up as silent failures: dropped required fields, hallucinated tools, or early stops after a single read. We ask whether Reinforcement Learning with Verifiable Rewards (RLVR), applied directly in the target environment, closes the gap. As a proof of concept we build a suite of five synthetic environments emulating the Jira REST v3 and Confluence v2 APIs at schema fidelity; rewards are computed entirely from the tool-call trace, with no live API, no learned judge, and no human label in the loop. Scoring prompted Qwen3-1.7B and Qwen3.5-4B on the same checkers that drive GRPO training, we find that on the four scenarios whose rewards are non-degenerate the RL-trained policy lifts average reward from a 4B-baseline range of 0.35--0.92 to 0.95--1.00, with the largest single gain on Confluence page creation ($0.35 \rightarrow 1.00$). We position this as a preliminary step toward outcome-optimised small models for niche enterprise APIs, and foreground two limitations a workshop reader should weigh: hand-crafting verifiable rewards does not scale beyond the handful of endpoints reported here, and one of our five scenarios (ticket-transition) has a saturating reward shape that the prompted 4B already maxes out.

5. [Grounded autonomous research: a fault-tolerant LLM pipeline from corpus to manuscript in frontier computational physics](https://arxiv.org/abs/2607.02329)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02329v1 Announce Type: cross Abstract: Autonomous-research agents have demonstrated end-to-end LLM automation in machine-learning sandboxes where execution provides calibration. Frontier physical science differs categorically: physical reasoning underlies every methodology choice, toolchains are often underdocumented, and calibration must come from external literature anchors - which unscaffolded agents cite but do not confront, hallucinating plausible, unverifiable results from internal priors. We present a pipeline that runs end-to-end from a corpus of 11,083 recent condensed-matter physics arXiv papers to a publication-grade manuscript with three substantive physics findings (here on altermagnetic piezomagnetism): the agent autonomously conceives a research direction by mapping the corpus, calibrates methodology by reproducing published references, conducts novel first-principles computations, and writes the manuscript - grounded in literature throughout, across 47 fresh-context sessions in six phases sharing only on-disk state, with 2,162 literature-consultation events. Fault tolerance emerges from redundancy: fresh-context isolation, distributed grounding, and adversarial review catch what any single session misses; pre- and post-pilot stages are fully autonomous, and pilot requires bounded human intervention only at reproduction failures - operational knowledge curation, not scientific direction. Two paired failure modes - a pre-architecture baseline and a no-pilot ablation - isolate structurally enforced numerical confrontation at calibration checkpoints as the operative grounding mechanism. The primitives, characterized failure modes, and quantified intervention pattern lay a foundation for autonomous research in high-stakes scientific domains beyond computational physics.

6. [InternScience/InternAgent](https://github.com/InternScience/InternAgent)
   - Source: GitHub repository search; Group: Open source; Score: 5.35; Date: 2026-07-03T13:44:42Z; Popularity: 1,348 stars
   - Summary: InternAgent-1.5: A Unified Agentic Framework for Long-Horizon Autonomous Scientific Discovery

7. [ruc-datalab/DeepAnalyze](https://github.com/ruc-datalab/DeepAnalyze)
   - Source: GitHub repository search; Group: Open source; Score: 5.31; Date: 2026-07-03T09:39:12Z; Popularity: 4,307 stars
   - Summary: DeepAnalyze is the first agentic LLM for autonomous data science. 🎈你的AI数据分析师，自动分析大量数据，一键生成专业分析报告！

8. [Introducing GeneBench-Pro](https://openai.com/index/introducing-genebench-pro)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 30 Jun 2026 00:00:00 GMT
   - Summary: Introducing GeneBench-Pro, a new benchmark testing AI performance in genomics, biology, and scientific research using complex, real-world datasets.

9. [Mapping Europe’s AI Workforce Opportunity](https://openai.com/index/mapping-ai-jobs-transition-eu)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 29 Jun 2026 07:00:00 GMT
   - Summary: A new OpenAI report maps how AI could reshape jobs across the EU, highlighting which occupations may face automation, growth, or workflow changes.

10. [Helping build shared standards for advanced AI](https://openai.com/index/helping-build-shared-standards-for-advanced-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 23 Jun 2026 13:00:00 GMT
   - Summary: OpenAI helps build shared standards for advanced AI, supporting evaluation frameworks, safety practices, and global cooperation through the Appia Foundation.

11. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

12. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

13. [Experimenting with the proposed Cross-Origin Storage API in Transformers.js](https://huggingface.co/blog/cross-origin-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

14. [PACE: A Neuro-Symbolic Framework for Plausible and Actionable Counterfactual Explanations](https://arxiv.org/abs/2607.01306)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01306v1 Announce Type: new Abstract: Counterfactual explanations explain machine learning predictions by identifying minimal input changes that would alter a model's decision. Although many existing methods successfully generate prediction-changing alternatives, they often produce unrealistic or infeasible recommendations due to a lack of explicit mechanisms for incorporating domain knowledge and intervention constraints. Neuro-symbolic AI offers a promising direction by combining data-driven predictive models with symbolic reasoning capable of representing human-understandable rules and feasible actions. This paper presents PACE, a modular neuro-symbolic framework for generating feasibility-aware counterfactual explanations. The framework separates prediction and reasoning into two components: a neural predictive model for classification and a symbolic reasoning layer that enforces domain-specific constraints during counterfactual generation. By explicitly modeling feasible interventions, the framework produces explanations consistent with domain knowledge while remaining interpretable and actionable. The approach is model-agnostic and adaptable to domains requiring realistic decision support. A case study is conducted on the Adult Income dataset, combining a multilayer perceptron classifier with Answer Set Programming (ASP) rules encoding feasible modifications to education, occupation, and working hours while preserving immutable attributes. Results highlight the trade-off between counterfactual validity and plausibility and show that symbolic constraints yield explanations that better satisfy domain-specific feasibility requirements, illustrating the potential of neuro-symbolic methods for transparent, feasibility-aware counterfactual explanation in explainable AI.

15. [When Should Service Agents Reconsider? Difficulty-Routed Control in Customer-Service Operations](https://arxiv.org/abs/2607.01426)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01426v1 Announce Type: new Abstract: Autonomous customer-service agents are shifting from conversational interfaces toward operational execution roles: they retrieve firm records, apply service policies, and execute backend writes such as refunds, cancellations, exchanges, order modifications, and reservation changes. This shift creates a service-control problem: firms must keep routine service fast and low-friction while preventing operational errors on requests where customer instructions, policy constraints, firm records, and backend writes interact. We propose a difficulty-routed service-control architecture that asks when service agents should reconsider before acting. A lightweight router keeps routine sessions on a low-cost baseline path and routes operationally coupled sessions to an escalated workflow. The escalated path uses conflict-aware communication and write-triggered reconsideration to concentrate deliberation and safeguards before consequential backend writes, rather than applying additional control uniformly across all service sessions. We evaluate the architecture on human-verified retail and airline tasks from $\tau^{2}$-bench. In retail, the method improves reliability consistently on service requests with operational conflict. Routing evidence shows that stronger control is directed toward conflicted requests rather than broadly applied to routine ones. Dialogue and tool-use profiles suggest that gains do not come from indiscriminate interaction expansion or broader tool chains; instead, added turns and tool calls support evidence gathering, write separation, and pre-write reconsideration. Case-level evidence shows that the escalated workflow preserves fallback plans, binds retrieved records to the correct action, sequences writes, and decomposes multi-entity requests. Airline results extend the same service-control logic to reservation operations.

16. [CreativityNeuro: Steering Language Model Weights to Improve Divergent Thinking and Reduce Mode Collapse](https://arxiv.org/abs/2607.01433)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01433v1 Announce Type: new Abstract: Divergent thinking is a crucial aspect of creativity, yet large language models (LLMs) tend to consistently generate similar responses to open-ended questions, in what has been termed the artificial hivemind effect. Here, we introduce CreativityNeuro, a data-free method for enhancing divergent thinking in LLMs via contrastive weight steering. We evaluate our method across multiple creativity assessments and report several main findings. On the Divergent Association Task (DAT), a vocabulary-space creativity test, CreativityNeuro improves performance by up to 14 human percentile points. Next, in a large-scale human evaluation (N=720) on the Alternative Uses Test (AUT) and the Task Task, CreativityNeuro achieves significant improvements in originality, surprise, and creativity, transferring to longer-form and more open-ended tasks. Importantly, we find that across all three tasks, CreativityNeuro demonstrably reduces measures of mode collapse. Moreover, activation steering achieves comparable performance to CreativityNeuro on the DAT, but it does not transfer to the AUT and Task Task, demonstrating the effectiveness of weight-space steering in generalizing to unseen tasks. In conclusion, CreativityNeuro improves divergent thinking and reduces mode collapse without requiring behavioral data, re-training, or gradient-based fine-tuning, providing a straightforward way to enhance LLM performance in creative domains.

17. [Discrete Diffusion Language Models for Interactive Radiology Report Drafting](https://arxiv.org/abs/2607.01436)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01436v1 Announce Type: new Abstract: Diffusion language models, which generate text by denoising a token canvas bidirectionally instead of emitting tokens left to right, have become competitive with autoregressive (AR) generation. Medical foundation models, however, remain almost entirely autoregressive. We adapt a mixture-of-experts diffusion language model, DiffusionGemma-26B, and benchmark it against its same-size AR sibling Gemma-4-26B under an identical LoRA recipe on medical visual question answering datasets, scored by a verbosity-robust LLM judge. Diffusion matches or exceeds AR on all of them, and the finetuned model (3.8B active) is competitive with frontier vision-language models; its decoding is also 3.5-4.4x faster. Beyond this parity, the diffusion model offers a drafting capability AR lacks: any-order infill. Because the canvas is denoised bidirectionally, a radiologist can fix report fragments and have the model fill the text between them, an operation inherent to diffusion but not to autoregression, which is subpar at it. This suits real reports, which are often terse or inconsistent across clinicians and institutions.

18. [IonSense-QKG: A Quantum-Readiness Metadata Framework for Lithium-Ion Battery Dataset Discovery](https://arxiv.org/abs/2607.01286)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01286v1 Announce Type: new Abstract: Public lithium-ion battery datasets are increasingly used for state-of-health estimation, remaining-useful-life prediction, anomaly detection, electrochemical diagnostics, second-life analytics, and battery safety research. However, these datasets vary substantially in chemistry, modality, scale, label quality, sequence structure, access status, and preprocessing complexity. These differences directly affect whether a dataset is feasible for near-term hybrid quantum-classical machine-learning workflows. This paper presents IonSense-QKG, a quantum-readiness metadata framework for lithium-ion battery dataset discovery. Starting from the EV-Battery-IonSense index, the proposed framework enriches public battery dataset records with quantum-relevant metadata, including task type, sensing modality, chemistry, label availability, sequence type, preprocessing requirements, candidate quantum encodings, estimated qubit range, and NISQ feasibility. A transparent Quantum Readiness Score is introduced to rank datasets as candidate resources for future hybrid quantum-classical battery benchmarks. The score is intended as a dataset-selection heuristic, not as evidence of quantum advantage. The framework demonstrates query-based discovery over enriched metadata to identify datasets suitable for compact quantum feature maps, quantum time-series workflows, limited-label anomaly detection, and future battery-health benchmarking. The released artifact includes metadata tables, scoring scripts, robustness checks, link-checking utilities, and SQL-style query examples. IonSense-QKG positions dataset selection as a data-management problem and provides a reproducible foundation for data-centric quantum battery analytics.

19. [Efficient Large-Scale STEM-EELS Simulations With Torched-TACAW](https://arxiv.org/abs/2607.02236)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02236v1 Announce Type: cross Abstract: The time auto-correlation of auxiliary wave functions (TACAW) method enables efficient simulations of ultra-low-loss electron energy loss spectra (EELS) arising from vibrational and magnon excitations. In practical applications to realistic materials systems, however, TACAW calculations become challenging due to the large system sizes required for models containing defects, interfaces, impurities, or grain boundaries, as well as the substantial computational cost and data throughput associated with molecular dynamics and multislice calculations. Here we discuss a practical methodology for large-scale TACAW simulations and present torched-TACAW, a freely available implementation of the TACAW part of the described workflow for efficient STEM-EELS simulations. The overall approach combines molecular dynamics based on foundational machine-learned interatomic potentials, partitioning of elongated supercells, and on-the-fly processing of multislice outputs in order to enable near ab initio quality simulations with tractable memory use and data flow. Using rutile TiO2 as a model system, we analyze important numerical aspects of the method, including windowing and supercell partitioning, and demonstrate atomic-resolution STEM-EELS simulations for thick samples.

20. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.20; Date: 2026-07-03T15:18:04Z; Popularity: 2,200 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

21. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-06-29T15:21:43Z; Popularity: 19 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

22. [How ChatGPT adoption has expanded](https://openai.com/index/how-chatgpt-adoption-has-expanded)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 09:00:00 GMT
   - Summary: New OpenAI Signals data shows how ChatGPT adoption is growing globally, with users increasing usage, exploring more capabilities, and driving growth across regions and languages.

23. [Inside Genebench-Pro](https://openai.com/index/genebench-pro/case-studies)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

24. [Core dump epidemiology: fixing an 18-year-old bug](https://openai.com/index/core-dump-epidemiology-data-infrastructure-bug)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT
   - Summary: OpenAI engineers used large-scale core dump analysis to debug rare infrastructure crashes, uncovering both a hardware fault and a long-standing software bug.

25. [HP Inc. launches Frontier strategic partnership with OpenAI](https://openai.com/index/hp-frontier-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 28 Jun 2026 17:00:00 GMT
   - Summary: HP Inc. scales its OpenAI Frontier partnership to deploy AI across customer experiences, software development, and enterprise operations.

26. [Previewing GPT-5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 26 Jun 2026 10:00:00 GMT
   - Summary: OpenAI previews GPT-5.6 Sol, a next-generation model with stronger capabilities in coding, science, and cybersecurity, paired with its most advanced safety stack.

27. [How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 25 Jun 2026 02:00:00 GMT
   - Summary: A new OpenAI research paper shows how AI agents are transforming work, enabling longer, more complex tasks and expanding productivity across roles.

28. [OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 24 Jun 2026 06:00:00 GMT
   - Summary: OpenAI and Broadcom introduce Jalapeño, a custom AI chip built for LLM inference to improve performance, efficiency, and scale across AI systems.

29. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](https://huggingface.co/blog/cerebras-gemma4-voice-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 GMT

30. [ScarfBench: Benchmarking AI Agents for Enterprise Java Framework Migration](https://huggingface.co/blog/ibm-research/scarfbench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 18:32:50 GMT

31. [Why Specialization Is Inevitable](https://huggingface.co/blog/Dharma-AI/why-specialization-is-inevitable)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 14:39:11 GMT

32. [Featuring Every Eval Ever Results on Hugging Face Model Pages](https://huggingface.co/blog/eee-community-evals)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

33. [DiScoFormer: One transformer for density and score, across distributions](https://huggingface.co/blog/allenai/discoformer)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 29 Jun 2026 18:02:48 GMT

34. [Run a vLLM Server on HF Jobs in One Command](https://huggingface.co/blog/vllm-jobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 26 Jun 2026 00:00:00 GMT

35. [Accelerating Transformers Fine-Tuning with NVIDIA NeMo AutoModel](https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 16:00:13 GMT

36. [Introducing the FFASR Leaderboard: Benchmarking ASR in the Real World](https://huggingface.co/blog/ffasr-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 24 Jun 2026 00:00:00 GMT

37. [Shipping huggingface_hub every week with AI, open tools, and a human in the loop](https://huggingface.co/blog/huggingface-hub-release-ci)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 23 Jun 2026 00:00:00 GMT

38. [The Wiola Architecture for Efficient Small Language Models](https://arxiv.org/abs/2607.01394)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01394v1 Announce Type: new Abstract: We present Wiola, a fully original Small Language Model (SLM) architecture built from first principles, sharing no structural lineage with any existing model family including GPT, LLaMA, Mistral, or Falcon. Wiola introduces five independently novel components: (i) Spiral Rotary Positional Encoding (SRPE), which embeds token positions on a three-dimensional helical manifold combining absolute, relative, and hierarchical positional signals; (ii) Gated Cross-Layer Attention (GCLA), providing each decoder layer with soft cross-attention access to compressed summaries of two preceding layers for inter-layer coherence; (iii) Adaptive Token Merging (ATM), which dynamically merges se mantically redundant adjacent tokens in middle network layers to reduce attention complexity without information loss; (iv) Dual Stream Feed-Forward (DSFF), replacing the conventional MLP with two parallel streams fused by a learned per-dimension gate; and (v) WiolaRMSNorm, a modified normalisation introducing a per-dimension learned offset vector that prevents representation collapse. We provide complete mathematical derivations, architectural block diagrams, complexity analyses, and systematic comparisons against GPT-2, LLaMA-2, and Mistral. Wiola is released in four sizes (120M, 360M, 700M, and 1.5B parameters) and is fully compatible with the HuggingFace Transformers ecosystem, with all 22 architectural unit tests passing.

39. [World Feedback for Clinical Agents: Diagnosing RL in FHIR Environments](https://arxiv.org/abs/2607.01470)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01470v1 Announce Type: new Abstract: Clinical protocol-execution tasks -- checking a lab value, applying a threshold, placing a correctly structured FHIR order -- are natural candidates for RL from world feedback: once clinical SMEs encode decision logic into a verifier, that verifier grades unlimited rollouts without per-episode annotation. But applying RL requires a sound feedback channel and sufficient base capability. We audit MedAgentBench v1/v2, find a 41.7\% silent-finish ceiling that makes inaction the RL dominant strategy, and construct \textbf{MedAgentBench-v3 (MAB-v3)} (508 tasks, 8.9\% ceiling). Training Qwen3-8B exposes two structural barriers: a \emph{capability ceiling} (10/20 task types have 0\% base performance, zero gradient) and a \emph{format-knowledge barrier} (3/20 types require exact clinical codes undiscoverable by exploration). Pure RL reaches 18.2\% pass@1 vs.\ 34.1\% for rule-based SFT; the 15.9~pp gap is attributable entirely to these barriers. A decision/format-knowledge/lookup taxonomy predicts RL learnability and prescribes the fix: SFT to inject codes, RL to learn conditionals.

40. [Procedural Memory Distillation: Online Reflection for Self-Improving Language Models](https://arxiv.org/abs/2607.01480)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01480v1 Announce Type: new Abstract: Reinforcement learning with verifiable rewards (RLVR), along with recent selfdistillation variants such as SDPO, evaluates each rollout against a verifier and updates the policy from that episode-level signal. However, the richer procedural information in the rollout is rarely retained or reused. Across episodes and epochs, the model repeatedly encounters related problems under a changing policy, producing cross-episode signals that episode-local updates cannot capture: which strategies consistently pass verification, which failure modes persist, which patterns recur. We propose Procedural Memory Distillation (PMD), which converts these crossepisode signals into reusable procedural memory and distills it into the policy's weights during training. This memory functions as a training scaffold, absorbed into the policy itself, yielding a memory-free model at inference. PMD organizes the memory at three levels of abstraction: raw trajectories, self-reflected strategies and lessons, and higher-level behavioral patterns that recur across problems, all extracted online from the model's own trajectories. A memory-conditioned self-teacher draws on the accumulated experience to supervise the student on its own rollouts, enabling student to progressively internalize procedural knowledge within its parameters. The central design principle is co-evolution: the policy generates rollouts that update the memory, and memory shapes the supervision that updates the policy. Empirically, across Qwen3-8B and OLMo3-Instruct-7B, PMD improves over SDPO by 3.8-5.5% on SCIKNOWEVAL and 7.9-13.6% on LIVECODEBENCH. Co-evolution powers these gains: freezing either the memory or the policy trails PMD by more than 10% across SCIKNOWEVAL domains.

41. [Verification and Performance Assessment of NuDEAL, a GPU-Accelerated Deterministic Transport Framework on Unstructured Meshes](https://arxiv.org/abs/2607.01591)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01591v1 Announce Type: new Abstract: High-fidelity neutronic analyses of advanced reactors require deterministic transport solvers capable of handling complex unstructured geometries while maintaining computational efficiency. This work presents the development and verification of three GPU-accelerated deterministic solvers implemented within a unified framework, Neutronics using Deterministic Finite Element Algorithm (NuDEAL): the planar Method of Characteristics coupled with the Hybrid Finite Element Method (MOC/HFEM), the Discontinuous Galerkin Method of Characteristics (DGMOC), and the Discontinuous Finite Element discrete ordinate method (DFEM-SN). These solvers provide complementary capabilities for consistently solving the multigroup transport equation and can be selectively employed to balance accuracy, computational cost, and memory requirements for a given problem. All methods emphasize efficient GPU execution by leveraging memory alignment, compressed-flux storage, and sequential azimuthal sweeps. The solvers are validated on the C5G7 benchmark and applied to advanced reactor problems, including the ABTR, Empire microreactor, and MSRE. DFEM-SN achieved the highest accuracy, with eigenvalue errors below 50 pcm, while MOC/HFEM and DGMOC provided superior efficiency, with single-GPU runtimes comparable to those of large CPU clusters. The results demonstrate that deterministic GPU solvers on unstructured meshes can deliver both accuracy and scalability, enabling practical whole-core simulations for heterogeneous advanced reactors. The unified NuDEAL framework establishes a foundation for future extensions toward transient and multiphysics analyses on large-scale GPU architectures.

42. [Predicting Novel Stable Materials for Experimental Synthesis](https://arxiv.org/abs/2607.01713)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01713v1 Announce Type: cross Abstract: Machine-learning-accelerated materials discovery has yielded large numbers of computationally stable compounds, yet many remain experimentally unrealized, underscoring a persistent gap between prediction and synthesis. Here, we introduce a hierarchical screening framework that combines PBE-based thermodynamic stability, efficient dynamical-stability screening enabled by universal machine-learning interatomic potentials, and SCAN-based thermodynamic refinement. Applying this protocol to the 894 stable materials previously reported in Sci. Data 9, 302 (2022), we first curate 603 unique structures, of which only 298 remain thermodynamically stable on the complete PBE phase diagrams, demonstrating the critical role of competing phases in stability assessment. Dynamical screening then identifies 166 materials stable under both harmonic-phonon and finite-temperature molecular dynamics criteria, and SCAN phase diagrams further narrow this set to 109. Finally, by combining decomposition enthalpy with chemical-space completeness, we prioritize 25 candidates as high-confidence targets for experimental synthesis. This work provides a practical protocol for translating stability predictions into experimentally actionable synthesis targets, closing a key gap in machine-learning-driven materials discovery.

43. [Walking on Spheres and Talking to Neighbors: Variance Reduction for Laplace's Equation](https://arxiv.org/abs/2404.17692)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2404.17692v3 Announce Type: replace Abstract: Walk on Spheres algorithms leverage properties of Brownian Motion to create Monte Carlo estimates of solutions to a class of elliptic partial differential equations. We propose a new caching strategy which leverages the continuity of paths of Brownian Motion. In the case of Laplace's equation with Dirichlet boundary conditions, our algorithm has improved asymptotic runtime compared to previous approaches. Until recently, estimates were constructed pointwise and did not use the relationship between solutions at nearby points within a domain. Instead, our results are achieved by passing information from a cache of fixed size. We also provide bounds on the performance of our algorithm and demonstrate its performance on example problems of increasing complexity.

44. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.45; Date: 2026-07-02T12:58:59Z; Popularity: 453 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

45. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-03T09:30:05Z; Popularity: 1,282 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-07-02T17:04:55Z; Popularity: 219 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.20; Date: 2026-07-03T11:12:10Z; Popularity: 200 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

48. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

49. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

50. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

51. [Multilayer Q-Matrix-Embedded Neural Network for Cognitive Diagnosis (M-QCDNet): Structure-Aware Deep Learning Architecture for Psychometric Interpretability](https://arxiv.org/abs/2607.01278)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01278v1 Announce Type: new Abstract: The research proposes a multilayer Q-matrix-embedded neural network for cognitive diagnosis (M-QCDNet), which integrates the structural interpretability of cognitive diagnostic models (CDMs) with the deep learning neural network (NN). M-QCDNet structures the item-skill relationship using the Q-matrix as a structural prior, ensuring latent mastery profiles remain interpretable and consistent with cognitive theory, followed by the proposed loss function with an L2 penalty to penalize skills not aligned with the Q-matrix and to balance predictive performance and structural alignment. Corresponding evaluation matrices, the interpretable alignment-based metrics that quantify the degree to which predicted skill activations correspond to item-level skills, were further developed. M-QCDNet offers practical benefits for classroom practice, enabling early detection of learning difficulties and supporting mastery-based interventions. By embedding diagnostic validity into model design, M-QCDNet bridges psychometric transparency and neural flexibility, advancing interpretable, fair, and actionable AI for cognitive diagnostics.

52. [I\textsuperscript{2}RiMA: Spectral Riemannian Representation with Temporal Attention for Mental Stress Detection based on EEG Signals](https://arxiv.org/abs/2607.01279)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01279v1 Announce Type: new Abstract: Cross-subject EEG stress detection remains challenging because discriminative stress-related patterns are both subject-dependent and frequency-specific. Conventional Riemannian methods model spatial covariance mainly in the time domain, overlooking neural oscillations that are critical for high-level cognitive state decoding, while standard temporal tokenization often fragments inter-slice temporal coherence. To address these limitations, we propose \method{}, an Intra-Inter Riemannian Manifold Attention Network for EEG-based stress detection. \method{} constructs spatial covariance matrices independently at each frequency point and maps them to the SPD tangent space, preserving channel-wise geometry together with frequency-specific discriminative cues. It further introduces frequency cluster aggregation to select informative spectral components and reduce redundancy by forming compact, data-driven frequency clusters aligned with EEG rhythms. Finally, an intra-inter slice attention module adaptively integrates local slice-level spectral dynamics and global temporal context across EEG sequences. Experiments on three datasets show that \method{} consistently outperforms five state-of-the-art baselines, achieving up to 82.78\% balanced accuracy while remaining efficient with only 1.60M parameters and 31.95M FLOPs.

53. [Fixed-Set Robustness in Programming by Example: Example Corruption and Semantic Partition Recovery](https://arxiv.org/abs/2607.01280)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01280v1 Announce Type: new Abstract: Programming-by-example systems infer programs from a small set of input-output examples. Robust PBE work usually models wrong examples as samples from a stochastic noise process and then minimizes an expected or empirical loss. This paper studies a different failure mode: an adversary who sees the synthesizer and chooses the examples whose corruption most damages the returned program. We formalize fixed-set worst-case corruption for finite PBE version spaces, implement exact-within-bounded-pool and heuristic corruption searches for a string-transformation DSL, and introduce version-space partition aggregation (VPA), a defense that synthesizes on disjoint example groups and votes by semantic signatures. The central claim is deliberately bounded and partly negative: low-margin PBE tasks have an adversarial robustness dimension that random-typo and noisy-PBE evaluations miss, while semantic partition aggregation helps only when the clean semantics keep a partition vote margin, which often fails on realistic tasks. Evidence from curated/generated DSL tasks, accepted public SyGuS PBE_SLIA slices, SYNTRA Playgol v2, and noisy-PBE objective baselines supports that boundary. One curated edit flips all 8 spike tasks while 200-trial typo, DSL-pool, and distance-matched random controls succeed on 10.3%, 11.0%, and 16.7%; generated margin-1 rows flip under budget 1 yet VPA recovers them; on public SyGuS the vote margin is near one, so an adaptive attacker drives VPA accuracy to zero; accepted public SyGuS slices move across exact-within-pool budget boundaries; and Playgol shows positive paired-bootstrap gaps against typo and same-pool random controls on the 141 accepted rows. A small exact-output prompt harness over 20 controlled margin-1 tasks shows the same qualitative clean-to-attacked pattern across local and API models, while it is treated as a scope check, not a broad LLM benchmark.

54. [Domain Knowledge Based Temporal-Spatial Graph Convolution Network for ECG Recognition](https://arxiv.org/abs/2607.01282)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01282v1 Announce Type: new Abstract: In light of strides in Arti cial Intelligence (AI) and its wide spread application, challenges persist in the interpretability of AI models, particularly within specialized domains like healthcare, such as electro cardiograph (ECG) recognition. Rather than relying solely on end-to-end convolutional neural networks, this paper introduces a novel approach using a domain knowledge-based graph convolution network for ECG recognition. Key landmarks points of PRQST, vital to ECG interpreta tion, are incorporated as domain knowledge. The double-stream directed graph is employed to model both intra and inter ECG cycles. Speci cally, spatial directed graphs capture the positional relationships among key points, while temporal directed graphs delineate temporal dependencies between adjacent cycles in extended ECG sequences. Experimental re sults on the First Chinese ECG Intelligent Competition dataset, which speci cally classify ECG into nine categories, prove the e cacy of the proposed model. The overall average F1 score is 88.1%, the average F1 score of rare categories is 76.3%, both outperform the state-of-the-art models. The introduction of domain knowledge did enhance the detec tion performance, especially for rare categories.

55. [A Novel Machine Learning Approach for Central Nervous System Tumor Classification from DNA Methylation](https://arxiv.org/abs/2607.01307)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01307v1 Announce Type: new Abstract: NA methylation profiling has become a powerful approach for central nervous system (CNS) tumor classification, yet important challenges remain regarding cross-cohort transferability, methodological correctness, and robust multiclass evaluation. In this work, we propose a novel and methodologically rigorous machine-learning approach for methylation-based CNS tumor classification that combines Sparse Random Projection for dimensionality reduction with multinomial logistic regression for classification. We evaluate the proposed approach in the same general experimental setting established by a widely used reference classifier. On the 2,801-sample reference cohort, our method achieves a mean accuracy of 96\% under stratified 3-fold cross-validation. On the independent 1,104-sample clinical evaluation cohort, it reaches 86\% accuracy at the 91-class level and 93\% when predictions are evaluated at the methylation class family level. These results improve upon the corresponding state-of-the-art reference figures of 82\% class-level concordance and 88\% family-level concordance, yielding absolute gains of approximately 4 and 5 percentage points, respectively. This improvement is clinically relevant: in a diagnostic setting, a 5-point increase in correct tumor classification can directly affect cancer subtype assignment and, in turn, influence treatment selection and downstream clinical decision-making. Our results show that the proposed model, grounded in stronger methodological practice in machine learning, consistently outperforms the previous state of the art across evaluation settings and can materially improve the reliability of CNS tumor classification.

56. [Black-Box Inference of LLM Architectural Properties with Restrictive API Access](https://arxiv.org/abs/2607.01313)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01313v1 Announce Type: new Abstract: In practice, most commercial LLM providers do not publicly release details of underlying LLM architectures. However, prior work has shown that given limited API access to an LLM (namely, top-$k$ logits and/or a logit bias function), one can recover certain architectural details of an LLM, such as the hidden dimension of the feed-forward network. Perhaps in response to these results, most commercial LLM providers have restricted their APIs to expose only the single logit for each decoded token, and they no longer give users the ability to bias logits. We show that even under current restrictive APIs, several architectural parameters are still recoverable. We present NightVision, an attack that uses restrictive black-box API access to estimate the hidden dimension, depth, and parameter count of an LLM. Algorithmically, NightVision relies on a novel common set prompting technique in which multiple prompts expose log probabilities for the same set of output tokens; a spectral analysis of these results is used to infer hidden dimension. NightVision additionally uses end-to-end time to first token (TTFT) measurements and the estimated hidden dimension to estimate depth and parameter count. We empirically evaluate NightVision on 32 open-source LLMs, recovering hidden dimension to within 23% average relative error across all models (9% on MoE models), and depth and parameter count to within 53% for models exceeding three billion parameters. We run extensive ablations to demonstrate how these accuracies scale with token budget and model properties. Overall, our results suggest that current LLM APIs are not sufficiently restricted to fully obfuscate the architectural details of their underlying models.

57. [Multi-modal Rail Crossing Safety Analysis](https://arxiv.org/abs/2607.01365)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01365v1 Announce Type: new Abstract: Given one or more images of a railway crossing, can we leverage visual cues that allow us to robustly estimate how safe it is? Can we improve our ability to do so by introducing structured data (such as official accident reports) about the accident history of that crossing into our models? In this work, we explore how to best answer those questions towards building an AI system that can ingest multi-modal data for railway crossings and provide safety assessment and scores that align with expert opinion and with safety scoring used by the Federal Railroad Administration (FRA). To that end, we propose a proof-of-concept pipeline that delivers on that goal, while at the same time exploring and tackling a number of critical research challenges that pertain to different parts of the pipeline, from data preparation to different learning paradigms that can allow us to realize such a system. Indicatively, our proposed system identifies HIGH-RISK and LOW-RISK crossings with a macro F1 score of 0.757 and estimates FRA-based safety scores with an RMSE of 0.078 and correlation of 0.492 using a routed fine-tuned compact VLM pipeline, while producing qualitative results that align with domain-expert assessment.

58. [Learning Effective Soliton Dynamics from Scattering Data](https://arxiv.org/abs/2607.01545)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01545v1 Announce Type: new Abstract: The inverse scattering transform (IST) provides the standard theoretical framework for deriving soliton dynamics. Traditionally, such derivations have been of an analytical, rather than data-driven, nature. In this paper, we combine the conceptual framework of the IST with weak-form system identification methods to discover effective soliton dynamics directly from observed scattering data, without assuming prior knowledge of the scattering equations. Our method avoids parameterizing solitary waves via ad hoc curve-fitting by working in the scattering domain, yielding interpretable low-dimensional models that remain valid in perturbed and near-integrable regimes. We demonstrate the performance of the proposed approach on synthetic and experimental data governed by shallow-water equations of Korteweg--de Vries-type and recover models that are consistent with canonical IST theory.

59. [Hybrid Two-Level Transport Method with Solution Decomposition in Macro and Micro Components](https://arxiv.org/abs/2607.01346)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.01346v1 Announce Type: cross Abstract: This paper presents a new hybrid MC/deterministic method for solving the one-group steady-state Boltzmann transport equation based on decomposition of solution in macro and micro components. The macro component captures the large-scale structure of the solution. It is represented by angular moments of the high-order transport solution. The $P_1$ approximation is applied to define the macro component. The first two angular moments are obtained as a solution of hybrid low-order moment equations with exact closures. The equation for the micro component is solved using a MC simulation. The hybrid two-level system of equations for macro and micro components is solved by fixed-point iteration scheme. Numerical results are presented to demonstrate variance reduction of stochastic numerical solution and improvement in computational efficiency.

60. [An Optimisation Framework for the Well-Conditioned Training of Physics-Informed Neural Networks](https://arxiv.org/abs/2607.02194)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02194v1 Announce Type: cross Abstract: Physics-informed neural networks (PINNs) have emerged as a promising route to solve partial differential equations, yet they have struggled to reach the precision of classical solvers. The obstacle is increasingly understood to be one of optimisation, owing to the severely ill-conditioned loss landscape. We present $\textbf{DSGNAR}$: Doubly-Sketched Gauss-Newton with Adaptive Ratio, a scalable second-order optimisation framework that confronts this ill-conditioning and, in doing so, obtains unprecedented accuracy and speed. $\textbf{DSGNAR}$ couples a doubly-sketched Gauss-Newton model with a novel strategy that carefully controls both regularisation and step length. Across a suite of problems spanning nonlinear, chaotic, multi-scale, high-dimensional, and Navier-Stokes, the framework greatly improves on the state of the art: able to attain relative $\ell_2$ errors as low as $3\times10^{-16}$ in double precision, improve contemporary results by five orders of magnitude on the canonical Burgers' equation, and as much as eight orders on a high-dimensional Poisson problem, while remaining markedly faster. We further show that, in single precision, solutions at the limit of round-off error can be obtained very quickly: Burgers' equation to $\ell_2^{\text{rel}} = 4.75 \times 10^{-7}$ in under ten seconds. The framework is also robust to the choice of architecture, arithmetic precision, and initial hyperparameters. The code is available at https://www.github.com/wephy/physics-informed-neural-networks

61. [Beyond Adam: SOAP and Muon for Faster, Label-Efficient Training of Machine Learning Interatomic Potentials](https://arxiv.org/abs/2607.02499)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 03 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.02499v1 Announce Type: cross Abstract: Machine learning interatomic potentials (MLIPs) have become a hallmark of AI for scientific simulation. While efforts on new architectures and datasets have led to increasingly accurate and general models, the choice of optimizer for training has largely remained unexplored, defaulting to Adam and its variants in the community. Here, we implement and systematically compare a class of recently proposed matrix-structured optimizers, including Muon, SOAP, and the hybrid SOAP-Muon, for training NequIP and Allegro MLIP models. We find that these optimizers can substantially outperform Adam in both convergence speed and final accuracy. SOAP and SOAP-Muon emerge as robust and consistently strong methods, while Muon only provides partial gains relative to Adam. The improvements are particularly pronounced under partial force supervision. Our results indicate that optimizer choice is an overlooked yet impactful design axis for MLIPs.

62. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

63. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.68; Date: 2026-07-03T13:45:08Z; Popularity: 681 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

64. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.60; Date: 2026-07-03T04:32:16Z; Popularity: 597 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

65. [facebookresearch/airs-bench](https://github.com/facebookresearch/airs-bench)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-02T10:09:05Z; Popularity: 100 stars
   - Summary: AIRS-Bench: an AI Research Science benchmark for quantifying the end-to-end AI research abilities of LLM agents

66. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-06-28T20:50:08Z; Popularity: 99 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

67. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

68. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

69. [Ask HN: Why aren't companies hoarding AI talent?](https://news.ycombinator.com/item?id=48760918)
   - Source: Hacker News; Group: Tech community; Score: 1.28; Date: 2026-07-02T13:04:08Z; Popularity: 5 points, 31 comments
   - Summary: HN discussion: 5 points, 31 comments.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

From Experiments to Expertise: Scientific Knowledge Consolidation for AI-Driven Computational Physics

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2603.13191

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
