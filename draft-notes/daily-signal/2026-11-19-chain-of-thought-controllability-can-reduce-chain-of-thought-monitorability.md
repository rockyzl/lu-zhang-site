# Daily signal sidecar - 2026-11-19

## Selected Signal

- Title: Chain-of-Thought Controllability Can Reduce Chain-of-Thought Monitorability
- URL: https://arxiv.org/abs/2611.21799
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: Chain-of-Thought Controllability Can Reduce Chain-of-Thought Monitorability
- Primary source: https://arxiv.org/abs/2611.21799
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

Total candidates reviewed after duplicate-source filtering: 58

1. [Chain-of-Thought Controllability Can Reduce Chain-of-Thought Monitorability](https://arxiv.org/abs/2611.21799)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21799v1 Announce Type: new Abstract: Chain-of-thought (CoT) monitoring is a promising tool for detecting hidden goals, off-task behavior, and other failures in AI agents. One risk is that models could deliberately shape their reasoning to make it opaque to monitors. We stress-test this risk through persona-control training: supervised fine-tuning on mathematical reasoning traces rewritten in the voices of diverse personas. This induces a broader ability to control CoT, even though training contains no monitor-evasion examples. In covert side-task evaluations, traces in which a gpt-oss-20b model organism completes the hidden side task contain less monitorable evidence than the base model's. Averaged across evaluations and CoT lengths, weighted by side-task-success counts, the CoT monitorability metric g-mean$^2$ falls from 0.94 for the base model to 0.68 for the model organism without a hiding instruction, and to 0.22 when explicitly instructed to hide. In intervention evaluations, explicit hiding often drives monitorability near zero. The effect extends to a Kimi-K2.6 model organism in agentic environments, though hidden objectives requiring extended reasoning or longer trajectories remain more monitorable than simple single-step side tasks. We further discover that targeted transparency prompts can substantially recover monitorability, sometimes surpassing the base model. These model organisms provide a testbed for studying monitorability failures and potential mitigations. Our code can be found on https://github.com/yongzx/cot-control-model-organism.

2. [Conserved Verdicts, Drifting Commitments: Identifying Harmful Overthinking](https://arxiv.org/abs/2611.21946)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21946v1 Announce Type: new Abstract: A reasoning model that has reached a correct answer can lose it by continuing to think. Deciding whether to stop means comparing two probabilities at the same point of a chain: that the answer the model would give if stopped now is correct (its commitment), and that the answer it will finish with is correct (its verdict). We show that the verdict alone, which is what final-correctness probes estimate, cannot make this comparison. As a forecast of a fixed outcome it has no predictable drift, whether continuing helps or hurts. The commitment-verdict gap equals the expected remaining change in answer quality and the accuracy gained by stopping. A second identity splits any accuracy-versus-budget curve into answer change within chains and change in which chains are still running. We measure both on MATH-500. At all 379 points where DeepSeek-R1-Distill-Qwen-1.5B holds a correct answer, selected without regard to how its chain ends, continuing loses 3.6 points on average (95% CI [2.2, 5.2]), and the loss concentrates in a few problems. In six reasoning models from three families, on MATH-500 and OlympiadBench and with budgets up to 16,384 tokens, declining accuracy curves come from which chains remain, while the chains still reasoning keep or improve their answers. An oracle stopping rule gains at most +1.8 and +2.5 points at 1.5B and 7B. The framework says what to measure before building a stopping rule.

3. [DiscoveryAgent: A Framework for Scientist-centric Agentic AI](https://arxiv.org/abs/2611.21950)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21950v1 Announce Type: new Abstract: AI agents can assist scientific research, but balancing autonomous investigation with scientists' ability to inspect and redirect ongoing work remains a central design challenge. We present DiscoveryAgent, a domain-agnostic, scientist-centric system that combines autonomous investigation with scientist-directed hypothesis steering. Scientists select, refine, or replace hypotheses between research rounds, while audit agents interrogate checkpointed records to trace claims, reproduce analyses, and inform subsequent decisions. Across two predictive modeling tasks, DiscoveryAgent produced the best variable-star classifier among evaluated baselines and, with scientist steering, a protein variant-effect predictor surpassed by only one of 106 ProteinGym baselines. We develop a rigorous checkpointing system that enables highly capable audit agents, a scalable form of oversight for agentic research. Audit agents autonomously identify errors at higher rates than previous AI scientist agents, and scientists collaborating with audit agents identify 14x more valid errors versus scientists performing manual review. In three case studies led by domain experts across physical science, social science, and life science, we developed a multimodal photometric-redshift estimator that resolves complementary failures of images and photometry, achieving 0.971 AUROC for low-redshift classification; documented an 83% rise in Florida homeowners-insurance premiums from 2013 to 2023, with a growing, regressive burden; and identified CD4+ T-cell relay genes, which both receive and exert broad transcriptional regulation, enriched for autoimmune disease associations. Together, these results show how autonomous research can expand scientists' empirical reach while centering their authority over research direction and their ability to understand and challenge the evidence.

4. [Reliability by Architecture: Agentic Workflows for Validated Multi-Physics Simulation from Natural Language](https://arxiv.org/abs/2611.23473)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 6.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23473v1 Announce Type: cross Abstract: Preparing, executing, and validating strongly coupled multi-physics simulations require expert time. Agentic workflows use large language models (LLMs) to coordinate them from natural-language descriptions, but reliability requires checks of physical consistency and fidelity to the problem description. Our agentic harness implements explicit task allocation: LLMs interpret user requests and simulator diagnostics, generate input components not covered by predefined construction rules, and propose repairs, while deterministic routines construct supported components and check inputs, edits, and results. We evaluate CO2-storage problems using the multi-physics simulator GEOS, from compositional flow to flow-poromechanics with frictional fault contact. In 80 attempts on two flow problems, grounding raises the proportion of structurally valid inputs from 5/20 to 20/20, but acceptance reaches 20/20 only with complete rule-based input preparation. With identical inputs, local repairs correct three seeded defects while preserving valid inputs. Supporting tests identify simulations passing physics checks despite differing from the problem description or reference results.

5. [How OpenAI’s Performance Factory keeps ChatGPT fast](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Thu, 19 Nov 2026 08:00:00 GMT
   - Summary: Learn how OpenAI built the Performance Factory, a system of Codex-powered workflows that finds and fixes performance issues to help keep ChatGPT fast.

6. [TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient](https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 16 Nov 2026 17:01:35 +0000
   - Summary: AI coding agents can waste time and tokens relearning the same lessons. TokenEconomizer is an open-source plugin that builds on past sessions to cut costs while maintaining task success. It’s a path toward coding agents that learn not only how to solve tasks, but also how to spend computation more effectively. The post TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient appeared first on Microsoft Research .

7. [Build a Robot Pick-and-Place Simulation with SimReady Assets](https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Fri, 13 Nov 2026 18:00:39 GMT

8. [Language Models Can Rewrite Their Own Weights](https://arxiv.org/abs/2611.21885)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21885v2 Announce Type: new Abstract: A language model is trained once and frozen. Making it better takes another training run, or a prompt, a harness or extra computation at inference that is gone once the task ends. We show a third way: to our knowledge for the first time, a language model rewrites its own weights by its own reasoning and becomes better, with no gradients and no training. We call this self-rewriting: the model is its own optimizer. In earlier work, a frontier model edited a much smaller one; here an open 27B model, given its weights, its graded answers and the ability to run itself, diagnoses its own failure and rewrites the weights behind it. It surpasses itself: its own edit makes it 6.6 points more accurate on problems it never saw. It keeps getting better: it tests its edits on practice problems and submits only what works, each edit improving on the last, and over eight consecutive sessions its accuracy only rises. It repairs a damaged copy of itself, like a broken robot that fixes itself without being rebuilt: the copy solves almost nothing, yet with no retraining and without ever reading the original weights, the model brings it back to over 80% of the original accuracy on image tasks it never saw. And the ability emerges with scale: in one model family, the smaller models make no edit or break themselves, and only the largest improves and repairs itself. Unlike test-time scaling, self-rewriting writes its gain into the weights, at no cost per answer; unlike training, it runs only forward passes, as serving does. The wall between training and inference is a limit of our tools, not a property of intelligence. We believe self-rewriting is a necessary step toward recursive self-improvement: a model that, like a human, does not separate training from inference could keep upgrading itself for life, with no larger model, no harness or prompt engineering, and no pre- or post-training.

9. [DNeo: Your Parallel Draft Model Needs Better Target Feature Encoding](https://arxiv.org/abs/2611.21925)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21925v1 Announce Type: new Abstract: Speculative-diffusion decoding uses a small parallel drafter model to generate b draft tokens in one forward pass, which then undergo parallel verification via a larger target model. Faster inference can be achieved when multiple draft tokens pass verification simultaneously. Recent parallel draft architectures (DFlash, DSpark) improve draft quality by conditioning on rich features computed by the target, through a mechanism known as feature encoding. However, standard feature encoding mechanisms have three limitations: (1) they are lossy, applying encoding projections that are destructive to the underlying target feature-space via a discovered effect known as residual mixing, (2) they are memory-less, with no record of previously processed proposals, and (3) they utilize features sampled uniformly from across the target layers, omitting important hidden states. To address these issues, we propose Mixture-of-Features Attention (MoFA), a lightweight feature-encoding approach equipped with a working memory that encodes previously rejected proposals. Leveraging MoFA, rejection memory, and a set of further enhancements, including 2-tap causal convolutions, prefix-only cross-attention, and non-uniform target layer selection, the final architecture, DNeo, achieves 1.3x faster generation speed than SoTA (DFlash-2) without impacting drafter footprint or generation quality. DNeo marks a new state of the art in high quality, fast LLM inference.

10. [SLED: Sensor SLicing from Edge to Datacenter](https://arxiv.org/abs/2611.21937)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21937v1 Announce Type: new Abstract: Modern sensing systems generate large volumes of heterogeneous data streams from multiple sensor modalities, increasing reliance on datacenters for computation, artificial intelligence/superintelligence (AI/SI) inference, and AI/SI training. Each sensor stream may have different network and compute requirements depending on its type and data volume. However, current wireless systems typically allocate resources at the device level, leading to contention among co-located sensor streams, where bulk data transfers may starve latency-critical telemetry. To this end, this paper introduces Sensor Slicing (SL). SL provides deterministic, medium access control (MAC)-level isolation for individual sensors within a single user equipment (UE) in open radio access networks (O-RAN). Using agentic coding techniques, SL is implemented in two O-RAN-compliant packages, reducing development time by 400 times (2 h 40 min [OCUDU] vs. 6.5 weeks [OAI]), 228-fold fewer human prompts (4 vs. 913), and less than half the tokens (0.64B vs. 1.43B). An associated end-to-end framework, SLED, is implemented to establish per-sensor radio and network isolation across edge, campus, and remote high-performance computing (HPC) tiers. Over-the-air wireless experiments demonstrate that while conventional network slicing causes critical delays to increase more than 2,300-fold under high traffic load, SLED maintains stable latency. Scaling evaluations on the two RAN stacks show that throughput remains within 0.9% and 1.4% of expected allocations even as the number of sensor slices increases. The results demonstrate that SLED preserves latency-critical telemetry while effectively utilizing resources across the sensor-to-HPC pipeline. The SLED software and evaluation datasets are publicly available at https://github.com/UNL-CPN-Lab/SLED-Sensor-SLicing-from-Edge-to-Datacenter.

11. [Confidence-Based Materials Data Quality Assessment via Domain Knowledge and Graph-Structured Learning](https://arxiv.org/abs/2611.23342)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 5.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23342v1 Announce Type: new Abstract: The rapid development of materials machine learning relies on large-scale, heterogeneous datasets, yet model reliability is often compromised by imperfect data from diverse experiments, simulations, and database integration. Real-world materials databases may contain measurement errors, failed calculations, missing or duplicate records, and hidden violations of physicochemical constraints. Such problems are difficult to identify because corrupted samples may remain statistically plausible rather than appearing as explicit outliers. In this paper, we propose a confidence-based materials data quality assessment framework that integrates domain knowledge with graph-structured learning. Data quality is formulated as a continuous confidence estimation problem rather than a binary anomaly identification task, enabling sample-level assessment and historical-reference-based batch comparison. A nine-dimensional feature-quality prior and duplicate-aware sample initialization are calibrated using materials domain rules and statistical evidence. Confidence is further refined through sample-feature bipartite graph propagation and weakly supervised graph attention, while a Memory-GAT module provides historical reference scoring. Experiments on 23 ODDS benchmark datasets show that the generic module achieves an average AUC-ROC of 0.866. In five repeated mixed-contamination experiments on mp\_20, rule calibration improves HistGradientBoostingRegressor test $R^2$ from $0.538\pm0.008$ to $0.616\pm0.014$. Graph refinement increases average precision from $0.943\pm0.004$ to 0.953\pm0.004$, while the rule-calibrated configuration has the highest mean test $R^2$ among the evaluated screening configurations. Five repeated MACE subset experiments further show an increase in $R^2$ from $0.590\pm0.053$ to $0.880\pm0.027$ after rule-based screening.

12. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.07; Date: 2026-11-19T13:35:59Z; Popularity: 2,071 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

13. [The Silent Consensus](https://openai.com/index/the-silent-consensus)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 10:00:00 GMT
   - Summary: Dean Ball, Head of Strategic Futures at OpenAI, examines how more capable AI could reshape society and how people can retain control of their institutions.

14. [How Sumitomo Life’s leaders helped teams adopt ChatGPT Enterprise](https://openai.com/business/customer-stories/sumitomo-life)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 08:00:00 GMT
   - Summary: Sumitomo Life uses ChatGPT Enterprise to research insurers, prepare proposals, and draft code for investment analysis. Early use by executives helped drive adoption.

15. [Research acceleration: The jagged frontier](https://openai.com/index/research-acceleration-jagged-frontier)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 08:00:00 GMT
   - Summary: OpenAI measures how coding agents are accelerating AI research, where their performance remains uneven, and what this signals about recursive self-improvement.

16. [Inside the Codex sandbox](https://openai.com/index/inside-the-codex-sandbox)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 08:00:00 GMT
   - Summary: See how Codex runs commands on your machine while enforcing the filesystem and network limits you control across macOS, Linux, and Windows.

17. [Managing frontier AI risk: From training to deployment](https://openai.com/index/managing-frontier-ai-risk)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 06:00:00 GMT
   - Summary: OpenAI explains how it manages frontier AI risk from training through deployment with model alignment, sandboxing, blocking safeguards, and monitoring.

18. [Le Groupe Figaro and OpenAI partner to bring Le Figaro journalism to ChatGPT](https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT
   - Summary: Le Groupe Figaro and OpenAI partner to bring Le Figaro’s journalism to ChatGPT through summaries and excerpts, with links to original stories.

19. [Advancing chip design with OpenAI models](https://openai.com/index/advancing-chip-design-with-our-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT
   - Summary: OpenAI models optimized circuits used in Jalapeño silicon and improved RISC‑V core designs, showing progress in AI-assisted chip design with GPT‑6 Astra.

20. [Introducing GPT-6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 17 Nov 2026 17:45:00 GMT
   - Summary: Introducing GPT‑6.2 Astra and Sol, with better professional outputs, coding, computer use, and efficiency at lower cost across ChatGPT Work, Codex, and the API.

21. [Strengthening NATO and allied cyber defenses with AI](https://openai.com/index/strengthening-nato-allied-cyber-defences-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 17 Nov 2026 00:00:00 GMT
   - Summary: How OpenAI is working with NATO and allied cyber agencies to help trusted defenders find vulnerabilities, test fixes and protect essential systems.

22. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

23. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency](https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 19:54:56 GMT

26. [Why your fine-tuning job takes longer than the FLOPs say](https://huggingface.co/blog/Dharma-AI/predicting-fine-tuning-time)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 18:53:43 GMT

27. [Time-Series Models in the Streamhouse: A New Frontier and Use Cases](https://huggingface.co/blog/ibm-research/time-series-powered-streamhouse)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 15:00:23 GMT

28. [180B Parameters, 32GB of RAM: Pushing MoE Inference to the Limit with Transformers](https://huggingface.co/blog/moe-expert-streaming)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT

29. [Rumble-2-Flash: an open 0.5B speech model for 40+ languages](https://huggingface.co/blog/rumble-2-flash)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT

30. [Hugging Face and OpenRouter join forces to make open-weight models easy to run](https://huggingface.co/blog/openrouter)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 GMT

31. [XYBench: Helping with the problem behind the question](https://huggingface.co/blog/allenai/xybench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 17:02:35 GMT

32. [llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](https://huggingface.co/blog/ggml-org/llama-cpp-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 14:05:22 GMT

33. [LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B](https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 12 Nov 2026 19:07:35 GMT

34. [How Much of SAR Vehicle Recognition Is the Vehicle? Background Shortcuts, Angle Gaps and Partial Libraries on MSTAR and ATRNet-STAR](https://arxiv.org/abs/2611.21827)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21827v1 Announce Type: new Abstract: Deep networks score near 99% on the MSTAR vehicle benchmark, and the newer ATRNet-STAR benchmark was built to be harder. We ask how much of these scores comes from the vehicle itself. With a modern network (ConvNeXt-Small, 3 seeds) we first reproduce the known MSTAR result: with the central 96x96 pixels zeroed out, accuracy is still 73.3% (chance 10%). The same shortcut is present in ATRNet-STAR, which was collected across several scenes: with the vehicle removed, accuracy is 63.3% on the 40-class SOC split (chance 2.5%). Under the official scene-change split, the background stops helping and starts hurting. Accuracy is 22.8% on full chips and 30.8% when only the vehicle is shown. A SAR foundation model, SARATR-X, leans on the background more than ConvNeXt does (+4 to +6 points with the vehicle removed, in every seed) and does not solve the scene change. We then hold the amount of training data fixed and vary the depression angles used for training. Accuracy is set mainly by the gap to the nearest training angle: 57% at 15 degrees, 39% at 30 degrees and 26% at 45 degrees. Adding more training angles does not help. Finally, when most classes have training images at the test angle and a few do not, the missing classes do worse than when no class has them: 9.0% instead of 22.4% at a 45-degree gap. Most of their images are assigned to known classes. We recommend reporting background-only and target-only controls, and the angle gap, next to any accuracy figure. Code is public.

35. [Auditors Struggle to Catch Sabotage In End-to-End Transcripts of AI Safety Research](https://arxiv.org/abs/2611.21832)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21832v1 Announce Type: new Abstract: As AI systems are increasingly used to automate AI R&D, misaligned systems could sabotage research intended to improve model safety and alignment. To stress-test defenses against such sabotage, we use a human expert as a proxy saboteur on AI safety research. We conduct a red-team/blue-team game where a human researcher runs AI safety experiments from scratch and auditors try to tell which were sabotaged and how. Given access to the full research transcript and the ability to run experiments, human auditors mostly fail to distinguish sabotaged from benign research: they achieve an AUROC of 0.59, not significantly better than chance, and fully identify the specific sabotage in only 17% of cases. Despite not being allowed to run experiments, the best frontier models outperform human auditors (Fable 5.1: AUROC 0.73, 32% full identification) within noise and weaker models perform comparably. When the saboteur chooses which experiments are attacked, rather than being required to sabotage every question given, sabotage identification drops further. Our results suggest that research sabotage by expert-level agents is difficult to detect with current auditing methods and provide a new setting for studying research sabotage.

36. [Honest Brokers in AI Regulation: How Public Comments Introduce Evidence to Regulators](https://arxiv.org/abs/2611.21948)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21948v1 Announce Type: new Abstract: The regulation of Artificial Intelligence is susceptible to various forms of capture by industry actors that hold undue influence over the policymaking process, due in part to their information advantage in developing these technologies. In the following paper, we investigate the roles of public commenters in providing evidence to potential regulation in the USA. We build a corpus of 40 potential regulations, and 2,664 public comments submitted by a variety of stakeholders. We computationally process these texts to extract evidence meant to inform regulators, in the form of formal citations and informal references. We find significant differences in the type and amount of evidence supplied: Holding comment length constant, business commenters introduce altogether less evidence, and government, university, and civil society commenters provide significantly more research and legal sources. The publication status of cited research is nearly evenly split, with preprints and peer-reviewed articles being introduced by commenters of all types. We further explore patterns of self-citation and find that while it is prevalent amongst all groups, a small cluster of organizations account for over half of all self-citations in our corpus. Our findings complicate a narrative that public comments alone are means to information capture. We interpret these results in terms of the role that commenters attempt to play in the policymaking process-being either an Issue Advocate or an Honest Broker. These findings on the supply of evidence in public comments shed light on an often overlooked form of policymaking that has implications for how and through what sources information is made accessible to regulators of AI.

37. [Real-space electrostatic sums through truncation error analysis](https://arxiv.org/abs/2611.23510)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23510v1 Announce Type: new Abstract: Methods that treat electrostatics in real space, without explicit reciprocal-space evaluation, are appealing for large-scale atomistic simulations. They typically employ local charge-neutralization schemes, but their relationship to the underlying error contributions of the full Ewald sum has not been fully characterized. A principled basis for parameter selection is also lacking. In this work, we show that the correction terms of Wolf's and Pickard's real-space methods approximate the truncation error of real-space electrostatic sums. This perspective motivates simplified fixed-radii and force-shifted Pickard variants that preserve the truncation-error compensation behavior while enforcing continuity of pair energy and force at the cutoff. We derive a nonempirical scaling relation for the optimal path in the parameter space of the cutoff radius and screening distance, generalizing Pickard's empirical heuristic and explaining when and why it can fail. A systematic scheme for restoring omitted reciprocal contributions is introduced, which accelerates convergence to the full Ewald energy.

38. [Scalable Non-Parametric Bayesian Inference of Free Energy Landscapes and Emission Functions from Observations](https://arxiv.org/abs/2611.24678)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.24678v1 Announce Type: new Abstract: Free-energy landscapes govern processes from protein conformational change to climate oscillations, but are typically observed only indirectly, through observables such as FRET intensity or optical-tweezer transmittance. Neither the landscape shape, nor the emission function mapping latent state to signal, is usually known, and distinct states may produce the same signal. We therefore infer landscape and emission function jointly and non-parametrically, using the exact non-linear Bayesian filtering likelihood, to fully use the information contained in observable trajectories that are often noisy, scarce and costly to acquire. A novel parallel-in-time algorithm makes this tractable: it is up to 27 times faster than sequential filtering on one GPU, scales near-ideally across GPUs, and, given enough resources, has runtime independent of trajectory length. We demonstrate the method on a single-protein optical tweezer recording, where distinct conformations produce the same signal, and beyond biology on the El Nino-Southern Oscillation and financial market volatility.

39. [MAIC-2 v2.3: A Fortran program for simulating the surface temperature, atmospheric water transport and surface glaciation of the planet Mars](https://arxiv.org/abs/2611.23643)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23643v1 Announce Type: cross Abstract: The Mars Atmosphere-Ice Coupler MAIC-2 is a computationally efficient, zonally-averaged model designed to simulate Martian surface temperature, atmospheric water transport and surface glaciation over timescales of 10^5 to 10^7 years. While sophisticated General Circulation Models (GCMs) provide high-resolution simulations of the Martian atmosphere, their high computational cost makes them largely unsuitable for studies covering millions of years of orbital evolution. MAIC-2 addresses this gap by utilizing physically-based, zonally-averaged parameterizations, including a Local Insolation Temperature (LIT) scheme and a mass balance engine driven by free-convection and instantaneous mixing physics. Version 2.3 introduces a fully modularized Fortran architecture that improves maintainability and ensures that the software remains entirely self-contained, requiring no external numerical libraries or specialized data formats for execution. Demonstrated through a 20-million-year transient simulation, the model successfully reproduces the primary characteristics of the Martian polar layered deposits. MAIC-2 provides the planetary science community with a versatile, open-source tool for investigating the long-term climatic impacts of orbital variations on the Martian surface.

40. [Technical Note on Matlantis PFP v9: Extending the Element and Domain Coverage of the r2SCAN Training Data](https://arxiv.org/abs/2611.23873)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23873v1 Announce Type: cross Abstract: Universal machine learning interatomic potentials (uMLIPs) make atomistic simulations possible at scales beyond the reach of density functional theory (DFT). Matlantis PFP is a uMLIP that treats a variety of domains, including crystals, molecules, and surfaces, with a single model. PFP v8 incorporated a training dataset computed with the r2SCAN functional, chosen for its good agreement with experiment, but the elements and domains covered by that dataset were limited. Here we present Matlantis PFP v9, in which the training data computed with the r2SCAN functional are extended to the lanthanides from Pr to Lu and to the elements from Po to Cm, for a total of 96 elements, and to additional domains such as clusters and adsorption structures. The formation energies of crystals containing the newly supported elements reproduce experimental standard enthalpies of formation with the same level of accuracy as crystals composed only of previously supported elements, and the adsorption energies of molecules on transition-metal surfaces have an overall error against experiment comparable to that of DFT-PBE, although chemisorbed species are overbound. On the same type of GPU (A100), the inference speed and the maximum system size exceed those of SevenNet-Omni, a public uMLIP trained on r2SCAN data: forces are evaluated three to four times faster, and five to ten times as many atoms can be handled. As a result, PFP-R2SCAN is now applicable to systems containing rare-earth and actinide elements and to adsorption on surfaces.

41. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.95; Date: 2026-11-19T16:25:31Z; Popularity: 948 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

42. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-11-17T18:26:57Z; Popularity: 497 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

43. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.40; Date: 2026-11-19T14:01:38Z; Popularity: 395 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

44. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.26; Date: 2026-11-19T14:38:35Z; Popularity: 257 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

45. [Can AI help build a healthier future?](https://www.microsoft.com/en-us/research/podcast/can-ai-help-build-a-healthier-future/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 17 Nov 2026 16:52:17 +0000
   - Summary: What can AI enable in medicine, and how do we get there? Microsoft Research lead Doug Burger, Microsoft Principal Research Manager Ava Amini, Microsoft Chief Scientific Officer Eric Horvitz, and physician-scientist Eric Topol of Scripps Research explore these questions and more. The post Can AI help build a healthier future? appeared first on Microsoft Research .

46. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

47. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

48. [GridForge: An Open Physics-Informed Digital Twin and Benchmark Suite for UK 11 kV Underground Distribution Cables](https://arxiv.org/abs/2611.23241)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23241v1 Announce Type: new Abstract: The UK distribution-cable monitoring sector is data-rich but framework-poor: each Distribution Network Operator (DNO) collects megabytes of telemetry per asset per day, but there is no public benchmark dataset, no shared reference model, and no commonly agreed evaluation protocol for benchmarking sectoral, data-intensive models for operational decision support; notably for maintenance planning and prioritisation. We address this gap with GridForge, an open-source physics-informed digital twin and benchmark suite for fault diagnosis and prediction, integrating four building blocks: (i) a verified steady state and transient thermal model based on IEC 60287 and IEC 60853; (ii) a calibrated synthetic dataset of 64 cables (covering 320 cable-years) representing four canonical UK 11 kV thermal archetypes and four condition modes; (iii) a Physics-Informed Neural Network (PINN) surrogate that satisfies the algebraic balance defined by IEC 60287 during training and reaches an RMSE of 0.148 {\deg}C on an independent held out set against the reference analytical oracle; and (iv) a five-task benchmark suite that includes three reference baseline models (pure physics, gradient-boosted trees, and the PINN). All numerical parameters are sourced from public standards, the code is licensed under the MIT licence, and the trained PINN converges in only two minutes (as run on the computing platform in Section 10.1), enabling independent verification by DNO engineering and research practitioners. At present only the virtual-sensor task (T4) discriminates between the reference baselines; the other tasks tie or are undefined on this test split, so extending the baselines with task-specific logic is a priority future enhancement. For open validation, the dataset, test sets and models are made available at https://github.com/mlily2024/Gridforge

49. [Budgeted Proper Loss Design for Uncertain Decision Thresholds](https://arxiv.org/abs/2611.23247)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23247v1 Announce Type: new Abstract: A binary probability estimate may be used by several decision makers with different error costs. Proper scoring rules can emphasize selected probability thresholds, but a single average threshold distribution need not give a good worst-case regret guarantee. We study the choice of a proper loss when the threshold distribution belongs to a finite specified family. Among integrable loss weights with a positive pointwise floor and a fixed total mass, we derive the weight that minimizes the sharp, distribution-free multiplier from surrogate regret to threshold-averaged decision regret. The solution clips a rescaled upper envelope of the threshold densities at the prescribed floor; its normalization is found by a one-dimensional root search. We give proofs of sharpness, optimality, and stability under density misspecification, as well as a limitation for atomic threshold laws. An exact histogram implementation and two synthetic experiments across 20 seeds verify the construction. The optimized multiplier improves over uniform and average-density weights, while fitted-model performance does not improve uniformly. The result is a loss-design guarantee under an explicit budget, rather than a general claim of predictive superiority.

50. [Mesh Sensitivity of Different Boundary Treatments in High-Order Compact Gas-Kinetic Scheme for Hypersonic Heat-Flux Prediction](https://arxiv.org/abs/2611.24392)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.24392v1 Announce Type: new Abstract: Accurate wall-heat-flux prediction in hypersonic flow depends on both the wall treatment and the available near-wall resolution. This work compares three complete implementations of a gas-kinetic scheme (GKS) for Mach~8.03 laminar flow over an isothermal circular cylinder: a linear Green--Gauss scheme (GG), a compact ghost-cell scheme (GC), and a pointwise one-sided compact scheme (POS). In POS, the stationary isothermal-wall conditions are imposed at the two Gaussian points used by the kinetic wall-flux quadrature. A reference mesh and six meshes in the uniform reduction (UR), log-layer unpacked (LLU), and log-layer packed (LLP) families are used to assess heat-flux sensitivity. At 24 digitized experimental angles, GG has the lowest root-mean-square difference on the reference, UR, and LLP families, whereas POS is closest on the two LLU meshes; GC is not the lowest-RMS scheme on any tested mesh. Hence no treatment is uniformly superior. On the present high-aspect-ratio cylinder grids, GG is the more robust choice except under LLU node redistribution, for which POS is preferable. Uniform reduction produces the largest heat-flux response for all three implementations. The comparison concerns complete schemes and does not isolate the pointwise constraints from differences in reconstruction and geometry representation.

51. [The state of nuclear data for fusion activation simulations](https://arxiv.org/abs/2611.24653)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.24653v1 Announce Type: new Abstract: This report compares decay-heat calculations made with four nuclear data libraries, TENDL-2025, ENDF/B-VIII.1, JEFF-4.0 and JENDL-5, against the JAEA FNS decay-heat benchmark. The main comparison uses the 2000 campaign, in which 73 foils were irradiated for five minutes in a mostly 14 MeV neutron field and their decay heat was measured for about an hour. The 1996 seven-hour campaign, with 29 foils and cooling times of up to 400 days, is compared separately and is not included in the rankings. Over the 69 elemental foils solved by all four libraries, the median deviation from the measurement (the mean absolute C/E deviation of each foil) is JENDL-5 17 percent, TENDL-2025 19 percent, JEFF-4.0 22 percent and ENDF/B-VIII.1 44 percent. No library is best everywhere: JENDL-5 on 24, JEFF-4.0 on 18, TENDL-2025 on 17 and ENDF/B-VIII.1 on 10 of the foils. For each element the report breaks the heat down by product and lists the nuclear data on which the libraries differ, and the final sections propose measurements, including enriched-isotope irradiations, that would resolve the largest differences.

52. [Quantum-classical dynamical density functional theory for solvation dynamics](https://arxiv.org/abs/2611.22786)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.22786v1 Announce Type: cross Abstract: We provide a unified modeling framework for thermalization and non-equilibrium spectroscopy in overdamped polar environments. This framework extends dynamical density functional theory to describe the coupled quantum-classical evolution of a molecular electronic subsystem and an overdamped polar solvent represented by a reaction-field coordinate. The nonadiabatic dynamics is formulated in terms of an operator-valued distribution obeying a quantum-classical Ehrenfest--Smoluchowski equation which exhibits nonlinear classical diffusion and non-increasing free energy, thereby retaining detailed balance. In contrast, a quantum-classical Liouville--Smoluchowski model with quantum-classical linear diffusion develops unstable long-time behavior and fails to reach a stationary thermal state. The method is applied to a two-level model of a polar dye in three different solvents: chloroform, dichloromethane, and dimethyl sulfoxide, each differing in polarity and dielectric relaxation time. Absorption and time-resolved emission spectra are obtained from dipole-dipole correlation functions, capturing the solvent-induced spectral broadening, the dynamic Stokes shift, and the time evolution of the emission bandwidth. The calculated solvent spectral response agrees well with the experimental relaxation trends of the three solvents.

53. [Kernel Design in Particle Mesh Ewald Methods: Splitting, Interpolation, and Upsampling](https://arxiv.org/abs/2611.23737)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23737v1 Announce Type: cross Abstract: For more than thirty years, particle mesh Ewald (PME) methods have dominated the computation of electrostatic interactions in molecular dynamics. A PME method uses a splitting kernel to divide the interaction into a local part, summed within a cutoff, and a smooth part, computed on a grid with a spreading and interpolation (SI) kernel. The established methods use Ewald's Gaussian split with B-spline SI kernels, and the recent Ewald summation with prolates accelerates them severalfold by using a prolate spheroidal wave function (PSWF) for both kernels. Neither choice meets two needs of molecular dynamics: a smooth energy, which long simulations need in order to conserve it, and a low-order SI kernel that stays accurate on coarse grids and gains accuracy as the grid is refined. We present a framework for designing both kernels to meet these needs. For inverse powers from the Coulomb to the dispersion interaction, our splits make the local part smooth at the cutoff to any order while keeping the Fourier concentration of the smooth part close to optimal. We show that with analytic differentiation, the force error of a continuous SI kernel of fixed shape vanishes under grid refinement only if every particle, wherever it lies, gives the grid its exact charge and dipole moment. Our SI kernel for the Coulomb interaction ensures this by construction and is twice continuously differentiable. Compared with the B-spline of the same order, it needs fewer grid points by a factor of up to nearly five; on coarse grids, it mostly needs a lower order than the PSWF kernel. In simulations of liquid water over 100 million time steps, the new kernels reduce the energy drift of both the established and the PSWF kernels by about three orders of magnitude, with a smaller force error than either. Existing PME codes can adopt them by replacing only the two kernels and the Fourier multiplier.

54. [General Noise Channels and Mid-Circuit Measurements for Pre-Trajectory Sampling with Batched Execution](https://arxiv.org/abs/2611.23923)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Thu, 19 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.23923v1 Announce Type: cross Abstract: Many studies of quantum protocols require fast sampling of large amounts of measurement data from noisy quantum circuits, such as for training machine-learning decoders for quantum error correction. Exact simulation of realistic noise is expensive, while stabilizer-based simulators are fast but approximate, for example through Pauli twirling, which generally alters the output statistics. Pre-trajectory sampling with batched execution (PTSBE) accelerates exact trajectory simulation by sampling noise before state evolution. This method requires the outcome probability of every stochastic event to be independent of the state, which excludes mid-circuit measurements and general Kraus channels. We present a generalization of PTSBE to measurement and Kraus operators without approximation. Each event is partially pre-sampled, while deferred outcomes are drawn during grouped execution via multinomial branching and cached-state reuse. We implement the method for GPUs as an extension of CUDA-Q. On distance-3 topological code memories under amplitude damping, it is up to 24x faster than conventional trajectory sampling in CUDA-Q. On 30-qubit random circuits with mid-circuit measurements, it is up to 83x faster and outperforms the near-Clifford simulator Clifft when more than about 25% of the gates are non-Clifford. With repeated sampling of each final state, its sampling rate per trajectory exceeds that of CUDA-Q by nearly five orders of magnitude. Our method also allows us to compare exact amplitude damping with its Pauli-twirled channel on a surface-code memory, revealing that twirling overestimates the detection rate by 21% and raises the logical error rate of a lookup decoder by 8%. This work makes exact, high-throughput simulation practical for general noisy circuits, from data generation for training decoders to studying measurement-based fault-tolerant protocols under realistic noise.

55. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.28; Date: 2026-11-19T18:08:08Z; Popularity: 1,277 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

56. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-19T08:11:31Z; Popularity: 273 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

57. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-18T14:44:10Z; Popularity: 62 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

58. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.05; Date: 2026-11-18T15:30:59Z; Popularity: 1,054 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Chain-of-Thought Controllability Can Reduce Chain-of-Thought Monitorability

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2611.21799

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
