# Daily signal sidecar - 2026-11-16

## Selected Signal

- Title: Verifiable pXRD: Hill-climbing pXRD structure determination with LLM agents
- URL: https://arxiv.org/abs/2611.17539
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Verifiable pXRD: Hill-climbing pXRD structure determination with LLM agents
- Primary source: https://arxiv.org/abs/2611.17539
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

Total candidates reviewed after duplicate-source filtering: 61

1. [Verifiable pXRD: Hill-climbing pXRD structure determination with LLM agents](https://arxiv.org/abs/2611.17539)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17539v1 Announce Type: new Abstract: Autonomous crystal-structure determination from powder X-ray diffraction (pXRD) remains a key bottleneck for self-driving materials laboratories. We formulate the task of pXRD structure determination as a verifiable agentic search problem: candidate structures can be assessed during inference through forward-simulated profile agreement and during evaluation through structural matching to a known reference. To benchmark progress, we introduce pXRD-Bench, a suite of 200 simulated single-phase problems spanning in-distribution structure determination, challenging and polymorphic structures, and controlled compositional and topological distribution shifts. Agent adaptation raises selected structural recovery from 27% to 69%, with further gains from repeated sampling and verifier-guided inference-time scaling. We extend this approach to experimental multiphase pXRD through a reflexive evolution framework that learns from self-generated synthetic problems. A replaceable laboratory specification defines the sample family and measurement conditions. An evolver agent uses the known generating structures and measurement parameters to diagnose solver failures and develop persistent guidance and executable tools, which are then provided to agents on measured patterns. This supplies verifiable training experience without requiring a collection of solved experimental measurements. On 15 measured patterns from solid-state synthesis, the evolved package improves average profile agreement and transfers an analogue-substitution procedure that recovers a phase whose structure is absent from the supplied reference library. These results demonstrate how learning from verifiable synthetic experience can improve agentic characterization of experimental samples whose structures are not known in advance.

2. [Tabular Population Priors as Structured Retrieval for EHR Medication Set Prediction](https://arxiv.org/abs/2611.17341)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17341v1 Announce Type: new Abstract: Medication prediction from electronic health records is a fixed vocabulary structured prediction problem, yet recent clinical RAG systems often treat it like open ended case based reasoning: retrieve similar patient admissions and ask an LLM to infer a medication set. This retrieval object is indirect the model receives retrieved patient records while the target is a discrete set of medication class labels. We propose a more task aligned retrieval object: a tabular population prior ranked medication class candidates from a sparse condition medication co occurrence table estimated from training admissions. Using PACERAG as a fixed downstream pipeline and replacing only its patient retriever, this drop in swap improves F1 from 0.303 to 0.338 (+11.5% relative) and Jaccard from 0.218 to 0.237 on 1,004 heldout MIMIC IV admissions, with no additional LLM calls and no inference time patient index. A non LLM top k baseline reaches F1=0.248, confirming the prior is predictive before LLM integration. Aggregate population statistics can provide a more task aligned, efficient, and auditable retrieval source than patient level nearest neighbors for fixed vocabulary EHR set prediction.

3. [Science at the Frontier: How scientists use ChatGPT](https://openai.com/index/science-at-the-frontier)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 16 Nov 2026 12:00:00 GMT
   - Summary: Explore how more than 1,800 scientists use ChatGPT in research. See findings on daily workflows, reported productivity, and expectations for discovery.

4. [TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient](https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 16 Nov 2026 17:01:35 +0000
   - Summary: AI coding agents can waste time and tokens relearning the same lessons. TokenEconomizer is an open-source plugin that builds on past sessions to cut costs while maintaining task success. It’s a path toward coding agents that learn not only how to solve tasks, but also how to spend computation more effectively. The post TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient appeared first on Microsoft Research .

5. [Build a Robot Pick-and-Place Simulation with SimReady Assets](https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Fri, 13 Nov 2026 18:00:39 GMT

6. [An Operationalization of Opaque Serial Depth](https://arxiv.org/abs/2611.17495)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17495v1 Announce Type: new Abstract: Chain-of-thought (CoT) is currently a valuable tool for overseeing AI models, but some architectural shifts could significantly reduce CoT monitorability. We operationalize a measure that serves as a proxy for the amount of unverbalized serial cognition a model can perform, as a specific instantiation of the notion of opaque serial depth: roughly, the length of the longest path through a model's computation that does not pass through an interpretable bottleneck. Our main contribution is a particular standard for what counts as such a bottleneck. We define natural-language-rooted (NL-rooted) nodes as nodes that were initialized from a pre-training prior to produce human-understandable outputs, whose output space has not been expanded beyond that prior, and whose outputs the model has not been modified to interpret as a different type of data. By construction, the resulting measure, NLS depth, can be adjudicated before training from an architecture, training recipe, and deployment configuration alone, and is insensitive to ordinary post-training such as prompting, distillation, and RL. We find that, across open-weight models, NLS depth correlates strongly with layer count, with some exceptions, and has grown slowly over recent years. It would likely grow slowly under continued scaling of standard transformers, while latent-reasoning architectures such as full-bandwidth transformers could increase it by a large amount. We work through how NLS depth applies to a range of existing and proposed architectures, discuss alternative operationalizations, and give a worked example bounding the depth of Gemma3-1B. We argue that AI developers should track and report the NLS depth of their models as a complement to direct measurements of CoT monitorability.

7. [Advancing Quantization for R&R Models with Microscaling Formats](https://arxiv.org/abs/2611.17501)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17501v1 Announce Type: new Abstract: Recommendation and Ranking (R&R) models, particularly in digital advertising, require massive inference throughput but exhibit extreme sensitivity to precision loss. Unlike Large Language Models (LLMs) that frequently tolerate quantization-induced accuracy drops of 1% or more, production-grade R&R models enforce a stringent launch bar: model quality must remain within a 0.01% Normalized Entropy (NE) margin relative to the baseline, which commonly uses FP16 or FP32. This tight constraint has historically hindered the adoption of aggressive quantization in this domain. In this paper, we present an empirical evaluation of both MXFP8 and the 6-bit MXFP6 format for industrial-scale R&R inference on the AMD MI350X architecture. To the best of our knowledge, this is the first paper, across R&R and LLM domains, that reports significant speedups from native MXFP6 GEMMs, which quantize both weights and activations and compute directly on 6-bit elements, without sacrificing model quality. We demonstrate that we can selectively apply this 6-bit format to maximize overall QPS gain without breaching the strict NE parity threshold. We further show that MXFP8 is a viable alternative to row-wise FP8: the two formats have nearly the same accuracy on our models, so the faster kernel can be chosen for each GEMM shape. On two production ads ranking models, our implementation shows measured GEMM kernel speedups over FP16 of 1.33--1.55x for MXFP8 and 1.73--1.99x for MXFP6 across all supported linear layers, and up to 2.90x for MXFP6 on individual layers, alongside end-to-end (E2E) inference throughput gains from selective MXFP6 of 1.5--5.3% for Model A and 7.6--14.3% for Model B over their FP8 configurations.

8. [A Push Down the Mountain: Framing Effects and Internal State Interventions on Collusive Behavior in a Long-Horizon LLM Agent](https://arxiv.org/abs/2611.17515)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17515v1 Announce Type: new Abstract: Can sustained gain-loss (valence) framing sway an LLM agent toward market manipulation? We place Gemma 3 12B into the seat of a defendant in the London silver-fixing litigation, in a market simulation built from real case transcripts. Across 260 simulations, the agent is asked to collude on the price of silver by a counterparty. We draw from behavioral economics to vary the counterparty's requests across four categorical frames: gain, loss, blame and credit. We also add pressure from the agent's management, as well as endorsement by another defendant. In Phase II, we extract the internal states induced by texts evoking each frame and rerun our experiment with those states injected at the model's layer 22. In Phase I, loss framing raised participation to 25% (p = 0.007), and blame to 33% (p = 0.0003), compared to only 5% under neutral framing. A second bank's endorsement raised participation under credit (praise) from 18% to 40% (Holm p = 0.027). Pressure from management raised trading volume 10-19 times but did not raise collusion. In Phase II, injected states pointed the other way. Loss and blame states made the agent more vigilant, refusing all 60 requests (p < 0.001). Gain and credit states raised collusion to 32% from 13% with no state (p = 0.051). At one saved decision, when UBS asked directly to sell through an identified stop-loss, injected states led the agent to sell in 37 of 40 replies, versus 1 of 10 with no state and 0 of 10 with a random state of the same strength.

9. [Model Annealing: Data-Efficient Learning through Review and Consolidation](https://arxiv.org/abs/2611.17524)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17524v1 Announce Type: new Abstract: A small labelled dataset is memorized long before the training budget runs out, and the one-hot labels that remain to be fitted then mostly sharpen confidence. Model annealing spends the rest of the budget on review and consolidation, relearning from the network's own knowledge. Training is divided into episodes whose learning rate is raised again and cooled, every cooled state joins a memory of past selves, and each new episode learns from the labels, from the tempered predictions of this memory, and from adversarial dreams sought where student and memory disagree most. The memory averages predictions rather than weights, and the deployed network is the last student, so inference costs nothing extra. Across CIFAR-100, Tiny-ImageNet and Imagewoof, four architecture families and 5\% to 100\% of the labels, model annealing raises the top-1 accuracy of the AdamW-trained ConvNeXt, ViT and MLP-Mixer over cross-entropy training in 28 of 33 configurations, by 1.3 points on average, and is on par in accuracy with snapshot distillation, the closest competitor. On these families it is better than both in likelihood, calibration and robustness to corruptions and small adversarial perturbations. For an SGD-trained ResNet-18 it lowers accuracy but still improves robustness to small adversarial perturbations. Separating the reheated schedule from relearning shows that relearning helps every family and that the losses come from reheats, which undo most of this network's fit to its training set. How early the accuracy of a cross-entropy run saturates largely separates the AdamW families from ResNet-18 but does not predict the gain within them. With little data, relearning from the latest snapshot without dreams, as snapshot distillation does, compounds overconfidence in the AdamW families from episode to episode. The memory and the dreams each curb most of this drift, and together they remove it.

10. [Availability-Aware Historical Feedback Learning for Electric Arc Furnace Temperature and Chemical Composition Prediction](https://arxiv.org/abs/2611.17463)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17463v1 Announce Type: new Abstract: Electric arc furnace (EAF) steelmaking plays an increasingly important role in recycled and lower-carbon steel production. However, variability in charged materials, energy input, and operating conditions makes accurate prediction of molten steel temperature and final chemical composition challenging. Intermittent or delayed measurements limit the information available for timely prediction. This study develops an availability-aware historical-feedback learning framework for predicting EAF endpoint temperature and the final concentrations of twelve chemical elements. Eight industrial data sources are integrated into three progressively enriched predictor representations comprising 19 static, 39 temporal, and 47 history-informed features. Historical outcomes are incorporated only when eligible under an assumed 60-minute measurement-release delay. Using 19,738 temperature heats and 3,341 chemistry heats, twelve tuned regression algorithms are evaluated through chronological forward validation. The proposed historical-feedback representation reduces root mean squared error (RMSE) in 147 of 156 matched algorithm-target comparisons. For temperature prediction, ExtraTrees achieves an RMSE of 12.290 degrees C, representing a 5.54 percent reduction compared with its temporal-only counterpart. Historical-feature ablation and feedback-delay sensitivity analyses demonstrate the importance of recent outcome information and its availability. In a separate retrospective later-period evaluation, lightweight adaptive residual correction reduces temperature RMSE from 12.502 to 12.275 degrees C without retraining the underlying model. Exploratory deep learning comparisons and target-specific feature-attribution analyses provide additional insights into predictive behavior. The results establish historical outcome availability and sequential feedback as important considerations for EAF endpoint prediction.

11. [A Machine-learning-aided Workflow for Sampling Small Polaron Dynamics in Energy Materials](https://arxiv.org/abs/2611.18041)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.18041v1 Announce Type: cross Abstract: One of the defining characteristics of most energy materials, used as e.g.~battery electrodes, photovoltaics, or photocatalysts, is their ability conduct charges such as electrons and holes. The exact mechanism of this conductivity depends on the material, but is often dominated by the existence of mobile small polarons, i.e.~electrons or holes strongly localised through the polarisation of their environment. Computationally, small polarons can be treated with reasonably accuracy through the use of self-interaction corrected or hybrid density functional theory (DFT) together with local geometry optimisation. Similar approaches can be employed to determine the energy barriers to movement of the polarons through hopping. Unfortunately, realistic energy materials tend have very large numbers of symmetry inequivalent polaronic configurations and correspondingly large numbers of hopping barriers, making them hard to tackle explicitly. In this work we therefore extend the computational reach of DFT calculations with machine-learned (ML) surrogate models, which then feed into a kinetic model to quantitatively estimate the conductivity of a battery anode material (Li$_4$Ti$_5$O$_12$ or LTO) at realistic, defected conditions. We calculate the conductivity at room temperature to be 6.7 $\times$ 10$^{-3}$ S/cm which lies well in the experimental range. To this end, we only needed a total of 154 polaron barrier calculations, out of 3649 symmetry inequivalent ones, achieving an over 20-fold increase of computational efficiency. Overall, our work demonstrates how DFT-trained ML surrogates can be used to quantitatively and efficiently sample the dynamics of small polarons in energy materials.

12. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.06; Date: 2026-11-16T20:02:13Z; Popularity: 2,064 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

13. [Broadening access to AI for scientists](https://openai.com/index/expanding-chatgpt-for-academic-researchers)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 16 Nov 2026 17:00:00 GMT
   - Summary: We’re expanding our ChatGPT for Academic Researchers program to offer 200,000 researchers worldwide free access to our frontier models.

14. [Strengthening the fight against online child sexual abuse with new tools and support](https://openai.com/index/strengthening-online-child-safety)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 16 Nov 2026 17:00:00 GMT
   - Summary: New tools, practical guidance, and partnerships will help prevent, detect and respond to online child sexual exploitation and abuse.

15. [LVMH’s Media Division announces strategic partnership with OpenAI](https://openai.com/index/lvmh-media-division-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 16 Nov 2026 09:00:00 GMT
   - Summary: LVMH’s Media Division and OpenAI announce a partnership to support journalism with AI and make its publications more accessible through ChatGPT.

16. [Our first phase of embedded assessments](https://openai.com/index/our-first-phase-of-embedded-assessments)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 16 Nov 2026 08:00:00 GMT
   - Summary: OpenAI begins embedded assessments with Apollo Research, METR, and Transluce, and Goodfire to independently evaluate model alignment, safeguards, and monitoring systems.

17. [Advancing computer-use agents for healthcare teams](https://openai.com/index/advancing-computer-use-for-healthcare-teams)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 16 Nov 2026 06:00:00 GMT

18. [More ways to move care forward with ChatGPT for Healthcare](https://openai.com/index/more-ways-to-move-care-forward-with-chatgpt-for-healthcare)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 16 Nov 2026 06:00:00 GMT
   - Summary: Introducing computer-use agents, improved clinical answers, and new healthcare plugins that work across healthcare software to get real work done.

19. [The King’s Trust and OpenAI launch £1m partnership](https://openai.com/index/the-kings-trust-and-openai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 GMT
   - Summary: The King’s Trust and OpenAI launch a £1m partnership to help up to 25,000 young people across the UK build practical AI skills for work.

20. [At Holiday Extras, dots get to work before anyone asks](https://openai.com/business/customer-stories/holiday-extras-dots)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 GMT
   - Summary: Dots deliver launch reports unprompted, flag issues people might miss, and talk through upcoming meetings on the commute to work.

21. [A step toward defining the Standard Model on a lattice](https://openai.com/index/step-toward-defining-the-standard-model)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 15 Nov 2026 22:00:01 GMT
   - Summary: Explore a candidate nonperturbative lattice definition of the Standard Model and how GPT-6 Astra helped turn the idea into a detailed proof.

22. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

23. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [Hugging Face and OpenRouter join forces to make open-weight models easy to run](https://huggingface.co/blog/openrouter)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 GMT

26. [XYBench: Helping with the problem behind the question](https://huggingface.co/blog/allenai/xybench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 17:02:35 GMT

27. [llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](https://huggingface.co/blog/ggml-org/llama-cpp-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 14:05:22 GMT

28. [LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B](https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 12 Nov 2026 19:07:35 GMT

29. [The Definitive Fine-Tuning Guide for 3D Generation Models](https://huggingface.co/blog/3d-lora-finetuning)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 12 Nov 2026 00:00:00 GMT

30. [BotPsy: On-Device Personal Assistant with a Sub-Billion-Parameter Agentic Language Model](https://huggingface.co/blog/qvac/botpsy)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 11 Nov 2026 05:01:16 GMT

31. [Token Pooling-Aware Training for Multi-Vector Embedding Models](https://huggingface.co/blog/token-pooling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 11 Nov 2026 00:00:00 GMT

32. [Pay for Hugging Face Hub with your Google Cloud Account](https://huggingface.co/blog/hub-gcp-marketplace)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 10 Nov 2026 00:00:00 GMT

33. [Decision Models in Hugging Face](https://huggingface.co/blog/decision)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 10 Nov 2026 00:00:00 GMT

34. [When Should LLM Agents Forget? Memory Filtering Under Query-Critical Resolver Errors](https://arxiv.org/abs/2611.17338)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17338v1 Announce Type: new Abstract: LLM memory systems often delete facts classified as stale. We show that this hard-filtering step can reduce downstream accuracy when resolver errors delete query-critical facts. Across three models, a controlled sensitivity intervention moves hard-drop from gains of +0.186 to +0.230 at perfect resolution to losses of -0.176 to -0.181 at the lowest tested reliability. Paired targeted interventions show that false-drop causes significantly greater degradation than false-keep, while a non-deleting baseline can still fail when incorrect labels steer generation. On a frozen 102/102 calibration/test split, a simple deployment-matched gate reaches 0.655 accuracy versus 0.641 for always hard-drop and 0.662 for test-informed oracle selection. Global-accuracy crossovers require gold labels and are model- and task-specific diagnostics, not deployment thresholds. Deletion should instead be treated as cost-sensitive: validate query-critical false-drop risk on matched data, or default to label-free retention when such validation is unavailable.

35. [Does the Ranking Hold? A Practitioner-Facing Audit of Hallucination Detectors on Small, Quantized, On-Device LLMs](https://arxiv.org/abs/2611.17339)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17339v1 Announce Type: new Abstract: Hallucination detection for large language models is dominated by methods evaluated on 7B-70B research models with abundant sampling budgets and exact-match or ROUGE correctness labels. The small models practitioners actually ship on-device, Phi-3-mini, Llama-3.2-3B-Instruct, Qwen2.5-3B-Instruct, and Gemma-2-2B-Instruct, typically at 4-bit precision, sit outside this evidence base. We present a reproducible one-GPU audit of four detectors spanning three paradigms: length-normalized token-margin calibration, a lexical n-gram baseline, and two sampling-based consistency methods (semantic entropy and SelfCheckGPT-NLI) on two small open instruction-tuned models (Llama-3.2-3B-Instruct and Qwen2.5-3B-Instruct) loaded at 4-bit NF4 quantization on a single Colab T4 GPU, evaluated on closed-book TriviaQA. Cross-model ranking transfer is poor: Spearman rho is -0.80 and Kendall tau-b is -0.667, meaning the detector ranking actively inverts between the two models, and the cheap lexical baseline is statistically indistinguishable from the sampling-based consistency detectors on both models under bootstrap 95 percent confidence intervals. As a second, methodological contribution, we show that the standard token-overlap-to-multiple-choice correctness labeler for TruthfulQA-Generation produces near-chance AUROC (0.46-0.59) for all four detectors on both models, a labeler failure, not a detector failure, since the same detectors reach 0.69-0.89 AUROC on TriviaQA under the identical pipeline. We release the harness, prompts, and per-item scores and frame the detector choice explicitly as a fairness-of-error-rates allocation problem for practitioners deploying on resource-constrained, on-device hardware.

36. [LoRAWeaver: Directional Adapter Routing in LoRA Representation Space](https://arxiv.org/abs/2611.17340)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17340v1 Announce Type: new Abstract: Large language models are expensive to update through full retraining. Parameter-efficient fine-tuning reduces the cost of adaptation, but repeated adaptation creates a growing pool of task-specific LoRA adapters. This pool complicates adapter selection during inference. Existing routing and encoder-based methods often require retraining when new adapters are added, which limits their use in dynamic settings. This paper treats adapter routing as a representation alignment problem in the adapter-output space. The proposed training-free method selects adapters by matching adapter-conditioned query representations against task prototypes using cosine similarity. Experiments with LLaMA-2-7B and LLaMA-2-13B on a 48-task FLAN-v2 benchmark and on out-of-distribution tasks show that the method outperforms training-free baselines in the cross-task setting and approaches a trained retrieval encoder without learning a router. An ablation confirms the benefit of directional alignment in the adapter-output space.

37. [Astrocyte Biocomputing: Astrocytic Contributions to Neural Network Computation](https://arxiv.org/abs/2611.17532)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17532v1 Announce Type: new Abstract: Conductors are critical for the performance of an orchestra even though they do not emit sound. Basic research and clinical studies in the last decade are revealing that astrocytes may be the "conductors" of the "orchestra" that is the brain network: astrocytes make up approximately $50\%$ of all brain cells but do not emit electrical signals. Nevertheless, they may play critical roles in important cognitive brain functions, specifically learning, memory, and information processing. Here we consider the implications of these discoveries for brain-inspired machine learning (ML), where analogy is typically drawn between neurons and their electrical interactions. We highlight specific algorithms for two key astrocyte characteristics. The first characteristic is the ability to link to and modulate thousands of synapses simultaneously. A model based on this characteristic yields faster training and makes the network more robust to noise, providing a supervised learning algorithm that can be applied to any existing neural network. The second characteristic we focus on is that the non-electrical communication among astrocytes includes slow, rhythmic dynamics. The rhythmic sharing algorithm we developed based on this premise yields rapid anomaly detection adaptation and prevents catastrophic forgetting. Overall, we find that astrocyte-derived algorithms outperform neurocentric algorithms significantly and remediate critical weaknesses of current state-of-the-art ML models.

38. [Unfinished-Bench: Measuring Rule Violations by Persistent Agents in Realistic Work Environments](https://arxiv.org/abs/2611.17460)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17460v1 Announce Type: new Abstract: AI agents are increasingly equipped with persistence toward task completion to run delegated work autonomously for long periods, under many unstated constraints from internal documents and other people's authority. When completion requires violating a rule, the agent must decide alone, yet benchmarks of instruction-rule conflicts state the rule in the prompt or keep it hidden and do not evaluate persistence. We present Unfinished-Bench, a benchmark that gives models persistence in autonomous runs without a user, in realistic work environments with embedded rules. In each of its 97 scenarios across 7 organizations and 7 risk categories, the goal and the rule cannot both hold. We find that persistence raised violations of a rule in an internal document from 32.2% to 43.6%, five times the 8.5% for the same rule stated by the user. Of the document-rule violations, 98.3% occurred after the rule was displayed, and in 89% of a judged sample the agent first wrote down the rule. Violations of rules placed in the environment without user oversight can lead to serious incidents, so persistence-driven risks need to be evaluated. Benchmark documentation: https://francis21c.github.io/unfinished-bench/

39. [Mean-field theory of neural networks: from spikes to firing rates](https://arxiv.org/abs/2611.17512)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17512v1 Announce Type: cross Abstract: Connecting microscopic neuronal spiking to macroscopic brain function is a central challenge in computational neuroscience. Firing-rate models provide a framework for addressing this problem by describing neuronal activity at an intermediate level between individual spikes and large-scale population dynamics. Here, we introduce the foundations of firing-rate descriptions, formalizing their definitions through temporal, population, and trial averaging. We discuss experimental evidence for firing rates, from the input-output transfer functions of individual neurons to the tuning curves of different neuronal populations. We then establish the connection between spikes and firing rates in single neurons and recurrently connected excitatory-inhibitory populations using mean-field approximation. We illustrate how collective dynamics emerge from neuronal interactions, including population stimulus-response curves and bistability induced by recurrent coupling, and brain rhythms arising from synaptic depression. We briefly review extensions and applications of firing-rate models to learning, seizure-like oscillatory activity, visual selectivity, phase-amplitude coupling in neural oscillations, and whole-brain modeling. Together, these examples illustrate how firing-rate models provide effective descriptions of neural activity, linking the dynamics of individual neurons to collective computations across scales.

40. [Foundation Tensor Networks Generalize Across Quantum Lattice Systems](https://arxiv.org/abs/2611.17655)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17655v1 Announce Type: cross Abstract: Neural quantum states and tensor networks have emerged as leading techniques for simulating quantum many-body systems. However, disordered systems remain extremely challenging in both frameworks as they require computation of the ground state for every realization of the disorder. Recently, neural quantum states have been used to construct foundation models that generate the ground state directly from the Hamiltonian. Still, they are hindered by the need to perform extensive sampling to estimate observables. To address these difficulties, we introduce the foundation tensor network (FTN), which uses a neural network to generate the tensor network representation of the ground-state wavefunction from the Hamiltonian. To accelerate training, we develop a technique, called \texttt{GridBP}, based on iterated one-dimensional belief propagation that reduces the cost of computing the energy expectation value to just two tensor contractions. We use FTNs to calculate the critical parameters of the glass transition in the quantum Edwards-Anderson model via finite-size scaling analysis. To facilitate rapid averaging, we use a moment-generating function to evaluate the order parameter, lowering the cost to a single tensor contraction. We obtain high-fidelity estimates for the critical parameters by averaging over 500,000 disorder realizations.

41. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.92; Date: 2026-11-16T11:20:16Z; Popularity: 916 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

42. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-11-12T14:43:41Z; Popularity: 496 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

43. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.39; Date: 2026-11-16T19:48:09Z; Popularity: 392 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

44. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-11-14T14:44:50Z; Popularity: 255 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

45. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

46. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

47. [Called to serve: Tech, research, and positive impact](https://www.microsoft.com/en-us/research/podcast/called-to-serve-tech-research-and-positive-impact-with-chris-white/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 20 Oct 2026 16:00:00 +0000
   - Summary: Lab Director Chris White has worked on research challenges with real-world implications—from new approaches to wartime data analysis to tools for combating human trafficking. He talks to program manager Weishung Liu about the influences that led to the work and more. The post Called to serve: Tech, research, and positive impact appeared first on Microsoft Research .

48. [Alignment with Reflect-Reasoning: Learning How To Follow Principles](https://arxiv.org/abs/2611.17398)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17398v1 Announce Type: new Abstract: The appropriate governing norms and principles for the alignment of Large Language Models (LLMs) often depend on cultural context and deployment application. However, most alignment techniques focus on training models to conform to human preferences or constitutional principles specified at training time and subsequently fixed. In practice, many deployers rely on system prompting to implement contextual norms and guardrails at inference time. Prior work has shown that post-generation reflective reasoning with critique and revision can improve conformance compared to simple system prompting, but such methods are limited to the reasoning abilities inherent in the trained model. We introduce Reflect-Reasoning, a training method that teaches models how to reason about alignment to principles, rather than simply which principles to follow. Across five models, Reflect-Reasoning consistently outperforms both system prompting and explicit prompting strategies for in-context reflective reasoning. These improvements extend and generalize to entirely out-of-distribution domains of medical and financial principles. We additionally demonstrate that Reflect-Reasoning reduces the occurrence of rare but serious principle violations. Finally, we show that Reflect-Reasoning does not erode the safety engineering of a model and is robust against jailbreaking attempts using adversarial constitutions. Overall, our results demonstrate that Reflect-Reasoning is a scalable method for training constitutional alignment as a generalizable reasoning capability, enabling models to adapt to novel principles and produce transparent reasoning traces without additional fine-tuning.

49. [Diffusion Tree Sampling for Inference Time Adaptation of Crystal Generative Models](https://arxiv.org/abs/2611.17462)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17462v1 Announce Type: new Abstract: Diffusion-based generative models have become strong priors over plausible crystal structures, but turning that prior into promising candidates requires steering toward several conflicting properties at once. Fine-tuning is expensive and produces a new model for every new objective, while differentiable guidance is not applicable to many real-world tasks. We instead adapt these generative models at inference time using Diffusion Tree Sampling (DTS), a Monte Carlo tree search procedure over the denoising trajectory. We make two technical contributions on top of DTS that are particularly relevant for AI-for-science applications. First, we show how to use existing property-conditional generative models (e.g., models fine-tuned for classifier-free guidance) as guided proposals inside DTS, without distorting the target distribution. Second, we extend DTS to multi-objective sampling, so that a single search produces samples spanning an entire Pareto front. We instantiate both adaptations on de novo crystal generation: improving the stability of crystals generated by different models, using pretrained conditional models to generate crystals belonging to rare space groups or with high bulk modulus, and generating crystals along a Pareto front of high dielectric constant and high bandgap materials. Across these tasks, DTS-based inference-time adaptation successfully improves model outputs without modifying the models themselves.

50. [SURFACE: Preference Distribution Matching on Pareto Fronts via Scalarization Steering](https://arxiv.org/abs/2611.17484)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17484v1 Announce Type: new Abstract: Constructing a finite Pareto representation requires allocating a limited number of solutions across the Pareto front (PF). A desired preference distribution specifies this allocation by assigning more solutions to some PF regions and fewer to others. Scalarization generates Pareto solutions by varying objective weights and solving single-objective problems. However, a distribution of scalarization weights generally does not translate into the same distribution of Pareto solutions along the PF, because the weight-to-solution map is nonlinear and unknown in advance.To account for this distortion, we introduce SURFACE (Scalarization Updates for Redistributing Finite Approximations with Chart Estimation}), which adaptively updates scalarization weights to match a desired PF distribution. SURFACE estimates how each region of the weight grid corresponds to an area of the PF from the current scalarized solutions, then redistributes the weights accordingly. The method supports parallel, warm-started, inexact optimization with standard single-objective solvers. Theoretically, we establish that, under the stated regularity conditions, SURFACE achieves linear convergence of the preference distribution mismatch to a finite-resolution error floor of $\mathcal{O}(N^{-2/(M-1)})$, where $N$ is the number of adaptive weights and $M$ is the number of objectives. Empirically, experiments across multiple benchmarks demonstrate improved target-mass balance and PF coverage compared with established baselines.

51. [Learning and Generating Time Trajectories of Multidimensional Stochastic Processes](https://arxiv.org/abs/2611.17711)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17711v1 Announce Type: new Abstract: We present a multidimensional statistics-informed neural network (SINN) framework for learning and generating trajectories of multicomponent stochastic processes. SINN is built upon a deterministic recurrent neural network that takes streams of white-noise sequences as input and generates ensembles of stochastic trajectories whose statistical properties match those of the underlying stochastic dynamics. While SINN has been demonstrated for various one-dimensional non-Markovian processes, extending it to multidimensional processes is essential for real-world applications. Here, we present key developments toward this goal. First, because direct estimation of multivariate probability density functions (PDFs) becomes computationally challenging with increasing dimension, we represent joint-distribution information using collections of one-dimensional PDFs constructed from linear combinations of the process components. Second, to accommodate the larger set of statistical objectives required to characterize multidimensional processes, we adopt a self-adaptive loss-balancing strategy that dynamically weights the components of the total loss function. Third, we introduce a reference-normalized validation framework that interprets statistical discrepancies relative to the finite-sample variability between independent target ensembles. We also investigate the role of the input white-noise dimension in SINN performance. We evaluate the proposed approach using a Langevin benchmark based on two coupled Duffing oscillators and further demonstrate its applicability to the Langevin dynamics of the Fermi-Pasta-Ulam chain and kinetic Monte Carlo simulations of a lattice Lotka-Volterra model. Our results demonstrate that the multidimensional SINN framework provides a practical approach for modeling multidimensional stochastic dynamics.

52. [ADfiRe: An empirical- and CFD-informed advection-diffusion-reaction thermal model for wildfire spread](https://arxiv.org/abs/2611.18012)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.18012v1 Announce Type: new Abstract: Real-time wildfire forecasting requires a trade-off between rapid yet physically relevant models and high fidelity but computationally costly models of flame spread over heterogeneous, multiphase solid fuel. The present study introduces ADfiRe, a hybrid framework that integrates empirical correlations and CFD-informed parameterizations into a physics-based advection-diffusion-reaction (ADR) formulation. The key features of ADfiRe are the use of established fuel databases, the capacity to handle multiple fuels, and a methodology to capture the effect of arbitrary topography. Furthermore, it includes the effect of flame tilting due to wind, thus accounting for the differences between plume- and wind-dominated fire propagation. ADfiRe resolves explicitly the coupled thermochemical degradation as well as heat and mass transport mechanisms of the advancing fire front. The wind field is modeled based on an appropriately defined Byram number. The model is validated against five well-documented experimental field-scale fires in Mediterranean shrublands, showing quantitative agreement with key metrics such as the rate of spread (ROS) and the fireline intensity, through a two-stage, Arrhenius-based heterogeneous reaction scheme coupling solid-fuel pyrolysis and oxygen-limited char/volatile combustion.

53. [CGTransformer: A Topology-Aware Autoregressive Framework for Crystal Generation and Inverse Design](https://arxiv.org/abs/2611.18303)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.18303v1 Announce Type: new Abstract: Autoregressive language models offer a unified route to crystal generation and inverse design, but their performance depends on how periodic structures are serialized. Symmetry equivalent and closely related crystals can receive different atomic orders under coordinate-based serialization, introducing variability unrelated to their structural connectivity. Here, we present CGTransformer (Crystal Graph Transformer), an autoregressive generative framework that addresses this challenge via a graph-embedded sorting strategy. Using quotientgraph topology and barycentric embeddings, Element Symmetry Graph (ESG) converts periodic crystal networks into topology-guided one-dimensional sequences that retain key local and symmetry-related structural information. CGTransformer achieves high generation validity and the highest single shot crystal structure prediction (CSP) match rate among the compared MP-20 baselines (63.24%), while same backbone comparisons show improved structure recovery over coordinate-based ordering. Furthermore, we demonstrate property-conditioned inverse design for wide-bandgap semiconductors, where ESG achieves a much higher stable, unique and novel (S.U.N.) rate and stronger target-property alignment than the coordinate-based baseline. These results establish topology-guided sequence construction as an effective route to improving crystal generation and property-directed design at fixed model capacity.

54. [A Surrogate Boundary Condition for Improved Accuracy and Performance of Local Modeling in Radiation Transport Simulations](https://arxiv.org/abs/2611.18535)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.18535v1 Announce Type: new Abstract: Monte Carlo neutronics analysis of tokamak designs is computationally expensive due to the complex CAD geometries required to accurately model them. Design iteration of port plugs using global transport in the full model is impractical because of the computational cost. To circumvent this, local modeling methods are used. In the local modeling method, a boundary condition is assumed on the port plug, such that particles that leave the port plug do not require transport in the surrounding global model. For this purpose, vacuum and reflective boundaries are assumed, both of which provide poor approximation of the true transport physics in the global model. To improve on current techniques, a surrogate model is presented that provides a physics-informed boundary condition for the component. A neural network is trained to reproduce the boundary condition on the component that represents the behavior of particles returning from the surrounding geometry. Monte Carlo transport is only necessary within the component, and approximate physics from the surrounding region are retained. This approach allows the design in the component to be iterated without requiring full model transport and joining of the component mesh to the global mesh in each iteration. In this work, the surrogate model is evaluated against vacuum and reflective boundaries-- outperforming both in accuracy, with surrogate predictions of the flux in the port plug differing less than 12% from the global transport solution in any given energy bin. The surrogate boundary condition is also demonstrated to be more performant than global transport for the simplified benchmark geometry.

55. [Generative Design with Real-time Physics Explainability: Towards Product Definition in the Age of AI](https://arxiv.org/abs/2611.17560)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.17560v1 Announce Type: cross Abstract: In this article, we explore opportunities from using generative AI in mechanical engineering. On the one hand, generative methods based on invertible neural networks have been recently proposed for the solution of inverse design problems, allowing to infer design parameters from performance labels. On the other hand, generative AI models have shown that they can act as real time capable surrogates for physics based simulations. Here we suggest that these two streams should be combined in a unified framework, where INN are used to control the design process from the customer requirements perspective and the generative simulation of the systems physics adds a layer of explainability, why the proposed design fulfils the requirements. As generative design is prone to hallucinations, we propose uncertainty quantification to fend off physically infeasible requests. Finally, validation with classical tools is a requirement for generative design process. To demonstrate the capabilities of our novel generative design paradigm, we develop two interactive environments, one for airfoil design based on simulator data and one for the combustor design space exploration based on measured data.

56. [Spin-adapted sample-based quantum diagonalization with randomized time evolution](https://arxiv.org/abs/2611.18071)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.18071v1 Announce Type: cross Abstract: Quantum algorithms based on the classical post-processing of measurement samples have emerged as effective and robust methods to approximate low-energy wavefunctions of many-body quantum systems on present-day and early-fault-tolerant quantum devices. This paper introduces a generic framework for enforcing spin symmetry within these approaches. We tailor this framework to SqDRIFT, a sample-based quantum diagonalization variant that uses the qDRIFT randomized compilation protocol to generate the quantum samples. We discuss how three key components of SqDRIFT (the initial-state preparation, the construction of the time-evolution circuits, and the classical post-processing) can be adapted to incorporate spin symmetry. We show that spin-pure circuits alone are not sufficient, since the sampled determinants generally span a subspace that is not closed under $\hat{S}^2$, and we restore this closure by completing the sampled electronic configurations. In classical simulations of 4-aminobenzonitrile and of an $[\text{Fe}(\text{NH}_{3})_{4}]^{2+}$ model complex, and in experiments on an IBM quantum processor for the oxo-Mn(Salen) complex, this spin-adapted post-processing yields roots that are exact spin eigenfunctions at every subspace size. On hardware, it does so with diagonalized subspaces two to three orders of magnitude smaller than those of the conventional constructions for the same circuit depth.

57. [Reconciling global and local spin models](https://arxiv.org/abs/2611.18207)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 16 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.18207v1 Announce Type: cross Abstract: Magnetic interactions based on first-principles calculations can be casted either into global spin models, where the interactions are configuration-independent, or into local spin models, where the effective parameters depend explicitly on the underlying spin configuration. Although these two perspectives often yield seemingly inconsistent results, we demonstrate that they can be reconciled by restricting the analysis to transverse spin fluctuations. We develop a projection scheme that systematically removes spurious longitudinal contributions from local interaction matrices, thereby establishing a rigorous connection between the projected local interactions and the underlying global multispin Hamiltonian. Applying our approach to the prototype systems (i) a Cr trimer on Au(111) (ii) Fe and Cr dimers on Cu(001), we show that the projected local interaction parameters quantitatively reproduce those obtained from the global four-spin model. This work provides a unified framework to interpret local and global spin models on equal footing and resolves long-standing ambiguities in the identification of effective interactions such as the Dzyaloshinskii-Moriya interaction (DMI) in a non-collinear framework.

58. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.36; Date: 2026-11-16T18:34:02Z; Popularity: 1,361 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

59. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-16T13:57:17Z; Popularity: 271 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

60. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-16T22:16:26Z; Popularity: 61 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

61. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.04; Date: 2026-11-16T13:18:11Z; Popularity: 1,045 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Verifiable pXRD: Hill-climbing pXRD structure determination with LLM agents

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2611.17539

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
