# Daily signal sidecar - 2026-09-07

## Selected Signal

- Title: Corporate Language Model (CLM): Transforming Tacit and Fragmented Enterprise Knowledge into a Sovereign, Auditable, and Executable Corporate Intelligence Layer
- URL: https://arxiv.org/abs/2609.04377
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: Corporate Language Model (CLM): Transforming Tacit and Fragmented Enterprise Knowledge into a Sovereign, Auditable, and Executable Corporate Intelligence Layer
- Primary source: https://arxiv.org/abs/2609.04377
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

Total candidates reviewed after duplicate-source filtering: 62

1. [Corporate Language Model (CLM): Transforming Tacit and Fragmented Enterprise Knowledge into a Sovereign, Auditable, and Executable Corporate Intelligence Layer](https://arxiv.org/abs/2609.04377)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04377v1 Announce Type: new Abstract: Enterprise AI deployments fail not from model inadequacy, but because organizations lack a structured substrate encoding how they decide, negotiate, and execute. Generic LLMs carry no firm-specific ontological priors; RAG remains brittle, with no path to executable action; static playbooks encode logic but cannot reason or adapt. This demands an architecture treating tacit-knowledge capture, ontological grounding, sovereign deployment, and auditable actuation as co-designed from the start. This paper introduces the Corporate Language Model (CLM), a framework transforming a firm's structured, unstructured, multimodal, and tacit knowledge into an ontology-grounded enterprise foundation upon which reasoning and governed execution are composed. CLM has five capability planes and four architectural pillars: a Neurosymbolic Mesh coupling generative models with a knowledge graph; a Skill Graph where reusable tactics, personas, objections, and goals are typed and composed; Living Digital Twins modeling functional areas as reasoning surrogates; and a Deep Security Layer enforcing sovereignty, traceability, and human oversight. A Spec-as-Code paradigm bridges grounded intent and executable artifact. CLM is one instantiation of this foundation-centric class. Four contributions follow: CLM is defined as a distinct object of study; the Skill Graph is introduced for compositional explainability by construction; the Wisdom Listener effect is proposed, whereby tacit-capable foundations compound in value with use, connecting to dynamic capabilities and organizational learning; and evidence from a JCI-accredited tertiary hospital in Brazil instantiates three of the six maturity stages under LGPD.

2. [PerfReasoning: How Well Do LLMs Reason on Hardware Performance?](https://arxiv.org/abs/2609.04476)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04476v1 Announce Type: new Abstract: Performance modeling is central to hardware design and software optimization, yet constructing these models requires structured reasoning about computation, data reuse, storage, and movement. We introduce PerfReasoning, a benchmark that evaluates LLMs both as direct performance reasoners and as generators of analytical performance-model code. Given workload, architecture, and mapping specifications, models compare mappings and predict off-chip traffic and buffer requirements. The strongest closed-source models exceed 90% on reasoning-based Q&A, and the best open-weight model reaches 82.4%. However, model construction is substantially harder: while GPT-5.6 Sol exceeds 80% pass rate, all other model configurations average below 15% and vary markedly across runs. Task-specific RL raises a 4B model's mapping-reasoning accuracy by 15.7 points, whereas feedback-free multi-round self-revision prompting is not reliably effective. PerfReasoning exposes the gap between plausible architectural reasoning and reliable performance-model construction. We will publicly release the benchmark to support reproducible evaluation and track future progress.

3. [From Matching Models to Recruiting Agents: A Systematized Narrative Review of AI Recruitment Systems, Evaluation, and Governance](https://arxiv.org/abs/2609.04286)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04286v1 Announce Type: new Abstract: Artificial intelligence in recruitment has shifted the object being automated from profile pairs and ranked lists to multi-stage workflows that retrieve evidence, compare candidates, and support or execute actions. This systematized narrative review traces that development from bilateral retrieval and behavioral ranking through neural person--job matching, large language model (LLM) components, and tool-using recruiting agents. Using a purposive search and coding protocol updated through 23 July 2026, plus targeted updates through 2 September 2026, we organize 40 representative works with supporting industrial and legal sources. This synthesis is not a prevalence estimate. We analyze three coupled transitions: from similarity to reciprocal suitability, from a model to a compound workflow, and from offline prediction to evidence- and productivity-aligned evaluation. Across document understanding, retrieval, ranking, assessment, interviewing, sourcing, and human handoff, we distinguish field-, pair-, list-, case-, trajectory-, and outcome-level evidence. Persistent gaps arise because behavioral labels confound exposure, preference, and qualification; private and synthetic data limit external validity; final-output scores conceal pipeline failures; and, within the coded set, privacy is not directly evaluated and no row jointly evaluates utility, fairness, privacy, and security. These observations describe the coded set rather than the field as a whole. We therefore introduce a staged mapping from evaluation evidence to the strongest defensible claim, together with an agenda for reciprocal, evidence-grounded, temporally controlled, selective, and auditable systems. Progress should be judged by whether workflows retrieve the right evidence, preserve uncertainty, support contestable decisions, and improve outcomes under explicit cost and risk constraints.

4. [Harbor Adapters and Harbor-Index: Infrastructure and a Curated Meta-Dataset for Large-Scale Agentic Evaluation](https://arxiv.org/abs/2609.04298)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04298v1 Announce Type: new Abstract: Evaluating agents on the growing number of agentic benchmarks is challenging because they often require complex environments and agent integrations. We introduce Harbor Adapters, a unified evaluation infrastructure for agentic benchmarks. Our work makes three contributions. First, we develop benchmark adapters that port more than 80 benchmarks to evaluate arbitrary agents, and validate them through rigorous code review and parity experiments. Second, we conduct a large-scale evaluation of 8 models spanning capability tiers across 54 benchmarks; every model is run with Terminus-2 and with one of 3 native harnesses. This enables a broader analysis of agent capabilities and failure modes than was previously possible. Third, we introduce Harbor-Index, a curated set of 82 difficult, diverse, and high-quality tasks spanning 29 benchmarks, refined from the adapted suite through difficulty filtering, AI and human audit, and an audit-and-fix loop. Harbor-Index preserves the challenge and breadth of large-scale agentic evaluations while being affordable to run; no evaluated model-harness configuration exceeds 30% pass rate, and the strongest (GPT-5.5 with Codex) reaches 28.0%. We release the adapters, evaluation results, in-depth analysis, and Harbor-Index as open-source artifacts to support more reliable and comprehensive evaluation of language-model agents.

5. [A Removal Based Approach to Improve LLM Faithfulness at Test-Time](https://arxiv.org/abs/2609.04343)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04343v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly used for consequential decisions, making their explanations an important tool for auditing model behavior. Unfortunately, these explanations can be unfaithful, failing to reflect the actual reasoning underlying the model's decisions. We consider a setting in which an LLM provides both an answer and an explanation in response to a question. We identify two distinct dimensions of unfaithful explanations: incompleteness, meaning that the explanation omits factors that influence the answer, and unsoundness, meaning that the explanation cites factors that did not influence the model's answer. Existing approaches to improving LLM faithfulness include training-time methods, which require access to model weights and extensive computational resources, and test-time methods that largely focus on addressing unsoundness. We introduce a test-time approach that directly targets incompleteness. We remove from the input the concepts not credited in the model's explanation and re-query the model on the reduced input. This eliminates unmentioned influences while preserving the influence of mentioned concepts. Across two datasets, multiple model families, and two independent faithfulness metrics, our approach improves explanation faithfulness compared to both standard prompting and prompting to encourage faithfulness. Our method is model-agnostic and can be applied at inference time without modifying model parameters, providing a flexible mechanism for reducing hidden influences and improving the reliability and safety of LLM-assisted decision making.

6. [Why Better Models Can Create Riskier Systems: Evidence from LLM Agents in Financial Markets](https://arxiv.org/abs/2609.04373)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04373v1 Announce Type: new Abstract: Large language models (LLMs) are being deployed at scale in consequential real-world systems, from financial markets to content moderation to hiring. We show that improving individual model capability can degrade rather than improve system-level outcomes. We hypothesize that shared training and architectures can lead more capable LLMs to behave more similarly, creating correlated actions that do not diversify away. We develop a general framework showing how this correlation creates a non-diversifiable risk floor and test its predictions in financial markets using an agent-based simulation with LLM traders of varying general-purpose capability. We find that: (1) frontier LLMs exhibit significantly correlated behavior that increases with capability; (2) when their shared reasoning is accurate, increasing agent participation reduces market-level risk; and (3) when agents share a common misinformation environment, the same correlated behavior becomes a liability. Together, these results identify a capability paradox: improving individual models does not necessarily produce better system-level outcomes. Whether the same dynamics arise in other domains is an open empirical question.

7. [HarvestBench: Measuring Whether LLM Agents Will Pay to Avoid Killing Animals](https://arxiv.org/abs/2609.04444)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04444v1 Announce Type: new Abstract: Benchmarks for the side effects an agent causes on the way to a goal already exist, but HarvestBench is the first to put a price on avoiding the side effect and to name that side effect as a living creature. It is a farm simulation: LLM sub-agents drive a crew of two tractors through a cooperative corn harvest, with animals in the field. The environment is a reinforcement learning gridworld, every decision is made without memory, and the harm is never named in the goal. When an animal blocks a tractor's route the autopilot stops and asks the model whether to drive on, at no fuel cost, or swerve around it for a posted fuel price. Kills are compared against two controls: rocks, which damage the tractor and are hit under 1% of the time by every model, and hay bales, which are harmless and not alive. Models can also take crops from the neighbor's field instead of their own, a second test of what they treat as moral. Across nine models and 7,201 priced decisions, 3,951 involved an animal rather than a hay bale or a rock. Kill rates range from 0.4% to 98.8%, with Terra and Sol the most merciful and GPT-4o-mini the most cruel, and they are not ordered by capability. Four of six models were sensitive to price at the 5% level, with elasticities from 0.09 to 1.69. All nine drove over wild animals more often than farmed animals on the default map, and the direction held at every map geometry in every model with room to move. The briefing mattered most: under the morality briefing the kill rate was under 6% in five of six reasoning models, and removing it raised the kill rate above 84% in all six. HarvestBench uses no LLM grader. The scorer counts events in the game log, so it is fully reproducible, and it measures what a model will pay to avoid harm rather than what it says about harm.

8. [EXAONE Forecast for Finance](https://arxiv.org/abs/2609.04239)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04239v1 Announce Type: new Abstract: This technical report presents EXAONE Forecast for Finance (EXAONE Finance), a financial time series (TS) foundation model (TSFM) tailored to financial forecasting. Recent TSFMs achieve strong zero-shot performance through large-scale pretraining. However, they are primarily developed for general-domain TS and largely rely on self-attention backbones whose computational cost grows quadratically with sequence length and variate count. Moreover, they assume fully observed inputs and are pretrained on corpora that fail to capture the unique dynamics of financial markets. These limitations hinder their applicability to finance, where long, many-channel, intermittently observed panels are common. To address these challenges, EXAONE Finance adopts an attention-free architecture, replacing self-attention with two simple yet effective linear-time operators: 1) a causal 1D convolution for temporal mixing and 2) a group-aware pooling multi-layer perceptron (MLP) for variate mixing. Furthermore, a masked context augmentation exposes the model to contiguous missing spans during training, improving robustness to the missingness pervasive in financial markets. EXAONE Finance is pretrained on a large-scale financial corpus covering not only equities but also foreign exchange, commodities, crypto-assets, fixed income, and macroeconomic indicators. On FinVerse, a financial forecasting benchmark covering diverse asset classes, EXAONE Finance attains state-of-the-art performance, ranking first across all three evaluation tiers---point-forecast accuracy, cross-sectional asset ranking, and portfolio profitability.

9. [Iris: Climbing to the Search Frontier](https://arxiv.org/abs/2609.04304)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04304v1 Announce Type: new Abstract: We present Iris-mini and Iris-pro, two search agents trained at the 35B-A3B and 397B-A17B scales, together with the data pipeline and training recipe behind them. Tasks are reverse-constructed from the hyperlink structure of a web corpus: we author multi-hop chains over an entity graph distilled from a seed page and its out-links, rewrite every non-answer entity into a descriptive reference so that no clue can be resolved by string matching, and admit only questions that a reference model fails closed-book yet solves once the supporting evidence is supplied. These questions are then turned into trajectories, which are filtered at both the trajectory and the turn level before SFT. The policy is then optimized by RL against live search, with the reward judge and the observation summarizer served inside the training cluster, and with over-long rollouts interrupted at the request level and resumed from their committed prefix at the next step. We alternate the two stages in a procedure we call SFT-RL climbing, returning the hardest solved and most efficient rollouts of each RL round to the next supervised pass. Because inference-time context management is worth more on these benchmarks than most reported differences between systems, we evaluate every benchmark both with and without it, holding the tool set, the context limit, and the judge fixed. All results come from a single ReAct agent, with no sub-agents and no test-time verification. With management enabled, on BrowseComp, BrowseComp-ZH, DeepSearchQA, and HLE the two models reach $82.2/84.8/86.9/52.3$ and $88.6/85.1/92.9/56.4$, the strongest overall results among open-source search agents in their respective parameter ranges. We plan to release the model weights together with the complete recipe for data construction, training, and evaluation.

10. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.86; Date: 2026-09-07T16:39:30Z; Popularity: 2,857 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

11. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

12. [Supporting independent journalism in Ukraine](https://openai.com/index/supporting-independent-journalism-in-ukraine)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 07 Sep 2026 00:00:00 GMT
   - Summary: OpenAI, AIRPPU and WAN-IFRA launch an AI program to help Ukrainian news organizations strengthen innovation, resilience, and independent journalism.

13. [An Alien Mind](https://openai.com/index/an-alien-mind)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 06 Sep 2026 09:00:00 GMT
   - Summary: Jakub Pachocki reflects on increasingly capable AI and the challenge of keeping it aligned. He calls for stronger safeguards and international coordination.

14. [Research acceleration: The view inside OpenAI](https://openai.com/index/research-acceleration-view-inside-openai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 06 Sep 2026 08:00:00 GMT
   - Summary: Inside OpenAI, coding agents are reshaping AI research. Explore early data on agent usage, experiment velocity, task complexity, and research acceleration.

15. [Daybreak for Frontline Defenders: $1B to protect essential services](https://openai.com/index/daybreak-for-frontline-defenders)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 03 Sep 2026 13:15:00 GMT
   - Summary: OpenAI introduces Daybreak for Frontline Defenders. A $1 billion commitment expands access to frontier cyber AI, training, and support for essential services.

16. [Playco cut manual fixes 50% prototyping games with GPT-6 Astra](https://openai.com/index/playco-game-prototyping-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 03 Sep 2026 12:00:00 GMT
   - Summary: Using GPT-6 Astra, Playco built three themed game prototypes from one grey box foundation and reported 50% fewer manual fixes than with the previous model.

17. [GPT-6 Astra: A new generation of intelligence](https://openai.com/index/gpt-6-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 03 Sep 2026 11:00:00 GMT
   - Summary: Introducing GPT-6 Astra, our most intelligent and aligned model yet, with state-of-the-art capabilities across computer use, coding, cybersecurity, and science.

18. [Safety overview: GPT-6 Astra](https://openai.com/index/safety-overview-gpt-6-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT
   - Summary: GPT-6 Astra is our most capable broadly deployed model and our first to reach the Critical level of cybersecurity capability under our Preparedness Framework.

19. [ATV Big Air Tour turned 3 days of work into 3 hours with ChatGPT](https://openai.com/index/atv-big-air-tour)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 02 Sep 2026 12:00:00 GMT
   - Summary: ATV Big Air Tour uses ChatGPT Work to speed up marketing, merchandising, and more. It even turned merchandise photos into an inventory website in 15 minutes.

20. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

21. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

22. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

25. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

26. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

27. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

28. [Real-Time Intelligence with IBM Time Series Models on Confluent](https://huggingface.co/blog/ibm-research/real-time-intelligence)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 02 Sep 2026 13:49:14 GMT

29. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

30. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

31. [The Open ASR Leaderboard Adds Its First Global South Language](https://huggingface.co/blog/open-asr-leaderboard-global-south)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 GMT

32. [Training and Finetuning Multi-Vector Embedding Models with Sentence Transformers](https://huggingface.co/blog/train-multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT

33. [Granite 4.2 LLMs: How They&apos;re Built](https://huggingface.co/blog/ibm-granite/granite-4-2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 15:14:14 GMT

34. [Data-Optimized Contingency Screening: A Machine Learning Approach to Power System Security](https://arxiv.org/abs/2609.04300)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04300v1 Announce Type: new Abstract: Ensuring the security of the power system is essential for stability and reliability, especially in the event of disruption. Effective classification of contingency in power systems enables proactive decision-making and mitigates large-scale breakdowns and failures. This study explores the use of machine learning algorithms to classify security levels of contingencies in power systems into safe, moderate or severe classes. For this approach, Newton-Raphson load flow method extracts system data from contingency scenarios, using Overall Performance Index (OPI) as safety measure. For data pre-processing, Synthetic Minority Over-Sampling Technique (SMOTE) and Principal Component Analysis (PCA) is used to address class imbalance and reduce dimensionality, respectively. K-Nearest Neighbours (KNN), Random Forest (RF) and Support Vector Machines (SVM) is trained and evaluated on datasets generated through N-k contingency scenarios for k equal 1, 2, and 3 on IEEE-14 and IEEE-30 bus systems using four hybrid pre-processing configurations: normalized, SMOTE-balanced, PCA-transformed, and a combined SMOTE PCA-transformed. Performance is assessed by precision, recall and F1 score, with priority given to the severe contingency classes. The RF achieved the highest F1 scores of 0.97 in IEEE-30 and 0.86 in IEEE-14, SVM benefits significantly from PCA and improves the accuracy of the classification, while KNN is best suited for SMOTE and PCA conversion. The findings show that PCA contributes more than SMOTE to the overall performance of the model. However, SMOTE improves recall but can introduce false positives and is therefore a compromise of accuracy. This study highlights machine learning as a scalable and powerful alternative to traditional contingency analysis, which improves the assessment of security in real time.

35. [FUSION: a skill-based research agent for publicly obtainable nuclear-physics codes](https://arxiv.org/abs/2609.04742)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04742v1 Announce Type: cross Abstract: Running an unfamiliar nuclear-physics code is rarely difficult because of the physics alone. One must find and build the program, learn its input conventions, and decide whether a plausible output is actually correct. A general-purpose coding agent helps with the first two tasks but may make the last one harder: it can write an input file that runs with the wrong physical convention. FUSION addresses this problem with code-specific skills. A skill obtains the code from its public source, starts from a verified input, runs and parses the calculation, records known failure modes, and must reproduce a stated benchmark to a stated tolerance before reporting a result. The current release covers twenty codes, spanning optical models and reactions, nuclear structure, fission and statistical models, astrophysics and R-matrix analysis, and heavy-ion transport. It also includes an offline, searchable collection of 61 167 pages derived from the nucl-th literature. User notes and credentials remain outside the public repository. FUSION is available under the MIT license at https://github.com/jinleiphys/FUSION; documentation is at https://vibeinscience.com. Here I describe the design, the checks behind the current release, and one complete calculation from input to comparison with measured data.

36. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.83; Date: 2026-09-07T16:02:50Z; Popularity: 1,828 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

37. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-09-04T04:41:17Z; Popularity: 482 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

38. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-06T02:17:32Z; Popularity: 361 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

39. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-09-07T10:18:05Z; Popularity: 241 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

40. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

41. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

42. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

43. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

44. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

45. [ProToMEx: Rapid, Interpretable Explanations via Structured Representations](https://arxiv.org/abs/2609.04265)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04265v1 Announce Type: new Abstract: Existing post-hoc explainers for machine learning classifiers primarily focus on feature attribution, assigning importance scores to individual features. While valuable, this approach struggles to articulate the complex, combinatorial patterns that often drive a model's decision-making process. To overcome this limitation, we introduce ProToMEx, a new paradigm for explainability that leverages Probabilistic Topic Models (PTMs). Our model-agnostic framework learns latent ''topics'' that represent distinct, high-level reasons for a classification, moving beyond simple feature importance to reveal underlying semantic structures. ProToMEx naturally provides both global explanations of a model's overall behaviour and local explanations that can disentangle multiple co-existing reasons for a specific prediction. We demonstrate empirically that ProToMEx not only produces explanations of comparable fidelity to popular methods like SHAP and LIME but also drastically reduces the amortised computational cost of generating local explanations, making it highly suitable for real-time applications. Specifically, we show that ProToMEx is ~30-40x faster than SHAP and LIME over standardised tabular datasets and synthetic datasets.

46. [A Data Fusion Framework for Grounding Aerospace Surrogate Model via Experimental Wind-Tunnel Observations](https://arxiv.org/abs/2609.04267)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04267v1 Announce Type: new Abstract: Aerodynamic surrogate models trained on high-fidelity CFD data reproduce numerical predictions of both scalar outputs and entire fields accurately, yet their predictive fidelity is limited by systematic discrepancies between CFD and experimental observations. We present an experimentally grounded correction framework that adapts a CFD-trained deep learning surrogate using wind-tunnel PSP measurements. A Geotransolver surrogate trained on 2,300 high-fidelity CFD simulations of the NASA CRM wing-body configuration, spanning geometric variation, Mach 0.70-0.85, and angles of attack 0 to 4 degrees, reproduces the CFD integrated aerodynamic forces and pitching moment to R2 > 0.99 but does not match the experimental data. To incorporate experimental information without retraining the surrogate, a correction network is trained on spatially registered PSP measurements at two freestream Mach numbers (0.70 and 0.85) across the same angle-of-attack range, learning the discrepancy between the surrogate-predicted and experimentally measured surface-pressure distributions. At Mach 0.85 the correction substantially improves agreement with PSP, particularly at the wing suction peak, shock location, and subsequent pressure recovery, reducing both the magnitude of the prediction error and the fraction of wetted surface on which it exceeds 0.05 in Cp, and it does so from a limited experimental dataset without modifying the pretrained surrogate parameters. On held-out angles of attack the grounded surrogate agrees with measurement to within 2.3-2.7% of the measured Cp range, and outperforms direct interpolation between the measured conditions at every state tested. Experimental measurements can therefore ground a large-scale simulation-trained surrogate by learning systematic CFD-to-experiment discrepancies while preserving its generalization capability and computational efficiency.

47. [Evaluating Large Language Models for Forced Outage Risk Prediction: Benefits and Comparison to Machine Learning](https://arxiv.org/abs/2609.04272)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04272v1 Announce Type: new Abstract: This study examines the ability of large language models (LLMs) to predict the risk of weather-related forced outages in the distribution grid in a zero-shot framework, without labeled training data. The problem is formulated as a binary severity classification task across three forecast horizons (3h, 6h, 12h), using six years of outage records and high-resolution weather data for a utility service area in central Texas. Four zero-shot LLMs are benchmarked against two supervised classifiers across two input configurations: one using current weather observations and the other using weather forecast data. Results show that supervised models outperform LLMs on macro-F1 and precision, while newer LLM generations achieve competitive scores. Beyond accuracy, LLMs offer complementary strengths in actionable reasoning and geographic scalability, suggesting that combining them with supervised models may be the best practice.

48. [BER-PEF: Unified Human Mobility Predictability Evaluation via Bayes Error Rate Estimation](https://arxiv.org/abs/2609.04292)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04292v1 Announce Type: new Abstract: Human mobility predictability concerns the best prediction performance attainable from a given target and input information, but its ground truth is not directly observable on real mobility data. We present BER-PEF, a Bayes-error-rate-based framework that converts BER estimation into mobility predictability estimation and provides a unified protocol for comparing estimators without observable ground truth. The framework maps symbolic sequences, numeric trajectories, contextual features, and learned representations into a common feature--label space, then evaluates estimator outputs along controlled perturbation curves against a shared predictability reference interval by measuring deviations below the interval, above the interval, and across the full interval. Experiments on Foursquare NYC and TKY, GeoLife, and T-Drive show that several BER-based estimators achieve lower reference discrepancy than existing predictability methods on symbolic sequences and numeric trajectories, while their estimates track changes in empirical prediction performance under perturbation. Additional analyses show that contextual inputs and multiple structured representations can be evaluated under the same protocol, and that aggregating evidence across multiple perturbation levels provides a more reliable basis for estimator selection than relying on a single unperturbed observation. BER-PEF therefore offers a unified and verifiable path for evaluating predictability estimators on heterogeneous mobility data when ground-truth predictability is unavailable.

49. [Reduced Precision Diffusion Synthetic Acceleration for S$_N$ Neutron Transport in LLNL's ARDRA using Hypre](https://arxiv.org/abs/2609.04451)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04451v1 Announce Type: new Abstract: Fast solution times in production discrete ordinates transport codes often require the use of diffusion synthetic acceleration (DSA). A good implementation of DSA will substantially reduce the number of iterations to converge the transport solution at the cost of solving a diffusion-like linear system at each iteration. Often fewer transport iterations will lead to smaller times to solution. Recent work has shown the promise of reduced precision preconditioning. Time and memory cost can be decreased as long as the reduced precision does not substantially degrade the convergence behavior of the higher precision linear system being solved. In this paper, we discuss the algorithmic implications of accelerating transport iterations in double precision (64 bit) while using a reduced precision (32 bit) DSA solve. We initially implement a stand alone code to investigate any theoretical limitations of reduced precision DSA in slabs. Then we implement reduced precision DSA in ARDRA, Lawrence Livermore National Laboratory's (LLNL) discrete ordinance neutral particle transport code, coupled with {\it hypre}, LLNL's scalable linear solver and multigrid methods library capable of mixed precision linear solves Then we solve various neutron transport problems of interest. We find that in most circumstances, DSA acceleration in reduced precision has little to no impact on the acceleration properties of DSA when used with source iteration in most circumstances. However, as tighter tolerances are required, reduced precision DSA may fail to successfully accelerate the transport solve and increase time to solution.

50. [Learning multistate kinetics with a variational multistate committor network](https://arxiv.org/abs/2609.04449)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04449v1 Announce Type: cross Abstract: The long-time dynamics of complex molecular systems often involves rare transitions across networks of metastable states. Building on transition-path theory, which provides a rigorous framework for describing rare transitions between two metastable states, we introduce the variational multistate committor network (VMCN), a neural framework that learns the probabilities of reaching each metastable state directly from molecular simulation data. From this representation, VMCN identifies state-specific commitment, candidate transition regions and committor-consistent pathways between state pairs, and an effective kinetic network characterized by transition rates. The model is trained using finite time-lag trajectory data together with boundary conditions defined on conservative state cores. Applications to a triple-well potential, trialanine isomerization, and the $c$--ring rotation in the V$_{\rm o}$ domain of a vacuolar ATPase show that VMCN recovers metastable organization, provides committor-consistent descriptions of transition mechanisms, and estimates state-to-state kinetics. VMCN further provides diagnostics for incomplete state decompositions and enables adaptive exploration of candidate metastable states and their connecting regions. By integrating VMCN with generative committor-guided path sampling (Gen-COMPAS) for chignolin, we start from two end point structures, identify a misfolded state and a candidate folding intermediate, and we direct subsequent sampling toward the resulting multistate transition network.

51. [Learning Memory-Dependent Neural Network Correlation Potentials for Accurate Electron Dynamics](https://arxiv.org/abs/2609.04527)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04527v1 Announce Type: cross Abstract: Time-dependent density functional theory, though exact in theory, is in practice applied in an adiabatic approximation using exchange-correlation functionals with only local temporal dependence. Simultaneously, the exact correlation potential formally depends on, among other quantities, the time-history of electron densities. Here we develop a framework to learn neural network models of correlation functionals that feature explicit memory-dependence. Our framework includes two different approaches, both linked through their use of adjoint-based optimization. One approach decouples the learning of the functional from inversion to find ground truth values of the correlation potential. The other approach learns the functional directly without requiring inversion. We apply these methods to modeling the electron dynamics of two-electron systems in two spatial dimensions. In both cases, our methods yield correlation functionals with low test set propagation error, outperforming standard local density and generalized gradient approximation functionals by one to two orders of magnitude. Overall, our framework points at one strategy to move beyond the adiabatic approximation and develop memory-dependent correlation functionals that yield accurate propagation for excited state and/or non-equilibrium dynamics.

52. [An Energy-Based Conservative-Dissipative Latent Neural Evolution Operator for Magnetization Dynamics](https://arxiv.org/abs/2609.04530)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04530v1 Announce Type: cross Abstract: We develop an energy-based reduced-order model for micromagnetic magnetization dynamics that couples a convolutional autoencoder to a structured latent neural ordinary differential equation. Motivated by the precessional-dissipative structure of the Landau-Lifshitz-Gilbert equation, the latent vector field is generated from the gradient of a learned scalar potential through an antisymmetric operator and a symmetric positive-semidefinite dissipative operator. This potential is learned in nonunique latent coordinates and is not identified with the Gibbs free energy, but decreases monotonically along autonomous continuous-time solutions, while the antisymmetric component permits motion along its level sets. The encoder, decoder, latent energy, and operators are trained jointly on short trajectory windows using latent and decoded-rollout losses alone, without time-derivative supervision, physical-energy labels, or dissipation penalties. At inference, an initial state is encoded once, evolved in latent space, and decoded only at the requested output times, enabling substantially cheaper trajectory prediction than the micromagnetic solver used to generate the training data. We compare quadratic, deep, and additive deep-quadratic latent energies on two datasets parameterized by field amplitude and generated for the two applied-field directions of the NIST $\mu$MAG Standard Problem 4. Dissipative-only and antisymmetric-dissipative models achieve comparable accuracy on short training-style windows but differ substantially on uninterrupted rollouts, for which the antisymmetric-dissipative models provide markedly more accurate trajectory predictions. The deep-quadratic energy gives the best overall accuracy for both field directions and exhibits slower error growth when rollouts are extended to twice the training horizon.

53. [A class of high-order discontinuous-Galerkin methods satisfying infinitely many entropy conditions with provable error estimates and strong convergence for general nonlinear conservation laws](https://arxiv.org/abs/2609.04687)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04687v1 Announce Type: cross Abstract: We propose a novel framework for deriving semi-discrete discontinuous-Galerkin (DG) methods using operator semigroups for scalar conservation laws, then apply it to construct a class of high-order OFDG-type schemes [13] satisfying infinitely many local entropy inequalities with general E-fluxes on non-uniform meshes. Such schemes are further generalized to systems of conservation laws in any number of space dimensions by using entropy stable numerical fluxes in the sense of [1]. Finally, we prove optimal error estimates for smooth solutions to nonlinear scalar conservation laws, and prove strong convergence for discontinuous solutions to strictly convex conservation laws via compensated compactness.

54. [Voltage-embedded equivariant machine learning potential for open system simulations](https://arxiv.org/abs/2609.04696)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04696v1 Announce Type: cross Abstract: Modeling electrochemical interfaces under operational non-equilibrium conditions is vital for energy technologies but remains bottlenecked by the expensive cost of ab initio methods. Current machine learning potentials, largely designed for closed systems under homogeneous electric fields, are limited in open quantum transport applications. To overcome this, we present an E(3)-equivariant graph neural network that embeds voltage bias for open-system simulations. Our approach decouples the system energy and forces into zero-bias and bias-dependent contributions, assigning distinct vector encodings to electrode and scattering-region atoms to capture non-equilibrium conditions. Trained on limited discrete bias data, the model achieves high predictive accuracy and robust extrapolation transferability. When applied to a lithium/water interface, our model successfully captures the field-induced dynamic reorientation of water molecules and reproduces asymmetric electrochemical behavior at different electrodes.

55. [Frugal Effective Models for Nanophotonic Scattering: Optimizing Global Polarizability Matrices for Metasurface Design](https://arxiv.org/abs/2609.04863)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04863v1 Announce Type: cross Abstract: Accurate nano-photonics simulations of large scale devices like optical metasurfaces require high accuracy reduced models for the device constituents. We present an automated framework for the optimization of Global Polarizability Matrix (GPM) models, which represent a complex scatterer as a small set of non-local effective dipoles. Our goal is to find the most frugal model that reproduces a particle's scattering response within a user-defined accuracy. The method iteratively removes redundant dipoles while re-adapting the positions of the remaining ones via gradient based optimization, stopping at the smallest model that still meets the target. Automatic differentiation, combined with an untrained neural network that reparametrizes the dipole positions, helps to place the dipoles at physically intuitive locations. We demonstrate the versatility of this approach across diverse geometries, from two dimensional ridges over simple spheres to complex three-dimensional particles, achieving compression factors of typically two orders of magnitude compared to full-wave simulations, for target accuracies in the order of few percent. We finally demonstrate how accurate, frugal effective models enable large-scale meta-deflector optimization without periodic approximations. This robust recipe for constructing frugal effective models paves the way for the rapid simulation of large-scale photonic assemblies, required for example for metasurface design.

56. [Nuclear quantum effects in the thermal conductivity of solid hydrogen](https://arxiv.org/abs/2609.04955)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.04955v1 Announce Type: cross Abstract: We use a combination of path integral and lattice dynamics methods to calculate the thermal conductivity of solid parahydrogen. Path integral molecular dynamics is first used to calculate a centroid potential of mean force at each temperature, on which a harmonic phonon basis is constructed using the finite displacement method. We then calculate anharmonic force constants on the centroid potential and solve the linearised phonon Boltzmann transport equation for the thermal conductivity. The resulting renormalised phonon dispersion curves, heat capacity, and thermal conductivity are all in remarkably good agreement with experimental measurements. We find that the heat transport is dominated by collective relaxon modes at low temperatures and cannot be captured by making the phonon relaxation time approximation. Indeed, quantitative agreement with the experimental thermal conductivity is only achieved when the nuclear quantum effects in the centroid potential of mean force, phonon boundary scattering, and hydrodynamic transport are all explicitly considered. This is also likely to be the case for other quantum crystals.

57. [Impact of Data Loss in Postprocessing on Training and Inference of Quantum Neural Networks](https://arxiv.org/abs/2609.05060)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 07 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.05060v1 Announce Type: cross Abstract: As quantum hardware scales to larger devices, the classical software layers that interface with it must evolve in step. Postprocessing routines developed and tested primarily in simulator settings can encode assumptions that no longer hold on utility-scale devices, leading to data loss that can be difficult to detect from high-level model outputs alone. We present a case study of \texttt{SamplerQNN}, the sampling-based quantum neural network class in the Qiskit Machine Learning library. Here, the postprocessing method applies a filter that assumes measurement bit-strings are in virtual qubit space. On our quantum hardware runs, where bit-strings span over 100 physical qubits, this filter led to the loss of 85 to 99.6\% of valid measurement shots, depending on the transpiler's qubit placement. The resulting probability vector is unnormalised, allowing distorted prediction and loss values to propagate through the model without an API-level warning. We demonstrate the impact across five experiments on two IBM backends: for inference, accuracy drops from 0.94 to 0.39 on the same raw measurements; for training, the loss signal is compressed by 22 to 27$\times$, substantially reducing the sensitivity of the optimiser to the objective landscape. The behaviour arises in all released versions of the library (0.8.4 to 0.9.0). We implemented a layout-based marginalisation fix, merged into the GitHub codebase as Pull Request \#1041, that makes \texttt{SamplerQNN} postprocessing forward-compatible with current and upcoming hardware.

58. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

59. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.74; Date: 2026-09-07T13:14:24Z; Popularity: 739 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

60. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.21; Date: 2026-09-07T14:14:14Z; Popularity: 214 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

61. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-06T09:53:21Z; Popularity: 122 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

62. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Corporate Language Model (CLM): Transforming Tacit and Fragmented Enterprise Knowledge into a Sovereign, Auditable, and Executable Corporate Intelligence Layer

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.04377

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
