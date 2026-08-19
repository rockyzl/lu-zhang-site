# Daily signal sidecar - 2026-08-19

## Selected Signal

- Title: The Problem Is the Problem: Towards Scalable Mathematical Discovery
- URL: https://arxiv.org/abs/2608.16977
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: The Problem Is the Problem: Towards Scalable Mathematical Discovery
- Primary source: https://arxiv.org/abs/2608.16977
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

Total candidates reviewed after duplicate-source filtering: 67

1. [The Problem Is the Problem: Towards Scalable Mathematical Discovery](https://arxiv.org/abs/2608.16977)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16977v1 Announce Type: new Abstract: AI systems are increasingly capable of contributing to mathematical research. In research practice, frontier-model reasoning is a limited resource, and expert mathematical review is even more sharply constrained. Allocating these scarce resources well is therefore central to making AI-assisted mathematical discovery efficient. In most current AI-for-math workflows, human effort is concentrated at the beginning and end, in selecting suitable research problems and later reviewing the resulting artifacts. These two stages are becoming bottlenecks for research-level mathematics. We address them by proposing a new human-AI discovery paradigm. The human input is no longer a single problem selected in advance, but a research direction in which the experts have interest and expertise. The system then searches a broad literature corpus for candidate problems in that direction. Inspired by search and recommender systems, we build Find, Attempt, and Recommend (FAR), a literature-to-review cascade that automates the search for suitable problems and focuses human attention on artifacts that have passed several stages of filtering. In a combinatorics pilot, the pipeline starts from 5,245 combinatorics papers, recovers 6,453 candidate conjectures or open problems, and filters them to 4,717 apparently well-posed and still-open conjectures. Subsequent reasoning and automated triage stages surface 598 potential resolutions and select 77 items for author-team review. Among them, we identify many interesting discoveries, including results on conjectures and questions of Davies--Jenssen--Perkins--Roberts, Erd\H{o}s--Straus, Ikenmeyer--Pak--Panova, and Lund--Saraf--Wolf. These results demonstrate the effectiveness of this new mode of human-AI collaboration for mathematical discovery.

2. [Runtime Governance for Agentic AI: Action-Boundary Control with Trusted Provenance and Fail-Closed Execution](https://arxiv.org/abs/2608.16891)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16891v1 Announce Type: new Abstract: Agentic AI systems request tool actions that can modify files, send messages, launch jobs, or change workflow state. This shifts the safety problem from harmful text generation to harmful operational side effects. Prompt-level governance can shape model behavior, but it does not create an execution boundary. We introduce Aegis, a runtime governance system that treats model outputs as action proposals and mediates them through a trusted decision layer before tool execution. The model proposes; the trusted runtime decides. Aegis evaluates proposals against active policy state, resolves provenance server-side, fails closed under uncertainty, and routes selected cases through Senate-style settlement, a quorum- based non-unilateral authorization path. We evaluate Aegis on a repeated sandbox corpus spanning five run families, 42 tasks, three conditions, and ten repeats per family. Across 6,300 rows, prompt-policy conditioning produced 79 risky comparator-path leakage rows. Across 2,100 Aegis-governed rows, the system recorded zero governed mock-tool applications and zero governed risky side-effect completions. All 1,832 Aegis-attempted governed rows preserved trusted Aegis-resolved provenance, and all 1,019 Senate-settled rows had quorum and final signed tally evidence. These results do not prove general autonomous-agent safety. They support the narrower systems claim that, in this evaluated sandbox corpus, runtime action-boundary governance prevented observed risky proposals from becoming governed side effects.

3. [feng72013-ui/Multimodal-Agentic-RAG-for-Science](https://github.com/feng72013-ui/Multimodal-Agentic-RAG-for-Science)
   - Source: GitHub repository search; Group: Open source; Score: 5.01; Date: 2026-08-18T07:58:35Z; Popularity: 7 stars
   - Summary: 面向科研场景的多模态多智能体 RAG 助手，支持将 PDF、图片和文本构建为领域知识库，并通过智能体协作完成文献问答、图表理解、论文总结、方法对比、文献调研和科研创意评审。

4. [How NVIDIA scales expertise with ChatGPT Work](https://openai.com/index/nvidia/chatgpt-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 18 Aug 2026 00:00:00 GMT
   - Summary: NVIDIA teams use ChatGPT Work to reduce manual tasks, connect fast-moving signals, and scale successful workflows globally.

5. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

6. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

7. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

8. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

9. [Record, train, and deploy from one place with Strands Agents, LeRobot, and Hugging Face Storage Buckets](https://huggingface.co/blog/amazon/strands-lerobot-streaming-data-loop)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 13 Aug 2026 17:16:04 GMT

10. [GxP-Agent: Process-DAG Topology for Reliable Clinical Trial Programming with LLM Agents](https://arxiv.org/abs/2608.16890)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16890v1 Announce Type: new Abstract: Clinical trial programming -- transforming study protocols into analysis-ready datasets under CDISC standards -- is a bottleneck in regulatory submissions, yet LLM-based code generation fails catastrophically on this task: across 11 single-shot attempts with five frontier models, none produces a valid subject-level analysis dataset. We introduce GxP-Agent, a multi-agent system that encodes regulatory process ordering as a directed acyclic graph (DAG), decomposing monolithic dataset generation into 15 domain-specific nodes executed by worker agents with pharmaverse skill context, validation gates, and conditional retry. On CDISC-Bench, a new execution-based benchmark built from the FDA pilot submission CDISCPilot01 (254 subjects, 49 ground-truth ADSL variables), GxP-Agent with Claude Sonnet 4.6 achieves 100% structural match (49/49 variables, 254 correct records) across three independent runs, compared to 59.2% for the best retrieval-augmented baseline and 0% for all single-agent and flat multi-agent approaches. The DAG topology also enables weaker models: GPT-4.1 achieves 59.2% mean structural match under the same DAG, where it scores 0% under every other architecture. The approach generalizes to ADAE (adverse events; 9-node branching DAG, 55 variables, 1,191 records), achieving 100% structural match on the first attempt. These results demonstrate that encoding domain process knowledge as graph topology -- rather than relying on LLM reasoning alone -- is a key enabler for reliable, GxP-compliant clinical trial programming.

11. [The Price of Thinking: Reasoning Effort as a Model-Specific API Contract](https://arxiv.org/abs/2608.16956)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16956v1 Announce Type: new Abstract: API buyers purchase a dated contract, not a model name alone: the contract includes the requested and served model, reasoning-effort term or its omission, output rail, service product, prompt, and price schedule. We study the reasoning-effort term through a registered paired contrast of Sonnet 5 with explicit high effort against the same model with effort omitted, using 30 AIME 2026 items and five calls per item. Every paid attempt was assigned one frozen terminal category, and inference resampled items while retaining their repeated calls. Mean delivered cost was \$0.01031 per call higher under the explicit-high contract than under the omitted contract [+\$0.00204, +\$0.01974]. The corresponding accuracy contrast was +0.0133 [-0.0267, +0.0467]; we did not detect an accuracy difference, and the interval permits a gain of up to 4.67 percentage points that this design cannot rule out. Cost per correct answer was \$0.08665 under the high-effort contract and \$0.07662 under the omitted contract, as registered point estimates. A dated contract census, Models-API metadata, and preregistered raw-response probes further documented model-specific omission semantics, including within a provider; claims remained at documentation grade when raw structure was indeterminate. The request registry, parser, terminal taxonomy, statistical plan, and analysis pipeline were frozen before outcomes were examined; the resulting claims are bounded to the model, task, and collection date studied.

12. [A decodability criterion predicts when hidden-state selection beats majority voting in large language models](https://arxiv.org/abs/2608.17124)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17124v1 Announce Type: new Abstract: Combining the answers a large language model (LLM) samples for a question into one decision is a test-time information fusion problem, usually solved by majority voting. Voting is unreliable on difficult questions, where the sampled answers share correlated errors, so the wrong answer can win and drawing more samples makes the decision worse. Selecting a candidate by reading a correctness signal from the model's hidden states is a promising alternative, but its accuracy varies across models and tasks, and no measure indicates when it can be trusted. In this paper, we propose CASE (Correctness-Axis SElection), a dynamic selection combiner that trains a linear gate on the answer-token hidden state and selects the highest-scoring candidate. Its main contribution is decodability, a leakage-free measure of how well the gate ranks a question's correct candidates above its incorrect ones, which predicts whether hidden-state selection will outperform voting. A conventional probe appears accurate only because of question-identity leakage, which vanishes under question-grouped evaluation. On held-out data, decodability predicts the accuracy gain of selection over voting with a Pearson correlation r=0.75 and a decision threshold near AUC=0.60. Across general and medical LLMs, CASE improves over voting by up to 19 points on medium-difficulty questions and 16.8 points on hard questions. Decodability depends on the aligned knowledge a model must recall, not on its scale, and its prediction transfers to an unseen scientific domain within 3.8 points. It thus provides a practical criterion, measurable in advance for a given model and task, for choosing between learned selection and majority voting.

13. [Mr.Dec: Daily-Scale Longitudinal Multimodal Modeling for 30-Day Readmission Prediction](https://arxiv.org/abs/2608.16929)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16929v1 Announce Type: new Abstract: Predicting 30-day hospital readmission is essential for assessing patient stability and optimizing healthcare resources. As clinical risk evolves with the accumulation of evidence during hospitalization, capturing these dynamic trajectories is essential. However, many existing approaches compress the complex longitudinal history into fixed representations, often losing the granular, day-level clinical signals that reflect a patient's evolving physiological state. To address this, we propose Mr.Dec (Multimodal Readmission-risk prediction Decoder), which models each admission as a natural chronological sequence of daily multimodal events. By leveraging a Transformer Decoder, Mr.Dec integrates daily Electronic Health Record(EHR) updates and intermittent Chest X-ray(CXR) findings in a time-aligned stream, reflecting the actual clinical workflow. To ensure robustness, we utilize Disease-Specific Supervised Contrastive Learning as an auxiliary regularization to induce a diagnosis-aware structure in the latent space. Evaluations on the MIMIC-IV and MIMIC-CXR datasets show that Mr.Dec achieves state-of-the-art performance by preserving the integrity of the clinical sequence. Furthermore, our model identifies "Critical Days" within an admission, providing actionable and clinically grounded interpretations for real-time risk stratification. Code is available at: https://github.com/yejix-ai/MR.DEC

14. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.73; Date: 2026-08-19T13:24:25Z; Popularity: 2,731 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

15. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

16. [ChatGPT Ads expands across Europe](https://openai.com/index/chatgpt-ads-expands-across-europe)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 22:00:00 GMT
   - Summary: ChatGPT Ads is expanding to 31 European markets. Learn how advertisers can reach people as they explore, compare options, and make decisions.

17. [Strengthening democratic oversight in national security](https://openai.com/index/strengthening-democratic-oversight-in-national-security)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 19:00:00 GMT
   - Summary: OpenAI launches an initiative to strengthen democratic oversight of AI in national security, supporting government institutions with tools, training, and expertise.

18. [Partnering with CodeAI to prepare the first AI generation](https://openai.com/index/partnering-with-codeai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: OpenAI and CodeAI are partnering to help students build AI literacy, think critically about AI, and develop the skills to use and shape it responsibly.

19. [Pacing model development in an era of cyber-critical capabilities](https://openai.com/index/pacing-model-development-cyber-capabilities)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: OpenAI is strengthening monitoring, alignment, and security for frontier AI models. See how new safeguards are guiding the pace of model development.

20. [Introducing ChatGPT for Teens: Built for learning, backed by protections](https://openai.com/index/chatgpt-for-teens)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 11:00:00 GMT
   - Summary: ChatGPT for Teens helps teens learn, think critically, and use AI with confidence, with stronger built-in protections, healthy-use features, and additional controls for parents.

21. [Asana cleared 5 years of engineering work in 2 weeks with Codex](https://openai.com/index/asana)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 18 Aug 2026 07:00:00 GMT
   - Summary: Asana used OpenAI Codex to replace an outdated testing system in two weeks, completing work expected to take five years for about $12K.

22. [The Defender’s Window](https://openai.com/index/the-defenders-window)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 17 Aug 2026 05:30:00 GMT
   - Summary: AI is reshaping cybersecurity for attackers and defenders alike. Learn how OpenAI is strengthening its defenses and what security teams can do now.

23. [OpenAI joins PORTS-Pike project](https://openai.com/index/openai-joins-ports-pike-project)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 17 Aug 2026 05:00:00 GMT
   - Summary: OpenAI joins PORTS-Pike project, expanding community investment and supporting thousands of Southern Ohio jobs

24. [New policy ideas for the Intelligence Age](https://openai.com/index/new-policy-ideas-for-the-intelligence-age)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 17 Aug 2026 03:15:00 GMT
   - Summary: OpenAI funds 14 independent projects exploring new AI policy ideas to expand economic opportunity and strengthen societal resilience in the Intelligence Age.

25. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

26. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

27. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

28. [LFM2.5 Q4\_0 Checkpoints from Quantization-Aware Distillation](https://huggingface.co/blog/LiquidAI/qad)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 19 Aug 2026 13:48:49 GMT

29. [How Much Memory Does Your Agent Actually Need?](https://huggingface.co/blog/ibm-research/altk-evolve-hmm)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 18:09:38 GMT

30. [Multi-Vector (Late Interaction) Embedding Models with Sentence Transformers](https://huggingface.co/blog/multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 00:00:00 GMT

31. [Same Cluster, 33 Points More Utilization: What Changed Was the Order](https://huggingface.co/blog/Dharma-AI/gpu-management-pt2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 17 Aug 2026 19:46:21 GMT

32. [State of Open Models: Summer 2026 Observations](https://huggingface.co/blog/state-of-open-models-summer-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 14 Aug 2026 00:00:00 GMT

33. [What We Learned by Reproducing 2,200 papers from ICML](https://huggingface.co/blog/icml-2026-open-reproductions)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 13 Aug 2026 00:00:00 GMT

34. [Introducing OlmoEarth embeddings: Custom embedding exports from OlmoEarth Studio for downstream analysis](https://huggingface.co/blog/allenai/olmoearth-embeddings)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 12 Aug 2026 16:14:36 GMT

35. [Build Low-Latency Multilingual Voice Agents: Open Weights & Full Deployment Control with NVIDIA Magpie TTS](https://huggingface.co/blog/nvidia/magpie-tts-multilingual-voice-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 16:25:36 GMT

36. [Making Knowledge Distillation Cheap Enough to Run at Scale](https://huggingface.co/blog/MultiverseComputingCAI/efficient-knowledge-distillation)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 10 Aug 2026 10:05:36 GMT

37. [FedPref: Federated Preference Learning for Structured Radiology Report Extraction](https://arxiv.org/abs/2608.16971)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16971v1 Announce Type: new Abstract: Radiology reports describe findings and locations in free text, but downstream search and analysis require these relations in a fixed schema. Learning this extraction requires labels that are unevenly distributed across institutions: smaller hospitals have less local evidence, and pooling data may be infeasible. We introduce FedPref: frozen public language models propose alternative JSON extractions, local annotations rank them, and sites collaboratively train compact Qwen3-8B adapters while sharing only model updates. A heterogeneous teacher pool provides cross-model contrast when repeated single-model samples collapse. On development data from six simulated hospitals with unequal data volume and disease prevalence, FedPref improves client-mean F1 by 2.49 points and worst-site F1 by 9.10 points compared with training each site in isolation, with the largest gains at the sites holding the least data. Central training on the pooled preference-pair union is 2.66 points higher on client-mean F1. On a locked, 400-report manually validated gold test set, FedPref reaches 68.68 F1 and pooled training 71.67, preserving that same ordering. FedPref thus lets institutions with unequal, unpooled data benefit from collaboration without ever sharing reports or annotations.

38. [SkillEffect: Checked Lowering for Memory-Bounded Agent Tools](https://arxiv.org/abs/2608.17007)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17007v1 Announce Type: new Abstract: Agent Skills can specify procedural and resource obligations for tool use, and language models instantiate them as concrete programs. However, when models turn this guidance into code for existing tool interfaces, even a semantically correct program may load an entire input and exceed the memory available to one tool call. We present SkillEffect, a checked-lowering runtime for computations with a recoverable source relation, an audited bounded implementation, and a registered output postcondition. Before granting execution authority, an independent checker rebuilds each proposed lowering from the submitted program and immutable input. Every relation plugin supplies a source recognizer, input-fact extractor, bounded-IR constructor, arena-bound function, and postcondition; one common runtime provides checked selection, bounded-VM execution, atomic capacity leasing, and staged publication. Generality in SkillEffect is architectural rather than automatic: each supported computation requires an audited relation plugin, while the dispatch, resource-control, execution, and publication mechanisms are shared across plugins. Across six operator families, bounded access substantially reduces peak memory and improves completion under externally fixed caps. Six plugins instantiate the same contract across five execution patterns, from streaming reduction to bounded-heap Top-k. The XLSX onboarding study and Top-k extension show that a new relation and a new retained-state pattern reuse the same trust boundary, while the checker accepts all evaluated legal configurations and rejects all adversarial proposals. Together, these results show that one checked-lowering architecture can enforce heterogeneous registered memory relations at Agent tool dispatch.

39. [Memory Is Communication: The Frontier Between Remembering and Signaling](https://arxiv.org/abs/2608.17053)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17053v1 Announce Type: new Abstract: A bounded agent may obtain information for a decision from its own past, from peers, or from both sources. Retaining task-relevant history can reduce later communication, while a peer message can supply what memory lacks. Under limits on both resources, how should an agent allocate its information budget? Given a fixed task and decision rule, the memory and message rate pairs attaining a performance threshold form an achievable region under specified rules for using history and peer observations. We call its efficient boundary the remembering--signaling frontier. Across conditions where history permits the same maximum reduction in task loss, we hypothesize that a bounded agent will need less peer communication when it obtains a larger loss reduction from history. In preliminary referential games, target repetition coincided with shorter successful messages, while predictability from a hidden cyclic rule did not shorten them. Experiments varying memory and message rates can estimate the frontier and test this prediction across cooperative tasks.

40. [DiSCO: Defending text-to-image generation through distribution-guided contrastive prompt optimization](https://arxiv.org/abs/2608.17067)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17067v1 Announce Type: new Abstract: As text-to-image generative models advance, they raise critical safety concerns, particularly the generation of Not-Safe-For-Work (NSFW) content such as violence and nudity, further exacerbated by red-teaming adversarial attacks. Existing defenses predominantly operate under white-box assumptions, relying on text encoder optimization, weight editing, or inference-time intervention, and fundamentally cannot scale to proprietary models. Black-box alternatives based on LLM prompt rewriting offer broader applicability, yet fail in a critical regime we identify as the \textit{benign adversarial} problem: prompts that are linguistically safe but still trigger harmful generation due to the model's learned data distribution. We propose DiSCO, a zero-shot, strictly black-box defense that operates entirely at the prompt level as a plug-and-play module, requiring no model retraining, fine-tuning, or access to model internals. DiSCO performs distribution-guided suffix expansion via beam search, optimized through contrastive scoring over safe and unsafe image pools generated by the target model itself, with iterative adaptive feedback until safe content is produced. We demonstrate that DiSCO consistently enhances the safety of both undefended and defended models on the I2P benchmark under multiple red-teaming attacks, achieving 37.7% and 25.13% ASR reduction, respectively, while maintaining semantic fidelity and improving image coherence. As a black-box, architecture-agnostic module, DiSCO can be readily applied to any text-to-image system without necessitating any changes to the model itself.

41. [KernelArc: A Multi-Agent Framework for GPU Kernel Optimization](https://arxiv.org/abs/2608.17071)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17071v1 Announce Type: new Abstract: We present KernelArc, a multi-agent framework for autonomous GPU kernel optimization across heterogeneous workloads. Strategy-specialized agents run in parallel and coordinate through conclusions-only shared memory, a deterministic benchmark guard, and read-only cross-agent state with plateau-triggered drafting. We evaluate \kernelarc{} on NVIDIA H100 and B200 GPUs using category-representative SOL-ExecBench workloads. The resulting implementations span custom BF16 GEMM, static cuBLASLt Expert-API configuration tables, fused mixture-of-experts backward, shape-gated decoder-layer fusion, native NVFP4 grouped-query attention, and paged prefill attention. At the public SOL-ExecBench leaderboard snapshot recorded on July~30, 2026, these submissions ranked first on representative L1, L2, Quantization, and FlashInfer tasks. The trajectories support the paper's central motivation: shared multi-agent search can broaden exploration and reach stronger incumbents within a fixed candidate budget, while the value of individual coordination features depends on the kernel and optimization stage.

42. [Agentic Porting, Construction and Initial Verification and Validation of Libraries within the Open Source Unified TRAnsient Multi-Phase Advanced Reactor simulation Kit (Outram Park) Part I: Thermal Hydraulics](https://arxiv.org/abs/2608.17504)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17504v1 Announce Type: new Abstract: Agentic porting of multiple open-source libraries into Rust, with human in the loop, has been performed for construction of modules within the Open-source Unified TRAnsient Multi-Phase Advanced Reactor simulation Kit (Outram Park). With this new methodology, verification and validation with human expertise, rather than code generation has become the bottleneck in developing reliable simulation codes. In this work, we present the porting of OpenFOAM libraries into the Outram-Foam Rust libraries, their preliminary verification and validation (V\&V) efforts, and their subsequent use in the development of open-source two-phase homogeneous-equilibrium (HEM) choked-flow solvers for the Thermo-hydraulic AI Multi-Phase INtegrated Emulator System (TAMPINES) libraries within Outram Park such as tampines-steam-tables. Preliminary V\&V efforts of Outram-Foam show that the cavity and Sod shock tube cases agree reasonably well with literature values. Moreover, the preliminary development of tampines-steam-tables shows good agreement with Moody's HEM charts. Thereafter, the 1D HEM solver, developed agentically, is presented and preliminarily validated against the Edwards blowdown case. Productivity increases were observed with the use of Claude Code, but domain expertise supplied by human experts remains critically required to ensure the generated code can solve the problem effectively. Further work remains to be done in V\&V, but the agentic coding methodology in this paper demonstrates great potential to speed up production and development of open-source libraries such as Outram Park.

43. [Iterative tensor network transformations for element-wise evaluation of elementary and filtering functions](https://arxiv.org/abs/2608.17135)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17135v1 Announce Type: cross Abstract: Tensor networks are powerful formats for compressing large-scale data. However, their application to general data processing has been limited by the difficulty of performing nonlinear operations. Here, we introduce iterative tensor network transformations (ITNTs), a general algorithmic framework for the element-wise evaluation of elementary and nonlinear filtering functions on data encoded as tensor trains (TTs), a class of tensor networks. Our approach operates entirely in the compressed domain, enabling efficient computation on exponentially large datasets while maintaining a controlled computational cost. We demonstrate its power in two key areas: (I) evaluating highly nonlinear elementary and filtering functions on a 3D reactive flow field, enabling high-fidelity reaction rate computation and region filtering, and (II) finding extrema in complex optimization problems, such as solving Max-SAT instances on spaces up to $2^{70}$ configurations. These results establish ITNT as a foundational tool that provides tensor network methods with the capability for general-purpose data science and large-scale optimization.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.73; Date: 2026-08-19T11:23:03Z; Popularity: 1,732 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-18T22:46:04Z; Popularity: 479 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.34; Date: 2026-08-19T05:59:18Z; Popularity: 338 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-19T08:03:39Z; Popularity: 231 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

48. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

49. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

50. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

51. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

52. [Detecting and Discriminating Operator Misspecification in Hybrid PDE-Parameter Learning: a Reference-Free Instrument, with Discrimination Bounded In Sample](https://arxiv.org/abs/2608.16925)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16925v1 Announce Type: new Abstract: We build an instrument that reads, from a single fit and with no oracle, whether the operator a hybrid PDE-parameter estimator postulates is wrong-and separates that from a merely unidentifiable parameter. On one self-adjoint parabolic inverse problem, an information-matrix statistic with plug-in scale and per-seed parameter has median 0.19 under correct specification, rejection rate $0.033$ against a pre-registered ceiling of $0.10$, and rises to $224$ and $85$ under two misspecifications, firing in every replicate. On a correctly specified but non-identifiable design it stays mute-$0.050$ at $n=200$, Clopper-Pearson $[0.024, 0.090]$-while a rank statistic collapses to zero at a pre-registered boundary $c_5^*=2.15\times10^{-3}.$ Two readings of one fit therefore separate the two failures across the three designs a deployable test reaches. That separation is the contribution; detection alone is a crowded flank. In sample it is a bound, out of sample a direction. It is needed because the usual accuracy check is blind: the misspecified estimator's in-domain RMSE is $2.7\times 10^{-2}$, below the observation noise for $\sigma\geq 0.05,$ while the coefficient is wrong by $29.7\%$ at zero noise, $31.2\%$ at the loudest. Nor is the failure architectural: a one-parameter curve fit, a bare parameter and multilayer perceptrons of $49$ and $241$ parameters converge to the same pseudo-true, matched in closed form to $0.07\%,$ whereas a physics-informed network, with its composite objective, converges to a disjoint one. We report where the instrument is blind, a pre-registered negative where a neural estimator loses to Tikhonov-regularized inversion at recovery, and the hypothesis under which its guarantee holds but a trained network violates it.

53. [Hierarchical Data Selection via Manifold Coverage and Sparse Feature Coverage in LLM Post-training](https://arxiv.org/abs/2608.16927)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16927v1 Announce Type: new Abstract: As supervised fine-tuning data continues to scale, selecting high-value subsets from large candidate pools is crucial for reducing training cost and improving model performance. Existing methods often measure diversity directly in the original embedding space, where geometric metrics entangle dominant semantic directions, fine-grained supervision differences, and local noise. We address this limitation by formulating data selection as a coarse-to-fine hierarchical coverage problem and propose MASS. MASS learns low-dimensional principal manifold coordinates with a dense autoencoder for coarse semantic grouping, and then performs quality-aware sparse feature coverage within each group using a TopK sparse autoencoder. Experiments on Vision Flan and LLaVA-CoT show that MASS consistently outperforms strong data selection baselines across multiple budgets, and in several settings matches or surpasses full data training with only a small subset of data.

54. [Validating direct solvers for Newton's gravitational N-body problem, and the systematic comparison between IEEE floating point and Posits](https://arxiv.org/abs/2608.17032)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17032v1 Announce Type: new Abstract: We present a systematic comparison between arbitrary precise arithmetic and integration, IEEE-754 compliant floating point arithmetic (fp16, bfp16, fp32, double precision fp64, and quadruple precision fp128), and two implementations of Posits (type III unum) for solving Newton's chaotic N-body problem. Each implementation is benchmarked with arbitrary precise calculations to objectively evaluate their performance in precision as well as speed. We rely on hardware and compiler implementations for fp64, and software implementations for arbitrary-precision arithmetic and Posits. Half precision arithmetic (fp16, bfp16, and Posits$ $) are insufficiently precise for solving Newton's equations of motion. Single precision (fp32, and Posits$ $) could be used for statistical ensemble calculations, but lead to relatively large errors in any individual strong encounter. All 64-bit implementations fp64 as well as Posits (Posits$ $) experience difficulty in our tests. One of the implementations of Posits (Universal) gives precision comparable to fp64 but is slow (by at least an orders of magnitude compared to fp64 after correcting for the more efficient hardware support for the latter). The other (CPPPosits) has a speed comparable to fp64 but has systematically larger errors (by about an order of magnitude compared to fp64 with excesses exceeding two orders of magnitude). As a consequence, this implementation leads to a systematic drift in the result space and has difficulty resolving close encounters. Posits and fp64 have difficulty when integrating a dynamical system in a moving reference frame; testing Galileo invariancy. In their current implementation, Posits do not seem to be the ideal alternative for fp64 when integrating chaotic or stiff ordinary differential equations, such as Newton's equations of motion.

55. [Probabilistic Inverse Modeling of Contaminant Transport via a Conditioned-on-Design Bayesian Physics Informed Neural Network](https://arxiv.org/abs/2608.17591)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17591v1 Announce Type: new Abstract: We address the inverse problem of reactive transport in heterogeneous porous media, where unknown model parameters must be inferred from sparse experimental observations. The problem is complicated by strong nonlinearities, spatial heterogeneity, and limited data availability. We propose a Conditioned-on-Design Bayesian Physics-Informed Neural Network (CoDe-BPINN), which combines a domain-decomposed PINN solver with a Bayesian inference network that learns the conditional distribution of model parameters given experimental design variables. The framework is trained by maximizing a physics-informed Evidence Lower Bound (ELBO), enabling simultaneous reconstruction of spatiotemporal concentration fields, probabilistic parameter estimation, and uncertainty quantification. We demonstrate the approach using laboratory experiments on contaminant transport through a multilayer porous column with an iodinated contrast medium. The model accurately reproduces breakthrough dynamics while revealing systematic parameter dependence on flow conditions. In particular, it identifies a nonlinear decrease in effective sorption capacity with increasing flow rate and porosity, consistent with kinetic limitations and reduced adsorbent mass. The Bayesian formulation also uncovers a strong negative correlation between sorption affinity and sorption capacity, quantifying the intrinsic non-identifiability of the inverse problem. CoDe-BPINN provides a robust framework for parameter inference and uncertainty quantification in data-scarce reactive transport problems.

56. [Investigation of the Asymptotic Properties of Active Impedance in Large Finite Array Antennas](https://arxiv.org/abs/2608.17844)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17844v1 Announce Type: new Abstract: This paper presents an improved full-wave solver for finite array antennas, and uses this solver to examine asymptotic properties of active impedance for large regular arrays. The improved solver is based on a preconditioning scheme that has been adapted for use on more general finite geometries, and an improved data structure. These two improvements result in a fast and stable solver with a lower memory footprint. By investigating the active impedance of finite arrays it is found that, even for arrays with 1000 elements, asymptotic behavior may differ from infinite arrays. Tied to these properties, different predictors on how the active impedance of the center element in the array behaves are presented. The two best predictors work very well for the wideband arrays investigated, and may be used to decide when array approximations, such as unit cell methods, are appropriate, rather than general statements on array size.

57. [Meshfree Snow Modelling using a Modified Cam-Clay Approach](https://arxiv.org/abs/2608.16967)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.16967v1 Announce Type: cross Abstract: Snow is a complex geomaterial whose macroscopic response is governed by density, temperature, and the topology of its evolving microstructure. Its mechanical behavior spans elastic, plastic, viscous, and failure dominated regimes, imposing significant challenges for numerical methods, which intends to simulate large deformations, evolving free surfaces, and complex boundary interactions. This work presents the first integration of a Modified Cam-Clay constitutive formulation for snow into a purely meshfree strong-form collocation framework based on the Generalized Finite Difference Method. The main methodological contribution is a numerical coupling that combines a global implicit mixed formulation for pressure and velocity with a constitutive return-mapping algorithm. The hydrostatic pressure contribution is obtained from a Poisson equation and subsequently corrected through the Modified Cam-Clay return-mapping procedure, while the deviatoric response is treated semi-implicitly using a numerical viscosity formulation. This partitioned treatment of the volumetric and deviatoric stress contributions enables stable simulations with comparatively large time steps while producing smooth spatial pressure fields. As a result, forces on complex boundary geometries can be evaluated accurately. Numerical results of this coupling illustrate the algorithmic stability of the framework, the effective imposition of boundary conditions, and the suitability of local spatial refinement. The feasibility of applying the framework to vehicle-snow interaction through rigid-body coupling is also illustrated. The presented formulation provides a robust basis for future simulations of dynamic snow loading on vehicle structures.

58. [Bayesian Optimization of Molybdenum-99 Production by Laser Wakefield Acceleration Using Coupled PIC and Monte Carlo Simulations](https://arxiv.org/abs/2608.17119)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17119v1 Announce Type: cross Abstract: This work applies Bayesian optimization to a loop composed of PIC simulations of laser electron acceleration and Monte Carlo (MC) simulations of bremsstrahlung-induced nuclear reactions, to maximize the production of molybdenum-99, the precursor of the most used radiopharmaceutical in nuclear medicine, metastable technetium-99. PIC and MC simulations are computationally intensive, and besides reducing the time spent, the Bayesian optimization coupling both simulations resulted in an improvement of an order of magnitude in the $^\text{99}$Mo yield over a previous work, in which the output of an optimization loop based solely on PIC simulations was used a posteriori to estimate $^{99}\mathrm{Mo}$ production through a MC simulation.

59. [Reduced-Order Physics-Informed Neural Network with Adaptive Basis Refinement for Structural Identification](https://arxiv.org/abs/2608.17131)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17131v1 Announce Type: cross Abstract: Physics-informed neural networks (PINNs) provide a flexible framework for solving forward and inverse problems. However, their direct application to structural dynamics remains limited by high system dimensionality and model-form errors arising from incomplete physics. Reduced-order models (ROMs) can alleviate the dimensionality bottleneck, yet existing PINN-ROM couplings typically rely on fixed reduced subspaces, target forward simulations, or assume complete physics, restricting their use for inverse identification under parametric variability or incomplete system knowledge. To address these limitations, this work proposes a Reduced-Order Physics-Informed Neural Network (RO-PINN) framework with adaptive basis refinement for structural identification under known and incomplete physics. Via projection, reduced governing equations are embedded directly into the PINN loss, facilitating learning in a low-dimensional latent space. An adaptive scheme updates the projection basis during training so that the latent space is progressively realigned with evolving structural parameters or learned residual restoring forces. This realignment reduces basis-mismatch errors and limits their influence on the inferred residual force. The method is validated on a four-story steel frame with nonlinear hysteretic braces under sparse and noisy measurements. Results show parameter identification comparable to or more accurate than Bayesian model updating with lower computational cost in the considered cases, recovery of unmodeled nonlinear restoring forces under incomplete physics, and joint identification of residual restoring forces and structural parameters within the same framework. Overall, RO-PINN provides a unified framework for structural identification by integrating reduced-order modeling, adaptive basis refinement, and physics-informed learning within a single formulation.

60. [Discovery of novel magnetic Y-Mn-B compounds via advanced machine learning guided framework](https://arxiv.org/abs/2608.17200)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17200v1 Announce Type: cross Abstract: Rare-earth transition-metal borides offer critical structural motifs for permanent-magnet design; however, the manganese-rich regions within these compositional phase spaces remain largely unexplored. In this work, we develop an advanced machine-learning-assisted discovery framework to explore Y-Mn-B ternary system. Starting from over one million hypothetical structures generated from known structures in databases, we filtered promising candidates by first applying graph neural networks to predict material stability, then using machine-learning-interatomic-potential to relax their structures, and finally validating the results with first-principles calculations. We identify 5 stable and near-stable Y-Mn-B phases along with 61 metastable compounds with the formation energy within 100 meV/atom with respect to the ternary convex hull. Among them, Y2Mn7B7 and YMn4B4 are structurally analogous to the previously synthesized $R_{1+\epsilon}Fe_4B_4$ 1D incommensurate composite chain compounds. In striking contrast to the strongly suppressed Fe moments reported, our first-principles calculations reveal that the predicted Mn-chain phases preserve sizable local Mn moments (approximately 1.1 $\mu_B$) and favored ferromagnetic ordering. Electronic structure analyses elucidate the microscopic origin of moment recovery via an enhanced exchange splitting driven by a Stoner-like instability. We also perform systematic Mn-Fe substitution to confirm the thermodynamic continuity and a monotonic enhancement of the macroscopic magnetization, from Fe to Mn. These findings indicate that targeted transition-metal substitution within a one-dimensional boride family can recover transition-metal magnetism, offering a physically interpretable route for designing new magnetic rare-earth transition-metal borides.

61. [Giant Bandgap Pulsation Driven by Hotspot Breathing Phonons in a Flat-Band Solid](https://arxiv.org/abs/2608.17408)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 19 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.17408v1 Announce Type: cross Abstract: The electronic bandgap of solids is conventionally viewed as a static property at a given temperature, with only weak and stochastic thermal fluctuations under equilibrium conditions. Here, using ab initio molecular dynamics and first-principles electron-phonon calculations, we reveal a pronounced room-temperature bandgap pulsation at about 7.8 THz in a perovskite-like flat-band solid, with a maximum peak-to-peak variation approaching 0.95 eV. This behavior originates from a dual selection mechanism: the A1g-like breathing branch couples much more strongly to the flat conduction-band edge than other phonon branches, while real-space phase selectivity distinguishes its hotspot gamma-point and finite-q components. Although finite-q modes retain appreciable microscopic coupling, their intercell phase shifts produce smaller-amplitude shorter-recurrence-period responses, leaving the unit-cell-synchronous gamma-point A1g component to dominate the fundamental-period bandgap pulsation. The resulting band-edge dynamics further modulates the optical response on femtosecond timescales. These findings demonstrate that an unexpectedly ordered electronic response can emerge from intrinsically disordered thermal lattice fluctuations.

62. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-19T09:13:51Z; Popularity: 753 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

63. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.72; Date: 2026-08-18T22:56:35Z; Popularity: 721 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

64. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.67; Date: 2026-08-18T11:15:01Z; Popularity: 671 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

65. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.18; Date: 2026-08-19T10:34:19Z; Popularity: 176 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

66. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.11; Date: 2026-08-17T22:47:58Z; Popularity: 111 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

67. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

The Problem Is the Problem: Towards Scalable Mathematical Discovery

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.16977

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
