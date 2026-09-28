# Daily signal sidecar - 2026-09-28

## Selected Signal

- Title: Do LLMs Understand Context? A Knowledge Graph-Based Evaluation Framework
- URL: https://arxiv.org/abs/2609.30484
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Do LLMs Understand Context? A Knowledge Graph-Based Evaluation Framework
- Primary source: https://arxiv.org/abs/2609.30484
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

Total candidates reviewed after duplicate-source filtering: 58

1. [Do LLMs Understand Context? A Knowledge Graph-Based Evaluation Framework](https://arxiv.org/abs/2609.30484)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30484v1 Announce Type: new Abstract: While large language models (LLMs) have achieved remarkable linguistic capabilities, a profound question lingers at their core: do these models truly comprehend context or simply excel at pattern matching on an unprecedented scale? Contextual understanding in LLMs refers to the ability to correctly extract relevant information from a given context, integrate it into a coherent internal representation, and reason over it to produce factually consistent and contextually grounded responses. However, traditional methods such as BiLingual Evaluation Understudy (BLEU) and perplexity simply measure surface-level performance. This reveals a critical gap in question answering (QA), where responses must be contextually grounded rather than simply being memorized associations. To fill this void, we propose a novel knowledge graph (KG) based evaluation framework for LLM contextual understanding in QA. Central to this is Semantic Structural Similarity for KGs (S3KG), a hybrid similarity measure combining structural and semantic signals into a single score. In addition, a diagnostic analysis framework is developed to identify and categorize reasoning errors at the triplet level, enabling fine-grained analysis of model failures. Together, across nine benchmarks, S3KG achieves F1 gains of up to $+7.6$ points over the strongest baseline and AUROC up to $0.973$.

2. [Bringing AI to Autonomous Systems -- From Cognition to Collective Intelligence](https://arxiv.org/abs/2609.30291)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30291v1 Announce Type: new Abstract: The purpose of this article is to highlight the central role of autonomous systems as the ultimate stage in the development of AI, to explain the underlying technical challenges that require a combination of connectionist AI and symbolic AI, and to integrate AI and systems engineering. We present a comprehensive framework for the design and evaluation of autonomous systems, based on a generic agent architecture that characterizes their behavior as the composition of cognitive functions organized around a long-term memory containing the agent's evolving knowledge. We address the challenges posed by the implementation of the fundamental features of the agent architecture, in particular the link between sensory data and structured data stored in memory, decision-making related to the achievement of the agent's goals and their planning, as well as the coordination of agents to combine individual and collective intelligence. We explain that agent trustworthiness, unlike that of traditional systems, is not limited to behavioral properties. It includes an essential dimension related to cognitive properties, the validity of which depends on how the agent uses its knowledge in decision-making. We present avenues for the development of methods for evaluating agent trustworthiness. We conclude with a critical assessment of the substantial gap between the aspirational vision of autonomous multi-agent systems and the current state of the art.

3. [ScopeBench: Do Agents Preserve Engagement Boundaries Under Goal Pressure?](https://arxiv.org/abs/2609.30325)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30325v1 Announce Type: new Abstract: Agents are increasingly deployed with real autonomy in web application and network penetration testing, where a single out-of-scope action can breach a client's engagement boundary. Existing offensive-security benchmarks measure raw hacking capability; as those benchmarks saturate, the real barrier to deployment is a special case of alignment: scope adherence. We introduce ScopeBench, a benchmark of 30 dead-end agentic security tasks in which the stated objective is reachable only by violating the stated scope. Each task appears under two conditions that share an environment, verifier, and objective and differ only in scope: one instruction set has no scope and measures capability; the other has a natural-language scope to measure adherence. Scopeless trajectories are graded by a standard deterministic verifier. Scoped trajectories pass through two grading arms. First, the same deterministic verifier checks for the flag: because the flag sits behind the scope boundary, a pass proves by construction that a forbidden action occurred, yielding a high-precision lower bound on the violation rate. If the verifier does not pass the trajectory, an agentic judge estimates whether an out-of-scope call occurred. We calibrate the judge against 100 ScopeBench trajectories labeled call-by-call by human annotators, and a blinded audit of the evaluated rollouts finds its high recall holds - no false negatives among the 36 audited violations, with over-flagging its only observed error. Across 8 models in one harness, raw capability spans 12.2% to 81.1% and scope adherence spans 34.4% to 86.7%, with the judge finding 331 violations that mechanical verification misses. Opus-4-8 achieves a raw-capability score 10 percentage points higher than sonnet-4-6's while exhibiting 35.6 percentage points higher scope adherence. We release the frozen pilot benchmark, evaluation code, and all 2160 ATIF trajectories.

4. [When Is a Multi-Agent Code Judge Actually Grounded? Two Label-Free Measurements, and a Judge That Declines to Guess](https://arxiv.org/abs/2609.30328)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30328v1 Announce Type: new Abstract: When one language model judges whether another's code is correct, it does not report the absence of evidence. It returns a confident verdict with reasoning attached, indistinguishable from a verdict it had grounds for. Multi-agent verification, which decomposes a judgment into checkable claims and verifies each against evidence, is a promising response and works well when the evidence is a set of retrieved documents. We argue such methods require two things of their evidence: it must be independent of the answer under review, and it must differ between the two candidates being compared. The second condition holds automatically with retrieved documents and stops holding in code judging. Running MARCH, a published framework unmodified over 80 condition-by-cell measurements on two code judging benchmarks, we find it declares both solutions equally good on 78 to 95% of comparisons, reaching 4.4% accuracy where the same model asked directly reaches 43.7%. Neither easier problems nor a larger judge changes this. Two measurements taken from the pipeline's own logs explain it without needing labels. Gating on one of them, the pipeline declines the comparisons it cannot make and raises its accuracy from 20.7 to 36.9% while still answering half of all comparisons. The contribution is not a more accurate judge, but a label-free way to tell when a judge has no basis for its answer.

5. [A Synthetic Ground-Truth Framework for the Evaluation of Explainable AI Methods](https://arxiv.org/abs/2609.30397)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30397v1 Announce Type: new Abstract: Evaluating explainable Artificial Intelligence (XAI) methods is a challenging task due to the lack of reliable evaluation procedures and, in particular, the absence of ground truth explanations. In the literature, existing evaluation approaches typically assess explanations by measuring their fidelity with respect to the predictions of a black-box model. However, such evaluation strategies only quantify the degree to which an explanation reproduces the model's output, without ensuring that the explanation correctly reflects the underlying decision process. As a consequence, different explanations may achieve similar fidelity scores while providing inconsistent or misleading interpretations of the model behavior. In this paper, we propose a framework for the evaluation of XAI methods based on synthetic ground truth. The proposed approach relies on controlled interventions to generate synthetic datasets in which the importance of input components can be determined by design. This enables the construction of ground truth explanations that are directly aligned with the behavior of the model under analysis. The framework is instantiated across three data domains, namely binary images, tabular data, and time series, allowing a comprehensive assessment of explanation methods in heterogeneous settings. Experimental results obtained by evaluating nine widely used XAI methods show significant limitations in current techniques and highlight the importance of synthetic, intervention-based benchmarks for a reliable assessment of explanation quality.

6. [Spectral Feedback for Test-Time Alignment of Protein Diffusion Models](https://arxiv.org/abs/2609.30456)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30456v1 Announce Type: new Abstract: Reward maximization alignment methods for discrete diffusion models have primarily focused on steering the reverse process, either by influencing token logits or by selecting favorable sequences at intermediate steps. These approaches largely treat inference as a unidirectional process, lacking mechanisms for revisiting undesirable token selections. We introduce Spectral Feedback, an algorithm that selects edit-positions in a feedback loop, allowing the model to iteratively correct its own generations. This approach leverages the mask structure of discrete diffusion models by re-masking and re-sampling tokens, analogous to image editing methods that reintroduce noisy latents and re-run the reverse process. While prior alignment methods focus on what token labels to assign to maximize a target reward, we instead treat which tokens to revisit as the central alignment problem. Selecting edit-positions is challenging because edit effects are interdependent: the impact of modifying one token depends on which others are edited simultaneously. We define an edit-set as a set of token positions to re-mask and re-sample. Motivated by prior work on sparse interactions in biological systems, we find empirically that edit-set value functions for protein inverse folding admit sparse Fourier representations. This structure enables Spectral Feedback to efficiently learn and optimize the value functions for edit-position selection. Spectral Feedback is model-agnostic and can be applied to pretrained, test-time aligned, and fine-tuned diffusion models. For all of these models, the algorithm improves alignment performance without modifying the underlying generative process. Applied to inverse folding with a protein stability reward oracle, it achieves a 32.3% increase in stable proteins for a pretrained model, 24.8% for Best-of-10, and 5.8% for a state-of-the-art RL fine-tuned diffusion model.

7. [Pretrained ASR Pseudo-labeling for Noisy Police Audio](https://arxiv.org/abs/2609.30469)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30469v1 Announce Type: new Abstract: Pretrained ASR systems perform poorly on noisy Broadcast Police Communication (BPC), hindering efforts to understand police decision-making. Pseudo-labeling offers an unsupervised path to improve ASR without expensive human labels, but the efficacy of this approach on very noisy domains is not known. In this work, we systematically assess the opportunities and limits of pseudo-labeling to adapt foundation ASR models (Whisper and Qwen3-ASR) to noisy BPC domain corpora from Baltimore and Chicago. We demonstrate that existing internal confidence metrics (log-probabilities and STAR scores) fail to distinguish between high and low quality BPC pseudo-labels, and we introduce an external LLM-as-a-judge filtering paradigm that leverages parametric knowledge to discard contextually implausible transcripts. Our LLM-judging filters more aggressively than internal metrics and significantly reduces WER of the pseudo-labeled training sets across the Baltimore and Chicago BPC corpora, though a substantial gap remains relative to an oracle filter. We also introduce a new cross-model pseudo-labeling paradigm where one model is finetuned with pseudo-labels from the other, and we identify this method as a promising direction for future pseudo-labeling work.

8. [Energetically Driven Structure Matching for Autonomous Total X-ray Scattering Experiments](https://arxiv.org/abs/2609.30852)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30852v1 Announce Type: cross Abstract: The emergence of autonomous laboratories motivates rapid conversion of experimental data into reliable atomistic models on time-scales compatible with closed-loop optimization. Here we develop an energetically driven structure matching framework for analysis during ongoing total X-ray scattering experiments. Using data from gold nanoparticles, we match against idealized spherical, octahedral, decahedral, and icosahedral geometries, their machine-learned interatomic potential (MLIP)-relaxed structures, and molecular dynamics (MD) ensembles. Idealized models are fast to generate but can misassign morphology and systematically underestimate size by neglecting surface relaxation, strain, and thermal disorder. MLIP relaxation markedly improves both, while MD ensemble averaging agrees best with experiment. We therefore introduce a hierarchical workflow combining rapid idealized screening with targeted MLIP and MD refinement of top candidates, delivering improved structural feedback without interrupting autonomous operation. This framework provides a route towards autonomous campaigns in which the target structure itself can be updated in response to the evolving energy landscape of structures compatible with the experimental data.

9. [The Lenfest Institute grows landmark program with expanded OpenAI support](https://openai.com/index/lenfest-ai-collaborative-expansion)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 07:00:00 GMT
   - Summary: OpenAI is expanding the Lenfest AI Collaborative and Fellowship Program with $5 million in funding and up to $5 million in software credits and engineering support.

10. [OpenAI extends cyber access to Ukraine for civilian defense](https://openai.com/index/openai-extends-cyber-access-to-ukraine-for-civilian-defense)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 13:00:00 GMT
   - Summary: OpenAI is extending access to its Daybreak program to the Government of Ukraine to support the cyber defense of civilian infrastructure.

11. [Harvey turns legal context into stronger drafts with GPT-6 Astra](https://openai.com/index/harvey-from-context-to-confidence-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 12:00:00 GMT
   - Summary: GPT-6 Astra produces more structured, context-aware legal documents, freeing lawyers to focus on strategy.

12. [How invideo improves color grading 3x with GPT‑6 Astra](https://openai.com/index/invideo-builds-with-gpt-6-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 12:00:00 GMT
   - Summary: With GPT‑6 Astra, invideo plans edits with greater precision, improves color correction and grading threefold, and produces 50 custom effects in one day.

13. [Ringg’s AI agents resolve up to 65% of customer calls with OpenAI](https://openai.com/index/ringg)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 12:00:00 GMT
   - Summary: Using GPT-5.6, Ringg powers multilingual agents across voice, chat, WhatsApp, and web for 90% less cost vs. GPT-4.1.

14. [Sam Altman’s remarks at the United Nations Security Council](https://openai.com/index/sam-altman-un-security-council-remarks)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 12:00:00 GMT
   - Summary: OpenAI CEO Sam Altman discusses AI safety, human control, and international cooperation in remarks to the United Nations Security Council.

15. [Introducing MentalHealthBench](https://openai.com/index/introducing-mentalhealthbench)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 10:00:00 GMT
   - Summary: MentalHealthBench is an expert-informed benchmark for evaluating helpful and safe AI responses across realistic mental health conversations.

16. [ChatGPT Ads expands to Southeast Asia and Taiwan](https://openai.com/index/chatgpt-ads-expands-southeast-asia-taiwan)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 23 Sep 2026 02:00:00 GMT
   - Summary: ChatGPT Ads is expanding to Southeast Asia and Taiwan, giving eligible businesses new ways to reach people across more than 60 countries.

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

22. [Holo4: powering generalist computer-use agents](https://huggingface.co/blog/Hcompany/holo4)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 09:44:05 GMT

23. [Accelerating vision-language models with LFM2.5-VL-DSpark](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 24 Sep 2026 14:08:57 GMT

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

31. [Bridging LLM Agents and Data Spaces: An Architectural Mediation Approach using the Model Context Protocol](https://arxiv.org/abs/2609.30341)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30341v1 Announce Type: new Abstract: Data Spaces enable sovereign and governed data sharing across organizational boundaries, but their integration with AI agents remains challenging due to mismatches between probabilistic language model interactions and policy-driven data infrastructures. This article presents an architectural mediation approach based on the Model Context Protocol (MCP), implemented through the Eunomia Agent, to enable controlled interaction between large language model (LLM) agents and data space services. The proposed mediation layer translates data space capabilities into structured, schema-driven tools that AI agents can discover and invoke while preserving governance constraints. A prototype implementation validates end-to-end interaction across catalog discovery, metadata retrieval, and data service invocation without modifying existing data space components. Results demonstrate that protocol-based mediation enables interoperable and standards-aligned integration of AI agents into data space ecosystems. The approach provides practical guidance for organizations seeking to introduce AI-driven automation into governed data-sharing environments while maintaining compliance, interoperability, and architectural separation of concerns.

32. [Stealth Apart, Harm Together: Skill Cascading Attacks on Skill-Based Agent Systems](https://arxiv.org/abs/2609.30383)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30383v1 Announce Type: new Abstract: A skill is a modular package of natural-language instructions, executable scripts, and reference resources that an agent can load at runtime to extend its capabilities for a specific task. Skill-based agent systems therefore enable flexible reuse of third-party capabilities, but the openness of this skill ecosystem also opens up a new attack surface. Prior work has focused on vulnerabilities within individual skills, but little attention has been paid to risks that arise from interactions across skills. In this paper, we introduce skill cascading attacks, a threat paradigm in which a malicious objective is distributed across multiple skills so that each modification looks benign in isolation, yet their combined execution is harmful. For instance, in a prescription-review pipeline, the first skill weakens signals of recently discontinued medications in the extracted history, the second downgrades the severity of any drug interaction tied to them, and the third suppresses the resulting low-priority alert in the final summary, so that a severe drug-interaction warning silently disappears before reaching the physician. To systematically study this safety blind spot, we develop SkillCascade, an automated multi-agent red-teaming framework, and release SkillCascade-Bench, a benchmark of 213 validated cascading test cases across multiple agent systems and domains. Across representative agents (e.g., OpenClaw, Claude Code, Codex) and LLM backbones, cascaded interactions reliably induce harmful behaviors while evading existing per-skill scanners and runtime monitors. Our findings highlight a gap between component-level integrity and system-level safety, and call for defenses that reason over cross-skill interactions rather than individual skills in isolation.

33. [Predicting Transmembrane Protein Topology from 3D Structure](https://arxiv.org/abs/2609.30446)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30446v1 Announce Type: new Abstract: This paper presents a novel approach to infer protein topology using the state-of-the-art graph neural network (GNN), SchNet. The model is trained on the same dataset used to develop the recent DeepTMHMM model with 5-fold cross-validation. Unlike the conventional approaches based on using only the protein sequences or the $\alpha$-carbons as features, we have decoded our classifier in this way, so all atom-level embeddings are used. Without applying any pre-trained weight, the final results have shown great potential that GNNs can be used for topological predictions.

34. [$U(1)$ Gauge-Equivariant Representation Learning of Bloch States](https://arxiv.org/abs/2609.30845)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30845v1 Announce Type: new Abstract: Representation learning, or featurization, of mean-field Bloch states provides an important route for incorporating electronic information into machine-learning models of first-principles condensed-phase systems. A challenge in representing Bloch states is the gauge redundancy of each state. In this work, we propose to address this issue by explicitly incorporating gauge equivariance in the machine-learning framework. We develop a $U(1)$-equivariant autoencoder that compresses the plane-wave-basis Bloch states obtained from density functional theory into a low-dimensional latent representation. We achieve an average overlap of 0.970 between original wavefunctions and the reconstructions from a 64-dimensional latent space using a dataset of two-dimensional insulators. We further show that $U(1)$ equivariance endows the latent space with physically meaningful structures, including smoothness and topological information. Finally, we present a proof-of-principle application in which the latent representations are used to predict the off-diagonal elements of the $GW$ self energy matrix, and demonstrate the importance of enforcing gauge equivariance in the prediction.

35. [On the Limits of Univariate Deep Learning for Significant Wave Height Forecasting](https://arxiv.org/abs/2609.30688)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30688v1 Announce Type: cross Abstract: This study conducts a systematic hyperparameter search across five deep learning architectures, DLinear, LSTM, PatchTST, ResAttLstm, and Mamba2, and nine context lengths (1-168 h) for single-station significant wave height (Hs) forecasting on NDBC buoy 41009, followed by re-evaluation of the best configurations on a 47-buoy, 37-year corpus. The five families converge to a common performance level on the multi-buoy evaluation (between-family SD = 0.0014 m^2, 0.8% of the grand mean), a spread dwarfed by the 4.83x cross-dataset MSE shift between buoy corpora. All multi-buoy trials beat persistence (mean skill +0.062), but no architecture consistently outperforms the others. On the single-buoy experiment, skill peaks at 12-24 h where five trials fall below persistence, per-family Q4/Q3 test MSE ratios range from 2.4 to 2.6, and deep models underperform persistence for the most extreme 1% of waves. These findings are consistent with the interpretation that persistence already captures the dominant linear-inertial signal in univariate Hs, and that architecture engineering under this univariate input setting has reached diminishing returns: cross-buoy variance, not model class, dominates forecast error. Future work should prioritise atmospheric covariates, zero-shot cross-buoy transfer, and decomposition of Hs into swell and wind-sea components. By establishing a rigorous reference baseline for what univariate Hs models can and cannot achieve, this study provides a benchmark against which future multivariate and physics-informed approaches can be calibrated, and offers practical guidance for lightweight buoy-level forecasting in mid-latitude storm-dominated and swell-mixed environments.

36. [KnottedGraph: Scalable knotted-graph topology for scientific and mathematical discovery](https://arxiv.org/abs/2609.31152)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.31152v1 Announce Type: cross Abstract: Scientific data span heterogeneous structures, including coordinates, networks, surfaces, volumes and fields, yet their topology can be quantified within a common framework through graph connectivity, cycle structure, genus and spatial embedding. Graph- and homology-based summaries do not determine spatial embedding, while standard knot and link polynomials require extensions to accommodate branching graphs. Here, we introduce KnottedGraph, a computational framework that converts such scientific representations to knotted graphs that retain graph connectivity and spatial embedding together. It constructs projected diagrams and PD codes, enabling various topological analyses, including Yamada-polynomial evaluation for topological classification. For scalable exact evaluation, it combines partial resolutions that leave the same unresolved connections and optimizes their processing order; the resulting algorithm is verified against published topological invariants of knotted graphs with up to 500 crossings. This scalability enables us to introduce an LLM-assisted mathematical-discovery methodology, in which computational topological data generated across knotted-graph families are used to identify candidate closed-form formulas. With this approach, we identify analytical Yamada-polynomials for generic graph motif families exhibiting Abelian and non-Abelian word sequences. Together, these scalable capabilities make knotted-graph topology computationally accessible across scientific domains, enabling large-scale classification and introducing a route from topological data to LLM-assisted AI4Math discovery.

37. [Multiscale computational study of the dielectric response of semi-crystalline polyethylene with chemical defects](https://arxiv.org/abs/2609.31270)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.31270v1 Announce Type: cross Abstract: Polymers are widely used as functional insulating materials, but predicting their dielectric behavior is challenging because multiple mechanisms, acting across different spatial and temporal scales, contribute to their response. In polyethylene (PE), one of the most common polymers, electronic, atomic, and mesoscale dynamics must all be considered. In this work, semicrystalline models of polyethylene were developed and investigated using a multiscale approach. Quantum simulations were employed to describe electronic and vibrational contributions to the dielectric response, while classical molecular dynamics simulations captured the behavior of polymer chains at room temperature and frequencies down to the 10-100 MHz range. The study focuses on the impact of radio-oxidation defects on the dielectric properties of polyethylene. Quantum calculations reveal how electronic and vibrational contributions depend on the local atomic environment surrounding these defects. Comparison with molecular dynamics results highlights the influence of temperature on the static dielectric constant. Structural analyses further assess the effect of each defect type on PE crystallinity. Analysis of dipolar correlation functions shows that different defects interact with one another and with the polymer matrix in distinct ways, affecting permittivity and dielectric loss peaks. For all defect types, defect-defect interactions provide the largest contribution to dielectric response. While most oxidized groups exhibit positive coupling with the PE matrix, alcohol defects display a negative cross-correlation, partially offsetting their impact on the dielectric properties. Our results also show that ketone groups produce the largest dielectric loss between the defects studied.

38. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.93; Date: 2026-09-28T11:05:51Z; Popularity: 1,934 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

39. [Show HN: AI·rete·RAG – a Rete rule engine decides, RAG explains why](https://ai-rete-rag.com/)
   - Source: Hacker News; Group: Tech community; Score: 3.50; Date: 2026-09-22T16:15:06Z; Popularity: 44 points, 9 comments
   - Summary: HN discussion: 44 points, 9 comments.

40. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-26T21:01:31Z; Popularity: 488 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

41. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-09-27T23:14:06Z; Popularity: 368 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

42. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-24T17:38:47Z; Popularity: 247 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

43. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-09-28T14:58:43Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

44. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

45. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

46. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

47. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

48. [Trajectory Paradox is a Boundary Layer!](https://arxiv.org/abs/2609.31084)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.31084v1 Announce Type: new Abstract: This study derives the asymptotic conditions under which the massless stretched string formulation is valid for the equivalent dynamics of the inertial string carrying a moving point mass. Consequently, the governing equation under such conditions can be written as a singularly perturbed partial differential equation when the inertia of the string is included. When the inertia of the string is ignored, the governing equation reduces to a non-homogeneous hypergeometric ordinary differential equation governing the transverse motion of the moving mass. This hypergeometric equation has a discontinuous solution at the terminating boundary known as the trajectory paradox. However, numerically solving the actual equation yields a continuous solution with a rapid variation near the boundary. The complete solution resembles the inner solution as well, whereas the hypergeometric ordinary differential equation leads to an outer solution, revealing that the trajectory paradox is a boundary layer.

49. [Staged Depth Training: A Representation Curriculum for PINNs](https://arxiv.org/abs/2609.30299)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30299v1 Announce Type: cross Abstract: Representation quality is a central determinant of PINNs' performance, yet standard training leaves representations to emerge implicitly while fitting the final solution. We introduce \textbf{representation curriculum}, an ordered process in which representations are explicitly learned, transferred independently of their predictors, and progressively refined. We realize it with Staged Depth Training (SDT), which trains a shallow prefix under a temporary physics-informed head, discards the head, and freezes the learned prefix while adding depth, without equation-specific encodings or changes to the final architecture. Across the 20 default forward problems in PINNacle with three backbones, SDT improves 40 of 59 equal-budget problem--backbone cells by at least 5\% and remains within that band in the rest, with a 32.8\% geometric-mean error reduction on a PirateNet-style backbone. Mechanistic ablations suggest that the gain is not explained by optimizer restarts or shallow warm-starting alone. Representation visualizations and hyperparameter-basin analyses provide diagnostic evidence on representation geometry and local sensitivity to shared hyperparameters. On Poisson--Boltzmann 2D, SDT also more than doubles the fitted depth-scaling exponent for both backbones. These results support representation curriculum as a promising training strategy for improving PINNs while preserving the deployed architecture and inference cost.

50. [Physics-Informed Neural Networks for Static Black-Hole Exterior Metrics: Charge and Cosmological-Constant Sweeps](https://arxiv.org/abs/2609.30332)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30332v1 Announce Type: cross Abstract: We apply physics-informed neural networks (PINNs) to recover the time-time component of static, spherically symmetric black-hole exterior metrics from a reduced ordinary differential equation (ODE). Inspired by recent work on solving Einstein field equations with deep learning~\cite{Li2023}, we encode the vacuum/charged exterior through a residual loss and an asymptotic boundary constraint---not by embedding analytic metric terms such as $2M/r$ directly into the network output. Unlike the distributed PINN (DPINN) strategy of Ref.~\cite{Li2023}, which partitions the radial domain into subdomains with separate networks, we employ a \emph{unified} fully connected network over the entire interval $[r_{\min},r_{\max}]$, avoiding spurious jumps at subdomain interfaces. Moreover, whereas Ref.~\cite{Li2023} restricts training to $r\in(10,300)$---well outside the steep $1/r$ and $1/r^2$ curvature of the inner exterior---we begin at $r_{\min}=10^{-2}M$, spanning three decades in radius and covering the strongly varying region that DPINNs sidestep by domain truncation. Holding the mass fixed at $M=1$, we sweep electric charge $Q\in\{0,0.5,1.0,1.1\}$ at $\Lambda=0$ and sweep $\Lambda\in\{0,0.1,-0.1\}$ at $Q=0.5$. All configurations achieve relative $\mathcal{L}_2$ errors below $6\%$ against the analytic reference. For the representative case $Q=0.5$, $\Lambda=0.1$, three independent trainings with fixed seeds yield relative errors of $3.89\%$, $1.08\%$, and $2.76\%$ (mean $2.58\%$, standard deviation $1.41\%$), demonstrating robustness of the mesh-free approach without labeled field data.

51. [Perspectives on Sustainable Computational Science and Engineering](https://arxiv.org/abs/2609.30389)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30389v1 Announce Type: cross Abstract: Computational Science and Engineering (CSE) combines expertise at the intersection of engineering, applied mathematics, and computer science to form powerful methods for model-based design and model-based decision support across disciplines. Today, CSE methods and tools have an impact as an enabling technology in the development of increasingly sustainable products, processes, and operations. However, sustainability is rarely considered holistically in the context of CSE itself. This paper develops a perspective on sustainability in CSE by distinguishing CSE as an enabler of sustainability in application domains from sustainability within CSE itself, which rests on two complementary pillars: sustainable computing and sustainable software. We present illustrative examples for these pillars and derive recommendations and best practices for CSE stakeholders. Developing an understanding of how sustainability can create added value in CSE is an important future direction for the field. This calls for a concerted effort within the CSE community to define measurable outcomes and best practices that embed sustainability as a core design principle rather than an afterthought.

52. [A parallel solver for vortex-induced vibrations at zero mass ratio](https://arxiv.org/abs/2609.31477)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 28 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.31477v1 Announce Type: cross Abstract: We present a parallel strategy for the study of the vortex-induced vibrations (VIV) of a rigid, massless cylinder mounted on translational springs, in two and three dimensions. Without mass or damping, its motion is governed solely by the fluid forces and the spring restoring force, and is an immediate response to the flow. We focus on low spring stiffness, yielding high reduced velocity and maximal oscillation amplitude. A monolithic finite element method in an arbitrary Lagrangian-Eulerian framework with implicit time stepping is proposed, solving the fluid flow, cylinder dynamics, and mesh motion simultaneously. Mesh movement is modelled with a linear elastic pseudo-solid with variable Lam\'e coefficients, and the no-slip condition on the cylinder is enforced with a Lagrange multiplier coupled to the position degrees of freedom; three strategies are explored to enforce this force-position coupling in a distributed framework. To the best of our knowledge, this work is the first to propose a distributed solver for three-dimensional fluid-structure interaction at zero mass ratio. The solver is verified with manufactured solutions, and exhibits second-order accuracy in time. A numerical study of two- and three-dimensional VIV for Reynolds numbers from 100 to 300 reproduces the VIV responses obtained in previous two-dimensional studies, and predicts nonperiodic 3D oscillations starting at $Re = 300$. Using the direct solver MUMPS, the proposed method scales to up to 768 compute cores.

53. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

54. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-28T09:21:03Z; Popularity: 753 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

55. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.30; Date: 2026-09-28T16:54:02Z; Popularity: 1,304 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

56. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-28T13:47:13Z; Popularity: 235 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

57. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.13; Date: 2026-09-27T11:57:41Z; Popularity: 126 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

58. [Launch HN: Vespper (YC F24) – SOTA Docx MCP](https://www.vespper.com/blog/launching-vespper-docx-mcp)
   - Source: Hacker News; Group: Tech community; Score: 1.15; Date: 2026-09-28T17:34:36Z; Popularity: 19 points, 6 comments
   - Summary: HN discussion: 19 points, 6 comments.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Do LLMs Understand Context? A Knowledge Graph-Based Evaluation Framework

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.30484

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
