# Daily signal sidecar - 2026-10-05

## Selected Signal

- Title: Fast Models, Slow Evidence: A Paired and Self-Audited Evaluation of System-1 Decision Models for LLM Agent Harnesses
- URL: https://arxiv.org/abs/2610.02267
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Fast Models, Slow Evidence: A Paired and Self-Audited Evaluation of System-1 Decision Models for LLM Agent Harnesses
- Primary source: https://arxiv.org/abs/2610.02267
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

Total candidates reviewed after duplicate-source filtering: 62

1. [Fast Models, Slow Evidence: A Paired and Self-Audited Evaluation of System-1 Decision Models for LLM Agent Harnesses](https://arxiv.org/abs/2610.02267)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02267v1 Announce Type: new Abstract: Agent harnesses make many small, typed decisions per task: which model to call, which tool to use, whether retrieved text is relevant, whether an input carries an injection. System-1 decision models answer such questions in a single forward pass with class probabilities, promising large cost and latency savings over LLM calls. We present a paired evaluation of an open-weight (Laya) and a hosted (Jev) System-1 model on 11 agent decision points built from 18 public sources: 7,283 base cases plus 6,640 robustness variants, with byte-identical inputs, paired tests, and cross-hardware and cross-day reproducibility checks. Jev is significantly more accurate on 9 of 11 decision points (+10.8 to +46.0 pp). Neither model beats chance on zero-shot model routing, and they tie on RAG relevance gating. Laya changes 30% of its answers when the option order is reversed and degrades sharply with many or similar candidates (31% at 50 nearest-neighbour tools, vs. 98% for Jev on items with a unique correct tool). We also audit our own pipeline. Three analysis errors and one design confound distorted headline deployment claims: an omitted pre-screen cost (reported 23.9% saving, actual 4.3%), gate accuracy reported as end-to-end quality (58% vs. 98%), in-sample thresholds (5% target, up to 17% held-out misses), and a "channel effect" on injection false positives that vanishes with channel-native content. Two other suspected confounds did not change the conclusions. All cases, raw outputs and analysis code are available at https://github.com/David-DL-Space/sys1-eval.

2. [Keep It CALM: Analyzing the Limits of Global Unsafety in Text-to-Image Generation](https://arxiv.org/abs/2610.02300)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02300v1 Announce Type: new Abstract: Training-free safeguards for text-to-image generation often rely on a reusable safety signal, such as an unsafe direction or global toxic subspace, applied broadly across prompts. We provide a controlled geometric analysis of this global-unsafety assumption and reveal a consistent coverage-selectivity trade-off: compact unsafe subspaces fail to cover heterogeneous unsafe semantics, whereas broader aggregation increasingly distorts safety-adjacent benign prompts. Motivated by this finding, we propose CALM (Counterfactual Adaptive Local Modulation), a training-free safeguard that replaces uniform global removal with prompt-local counterfactual correction. Using matched unsafe-benign anchors, CALM routes each prompt to active unsafe categories, minimally edits only violating token representations toward the safe side, and suppresses positively aligned unsafe residual components. Across broad evaluation, CALM significantly improves unsafe content suppression while preserving benign utility, demonstrating that local counterfactual correction provides a more selective alternative to global unsafe signal removal.

3. [Our approach to EU text provenance rules](https://openai.com/index/eu-text-provenance)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 05 Oct 2026 15:00:00 GMT
   - Summary: How OpenAI is approaching text watermarking under EU rules. Learn where watermarks apply, how detection works, and why access starts with researchers.

4. [Disrupting a coordinated model-distillation campaign](https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 30 Sep 2026 10:30:00 GMT
   - Summary: Learn how OpenAI disrupted a campaign to extract protected model reasoning and is strengthening defenses against adversarial distillation.

5. [Open TTS Leaderboard: Scalable Evaluation for Multilingual Text-to-Speech and Voice Cloning](https://huggingface.co/blog/open-tts-leaderboard)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Wed, 30 Sep 2026 00:00:00 GMT

6. [World Editing: Intervening on Executable Worlds at Increasing Depth](https://arxiv.org/abs/2610.02331)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02331v1 Announce Type: new Abstract: Interactive world models are increasingly capable of generating environments and acting within them, yet deliberately editing an existing executable world remains underexplored. We formulate world editing as intervening on an existing world while preserving properties that should remain unchanged, and introduce intervention depth as an axis describing how strongly an edit couples world entities, dynamics, and systems. We instantiate this capability through industry-grade game modding and introduce IGMWorld, together with IGMBench, a benchmark of 110 tasks and over 1.1K executable state and behavioral criteria across Minecraft and Terraria. The tasks span property, entity, dynamics, and system interventions and are evaluated through deterministic executability, behavioral, preservation, and visual checks. Frontier coding agents already exhibit substantial world-editing capability: the strongest configuration solves 78.2% of tasks under a strict task-level criterion, while criterion-level performance reaches 94.8%. Reliability generally decreases with intervention depth, and this pattern persists even among tasks with similar numbers of evaluation criteria. Most failed edits still build and load successfully, suggesting that the main difficulty is making the edited world behave as requested. Visual consistency remains a separate weakness, with all evaluated configurations below 50% joint visual pass rate. These results show that world editing is a distinct capability from world generation and interaction, and that executable games provide a practical testbed for studying it.

7. [DeReAct: Decomposed Reasoning and Acting for Reliable AI Agents](https://arxiv.org/abs/2610.02351)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02351v1 Announce Type: new Abstract: ReAct-based agents typically rely on a single LLM policy to propose actions, interact with the environment, and decide when a task is complete. This coupling makes action authorization and completion control difficult to enforce independently, allowing errors to propagate and unsupported completion claims to terminate execution. We introduce DeReAct, a modular agent architecture that externalizes two gating policies: a Critic that validates proposed actions before execution, and a Context Manager that reconstructs an environment-supported \textsc{State} and certifies task completion. Across GAIA and SWE-bench Verified, DeReAct improves Pass@1 most for weaker Brain models, with gains of 6.5--7.0 points for Qwen3-Coder-480B and 4.2--5.2 points for Claude Sonnet~4.5; gains diminish as Brain capability increases. Trajectory and ablation analyses show that external gating is effective when targeted failures are sufficiently prevalent and the gating policy is itself sufficient. With Claude Opus~4.5, Pass@1 remains comparable to ReAct, while DeReAct produces more evidence-complete and constraint-satisfying trajectories, indicating that completion control can trade earlier termination for stronger grounding. Overall, DeReAct improves weaker agents while retaining grounding benefits as models strengthen.

8. [THPL: A Vision-to-Language Decision Support Framework for Rainbow Trout Feeding Management in RAS](https://arxiv.org/abs/2610.02378)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02378v1 Announce Type: new Abstract: In Recirculating Aquaculture Systems (RAS), precision feeding is critical for minimizing costs and improving fish welfare. However, existing methods lack cognitive alignment between fish behaviors and management knowledge, impeding translation into executable, interpretable feeding decisions. To address this, we propose THPL, a generative feeding decision framework tailored for rainbow trout (Oncorhynchus mykiss) in RAS. First, Fishsort extracts trajectories to establish an Activity Coefficient (AC) quantifying feeding intensity. Second, a Hierarchical Behavior Encoder (HBE) models individual temporal progression and collective dynamics using Temporal and Set Transformers, transforming trajectory tensors into dual-evidence representations of explicit physical and implicit soft tokens. Finally, these tokens are integrated with environmental parameters, metadata, and expert rules to fine-tune an LLM via LoRA, followed by counterfactual multimodal Direct Preference Optimization (mDPO) to reinforce causal reasoning. Results show that AC exhibits a statistically significant monotonic positive correlation with expert-annotated feeding intensity (Spearman $\rho = 0.925$, $p < 0.001$). Ablations indicate that decision accuracy improves from 33.33% (text-only baseline) to 93.33% with dual-evidence tokens, confirming that continuous spatiotemporal tokens provide necessary physical grounding for LLMs. Compared with standard LoRA, counterfactual mDPO elevates decision accuracy from 93.33% to 96.67%, advances METEOR from 58.10% to 85.30%, reduces Self-BLEU-2 from 58.79% to 52.88%, and increases Distinct-3 from 6.68% to 7.81%, suppressing templating and actuation biases while reinforcing causal consistency and operational safety. Overall, by integrating continuous kinematics with LLM reasoning, this study provides a novel decision support paradigm for precision aquaculture.

9. [MACTS-EM: Multi-Agent Collaborative Time Series Forecasting with Emergent Memory](https://arxiv.org/abs/2610.02255)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02255v1 Announce Type: new Abstract: Time series forecasting remains a critical challenge across numerous domains. Despite significant advancements, existing approaches struggle with complex phenomena such as regime shifts, cross-domain knowledge transfer, and multimodal data integration. This paper introduces Multi-Agent Collaborative Time Series Forecasting with Emergent Memory (MACTS-EM), a novel framework where specialised agents collaborate to achieve superior forecasting performance. The MACTS-EM architecture integrates: (1) domain-specialised forecasting agents for pattern recognition, anomaly detection, causal inference, and uncertainty quantification; (2) a meta-cognitive layer for dynamic agent allocation; (3) an emergent memory mechanism enabling cross-domain pattern transfer; (4) multimodal contextual integration; and (5) adversarial robustness components. Evaluation across financial markets, climate patterns, energy consumption, and pandemic propagation demonstrates that MACTS-EM outperforms existing approaches in most scenarios, with 8-12% improvement in forecasting accuracy, 22-27% better zero-shot transfer capability, 16-21% enhanced resilience during regime shifts, and 15-18% faster recovery after distribution shifts. Our findings suggest that collaborative, agentic approaches to time series forecasting represent a promising direction beyond traditional architectures, particularly for complex real-world scenarios requiring multi-resolution temporal understanding and contextual adaptation.

10. [Explainable Molecular Structure Inference from GC--MS with Diffusion Models and LLM Reranking](https://arxiv.org/abs/2610.03066)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.03066v1 Announce Type: cross Abstract: GC--EI--MS is an important technique for analyzing volatile and semivolatile compounds in complex samples. However, conventional methods rely heavily on reference spectral library matching, limiting their ability to identify compounds absent from these libraries and to infer complete molecular structures directly from fragmentation information. Here, we present DiffGCMS, a spectrum-conditioned discrete graph diffusion model for de novo structure elucidation from GC--EI--MS, and further develop a framework that integrates DiffGCMS with second-stage reasoning by a large language model (LLM). In the first stage, DiffGCMS generates candidate molecular structures from input spectra; in the second stage, the LLM uses mass spectral information to validate, repair, and rerank the candidates and provides interpretable analysis of fragment-ion peaks. This framework can generate plausible molecular structures for compounds absent from reference spectral libraries and provide traceable evidence supporting its decisions. On a test set comprising 13,696 spectra from NIST 20, the generative model achieved Acc@1 and Acc@10 of 6.01\% and 15.76\%, respectively. On the test subset containing molecules with no more than 10 heavy atoms, LLM-assisted molecular graph repair and reranking increased Acc@1 from 21.28\% to 21.95\%, Acc@10 from 46.91\% to 47.99\%, and candidate validity from 91.04\% to 100\%. These results demonstrate that spectrum-aware postprocessing can correct errors produced by the generative model while providing auditable and traceable explanations for the final ranking.

11. [Building advertising for the way people use AI](https://openai.com/index/new-chatgpt-ads-format-and-measurement)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 05 Oct 2026 10:00:00 GMT
   - Summary: OpenAI introduces a new visual ad format in ChatGPT and expands measurement tools, attribution partnerships, and brand suitability for advertisers.

12. [The eternal complement](https://openai.com/index/the-eternal-complement)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 01 Oct 2026 17:00:00 GMT
   - Summary: Advanced AI may matter most for the routine work behind breakthrough ideas. Explore why execution could shape the next economy and the pace of progress.

13. [How Albertsons Companies is reimagining retail from the inside out](https://openai.com/index/albertsons-reimagining-retail)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 01 Oct 2026 16:00:00 GMT
   - Summary: Albertsons Cos. is using ChatGPT Enterprise and the OpenAI API to help teams work faster and make grocery shopping easier for millions of customers.

14. [Helping small businesses put AI to work](https://openai.com/index/helping-small-businesses-put-ai-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 30 Sep 2026 10:00:00 GMT
   - Summary: OpenAI is partnering with America’s SBDC to expand hands-on AI training and local support for small businesses, alongside a new report on how small teams are using AI.

15. [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 10:00:00 GMT
   - Summary: Explore more than 20 announcements from OpenAI DevDay 2026, including GPT-6 Astra, ChatGPT, Codex, APIs, security, and new tools for builders.

16. [Introducing Quine: An AI research system designed for the complexity of biology](https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 29 Sep 2026 14:00:02 +0000
   - Summary: Biology doesn't operate in silos, and neither should the AI representation of it. Quine is an early-stage research effort to create a multimodal world model of biology. By connecting insights across biological scales and modalities, Quine helps scientists computationally search a space far larger than intuition allows and prioritize hypotheses before they reach the lab. Experimental results provide important feedback, helping researchers sharpen future research directions. The post Introducing Quine: An AI research system designed for the complexity of biology appeared first on Microsoft Research .

17. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

18. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

19. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

20. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

21. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

22. [The Agent Said It Was Done. The Database Disagreed.](https://huggingface.co/blog/microsoft/thinkingbox)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Sat, 03 Oct 2026 22:56:48 GMT

23. [Open-sourcing AstaBrief, the fast report-generation model in Asta](https://huggingface.co/blog/allenai/astabrief)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 02 Oct 2026 15:19:50 GMT

24. [AutoSynthData: Generating Training Data for Enterprise Agents](https://huggingface.co/blog/ServiceNow-AI/autosynthdata)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 02 Oct 2026 04:01:31 GMT

25. [NVIDIA Kumo Tabular Sets a New Accuracy-Efficiency Frontier for Tabular Prediction](https://huggingface.co/blog/nvidia/kumo-tabular)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 29 Sep 2026 15:30:38 GMT

26. [Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents](https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 29 Sep 2026 13:07:00 GMT

27. [Holo4: powering generalist computer-use agents](https://huggingface.co/blog/Hcompany/holo4)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 09:44:05 GMT

28. [Welcome RL Environments to the hub](https://huggingface.co/blog/rl-environments)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 GMT

29. [Accelerating vision-language models with LFM2.5-VL-DSpark](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 24 Sep 2026 14:08:57 GMT

30. [How UK AISI and EvalEval Are Making Benchmark Results Reproducible](https://huggingface.co/blog/evaleval-aisi)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

31. [MintFlow: Minimal Trajectory Intervention for Constrained Flow Matching](https://arxiv.org/abs/2610.02260)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02260v1 Announce Type: new Abstract: Flow matching models excel at generative modeling, and many downstream applications require their samples to satisfy prescribed constraints, such as observed measurements and physical laws. However, existing constrained samplers often face a trade-off: \textit{enforcing constraints can substantially displace samples from the pretrained data distribution}. To address this trade-off, we introduce \textbf{MintFlow}, a training-free constrained sampling framework that formulates constraint enforcement as a minimal intervention on the pretrained flow trajectory. MintFlow seeks the minimal perturbation of an intermediate flow state such that its subsequent evolution under the pretrained flow field satisfies the target constraint. By minimally perturbing the flow state while keeping the pretrained flow field unchanged, MintFlow enforces the constraint while minimizing unnecessary deviation from the pretrained distribution. An adjoint formulation yields a closed-form expression for this perturbation, eliminating expensive iterative optimization. Furthermore, MintFlow adaptively selects the intervention time to balance the required perturbation magnitude with its amplification by the remaining flow. Across a range of tasks in generative vision and physical system modeling, MintFlow achieves competitive constraint satisfaction while preserving the pretrained generative distribution substantially better than state-of-the-art constrained methods.

32. [The AI Risk Observatory: What Can We Learn from AI Disclosures in Annual Reports About Societal Resilience?](https://arxiv.org/abs/2610.02281)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02281v1 Announce Type: new Abstract: Societal resilience research relies on access to useful and actionable data, which motivates our main research question: Can annual reports, processed at scale with LLMs, provide a useful signal about how companies disclose their response to AI? We test this by applying a reproducible two-stage classification pipeline to 9,821 annual reports from 1,362 UK listed companies (2020-2025, with partial 2026 data). We first validate the method against 474 human-annotated passages, finding high recall and moderate label-level agreement. We then report three empirical patterns: (i) between 2020 and 2025, the share of reports mentioning AI risk rose from 2.8% to 41.2%, while AI adoption disclosure also rose, from 13.8% to 45.2%, and named vendor mentions cluster around a small set of major providers led by Microsoft; (ii) disclosure varies substantially by Critical National Infrastructure sector and market segment: AIM reports disclose AI risk at far lower rates than Main Market reports, and sectors such as Energy and Data Infrastructure lag behind the rest in AI risk disclosure; and (iii) harm disclosures are near-absent (seven reports across the entire corpus). We develop a substantiveness classification to assess the quality of the disclosure and find that most AI risk disclosure is not substantive: in 2025, 41.2% of all reports mention AI as a risk, but only 4.3% contain AI risk disclosure we classify as substantive.

33. [Choosing Before Acting: Comparative Value Estimation for Long-Horizon Tool-Use Agents](https://arxiv.org/abs/2610.02330)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02330v1 Announce Type: new Abstract: Large language models (LLMs) rely on long-horizon tool invocation sequences for complex tasks, where each invocation can alter the task state and condition subsequent decisions. In long-horizon tool use, final-outcome rewards provide weak credit assignment over long interaction traces. Step-level rewards can offer more targeted feedback, but obtaining reliable step supervision often requires human or LLM judgment, or additional rollouts to estimate the downstream effect of an intermediate decision. In this paper, we argue that effective tool-use agents should estimate the long-horizon value of a possible next tool invocation before executing it. This objective requires comparative supervision over alternative invocations under the same context, while logged trajectories only contain the invocation that was actually taken. Therefore, we propose Comparative Inference for Tool-use Agents (CITA). CITA trains a Comparative Inference Model (CIM) from paired signals that combine observed tool behavior, scalable supervision from a Bayesian tool-graph simulator, and semantic judgments from LLM-based comparison. The resulting CIM learns to estimate how likely a possible next tool invocation is to support final task success under the current context. Across three tool-use benchmarks and multiple backbone LLMs, CITA consistently improves Tool F1 and task success. Additional analysis shows that CIM learns accurate step-level value estimates for comparative tool choices.

34. [A Multi Method Importance and Performance Efficiency Analysis of Topological Metrics for Natural Visibility Graph Based Cyber Attack Detection](https://arxiv.org/abs/2610.02342)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02342v1 Announce Type: new Abstract: Natural Visibility Graph (NVG) based analysis characterizes network traffic through topological descriptors reflecting different structural properties. However, not all descriptors contribute equally to cyber-attack classification, and extracting a large metric set can increase computational cost. This study evaluates 21 NVG derived topological metrics and investigates whether a compact subset can preserve classification capability while improving computational efficiency. Four importance analysis methods SHAP, grouped Permutation Importance, Boruta, and Recursive Feature Elimination (RFE) are integrated through a Consensus Ranking strategy. Based on this ranking, Full21, Top15, Top10, Top7, Top5, and Top3 configurations are evaluated using the CICIDS2018 dataset, a CNN classifier, and stratified 5 fold cross validation. The three highest ranked metrics are avg_clustering_coeff_median, avg_clustering_coeff_std, and avg_clustering_coeff_mean. Top3 achieved the highest observed mean performance, with 97.148% accuracy, 97.055% weighted F1 score, and an MCC of 0.9675, compared with 95.999%, 95.521%, and 0.9549 for Full21, respectively. It also reduced total runtime from 14,961.39 s to 589.22 s (96.06%). These results indicate that importance guided metric reduction can provide a compact NVG representation with higher observed mean predictive performance and substantially lower computational cost under the evaluated setting.

35. [Traversing the Satisfaction-Diversity Frontier in Text-to-Image Diffusion](https://arxiv.org/abs/2610.02372)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02372v1 Announce Type: new Abstract: Text-to-image generation enables users to explore several images generated from the same prompt. For these generated images to be useful, each one must reflect the user's preferences, measured by a learned reward, and differ visually from the others to maintain diversity. Existing methods are limited: they either address reward and diversity separately or combine them in one aggregate score, enabling high diversity to offset low rewards. In this paper, we address these limitations by formulating generation as satisficing: every image (candidate) must satisfy a reward floor and the batch of images must satisfy a diversity cutoff. The reward floor controls the balance between worst-candidate reward and batch diversity; we show that varying this floor defines a Pareto frontier. To traverse this frontier, we introduce SatisDive, a training-free inference-time method. SatisDive uses a batch-relative reward cutoff to distinguish lower- from higher-reward candidates, emphasizing reward improvement for candidates below the cutoff and diversity among candidates above it. On Pick-a-Pic, at matched DreamSim, SatisDive improves worst-candidate reward over FK steering by up to 0.43 with FLUX.1-dev as the base model and HPSv3 as the reward, and by up to 0.70 with SANA-1.6B as the base model and ImageReward as the reward. More broadly, across their overlapping DreamSim ranges, SatisDive's satisfaction-diversity curve Pareto-dominates FK steering's curve in each setting.

36. [The Price of Greenwashing: Algorithmic Verification and Market Discipline using Conformal Machine Learning](https://arxiv.org/abs/2610.02225)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02225v1 Announce Type: new Abstract: While corporate sustainability mandates are expanding, the systemic reliance on self-reported emissions data exposes financial markets to pervasive greenwashing. Current literature relies heavily on subjective ESG ratings or textual sentiment analysis, leaving a critical econometric gap in objectively quantifying physical climate realities. To resolve this information asymmetry, we fuse U.S. SEC financial fundamentals with facility-level EPA greenhouse gas registries to establish a mathematically guaranteed baseline of physical corporate emissions. Leveraging a gradient boosting architecture and Mondrian Conformal Prediction, we quantify the shortfall between self-reported data and this algorithmic baseline into a novel Conformal-Weighted Continuous Divergence (CWCD) metric. Evaluating this divergence via a cross-sectional lead-lag econometric design, we uncover a robust mechanism of market discipline: algorithmic emissions divergence exhibits a severe, statistically significant negative relationship with subsequent market valuation (Tobin's Q) and operational profitability (ROA). Providing definitive evidence against the market blindness hypothesis, this study proves that institutional capital actively prices environmental deception not merely as an ethical lapse, but as a leading indicator of fundamental corporate mismanagement. Ultimately, these findings provide the quantitative justification necessary for asset managers and regulators to deploy algorithmic auditing infrastructure at scale.

37. [Counterfactual Predictions in Scientific Emulators Without Controlled Experiments](https://arxiv.org/abs/2610.02252)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02252v1 Announce Type: new Abstract: Many scientific questions require reasoning about what was never observed: What if the conditions, interventions, or history had been different? Models can predict accurately on observed data yet fail on such what-if queries when correlated inputs are varied independently. A common remedy is to add controlled simulation data in which these factors are explicitly disentangled, but this requires access to a simulator, can be computationally expensive, and inherits the simulator's modeling assumptions. We introduce ReRoute, a framework for targeted scientific what-if prediction that combines factual data with partial mechanistic knowledge, without requiring controlled intervention data for adaptation. ReRoute fixes the queried input of a pretrained backbone to a reference value, reintroduces its variation through a known mechanistic pathway, and fine-tunes on the original factual data, while leaving downstream effects to the learned dynamics. We provide a causal identification result for this construction under explicit structural assumptions, with the core argument machine-checked in Lean. After showing that ReRoute achieves highly accurate counterfactual predictions in a controlled advection-diffusion system where exact responses are available, we turn to state-of-the-art climate emulation. On held-out coupled-climate interventions, ReRoute reduces aggregate climate error by 18.2-31.8% under severe CO$_2$ distribution shifts while preserving skill under standard conditions, at a small fraction of the cost of retraining on additional controlled simulations, without even accounting for the substantial expense of generating such data. Finally, on an emulator trained from historical ERA5 reanalysis, where no counterfactual reference exists, ReRoute preserves substantially more of the surface warming implied by the observed boundary conditions under a fixed-CO$_2$ counterfactual.

38. [AI-Assisted GPU optimization of the Stochastic Variational Method for Few-Body Boson System](https://arxiv.org/abs/2610.02745)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02745v1 Announce Type: new Abstract: The stochastic variational method (SVM) is one of the most powerful methods to solve quantum few-body systems precisely in various fields, such as nuclear and atomic physics. To the best of our knowledge, no SVM code optimized for GPUs has been reported. We developed a parallel SVM code for few-body clusters of $^4$He atoms and optimized it for two GPU architectures, NVIDIA GH200 and AMD Instinct MI300A, with the entire code written by an AI coding agent. On the algorithmic side, we introduce the secular-equation method with the Gu--Eisenstat prescription for solving the generalized eigenvalue problem within the SVM framework. The main part of the code tuning is to batch the many small matrices so that the GPUs are used efficiently, together with an array layout in memory optimized for coalesced addressing. For the five-body system with 4800 SVM basis states, the tuned SVM code runs 16.2 (14.7) times faster on the NVIDIA GH200 (AMD MI300A) than the same tuned code on the Intel Xeon Max CPU system, and 168 (153) times faster than the first working CPU implementation. The achieved performance brings 6-body and larger cluster systems within reach.

39. [Feature tracking in physics-informed neural networks via joint optimization of nonlinear deformation manifolds: application to shocks](https://arxiv.org/abs/2610.02230)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02230v1 Announce Type: cross Abstract: Physics-informed neural networks (PINNs) often converge to inaccurate solutions for conservation laws with shocks, because uniformly distributed collocation points undersample localized features and let the residual be dominated by regions that are already well resolved. We propose a feature-tracking PINN (FT-PINN) in which the solution network is defined on a fixed reference domain and composed with a diffeomorphic deformation map from a parameterized nonlinear manifold. The deformation and solution-network parameters are trained jointly by minimizing the pulled-back conservation-law residual. This lets collocation points concentrate along features of essentially arbitrary geometry, including curved, oblique, and merging shocks, without prior knowledge of their locations. The framework is agnostic to the choice of parameterization. Boundary preservation is enforced exactly through a tangential projection of the displacement, and folding is discouraged by a one-sided penalty on the Jacobian determinant. On four test problems (space-time viscous Burgers with merging shocks, a decelerating Burgers shock, the space-time Euler shock tube, and steady 2D Euler regular shock reflection), FT-PINN resolves shocks at their correct locations with a limited collocation budget. A vanilla PINN with the same architecture, budget, and training either misplaces the shocks or fails to form them.

40. [Fast Nanophotonic Inverse Design using Precomputed Numerical Green Functions](https://arxiv.org/abs/2610.02821)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02821v1 Announce Type: cross Abstract: Inverse design has been transformative in nanophotonics, providing an automated means of realizing high-performance, non-intuitive devices. However, the primary bottleneck of existing inverse design approaches is their reliance on time-consuming and computationally expensive full-wave electromagnetic simulations. In this work, we extend the Precomputed Numerical Green Function (PNGF) method for the first time to nanophotonic inverse design, accelerating evaluation of the forward problem by multiple orders of magnitude with no loss in accuracy compared to the full-wave solution. After a single, fully parallelizable precomputation step, both the objective function and its gradient can be evaluated through simple calculations whose cost scales linearly with the size of the design region. A low-rank matrix update technique further reduces the cost of objective function evaluation, yielding sub-millisecond computation times per iteration. Design examples using both gradient-based level-set optimization and tile-flipping direct binary search often achieve more than three orders of magnitude speedup in design time, resulting in an ultrafast photonic inverse design platform that can design new devices from scratch in seconds.

41. [Dynamics-aware bandwidth selection for smoothed charge deposition in 2D electrostatic particle-in-cell](https://arxiv.org/abs/2610.03230)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.03230v1 Announce Type: cross Abstract: Charge deposition in the particle-in-cell (PIC) method can be viewed as kernel density estimation on a spatial mesh. This allows the smoothing bandwidth to be selected through statistical criteria such as mean integrated squared error or cross-validation, but it also changes the electric field acting on the particles. Therefore, a selected bandwidth can alter the growth or damping of physical modes. We develop a dynamics-aware bandwidth-selection procedure that combines a density-error objective with constraints on specified linear modes. These constraints follow from the plasma equilibrium and the combined transfer of deposition, filtering and field gathering within the model rate-tolerance boundary. We demonstrate the need for equilibrium information through a controlled two-stream experiment. The controlled two-stream scan varies the beam drift while holding the initial spatial density, thermal samples, wavevector and fixed-filter transfer unchanged. Across four resolved equilibria approaching marginal stability, this filter reduces the measured growth rate by $0.7\%$ to $9.1\%$. Equilibrium-dependent interior settings satisfy the prescribed $10\%$ rate tolerance. We then apply the constrained selection rule to 85 Gaussian candidates, that reduces density and grid-field mean-square errors by $7.40\%$ and $3.70\%$ on independently evaluated snapshots. A separate projected-linear calculation at that exact width gives a ratio of mean individual growth rates of $0.9556$, with paired $95\%$ interval $[0.9453,0.9640]$, consistent with the prediction $0.9513$. Analysis of finite-marker loading and ensemble averaging explains how the measured rates relate to the response model. Together, these results demonstrate a filter-design procedure that combines statistical error reduction with subsequent validation of the selected linear dynamics.

42. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.97; Date: 2026-10-05T19:59:35Z; Popularity: 1,971 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

43. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-10-04T14:10:57Z; Popularity: 487 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

44. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-10-04T08:17:55Z; Popularity: 369 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

45. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-10-04T21:57:52Z; Popularity: 248 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

46. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.11; Date: 2026-10-05T21:03:51Z; Popularity: 106 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

47. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-09-28T14:58:43Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

48. [Forecasting space weather risks on power grids](https://www.microsoft.com/en-us/research/blog/forecasting-space-weather-risks-on-power-grids/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 30 Sep 2026 16:00:00 +0000
   - Summary: Extreme space-weather events can damage power systems on Earth and degrade GPS accuracy and satellite operations. A new machine learning system can predict where damage is likely to occur 30-60 minutes before a storm arrives. The post Forecasting space weather risks on power grids appeared first on Microsoft Research .

49. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

50. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

51. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

52. [Hybrid Machine Learning-Assisted Raman Spectroscopy with Generative Feature Augmentation for Pharmaceutical Identification](https://arxiv.org/abs/2610.02224)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02224v1 Announce Type: new Abstract: Rapid and reliable identification of pharmaceutical residues is important for safeguarding public health, ensuring food safety, and enabling practical Raman-based screening. In this study, we propose HyMLRaman, a hybrid Raman spectroscopy framework that combines deep spectral feature extraction, generative models, and classical machine-learning classifiers to identify six pharmaceutical compounds, including amoxicillin, chloramphenicol, ciprofloxacin, tetracycline, ibuprofen, and paracetamol. Raman spectra are converted into spectral images and encoded with several deep neural-network backbones, among which EfficientNet-B3 yields the most effective representation. The resulting 1536-dimensional embeddings are then used to train downstream classifiers, including SVM, KNN, logistic regression, random forest, XGBoost, and ANN, using stratified 10-fold cross-validation. The hybrid EfficientNet-B3--SVM configuration achieves the strongest baseline performance, reaching 96.31% accuracy and a macro-F1 score of 96.36%, outperforming the standalone CNN baseline. To address limited-data conditions, a generative model, a DDPM-based feature augmentation, is introduced in a PCA-reduced EfficientNet-B3 latent space. The low-data ablation results show that DDPM augmentation provides selective benefits, particularly for KNN with reduced training fractions, and that its effect remains classifier-dependent. Finally, an application-level Raman Pharmaceutical Analyzer demonstrates the feasibility of embedding the trained model into an interactive Raman analysis workflow. These results suggest that HyMLRaman provides a practical and interpretable route for rapid Raman-based pharmaceutical screening.

53. [Rank-Aware Speculative Sampling for Diffusion Draft Trees](https://arxiv.org/abs/2610.02251)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02251v1 Announce Type: new Abstract: Speculative sampling accelerates diffusion generation by verifying inexpensive draft states in parallel while preserving the target law. Recent tree-based methods allocate the parallel compute budget more effectively than single-chain drafts, as demonstrated by Diffusion Greedy Rejection Sampling (D-GRS). D-GRS generates $K$ conditionally independent candidates per node, and sequentially tests them in their generation order. Yet the sampled candidates admit an informative ranking without additional target-model evaluations. To exploit this, we introduce Rank-Aware Speculative Sampling (RASS), a verification rule for speculative draft trees based on rank-aware list coupling. RASS orders draft candidates along the proposal-target mean displacement and samples a rank with weights optimized to minimize total variation between the selected-proposal and target laws. Finally, the selected candidate is maximally coupled with the target, with residual correction ensuring exact sampling for any choice of rank weights. We evaluate RASS on a Gaussian-mixture target, unconditional pixel-space generation on FFHQ, conditional generation on CIFAR-10, and latent diffusion with Stable Diffusion 3.5 using COCO2014 prompts. Measured by the ratio of standard to speculative sampling's target-model evaluation counts, RASS improves on D-GRS across the evaluated settings, with gains reaching approximately 20% on CIFAR-10 at matched compute budgets.

54. [Experimental Bench Validation of a Computational Fluid-Structure Interaction Model of Transcatheter Aortic Valve Dynamics](https://arxiv.org/abs/2610.03297)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.03297v1 Announce Type: new Abstract: Purpose: This study extends our fluid-structure interaction (FSI) framework for surgical bioprosthetic heart valves in an experimental pulse duplicator to a transcatheter aortic valve replacement (TAVR) device. We assess hemodynamic and leaflet kinematic agreement across pulse rates and the transferability of calibrated boundary-model parameters. Methods: We compared simulated and experimental pressure, volumetric flow rate, projected dynamic valve area (PDVA), and leaflet kinematics at 60, 70, and 80 beats per minute (bpm). Reduced-order boundary-model parameters were calibrated using only data acquired at 70 bpm and were subsequently held fixed. At each pulse rate, a condition-specific pump-pressure waveform was constructed from the measured upstream pressure and flow rate. The 60 and 80 bpm cases therefore evaluate parameter transfer under measurement-informed upstream forcing. Results: Across the three conditions, normalized root-mean-square errors are 2.88-3.08% for aortic flow rate, 7.64-8.07% for upstream ventricular pressure, 3.50-6.21% for downstream aortic pressure, and 3.07-4.70% for PDVA. The simulations reproduce the principal pressure, flow, valve-opening, and valve-closure features. The downstream aortic pressure and PDVA measurements at 60 and 80 bpm were not used to construct the upstream forcing or recalibrate the model parameters and therefore provide the principal out-of-calibration validation evidence. Conclusion: The results provide conditional experimental bench validation evidence for downstream hemodynamics and valve dynamics under measurement-informed upstream forcing and support boundary-parameter transfer across pulse rates without recalibration. This work advances an experimentally supported, high-fidelity FSI framework for evaluating TAVR device performance.

55. [A Generalized Source Integral Equation for Homogeneous Penetrable Scatterers](https://arxiv.org/abs/2610.02223)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02223v1 Announce Type: cross Abstract: The generalized source integral equation (GSIE)approach is extended to enhance the compressibility of moment matrices for essentially-convex homogeneous penetrable scatterers. In the proposed indirect surface integral equation (SIE) formulation, the scattered field representations use a single distribution of generalized sources that radiate only weakly into the scatterer. A separate distribution of conventional sources is used for representing the interior fields. The wave interactions between surface subdomains via the generalized kernel are of a reduced effective dimensionality. The corresponding exterior integral operator moment matrix blocks exhibit enhanced rank deficiency. For lossy scatterers, this secures the low-rank (LR) compressibility of hierarchical matrix structures for the full system. For scatterers in a much slower background medium, significant savings with very delayed asymptotic scaling of the costs can be achieved. The GSIE is formulated for the transverse magnetic (TM) scattering problem. It is validated for representative examples and its superior compressibility is demonstrated.

56. [A Bifurcation-Based Domain Decomposition Method with Neural Operators for Blood Flow Simulation](https://arxiv.org/abs/2610.02238)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02238v1 Announce Type: cross Abstract: Fast and accurate simulation of hemodynamic behavior within vascular networks is essential for numerous clinical applications. However, obtaining high-quality and computationally efficient flow measurements across complex vascular networks remains challenging. To address this, we first decompose the vascular network into a set of bifurcation units and then develop an operator network capable of mapping unit-specific parameters to the local solution fields of each bifurcation unit. By lumping the Windkessel-model outlet parameters and incorporating inlet boundary conditions from the solution of parent units, the flow and pressure fields can be rapidly approximated. Subsequently, operator-network-driven Schwarz waveform relaxation is applied across bifurcation units to correct discontinuities and improve numerical accuracy. On 7-segment and 55-segment arterial tree models, the proposed method achieves $13\times$ to $17\times$ wall-clock speedups over conventional 1D numerical simulation, with relative $L^2$ errors of 1% in both pressure and velocity. The resulting pulse wave velocity biomarkers agree with the conventional reference to within 1--2%, and the same trained operator generalizes to different tree-like 1D vascular network topologies.

57. [A Polynomial-Scaling PDE Solver with Entanglement-Basis Tensor Networks](https://arxiv.org/abs/2610.02316)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2610.02316v1 Announce Type: cross Abstract: We develop a finite element method (FEM) for partial differential equation (PDE) solver based on the entanglement-basis representation introduced in our companion work. By lifting non-linear finite-element equations into an augmented coefficient space, the governing PDE together with boundary, initial, and inter-element constraints can be expressed through a unified quadratic residual minimization. Although this augmented space grows exponentially with the number of elements, its tensor-product structure allows it to be represented efficiently using tensor networks. Using the matrix product state (MPS) as a concrete example, we show that density matrix renormalization group (DMRG) sweeps enable element-by-element optimization without explicitly constructing the full augmented space. For bounded bond dimension, the resulting computational cost scales polynomially with the number of finite elements. We extend the framework to time-dependent problems through implicit temporal discretization and demonstrate convergence under both mesh and polynomial refinement using diffusion equations.

58. [Quantum simulation of wave optics in weakly inhomogeneous media using block-encoding](https://arxiv.org/abs/2409.11020)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 05 Oct 2026 00:00:00 -0400
   - Summary: arXiv:2409.11020v3 Announce Type: replace-cross Abstract: We propose a quantum algorithm that simulates the propagation of a light field through a weakly inhomogeneous medium. In the paraxial approximation, the wave equation in an inhomogeneous material takes the form of the Schr\"odinger equation with a time-dependent Hamiltonian. This reduction is used to simulate wave optical dynamics on a quantum computer. Beam propagator operators for a short propagation distance are constructed using an efficient and flexible block-encoding that enables the simulation of various optical setups. The algorithm is showcased by simulating the propagation of a one-dimensional Gaussian beam through a lens of finite thickness, and the resulting spherical aberration is demonstrated.

59. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.77; Date: 2026-10-05T15:24:00Z; Popularity: 765 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

60. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

61. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.35; Date: 2026-10-05T20:27:41Z; Popularity: 1,354 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

62. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-29T10:00:25Z; Popularity: 235 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Fast Models, Slow Evidence: A Paired and Self-Audited Evaluation of System-1 Decision Models for LLM Agent Harnesses

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2610.02267

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
