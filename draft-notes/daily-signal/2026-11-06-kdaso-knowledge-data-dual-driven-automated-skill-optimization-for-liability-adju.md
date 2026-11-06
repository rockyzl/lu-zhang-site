# Daily signal sidecar - 2026-11-06

## Selected Signal

- Title: KDASO: Knowledge-Data Dual-Driven Automated Skill Optimization for Liability Adjudication Tasks
- URL: https://arxiv.org/abs/2611.06972
- Source: arXiv cs.AI
- Score: 6.00

## Candidate Review

- Signal: KDASO: Knowledge-Data Dual-Driven Automated Skill Optimization for Liability Adjudication Tasks
- Primary source: https://arxiv.org/abs/2611.06972
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

Total candidates reviewed after duplicate-source filtering: 63

1. [KDASO: Knowledge-Data Dual-Driven Automated Skill Optimization for Liability Adjudication Tasks](https://arxiv.org/abs/2611.06972)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06972v1 Announce Type: new Abstract: Liability adjudication tasks (e.g., legal charge determination) require analyzing event descriptions against domain-specific skills to determine whether a party should bear liability. While Large Language Models (LLMs) have shown promise in this area by leveraging executable skills for interpretable reasoning, existing approaches face three critical limitations: skill libraries become stale as real-world scenarios dynamically evolve, skill descriptions often suffer from a semantic execution gap where LLMs deviate from intended expert logic, and growing skill collections exceed context budgets causing critical skill omission. To address these challenges, we propose Knowledge-Data Dual-Driven Automated Skill Optimization (KDASO), which continuously evolves a skill library through neighborhood-conditioned induction from recent adjudication data, execution-aligned refinement based on LLM trajectory analysis, and context-budgeted routing for scalable skill selection. Experiments across ride-hailing adjudication, legal liability determination, and logical reasoning judgment demonstrate that KDASO significantly outperforms current general-purpose and domain-specific baselines. KDASO further achieves 8.96% improvement when transferring skills to concept-similar scenarios and maintains consistent performance gains through continuous optimization, underscoring the high transferability and stability of generated skills.

2. [The Two-Ledger Model: Transaction-Grain Cost Accounting for Multi-Agent AI Systems Across Clouds, Models, and Systems of Record](https://arxiv.org/abs/2611.06989)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06989v1 Announce Type: new Abstract: Enterprises run business transactions through multi-agent AI systems spanning clouds, large language models (LLMs), orchestration harnesses, and systems of record. Finance receives AI cost only at settlement grain, aggregated by SKU and charge period. The business question (what did this order, claim, or case cost in AI?) cannot be answered from billing data, because providers never see enterprise transaction boundaries. The FinOps Open Cost and Usage Specification (FOCUS) gives billing data one schema across providers but remains settlement-grain even as it adds AI token and requester attribution. We formalize this grain mismatch, derive seven requirements, and propose the Two-Ledger Model: a settlement ledger of FOCUS-conformant billing data joined to an attribution ledger of invocation-grain usage records built on OpenTelemetry GenAI telemetry. A layered correlation spine (trace context, A2A/MCP metadata, business-key correlation, probabilistic matching) assigns each record to its business transaction with recorded method and confidence; a versioned rate card prices usage in near real time; period reconciliation ties both ledgers to the invoice, and the unexplained residual identifies shadow AI. Costs are reported per order, claim, or outcome with agentic cost metrics. A simulation with known ground truth shows the spine sustaining cost coverage above 99% as trace propagation falls to zero, the reconciliation residual recovering planted unmetered spend within 0.24 percentage points while flagging provider billing errors, and mid-flight gating cutting p99 transaction cost by up to 61% at a 2-4% false-pause rate. We propose the attribution ledger as an invocation-grain FOCUS profile for standardization.

3. [Closed-Loop Agent Evaluation: Layered Measurement and Self-Calibration](https://arxiv.org/abs/2611.07051)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07051v1 Announce Type: new Abstract: Once an agent is live, teams want to know whether it is doing its job, not just whether it throws errors. Yet most evaluation is one-off: a benchmark run, a look at traces, a single score. Its conclusions neither check themselves nor reach the agent. We propose closed-loop evaluation, an evaluation method for deployed agents. It models evaluation as performance estimation under biased raters and censored outcomes, and it requires every level's conclusion to trace back to atomic data and to be computed by versioned rules. The method covers four levels of analysis (span, trace, conversation and engagement), measures along a spine of Execution, Substance, Trajectory and Results, treats Conduct as a constraint throughout, and uses Provenance and Adjudication components to certify the evidence and the evaluators. Evaluator agents generated by an Agent Factory carry these components, each with a domain knowledge pack and an adapter harness. Two loops close the evaluation: an inner loop audits the evidence, rules and metrics themselves, and an outer loop uses per-component regression checks to drive agent improvement. We also give a pipeline that runs this process automatically. Using the business-analysis agent SharpInsight as a case and porting the method to public conversation data, we show how problems differ across levels and how evidence-and-rule judgment is more reliable than holistic scoring (ICC 0.86 vs. 0.81; kappa 0.81 vs. 0.63).

4. [Franklin Templeton uses OpenAI to support investment research](https://openai.com/index/franklin-templeton)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 05 Nov 2026 00:00:00 GMT
   - Summary: Starting with equity research, Franklin Templeton is developing AI workflows to help portfolio managers compare research views and examine investment risks.

5. [Formally verifying agent-written full-stack web apps with PDD Kit](https://www.microsoft.com/en-us/research/blog/formally-verifying-agent-written-full-stack-web-apps-with-pdd-kit/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Thu, 05 Nov 2026 16:00:00 +0000
   - Summary: AI agents can generate code at a scale that’s hard for humans to review line-by-line. PDD Kit helps ensure the code is doing what the developer intended by creating formal specifications and testing against them. It converts developer intent into a Verus specification, proves AI-generated code meets it for every input, and uses tests where proofs aren't practical. Developers review intent, not every line. The post Formally verifying agent-written full-stack web apps with PDD Kit appeared first on Microsoft Research .

6. [ToyBlocks: A controlled world for robot learning and evaluation](https://huggingface.co/blog/allenai/toyblocks)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Fri, 06 Nov 2026 14:00:48 GMT

7. [New NVIDIA Cosmos 3 Open Models for Interactive World Simulation](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Thu, 05 Nov 2026 19:35:16 GMT

8. [CWE-bench v2: More coverage, quality, and transparency](https://huggingface.co/blog/cwe-bench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 03 Nov 2026 00:00:00 GMT

9. [Formalizing inverse problems in the age of AI: possibilities, pitfalls, and an invitation](https://arxiv.org/abs/2611.06962)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06962v1 Announce Type: new Abstract: Proof assistants such as Lean check mathematical proofs down to the axioms, and AI agents have recently made writing such proofs cheap. We describe AutoIP, a Lean library in which classical linear regularization theory, together with the functional analysis it rests on, has been autoformalized by AI agents. A machine-checked proof certifies only the formal statement it proves, so the remaining human task is to confirm that each formal statement says what was intended. We organize the library around this task: a reviewer compares the formal statements with their natural-language counterparts and never needs to read a proof. Our experience is that the risks lie in the statements rather than in the proofs, and that simple automated tests on the statements can expose problems even in the established literature. We illustrate this with a textbook theorem whose hypothesis is more restrictive than asserted. We invite the inverse problems community to extend and build on the library.

10. [Trust Responsive Runtime Authorization for Agentic AI with Empirical Characterization of Policy Behavior and Parameter Sensitivity](https://arxiv.org/abs/2611.06996)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06996v1 Announce Type: new Abstract: The policy that converts runtime estimates of an autonomous agent's condition into operational authority is rarely specified or measured. We empirically characterize the Trust Responsive Authorization Policy (TRAP), which maps an Authorization Readiness Score (ARS), a weighted combination of runtime trust, operational stability, and contextual risk, onto discrete authorization levels through an asymmetric rule: escalation requires consecutive observations above a band edge plus a margin, while a sharp drop in readiness restricts authority at once. On one matched set of 100 Monte Carlo traces, we compare TRAP with static, trust-only, risk-only, and symmetric policies. Under abrupt degradation, TRAP restricts at onset and re-escalates sooner after recovery than the symmetric policy, with the highest and, descriptively, least variable stability among the adaptive policies, although more of its post-recovery escalations occur below the selected trust threshold. Paired bootstrap intervals exclude zero for the remaining differences. In one-factor sweeps, recovery time rises with the escalation margin and run length, shifts with the score weights, and is unchanged by the restriction threshold. In an exploratory post-freeze experiment, when the same degradation is spread over 5-20 intervals, TRAP restricts only on the 4 traces that retain a single-interval drop above that threshold; averaged over all 100 traces, it holds authority above what readiness supports for 15.9-18.9 of the 20 degradation intervals, against 0.8 under abrupt degradation and about 10 for the symmetric policy. Its restriction advantage therefore depends on degradation being abrupt. All reported values are traceable to the publicly available, versioned research release.

11. [Adapting the Process of Adaptation: Darwinian, Lamarckian, and Agent-Directed Evolution in AI](https://arxiv.org/abs/2611.07048)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07048v1 Announce Type: new Abstract: Evolution has shaped intelligence for billions of years. Artificial intelligence (AI) now raises a striking possibility: intelligence may begin to direct its own evolution. As AI agents become capable of modifying and evaluating their own behavior, how quickly could they improve, and how can that improvement remain safe? We develop a theoretical framework comparing Darwinian, Lamarckian, and agent-directed evolution following environmental change. Darwinian evolution relies on natural selection, Lamarckian evolution adds inherited learning, and agent-directed evolution allows agents to generate and evaluate behavioral variants and choose how extensively to search. When learning is sufficiently effective, these mechanisms exhibit progressively faster adaptation. Generating more variants accelerates adaptation, while optimal search effort depends on learning ability, problem difficulty, and experimentation costs. However, an agent's ability to direct its improvement does not ensure that improvements are evaluated against the intended objective. When the evaluation target is misspecified, additional search accelerates convergence toward the wrong behavior, even as measured performance improves. In recursive self-improvement, such errors may persist across generations, posing challenges for AI safety. Independent evaluation and oversight must keep pace with autonomous AI development. The central challenge is not simply to accelerate the evolution of intelligence, but to preserve humanity's ability to guide its direction, limit its speed, and intervene when necessary.

12. [Cooperative Multi-Agent Reinforcement Learning via Epigraph-Form Guided Exploration](https://arxiv.org/abs/2611.07066)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07066v1 Announce Type: new Abstract: Discovering cooperative behavior in multi-agent reinforcement learning (MARL) is challenging due to the combinatorial complexity of joint state-action spaces, which hinders the emergence of coordinated behaviors from trial-and-error alone. Intrinsic rewards are often used to aid discovery, but naively combining them with team objectives can distort the learning signal, compromising task performance. In this paper, we propose EFXPLORER, a constrained exploration framework that maximizes exploration objectives subject to a constraint that preserves established task performance. We solve the resulting problem using an epigraph reformulation that introduces adaptive exploration budgets. This approach separates intrinsic rewards from task objectives and regulates exploration through task feasibility. To further encourage diverse and temporally extended exploration, we incorporate a successor distance-based intrinsic reward that captures long-horizon dependencies. Empirically, our method outperforms strong baselines and induces novel cooperative strategies across SMAX, VMAS, and MPE benchmark suites.

13. [SteelAgent: LLM-Orchestrated, Physics-Informed Steel Property Prediction with Audited Generalization and Calibrated Uncertainty](https://arxiv.org/abs/2611.06953)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06953v1 Announce Type: new Abstract: Steel property models can perform well on random test splits even when they extrapolate poorly to unfamiliar alloys. SteelAgent couples metallurgical descriptors and machine-learning models with a language-model interface for property prediction, uncertainty reporting and inverse design. We examine how the choice of held-out unit changes the conclusions drawn from SteelBench tensile-strength evaluations. For gradient boosting, pooled out-of-fold $R^2$ fell from 0.859 on a random split to 0.113 when steel families were held out. Empirical coverage of nominal 90% prediction intervals ranged from 91.0% under random splitting to 37.6% on held-out sources. The effect of physics-derived features depended on the evaluation. They increased gradient-boosting $R^2$ by 0.2534 in a 17-family holdout analysis and decreased it by 0.358 in a separate four-grade laboratory analysis. We report group-level errors and a synthetic regression experiment illustrating how calibration can deteriorate on held-out groups. These results motivate reporting the evaluation population alongside a property estimate or compliance score.

14. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-11-06T18:46:22Z; Popularity: 2,024 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

15. [Partnering with Hacktron to find vulnerabilities in OpenAI’s systems](https://openai.com/index/partnering-with-hacktron)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 06 Nov 2026 08:00:00 GMT
   - Summary: OpenAI is partnering with Hacktron to find vulnerabilities, test connections with third-party services, and strengthen defenses with frontier AI.

16. [Measuring how AI agents handle everyday wet-lab science](https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 GMT
   - Summary: OpenAI introduces BioBasicsBench, a 100-task benchmark measuring how well AI agents interpret raw experimental data and handle everyday wet-lab science.

17. [Australian universities are creating AI-native graduates](https://openai.com/index/australian-universities-ai-native-graduates)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 05 Nov 2026 17:00:00 GMT
   - Summary: Australian universities are expanding access to ChatGPT and bringing AI into teaching and learning to prepare students for an AI-enabled workforce.

18. [Cult.fit builds operational muscle with Codex](https://openai.com/index/cultfit-builds-with-codex)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 05 Nov 2026 20:00:00 GMT
   - Summary: Cult.fit is using Codex to help teams across functions build tools, move faster, and change how work gets done.

19. [GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents](https://openai.com/index/introducing-gpt-6-cyber)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 05 Nov 2026 09:00:00 GMT
   - Summary: Introducing GPT‑6 Cyber, OpenAI’s cybersecurity model for finding exploitable vulnerabilities and developing fixes, trained to stay within authorized scope.

20. [Merge builds product and business tools with OpenAI technology](https://openai.com/index/merge-builds-with-openai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 05 Nov 2026 08:00:00 GMT
   - Summary: Merge uses GPT-6 Astra, ChatGPT, and Codex to review product code and support marketing. Its teams also use AI to plan executive dinners and prepare sales updates.

21. [Setting a new standard for responsible AI infrastructure](https://openai.com/index/setting-new-standard-responsible-ai-infrastructure)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 05 Nov 2026 02:00:00 GMT
   - Summary: OpenAI introduces its National Community Compact and Compute Campus Policy Blueprint to protect local resources, create jobs, and guide responsible AI infrastructure development.

22. [Flipsnack grows product signups with conversion optimization](https://openai.com/ads/customers/flipsnack)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 05 Nov 2026 00:45:15 GMT
   - Summary: Flipsnack focused its ChatGPT Ads campaigns on getting people to try its product, growing registrations while lowering the cost per signup.

23. [OpenAI to acquire Pierre Computer Company, Inc.](https://openai.com/index/openai-to-acquire-pierre)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 04 Nov 2026 14:30:00 GMT
   - Summary: OpenAI will acquire Pierre Computer Company, expanding Codex’s tools for building, understanding, and reviewing code.

24. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

25. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

26. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

27. [Egyptian and Nigerian English join the Open ASR Leaderboard](https://huggingface.co/blog/open-asr-leaderboard-liva)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 GMT

28. [A Closer Look at Phonon TTS. Launching High-Quality On-Device Speech That Tops the Benchmarks.](https://huggingface.co/blog/phonon-tts)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 05 Nov 2026 00:00:00 GMT

29. [Dharma Field Extractor: Any Document In, Structured Fields in JSON Out](https://huggingface.co/blog/Dharma-AI/dharma-field-extractor)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 04 Nov 2026 17:50:10 GMT

30. [Palette: teaching a small model to build decks in your design language](https://huggingface.co/blog/ibm-research/palette-deck-building)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 03 Nov 2026 16:35:36 GMT

31. [Transformers Model Integration Contracts](https://huggingface.co/blog/transformers-mic)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 03 Nov 2026 00:00:00 GMT

32. [Granite Switch 4.1.1 — Update models like you update software](https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 13:37:07 GMT

33. [Announcing Project ProtoStar: Making Publicly Funded Science AI-Ready](https://huggingface.co/blog/announcing-project-protostar)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 29 Oct 2026 00:00:00 GMT

34. [BlockLock: Reproducible LLM Inference with Fixed Batch Geometry](https://arxiv.org/abs/2611.06977)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06977v1 Announce Type: new Abstract: Reproducible LLM inference requires that a request produces the same output regardless of the other requests in the batch. Existing solutions pay for this in different ways: batch-invariant kernels constrain every operator, and isolating prefill with fixed-shape decode ({our CoRun-style baseline}) gives up shared prefill compute and pads decode. We present BlockLock, which keeps shared batched prefill and pins only the numerical path of the protected request: it fixes the geometry that the request sees, with {two modes: BlockLock-Rows uses fixed-width rows and retains batched decode of all requests; BlockLock-Pack uses terminal-anchored packing with an isolated dummy segment, then extracts the protected request's KV state for target-only decode. Under a stated per-deployment contract, both modes preserve the target's output bitwise when its companions change.} Across five {dense} models (Qwen3-8B/14B, Llama-3.1-8B-Instruct, and Gemma-3-4B/12B-IT) and three single-GPU deployments (NVIDIA A6000, A100, and H100), we evaluate our approach on both tinyBenchmarks and BFCL{; we also include initial tensor-parallel experiments on two NVIDIA A6000 GPUs. Both modes preserve target sequences and Top20-logit bits in the reported tests.} At equal delivered work, {BlockLock-Rows} reduces latency by 53.5--55.0\% and improves throughput by 115.2--122.2\% relative to vLLM Batch-Invariant; compared with batch-invariant kernels, it needs no custom kernel implementations and constrains only the protected requests.

35. [Resource-Efficient Reinforcement Learning Post-Training through Elastic Expert Parallelism](https://arxiv.org/abs/2611.06984)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06984v1 Announce Type: new Abstract: Reinforcement learning post-training improves the capabilities of large language models, but generating training responses is a major computational bottleneck. In mixture-of-experts models, workers that finish their assigned responses may remain occupied because their experts are still needed by workers processing longer responses. Consequently, approximately one-third of occupied worker time in the baseline occurs after local response generation finishes. Here we present FlexFloor, a system that enables earlier resource release during synchronous response generation while preserving the expert computation required by ongoing responses. FlexFloor jointly adapts response scheduling and the active group of workers. It uses historical response lengths and memory constraints to guide batching and prompt placement, then progressively releases workers while maintaining expert availability and correct communication. Compared with the verl baseline, FlexFloor generates approximately 65.40% more response tokens per unit of occupied computing time and increases response generation throughput by 52.74%, with little observed variation in rollout reward. By making reinforcement learning post-training more efficient, FlexFloor supports faster development and iterative improvement of large language models and AI agents.

36. [Autonomous AI Agents Systematically Diverge From Human Preferences in Proof Formalization](https://arxiv.org/abs/2611.06995)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06995v1 Announce Type: new Abstract: Artificial intelligence (AI) systems have ushered in a new age of proof abundance, but helping humans understand these proofs requires new attention to the differences in how AI agents and humans pursue a proof-making task. We present "simulated collaboration", a methodology that allows us to examine two key questions: (1) the relative attention AI agents pay to surface syntax or, conversely, deeper underlying semantics, and (2) how and where AI agent preferences for what to do next diverge from human preferences. On a set of nine major human collaborations in Lean with 4.7M definitions across more than 6K commits, we find that, over the course of proof construction, AI agents (1) are far more strongly drawn than humans to explicitly marked gaps; (2) show a relative aversion to densely connected proof centers and to complex or surprising proof goals; and (3) are relatively attracted to surprising proof bodies, which they tend to regularize toward baseline. Our results highlight important blind spots and potential interventions for future human-AI collaboration in mathematics.

37. [Octopus: One Brain, Many Branches for Latent-KV Multi-Agent Reinforcement Learning](https://arxiv.org/abs/2611.06956)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06956v1 Announce Type: new Abstract: Multi-agent LLM systems explore in parallel by spawning sub-agents with isolated context windows, whereas single-agent systems append every search and verification step into one growing trajectory. However, existing multi-agent frameworks duplicate prefix KV caches across branches, exchange findings by re-prefilling text summaries, and flatten or drop cross-branch dependencies during reinforcement learning (RL). We introduce Octopus, a single-model multi-agent RL framework in which all threads share one backbone and coordinate over a GPU-resident directed acyclic graph (DAG) of KV states through five primitives (fork, read_thread, wait_threads, rewind, commit). Octopus combines three co-designed mechanisms: (1) Zero-Copy Radix Forking, which spawns branches as $\mathcal{O}(1)$ cursor views over shared physical KV pages; (2) Attention-Only KV Mounting, which mounts a sibling thread's terminal KV blocks directly into full-attention layers while bypassing linear-recurrent states (Gated DeltaNet / Mamba-2), cutting off-task hijacking by $21\times$ ($57.9\% \to 2.7\%$) while retaining $92.2\%$ of full-text mutual information at zero extra KV allocation; and (3) a Packed DAG-GRPO Trainer, which packs all episode branches into one block-sparse attention pass and assigns counterfactual branch credit via leave-one-branch-out marginal rewards. Trained end-to-end with GRPO on Qwen3.5-4B over a sparse BM25 corpus, Octopus reaches $49.6\%$ accuracy on BrowseComp-Plus ($+17.5$ points over single-agent GRPO at 143K context and $+12.5$ points over text-summary multi-agent RL) and $51.2\%$ on OpenResearcher, outperforming dense-retrieval agents up to $250\times$ larger while increasing training throughput $3.3\times$ and cutting peak KV memory $2.8\times$.

38. [Uncertainty calibration in Bayesian M/EEG source imaging](https://arxiv.org/abs/2611.06979)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.06979v1 Announce Type: new Abstract: M/EEG source imaging requires accurate localization and reliable uncertainty estimates, yet posterior credible regions are rarely assessed for empirical calibration. We present a simulation-based framework for uncertainty quantification and calibration of empirical Bayesian inverse methods with closed-form conditional Gaussian posterior summaries. We compare Bayesian minimum norm (BMN) with sLORETA depth weighting and sparse Bayesian learning (SBL) with sparse basis field expansions (S-FLEX). S-FLEX allows retained coefficients to contribute nonzero marginal posterior variance at locations where voxel-wise SBL yields degenerate variances. For BMN, we derive joint source- and noise-variance updates through evidence maximization. We test whether adaptive noise learning yields near-calibrated uncertainties. Both methods retain residual miscalibration, motivating post-hoc isotonic recalibration of credible-region levels using empirical coverage. Simulations assess fixed- and free-orientation models across signal-to-noise ratios (SNR), source sparsity levels, and subject-specific head models, using oracle, baseline-estimated, and adaptively learned noise. Before recalibration, SBL+S-FLEX yields lower Wasserstein localization error, smaller posterior uncertainty, and coverage closer to nominal credibility than BMN+sLORETA. Isotonic recalibration improves both methods, with larger gains for conservative BMN+sLORETA posteriors; transfer across mismatched SNR, sparsity, and head models remains condition dependent. Noise specifications yield broadly consistent reconstruction and uncertainty trends within each estimator. In real auditory MEG data, SBL+S-FLEX provides more focal localization and tighter uncertainties than BMN+sLORETA, suggesting greater statistical power for identifying bilateral auditory sources.

39. [A physics-based-preconditioned quasi-Newton solver for energy- and momentum-conserving implicit hybrid particle-in-cell simulations](https://arxiv.org/abs/2611.08402)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.08402v1 Announce Type: new Abstract: Explicit hybrid particle-in-cell (PIC) schemes, with kinetic ions and fluid electrons, accumulate numerical heating over long simulations and are unstable to finite-grid instabilities. Energy-conserving implicit integration removes heating and instabilities, but may be inefficient due to the need of nonlinear iteration. We present a fast quasi-Newton solver for an implicit hybrid-PIC formulation. The nonlinear residual employs the electric field and electron pressure as nonlinear unknowns, and nonlinearly eliminates particles. The formulation is strictly energy conserving and, on Cartesian meshes, also momentum conserving. The nonlinear iteration is efficiently performed with a quasi-Newton solver that replaces the true Jacobian with an approximate one without spoiling conservation properties upon convergence. The approximate Jacobian replaces the particle ion linear response with an analytical mass matrix that is local and requires minimal storage. This approximate Jacobian is efficiently inverted with a physics-based multigrid preconditioner, adapted from Hall MHD. We verify the scheme linearly with whistler, kinetic Alfv\'en, and cylindrical normal modes, and nonlinearly with the GEM reconnection challenge. On GEM, explicit integration needs a forty-times-smaller time step, and nine times the wall-clock time, to reach an energy conservation comparable to that of the implicit solver. We apply the method to the simulation of a three-dimensional field-reversed configuration formation by external coils.

40. [Improving the accuracy of the momentum-exchange method in lattice Boltzmann methods](https://arxiv.org/abs/2611.07137)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07137v1 Announce Type: cross Abstract: In the lattice Boltzmann method (LBM), the momentum-exchange method (MEM) is widely used to evaluate hydrodynamic forces at fluid-solid interfaces due to its computational efficiency and geometric flexibility. However, when mapping complex geometries onto structured Cartesian grids, the physical boundary rarely intersects the lattice links exactly at their midpoints. This discrepancy violates an implicit assumption inherent to the conventional momentum-exchange (CME) formulation. In this study, we systematically analyze this geometric deficiency and demonstrate that it induces significant force inaccuracies, even in elementary flows where the solid boundary deviates from the midway position. To resolve this, we propose a modified momentum-exchange (MME) method that explicitly accounts for the exact boundary location along the lattice links, demonstrating enhanced accuracy for both flat and curved geometries. Furthermore, we address another critical issue with the interpolation-supplemented bounce-back (ISBB) schemes, and that is their inherent violation of local mass conservation. This mass leakage induces unphysical pressure buildup in the system, which compromises the accuracy and stability of the LBM. We propose a mass-conservative remedy for ISBB schemes that eliminates this leakage. Through a series of benchmark simulations of increasing complexity, we demonstrate that combining the proposed MME with the mass-corrected ISBB scheme drastically improves the fidelity of hydrodynamic force evaluations, establishing a robust framework essential for moving boundary problems and fluid-structure interactions.

41. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.83; Date: 2026-11-06T15:23:03Z; Popularity: 831 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

42. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.49; Date: 2026-11-04T11:59:32Z; Popularity: 493 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

43. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.38; Date: 2026-11-06T05:54:11Z; Popularity: 385 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

44. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-11-06T01:25:51Z; Popularity: 244 stars
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

48. [Proof-based general-purpose computing with Magnetar](https://www.microsoft.com/en-us/research/blog/proof-based-general-purpose-computing-with-magnetar/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 15 Oct 2026 16:00:00 +0000
   - Summary: Zero-knowledge proofs can verify computing results without rerunning workloads or exposing sensitive data. Magnetar helps bring them into the mainstream with support for standard programming languages, major speed gains, and quantum-resistant security. The post Proof-based general-purpose computing with Magnetar appeared first on Microsoft Research .

49. [Simulating student learning for better AI tutoring](https://www.microsoft.com/en-us/research/blog/simulating-student-learning-for-better-ai-tutoring/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 12 Oct 2026 16:00:00 +0000
   - Summary: StudentSim is a research system for evaluating and improving AI tutoring tools before they are tested with learners. It models how individuals may engage with tutors, giving feedback to improve tutor performance across subjects like chess, writing, and mathematics. The post Simulating student learning for better AI tutoring appeared first on Microsoft Research .

50. [The lattice Boltzmann machine](https://arxiv.org/abs/2611.07139)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07139v1 Announce Type: new Abstract: The lattice Boltzmann (LB) method is widely regarded as a very flexible and efficient solver for a broad class of transport phenomena in fluids, soft matter and related fields. In this paper, we posit that such flexibility is a direct result of its generative nature as a rule-driven information-processing machine. Its update, a relaxation toward a local target followed by a shift along the lattice, belongs to the same class of iterated relaxation dynamics as residual networks and transformers, with the difference that in LB the operators are fixed by conservation and symmetry rather than learned from data. We show that three properties of this update are sufficient to promote the emergence of closed macroscopic laws from the underlying iteration process, the physical content of the target deciding the specific law in question. A machine whose target is drawn at random generates the transport law predicted from its moments. A network given the same three properties on a graph, where there is no lattice, is trained on a traffic process and generates a conservation law of its own. The mechanism has a precise limit, where the damping of the non-conserved modes fails, and on the lattice the macroscopic law gives no warning of it. In this reading, LB is a lattice Boltzmann machine whose informing rules are supplied by physics rather than by training. Its three properties then state what a new ingredient should preserve when it enters an LB model, whether it comes from physics or from data.

51. [A componentwise spherical Dirichlet-to-Neumann closure for finite-volume MHD at finite magnetic Reynolds number](https://arxiv.org/abs/2611.07304)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07304v1 Announce Type: new Abstract: At finite magnetic Reynolds number, the field induced by a moving conducting fluid or solid extends into open space, so a finite mesh needs an outer boundary condition that represents the decaying exterior field. Magnetohydrodynamic (MHD) codes widely use pseudo-vacuum or truncation at a finite radius. Neither condition is physically correct for a vacuum exterior, but the exact alternatives are costly or limited to simple geometries. We present a Dirichlet-to-Neumann (DtN) closure on a fixed enclosing sphere and release it as part of the open-source multi-region finite-volume solver FreeMHD. The closure matches each Cartesian component of the vector potential to its decaying exterior solution, which retains all three decaying vector-Laplace families. A meshed vacuum buffer connects non-spherical conductors to the sphere. We verify the closure with manufactured modes, sphere free decay, sphere and oblate dynamos, and a freely braking rotor. Under refinement, oblate dynamo thresholds and sphere growth rates converge toward independent spectral references, and the rotor torque matches an exact transient reference. On the same sphere, pseudo-vacuum and truncation give the larger errors predicted by their exterior models.

52. [A hierarchy of physics-embedded neural operators for structural dynamic surrogate modelingA hierarchy of physics-embedded neural operators for structural dynamic surrogate modeling](https://arxiv.org/abs/2611.07059)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07059v1 Announce Type: cross Abstract: Structural-response surrogates must capture moving resonances, phase changes, and unequal-amplitude transfer channels during optimization or health-state changes. Physics-embedded learning seeks FEA-level accuracy at lower cost by embedding physics in inputs, forward passes, losses, and backpropagation. We propose Modal Rational (MR), mapping structural features to modal quantities for analytical frequency-response reconstruction. The Physics-Guided Modal Operator Network (PGMON) adds bounded frequency, damping, and residual-flexibility corrections. Modal Operator with Structural GELU and Anchored-SIREN Correction (MOSAIC) denotes the bounded spectral-discrepancy framework used here; MOSAIC-MR and MOSAIC-PGMON add such discrepancies. They support finite-dimensional maps and physical decoders for future neural operators; evidence is fixed-topology, not a completed operator comparison. Two 20,000-design populations are studied: an 80 m steel truss tower with variable member areas and attached masses, and a tapered shell beam with ten variable station masses. Archived tests cover ten designs and seven acceleration histories per structure; they are benchmarks, not seismic-design assessments. With 5% reference modal damping, MR, PGMON, and MOSAIC give mean displacement-history errors of 0.73-0.76% for the tower and 0.029-0.116% for the beam, against declared band-limited modal references. Supplied modal frequencies are distinguished from design-only use; unequal parameter counts and training settings are explicit. Error analysis separates learned modal discrepancies, truncation, and excitation weighting, explaining acceleration and difficult-tower limits and risks of blind use. Results support physically structured prediction but limit claims about generalization, computational savings, and added corrections. Next is developing and validating neural operators around these architectures.

53. [Field-aligned measurement removes the anisotropy barrier of sample-based quantum subspace solvers for magnetized-plasma heat conduction](https://arxiv.org/abs/2611.07102)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07102v1 Announce Type: cross Abstract: Sample-based quantum subspace methods construct a small subspace from measured basis states and solve the target problem classically within it. We study these methods for heat conduction in magnetized plasmas, where the anisotropy $\chi_\parallel/\chi_\perp$ reaches $10^8$ to $10^{10}$. We prove two results for the energy-norm Galerkin solution. First, if the measurement basis is aligned with the flux surfaces and the subspace contains the poloidal-mode-zero block, the error is bounded by $\|r_0\|_{L^+}(\chi_\parallel-\chi_\perp)^{-1/2}$, where the numerator does not depend on $\chi_\parallel$. The bound is sharp, so the accuracy improves as the anisotropy grows. Second, in the computational basis, a subspace that misses a single node of a flux surface suppresses the flux-function component there as $\chi_\parallel^{-1/2}$, which gives an error floor when the limiting solution is nonzero on that surface. We verify both results on a shaped cross-section and on a KSTAR-like Miller equilibrium with ten qubits. At $\chi_\parallel/\chi_\perp=10^9$, the computational basis gives an error of order unity for every shot budget, whereas a quantum Fourier transform on the poloidal register gives $1.3\times10^{-5}$. The same barrier limits sample-based quantum diagonalization. The aligned measurement needs no time evolution, so the circuit is only state preparation and a five-qubit quantum Fourier transform. On a ten-qubit superconducting processor, the aligned basis gives a median error of $7.0\times10^{-6}$ with 768 shots, whereas the computational basis gives errors above 0.94 up to $1.2\times10^4$ shots. A trapped-ion processor shows the same behavior.

54. [The shear Alfv\'en continuum of optimized stellarators](https://arxiv.org/abs/2611.07182)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07182v1 Announce Type: cross Abstract: The shear Alfv\'en continuum has been studied extensively in tokamaks, but its gap structure in modern optimized stellarators has received less attention, despite its importance for energetic-particle confinement in fusion pilot plants. We compute and compare the continua of five reactor-scale stellarator equilibria: two quasi-axisymmetric (QA), two quasi-helically symmetric (QH), and one quasi-isodynamic (QI). We present selective Fourier mode schemes that provide a sufficient resolution of eigenfrequencies within the frequency range of interest. In all five configurations, the widest gap is the HAE(2,$N_{\text{fp}}$) gap, which is driven by rotating ellipticity. This gap lies in the frequency range of strong resonance with prompt fusion-born alphas in the QA configurations but not in the QH configurations, suggesting that QH configurations may be easier to optimize for alpha confinement. Near-axis theory predicts the HAE(2,$N_{\text{fp}}$) and EAE gap widths well but overestimates the MAE gap widths and the gap widths of the QI configuration. These discrepancies likely arise from interactions between gaps, which depend on the rotational transform profile and are not captured by near-axis theory.

55. [Energy-conserving scheme for a shallow-water model with capillary effects](https://arxiv.org/abs/2611.07360)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07360v1 Announce Type: cross Abstract: We consider numerical approximations of shallow-water and thin-film flow models with capillary effects. These models lead to third-order differential equations, and we work with an augmented model with second-order derivatives. For a wide class of such models, which includes the classical shallow-water model and thin-film flow models, we develop a fully discrete energy-conserving scheme for both the quadratic and fully nonlinear capillary models. Numerical results show that the proposed scheme is stable and conserves total energy in the absence of dissipative effects.

56. [Projection-based segregated, iterative, and multi-stage physics-informed neural network for incompressible Navier-stokes equations](https://arxiv.org/abs/2611.07387)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07387v1 Announce Type: cross Abstract: Physics-informed neural networks(PINNs) offer a mesh-free and continuously differentiable approach to fluid simulation. However, standard monolithic PINNs for incompressible Navier-Stokes (NS) equations often suffer from severe constraint coupling and spectral biases, limiting both convergence and accuracy. To address this challenge, we propose a segregated, iterative, and multi-stage PINN (SIM-PINN) inspired by the classical projection method in computational fluid dynamics. In SIM-PINN, the nonlinear NS equations are decoupled into the linearized momentum and pressure Poisson equations. Each is addressed separately using dedicated multi-stage neural networks and coupled through projection-based inner iterations. Each stage of the multi-stage neural networks for the momentum equations corresponds to one iteration of the projection method, in which the velocity fields are progressively refined at targeted frequencies. Upon iteration convergence, solutions to the fully coupled and nonlinear NS equations are recovered. By integrating the segregated and iterative framework with the multi-stage training, SIM-PINN alleviates the optimization difficulties of the incompressible NS equations arising from nonlinearity, constraint coupling, and spectral biases. The improved convergence and accuracy are demonstrated by simulations of steady lid-driven cavity and unsteady Kolmogorov flows.

57. [Simulation of Refraction Through Voxel Volumes](https://arxiv.org/abs/2611.07690)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 06 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.07690v1 Announce Type: cross Abstract: Ray tracing in X-ray science has typically been limited to descriptions where refraction occurs only at interfaces, ignoring the refraction occurring due to the continuous variations in index of refraction in the bulk of a material, as are common in biological samples like bone. We propose a method to simulate X-ray images directly on voxel grids using curved rays. We first validate this method compared to a model with an analytical solution, and then investigate the effects of voxel size, interpolation choice, and illumination to grid alignment on a few simulated test objects. From these investigations, we make several recommendations to guide simulations using these techniques.

58. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.79; Date: 2026-11-02T18:36:00Z; Popularity: 792 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

59. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.35; Date: 2026-11-06T19:38:31Z; Popularity: 1,347 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

60. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-06T10:21:28Z; Popularity: 266 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

61. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-06T12:16:20Z; Popularity: 58 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

62. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.02; Date: 2026-11-06T15:01:26Z; Popularity: 1,016 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

63. [RobLe3/IICP](https://github.com/RobLe3/IICP)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-11-06T06:28:09Z; Popularity: 7 stars
   - Summary: Open specification and conformance material for intent-based AI agent discovery and routing

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

KDASO: Knowledge-Data Dual-Driven Automated Skill Optimization for Liability Adjudication Tasks

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2611.06972

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
