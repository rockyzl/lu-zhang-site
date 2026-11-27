# Daily signal sidecar - 2026-11-27

## Selected Signal

- Title: Clay helps sales teams win with Codex and ChatGPT
- URL: https://openai.com/business/customer-stories/clay-plugins-openai
- Source: OpenAI News
- Score: 5.00

## Candidate Review

- Signal: Clay helps sales teams win with Codex and ChatGPT
- Primary source: https://openai.com/business/customer-stories/clay-plugins-openai
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

Total candidates reviewed after duplicate-source filtering: 46

1. [Clay helps sales teams win with Codex and ChatGPT](https://openai.com/business/customer-stories/clay-plugins-openai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 24 Nov 2026 00:00:00 GMT
   - Summary: ChatGPT and Codex integrations help Clay’s users research deals and turn data into go-to-market plays, with GPT-6 models handling the reasoning.

2. [Connected intelligence for in-house legal](https://openai.com/business/learn/connected-intelligence-for-in-house-legal)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Mon, 23 Nov 2026 08:00:00 GMT
   - Summary: Watch OpenAI’s Stacey Wang and Craig Bruney, Mary O’Carroll of LECG, and Cooley’s Richard Segal explore how AI can help in-house legal teams connect business context, build reusable workflows and get more from outside counsel.

3. [TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient](https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 16 Nov 2026 17:01:35 +0000
   - Summary: AI coding agents can waste time and tokens relearning the same lessons. TokenEconomizer is an open-source plugin that builds on past sessions to cut costs while maintaining task success. It’s a path toward coding agents that learn not only how to solve tasks, but also how to spend computation more effectively. The post TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient appeared first on Microsoft Research .

4. [How to build and maintain an agentic evaluation](https://huggingface.co/blog/agentic-evals)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Mon, 23 Nov 2026 00:00:00 GMT

5. [Context Scaling: A New Frontier of AI Scaling](https://arxiv.org/abs/2611.33160)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33160v1 Announce Type: new Abstract: Many failures of deployed AI arise not from weak inference but from a mismatch between the state a task depends on and the context available when the system acts. Relevant user state, repository revisions, tool traces, sensor readings, or environment changes may be unavailable, distorted, or poorly selected. We call the effort to reduce this bottleneck context scaling. We frame a model as $P_\theta(d\mid c)$ within a system governed by three budgets: training $B_\theta$, decision-time $B_d$, and context-infrastructure $B_c$. Pretraining scaling invests in $\theta$; decision-time scaling searches, refines, or verifies decisions under supplied context; context scaling improves the system's capacity to acquire, represent, deliver, evaluate, and persist deployment state for model use. The three programs interact, but only $B_c$ targets what the system can make available before a decision. This view makes the model-infrastructure pair the unit of analysis. We define effective-context value as a task- and intervention-dependent attribution, separate deployment state from model-visible context, and identify availability, fidelity, selection, and utilization failures. We then organize current mechanisms through a five-operation context lifecycle and propose controlled budget interventions and utility-cost curves for evaluation. The resulting agenda centers on grounded reporting, interaction-data and full-cost infrastructure, and safety and governance for persistent, adaptive systems.

6. [AutoformBench: A Lean Formalization Benchmark for Advanced Mathematics](https://arxiv.org/abs/2611.33165)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33165v1 Announce Type: new Abstract: AI systems are increasingly capable of producing machine-checked Lean proofs of advanced mathematical results. Real mathematical formalization, however, is not isolated theorem proving: it requires building the definitions and intermediate lemmas that connect a result to a formal library. Existing evaluations often provide isolated theorem statements in settings where much of this supporting theory is already available in Mathlib. We introduce AutoformBench, a benchmark of 341 Lean 4 formalization tasks drawn from 24 advanced mathematical sources. Lean-experienced mathematicians formalized and audited each target statement, leaving the corresponding Lean proof to the evaluated agent. Each problem is embedded in a broader mathematical development: agents receive the informal proof but must translate it into Lean while constructing the missing definitions, intermediate lemmas, and supporting infrastructure. We compare the performance of frontier models on these problems. We find a largely shared difficulty frontier: success depends less on mathematical domain than on models' ability to construct missing formal infrastructure. Data and code at https://github.com/facebookresearch/autoformbench

7. [What, Who, and When: Structured Harm Assessment for Mental Health Safety via Short Reasoning](https://arxiv.org/abs/2611.33263)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33263v1 Announce Type: new Abstract: The growing use of large language models (LLMs) for mental health support raises important safety concerns. Existing guard models primarily identify categories of harmful content, often overlooking the context needed to determine an appropriate response. We introduce a clinically grounded taxonomy that characterizes harm along three dimensions: what the harm is, who is involved, and when it occurs. It further separates harm characterization from intervention decisions, thus enabling safety policies to be specified outside the model weights through explicit, clinician-curated instructions that can be updated and audited. We validate the taxonomy with expert clinicians and validate a panel of LLM judges to scale annotation. Relabeling public benchmarks in this taxonomy shows that they rarely contain harm directed at the user, which accounts for nearly half of the harm in real conversations. We then train MindGuard2, a 35B-A3B reasoning-based guard model using supervised fine-tuning on short reasoning traces followed by reinforcement learning with a reasoning-length penalty, to minimize inference overhead while preserving the benefits of reasoning. On two public benchmarks and real-world conversations, MindGuard2 achieves balanced accuracy comparable to the substantially larger GLM-5.3 at approximately 10x lower median latency, advancing the accuracy-latency Pareto frontier. Furthermore, it achieves low false-positive rates at high recall, helping balance the need to detect unsafe situations against the risk of unnecessary interventions that may disrupt support and undermine user trust. We release a safety guardrail model with SOTA performance trained on synthetic data, together with synthetic conversations and annotations of public benchmarks in our taxonomy.

8. [Certify What You Plant: Shortcut-Free Proof Depth in Logical Reasoning Data](https://arxiv.org/abs/2611.33303)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33303v1 Announce Type: new Abstract: Procedurally generated logic problems are used to both evaluate and train reasoning in language models. Their difficulty is usually set by planting a proof, that is, by sampling a proof of the desired depth and stating its premises as the problem. However, a planted proof is only one possible proof. A problem can also have shorter proofs, or several unrelated ones, and its stated depth then overstates what solving it requires. We measure what a problem actually requires, relative to a stated set of inference rules. For each problem, we compute the steps every proof must make, the shortest proof, the number of minimal proofs and the indispensable premises, and export certificates that an independent checker verifies. Audits of eight datasets find depth that is forced (ProofWriter, Blocksworld), problems labelled depth 5 that require about two specific rule applications (FLDx2), and answers that need no particular step (ZebraLogic). We then construct problems whose every proof has a requested structure, using a catalog of shortcuts proved once per rule set. Every constructed problem is checked in full and comes with its own certificate. In training, the best data mixes depths and problem types. At equal size, such mixtures of certified problem types, including model-checking problems that forward generation does not produce, transfer better than FLDx2-style derivation data for Qwen3 models from 0.6B to 8B.

9. [The Platonic Representation Hypothesis in Jacobian-Space: Language and Vision Models Agree Approximately Up to a Rotation](https://arxiv.org/abs/2611.33304)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33304v1 Announce Type: new Abstract: The Platonic Representation Hypothesis (PRH) posits that AI models converge toward a shared representation of the world, even when trained on different data modalities. Previous work has found evidence for the PRH in the activations of vision and language models. In this work, we ask whether vision and language models also converge in how they act on these representations: precisely, in how these internal representations affect the models' output. At a chosen layer of a transformer, the Jacobian lens gives every word in the vocabulary (or class in an image classifier) a vector in the hidden state: the vector that most increases the model's tendency to generate that word, at that position or later, or to predict that class. Collectively, these vectors make up what is referred to as the model's J-space. We find evidence of the PRH in J-space across vision and language models, and furthermore, we find that J-spaces mostly converge up to a rotation. That is, a single rotation, fitted on a subset of words, approximately maps one model's J-space onto another's, and so applies to words and classes it was not fitted on. A word's vector, rotated from a text-only language model's J-space into the visual patch tokens of a vision-language model, changes the object the vision-language model says is in the image (and only in the image region where it is added). Rotated into an image generator's text conditioning, a word's vector changes the object in the generated image. Rotated into an ImageNet classifier (trained without text), it raises that object's class score above almost all others, and vice versa. This suggests that models converge not only in how they represent the world, but also in how they act on it.

10. [Brand Recall and Category Accuracy in Language Models: An Audit of 1,000 B2B SaaS Brands](https://arxiv.org/abs/2611.33322)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33322v1 Announce Type: new Abstract: A language model can name a brand without classifying it correctly. This study measures these outcomes separately for 1,000 B2B SaaS brands across 333 product categories. On Gemma 4 12B, with no external retrieval, category prompts elicit 510 brands (51.0%). A separate five-candidate category probe ranks the reference label first for 787 brands, a distractor first for 194, and yields little separation for 19. Among the 981 separated rankings, the error rate is 19.8%. It falls to 3.5% for the 547 brands with a winner-to-runner-up log-probability margin above 0.6. These are within-cohort measurements, not calibrated confidence estimates. Exploratory regressions associate technical coverage with recall and an owned-properties composite with category accuracy, but the composites use different adjustment sets and do not establish causal effects. Across four Gemma generations, measured recall is 39.8%, 44.3%, 51.1% and 51.0%. A separate representation-based sentiment measure has little linear association with customer ratings (r=0.03, n=921). The findings support reporting recall and category accuracy separately. Failure to elicit a brand does not establish its absence from model parameters or training data.

11. [Partial Routing: Trace-Tuned Delegation for Resource-Efficient Agentic Workflows](https://arxiv.org/abs/2611.33402)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33402v1 Announce Type: new Abstract: AI models vary enormously in capability and price. Model routing exploits this by sending easier tasks to cheaper models. However, a single agentic task often combines easy and difficult subtasks, making one model choice for the entire task inefficient. We introduce partial routing, which guides a frontier lead model to delegate suitable subtasks to a cheaper worker model. From both models' past runs, we identify recurring subtasks and measure each model's quality and cost on them. These measurements produce delegation guidance, with a parameter, $\delta$, controlling how much is delegated. The lead decides when and what to delegate during execution, without training either model. On held-out tasks from ViBench and Terminal-Bench 4.0, partial routing achieves higher mean task performance than the lead alone and task-level routing. With $\delta = 0.75$, it raises the lead's ViBench score from 70.2 to 78.5 at 19% lower cost, and its Terminal-Bench pass rate from 54% to 61% at similar cost. Giving the lead only the subtask breakdown, without a worker, also reduces cost on both benchmarks and raises the Terminal-Bench pass rate. These results show that analysis of past runs can support more efficient planning and more effective delegation, with little cost and implementation overhead.

12. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.09; Date: 2026-11-27T16:42:47Z; Popularity: 2,092 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

13. [Searching for distant planets with Astra](https://openai.com/index/searching-for-distant-planets-with-astra)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 24 Nov 2026 11:00:00 GMT
   - Summary: See how two amateur astronomers used Codex and Astra to find potential exoplanets in public data from NASA’s Kepler and TESS space telescopes.

14. [How Intentful uses dots to make more time for growth](https://openai.com/business/customer-stories/intentful-dots)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 24 Nov 2026 00:00:00 GMT
   - Summary: Marina Petrova’s dot Aria helps research websites and build proposals, while proactively flagging messages and resolving issues.

15. [How iFood scales coding agents across 15,000 repositories](https://openai.com/business/customer-stories/ifood)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 24 Nov 2026 00:00:00 GMT

16. [OpenAI and Cisco introduce Shirudo](https://openai.com/index/introducing-shirudo)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 23 Nov 2026 21:20:00 GMT
   - Summary: OpenAI and Cisco introduce Shirudo, an open-source runtime for Linux. It helps teams protect running systems while they roll out patches.

17. [Richpanel helps companies automate 50% of support in 30 days](https://openai.com/business/customer-stories/richpanel-ai-customer-support)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 23 Nov 2026 08:00:00 GMT
   - Summary: Richpanel uses GPT-6 Astra and GPT-6.1 Sol to equip its AI support agents with tools and procedures, and GPT-6 Luna for their conversations.

18. [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Sun, 22 Nov 2026 00:00:00 GMT
   - Summary: How perplexity measures progress in AI models, and why it could help developers establish a shared approach to evaluating emerging capabilities.

19. [Combatting adversarial distillation](https://openai.com/index/combatting-adversarial-distillation)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 20 Nov 2026 10:00:00 GMT
   - Summary: OpenAI’s layered approach to adversarial distillation combines model training, safeguards, detection, and enforcement to protect against capability extraction.

20. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

21. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

22. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

23. [Taking Trainium3 to the Track: Generating Videos with LTX-2.5](https://huggingface.co/blog/video-trainium3)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 27 Nov 2026 00:00:00 GMT

24. [Introducing the llama.cpp benchmark dashboard for AMD Ryzen and Radeon](https://huggingface.co/blog/ggml-org/llamacpp-amd-bench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 26 Nov 2026 11:37:17 GMT

25. [Building on Nemotron 3.5 Parse: Open Data, Fine-Tuning, and Faster Inference](https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 26 Nov 2026 05:05:36 GMT

26. [Swarms, Flocks, Gangs: How to build, train, and evaluate multi-agent systems](https://huggingface.co/blog/training-swarms)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 26 Nov 2026 00:00:00 GMT

27. [Where scientists draw the line on AI agents](https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 25 Nov 2026 18:52:55 GMT

28. [An Indic Voice Agent with CUGA](https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 25 Nov 2026 10:22:09 GMT

29. [Hill-climbing Inkling 2 Mini inference on one RTX PRO 6000](https://huggingface.co/blog/inkling-2-mini-inference-hillclimb)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 25 Nov 2026 00:00:00 GMT

30. [Welcome Inkling 2 Mini, Cutting-edge Performance for your Local Setup](https://huggingface.co/blog/inkling2mini)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 GMT

31. [Introducing harness adapters: adapt your favorite model to your harness to improve performance and cost](https://huggingface.co/blog/harness-adapters-at-scale)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 20 Nov 2026 00:00:00 GMT

32. [Constraint-Aware Test-Time Scoring for LLM and VLM Candidate Selection](https://arxiv.org/abs/2611.33161)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33161v1 Announce Type: new Abstract: When an LLM or VLM produces several candidate answers, picking the best one usually relies on the model's own confidence, a learned judge model, or a domain check. Each has a known weakness: an answer can be fluent but insecure, mathematically plausible but physically infeasible, or rated highly by a judge while quietly breaking a task requirement. We propose a scoring framework that combines a small set of hard checks every answer must pass with a wider set of softer checks whose scores are blended into one number per candidate. This adaptive scoring framework consists of three components: a drafting model that produces the candidates, a configuring model that selects and weights the checks for each task, and scoring models that rate properties no grounded tool can compute. We apply our proposed method to four tasks: writing code that is both correct and secure (CWEval), generating robot manipulation plans (LIBERO with added safety variants), passing competitive-programming hidden tests (LiveCodeBench), and answering questions from retrieved documents (HotpotQA). An ablation study isolates the contribution of each component and finds that the largest gains come from combining hard checks with candidate comparison: on tasks where the first sampled answer is often broken or unsafe, this pairing lifts joint correctness-and-safety by up to +0.21 (retrieval-augmented QA) and code-generation safety by up to +0.28 (CWEval), with the size of the gain tracking how weak the first sample is, falling to near zero or slightly negative where it is already strong. The per-task layer that selects and weights the softer checks adds no measurable value over simpler alternatives. This builds a unified scoring framework, together with an ablation that identifies the grounded hard checks, not the soft-factor configuration, as the source of the gain.

33. [General-Purpose Decision Models for AI Configuration Tuning](https://arxiv.org/abs/2611.33190)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33190v1 Announce Type: new Abstract: AI configuration tuning searches for settings that improve the performance of AI systems under a limited budget. Existing tuners use different sampling and search policies, making the choice of decision strategy central to both tuning quality and cost. We investigate whether general-purpose decision models can guide tuning, using Jev as a deployed representative that returns structured choices and numeric scores across diverse tasks. To assess where it helps, we compare its use as an optimizer, performance predictor, and region guider against conventional methods and a large language model (LLM) on eight AI tuning tasks. Conventional optimizers attain rank 1 in six of eight comparisons. Similarly, established predictors outperform Jev in seven. Through region guidance, however, it finds configurations with lower perplexity than those selected by the native tuner, offering a quality gain when additional decision time and API fees are acceptable. These findings yield actionable recommendations on selecting the decision role, retaining conventional predictors, and balancing tuning quality against cost.

34. [Confidence scores for gated automation of large language models](https://arxiv.org/abs/2611.33394)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 27 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.33394v1 Announce Type: new Abstract: AI agents built on large language models (LLMs) demonstrate strong capabilities in automated decision-making. However, LLMs may produce incorrect answers with high confidence, limiting their applicability in decisions that affect individuals and organizations. Reliable confidence scores are necessary to gate such decisions, and existing estimates are frequently unavailable or too coarse to support effective gating. This work uses supervised learning to train models to predict the correctness of LLM-generated answers, enabling automated confident responses and routing uncertain ones for human review. A linear confidence score head is fitted to the final-layer hidden state of the frozen LLM backbone, and text-only metamodels are trained as an alternative for closed models. All results come from a single 2B-parameter backbone, on graded answers that are about 98% SQuAD and the remainder TruthfulQA. Against multiple baselines, the confidence score head outperforms all baselines and metamodels, automating the largest fraction of the workload at high accuracy targets. Prompted confidence scores can appear well calibrated yet lack the resolution needed for thresholding. Although transferability to unseen datasets is modest, the confidence score head remains the most robust approach. The proposed confidence scoring framework enhances the safety of automating LLM-based agents and can be adapted to gate other properties, including safety or compliance.

35. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.98; Date: 2026-11-27T22:10:36Z; Popularity: 985 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

36. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-11-25T17:38:16Z; Popularity: 499 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

37. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.40; Date: 2026-11-27T08:55:23Z; Popularity: 398 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

38. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.26; Date: 2026-11-24T01:29:50Z; Popularity: 261 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

39. [Can AI help build a healthier future?](https://www.microsoft.com/en-us/research/podcast/can-ai-help-build-a-healthier-future/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 17 Nov 2026 16:52:17 +0000
   - Summary: What can AI enable in medicine, and how do we get there? Microsoft Research lead Doug Burger, Microsoft Principal Research Manager Ava Amini, Microsoft Chief Scientific Officer Eric Horvitz, and physician-scientist Eric Topol of Scripps Research explore these questions and more. The post Can AI help build a healthier future? appeared first on Microsoft Research .

40. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

41. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

42. [Ask HN: Am I the only one whose AI hype is cooling down a lot?](https://news.ycombinator.com/item?id=50633601)
   - Source: Hacker News; Group: Tech community; Score: 2.75; Date: 2026-11-24T19:51:01Z; Popularity: 37 points, 27 comments
   - Summary: HN discussion: 37 points, 27 comments.

43. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.29; Date: 2026-11-27T19:59:50Z; Popularity: 1,290 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

44. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.28; Date: 2026-11-25T13:22:01Z; Popularity: 277 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

45. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.07; Date: 2026-11-27T15:50:45Z; Popularity: 1,074 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

46. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-24T04:38:59Z; Popularity: 63 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Clay helps sales teams win with Codex and ChatGPT

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://openai.com/business/customer-stories/clay-plugins-openai

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
