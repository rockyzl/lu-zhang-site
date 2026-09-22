# Daily signal sidecar - 2026-09-22

## Selected Signal

- Title: RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language Models
- URL: https://arxiv.org/abs/2609.20971
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language Models
- Primary source: https://arxiv.org/abs/2609.20971
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

Total candidates reviewed after duplicate-source filtering: 64

1. [RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language Models](https://arxiv.org/abs/2609.20971)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20971v1 Announce Type: new Abstract: Long-context large language model inference is increasingly limited by prefill, where dense self-attention processes the entire prompt before generation begins. Sparse block selection can reduce this cost, but a block centroid may hide a highly relevant token among many irrelevant ones. We call this failure mode mean dilution and propose RBS-Attention, a training-free sparse-prefill method with two complementary selection branches. A centroid base branch captures average relevance, while a rescue branch uses the maximum key-block radius and its prompt-, layer-, and head-dependent distribution to identify blocks at risk of underestimation. Independently thresholding the two branches and combining their masks controls the contribution of rescue blocks while preserving regular block-sparse FlashAttention execution. On H100 GPUs, RBS-Attention achieves 20.65$\times$ standalone prefill-attention speedup, 11.92$\times$ vLLM prefill-attention speedup, and 5.97$\times$ end-to-end time-to-first-token speedup at 128K on Qwen3-30B-A3B-Instruct-2507-FP8. On the dense Qwen3-32B model, it obtains 88.65 overall RULER accuracy versus 89.52 for dense attention; LongBench-v2, InfiniteBench, and Video-MME provide additional quality evaluation. Supporting experiments measure actual retention, compare selectors at matched density, and characterize block-size, threshold, and memory behavior. Together, these results support radius-adaptive dual-branch selection as an effective approach to long-context prefill.

2. [SpecOpt: Contact-Diff Reasoning for Agentic Molecule Optimization Toward Binding Specificity](https://arxiv.org/abs/2609.21165)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21165v1 Announce Type: new Abstract: Off-target protein binding is a major source of adverse effects for small-molecule drugs, yet most structure-based molecular design methods focus on generating selective compounds de novo rather than improving the selectivity of existing, well- characterized drugs. We introduce specificity optimization (SpecOpt), a molecular design task that seeks constrained structural modifications to an existing compound that increase its binding preference for an intended target over known off-targets while preserving its structural identity and drug-like properties. To enable systematic evaluation, we construct a ChEMBL-derived benchmark from compound-target interaction data, identifying intended targets through curated drug-mechanism annotations and off- targets through measured activities. We then develop an agentic framework that docks each compound against its intended target and off-targets, compares the resulting poses through residue-aware atom-protein contacts, and provides these differential interactions to a large language model to propose targeted structural modifications. Candidates are retained only if they satisfy molecular similarity, ADMET, and target-off-target docking selectivity criteria. On 915 compounds, the agent improves the target- off-target binding gap for 84.8% of compounds, shifting the mean gap from -0.72 to +0.47 kcal/mol while maintaining a mean Tanimoto similarity of 0.72 to the starting compounds. Ablation studies identify residue-specific contact information as the critical optimization signal: replacing residue identities with binary contact indicators eliminates improvement on all 29 ablation compounds. These results establish SpecOpt as a distinct molecular design problem and demonstrate residue-aware differential interactions as an effective signal for improving the specificity of existing compounds.

3. [Building standards for the next phase of AI](https://openai.com/index/building-standards-next-phase-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 21 Sep 2026 10:00:00 GMT
   - Summary: OpenAI outlines a path to shared global AI standards, calling for coordinated evaluation, reporting, and governance to improve safety.

4. [Attention-Aware Routing: Coupling Routing and Attention in MoEs](https://arxiv.org/abs/2609.20974)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20974v1 Announce Type: new Abstract: In Mixture-of-Experts language models, the router typically selects and weights experts based on the token's hidden state, utilizing limited contextual information. We propose Attention-Aware Routing (AAR), which augments the router with temporal and spectral features extracted from a sliding window of attention weights that represent a summary of the model's contextual state, disentangled from the hidden state. Keeping the base transformer entirely frozen, we train only the routing parameters, isolating routing as the sole variable. AAR improves GSM8K by +3.37 pp over a routing-only SFT baseline on OLMoE. Beyond performance, we show that routing and attention form a coupled circuit: routing changes at layer l propagate through the residual stream to amplify attention sinks at layer l+1, reshaping attention without any direct update to the attention mechanism itself. Further, AAR reduces long diverging generation, with incorrect answers getting shorter, while correct answers remain unchanged in length. Finally, AAR is strongly depth-sensitive: applying it indiscriminately across layers can degrade factual retrieval, whereas mathematical reasoning gains persist when it is introduced deeper in the network. This sensitivity exposes a retrieval--reasoning tension across depth and makes layer-selective AAR a controlled probe of the routing-relevant information carried by attention at different layers.

5. [CaLR: Causal Latent Revision for Robust Diffusion Reasoning](https://arxiv.org/abs/2609.20981)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20981v1 Announce Type: new Abstract: Autoregressive (AR) models suffer from local greediness, while diffusion language models (DLMs) often lack the strict causal structure required for reasoning. To combine the advantages and overcome the drawbacks of the dual, we propose Causal Latent Revision (CaLR), a framework that reformulates reasoning as constrained latent optimization. By adopting a causal topology matrix (CTM) from an expert model and implicit differentiation, CaLR performs gradient-guided ``thought revision" to enforce logical consistency, enabling dynamic self-correction of intermediate steps during parallel generation. Empirically, CaLR achieves SOTA DLM performance on complex benchmarks, surpassing strong AR baselines and demonstrating superior robustness in constrained tasks like Sudoku.

6. [LoRA Enhanced Contrastive Learning with SAS Vision Transformers](https://arxiv.org/abs/2609.21061)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21061v1 Announce Type: new Abstract: Automatic target recognition (ATR) with synthetic aperture sonar (SAS) supports advanced naval capabilities, but deep learning is constrained by scarce target imagery, background clutter, and human-in-the-loop assessment. We adapt DINOv3 Vision Transformer (ViT) models to underwater SAS ATR using a three-stage parameter-efficient framework. Stage 1 uses Low-Rank Adaptation (LoRA) while freezing the ViT backbone, bridging the gap between natural-image pretraining and underwater acoustic propagation. Stage 2 uses hard-negative mining to strengthen the decision boundary against acoustic mimics, including rocks and sediment formations resembling man-made targets. Stage 3 uses Supervised Contrastive Learning (SupCon) to separate target and clutter representations. We evaluate at-sea SAS data using a mission-level geographic split, compare all arms at 85 percent test recall, and repeat each comparison over three random seeds. LoRA accounts for the primary effect, increasing area under the precision-recall curve (AUPRC) from 0.300 to 0.679 +/- 0.027 using the same frozen backbone. Rank 4 achieves this result while training only 0.26 percent of weights. Neither refinement stage exceeds its matched control: hard-negative mining changes AUPRC by -0.0045 +/- 0.0119 versus an equal-size random curriculum, and SupCon changes AUPRC by +0.0002 +/- 0.0096 versus the preceding stage. These null results indicate that mining occurred on data the encoder had already fit and that supervised stages had already imposed most target-clutter geometry. One efficient adaptation stage is sufficient; stacked refinement is not.

7. [Clinician-Grounded Quality Assurance for AI-Assisted Psychiatric Intake](https://arxiv.org/abs/2609.21149)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21149v1 Announce Type: new Abstract: Before patients can use AI-assisted psychiatric intake systems, health systems need practical ways to routinely evaluate these tools against their clinical standards for quality assurance. Because clinicians may use different intake styles, evaluation for this task must (1) support comparison across interviewing approaches, (2) minimize clinician burden, and (3) measure clinically relevant performance for health systems deploying these technologies. We present a clinician-grounded evaluation platform built around a memory-augmented patient simulator for open-ended AI interviewing, InterviewPlayground. We created interactive patients using InterviewPlayground with our expert-authored vignettes, constructed a simulated intake platform for the interviews, and designed evaluation modalities relevant to intake. In a pilot of 6 clinicians in a 25-minute assessment compared to a GPT-based LLM intake interviewer, the LLM recovered more of the clinically relevant items embedded in the patient vignettes (88.0% vs. 38.9%), but made more clinical inferences not based on the interview (56.8% vs. 27.8%), and characterized identified safety concerns less often (33.3% vs. 66.7%), setting the stage for deployed quality assurance for this task.

8. [Correcting Learning-based Perception for Safety](https://arxiv.org/abs/2609.22108)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22108v1 Announce Type: new Abstract: Learning-enabled perception is important in many autonomous systems. Unlike traditional sensors, the boundary where ML perception does or does not work is poorly characterized. Incorrect perception can lead to unsafe or overtly conservative downstream control actions. In this paper, we propose a two-step strategy for correcting ML-based state estimation. First, an offline computation is used to characterize the uncertainties resulting from the ML module's state estimation, using preimages of perception contracts. Second, at runtime, a risk heuristic is used to choose particular states from the uncertain estimates to drive the control decisions. We perform extensive simulation-based evaluation of this runtime perception correction strategy on different vision-based adaptive cruise controllers (ACC modules), in different weather conditions, and road scenarios. Out of 45 ACC scenarios where the original perception-based control system using Yolo and LaneNet led to safety violations, in 73% of the scenarios, our runtime perception correction preserved safety; our method wouldn't be able to recover 27% of the scenarios where the construction of the preimages of perception contracts is not fully conformant. Further, our runtime perception correction strategy is not overly conservative---on the average only a 2.8% increase in completion time is experienced in the corrected scenarios, with mild interventions.

9. [Success Leaves Detours: Learning Executable Walkthroughs for Long-Horizon Agents](https://arxiv.org/abs/2609.22120)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22120v1 Announce Type: new Abstract: Test-time self-evolving agents improve by reusing past experience, yet sparse-reward trajectories contain failures, loops, and detours, while summaries often omit the state conditions and action dependencies needed for execution. We study executable Walkthrough induction from sparse-reward trajectories: extracting compact, state-conditioned, and verifiable procedures. Our key observation is that delayed credit identifies actions associated with progress but cannot determine whether they produce facts required by later actions. We propose Trace, a credit-guided, dependency-grounded framework that compiles noisy trajectories into executable Walkthrough Memory. It detects progress anchors from rewards and persistent state changes, propagates credit to identify valuable transitions, and estimates action prerequisites from cross-episode success and failure evidence. Backward dependency slicing then traces required facts to their producers, extracting dependency-consistent action chains while removing irrelevant loops and detours. The resulting Walkthroughs encode entry conditions, ordered state--action--effect steps, and completion and failure predicates, supporting reuse, intermediate-state resumption, and programmatic verification. Experiments on J-TTL, WebShop, and ScienceWorld with three open-source LLMs show that Trace consistently outperforms eight test-time learning and memory baselines. Compared with the strongest baseline, it improves average AUC and Final-$3$ by $30.0%$ and $40.5%$, respectively, while using fewer inference tokens. These results show that long-horizon interaction benefits more from state-conditioned executable procedures than from complete trajectories or abstract summaries.

10. [Stochastic consensus dynamics for decentralized decision systems](https://arxiv.org/abs/2609.22454)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22454v1 Announce Type: new Abstract: A fundamental mechanism underlying collective phenomena in social, technological, and economic systems is decentralized decision-making, in which the behavior of individual agents follows from local interactions in the absence of central coordination. Consensus formation is a central feature of such systems, with relevance to blockchain networks, distributed artificial intelligence, autonomous multi-agent systems, distributed control, and collective decision networks. We investigate consensus formation using a stochastic consensus model on random networks and examine how initial conditions, network connectivity, and system size shape the emergence of unanimous states. We show that the stochastic dynamics strongly amplify small initial majorities, progressively suppress the competing state, and drive the system toward a predictable collective outcome. Network connectivity primarily controls the efficiency of this process: increasing connectivity accelerates the propagation of local agreement and reduces the likelihood that fluctuations reverse the initially dominant state, although these gains gradually saturate in highly connected networks. System size produces a complementary effect. Larger networks require more individual updates to reach unanimity, but they are also increasingly reliable in selecting the state favored by the initial majority. Finite-size analysis shows that the range of initial conditions associated with uncertain outcomes becomes progressively narrower as the network grows, decreasing approximately with the inverse square root of the system size. These results reveal a collective amplification mechanism by which weak initial asymmetries become increasingly decisive in large decentralized networks, and they provide a simple framework for understanding the efficiency, predictability, and reliability of consensus formation in distributed decision systems.

11. [Priorities and principles for effective third party assessments](https://openai.com/index/priorities-principles-third-party-assessments)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT
   - Summary: OpenAI outlines priorities and principles for rigorous, secure, and independent third-party AI safety assessments of frontier models and safeguards.

12. [Higgsfield AI ships new video features in a day with GPT-6 Astra](https://openai.com/index/higgsfield-from-prompt-to-production-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 12:00:00 GMT
   - Summary: With GPT-6 Astra, Higgsfield AI makes video ad creation easier for small businesses and brings new creative tools to market faster.

13. [Advisory Group on Mathematics and Artificial Intelligence](https://openai.com/index/advisory-group-on-mathematics-and-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 12:00:00 GMT
   - Summary: OpenAI is working with an independent Advisory Group on Mathematics and Artificial Intelligence to guide the review and communication of emerging AI results.

14. [Expanding OpenAI Academy with new learning paths](https://openai.com/index/expanding-openai-academy-with-new-learning-paths)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 07:00:00 GMT
   - Summary: Explore new OpenAI Academy learning paths for employees, developers, leaders, educators, and students to build and demonstrate practical AI skills.

15. [How V7 gives AI agents institutional memory](https://openai.com/index/v7)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 GMT
   - Summary: Using GPT-5.6, V7 turns scattered company files into context agents can use to complete complex, source-linked work.

16. [Introducing the Australian Youth Safety Blueprint](https://openai.com/index/australian-youth-safety-blueprint)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 18 Sep 2026 12:00:00 GMT
   - Summary: OpenAI introduces the Australian Youth Safety Blueprint, a six-pillar roadmap for safer AI experiences that protect and empower young people.

17. [How Cooley is accelerating IPO work with ChatGPT](https://openai.com/index/cooley-gopublic)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 17 Sep 2026 12:00:00 GMT
   - Summary: Cooley built GO Public with ChatGPT Work to bring intelligence to the IPO process, helping lawyers surface issues earlier and focus judgment where it matters most.

18. [Helping older adults use AI in everyday life](https://openai.com/index/helping-older-adults-use-ai-in-everyday-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 16:00:00 GMT
   - Summary: OpenAI and AARP are bringing free, hands-on ChatGPT workshops to 1,000 older adults across 10 U.S. cities to build practical AI skills safely.

19. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

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

24. [How UK AISI and EvalEval Are Making Benchmark Results Reproducible](https://huggingface.co/blog/evaleval-aisi)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

25. [Transformers now runs llama.cpp quants](https://huggingface.co/blog/transformers-llama-cpp-quants)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

26. [Jun Kim, oMLX creator and maintainer, joins Hugging Face to support the MLX community](https://huggingface.co/blog/omlx)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

27. [Pruning LLMs Like a Physicist: Block Removal as an Ising Optimization Problem](https://huggingface.co/blog/MultiverseComputingCAI/pruning-llms-like-a-physicist-block-removal-as-an)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 13:44:34 GMT

28. [tokenizers v1: encode, decode and scaling, measured](https://huggingface.co/blog/tokenizers-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 GMT

29. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

30. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

31. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

32. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

33. [Detecting Hallucination in LLMs: Tracing the Topological Signatures of Impaired Context Sharing](https://arxiv.org/abs/2609.21096)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21096v1 Announce Type: new Abstract: In this work, we examine the topology of information flow patterns within attention graphs to effectively distinguish hallucinated from non-hallucinated responses. We analyze the Forman-Ricci curvature to identify structural patterns indicating information bottlenecks in attention graphs. We then introduce a method that captures both semi-local and global information-flow characteristics of attention heads associated with hallucinated responses. We evaluate our approach extensively across several LLMs and established benchmarks. Empirical results demonstrate that our proposed single-pass approach provides consistent improvements over existing attention-based and multi-response baselines across two hallucination-detection benchmarks, while achieving competitive performance across diverse LLM architectures. Further analysis reveals that impaired context sharing among tokens during causal generation is strongly associated with hallucination occurrences in LLMs. In particular, hallucinated responses are consistently characterized by an over-reliance on self-attention, diffused context retrieval from earlier tokens, or information over-squashing, especially in the final transformer layer.

34. [Decoupling Internal Representational Changes and Causal Importance in Fine-Tuned Large Language Models](https://arxiv.org/abs/2609.21113)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21113v1 Announce Type: new Abstract: Fine-tuning has emerged as a widely adopted approach for adapting LLMs to a variety of downstream tasks. However, how it reshapes their internal mechanisms remains poorly understood. To address this, we investigate how fine-tuning alters internal representations in LLMs, including attention patterns and layer-wise activations, and examine whether these changes are linked to task-relevant components identified by EAP (e.g., attention heads and logit-level activations) that drive task performance. We find that EAP-identified components are concentrated within specific layers, indicating a degree of functional localisation in how models internalise task-specific behavior. Notably, the distribution of these components across layers is largely uncorrelated with the layers undergoing the most substantial representational changes during fine-tuning. Furthermore, we observe that overlap in EAP-identified components across tasks does not translate into cross-task performance transfer if the tasks are different in nature (e.g. classification vs. generative tasks). More specifically, fine-tuning on one task can lead to a degradation of performance on another when the two tasks exhibit a high degree of overlap in their EAP-identified components.

35. [TinyCeNN-LM: Quality-Gated Conversion of Pretrained Attention with CeNN-Inspired Cellular-Recurrent Layers](https://arxiv.org/abs/2609.21139)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21139v1 Announce Type: new Abstract: Replacing attention in a pretrained language model is a compatibility problem: a plausible substitute may alter representations expected by later layers. TinyCeNN-LM introduces a \emph{quality-gated post-training conversion} framework using CeNN-inspired cellular-recurrent layers with bounded local processing, compact recurrent memory, routing, fusion, and accept-or-rollback validation. Three implementations are studied: Integrated Memory, MemoryFusion, and PDelta3-GDN2-CLVR+Local32. Strict PDelta3 conversion accepts a layer only when representation and NLL criteria pass fixed thresholds. On SmolLM2-135M, layers 0-2 are accepted with cumulative $\Delta\mathrm{NLL}=+0.01209$, while layer 3 is rejected despite acceptable NLL because representation fidelity fails. On Qwen3.5-0.8B, full-attention layers 3, 7, and 11 are accepted with final $\Delta\mathrm{NLL}=+0.02073$. Integrated Memory keeps perplexity within $-0.07\%$ to $+0.93\%$ while reducing total cache by up to $6.01\%$. A sampled 200-item downstream sanity check gives $28.5\%$--$32.0\%$ overall accuracy for converted Qwen releases. The results support conservative, quality-gated structural conversion rather than universal attention replacement or speedup.

36. [ZoAQ: Adaptive Zeroth-Order Querying via Query-Reuse Coupling](https://arxiv.org/abs/2609.22115)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22115v1 Announce Type: new Abstract: Zeroth-order optimization (ZOO) estimates updates from function evaluations, making perturbation queries a primary cost. Fixed budgets spend the same number of queries at every step, while adaptive controllers may offset their savings by using additional oracle calls to test estimator reliability. We introduce ZoAQ, an adaptive ZOO method built around query reuse. Rather than discarding past evaluations after each step, ZoAQ makes them useful for both the next update and the decision to query further. This enables adaptive query allocation without extra validation queries. Our analysis characterizes when this agreement identifies an update that supports descent and guides the controller to a sufficient query budget. On synthetic objectives, ZoAQ reduces queries by 43-48% relative to fixed baselines using 1.2M queries. In black-box attacks, it reaches 100% success with 320 and 625 average queries on MNIST and CIFAR-10, respectively. Across four OPT fine-tuning settings, ZoAQ saves 43-46% forward evaluations relative to fixed K=4, with accuracy changes within tasks ranging from -0.018 to +0.010.

37. [Gradient-estimator design overcomes trainability barriers in neural-network-based variational optimization](https://arxiv.org/abs/2609.22342)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22342v1 Announce Type: cross Abstract: Neural networks provide expressive representations for scientific computing. However, even sufficiently expressive networks can suffer training failure in weak-gradient regimes, limiting their practical use in quantum many-body physics and ab initio quantum chemistry. Here we derive an unbiased direct gradient estimator and introduce the adaptive minimum-variance phase (AMVP) estimator for neural-network variational optimization. By improving the signal-to-noise ratio of weak gradients, these methods enable reliable scientific calculations where training previously failed, while substantially reducing computational cost. The framework enables compact networks to outperform larger and fine-tuned default standard-estimator models with over an order of magnitude less GPU time on correlated flux models, and ultimately exceed the density matrix renormalization group (DMRG) accuracy. It further achieves chemical accuracy in N$_2$ bond breaking and, for the first time, in heavy-element I$_2$ with explicit spin-orbit coupling. These results demonstrate that gradient-estimator design expands the capabilities of neural-network variational methods for accurate scientific computing.

38. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.91; Date: 2026-09-22T15:49:48Z; Popularity: 1,908 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

39. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-20T03:29:46Z; Popularity: 486 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

40. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-09-22T14:22:12Z; Popularity: 366 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

41. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-22T16:47:50Z; Popularity: 247 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

42. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

43. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

44. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

45. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

46. [PRQuant: Permutation Residual Quantization for Low-Overhead Inference](https://arxiv.org/abs/2609.22106)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22106v1 Announce Type: new Abstract: Accuracy of Low-bit quantization of linear layers is often dominated by a small number of outliers. Although existing methods, such as smoothing, rotation, or residual-based approaches, may mitigate this problem, they often introduce new accuracy bottlenecks to weights. Besides, most of these techniques are implemented as online approaches, which can result in heavy execution overheads. To address the afore-mentioned issues, We propose PRQuant (Permutation Residual Quantization), a training-free and low-overhead framework that combines channel reorganization with static weight-side residual compensation. After AWQ-style scaling, PRQuant identifies the input channels that contribute most to weight quantization error, permutes them into contiguous tail blocks, and constructs their residual weight sub-tensors offline. During inference, this contiguous structure enables the activation side to use tail blocks seamlessly without the expensive online gathering operation, and turns scattered residual compensation into a regular tail-augmented GEMM, substantially reducing latency. Experiments demonstrate that PRQuant effectively reduces down-projection reconstruction error. Ablation studies confirm that smoothing and residual compensation are the primary drivers of numerical improvement, while permutation provides a consistent marginal numerical benefit and, more importantly, enables a hardware-friendly contiguous layout that eliminates dynamic gathering overhead. Overall, PRQuant outperforms default MXFP4 and the evaluated PTQ baselines in average accuracy across five downstream benchmarks, improving over MXFP4 by 1.24 and 0.55 on Qwen3-4B-Instruct-2507 and Qwen3-30B-A3B-Instruct-2507, respectively.

47. [Toward Fairness in Machine Learning Models for Predicting Treatment Retention and Premature Discontinuation in Medication for Opioid Use Disorder](https://arxiv.org/abs/2609.22113)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22113v1 Announce Type: new Abstract: Persistent low retention and completion rates in medications for opioid use disorder (MOUD) have driven the use of machine learning (ML) models to predict retention and identify patients at risk of premature discontinuation. However, the fairness of these models across patient populations remains largely unexplored, raising concerns about their application in treatment decision support. This study systematically assesses algorithmic fairness in ML models for predicting MOUD retention and premature discontinuation and investigates the effectiveness of bias mitigation techniques. Using the cross-sectional Treatment Episode Data Set-Discharges (TEDS-D), which includes treatment episodes for individuals in the U.S. discharged between 2015 and 2019, we trained four ML models to predict premature treatment discontinuation and retention beyond 180 days among individuals receiving outpatient MOUD. We evaluated overall performance and subgroup-level error rates across patient subgroups defined by race, ethnicity, age, and sex, complemented by model explanation analyses. We further assessed bias mitigation techniques and their effects on both fairness and predictive performance. Our findings demonstrate that ML models for MOUD outcome prediction can exhibit subgroup-level performance gaps even when overall predictive performance appears acceptable and that bias mitigation can reduce, but not fully eliminate, these gaps without trade-offs. By demonstrating the importance of fairness-aware evaluation and transparent reporting of subgroup performance, this study provides practical insights for the responsible and context-sensitive use of ML models for risk stratification and care prioritization in MOUD treatment settings.

48. [LE4Mob: Towards Inductive, Distance-Aware and General-Purpose Location Embedding for Human Mobility Modelling](https://arxiv.org/abs/2609.22117)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22117v1 Announce Type: new Abstract: Location representations provide mobility models with fundamental information about the spatial position, functional characteristics, and relationships of places. However, existing embeddings are often dependent on mobility observations, unable to represent unseen locations, and weakly constrained to retain geographic distance. This limits their reuse across datasets and mobility tasks. To address these limitations, we propose LE4Mob, an inductive, distance-aware, and geography-derived location embedding framework for mobility modelling. LE4Mob extends contrastive language-location pre-training while introducing a distance-aware regularisation objective that encourages the embedding space to preserve spatial relationships. Pre-trained from geographic context, LE4Mob can encode rich spatial-semantic information and generate embeddings for unseen locations inductively. Its independence from downstream mobility task supervision also makes it transferable across different mobility tasks. We evaluate LE4Mob on individual-level next location prediction and population-level commuter flow generation. Experiments across multiple datasets and study areas show that LE4Mob outperforms strong baselines, with particular advantages in inductive settings and when downstream models rely directly on interactions between location embeddings. These findings demonstrate the potential of distance-aware, geography-derived location representations as reusable foundations for human mobility modelling.

49. [Rank Portability Does Not Imply Feasibility Portability: Target-Specific Evaluation of Joint Hardware Constraints](https://arxiv.org/abs/2609.22122)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22122v1 Announce Type: new Abstract: Cross-device hardware evaluation often assumes that if architecture rankings transfer across devices, a proxy device can support target-side model selection. We stress-test this assumption for joint latency-energy feasibility across two public architecture families. On NAS-Bench-201, cross-device rank correlations are moderate, while target-comparable feasible-set overlap remains incomplete. A faithful AdaProxy diagnostic substantially improves latency ranking, showing that the observed boundary failures are not simply due to weak adaptation. Exact finite-sample split-conformal analysis also exposes an evidence bottleneck: a finite one-sided 90% threshold requires at least nine calibration observations. We then replicate the phenomenon on 10,000 GPT architectures across 13 HW-GPT-Bench devices. Relative to an RTX3080 proxy, target latency SRCC ranges from 0.951 to 0.996, yet proxy-reuse violation risk ranges from 33.3% to 100% under matched joint constraints. These results show that rank portability, feasibility portability, and target-specific decision support are distinct evaluation objects. Cross-device evaluations should therefore report which target environments actually support the operating point being claimed.

50. [TubeLab: Interactive inverse design of wind instrument bores with hard spectral constraints](https://arxiv.org/abs/2609.22468)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22468v1 Announce Type: new Abstract: We present TubeLab, a browser-based acoustic simulator and inverse design tool for wind instrument bores without tone holes. The direct problem is solved by a Transfer Matrix Method. Inverse design - finding a bore correction that shifts selected resonance frequencies toward specified musical targets - is formulated as a Tikhonov-regularized least-squares problem whose Jacobian is computed by a single adjoint backward pass per mode. Modes whose frequencies must be preserved are handled by a saddle-point formulation that enforces hard equality constraints regardless of the regularization strength. Resonance frequencies agree with state-of-the-art finite-element calculations to within 1.21 cent over eleven geometries and 132 mode pairs. Experimental validation against tap-tone measurements of 16 numerical control-machined didgeridoos spanning six distinct bore designs yields 9.6 cent RMS deviation over 189 matched mode pairs. Replicate specimens of the same nominal bore disagree with each other by 4.5 cent RMS, so about 36% of the residual variance is fabrication scatter.

51. [Exact ballistic energy transport and emergent XXZ dynamics in an integrable three-state chain](https://arxiv.org/abs/2609.22817)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22817v1 Announce Type: new Abstract: We investigate the coupling dependence of ballistic energy transport and the emergent spin dynamics in an integrable Hermitian three-state chain that connects a clock interaction to a highly degenerate flag limit. By constructing a regular $R$-matrix to establish a globally conserved energy current, we analytically evaluate its full variance to obtain the exact, strictly positive leading high-temperature coefficient of the thermal Drude weight and the ballistic growth rate of the energy-correlation second moment. In the strong-coupling limit, the degeneracy is lifted by virtual transitions of a delocalized third-color spectator state, which generates an effective spin-$1/2$ XXZ Hamiltonian with anisotropy $\Delta = -1/2$ and fundamentally selects the all-active two-color sector as the true ground state. For periodic boundaries, this virtual spectator motion introduces a positive length-changing XXZ supercharge squared that, for $L\ge4$, strictly annihilates all states within a finite, length-independent energy interval above the ground state. Consequently, we rigorously prove that the full periodic effective theory perfectly replicates the exact low-energy XXZ spectrum, including all state multiplicities, as well as its macroscopic bulk free-energy density.

52. [Diff-NekRS: A Scalable Differentiable Framework for Multi-Timestep Solver-in-the-Loop Training](https://arxiv.org/abs/2609.23208)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.23208v1 Announce Type: new Abstract: Hybrid physics-machine-learning solvers improve under-resolved simulations by embedding trainable corrections into the time integration. During autoregressive inference, repeated solver-model interactions can amplify small errors, motivating multi-timestep solver-in-the-loop training. However, production solvers rarely expose the derivatives needed to backpropagate through such rollouts. We introduce Diff-NekRS, a scalable differentiable framework that embeds neural corrections directly in the GPU-accelerated NekRS incompressible-flow solver. NekRS computes the authoritative forward trajectory, a manually implemented exact discrete adjoint differentiates the supported fully discrete timestep, and LibTorch supplies neural vector-Jacobian products and parameter gradients. End-to-end Taylor and centered finite-difference tests verify the assembled gradient for two-dimensional cylinder flow (2Dcyl) and the three-dimensional Taylor-Green vortex (3DTGV) across five horizons and 12-1,020 MPI ranks. At 1,020 ranks, optimizer-enabled post-setup training updates retain 54.5%-78.0% and 80.7%-81.9% weak-scaling efficiency for 2Dcyl and 3DTGV, respectively. In 200-step autoregressive inference, the M = 50 model reduces the three-seed median terminal relative L2 velocity error by 59.2% for 2Dcyl and 12.1% for 3DTGV relative to the uncorrected coarse-grid P = 2 baseline, and retains wall-clock speedups of 5.38x and 2.49x, respectively, relative to the corresponding P = 7 configurations for equal simulated-time intervals. These results establish a verified and scalable path for multi-timestep solver-in-the-loop training that improves coarse-grid trajectory accuracy while retaining a speed advantage over the high-order reference

53. [MadVfold: accelerating NLO event generation and reducing negative weights with SIMD vectorization and GPUs](https://arxiv.org/abs/2609.23500)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.23500v1 Announce Type: new Abstract: NLO simulations are essential for LHC physics analyses but are expensive, as they are not only slow but also lead to negative weights, which imply the need to simulate much larger samples of events. Folding is a powerful technique to reduce negative weights but is itself expensive. In this paper I propose ``vectorized folding'' as a new idea to speed up these calculations using SIMD and GPUs, and I present its CUDACPP-based implementation for MG5aMC in MadVfold, including its extension for unfolded NLO event generation. Preliminary results show overall speedups around 6x to 9x with folding and 3x without it. This work is based on a test-centric, LLM-assisted software development process.

54. [A subcell-refined entropy-residual-driven limiting strategy for high-order discontinuous Galerkin methods](https://arxiv.org/abs/2609.24268)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.24268v1 Announce Type: new Abstract: Fine-grained, subcell-level dissipation control is essential for achieving robust high-order discontinuous Galerkin (DG) simulations of nonlinear hyperbolic systems in under-resolved regimes while preserving accuracy. This paper proposes a subcell-refined entropy-residual-driven limiting strategy for DG on Legendre-Gauss-Lobatto nodes. The limiter introduces only nearest-neighbor pairwise dissipation within each element, with closed-form coefficients that supply the minimal dissipation required to restore the element entropy inequality. The strategy is a diagonal, locally stable approximation of classical entropy-stable methods, and a generalized subcell framework reveals split-form DG and residual-distribution-based entropy correction schemes as particular choices of the limiting coefficients. For the Euler equations, a physically consistent jump operator separately models thermal and shear entropy production while preserving velocity and pressure equilibrium; a subcell refinement of the Zhang-Shu positivity limiter ensures pointwise positivity. Extensive numerical tests confirm that the scheme maintains optimal high-order accuracy, strictly enforces entropy dissipation, and significantly reduces the difficulty of a posteriori positivity-preserving procedures.

55. [VNS Tokamak for Medical Isotope Production](https://arxiv.org/abs/2609.24371)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.24371v1 Announce Type: new Abstract: The Volumetric Neutron Source (VNS) tokamak is a proposed fusion reactor for testing components under fusion neutron irradiation, and has potential use for radioisotope production. The VNS geometry is modeled in the Serpent 2.2.2 and OpenMC 0.15.2 neutronics codes. Coupled neutron-photon simulations compared fluxes, spectra, and selected reaction rates in the blanket and vacuum vessel. Good agreement was found overall, with the largest difference found in (n, 2n) reactions. On an HPC cluster, Serpent 2 was found to have shorter computation time in coupled simulations, while OpenMC was faster in neutron only simulations. Radioisotope production yields were simulated in Serpent 2.2.2 for capsule and Cobalt plate irradiation facilities. Results indicate potential for large volume production of 99Mo, 131I, 225Ac, 177Lu, 192Ir, 64Cu, 67Cu, 161Tb, and 153Sm while 203Pb indicates lower potential. 100Mo and LEU target heating was calculated, suggesting the LEU target mass or the cooling may need adjustment. Optimized 60Co production yielded 1.2 GBq/mg and 100,000 TBq after a 3-year irradiation period. Sensitivity to plant outage for 99Mo, 131I, 177Lu, and 60Co was simulated, suggesting irradiation can be restarted for the same isotope loading and demonstrated long-lived 60Co to be robust to long plant dwell-time.

56. [Real-Time SiPM Pulse Deconvolution for a High-granularity Dual-readout Calorimeter with Neutral Networks](https://arxiv.org/abs/2609.22269)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22269v1 Announce Type: cross Abstract: The High-Granularity Dual-Readout Calorimeter (HG-DREAM) designed for FCC-ee aims to achieve unprecedented energy resolution through fine three-dimensional shower imaging, simultaneous measurement of Cherenkov and scintillation signals, and machine learning capabilities. A key enabling technology is longitudinal segmentation via timing measurements, where multiple energy deposits along optical fibers are distinguished by the arrival times of Cherenkov photons. We present quantized one-dimensional convolutional neural networks that predict pulse locations directly from 80-sample, 16 ns waveforms digitized at 200 ps, and evaluate their implementation in front-end electronics. Three architectures, a compact baseline and two variants using dilation and stride to reach the $\sim$ 20-sample receptive field set by the SiPM pulse width, achieve ROC AUC above 0.95 with four to eight filters per layer. Fixed-point quantization to a $ $ baseline costs less than $10^{-3}$ in AUC relative to the floating-point reference. Applied to pairwise deposits, the smallest model separates two pulses with better than 95\% probability at longitudinal separations of 20 cm and above. Synthesized at 400 MHz, this model uses 9663 LUT on a Xilinx XCVU13P FPGA and occupies $\sim$ 18500 $\mu$$m^2$ in TSMC 28 nm CMOS with reconfigurable weights. Assuming a triggered readout architecture for FCC-ee, the $\sim$ 500 kHz Z-pole trigger rate will be the most stringent throughput requirement across all FCC-ee operating modes. The ASIC implementation of the model sustains 4.8 MHz, exceeding the 0.5 MHz requirement by an order of magnitude, while the reconfigurable-weight FPGA implementation fails to do so. Sustaining the 40 MHz FCC-ee Z-pole bunch-crossing frequency in the triggerless architecture is not feasible with the models developed and the hardware targeted in this work.

57. [LiNiO2/NiO Phase Prediction Using Artificial Neural Networks](https://arxiv.org/abs/2609.22604)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 22 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22604v1 Announce Type: cross Abstract: In the realm of material analysis, identifying different material phases is of key importance. Artificial intelligence in the form of neural networks provides a very fast and, once trained, computationally inexpensive method for analysing large amounts of image data, like the sets of diffraction patterns generated during four-dimensional scanning transmission electron microscopy (4DSTEM) dataset acquisition. In this work, we train multiple network architectures on images of this type to distinguish between the phases of LiNiO2 and NiO, an important and challenging distinction in the lithium-ion battery community, since the formation of NiO limits battery capacity. We test both classical convolutional neural networks (CNNs) and different forms of vision transformers (ViTs). Our networks are trained on synthetic images and tested on experimentally recorded diffraction patterns. Additionally, we also investigate the decision-making of our networks using the GradCAM method. We test our networks on both synthetic as well as experimental diffraction patterns. Our networks exhibit very robust results, especially when dealing with highly varying data, an area where traditional template-matching methods typically struggle.

58. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

59. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-22T09:57:28Z; Popularity: 749 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

60. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.26; Date: 2026-09-22T17:36:54Z; Popularity: 1,258 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

61. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-22T06:46:09Z; Popularity: 233 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

62. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.13; Date: 2026-09-22T09:28:51Z; Popularity: 126 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

63. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-17T09:23:32Z; Popularity: 8 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

64. [Show HN: AI·rete·RAG – a Rete rule engine decides, RAG explains why](https://ai-rete-rag.com/)
   - Source: Hacker News; Group: Tech community; Score: 1.70; Date: 2026-09-22T16:15:06Z; Popularity: 14 points, 0 comments
   - Summary: HN discussion: 14 points, 0 comments.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language Models

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.20971

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
