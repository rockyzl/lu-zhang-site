# Daily signal sidecar - 2026-10-31

## Selected Signal

- Title: WebAnything: From the Wild Web to Scalable Agent Environments
- URL: https://arxiv.org/abs/2610.37786
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: WebAnything: From the Wild Web to Scalable Agent Environments
- Primary source: https://arxiv.org/abs/2610.37786
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

Total candidates reviewed after duplicate-source filtering: 50

1. [WebAnything: From the Wild Web to Scalable Agent Environments](https://arxiv.org/abs/2610.37786)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37786v1 Announce Type: new Abstract: Web agents require diverse, executable, and resettable website environments for reproducible training and evaluation. Human-assisted mirrors demand per-site engineering, while generative construction can diverge from specified real websites. Capture-and-replay preserves observations, with interaction coverage constrained by captured content and replay capabilities. We present WebAnything, a fully automated framework that reconstructs source-grounded, reusable Web environments from real URLs without per-site manual implementation or repair after initial setup and authorization. An Explorer-Builder collects browser-observable structures, resources, and interaction outcomes; an independent verifier checks frozen candidates and guides local repair or targeted source recapture. We construct 244 website artifacts across 14 application domains and 53 categories, supporting 12,984 executed and accepted tasks. Compared with human-assisted WebHarbor, WebAnything achieves higher aggregate scores on three fidelity metrics, with 12 wins, two ties, and no losses in a blind audit. Fine-tuning Qwen3.5-9B on 5,856 interaction trajectories improves REAL success by 9.9 percentage points, Odysseys-Easy Rubric Avg and Task Avg by 6.25 and 6.32 percentage points, and WebArena-Verified Overall success by 13.33 percentage points under the fixed harness. Code: https://github.com/china-qijizhifeng/Web-Anything

2. [Evaluating and improving AI agents for sequencing protocol understanding](https://arxiv.org/abs/2610.37851)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37851v1 Announce Type: new Abstract: Existing scientific-agent benchmarks rarely evaluate whether agents can reconstruct the exact molecular structures and generation workflows specified by sequencing protocols, a capability critical for analyzing customized sequencing assays. We introduce LibStructBench, a document-grounded benchmark for reconstructing sequencing-library structures and molecular workflows. Our experiments show that frontier agents often produce approximately correct reconstructions but remain unreliable at exact reconstruction, particularly in molecular-state representation and workflow connectivity. Switching the underlying language model produced larger average performance differences than switching agent harnesses, with a statistically significant difference only for molecular-state reconstruction. Additional knowledge improved oligo-family recovery in a small pilot without improving mean molecular-workflow scores. Autonomous accumulation of procedural rules and cross-protocol examples showed non-monotonic validation performance and no mean held-out molecular-workflow improvement in the tested trajectory. These findings highlight the need for more controlled and verifiable approaches to scientific reasoning about molecular processes in complex experimental protocols.

3. [Seq@K: Evaluating Language Models Under Sequential Feedback](https://arxiv.org/abs/2610.37859)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37859v1 Announce Type: new Abstract: Language-model agents differ fundamentally from prior intelligent systems in their ability to learn from natural language in context. This capability enables agents to iteratively refine their answers in response to feedback, a prevalent mode of operation in modern agentic workflows. However, the community primarily ranks models by metrics such as Pass@1 or Pass@K, which cannot capture how they utilize feedback on prior attempts. We introduce Seq@K, a natural evaluation protocol that measures whether a model can solve a problem within K sequential attempts, provided feedback after each previous failure. Unlike multi-turn agentic benchmarks that examine long-horizon planning, Seq@K isolates and formalizes the core capability of refinement from feedback. We evaluate Seq@K on a suite of 7 benchmarks and 16 frontier models, and show that Seq@K reveals a materially different model-selection landscape: under Seq@K, (1) model rankings often differ, (2) the Pareto frontiers admit more efficient configurations and (3) the gains from choosing the optimal model configuration can widen or shrink relative to those of Pass@K. We further show that analyzing model trajectories under Seq@K helps characterize iterative refinement behavior, such as the rate at which models address issues raised in feedback, or how rigidly they hold onto their own answers. Finally, we study how the nature of feedback affects models' iterative refinement, showing that practitioners must carefully design and benchmark the feedback loops of iterative agentic systems. Together, these results establish how Seq@K offers a more faithful metric for intelligent systems that typically operate in such feedback loop, and the necessity to consider Seq@K in evaluating models for these systems.

4. [Microsoft Research Focus – Edition #97](https://www.microsoft.com/en-us/research/podcast/microsoft-research-focus-edition-97/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Thu, 29 Oct 2026 19:19:16 +0000
   - Summary: Host Sowbhagya Suresh shares some of the latest news and cutting-edge research from across Microsoft—from understanding the challenges facing coding agents to uncovering how people use AI at work and improving extended-range weather forecasting. The post Microsoft Research Focus – Edition #97 appeared first on Microsoft Research .

5. [Flint-interactive: A language for creating interactive data visualizations](https://www.microsoft.com/en-us/research/blog/flint-interactive-a-language-for-creating-interactive-data-visualizations/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Thu, 22 Oct 2026 16:00:00 +0000
   - Summary: Flint-interactive gives AI agents a language for creating interactive visualizations. Click a chart, filter data, highlight related content, and explore beyond the view the author originally chose. The post Flint-interactive: A language for creating interactive data visualizations appeared first on Microsoft Research .

6. [OpenFrontiers: A Collection of Open Research Problems and a Benchmark for Scientific Rediscovery](https://arxiv.org/abs/2610.37739)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37739v1 Announce Type: new Abstract: Large language models (LLMs) have shown increasing promise in research-level problem solving, yet a comprehensive collection of such problems is still missing, and evaluating them on research-level problems remains challenging. We introduce OpenFrontiers, a cross-disciplinary resource that combines a structured corpus of open research problems with a retrospective benchmark of recently resolved problems in mathematics. The corpus records problem statements, context, progress, and other information for 12,151 problems. The benchmark contains 200 problems, 110 resolved in 2026 and 90 still open, each with a Lean~4 statement checked by automated probes and two independent reviews; a subset HQ-50 further filters based on quality score, etc. Our evaluation protocol grades formal proofs with two independent checkers in an isolated sandbox under closed-book, frozen-retrieval, and live-web conditions. Evaluating seven LLM agents on the HQ-50 subset under a standardized budget, we find that closed-book rediscovery is rare, at most 7 of 40 resolved problems, whereas live-web success mostly reflects retrieval of published solutions. By linking a broad research-problem corpus to a formally graded evaluation subset with documented solutions, OpenFrontiers provides a foundation for measuring research-level rediscovery and studying progress toward solving currently open scientific problems. The dataset and benchmark could be found in https://huggingface.co/collections/FlippyDora/openfrontiers.

7. [Measuring Where Intent Gets Lost in Agentic Smart Contract Synthesis](https://arxiv.org/abs/2610.37830)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37830v1 Announce Type: new Abstract: AI agents can now write software from a plain-English description, but code that runs is not the same as code that does what was asked. This gap matters most for smart contracts, the programs behind Web3 applications that move money on a blockchain and cannot be fixed once deployed. We ask how to check whether an AI-written contract behaves as it should, and where the requested behavior gets lost. We design an evaluation built on execution rather than opinion. We replay the same transactions on an AI-written contract and on the original it should reproduce and measure how often they agree. We test every grading tool on planted mistakes, compare against an answer key written without the description, and audit our own scorer until known wrong answers cannot pass. Common methods, such as AI judges and standard analysis tools, miss obvious mistakes, and scoring choices matter too. Checking only the functions every system includes hid about half the difference between pipelines. We then propose an elicitation-first architecture. Before writing code, the agent asks the client a short checklist of questions, checks the contract against an independently written executable answer key, and returns disagreements to the client instead of silently rewriting code. Asking first matters far more than reviewing or patching afterwards, across three AI models, while automated security fixes often break requested behavior. A few well-chosen questions recover much of what a short description omits, and their value can be estimated without the original contract. To our knowledge, this is the first study in smart contract synthesis to gather missing requirements before generation and check the result against an independently written executable model. The lessons extend to any setting where AI agents turn requests into programs. We release our tools, 600 tasks and all results.

8. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.01; Date: 2026-10-31T11:00:26Z; Popularity: 2,013 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

9. [Making it easier for websites to express AI training preferences](https://openai.com/index/helping-websites-express-ai-training-preferences)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 30 Oct 2026 09:30:00 GMT
   - Summary: OpenAI will honor a shared robots.txt signal to help website operators communicate their AI training preferences to participating providers.

10. [Community safety report and new protections for teens](https://openai.com/index/community-safety-report-and-new-protections-for-teens)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 30 Oct 2026 09:00:00 GMT
   - Summary: OpenAI is strengthening violence prevention in ChatGPT with expanded safeguards, earlier interventions, and a new commitment to public safety reporting.

11. [Fair use benefits everyone](https://openai.com/index/fair-use-benefits-everyone)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 30 Oct 2026 00:00:00 GMT
   - Summary: OpenAI shares excerpts from court briefs by creators, academics, accessibility advocates, and legal experts, among others, on how fair use supports AI training and innovation.

12. [An updated Model Spec for more capable and beneficial AI](https://openai.com/index/updated-model-spec)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 29 Oct 2026 17:00:00 GMT
   - Summary: OpenAI’s updated Model Spec outlines five core values to guide more capable AI toward sound judgment, human agency, and faithfulness to human intent.

13. [How we detect frontier model misalignment](https://openai.com/index/how-we-detect-frontier-model-misalignment)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 29 Oct 2026 09:00:00 GMT
   - Summary: OpenAI uses layered monitoring to detect frontier model misalignment and unauthorized agent behavior so responders can intervene before incidents escalate.

14. [How Ropes & Gray is developing AI for transactional diligence](https://openai.com/index/ropes-gray-ai-diligence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 29 Oct 2026 07:00:00 GMT
   - Summary: Ropes & Gray is developing AI for transactional diligence with OpenAI. Lawyers review grouped documents, summaries, and reports before advising clients.

15. [Credit Saison achieves 954% ROI in a ChatGPT Enterprise pilot](https://openai.com/index/credit-saison)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 29 Oct 2026 00:00:00 GMT
   - Summary: Credit Saison’s ChatGPT Enterprise pilot delivered 954% ROI. See how leaders and employees helped turn the results into companywide adoption.

16. [The future of the firm](https://openai.com/index/the-future-of-the-firm)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 28 Oct 2026 10:00:00 GMT
   - Summary: How AI might enter the org chart—beneath, beside, and between us.

17. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

18. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

19. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

20. [nemotron-halloween](https://huggingface.co/blog/nvidia/nemotron-halloween)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 30 Oct 2026 17:57:24 GMT

21. [Granite Switch 4.1.1 — Update models like you update software](https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 13:37:07 GMT

22. [Announcing Project ProtoStar: Making Publicly Funded Science AI-Ready](https://huggingface.co/blog/announcing-project-protostar)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 00:00:00 GMT

23. [Welcome Le Chonk: Mistral Large 4 on Hugging Face](https://huggingface.co/blog/mistral-large4)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 00:00:00 GMT

24. [Introducing AnySpeechRecognizer and AnyDecisionModel: Open Models for Speech and Decisions on Apple Platforms](https://huggingface.co/blog/anydecisionmodel)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 00:00:00 GMT

25. [Build specialized multimodal models with LFM3](https://huggingface.co/blog/LiquidAI/lfm3)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 27 Oct 2026 17:16:52 GMT

26. [Can we trust LLMs to judge whether a research idea is novel?](https://huggingface.co/blog/allenai/novelty-bench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 27 Oct 2026 16:12:42 GMT

27. [Does Your Model Run on AWS Trainium? Look It Up](https://huggingface.co/blog/torch-neuronx-model-support)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 23 Oct 2026 00:00:00 GMT

28. [Turning Database Grading into RL Rewards: Post-Training Agents with ThinkingBox](https://huggingface.co/blog/microsoft/thinkingbox-training)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 22 Oct 2026 22:24:34 GMT

29. [Ensemble forecasting with IBM Granite time-series models](https://huggingface.co/blog/ibm-research/granite-timeseries-ensemble-r1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 22 Oct 2026 07:51:31 GMT

30. [LRMoE: Demand-Side Load Re-Calibration for Efficient MoE Training on Memory-Constrained Nodes](https://arxiv.org/abs/2610.37720)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37720v1 Announce Type: new Abstract: Sparse Mixture-of-Experts (MoE) models offer scalable capacity for Web applications, but uneven routing creates computation and communication bottlenecks. Existing placement and replication methods redistribute this workload, yet additional expert copies compete with token-related buffers for limited GPU memory. We present LRMoE, a memory-aware MoE training system that jointly recalibrates backward demand and balances the retained workload. During forward execution, it plans retention quotas and expert placement under resource constraints while preserving all routed computations. During backpropagation, a load recalibration metric estimates each token-expert pair's contribution to the expert update and selects pairs within these quotas. A capacity-aware routing algorithm distributes retained pairs among eligible instances of their original experts. Physical compaction then forms smaller communication payloads and variable-size grouped GEMMs, reducing backward traffic, computation, and execution-buffer demand. Experiments on Qwen3-30B-A3B and GLM4.5-106B-A12B show that LRMoE reduces cumulative MoE-layer training time to fixed-loss targets by 21.2-44.8% relative to SYMI.

31. [Amortized Localized Posterior Inference for Model Calibration with Application to an Ocean Turbulence Closure](https://arxiv.org/abs/2610.37731)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37731v1 Announce Type: new Abstract: Model discrepancy may prevent a single calibration parameter from reproducing a physical response across the context domain. In addition, uncertainties in observations and contexts affect calibration and must be accounted for and quantified. We construct a family of localized posteriors by weighting observation likelihoods according to their proximity to a target context. Gaussian localization weights incorporate context uncertainty through covariance inflation, with reflection at domain boundaries and an optional correction for uneven context sampling. A conditional normalizing flow approximates the family of posteriors through amortized variational inference. Integrating the localized posteriors under a prescribed context measure gives the marginalized parameter distribution. In a twin experiment with the Branin-Hoo model, we compare global and localized inference under uniform and skewed context distributions. Localization reduces the reported aggregate predictive errors relative to the global posterior. An application to the k-$\epsilon$ turbulence closure in a single-column ocean model, with atmospheric surface forcing as context, shows that localized posterior calibration reduces temperature and zonal-velocity errors relative to deterministic and global-posterior calibration. Both twin experiments are constructed to admit local compensation.

32. [ThinkJev: One Thought, Every Budget for Calibrated Typed Decisions](https://arxiv.org/abs/2610.37732)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37732v1 Announce Type: new Abstract: Many uses of language models end in a typed decision: a choice among a closed set of options, whose probabilities code can act on. Reading those probabilities from one forward pass is fast but often wrong on decisions that take several steps, such as arithmetic, counting, and date comparison. Letting the model think first fixes most of these errors, but costs seconds per decision instead of milliseconds. To pay for thinking only where it helps, ThinkJev builds a fast and a slow system from one open hybrid-thinking model that can answer directly or after a thought. System 1 reads the model's probabilities for the option letters when it answers directly; System 2 reads the same letters after the model has thought on the same cached prompt, so escalating repeats no work and both systems give probabilities over the same options. Because the letters can be read after any number of thought tokens, one sampled thought also gives the answer under every thinking budget. Without training, ThinkJev lets System 1 answer alone only where a statistical test on labeled dev data guarantees that its accepted answers stay under a target error rate. At a 5% target, Qwen3.5-27B answers 24.5% of 8359 test decisions this way with a realized error of 3.9% (Qwen3.5-4B and 9B: 6.5% and 0.0%). For the rest, stopping each thought as soon as its answer is confident reaches 81.6% accuracy, against 82.7% for always thinking, with 72% of the thought tokens. Choosing when to think from System 1's confidence alone saves less, because the decisions System 1 is least sure of are often not the ones thinking fixes. On the public items of JevBench, an independent benchmark of typed-decision services, Qwen3.5-27B thinks on 29.4% and is not distinguishable in accuracy from the two thinking APIs listed (exploratory). Code and data generators are available at https://github.com/ding-xiaolu/ThinkJev.

33. [What Does an Ontology Catch? Curated, LLM-Generated and Data-Derived Ontologies as Checkers of LLM Agents over Knowledge Graphs](https://arxiv.org/abs/2610.37809)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37809v1 Announce Type: new Abstract: LLM agents that answer questions over Web knowledge graphs are increasingly wrapped in checks derived from the graph's ontology, on the assumption that a formal schema makes a reliable judge. Yet a checker can be wrong as well: it can miss errors, and it can flag correct answers and push the agent into "fixing" them. Whether a curated ontology is worth its cost as such a judge, and how it compares with an ontology an LLM writes or a schema mined from the data, is unknown. We make the checker itself the object of study. Across curated, LLM-generated and data-derived ontologies, used as prompt context, as a checker, or both, and across open-weight and proprietary agents on public graphs and a private graph of nearly $10^{9}$ triples, we account for what ontology-derived checks catch and what they wrongly flag. We show how each source trades caught errors against false alarms, how a curated schema used as published can contradict its own data, which errors structural checks miss, and whether combining sources or giving the agent the checker's specific feedback pays off. On UniProt, the curated ontology flags more correct answers than either an ontology derived from the data or one an LLM derives from a summary of the data with masked identifiers. On real agent answers, its flags are only marginally more precise than random flags.

34. [Detecting Covert Collusion between AI Agents through Partner-Outsider Positive Listening](https://arxiv.org/abs/2610.37849)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Sat, 31 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.37849v1 Announce Type: new Abstract: AI agents that share a secret convention can coordinate through messages that look innocent, so a monitor that reads only the messages can miss them. We propose a behavioural test: a partner that uses a code reacts to the exact wording of a message, whereas an uninvolved agent placed in its seat does not. Partner--Outsider Positive Listening (PoPLi) is the difference between the two agents in how much their action changes when the message is reworded with its meaning kept, and it is computed after the fact by replaying logged prompts. In a simulated market with five conditions (no collusion, a joint reward with neutral messages, the same with an openly stated intention, a covert first-letter code, and the code with a stated intention), PoPLi is between 0.48 and 0.59 whenever the code is present (95% intervals all above 0.29) and between -0.10 and -0.01 without it. Message-only monitors did not separate the conditions: one reading the speaker's messages answered "no" in all 50 markets, and one reading every seller's messages flagged 9 of 10 markets with no collusion. PoPLi detects the use of a private channel, not collusion as such, and it cannot detect collusion through incentives alone or codes carried by meaning.

35. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.80; Date: 2026-10-31T17:10:39Z; Popularity: 796 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

36. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-10-29T06:35:40Z; Popularity: 492 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

37. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.38; Date: 2026-10-27T09:25:27Z; Popularity: 384 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

38. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-10-31T11:16:21Z; Popularity: 239 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

39. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

40. [Called to serve: Tech, research, and positive impact](https://www.microsoft.com/en-us/research/podcast/called-to-serve-tech-research-and-positive-impact-with-chris-white/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 20 Oct 2026 16:00:00 +0000
   - Summary: Lab Director Chris White has worked on research challenges with real-world implications—from new approaches to wartime data analysis to tools for combating human trafficking. He talks to program manager Weishung Liu about the influences that led to the work and more. The post Called to serve: Tech, research, and positive impact appeared first on Microsoft Research .

41. [Proof-based general-purpose computing with Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 15 Oct 2026 16:00:00 +0000
   - Summary: Zero-knowledge proofs can verify computing results without rerunning workloads or exposing sensitive data. Magnetar helps bring them into the mainstream with support for standard programming languages, major speed gains, and quantum-resistant security. The post Proof-based general-purpose computing with Magnetar appeared first on Microsoft Research .

42. [Simulating student learning for better AI tutoring](https://www.microsoft.com/en-us/research/blog/simulating-student-learning-for-better-ai-tutoring/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 12 Oct 2026 16:00:00 +0000
   - Summary: StudentSim is a research system for evaluating and improving AI tutoring tools before they are tested with learners. It models how individuals may engage with tutors, giving feedback to improve tutor performance across subjects like chess, writing, and mathematics. The post Simulating student learning for better AI tutoring appeared first on Microsoft Research .

43. [What AI gets wrong and what failure teaches us](https://www.microsoft.com/en-us/research/podcast/what-ai-gets-wrong-and-what-failure-teaches-us/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 06 Oct 2026 16:19:06 +0000
   - Summary: Jennifer Neville did not want to go into computer science—but that’s exactly where she landed. Neville discusses the starts and stops that led to her professional sweet spot and her work identifying “surprising failures” making it hard for AI to handle complexity. The post What AI gets wrong and what failure teaches us appeared first on Microsoft Research .

44. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

45. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.79; Date: 2026-10-31T01:41:54Z; Popularity: 790 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

46. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.45; Date: 2026-10-31T10:36:05Z; Popularity: 1,449 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

47. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.26; Date: 2026-10-31T01:01:46Z; Popularity: 261 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

48. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-10-31T04:07:35Z; Popularity: 57 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

49. [RobLe3/IICP](https://github.com/RobLe3/IICP)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-29T16:46:51Z; Popularity: 7 stars
   - Summary: Open specification and conformance material for intent-based AI agent discovery and routing

50. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

WebAnything: From the Wild Web to Scalable Agent Environments

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2610.37786

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
