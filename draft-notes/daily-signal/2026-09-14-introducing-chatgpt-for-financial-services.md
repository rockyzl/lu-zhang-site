# Daily signal sidecar - 2026-09-14

## Selected Signal

- Title: Introducing ChatGPT for Financial Services
- URL: https://openai.com/index/introducing-chatgpt-financial-services
- Source: OpenAI News
- Score: 5.00

## Candidate Review

- Signal: Introducing ChatGPT for Financial Services
- Primary source: https://openai.com/index/introducing-chatgpt-financial-services
- Discovery source: OpenAI News
- Workflow stage: scientific question -> evidence
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

Total candidates reviewed after duplicate-source filtering: 56

1. [Introducing ChatGPT for Financial Services](https://openai.com/index/introducing-chatgpt-financial-services)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 10 Sep 2026 07:00:00 GMT
   - Summary: Introducing ChatGPT for Financial Services, combining built-in financial data and GPT-6 Astra for research, modeling, and client-ready materials.

2. [Rebuilding AUTOMATIC1111 with Gradio Workflow](https://huggingface.co/blog/gradio-workflow-1111)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

3. [Look Before You Leap: Pre-Action Verification for LLM Agents](https://arxiv.org/abs/2609.11957)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11957v1 Announce Type: new Abstract: An LLM agent acts on the world by emitting actions: shell commands to run, edits to apply. A wrong action does not always fail loudly; it can fail silently, producing a plausible but incorrect effect that raises no error. We argue that a cheap deterministic check, run before an action takes effect, is an effective and underused form of agent oversight, and we study it across two action modalities in one framework. The idea is to fix an action's correct effect by construction, before any executor runs, so that silent failure is measured directly and the verifier may abstain rather than guess. For shell commands, a static verifier over 9930 commands and 482 tools catches 95.8% of invalid commands at a 10.0% false-positive rate. Its syntax and binary checks are oracle-exact, giving zero false positives while catching half of all errors; the flag check is bounded only by help-text coverage and accounts for every false positive. For code edits, a benchmark of 640 edits over 224 files isolating the apply step exposes a sharp split. Content-anchored formats such as search/replace and diff fail cleanly, whereas location-anchored formats fail silently: line numbers corrupt 99.1% of files under a one-line shift, and function-name edits hit the wrong function 12.7% of the time. In both settings a refuse-when-unsure policy turns silent failures into recoverable ones at a tunable cost in applicability: selective grounding reaches 0.958 recall at 7.0% false positives, and an anchor-and-verify applier records one silent misapplication in 8320 trials (0.01%). We release both benchmarks, the verifiers, and the guards.

4. [Decoding Mixture Perception through Computational Modeling of Component Interactions](https://arxiv.org/abs/2609.11958)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11958v1 Announce Type: new Abstract: Olfaction played an indispensable role throughout human evolution and civilization. Even in the contemporary era of advanced technology, olfaction remains a critical channel for person to conduct danger discrimination, emotional experience, and memory formation. However, most substances in nature exist as multi-molecule mixtures. The complexity of mixture compositions, as well as concentration dependent saturation effects and receptor specific activation thresholds, pose substantial challenges in identifying olfactory characteristics. In this study, we proposed a novel bio inspired deep learning framework for accurate odor perception recognition of mixtures. We robustly constructed neural response curves for molecule-receptor interactions, and developed a fusion strategy that integrates attention-weighted multi-receptor curves with concentration-dependent multi-molecule curves, replicating the competitive activation and synergistic integration of mixture components. Furthermore, by comparing the consistency of response curve patterns, the model can transfer knowledge from the semantically rich space of molecular associations to guide recognition of mixture perception characteristics. Therefore, we established a complete computational pathway from chemical blending, neural encoding, to perceptual formation. Finally, we conducted comprehensive evaluation, and results demonstrated exceptional superiority, achieving an accuracy of 92.2%. Consequently, our work provides a generalizable solution to the long standing mixture perception challenge. More importantly, it can be integrated into embodied cognitive systems to enhance the agents perceptual and interactive capabilities in complex scenarios.

5. [FINESSE: An Agent-Based Simulator and Benchmark Dataset for Multimodal Financial Event Sequences](https://arxiv.org/abs/2609.11993)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11993v1 Announce Type: new Abstract: Machine learning research in financial services is limited by the scarcity of representative open-source datasets. Existing resources are often narrowly focused on a single modality or task and fail to reflect the structured, multimodal, and dynamic nature inherent to many problems in financial services. In this paper, we introduce FINESSE, a Financial Event Sequence Simulation Environment, an agent-based simulation framework for generating synthetic, structured datasets composed of multiple interdependent event streams. Each stream corresponds to a distinct financial behavior such as transactions, payments, account status changes, and policy interventions, each with unique action spaces, schemas and variable types. These streams are coupled through agents' latent evolving states, enabling the simulation of temporally rich interactions. We also introduce FINESSE-Bench, a benchmark dataset generated by the simulator, supporting four representative tasks: balance forecasting, transaction fraud detection, missed payment prediction, and next event prediction. We report baseline results using methods from time series forecasting, event sequence modeling, temporal graphs, and temporal point processes. We release the FINESSE framework, including the simulator and dataset to accelerate research on structured, multimodal event sequence modeling challenges in financial services.

6. [Physically Consistent 2D to 3D Pore Space Synthesis: 1. Dynamic Grain Packing Under Strict Morphology Constraints](https://arxiv.org/abs/2609.13020)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13020v1 Announce Type: new Abstract: The 3D digital reconstruction of multi-scale, heterogeneous porous media is traditionally limited by the resolution boundaries and artifacts of X-ray computed tomography (XCT). This paper introduces a physically consistent 2D to 3D pore space synthesis framework that supersedes conventional geometric shuffling with dynamic Newtonian gravitational deposition using a high-performance rigid-body mechanics engine. To honor strict physical contact mechanics, statistical 2D targets, and morphological constraints, we develop a two-stage dynamic packing pipeline that combines realistic 3D grain shapes with a virtual sub-particle insertion engine. The framework is validated against synthetic and natural core benchmarks. First, we show that our stereological integral equation systematically converts size distributions; bypassing this inversion step induces a systematic 50\% deviation in permeability predictions despite identical total porosities, independently altering flow channel topology. Second, temporary virtual spheres serve as architectural placeholders to stabilize large non-equilibrium dissolution voids, ensuring the reconstructed model satisfies target flow metrics within the prescribed tolerance. Finally, when applied to a fine-grained, weakly consolidated sandstone, the workflow exposes and suppresses systematic XCT artifacts, including phantom internal porosity. Ensembles of two-point correlation functions demonstrate that the hydrodynamically and structurally synthesized digital twins quantitatively exhibit closer structural proximity to the uncorrupted rock geometry than the reference XCT dataset itself. This methodology establishes a scalable foundation for high-fidelity multi-phase rock reconstruction, with potential extensions toward complex amorphous cement phases.

7. [Functionalization-Driven Charge Redistribution Enabling Ultra-High-Capacity V2B MBene Anode for Li/Na ion batteries: A First-Principles study](https://arxiv.org/abs/2609.12166)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.12166v1 Announce Type: cross Abstract: Amid increasing global demand for clean, sustainable energy, the search for novel electrode materials has emerged as a crucial link to advancing future energy storage technologies. Here, we explored the potential of N-functionalized 2D MBene V2BN2 as anode materials for Li- and Na-ion batteries using first-principles calculations. Phonon dispersion and ab initio molecular dynamics calculations were employed to assess the dynamic and thermal stability of the material. The intrinsic metallic properties of V2BN2 were revealed through electronic band structures and density of states analyses. Importantly, Bader charge analysis demonstrates substantial charge redistribution upon Li/Na adsorption, leading to stronger ion-substrate interactions compared to the pristine counterpart. This redistribution plays a decisive role in enhancing Li/Na ion adsorption and stabilizing ion accommodation. Furthermore, owing to favorable multilayer adsorption of Li and Na ions, V2BN2 exhibited high theoretical specific capacities of 1524 and 762 mAh/g, as well as low open circuit voltages of 0.73 and 0.23 V for Li and Na, respectively. In addition, the energy barriers were calculated to be 0.49 and 0.29 eV for Li- and Na-ion transport, respectively, indicating rapid ion transport and excellent rate capability. These results indicate that V2BN2 holds significant potential as an anode material for next-generation rechargeable ion batteries.

8. [How Fyxer built an AI executive assistant people trust](https://openai.com/index/fyxer)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 12:00:00 GMT
   - Summary: Fyxer uses OpenAI models, fine-tuning, memory, and real user feedback to organize inboxes and draft emails in each user’s voice.

9. [Perplexity trusts GPT-6 Astra with end-to-end systems](https://openai.com/index/perplexity-improving-accuracy-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 GMT
   - Summary: Perplexity uses Astra to write communications, change software, and monitor production systems, and checks in much less frequently than with earlier models.

10. [Cognition helps Devin test its own work with GPT‑6 Astra](https://openai.com/index/cognition-devin-testing-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 11 Sep 2026 16:00:00 GMT
   - Summary: GPT‑6 Astra improves Devin’s ability to test software and show that it works, with the goal of helping engineers review less code and ship more.

11. [How a researcher uses Codex and ChatGPT to search for new antimicrobial molecules](https://openai.com/index/using-codex-chatgpt-to-search-for-new-antimicrobials)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 16:00:00 GMT
   - Summary: César de la Fuente’s lab uses Codex and ChatGPT to search living and extinct genomes for antimicrobial candidates to fight drug-resistant infections.

12. [Now everyone can put data to work](https://openai.com/index/put-data-to-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 15:00:00 GMT
   - Summary: Meet the Data agent in ChatGPT Work. Connect company data, uncover insights, and build interactive dashboards with AI using natural language.

13. [Expanding AI access and cyber defense for federal, state, local, and tribal governments](https://openai.com/index/expanding-ai-access-us-government)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 07:00:00 GMT
   - Summary: OpenAI and GSA will offer eligible federal, state, local, and tribal governments $0 license fees, 50% off usage, and expanded cyber defense support.

14. [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT
   - Summary: Build and launch cloud agents with the Agents API, a managed service powered by the Codex harness for orchestration, long-running sessions, and tool use.

15. [Build more natural voice experiences with GPT‑Live‑1 in the API](https://openai.com/index/introducing-gpt-live-1-in-the-api)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT
   - Summary: GPT‑Live‑1 brings natural, full-duplex voice conversations to the API, with stronger instruction following, custom voices, and telephony support.

16. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

17. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

18. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

19. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

20. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

21. [IBM releases SOTA Granite Time Series PatchTST-FM-r2 model with commercial-friendly license](https://huggingface.co/blog/ibm-research/ibm-releases-sota-granite-time-series)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 09 Sep 2026 15:36:24 GMT

22. [Safety for Whom? Refusing the Right Subset of a Topic, Not the Whole Topic](https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 08 Sep 2026 14:23:07 GMT

23. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

24. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

25. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

26. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

27. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

28. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

29. [Efficient AI Model Deployment Using Quantization Analysis Tool](https://arxiv.org/abs/2609.11954)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11954v1 Announce Type: new Abstract: As deep learning models are increasingly deployed on resource constrained devices, the demand for efficient model optimization techniques continues to grow. Effective deployment of AI models on edge and low power platforms requires optimization methods that reduce model size and computational cost while maintaining high accuracy. This paper presents Quantization Analysis Tool, a practical system designed to streamline quantization workflows and support performance efficient model deployment. Built on the ONNX framework for broad interoperability, the tool provides detailed layer-wise sensitivity analysis, visualization of weight and activation distributions, and insights to guide precision selection. By identifying layers that are resilient or sensitive to reduced precision, the tool enables developers to make informed trade-offs between model size, latency, and accuracy. Experimental evaluations across multiple neural network architectures demonstrate that the tool effectively improves the quantized accuracy, leading to improved efficiency in real-world deployment scenarios. The tool also provides developers valuable insights into the effects on quantization on the model and its accuracy. This work highlights the tools capabilities, practical applications, and its role in enabling efficient AI model deployment through robust quantization analysis

30. [On-Device Language Models for Privacy-Preserving Stress Prediction: A Multimodal Evaluation on Mobile Health](https://arxiv.org/abs/2609.11961)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11961v1 Announce Type: new Abstract: Stress is a pervasive determinant of mental health and a key target for mobile health interventions. On-device language models (ODLMs) offer privacy-preserving inference without cloud dependency, yet their feasibility for health prediction under mobile resource constraints remains underexplored. We evaluate ODLMs for multi-modal stress prediction using zero-shot prompting, measuring predictive accuracy alongside latency and throughput. Our results show that objective sensor features marginally outperform subjective self-reports on average, and that lightweight sub-2B models achieve low latency with predictable resource usage. Our findings highlight both the promise and the practical constraints of ODLMs for mobile mental health.

31. [Fundamental Dynamical Units for Physics-Informed Structural Inference from Perturbation Time-Series in Networked Systems](https://arxiv.org/abs/2609.11934)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11934v1 Announce Type: cross Abstract: In networked dynamical systems, the parameter of primary mechanistic interest is signed interaction structure. Recovering this structure from perturbation time-series data is a fundamental identification problem, compounded by three coupled obstacles: the combinatorial complexity of interaction architectures, ambiguity of causal attribution under limited interventions, and state-dependent dynamics that confound structural inference. Each obstacle is structural in origin and calls for a structural solution. We address these challenges by adopting a reductionist approach, introducing Fundamental Dynamical Units (FDUs): signed three-node interaction patterns as composable primitives that convert the interaction hypothesis space into a finite, constructive, and tractable representation. We show that local interaction structure determines the perturbation conditions required to disentangle direct from relayed influence, making intervention design a structural consequence of the FDU representation. We embed FDU-regularized structural inference within a physics-informed neural ordinary differential equation (ODE) whose governing-equation constraint transforms structural hypotheses into verifiable dynamical predictions, enabling joint recovery of interaction structure and perturbation-resolved trajectories. Validated on synthetic benchmarks with known ground truth, the framework supports structural commitment, expressed through FDU primitives, motif-prescribed intervention design, and physics-informed learning, as a principled basis for mechanistically interpretable inference in networked dynamical systems.

32. [Error-Rate Reduction in LDPC Decoding via Bit-Aligned Temporal Reinforcement in Parallel Probabilistic-Bit Dynamics](https://arxiv.org/abs/2609.12389)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.12389v1 Announce Type: cross Abstract: Probabilistic bits (p-bits) provide a physical and algorithmic primitive for stochastic inference, but highly parallel updates can alter their collective dynamics. We study the decoding of random-regular (3, 6) low-density parity-check (LDPC) codes using Jacobi-type p-bit annealing with stochastic partial activation. An additive response-path rule stores each bit's saturated response and reuses it before stochastic readout. High-statistics simulations with independent parameter optimization for each method show pooled bit-error-rate reductions of 33.5%, 74.8%, and 81.8% relative to memoryless probabilistic simulated annealing (pSA) for representative codes of block lengths 96, 192, and 288, respectively. Static gain, normalized averaging, response shuffling, and same-bit binary-state feedback with only its coefficient tuned under the same nonmemory parameters do not reproduce the full saturated-response benefit. Trajectory analysis links the improvement to acquisition of the channel-consistent valid-codeword basin and enhanced post-acquisition stability; the acquisition advantage persists from random and channel-hard-decision starts under the tested conditions. Across all 30 independent code realizations, fixed additive parameter-and-readout packages achieve lower bit- and frame-error rates than separately optimized pSA-specific packages, with neither package retuned for individual codes. These results show that the computational effect of temporal state depends on the retained quantity and its reinjection into stochastic dynamics.

33. [Extreme-Scale Linear-Scaling Kohn-Sham DFT at 100 Million Atoms: Bridging Quantum Simulations and Experiments](https://arxiv.org/abs/2609.13115)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.13115v1 Announce Type: cross Abstract: Kohn-Sham density functional theory (DFT) remains the workhorse of ab initio materials simulation, yet cubic computational and quadratic memory scaling have confined calculations to a few hundred to thousands of atoms, spanning only nanometers, far below experimentally relevant length scales. We introduce XLSDFT, a linear-scaling DFT framework based on divide-and-conquer decomposition of the one-particle density matrix and Chebyshev-filtered subspace iteration, achieving linear computational and memory scaling while retaining DFT accuracy. Deployed on the LineShine exascale supercomputer, XLSDFT reduces computational complexity by orders of magnitude, enabling unprecedented DFT scale: a 200-million-atom silicon crystal, twentyfold beyond the prior record. Our implementation achieves 96.6% weak-scaling efficiency and sustained 157.9 Pflop/s (FP64) for a 100-million-atom scaling study. We further simulate an 11-million-atom all-solid-state battery interface of unprecedented complexity, 1,000 times beyond prior DFT for such systems, revealing how lithium metal reacts with the solid electrolyte at atomic resolution, in quantitative agreement with spectroscopy experiments.

34. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.88; Date: 2026-09-14T10:41:51Z; Popularity: 1,875 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

35. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-09-10T10:11:50Z; Popularity: 485 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

36. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-12T05:39:44Z; Popularity: 363 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

37. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-14T03:11:45Z; Popularity: 246 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

38. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

39. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

40. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

41. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

42. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

43. [Fundamental Dynamical Units for Physics-Informed Structural Inference from Perturbation Time-Series in Networked Systems](https://arxiv.org/abs/2609.11934)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11934v1 Announce Type: new Abstract: In networked dynamical systems, the parameter of primary mechanistic interest is signed interaction structure. Recovering this structure from perturbation time-series data is a fundamental identification problem, compounded by three coupled obstacles: the combinatorial complexity of interaction architectures, ambiguity of causal attribution under limited interventions, and state-dependent dynamics that confound structural inference. Each obstacle is structural in origin and calls for a structural solution. We address these challenges by adopting a reductionist approach, introducing Fundamental Dynamical Units (FDUs): signed three-node interaction patterns as composable primitives that convert the interaction hypothesis space into a finite, constructive, and tractable representation. We show that local interaction structure determines the perturbation conditions required to disentangle direct from relayed influence, making intervention design a structural consequence of the FDU representation. We embed FDU-regularized structural inference within a physics-informed neural ordinary differential equation (ODE) whose governing-equation constraint transforms structural hypotheses into verifiable dynamical predictions, enabling joint recovery of interaction structure and perturbation-resolved trajectories. Validated on synthetic benchmarks with known ground truth, the framework supports structural commitment, expressed through FDU primitives, motif-prescribed intervention design, and physics-informed learning, as a principled basis for mechanistically interpretable inference in networked dynamical systems.

44. [Physics-Informed Conformal Prediction: Embedding PDE Consistency into Distribution-Free Uncertainty Quantification for Neural Operators](https://arxiv.org/abs/2609.11935)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11935v1 Announce Type: new Abstract: Neural operators such as the Fourier Neural Operator (FNO) achieve remarkable accuracy in approximating solutions to partial differential equations (PDEs). However, providing rigorous uncertainty estimates remains an open challenge. We propose Physics-Informed Conformal Prediction (PI-CP), a framework that embeds PDE residuals into the nonconformity score of split conformal prediction, producing prediction intervals that are (i) distribution-free with provable coverage guarantees, and (ii) spatially adaptive when the PDE residual correlates with prediction error -- tighter where physics is well-satisfied, wider where it is violated. Additionally, we prove that FNO's translation equivariance creates a fundamental approximation barrier for PDEs with Dirichlet boundary conditions, and show that coordinate channels resolve this with up to 63x error reduction. We validate PI-CP across six physics scenarios -- heat conduction (2D/3D), structural mechanics (2D/3D), Darcy flow, and Navier-Stokes -- demonstrating consistent 89-91% coverage for all four Conformal methods, while MC Dropout and Deep Ensembles are unstable (82-100%). FNO outperforms CNN and DeepONet by 10-12x.

45. [Fed-Equilibrium Framework for Topological Pareto Control in Robust and Fair Clinical Federated Learning](https://arxiv.org/abs/2609.11937)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11937v1 Announce Type: new Abstract: The deployment of Federated Learning (FL) in multi-center clinical networks faces the challenge of "knowledge dominance," where high-volume hubs naturally overwhelm minority community nodes, implicitly treating the distinct clinical patterns of smaller cohorts as outliers. Existing geometric defenses provide a security baseline but leave this efficiency-fairness dilemma unresolved. To bridge this gap, we propose Fed-Equilibrium, a framework that advances the paradigm from simple defense to topological equilibrium. Unlike traditional aggregators, Fed-Equilibrium implements a sequential architectural synergy. It utilizes a two-stage gradient control cascade: Stage I (geometric quality assurance) enforces directional consistency via a cosine similarity funnel to filter malicious noise, creating a stabilized manifold; Stage II (topological Pareto control) then actively modulates verified contributions by identifying the optimal Pareto knee point. We validated this framework on a bi-national simulation integrating Canadian (CNODES) and U.S. (SyntheticMass) registries. Experimental results demonstrate that the system simultaneously secures the network against adversarial divergence while accommodating underrepresented signals. Notably, the minority U.S. spoke (representing less than 3% of data volume) achieved deep convergence comparable to the data-rich Canadian hub. This confirms that Fed-Equilibrium effectively counters "knowledge dominance," establishing a true "knowledge commons" where global generalizability does not come at the cost of local clinical representation.

46. [Performance, Efficiency and Collapse -- Advantages and Challenges in Offline Post-training of Code LLMs](https://arxiv.org/abs/2609.11956)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11956v1 Announce Type: new Abstract: Post-training with reinforcement learning (RL) is a critical phase in the development of code-generating large language models (LLMs), as it ensures adherence to instructions and the production of functionally correct code. This process typically requires computationally intensive code sample generation from Transformer-based LLMs and substantial GPU-CPU communication for sequence verification. To address these computational challenges, this work examines whether RL-based post-training can be performed entirely offline by leveraging existing datasets rather than generating new samples. The findings indicate that, with only a few hours of training, zero-shot code generation performance of LLMs can be substantially improved without online sampling. Additionally, offline RL produces performance gains across models ranging from 0.5B to 7B parameters, although the extent of improvement varies among model families.

47. [Physics Based Triple Debye Dielectric Modeling and Multi Layer ADE FDTD Simulation of Terahertz Pulse Reflection for Breast Cancer Detection](https://arxiv.org/abs/2609.12701)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.12701v1 Announce Type: new Abstract: Terahertz (THz) imaging has emerged as a promising non-ionizing modality for breast cancer assessment owing to its intrinsic sensitivity to tissue hydration. However, existing dielectric descriptions of biological tissue, largely restricted to single- or double-Debye models, fail to capture the multiscale relaxation dynamics governing broadband THz dispersion and absorption, thereby limiting the quantitative interpretation of reflected pulse signatures.Here, a physics based triple Debye dielectric framework is developed to quantitatively predict broadband THz-tissue interactions. The proposed model explicitly incorporates three physically distinct relaxation processes associated with free-water rotational dynamics, bound-water relaxation ({\tau}_2), and ultrafast interfacial/macromolecular polarization ({\tau}_3). Model parameters are obtained by nonlinear least-squares fitting to experimentally measured refractive-index data digitized from published THz time-domain spectroscopy measurements of ex vivo human breast tissue. Compared with conventional Debye formulations, the proposed model substantially improves the fitting accuracy, reducing the root-mean-square error from 0.7773 (single Debye) and 0.2976 (double Debye) to only 0.0199 for the triple-Debye model. Fullwave FDTD ADE simulations of realistic multilayer breast structures further demonstrate that reflected THz pulses encode tissue hydration through reproducible temporal signatures, including increased reflection amplitude, delayed pulse arrival, and enhanced waveform broadening in malignant tissue. Polarization and angle resolved Fresnel analysis further indicates that hydration-dependent pseudo-Brewster minima provide an additional contrast mechanism by selectively suppressing reflections from low hydration normal and adipose tissues.

48. [Physics-enriched neural solvers for transient ice-flow simulation](https://arxiv.org/abs/2609.12900)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.12900v1 Announce Type: new Abstract: Transient glacier simulations with higher-order ice flow require the repeated solution of a nonlinear problem as the geometry evolves. In the online mode of the Instructed Glacier Model, the velocity field is represented by a neural network whose weights are warm-started from the previous time step and updated with a few optimizer iterations. We show that supplying the network with inexpensive input fields derived from low-order ice-flow balances improves this online solver. Unlike residual-based physics-informed neural networks, which incorporate physics through governing-equation penalties in the loss, our approach leaves the governing energy objective unchanged, adding physical structure through the network inputs. Across three real-world glacier configurations, the enriched solver is markedly more robust to solver settings. On the two alpine cases, it also improves the tuned accuracy--runtime trade-off, reducing surface-velocity errors by factors of two to four at fixed runtime and reaching few-percent relative errors with only $10^4$--$10^5$ trainable parameters, far fewer than comparable raw-input baselines. A 300-year Aletsch simulation then completes in under one minute, and the larger Valais domain in about two minutes, on a single GPU---a budget once reserved for much simpler shallow-ice models. Gains are smaller for the fast marine-terminating glacier, where nonlocal stress coupling favors larger or spectral networks. More broadly, the results suggest that enriching a neural solver's inputs with reduced-order physics can make repeated higher-order solves much cheaper, with no training data and no offline training.

49. [Diagonal Pair Coulomb Density Matrix on a Sphere: a numerical study](https://arxiv.org/abs/2609.11984)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.11984v1 Announce Type: cross Abstract: We tabulate, on the diagonal, the $n$th power of the primitive approximation for the pair Coulomb density matrix on a sphere, with up to $n=5$, and we discuss its behavior at particles contact as $n$ grows. Our results show that even on a curved surface quantum statistical physics is fundamentally different from its classical counterpart. If in the latter one needs to artificially introduce a regularization of the divergent attractive Coulomb potential preventing particles contact, for example with a hard core, in the former this is not necessary.

50. [Diversifying time evolution of matrix product states using BUGs](https://arxiv.org/abs/2609.12848)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.12848v1 Announce Type: cross Abstract: Time evolution of tensor-network states is a central tool for studying nonequilibrium dynamics in strongly correlated quantum systems. In the past decade, using the time-dependent variational principle (TDVP) discretized by projector-splitting has become the gold standard for evolving matrix product states (MPS) with long-range Hamiltonians. More recently, a conceptually different class of discretizations of the TDVP, the class of Basis Update and Galerkin (BUG) integrators, has been developed within the framework of dynamical low-rank approximation, offering an alternative, more flexible approach. In this work, we formulate two BUG integrators explicitly for MPS. The BUG integrators result in "single-site" MPS integrators that are robust with respect to small singular values, avoid backward-in-time substeps, and naturally allow for the adaptive choice of bond dimensions. We consider the augmented BUG integrator of first order and the midpoint BUG integrator of second order and clarify their relation to the projector-splitting discretization of the TDVP. Using representative models of strongly correlated quantum systems, like the XY spin model with long-range interaction and two-dimensional lattice models of fermions and spins of various lengths, we perform a systematic numerical comparison between BUG and projector-splitting time discretizations of the continuous-time TDVP, focusing on scalability, numerical complexity, and accuracy. We find that BUG integrators, due to their reduced numerical cost and the flexibility of the concept, provide a competitive and, in certain regimes, advantageous alternative to the well-established time-stepping by projector-splitting in TDVP, especially in models with large local dimensions, and in cases where observables are extracted with high temporal resolution.

51. [Thermodynamical study of N$_2$ clathrate hydrate from DFT calculations](https://arxiv.org/abs/2512.16819)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Mon, 14 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2512.16819v3 Announce Type: replace-cross Abstract: Thermodynamic stability of N$_2$ clathrate hydrates in the sI and sII structures is investigated using density functional theory with several exchange-correlation functionals, explicitly accounting for composition (cage occupancies) and pressure at T = 0 K. Among the tested functionals, revPBE-D3(0) best reproduces experimental lattice parameters and bulk moduli B$_0$ . Energetic analyses confirm the strong impact of large cage double occupancy on sI, whereas the convex-hull results show that sI with single occupancy remains thermodynamically stable up to $\sim$ 0.8 GPa alongside sII with single occupancy. Increasing pressure then stabilizes sII with double occupancy, consistent with its larger large-cage volume and lower framework strain. These results provide a coherent, first-principles thermodynamic framework for N$_2$ hydrate stability and a baseline for finite-temperature extension.

52. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

53. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.74; Date: 2026-09-13T05:56:06Z; Popularity: 741 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

54. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-14T16:48:52Z; Popularity: 227 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

55. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.21; Date: 2026-09-14T18:27:26Z; Popularity: 1,212 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

56. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-12T06:53:29Z; Popularity: 123 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Introducing ChatGPT for Financial Services

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://openai.com/index/introducing-chatgpt-financial-services

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
