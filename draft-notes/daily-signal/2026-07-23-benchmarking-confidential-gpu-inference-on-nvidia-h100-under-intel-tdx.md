# Daily signal sidecar - 2026-07-23

## Selected Signal

- Title: Benchmarking Confidential GPU Inference on NVIDIA H100 under Intel TDX
- URL: https://arxiv.org/abs/2607.19353
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Benchmarking Confidential GPU Inference on NVIDIA H100 under Intel TDX
- Primary source: https://arxiv.org/abs/2607.19353
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

Total candidates reviewed after duplicate-source filtering: 70

1. [Benchmarking Confidential GPU Inference on NVIDIA H100 under Intel TDX](https://arxiv.org/abs/2607.19353)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19353v1 Announce Type: new Abstract: Confidential computing is becoming a practical deployment requirement for AI inference workloads that process sensitive inputs or protect proprietary model assets. However, the performance cost of enabling confidential execution for GPU-accelerated large language model serving remains workload dependent and operationally important. This paper presents a benchmark study comparing standard non-confidential execution with confidential computing mode on a single NVIDIA H100 80GB GPU hosted in an Intel TDX confidential instance. The evaluation uses two representative language models, Mistral-7B v0.1 and Qwen3-30B-A3B, and measures time to first token, end-to-end request latency, per-request token generation throughput, global token throughput, and closed-loop request throughput under increasing concurrency. In fixed request-rate experiments, confidential mode increases average TTFT by 21.8% for Mistral-7B and 27.8% for Qwen3-30B-A3B, while global token throughput drops by 17.7% and 21.1%, respectively. In closed-loop concurrency experiments, throughput gaps remain in the 11.5-20.2% range, but the larger model reaches its saturation knee earlier under confidential mode. The results suggest that confidential GPU inference can retain usable throughput under load, but capacity planning must account for both the steady throughput penalty and the earlier saturation behavior observed for larger models.

2. [LISA: Linear-Indexed Sparse Attention for Efficient Long-Context Reasoning](https://arxiv.org/abs/2607.19358)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19358v1 Announce Type: new Abstract: Recent advances in long chain-of-thought reasoning models such as DeepSeek-R1 have led to increasingly longer inference context lengths under the test-time scaling paradigm. However, the O(n^2) computational complexity of standard self-attention causes inference costs to grow sharply with long sequences, limiting the deployment of long-CoT reasoning in production settings. To address this, we propose LISA (Linear-Indexed Sparse Attention), a plug-and-play attention replacement module that requires no pretraining from scratch. LISA integrates two lightweight components in parallel within the original model: (1) a Linear Attention module that provides long-range memory with O(n) time complexity; (2) a Lightning Indexer that selects the top-M important tokens from the full context to feed into a Sparse Self-Attention. The two branches are fused via a gating mechanism, reducing inference complexity from O(n^2) to O(nM) (M << n) for generating n tokens. We design a two-stage training pipeline: Stage 1 initializes the model by integrating the linear attention to capture long-range dependencies, complemented by a sliding-window attention mechanism that is optimized via knowledge distillation to approximate the full self-attention distribution of a frozen teacher model. In Stage 2, we further introduce the Indexer to replace the static sliding-window mechanism, enabling dynamic token selection from broader contexts. The Indexer is trained using a novel per-head KL divergence loss, which aligns its selection behavior with the attention patterns of the teacher model. Experiments on DeepSeek-distilled-Qwen models demonstrate that LISA achieves a 50% inference speedup under 16K-token context, while improving average performance by 5.6% on reasoning benchmarks including AIME and MATH-500.

3. [Profile-Graph Memory for LLM Agents: Implicit Cross-Entity Traversal through Narrative Profiles](https://arxiv.org/abs/2607.19359)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19359v1 Announce Type: new Abstract: Long-term memory is essential for LLM agents that interact across sessions, yet current memory benchmarks primarily evaluate single-hop recall, leaving multi-hop association largely unmeasured. We make three contributions. First, we introduce MemHop, a multi-hop memory benchmark of 1,000 questions at hop depths 1-5 across 10 social-network scenarios, with per-hop evidence annotations. Second, we present Profile-Graph Memory (ProGraph), a two-layer memory architecture combining (i) profile expansion -- substring-matched traversal of entity names that naturally appear in LLM-written profile narratives, a minimal alternative to explicit knowledge-graph construction -- and (ii) compression residuals -- exact dates, quantities, and named items co-extracted with each profile update at zero extra API cost. Third, a full-grid ablation shows cross-benchmark mechanism specialization: profile expansion drives multi-hop reasoning (-22.6pp on MemHop when removed) while compression residuals drive precision recall (-8.6pp on LoCoMo when not co-extracted), with cross-effects under 3pp within a single architecture. ProGraph averages 80.1% on MemHop (matching the FullContext reference) and 78.4% on LoCoMo (exceeding FullContext by 11.3pp), outperforming Mem0, A-Mem, HippoRAG, and RAG on both. We release MemHop, ProGraph, and baseline implementations.

4. [Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 22 Jul 2026 05:30:00 GMT
   - Summary: Introducing OpenAI Presence, a proven enterprise AI agent platform that helps organizations deploy trusted voice and chat agents for customer and internal workflows.

5. [OpenAI and Hugging Face partner to address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 21 Jul 2026 07:00:00 GMT
   - Summary: OpenAI and Hugging Face share early findings from a security incident during AI model evaluation, highlighting advanced cyber capabilities and lessons for defenders.

6. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

7. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

8. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

9. [The State of Simulation for Physical AI: An Overview](https://huggingface.co/blog/nvidia/state-of-simulation-for-physical-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 21 Jul 2026 20:00:27 GMT

10. [FineServe: A Fine-Grained Dataset and Characterization of Global LLM Serving Workloads](https://arxiv.org/abs/2607.19349)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19349v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly deployed as always-on online services, making efficient LLM serving a critical systems challenge. Achieving low latency and high throughput under volatile demand requires deep understanding of real-world serving workloads, yet existing studies often rely on proxy traces or coarse-grained characterizations that fail to capture the heterogeneity of modern multi-model LLM platforms. We present FineServe, an in-the-wild, multi-model LLM serving workload dataset collected from a global commercial marketplace, enabling fine-grained characterization of real-world serving dynamics across heterogeneous models and tasks. Leveraging FineServe, we conduct a comprehensive analysis of arrival dynamics and token behavior, revealing fundamentally different fluctuation regimes across model architectures, scales and task intents. Building on these insights, we develop the FineServe workload generator, which composes fine-grained model-aware workloads into configurable mixtures tailored for benchmarking multi-model serving platforms. By exposing these fine-grained workload dynamics, FineServe provides a realistic foundation for evaluating routing, scheduling, and capacity-planning strategies in LLM serving systems. FineServe is available at https://github.com/hihiztc1/FineServe.

11. [Hybrid LSTM-Graph Neural Framework for Robust Financial Fraud Detection and Adversarial Resilience](https://arxiv.org/abs/2607.19350)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19350v1 Announce Type: new Abstract: Financial institutions face significant challenges in detecting sophisticated money laundering patterns, such as smurfing and layering, due to extreme data imbalance (0.13% fraud rate) and evolving adversarial evasion tactics. This paper proposes FraudShield AI, a hybrid framework that integrates Long Short-Term Memory (LSTM) networks with hand-crafted Graph Topological Features to capture both temporal sequences and structural relational context. By engineering network-centric features including PageRank Centrality, In-Degree dynamics, and a custom Flow Ratio, the system shifts the detection paradigm from isolated transaction analysis to network-level forensics. A Focal Loss objective is used to address class imbalance, and a dynamic thresholding mechanism is introduced to improve resilience against low-value smurfing attacks. Experimental evaluation on the PaySim dataset shows that the proposed hybrid model substantially outperforms Logistic Regression and XGBoost baselines in Precision, Recall, and F1-Score, particularly on hard-to-detect micro-transaction fraud patterns. An ablation study confirms the complementary contribution of both the temporal and topological components.

12. [OpenEvoShield: Dual Non-Stationary Continual Defense for Open-World Multi-Agent System Attacks](https://arxiv.org/abs/2607.19351)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19351v1 Announce Type: new Abstract: LLM-based multi-agent systems (LLM-MAS) are increasingly deployed in safety-critical applications, where adversaries inject malicious instructions through inter-agent communication to propagate harmful behaviors. Unlike static threats, these attacks are doubly dynamic: adversaries refine injection strategies against deployed defenses while normal-agent behavior drifts with system expansion. Existing defenses treat deployment as a closed-world problem and degrade rapidly once either distribution shifts beyond training coverage. We propose OpenEvoShield, a co-evolutionary continual defense framework for LLM-MAS. An asymmetric rate controller (M1) decouples fast attack-side and slow normal-side learning rates from dual drift signals. A normal-boundary updater (M2) maintains a dynamic behavioral boundary at the slow rate, while an EWC-regularized policy ensemble (M3) fast-adapts without catastrophic forgetting. An energy-based multi-granularity detector (M4) fuses node-, subgraph-, and graph-level evidence to classify novel attacks as out-of-distribution. Experiments over 100 deployment rounds across five benchmarks and four MAS topologies show that OpenEvoShield outperforms static and continual baselines, detecting most previously unseen attacks while keeping false positive rates low.

13. [NEXUS: Structured Runtime Safety for Tool-Using LLM Agents](https://arxiv.org/abs/2607.19356)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19356v1 Announce Type: new Abstract: Tool-using LLM agents increasingly execute high-impact actions, making runtime safety monitoring essential. We present NEXUS (Neural EXecution Utility and Safety), a structured-plan safety monitor that applies a formal intervention policy to select among four actions: allow, block, request confirmation, or request revision. NEXUS combines deterministic safety rules, argument-level inspection, and a calibrated logistic-regression risk score for graded escalation. On a 128-instance synthetic benchmark, NEXUS achieves an F1 score of 0.949 and a 4-class intervention accuracy of 0.6406, outperforming rule-only intervention selection by 27.3 percentage points. It also improves over rule-only on R-Judge (F1 = 0.861 vs. 0.849), matches rule-only on AgentHarm due to threat-model limits, and achieves 0% ASR at 99% control allow on IPI. On the rule-blind NEXUS-Stress benchmark, NEXUS reaches an F1 score of 0.881, highlighting the difficulty of fine-grained intervention routing. With 0.205 ms median latency, NEXUS adds under 0.1% overhead to typical agent loops. Code, benchmarks, and the calibrated risk scorer are publicly released.

14. [CruiseBench: A Real-Flight-Aligned N-CMAPSS Benchmark for Engine RUL Prediction](https://arxiv.org/abs/2607.19380)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19380v1 Announce Type: new Abstract: Remaining useful life (RUL) prediction estimates how long an engine can continue safe operation and is central to maintenance planning. N-CMAPSS extends C-MAPSS by simulating run-to-failure aero-engine trajectories using recorded real-flight profiles and retaining complete within-flight time series rather than cycle-level snapshots. However, this added realism reduces evaluation control because full-flight records increase data volume and entangle degradation cues with operating-regime variation, complicating preprocessing choices and direct comparisons of RUL modeling performance. To mitigate this issue, this paper proposes CruiseBench, a cruise-stage RUL benchmark derived from N-CMAPSS. It introduces CPM-N-CMAPSS (Cruising-Period Mask for N-CMAPSS), a mask artifact that stores cycle-local cruising intervals identified by the common-altitude method for the nine accessible subdatasets. CruiseBench applies a fixed protocol to the masked rows, using scenario descriptors and measured sensors as inputs while excluding virtual sensors, health parameters, and auxiliary metadata from the feature tensor, preserving native-resolution windows, and applying dataset-wise RUL caps. Experiments with LSTM, GRU, TCN, and TSMixer provide baseline results for this setting. Under CruiseBench-eta5-W256-S10, TSMixer obtains the lowest average RMSE, $3.4\pm1.71$, and Saxena score, $(2.50\pm2.99)\times 10^{4}$. Ablation studies show that flight-stage selection, temporal downscaling method, and RUL-cap threshold affect reported results. With its fixed cruise-stage protocol, CruiseBench provides a reproducible sub-benchmark for controlled RUL model comparison and CPM-N-CMAPSS provides a stage-specific data foundation for future transfer-learning and domain-adaptation studies.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.50; Date: 2026-07-23T15:22:48Z; Popularity: 2,498 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

17. [Building AI infrastructure with the Effingham County community](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: OpenAI announces Project Camellia in Effingham County, Georgia, with commitments to responsible energy, community investment, jobs, and access to Codex.

18. [How news organizations are using AI to advance their vital missions](https://openai.com/index/how-news-organizations-are-using-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: News organizations are using AI to strengthen reporting, grow audiences, and improve business operations, with OpenAI tools supporting journalists and publishers worldwide.

19. [Advancing the next era of national science](https://openai.com/index/advancing-the-next-era-of-national-science)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines its commitment to advancing American science working with the U.S. Department of Energy and national labs to use frontier AI to accelerate discovery.

20. [NTT DATA Group cuts incident analysis to 30 minutes with Codex](https://openai.com/index/ntt-data)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 GMT
   - Summary: NTT DATA Group uses ChatGPT Enterprise and Codex to help 9,000 employees automate work, cut incident analysis to 30 minutes, and scale secure AI adoption.

21. [Introducing the ChatGPT for small business program](https://openai.com/index/introducing-chatgpt-small-business-program)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 17:00:00 GMT
   - Summary: OpenAI launches the ChatGPT for Small Businesses program, helping entrepreneurs build AI skills, automate work, and grow with ChatGPT Work.

22. [David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC](https://openai.com/index/david-velez-robin-vince-join-openai-boards)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT
   - Summary: David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC, bringing global leadership in finance, technology, and governance.

23. [Safety and alignment in an era of long-horizon models](https://openai.com/index/safety-alignment-long-horizon-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 20 Jul 2026 10:00:00 GMT
   - Summary: OpenAI shares lessons from deploying long-running AI models, highlighting new safety risks, observed failures, and improved safeguards through iterative deployment.

24. [A scorecard for the AI age](https://openai.com/index/a-scorecard-for-the-ai-age)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 17 Jul 2026 10:00:00 GMT
   - Summary: Sarah Friar, CFO of OpenAI, introduces a practical AI scorecard to measure ROI through useful work, cost per successful task, dependability, and return on compute.

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

35. [FormulaSPIN: Self-Play Fine-Tuning for Natural Language to Spreadsheet Formula Generation](https://arxiv.org/abs/2607.19354)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19354v1 Announce Type: new Abstract: Spreadsheet applications are used by hundreds of millions worldwide, yet writing formulas remains a significant barrier. Existing approaches rely on static supervised data, which quickly saturates on limited annotations. In this paper, we introduce FORMULASPIN, a self-play framework that breaks the ceiling of supervised fine-tuning by enabling iterative self-improvement without any additional data. Vanilla SPIN fails on this task: it uniformly penalizes every non-matching output, so execution-equivalent alternatives are punished as negatives in one example while serving as ground truth in another, producing contradictory gradients. Our framework resolves this by exploiting formula generation's unique advantage: binary executability provides implicit supervision that separates semantic errors from valid stylistic variants. We frame training as a two-player game in which the main player learns to prefer ground-truth formulas over those from its previous version, while execution feedback sorts outputs into distinct granularities-enabling an adaptive curriculum that shifts from semantic correctness to stylistic refinement. To further increase accuracy, we incorporate ExecVote, a semantic-level voting mechanism that naturally handles multiple valid formulations. Experiments on multiple benchmarks demonstrate that FORMULASPIN achieves state-of-the-art performance, with 74.9% exact match and 87.1% execution accuracy on NL2FORMULA, matching models trained with additional preference annotations while outperforming both traditional SFT and frontier proprietary models. These findings underscore self-play's potential to tackle scarce data tasks and open the door to extending it beyond executable domains.

36. [Information Discernment in Large Language Models](https://arxiv.org/abs/2607.19355)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19355v1 Announce Type: new Abstract: LLMs are increasingly used with external knowledge sources like the internet. Do they weigh information appropriately -- updating more for reliable sources (source discernment) and more when claims bring priors closer to the truth (truth discernment)? We formalize this as information discernment and introduce Learn2Discern (L2D), an experimental framework and benchmark grounded in three normative axioms with interpretable metrics. To establish external validity, a pre-registered, quota-matched user study (n=299) confirms that real LLM users endorse all three axioms and report that violations reduce their trust and usage intent. Across 13 models and nearly 670K trials, we find consistent failures across both dimensions: models perform near chance on source and truth discernment, rely on source popularity twice as much as source reliability, and update roughly equally whether a claim improves or worsens their position relative to the ground truth. Models integrate external knowledge most effectively on datasets where their priors are already the most accurate. Newer and larger models improve truth discernment but not source discernment, a blind spot that model complexity does not address. We identify simple inference-time interventions that improve both forms of discernment. We release our dataset and survey as a testbed for a core alignment property that scales in importance as LLMs replace traditional search.

37. [Stochastic Primal-Dual Decoding for Multiobjective Generative Recommender Systems](https://arxiv.org/abs/2607.19357)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19357v1 Announce Type: new Abstract: Recent advances in recommender systems (RS) have shown substantial performance gains through generative modelling. In practice, recommendation often involves constructing slates -- ordered lists of items -- that must satisfy multiple objectives beyond relevance, such as constraints defined over item attributes or fairness constraints. Existing multiobjective approaches either rely on post-processing techniques designed for non-generative settings, or incorporate auxiliary objectives directly into model training. The former does not explicitly account for the sequential nature of generative RS, while the latter is often impractical in large-scale systems. We propose a lightweight, inference-time decoding layer that augments autoregressive generative RS to support multiobjective slate generation without modifying or retraining the underlying model. We formulate decoding as an online constrained optimisation problem, where items are selected sequentially, and trade-offs between relevance and auxiliary objectives are adjusted dynamically based on the remaining constraint slack, i.e., how much of each objective remains to be satisfied. This is implemented via a stochastic primal-dual approximation scheme that balances relevance and auxiliary objectives during generation. We provide theoretical guarantees on constraint violation and regret, and evaluate the proposed approach through extensive offline experiments and a large-scale online A/B experiment in a real-world recommender system. Our results show consistent improvements in multiobjective trade-offs, including a +1.8\% gain in the auxiliary objectives achieved at zero cost to user satisfaction.

38. [Building Fast, Evaluating Slow: Pipeline Choices Dominate Autointerpretability Score Variance](https://arxiv.org/abs/2607.19386)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19386v1 Announce Type: new Abstract: Cross-paper comparison of sparse autoencoder (SAE) interpretability often relies on autointerpretability scores. In this evaluation pipeline, a language model (LM) explains each feature, and another LM scores the explanation. For these comparisons to be meaningful, scores must reflect stable properties of the features rather than confounding aspects of the evaluation pipeline. Through systematic experiments across four metrics (simulation, detection, fuzzing, purity), two models (Pythia-160M, Apertus-8B), and four axes of methodological variation, we show that this assumption does not hold. Specifically, we find that R1) methodological variance collectively exceeds architectural variance across all metrics and tested models; R2) each metric exhibits a distinct instability profile, with detection being the most stable and fuzzing unreliable across all conditions; R3) top-k feature rankings do not stay consistent across corpus and draw conditions, masking per-feature instability behind stable mean scores; a failure that cannot be detected by monitoring explanation similarity alone. These findings suggest that cross-paper comparisons based on autointerpretability scores may reflect pipeline differences rather than architectural differences, with implications for the ongoing debate on SAE utility. More broadly, unreliable evaluation slows progress in interpretability research at a time when reliable tools for understanding AI systems are needed. To support evaluation, we contribute a variance decomposition approach, a Stability Check, and a Minimum Reporting Checklist.

39. [Dynamical and Optimization Trade-offs of Levi--Civita Coordinates for Learned Close-Encounter Dynamics](https://arxiv.org/abs/2607.20235)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20235v1 Announce Type: new Abstract: Classical regularization removes the binary-collision singularity from the Kepler problem, but its value as a representation for learned Hamiltonian dynamics has not been systematically isolated. We compare Cartesian and planar Levi--Civita formulations of a perturbed Kepler system with a smooth quadrupole potential. With the perturbation supplied analytically, a Levi--Civita Hamiltonian splitting holds the maximum relative energy error near $2.1\times10^{-5}$ through eccentricity $e=0.99$, while the Cartesian splitting becomes unstable. This advantage persists at matched physical horizon and force-evaluation budget, where the regularized baseline is $3\times10^{-5}$, about $4.7$--$8.3$ orders of magnitude below the Cartesian arm depending on eccentricity. In held-out high-eccentricity tests with matched sampling, regularized models produce finite rollouts in $40/40$ runs versus $0/40$ for Cartesian. However, the fixed-shell construction supplies the regularized model with the exact initial orbit energy, and survival still carries $\mathcal{O}(1)$ energy error. Four neural residual objectives fail to approach the analytic result. Exact-feature controls show that the regularized residual is a four-monomial degree-6 polynomial that a direct least-squares solve fits to the baseline. The remaining exact-feature gap is due to severe raw-basis ill-conditioning: orthogonalization restores baseline fitting for L-BFGS in two iterations. Small MLPs remain at $\mathcal{O}(1)$ rollout error even after gauge symmetrization. Levi--Civita coordinates therefore improve dynamical conditioning while worsening raw-basis optimization conditioning; accurate neural residual learning remains unresolved. This is a controlled falsification-plus-trade-off study, not a solution to learned close-encounter dynamics.

40. [Hypothesis-and-Refinement Learning of Organic Structures from Multimodal Spectroscopic Data](https://arxiv.org/abs/2607.19816)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19816v1 Announce Type: cross Abstract: Determining molecular structures from spectroscopic data remains fundamentally challenging because the inverse problem is intrinsically underdetermined: individual spectra are sparse, low-dimensional, and encode only partial structural evidence relative to the vast space of possible molecules. We address this challenge by formulating automated structure elucidation as a scalable hypothesis-refinement paradigm that tightly integrates spectral evidence with large-scale molecular priors. To supply structure-resolving NMR signals for multimodal learning, we construct \textbf{QM9SPIN}, a DFT-derived dataset comprising diverse 1D and 2D spectra, including J-coupling, DEPT experiments, and explicit spin--spin interactions. On this foundation, we introduce \textbf{SpectroMol}, a spectrum-to-structure model that proposes chemically valid molecular hypotheses conditioned on multimodal spectral inputs. Complementarily, we develop \textbf{MS-Mol2Mol}, a high-resolution mass-constrained molecular generator that integrates molecular formula, exact mass, and degree of unsaturation within a conditional generative prior trained on 400 million molecules, ensuring global compositional consistency and chemically realistic refinement. The integrated system achieves 93.8\% top-1 accuracy on the simulated benchmark, adapts effectively from simulated to experimental spectra with limited experimental fine-tuning, and further improves experimental predictions through mass-guided refinement, establishing a scalable route toward automated, data-driven organic structure elucidation.

41. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.52; Date: 2026-07-23T13:07:16Z; Popularity: 1,522 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

42. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.47; Date: 2026-07-23T07:16:51Z; Popularity: 474 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

43. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.28; Date: 2026-07-21T01:04:05Z; Popularity: 279 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

44. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-22T06:26:23Z; Popularity: 214 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

45. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

46. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

47. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

48. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

49. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

50. [Bayesian Wind Tunnels for Model Selection](https://arxiv.org/abs/2607.19379)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19379v1 Announce Type: new Abstract: Prior work has shown that transformers can perform exact Bayesian filtering within a fixed hypothesis class. Can they also perform Bayesian model selection -- identifying the correct hypothesis class from data? We introduce model-selection Bayesian wind tunnels: controlled environments where ground-truth posteriors over hypothesis classes are available in closed form. Using fixed-point-free involutions -- whose defining property f(f(x))=x is purely relational -- a 2.8M-parameter transformer achieves 0.01-bit entropy agreement with the Bayesian optimum (3 seeds), with both integer tokens and opaque symbols whose meanings change every episode. This extends to non-nested comparisons: involutions vs. 3-cycles (where neither class is a subset of the other) achieve class-posterior MAE under 0.001, demonstrating genuine model selection beyond simplicity/subset bias. We then identify a sharp perceptual access condition: when the discriminative statistic requires arithmetic -- modular addition (rotations) or multiplication (f(x)=cx mod p) -- model selection succeeds with integer tokens but fails completely with opaque symbols, and this boundary persists under 112x scaling (2.8M to 316M parameters). A stationarity control confirms the operative factor: opaque tokens with a fixed relabeling succeed (0.009-bit MAE), showing that stable semantics, not integer identity, enable circuit compilation. Header subtask diagnostics localize the failure to the composition of header inversion with arithmetic rather than header parsing itself. Probing frontier LLMs on the same tasks shows qualitative Bayesian behavior but a large calibration gap (~55x), measured through lossy probes and therefore directional rather than exact.

51. [Air Quality Arena: A Large-Scale Multi-Region Ground Monitoring Dataset and Benchmark for Air Quality Forecasting with Time-Series Foundation Models](https://arxiv.org/abs/2607.19381)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19381v1 Announce Type: new Abstract: Air pollution causes an estimated 7.9 million premature deaths annually, making accurate forecasting a critical public health priority. Machine learning is increasingly being applied to forecast air pollution levels, yet existing benchmarks remain narrow in both geographic scope and pollutant coverage, and fail to evaluate the latest generation of time series foundation models (TSFMs) on real world, large scale data. We present Air Quality Arena (AQA), a large scale multi-country and multi-pollutant dataset (AQA-Data) and benchmark (AQA-Bench) to address this gap. AQA covers 6 major pollutants over a three year period across 7 diverse countries and 4 continents, with more than 14,000 station-pollutant series, aiming to provide a comprehensive benchmark for air quality tasks. We benchmark this dataset across 11 leading time series foundation models and classical baselines to assess performance on short-term air quality forecasting. Our results demonstrate that TSFMs are effective zero-shot forecasters and consistently outperform classical baselines, with our top-performing model employing a cross-modal architecture that leverages a vision foundation model for time series forecasting. AQA is publicly released at AirQualityArena.github.io

52. [Challenges of Explainability in Continual Learning for Time Series Forecasting](https://arxiv.org/abs/2607.19382)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19382v1 Announce Type: new Abstract: Deep learning models have shown strong potential for time series forecasting, yet their deployment in real-world environmental monitoring remains challenging due to non-stationary dynamics and limited explainability. In this work, we investigate explainability as a central tool for understanding continual learning in adaptive time series forecasting, with Experience Replay strategies. We study neural forecasting architectures such as PatchMixer, PatchTST and DLinear, augmented with attention-based sampling mechanisms to support model adaptation over time. Explainability is leveraged through attention rollout and gradient-based attribution methods (Grad-CAM) to analyze both predictive behavior and sampling strategies within a continual learning framework. Experiments conducted on real-world piezometric time series exhibiting heterogeneous patterns and regime shifts show that analyzing model and sampling behaviors provides valuable insights into the dynamics of the continual learning framework. Beyond predictive performance, our results highlight the challenges and opportunities of using explainability to understand continual learning behaviors, revealing how attribution patterns evolve over time and how they can inform data selection and adaptation strategies in non-stationary forecasting scenarios.

53. [STN-TGAT: Top-K Portfolio Construction via Prior-Guided Graph Attention with Learnable Soft-Threshold Sparsification](https://arxiv.org/abs/2607.19385)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19385v1 Announce Type: new Abstract: This paper tackles the problem of stock ranking and portfolio construction under realistic investment settings by jointly modeling temporal dynamics and cross-sectional dependencies. We propose the Soft-Threshold NMI-prior Transformer Graph Attention Network (STN-TGAT), which integrates a temporal Transformer with a Graph Attention Network to capture long-horizon sequential patterns and dynamic inter-stock relationships. An NMI-based prior graph combined with a soft-threshold sparsification mechanism enhances structural robustness by mitigating noisy correlations while preserving informative connections. The portfolio formation process incorporates practical considerations, including Top-5 selection within the Top-50 $S\&P$ 500 constituents, explicit weight allocation, and transaction cost adjustment, thereby aligning the evaluation with real-world trading conditions. Empirical results on real-world data demonstrate that STN-TGAT consistently outperforms benchmark models from predictive accuracy and investment profitability measured by portfolio returns. These findings suggest that combining decision-aligned training with adaptive relational modeling provides a coherent and practically effective framework for data-driven portfolio construction.

54. [Neural Operator Surrogates for Two-Dimensional Neutron Flux Estimation](https://arxiv.org/abs/2607.19388)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19388v1 Announce Type: new Abstract: This work extends our one-dimensional single-sweep neural-operator studies to two dimensions. We consider one-group transport with isotropic scattering. As in the one-dimensional work, we use Fourier neural operators (FNOs) to approximate the high-fidelity scalar flux. Additionally, we also investigate U-shaped neural operators (UNOs) in this study. We consider three surrogates. The first two map the material and source fields directly to the flux, one using an FNO and one using a UNO. The third is an FNO that additionally takes the scalar flux after one source iteration, the single-sweep approximation, as an input. Each case is solved to high fidelity with a verified discrete-ordinates solver, and an average relative L_2 error norm is used to characterize the quality of the inferred maps. We train every surrogate over three random seeds so that differences between them can be assessed against run-to-run variability. Two questions guide the study: whether the single-sweep input improves accuracy over the direct maps, and whether training on the logarithm of the flux improves accuracy in the strongly attenuated regions relevant to shielding.

55. [Bayesian Inference: Kernel-Based Model for Surface Temperature Reconstruction in Ice Borehole Thermometry](https://arxiv.org/abs/2607.20322)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20322v1 Announce Type: new Abstract: Reconstructing past surface temperature from shallow ice borehole temperature profiles requires solving an ill-posed inverse problem while quantifying uncertainties arising from measurements and prior assumptions. Bayesian formulations enable probabilistic reconstruction of surface temperature histories and uncertainty quantification. Existing reversible jump-Markov chain Monte Carlo approach based on adaptive piecewise-linear surface temperature models can, however, be computationally demanding. Here, we introduce a kernel-based surface temperature model that enables the use of a parallel ensemble Markov chain Monte Carlo sampler for efficient exploration of the solution space and quantification of the posterior. Using synthetic experiments, we investigate the effects of kernel configuration, measurement uncertainty, measurement density, and temporal smearing on reconstruction performance. We find that reconstruction quality is largely insensitive to the number of kernels once the kernel basis is sufficiently dense. Reducing measurement uncertainty substantially improves reconstructions, whereas increasing the number of borehole temperature measurements provides only marginal benefit. Finally, we evaluate the method using realistic surrogate climate histories that combine long-term temperature changes with stochastic climate variability. The kernel-based surface temperature model cannot represent short-term variability and therefore cannot fully explain the realistic measurements, highlighting the need to account for this approximation uncertainty. The likelihood is adapted to include the approximation uncertainty of the surface temperature model, yielding robust reconstructions with reliable posterior uncertainties. Overall, our results demonstrate that kernel-based Bayesian inversion provides an efficient framework for shallow ice borehole based climate reconstructions.

56. [Reconstructing local environments from concise atomistic representations](https://arxiv.org/abs/2607.20338)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.20338v1 Announce Type: new Abstract: Symmetry-based representations of local atomic structure, such as the power spectrum or bispectrum, are routinely used to characterize the structural diversity of datasets and as input features for atomistic machine learning. Although these descriptors systematically incorporate increasingly complex geometric correlations, it remains unclear if a given feature can be mapped back to a discrete point cloud, whether such a reconstruction is unique, and how changes in the descriptor are reflected in the underlying atomic geometry. The choice and discretization of the radial and angular bases, as well as the high dimensionality of the resulting feature vectors -- which may contain hundreds or thousands of components -- make this interpretation even more challenging. In this work, we investigate the inverse problem of recovering atomic structures from invariant descriptors. We show that accurate reconstructions can be obtained from remarkably compact descriptors of different correlation orders, each comprising only a few tens of features. Even representations that are formally incomplete or locally ill-conditioned can be inverted to accurate geometric reconstructions of atomic environments across molecular and material datasets. Our reconstruction framework provides a general algorithmic means of identifying approximate degeneracies of invariant descriptors and recovering distinct atomic environments that cannot be distinguished by a given representation. Finally, by reconstructing atomic configurations from descriptors, we examine how perturbations in invariant descriptors of different correlation orders translate into structural distortions.

57. [Scale-Aware Learning of Chaotic Dynamics on Unstructured Meshes via Binned Spectral Losses](https://arxiv.org/abs/2607.19387)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19387v1 Announce Type: cross Abstract: Surrogate modeling for high-dimensional nonlinear dynamical systems that exhibit chaos requires mechanisms that preserve not only pointwise accuracy but also the scale-dependent structure of physical fields. Bandwise spectral power losses, such as the binned spectral loss function, provide such supervision on structured grids, where Fourier modes define a standard frequency decomposition. On irregular meshes, however, no canonical Fourier basis exists, and spectral representations must be constructed from graph operators induced by mesh connectivity and geometry. In this study, we extend the binned spectral power loss for application to unstructured-mesh surrogate modeling of nonlinear dynamical systems. This is obtained by replacing Fourier bands with graph-Laplacian frequency bands, and we provide scalable Chebyshev and multilevel approximations for improving long-horizon rollout fidelity. In its full-spectrum form, our approach uses graph Laplacian eigenspaces to provide a graph analogue of Fourier band-power matching, but incurs the high cost of spectral decomposition. As a scalable approximation, we replace exact band projectors with sparse Chebyshev polynomial graph filters, avoiding explicit eigendecomposition. When utilizing multilevel graph architectures, we introduce Graph Laplacian Energy Alignment for Meshes (GLEAM), which applies retained-subspace scale-aware supervision across graph hierarchies so that coarse and fine representations are regularized during autoregressive rollout. Our results show that the proposed spectral losses improve long-horizon rollout fidelity and preserve statistical invariants for the forecasting of turbulent flows on unstructured meshes, compared to deterministic baselines.

58. [A Scalable Fast Multipole Method Poisson Solver for the RAMSES code: II. Adaptive Mesh Refinement and Adaptive Time Stepping](https://arxiv.org/abs/2607.19489)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19489v1 Announce Type: cross Abstract: We present an extended implementation of a scalable, O(N) Poisson solver based on the fast multipole method (FMM), fully compatible with adaptive mesh refinement (AMR) and adaptive time stepping (ATS) within the RAMSES framework. Building on the unigrid algorithm in Lee & Teyssier (2026), we introduce several novel elements, including the use of multiple FMM trees, one for each AMR level, a merged FMM tree for all active levels to optimize neighbor searches, and the introduction of the concept of "nearest-field" to enforce force symmetry across refinement levels. Across a broad set of test problems, we find excellent, percent-level agreement with our reference traditional multigrid (MG) solver. We show, however, that FMM exhibits better momentum conservation properties across coarse-fine AMR interfaces. Finally, despite the overhead introduced by the spatio-temporal adaptivity, FMM shows better scalability than MG across various AMR configurations, with the largest gains obtained for the largest configurations.

59. [Robust Hierarchical Matrix Compression of Acoustic Volume and Boundary Integral Operators](https://arxiv.org/abs/2607.19500)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19500v1 Announce Type: cross Abstract: Discretizing integral formulations of the Helmholtz equation yields dense linear systems. Hence, simulating acoustic models at larger scales or higher frequencies is typically constrained by memory capacity. Fast algorithms, such as hierarchical matrix compression, reduce the memory footprint substantially while controlling the approximation error in matrix-vector multiplications. However, the commonly used Adaptive Cross Approximation suffers from early-convergence problems, where the iterative construction of low-rank decompositions stops before reaching the targeted error tolerance. This failure arises when the error estimator does not capture significant components of the matrix structure under partial pivoting. This manuscript proposes a new diagonal convergence criterion, additional matrix elements for the pivoting strategy, an extended admissibility condition, and a sustained convergence check to improve the robustness of hierarchical matrix compression. These modifications improve compression reliability without increasing memory. We tested our compression strategy on various discretized volume and boundary integral operators. The computational results show that our approach successfully compresses all benchmark matrices within predefined tolerances, thereby resolving the early-convergence issues encountered in standard algorithms. This robust matrix compression was achieved at the same memory footprint as alternative compression strategies. Furthermore, a complexity analysis shows log-linear memory scaling with mesh refinement at constant frequency. Finally, we successfully applied our robust matrix compression algorithm to a coupled system of volume and boundary integral operators that models transcranial ultrasound propagation. This confirms the feasibility of our robust algorithm to accelerate large-scale simulations with high-resolution meshes in a biomedical application.

60. [Nuclear Quantum Effects as a Denoising Problem](https://arxiv.org/abs/2607.19680)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19680v1 Announce Type: cross Abstract: Nuclear quantum effects are rigorously captured by imaginary-time path integrals, which map the quantum Boltzmann distribution onto a ring polymer of classical replicas. Yet the nuclear masses, the coupling to the environment, and the boundary conditions of the path remain hard-wired in the simulation or the trained model, even though this quantum context enters the path measure only through a quadratic action known in closed form. Here we show that a denoiser trained on classical Boltzmann statistics alone, composed at sampling time with an analytic Gaussian component carrying the entire quantum context, yields the quantum Boltzmann distribution of the nuclei. Such a composition exists and is exact whenever the training noise does not exceed the intrinsic quantum uncertainty of the target ensemble, and it is invariant across all quantum contexts admitted by this bound. We show exact transfer across temperature, isotopic mass, dissipation strength, and the boundary conditions of the path in theory and in numerical experiments, without retraining. The last yields the end-to-end displacement and momentum distributions of a tagged nucleus from open imaginary-time paths. The same invariance extends in principle to the permuted boundary conditions of bosonic exchange, with the identical denoiser. In this view, the noise of generative modeling and the quantum fluctuations of the nuclei are two faces of the same quadratic structure.

61. [Reduced-order non-self-consistent Monte Carlo simulation of a planar magnetron discharge: electron heating, recapture and racetrack formation](https://arxiv.org/abs/2607.19930)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19930v1 Announce Type: cross Abstract: A reduced-order non-self-consistent Monte Carlo model is presented for a circular planar magnetron discharge in argon. The model combines two magnetic-field representations, namely a superposition of magnetic dipoles and a numerically integrated field of the finite permanent magnets, with a prescribed one-dimensional sheath-bulk potential, adaptive fourth-order Runge-Kutta orbit integration, and a null-collision treatment of electron-argon collisions. The collision module reproduces the dependence of the electron drift velocity on the reduced electric field, but overestimates its absolute value by approximately a factor of 1.5. The resulting transport predictions are therefore interpreted semi-quantitatively. Applied to a magnetron geometry based on published Langmuir-probe measurements, the simulations reproduce the qualitative emergence of a cold electron population away from the cathode while retaining a hotter near-cathode component. Electrons returning to the cathode are reflected with a prescribed probability RC, which controls their availability for further ionising collisions. For racetrack calculations initiated with at least 2 x 10^4 cathode-emitted electrons and RC = 0.5, the finite-magnet field produces a more sharply localised erosion profile whose full width at half maximum is close to a geometric racetrack-width estimate. The dipole approximation yields a broader profile. The model is not a replacement for self-consistent PIC-MCC simulations, but is a computationally light tool for comparing magnetic-field representations and analysing electron heating, ionisation localisation, and racetrack formation.

62. [Rem3Di: Learning smooth, chiral 3D molecular descriptors from atomistic foundation models](https://arxiv.org/abs/2607.19977)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 23 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.19977v1 Announce Type: cross Abstract: Foundation machine-learned interatomic potentials (MLIPs) are trained on large quantum-mechanical datasets and generalise across broad regions of chemical and configurational space. Beyond their usual role in accelerating sampling-based simulations, their internal representations encode chemically rich local atomic environments. Here, we introduce Rem3Di, a representation-learning framework that repurposes latent features from atomistic foundation models as transferable molecular descriptors for property prediction and virtual screening. Rem3Di combines a potential's per-atom features into a single fixed-length descriptor of the whole molecule that varies smoothly with three-dimensional structure and is invariant to the ordering of the atoms. The descriptor can be used directly or fine-tuned for specific prediction tasks. To capture molecular handedness, Rem3Di constructs pseudoscalar features, which are unchanged by rotation but reverse sign under mirror reflection. This lets the descriptor distinguish enantiomers, which can differ in activity and toxicity. The transformer is pretrained on large molecular datasets by reconstructing corrupted atom features, so no experimental labels are required. Across public drug-property benchmarks, Rem3Di matches or exceeds published baselines without relying on classical 2D fingerprints. Additionally, the same descriptor yields chemically meaningful differentiation of transition-metal complexes without predefined bonding rules or handcrafted representations. Rem3Di therefore provides a route from simulation-trained atomistic representations to transferable, chirality-aware molecular representations for chemical machine learning.

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-22T19:13:12Z; Popularity: 751 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-23T00:43:55Z; Popularity: 706 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

65. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.63; Date: 2026-07-23T07:50:23Z; Popularity: 633 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

66. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.15; Date: 2026-07-21T03:12:15Z; Popularity: 155 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

67. [Show HN: Mwe-MCP – self-hosted memory for AI agents that knows who may know what](https://github.com/Fr4nZ82/mwe-mcp)
   - Source: Hacker News; Group: Tech community; Score: 2.15; Date: 2026-07-23T12:38:20Z; Popularity: 3 points, 0 comments
   - Summary: HN discussion: 3 points, 0 comments.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-23T11:51:14Z; Popularity: 103 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-16T09:54:45Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Benchmarking Confidential GPU Inference on NVIDIA H100 under Intel TDX

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.19353

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
