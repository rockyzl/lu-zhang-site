# Daily signal sidecar - 2026-09-18

## Selected Signal

- Title: BioPhys-Bridge: A Benchmark for Interdisciplinary Scientific Reasoning in Physics-Grounded Biological Research
- URL: https://arxiv.org/abs/2609.19180
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: BioPhys-Bridge: A Benchmark for Interdisciplinary Scientific Reasoning in Physics-Grounded Biological Research
- Primary source: https://arxiv.org/abs/2609.19180
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

Total candidates reviewed after duplicate-source filtering: 60

1. [BioPhys-Bridge: A Benchmark for Interdisciplinary Scientific Reasoning in Physics-Grounded Biological Research](https://arxiv.org/abs/2609.19180)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19180v1 Announce Type: new Abstract: Language models face unique challenges in analyzing interdisciplinary scientific research literature. In biophysics research, faithful answers require grounding observed data in source evidence, interpreting it through a quantitative physics model, and linking it to a biological mechanism. To address this challenge, we introduce BioPhys-Bridge, a novel benchmark dataset for evidence-grounded scientific reasoning over biophysical literature. Each case contains evidence blocks, stable evidence IDs, quantitative values, units, equations, assumptions, mechanisms, and next decisions as grounding targets for question answering (QA) and retrieval-augmented generation (RAG). The initial release contains 500 cases, 1,517 agent-facing tasks, and covers six biological domains and nine physical model families, including three sparse families reserved for future expansion. We enforce strict quality gates for all cases in schema, evidence-integrity, quantitative-grounding, source-license, duplicate, unit-normalization, with domain expert review and annotation for 81 cases. Preliminary evaluations show that DeepSeek-V4-Flash obtain the highest evidence-ID $F_1$ score (0.360), followed by Qwen3.7-Max (0.316) and GPT-4o-mini (0.294). BioPhys-Bridge is an interdisciplinary benchmark for evaluating attribution, faithfulness, hallucination reduction, and biological experiment design with complex, multi-step scientific reasoning. Future works will increase the size and complexity of the dataset and perform comprehensive evaluations. Code and data are available in the GitHub repository and on Hugging Face.

2. [Do AI Agents Understand Computer Architecture?](https://arxiv.org/abs/2609.19387)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19387v1 Announce Type: new Abstract: Agents are increasingly asked to design hardware, and increasingly reported to succeed. Such reports establish that a design improved; they cannot establish why. An agent that improves an accelerator may be reasoning about the machine, or may be searching competently over knobs whose meaning it never recovers -- and only the first transfers to the next architecture. Existing evaluations cannot tell the two apart, because they vary the agent while holding the framing of the problem fixed. We do the opposite. AutoTuring hands the same agent the same 15-dimensional accelerator space twice: once as named architectural knobs with simulator counters, once as anonymous variables on [0,1], with the evaluator, the legal space and the reachable optima held identical, so that the only thing that varies is whether the problem means anything. The gap between the two is the measurement. On a nine-kernel FP16 GEMM basket, meaning pays: the architect beats a modeled H200 by 5.4% and its blind counterpart by 12.3% on average, with 70.1% fewer simulator calls. It does not pay uniquely: a critic loop recovers most of that gap for the blind agent and buys the architect nothing, so architectural knowledge and structured critique behave as substitutes rather than as complements. We report these as preliminary findings -- five to six runs per condition on a single modeled accelerator -- and take the comparison itself, not the accelerator, to be the contribution.

3. [What Do We Expect from LLMs? Mapping the Design of LLM Benchmarks](https://arxiv.org/abs/2609.19182)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19182v1 Announce Type: new Abstract: Benchmarks are central to how progress in large language models (LLMs) is assessed and communicated. Yet model rankings alone reveal little about how evaluation requirements themselves are changing. The expanding variety of benchmarks offers another perspective: what researchers expect LLMs to do, and what they count as successful performance. We systematically map 14,767 papers introducing or updating evaluation resources from arXiv submissions between January 2022 and August 2026. Using staged screening and automated full-text coding, we examine changes in target systems and domains, evaluation materials and conditions, and scoring mechanisms. The collection shows growing emphasis on action, interaction, and professional applications, while established and newer design elements frequently coexist. Model participation also develops unevenly: LLM-based scoring grows within both agent and non-agent groups, whereas model-generated materials show no comparable sustained increase in recent cohorts. These findings illuminate how public research translates capability expectations into concrete tests and criteria for success. As AI participates in constructing tests, performing tasks, and judging responses, they also raise a question: does expanding evaluation provide more independent evidence, or risk reproducing the preferences and blind spots of its participating models?

4. [Introducing Astra for Law](https://openai.com/index/astra-for-law)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 17 Sep 2026 00:00:00 GMT
   - Summary: OpenAI for Law brings frontier intelligence for law, custom firm workflows, connected legal data sources, and legal-grade controls for confidential client work.

5. [Rebuilding AUTOMATIC1111 with Gradio Workflow](https://huggingface.co/blog/gradio-workflow-1111)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

6. [Position: It is Time to Virtualize Foundation Models with a Self-evolving Operating System Layer](https://arxiv.org/abs/2609.19203)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19203v1 Announce Type: new Abstract: AI applications have shifted from single, monolithic foundation models (FM) to compound agentic systems. Yet today's stacks remain fragmented: even as protocols (e.g., MCP, A2A) ease tool/agent connectivity, each framework embeds an implicit runtime for state, memory, budgets, and guardrails, making behavior non-portable and governance brittle. It mirrors computing before operating systems, when every program re-implemented basic services. This position paper argues that the field now needs a Foundation Model Operating System (FMOS) -- a system layer that virtualizes FM interactions analogous to how virtual machines abstract physical hardware, giving applications the illusion of dedicated, trustworthy FM instances with effectively unbounded capabilities. Internally, the FMOS orchestrates knowledge across memory tiers, model selection and resource allocation, and verification and policy enforcement. Like the human brain switching between fast intuition and slow deliberation, the FMOS learns when to intervene and when to let inference proceed directly and continuously adapting its policies based on operational experience.

7. [What Do Current Systematic Generalization Tasks Miss? A Reasoning-Centered Analysis](https://arxiv.org/abs/2609.19212)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19212v1 Announce Type: new Abstract: Systematic generalization, the ability to solve novel problems by recombining known atomic elements, is central to human intelligence but difficult to study rigorously under controlled settings. Existing studies therefore rely on simplifications such as approximately linear action composition, productivity-based tests, and action-explicit goals, which make systematic generalization easier to study but omit some essential aspects of this capability. To characterize what these simplifications miss, we adopt a reasoning-centered lens and introduce TranSGrid, a testbed that brings deductive, inductive, and abductive reasoning together within a unified task. Experiments with seven Transformers on 4,800 TranSGrid instances show that all models perform much worse on TranSGrid than on a held-out test set: the largest model solves 79.6% of the test set, but only 55.3% of TranSGrid and 15.8% of the hardest subset. The gap remains within the training length range, showing that productivity alone is not sufficient to evaluate systematic generalization. Additionally, we reintroduce the other two simplifications into TranSGrid: one variant makes actions compose almost linearly (reducing the inductive demand), the other makes goals action-explicit (reducing the abductive one). In both, solve rates return to roughly the test set level, showing that either simplification alone is enough to reduce TranSGrid to an ordinary held-out test set. Together, our results show that existing tasks reduce either or both of the inductive and abductive demands, and that comprehensively measuring systematic generalization requires a task that involves all three forms of reasoning.

8. [MAGS: Multi-agent Auto-formalization Guarantees Safety for Agentic Outputs](https://arxiv.org/abs/2609.19391)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19391v1 Announce Type: new Abstract: LLM coding agents now generate complex programs at a scale that makes thorough human review increasingly difficult, raising the risk of safety and security failures. Common approaches, including fuzz testing, static analysis, and LLM-as-a-Verifier, can detect many failures but struggle to cover all possible edge cases. Formal verification addresses this by providing machine-checkable guarantees over specified properties, but traditionally demands substantial manual specification and proof engineering. We introduce a unified multi-agent framework, MAGS, that generates executable programs with formal safety guarantees, using Dafny as a verification-aware intermediate representation where safety properties can be mechanically checked. MAGS formalizes and freezes human-audited APIs and safety requirements, translates generated code into Dafny, repairs violations using verifier feedback, and compiles verified programs back into executable code. We evaluate MAGS on 100 CUDA kernels, 100 terminal scripts, and 20 robotic-arm tasks. Across all 220 examples, it achieves a 100% success rate in producing programs with non-trivial safety guarantees against frozen specifications. Independent safety and functional evaluations further show strong performance across all three domains, while revealing failures when the auto-formalized semantics do not fully capture the target behavior.

9. [Mollified-sharp decomposition: a probabilistic regularization of parametric POD for shock-bearing flows](https://arxiv.org/abs/2609.19532)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 5.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19532v1 Announce Type: new Abstract: This paper introduces the mollified-sharp decomposition, a probabilistic regularization of moving shocks in parametric reduced-order models. Each detected shock location is treated as a random variable with a prescribed probability density. Averaging over this artificial distribution replaces the localized pressure change by a smooth transition whose spatial extent is set by the density width, rather than by direct filtering of the pressure field. Each snapshot is decomposed exactly into a regularized mollified field and a local sharp correction that restores the shock. This probabilistic construction and exact additive split define the general method; the detector, kernel, treatment of multiple shocks, alignment coordinates, and regression are implementation choices. In the present realization, a calibrated indicator detects shocks, a compactly supported Wendland kernel mollifies them, and a peak-normalized and, where necessary, partitioned weight derived from each shock-location probability density defines the centroid, principal axes, and scales of its local alignment domain. Separate POD-GPR models represent the mollified field and aligned corrections, with additional regressions for shock presence and alignment. The method is demonstrated on the transonic airfoil pressure data of Catalani et al. (2023) and compared with a standard POD-GPR model constructed from the same data and POD-energy criterion. The mollified-sharp model reduces the mean test-set relative $L^2$ pressure error by 31.2% and the mean test-set surface-pressure-coefficient error by 33.2%, while also improving the predicted shock locations and pressure changes; the trade-off is a median online evaluation time 2.24 times as long. The construction is applicable in principle to other parameter-dependent fields with moving sharp features, such as moving material interfaces in multiphase flows.

10. [How Cooley is accelerating IPO work with ChatGPT](https://openai.com/index/cooley-gopublic)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 17 Sep 2026 12:00:00 GMT
   - Summary: Cooley built GO Public with ChatGPT Work to bring intelligence to the IPO process, helping lawyers surface issues earlier and focus judgment where it matters most.

11. [Helping older adults use AI in everyday life](https://openai.com/index/helping-older-adults-use-ai-in-everyday-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 16:00:00 GMT
   - Summary: OpenAI and AARP are bringing free, hands-on ChatGPT workshops to 1,000 older adults across 10 U.S. cities to build practical AI skills safely.

12. [Reimagining advertising with AI](https://openai.com/index/reimagining-advertising-with-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 13:00:00 GMT
   - Summary: Explore new AI-powered advertising experiences from OpenAI, including Sponsored Agents, tools for marketers, and integrations with HubSpot and Shopify.

13. [How to connect AI usage to business value](https://openai.com/index/how-to-connect-ai-usage-to-business-value)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 12:00:00 GMT
   - Summary: Learn how ChatGPT Work and Codex analytics help teams understand AI usage and spend, identify training needs, and connect adoption to business outcomes.

14. [Our framework for reporting model misalignment](https://openai.com/index/model-misalignment-reporting-framework)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 17:00:00 GMT
   - Summary: OpenAI shares a framework for tracking, investigating, and disclosing model misalignment, alongside six reports of unexpected or concerning model behavior.

15. [How workers are unlocking new ways of working](https://openai.com/index/unlocking-new-ways-of-working)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 16 Sep 2026 09:00:00 GMT
   - Summary: New OpenAI Economic Research shows how workers use AI beyond traditional roles and which new activities become recurring parts of their work.

16. [How Fyxer built an AI executive assistant people trust](https://openai.com/index/fyxer)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 12:00:00 GMT
   - Summary: Fyxer uses OpenAI models, fine-tuning, memory, and real user feedback to organize inboxes and draft emails in each user’s voice.

17. [Perplexity trusts GPT-6 Astra with end-to-end systems](https://openai.com/index/perplexity-improving-accuracy-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 14 Sep 2026 00:00:00 GMT
   - Summary: Perplexity uses Astra to write communications, change software, and monitor production systems, and checks in much less frequently than with earlier models.

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

22. [Your Agent Aced the Task. Will It Do It Again?](https://huggingface.co/blog/ibm-research/altk-evolve-consistency)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 15 Sep 2026 16:00:44 GMT

23. [Async GRPO with LoRA across HF Jobs: a bucket, a proxy, and no NCCL](https://huggingface.co/blog/asyncgrpo-lora-hfjobs)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 10 Sep 2026 00:00:00 GMT

24. [Safety for Whom? Refusing the Right Subset of a Topic, Not the Whole Topic](https://huggingface.co/blog/MultiverseComputingCAI/safety-for-whom)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 08 Sep 2026 14:23:07 GMT

25. [NeoMME: an efficient Multimodal-native and Multilingual Encoder](https://huggingface.co/blog/Hcompany/neomme)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 13:13:48 GMT

26. [Fine-tuning a 350M Model for Better Structured Outputs in 100 GRPO Steps](https://huggingface.co/blog/grpo-with-trl-ifstruct)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

27. [Give Your Coding Agents a Memory You Own](https://huggingface.co/blog/funes)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

28. [Training a coding model to paint watercolours with TRL and OpenEnv](https://huggingface.co/blog/train-to-paint-with-code)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 03 Sep 2026 00:00:00 GMT

29. [BenchMIRT: What are LLM benchmarks actually measuring?](https://huggingface.co/blog/allenai/benchmirt)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 21:39:07 GMT

30. [Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI](https://huggingface.co/blog/webgpu-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 01 Sep 2026 00:00:00 GMT

31. [Regularized Emphatic Temporal-Difference Learning: Stability under Constant Stepsizes](https://arxiv.org/abs/2609.19170)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19170v1 Announce Type: new Abstract: Emphatic temporal-difference learning (ETD) stabilizes the expected off-policy TD update and changes its projection geometry, but neither property determines constant-stepsize sampled dynamics. We construct an ergodic two-state counterexample in which the ETD mean map contracts while the sampled product has a positive top Lyapunov exponent. Regenerative-cycle analysis separates this sign from the infinite variance of the follow-on trace. We introduce regularized emphatic TD (RETD), a normalized first-order post-shock repair that leaves the trace and importance ratios unchanged, stores the emphatic TD signal in a leaky scalar state, and releases a delayed correction. RETD's raw equilibrium is an affine shift of the ETD equilibrium; single- and two-regularization readouts recover the ETD fixed point exactly. We prove almost-sure convergence for harmonic diminishing stepsizes and a conditional constant-stepsize moment-contraction result from a Markovian random-product bound. RETD has certified negative exponents on the two-state construction and one Baird point, whereas the positive Baird ETD sign remains numerical. Paired 10,000-run experiments validate both separations, fixed-point recovery, a nonmonotone stability region, and task dependence. RETD changes post-shock dynamics; it does not reduce the shared follow-on-trace variance.

32. [Characterizing Web Search by Conversational LLM Agents: From Search Decisions and Strategies to Results and Responses](https://arxiv.org/abs/2609.19244)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19244v1 Announce Type: new Abstract: Conversational LLM agents increasingly rely on Web search, yet the end-to-end lifecycle of agentic search remains poorly understood. We present the first study of Web search across four major conversational platforms (ChatGPT, Claude, Grok, and DeepSeek), combining real-world user interactions (invivo) with controlled experiments using the same platform's models by their APIs (invitro). We investigate the quality of agentic decisions to invoke Web search, their strategies to formulate queries, the potential domain preferences in the search results they receive, and the choices they make when transforming search results into grounded responses. We find that Web-search decisions vary substantially across platforms and models, while more frequent Web-search invocation does not necessarily yield better response quality. We further show that conversational agents employ different complex querying strategies and that platform specific search engines return search results from their preferred domains. Finally, although responses are largely grounded in search results, some claims rely on uncited search results, raising concerns about attribution and reliability. Our findings have important implications for the design of future AI agents and Web search tools optimized for conversational retrieval.

33. [Closed-World Resolution Against Tool Hallucination in LLM Agents](https://arxiv.org/abs/2609.19425)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19425v1 Announce Type: new Abstract: Tool-augmented large language model (LLM) agents fail in a way no tool-selection or tool-security method addresses: they call tools that do not exist and pass arguments no schema declares. Existing defenses either pick the right tool (selection) or constrain what an agent may do with real tools (gating), both of which presuppose the emitted call refers to a real tool at all. We show this is a structural blind spot: a hallucinated call is by construction not a decision any gate made, so no gate can reject it. This paper is primarily a measurement and benchmark study. We give a five-class taxonomy of tool hallucination (H1-H5) and, as a reference point, the Resolution Rung: a training-free, closed-world resolver (registry membership plus a signature check) whose interest is where it must sit, not what it computes. We prove hallucination defense must precede any causal gate, and characterize the one irreducible residue (borrowed arguments schema-indistinguishable from a valid call). Across ten hosted models under two invocation surfaces we measure 322 genuine hallucinations; fabricated-tool calls concentrate on the unconstrained raw-JSON surface (34 vs. 3), and model scale does not help (a 675B model matches a 7-8B one). We then extend to the Model Context Protocol, where merging several servers into one namespace creates hallucination surfaces a single registry cannot express (a second taxonomy, M1-M5); on the live MCP surface we measure 154 hallucinations, including from frontier models that were clean on the single-registry surface, because collisions and shadowing are structural to the merge. We release the versioned Hallucinated-Tools Benchmark (HTB) so any resolver is comparable across submissions.

34. [The syntax and semantics of goals](https://arxiv.org/abs/2609.19448)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19448v1 Announce Type: new Abstract: In both cognitive science and computer science, goals are conceptualized as cognitive states that flexibly combine with world knowledge to organize and specify purposeful behavior. In this way, goals are compositional representations whose content relates to rational behavior. We here draw attention to goals as representations and their content because it highlights a parallel with other areas in cognitive science - in particular, the syntax-semantics interface in linguistics and logic - while also foregrounding foundational questions about the expressivity, design, and efficiency of different goal representations. For example, goals are typically taken as fixed and imposing constraints on desirable behaviors, but we can also identify constraints on goal representations themselves, such as whether a particular goal language is sufficiently expressive to capture behaviors of interest, or whether different goal representations capture the same behavior. Here, we synthesize work that aims to characterize the properties of different goal representations and suggest these are points of a broader design space. We close by discussing how distinguishing the form and meaning of goals can elucidate the implicit assumptions we make about goals, inform the study of interactions between higher-level cognition and motivation, and isolate axes of variation for different conceptions of goals.

35. [Generative Query Suggestion via Intent Coverage and Query-Level Credit Assignment](https://arxiv.org/abs/2609.19209)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19209v1 Announce Type: new Abstract: Generative query suggestion aims to enhance user engagement by anticipating user intents and recommending relevant follow-up queries. A central challenge is to generate slates whose individual queries are useful while the slate covers distinct intents. We propose an Intent-Driven Query Suggestion Framework with dual-stage optimization. First, intent-aware diversity modeling constructs intent-aligned supervised fine-tuning (SFT) data and uses an Intent-Aware Diversity Reward to optimize intent coverage. Second, query-level credit assignment routes individual quality signals to the corresponding query tokens while sharing a slate-level diversity signal across the slate. Experiments on a large-scale production dataset, including online A/B testing and offline evaluation, show improvements in click-through rate, query quality, and intent coverage.

36. [How Does Distribution Shift Shape Pretraining Gains in Neural PDE Surrogates?](https://arxiv.org/abs/2609.20814)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20814v1 Announce Type: new Abstract: Pretraining a neural PDE surrogate can reduce the amount of new CFD data needed when geometry or modeled physics changes. However, it remains unclear how different components of distribution shift affect this benefit. We pretrain a surrogate on 254,909 RANS solutions from one airfoil family and fine-tune it on a new family under two target settings with matched freestream ranges: the same Spalart-Allmaras (SA) modeling and SA with added $e^N$ transition modeling. At $N=1000$, the pretrained model matches the accuracy of a model trained from scratch on $3.25\times$ as many samples for the same-SA target, but $2.58\times$ as many for the transition-modeled target. By $N=5000$, this ordering reverses ($1.56\times$ versus $1.86\times$). At $N=1000$, sampling more distinct airfoils lowers error on both targets, but only for the same-SA target is the gain increase larger than the observed draw-to-draw variation ($3.3\times$ to $4.0\times$). These results show that pretraining value depends jointly on target-data budget, target-data coverage, and whether source and target differ in modeled physics.

37. [Efficient tensorized evaluation of permutation invariant polynomials for representing potential energy surfaces](https://arxiv.org/abs/2609.19584)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19584v1 Announce Type: cross Abstract: Permutation invariant polynomials (PIPs), together with related polynomial-based invariant descriptors such as fundamental invariants (FIs), are widely used in constructing high-fidelity global potential energy surfaces (PESs) of molecules that contain identical atoms. Although the monomial symmetrization approach (MSA) enables fast evaluation of PIPs through recursive factorization, it leads to deeply nested computational graphs that may require large memory and are inefficient in modern automatic differentiation frameworks. In this work, we introduce JaxPIP, a JAX-based implementation that reformulates PIP/FI evaluation into tensorized linear algebra operations. By replacing recursive factorization with dense matrix operations combined with log-exp transformation and segmented summation, the evaluation becomes regular and GPU-friendly. This allows efficient execution with just-in-time compilation and enables large-scale batch evaluation of energies and forces (as well as higher-order derivatives). The resulting architecture supports ensemble simulations such as quasi-classical trajectory (QCT), path-integral molecular dynamics (PIMD), and diffusion Monte Carlo (DMC) in a fully vectorized manner. As demonstrated in examples, JaxPIP provides a practical route for efficient simulations of molecular systems with scalable GPU execution.

38. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.89; Date: 2026-09-18T16:58:04Z; Popularity: 1,888 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

39. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-09-17T08:15:23Z; Popularity: 485 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

40. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.36; Date: 2026-09-16T02:14:34Z; Popularity: 364 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

41. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.25; Date: 2026-09-14T03:11:45Z; Popularity: 246 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

42. [GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models](https://www.microsoft.com/en-us/research/blog/gigapath-flash-and-gigatime-flash-toward-population-scale-discovery-with-efficient-pathology-foundation-models/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 31 Aug 2026 16:00:00 +0000
   - Summary: What if pathology foundation models could do more with less? GigaPath-Flash and GigaTIME-Flash cut computational demands while maintaining strong performance, opening the door to larger studies and broader exploration. The post GigaPath-Flash and GigaTIME-Flash: Toward population-scale discovery with efficient pathology foundation models appeared first on Microsoft Research .

43. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

44. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

45. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

46. [Learning-Induced Dynamical Transition in Recurrent Neural Networks](https://arxiv.org/abs/2609.19288)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19288v1 Announce Type: new Abstract: Learning in recurrent neural networks can fundamentally reshape their underlying dynamics, transforming initially chaotic activity into stable task-dependent behavior. We develop a non-equilibrium dynamical mean-field theory(DMFT) to describe this transition during learning. We show that a slow feedback-driven learning process generates an evolving effective feedback strength that drives the network through a transition from chaotic to stable dynamics defined by a bifurcation of the DMFT solution. By deriving the two-time correlation function throughout learning, we identify a critical feedback strength and a corresponding learning rate dependent critical time separating these regimes. The transition arises from the progressive deformation of an effective dynamical landscape by the growing learned feedback structure. Starting from the untrained state, the theory predicts the time evolution of the network output during training and shows quantitative agreement with numerical simulations.

47. [Smart Insole Human Activity Recognition for Continuous Monitoring in Elderly Care](https://arxiv.org/abs/2609.19359)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19359v1 Announce Type: new Abstract: Falls in older adults are often preceded by changes in mobility, balance, and postural transitions. This paper presents a wireless smart insole platform and machine-learning workflow for recognizing sitting, standing, walking, and unstable walking from plantar-pressure and inertial signals. Each insole integrates 16 active pressure-sensing locations and a six-dimensional IMU stream consisting of tri-axial acceleration and angular velocity. Data were collected from 15 healthy adults at 80~Hz and segmented into overlapping windows. Window length and candidate model families were first screened with stratified 10-fold cross-validation; the primary performance estimate was then obtained with participant-independent 5-fold Stratified Group cross-validation, ensuring that all windows from a participant remained in a single fold. Under this protocol, Histogram-Based Gradient Boosting (HGB) achieved macro-F1 scores of 0.954 and 0.959 for the left and right feet, respectively, and 0.980 with bilateral sensing. A compact 1D-CNN evaluated with the same participant-independent folds did not significantly outperform HGB ($p=0.0625$). The results show that low-profile footwear sensing can infer activity state from pressure and IMU measurements for participants unseen during training, establishing a basis for activity monitoring and fall prevention in elderly care.

48. [Exergy-Anergy Representation of Turbomachine Performance Characteristics](https://arxiv.org/abs/2609.19816)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19816v1 Announce Type: new Abstract: The performance synthesis calculation of aircraft engines relies on tabulated datasets for the simulation of the complex turbomachinery components at acceptable runtimes. Typically, these so-called performance maps express the change of the fluid's energetic state over the component in terms of the total pressure ratio and the isentropic efficiency of the process. However, the definitions of both parameters are different for compressors and turbines and the isentropic efficiency is in both cases not defined for a unity pressure ratio. Moreover, this parameter combination is not directly applicable when modelling the engine at the aircraft level, which is required for modern highly integrated aircraft design. As exergy analysis is an established tool for aircraft design asessment, novel performance maps are proposed that describe the change in exergy and anergy over a given turbomachine component. Both changes are expressed as non-dimensional parameters whose definition is consistent for compressors and turbines, and is compatible with a unity pressure ratio. It is shown that the presented exergy-anergy maps are obtainable on a standard turbomachine test bed or through transformation of existing maps. It is highlighted using examples, that the conversion between existing maps and exergy-anergy maps is completely lossless. The different operating regimes of the turbomachines are clearly distinguishable in the novel map representation, which allows an assessment of the map's physical consistency. It is therefore concluded, that the exergy-anergy maps are an important alternative to the performance map variants established today.

49. [Correlation-Free Transition Path Sampling through Shooting Point Generation Guided by Committor Learning](https://arxiv.org/abs/2609.20461)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20461v1 Announce Type: new Abstract: Studying the dynamical behavior of a system often depends on characterizing how it transitions between long-lived states. Because such transitions are rare, observing them usually requires specialized enhanced sampling techniques. Transition Path Sampling (TPS) is a well-established method for generating reactive trajectories, which is simple to implement and does not require the definition of a preconceived reaction coordinate. However, its efficiency is limited by its sequential nature and the resulting correlations between sampled paths. Previous work addressed this limitation by combining TPS with a sampling scheme based on conditioned Boltzmann Generators, a generative machine learning model capable of sampling a given target probability distribution. This approach produces uncorrelated transition paths but relies on an accurate reaction coordinate, which is rarely known in advance. Building on recent advances in committor learning, specifically on the Artificial Intelligence for Molecular Mechanism Discovery (AIMMD) method, in this work we introduce GenAIMMD, an iterative algorithm that actively and self-consistently learns the ideal reaction coordinate (the committor) and trains a conditioned Boltzmann Generator to sample from arbitrary bias windows along it. GenAIMMD thereby provides a correlation-free and fully parallelizable path sampling scheme that does not require prior knowledge of the system's transition mechanism. We apply GenAIMMD to a two-dimensional toy model and a higher-dimensional polymer system. In both cases, GenAIMMD succeeds in training the Boltzmann Generator and learning the committor. Benchmark results show a substantial increase in performance compared to standard TPS.

50. [How durable are high-performance racing shoes?](https://arxiv.org/abs/2609.20485)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.20485v1 Announce Type: new Abstract: High-performance racing shoes rely on ultra-low-density elastomeric foams that undergo large, repeated deformations during running. Yet little is known about how their mechanical properties vary throughout the shoe or change with repeated use. Here, we characterize the midsole foam in an elite-level racing shoe from the heel, midfoot, and toe of a new shoe and a shoe worn for 300 miles. Microscopy reveals a characteristic pore length scale of 128+/-18 um and supports an approximately isotropic continuum description. We then quantify the mechanical response under tension, compression, and shear. Remarkably, despite 300 miles of real-world use, the foam retains its mechanical response across all three loading modes and shoe regions. Energy return remains largely unchanged, with values of 85-93% in tension and compression and 64-71% in shear. At the same time, we observe strong regional variations, with tensile and compressive stiffnesses 38-51% lower in the toe than in the heel. The foam also exhibits a pronounced tension-compression asymmetry in Poisson's ratio. Together, these findings reveal a spatially structured and mode-dependent mechanical response that remains largely preserved after 300 miles of use. This mechanical resilience may extend the functional lifetime of racing shoes, with implications for runners, replacement recommendations, and sustainability.

51. [Suzuki-Trotter Decompositions and other Methods for Quantum Time Evolution](https://arxiv.org/abs/2609.19184)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19184v1 Announce Type: cross Abstract: (Suzuki-)Trotter decompositions, splitting methods, (Lie) product formulae... The most common numerical methods for the time evolution of quantum systems come with many names. And they are used practically everywhere with applications ranging from the solution of classical equations of motion and various Monte Carlo simulations to the real and imaginary time evolution on classical as well as quantum computers. Here we review the state of the art of said methods, focussing especially on the progress made over the last few years. We highlight recently discovered efficient time evolution algorithms and explain how best to use them in practice. A central part of this work is the estimation of error bounds that has improved greatly within the past decade. The relevance of time evolution methods for quantum computing is discussed with a focus on noisy hardware. Finally, a comprehensive overview of generalisations, related methods and alternatives to Trotterization is provided. This includes time-dependent Hamiltonian dynamics, processed methods, multi-product formulae, symplectic integrators, TDVP for tensor networks, quantum signal processing, Crouch-Grossman methods and more. The overall perspective in this work is that of a theoretical physicist. All mathematical proofs as well as some technical details are omitted for easier readability. Instead, this review serves as a hands-on guide and, of course, as a starting point for references that provide further details.

52. [A Square-Root Barrier to Quantum Gate Speed under Linear Coupling](https://arxiv.org/abs/2609.19280)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19280v1 Announce Type: cross Abstract: Faster quantum gates can suppress the decoherence accumulated during a computation, but in superconducting processors stronger microwave pulses can also increase leakage, off-resonant excitation, stray-field errors, and crosstalk. This creates a central energy--speed--error tradeoff: can quantum state engineering make a gate parametrically faster without paying proportionally more drive energy? We address this question by treating the driving pulse as a quantum bosonic field rather than a classical waveform. For a finite-dimensional system coupled linearly to that field, we prove that fixed-fidelity gate transition rates grow at most as the square root of the pulse energy, under stated uniformity conditions on the coupling and accepted dynamics. The bound permits arbitrary pulse states, including squeezed and non-Gaussian states, as well as drive--system entanglement and back action; coherent Gaussian pulses attain its energy exponent. Thus squeezing or other state engineering alone cannot replace the square-root energy law of a conventional linear drive by the linear scaling allowed by general quantum speed limits. Achieving that improvement requires changing the interaction class, in addition to using a suitable nonclassical pulse, thereby identifying interaction nonlinearity as an essential resource for relaxing the practical gate-speed error tradeoff.

53. [Pressure-dependent melting and crystallization of B2-NiAl from neural-network molecular dynamics](https://arxiv.org/abs/2609.19355)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19355v1 Announce Type: cross Abstract: We investigate pressure-dependent melting of ordered B2-NiAl using neural-network molecular dynamics with a Deep Potential interatomic model. Melting temperatures are determined from two-phase solid-liquid coexistence simulations over a broad pressure range, yielding the melting curve $T_m(P)$. Relative to available experimental and previous molecular-dynamics results, the present calculations predict a stronger increase of the melting temperature with pressure at elevated compression. To assess the thermodynamic consistency of the calculated melting line, we evaluate the enthalpy and volume changes upon melting and compare the Clapeyron slope with the derivative of the fitted $T_m(P)$ curve. The two estimates are in good agreement over most of the investigated pressure range, supporting the internal consistency of the coexistence results. To probe the character of melting, we perform a layer-resolved composition analysis of the coexistence configurations and find that the coexisting liquid remains essentially equiatomic at all studied pressures, with deviations of the aluminum fraction from the stoichiometric value not exceeding $5\times10^{-3}$. This provides direct atomistic evidence that melting of B2-NiAl remains congruent within the present model. Together, these results establish a thermodynamically consistent pressure-dependent melting description of B2-NiAl and clarify the character of its melting under compression.

54. [Ladder of information limits on prediction for reduced-order models](https://arxiv.org/abs/2609.19424)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 18 Sep 2026 00:00:00 -0400
   - Summary: arXiv:2609.19424v1 Announce Type: cross Abstract: What can and cannot be predicted by a model when only limited information is available? We answer this question by constructing a ladder of information limits that organizes prediction tasks according to their information requirements: from memoryless and memory-augmented trajectory forecasts to event prediction, stationary statistics, and generative laws. The analysis, which is independent of the model structure or architecture, identifies the minimum attainable error along with the information limitations that give rise to it. The approach distinguishes information hidden in unresolved variables from information recovered through time-delayed observations and connects these contributions to Mori--Zwanzig memory. The ladder also reveals why Lyapunov growth alone cannot characterize reduced-order prediction error, why stationary statistics may remain predictable even when individual trajectories become unpredictable, and why stochasticity can represent (but cannot recover) missing information. Numerical studies of the Kuramoto--Sivashinsky equation and the Lorenz system illustrate these results across the ladder. This unified perspective provides a principled language for understanding the fundamental limitations of ROMs for a given prediction task and for clarifying whether improved predictions require richer observations, greater precision in the input, or additional memory.

55. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-15T22:42:51Z; Popularity: 755 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

56. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-09-17T22:48:29Z; Popularity: 746 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

57. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.23; Date: 2026-09-15T09:10:11Z; Popularity: 230 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

58. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.18; Date: 2026-09-18T16:56:50Z; Popularity: 1,183 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

59. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-09-18T01:59:50Z; Popularity: 124 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

60. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-09-17T09:23:32Z; Popularity: 8 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

BioPhys-Bridge: A Benchmark for Interdisciplinary Scientific Reasoning in Physics-Grounded Biological Research

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2609.19180

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
