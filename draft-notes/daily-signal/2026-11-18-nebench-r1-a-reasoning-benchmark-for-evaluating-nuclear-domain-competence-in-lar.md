# Daily signal sidecar - 2026-11-18

## Selected Signal

- Title: NEBench R1: a Reasoning Benchmark for Evaluating Nuclear Domain Competence in Large Language Models
- URL: https://arxiv.org/abs/2611.21682
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: NEBench R1: a Reasoning Benchmark for Evaluating Nuclear Domain Competence in Large Language Models
- Primary source: https://arxiv.org/abs/2611.21682
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Use a small known-answer test before adopting a broad claim.
- Failure mode: A benchmark result may not transfer to the corpus, task, or failure mode that matters in real work.
- Practical test: Recreate a small slice of the benchmark with explicit pass/fail criteria and failed-example review.
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

1. [NEBench R1: a Reasoning Benchmark for Evaluating Nuclear Domain Competence in Large Language Models](https://arxiv.org/abs/2611.21682)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21682v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly being explored for knowledge-intensive and safety-critical applications in nuclear engineering. However, existing nuclear-domain benchmarks provide limited content coverage or focus primarily on answer accuracy without systematically evaluating the quality of the underlying reasoning. This study introduces NEBench R1, a reasoning-oriented benchmark comprising 7,546 unique multiple-choice questions extracted from U.S. Nuclear Regulatory Commission (NRC) reactor operator licensing examinations covering 18 nuclear facilities. Each question is classified according to the NRC Knowledge and Abilities catalogs and accompanied by an official explanation serving as a reference for reasoning evaluation. Six LLMs were evaluated, with overall accuracy ranging from 34.0% to 73.9% across three distinct performance tiers. To assess reasoning quality, an LLM-based judge evaluated correctly answered responses using a multidimensional rubric. Although responses generally demonstrated strong problem comprehension, they scored lower in factual and procedural accuracy and distractor analysis, indicating that correct answers were not necessarily supported by technically sound justifications. Response clarity was also weakly indicative of technical quality. Furthermore, longer reasoning traces were associated with lower accuracy in both frontier reasoning models, suggesting that reasoning length may reflect question difficulty rather than improved problem-solving performance. Reasoning-token consumption may therefore provide an additional signal for identifying potentially unreliable responses. NEBench R1 establishes a benchmark for evaluating both answer accuracy and reasoning quality, providing a foundation for assessing the domain competence and reliability of LLMs in nuclear engineering.

2. [Chain-of-Thought Controllability Can Reduce Chain-of-Thought Monitorability](https://arxiv.org/abs/2611.21799)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21799v1 Announce Type: new Abstract: Chain-of-thought (CoT) monitoring is a promising tool for detecting hidden goals, off-task behavior, and other failures in AI agents. One risk is that models could deliberately shape their reasoning to make it opaque to monitors. We stress-test this risk through persona-control training: supervised fine-tuning on mathematical reasoning traces rewritten in the voices of diverse personas. This induces a broader ability to control CoT, even though training contains no monitor-evasion examples. In covert side-task evaluations, traces in which a gpt-oss-20b model organism completes the hidden side task contain less monitorable evidence than the base model's. Averaged across evaluations and CoT lengths, weighted by side-task-success counts, the CoT monitorability metric g-mean$^2$ falls from 0.94 for the base model to 0.68 for the model organism without a hiding instruction, and to 0.22 when explicitly instructed to hide. In intervention evaluations, explicit hiding often drives monitorability near zero. The effect extends to a Kimi-K2.6 model organism in agentic environments, though hidden objectives requiring extended reasoning or longer trajectories remain more monitorable than simple single-step side tasks. We further discover that targeted transparency prompts can substantially recover monitorability, sometimes surpassing the base model. These model organisms provide a testbed for studying monitorability failures and potential mitigations. Our code can be found on https://github.com/yongzx/cot-control-model-organism.

3. [Conserved Verdicts, Drifting Commitments: Identifying Harmful Overthinking](https://arxiv.org/abs/2611.21946)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21946v1 Announce Type: new Abstract: A reasoning model that has reached a correct answer can lose it by continuing to think. Deciding whether to stop means comparing two probabilities at the same point of a chain: that the answer the model would give if stopped now is correct (its commitment), and that the answer it will finish with is correct (its verdict). We show that the verdict alone, which is what final-correctness probes estimate, cannot make this comparison. As a forecast of a fixed outcome it has no predictable drift, whether continuing helps or hurts. The commitment-verdict gap equals the expected remaining change in answer quality and the accuracy gained by stopping. A second identity splits any accuracy-versus-budget curve into answer change within chains and change in which chains are still running. We measure both on MATH-500. At all 379 points where DeepSeek-R1-Distill-Qwen-1.5B holds a correct answer, selected without regard to how its chain ends, continuing loses 3.6 points on average (95% CI [2.2, 5.2]), and the loss concentrates in a few problems. In six reasoning models from three families, on MATH-500 and OlympiadBench and with budgets up to 16,384 tokens, declining accuracy curves come from which chains remain, while the chains still reasoning keep or improve their answers. An oracle stopping rule gains at most +1.8 and +2.5 points at 1.5B and 7B. The framework says what to measure before building a stopping rule.

4. [DiscoveryAgent: A Framework for Scientist-centric Agentic AI](https://arxiv.org/abs/2611.21950)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21950v1 Announce Type: new Abstract: AI agents can assist scientific research, but balancing autonomous investigation with scientists' ability to inspect and redirect ongoing work remains a central design challenge. We present DiscoveryAgent, a domain-agnostic, scientist-centric system that combines autonomous investigation with scientist-directed hypothesis steering. Scientists select, refine, or replace hypotheses between research rounds, while audit agents interrogate checkpointed records to trace claims, reproduce analyses, and inform subsequent decisions. Across two predictive modeling tasks, DiscoveryAgent produced the best variable-star classifier among evaluated baselines and, with scientist steering, a protein variant-effect predictor surpassed by only one of 106 ProteinGym baselines. We develop a rigorous checkpointing system that enables highly capable audit agents, a scalable form of oversight for agentic research. Audit agents autonomously identify errors at higher rates than previous AI scientist agents, and scientists collaborating with audit agents identify 14x more valid errors versus scientists performing manual review. In three case studies led by domain experts across physical science, social science, and life science, we developed a multimodal photometric-redshift estimator that resolves complementary failures of images and photometry, achieving 0.971 AUROC for low-redshift classification; documented an 83% rise in Florida homeowners-insurance premiums from 2013 to 2023, with a growing, regressive burden; and identified CD4+ T-cell relay genes, which both receive and exert broad transcriptional regulation, enriched for autoimmune disease associations. Together, these results show how autonomous research can expand scientists' empirical reach while centering their authority over research direction and their ability to understand and challenge the evidence.

5. [Regularized Score Centering](https://arxiv.org/abs/2611.21791)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21791v1 Announce Type: new Abstract: Asynchronous reinforcement learning increases training throughput, but data from stale policies and numerical mismatch between training and inference can destabilize learning. To stabilize off-policy learning, score centering (SC) removes the effect of reward baselines on the expected update. Our gradient diagnostics show less extreme gradients with SC than with importance sampling (IS), but SC can still fail when the learner moves far from the behavior policy that generated the data. To limit this policy mismatch, we introduce Regularized Score Centering (RSC), which adds a reverse Kullback-Leibler (KL) penalty to encourage the learner's next-token distribution to stay close to the behavior policy's next-token distribution. RSC works with or without truncated importance sampling (TIS), which caps token importance weights. Our theoretical analysis supports this approach, showing that KL regularization improves convergence guarantees. We evaluate dense and mixture-of-experts models on mathematical reasoning and agentic tasks, including online shopping, tool use, games, and fully asynchronous software engineering. RSC with TIS substantially improves sample efficiency across all agentic benchmarks, attaining higher training rewards with the same number of sampled responses. In final evaluations, it achieves top performance across all six agentic tasks, improving by 14.3% on AppWorld and reaching 9.9 times the strongest baseline's score on BabyAI.

6. [TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient](https://www.microsoft.com/en-us/research/blog/tokeneconomizer-learning-from-experience-to-make-ai-coding-agents-more-efficient/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 16 Nov 2026 17:01:35 +0000
   - Summary: AI coding agents can waste time and tokens relearning the same lessons. TokenEconomizer is an open-source plugin that builds on past sessions to cut costs while maintaining task success. It’s a path toward coding agents that learn not only how to solve tasks, but also how to spend computation more effectively. The post TokenEconomizer: Learning from Experience to Make AI Coding Agents More Efficient appeared first on Microsoft Research .

7. [Build a Robot Pick-and-Place Simulation with SimReady Assets](https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Fri, 13 Nov 2026 18:00:39 GMT

8. [Language Models Can Rewrite Their Own Weights](https://arxiv.org/abs/2611.21885)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21885v1 Announce Type: new Abstract: Language models are trained once, frozen and deployed: improving one again takes another training run, and a prompt, a scaffold or extra computation at inference is gone once the task ends. A frontier model has been shown to edit the weights of a much smaller one. We ask whether a model can rewrite its own weights to make itself better, and find that it can, by its own reasoning, with no gradients and no training; we call this self-rewriting. Given its weights, graded answers and the ability to run itself, a 27B model diagnoses its failure and edits the weights behind it. It surpasses itself: its own edit makes it 6.6 points more accurate on 490 problems it never saw, in a test fixed in advance, and another session's edit also makes it significantly better. It keeps getting better: it submits an edit only when its own tests support it, each edit replacing the last, and over its first eight such sessions its accuracy only rises. Unlike test-time scaling, the gain persists in its weights and adds no cost per answer; unlike training, it needs no pre- or post-training infrastructure, only an open model and hours on one GPU. It repairs a damaged copy of itself: it locates the corrupted matrix and rewrites it with values of its own, never reading the undamaged weights; found on text math problems alone, the repair lifts the copy on six image benchmarks it never saw from 7% to 70% accuracy, 83% of the undamaged model's. And the ability emerges with scale: across four sizes of one family, the 2B model makes no edit and the 4B and 9B models break themselves; only the 27B model works on itself as a human would, comparing its hidden states on answers that finish and on answers that run out of tokens, weakening the direction that separates them. Like a human, a model need not separate training from inference; improving a language model may come to take a conversation rather than a training run.

9. [DNeo: Your Parallel Draft Model Needs Better Target Feature Encoding](https://arxiv.org/abs/2611.21925)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21925v1 Announce Type: new Abstract: Speculative-diffusion decoding uses a small parallel drafter model to generate b draft tokens in one forward pass, which then undergo parallel verification via a larger target model. Faster inference can be achieved when multiple draft tokens pass verification simultaneously. Recent parallel draft architectures (DFlash, DSpark) improve draft quality by conditioning on rich features computed by the target, through a mechanism known as feature encoding. However, standard feature encoding mechanisms have three limitations: (1) they are lossy, applying encoding projections that are destructive to the underlying target feature-space via a discovered effect known as residual mixing, (2) they are memory-less, with no record of previously processed proposals, and (3) they utilize features sampled uniformly from across the target layers, omitting important hidden states. To address these issues, we propose Mixture-of-Features Attention (MoFA), a lightweight feature-encoding approach equipped with a working memory that encodes previously rejected proposals. Leveraging MoFA, rejection memory, and a set of further enhancements, including 2-tap causal convolutions, prefix-only cross-attention, and non-uniform target layer selection, the final architecture, DNeo, achieves 1.3x faster generation speed than SoTA (DFlash-2) without impacting drafter footprint or generation quality. DNeo marks a new state of the art in high quality, fast LLM inference.

10. [SLED: Sensor SLicing from Edge to Datacenter](https://arxiv.org/abs/2611.21937)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21937v1 Announce Type: new Abstract: Modern sensing systems generate large volumes of heterogeneous data streams from multiple sensor modalities, increasing reliance on datacenters for computation, artificial intelligence/superintelligence (AI/SI) inference, and AI/SI training. Each sensor stream may have different network and compute requirements depending on its type and data volume. However, current wireless systems typically allocate resources at the device level, leading to contention among co-located sensor streams, where bulk data transfers may starve latency-critical telemetry. To this end, this paper introduces Sensor Slicing (SL). SL provides deterministic, medium access control (MAC)-level isolation for individual sensors within a single user equipment (UE) in open radio access networks (O-RAN). Using agentic coding techniques, SL is implemented in two O-RAN-compliant packages, reducing development time by 400 times (2 h 40 min [OCUDU] vs. 6.5 weeks [OAI]), 228-fold fewer human prompts (4 vs. 913), and less than half the tokens (0.64B vs. 1.43B). An associated end-to-end framework, SLED, is implemented to establish per-sensor radio and network isolation across edge, campus, and remote high-performance computing (HPC) tiers. Over-the-air wireless experiments demonstrate that while conventional network slicing causes critical delays to increase more than 2,300-fold under high traffic load, SLED maintains stable latency. Scaling evaluations on the two RAN stacks show that throughput remains within 0.9% and 1.4% of expected allocations even as the number of sensor slices increases. The results demonstrate that SLED preserves latency-critical telemetry while effectively utilizing resources across the sensor-to-HPC pipeline. The SLED software and evaluation datasets are publicly available at https://github.com/UNL-CPN-Lab/SLED-Sensor-SLicing-from-Edge-to-Datacenter.

11. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.07; Date: 2026-11-18T19:12:41Z; Popularity: 2,069 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

12. [Inside the Codex sandbox](https://openai.com/index/inside-the-codex-sandbox)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 08:00:00 GMT
   - Summary: See how Codex runs commands on your machine while enforcing the filesystem and network limits you control across macOS, Linux, and Windows.

13. [Managing frontier AI risk: From training to deployment](https://openai.com/index/managing-frontier-ai-risk)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 06:00:00 GMT
   - Summary: OpenAI explains how it manages frontier AI risk from training through deployment with model alignment, sandboxing, blocking safeguards, and monitoring.

14. [The Silent Consensus](https://openai.com/index/the-silent-consensus)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT
   - Summary: Dean Ball, Head of Strategic Futures at OpenAI, examines how more capable AI could reshape society and how people can retain control of their institutions.

15. [Advancing chip design with OpenAI models](https://openai.com/index/advancing-chip-design-with-our-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT
   - Summary: OpenAI models optimized circuits used in Jalapeño silicon and improved RISC‑V core designs, showing progress in AI-assisted chip design with GPT‑6 Astra.

16. [Le Groupe Figaro and OpenAI partner to bring Le Figaro journalism to ChatGPT](https://openai.com/index/le-groupe-figaro-and-openai-announce-partnership)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT
   - Summary: Le Groupe Figaro and OpenAI partner to bring Le Figaro’s journalism to ChatGPT through summaries and excerpts, with links to original stories.

17. [Introducing GPT-6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 17 Nov 2026 17:45:00 GMT
   - Summary: Introducing GPT‑6.2 Astra and Sol, with better professional outputs, coding, computer use, and efficiency at lower cost across ChatGPT Work, Codex, and the API.

18. [Strengthening NATO and allied cyber defenses with AI](https://openai.com/index/strengthening-nato-allied-cyber-defences-ai)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 17 Nov 2026 00:00:00 GMT
   - Summary: How OpenAI is working with NATO and allied cyber agencies to help trusted defenders find vulnerabilities, test fixes and protect essential systems.

19. [Introducing ChatGPT for Sales](https://openai.com/index/introducing-chatgpt-for-sales)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 17 Nov 2026 08:00:00 GMT
   - Summary: Explore the new Sales plugin and 30+ new and expanded partner plugins in ChatGPT to research prospects, prepare pitches, update your CRM, and move deals forward.

20. [Introducing OpenAI for Chile](https://openai.com/index/introducing-openai-for-chile)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 17 Nov 2026 00:00:00 GMT
   - Summary: OpenAI and the Government of Chile are partnering to support responsible AI adoption, build public-sector skills and help local startups develop AI applications.

21. [From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence](https://www.microsoft.com/en-us/research/blog/from-synthetic-enterprise-data-evaluations-to-real-microsoft-copilot-ai-confidence/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Fri, 30 Oct 2026 13:05:28 +0000
   - Summary: Evaluating Microsoft Copilot at enterprise scale requires test data that captures the full complexity of real organizations, yet real enterprise data contains sensitive information that cannot be used for evaluation under any circumstances. The post From synthetic enterprise data evaluations to real Microsoft Copilot AI confidence appeared first on Microsoft Research .

22. [Open From Data Center to Desktop: NVIDIA Expands Nemotron Family With Highest Efficiency Super VL and Bolt Models](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Thu, 15 Oct 2026 15:00:24 +0000
   - Summary: NVIDIA today released Nemotron 3.5 Super VL, an open 120-billion-parameter model that delivers the fastest task completion and highest accuracy for specialized always-on agents. Joining it are two new edge models: Nemotron 3.5 Bolt 74B-A9B 24GB, optimized to balance intelligence and speed per GB for local agentic workloads, and Nemotron 3.5 Bolt E4B 4GB, optimized [&#8230;]

23. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

24. [DaisyRose-27B: Pushing the Frontier of Post-Training Efficiency](https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 19:54:56 GMT

25. [Why your fine-tuning job takes longer than the FLOPs say](https://huggingface.co/blog/Dharma-AI/predicting-fine-tuning-time)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 18:53:43 GMT

26. [Time-Series Models in the Streamhouse: A New Frontier and Use Cases](https://huggingface.co/blog/ibm-research/time-series-powered-streamhouse)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 15:00:23 GMT

27. [180B Parameters, 32GB of RAM: Pushing MoE Inference to the Limit with Transformers](https://huggingface.co/blog/moe-expert-streaming)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT

28. [Rumble-2-Flash: an open 0.5B speech model for 40+ languages](https://huggingface.co/blog/rumble-2-flash)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 GMT

29. [Hugging Face and OpenRouter join forces to make open-weight models easy to run](https://huggingface.co/blog/openrouter)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 16 Nov 2026 00:00:00 GMT

30. [XYBench: Helping with the problem behind the question](https://huggingface.co/blog/allenai/xybench)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 17:02:35 GMT

31. [llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](https://huggingface.co/blog/ggml-org/llama-cpp-v1)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 13 Nov 2026 14:05:22 GMT

32. [LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B](https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 12 Nov 2026 19:07:35 GMT

33. [How Much of SAR Vehicle Recognition Is the Vehicle? Background Shortcuts, Angle Gaps and Partial Libraries on MSTAR and ATRNet-STAR](https://arxiv.org/abs/2611.21827)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21827v1 Announce Type: new Abstract: Deep networks score near 99% on the MSTAR vehicle benchmark, and the newer ATRNet-STAR benchmark was built to be harder. We ask how much of these scores comes from the vehicle itself. With a modern network (ConvNeXt-Small, 3 seeds) we first reproduce the known MSTAR result: with the central 96x96 pixels zeroed out, accuracy is still 73.3% (chance 10%). The same shortcut is present in ATRNet-STAR, which was collected across several scenes: with the vehicle removed, accuracy is 63.3% on the 40-class SOC split (chance 2.5%). Under the official scene-change split, the background stops helping and starts hurting. Accuracy is 22.8% on full chips and 30.8% when only the vehicle is shown. A SAR foundation model, SARATR-X, leans on the background more than ConvNeXt does (+4 to +6 points with the vehicle removed, in every seed) and does not solve the scene change. We then hold the amount of training data fixed and vary the depression angles used for training. Accuracy is set mainly by the gap to the nearest training angle: 57% at 15 degrees, 39% at 30 degrees and 26% at 45 degrees. Adding more training angles does not help. Finally, when most classes have training images at the test angle and a few do not, the missing classes do worse than when no class has them: 9.0% instead of 22.4% at a 45-degree gap. Most of their images are assigned to known classes. We recommend reporting background-only and target-only controls, and the angle gap, next to any accuracy figure. Code is public.

34. [Auditors Struggle to Catch Sabotage In End-to-End Transcripts of AI Safety Research](https://arxiv.org/abs/2611.21832)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21832v1 Announce Type: new Abstract: As AI systems are increasingly used to automate AI R&D, misaligned systems could sabotage research intended to improve model safety and alignment. To stress-test defenses against such sabotage, we use a human expert as a proxy saboteur on AI safety research. We conduct a red-team/blue-team game where a human researcher runs AI safety experiments from scratch and auditors try to tell which were sabotaged and how. Given access to the full research transcript and the ability to run experiments, human auditors mostly fail to distinguish sabotaged from benign research: they achieve an AUROC of 0.59, not significantly better than chance, and fully identify the specific sabotage in only 17% of cases. Despite not being allowed to run experiments, the best frontier models outperform human auditors (Fable 5.1: AUROC 0.73, 32% full identification) within noise and weaker models perform comparably. When the saboteur chooses which experiments are attacked, rather than being required to sabotage every question given, sabotage identification drops further. Our results suggest that research sabotage by expert-level agents is difficult to detect with current auditing methods and provide a new setting for studying research sabotage.

35. [Honest Brokers in AI Regulation: How Public Comments Introduce Evidence to Regulators](https://arxiv.org/abs/2611.21948)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21948v1 Announce Type: new Abstract: The regulation of Artificial Intelligence is susceptible to various forms of capture by industry actors that hold undue influence over the policymaking process, due in part to their information advantage in developing these technologies. In the following paper, we investigate the roles of public commenters in providing evidence to potential regulation in the USA. We build a corpus of 40 potential regulations, and 2,664 public comments submitted by a variety of stakeholders. We computationally process these texts to extract evidence meant to inform regulators, in the form of formal citations and informal references. We find significant differences in the type and amount of evidence supplied: Holding comment length constant, business commenters introduce altogether less evidence, and government, university, and civil society commenters provide significantly more research and legal sources. The publication status of cited research is nearly evenly split, with preprints and peer-reviewed articles being introduced by commenters of all types. We further explore patterns of self-citation and find that while it is prevalent amongst all groups, a small cluster of organizations account for over half of all self-citations in our corpus. Our findings complicate a narrative that public comments alone are means to information capture. We interpret these results in terms of the role that commenters attempt to play in the policymaking process-being either an Issue Advocate or an Honest Broker. These findings on the supply of evidence in public comments shed light on an often overlooked form of policymaking that has implications for how and through what sources information is made accessible to regulators of AI.

36. [DeltaHarness: Self-Evolving Harnesses for Resource-Adaptive Tool Execution](https://arxiv.org/abs/2611.21688)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21688v1 Announce Type: new Abstract: Tool-using agents rely on execution harnesses to organize and schedule tool operations. The same task and resource description can conceal runtime conditions that reverse the latency ordering of valid execution plans. Resolving this uncertainty requires firsthand execution in the target setting. We introduce DeltaHarness, an execution-guided policy-search method that adapts agent harnesses from cold-start measurements. Its QHI loop uses the observed response to update runtime dispatch, revise physical plans, and select experiments for later proposals. An independent confirmation panel controls policy replacement. With fixed dispatch, a revised materialization policy reduces complete-delivery latency by 30.0% on one video-editing task across three fresh pairs. On held-out tasks, the evolved policies reduce latency by 8.2% relative to the best fixed plan in one seed and by 4.6% relative to the initial proposal in another.

37. [Learning Calibrated and Samplable Predictive Distributions of Surface-Ocean $\Delta p$CO$_2$ Using Tabular Diffusion Models](https://arxiv.org/abs/2611.21769)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21769v1 Announce Type: new Abstract: The ocean absorbs almost 30% of anthropogenic CO$_2$ emissions, but quantifying this sink requires estimating surface-ocean CO$_2$ from observations that are sparse in space and time. Most existing machine-learning estimates of this field are deterministic, giving a single value per grid point, with uncertainty approximated post hoc via residuals, ensembles, or prescribed distributions. We instead learn a conditional predictive distribution for each observation: using Treeffuser, a conditional diffusion model with gradient-boosted-tree score functions, we estimate the full predictive distribution of $\Delta p$CO$_2$ (the sea-air $p$CO$_2$ difference) from 13 environmental, spatial, and temporal predictors. On a held-out SOCAT test set, Treeffuser attains the lowest continuous ranked probability score among the uncertainty-quantification methods evaluated (8.229 $\mu$atm) and the coverage closest to the nominal 68% / 95% levels (0.686 / 0.930), while retaining point-prediction skill comparable to a deterministic XGBoost baseline (RMSE 18.4 vs. 17.7 $\mu$atm; $R^2$ 0.77 vs. 0.79). These results show that conditional diffusion can provide well-calibrated, observation-level uncertainties while largely preserving point-prediction skill. Because Treeffuser is generative, its samples can support probabilistic analyses of $\Delta p$CO$_2$; extending this to spatially coherent field reconstruction will require modeling dependence across grid cells and evaluation on spatially held-out data.

38. [A Riemann-invariant contact-capturing scheme with WENO reconstruction and RH-motivated dual-speed dissipation for compressible two-phase mixture flows](https://arxiv.org/abs/2611.21671)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21671v1 Announce Type: new Abstract: This work develops and benchmarks centred (Riemann-solver-free) finite-volume fluxes for a hyperbolic two-phase mixture model with velocity non-equilibrium. The baseline method combines a Riemann-invariant contact-capturing algorithm (RICCA) with dual-speed dissipation and primitive-variable WENO3/WENO5 reconstruction, avoiding full eigen-decomposition while retaining a conservative update. An RH-motivated companion flux (RICCA--RH) is introduced, in which the acoustic weight in $\alpha = |V_n| + Ba$ is controlled by a binary pressure/Rankine--Hugoniot switch. On one-dimensional gas--magma Riemann suite, RICCA--RH tracks legacy RICCA and is sharper than first-order FORCE/Lax--Friedrichs at material contacts; a linearised spectral study clarifies how its dual-speed dissipation differs from FORCE. With WENO5, RICCA, RICCA--RH and FORCE produce essentially identical smooth profiles, indicating that most differences are confined to first-order contact metrics. In two dimensions (gas--liquid benchmarks), the production flux implemented on CPU and Apple Metal reproduces expansion-tube, collision and forward-facing-step patterns and yields intermediate cut-based roughness between RICCA and FORCE. High order is obtained using an approximate face-normal acoustic characteristic reconstruction, a pragmatic multi-variable hybrid sensor, and a Zhang--Shu-style invariant-domain face limiter on $(\rho,\alpha,c)$. An under-dissipative soft-switch variant that rings severely is also documented, and a resident 2D Metal kernel on Apple Silicon is reported to deliver up to $3.9\times$ wall-clock speedup on completed CPU/Metal comparisons (peak on the $101\times101$ expansion tube).

39. [Coordinating integration of multidisciplinary design analysis and optimisation codes with design structure matrices](https://arxiv.org/abs/2611.22522)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.22522v1 Announce Type: new Abstract: The integrated analysis and optimisation codes used to design nuclear fusion reactors need to become increasingly large scale, multidisciplinary and complex to computationally verify design requirements more thoroughly and earlier in the design process. Though the manner in which the integrated models are coupled can have significant implications for computational efficiency, the structure of couplings typically remains hidden in the implementation of a design framework. As this problem is not unique to fusion, we frame integrated design problems as applications of the broader field of Multidisciplinary Design Analysis and Optimisation (MDAO). Originally developed for complex system design problems in e.g. aerospace, the MDAO field uses (extended) Design Structure Matrices (DSMs) to display the architecture of integrated analysis and optimisation codes. The aim of this work is to introduce these DSM methods and demonstrate how they can be used to improve the transparency and efficiency of design codes in fusion. As a proof of concept, DSM methods are applied to two case studies: stellarator optimisation with SIMSOPT and the PROCESS systems code. With these cases, we illustrate how a DSM can help identify structural assumptions in the code, and how architectural insight can be used to improve computational efficiency. In particular, we demonstrate the computational impact by modifying the PROCESS solver architecture based on the feedback loops revealed in an automatically generated DSM, yielding a significant reduction in model evaluations. Such architectural changes are considered especially impactful for future design frameworks that combine higher fidelity models with large numbers of inexpensive models.

40. [Non-Intrusive Rubin Substructuring for Geometrically Nonlinear Structures via Nonlinear Manifolds](https://arxiv.org/abs/2611.22651)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.22651v1 Announce Type: new Abstract: Component mode synthesis enables modular reduction of large structural models, but its extension to geometrically nonlinear systems remains challenging. This work generalizes the Rubin method by introducing a cubic displacement manifold that statically condenses high-frequency free-interface modes onto the retained low-frequency modes and residual attachment modes. The reduced equations of motion, with cubic polynomial restoring forces, are derived by Galerkin projection onto the manifold tangent subspace. The consistency of the reduced forces is guaranteed by the cubic expansion of the component-level reduced manifold. We further present a non-intrusive procedure that combines elastic-force identification with finite-difference estimates of tangent-stiffness derivatives, which allows the reduced model to be constructed from the linear Rubin model and tangent-stiffness evaluations. In the proposed numerical tests, the reduced assembled models accurately reproduce the nonlinear responses of the full finite-element models, including internal resonance and modal coupling. Scalability and significant computational gains are demonstrated with an industrial scale model of a wing-box tip tank assembly, for which an online speed-up of about 24,666 was obtained.

41. [Structure and asymptotic preserving deep neural surrogates for uncertainty quantification in multiscale kinetic equations](https://arxiv.org/abs/2506.10636)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2506.10636v2 Announce Type: cross Abstract: The high dimensionality of kinetic equations with stochastic parameters poses major computational challenges for uncertainty quantification (UQ). Traditional Monte Carlo (MC) sampling methods, while widely used, suffer from slow convergence and high variance, which become increasingly severe as the dimensionality of the parameter space grows. To accelerate MC sampling, we adopt a multiscale control variates strategy that leverages low-fidelity solutions from simplified kinetic models to reduce variance. To further improve sampling efficiency and preserve the underlying physics, we introduce surrogate models based on structure and asymptotic preserving neural networks (SAPNNs). These deep neural networks are specifically designed to satisfy key physical properties, including positivity, conservation laws, entropy dissipation, and asymptotic limits. By training the SAPNNs on low-fidelity models and enriching them with selected high-fidelity samples from the full Boltzmann equation, our method achieves significant variance reduction while maintaining physical consistency and asymptotic accuracy. The proposed methodology enables efficient large-scale prediction in kinetic UQ and is validated across both homogeneous and nonhomogeneous multiscale regimes. Numerical results demonstrate improved accuracy and computational efficiency compared to standard MC techniques.

42. [Micro-Macro Tensor Neural Surrogates for Uncertainty Quantification in Collisional Plasma](https://arxiv.org/abs/2512.24205)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2512.24205v2 Announce Type: cross Abstract: Plasma kinetic equations exhibit pronounced sensitivity to microscopic perturbations in model parameters and data, making reliable and efficient uncertainty quantification (UQ) essential for predictive simulations. However, the cost of uncertainty sampling, the high-dimensional phase space, and multiscale stiffness pose severe challenges to both computational efficiency and error control in traditional numerical methods. These aspects are further emphasized in presence of collisions where the high-dimensional nonlocal collision integrations and conservation properties pose severe constraints. To overcome this, we present a variance-reduced Monte Carlo framework for UQ in the Vlasov--Poisson--Landau (VPL) system, in which neural network surrogates replace the multiple costly evaluations of the Landau collision term. The method couples a high-fidelity, asymptotic-preserving VPL solver with inexpensive, strongly correlated surrogates based on the Vlasov--Poisson--Fokker--Planck (VPFP) and Euler--Poisson (EP) equations. For the surrogate models, we introduce a generalization of the separable physics-informed neural network (SPINN), developing a class of tensor neural networks based on an anisotropic micro-macro decomposition, to reduce velocity-moment costs, model complexity, and the curse of dimensionality. To further increase correlation with VPL, we calibrate the VPFP model and design an asymptotic-preserving SPINN whose small- and large-Knudsen limits recover the EP and VP systems, respectively. Numerical experiments show substantial variance reduction over standard Monte Carlo, accurate statistics with far fewer high-fidelity samples, and lower wall-clock time, while maintaining robustness to stochastic dimension.

43. [harbor-framework/terminal-bench-science](https://github.com/harbor-framework/terminal-bench-science)
   - Source: GitHub repository search; Group: Open source; Score: 3.94; Date: 2026-11-18T20:13:11Z; Popularity: 942 stars
   - Summary: Terminal-Bench-Science: Evaluating AI agents on research workflows across scientific domains

44. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.50; Date: 2026-11-17T18:26:57Z; Popularity: 497 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

45. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.39; Date: 2026-11-18T12:16:52Z; Popularity: 394 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

46. [Luciole-Studio/Misaka-Agent](https://github.com/Luciole-Studio/Misaka-Agent)
   - Source: GitHub repository search; Group: Open source; Score: 3.26; Date: 2026-11-17T12:48:33Z; Popularity: 256 stars
   - Summary: A multi-agent research system for the humanities and social sciences.

47. [Can AI help build a healthier future?](https://www.microsoft.com/en-us/research/podcast/can-ai-help-build-a-healthier-future/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 17 Nov 2026 16:52:17 +0000
   - Summary: What can AI enable in medicine, and how do we get there? Microsoft Research lead Doug Burger, Microsoft Principal Research Manager Ava Amini, Microsoft Chief Scientific Officer Eric Horvitz, and physician-scientist Eric Topol of Scripps Research explore these questions and more. The post Can AI help build a healthier future? appeared first on Microsoft Research .

48. [Learn the rules: The hacker mindset](https://www.microsoft.com/en-us/research/podcast/learn-the-rules-the-hacker-mindset/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Tue, 03 Nov 2026 17:14:38 +0000
   - Summary: Research Manager Mike Walker reflects on a career spanning hacker culture, cybersecurity, and AI, sharing lessons about trust, teamwork, leadership, and why solving difficult problems requires curiosity, judgment, agility—and an understanding of the rules. The post Learn the rules: The hacker mindset appeared first on Microsoft Research .

49. [Solving a 31-year-old grand challenge in mathematics – the KLS conjecture](https://www.microsoft.com/en-us/research/blog/solving-a-31-year-old-grand-challenge-in-mathematics-the-kls-conjecture/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 21 Oct 2026 16:00:00 +0000
   - Summary: For decades, a fundamental question about the difficulty of computing in high-dimensional spaces has resisted proof. New research resolves this question, removing a major theoretical obstacle to understanding the efficiency of randomized algorithms used across science and computing. The Kannan–Lovász–Simonovits (KLS) conjecture was proposed in 1995. It asks whether, for a broad class of high-dimensional [&#8230;] The post Solving a 31-year-old grand challenge in mathematics – the KLS conjecture appeared first on Microsoft Research .

50. [TIBECG: Temporal Information Bottleneck for Lead-Specific Demographic Privacy in ECG Waveform Release](https://arxiv.org/abs/2611.21694)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21694v1 Announce Type: new Abstract: Transmitting an electrocardiogram (ECG) waveform can expose demographic information beyond an intended diagnostic task. We evaluate TIBECG, an architectural temporal information bottleneck, on individual leads extracted from hospital twelve-lead recordings. A 2,302,337-parameter processor varies its latent length while retaining the same nine-score consistency objective, without age or sex labels in protector fitting. Across 6,386 recordings, ten folds, 12 leads and 21 lengths, retrospective selections retained at least 95% of each lead's clean macro-F1. Their weaker age/sex interval gain exceeded the best eligible conventional transformation on all leads, by a median 22.08 percentage points. The implemented sampling-rate comparison shows that direct downsampling usually suppresses demographic inference more strongly but at a larger loss of diagnostic utility, whereas TIBECG favors utility preservation. Selection stability also varies by lead. Lower latent Kullback-Leibler (KL) divergence does not reliably rank residual sex leakage at a fixed length. These findings support lead-specific evaluation of waveform processing, not validated consumer deployment or expert-readable reconstruction. When the waveform-input diagnostic classifier is hosted as part of a proprietary cloud service rather than deployed on the device, waveform transmission is required to obtain its scores.

51. [FACE: Flow-Guided Angular Channel Estimation Framework for mmWave MIMO Systems](https://arxiv.org/abs/2611.21698)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21698v1 Announce Type: new Abstract: Acquiring accurate channel state information (CSI) is essential for millimeter-wave (mmWave) multi-input multi-output (MIMO) systems. However, it remains challenging due to high-dimensional channels, limited pilot observations, and measurement noise. To address these challenges, we propose flow-guided angular channel estimation (FACE), a novel channel estimation framework based on flow matching, an emerging generative modeling paradigm that learns continuous transport dynamics between probability distributions. FACE exploits the inherent angular-domain sparsity of mmWave channels and incorporates the learned flow matching model as a generative channel prior. Numerical results show that FACE consistently achieves higher channel estimation accuracy than both conventional estimators and diffusion-based generative estimator across diverse channel and system configurations. Moreover, FACE maintains high estimation accuracy with fewer pilot observations and achieves an average achievable rate close to the perfect-CSI benchmark. Compared with diffusion-based estimation, FACE requires substantially fewer sampling steps while achieving superior or comparable estimation accuracy, reducing inference time and computational cost. Overall, the proposed framework demonstrates the potential of flow matching for accurate, pilot-efficient, and computationally efficient mmWave MIMO channel estimation.

52. [Constitutive-fibre mechanics: mechanics-directed uncertainty in constitutive function space](https://arxiv.org/abs/2611.22187)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.22187v1 Announce Type: new Abstract: A structural prediction rests on constitutive functions that are known only through a finite number of tests. The tests fix the response along the states they visit; together with a declared regularity bound they leave a set of admissible constitutive functions, which we call the constitutive fibre. Constitutive-fibre mechanics (CFM) computes the range of a quantity of interest over this set. Adjoint solves of the mechanical problem represent the test observations and the quantity of interest as elements of the constitutive function space. The part of the sensitivity of the quantity of interest that is orthogonal to all observation sensitivities is hidden from the tests; for exact data it alone determines the half-width of the prediction, and for data with tolerance the half-width is a finite convex problem in the span of the adjoint representers. Comparing the two values shows whether a new type of test or a more precise test is needed, and a rank-one update ranks candidate tests before they are performed. A learned constitutive class can only under-represent the range; the deficit is computable. Beyond the linear range, an optimality system with state-dependent representers gives the extreme constitutive functions. The same set decides whether the prediction is defined for every admissible constitutive function, which is a different question from its precision. For a phase-field bar with unknown degradation function, 3% of the sensitivity of the stability eigenvalue is hidden and produces 70% of its uncertainty. For an open-hole composite lamina, the coupon that sharpens the compliance most is not the one that makes the prediction valid; validity is proved on a declared cell by a certificate accepted in exact arithmetic.

53. [Robust feedback control of collisional plasma dynamics in presence of uncertainties](https://arxiv.org/abs/2505.19992)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2505.19992v2 Announce Type: cross Abstract: Magnetic fusion aims to confine high-temperature plasma within a device, enabling the fusion of deuterium and tritium nuclei to release energy. Due to the very large temperatures involved, it is essential to isolate the plasma from the device walls to prevent structural damage and the external magnetic fields play a fundamental role in achieving this confinement. In realistic settings, the physical mechanisms governing plasma behavior are highly complex, involving numerous uncertain parameters and intricate particle interactions, such as collisions, that significantly affect both confinement efficiency and overall stability. In this work, we address particularly these challenges by proposing a robust feedback control strategy designed to steer the plasma towards a desired spatial region, despite the presence of uncertainties. From a modeling perspective, we consider a collisional plasma described by a Vlasov-Poisson-BGK system, which accounts for a self-consistent electric field and a strong external magnetic field, while incorporating uncertainty in the model. A key feature of the proposed control strategy is its independence from the random parameter, making it particularly suitable for practical applications. A series of numerical simulations confirms the effectiveness of our approach and demonstrates the ability of external magnetic fields to successfully confine plasma away from the device boundaries, even in the presence of uncertain conditions.

54. [Control strategies for magnetized plasma: a polar coordinates framework](https://arxiv.org/abs/2511.10214)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2511.10214v2 Announce Type: cross Abstract: In this work, we provide an overview of various control strategies aimed at steering plasma toward desired configurations using an external magnetic field. From a modeling perspective, we focus on the Vlasov equation in a two-dimensional bounded domain, accounting for both a self-induced electric field and a strong external magnetic field. The results are presented in a polar coordinate framework, which is particularly well-suited for simulating toroidal devices such as Tokamaks and Stellarators. A key feature of the proposed control strategies is their feedback mechanism, which is based on an instantaneous prediction of the discretized system. Finally, different numerical experiments in the two-dimensional polar coordinate setting demonstrate the effectiveness of the approaches.

55. [Full-horizon magnetic control of the Vlasov--Poisson system for plasma confinement](https://arxiv.org/abs/2610.26110)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2610.26110v1 Announce Type: cross Abstract: We study the full-horizon control of a two-dimensional Vlasov--Poisson system through an externally imposed magnetic field. The control is represented by time-dependent coefficients associated with smooth, spatially localized basis functions, and is designed to steer selected position and velocity moments of the distribution function while limiting particle dispersion and the control effort. Starting from the kinetic constrained optimization problem, we derive the continuous first-order optimality conditions, including a backward Vlasov equation, an elliptic adjoint equation, and the variational inequality associated with bounded controls. We then project this system onto a particle--grid representation and identify the resulting particle adjoints and control gradient. The full-horizon field is then computed on a reduced particle ensemble, initialized by an instantaneous control, and subsequently applied to a larger set of particles. Numerical experiments indicate that the instantaneous control field already provides an effective baseline, while the full-horizon correction can further reduce the relative thermal energy near the boundaries and improve confinement over the prescribed time interval.

56. [Multicomponent Adaptive Sampling Configuration Interaction method in openLOWDIN: positronic and quantum nuclear systems](https://arxiv.org/abs/2611.21790)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 18 Nov 2026 00:00:00 -0500
   - Summary: arXiv:2611.21790v1 Announce Type: cross Abstract: We present a multicomponent Selective Configuration Interaction (SCI) method based on the deterministic Adaptive Sampling CI (ASCI) algorithm for computing energies and wavefunction properties of molecular systems containing leptons of variable masses, or quantum nuclei. Near-FCI accuracy is achieved by incorporating second-order Epstein-Nesbet perturbation theory or by dressing the Hamiltonian via Davidson's and co-workers shifted-Bk method. We validate the approach through benchmark positronic (e$^+$LiH, e$^+$OH$^-$, e$^+$Mg) and quantum nuclear systems (HCN), establishing a novel protocol for accurate convergence, based on the iterative adaptation of natural orbitals starting from those obtained by considering only cross-particle CISD excitations, to those obtained from SCI variational space, surpassing the accuracy of previous SCI studies. Overall, we show that the present multi-component SCI framework offers a simple, systematically improvable, and cost-effective alternative to traditional CI approaches.

57. [brayonpi/hexstellar](https://github.com/brayonpi/hexstellar)
   - Source: GitHub repository search; Group: Open source; Score: 2.37; Date: 2026-11-18T17:25:29Z; Popularity: 1,370 stars
   - Summary: Turn any AI agent into a computational researcher. HexStellar Cortex delivers software-accelerated optimization, quantum computing, scientific computing, decision intelligence, and verifiable execution through a Python CLI and API—with certainty labels, verification receipts, examples, and a free sandbox. Start instantly: pip install hexstellar

58. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.27; Date: 2026-11-18T06:19:47Z; Popularity: 272 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

59. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.06; Date: 2026-11-18T14:44:10Z; Popularity: 62 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

60. [LeonChaoX/qinyan-academic-skills](https://github.com/LeonChaoX/qinyan-academic-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.05; Date: 2026-11-18T15:30:59Z; Popularity: 1,054 stars
   - Summary: A curated, multilingual library of 182 installable AI agent skills for end-to-end academic research—spanning literature discovery, scientific writing, grant development, bioinformatics, drug discovery, clinical research, machine learning, and data analysis.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

NEBench R1: a Reasoning Benchmark for Evaluating Nuclear Domain Competence in Large Language Models

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2611.21682

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
