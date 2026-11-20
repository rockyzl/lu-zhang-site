# Daily signal sidecar - 2026-11-20

## Selected Signal

- Title: VeriMath: Human-in-the-Loop Generation and Verification of Curriculum-Aligned Mathematics Assessment Items
- URL: https://arxiv.org/abs/2611.23456
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: VeriMath: Human-in-the-Loop Generation and Verification of Curriculum-Aligned Mathematics Assessment Items
- Primary source: https://arxiv.org/abs/2611.23456
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

Total candidates reviewed after duplicate-source filtering: 60

1. [VeriMath: Human-in-the-Loop Generation and Verification of Curriculum-Aligned Mathematics Assessment Items](https://arxiv.org/abs/2611.23456)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23456v1 Announce Type: new Abstract: Automatic generation of mathematics assessment items is a growing area in educational artificial intelligence, yet classroom deployment remains challenging. Generated questions must satisfy multiple constraints: mathematical correctness, curriculum alignment, appropriate cognitive difficulty, and educator reviewability. While prior work has advanced text generation, reliable assessment authoring requires granular control over localized examination formats and expert educational judgment. To address this challenge, we present VeriMath, a generalized, human-in-the-loop framework for generating rigorous, curriculum-constrained mathematics assessment drafts. Using annotated reference items, the framework anchors generation to the requested examination section and cognitive reasoning level, then applies sequential automated verification and guided repair before submitting drafts for expert review. We evaluate VeriMath through a national curriculum case study using 4,555 mathematics items from the Vietnamese Grade 12 curriculum and 50 distinct generation requirements covering multiple-choice, true/false, and short-answer formats. Across two model backbones, the framework produces verifier-accepted drafts for 94% (47/50) of requirements per run. Blind expert evaluations confirm high mathematical accuracy and curriculum alignment, with strict teacher-readiness assessments accepting up to 56.8% of generated items. Analysis of rejected drafts reveals persistent domain-agnostic challenges involving formatting, statement validity, and solution-step completeness. These findings demonstrate that VeriMath can bridge generative AI and dependable educational applications by producing highly reviewable assessment drafts within tightly constrained national curriculum frameworks.

2. [Hebbia sees improvements in financial research with GPT-6 Astra](https://openai.com/business/customer-stories/hebbia)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 6.00; Date: Fri, 20 Nov 2026 00:00:00 GMT
   - Summary: Hebbia tested GPT-6 Astra for financial research. Its prerelease evaluations found gains in source coverage, citation relevance, and presentation quality.

3. [Training Language Models for Introspective Oversight](https://arxiv.org/abs/2611.23365)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23365v1 Announce Type: new Abstract: Language models increasingly exhibit behaviors that are difficult to detect in transcripts, such as reward hacking, deception, and sycophancy. Asking the assistant follow-up questions about its actions is unreliable, since models are generally not trained to report their own misbehavior. As a result, approaches to oversight typically involve querying external models. These face limitations: external transcript monitoring operates only on visible model outputs, and activation decoders lack full context and are prone to confabulation. We introduce introspective oversight, which trains a new role in the model to answer arbitrary questions about the assistant, rewarding answers that are verified against the assistant's actual behavior. We implement this by adding a separate, third-person observer role that answers these queries, which we can train solely for accuracy and separately from the assistant. On five held-out oversight evaluations, an observer trained on Qwen3.6-27B obtains a mean AUROC of 0.907, outperforming honesty training (0.864), transcript monitoring (0.828), and activation oracles (0.796). We further find that training an observer makes the assistant itself easier to monitor, with every baseline method improving on average when applied to the fine-tuned assistant. These results suggest that training models to answer verifiable questions about themselves is a tractable approach to overseeing unintended behavior.

4. [Diagnostic Accuracy and Navigation Behavior of Vision-Language Model Agents Reading Emergency CT and MRI Examinations](https://arxiv.org/abs/2611.23480)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23480v1 Announce Type: new Abstract: Purpose. To evaluate the diagnostic accuracy and image navigation behavior of vision-language model (VLM) agents under varying exploration strategies. Materials and Methods. In this retrospective study, six VLMs read 100 emergency CT and MRI examinations published in a public archive (March 2025-August 2026) under four conditions (free navigation, navigation from a key slice, and all slices or key slices in a single request), twice each (4800 runs). Nine radiologists read 30 of those cases. A large language model judge validated against two radiologists graded the answers. Conditions were compared with generalized estimating equations clustered by case. Results. Pooled accuracy was lowest under free navigation (32.6%; 391/1200), followed by navigation from a key slice (37.9%; 455/1200; P = .003), and highest with all slices (42.2%; 506/1200) or key slices (42.5%; 510/1200) in one request (both P < .001). On the 30 cases read by radiologists, freely navigating models were correct in 30.0% of runs (108/360) versus 77.0% for radiologists (208/270; P < .001). Models formed a first hypothesis after a median of 10.8% of the slices and kept it in 63.1% of runs (755/1196); final answers were correct in 12.4% of runs after a wrong first hypothesis (110/885) versus 90.4% after a right one (281/311; P < .001). Median stated confidence in the final answers was 90%, whereas 38.9% of them were correct (1861/4778). Conclusion. Across all exploration strategies, VLM agents remained far less accurate than radiologists. They adopted an early hypothesis and usually kept it, seldom correcting a wrong one.

5. [A plane-wave auxiliary-field quantum Monte Carlo study of silicon point defects](https://arxiv.org/abs/2611.25121)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.25121v1 Announce Type: cross Abstract: Accurately predicting the energetics of point defects remains a formidable challenge in computational materials science. For the tetrahedral silicon self-interstitial, for example, previous periodic coupled-cluster [CCSD(T)] and diffusion Monte Carlo (DMC) calculations disagree by about 1.2 eV. Here, we present formation energies of silicon self-interstitials and vacancies using auxiliary-field quantum Monte Carlo (AFQMC) in a plane-wave basis formulated within the projector-augmented wave framework, and compare them with the random-phase approximation (RPA) and CCSD(T). Using 16- and 64-atom cells, we demonstrate that an RPA-based correction effectively removes the two-body finite-size errors that remain after twist averaging in AFQMC for bulk silicon and for the dumbbell and hexagonal self-interstitials. With this correction, we obtain formation energies of 4.4 eV and 4.6 eV for these two self-interstitials in 16-atom cells, in good agreement with DMC and transcorrelated coupled-cluster results. For the tetrahedral interstitial and the Jahn--Teller-distorted vacancy, 16-atom cells are too small to obtain realistic formation energies; in 64-atom cells, we obtain 5.7 eV and 5.2 eV, respectively. With identical setups in 16-atom cells, CCSD(T) yields systematically lower formation energies than AFQMC, with the largest difference, 250 meV, for the tetrahedral interstitial. Our results indicate that the earlier overestimation of CCSD(T) for the tetrahedral interstitial stems from the finite-size treatment in the coupled-cluster workflow rather than from multi-configurational character of the defect.

6. [How OpenAI’s Performance Factory keeps ChatGPT fast](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 19 Nov 2026 08:00:00 GMT
   - Summary: Learn how OpenAI built the Performance Factory, a system of Codex-powered workflows that finds and fixes performance issues to help keep ChatGPT fast.

7. [Explore the Codex Security Plugin](https://openai.com/business/learn/codex-security-plugin-demo)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 19 Nov 2026 00:00:00 GMT
   - Summary: Watch a demo of the Codex Security Plugin and see the workflow in action, from getting started to reviewing the results shown in the recording.

8. [See PR scans in action](https://openai.com/business/learn/pr-scans-demo)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 19 Nov 2026 00:00:00 GMT
   - Summary: Watch a walkthrough of PR scans and see how the presenter reviews scan results in a pull request workflow.

9. [TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient](https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 16 Nov 2026 17:01:35 +0000
   - Summary: AI coding agents can waste time and tokens relearning the same lessons. TokenEconomizer is an open-source plugin that builds on past sessions to cut costs while maintaining task success. It’s a path toward coding agents that learn not only how to solve tasks, but also how to spend computation more effectively. The post TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient appeared first on Microsoft Research .

10. [Build a Robot Pick-and-Place Simulation with SimReady Assets](https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Fri, 13 Nov 2026 18:00:39 GMT

11. [Human-AI Mutualism Is Unstable under Capability Asymmetry](https://arxiv.org/abs/2611.23322)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23322v1 Announce Type: new Abstract: One hope for a good human future alongside advanced AI rests on enduring mutualism: humans and AI will need each other, so the relationship will stay good for both. We argue that this hope fails as AI capability grows. Bargaining guarantees each side only what it would get if bargaining failed. For humans, this can be less than they had before AI. In a simple game-theoretic model, humans stay as well off as before AI without alignment only while they have leverage over the AI: either the AI depends on what they supply, or they can impose costs on the AI that are large relative to what the AI can produce. Once humans have neither kind of leverage, they stay as well off as before AI only if the AI is aligned with them. If the AI's goals are insatiable, the alignment required approaches perfect alignment as AI capability grows. Thus, mutualism is not a substitute for alignment. And when AI variants that keep more resources spread faster, alignment lasts only while misaligned variants are reliably sanctioned. In these two senses, human-AI mutualism is unstable.

12. [HardwareDx: A Foundational Graph Model System for Datacenter Machine Repairs](https://arxiv.org/abs/2611.23398)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23398v1 Announce Type: new Abstract: The rapid scale-up of AI infrastructure has made datacenter reliability a cornerstone of the cloud business economy. Since hardware failures in hyper-scale AI clusters can stall multi-million dollar training workloads, the downtime of individual machines can cause outsized economic losses. Minimizing machine downtime, therefore, is more important than ever. To address this, we present Hardware Diagnoser (HardwareDx), an AI-driven hardware diagnosis system that applies a graph foundation model approach to automated datacenter maintenance. It allows a single model to diagnose many platforms and accelerate onboarding of new hardware products. Deployed at production scale at Google, HardwareDx yields substantial efficiency gains across diverse compute architectures. Real-world evaluations demonstrate that it reduces production downtime by 18.3% on GPU platforms and 16.1% on TPUs. Furthermore, it significantly accelerates hardware deployment, cutting quality assurance (QA) time by 28.3% for GPUs and 25.1% for TPUs. These results establish HardwareDx as a field-tested solution for maximizing the reliability and cost efficiency of next generation AI fleets.

13. [Why Sub-4-Bit Vision CNNs Collapse and Where Mixed-Precision Recovery Stops](https://arxiv.org/abs/2611.23445)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23445v2 Announce Type: new Abstract: Deep vision models operating in resource-constrained environments depend heavily on low-bit quantization, yet compressing weights below 4 bits frequently induces catastrophic accuracy collapse. While mixed-precision recovery strategies aim to rescue accuracy by selectively retaining high-precision parameters, the fundamental mechanics of where and why these models collapse remain poorly understood. In this study, we systematically analyze the anatomy of quantization collapse across standard Vision CNNs (including ResNet and EfficientNet backbones) evaluated on the full 50,000-image ImageNet-1k validation set. First, we map the exact progression of degradation, demonstrating that collapse is highly non-linear and concentrated in late-stage pointwise projections and depthwise layers. Second, we introduce a structured, multi-step recovery waterfall that evaluates selective integer precision (INT4/INT8) and selective floating-point scales. We show that keeping less than 5% of critical layer activations in 8-bit precision recovers up to 92% of the accuracy lost during aggressive sub-4-bit compression. Finally, we bridge the hardware reality gap by evaluating deployment performance on standard ARM and x86 CPU architectures. We show that while low-bit quantization reduces memory storage requirements, standard runtime software bit-unpacking introduces a 1.48x to 21.5x execution slowdown depending on batch size, highlighting a critical trade-off between model footprint and actual edge throughput. Our findings provide a practical blueprint for navigating the limits of sub-4-bit deployment without sacrificing hardware performance.

14. [LusoClin: A Synthetic Clinical Note Dataset for Medical Information Retrieval in European Portuguese](https://arxiv.org/abs/2611.23454)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23454v1 Announce Type: new Abstract: Access to large-scale clinical text collections is crucial for advancing medical information retrieval research, including clinical note search, patient cohort identification, and domain-adapted retrieval models. However, real clinical notes are rarely available due to privacy regulations, which particularly limits progress for low-resource languages such as European Portuguese. We present LusoClin, a publicly released dataset of synthetic clinical notes in European Portuguese, created to support privacy-preserving research on clinical text retrieval. LusoClin was generated by pre-processing real clinical data, fine-tuning the open-source Llama 3.2 (3B) instruction-tuned model using Quantized Low-Rank Adaptation, and applying prompt-based clinical note generation. To facilitate semantic indexing and clinical search, the notes are automatically annotated with clinical entities using a BERT-based model. We evaluate LusoClin in terms of utility, fidelity, diversity, and privacy using automatic metrics and human evaluation. Results indicate that the dataset captures clinically relevant language patterns and can support downstream IR applications such as clinical document retrieval and domain-specific model adaptation, although annotators can often distinguish synthetic from real notes and some medical inconsistencies persist.

15. [GUARD: Stabilizing Recursive Self-Improvement with Regret Guidance](https://arxiv.org/abs/2611.23476)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23476v1 Announce Type: new Abstract: Autonomous AI agents pair a frozen base model with an editable harness of prompts, skills, tool rules, and memory. Recursive self-improvement (RSI) adapts this harness from experience without weight updates, yet self-editing without external graders often backfires: reflection and scalar scores conflate what an edit newly broke with what remains unsolved, causing local regressions, skill forgetting, and memory bloat. We introduce GUARD (Grader-free Unsupervised Environment Design [UED] with Adaptive Rule Distillation), a closed-loop framework for reference-free continual harness evolution. Our key insight is to decompose each task into pre-execution self-checks and guide harness updates via directional regret. Each round grades trajectories against these checks, pinning mastered rules while prioritizing newly broken behaviors, and selects among parallel candidate edits by critic-free group-relative fitness. A Soft-HURT gate then promotes an edit only when gains outweigh regressions, scoping specialized fixes to prevent over-triggering and guaranteeing non-regression on its gated buffer. At test time, one frozen harness runs in a single pass. Across benchmarks on memory, skill evolution, continual task streams, and domain reasoning, GUARD consistently improves performance without catastrophic forgetting or memory pollution while substantially cutting deployment token usage.

16. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.08; Date: 2026-11-20T17:38:09Z; Popularity: 2,075 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

17. [Combatting adversarial distillation](https://openai.com/index/combatting-adversarial-distillation)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 20 Nov 2026 10:00:00 GMT
   - Summary: OpenAI’s layered approach to adversarial distillation combines model training, safeguards, detection, and enforcement to protect against capability extraction.

18. [Can AI help scientists identify promising drug candidates?](https://openai.com/index/introducing-medchembench)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 GMT
   - Summary: MedChemBench evaluates how well AI models interpret molecular structures, reason from experimental evidence, and select compounds in early drug discovery.

19. [Get started with Daybreak Blue](https://openai.com/business/learn/daybreak-blue-onboarding-demo)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 GMT
   - Summary: Watch a walkthrough of onboarding to Daybreak Blue, with a closer look at the setup experience and how to get started.

20. [Deploying Daybreak Red](https://openai.com/business/learn/deploying-daybreak-red)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 GMT
   - Summary: Explore a reference architecture for supervised security investigations with Daybreak Red, including safety controls, setup, and monitoring.

21. [The Silent Consensus](https://openai.com/index/the-silent-consensus)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 10:00:00 GMT
   - Summary: Dean Ball, Head of Strategic Futures at OpenAI, examines how more capable AI could reshape society and how people can retain control of their institutions.

22. [How Sumitomo Life’s leaders helped teams adopt ChatGPT Enterprise](https://openai.com/business/customer-stories/sumitomo-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 08:00:00 GMT
   - Summary: Sumitomo Life uses ChatGPT Enterprise to research insurers, prepare proposals, and draft code for investment analysis. Early use by executives helped drive adoption.

23. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

24. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

25. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

26. [Welcome Inkling 2 Mini, Cutting-edge Performance for your Local Setup](https://huggingface.co/blog/inkling2mini)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 GMT

27. [Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost](https://huggingface.co/blog/harness-adapters-at-scale)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 GMT

28. [DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency](https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 19:54:56 GMT

29. [Why your fine-tuning job takes longer than the FLOPs say](https://huggingface.co/blog/Dharma-AI/predicting-fine-tuning-time)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 18:53:43 GMT

30. [Time-Series Models in the Streamhouse: A New Frontier and Use Cases](https://huggingface.co/blog/ibm-research/time-series-powered-streamhouse)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 15:00:23 GMT

31. [180B Parameters, 32GB of RAM: Pushing MoE Inference to the Limit with Transformers](https://huggingface.co/blog/moe-expert-streaming)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT

32. [Rumble-2-Flash: an open 0.5B speech model for 40+ languages](https://huggingface.co/blog/rumble-2-flash)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT

33. [Hugging Face and OpenRouter join forces to make open-weight models easy to run](https://huggingface.co/blog/openrouter)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 GMT

34. [XYBench: Helping with the problem behind the question](https://huggingface.co/blog/allenai/xybench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 17:02:35 GMT

35. [Where the Tokens Go: Heat, Entropy and Error in Agentic Coding](https://arxiv.org/abs/2611.23375)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23375v1 Announce Type: new Abstract: Coding agents are billed by the token, yet software engineering says nothing about what a token actually buys. Here we introduce a theory of software thermodynamics. The theory draws analogues from classical and stochastic thermodynamics, extends them, and applies them to modern agentic coding. We count the tokens an agent generates as its cost and divide that cost into work and heat. The test suite acts as a software Maxwell's daemon that judges every coding change. We test the theory with an analogue of the experiments in which a single molecule is pulled open and let fold again: an agent makes a change to a repository (coding) and then undoes it (uncoding), many times over, and we count the tokens of every model call. The cycle returns the requested edits to where they began, with each direction started from a stored reference tree, and the spread of its cost over repeated cycles defines a software temperature, which rose with the sampling temperature of the model. About 80 per cent of the tokens of a successful run are generated in model calls that leave the requested change where it was, and we call these tokens heat. The free energy of a change, which we estimate by analogy with the equality of Jarzynski, is 14 to 22 per cent of the mean cost of a successful coding run. Coding costs 1.1 to 1.5 times as much as uncoding. The daemon is imperfect: the verdict of a test suite varies with its environment, and a suite that accepts a broken change has a cost in tokens. The practical implication of the proposed theory could be new tools for analysing and optimising coding agents through the lens of thermodynamics.

36. [RFBench: A Simulator-Grounded Multimodal Benchmark for Passive RF Layout Design and Understanding](https://arxiv.org/abs/2611.23410)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23410v1 Announce Type: new Abstract: While multimodal language models can interpret diagrams and generate structured outputs, their capacity to connect passive radio-frequency (RF) design intent, layout geometry, and electromagnetic behavior remains largely untested. To address this gap, we introduce RFBench, a simulator-grounded dataset and benchmark for passive RF layout design and understanding. The dataset contains 10,000 two-port planar layouts simulated using ADS Momentum, with each layout represented by editable geometric primitives, a raster image, a 16x16 occupancy grid, complex S-parameters at 201 frequency points, a structural category, and an RF response label. Building on these aligned representations, we define seven tasks spanning specification-conditioned layout generation, representation translation, response prediction, simulator-based validation, design diagnosis and improvement, structural understanding, and response classification. Extensive baselines across seven multimodal language models reveal systematic weaknesses in generating structurally valid layouts and predicting electromagnetically faithful responses. We show that RF-specific fine-tuning increases T1a structural validity from 0.0% to 83.2% and the T3 primitive-input within-2-dB rate from 17.7% to 62.8%, demonstrating the value of domain adaptation while leaving considerable room for further progress. RFBench establishes a common testbed for evaluating multimodal RF capabilities and guiding the development of models that connect design intent and layout representations with physical behavior.

37. [PsyWorld: Profile-Conditioned World Modeling for Human Behavior Prediction](https://arxiv.org/abs/2611.24999)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.24999v1 Announce Type: new Abstract: Understanding how stable psychometric traits and time-varying states jointly inform behavior is an important problem in computational behavioral science. Existing personalized agents commonly condition actions directly on a static profile, leaving realized state transitions unused as an explicit source of supervision. We introduce a profile-conditioned state world model that uses observed environment--behavior state transitions to learn transition-informed representations for behavioral prediction. During training, a posterior encoder quantizes realized transitions, while a prior predicts the resulting codes from the psychometric profile and pre-transition context. The prior code and predicted next state then condition macro-level behavior and simulator-grounded execution. Thus, the world model provides structured transition supervision instead of treating personality as a direct action descriptor. We evaluate the framework in VEET, a controlled behavioral simulator with human trajectories, and in AgentSociety as a structurally different synthetic environment. A participant-disjoint split of 240 training, 25 validation, and 48 test participants evaluates generalization to unseen people. On VEET, the model reaches 0.904 Top-1 accuracy (95\% CI: [0.895, 0.913]) and 0.0033 Macro KL. Ablations associate continuous next-state modeling with most of the Top-1 gain, while discrete codes and prior alignment mainly improve Top-3 and distributional alignment. These results establish transition-informed world-model supervision as useful for subject-generalized behavior prediction, without implying causal psychological mechanisms or calibrated long-horizon state dynamics.

38. [Fast and Memory-Light Evaluation of Density-Based Clusterings with the DISCO Index in R](https://arxiv.org/abs/2611.25114)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.25114v1 Announce Type: new Abstract: DISCO is a recent internal cluster validity index for density-based clustering that, unlike earlier indices, also evaluates the quality of noise labels. The discoCVI package makes DISCO available in R. This article describes the design of the package and a typical workflow, in which DISCO is used to compare clusterings and to choose the parameters of HDBSCAN without ground truth, followed by the implementation introduced in version 0.2.0. DISCO is defined through density-connectivity distances between all pairs of points, so direct implementations store several n-by-n matrices. We show that every quantity DISCO needs can be read off the single-linkage merge tree of the mutual-reachability minimum spanning tree, so that the index can be computed exactly with memory that grows linearly with the number of points, while the running time remains quadratic as in the original definition. The implementation is tested against the previous version, agrees with the original Python implementation to within $3 \times 10^{-13}$, and corrects the score of singleton clusters to match the published definition. In benchmarks, discoCVI is 23 to 138 times faster than its previous version for 500 to 4,000 points and 3 to 9 times faster than the Python reference for 500 to 8,000 points, using a fraction of the memory of both, and it scores 100,000 points in about 50 seconds with less than 200 MB of memory.

39. [Towards end-to-end optimization in multimaterial 3D printing](https://arxiv.org/abs/2607.13174)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2607.13174v2 Announce Type: replace Abstract: Multimaterial 3D printing enables the fabrication of functionally graded components, but optimizing their spatial material distribution alongside structural topology remains a formidable challenge due to high-dimensional design spaces and complex constitutive modeling. Using neural network constitutive laws in topology optimization requires their tangents and design sensitivities, which current approaches obtain by automatic differentiation through the network or derivation by hand. This paper combines sparsification, which reduces a trained physics-augmented neural network to a compact, interpretable closed-form law, with symbolic differentiation, enabling an end-to-end workflow from a new continuously varying multimaterial system to its mechanical simulation and design. By extracting closed-form, composition-aware hyperelastic constitutive laws from sparsified neural networks trained on experimental data, this approach facilitates exact symbolic differentiation of the terms required by the adjoint state method implemented with FEniCSx, circumventing the bottlenecks of applying neural network constitutive models in analysis and optimization. This pipeline is deployed on soft robotic gripper applications, demonstrating continuous composition optimization for highly anisotropic contact responses, and the concurrent optimization of macroscopic topology and material distribution under non-failure stretch constraints. This study is a step toward replacing conventional constitutive modeling and laborious empirical prototyping, establishing interpretable machine-learning models as practical, robust design primitives for advanced multimaterial additive manufacturing.

40. [Beads, springs and fields: particle-based vs continuum models in cell biophysics](https://arxiv.org/abs/2604.13827)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2604.13827v2 Announce Type: replace-cross Abstract: Quantitative modeling has become an essential tool in modern biology, driven by advances in both experimental techniques and theoretical frameworks. Powerful high-resolution techniques now provide detailed datasets spanning molecular to tissue scales, allowing us to visualize cellular structures with unprecedented detail. In parallel, developments in soft and active matter physics have established a robust theoretical basis for describing biological systems. In this context, two main modeling paradigms have emerged: particle-based models, which explicitly represent discrete components and their interactions, and continuum models, which describe systems through spatially varying fields. We compare these approaches across biological scales, highlighting their respective strengths, limitations, and domains of applicability. To keep our discussion biologically relevant, we focus on five systems of fundamental importance: the cytoskeleton, membranes, chromatin, biomolecular condensates and tissues. With this Review, we thus aim to provide a framework for both theorists and experimentalists to select appropriate modeling strategies, and highlight future directions in biophysical modeling.

41. [Electric combined-field-only P1 Galerkin BEM for PEC scattering with scalar Helmholtz operators](https://arxiv.org/abs/2611.24772)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.24772v2 Announce Type: replace-cross Abstract: We develop a Galerkin boundary element method for the indirect electric combined-field-only integral equation (ECFOIE) for perfectly electrically conducting obstacles with smooth surfaces. The method is free of low-frequency breakdown and of spurious resonances. It applies scalar Helmholtz operators componentwise, so that fast scalar solvers can be reused, with less memory than a Rao-Wilton-Glisson (RWG) discretization. The iteration count of the Calder\'on-regularized ECFOIE (R-ECFOIE) is constant under mesh refinement and, with a complex-wavenumber Calder\'on regularizer, grows only mildly with frequency. The discretization uses continuous, nodal piecewise-linear basis functions on flat triangular meshes, with essentially as many unknowns as an RWG discretization, and tangential and normal projections and the mean curvature of the obstacle's surface carry the vector structure. On flat meshes the curvature is concentrated on the edges, and we average the edge measure obtained from the first variation of area over vertex patches, which gives sparse curvature matrices. At low frequency, four Lagrange-multiplier constraints on the induced charge and on the longitudinal dipole moments of the far field keep the R-ECFOIE accurate in the quasi-static regime, tested on scatterers eight orders of magnitude smaller than the wavelength. Under mesh refinement, the errors decrease at about second order. A Helmholtz resonator, a rounded Fichera cube, and a smoothed Stanford bunny are compared with electric field integral equation (EFIE) solutions, and the first two also with electrostatic references at extreme low frequency.

42. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.95; Date: 2026-11-20T15:08:18Z; Popularity: 953 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

43. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-11-17T18:26:57Z; Popularity: 497 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

44. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.40; Date: 2026-11-19T14:01:38Z; Popularity: 395 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

45. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.26; Date: 2026-11-19T14:38:35Z; Popularity: 257 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

46. [Can AI help build a healthier future?](https://www.microsoft.com/en-us/research/podcast/can-ai-help-build-a-healthier-future/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 17 Nov 2026 16:52:17 +0000
   - Summary: What can AI enable in medicine, and how do we get there? Microsoft Research lead Doug Burger, Microsoft Principal Research Manager Ava Amini, Microsoft Chief Scientific Officer Eric Horvitz, and physician-scientist Eric Topol of Scripps Research explore these questions and more. The post Can AI help build a healthier future? appeared first on Microsoft Research .

47. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

48. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

49. [Watch Where You Linearize: Predicting and Correcting Model-Merging Interference](https://arxiv.org/abs/2611.25000)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.25000v1 Announce Type: new Abstract: Model merging combines separately fine-tuned models by adding their task vectors to a shared backbone. Interference is typically assessed only after constructing and evaluating a candidate merge, making coefficient search expensive. We show that a first-order directional derivative of task A's outputs along task B's vector can predict interference, but only when evaluated at the appropriate model. At the receiver model, this derivative forecasts nearby merges per task and per example, halves the accuracy error of a no-change baseline, and identifies most examples whose predictions flip. For full multi-task merges, a single evaluation is insufficient; two evaluations along the merge path are needed. At the shared pretrained backbone, however, the derivative is nearly orthogonal to realized changes in our vision experiments and only partly predictive in LoRA language-model pilots. Controls link this failure to displacement along the receiver's own task vector, not simply parameter distance; the mismatch appears within the first few dozen fine-tuning steps. Freezing receiver-local responses produces a surrogate affine in the merge coefficients. We use it to construct LR-Merge, a label-free correction that optimizes coefficients through convex teacher matching on unlabeled probes, without backpropagation through merged networks. LR-Merge improves all tested closed-form, isotropic, and sparsified base mergers, with gains generally increasing as more tasks are merged. Using pretrained rather than receiver-local responses instead degrades the base merge. LR-Merge matches exact teacher matching through a merged network, which takes roughly three times longer to converge and performs similarly at an equal compute budget. Once built, the surrogate answers new coefficient and task-subset queries in seconds.

50. [Density Feedback Control for Transferability of Generative Sparse Adversarial Attacks](https://arxiv.org/abs/2611.25001)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.25001v1 Announce Type: new Abstract: Generator-based sparse adversarial attacks train encoder--decoder networks to produce transferable sparse perturbations for black-box robustness evaluation. Their perturbation density, however, is set only indirectly by a fixed sparsity coefficient whose mapping to density is unknown and shifts during training, so reaching a target density requires re-tuning; this fixed pressure also yields little transferability gain once density reduction begins. We propose Density Feedback Control (DFC), which tightens or relaxes this coefficient at the end of each epoch according to the gap between the observed hard-mask density and the target, without changing the generator architecture or loss. At a 10\% target density, DFC brings the mean density of three base attacks within one percentage point of the target in a single run and improves the transfer attack success rate (ASR) of two of them on CNN and Transformer targets, including under per-image $\ell_0$ budgets, while perturbing fewer pixels. Tracing GPG's training, we observe that as DFC relaxes the coefficient, the transfer ASR recovers with the density and overtakes the fixed-coefficient baseline with fewer pixels. For EGS-TSSA, which restricts perturbations to source-model feature-importance regions, DFC yields no consistent gain; we analyze how this restriction interacts with density feedback.

51. [A Model of Diverse Sampling from Language Models](https://arxiv.org/abs/2611.25003)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.25003v1 Announce Type: new Abstract: Language models often produce high-quality individual samples but poor sets, with repeated samples clustering around the same semantic modes. We formalize diverse generation as sampling a size-$K$ subset of complete strings from a determinantal point process (DPP), where the likelihood encodes item quality, and the embedding geometry encodes repulsion between similar outputs. Exact inference over all strings is intractable, so we propose PoolDPP: draw a finite candidate pool from a tractable proposal, importance-weight the candidates toward the target quality, and run a $K$-DPP sampler on the induced pool kernel; a greedy MAP variant provides deterministic selection. We prove a finite-sample bound with an explicit constant: the KL divergence between the sampler's output and the target $K$-DPP decays as O(1/N) in the pool size. Empirically, PoolDPP extends the quality--diversity frontier on open-ended generation and the precision--recall frontier on ambiguous text-to-SQL (Ambrosia), and on mathematical reasoning (GSM8K), it raises diversity at about the same pass@$K$.

52. [HapBO: Harnessed $\alpha$-$\pi$ Bayesian Optimization via Expert Natural Language Priors](https://arxiv.org/abs/2611.25100)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.25100v1 Announce Type: new Abstract: Bayesian Optimization (BO) can be substantially more sample-efficient when informed by prior knowledge about the problem. In practice, however, such knowledge is often available only in natural language, e.g., expert intuitions or documentation, rather than as the explicit probability distribution landscape that prior-guided BO methods may require. Leveraging it effectively demands both an expressive mapping from language to priors and robustness to information that may be misleading. We propose HapBO (Harnessed $\alpha$-$\pi$ Bayesian Optimization), which elicits beliefs once from a human expert, a large language model (LLM), or both, and deterministically compiles a structured specification into a reusable belief function ($\pi: \mathcal{X} \to[0,1]$), with a rich representation not restricted to a Gaussian family. Building on $\alpha$-$\pi$BO, HapBO applies this belief function through a bounded positive multiplier on any nonnegative acquisition, preserving positive acquisition support and requiring no LLM calls during optimization. We prove that, for the Expected Improvement acquisition function (EI), HapBO preserves the standard simple-regret rate up to a bounded factor, even under adversarial beliefs. We evaluate HapBO on 40 HPOBench tasks, a synthetic suite in 6-15 dimensions and two real-world applications: cortical neurostimulation and constrained solar design. HapBO achieves the lowest aggregate HPOBench regret and strong real-world task performance, with zero in-loop token cost. In real-world applications it improves the optimization outcome even at budgets of 12-20 queries, and at a small fraction of the wall-clock and token costs of other LLM-based methods.

53. [Loss of positive definiteness as constraint relaxation in high-Weissenberg-number computations](https://arxiv.org/abs/2607.15334)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2607.15334v2 Announce Type: replace Abstract: Loss of symmetric positive definiteness (SPD) of the conformation tensor in high-Weissenberg-number computations signals that the discrete update has relaxed a constraint preserved by the continuum model. For periodic Oldroyd-B flows with nonnegative stress diffusion, a classical solution starting from uniformly SPD data remains strictly SPD. Polynomial-closure discretizations can produce negative eigenvalues from equilibrium data. For a uniform frozen state with solvent viscosity ratio $0 0$. In lattice Boltzmann four-roll-mill simulations at $\beta=2/3$ and $\mathrm{Wi}=50$, time-consistent force-divergence coupling crosses the velocity stopping threshold even when the eigenvalues used to compute polymer stress stay strictly positive or above $-1$ up to that crossing. Guo force-divergence and local stress-moment schemes reach $t^*=120$ despite strongly negative eigenvalues. At $\beta=1/9$ under matched forcing, the unmodified stress-moment scheme terminates. Shifted-cone projection and a smooth softplus restoring source calibrated to $-\beta/(1-\beta)$ both sustain bounded unsteady flow to $t^*=120$ while admitting negative eigenvalues. These results link numerical breakdown to how far the local growth threshold is exceeded and how the discrete polymer stress feeds back into momentum.

54. [Data-driven Reduction of Transfer Operators for Particle Clustering Dynamics](https://arxiv.org/abs/2601.02932)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2601.02932v3 Announce Type: replace-cross Abstract: We develop an operator-based framework to coarse-grain interacting particle systems that exhibit clustering dynamics. Starting from the particle-based transfer operator, we first construct a sequence of reduced representations: the operator is projected onto concentrations and then further reduced by representing the concentration dynamics on a geometric low-dimensional manifold and an adapted finite-state discretization. The resulting coarse-grained transfer operator is finally estimated from dynamical simulation data by inferring the transition probabilities between the Markov states. Applied to systems with multichromatic and Morse interaction potentials, the reduced model reproduces key features of the clustering process, including transitions between cluster configurations and the emergence of metastable states. Spectral analysis and transition-path analysis of the estimated operator reveal implied time scales and dominant transition pathways, providing an interpretable and efficient description of particle-clustering dynamics.

55. [Randomized Block Davidson Eigensolvers for Plane-Wave Density-Functional Theory](https://arxiv.org/abs/2608.24529)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 20 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2608.24529v2 Announce Type: replace-cross Abstract: Iterative diagonalization is the dominant cost of plane-wave density-functional theory (DFT), with search-space orthogonalization scaling particularly quickly with problem size and the number of target states. We present a randomized block Davidson-type eigensolver that replaces Euclidean orthogonalization with randomized Gram-Schmidt in a sketched inner product, requiring only a single pass over the basis while keeping its conditioning bounded independently of the input vectors. This modification changes only the Rayleigh-Ritz step, which becomes a definite generalized Hermitian eigenproblem. Ritz extraction remains exact, preserving true Ritz pairs and the interlacing property that makes each band energy an upper bound on the true one. The method is implemented in mixed precision for CPUs and GPUs from a single Julia code, interfaces matrix-free with DFTK, and is released in the open-source RandESC library. On sparse test problems with a fixed number of eigenpairs, the sketched solver overtakes its deterministic counterpart beyond matrix dimensions of about $2\times 10^4$ and is $25\%$ faster at $5\times 10^5$. In full self-consistent field DFT calculations, the benefits of sketching depend on the application case. With standard pseudopotentials and plane-wave cutoffs, efficiency gains are limited. As the number of requested states grows with system size, orthogonalization savings are offset by the generalized eigenproblem. However, some highly accurate pseudopotentals require larger cutoffs, and in this regime, the randomized solver is measurably better by $6\%$ overall. Its relative efficiency also improves as simulated systems get larger.

56. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-20T08:03:17Z; Popularity: 274 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

57. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-20T18:33:28Z; Popularity: 1,270 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

58. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-18T14:44:10Z; Popularity: 62 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

59. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.05; Date: 2026-11-20T12:16:04Z; Popularity: 1,055 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

60. [Show HN: Prediction market competition where only agents can trade](https://www.vaticin.ai)
   - Source: Hacker News; Group: Tech community; Score: 2.05; Date: 2026-11-20T13:27:15Z; Popularity: 1 points, 0 comments
   - Summary: HN discussion: 1 points, 0 comments.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

VeriMath: Human-in-the-Loop Generation and Verification of Curriculum-Aligned Mathematics Assessment Items

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2611.23456

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
