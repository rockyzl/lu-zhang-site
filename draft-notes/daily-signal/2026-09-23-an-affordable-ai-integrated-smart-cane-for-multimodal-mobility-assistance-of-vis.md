# Daily signal sidecar - 2026-09-23

## Selected Signal

- Title: An Affordable AI-Integrated Smart Cane for Multimodal Mobility Assistance of Visually Impaired Users
- URL: https://arxiv.org/abs/2609.22277
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: An Affordable AI-Integrated Smart Cane for Multimodal Mobility Assistance of Visually Impaired Users
- Primary source: https://arxiv.org/abs/2609.22277
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

Total candidates reviewed after duplicate-source filtering: 64

1. [An Affordable AI-Integrated Smart Cane for Multimodal Mobility Assistance of Visually Impaired Users](https://arxiv.org/abs/2609.22277)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22277v1 Announce Type: new Abstract: Visual impairment affects over 2.2 billion people worldwide, yet conventional white canes cannot detect elevated hazards or provide semantic environmental context. Existing AI-assisted navigation systems typically rely on expensive hardware or cloud connectivity, limiting accessibility in resource-constrained settings. This paper presents an affordable (\$88 USD), fully offline AI-integrated smart cane designed for multimodal mobility assistance on an ultra-low-power Raspberry Pi Zero 2W. The system fuses RGB vision sensing with Time-of-Flight (ToF) distance estimation, pairing an INT8-quantized SSD MobileNet V1 model with distance-aware vibrotactile feedback and real-time audio alerts. To ensure operational robustness on constrained hardware, a multiprocessing architecture isolates sensor acquisition, neural inference, and haptic feedback into independent processes with fail-safe sensing support. Experimental evaluation across indoor mobility scenarios demonstrates a macro-averaged F1-score of 0.82 (precision: 0.85, recall: 0.81), a mean end-to-end latency of 330\,ms, and a peak power draw of 2.8\,W. A preliminary usability study with 12 participants (SUS: 78.5, NASA-TLX) demonstrated positive user perception and enhanced obstacle awareness. The proposed prototype validates the feasibility of deploying privacy-preserving, edge-native assistive intelligence for cost-sensitive mobility assistance.

2. [PAANI : On Device Visual Evidence Fusion and Explainable Guidance for River Robot Simulation](https://arxiv.org/abs/2609.22353)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22353v1 Announce Type: new Abstract: Mobile river monitoring robots must interpret obstacles and water boundaries that geographic waypoints alone cannot describe. On resource constrained platforms, converting imperfect visual predictions into timely and inspectable guidance is a distinct challenge. An object label or steering command does not explain which evidence supports a decision or when that evidence is unreliable. We present PAANI, an on-device perception to guidance architecture that combines a project trained YOLO11n detector and a custom MobileNetV3 Small semantic segmenter with timestamp aligned evidence fusion on Arduino UNO Q. Bounded tracking supplies object persistence, while an explicit corridor policy combines surface labels, accepted detections, urgency and mask uncertainty. Each final advisory exposes its contributing evidence and policy reasons. ROS 2 interfaces connect the local AI pipeline to a separate Gazebo vessel, localization and control testbed. Training uses 10,000 WaterScenes images for four-class detection and 1,127 MaSTr1325 images for segmentation, including 198 segmentation validation images. The selected FP32 ONNX models occupy 14.817 MB. Detector checkpoint test mAP at 0.5 IoU is 0.7388, while the separately evaluated rectangular ONNX export achieves validation mAP at 0.5 IoU of 0.7367. Segmentation ONNX validation mIoU is 0.9750. A five-minute UNO Q recording produced median and 95th percentile pipeline latencies of 467.8 ms and 580.3 ms at a configured 0.5 Hz cadence. The evaluation also identifies black input misclassification and a sampling rate mismatch that prevents the diagnostic apparent motion estimator from collecting sufficient evidence. These results support an inspectable and reusable edge robotics foundation while clearly distinguishing model accuracy and on-board execution from validated on-water collision avoidance.

3. [Goal-driven Variant Categorization](https://arxiv.org/abs/2609.22475)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22475v1 Announce Type: new Abstract: Process discovery rarely yields a single coherent process structure. For analysis, a common step is to cluster process variants based on structural similarity and then assign business meaning to the resulting groups. Since these partitions are not derived from the organization's goals, analysts must manually interpret and consolidate variants into business-meaningful categories. This judgment-intensive step becomes increasingly difficult as the number and complexity of variants grow. In this paper, we propose a goal-driven approach to variant categorization that reverses this workflow. We first author an organization's goal model that predefines the categorization axis. Each variant is transformed into a textual narrative describing its behavior, and a Large Language Model (LLM) interprets it in the context of the goal model and assigns the variant to the most appropriate category. LLM-based semantic reasoning connects low-level process behavior with analyst-defined business goals. We instantiate this approach end-to-end and evaluate it on three public logs differing substantially in scale and behavioral diversity. Goal-model guidance yields partitions that differ from those produced by unguided induction and respond to controlled edits to the declared alternatives, at the cost of authoring a goal model.

4. [Predictive Uncertainty for Neural CAE Surrogates](https://arxiv.org/abs/2609.25430)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25430v1 Announce Type: cross Abstract: Neural surrogates can substantially accelerate computer-aided engineering (CAE) workflows, but their use in design requires uncertainty estimates that remain meaningful across varying geometries, spatial prediction fields, and engineering quantities of interest. We investigate how established uncertainty quantification (UQ) approaches behave when adapted to geometry-conditioned neural surrogates. We compare one closed-form and two sampling-based approaches-a Gaussian process (GP)-based method, concrete Monte Carlo (MC) dropout, and deep ensembles-and evaluate them on three large, industry-relevant CAE datasets for external aerodynamics and crash dynamics. We examine whether predicted uncertainties have credible magnitudes, identify locations with larger prediction errors, respond to unfamiliar inputs, and remain informative for derived engineering quantities. On the DrivAerStar dataset, where all three methods are compared, each generally assigns higher uncertainty to locations with larger prediction errors, and validation-based rescaling brings interval coverage close to nominal on a disjoint in-distribution test set. Results on AirFRANS and automotive crash also show useful error ranking and interval estimates, but the relative performance of the methods changes with the dataset and evaluation criterion. UQ methods and evaluation metrics should therefore be selected based on the intended downstream CAE decision.

5. [Didactic knowledge or Clinical Cases? How Data Types Shape Medical Large Language Models](https://arxiv.org/abs/2609.22161)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22161v1 Announce Type: new Abstract: Medical large language models are commonly trained on mixtures of didactic data (e.g., textbooks) and clinical data (e.g., patient records), yet how these data types differentially shape model capabilities remains unclear. We address this issue with token-matched experiments that vary the didactic-to-clinical ratio and analyze how data composition affects performance, capability profiles, and error patterns across knowledge-intensive and clinic-oriented tasks. We uncover an asymmetric transfer across task types: clinical data improves clinic-oriented tasks while remaining competitive on knowledge-intensive ones, whereas didactic data mainly improves knowledge-intensive tasks. Error analysis suggests a knowing-doing gap, where improvements in knowledge recall do not reliably generalize to clinical reasoning. We further observe that modest amounts of clinical data yield most of the gains on EHR-grounded tasks, while the optimal mixture ratio varies with the knowledge and clinical reasoning demands of downstream tasks. These findings suggest that medical LLM data curation should be application-driven, with higher proportions of clinical data preferred for reasoning-intensive use cases.

6. [Social Influence and the Allocation of Scientific Attention in AI Populations](https://arxiv.org/abs/2609.22408)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22408v1 Announce Type: new Abstract: AI systems are becoming participants in the evaluation and use of scientific research. They encounter citation counts, download statistics and lists of popular articles developed around human readers, but the collective consequences of these signals for artificial readers remain uncertain. This paper adapts the Music Lab design to a market for academic attention. In the first experiment, 1,000 AI agents choose papers from the titles and abstracts of all 114 regular research articles published in the American Economic Review in 2025. The experiment has five independent-choice communities and five social-influence communities, each with 100 sequential agents. Only agents in the social-influence condition observe earlier selections within their community. Agents may select any number of papers. Social-information communities select 17.2 percent fewer papers per agent, concentrate their choices more heavily, and collectively cover 73 papers, compared with 90 independently. Between-community variation is greater under social information. In a second experiment with 200 agents across twenty social communities, randomly assigning papers five initial selections raises their subsequent selection rate by 45.55 percentage points (95% CI: 41.20 to 49.90). Choices have modest correspondence with external citations and little correspondence with download counts. The results show how a simple information rule shapes the volume, breadth and distribution of scientific attention in an artificial population.

7. [Replication Without Persistence in Hosted LLMs: Measurement Sensitivity in Action-Time Belief Evaluation](https://arxiv.org/abs/2609.22478)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22478v1 Announce Type: new Abstract: Behavioural evaluations of hosted language models can vary because the evaluated service, the measurement instrument, or both differ across runs. We separate three validation questions: whether a prior finding recurs on fresh data under its historical configuration (replication), whether the endpoint changes when the evaluation-and-inference configuration is rebuilt under the same identifier (measurement sensitivity), and whether the finding persists across subsequently tested identifiers under one common instrument (persistence). We study these questions in Regent Chess, a sequential environment in which a hidden, mutable state is recorded exactly, allowing stated beliefs to be scored against ground truth at action time; positive endpoint values mean worse performance than a matched-uniform comparator. The previously reported Gemini 3.1 Flash-Lite deficit recurs on fresh games under its historical configuration (+0.0530, 95% CI [+0.0329,+0.0714]). In a back-to-back same-day H/R comparison under the same public identifier, the model-minus-uniform endpoint is 0.0429 lower under the rebuilt configuration (95% CI for the H-minus-R contrast [+0.0182,+0.0667]); all six configuration components vary jointly, so no component is isolated. Under rebuilt R, the prospectively frozen, interleaved same-window 4K comparison reverses sign between Gemini 3.1 and Gemini 3.7, identifiers that differ in release and product tier; additional descriptive and exploratory cells show the same directional pattern. Any additional serving-period contribution remains unresolved (-0.0166, [-0.0483,+0.0157]). Replication, measurement sensitivity, and persistence can therefore yield different conclusions within one evaluation, motivating explicit indexing of hosted-model behavioural claims by tested identifier, serving period, measurement instrument, and inference configuration.

8. [The Wisdom of Artificial Deliberative Crowds](https://arxiv.org/abs/2609.22497)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22497v1 Announce Type: new Abstract: The aggregation of many lay estimates often outperforms individual expert judgment, a phenomenon known as the wisdom of crowds. While this is usually attributed to the independence of estimates, an even stronger effect arises through deliberation: averaging the consensus estimates of small deliberating groups outperforms the classical wisdom of crowds, with individual judgments themselves also becoming more accurate after deliberation. Whether these improvements transfer to large language models deliberating amongst themselves is unknown. Here we adapt a three-stage deliberation paradigm previously used with human participants for use with large language models from three different families, and test it across four domains of increasing real-world stakes: visual numerical estimation (Study 1), peer review of machine-learning papers (Study 2), detection of hidden malicious behavior by an artificial intelligence agent (Study 3), and sports forecasting against a real prediction market (Study 4). Across domains, deliberation reduced collective error beyond passive aggregation of independent responses, and post-deliberation individual judgments retained this collective gain. Notably, the advantage required model diversity: groups composed of clones of a single model did not benefit from deliberating. These results establish machine deliberation as a general-purpose aggregation mechanism, and point to diversity as an active ingredient.

9. [Agreement Overstates Evidence: Error Dependence in LLM Judge Consensus](https://arxiv.org/abs/2609.22512)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22512v1 Announce Type: new Abstract: Consensus among LLM judges is often taken as strong evidence that a decision is correct. This assumes that judges make their errors independently. In practice, LLM judges are often trained and evaluated in similar ways, so they can make the same mistakes. We study how this dependency affects the reliability of consensus. We find substantial error correlation across both open-weight and frontier LLM judges. In our main bank of ten judges, the average pairwise correlation between judge errors is 0.21. As a result, the ten judges only provide roughly as much statistical information as 3.5 independent judges. The dependency is even stronger among the high-accuracy frontier judges we evaluate, including judges from different providers. In up to 28% of our comparisons, ignoring shared errors leads to the conclusion that one system is significantly better, while accounting for them does not. We also find that the pattern of errors matters. Errors shared by most judges and errors concentrated among a smaller group affect consensus differently and favor different voting methods. Measuring the overall amount of correlation alone is therefore insufficient. Our results suggest a simple approach: use a small set of trusted examples to estimate judge accuracy and identify shared mistakes. These shared errors should then be considered when analyzing the results, and the voting method should be chosen using trusted examples before it is applied to new data.

10. [Ringg’s AI agents resolve up to 65% of customer calls with OpenAI](https://openai.com/index/ringg)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 24 Sep 2026 12:00:00 GMT
   - Summary: Using GPT-5.6, Ringg powers multilingual agents across voice, chat, WhatsApp, and web for 90% less cost vs. GPT-4.1.

11. [Two years of OpenAI Academy](https://openai.com/index/two-years-of-openai-academy)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 16:00:00 GMT
   - Summary: Marking two years of OpenAI Academy and bringing AI skills to even more communities.

12. [OpenAI extends cyber access to Ukraine for civilian defense](https://openai.com/index/openai-extends-cyber-access-to-ukraine-for-civilian-defense)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 13:00:00 GMT
   - Summary: OpenAI is extending access to its Daybreak program to the Government of Ukraine to support the cyber defense of civilian infrastructure.

13. [Grab and OpenAI bring practical AI skills to Southeast Asia](https://openai.com/index/grab-openai-ai-skills-southeast-asia)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 00:00:00 GMT
   - Summary: OpenAI and Grab launch GO Forward with AI, a regional programme helping 30,000 partners build practical AI skills across Southeast Asia.

14. [Better prompt caching for GPT-6](https://openai.com/index/better-prompt-caching-for-gpt-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 22 Sep 2026 21:00:00 GMT
   - Summary: Learn how GPT-6 improves prompt caching with higher cache hit rates, new diagnostics, explicit breakpoints, and controls that reduce latency and costs.

15. [Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 22 Sep 2026 18:00:00 GMT
   - Summary: Meet GPT-6 Sol and Luna, two models that bring frontier intelligence to everyday work with different balances of capability and cost.

16. [Parallel cut research time and cost in half with GPT‑6 Astra](https://openai.com/index/parallel-cuts-time-and-cost-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 22 Sep 2026 12:00:00 GMT
   - Summary: GPT‑6 Astra allowed Parallel’s agents to research and synthesize labor-market data in half the time and at half the cost vs. prior models.

17. [Priorities and principles for effective third party assessments](https://openai.com/index/priorities-principles-third-party-assessments)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT
   - Summary: OpenAI outlines priorities and principles for rigorous, secure, and independent third-party AI safety assessments of frontier models and safeguards.

18. [Advisory Group on Mathematics and Artificial Intelligence](https://openai.com/index/advisory-group-on-mathematics-and-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 12:00:00 GMT
   - Summary: OpenAI is working with an independent Advisory Group on Mathematics and Artificial Intelligence to guide the review and communication of emerging AI results.

19. [Higgsfield AI ships new video features in a day with GPT-6 Astra](https://openai.com/index/higgsfield-from-prompt-to-production-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 21 Sep 2026 12:00:00 GMT
   - Summary: With GPT-6 Astra, Higgsfield AI makes video ad creation easier for small businesses and brings new creative tools to market faster.

20. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

21. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

22. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

23. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [**Know Who Spoke When: Build Real-Time, Multi-Speaker AI with NVIDIA Nemotron 3 Diarization**](https://huggingface.co/blog/nvidia/nemotron-diarization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 23 Sep 2026 13:17:01 GMT

26. [How UK AISI and EvalEval Are Making Benchmark Results Reproducible](https://huggingface.co/blog/evaleval-aisi)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

27. [Transformers now runs llama.cpp quants](https://huggingface.co/blog/transformers-llama-cpp-quants)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

28. [Jun Kim, oMLX creator and maintainer, joins Hugging Face to support the MLX community](https://huggingface.co/blog/omlx)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

29. [Pruning LLMs Like a Physicist: Block Removal as an Ising Optimization Problem](https://huggingface.co/blog/MultiverseComputingCAI/pruning-llms-like-a-physicist-block-removal-as-an)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 13:44:34 GMT

30. [tokenizers v1: encode, decode and scaling, measured](https://huggingface.co/blog/tokenizers-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 GMT

31. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

32. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

33. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

34. [Learning 3D biophysical cell properties from 2D images and cell-population statistics](https://arxiv.org/abs/2609.22410)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22410v1 Announce Type: new Abstract: Inferring 3D cellular properties from 2D microscopy is difficult when a reference instrument reports only population statistics rather than labels for individual cells. Here we develop a population-supervised framework that maps single 2D red-cell images to latent biophysical quantities and aggregates them to mean corpuscular volume, red-cell distribution width and mean corpuscular haemoglobin. The model combines shared local inference, a biophysically structured decoder for volume and haemoglobin, learned instance weighting and device-specific calibration. We formalise conditions under which aggregate observations identify restricted instance predictors, show why population agreement does not by itself identify single-cell properties or 3D geometry, and derive the dispersion penalty induced by subset mean matching. The development dataset comprises 390 specimens and 1,105 acquisitions across six devices, with reported Pearson correlations of 0.86--0.98 against a Sysmex analyser. The framework provides a testable route from 2D images and population supervision to 3D cellular biophysics without claiming explicit 3D reconstruction.

35. [IntLawNER: A Named Entity Recognition Dataset and Benchmark in International Law](https://arxiv.org/abs/2609.22529)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.22529v1 Announce Type: new Abstract: International law provides the normative framework through which states coordinate action, regulate armed conflict, and protect human rights, yet its texts remain without token-level named entity recognition (NER) resources. We introduce IntLawNER, a NER dataset and benchmark for codified sources of international law, covering 2,987 gold-annotated sentences and 8,094 entity spans from International Court of Justice (ICJ) decisions, UN Security Council resolutions, and European Court of Human Rights (ECtHR) judgments, annotated with seven institution-specific entity types. We construct IntLawNER with a cost-effective hybrid algorithmic-agentic pipeline that reduces 468k source sentences to a compact annotation set through candidate retrieval, LLM-based vetting, and human review, with 89.6% of gold spans accepted unchanged from the silver layer. However, the silver-to-gold analysis reveals that human-machine aggregate agreement metrics can be misleading in domain-specific NER: Cohen's kappa=0.964 on boundary-matched spans masks a macro-F1 of 0.753 when missing entities, boundary errors, and label corrections are included. The benchmark shows that zero-shot span-based GLiNER collapses on entity types dependent on institutional function rather than surface form (0.243 micro-F1), while fine-tuned transformers struggle on rare labels. Carefully selected few-shot examples that demonstrate label contrasts improve every LLM over zero-shot prompting, with Claude Opus 4.6 reaching the best score of 0.873 micro-F1. We release IntLawNER as a benchmark and reusable resource for extracting references in international legal texts.

36. [Federating Quantum and Classical Computing: A Privacy-Preserving Hybrid Approach](https://arxiv.org/abs/2609.25082)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25082v1 Announce Type: new Abstract: Quantum machine learning (QML) is increasingly recognized as one of the most promising near-term applications of quantum computing, viewed as a next-frontier candidate beyond purely classical approaches. Hybrid quantum-classical models operationalize this potential by embedding a parameterized quantum circuit within a model where all other components remain classical-a design already applied to chemistry simulation, financial modeling, and image classification. However, their deployment in privacy-sensitive, multi-party settings is constrained by the need to avoid centralizing raw data and by the requirement that modern quantum circuits remain parameter-efficient to stay trainable at scale. In this paper, we address these constraints by evaluating federated learning (FL) as a means of combining a hybrid quantum-classical active party with a classical passive party, using Sherpa.ai's Blind Vertical FL (SBVFL) protocol to avoid centralizing raw data, while drastically reducing communication. We construct the split multiplicative periodic parity (SMPP) benchmark, following common QML design practice. On this task, our simulations show that SBVFL raises accuracy from 0.7227 to 0.8757 compared to local training, closely approaching non-private centralized accuracy, and that the hybrid quantum-classical model achieves this with substantially fewer trainable parameters than the classical neural networks and random forest alternatives. These results show that FL enables high-performing, privacy-preserving quantum-classical collaboration without centralizing raw data.

37. [Electromagnetic analysis of low dropout regulator circuit small-signal stability characterization for inductive LC filters and transformers](https://arxiv.org/abs/2609.26221)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.26221v1 Announce Type: new Abstract: This work systematically evaluates the capability of generative large language models (LLMs), specifically GPT-4o, to support the full design, simulation, and optimization workflow of low-dropout (LDO) linear voltage regulators. The study covers four core design phases: pre-design specification mapping, transistor-level circuit topology generation, SPICE simulation guidance, and post-simulation performance fine-tuning, with an extended investigation into the integration of magnetic inductive components within the LDO signal path. GPT-4o autonomously proposes a single-stage differential-pair error amplifier architecture with thin-oxide MOS transistors, provides sizing guidance for the PMOS pass element, and recommends passive compensation networks to secure closed-loop stability. The LDO testbench adheres to low-voltage portable electronics specifications: an input range of 0.8-1.2 V, tunable 0.7-1.1 V output, maximum 250 mA load current, and integrable output capacitance below 10 nF. Transient and small-signal AC SPICE simulations validate LLM-assisted circuit implementations, quantifying settling time reduction via compensation capacitors and verifying adequate phase margin across operating bandwidth. A key novel extension explores three distinct inductor placement schemes, input-side supply filtering, out-of-loop LC output filtering, and inductive loading embedded within the feedback divider, rooted in Maxwell's electrodynamic principles and MOSFET small-signal device physics. Comparative Bode and output impedance analysis reveals that inductors inserted inside the feedback path introduce resonant complex poles, severe gain peaking, and degraded phase margin, while inductors placed external to the feedback sensing tap preserve regulator stability while suppressing high-frequency electromagnetic interference.

38. [Reactive molecular dynamics simulations of atenolol first steps degradation by 9CL6 ammonia monooxygenase](https://arxiv.org/abs/2609.25076)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25076v1 Announce Type: cross Abstract: The persistence of beta-blockers like atenolol in aquatic environments necessitates efficient remediation strategies, such as enzymatic biodegradation. This study employs reactive molecular dynamics (rMD) simulations to investigate the initial degradation steps of atenolol by the oxidoreductase 9CL6 ammonia monooxygenase. Using the ReaxFF reactive forcefield within a simulated aqueous environment, the degradation processes were modeled at 300 K and 350 K over 6.5 nanoseconds. Results indicate initial degradation rates of 24% at 300 K and 18% at 350 K, with each enzyme molecule degrading approximately 20 atenolol molecules before reaching a saturation point. Mass spectrum analysis reveals the primary formation of C8 and C6 fragments at both temperatures. However, at 300 K, additional intermediate fragments (C1, C3, C11, C13) are observed, which are completely bypassed at the higher temperature of 350 K. Furthermore, increasing the temperature to 350 K accelerates the initial degradation phase from 2 ns to 0.5 ns, despite yielding a slightly lower overall degradation rate. Ultimately, these atomistic insights provide a foundational computational methodology for predicting biodegradation rates and pathways of pharmaceutical contaminants at the molecular scale.

39. [Compact Finite-Average-Moment Schemes with Single-Step Oscillation Elimination for Hyperbolic Conservation Laws](https://arxiv.org/abs/2609.26194)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.26194v1 Announce Type: cross Abstract: High-order shock-capturing schemes often face severe computational bottlenecks due to wide stencils, stagewise nonlinear weights, and expensive local characteristic decompositions. To address this, we propose a compact finite-average-moment (FAM) framework for hyperbolic conservation laws that completely decouples the formal spatial order from the number of evolved local degrees of freedom. By evolving only a $\mathbb{P}^1$ moment state (i.e., cell averages and scaled first-order moments), we achieve up to sixth-order accuracy ($k=3, 4, 5, 6$) via compact, polynomially exact \emph{linear} moment reconstructions. A key algorithmic innovation is consolidating the nonlinear stabilization into a single, derivative-free oscillation-elimination (OE) procedure applied only after the final Runge--Kutta stage. This OE procedure exactly preserves cell averages while applying an explicit exponential correction to the first-order moments, avoiding repeated stagewise nonlinear weights or limiting. Fourier analysis of the linear backbone demonstrates $k$th-order accuracy, strong spurious mode damping, and $(k+1)$th-order cell-average superconvergence. Extensive numerical experiments on scalar laws and the Euler equations verify the expected smooth accuracy and robust, nonoscillatory shock resolution. Notably, by performing componentwise reconstruction directly in conservative variables and streamlining stabilization, the FAM schemes deliver significantly lower complete-run wall-clock times compared to the multi-resolution weighted essentially non-oscillatory (MR-WENO), unified-stencil Hermite WENO (HWENO-U), and OE-HWENO methods.

40. [Runge--Kutta-Aligned Oscillation Elimination: Restoring Superconvergence for Fully Discrete Shock-Capturing DG Schemes](https://arxiv.org/abs/2609.26195)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.26195v1 Announce Type: cross Abstract: Nonlinear stabilization is indispensable for discontinuous Galerkin (DG) discretizations of hyperbolic conservation laws, yet it typically disrupts the delicate error structure required for superconvergence analysis. Consequently, existing theory has largely been restricted to linear or semi-discrete schemes lacking oscillation control. This paper bridges this gap by proposing a Runge--Kutta (RK) aligned oscillation-eliminating (OE) DG framework that restores the superconvergence properties. By synchronizing the pseudo-time step in the OE procedure with the cumulative RK stage coefficients, we unlock a cancellation mechanism for low-order interface errors that is inaccessible to standard OEDG formulations. We rigorously prove that this fully discrete scheme achieves $(k+2)$-th order superconvergence to a tailored projection of the exact solution for linear conservation laws in both one and two dimensions, while maintaining the non-oscillatory shock-capturing capabilities of the original method. Moreover, we establish a general guiding principle for designing a class of OE-type DG schemes that exhibit such superconvergence. Key theoretical innovations include the construction of stage-aligned correction functions to compensate for nonlinear OE sources and the discovery of a two-dimensional projection operator that preserves outflow-edge averages, a property essential to close the discrete shift estimates. Numerical experiments confirm the predicted superconvergence rates and demonstrate that RK alignment preserves the parameter-free robustness of OEDG for problems with strong discontinuities.

41. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.91; Date: 2026-09-23T13:54:10Z; Popularity: 1,913 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

42. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-20T03:29:46Z; Popularity: 486 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

43. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-09-23T11:14:46Z; Popularity: 367 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

44. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-23T10:37:25Z; Popularity: 248 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

45. [Show HN: AI·rete·RAG – a Rete rule engine decides, RAG explains why](https://ai-rete-rag.com/)
   - Source: Hacker News; Group: Tech community; Score: 3.22; Date: 2026-09-22T16:15:06Z; Popularity: 41 points, 5 comments
   - Summary: HN discussion: 41 points, 5 comments.

46. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

47. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

48. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

49. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

50. [Entropy Can Flow, or It Can Guide. Be Entropy. LEDFlow: Introducing Entropy-guided Generation Order into Uniform Discrete Flow](https://arxiv.org/abs/2609.25131)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25131v1 Announce Type: new Abstract: Uniform discrete flow permits repeated updates at every generation position. While continued revision supports correction of wrong tokens, it also exposes correct intermediate predictions to later errors. An experiment on Sudoku puzzles shows that 9.4% of generated cells are correct at an intermediate step but incorrect in the final output. We introduce generation order into uniform discrete flow through selective absorption, which fixes chosen predictions while preserving the uniform-flow velocity at active positions. To prevent absorbing incorrect predictions, we propose Low-Entropy Discrete Flow (LEDFlow), a training-free sampler that adaptively orders absorption by local entropy. By decomposing absorption error into joint dependence and conditional prediction terms, we show that selecting the lowest-entropy positions under a fixed absorption budget minimizes an upper bound on the conditional term. We further support the choice of local entropy by showing that the decision-error bound of global lookahead grows with the lookahead window under an imperfect denoiser. Across reasoning benchmarks, LEDFlow attains 0.845 Nikoli Sudoku solve accuracy, with the largest gains on strongly constrained tasks. On text-to-image generation it attains the best overall score, and on multimodal understanding it improves over the native sampler on all six benchmarks, at an inference cost comparable to standard flow sampling.

51. [The Probabilistic Structure of Large Language Models](https://arxiv.org/abs/2609.25134)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25134v1 Announce Type: new Abstract: This paper presents a probabilistic perspective on large language models (LLMs), developed with the aim of bringing together, in a single self-contained account, tools that are usually treated separately across the literature. LLMs are described through probability measures on the set of sequences of tokens, specified via their autoregressive conditional distributions. Training is formulated as a maximum-likelihood estimation problem, addressed by stochastic gradient methods, while text generation is viewed as the sequential simulation of the resulting stochastic process. The role of the asymmetry of the Kullback--Leibler divergence in text generation is examined in relation with characteristic phenomena such as hallucination and the distinction between statistical plausibility and truth. As a complementary illustration of the same viewpoint, we also discuss diffusion models, built around the score function, which cast generation not as sequential token prediction but as the simulation of a reverse-time stochastic process transforming noise into data both in discrete and continuous time.

52. [Exposing Blind Spots in Deep Imbalanced Regression Evaluation](https://arxiv.org/abs/2609.25152)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25152v1 Announce Type: new Abstract: Deep Imbalanced Regression (DIR) addresses a common failure mode of regression models: target distributions are highly non-uniform, causing models to perform best in densely populated target regions even when reliable performance is required across the full target range. Despite rapid methodological progress, DIR evaluation remains constrained by three blind spots: it is dominated by image-based benchmarks, its standard many-/medium-/few-shot protocol is diagnostic but not decision-complete, and tail-region stability across random seeds has not been systematically evaluated. We revisit DIR evaluation along these three axes. First, we broaden the data domain by evaluating DIR on a multimodal virtual sensing benchmark (\textsc{MuViS}) with nine time-series extrinsic regression tasks across six physical domains, where rare target values often correspond to operationally meaningful regimes. Second, we adopt balanced MAE (\emph{bMAE}) and introduce balanced Mean Absolute Scaled Error (\emph{bMASE}), a scale-normalized metric for decision-complete comparison across methods and datasets. Third, through a repeated reevaluation of six representative DIR methods across multiple random seeds, we show that the tail regions targeted by DIR exhibit particularly high sensitivity to seed-level variability. Our results show that standard virtual-sensing models exhibit substantial tail degradation hidden by global MAE, that existing DIR methods can improve balanced performance but transfer unevenly to multimodal time-series data, and that tail-region instability remains a largely hidden failure mode under current DIR evaluation practice. Together, these findings and our publicly available code provide a reproducible basis for future DIR research toward regression systems that capture rare target regimes as reliably as common ones.

53. [Mitigating Sequential Reappearance in Diffusion Data-Point Unlearning](https://arxiv.org/abs/2609.25166)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25166v1 Announce Type: new Abstract: Diffusion data-point unlearning is typically evaluated immediately after each deletion, even though subsequent requests may repeatedly update the same model. We identify sequential reappearance, a failure mode in which an instance that is initially judged to be forgotten later returns to the memorized regime without reuse of the deleted data or adversarial fine-tuning. To capture this behavior, we introduce a target-level evaluation protocol that tracks whether each target is forgotten immediately, remains forgotten at the end of the sequence, or reappears during subsequent deletions. We further find that targets that later reappear exhibit sharper local denoising-loss geometry after deletion than targets that remain forgotten.

54. [Learning continuous reaction paths for transition-state prediction](https://arxiv.org/abs/2609.25523)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25523v1 Announce Type: new Abstract: Transition states are defined by reaction pathways, yet most machine-learning methods predict them as isolated geometries. We introduce MARC-TS, a two-stage framework that learns a continuous, endpoint-conditioned path, queries it at any resolution and uses local path context to refine a transition-state candidate. We construct T1x-IRC-8K, a dataset of 8,209 reactions and 1,088,725 path-resolved geometries. On held-out reactions, the path model reduced complete-path error by 48.4% relative to endpoint interpolation, and the localizer achieved a mean aligned structural error of 0.127 {\AA}. Quantum-chemical optimization and vibrational analysis yielded 405 frequency-confirmed first-order saddle-point candidates from 410 predictions. In a 100-reaction nudged elastic band comparison, learned-path initialization reached a joint geometry-and-force target for 66% of reactions, compared with 12% for geometric interpolation after 100 optimizer steps. By treating the path as a reusable representation rather than an auxiliary output, MARC-TS connects transition-state prediction, mechanistic interpretation and quantum-chemical refinement.

55. [Propagation electrodynamics differential conduction of action potentials in geometrically branched squid giant axons](https://arxiv.org/abs/2609.26224)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.26224v1 Announce Type: new Abstract: Classical cable theory neglects magnetic induction, Lorentz forces, and transient electromagnetic (EM) currents, limiting its accuracy for action potential propagation in branched neuronal geometries. We develop a coupled Maxwell-cable framework that integrates finite-difference time-domain (FDTD) solutions of Maxwell's equations with extended Hodgkin-Huxley and Fitzhugh-Nagumo dynamics, including magnetic gating, EM transmembrane currents $I_{\text{EM}}$, and quantum corrections for thin segments. Controlled simulations in asymmetric and symmetric axonal bifurcations show that inductive effects lower the critical branch radius for conduction failure and break symmetry in identical daughter branches under transverse magnetic fields. We introduce an EM-corrected geometric ratio $GR_{\text{EM}}$ that revises branch-point impedance matching and captures size-dependent axial current imbalances. Parent axon conduction velocity deviates significantly from the $\sqrt{d}$ scaling law when EM feedback and quantum effects are included, leading to early blockage at large diameters. Overall, quasi-static models underestimate EM corrections to speed, waveform, and transmission fidelity; our framework offers a multi-physics tool for electrodynamic signaling in complex neuronal architectures.

56. [Fast Surrogate for the Earth Matter Effect on Solar Neutrinos](https://arxiv.org/abs/2609.25229)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25229v1 Announce Type: cross Abstract: We present a deep-learning surrogate for the Earth matter effect on solar neutrinos. The model uses a residual convolutional network conditioned on the solar neutrino oscillation parameters and is trained on numerical solutions computed over a grid of parameter values. It predicts the Earth-induced transition probabilities across neutrino energy and zenith angle, providing a fast approximation to the direct numerical calculation. For the reference electron-neutrino survival probability, the surrogate achieves a pointwise relative accuracy of approximately $2\%$ and a speed-up of about a factor of 60 in a laptop-CPU test. Since the network learns only the Earth-crossing propagation, it can be applied without retraining to new-physics scenarios that leave this propagation unchanged. The surrogate can also be retrained using alternative numerical implementations or extended parameter sets, providing a flexible and computationally efficient approach for solar-neutrino analyses. The code and simulation data are publicly available at \href{https://github.com/AI-Driven-HEP/NuMatterSurrogate}{\faGithub}.

57. [Finite-state automata for exact matrix product operators of tight-binding Hamiltonians: fractals, quasicrystals, trees and hyperbolic lattices](https://arxiv.org/abs/2609.25276)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25276v1 Announce Type: cross Abstract: Inspired by the recent progress in the simulation of tight-binding Hamiltonians on large lattices using tensor networks, we introduce a systematic matrix product operator (MPO) construction for single-particle Hamiltonians on recursively structured lattices. Taking advantage of this recursive structure, we encode the lattice geometry in a finite-state automaton and, adapting ideas from Abelian-symmetric tensor networks, obtain an exact and analytical MPO representation of the Hamiltonian, where the number of tensors grows logarithmically with the system size and the bond dimension is set by the number of automaton states. Several examples demonstrate the generality of the framework: regular lattices, fractals, Cayley trees, hyperbolic lattices, and one- and two-dimensional Fibonacci quasicrystals. Combined with the kernel polynomial method, these MPO representations enable large-scale calculations of spectral properties without explicitly constructing the full Hamiltonian. This provides a unified route to the exploration of electronic properties across a broad class of lattices at exponentially large system sizes.

58. [Uniform approximation of spectra of linear second order differential operators via discrete sine transform based discretisation](https://arxiv.org/abs/2609.25796)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 23 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.25796v1 Announce Type: cross Abstract: We study various discretisation schemes for the regular Sturm--Liouville operator on a bounded interval and for the Laplace operator on an arbitrary planar domain, in both cases subject to zero Dirichlet boundary conditions. The objective is to identify a discretisation scheme such that the corresponding discretised operator---a matrix of size $N \times N$---produces $N$ eigenvalues that approximate as closely as possible the first $N$ eigenvalues of the corresponding operator at the continuous level. By means of numerical experiments we examine several conventional discretisation schemes, and we corroborate the known fact that the conventional discretisations fail to achieve the objective, with the failure attributable to the poor approximation of high-index eigenvalues, and, as a result, to the non-uniform spectrum approximation. In contrast, the newly proposed discrete sine transform based discretisation scheme is designed in such a way that it replicates the asymptotic behaviour of high-index eigenvalues, thereby providing the sought uniform spectrum approximation. Of equal significance is the fact that the proposed discrete sine transform based scheme can be, unlike many Fourier transform based methods, applied to non-rectangular domains.

59. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

60. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-22T09:57:28Z; Popularity: 749 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

61. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.26; Date: 2026-09-23T17:51:21Z; Popularity: 1,263 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

62. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-22T06:46:09Z; Popularity: 233 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

63. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.13; Date: 2026-09-22T09:28:51Z; Popularity: 126 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

64. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-17T09:23:32Z; Popularity: 8 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

An Affordable AI-Integrated Smart Cane for Multimodal Mobility Assistance of Visually Impaired Users

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.22277

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
