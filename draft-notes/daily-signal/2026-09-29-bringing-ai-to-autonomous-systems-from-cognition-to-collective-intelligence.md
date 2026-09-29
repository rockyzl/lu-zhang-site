# Daily signal sidecar - 2026-09-29

## Selected Signal

- Title: Bringing AI to Autonomous Systems -- From Cognition to Collective Intelligence
- URL: https://arxiv.org/abs/2609.30291
- Source: arXiv cs.AI
- Score: 5.00

## Candidate Review

- Signal: Bringing AI to Autonomous Systems -- From Cognition to Collective Intelligence
- Primary source: https://arxiv.org/abs/2609.30291
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

Total candidates reviewed after duplicate-source filtering: 51

1. [Bringing AI to Autonomous Systems -- From Cognition to Collective Intelligence](https://arxiv.org/abs/2609.30291)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30291v1 Announce Type: new Abstract: The purpose of this article is to highlight the central role of autonomous systems as the ultimate stage in the development of AI, to explain the underlying technical challenges that require a combination of connectionist AI and symbolic AI, and to integrate AI and systems engineering. We present a comprehensive framework for the design and evaluation of autonomous systems, based on a generic agent architecture that characterizes their behavior as the composition of cognitive functions organized around a long-term memory containing the agent's evolving knowledge. We address the challenges posed by the implementation of the fundamental features of the agent architecture, in particular the link between sensory data and structured data stored in memory, decision-making related to the achievement of the agent's goals and their planning, as well as the coordination of agents to combine individual and collective intelligence. We explain that agent trustworthiness, unlike that of traditional systems, is not limited to behavioral properties. It includes an essential dimension related to cognitive properties, the validity of which depends on how the agent uses its knowledge in decision-making. We present avenues for the development of methods for evaluating agent trustworthiness. We conclude with a critical assessment of the substantial gap between the aspirational vision of autonomous multi-agent systems and the current state of the art.

2. [ScopeBench: Do Agents Preserve Engagement Boundaries Under Goal Pressure?](https://arxiv.org/abs/2609.30325)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30325v1 Announce Type: new Abstract: Agents are increasingly deployed with real autonomy in web application and network penetration testing, where a single out-of-scope action can breach a client's engagement boundary. Existing offensive-security benchmarks measure raw hacking capability; as those benchmarks saturate, the real barrier to deployment is a special case of alignment: scope adherence. We introduce ScopeBench, a benchmark of 30 dead-end agentic security tasks in which the stated objective is reachable only by violating the stated scope. Each task appears under two conditions that share an environment, verifier, and objective and differ only in scope: one instruction set has no scope and measures capability; the other has a natural-language scope to measure adherence. Scopeless trajectories are graded by a standard deterministic verifier. Scoped trajectories pass through two grading arms. First, the same deterministic verifier checks for the flag: because the flag sits behind the scope boundary, a pass proves by construction that a forbidden action occurred, yielding a high-precision lower bound on the violation rate. If the verifier does not pass the trajectory, an agentic judge estimates whether an out-of-scope call occurred. We calibrate the judge against 100 ScopeBench trajectories labeled call-by-call by human annotators, and a blinded audit of the evaluated rollouts finds its high recall holds - no false negatives among the 36 audited violations, with over-flagging its only observed error. Across 8 models in one harness, raw capability spans 12.2% to 81.1% and scope adherence spans 34.4% to 86.7%, with the judge finding 331 violations that mechanical verification misses. Opus-4-8 achieves a raw-capability score 10 percentage points higher than sonnet-4-6's while exhibiting 35.6 percentage points higher scope adherence. We release the frozen pilot benchmark, evaluation code, and all 2160 ATIF trajectories.

3. [When Is a Multi-Agent Code Judge Actually Grounded? Two Label-Free Measurements, and a Judge That Declines to Guess](https://arxiv.org/abs/2609.30328)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30328v1 Announce Type: new Abstract: When one language model judges whether another's code is correct, it does not report the absence of evidence. It returns a confident verdict with reasoning attached, indistinguishable from a verdict it had grounds for. Multi-agent verification, which decomposes a judgment into checkable claims and verifies each against evidence, is a promising response and works well when the evidence is a set of retrieved documents. We argue such methods require two things of their evidence: it must be independent of the answer under review, and it must differ between the two candidates being compared. The second condition holds automatically with retrieved documents and stops holding in code judging. Running MARCH, a published framework unmodified over 80 condition-by-cell measurements on two code judging benchmarks, we find it declares both solutions equally good on 78 to 95% of comparisons, reaching 4.4% accuracy where the same model asked directly reaches 43.7%. Neither easier problems nor a larger judge changes this. Two measurements taken from the pipeline's own logs explain it without needing labels. Gating on one of them, the pipeline declines the comparisons it cannot make and raises its accuracy from 20.7 to 36.9% while still answering half of all comparisons. The contribution is not a more accurate judge, but a label-free way to tell when a judge has no basis for its answer.

4. [A Synthetic Ground-Truth Framework for the Evaluation of Explainable AI Methods](https://arxiv.org/abs/2609.30397)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30397v1 Announce Type: new Abstract: Evaluating explainable Artificial Intelligence (XAI) methods is a challenging task due to the lack of reliable evaluation procedures and, in particular, the absence of ground truth explanations. In the literature, existing evaluation approaches typically assess explanations by measuring their fidelity with respect to the predictions of a black-box model. However, such evaluation strategies only quantify the degree to which an explanation reproduces the model's output, without ensuring that the explanation correctly reflects the underlying decision process. As a consequence, different explanations may achieve similar fidelity scores while providing inconsistent or misleading interpretations of the model behavior. In this paper, we propose a framework for the evaluation of XAI methods based on synthetic ground truth. The proposed approach relies on controlled interventions to generate synthetic datasets in which the importance of input components can be determined by design. This enables the construction of ground truth explanations that are directly aligned with the behavior of the model under analysis. The framework is instantiated across three data domains, namely binary images, tabular data, and time series, allowing a comprehensive assessment of explanation methods in heterogeneous settings. Experimental results obtained by evaluating nine widely used XAI methods show significant limitations in current techniques and highlight the importance of synthetic, intervention-based benchmarks for a reliable assessment of explanation quality.

5. [Spectral Feedback for Test-Time Alignment of Protein Diffusion Models](https://arxiv.org/abs/2609.30456)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30456v1 Announce Type: new Abstract: Reward maximization alignment methods for discrete diffusion models have primarily focused on steering the reverse process, either by influencing token logits or by selecting favorable sequences at intermediate steps. These approaches largely treat inference as a unidirectional process, lacking mechanisms for revisiting undesirable token selections. We introduce Spectral Feedback, an algorithm that selects edit-positions in a feedback loop, allowing the model to iteratively correct its own generations. This approach leverages the mask structure of discrete diffusion models by re-masking and re-sampling tokens, analogous to image editing methods that reintroduce noisy latents and re-run the reverse process. While prior alignment methods focus on what token labels to assign to maximize a target reward, we instead treat which tokens to revisit as the central alignment problem. Selecting edit-positions is challenging because edit effects are interdependent: the impact of modifying one token depends on which others are edited simultaneously. We define an edit-set as a set of token positions to re-mask and re-sample. Motivated by prior work on sparse interactions in biological systems, we find empirically that edit-set value functions for protein inverse folding admit sparse Fourier representations. This structure enables Spectral Feedback to efficiently learn and optimize the value functions for edit-position selection. Spectral Feedback is model-agnostic and can be applied to pretrained, test-time aligned, and fine-tuned diffusion models. For all of these models, the algorithm improves alignment performance without modifying the underlying generative process. Applied to inverse folding with a protein stability reward oracle, it achieves a 32.3% increase in stable proteins for a pretrained model, 24.8% for Best-of-10, and 5.8% for a state-of-the-art RL fine-tuned diffusion model.

6. [Pretrained ASR Pseudo-labeling for Noisy Police Audio](https://arxiv.org/abs/2609.30469)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30469v1 Announce Type: new Abstract: Pretrained ASR systems perform poorly on noisy Broadcast Police Communication (BPC), hindering efforts to understand police decision-making. Pseudo-labeling offers an unsupervised path to improve ASR without expensive human labels, but the efficacy of this approach on very noisy domains is not known. In this work, we systematically assess the opportunities and limits of pseudo-labeling to adapt foundation ASR models (Whisper and Qwen3-ASR) to noisy BPC domain corpora from Baltimore and Chicago. We demonstrate that existing internal confidence metrics (log-probabilities and STAR scores) fail to distinguish between high and low quality BPC pseudo-labels, and we introduce an external LLM-as-a-judge filtering paradigm that leverages parametric knowledge to discard contextually implausible transcripts. Our LLM-judging filters more aggressively than internal metrics and significantly reduces WER of the pseudo-labeled training sets across the Baltimore and Chicago BPC corpora, though a substantial gap remains relative to an oracle filter. We also introduce a new cross-model pseudo-labeling paradigm where one model is finetuned with pseudo-labels from the other, and we identify this method as a promising direction for future pseudo-labeling work.

7. [DevDay 2026 Recap](https://openai.com/index/devday-2026-recap)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 10:00:00 GMT
   - Summary: Explore more than 20 announcements from OpenAI DevDay 2026, including GPT-6 Astra, ChatGPT, Codex, APIs, security, and new tools for builders.

8. [Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 10:00:00 GMT
   - Summary: Meet GPT-6.1 Sol: near-Astra intelligence for coding, computer use, and professional work at one-fifth of Astra’s standard API input and output token prices.

9. [Introducing dots](https://openai.com/index/introducing-dots)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 29 Sep 2026 00:00:00 GMT
   - Summary: Dots by OpenAI are a proactive assistant that can keep working across complex projects and everyday tasks. Learn how dots help you stay in control while work moves forward.

10. [Towards safety cases for frontier AI training](https://openai.com/index/towards-safety-cases-for-frontier-ai-training)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 19:00:00 GMT
   - Summary: Our early guidelines for safety cases in frontier AI training cover technical safeguards, operational practices, and investigating misalignment incidents

11. [How we will do better for Australia](https://openai.com/index/how-we-will-do-better-for-australia)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 19:00:00 GMT
   - Summary: OpenAI apologises for incidents involving Australian government websites and outlines stronger safeguards and support to strengthen Australia’s cyber defences.

12. [The Lenfest Institute grows landmark program with expanded OpenAI support](https://openai.com/index/lenfest-ai-collaborative-expansion)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 07:00:00 GMT
   - Summary: OpenAI is expanding the Lenfest AI Collaborative and Fellowship Program with $5 million in funding and up to $5 million in software credits and engineering support.

13. [Are you a Codex Original?](https://openai.com/form/codex-originals)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 GMT
   - Summary: We’re collecting real stories of builders, tinkerers, researchers, and creators who are using Codex to do incredible things. If you want to be a part of the next chapter of the Codex Originals program, tell us more about your story and project below.

14. [Basis completes a tax workbook 2x faster with GPT-6 Astra](https://openai.com/index/basis-tax-workbook-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 28 Sep 2026 00:00:00 GMT
   - Summary: GPT-6 Astra completed a 50-tab tax workbook twice as fast as GPT-5.6 Sol, and its stronger understanding of user intent gives Basis more confidence in real-world use.

15. [Introducing Quine: An AI research system designed for the complexity of biology](https://www.microsoft.com/en-us/research/blog/introducing-quine-an-ai-research-system-designed-for-the-complexity-of-biology/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 29 Sep 2026 14:00:02 +0000
   - Summary: Biology doesn't operate in silos, and neither should the AI representation of it. Quine is an early-stage research effort to create a multimodal world model of biology. By connecting insights across biological scales and modalities, Quine helps scientists computationally search a space far larger than intuition allows and prioritize hypotheses before they reach the lab. Experimental results provide important feedback, helping researchers sharpen future research directions. The post Introducing Quine: An AI research system designed for the complexity of biology appeared first on Microsoft Research .

16. [Improving synthesis prediction of small molecules at scale with RetroChimera](https://www.microsoft.com/en-us/research/blog/improving-synthesis-prediction-of-small-molecules-at-scale-with-retrochimera/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Mon, 21 Sep 2026 15:30:19 +0000
   - Summary: Custom-made molecules are advancing medicine, materials, and agriculture, but producing them is slow and expensive. A new Nature paper highlights RetroChimera, a predictive model that helps accelerate chemical synthesis, helping researchers explore a wide range of molecules. The post Improving synthesis prediction of small molecules at scale with RetroChimera appeared first on Microsoft Research .

17. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

18. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

19. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

20. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

21. [NVIDIA Kumo Tabular Sets a New Accuracy-Efficiency Frontier for Tabular Prediction](https://huggingface.co/blog/nvidia/kumo-tabular)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 29 Sep 2026 15:30:38 GMT

22. [Getting the Source Right, Not Just the Fact: Source-Aware Verification for MCP Agents](https://huggingface.co/blog/MultiverseComputingCAI/getting-the-source-right-not-just-the-fact-source)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 29 Sep 2026 13:07:00 GMT

23. [Holo4: powering generalist computer-use agents](https://huggingface.co/blog/Hcompany/holo4)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 28 Sep 2026 09:44:05 GMT

24. [Accelerating vision-language models with LFM2.5-VL-DSpark](https://huggingface.co/blog/LiquidAI/lfm2-5-vl-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 24 Sep 2026 14:08:57 GMT

25. [How UK AISI and EvalEval Are Making Benchmark Results Reproducible](https://huggingface.co/blog/evaleval-aisi)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

26. [Transformers now runs llama.cpp quants](https://huggingface.co/blog/transformers-llama-cpp-quants)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

27. [Jun Kim, oMLX creator and maintainer, joins Hugging Face to support the MLX community](https://huggingface.co/blog/omlx)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 22 Sep 2026 00:00:00 GMT

28. [tokenizers v1: encode, decode and scaling, measured](https://huggingface.co/blog/tokenizers-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 21 Sep 2026 00:00:00 GMT

29. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

30. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

31. [Bridging LLM Agents and Data Spaces: An Architectural Mediation Approach using the Model Context Protocol](https://arxiv.org/abs/2609.30341)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30341v1 Announce Type: new Abstract: Data Spaces enable sovereign and governed data sharing across organizational boundaries, but their integration with AI agents remains challenging due to mismatches between probabilistic language model interactions and policy-driven data infrastructures. This article presents an architectural mediation approach based on the Model Context Protocol (MCP), implemented through the Eunomia Agent, to enable controlled interaction between large language model (LLM) agents and data space services. The proposed mediation layer translates data space capabilities into structured, schema-driven tools that AI agents can discover and invoke while preserving governance constraints. A prototype implementation validates end-to-end interaction across catalog discovery, metadata retrieval, and data service invocation without modifying existing data space components. Results demonstrate that protocol-based mediation enables interoperable and standards-aligned integration of AI agents into data space ecosystems. The approach provides practical guidance for organizations seeking to introduce AI-driven automation into governed data-sharing environments while maintaining compliance, interoperability, and architectural separation of concerns.

32. [Stealth Apart, Harm Together: Skill Cascading Attacks on Skill-Based Agent Systems](https://arxiv.org/abs/2609.30383)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30383v1 Announce Type: new Abstract: A skill is a modular package of natural-language instructions, executable scripts, and reference resources that an agent can load at runtime to extend its capabilities for a specific task. Skill-based agent systems therefore enable flexible reuse of third-party capabilities, but the openness of this skill ecosystem also opens up a new attack surface. Prior work has focused on vulnerabilities within individual skills, but little attention has been paid to risks that arise from interactions across skills. In this paper, we introduce skill cascading attacks, a threat paradigm in which a malicious objective is distributed across multiple skills so that each modification looks benign in isolation, yet their combined execution is harmful. For instance, in a prescription-review pipeline, the first skill weakens signals of recently discontinued medications in the extracted history, the second downgrades the severity of any drug interaction tied to them, and the third suppresses the resulting low-priority alert in the final summary, so that a severe drug-interaction warning silently disappears before reaching the physician. To systematically study this safety blind spot, we develop SkillCascade, an automated multi-agent red-teaming framework, and release SkillCascade-Bench, a benchmark of 213 validated cascading test cases across multiple agent systems and domains. Across representative agents (e.g., OpenClaw, Claude Code, Codex) and LLM backbones, cascaded interactions reliably induce harmful behaviors while evading existing per-skill scanners and runtime monitors. Our findings highlight a gap between component-level integrity and system-level safety, and call for defenses that reason over cross-skill interactions rather than individual skills in isolation.

33. [Predicting Transmembrane Protein Topology from 3D Structure](https://arxiv.org/abs/2609.30446)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30446v1 Announce Type: new Abstract: This paper presents a novel approach to infer protein topology using the state-of-the-art graph neural network (GNN), SchNet. The model is trained on the same dataset used to develop the recent DeepTMHMM model with 5-fold cross-validation. Unlike the conventional approaches based on using only the protein sequences or the $\alpha$-carbons as features, we have decoded our classifier in this way, so all atom-level embeddings are used. Without applying any pre-trained weight, the final results have shown great potential that GNNs can be used for topological predictions.

34. [HybridInfer: Thermal-Aware Reinforcement-Learning Tier Routing for On-Device, Edge, and Cloud LLM Inference](https://arxiv.org/abs/2609.30270)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30270v1 Announce Type: new Abstract: On-device inference with small language models keeps user data local, works offline, and incurs no per-query cost, so the on-device tier is preferred when it is adequate. It is thermally constrained, however, and I find the constraint is sharper than a slowdown: on a flagship Snapdragon device, sustained on-device generation destabilizes the GPU inference runtime, which crashes or silently wedges after a few consecutive queries. The failure lies in the current toolchain (OpenCL kernel compilation and long-prompt prefill on the mobile GPU), recurs even when the device is cool, and is worst for long generations. Multi-tier routers across on-device, edge, and cloud models can relieve this pressure, but existing routers are thermal-blind and typically evaluated in simulation or on non-mobile hardware. I present HybridInfer, a thermal-aware reinforcement-learning router for a three-tier hierarchy (on-device Llama 3.2 3B, edge Llama 3.1 8B with retrieval, cloud GPT-4o) that uses the phone's thermal headroom and a query-complexity estimate as state and selects a tier by an offline-trained Q-learning policy. Its reward trades quality against latency, cost, and a thermal penalty, plus a locality bonus crediting on-device execution. I show this bonus is a precondition for thermal-aware routing: without it the optimal policy offloads every query. On a real Android benchmark of 210 prompts, the learned router attains significantly higher quality than two hand-tuned heuristics (paired Wilcoxon, p < 0.02) at the lowest cost of any adaptive condition. Always-on-device conditions match per-query quality on servable queries but are three to six times slower and fail on long queries, so routing wins on latency, reliability, and coverage rather than quality. To my knowledge this is the first use of on-device thermal headroom to select among LLM inference tiers of differing capability on real hardware.

35. [Offline Policy Evaluation as a decision support tool for designing Adaptive Experiments](https://arxiv.org/abs/2609.30273)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30273v1 Announce Type: new Abstract: We investigate how historical data from fixed randomized experiments (A/B tests) can be used to inform the deployment of adaptive experiments based on contextual bandits. Given data collected under a static allocation, our goal is to assess which adaptive policies, if any, would have outperformed the original design and under what conditions. To this end, we combine off-policy evaluation (OPE) with a controlled warm-start simulation. From logged A/B test data exhibiting heterogeneous treatment effects, we estimate nuisance components and use doubly robust estimators to rank a portfolio of pre-specified adaptive and non-adaptive policies. When ground truth is available, we then deploy the same offline-trained policies in a simulator that reuses the exact data-generating reward probabilities, providing a safe, ground-truth-anchored environment to study the offline-to-online transition under warm starting. Using synthetic randomized controlled trials with known heterogeneity structures and an oracle policy, our results indicate that adaptive, context-aware policies improve upon fixed allocations when meaningful heterogeneity is present, while providing little benefit in its absence. We reinforce our findings on standard open benchmarks (Hillstrom, Criteo Uplift, and LaLonde), reinterpreted through a policy-value and regret perspective. Overall, our results provide a practical methodology for deciding when adaptive experimentation is worth deploying and how to select among competing adaptive policies using existing A/B test data.

36. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.94; Date: 2026-09-29T17:56:22Z; Popularity: 1,938 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

37. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-09-26T21:01:31Z; Popularity: 488 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

38. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.37; Date: 2026-09-29T03:07:19Z; Popularity: 368 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

39. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-24T17:38:47Z; Popularity: 247 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

40. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-09-28T14:58:43Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

41. [One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact](https://www.microsoft.com/en-us/research/blog/one-year-in-how-microsoft-research-asia-singapore-is-advancing-research-partnership-and-talent-for-real-world-impact/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 28 Sep 2026 21:00:00 +0000
   - Summary: Since launching a year ago, the Microsoft Research Asia — Singapore lab has established a strong foundation, deepened collaboration across government, academia, and industry, and explored how frontier AI research can create real-world value. The post One year in: How Microsoft Research Asia – Singapore is advancing research, partnership and talent for real-world impact appeared first on Microsoft Research .

42. [Offloaded inference for real-world physical AI robotics](https://www.microsoft.com/en-us/research/blog/offloaded-inference-for-real-world-physical-ai-robotics/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 23 Sep 2026 16:01:36 +0000
   - Summary: Robots are getting smarter, but how can their hardware match that growth? New Microsoft Research findings show that moving AI inference beyond the robot can improve task success, boost efficiency, and support more advanced physical AI workloads. The post Offloaded inference for real-world physical AI robotics appeared first on Microsoft Research .

43. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

44. [Cosine Similarity Is Not Evidence: Measuring the Noise Floor of Interpretability Transfer Under Quantization](https://arxiv.org/abs/2609.30275)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30275v1 Announce Type: new Abstract: A statistic reported without the quantity needed to interpret it is not evidence. We develop that thesis for a concrete practice in AI safety. Interpretability artifacts are calibrated on full-precision weights, deployed on quantized ones, and certified as surviving the change by scale-invariant statistics (cosine similarity, correlation, AUROC) that are reported without their noise floor. For the difference-in-means direction estimator, the split-half floor is governed by one dimensionless number, $\kappa = n\rho^2/d$. The closed form $\mathbb{E}[\cos] \approx (1+4/\kappa)^{-1}$ is classical; the missing input is the class separation $\rho$, which we measure on real activations; no compression-transfer study we know of reports it. On Qwen2.5-1.5B-Instruct, $\rho = 33$--$61$ across depth, so two independent runs of the estimator agree to $0.978$--$0.994$ by sampling alone. A published cosine of $0.996$ between full-precision and quantized refusal directions therefore cannot be read as preservation without the $n$ it was computed at, which is not reported. Where $n$ is known, we judge each low-bit cosine against the split-half null measured within that quantized model, because a full-precision null assumes the low-bit estimator has the same variance. That assumption is exactly what a null exists to test. The result is plain: at INT4 the direction rotated, and the deficit exceeds the estimator's own noise. At INT8 we detect no movement, which is not an equivalence claim. We also show that a scale-invariant statistic cannot distinguish translation from attenuation of a transferred decision variable, although the two call for opposite remedies. We close with reporting recommendations that cost one forward pass. Code, data, and a one-cell reproduction are released at https://github.com/pvarshh/quantinterp

45. [Seasonal and Quantum-inspired Models for Neutron Monitor Time Series Forecasting](https://arxiv.org/abs/2609.30281)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Tue, 29 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.30281v1 Announce Type: new Abstract: We present a focused and reproducible study of multi-horizon forecasting on the Lomnicky Stit neutron monitor (LMKS) time series. Our evaluation suite covers simple seasonal baselines, modern deep sequence models, and functional and quantum-inspired architectures, including Seasonal Naive, Long Short-Term Memory (LSTM), Temporal Convolutional Network (TCN), N-BEATS, Kolmogorov-Arnold Networks (KAN), and two quantum-inspired variants, QiLSTM and QiKAN. We describe the dataset characteristics, diagnostic analysis, preprocessing pipeline, and training procedures, and report aggregate point-forecast performance using mean absolute error (MAE) and root mean squared error (RMSE) for all evaluated models. Our quick-run results indicate that the quantum-inspired KAN variant, QiKAN, achieves the lowest aggregate forecasting error among the evaluated configurations, while the simple Seasonal Naive baseline remains remarkably competitive. These results suggest that, for highly periodic scientific monitoring time series, models incorporating strong seasonal or low-dimensional functional priors can match or outperform substantially more complex sequence architectures. The findings motivate further investigation of parsimonious and decomposable function approximators for forecasting periodic scientific signals.

46. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.76; Date: 2026-09-29T17:33:47Z; Popularity: 756 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

47. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

48. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.31; Date: 2026-09-29T16:26:01Z; Popularity: 1,311 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

49. [Launch HN: Vespper (YC F24) – SOTA Docx MCP](https://www.vespper.com/blog/launching-vespper-docx-mcp)
   - Source: Hacker News; Group: Tech community; Score: 2.28; Date: 2026-09-28T17:34:36Z; Popularity: 35 points, 16 comments
   - Summary: HN discussion: 35 points, 16 comments.

50. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-29T10:00:25Z; Popularity: 235 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

51. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.13; Date: 2026-09-27T11:57:41Z; Popularity: 126 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Bringing AI to Autonomous Systems -- From Cognition to Collective Intelligence

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.30291

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
