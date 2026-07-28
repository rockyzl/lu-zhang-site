# Daily signal sidecar - 2026-07-28

## Selected Signal

- Title: DeepLens Diagnosis Agent: Agentic Workflow Design Lets a Small Reasoning Model Compete with Frontier LLMs
- URL: https://arxiv.org/abs/2607.22555
- Source: arXiv cs.AI
- Score: 9.00

## Candidate Review

- Signal: DeepLens Diagnosis Agent: Agentic Workflow Design Lets a Small Reasoning Model Compete with Frontier LLMs
- Primary source: https://arxiv.org/abs/2607.22555
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

Total candidates reviewed after duplicate-source filtering: 71

1. [DeepLens Diagnosis Agent: Agentic Workflow Design Lets a Small Reasoning Model Compete with Frontier LLMs](https://arxiv.org/abs/2607.22555)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 9.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22555v1 Announce Type: new Abstract: Medical diagnosis is a multi-stage process: extract facts, consult knowledge, generate a differential analysis, and select the best diagnosis with explanations. Frontier LLMs are strong generalists, but single-shot prompting often yields brittle diagnostic reasoning. We present the DeepLens Diagnosis Agent, a five-stage harnessing pipeline (combining model capabilities with disciplined process constraints) centered on a small medical reasoning model (JSL Medical Small 7B v2) and retrieval-augmented generation (RAG). The pipeline enforces structured clinical extraction, disciplined retrieval, constrained candidate generation, explicit evidence triangulation, and an auditable final decision. On the 915-case DiagnosisArena benchmark, the agent achieved 60.14% top-1 diagnostic accuracy, the highest among small and medium-sized models. The same model without the agent workflow achieved 23.99%, a +36-point gain from workflow design alone, despite 88.2% on standard medical benchmarks, showing that diagnostic reasoning under uncertainty requires more than knowledge recall. The agent costs USD 0.0072 per case (24K tokens on A100) with 24-second latency, 35-45% cheaper than Claude Sonnet 4.5 (USD 0.0110) and Gemini 3.1 Pro (USD 0.0128) while outperforming them by +9.70pp and +9.17pp. Harnessing can also correct frontier model failures; workflow constraints can outweigh parameter count or API cost. Beyond aggregate accuracy, the pipeline produces structured intermediate artifacts that make each stage inspectable and support error localization. These properties support high-stakes settings where traceability, reproducibility, and auditable evidence matter alongside benchmark performance.

2. [QFoldAgent: An Autonomous Quantum Optimization Multi-Agent System for Protein Structure Prediction](https://arxiv.org/abs/2607.22549)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 8.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22549v1 Announce Type: new Abstract: Hybrid quantum-classical protein structure prediction depends strongly on Hamiltonian penalty weights, yet existing lattice-based workflows typically fix these coefficients by hand and evaluate only very short fragments in simulation. We present QFoldAgent, a closed-loop multi-agent framework for 5-residue tetrahedral-lattice folding in which a design agent proposes sequence-conditioned penalties, a VQE-based quantum-classical pipeline optimizes the resulting Hamiltonian under Qiskit Aer noise, and a feedback agent uses energy-landscape diagnostics and MolProbity validation signals to refine penalties across cycles. Ground-truth metrics such as RMSD are never exposed to the agents and are used only for evaluation. We study the framework on two complementary datasets: 55 QDockBank-derived fragments with known structures and 100 coverage-optimized unseen sequences. On the QDockBank benchmark, QFoldAgent reduces median RMSD from 3.64 \AA{} to 3.20 \AA{}, with the largest gains on the hardest targets. On unseen sequences, the closed loop raises structural validity from 87.5% to 98.7%, recovers 87% of initially invalid cases, and the strongest controller improves cycle-3 energy on 87% of sequences while maintaining 96% Ramachandran-favored geometry. These results show that iterative agent control can systematically improve optimization behavior and reduce failure cases in a 5-residue quantum setting.

3. [MIITA: Memory-Induced Inference-Time Adaptation for Continual Learning with Small Language Models](https://arxiv.org/abs/2607.22556)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22556v1 Announce Type: new Abstract: Continual learning (CL) is essential for small language models (SLMs) to adapt to evolving real-world needs in resource-constrained deployments. However, directly updating their limited parameter space causes catastrophic forgetting. While memory-based methods naturally address this by decoupling knowledge retention from parameters, existing approaches designed for large language models (LLMs) rely on abundant storage and strong in-context reasoning that SLMs lack. To address these challenges, we propose MIITA, a Memory-Induced Inference-Time Adaptation framework for supervised CL under constrained storage. MIITA stores supervised experiences as compact correction-direction prototypes with semantic anchors, and retrieves them at inference time using semantic and uncertainty-based cues. The retrieved directions are applied through gated temporary hidden-state adaptation, enabling non-destructive reuse of past supervision without backbone updates, prompt extensions, or test-time backpropagation. A local theoretical analysis links this design to first-order loss reduction, uncertainty-guided retrieval, and directional coverage for retaining old-stage knowledge. Extensive experiments across diverse supervised CL settings show that MIITA consistently improves final performance and mitigates forgetting under fixed memory budgets.

4. [Synthetic Scenario Generation for Evaluation of Industry 4.0 Agents](https://arxiv.org/abs/2607.22563)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22563v1 Announce Type: new Abstract: Industrial agent benchmarks require realistic evaluation scenarios that integrate telemetry, failure modes, maintenance records, and domain standards. However, existing benchmarks such as AssetOpsBench rely on manually authored scenarios and cover a limited set of asset classes. We extend AssetOpsBench with a Smart Grid Transformer asset class and four IEC-grounded diagnostic tools for health-index prediction, dissolved-gas analysis, winding-temperature assessment, and load-profile assessment. We further introduce ScenarioGeneratorAgent, a pipeline for synthetic industrial-agent scenario generation. The pipeline constructs evidence-grounded asset profiles, allocates coverage-aware scenario budgets across operational domains, and generates candidates through a hybrid validation-and-repair loop that enforces schema validity, tool reachability, physical plausibility, standards alignment, and deduplication. To improve scalability, we apply two-level caching, parallel focus-group generation, thread-pool offloading, batched LLM calls, and early rejection filtering. On Smart Grid Transformer scenario generation, these optimizations reduce end-to-end runtime by $8\times$ for 50 scenarios while preserving quality, achieving a composite quality score of $74.2 \pm 1.9$ compared with $73.8 \pm 3.0$ for the unoptimized baseline. These results show that standards-grounded synthetic scenario generation can efficiently expand industrial-agent benchmarks without sacrificing scenario quality.

5. [Loss-Aware Feature-Map Pruning in Convolutional Neural Networks Using Multi-Armed Bandits](https://arxiv.org/abs/2607.22564)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22564v1 Announce Type: new Abstract: Convolutional neural networks often contain redundant feature maps that increase storage and inference cost. This paper presents a loss-aware feature-map pruning framework using multi-armed bandits. Feature-map pruning is structured because it removes complete convolutional output channels and their producing filters rather than isolated scalar weights. Each candidate feature map is treated as an arm. At each play time, one map is temporarily masked and evaluated on a sampled mini-batch; the map is then restored and the observed loss change is converted into a safe-removal reward. After a fixed play budget, candidate maps are ranked by learned scores and the top-k maps are permanently removed with their filters, biases and corresponding next-layer input-channel kernels. The study evaluates UCB1 and Thompson Sampling, compares them with direct/oracle-style evaluation on LeNet/MNIST, and extends the evaluation to MNIST, CIFAR-10, CIFAR-100, SVHN, CUB-200-2011 and Oxford Flowers 102. Results show that UCB1 and Thompson Sampling preserve accuracy close to unpruned models while removing feature maps and reducing convolutional computation. Friedman and Nemenyi tests show that UCB1 obtains the highest mean rank, followed by Thompson Sampling; both significantly outperform greedy and magnitude-based pruning while remaining statistically comparable to the original unpruned model.

6. [CORVUS: Context Optimization and Reduction Via Underlying Synchronization for LLM Coding Agents](https://arxiv.org/abs/2607.22711)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22711v1 Announce Type: new Abstract: LLM coding agents operate by constructing trajectories that accumulate reasoning, tool calls, and results to enable multi-step decision-making. However, the conventional append-only trajectory architecture found in practice tightly couples file-read actions with their observations, capturing snapshots that become permanently fixed in the chronological history. As files change through agent edits or concurrent human modifications, these snapshots become stale, causing reasoning errors and causing agents to redundantly re-read files, with each re-read appending yet another copy to the trajectory. To mitigate this, we propose CORVUS, a novel trajectory architecture that decouples file-read actions from their observations by maintaining a synchronized registry of relevant files and injecting only their current contents at each reasoning cycle. This structural change produces significantly lighter-weight trajectories that remain synchronized with the actual codebase state by construction, eliminating redundant file copies and stale snapshots that bloat conventional trajectories. We evaluated CORVUS on SWE- POLYBENCH_VERIFIED and SWE-BENCH PRO across four LLMs, achieving 9-50% reduction in average input tokens per task, 15-32% shorter final prompts, and up to 37% fewer reasoning cycles while maintaining comparable pass rates.

7. [ViBra: Configuration Interaction for Anharmonic Vibrational Spectroscopy and Quantum-Sampled Configuration Spaces](https://arxiv.org/abs/2607.22850)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22850v1 Announce Type: cross Abstract: Quantum-centric workflows are a promising route to improving the accuracy of property predictions in computational chemistry and materials science. By integrating quantum sampling algorithms with classical solvers, electronic structure calculations have recently demonstrated their potential even on noisy intermediate-scale quantum devices. In principle, the method of Vibrational Configuration Interaction (VCI) is suitable for integration with quantum sampling algorithms as well. However, demonstrations of computational workflows for quantum-centric, vibrational property predictions are still lacking. Here, we introduce a methodology for performing anharmonic vibrational structure calculations that can be deployed in a hybrid, quantum-classical mode. Starting from a quartic force field, the approach combines a Vibrational Self-Consistent Field (VSCF) with VCI in either Full, Selected (S-VCI), or Symmetry-Adapted (SA-VCI) mode. In S-VCI, an Epstein-Nesbet perturbative screening significantly reduces the configuration space while retaining high predictive accuracy. A state-list input enables the integration of externally generated vibrational configurations as a seed space. As a proof-of-concept, we demonstrate a hybrid, quantum-classical computational workflow, in which a quantum sampling algorithm provides the seed. Our vibrational wave function analysis package ViBra, equipped with a graphical interface, is available at https://github.com/raphafe96/ViBra.

8. [CP2K: An electronic structure and molecular dynamics software package - Dynamics, Transport, and Spectroscopic Response](https://arxiv.org/abs/2607.22916)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22916v1 Announce Type: cross Abstract: One of the distinguishing aspects of CP2K is its seamless integration of diverse structural and transition-state optimization techniques with advanced sampling approaches including Monte Carlo, molecular dynamics, and metadynamics, enabling the efficient exploration of complex potential- and free-energy landscapes, including rare events. These capabilities are combined with a broad hierarchy of energy and force evaluation methods, ranging from classical and machine-learned interaction potentials and mixed quantum-classical multiscale and semiempirical schemes, to highly accurate quantum-mechanical electronic-structure approaches. At the heart of the latter lies the Gaussian and plane-wave framework, along with its augmented all-electron generalization, which have been described in detail in our previous code review [T. D. K\"uhne et al., J. Chem. Phys. 152, 194103 (2020)]. Building on this foundation, the present work revisits the methods within CP2K that turn electronic structure into dynamics, transport, and spectroscopic response. Particular emphasis is placed on the coupling between static response calculations and nuclear motion: spectra may be evaluated at optimized structures, averaged over thermally sampled configurations, obtained from time-correlation functions along ab-initio or path integral molecular trajectories, or followed in real time together with electronic and nuclear dynamics. The same modular structure also enables equilibrium and biased transport simulations, from Kubo-type linear response to open-boundary approaches under external potentials, highlighting CP2K's unique capability to unify quantum chemistry with quantum and statistical mechanics within a versatile, holistic simulation environment.

9. [OpenAI and Hugging Face partner to address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 21 Jul 2026 07:00:00 GMT
   - Summary: OpenAI and Hugging Face share early findings from a security incident during AI model evaluation, highlighting advanced cyber capabilities and lessons for defenders.

10. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

11. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

12. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

13. [NVIDIA Cosmos-H-Dreams: Bringing Real-Time Generative Simulation to Surgical Robotics](https://huggingface.co/blog/nvidia/cosmos-h-dreams)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 27 Jul 2026 09:32:20 GMT

14. [Concept-based Visual Counterfactual Explanations with Diffusion Models](https://arxiv.org/abs/2607.22544)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22544v1 Announce Type: new Abstract: Visual counterfactual explanations aim to answer "what minimal change to this image would flip the model's prediction?", and are increasingly important as vision models are deployed in safety-critical domains (e.g., medicine). Existing diffusion-based methods can produce realistic edits, but they rely on external classifiers that must work reliably on noisy images, which makes them fragile and hard to deploy for robust explanations. We introduce C-VCE, a new diffusion framework that builds the classifier directly into the generative model via a concept bottleneck layer, so that counterfactuals are guided by human-interpretable features (concepts) instead of a separate noise robust classifier that works with pixel-level edits. Our model lets users to toggle on/off semantic concepts during sampling, then minimally adjusts relevant image regions, while preserving the rest of the image, respecting feature correlations. To keep edits small and controlled, we add a simple probabilistic regularizer that balances "change the prediction" against "stay close to the original", plus a gradient-based mask that confines modifications to the most relevant regions. On benchmarks such as CelebA, C-VCE matches or improves flip rates while producing counterfactuals that are visually closer to the input and less distorted than baselines that depend on separate noisy-image classifiers. These properties make C-VCE a practical tool for vision systems where users need concrete "what-if" images without having to trust an additional, noise-robust classifier. More broadly, our results suggest that exposing and controlling an internal concept layer is a promising way to make powerful generative models easier to understand and safer to use.

15. [Same Question, Different Answers: Evaluating LLM Reliability Beyond Accuracy](https://arxiv.org/abs/2607.22554)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22554v1 Announce Type: new Abstract: Large language models (LLMs) often achieve strong accuracy on benchmarks, yet it remains unclear how reliably they apply this knowledge when the same question is phrased in different but equivalent ways. In this work, we study how model answers change under meaning-preserving paraphrases across factual question answering and mathematical reasoning tasks. Across four benchmarks and 13 models, we find that model outputs frequently depend on the exact wording of the prompt. While overall accuracy typically changes only modestly across paraphrases, instance-level behavior is far less stable: for many questions, models alternate between correct and incorrect answers depending on phrasing, with mismatch rates reaching more than 23%. Conditioning on questions that are answered correctly in their original form reveals even larger failures measured by answer flip rates, showing that single-prompt correctness is often a poor indicator of reliability. At the same time, we find that models often produce a correct answer for at least one paraphrase of a question, suggesting that the underlying knowledge is present but inconsistently retrieved. Building on this observation, we show that a simple self-paraphrasing strategy can partially recover this latent knowledge and improve performance at inference time. Together, these findings suggest that standard accuracy metrics can mask substantial instability, and that evaluating consistency across equivalent inputs provides a clearer picture of LLM reliability.

16. [Codifying the Judge: Scalable Evaluation via Program Distillation](https://arxiv.org/abs/2607.22561)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22561v1 Announce Type: new Abstract: LLM-as-a-judge has become the standard for automated evaluation, but it suffers from high cost, significant latency, and opaque decisions -- limitations that undermine its scalability and reliability. We address these with a simple, efficient alternative: program distillation. Instead of prompting an LLM at the evaluation time, we distill its decision logic into a committee of programs that score candidates directly. These programmatic judges offer transparency, are easily inspected or edited, and eliminate per-sample API costs. Building on this notion, we introduce PAJAMA, a system that synthesizes programs as judges, aggregates their decisions into a joint verdict, and incorporates a fallback mechanism to selectively escalate low-confidence cases to an LLM. Across five datasets and four model families, we show that programmatic judges can match the performance of a 13B-size LLM judge. When using program outputs as routing signals, PAJAMA improves both accuracy and throughput and advances the Pareto frontier. Beyond evaluation, programmatic judges produce cheap and effective reward signals: on RewardBench, a reward model distilled from programs' verdicts outperforms one trained on a proprietary LLM's labels at two orders of magnitude lower API cost.

17. [SF-AMS: Strategic Forgetting for Structured Memory in LLM Agent](https://arxiv.org/abs/2607.22562)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22562v1 Announce Type: new Abstract: Managing long-context dependencies remains a primary bottleneck in LLM agents, as redundant and irrelevant information can degrade multi-step reasoning. Strategic Forgetting for Agent Memory Systems (SF-AMS) is proposed as a framework for maintaining compact high-utility memory by modeling the long-term importance of memory units. SF-AMS replaces static retrieval and heuristic decay with a utility-driven survival mechanism that updates memory importance from usage redundancy and temporal signals, inducing a hierarchical memory structure that prioritizes stable entity-consistent information while filtering noise. On top of this, Composite Importance Scoring integrates semantic and entity level signals to improve retrieval robustness. Experiments on LoCoMo and LongMemEval-s show consistent gains over strong state of the art baselines including LightMem MemO and A-Mem. The largest improvement appears in multi-hop reasoning under Qwen2.5-7B where SF-AMS achieves plus 9.65 F1 over the strongest baseline followed by temporal reasoning under GPT-4o-mini plus 6.91 F1 and open-domain tasks plus 6.53 F1 demonstrating strong cross backbone generalization. These results show that modeling memory importance as a dynamic utility signal is critical for reliable long-context reasoning.

18. [Semalith v1.4: A Calibrated 184M Safety Classifier Achieving State-of-the-Art Prompt-Injection Detection at 44x Fewer Parameters than Llama-Guard-3-8B](https://arxiv.org/abs/2607.22545)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22545v1 Announce Type: new Abstract: Deploying large language models in financial-services and agentic settings requires safety classifiers that simultaneously handle prompt injection, regulatory compliance, and general harm, a combination no existing open guardrail addresses in a single inference pass. Semalith v1.4 is a 184M-parameter DeBERTa-v3-base classifier performing simultaneous three-axis safety classification including prompt injection, general harm, and financial-services regulatory compliance, in a single forward pass. Its 22-class head (BENIGN, nine prompt-injection sub-types, general-harm, eleven BFSI labels) is trained with a 4-class auxiliary super-category head under jointly weighted loss, on a 76,204-row corpus mined from 49 public sources with SHA-1 deduplication against every held-out evaluation set, with 21 of 22 benchmarks at zero contamination (max 0.22%). Against Llama-Guard-3-8B on 22 held-out benchmarks, Semalith v1.4 wins every prompt-injection evaluation (7/7) and 11 of 18 benchmarks overall at 44x fewer parameters, with FPR = 0.000 on 208 benign agentic prompts vs 0.063 for Llama-Guard-3-8B. On general-harm benchmarks (WildGuardMix, HEx-PHI, HarmBench), Llama-Guard-3 leads; this complementary split is documented in Section 4. Six measured weak spots are disclosed in Section 6. Deployment guidance: v1.3 is recommended for conversational moderation deployments (ToxicChat F1 0.624); v1.4 is recommended when BFSI label coverage or zero-FPR on benign agentic prompts is the priority.

19. [Progress-conditioned Group Policy Optimization for Long-Horizon Agentic Tasks](https://arxiv.org/abs/2607.22724)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22724v1 Announce Type: new Abstract: Group-based policy optimization has been increasingly used to train large language model (LLM) agents from sparse outcome rewards by comparing trajectories or steps within a group. However, on difficult long-horizon tasks, this comparison can suffer from a sampling imbalance: repeated or low-effect actions dominate the high-probability region of the policy while useful state-changing actions remain under-sampled. This imbalance produces many all-failed rollout groups, where outcome rewards provide no direction for correcting the policy. Together, these effects can form a self-reinforcing credit trap: failure-dominated sampling yields no outcome-based correction, allowing repeated low-effect actions to persist. To break this loop, we propose Progress-conditioned Group Policy Optimization (ProGPO), which uses first-visit observation coverage only when all samples in a group receive zero outcome reward. Specifically, within such groups, ProGPO assigns higher relative advantages to trajectories or steps that visit more new states since reaching new observations is a prerequisite for task success. Experiments on two challenging agentic benchmarks, ALFWorld and WebShop with Qwen2.5-1.5/7B-Instruct, show that ProGPO consistently improves over group-based baselines, with particularly large gains on hard tasks.

20. [PhononBench-MP40: a spectrum-resolved benchmark dataset for phonon stability](https://arxiv.org/abs/2607.22573)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22573v1 Announce Type: cross Abstract: Imaginary phonon modes remain a practical bottleneck in computational materials screening because otherwise plausible structures can be locally dynamically unstable under a chosen workflow. Here we present PhononBench-MP40, a spectrum-resolved benchmark dataset of Materials Project-derived crystals for workflow-defined phonon stability. The dataset starts from 47,969 MP40 workflow tasks and provides 46,899 completed records with paired stability labels and local phonopy YAML spectra, including 16,683 Stable records and 30,216 completed-phonon unstable records. A further 1,067 relaxation failures are reported separately rather than merged into the completed phonon denominator. The release centers on the local YAML spectrum: the stability label, the lowest sampled frequency and any threshold-dependent relabeling are derived from that spectrum. The dataset is openly available through Science Data Bank at https://doi.org/10.57760/sciencedb.38735. A companion GitHub repository provides the calculation code and lightweight access utilities. PhononBench-MP40 provides an auditable reference for workflow-defined stability classification, minimum-frequency analysis, threshold studies and failure-aware triage, while keeping the reference workflow, data schema and interpretation boundaries explicit.

21. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.55; Date: 2026-07-28T13:58:41Z; Popularity: 2,546 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

22. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-20T14:17:48Z; Popularity: 22 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

23. [How AI is expanding what people do at work](https://openai.com/index/how-ai-is-expanding-what-people-do-at-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 27 Jul 2026 03:30:00 GMT
   - Summary: New OpenAI research shows how AI is expanding what workers do, with ChatGPT users taking on tasks across roles and reshaping job boundaries.

24. [Launching Health in ChatGPT](https://openai.com/index/health-in-chatgpt)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT
   - Summary: Health in ChatGPT now lets eligible U.S. users securely connect medical records and Apple Health to get more personalized insights and better understand their health.

25. [Building AI infrastructure with the Effingham County community](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: OpenAI announces Project Camellia in Effingham County, Georgia, with commitments to responsible energy, community investment, jobs, and access to Codex.

26. [How news organizations are using AI to advance their vital missions](https://openai.com/index/how-news-organizations-are-using-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 13:00:00 GMT
   - Summary: News organizations are using AI to strengthen reporting, grow audiences, and improve business operations, with OpenAI tools supporting journalists and publishers worldwide.

27. [Advancing the next era of national science](https://openai.com/index/advancing-the-next-era-of-national-science)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 12:00:00 GMT
   - Summary: OpenAI outlines its commitment to advancing American science working with the U.S. Department of Energy and national labs to use frontier AI to accelerate discovery.

28. [NTT DATA Group cuts incident analysis to 30 minutes with Codex](https://openai.com/index/ntt-data)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 22 Jul 2026 00:00:00 GMT
   - Summary: NTT DATA Group uses ChatGPT Enterprise and Codex to help 9,000 employees automate work, cut incident analysis to 30 minutes, and scale secure AI adoption.

29. [Introducing the ChatGPT for small business program](https://openai.com/index/introducing-chatgpt-small-business-program)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 17:00:00 GMT
   - Summary: OpenAI launches the ChatGPT for Small Businesses program, helping entrepreneurs build AI skills, automate work, and grow with ChatGPT Work.

30. [David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC](https://openai.com/index/david-velez-robin-vince-join-openai-boards)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT
   - Summary: David Vélez and Robin Vince join the boards of the OpenAI Foundation and OpenAI Group PBC, bringing global leadership in finance, technology, and governance.

31. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

32. [LFM2.5-Encoders for Fast Long-Context Inference on CPU](https://huggingface.co/blog/LiquidAI/lfm2-5-encoders)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 28 Jul 2026 15:01:45 GMT

33. [Bringing Nunchaku 4-bit Diffusion Inference to Diffusers](https://huggingface.co/blog/nunchaku-diffusers)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 23 Jul 2026 00:00:00 GMT

34. [Grabette: an open system to record robot-manipulation data](https://huggingface.co/blog/grabette)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 21 Jul 2026 00:00:00 GMT

35. [Newer Models, Same Advantage](https://huggingface.co/blog/Dharma-AI/newer-models-same-advantages)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 11:49:48 GMT

36. [Security incident disclosure — July 2026](https://huggingface.co/blog/security-incident-july-2026)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 16 Jul 2026 00:00:00 GMT

37. [What building Shippy taught us about building agents](https://huggingface.co/blog/allenai/shippy-tech-blog)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:29:41 GMT

38. [Model Routing Is Simple. Until It Isn’t.](https://huggingface.co/blog/ibm-research/model-routing-is-simple-until-it-isnt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 17:27:01 GMT

39. [Welcome Inkling by Thinking Machines](https://huggingface.co/blog/thinkingmachines-inkling)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

40. [Introducing Real World VoiceEQ: Measuring the human quality of voice AI](https://huggingface.co/blog/real-world-voiceeq)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 15 Jul 2026 00:00:00 GMT

41. [SeT-Diff: Towards Semantic Foundation Models for HPC Telemetry and Time-Series](https://arxiv.org/abs/2607.22548)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22548v1 Announce Type: new Abstract: Data centers and their compute nodes require accurate and flexible digital twins capable of modeling the complex interplay of workloads, environmental parameters, and physical metrics. Current machine learning approaches for HPC and its telemetry typically rely on a static subset of anonymous, fixed-position sensor variables tailored to single tasks. Consequently, these models become obsolete when target tasks change or sensor metrics vary. We propose SeT-Diff, the first foundational model for compute node telemetry and time-series. Unlike rigid architectures, our diffusion-based approach conditions the generative process on each sensor's semantic description, decoupling the system dynamics from the structure of the dataset. Experiments on a real-world supercomputer dataset demonstrate a Mean Absolute Error (MAE) of 0.0470 on reconstruction tasks. SeT-Diff exhibits zero-shot permutation stability, maintaining accuracy with negligible degradation even when sensors are shuffled. A single pre-trained model effectively performs data imputation, forecasting, and virtual sensing - achieving a 0.033 MAE in thermal inference - making SeT-Diff an effective data-driven digital twin for HPC systems.

42. [CausalGate: Causal Importance Distillation for Transformer Module Pruning](https://arxiv.org/abs/2607.22720)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22720v1 Announce Type: new Abstract: Existing adaptive inference methods for Large Language Models rely on observational heuristics, such as hidden-state similarity or activation magnitudes, to drop redundant modules. However, these correlation-based metrics often fail to capture subtle, non-linear structural computations vital for semantic accuracy. We introduce CausalGate, an intervention-guided framework for compute-efficient transformer inference. During a calibration phase, CausalGate isolates individual Attention and MLP sub-layers, zeros out their respective outputs, and measures the exact semantic damage via the Kullback-Leibler divergence of the final logit distribution. To eliminate runtime routing overhead, this structural importance hierarchy is distilled into a global set of static, lightweight scalar gates using an Exponential Moving Average smoothing objective paired with a differentiable pairwise ranking loss. Evaluated on TinyLlama-1.1B, Qwen2.5-3B, and Llama-3.1-8B across language modeling and commonsense reasoning benchmarks, CausalGate consistently outperforms prominent dynamic routing and layer-skipping baselines, translating theoretical compute savings into concrete hardware latency reductions with zero operational overhead.

43. [QFedPolyp: A Communication- and Inference-Efficient Federated Learning Framework for Polyp Segmentation](https://arxiv.org/abs/2607.22743)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22743v1 Announce Type: new Abstract: Background and Objective: Automatic polyp segmentation supports computer-aided diagnosis and early colorectal cancer detec- tion. Centralized deep learning requires hospitals to share sensitive medical data, while federated learning preserves privacy but introduces high communication costs through repeated transmission of full-precision model parameters. We propose QFedPolyp, a communication- and inference-efficient federated learning framework for collaborative polyp segmentation. Methods: QFedPolyp combines quantization-aware training with low-precision model communication. Each hospital locally trains a lightweight U-Net on private data while simulating quantization during training. Clients transmit quantized model parameters to a central server, where they are reconstructed and aggregated using Federated Averaging. Evaluation is performed on Kvasir-SEG, CVC-ClinicVideoDB, PolypGen, and BKAI-IGH NeoPolyp. Results: Full-precision federated training achieves Dice scores of 0.910 on Kvasir-SEG and 0.930 on CVC-ClinicVideoDB. Uni- form 8-bit communication reduces transmission cost by approximately 4 times while preserving competitive segmentation accuracy. Quantized models also achieve up to 1.5 times faster inference than full-precision models. Conclusions: QFedPolyp enables privacy-preserving collaborative polyp segmentation with reduced communication overhead and faster inference. The resulting lightweight models are suitable for real-time clinical deployment.

44. [Curl-based Electric-Field Boundary Condition for the Accurate and Stable Electromagnetic Scattering Analysis](https://arxiv.org/abs/2607.23260)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.23260v1 Announce Type: new Abstract: We introduce a curl-based Electric-Field Integral Equation (Curl-EFIE) for the electromagnetic scattering analysis from perfect electric conductors. The formulation is derived by enforcing a vanishing curl on the EFIE over the boundary manifold, achieved by testing the internal electric field with orthogonal tangent solenoidal disks. We demonstrate that a Method-of-Moments (MoM) discretization of the Curl-EFIE converges to a Galerkin-discretized MFIE as the testing disk dimensions vanish, yielding stable, breakdown-free impedance matrices for low frequencies and dense grids. Unlike the strongly singular kernels of the MFIE, the Curl-EFIE utilizes weakly singular kernels, significantly simplifying source integral evaluations. As a first-kind integral equation, it bypasses the MFIE's Gram matrix requirement, facilitating the analysis of non-matching triangulations. Furthermore, a linear combination of the Curl-EFIE and the conventional EFIE provides an interior-resonance-free formulation analogous to the Combined Field Integral Equation (CFIE). Finally, the Curl-EFIE performs particularly well at capturing the scattering behavior of sharp- edged and cornered geometries.

45. [Reframing the coupling force of adaptive resolution simulation in terms of the Liouville-type hierarchy for open systems](https://arxiv.org/abs/2607.24574)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24574v1 Announce Type: new Abstract: In this work, we present a novel perspective on the coupling force employed to compensate the interface artifacts prevalent in adaptive resolution simulations (AdResS) of open many-particle systems. We show that a substantial part of this "thermodynamic force" can be framed in terms of the theoretical model of the Liouville-type hierarchy for open systems. The correspondence is made explicit for the case of a simple atomistic fluid, for which a one-dimensional integral expression is derived. This enables the analysis for dependencies of the thermodynamic force on important simulation parameters, which is taken to inspire both simplifications for the numerical calculation of the thermodynamic force and new criteria for its validation that are adequate to the interfacial nature of the problem. The theoretical claims are then verified in a simulation study of the atomistic supercritical Lennard-Jones fluid at different thermodynamic states.

46. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.55; Date: 2026-07-28T12:40:25Z; Popularity: 1,551 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

47. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-07-24T05:53:25Z; Popularity: 476 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

48. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.29; Date: 2026-07-28T07:26:54Z; Popularity: 286 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

49. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.22; Date: 2026-07-28T13:07:45Z; Popularity: 218 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

50. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

51. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

52. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

53. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

54. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

55. [Learning to Access Computation: Accessibility Plasticity as a Principle of Adaptive Intelligence](https://arxiv.org/abs/2607.22748)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22748v1 Announce Type: new Abstract: Modern neural networks primarily adapt through parameter modification within predefined computational structures. While recent methods introduce modularity, conditional computation, and parameter-efficient adaptation, they generally do not distinguish computational capability from computational accessibility as separate adaptive variables. This work introduces Accessibility Plasticity, a principle of adaptive computation in which systems adapt not only by changing what computation exists, but also by reorganizing which existing computations can interact and participate. We formalize Accessibility Plasticity through a relationship-based operational realization and establish a reuse-first hierarchy of adaptation, where accessibility modification precedes more costly capability and structural changes. A proof-of-concept evaluation on sequential learning tasks shows that accessibility adaptation can reduce capability modification while maintaining comparable task performance. These results suggest accessibility as a distinct adaptive dimension and provide a foundation for future dynamic neural systems whose computational relationships evolve with changing environments.

56. [An Integrated Deep Learning and Statistical Framework for Whole-Network Gene--Environment Association with Leaf Vascular Architecture](https://arxiv.org/abs/2607.22763)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22763v1 Announce Type: new Abstract: Leaf veins exhibit remarkable diversity in architecture and patterning, yet existing gene--environment association studies have primarily quantified leaf venation using a small collection of low-dimensional summary traits, thereby discarding most of the structural information contained in the original images. We propose an integrated deep learning and statistical framework. The proposed framework achieves four methodological advances. First, it represents the complete leaf vascular architecture as a whole-network image phenotype. Second, it fine-tunes the deep learning-based Edge Detection with Transformers (EDTER) model to accurately extract whole-network leaf vascular architecture from RGB images by jointly learning local and global contextual features. Third, it constructs a new annotated leaf image database by integrating edge maps generated by DiffusionEdge with the Berkeley Segmentation Database (BSDS500). Fourth, it applies Semiparametric Sparse Canonical Correlation Analysis (SSCCA) to perform variable selection and model associations between repeatedly measured high-dimensional Bivariate image responses and high-dimensional predictors while simultaneously accommodating sparse, zero-inflated data represented by edge maps through a truncated latent Gaussian copula model. Two simulation studies demonstrate the performance of the proposed framework under increasing levels of complexity. Application to a real \emph{Populus} dataset identifies three significant gene--geography interactions associated with leaf vascular architecture, providing new biological insights and establishing a broadly applicable methodological framework for high-dimensional complex image phenotypes.

57. [Beyond Shapley: An Influence-Based Data Auditing Pipeline for LLM Alignment and Evaluation](https://arxiv.org/abs/2607.22766)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22766v1 Announce Type: new Abstract: The alignment of Large Language Models (LLMs) is increasingly bottlenecked by data quality. As datasets scale, massive preference and instruction-tuning corpora inevitably accumulate hidden structural contradictions, safety risks, and systemic human annotation errors. Standard dataset auditing methods, such as semantic deduplication or LLM-as-a-judge, struggle to capture the actual predictive impact of individual records and often miss deep functional rule clashes. To address this, we introduce a scalable, inference-only data valuation pipeline that approximates the Shapley value without iterative model retraining. By mapping semantic k-NN neighborhoods into a directed graph, our framework evaluates data utility directly through a reference LLM's probability distribution using zero-shot and one-shot conditional log-likelihood shifts. Our pipeline then translates these predictive influence scores into localized advantage metrics to isolate gradient-conflicting records. We demonstrate the pipeline's efficacy in sanitizing two heavily vetted alignment datasets. First, applying our pipeline to the HelpSteer2 dataset reduced the manual audit search space by 99.1%, successfully uncovering falsely-labeled records across diverse failure modes. Second, applying our automated audit strategy to Anthropic's HH-RLHF training and evaluation splits identified thousands of hidden safety and factual preference inversions. Crucially, by extending this audit to the evaluation split, we expose severe vulnerabilities in current benchmark integrity: highly capable models frequently predict the safer or more helpful response, only to be penalized by objectively flawed human ground-truth labels. Overall, our work provides a mathematically grounded, highly efficient diagnostic tool to uncover human label failures, sanitize evaluation benchmarks, and ensure the integrity of LLM alignment data.

58. [PI-GINOT: Data-free geometry-informed neural operator learning for finite-strain hyperelasticity on parametric DogBone specimens](https://arxiv.org/abs/2607.23299)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.23299v1 Announce Type: new Abstract: Parametric nonlinear solid-mechanics simulations are widely used in virtual testing, optimisation, and uncertainty analysis, but repeated finite-element simulations become costly when geometry changes. This paper presents PI-GINOT, a physics-informed neural operator that predicts finite-strain hyperelastic responses across a four-parameter family of DogBone specimens without using finite-element training data. Each specimen is described by a boundary point cloud, which is encoded into geometry features. A cross-attention decoder then predicts displacement at arbitrary points. Displacement boundary conditions are enforced exactly, while stresses are computed using automatic differentiation and a compressible Neo-Hookean plane-stress model. Training is guided by equilibrium, traction-free and symmetry conditions, deformation stability, and internal force consistency. Abaqus simulations are used only after training for validation. Across eight test geometries, PI-GINOT achieves displacement errors of 2.1%-7.1%, peak von Mises stress errors of 0.9%-13.3%, and section-force errors below 10.3%. Larger errors occur in individual stress components, especially for narrow specimens, mainly because of steep stress gradients near the gauge-to-fillet transition. These results show that PI-GINOT can provide useful geometry-dependent predictions for nonlinear solid mechanics without labelled simulation data, while also revealing where better local stress resolution is still needed.

59. [Self-consistent orbital-free nuclear density functional theory with a physics-constrained learned nonlocal kinetic energy functional](https://arxiv.org/abs/2607.23328)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.23328v1 Announce Type: new Abstract: Nonlocal kinetic-energy density functionals (KEDFs) can encode nuclear shell structure in orbital-free density functional theory (OFDFT), but self-consistency requires accurate functional derivatives and a stable solution of the Euler equation. We construct a density-dependent-kernel KEDF whose correction is learned from Kohn-Sham (KS) reference data. Linearity in the kernel shape yields analytic Euler--Lagrange (EL) responses. The fit uses exact energy-matching equalities and soft quadratic inequality penalties for violations of prescribed tail-response and selected-path energy-rise margins, evaluated by an active-set repeated penalized least-squares iteration. We formulate the radial EL equation as the rearranged one-orbital eigenproblem. In a constant-$k_F$ $^{16}$O benchmark it converges without density mixing and agrees with imaginary-time evolution (ITE) to sub-keV energy. Adaptive-step ITE gives final species EL residuals of at most 0.07 MeV in the reported calculations, and rearranged diagonalization reaches the same stationary densities. For spherical $N=Z$ systems without spin--orbit or Coulomb terms, nucleus-specific fits for $A=16$ to $140$ reproduce shell patterns and radii. A correction trained on three nuclei transfers the shell pattern and radius, but not the absolute energy, to a previously unseen $A=140$ system.

60. [Tunable mesoscopic numerical model for bacterial biofilms](https://arxiv.org/abs/2607.23677)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.23677v1 Announce Type: new Abstract: We present a tunable mesoscale model to provide a basis for future rheological calculations of of bacterial biofilms, explicitly incorporating reversible crosslinking within the extracellular polymeric substance (EPS) matrix. Using a Dissipative Particle Dynamics framework combined with a Gillespie-inspired algorithm, bonds between polymers and bacteria dynamically form and break, capturing the intrinsically evolving nature of the network. We show that biofilm structure is governed by a competition between polymer-polymer and polymer-bacteria crosslinks, controlled by binding energy, linker availability, and bond stiffness and provide a minimal model that helps to understand the competition between both species.

61. [Stochastic Counterdiabatic Driving via Biorthogonal Liouvillian Eigenmodes](https://arxiv.org/abs/2607.24393)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.24393v1 Announce Type: new Abstract: Finite-time driving of stochastic systems generates excess dissipation, causing the evolving probability distribution to lag behind the instantaneous equilibrium, and consequently degrading the convergence of nonequilibrium free energy estimators based on the Jarzynski equality. Escorted free energy simulations address the non-adiabatic lag by engineering control fields $\mathbf{u}$ that eliminate the lag, enforcing the trajectory-wise equality $\mathcal{W}_\mathbf{u} = \Delta \mathcal{F}$, and yielding zero-variance estimators. However, constructing the escorting field in closed form remains a challenge, approached variously through flow-field methods, targeted free energy perturbation, or learned diffeomorphisms. In this work, we construct a complementary numerical framework based on gauge-type transforms instead of generalized coordinate transforms for perfect escorting based on the exact spectral decomposition of the time-dependent Fokker-Planck generator. The biorthogonal decomposition of the Liouville operator directly yields a counterdiabatic correction whose action on the instantaneous equilibrium distribution exactly cancels the non-adiabatic lag at arbitrary driving speed in formal analogy with shortcuts-to-adiabaticity techniques such as Berry's transitionless driving for quantum systems. Numerical verification for simulations of an overdamped particle in a time-varying double-well potential and harmonic traps confirms that the counterdiabatic condition is satisfied to machine precision, with the non-adiabatic lag suppressed by roughly twelve orders of magnitude in total variation distance and sixteen orders in KL divergence relative to the unescorted dynamics. As a diagnostic, we demonstrate vanishing dissipated work $\mathcal{W}_{\text{diss}}(t) \approx 0$ for the deterministically propagated Fokker-Planck density across all protocol speeds.

62. [Machine Learning of Quantum Entanglement from Noisy Measurements](https://arxiv.org/abs/2607.22853)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Tue, 28 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.22853v1 Announce Type: cross Abstract: In this work, we investigate the application of Machine Learning (ML) algorithms to the identification and quantitative characterization of quantum entanglement in polarization-entangled photon pairs. The analysis is based on simulated symmetric, informationally complete, positive operator-valued measure (SIC-POVM) measurement data, where each two-qubit state is represented by a 16-dimensional measurement vector corresponding to experimentally accessible coincidence counts. The generated SIC-POVM measurement data include Poissonian shot noise. Several supervised ML algorithms, including Logistic Regression, k-Nearest Neighbors, Decision Trees, Support Vector Machines, and Random Forests, are applied to the classification of separable and entangled states directly from raw measurement data, without explicit density matrix reconstruction or the use of conventional separability criteria. The study additionally explores clustering methods and nonlinear regression techniques for estimating continuous entanglement measures. The obtained results demonstrate that ML methods can achieve very high classification accuracy, even under extremely limited training conditions. These findings indicate that ML may provide an efficient alternative to conventional quantum-state analysis under simulated Poissonian noise conditions.

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-07-24T09:20:32Z; Popularity: 752 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.71; Date: 2026-07-28T05:41:19Z; Popularity: 711 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

65. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.64; Date: 2026-07-28T11:54:01Z; Popularity: 640 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

66. [Show HN: Mwe-MCP – self-hosted memory for AI agents that knows who may know what](https://github.com/Fr4nZ82/mwe-mcp)
   - Source: Hacker News; Group: Tech community; Score: 2.20; Date: 2026-07-23T12:38:20Z; Popularity: 4 points, 0 comments
   - Summary: HN discussion: 4 points, 0 comments.

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.16; Date: 2026-07-28T02:02:18Z; Popularity: 157 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-23T11:51:14Z; Popularity: 103 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

69. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-24T07:52:31Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

70. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-07-23T08:49:52Z; Popularity: 6 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

71. [Show HN: How I built a debugging tool, and the agent, using it, found bugs in it](https://news.ycombinator.com/item?id=49064283)
   - Source: Hacker News; Group: Tech community; Score: 1.08; Date: 2026-07-27T01:44:25Z; Popularity: 1 points, 1 comments
   - Summary: HN discussion: 1 points, 1 comments.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

DeepLens Diagnosis Agent: Agentic Workflow Design Lets a Small Reasoning Model Compete with Frontier LLMs

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.22555

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
