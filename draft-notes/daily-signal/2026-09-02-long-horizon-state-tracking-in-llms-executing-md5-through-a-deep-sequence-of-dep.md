# Daily signal sidecar - 2026-09-02

## Selected Signal

- Title: Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls
- URL: https://arxiv.org/abs/2609.00012
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls
- Primary source: https://arxiv.org/abs/2609.00012
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

1. [Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls](https://arxiv.org/abs/2609.00012)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00012v1 Announce Type: new Abstract: Long-horizon tasks remain uncommon in large language model (LLM) evaluation, and for a reason: when each step depends on the last, per-step accuracy that looks excellent in isolation decays catastrophically, as errors cascade and the end-to-end failure probability grows sharply with length. Existing agentic benchmarks report end-to-end success but confound this state-tracking difficulty with instruction interpretation, give no control group that isolates it, and are vulnerable to shortcuts such as a hallucinated final answer, so they cannot say why a long run fails. Whether an LLM can carry exact intermediate state across many tool calls at all is itself not well established. We test this cleanly by having the model compute a cryptographic hash, MD5, step by step: a sequence of $196$ dependent tool calls over $64$ rounds while it carries four $32$-bit words $(a,b,c,d)$ in its own context from one call to the next. Interpretation is trivial and, because we implement MD5 from scratch (RFC~1321), we align every call to the ground-truth trace and check the digest to the bit, so any failure is pure bookkeeping. gpt-oss-120b, a mixture-of-experts model with only $\sim$5.5B active parameters per token, at temperature $0$ with a short fixed prompt, carries the full state across all $196$ calls and returns the correct digest on a majority of completed runs. In the strongest setting we replace every primitive tool with a second LLM, so a driver and a worker compute the whole hash from scratch with no exact-arithmetic oracle in the loop. Two ingredients decide success and neither changes the weights: keeping the model's own reasoning in its context each turn, and voting over a thinking-enabled worker to remove its modular-arithmetic slips. We localize the residual failures by origin, separating state-carrying from arithmetic and from serving.

2. [OpenAgentFlow: Enabling System-Wide Safety Boundaries for Heterogeneous AI Agent Fleets](https://arxiv.org/abs/2609.00015)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00015v1 Announce Type: new Abstract: AI agents powered by large language models are evolving from isolated assistants into heterogeneous systems in which multiple agents, planners, controllers, and execution backends operate over the same user or enterprise environment. In such settings, safety becomes a system-level action-governance problem: deciding whether concrete agent-generated actions should be committed before they modify shared state. Existing safeguards cover prompts, tool calls, GUI actions, and agent-local behavior, but often leave enforcement fragmented, obscure risks that emerge across multi-step action flows, and provide limited support for auditability and policy evolution. We present OpenAgentFlow, a control-plane/action-plane architecture that enforces safety at the action-commit boundary. It normalizes pending GUI actions, API calls, tool calls, and LLM-generated invocations into a unified AgentEvent stream, routes each event through a shared pre-execution Policy Enforcement Point, and maintains provenance, session state, audit records, and updatable policies in the control plane. This creates a shared governable action stream and allows new rules to take effect without modifying agents, prompts, models, or execution paths. We instantiate OpenAgentFlow on Android. On a 300-case action-event benchmark, it achieves 94.0% accuracy and a 95.3% attack block rate. On a 30-case dynamic-policy suite, it matches expected behavior in 27 cases after new rules are installed. Across 98 traced cases from a 100-case Android emulator suite, it achieves 90.8% raw accuracy and a 92.9% trace-adjusted pass rate across GUI, API, and LLM-planned cases. These results show that OpenAgentFlow provides a practical shared enforcement boundary for heterogeneous AI agent fleets.

3. [UI-Venus-2 Technical Report](https://arxiv.org/abs/2609.00028)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00028v1 Announce Type: new Abstract: Multimodal GUI agents have emerged as a promising paradigm for digital task automation, yet transitioning from benchmark-oriented models to dependable real-world applications remains challenging due to limited environment coverage, brittle task construction, and unreliable reward verification. In this work, we present UI-Venus-2, a general-purpose foundation GUI agent designed to operate across mobile, web, and desktop environments through a unified closed-loop reasoning-action framework. To bridge the gap toward practical deployment, we jointly scale three critical dimensions: (1) Environments, expanding coverage to more than 170 multilingual mobile apps and native desktop operating systems; (2) Tasks, employing a deep-research pipeline for function-grounded instruction generation; and (3) Verification, adopting trace-level and sample-level evaluators with visual keypoints and multi-model voting to ensure reliable RL signals for training. Furthermore, we integrate safety-aware mechanisms to ensure controlled execution of consequential actions. By offering a capable, efficient, and open-source foundation, UI-Venus-2 advances the field toward more generalizable, verifiable, and self-reflective agents for real-world applications.

4. [When Prediction Error Is Not Enough: Evaluating Nuisance-Function Prediction for Causal Estimation](https://arxiv.org/abs/2609.00071)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00071v1 Announce Type: new Abstract: Prediction error is widely used to evaluate nuisance-function estimators in causal inference, but its relationship with causal estimator performance may differ across performance measures. We studied this question in a partially linear model using Monte Carlo simulations. We compared ordinary least squares (OLS), generalized additive models (GAMs), XGBoost, and Double Machine Learning with XGBoost (DML-XGBoost), evaluating nuisance-function prediction error, bias, RMSE, and 95\% confidence interval coverage. We also examined a simple joint-error measure based on the absolute cross-product of estimation errors from the exposure and outcome nuisance functions. Across the simulated settings, XGBoost had the lowest RMSE among the non-oracle methods, while DML-XGBoost generally provided better confidence interval coverage. Prediction error did not consistently track causal bias across methods and settings, and the method with the best point-estimation performance did not necessarily have the best confidence interval coverage. The joint-error measure was only weakly associated with causal bias and did not provide a useful standalone measure of causal performance. These results suggest that prediction error is useful for assessing nuisance-function estimation, but it should not be treated as a direct measure of the quality of the resulting causal estimator.

5. [How AI-native companies turn workflows into operating capability](https://openai.com/index/ai-native-company-workflows)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 01 Sep 2026 17:00:00 GMT
   - Summary: Basis, Clay, and Exa Labs use AI agents to improve onboarding, account management, and developer integrations. See what enterprise leaders can apply.

6. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

7. [Wire It, Run It, Deploy It: AI Workflows in Gradio](https://huggingface.co/blog/gradio-workflow-guide)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 25 Aug 2026 00:00:00 GMT

8. [Discrete-Time MDP Modeling for Multi-Item Capacitated Lot Sizing with Stochastic Demand Timing](https://arxiv.org/abs/2609.00004)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00004v1 Announce Type: new Abstract: This paper studies a finite-horizon multi-item capacitated lot-sizing problem in which demand quantities are deterministic, while demand-arrival periods are stochastic. Each demand occurs once within a known time window and must be satisfied no later than its deadline. The proposed model makes production and allocation decisions at the demand level, allowing it to represent capacity competition, demand-specific backlog, and allocation-dependent inventory dynamics. The stochastic problem is formulated as a discrete-time Markov decision process (DTMDP), including the state space, feasible actions, transition kernel, and one-period cost function. To isolate the computational effect of stochastic timing, each stochastic instance is first compared with a deterministic counterpart in which each arrival distribution is replaced by its most likely arrival period. This comparison shows that stochastic timing substantially increases the number of states, the number of transitions, solution time, and memory pressure. A genetic algorithm (GA) is then proposed for the stochastic-timing problem. The GA searches over feasible state-feedback policies and evaluates each policy exactly under the DTMDP transition model. Computational experiments on 330 benchmark instances show that the GA remains close to the exact stochastic solution whenever the latter is available, with an average optimality gap of about $3.44\%$. On the difficult benchmark instances, comprising 90 test cases, the GA remains below the $5\%$ optimality-gap threshold and achieves an average optimization speedup of $6.89 \pm 1.41$ at the $95\%$ confidence level. For instances that cannot be solved exactly on the available hardware, an empirical Bellman-time regression is used to estimate the missing exact resolution time and extrapolate the expected GA speedup.

9. [SCAFFOLD: A Large-Scale Structured Dataset of Computer Science Research Figures with Diagram QA and Chain-of-Thought Reasoning Traces](https://arxiv.org/abs/2609.00018)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00018v1 Announce Type: new Abstract: Computer science papers rely heavily on diagrams: architecture drawings, system flowcharts, and pipeline schematics that often carry more information than the text around them. There is currently no public dataset that pairs this specific kind of figure with captions, context, questions, answers, and step-by-step reasoning, which is exactly what is needed to train a vision-language model to understand them. We present \textbf{SCAFFOLD}\footnote{https://github.com/theranjitraut/scaffold}, a large-scale structured dataset of computer science research figures with diagram QA and Chain-of-Thought reasoning traces. This dataset consists of (image, caption, context, question-answer, chain-of-thought) tuples from arXiv computer science papers prepared using layout detection and PDF parsing, with an AI-assisted question-generation step. The resulting large-sized SCAFFOLD-157K dataset spans 3,058 papers with 29,887 figures (157,387 pairs), a medium-sized SCAFFOLD-37K dataset (36,797 pairs), and a small-sized SCAFFOLD-12K dataset (12,000 pairs). We used SCAFFOLD-12K for baseline experiments on Qwen2.5-VL-3B-Instruct.

10. [Assessing Alignment and Stability of Feature Importance Explanations via Weight of Evidence](https://arxiv.org/abs/2609.00090)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00090v1 Announce Type: new Abstract: Feature importance Methods (FIMs) are widely used in Explainable AI to interpret model predictions, yet attribution scores alone often provide limited insight into the underlying reasoning process. In this work, we introduce a novel perspective by embedding FIMs within a hypothesis-testing framework based on Weight of Evidence (WoE). We quantify how strongly the observed evidence supports any given hypothesis on feature importance. The reference hypothesis can stem from domain knowledge, ground truth, or be derived from the FIM itself. This formulation enables a principled evaluation of FIMs, capturing both their alignment with prior knowledge and their variability. We further provide theoretical results linking WoE to attribution variance. Empirical results shows the applicability and flexibility of our strategy analyzing LIME and SHAP explanations in settings with different reference hypotheses. Overall, our framework offers a complementary tool for assessing FIMs through a contrastive, evidence-based lens.

11. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.82; Date: 2026-09-02T17:04:52Z; Popularity: 2,821 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

12. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

13. [Path to Astra: critical capabilities and frontier safeguards](https://openai.com/index/path-to-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 13:00:00 GMT
   - Summary: Astra is the first OpenAI model to meet the Critical cybersecurity capability threshold under the Preparedness Framework, with stronger safeguards for release.

14. [Healthcare organizations can now connect EHR and additional industry data to ChatGPT](https://openai.com/index/chatgpt-connects-health-records-and-healthcare-sources)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 12:00:00 GMT
   - Summary: ChatGPT can now connect to trusted healthcare data, helping clinicians securely access patient context, medical research, and more.

15. [How law firm Gilbert + Tobin governs and scales AI with OpenAI](https://openai.com/index/gilbert-tobin)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 01 Sep 2026 01:00:00 GMT
   - Summary: See how Gilbert + Tobin combines CEO-led commitment, rigorous governance, and human accountability to scale ChatGPT Enterprise and Codex across the firm.

16. [OpenAI supports California’s bill to advance youth AI safety](https://openai.com/index/supporting-california-bill-advance-ai-youth-safety)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 31 Aug 2026 07:00:00 GMT
   - Summary: OpenAI supports California SB 1119, advancing strong, age-appropriate AI safeguards for teens while preserving opportunities to learn, create, and explore.

17. [Polimill builds Japan's next-generation public AI infrastructure](https://openai.com/index/polimill)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 31 Aug 2026 07:00:00 GMT
   - Summary: Polimill uses OpenAI GPT models and Codex to help municipalities search and use administrative knowledge while accelerating development.

18. [A milestone in expanding access to AI](https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 31 Aug 2026 04:00:00 GMT
   - Summary: ChatGPT Ads reaches $1 billion in annualized revenue run rate and expands globally, supporting broader access to AI through free and affordable options.

19. [Our decision on Cursor following its acquisition by SpaceX](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 28 Aug 2026 06:00:00 GMT
   - Summary: Our decision to wind down our contract providing OpenAI models to Cursor following its acquisition by SpaceX.

20. [Supporting Thailand’s next generation of AI startups](https://openai.com/index/supporting-next-generation-ai-startups-thailand)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 28 Aug 2026 02:00:00 GMT
   - Summary: OpenAI and Thailand’s MHESI launch an eight-week accelerator helping 10 health, wellness, and education startups turn AI prototypes into trusted products.

21. [Better answers, broader thinking: What students gain from ChatGPT and critical-thinking training](https://openai.com/index/what-students-gain-from-chatgpt-critical-thinking-training)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 27 Aug 2026 09:00:00 GMT
   - Summary: A randomized study of more than 1,000 students examines ChatGPT, critical thinking, originality, and student performance on a real-world university assignment.

22. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

23. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

24. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

25. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

26. [Real-Time Intelligence with IBM Time Series Models on Confluent](https://huggingface.co/blog/ibm-research/real-time-intelligence)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 02 Sep 2026 13:49:14 GMT

27. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

28. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

29. [The Open ASR Leaderboard Adds Its First Global South Language](https://huggingface.co/blog/open-asr-leaderboard-global-south)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 GMT

30. [Training and Finetuning Multi-Vector Embedding Models with Sentence Transformers](https://huggingface.co/blog/train-multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT

31. [Granite 4.2 LLMs: How They&apos;re Built](https://huggingface.co/blog/ibm-granite/granite-4-2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 15:14:14 GMT

32. [Quantization-Aware Healing: a compressed, 4-bit model that outperforms its full-precision original](https://huggingface.co/blog/MultiverseComputingCAI/quantization-aware-healing)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 11:39:24 GMT

33. [How Hugging Face Inference Endpoints, Jobs, and Buckets Power Search on Papers with Code](https://huggingface.co/blog/pwc-search)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 GMT

34. [Measuring benchmark optimization in speech recognition](https://huggingface.co/blog/asr-benchmark-optimization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 GMT

35. [HyperWorld: Hypergraph-Structured State Serialization Improves Learned Textual World Models](https://arxiv.org/abs/2609.00002)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00002v1 Announce Type: new Abstract: World models enable language-model agents to predict environment dynamics and plan before acting. In text environments, the model must learn symbolic action effects from serialized state descriptions, but the role of serialization structure remains underexplored. We present HyperWorld, a controlled study of state serialization for learned textual world models. We compare raw observations with three symbolic serializations of the same ground-truth state: independent sentences, pairwise triples, and entity-centered hyperedge units that group multiple related facts around entities and relations. All variants use the same training objective: given a state and an action, predict symbolic effects or judge the action infeasible. Across model scales, data budgets, and in-distribution and out-of-distribution test worlds, hyperedge serialization gives the clearest gains for 0.5B--1.5B models and under distribution shift. Larger models reduce the gap, and pairwise triples can match or slightly exceed hyperedges on in-distribution exact match, but hyperedges achieve the strongest out-of-distribution fact F1 and the best small-to-medium scale trade-off between feasibility detection and effect prediction. In downstream greedy planning, the hyperedge world model also attains the highest success rate among the tested representations. These results show that higher-order state organization is a simple but effective inductive bias for learned symbolic world models, especially when model capacity is limited or test environments differ from training.

36. [I-CARE: Analysis of interference-related phenomena in a controllable, diverse and representative unlearning setting for text-to-image models](https://arxiv.org/abs/2609.00003)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00003v1 Announce Type: new Abstract: Machine unlearning studies the removal of knowledge from an AI model, making the system forget a concept it previously learned. Despite rapid progress in generative machine unlearning, the unintended degradation of semantically related concepts that should have been retained (henceforth, interference) remains poorly characterized and inconsistently evaluated. This paper introduces I-CARE, a methodology that formalizes interference as a first-class object of study in generative unlearning. Rather than proposing a new benchmark or unlearning algorithm, I-CARE provides formal definitions for tasks, metrics, and templates for reporting results, enabling the systematic and reproducible study of interference across unlearning settings. While our methodology is designed to remain valid as models and unlearning algorithms evolve, decoupling long-term scientific insight from transient empirical results, we present a feasibility demonstration with state-of-the-art algorithms and frequently used datasets. The results demonstrate that I-CARE enables meaningful analysis of interference patterns across multiple unlearning settings, establishing the practical applicability of the framework. The software implementation of the methodology is provided in an open-source framework, together with a web-based graphical interface that enables exploration of the outcomes of this study without requiring direct interaction with the codebase or specialized data analysis tools.

37. [Incremental Risk Assessment of Progressive Elder Financial Scams via Instruction-Tuned Small Language Models](https://arxiv.org/abs/2609.00005)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00005v1 Announce Type: new Abstract: Financial scams targeting older adults increasingly occur through text and voice channels such as email, SMS, and phone calls, unfolding over multiple conversational turns that begin with impersonation or casual contact, escalate through trust building and urgency, and culminate in requests for sensitive information or financial transfers. Because risk signals emerge incrementally across turns, effective detection requires models that continuously update risk estimates under resource-constrained deployment settings. We propose a cumulative turn-based risk assessment framework that incrementally aggregates conversational turns and re-estimates risk at each step, enabling dynamic scam monitoring across progressively evolving conversations. A multi-turn dialogue dataset is constructed to cover investment, charity, and tech support scam scenarios, with each dialogue containing two to eight turns and annotated at every cumulative stage with a qualitative risk level, a continuous risk score, an explanatory rationale, and a safety recommendation. Four small language models (Phi-4, LLaMA-3.2, DeepSeek-R1, and Qwen3) are fine-tuned and evaluated under a unified training framework. Fine-tuned small models capture fraud-related linguistic cues and cross-turn escalation patterns while maintaining compact architectures suitable for mobile and resource-constrained deployment settings. Among the evaluated models, Phi-4 and LLaMA-3.2 achieve stronger turn-aware risk estimation performance relative to their parameter scale. These results suggest that structured cumulative modeling can support incremental scam risk assessment in deployment-oriented settings while highlighting the potential of compact language models for privacy-aware and on-device fraud protection.

38. [EULER: Exploring Underused Links with Evidence-Checked Return for Multi-Agent Mathematical Discovery](https://arxiv.org/abs/2609.00032)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00032v1 Announce Type: new Abstract: Mathematical communities work with different objects, invariants, and tools, so transferring a problem across them is expensive and often skipped. We present EULER, a multi-agent system that takes such a transfer--a bridge--as its unit of search. Around a fixed conjecture, EULER runs direct, adjacent-domain, and distant-domain routes in competition; a bridge keeps its budget only if it supplies an operation the source representation cannot execute and its target-side evidence returns to the original statement along a checked implication. Six ordered stress tests reject invalid bridges before expensive search begins. We evaluate EULER on 120 recent conjectures. The conjectures were frozen before search and screened for contamination, and are drawn from public papers by authors who had recently published in the Journal of Combinatorial Theory, Series A, a leading journal in combinatorics. EULER produced 10 proofs and 3 refutations, plus 45 scoped partial results. Two mechanisms held up under ablation: bridge-specific stress tests cut incorrect conclusions from 9 to 3, and bridge material combined with a target-native operation yielded a positive interaction of +4.2 resolved tasks that neither factor produced alone. Domain distance did not reliably predict success; executable operation gain and valid return did.

39. [Mixture of Polyconvex Neural Potentials for Parametric Hyperelasticity: Towards Foundation Material Models](https://arxiv.org/abs/2609.00359)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00359v1 Announce Type: new Abstract: Hyperelastic constitutive models enable modeling large deformations in elastic solids. In common practice, a strain energy density function is prescribed in advance and model-specific parameters are calibrated from experiments. However, many applications require constitutive models for a family of related materials whose mechanical behavior varies with composition. A fixed constitutive model-form may not capture the full range of behavior across the family, while fitting separate forms does not provide a direct way to predict the response of new compositions. Recent work has developed data-driven constitutive models that learn flexible strain energy functions while incorporating key physical constraints. In this work, we propose using mixtures of convex neural potentials based on input convex neural networks as a modular and data efficient approach to modeling material families. Each potential is convex and monotonic with respect to polyconvex strain invariants, while a conditioning network maps material descriptors to mixture weights. We compare the approach with a monolithic partially input-convex neural network using experimental data from PolyJet 3D-printed materials and a synthetic Gent-type benchmark. Across both benchmarks, the mixture architecture generalized better to material descriptors not seen during training. In the PolyJet experimental benchmark, we showed that the mixture architecture is less sensitive to model hyperparameters, while in the Gent-type benchmark it generalized more reliably with sparse data in the material-descriptor space. These results suggest that representing a material family through a small set of shared convex neural potentials provides a useful structural prior for learning descriptor-dependent constitutive behavior from limited data.

40. [Modernization and Statistical Validation of a Multilayer TRIM.SP Code for Low-Energy Muon and Ion Implantation](https://arxiv.org/abs/2609.00094)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00094v1 Announce Type: cross Abstract: We describe the staged modernization of a local multilayer TRIM.SP implementation, denoted TRIM.SP-NL. The work included behavior-preserving refactoring, correction of localized bookkeeping and initialization defects, support for more than five elements per layer, reproducible build modes, and a runtime-selectable random-number-generator (RNG) interface. The RANLUX RNG remains the default reference backend, while PCG32 and xoshiro256** provide faster alternatives without changing the input-deck format. The code validation combined exact regression testing with statistical comparisons over 13 representative target multilayer configurations, comprising 143 energy-configuration points per backend and 429 simulations in total. Across the test suite, PCG32 and xoshiro256** reduced runtime by factors of 1.98 and 2.01, respectively. The implanted, backscattered, and transmitted fractions, as well as the mean implantation depths, range straggling, and representative depth profiles showed no systematic RNG dependence. Together with a Node.js-based graphical interface for setup, scans, and result collection, the Fortran engine forms the open-source TRIM.SP-NL Workbench.

41. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.80; Date: 2026-09-02T14:28:52Z; Popularity: 1,798 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

42. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-30T00:52:00Z; Popularity: 482 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

43. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-01T09:55:44Z; Popularity: 359 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

44. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-09-01T09:42:09Z; Popularity: 237 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

45. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

46. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

47. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

48. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

49. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

50. [DISTAL: Distillation and Self-Supervised Pretraining for Structure-Agnostic Materials Property Prediction](https://arxiv.org/abs/2609.00059)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00059v1 Announce Type: new Abstract: Materials property prediction remains difficult in low-data settings, where many target properties are supported by only a limited number of labeled samples. Models with the strongest predictive accuracy often depend on crystal structures, which restricts their use in early-stage screening when structural information is limited or unavailable. To address this challenge, we propose DISTAL, a dual-prior framework for structure-agnostic materials property prediction that combines self-supervised compositional pretraining with structure-aware knowledge distillation. DISTAL first learns transferable compositional representations from a large virtual composition space using 145 composition-derived descriptors. It then distills structural knowledge from a pretrained ALIGNN teacher into a composition-conditioned student. This setting allows structural priors to be used during training without requiring structural inputs at inference. By integrating explicit compositional descriptors, pretrained latent features, and distilled structural features within a unified prediction pipeline, DISTAL captures complementary signals that are difficult to recover from any single representation alone. Across 39 benchmark tasks, the best-performing multimodal configuration combines all three signals, and improves over the reference benchmark on 37 tasks. DISTAL achieves the strongest overall performance among all evaluated feature combinations. These results indicate that compositional pretraining and structural distillation provide complementary priors and offer a practical route to robust composition-only prediction in small-data materials informatics. The source code and the pre-trained models are anonymously available at: https://osf.io/eq96d/overview?view_only=451617f42f7849e08750bd1852b48980 and will be released at the official link after acceptance.

51. [Attention Sensitivity Is Not Enough: Dissociating Attention-Level and Behavioural In-Context Learning under Fine-Tuning](https://arxiv.org/abs/2609.00064)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00064v1 Announce Type: new Abstract: In-context learning (ICL) lets large language models adapt to new tasks from demonstrations, and fine-tuning can erode this behaviour. Many preservation diagnostics inspect attention: if attention changes when demonstrations change, the model is treated as context-sensitive. This paper asks how far that proxy can be trusted once it is optimised. We formalise \emph{In-Context Sensitivity} (ICS), the average row distance between last-token attention on matched and mismatched demonstration prefixes, and pair it with \emph{ICL-GAP}, the behavioural accuracy gap between the same prefixes. In a controlled four-arm ablation on Llama-2-7B, an ICS-maximising regulariser ($\armKL$) drives ICS to $1.413$, within $0.5\%$ of its geometric ceiling. The behavioural readout tells a different story: ICL-GAP stays near zero and MMLU accuracy moves from $0.371$ to $0.279$, a Goodhart dissociation of the bounded attention proxy. Endpoint statistics locate the mechanism: attention grows sharp and near-disjoint across prefixes yet routes to formatting and demonstration-body tokens rather than labels. A random-label protocol confirms that the behavioural probe family retains dynamic range at the same checkpoints. In a constructive sweep, behaviour gating partially mitigates the effect, while objectives anchored to pretrained computation hold the high-MMLU, moderate-ICS region that divergence maximisers leave. The main lesson is diagnostic: attention-level ICL proxies earn their place as training targets only after validation against behavioural gaps.

52. [Foundation models for electricity price forecasting and battery arbitrage: Can they replace market-specific forecasting models?](https://arxiv.org/abs/2609.00089)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00089v1 Announce Type: new Abstract: Foundation models promise accurate forecasts with little or no task-specific training, but whether they can replace models designed specifically for electricity price forecasting remains unclear. We compare nine variants from five foundation model families, evaluated in zero-shot mode, with two state-of-the-art electricity price forecasting benchmarks in Germany, Poland, and Spain over 2021-2025. Their performance is assessed in terms of point and probabilistic forecasting accuracy, as well as economic value in battery energy storage arbitrage. Only the TabPFN models consistently and significantly outperform the benchmarks across all three markets and all statistical measures. However, this statistical dominance does not translate directly into economic dominance: TabPFN performs best under unlimited bids and riskier quantile-based strategies, whereas the Distributional Deep Neural Network benchmark is more profitable when risk tolerance is lower. Thus, foundation models cannot universally replace market-specific models, and their value depends on both model architecture and the decision problem.

53. [A Non-Isothermal Viscoplastic Constitutive Model for Clay Slip Surfaces](https://arxiv.org/abs/2609.01247)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.01247v1 Announce Type: new Abstract: Clayey slip surfaces control the reactivation and long-term deformation of slow-moving landslides and may experience thermal fluctuations from climate, seasonal ground-temperature changes, or subsurface heat sources. Experiments show that residual shear strength depends on temperature and shearing rate, yet most numerical approaches use temperature-independent strength parameters. We present a non-isothermal viscoplastic constitutive model for clayey slip surfaces implemented with zero-thickness interface elements. It includes temperature-dependent normal and tangential stiffness, progressive degradation of cohesion and friction angle, and rate-dependent viscoplastic slip governed by a non-associated flow rule. Coupling with hydraulic and thermal balance equations allows the interface response to evolve with stress state, temperature, aperture, and accumulated irreversible displacement. Validation against temperature-controlled drained ring-shear tests on bentonite and smectite-rich soils covers heating--cooling, cooling--heating, and combined thermal paths. The simulations reproduce thermal strengthening at slow shearing rates and thermal weakening or limited sensitivity at higher rates. Application to the Congress Street cut benchmark shows that zero-thickness elements improve the representation of strain localization and progressive failure. Increasing temperature progressively degrades interface strength, increases displacement, joint aperture, and shear strain, and accelerates sliding. Temperature-dependent interface degradation can therefore reduce the apparent stability margin of clayey slopes and should be included in slope-stability assessments involving thermal fluctuations.

54. [Solving the Incompressible Navier-Stokes Equations on Oriented Curved Surfaces Discretized by Point Clouds](https://arxiv.org/abs/2609.00216)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00216v1 Announce Type: cross Abstract: We present a meshfree numerical solver for the incompressible Navier-Stokes equations on oriented curved surfaces that are represented by surface point clouds. On curved surfaces, numerical challenges pertaining to stiffness and pressure-velocity coupling are exacerbated. Moreover, vector calculus on curved surfaces differs from its Euclidean counterpart. The presented method operates on surface point clouds in an Eulerian frame of reference without requiring a computational grid or mesh. It achieves consistent approximation in space and time with high order of accuracy; we demonstrate up to order six. The incompressibility constraint is locally imposed as a weak artificial compressibility approximation, avoiding global matrix inversion. We show that the method provides consistent and convergent approximations of surface vector fields and differential operators. We study the relationship between error, spatial resolution, and artificial Mach number and characterize the frequency spectrum of the artificial oscillations. We provide numerical solutions of the incompressible Navier-Stokes equations on symmetric surfaces, such as the sphere and torus, and on parametric and non-parametric asymmetric surfaces. Since the proposed method works directly on unstructured surface point clouds, it provides a promising approach for simulations on image-derived geometries, such as in biological morphogenesis from microscopy videos.

55. [Why Multi-Layer Message Passing Works: Completeness Theory for Graph Neural Network Interatomic Potentials](https://arxiv.org/abs/2609.00528)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00528v1 Announce Type: cross Abstract: We prove that the Hypergraph Neural Network, an invariant architecture with 3-body message passing, is a universal approximator for potential energy surfaces. Our main contribution is a multi-layer completeness theory. We show that $L$ layers of message passing on sparse, cutoff-based graphs achieve the same representational power as having access to the full $L$-hop neighborhood, provided the configurations are generic, satisfy an overlap condition and a connectivity condition. This provides the first rigorous justification for the common practice of using multi-layer message passing with a per-layer cutoff smaller than the physical interaction range, the setting used by virtually all practical graph neural network based machine-learned interatomic potentials. As immediate consequences, we show that both DPA3 and CHGNet architectures inherit universal approximation.

56. [Spectral element lattice Boltzmann method for non-ideal gases with partial wetting boundary condition](https://arxiv.org/abs/2609.00535)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00535v1 Announce Type: cross Abstract: We present a spectral element lattice Boltzmann method (LBM) for partial wetting on curved geometries. A non-ideal gas phase-field model is incorporated into the LBM framework to enable phase separation with a constant interface thickness and the potential form of surface tension force is used. We adopt the force-splitting approach, yielding significantly improved stability and accuracy. Complex boundaries are naturally handled using a flux bounce-back scheme, which resolves inconsistencies in normal vectors across adjacent elements. Additionally, a general wetting boundary condition is implemented to capture static contact line in a thermodynamically consistent manner. The method is validated through simulations of droplets on flat surfaces, 2/3-dimensional curved surfaces, and equilibrium droplets without boundaries. Results demonstrate that parasitic currents are significantly reduced on unstructured meshes with complex geometries, reaching residual kinetic energy levels on the order of $10^{-24}$ for wetting configurations and $10^{-30}$ for isolated droplets.

57. [GW and Bethe-Salpeter Theory for Molecular Polaritons, Quasiparticles, and Excitons](https://arxiv.org/abs/2609.00594)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00594v1 Announce Type: cross Abstract: The electron self-energy is central to quasiparticle theory, yet how an optical cavity enters it remains unclear. We address this question for a molecule in a single-mode cavity using the dipole-gauge Pauli-Fierz Hamiltonian and a coherent-state QED Hartree-Fock reference. The cavity enters through three channels: the static dipole self-energy (DSE) shift of reference orbital energies, direct DSE augmentation of the screened interaction, and the polariton pole carrying the bilinear electron-photon coupling. We benchmark QED-$GW$ ionization potentials (IPs) and electron affinities (EAs) against a cavity $\Delta$-method ladder from QED-HF to correlated wave-function methods, whose cavity-induced shifts agree within 1 meV where directly comparable. For closed-shell molecules with unbound anions, $GW$ systematically overestimates cavity-induced IP redshifts, whereas EA shifts are reproduced nearly quantitatively, although this does not imply comparable accuracy for absolute EAs. For ionic molecules with bound anions, this ordering reverses, consistent with published QED coupled-cluster results. Coupling and detuning scans show that the error is predominantly quadratic in $\lambda$ and DSE-driven rather than resonant. The spectral function develops a polariton-replica photoemission sideband with weight scaling as $\lambda^2$. In the static screened interaction used in the Bethe-Salpeter equation, bare-photon exchange cancels the matching DSE contribution to the direct interaction, while exchange and polariton-screening corrections remain. Their net effect on the lowest excitation is appreciable only for ammonia in the molecules studied. Exciton-binding energies involving unbound anions are strongly basis-dependent and should therefore be viewed as diagnostics of electron-hole interactions rather than basis-converged molecular quantities.

58. [Diagnosing Latent Energy Decomposition in Machine-Learning Interatomic Potentials via Interacting Quantum Atoms](https://arxiv.org/abs/2609.00674)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00674v1 Announce Type: cross Abstract: Machine-learning interatomic potentials (MLIPs) can reproduce potential energies and forces accurately, but their internal energy allocation is often difficult to interpret. E3D-IQA is introduced as a diagnostic framework connecting the latent edge-energy representation of an Allegro-type MLIP with Interacting Quantum Atoms (IQA) energy decomposition. The Allegro edge-energy path is retained as a latent pair contribution, while a node-energy path is trained against the IQA intra-atomic energy. IQA interatomic energies are not direct training targets; instead, the learned edge energies are evaluated after training against the IQA pair terms. Tests on H/C/N/O organic reaction structures show that intra-atomic supervision is essential: energy and force training alone does not recover an IQA-like one-body/two-body allocation. With intra-atomic supervision, node energies reproduce IQA intra-atomic terms, and latent edge energies show meaningful correspondence with IQA interatomic terms. Residual errors are concentrated in positive or weak pair interactions, exposing internal allocation failures that remain hidden in total-energy and force metrics. Adding structures labeled only with energies and forces improves transfer to larger molecules and reduces decomposition errors. E3D-IQA therefore provides a route for diagnosing and guiding latent scientific representations using partially labeled quantum-chemical datasets.

59. [Assessment of Numerical Lift Coefficient Data for a Circular Cylinder with Application to Bladeless Turbines](https://arxiv.org/abs/2609.00850)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00850v1 Announce Type: cross Abstract: We assess computed lift coefficient data for flow past a circular cylinder to evaluate their suitability for practical applications. Specifically, we consider lift coefficient data for a circular cylinder over Reynolds numbers from 120 to 8000. The results are obtained from two-dimensional finite element simulations of the incompressible Navier-Stokes equations using pressure robust discretizations. We compare the computed lift coefficients with published experimental and numerical results, finding good agreement in some cases but significant disagreement in others. Because lift fluctuations are central to vortex-induced vibration concepts, these data therefore provide input for the analysis and preliminary design of bladeless turbines.

60. [Spatio-temporal coherent molding and retrieval of pulsed signals in optical waveguides](https://arxiv.org/abs/2609.00856)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 02 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.00856v1 Announce Type: cross Abstract: Optical waveguides are key elements for high fidelity, long distance optical communications. Coupled waveguide arrays allow for higher information density, steerting the propagation direction, and for encoding information. However, due to the mixing of relative phases for short pulses containing multiple waveguide-mode frequencies, a process for retrieving an encoded input state once these signals undergo coherent propagation remains elusive. A concept is presented to extract with high fidelity the phase-encrypted input signal from spatio-temporal propagated states. As a realization, an array of coupled waveguides is suggested with the retrieval mechanism being realized by local phase shifts that comply with the identified retrieval concept. Three dimensional full-wave electromagnetic simulations for broadband optical signals in coupled dielectric waveguides confirm the validity of the scheme and the high fidelity of information retrieval pointing to potential applications, for instance in ultrafast coherent coding and decoding of information imprinted on pulse sequences.

61. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.74; Date: 2026-09-02T06:18:44Z; Popularity: 736 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.70; Date: 2026-09-02T02:20:05Z; Popularity: 696 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

64. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.20; Date: 2026-09-02T02:03:59Z; Popularity: 203 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

65. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-08-29T17:49:41Z; Popularity: 118 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Long-Horizon State Tracking in LLMs: Executing MD5 through a Deep Sequence of Dependent Tool Calls

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.00012

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
