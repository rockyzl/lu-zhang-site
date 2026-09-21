# Daily signal sidecar - 2026-09-21

## Selected Signal

- Title: Can Agents Design Better Chips with a Higher Level Abstraction?
- URL: https://arxiv.org/abs/2609.21157
- Source: arXiv cs.AI
- Score: 8.00

## Candidate Review

- Signal: Can Agents Design Better Chips with a Higher Level Abstraction?
- Primary source: https://arxiv.org/abs/2609.21157
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

Total candidates reviewed after duplicate-source filtering: 65

1. [Can Agents Design Better Chips with a Higher Level Abstraction?](https://arxiv.org/abs/2609.21157)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21157v1 Announce Type: new Abstract: Large Language Model (LLM) agents are increasingly being explored for chip design, but most existing approaches operate directly at RTL. We ask whether agents can design better chips by leveraging higher-level abstractions. We compare Direct RTL Design, Agent-based HLS Design, Post-Compiler HLS Refinement, and Post-HLS RTL Refinement, and combine Agent-based HLS Design with Post-HLS RTL Refinement as Agent-based HLS with RTL Refinement (AHRR). We use FPGAs as a practical, easy-to-deploy platform for end-to-end evaluation, but note that the design-flow tradeoffs we study are largely independent of the target technology. Across a diverse 11-tasks benchmark suite, AHRR achieves a 2.6$\times$ geometric-mean speedup over Direct RTL Design across our benchmark suite. Case studies show that HLS distills design knowledge into abstractions that agents can leverage, while RTL refinement recovers lower-level optimization opportunities. Together, these results make AHRR a promising workflow for agentic chip design. The code and evaluation artifacts are available at https://github.com/ZijD/AHRR.

2. [RBS-Attention: Radius-Bounded Sparse Prefill for Long-Context Large Language Models](https://arxiv.org/abs/2609.20971)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20971v1 Announce Type: new Abstract: Long-context large language model inference is increasingly limited by prefill, where dense self-attention processes the entire prompt before generation begins. Sparse block selection can reduce this cost, but a block centroid may hide a highly relevant token among many irrelevant ones. We call this failure mode mean dilution and propose RBS-Attention, a training-free sparse-prefill method with two complementary selection branches. A centroid base branch captures average relevance, while a rescue branch uses the maximum key-block radius and its prompt-, layer-, and head-dependent distribution to identify blocks at risk of underestimation. Independently thresholding the two branches and combining their masks controls the contribution of rescue blocks while preserving regular block-sparse FlashAttention execution. On H100 GPUs, RBS-Attention achieves 20.65$\times$ standalone prefill-attention speedup, 11.92$\times$ vLLM prefill-attention speedup, and 5.97$\times$ end-to-end time-to-first-token speedup at 128K on Qwen3-30B-A3B-Instruct-2507-FP8. On the dense Qwen3-32B model, it obtains 88.65 overall RULER accuracy versus 89.52 for dense attention; LongBench-v2, InfiniteBench, and Video-MME provide additional quality evaluation. Supporting experiments measure actual retention, compare selectors at matched density, and characterize block-size, threshold, and memory behavior. Together, these results support radius-adaptive dual-branch selection as an effective approach to long-context prefill.

3. [SpecOpt: Contact-Diff Reasoning for Agentic Molecule Optimization Toward Binding Specificity](https://arxiv.org/abs/2609.21165)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21165v1 Announce Type: new Abstract: Off-target protein binding is a major source of adverse effects for small-molecule drugs, yet most structure-based molecular design methods focus on generating selective compounds de novo rather than improving the selectivity of existing, well- characterized drugs. We introduce specificity optimization (SpecOpt), a molecular design task that seeks constrained structural modifications to an existing compound that increase its binding preference for an intended target over known off-targets while preserving its structural identity and drug-like properties. To enable systematic evaluation, we construct a ChEMBL-derived benchmark from compound-target interaction data, identifying intended targets through curated drug-mechanism annotations and off- targets through measured activities. We then develop an agentic framework that docks each compound against its intended target and off-targets, compares the resulting poses through residue-aware atom-protein contacts, and provides these differential interactions to a large language model to propose targeted structural modifications. Candidates are retained only if they satisfy molecular similarity, ADMET, and target-off-target docking selectivity criteria. On 915 compounds, the agent improves the target- off-target binding gap for 84.8% of compounds, shifting the mean gap from -0.72 to +0.47 kcal/mol while maintaining a mean Tanimoto similarity of 0.72 to the starting compounds. Ablation studies identify residue-specific contact information as the critical optimization signal: replacing residue identities with binary contact indicators eliminates improvement on all 29 ablation compounds. These results establish SpecOpt as a distinct molecular design problem and demonstrate residue-aware differential interactions as an effective signal for improving the specificity of existing compounds.

4. [Building standards for the next phase of AI](https://openai.com/index/building-standards-next-phase-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 21 Sep 2026 10:00:00 GMT
   - Summary: OpenAI outlines a path to shared global AI standards, calling for coordinated evaluation, reporting, and governance to improve safety.

5. [Attention-Aware Routing: Coupling Routing and Attention in MoEs](https://arxiv.org/abs/2609.20974)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20974v1 Announce Type: new Abstract: In Mixture-of-Experts language models, the router typically selects and weights experts based on the token's hidden state, utilizing limited contextual information. We propose Attention-Aware Routing (AAR), which augments the router with temporal and spectral features extracted from a sliding window of attention weights that represent a summary of the model's contextual state, disentangled from the hidden state. Keeping the base transformer entirely frozen, we train only the routing parameters, isolating routing as the sole variable. AAR improves GSM8K by +3.37 pp over a routing-only SFT baseline on OLMoE. Beyond performance, we show that routing and attention form a coupled circuit: routing changes at layer l propagate through the residual stream to amplify attention sinks at layer l+1, reshaping attention without any direct update to the attention mechanism itself. Further, AAR reduces long diverging generation, with incorrect answers getting shorter, while correct answers remain unchanged in length. Finally, AAR is strongly depth-sensitive: applying it indiscriminately across layers can degrade factual retrieval, whereas mathematical reasoning gains persist when it is introduced deeper in the network. This sensitivity exposes a retrieval--reasoning tension across depth and makes layer-selective AAR a controlled probe of the routing-relevant information carried by attention at different layers.

6. [CaLR: Causal Latent Revision for Robust Diffusion Reasoning](https://arxiv.org/abs/2609.20981)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20981v1 Announce Type: new Abstract: Autoregressive (AR) models suffer from local greediness, while diffusion language models (DLMs) often lack the strict causal structure required for reasoning. To combine the advantages and overcome the drawbacks of the dual, we propose Causal Latent Revision (CaLR), a framework that reformulates reasoning as constrained latent optimization. By adopting a causal topology matrix (CTM) from an expert model and implicit differentiation, CaLR performs gradient-guided ``thought revision" to enforce logical consistency, enabling dynamic self-correction of intermediate steps during parallel generation. Empirically, CaLR achieves SOTA DLM performance on complex benchmarks, surpassing strong AR baselines and demonstrating superior robustness in constrained tasks like Sudoku.

7. [LoRA Enhanced Contrastive Learning with SAS Vision Transformers](https://arxiv.org/abs/2609.21061)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21061v1 Announce Type: new Abstract: Automatic target recognition (ATR) with synthetic aperture sonar (SAS) supports advanced naval capabilities, but deep learning is constrained by scarce target imagery, background clutter, and human-in-the-loop assessment. We adapt DINOv3 Vision Transformer (ViT) models to underwater SAS ATR using a three-stage parameter-efficient framework. Stage 1 uses Low-Rank Adaptation (LoRA) while freezing the ViT backbone, bridging the gap between natural-image pretraining and underwater acoustic propagation. Stage 2 uses hard-negative mining to strengthen the decision boundary against acoustic mimics, including rocks and sediment formations resembling man-made targets. Stage 3 uses Supervised Contrastive Learning (SupCon) to separate target and clutter representations. We evaluate at-sea SAS data using a mission-level geographic split, compare all arms at 85 percent test recall, and repeat each comparison over three random seeds. LoRA accounts for the primary effect, increasing area under the precision-recall curve (AUPRC) from 0.300 to 0.679 +/- 0.027 using the same frozen backbone. Rank 4 achieves this result while training only 0.26 percent of weights. Neither refinement stage exceeds its matched control: hard-negative mining changes AUPRC by -0.0045 +/- 0.0119 versus an equal-size random curriculum, and SupCon changes AUPRC by +0.0002 +/- 0.0096 versus the preceding stage. These null results indicate that mining occurred on data the encoder had already fit and that supervised stages had already imposed most target-clutter geometry. One efficient adaptation stage is sufficient; stacked refinement is not.

8. [Clinician-Grounded Quality Assurance for AI-Assisted Psychiatric Intake](https://arxiv.org/abs/2609.21149)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21149v1 Announce Type: new Abstract: Before patients can use AI-assisted psychiatric intake systems, health systems need practical ways to routinely evaluate these tools against their clinical standards for quality assurance. Because clinicians may use different intake styles, evaluation for this task must (1) support comparison across interviewing approaches, (2) minimize clinician burden, and (3) measure clinically relevant performance for health systems deploying these technologies. We present a clinician-grounded evaluation platform built around a memory-augmented patient simulator for open-ended AI interviewing, InterviewPlayground. We created interactive patients using InterviewPlayground with our expert-authored vignettes, constructed a simulated intake platform for the interviews, and designed evaluation modalities relevant to intake. In a pilot of 6 clinicians in a 25-minute assessment compared to a GPT-based LLM intake interviewer, the LLM recovered more of the clinically relevant items embedded in the patient vignettes (88.0% vs. 38.9%), but made more clinical inferences not based on the interview (56.8% vs. 27.8%), and characterized identified safety concerns less often (33.3% vs. 66.7%), setting the stage for deployed quality assurance for this task.

9. [BI-Agent and BI-Bench: Towards Automating End-to-End Business Intelligence](https://arxiv.org/abs/2609.20886)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20886v1 Announce Type: new Abstract: Business intelligence (BI) is a cornerstone of enterprise decision-making and is widely used by enterprise users in software such as Power BI and Tableau. In traditional BI workflows, users need to prepare data by (1) identifying relevant tables, (2) performing data transformations, and (3) building join relationships, before they can (4) answer their business questions. These steps can be complex and time-consuming, making BI challenging. Given the strong capabilities of large language models (LLMs) in working with data, we study their ability to answer BI questions end-to-end, without requiring users to manually perform the tedious preparation steps. To do this, we harvest a large collection of real-world BI projects from public sources, and manually extract pairs of (questions, ground-truth answers) from real user dashboards. The resulting benchmark, BI-Bench, is the first benchmark to systematically study LLMs' ability on end-to-end BI. We find that even frontier LLMs perform poorly on BI-Bench, with less than 50% accuracy. To address their limitations, we design a tool-augmented BI-Agent that decomposes BI workflows into subtasks on structured data, such as search, join, and transform, and orchestrates specialized data management methods across BI stages. Furthermore, we develop a post-training framework that synthesizes training trajectories from real BI projects, enabling BI-Agent to be further post-trained using both supervised fine-tuning (SFT) and reinforcement learning (RL). BI-Agent achieves substantial accuracy gains of up to 40 percentage points with vanilla LLMs, and post-trained BI-Agent yields gains of up to 30 points. Our results highlight the importance of combining tool-augmented reasoning with domain-specific post-training in complex BI workflows, and point to promising directions for future research.

10. [Advisory Group on Mathematics and Artificial Intelligence](https://openai.com/index/advisory-group-on-mathematics-and-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 12:00:00 GMT
   - Summary: OpenAI is working with an independent Advisory Group on Mathematics and Artificial Intelligence to guide the review and communication of emerging AI results.

11. [Expanding OpenAI Academy with new learning paths](https://openai.com/index/expanding-openai-academy-with-new-learning-paths)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 07:00:00 GMT
   - Summary: Explore new OpenAI Academy learning paths for employees, developers, leaders, educators, and students to build and demonstrate practical AI skills.

12. [How V7 gives AI agents institutional memory](https://openai.com/index/v7)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 GMT
   - Summary: Using GPT-5.6, V7 turns scattered company files into context agents can use to complete complex, source-linked work.

13. [Introducing the Australian Youth Safety Blueprint](https://openai.com/index/australian-youth-safety-blueprint)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 18 Sep 2026 12:00:00 GMT
   - Summary: OpenAI introduces the Australian Youth Safety Blueprint, a six-pillar roadmap for safer AI experiences that protect and empower young people.

14. [How Cooley is accelerating IPO work with ChatGPT](https://openai.com/index/cooley-gopublic)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 17 Sep 2026 12:00:00 GMT
   - Summary: Cooley built GO Public with ChatGPT Work to bring intelligence to the IPO process, helping lawyers surface issues earlier and focus judgment where it matters most.

15. [Helping older adults use AI in everyday life](https://openai.com/index/helping-older-adults-use-ai-in-everyday-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 16:00:00 GMT
   - Summary: OpenAI and AARP are bringing free, hands-on ChatGPT workshops to 1,000 older adults across 10 U.S. cities to build practical AI skills safely.

16. [Reimagining advertising with AI](https://openai.com/index/reimagining-advertising-with-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 13:00:00 GMT
   - Summary: Explore new AI-powered advertising experiences from OpenAI, including Sponsored Agents, tools for marketers, and integrations with HubSpot and Shopify.

17. [Hex turns complex analysis into visual reports with GPT‑6 Astra](https://openai.com/index/hex-gpt-6-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 12:00:00 GMT
   - Summary: GPT-6 Astra helps Hex’s data agents turn answers into interactive visualizations that employees are proud to share.

18. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

19. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

20. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

21. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

22. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

23. [Pruning LLMs Like a Physicist: Block Removal as an Ising Optimization Problem](https://huggingface.co/blog/MultiverseComputingCAI/pruning-llms-like-a-physicist-block-removal-as-an)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 13:44:34 GMT

24. [tokenizers v1: encode, decode and scaling, measured](https://huggingface.co/blog/tokenizers-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 GMT

25. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

26. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

27. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

28. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

29. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

30. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

31. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

32. [Detecting Hallucination in LLMs: Tracing the Topological Signatures of Impaired Context Sharing](https://arxiv.org/abs/2609.21096)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21096v1 Announce Type: new Abstract: In this work, we examine the topology of information flow patterns within attention graphs to effectively distinguish hallucinated from non-hallucinated responses. We analyze the Forman-Ricci curvature to identify structural patterns indicating information bottlenecks in attention graphs. We then introduce a method that captures both semi-local and global information-flow characteristics of attention heads associated with hallucinated responses. We evaluate our approach extensively across several LLMs and established benchmarks. Empirical results demonstrate that our proposed single-pass approach provides consistent improvements over existing attention-based and multi-response baselines across two hallucination-detection benchmarks, while achieving competitive performance across diverse LLM architectures. Further analysis reveals that impaired context sharing among tokens during causal generation is strongly associated with hallucination occurrences in LLMs. In particular, hallucinated responses are consistently characterized by an over-reliance on self-attention, diffused context retrieval from earlier tokens, or information over-squashing, especially in the final transformer layer.

33. [Decoupling Internal Representational Changes and Causal Importance in Fine-Tuned Large Language Models](https://arxiv.org/abs/2609.21113)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21113v1 Announce Type: new Abstract: Fine-tuning has emerged as a widely adopted approach for adapting LLMs to a variety of downstream tasks. However, how it reshapes their internal mechanisms remains poorly understood. To address this, we investigate how fine-tuning alters internal representations in LLMs, including attention patterns and layer-wise activations, and examine whether these changes are linked to task-relevant components identified by EAP (e.g., attention heads and logit-level activations) that drive task performance. We find that EAP-identified components are concentrated within specific layers, indicating a degree of functional localisation in how models internalise task-specific behavior. Notably, the distribution of these components across layers is largely uncorrelated with the layers undergoing the most substantial representational changes during fine-tuning. Furthermore, we observe that overlap in EAP-identified components across tasks does not translate into cross-task performance transfer if the tasks are different in nature (e.g. classification vs. generative tasks). More specifically, fine-tuning on one task can lead to a degradation of performance on another when the two tasks exhibit a high degree of overlap in their EAP-identified components.

34. [TinyCeNN-LM: Quality-Gated Conversion of Pretrained Attention with CeNN-Inspired Cellular-Recurrent Layers](https://arxiv.org/abs/2609.21139)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21139v1 Announce Type: new Abstract: Replacing attention in a pretrained language model is a compatibility problem: a plausible substitute may alter representations expected by later layers. TinyCeNN-LM introduces a \emph{quality-gated post-training conversion} framework using CeNN-inspired cellular-recurrent layers with bounded local processing, compact recurrent memory, routing, fusion, and accept-or-rollback validation. Three implementations are studied: Integrated Memory, MemoryFusion, and PDelta3-GDN2-CLVR+Local32. Strict PDelta3 conversion accepts a layer only when representation and NLL criteria pass fixed thresholds. On SmolLM2-135M, layers 0-2 are accepted with cumulative $\Delta\mathrm{NLL}=+0.01209$, while layer 3 is rejected despite acceptable NLL because representation fidelity fails. On Qwen3.5-0.8B, full-attention layers 3, 7, and 11 are accepted with final $\Delta\mathrm{NLL}=+0.02073$. Integrated Memory keeps perplexity within $-0.07\%$ to $+0.93\%$ while reducing total cache by up to $6.01\%$. A sampled 200-item downstream sanity check gives $28.5\%$--$32.0\%$ overall accuracy for converted Qwen releases. The results support conservative, quality-gated structural conversion rather than universal attention replacement or speedup.

35. [Bio-MF: Low-Latency and High-Fidelity EEG-to-fNIRS Cross-Modal Generation for Hybrid Motor-Imagery Brain--Computer Interfaces](https://arxiv.org/abs/2609.20904)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20904v1 Announce Type: new Abstract: Hybrid motor-imagery brain-computer interfaces (MI-BCIs) combining EEG and fNIRS can outperform EEG-only systems by exploiting complementary electrophysiological and hemodynamic information. To obtain such hybrid information when paired EEG-fNIRS acquisition is unavailable or inconvenient, recent studies have focused on EEG-to-fNIRS cross-modal generation. However, existing methods still suffer from slow generation and often require pretraining, limiting their use in real-time MI-BCI scenarios. Although one-step generative models offer an attractive route to low-latency synthesis, removing the iterative refinement process can reduce generation fidelity and introduce non-physiological artifacts. To address these problems, this paper proposes Bio-MF, a latent-free one-step MeanFlow framework for EEG-conditioned fNIRS generation. Bio-MF performs direct signal-space x-prediction, converts this signal-space output into MeanFlow velocity supervision, and completes inference with one network evaluation. To preserve task-relevant hemodynamic structure under heterogeneous sensor layouts, Bio-MF integrates Spatial-Temporal Interactive 4D Encoding, cross-modal classifier-free guidance, and noise-level-gated FFT regularization. On Dataset 1, EEG + synthetic fNIRS improves ACC over EEG-only by 3.37 and 4.15 percentage points for HbR and HbO, respectively. On Dataset 2, the corresponding gains remain 2.98 and 2.50 percentage points under the unseen 64-channel EEG montage. On an RTX PRO 6000 GPU, Bio-MF generates one fNIRS trial in 7.0 ms, corresponding to an 857x speedup over the 1000-step SCDM latency. These results show that Bio-MF enables fast EEG-to-fNIRS synthesis while preserving task-relevant generation quality for downstream hybrid MI decoding. Our code is available at https://github.com/psychosiwa/Bio-MF.

36. [Generative inversion for early ranking of competing geologic interpretations](https://arxiv.org/abs/2609.20978)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20978v1 Announce Type: new Abstract: High-consequence subsurface decisions are often made under severe data scarcity. Experts may arrive at competing interpretations of the same subsurface system, yet early in a project there is rarely a practical way to determine which one is most realistic. This uncertainty can persist until several wells are drilled, often costing millions of dollars. Existing approaches for evaluating geologic interpretations rely either on subjective judgment or on dense data that are rarely available in early-stage investigations. We present a workflow that addresses this challenge by translating competing geologic interpretations into alternative spatial priors and ranking them according to their consistency with hydraulic-head observations. For each interpretation, a text-to-image foundation model generates an ensemble of 1600 geologic images, and a separately trained variational autoencoder provides an interpretation-specific latent representation. A supervised inverse network maps the head observations into this latent space, and the frozen decoder produces an image that is mapped to a log-conductivity field. Steady-state flow simulation then provides predicted heads, and the resulting mismatch is converted into a Gaussian-form compatibility score. We evaluate the framework using a synthetic benchmark based on the Johansen Formation and three interpretations of decreasing consistency with the reference representation. Across 925 test cases, the mean head RMSE increases from 0.197 for the Precise \& Accurate interpretation to 0.227 for the Accurate interpretation and 0.280 for the Mismatched interpretation. We subsequently apply the workflow to two published conceptual models of the Culebra Dolomite Member at the Waste Isolation Pilot Plant. The revised model receives a compatibility weight of 0.991, compared with 0.009 for the original model, consistent with the independent evidence.

37. [Fundamental Bounds on the Polarizability of Macroscopic Scatterers](https://arxiv.org/abs/2609.21248)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21248v1 Announce Type: new Abstract: Polarizability predicts how an object responds to an incident electromagnetic field, the interactions between small particles, or the optical forces exerted upon them. Polarizability is responsible for the effective-medium properties of artificial materials or metasurfaces. Despite significant progress in all these areas, it is unclear what the limits of the strength of such interactions are or, more specifically, what the upper bounds on the polarizability of a given spatial region that an unknown and designed particle would occupy are. This work connects the electromagnetic field description via an integral equation with a dual formulation of quadratic programming to derive fundamental bounds on components of all four polarizability tensors or on their specific combinations. In particular, the work establishes an intuitive visualization of what strong polarizability means and how strong it can be. The developed fundamental bound also answers which materials and domains are best for the given demands on polarizability. These findings establish a versatile platform that can accommodate a wide range of demands on polarizable bodies, providing an absolute measure of their performance against which the results of human-powered or automated design procedures can be compared.

38. [Dirac Cones in d-wave Altermagnets Enable High-Conductivity and High-Efficiency Spin Sources](https://arxiv.org/abs/2609.21766)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21766v1 Announce Type: new Abstract: Low critical charge-current density and low energy dissipation are highly desired in magnetic random-access memories, requiring spin sources to exhibit both high charge-to-spin conversion efficiency (CSE) and high charge conductivity. Altermagnets with vanishing net magnetic moment and spin-splitting bands provide promising spin-source candidates for spin-splitting-torque magnetic random-access memories. However, achieving both high CSE and charge conductivity remains challenging in altermagnets. In this work, we introduce Dirac cones into two-dimensional d-wave altermagnets, where their intrinsically high carrier mobility enables tunable charge and spin conductivities with high CSE. Dirac-cone anisotropy provides an effective means of enhancing both CSE and charge conductivity, with cone tilting serving as an additional degree of tunability. Guided by this design principle, we identify a maximum CSE of 92% in Cr2SeTeS. When the Fermi level moves slightly away from the Dirac point, high CSE, high charge conductivity, and the resulting high spin conductivity can be simultaneously achieved. Our study advances the understanding of time-reversal-odd spin transport via Dirac-cone engineering and provides a practical route toward developing spin-source materials that combine high charge conductivity with highly efficient charge-to-spin conversion.

39. [Bend Contour Electron Tomography (BCET): Quantitative strain and topography mapping](https://arxiv.org/abs/2609.21041)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21041v1 Announce Type: cross Abstract: Freestanding thin films of quantum materials naturally develop sub-micrometer, nonuniform strain fields that strongly affect their electronic, magnetic, and structural properties in both equilibrium and nonequilibrium conditions. However, current methods to quantitatively resolve these mesoscopic features are primarily restricted to scanning probes, making it challenging for dynamical measurements such as single-shot imaging and femtosecond microscopy. Here, we present a new computational framework which we denote as bend contour electron tomography (BCET), which efficiently converts bend contours in transmission electron microscope images into quantitative two-dimensional maps of strain and topography. By iteratively minimizing a designed loss function between experimental and simulated bend contour images, BCET retrieves both surface morphology and in-plane strain tensor fields without requiring scanning or diffraction mapping. We applied BCET to freestanding SrTiO$_3$ thin films, demonstrating the successful reconstruction of the local strain distribution and curvature field with high fidelity. Our approach provides a quantitative framework for characterizing mesoscale structures in freestanding films using wide-field imaging, opening new avenues to investigate how spatial inhomogeneity governs phase transitions and nonequilibrium dynamics in two-dimensional quantum materials.

40. [Predicting the Elastic Properties of a Cemented Granular Material during Chemical Damage (Debonding)](https://arxiv.org/abs/2609.21410)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21410v1 Announce Type: cross Abstract: While underground reservoirs emerge as essential elements to face global warming, these systems represent complex multi-physical and multiscale problems. The considered injection of fluids during hydrogen storage, carbon dioxide sequestration, or geothermal energy recovery involves a modification of the chemical equilibrium of the fluid in the porous reservoir. Chemical reactions can induce microstructural changes of the rock matrix, leading to a reduction of elastic properties of the material, and to potential settlement or stress redistribution. Consequently, it becomes pivotal to establish predictive behavior laws to describe the effect of chemical damage on elastic properties. Facing the difficulties to estimate experimentally the impact of chemical damage on mechanical properties, a Digital Rock Physics approach is proposed in this contribution. This numerical homogenization scheme is used to compare two distinct types of microstructure models: the first one consists in a Discrete Element Model, while the second one employs a continuous description. This continuous formulation is based on a Phase-Field description to predict the evolution of the microstructure subjected to chemical alterations and on the Fast Fourier Transform to estimate the macroscopic properties of the material. Finally, these frameworks establish different softening laws that can be used as constitutive ingredients for a cemented material during its weathering.

41. [Liquid-Nitrogen Micropillar-Wick Cooling for Cryogenic Electronics: A Numerical Study of Thermal Performance and Capillary Dry-Out Limits](https://arxiv.org/abs/2609.21639)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21639v1 Announce Type: cross Abstract: Cryogenic computing technologies are maturing rapidly, but heat removal remains a key challenge when increasing the device density and operating power. Two-phase evaporative cooling is a promising approach to solve this issue, because it can dissipate high heat fluxes while maintaining small temperature rises. Here, we numerically investigate liquid-$\mathrm{N_2}$-filled silicon micropillar wicks as a capillary-fed thin-film evaporation concept for cryogenic electronics. The model combines Young-Laplace meniscus calculations, Hertz-Knudsen-Schrage evaporation, unit-cell heat-transfer and liquid-flow simulations, and an array-level thermal and capillary-flow model. For a representative geometry with a pillar diameter of $10\,\mu\mathrm{m}$, pitch of $24\,\mu\mathrm{m}$, and pillar height of $75\,\mu\mathrm{m}$ at an applied heat flux of $20\,\mathrm{W\,cm^{-2}}$, the predicted chip-temperature rise is approximately $2.7\,\mathrm{K}$. This is substantially below the estimated temperature rises for representative conduction cooling through an indium-interlayered copper heat sink and direct liquid-$\mathrm{N_2}$ immersion. The corresponding predicted single-fed dry-out length is approximately $2.7\,\mathrm{mm}$, equivalent to an ideal double-fed coolable width of approximately $5.3\,\mathrm{mm}$. The results indicate that local thermal performance is favorable, whereas lateral scalability is primarily constrained by capillary dry-out. An approximate capillary-viscous scaling relation provides a compact framework for comparing dry-out limits across working fluids and related wick geometries and for identifying strategies to extend capillary-fed transport.

42. [Universal Dzyaloshinski-Moriya interaction dictates pairing in unconventional superconductor families](https://arxiv.org/abs/2609.21731)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21731v1 Announce Type: cross Abstract: The collinear-antiferromagnetic spin-fluctuation paradigm has long guided unconventional superconductivity research, yet fails to reconcile the noncollinear spin phenomena observed across cuprates, iron-based superconductors, and nickelates. Using extensive first-principles calculations and unbiased large-scale DMRG simulations, we show that Dzyaloshinski-Moriya interaction (DMI)-arising from local inversion-symmetry breaking-is a common ingredient across these families. This DMI unifies hallmark observations in parent compounds-incommensurate orders, spin-wave gaps, and noncollinear textures. Under hole doping, strong DMI drives spin vortices to merge with pi-shifted hole stripes, forming hybrid vortex-hole stripe phases. These phases stabilize charge order while supporting, not suppressing, superconductivity. By contrast, under electron doping, these vortices pin holes and suppress long-range superconductivity. Our results establish DMI as a unifying link between noncollinear magnetism and superconductivity, identifying hole-strip-vortex coupling as a microscopic pairing engine. Given that DMI is common across major superconductor families, these findings challenge the prevailing pairing mechanism and offer an experimentally testable roadmap for materials optimization.

43. [Complete Neural Electronic Initialization Accelerates Materials DFT](https://arxiv.org/abs/2609.21759)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21759v1 Announce Type: cross Abstract: We present the first complete machine learning method for accelerating plane-wave density functional theory (DFT) in materials under the projector augmented wave (PAW) formalism. We formalize seven criteria that a \textit{Complete Neural Electronic Initializer} must satisfy for practical end-to-end PAW DFT acceleration. Applying these criteria to prior work reveals two missing structure-dependent components, augmentation occupancies and spin initialization, that prevent existing methods from providing complete reference-free initialization. Controlled ablations show that omitting these components can eliminate or reverse the acceleration obtained via models that only predict the smooth valence density. We satisfy these missing requirements by introducing AugNet, the first general equivariant model for PAW augmentation occupancies, and the first general spin density model for materials, which predicts the smooth spin-difference density and spin-difference PAW augmentation occupancies using predicted magnetic moments to constrain the global magnetic state. Combined with existing valence density models, these components satisfy all seven criteria and form a fully reference-free electronic initializer for materials DFT, requiring no electronic quantities from a converged target calculation. Our method reduces end-to-end DFT wall time by up to ~25% on unseen structures while preserving converged energies.

44. [Multivalley 3D Electronic Structure of PbSe from Soft-X-Ray ARPES and First-Principles Calculations](https://arxiv.org/abs/2609.21824)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21824v1 Announce Type: cross Abstract: PbSe is a narrow-gap IV-VI semiconductor, whose multivalley valence bands, with maxima at the L, $\Sigma$, and $\Delta$ points, underpin its intermediate-temperature thermoelectric properties. We combine soft-X-ray angle-resolved photoemission spectroscopy (SX-ARPES) with first principles simulations to study the valence band structure of bulk PbSe. High resolution measurements are conducted at photon energies of 400-900 eV to map the valence manifold along X$\Gamma$X, WXW, and K$\Gamma$K, and iso-energy surfaces are collected in the $k_z=0$ plane. Comparison to ARPES enables a rigorous assessment of the performance of density functional theory (DFT), using semi-local and hybrid functionals, as well as many-body perturbation theory within the quasiparticle self-consistent $GW$ approximation. We find that the Heyd-Scuseria-Ernzerhof (HSE) hybrid functional and QP$GW$ reproduce the measured band dispersions to within 0.1-0.2 eV over the entire valence band. In contrast, the semi-local Perdew-Burke-Ernzerhof (PBE) functional compresses the band width and deviates from experiment by up to 0.6 eV. We further show that an accurate band structure and band gap are vital to obtaining a correct description of the dependence of the Seebeck coefficient of p-type PbSe on the hole concentration (Pisarenko relation). This has implications for computational efforts to discover thermoelectric materials.

45. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.90; Date: 2026-09-21T16:06:41Z; Popularity: 1,903 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

46. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-20T03:29:46Z; Popularity: 486 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

47. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-09-21T05:14:35Z; Popularity: 366 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

48. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-19T02:05:01Z; Popularity: 247 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

49. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

50. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

51. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

52. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

53. [Elastic Threshold Attention: Learned Contextual Sparsity for Long-Context Decoding](https://arxiv.org/abs/2609.20888)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20888v1 Announce Type: new Abstract: Massive KV caches can cause severe memory-bandwidth bottlenecks during long-context decoding. Sparse attention methods mitigate this via selective loading, but that comes at a cost: rigid heuristics drop necessary context, leading to quality degradation. We introduce \textbf{Elastic Threshold Attention (ETA)}, an end-to-end trainable architecture that achieves hardware-accelerated decoding speed without sacrificing dense model quality. ETA predicts dynamic, contextual thresholds directly from query representations, allowing the model to allocate dense-like context to difficult retrieval or reasoning steps while pruning routine tokens. To learn this policy from scratch without representation collapse, ETA \emph{multiplicatively suppresses} sub-threshold logits toward zero during training rather than deleting them. Training against this smooth uniform attention floor provides a distributed probability reservoir that \textbf{causes localized attention sinks on initial tokens to disappear}. It also enables the model to hard-prune uninformative KV blocks at inference time and absorb incidental tokens co-admitted by coarse GPU block selection. As a result, a 1.45B pretrained ETA model rivals dense attention across language modeling, commonsense reasoning, and long-context needle retrieval at $\approx 85\%$ training sparsity and $\approx 38\%$ active decode density. At inference time, we implement a custom decode kernel in Triton that screens KV blocks in $O(1)$ time using cached geometric-probabilistic bounds, delivering up to $2.5\times$ wall-clock decode speedups over FlashAttention-2 on sequences up to 512K tokens. Finally, we introduce an offline calibration algorithm for domain-specific deployments that freezes per-head constant thresholds to eliminate predictor overhead, cutting attention compute by an additional $27\%$.

54. [Continuous Delayed-Memory Stochastic Gradient Descent and Continuous-Time Reinforcement Learning from History of Astrophysical Time Series Studies](https://arxiv.org/abs/2609.20906)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20906v1 Announce Type: new Abstract: Quasars are luminous objects in the universe that exhibit stochastic brightness variations encoding information about the supermassive black holes powering them, and modeling these variations from ground-based survey data time series, known as light curves, is a statistical challenge. This paper reviews how stochastic differential equations (SDEs) have been adapted with neural network parameterizations to overcome this challenge in history. We create the Continuous-Delayed-Memory Stochastic Gradient Descent which depend on the past state of the discrete iteration process. We performed the simulation on some 2-dimensional landscape and observed some wider-exploration and more precise convergent behavior compared to Vanilla SGD by adjusting hyperparameters. Besides, we proposed a reinforcement learning structure with continuous time policy gradients for exploratory policies without solving HJB PDE, and we show that its optimality conditions recover the Gibbs policy of previous works.

55. [Do Quantum Models Scale Like LLMs?](https://arxiv.org/abs/2609.20912)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20912v1 Announce Type: new Abstract: In this work, we study the neural scaling laws of RydbergGPT, an autoregressive transformer model trained on qubit projective measurement data gathered from interacting Rydberg atom arrays. The quantum system is known to exhibit a finite-size remnant of a critical point as the laser detuning parameter is varied. We find that near the critical point the transformer loss as a function of training dataset size is well described by a power-law with a loss floor correction. However, away from criticality the quality of the power-law description is substantially reduced. We then compare the statistical structure of both Rydberg measurements and natural-language corpora using an entropy-normalised, finite sample corrected mutual information "two-point" function. We find that near-critical statistics of the two point functions are closest to those observed in natural-language, whilst other qubit configurations far from the critical point have two-point functions that decay more rapidly. This supports the hypothesis that multi-scale dependence contributes to stable neural scaling, and that scaling behaviour should be viewed as a property of the model-data pair.

56. [When AI Reviews Train AI Reviewers: Scientific-Judgment Collapse and Mitigation](https://arxiv.org/abs/2609.20942)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20942v1 Announce Type: new Abstract: Large language models (LLMs) increasingly participate in scientific evaluation, both as automated reviewers and as assistants to human reviewers. As model-generated reviews enter public data and future training corpora, AI peer review can become recursive: later reviewers learn from judgments produced by earlier models. We study one step of this feedback loop in a controlled setting. Starting from Llama 3.1 8B, we first fine-tune a reviewer on official ICLR reviews from 2018--2023 and then train four successor models on ICLR 2024 data with systematically varied mixtures of official and model-generated reviews. Our study shows that introducing synthetic reviews compresses rating distributions and reduces both same-paper and corpus-level semantic diversity. We call this pattern $\textbf{scientific-judgment collapse}$. To mitigate this failure mode, we introduce $\textbf{TrustReviewer}$, an open-source LLM-based system for generating peer reviews of AI and machine learning papers. TrustReviewer intervenes at two complementary stages. For training-time prevention, we train the core reviewer in a single stage on a curated corpus designed to reduce low-quality and semantically degenerate supervision. For test-time correction, paired activation steering aims to further mitigate residual tendencies toward collapsed judgments without further training or additional expert annotation. Together, these results characterize a concrete risk of recursive reviewer training and provide practical interventions for preserving judgment diversity and improving recommendation alignment in AI-assisted scientific evaluation.

57. [Efficient Bayes-Adaptive Reinforcement Learning with Temporal Logic Specifications](https://arxiv.org/abs/2609.20954)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20954v1 Announce Type: new Abstract: We present a novel end-to-end model-based Reinforcement Learning (RL) algorithm for efficient policy synthesis under given Linear Temporal Logic (LTL) specifications (e.g., safety or reachability) in unknown environments. To do so, a Limit-Deterministic B{\"u}chi Automaton (LDBA) representation of the LTL task is synchronised with a Bayes-Adaptive Markov Decision Process (BAMDP) representation of the environment, which allows us to leverage an enhanced exploration-exploitation trade-off that is achieved via Bayesian RL, as opposed to traditional non-Bayesian approaches. We further propose a novel Bayes-Adaptive Monte-Carlo Planning (BAMCP) algorithm to allow for approximate Bayes-optimal strategy synthesis in the synchronised BAMDP construct. A range of finite- and infinite-horizon task experiments demonstrate the effectiveness of our approach in terms of both property satisfaction and sample efficiency, when compared to traditional model-free approaches. Additional ablation studies also successfully highlight the value of the novel BAMCP algorithm in comparison to classical BAMCP for LTL task satisfaction. Finally, we also showcase a successful application of our approach for \textit{cautious} RL, namely to reduce the number of task violations incurred during policy training.

58. [Warp-Geo: Differentiable Geometry Representation for Dynamic-Boundary Simulation and Shape Optimization](https://arxiv.org/abs/2609.20964)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20964v1 Announce Type: new Abstract: Modern inverse problems and adaptive simulations require efficient and differentiable representations of complex geometries that can be updated frequently for gradient-based optimization. Existing methods cannot simultaneously achieve both. We present Warp-Geo, a differentiable GPU-accelerated framework for reconstructing signed distance fields and evaluating surface normals from point clouds of complex 3D geometries. Warp-Geo combines uniform grids for GPU parallelism with implicit differentiation through the Poisson solve, enabling frequent geometry recomputation while maintaining full differentiability. We demonstrate Warp-Geo on forward SDF reconstruction, dynamic fluid--structure interaction with moving boundaries, and inverse shape optimization via automatic differentiation with gradient validation. GPU scalability analysis confirms practical feasibility for frequent geometry updates. The framework, implemented in Warp and JAX, enables seamless integration with differentiable physics solvers for end-to-end shape optimization.

59. [Perspective on Magnetic Nanoparticle Modeling: Interactions, Timescales and Regimes](https://arxiv.org/abs/2609.21671)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 21 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.21671v1 Announce Type: new Abstract: The response of magnetic nanoparticles (MNPs) to applied magnetic fields underpins a broad range of biomedical and technological applications. In this Perspective, we review the principal modeling approaches for describing MNP dynamics across different physical regimes, ranging from coarse-grained macrospin descriptions to spatially resolved micromagnetic simulations. Selecting an appropriate model depends on the relevant energy scales and timescales, including those associated with magnetic anisotropy. We compare the assumptions, computational requirements, and regimes of applicability of the fixed-point-dipole, effective-field, thermal Stoner-Wohlfarth, diffusion-jump, coupled Landau-Lifshitz-Gilbert, egg, and micromagnetic models. Particular attention is given to coupling magnetization dynamics with translational and rotational particle motion, hydrodynamic interactions, and long-range dipolar interactions. By relating the relevant physical regimes to the resolution and computational cost of each approach, we provide practical guidance for model selection and outline challenges for predictive multiscale simulations of interacting MNP systems.

60. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

61. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-20T06:03:54Z; Popularity: 747 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

62. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.24; Date: 2026-09-21T17:38:58Z; Popularity: 1,240 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

63. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-21T01:40:35Z; Popularity: 232 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

64. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.13; Date: 2026-09-21T05:55:37Z; Popularity: 127 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

65. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-17T09:23:32Z; Popularity: 8 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Can Agents Design Better Chips with a Higher Level Abstraction?

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.21157

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
