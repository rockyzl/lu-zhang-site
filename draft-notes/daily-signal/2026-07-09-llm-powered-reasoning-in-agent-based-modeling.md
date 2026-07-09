# Daily signal sidecar - 2026-07-09

## Selected Signal

- Title: LLM-powered reasoning in agent-based modeling
- URL: https://arxiv.org/abs/2607.06757
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: LLM-powered reasoning in agent-based modeling
- Primary source: https://arxiv.org/abs/2607.06757
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

Total candidates reviewed after duplicate-source filtering: 67

1. [LLM-powered reasoning in agent-based modeling](https://arxiv.org/abs/2607.06757)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06757v1 Announce Type: new Abstract: Agent-based modeling (ABM) has the capability to model millions of individuals and their interactions, which is useful for policy making. However, ABMs have traditionally relied on static prior, which prevents the models from adapting to real-time changes. Our research provides a novel approach to addressing this information gap. Large language models (LLMs) offer new opportunities to predict human decision-making. Here, we introduce a scalable Hybrid Agent-based and Language-driven Epidemic (HALE) modeling framework that leverages LLMs to predict human decision-making in an ABM simulation. As a proof-of-concept, we use HALE to simulate COVID-19 and its effects in Salt Lake County, UT.

2. [Evaluating SageMath-Augmented LLM Agents for Computational and Experimental Mathematics](https://arxiv.org/abs/2607.06820)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06820v1 Announce Type: new Abstract: Recent advances in AI for Mathematics have focused largely on autoformalization and theorem proving, leaving the role of Computer Algebra Systems (CAS) in agentic LLM workflows underexplored. We propose a ReAct-style agentic setup that combines LLM reasoning with verifiable feedback from SageMath, together with Context7 for the up-to-date documentation. We evaluate this agentic setup across frontier models for solving research-level mathematical problems from the RealMath benchmark in a setting that emulates a computational-mathematics research loop. We also propose a refinement to the RealMath benchmark by introducing a multi-step post-processing procedure and a multi-stage validation pipeline, both of which improve the quality and reliability of the extracted problem set. Our experiments reveal substantial performance gains from SageMath access across all evaluated models on +9.7~pp on average, the gains range from 1.5~pp to 27.8~pp and narrow the gap between open-weight and closed models. Qwen~3.7-Max benefits from SageMath the most, while GPT-5.5 achieves the highest solve rate of $75.2\%$ and the lowest token usage among tool-enabled configurations. Our findings suggest that CAS-augmented agents represent a promising direction for assisting mathematicians in computational exploration, and we believe that this work is a step towards automated conjecture discovery. The project repository is available online.

3. [The Harness Effect: How Orchestration Design Sets the Token Economics of Enterprise Agentic AI](https://arxiv.org/abs/2607.06906)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06906v1 Announce Type: new Abstract: Agentic AI development today runs on token maxing: buying capability with tokens -- longer reasoning traces, more turns, wider tool payloads, bigger replayed contexts -- so tokens per task grow faster than task value. Falling per-token prices mask the pattern; total spend rises anyway. We argue the decisive lever against token maxing is the harness: the orchestration layer that assembles context, exposes tools, sequences turns, delegates work, and carries enterprise observability and governance. We isolate it with a controlled swap: 22 locked evaluation tasks, six foundation models (Claude Sonnet 4.6, Gemini 3.1, Gemini Flash 3.5, Qwen 3.6, GLM 5.1, Palmyra X6), changing only the orchestration layer -- a frozen conventional production loop versus the Writer Agent Harness. Holding models constant, the harness cuts blended cost per task 41% ($0.21->$0.12), median wall-clock 44% (48s->27s), and tokens per task 38% (14.2k->8.8k), with task-completion quality at parity (0.78->0.81, directional at this sample size). Efficiency is model-invariant -- every model gets cheaper (33-61%) -- while quality gains are capability-dependent: a model's gain correlates almost perfectly with its baseline strength (r=0.99, n=6), a phenomenon we term harness leverage. Quality per dollar rises 82%; task-completions per million tokens rise from 54.9 to 92.0. On this workload the orchestration layer moved cost per task more than the full spread of the model menu did. We formalize token economics at the orchestration layer (including effective input price under prompt caching), detail the six mechanism families behind the effect -- cache-shape discipline to failure-spend governance -- compare six widely used agent systems on the same axes, and argue the harness is the one component whose efficiency multiplies across every model an organization runs -- present and future.

4. [Cost-Effective Agent Harnesses for Abstract Reasoning and Generalization on ARC-AGI-1](https://arxiv.org/abs/2607.06764)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06764v1 Announce Type: new Abstract: Recent progress on ARC-AGI-1 from disclosed architectures has come broadly from two regimes: heavy test-time compute over frontier models (evolutionary search, exhaustive sampling, extended chain-of-thought), or benchmark-specific training in which small models are fine-tuned on ARC data, often with task-specialized architectures. We study a third regime: an open-weight model in non-thinking mode (DeepSeek V3.2) under a strict budget, with no ARC-specific fine-tuning. We study what is recoverable through architecture alone, building agentic harnesses that decompose pattern-discovery and program-synthesis stages explicitly. First, we introduce an Explorer-Definer Pipeline that separates pattern discovery from executable transformation synthesis, implemented as a two-stage agent pipeline. Next, we present the Reflective Orchestrator, which augments the pipeline with autonomous exploration of new transformations when previous hypotheses fail on training pairs. On the ARC-AGI-1 public 400-task evaluation set, the pipeline reaches 57.50% pass@2 at \$0.25 per task, and the orchestrator reaches 67.25% pass@2 at \$0.62 per task. Together these architectures lift a 15.50% one-shot baseline by ~52 points without benchmark-specific training or heavy test-time compute. Furthermore, the orchestrator-driven lift tests a falsifiable diagnostic the pipeline produces; unbiased pass@k analysis suggests the pipeline is generation-bound, not selection-bound (selection via training-pair accuracy captures ~95% of the candidate ceiling) and predicts that significant improvement requires broader generation, not better ranking. The orchestrator implements this prediction via adaptive re-exploration and confirms it (unbiased pass@1 lift +9.81 pp, matching selection-mediated pass@2 lift). An additional pipeline ablation identifies its think tool as a significant component, with removal reducing pass@2 by 5.75 pp.

5. [Separating signal from noise in coding evaluations](https://openai.com/index/separating-signal-from-noise-coding-evaluations)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 08 Jul 2026 13:00:00 GMT
   - Summary: A new analysis from OpenAI reveals issues in SWE-Bench Pro, a popular coding benchmark, raising concerns about reliability and accuracy in evaluating AI models.

6. [MUFG aims to become AI-native with OpenAI](https://openai.com/index/mufg)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 GMT
   - Summary: MUFG uses ChatGPT Enterprise to build an AI-native organization, improve workflows, and deliver new AI-powered financial services at scale.

7. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

8. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

9. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

10. [Run AI workloads on any cloud, store on Hugging Face: zero-egress storage with SkyPilot](https://huggingface.co/blog/skypilot-hf-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

11. [AgentLens: Production-Assessed Trajectory Reviews for Coding Agent Evaluation](https://arxiv.org/abs/2607.06624)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06624v1 Announce Type: new Abstract: We present AgentLens, a production-assessed benchmark for interactive code agents. Most code-agent benchmarks reduce a run to a single bit -- did the task pass? -- but the people who actually use these agents experience the entire trajectory: how the agent follows instructions, uses its tools, verifies its own work, recovers from mistakes, and talks to them along the way. AgentLens evaluates that whole trajectory. It pairs formal verification, where an objective check exists, with LLM-written trajectory reviews and side-by-side comparisons, so that each run yields a readable explanation of why the score is what it is. This makes AgentLens useful for more than ranking models: we use it to diagnose model behavior, compare successive versions of our own agent, and catch product regressions in a nightly evaluation pipeline. We release the benchmark as open source at https://github.com/agent-lens/agent-lens-bench.

12. [When Does In-Context Search Help? A Sampling-Complexity Theory of Reflection-Driven Reasoning](https://arxiv.org/abs/2607.06720)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06720v1 Announce Type: new Abstract: Training large language models (LLMs) with extended reasoning has enabled in-context search, in which models iteratively generate, critique, and revise solution attempts. We provide a theoretical analysis of in-context search by modeling it as approximate inference over reasoning traces, where the base model defines a prior and self-reflection provides feedback for posterior updates, and study the resulting inference-time sampling complexity - the number of sequential attempts needed to achieve high success probability. We show that when reflections reliably localize early mistakes, in-context search can yield exponential improvements over the base model, solving problems with exponentially small zero-shot pass rates using only a polynomial number of sequential attempts, whereas when this property fails, conditioning on past attempts offers no asymptotic benefit over parallel sampling. We further show that these gains are robust and learnable: approximate posterior updates suffice, and cross-entropy training on search rollouts recovers the required behavior with polynomial sample complexity. Finally, we show that under a stagewise abstraction of reinforcement learning with verifiable rewards, the optimal policy extension implements the same posterior reweighting rule. We validate key qualitative predictions of the theory on real large reasoning models.

13. [Large Behavior Model: A Promptable Digital Twin of the Retail Customer](https://arxiv.org/abs/2607.06993)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06993v1 Announce Type: new Abstract: Customer behavior modeling underpins recommendation, marketing, and decision support, yet existing approaches either optimize predictive accuracy without explaining decisions or simulate users without grounding them in real behavioral data. We present the Large Behavioral Model (LBM) that learns customer decision making directly from large-scale retail transactions through a unified Person-Environment formulation. Customer state is represented by a behavioral profile derived from historical purchases, while product context is incorporated through retrieval-augmented generation. The model is trained using continued pre-training on verbalized behavioral data, supervised fine-tuning for decision generation, and reinforcement learning with verifiable rewards for evidence-based calibration. We evaluate the proposed framework on purchase prediction, hard-negative discrimination, basket completion, promotion response, and cross-domain voucher redemption. The model consistently outperforms frontier general-purpose language models on in-domain retail tasks while demonstrating strong zero-shot and fine-tuned transfer across retailers and decision domains. Ablation studies show that continued pre-training is the primary driver of behavioral generalization, retrieval is most effective when applied during both training and inference, and reinforcement learning improves reliance on explicit behavioral evidence over generic language-model priors. These results demonstrate that behavioral knowledge encoded in transaction histories can be effectively learned by language models, providing a scalable foundation for customer digital twins and behavior simulation.

14. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.31; Date: 2026-07-09T15:27:07Z; Popularity: 2,307 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

15. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-04T02:17:48Z; Popularity: 20 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

16. [Our approach to government and national security partnerships](https://openai.com/index/government-national-security-partnerships)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 13:30:00 GMT
   - Summary: Learn how OpenAI approaches government and national security partnerships, with principles for responsible AI use, democratic accountability, and public safety.

17. [Helping K–12 educators build practical AI skills](https://openai.com/index/k-12-educators-practical-skills)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 10:00:00 GMT
   - Summary: OpenAI Academy and the Walton Family Foundation are bringing hands-on AI Skills Jams to help K–12 educators build practical AI skills for the classroom.

18. [Introducing GPT-Live](https://openai.com/index/introducing-gpt-live)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT
   - Summary: A new generation of voice models for natural human-AI interaction, now powering ChatGPT Voice.

19. [Australian Payments Plus moves faster with ChatGPT and Codex](https://openai.com/index/australian-payments-plus)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 GMT
   - Summary: See how Australian Payments Plus uses ChatGPT Enterprise and Codex to move faster through payments complexity. AP+ saves time, improves quality, and keeps human judgment central.

20. [How ChatGPT adoption has expanded](https://openai.com/index/how-chatgpt-adoption-has-expanded)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 09:00:00 GMT
   - Summary: New OpenAI Signals data shows how ChatGPT adoption is growing globally, with users increasing usage, exploring more capabilities, and driving growth across regions and languages.

21. [Core dump epidemiology: fixing an 18-year-old bug](https://openai.com/index/core-dump-epidemiology-data-infrastructure-bug)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT
   - Summary: OpenAI engineers used large-scale core dump analysis to debug rare infrastructure crashes, uncovering both a hardware fault and a long-standing software bug.

22. [Inside Genebench-Pro](https://openai.com/index/genebench-pro/case-studies)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 30 Jun 2026 00:00:00 GMT

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [Data for Agents](https://huggingface.co/blog/nvidia/open-data-for-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 17:16:05 GMT

25. [Native-speed vLLM transformers modeling backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT

26. [From Hugging Face to Amazon SageMaker Studio in one click](https://huggingface.co/blog/amazon/one-click-to-sagemaker-studio)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 21:15:33 GMT

27. [Hugging Face Models on Foundry Managed Compute](https://huggingface.co/blog/microsoft/foundry-managed-compute)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 15:20:06 GMT

28. [LeRobot v0.6.0: Imagine, Evaluate, Improve](https://huggingface.co/blog/lerobot-release-v060)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

29. [PRX Part 4: Our Data Strategy](https://huggingface.co/blog/Photoroom/prx-part4-data)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 15:30:55 GMT

30. [🤗 Kernels: Major Updates](https://huggingface.co/blog/revamped-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 00:00:00 GMT

31. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](https://huggingface.co/blog/cerebras-gemma4-voice-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 GMT

32. [ScarfBench: Benchmarking AI Agents for Enterprise Java Framework Migration](https://huggingface.co/blog/ibm-research/scarfbench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 30 Jun 2026 18:32:50 GMT

33. [QANTIS: Hardware-Calibrated Sequential POMDP Belief Updates on IBM Heron](https://arxiv.org/abs/2607.06760)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06760v1 Announce Type: new Abstract: Autonomous systems under partial observability act on beliefs, not raw sensor events. QANTIS treats the quantum processor as a calibrated belief-update service in that loop: it receives a prior and an observation model, estimates the rare-event evidence term, and returns an ordinary posterior to a classical planner. This paper asks whether that service can be reused across a sequential Tiger POMDP horizon on present IBM Heron hardware without corrupting the planner-facing posterior. We answer with a controlled hardware case study rather than an end-to-end autonomy or wall-clock speedup claim. The study compares no amplification, guarded Grover amplification, and all-step fixed-point amplification on the same trajectory, then checks whether the returned posterior would change the downstream action. All-step FPAA preserves the Tiger posterior across the reported 8-step and 12-step primary runs, and the 20-step and 32-step controls remain inside the same operating band. In every reported decision check, the hardware posterior and the exact Bayes posterior select the same immediate action. Boundary-aware BIQAE stabilizes amplitude estimation near zero and near one, while a rare-event sweep maps the logical sample-complexity envelope for one-in-a-million evidence. The result is an operating envelope for a hardware-calibrated belief-update primitive, not a standalone hardware-advantage claim.

34. [Grounding Spatial Relations in a Compact World Model: Instruction Leakage and a Goal-Free Dynamics Fix](https://arxiv.org/abs/2607.06925)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06925v1 Announce Type: new Abstract: Compact world models that condition on a language goal promise to ground relations such as ``put the red block left of the blue block'' using a sparse set of explicit \emph{reference anchors}. We ask when such references actually ground a relation, and identify a trap: a goal-conditioned predictor reaches a striking $0.90$ relation-readout accuracy, yet this is \emph{instruction transcription}, not perception. Withholding the goal collapses it to chance ($0.90\!\to\!0.27$, three seeds) and a counterfactual instruction makes the predicted anchors follow the \emph{false} instruction $94.5\%$ of the time (true scene $2.3\%$; $N{=}256$). Tested across three settings and a within-task ablation, our central claim characterizes the confound: \textbf{instruction leakage occurs when the scored quantity is transcribable from the instruction (when the instruction names the answer) and is essentially independent of how predictive the non-instruction inputs are.} Our tabletop and the external BabyAI benchmark leak, whereas a Language-Table forward-dynamics world model whose instruction names \emph{referents} does not, until the instruction is augmented to name the direction; and degrading the action never increases leakage, the opposite of what predictor-competition predicts. The diagnosis prescribes the fix: keep the goal out of the dynamics (it belongs to the planner's cost) and supervise the \emph{read} path, recovering genuine, instruction-independent grounding ($0.88$, identical with and without the goal). The detection protocol and remedy apply to any goal-conditioned world model whose instruction names the scored quantity.

35. [Learning social norms enhances compatibility in dynamic human-AI coordination](https://arxiv.org/abs/2607.07021)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07021v1 Announce Type: new Abstract: Humans continuously coordinate with others in dynamic interactions, often through implicit, hard-to-quantify social norms that act as shared tacit expectations among interacting agents. As AI agents, including large language models (LLMs), become embedded in daily life, they increasingly participate in such interactions and reshape social interaction structures. Yet they often fail to coordinate with humans in an effective, considerate, and natural manner. We hypothesize that this gap arises because existing approaches align model behavior with human demonstrations without explicitly quantifying the underlying norms that generate such behavior. We selected pedestrian-vehicle interaction as a representative dynamic interaction and developed a simplified experimental platform that captures its key interactive features. From 3,456 dynamic human interactions collected via this platform, we identified three principles underlying human social norms: outcome predictability, value alignment, and advantage awareness. Incorporating these principles into AI agents significantly improves human-AI coordination. In the closed-loop interaction task with humans, the social-norm-informed LLM achieved a nearly fourfold higher total score than the baseline strategy and outperformed human-human interactions by 43%. These findings indicate that formalizing tacit social norms into explicit, quantifiable principles can enable AI agents to achieve mutually beneficial coordination in dynamic interactions, supporting their more natural integration into human society.

36. [A Quiet Failure in Calibrated Virtual Screening: Marginal Conformal Prediction Under-Covers the Minority Class, and a Class-Conditional Fix Recovers It](https://arxiv.org/abs/2607.06605)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06605v1 Announce Type: new Abstract: Conformal prediction is being adopted in drug discovery to put an honest number on model reliability: pick an error rate alpha, and the method returns prediction sets containing the true label with probability at least 1 - alpha. We show this guarantee can be dangerous on imbalanced datasets. Across four datasets, standard (marginal) conformal prediction hits its global 90% coverage target while leaving the minority class badly exposed: realized minority coverage falls to 64.8% on blood-brain-barrier penetration and to 4.2% on clinical-trial toxicity, where the rare class is nearly abandoned. The failure is not tied to one model: a random forest, a graph network, and a frozen chemical language model all reproduce it (p < 0.001 in every case), with severity tracking baseline calibration on rare labels rather than architecture. A conservation identity explains the effect: the minority's shortfall equals the majority's surplus amplified by the imbalance ratio, predicting the measured gap to within one point and ordering severity across datasets. The failure survives realistic scaffold splits and a second conformal score, while aggregate accuracy and overall coverage stay reassuringly high, which is exactly why it is easy to miss. Class-conditional (Mondrian) conformal prediction closes the gap on every dataset, restoring minority coverage to target for a modest increase in prediction-set size. We localize the failures to generic molecular scaffolds - plain benzene and pyridine cores occurring in both classes - propose a one-number diagnostic, and show with a cost model that abstaining on affected compounds flips a screening campaign from net-negative to net-positive utility. Our contribution is demonstrating on real chemistry how severe and invisible this known conformal-theory gap becomes under imbalance, and laying out a practical protocol restoring per-class reliability.

37. [D2PO: Optimizing Diffusion Samplers via Dynamic Preference](https://arxiv.org/abs/2607.06609)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06609v1 Announce Type: new Abstract: We propose D2PO (Dynamic Direct Preference Optimization), a principled framework for optimizing diffusion sampling policies with respect to timestep schedules and classifier-free guidance (CFG) weights. Our work is motivated by a fundamental limitation of existing student-teacher regression frameworks; low-NFE student samplers are trained to mimic high-NFEteachers, often sacrificing high-frequency texture fidelity while preserving coarse global structures, thereby misaligning the sampler with perceptual quality. D2PO addresses this challenge by reformulating sampler optimization as a preference-based alignment problem, leveraging the Direct Preference Optimization (DPO) framework. To make DPO applicable to diffusion samplers, we model the sampling policy as an energy-based model (EBM), transforming preference comparisons into tractable energy differences. We further introduce a novel energy formulation derived directly from the pretrained score network, enabling preference evaluation in perturbed spaces that jointly capture structural consistency and fine-grained details. Moreover, we introduce dynamic preferences, where the preferred samples used for alignment progressively improve as the sampling policies are learned. This self-improving mechanism replaces rigid static teacher supervision with an iterative, preference-guided refinement process, providing progressively stronger alignment signals. Extensive experiments demonstrate that D2PO aligns diffusion samplers with perceptual quality more faithfully, unlocking the full potential of high-quality teachers and consistently outperforming conventional regression-based schedulers under low-NFE constraints.

38. [Radiation Damage Cascades in Fullerite Using Molecular Dynamics](https://arxiv.org/abs/2607.06962)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06962v1 Announce Type: new Abstract: Molecular dynamics is used to study radiation cascades in solid C60 under ambient conditions. Simulations are performed for Primary Knock-On Atom (PKA) energies from 0.1 to 1 keV, and cascades are sampled over many PKA directions to collect statistics. Energies and forces are described using the Environment Dependent Interaction Potential for carbon paired with the Ziegler-Biersack-Littmark potential for short-range interactions, and cascade behaviour is characterized by tracking kinetic energy, hybridization and bond connectivity as a function of time. Compared to most materials, fullerite exhibits an unusual radiation response due to weak thermal transfer between C60 molecules leading to a thermalization phase lasting hundreds of picoseconds. The cascades damage the C60 molecules and link them together, and a linear relation is found between the number of cross-linked molecules and the number of new sp3 atoms. The threshold displacement energy computed is 18 eV, in agreement with experiments

39. [Inverse Low-Dimensional Manifold Reconstruction Framework for Spatiotemporal Reconstruction of Compressible Physical Fields](https://arxiv.org/abs/2607.07084)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07084v1 Announce Type: new Abstract: Compressible physical fields are widely present in the real physical world, but current artificial intelligence lacks an understanding mechanism for the non-differentiable features in compressible physical fields. Addressing the limitations of existing deep learning architectures in handling global non-differentiable features, we propose the Inverse Low-Dimensional Manifold reconstruction framework (ILDM). This framework couples the Non-differentiable Approximation Function (NAF) for capturing non-differentiable features in compressible flows with the Smooth Fluid Reconstruction (SFR) module tailored for smooth fluid regions. Extensive evaluations across 1D and 2D benchmarks, including Riemann problems and double Mach reflection, demonstrate that ILDM significantly outperforms cPINN and R-adaptive DeepONet. Specifically, ILDM achieves superior localization of non-differentiable interfaces and maintains robust super-resolution performance even with low-resolution inputs, establishing a physically consistent and scalable paradigm for data-driven fluid dynamics.

40. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.46; Date: 2026-07-09T13:35:49Z; Popularity: 459 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

41. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.33; Date: 2026-07-09T15:51:07Z; Popularity: 1,335 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

42. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-07-09T13:14:59Z; Popularity: 228 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

43. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-09T09:10:31Z; Popularity: 209 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

44. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

45. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

46. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

47. [TriRoute: Unified Learned Routing for Joint Adaptive Attention, Experts, and KV-Cache Allocation](https://arxiv.org/abs/2607.06601)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06601v1 Announce Type: new Abstract: Conditional computation can decouple language model quality from per-token inference cost, yet leading techniques act on a single axis in isolation: Mixture-of-Experts (MoE) sparsifies the FFN, Mixture-of-Depths (MoD) skips whole transformer blocks, and KV-cache quantization compresses attention memory. We argue these three decisions (attention resolution, expert selection, and cache bit-width) are strongly coupled and should be made jointly: a token rare enough to warrant full attention may also need high-precision caching regardless of which expert processes it. We introduce TriRoute, a single lightweight controller shared across all three axes that, for every token at every layer, emits a coordinated policy: (i) an attention mode (skip/local/full), (ii) a sparse set of FFN experts (with a null expert recovering MoD), and (iii) a KV-cache bit-width. The controller trains end-to-end via a heterogeneous relaxation (Gumbel-Softmax with straight-through estimation for categorical decisions and load-balanced top-k gating for experts) under a Lagrangian budget constraint that turns the average compute and memory cost into a controllable knob. We identify a cross-axis routing-collapse cascade in naive joint training, where collapse on one axis propagates to the others, and address it with per-axis normalization and a coupling-aware balancing loss. On decoder-only models from 160M to 1.3B parameters at compute-optimal token counts, TriRoute Pareto-dominates the best independent MoD+MoE+KV-quantization combination at matched inference FLOPs and memory, while better preserving tail-case robustness on rare entities, code, and arithmetic that pure perplexity optimization erodes. Post-hoc analysis reveals interpretable structure: the controller allocates full attention and high-precision cache to sentence-initial positions, rare subwords, and named entities, while cheaply routing function words.

48. [NEST: Tackling Dataset-Level Distribution Shifts via Regime-Oriented Mixture-of-Experts](https://arxiv.org/abs/2607.06607)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06607v1 Announce Type: new Abstract: Accurate long-term forecasting in complex systems is frequently compromised by dataset-level distribution shifts, where diverse underlying behavioral modes and evolving system states drive the dynamic multivariate time-series. While existing methods predominantly focus on local temporal shifts, they fail to explicitly model the global structural challenge where datasets are composites of distinct operational regimes. In this paper, we propose NEST, a specialized framework designed to model and recompose these evolving structures through a two-phase dense MoE architecture. NEST first facilitates structural specialization by partitioning the dataset into distinct operational regimes through unsupervised clustering in a principled moment-entropy space. We introduce a regime-oriented router mechanism that generates initial expert weights based on temporal content, subsequently refined through geometric modulation to regime centroids. Crucially, rather than acting as monolithic predictors, individual experts function as specialized kernels that capture regime-specific dynamics by evolving unique variate-attention patterns. Extensive evaluations on diverse benchmarks, including heterogeneous network traffic and physical phenomena, demonstrate that NEST consistently achieves state-of-the-art performance. Our code and datasets are available at https://github.com/Aaralshin/NEST

49. [Deep Reinforcement Learning for Reliability Based Bi-Objective Portfolio Optimization](https://arxiv.org/abs/2607.06610)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06610v1 Announce Type: new Abstract: Portfolio optimization under uncertainty is inherently a multi-objective decision problem involving complex interactions among return, risk, market dynamics, and practical investment constraints. Existing reliability based portfolio optimization approaches primarily rely on static optimization frameworks and often fail to capture sequential decision making, tail risk, and market frictions such as transaction costs. To address these limitations, we propose a deep reinforcement learning framework for multi-objective reliability based portfolio optimization (MORP-DRL). The proposed framework jointly optimizes expected return and downside risk using three complementary risk measures: variance, Conditional Value-at-Risk (CVaR), and Entropic Value-at-Risk (EVaR). To model uncertainty and heavy-tailed market behavior, asset returns are represented using GARCH(1,1), Extreme Value Theory, and a t-copula dependence structure, while realistic scenarios are generated through quasi-Monte Carlo simulation. A Proximal Policy Optimization (PPO) based strategy is developed under practical constraints including transaction costs and portfolio bounds, and is benchmarked against NSGA-II. Experiments on ten global equity indices across pre-COVID, COVID, and post-COVID market regimes demonstrate that MORP-DRL achieves competitive risk-return performance, reduced downside risk during periods of market stress, and scalability to high-dimensional portfolio settings.

50. [STAGformer: A Spatio-temporal Agent Graph Transformer for Micro Mobility Demand Forecasting](https://arxiv.org/abs/2607.06614)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06614v1 Announce Type: new Abstract: Accurate station-level demand forecasting is essential for the efficient operation of bike-sharing systems, yet it remains challenging due to complex spatio-temporal dependencies and the large scale of urban networks. This paper presents STAGformer, a Spatio-Temporal Agent Graph Transformer that achieves efficient global modeling with linear computational complexity. The model introduces a two-step agent attention mechanism, where a small set of learnable spatial and temporal agent tokens first aggregate global information and then broadcast it back to individual stations and time steps, effectively capturing long-range interactions while reducing the quadratic cost of standard self-attention to O(NT). STAGformer integrates four core modules: a spatio-temporal encoder that fuses dynamic node features with external contextual factors (weather, time, points of interest), a graph propagation module for spatial neighbor aggregation, a temporal convolution module for local pattern extraction, and the agent attention module for global dependency modeling. Extensive experiments on two real-world datasets -- NYC Citi-Bike and Chicago Divvy-Bike -- demonstrate that STAGformer consistently outperforms state-of-the-art baselines across multiple prediction horizons, achieving significant improvements in both RMSE and MAE. Ablation studies validate the contribution of each component, with the agent attention mechanism proving critical for modeling global spatio-temporal dependencies.

51. [Inertia-1: An Open Exploration of Wearable Motion Foundation Models](https://arxiv.org/abs/2607.06617)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06617v1 Announce Type: new Abstract: Wearable motion sensing provides a continuous and scalable window into human behavior and health, making it a natural fit for foundation models, yet its pretraining and scaling principles remain poorly understood. Prior work studies isolated design choices, such as sensor placement or sampling frequency, often under fixed settings and narrow downstream tasks that fail to capture real-world sensing diversity. We introduce Inertia-1, a fully open exploration of wearable motion foundation models. Using massive corpora of accelerometer data from global sources spanning more than 18.2M hours, we build a controlled framework for studying the full lifecycle of wearable motion foundation models, covering data choices such as sensor modality, device placement, sampling rate, window length; model choices such as architectures and model size; and training choices such as pretraining objective and data scale. Extensive evaluations across 15 datasets spanning human activity recognition, freezing-of-gait detection, and disease prediction reveal intriguing findings for building motion foundation models that generalize across tasks and sensing conditions. Collectively, Inertia-1 not only presents state-of-the-art recipes for diverse downstream tasks, but also serves as a comprehensive, practical, and open cookbook for wearable motion representation learning.

52. [LLM-Guided Task-Semantic Field Factorization for Industrial Process Forecasting](https://arxiv.org/abs/2607.06623)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06623v1 Announce Type: new Abstract: Process industries rely on time-series forecasting and soft sensing to estimate quality variables that are hard to measure online. Labeled data are scarce, operating regimes change frequently, and retraining models or rebuilding alignment pipelines for each scenario is costly. Such settings often provide variable tables and process documents that record variable names, units, physical meanings, and process roles. However, standard time-series backbones usually treat inputs as anonymous numerical columns. Existing text-enhanced methods also rarely make the semantic-logical relations between input variables and the prediction target available to the model within each numerical window. To address this problem, this article proposes Task-Semantic Field Factorization (TSF), a large language model (LLM)-guided framework. TSF builds a task-semantic field from task protocols and variable documents before training and uses the LLM only for offline semantic construction. Online training and inference remain with conventional time-series backbones. During training and inference, the current numerical window activates variable semantics, so semantic information participates in each prediction and supports adaptation to different prediction targets and operating shifts. On multiple complex industrial forecasting and soft-sensing tasks, TSF reduces MAE by 6.4\% on average in improved settings, with the largest reduction reaching 25.5\%. It adds only about 1.8--3.0k parameters, with less than 0.008 ms/step of additional online inference overhead. These results show that TSF turns existing process documents into measurable forecasting gains across backbones and semantic generators while remaining lightweight for deployment.

53. [Impact of Courant number on the results of numerical simulating of signal propagation in non-dispersive homogeneous media](https://arxiv.org/abs/2607.06707)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06707v1 Announce Type: new Abstract: The paper is devoted to the study of the connection between the numerical dispersion arising in FDTD modeling of electromagnetic signal propagation in nondispersive homogeneous media optically different from vacuum and the Courant number in the 2D case. The main results are formulated in the form of four statements, as well as a number of corollaries and remarks that determine the nature of the numerical dispersion, the optimal value of the Courant number and the limitations of the method. It is proved that the optimal choice of the Courant number eliminates the numerical dispersion and extends the capabilities of the developed numerical algorithm to media, which refractive index lesser than refractive index of vacuum, as well as media with negative refraction.

54. [Path Integral Monte Carlo for Fictitious Identical Particles with {\xi}-Ensemble](https://arxiv.org/abs/2607.06955)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06955v1 Announce Type: new Abstract: In this work, a path integral Monte Carlo (PIMC) algorithm for fictitious identical particles (FIP) is proposed by introducing a $\xi$-ensemble and performing PIMC simulations on the resulting $\xi$-ensemble partition function. The PIMC algorithm with the $\xi$-ensemble allows us to obtain the thermodynamic properties of FIP for different $\xi$ values in a single simulation. Moreover, it also accelerates the simulation by improving the sampling efficiency, compared to the usual case where independent simulations are performed for each $\xi$ value, in the sense that the autocorrelation time of samples belonging to the same $\xi$ sector is decreased. Simulations of the uniform electron gas and uniform warm dense beryllium are performed to validate the improved algorithm and study the improvement in its sampling efficiency.

55. [Collaborate to decorrelate in path space: Hamiltonian replica exchange transition interface sampling (HRETIS)](https://arxiv.org/abs/2607.07453)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07453v1 Announce Type: new Abstract: We present Hamiltonian Replica Exchange Transition Interface Sampling (HRETIS), a path sampling framework designed to efficiently sample rare events in systems with complex potential energy landscapes. HRETIS introduces a helper potential within a Hamiltonian replica exchange scheme, which enhances exploration of path space when the underlying potential is not well suited for conventional path sampling approaches. This is particularly advantageous for systems exhibiting multiple pathways separated by orthogonal barriers such as in drug (un)binding, where standard algorithms often show slow convergence since they become trapped within specific pathways. By exchanging Hamiltonians between the path ensembles, HRETIS overcomes these limitations and increases the decorrelation between subsequent paths in the Monte Carlo chain. We demonstrate that HRETIS provides robust and accurate kinetics in several systems, including coarse-grained simulations of amino acid permeation through a dipalmitoylphosphatidylcholine (DPPC) membrane. Moreover, HRETIS is found to improve sampling efficiency and convergence, illustrating its potential as a powerful tool for rare event sampling in complex molecular systems.

56. [Semilocal exchange functionals from the exact-exchange condition for the hydrogen atom: Hydrogenic exactness and recovery of Rydberg-like bound states](https://arxiv.org/abs/2607.07648)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07648v1 Announce Type: new Abstract: In semilocal density functionals the exchange potential decays too rapidly outside atoms and molecules and lacks the correct $-1/r$ tail; as a consequence, functionals from PBE to modern meta-GGAs such as SCAN support no bound Rydberg-like state of an atom. We revisit the gradient-corrected exchange functional that Gill and Pople (GP93) constructed to reproduce the exact exchange potential of the hydrogen atom, solve their equation as an inverse problem, and use the resulting enhancement factor -- the GP93 factor -- as a tail-generating ingredient of a switched semilocal functional. The GP93 factor is exact on the hydrogen $1s$ density and, by uniform coordinate scaling, on hydrogenic $1s$ ions, where it yields the eigenvalue $-Z^2/2$ exactly (hydrogenic exactness). Its large-gradient growth has the hydrogen-exact form $O[s(\ln s)^{2/3}]$, distinct from the $s\ln s$ form of Armiento and K\"ummel. The factor is combined with a kinetic-energy-density indicator so that its divergent branch acts only in one-electron-like regions; the GP93 ingredient is nonempirical, while a few switching parameters are calibrated to balance tail recovery against self-consistent-field stability. The resulting functional produces Rydberg-like series of bound virtual Kohn--Sham states in systems whose outermost shell is a one-electron-like $s$ shell -- all-electron H and He, and Li, Na, and K with large-core pseudopotentials -- and moves the highest-occupied eigenvalue toward the experimental ionization energy. For $p$-shell atoms (Ne, Ar) the switch closes, so the domain of applicability is fixed by design. Fixed-density tests indicate that a reduced-Laplacian switch distinguishes atomic tails from covalent bond centers, and that a density-only kinetic-energy functional renders the entire switch orbital-independent, so that no generalized Kohn--Sham solver is required.

57. [Scaling WaterLily.jl with MPI and an improved geometric multigrid solver](https://arxiv.org/abs/2607.07687)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07687v1 Announce Type: new Abstract: We present recent performance-oriented developments in WaterLily.jl, a scale-resolving incompressible flow solver written in pure Julia that runs seamlessly on CPUs and GPUs of any vendor. Supported by the newly added MPI-based parallelism, strong-scalability tests display a near-ideal linear trend, and weak-scaling efficiency is kept above 85\% before node memory-concurrency contention dominates parallel performance. Inter-node weak scalability is sustained above 96\% with grid size up to 1 billion cells. We further benchmark improvements to the geometric multigrid Poisson solver enabled by an adaptive under-relaxed red-black Gauss--Seidel smoother together with anisotropic coarsening operators.

58. [Moir\'e Phonon Condensation in Magic-Angle Twisted Bilayer Graphene](https://arxiv.org/abs/2607.06711)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06711v1 Announce Type: cross Abstract: Twisted bilayer graphene reconstructs from weak breathing corrugation to large common bending near the magic angle, but the origin of this collective crossover has remained unclear. Here we show that the crossover is a soft-mode condensation of layer-symmetric $A_1$ moir\'e flexural phonons: these modes soften on the breathing branch, lose stiffness near the magic angle, and freeze into the bending morphology. We call this mechanism Moir\'e Phonon Condensation (MPC). At $\theta=1.08^\circ$, it is extremely surprising that displacements of all 11164 atoms in the moir\'e supercell, with a maximum atomic position shift of 2.30 Angstrom, is captured by only two $A_1$ phonon modes at more than $99.5\%$ spectral weight. A first-harmonic continuum theory identifies a dimensionless control parameter of the phenomenon, showing that as the twist approaches the magic angle, the growing moir\'e length scale amplifies a smooth stress-bending competition until the flexural stiffness changes sign. Mode-resolved tight-binding calculations further show that the condensed phonon coordinates are electronically active. This work identifies MPC as a twist-controlled structural order parameter for moir\'e reconstruction.

59. [An Innovative Computational Fluid Dynamics Discrete Dipole Approximation (CFD-DDA) Platform for Predicting Airborne Virus-in-Saliva Disinfection by Ultraviolet Irradiation](https://arxiv.org/abs/2607.06746)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.06746v1 Announce Type: cross Abstract: All published models of ultraviolet (UV) inactivation of airborne viruses in saliva droplets have neglected UV light scattering. To the best of our knowledge, this work presents the first Computational Fluid Dynamics-Discrete Dipole Approximation (CFD-DDA) platform for investigating the physical mechanisms governing UV disinfection of virus-laden airborne saliva droplets. The DDA solver predicts UV light scattering by both spherical and irregularly shaped saliva droplets, while the CFD solver predicts droplet evaporation and transport in airflow. By coupling the DDA and CFD solvers, we demonstrate that infected saliva droplets, whether spherical or irregularly shaped due to evaporation, experience highly non-uniform UV light scattering that significantly affects virus inactivation and cannot be neglected. This phenomenon has not previously been investigated within a fully three-dimensional framework. The coupled Euler-Lagrange CFD-DDA model further quantifies the effects of (i) the initial droplet size distribution and concentration, (ii) airflow rate, and (iii) droplet interactions with the surrounding airflow and bounding walls on the total number of surviving coronavirus copies $N_s$, assuming a virion diameter of 100 nm, an air temperature of 21 $^{\circ}$C, and a relative humidity of 65%. Based on the DDA results, a new virus inactivation model, referred to as the Dbouk-Yurkin law, is proposed. This model extends the classical Chick-Watson law by explicitly accounting for UV light scattering in both spherical and non-spherical airborne saliva droplets. The proposed three-dimensional CFD-DDA platform provides a powerful framework for improving the understanding of UV-based airborne virus disinfection and for optimizing the design and performance of UV air purification systems.

60. [Dimension-dependent continuum limits in tissue mechanics](https://arxiv.org/abs/2607.07000)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 09 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07000v1 Announce Type: cross Abstract: Continuum descriptions of epithelial tissue mechanics can replace expensive individual-based simulations with tractable macroscopic models, yet the link between cell-scale forces and tissue-scale transport remains poorly understood. We show that dimensionality controls this link: long-time mechanical relaxation rates reveal generalized porous-media-type nonlinear transport phenomena, $D(\rho)\propto\rho^\gamma$. Exponents in nonlinear diffusivities are fixed by microscopic mechanics and dimensionality, providing a novel physical mechanism for emergent macroscopic transport phenomena.

61. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

62. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.69; Date: 2026-07-08T16:11:01Z; Popularity: 688 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

63. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.61; Date: 2026-07-09T15:25:06Z; Popularity: 608 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

64. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-07-09T13:34:25Z; Popularity: 124 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

65. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-04T20:35:11Z; Popularity: 100 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

66. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

67. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

LLM-powered reasoning in agent-based modeling

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.06757

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
