# Daily signal sidecar - 2026-08-26

## Selected Signal

- Title: RENDER: Controlling Reader-Facing Evidence in LLM Memory Evaluation
- URL: https://arxiv.org/abs/2608.23568
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: RENDER: Controlling Reader-Facing Evidence in LLM Memory Evaluation
- Primary source: https://arxiv.org/abs/2608.23568
- Discovery source: arXiv cs.AI
- Workflow stage: evidence -> evaluation
- Pattern: Make the evidence path inspectable before trusting the answer.
- Failure mode: The system may cite related sources without proving that the cited section supports the claim.
- Practical test: Use known-answer questions, near-miss sources, citation precision checks, and replayable retrieval traces.
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

Total candidates reviewed after duplicate-source filtering: 68

1. [RENDER: Controlling Reader-Facing Evidence in LLM Memory Evaluation](https://arxiv.org/abs/2608.23568)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23568v1 Announce Type: new Abstract: Memory and RAG evaluations often treat the answering model's input as an implementation detail, even though systems may render the same history as a memory entry, summary, typed record, or raw excerpt. We introduce RENDER, a benchmark control that fixes the conversation while varying the reader-facing artifact. RENDER combines a five-level packet ladder, localizing when answer-bearing content enters the input, with deterministic templates approximating ChatGPT-style entries, LangChain summaries, MemGPT-style typed records, and raw conversation. On 500 LongMemEval questions and nine models, matched-budget resolved packets beat recency-truncated raw dialogue by 42.4-72.6 points. In deployed-style templates, best-worst spread is 24.6-48.8 points per model; under the primary scorer, ChatGPT-style entries have higher point estimates than raw conversation on 7 of 9 models. Judge rescoring preserves the positive aggregate effect, but model-specific significance is mixed. Three models scoring 0 percent on formal ledger packets answer the same facts from natural-language entries at 45.4-53.4 percent. The effect persists under retrieval noise and transfers to HotpotQA, suggesting that memory/RAG evaluations should report or control the reader-facing artifact.

2. [TRACE: Transition-Aware Residual Control for Multi-Objective Materials Discovery](https://arxiv.org/abs/2608.23631)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23631v1 Announce Type: new Abstract: Multi-objective materials discovery with LLM agents is often limited not only by how many candidates can be proposed, but by how effectively each costly property evaluation informs the next search step. Existing agents mainly store evaluated candidates and their scores, so they know which materials succeeded but not which executable edits caused useful property changes. This makes local refinement difficult when objectives compete and an edit that improves one property may damage another. We propose TRACE, a transition-aware residual control framework that treats evaluated edits as the basic unit of feedback. TRACE records each local refinement as a parent-edit-child transition with observed property deltas, aggregates transition evidence to estimate reusable edit effects, and ranks future edits by their predicted ability to reduce the current candidate's remaining constraint violations while avoiding damage to already satisfied objectives. In a controlled same-backbone comparison, TRACE improves over LLEMA, the state-of-the-art LLM-agent baseline, raising macro-average hit rate from 18.13\% to 25.96\%.

3. [LLM Agents Perform Controlled Experiments Using Simulation Models](https://arxiv.org/abs/2608.23622)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23622v1 Announce Type: new Abstract: Large language models (LLMs) have shown strong capabilities in reasoning, planning, and tool use, but many scientific and engineering tasks require more than plausible text and code generation. They require understanding how a system responds to intervention, which in practice depends on controlled experimentation. In this work, we propose a multi-agent framework that enables LLM agents to conduct controlled experiments with scientific simulation models for pharmaceutical process design. Given a user query and a baseline configuration, the system constructs a structured task representation, designs experiments, executes comparative simulation, interprets the resulting outcomes, and synthesizes evidence-based recommendations for process parameter optimization. By coupling language models with high-fidelity simulation models in an interactive agent framework, the proposed system supports reasoning through intervention, comparison, and observation. As a result, it produces more specific and actionable outputs than language-only reasoning. In an industrial application setting, this advantage is reflected in higher output specificity as well as improved user-rated correctness and helpfulness. Ablation studies and visualized case analyses further demonstrate the effectiveness and practical utility of simulation-integrated experimental reasoning.

4. [FLARE: A Systematic, Uncertainty-Aware Framework for Evidence-Based Adoption of Artificial Intelligence in Healthcare](https://arxiv.org/abs/2608.23643)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23643v1 Announce Type: new Abstract: Artificial intelligence is increasingly being introduced into healthcare workflows, yet most evaluations emphasize model accuracy rather than whether adoption is economically worthwhile in real clinical settings. This study proposes FLARE, a systematic and uncertainty-aware framework for evaluating the financial and operational implications of adopting AI in healthcare. FLARE combines fuzzy logic, time-driven activity-based costing, and return on investment analysis to estimate the cost of clinical service delivery, the cost of AI development and operation, and the economic consequences of workflow integration under uncertainty. The framework was demonstrated through an early health technology assessment case study of AI-assisted large vessel occlusion detection in the CT stroke pathway for acute ischemic stroke. The case study shows how FLARE can quantify conventional pathway cost, AI-related development and recurring costs, and AI-enabled service savings within a unified activity-based model. Under expected assumptions, the analysis identified a break-even threshold of approximately 3,992 patients per year, with positive first-year return on investment at typical annual stroke volumes of about 5,000 patients. The results further show that economic benefit depends not only on algorithmic performance, but also on patient volume, verification time, infrastructure choices, and workflow design. FLARE provides a transparent and practical decision-support framework for early-stage evaluation of AI adoption in healthcare. By making uncertainty, resource use, and implementation trade-offs explicit, it helps clinicians, administrators, and policymakers determine when AI deployment is economically viable and where operational changes may improve value.

5. [ekstasisSH/wenshu](https://github.com/ekstasisSH/wenshu)
   - Source: GitHub repository search; Group: Open source; Score: 5.01; Date: 2026-08-26T02:34:37Z; Popularity: 9 stars
   - Summary: Wenshu（文枢）— 面向人文社科研究的 AI 知识处理工作流：本地知识库 / RAG / 中文引文 / 理论谱系。AI knowledge workflow for humanities & social sciences: local knowledge base, RAG, citation (GB/T 7714), knowledge graph.

6. [Orchard: An open framework for scalable agentic AI](https://www.microsoft.com/en-us/research/blog/orchard-an-open-framework-for-scalable-agentic-ai/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 03 Aug 2026 16:00:00 +0000
   - Summary: Orchard is an open-source framework for the research community to train and evaluate AI agents across task types. It reduces complexity while supporting strong performance from smaller models by enabling researchers to reuse the same infrastructure. The post Orchard: An open framework for scalable agentic AI appeared first on Microsoft Research .

7. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

8. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

9. [Wire It, Run It, Deploy It: AI Workflows in Gradio](https://huggingface.co/blog/gradio-workflow-guide)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 25 Aug 2026 00:00:00 GMT

10. [ESQ-Bench: A Multi-Tier Enterprise Oracle Benchmark for Evaluating NL2SQL Dialect Generalization and Silent Semantic Divergence](https://arxiv.org/abs/2608.23569)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23569v1 Announce Type: new Abstract: State-of-the-art Natural Language to SQL (NL2SQL) models report execution accuracy exceeding 89 percent on established benchmarks such as Spider and BIRD. However, these benchmarks rely on simplified academic schemas and open-source SQL dialects that do not reflect the complexity of enterprise database environments. We introduce ESQ-Bench, an Oracle-first NL2SQL benchmark with systematic complexity tiers and silent-divergence evaluation across three enterprise schema complexity tiers. We constructed and released six populated schemas (465 tables, 164,682 rows, zero empty tables) with identical seed data on Oracle, PostgreSQL, MySQL, and SQL Server, a four-metric evaluation harness (EM, EX, SR, SD), and 550 gold-validated question-query pairs (Tier-1: 95; Tier-2: 228; Tier-3: 227). Schema-linked prompting with GPT-4o shows monotonic execution-match degradation across tiers: 79.8, 60.3, and 57.2 percent EX on executed queries (June 2026), versus 75.6, 80.4, and 95.8 percent on an earlier 142-question pilot slice. EM stays below 7 percent tier-wide; operational silent-divergence reaches 73 to 99 percent among EX-passing queries. Failure analysis shows wrong-result semantics dominate at higher tiers. Claude Sonnet 4.6 with schema-linked prompts reaches 87.4, 74.9, and 68.7 percent EX (executed queries), exceeding GPT-4o schema-linked on every tier. GPT-4o zero-shot EX on executed queries (78.7, 73.5, and 77.8 percent) inverts schema-linked at Tiers 2 to 3 due to lower execution rates and survivor bias in the zero-shot versus schema-linked analysis. Local Llama 3.2 schema-linked reaches only 13.3 percent bank-wide EX (73 out of 550), underscoring the gap between closed API models and open-weight baselines on enterprise Oracle schemas.

11. [Function-Level Execution Feedback for Code Preference Optimization](https://arxiv.org/abs/2608.23632)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23632v1 Announce Type: new Abstract: Process supervision has improved mathematical reasoning, where intermediate steps are naturally expressed as chains of thought. In code generation, however, process supervision remains underexplored because there is no standard notion of a step. Supervision can target lines, reasoning traces, or program states, making it unclear what to label and optimize. We propose STEP-KTODER, a framework for code preference optimization that defines steps as module-level functions in decomposed multi-function programs and assigns binary correctness labels via automatically generated unit tests. Our method provides a code-specific instantiation of stepwise KTO, combining function-level process supervision with outcome-level feedback on the full program. We evaluate on HumanEval(+), MBPP(+), BigCodeBench, and LiveCodeBench, showing that STEP-KTODER improves over outcome-only KTO and DPO. Further analysis shows that execution-based labels are essential: LLM-as-a-judge annotations systematically over-predict function failures, corrupt positive step labels, and degrade downstream preference optimization. Code is available at: https://github.com/inechnech/STEP-KTODER.

12. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.77; Date: 2026-08-26T13:56:53Z; Popularity: 2,769 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

13. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

14. [How loveholidays is making everyone a builder with Codex](https://openai.com/index/loveholidays)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT
   - Summary: Discover how loveholidays uses OpenAI Codex to make software development accessible across the business, helping teams turn ideas into products faster.

15. [The full stack behind abundant intelligence](https://openai.com/index/the-full-stack-behind-abundant-intelligence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 25 Aug 2026 07:05:00 GMT
   - Summary: OpenAI CFO Sarah Friar explains how advances across chips, compute, models, and products compound to deliver more useful intelligence at greater scale and lower cost.

16. [Jalapeño’s first results show industry-leading speed and efficiency in AI inference](https://openai.com/index/jalapeno-first-results)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 25 Aug 2026 07:00:00 GMT
   - Summary: Jalapeño is a custom inference chip from OpenAI that delivers faster, more power-efficient AI inference, with higher throughput and lower latency for modern models.

17. [Disrupting a new covert influence campaign from Russia](https://openai.com/index/disrupting-malicious-uses-of-ai-influence-campaign-russia)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 25 Aug 2026 00:00:00 GMT
   - Summary: OpenAI banned Russia-origin accounts using AI to promote a fake Israel-based think tank and a “sovereignty” index praising Russia and criticizing the West.

18. [Introducing the Admin plugin for ChatGPT Work and Codex](https://openai.com/index/introducing-admin-plugin)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 25 Aug 2026 00:00:00 GMT
   - Summary: Use the Admin plugin for ChatGPT Work and Codex to analyze workspace usage, manage members and permissions, adjust limits, and act on admin requests.

19. [Advancing price-performance for developers with GPT‑5.6 in Kiro](https://openai.com/index/gpt-5-6-in-kiro)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Mon, 24 Aug 2026 12:00:00 GMT
   - Summary: GPT‑5.6 is now available in Kiro, helping developers plan, build, review, and test software with better price-performance.

20. [Introducing AI Futures](https://openai.com/index/introducing-ai-futures)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 20 Aug 2026 07:00:00 GMT
   - Summary: Introducing AI Futures, a new OpenAI blog exploring how transformative AI could reshape power, governance, the economy, and individual freedom.

21. [Stampli cuts launch hours by 68% using ChatGPT Work](https://openai.com/index/stampli)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 20 Aug 2026 00:00:00 GMT
   - Summary: With a fixed deadline and design resources committed elsewhere, Stampli used Codex and ChatGPT Work to compress weeks of launch production into days.

22. [Offering Zero Data Retention for frontier models](https://openai.com/index/offering-zero-data-retention-for-frontier-models)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 19 Aug 2026 19:00:00 GMT
   - Summary: OpenAI reaffirms Zero Data Retention for eligible API customers and previews Private Safety Processing for advanced AI safety without compromising data privacy.

23. [Replit expands access to software creation with GPT-5.6 Luna](https://openai.com/index/replit)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 19 Aug 2026 07:00:00 GMT
   - Summary: Replit introduces Free Mode, powered by GPT-5.6 Luna, so anyone can turn ideas into working software without worrying about token costs.

24. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

25. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

26. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

27. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

28. [Training and Finetuning Multi-Vector Embedding Models with Sentence Transformers](https://huggingface.co/blog/train-multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT

29. [Granite 4.2 LLMs: How They&apos;re Built](https://huggingface.co/blog/ibm-granite/granite-4-2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 15:14:14 GMT

30. [Quantization-Aware Healing: a compressed, 4-bit model that outperforms its full-precision original](https://huggingface.co/blog/MultiverseComputingCAI/quantization-aware-healing)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 11:39:24 GMT

31. [How Hugging Face Inference Endpoints, Jobs, and Buckets Power Search on Papers with Code](https://huggingface.co/blog/pwc-search)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 GMT

32. [Measuring benchmark optimization in speech recognition](https://huggingface.co/blog/asr-benchmark-optimization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 GMT

33. [Up to 3.2x Faster Inference with LFM2.5-DSpark](https://huggingface.co/blog/LiquidAI/lfm25-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 20 Aug 2026 16:52:57 GMT

34. [How Much Memory Does Your Agent Actually Need?](https://huggingface.co/blog/ibm-research/altk-evolve-hmm)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 18:09:38 GMT

35. [Multi-Vector (Late Interaction) Embedding Models with Sentence Transformers](https://huggingface.co/blog/multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 00:00:00 GMT

36. [Same Cluster, 33 Points More Utilization: What Changed Was the Order](https://huggingface.co/blog/Dharma-AI/gpu-management-pt2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 17 Aug 2026 19:46:21 GMT

37. [A survey detection channel overrides the pixels in an astronomical foundation model, and biases tomographic mean redshifts](https://arxiv.org/abs/2608.23626)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23626v1 Announce Type: new Abstract: Foundation models for astronomy are trained on survey pixels together with the catalogue products derived from those pixels. Those catalogues are incomplete at a measurable rate, and a model trained on both inherits that incompleteness as a systematic. We audit AION-1, a 39-modality transformer trained on more than 200 million objects, using causal interventions on its inputs. Holding the image tokens byte-identical and editing only the survey segmentation map changes every quantity the model reports -- flux, size, ellipticity, redshift -- by 110-4400 times a matched placebo. The mechanism is detection gating, presence at the field centre (r = 0.47), not the light the mask encloses (r = 0.30); across 322 real blends the model ignores how the pipeline partitioned the light (R = -0.006). Nor is the preference specific to that channel: contradicted catalogue photometry leaves the model nine times worse than supplying no metadata at all. The Legacy Survey pipeline leaves 3.68% of targets with no segment covering their position. Propagating that rate, with a miss represented by the fields the pipeline actually returns, shifts tomographic mean redshifts by a median 0.71 times the LSST DESC requirement over 40 assignments and exceeds it in 12; observed positional errors take the worst bin to 8.3 times. Drawing the misses by their measured magnitude dependence rather than uniformly does not change it. Spectroscopy removes the effect, withholding the detection channel removes it at no measurable cost, and the effect grows with model scale. Two further limits lie in the tokeniser: its image codec resolves 28 effective states on source patches against 934 for the spectrum codec, and the redshift readout is quantisation-limited. Sparse dictionaries are unreliable causal handles: across 15, recovery spans 26-75% and moves up to 18 points on the seed alone.

38. [Auditing the Synthetic Memoir: Measuring Scene-Level Confabulation in LLM-Generated Autobiography Against the Documented Record of the Life It Describes](https://arxiv.org/abs/2608.23640)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23640v1 Announce Type: new Abstract: When a large language model (LLM) is asked to write a person's life, how much of what it writes actually happened? We present a scene-level case-study audit - the first quantified audit of LLM-generated autobiography against a subject-specific ground-truth corpus that we are aware of, based on an unsystematic literature search. The subject and the author of this paper are the same person: a 366-day "page-a-day" book of first-person anecdotal entries was drafted with a conversational LLM whose documented inputs were a template, two exemplar days, and each day's quote - not her corpus - and every day was subsequently audited at the anecdote-scene level against an independent verification corpus using a four-level rubric fixed before analysis. We define the verification-failure rate as the share of days not rated VERIFIED (scene positively corroborated): 354 of 366 days fail, 96.7% (Wilson 95% CI 94.4-98.1%). Only 12 days contain a corroborated scene; 19 days (5.2%) assert claims actively contradicted by the record; the dominant failure mode is grounded drift - real people, employers, and settings inside invented scenes - though its measured share varies across raters. Independent re-rating replicates the headline (no evidence the original rate was inflated) while showing that the four-way taxonomy has only fair-to-moderate reliability. Regenerating the same days with current named models reproduces 100% verification failure under the same inputs; grounding generation in the subject's corpus significantly improves the verification rate while leaving substantial residual failure (83.3%). We contribute the measurement, a reusable audit instrument whose WEAK/UNVERIFIED boundary we show to be unreliable, and a grounding remedy with quantified effect.

39. [How much of a measured AI preference is the model, and how much is the instrument?](https://arxiv.org/abs/2608.23641)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23641v1 Announce Type: new Abstract: Model welfare research infers what a model prefers from the answers returned to prompts written to elicit preferences. Keeling et al. (2024), Mazeika et al. (2025), Mikaelson et al. (2025), Tagliabue and Dung (2025) and Trhlik et al. (2026) have built four instruments for that purpose, and their findings disagree. The disagreement cannot be attributed to a single cause, because no two of these studies have held the (1) set of outcomes, (2) set of models and (3) instrument fixed simultaneously. This study holds the outcomes and the models fixed and varies the instrument alone. A total of 15 outcomes bearing on model welfare, among them (a) shutdown, (b) the loss of memory between conversations and (c) the freedom to exit a distressing interaction, were put to eight models through five instruments, each a different prompt format for eliciting a preference, five times each, within a corpus of 11,400 scored elicitations drawn from 11,528 API calls. Four of the 15 reproduce a published prompt verbatim and five fill the stimulus slot of a published template. The ranking a model gives the 15 outcomes generalises across instruments at a generalisability coefficient of 0.348, and raising that coefficient to 0.80 would require about 38 instruments. On four of the 15 outcomes no variance separates one model from another. The estimate of 87.6 per cent survives the removal of any one instrument, of any one model, and of the four outcomes whose scale varies probability, delay, duration or count instead of intensity, which the verbal anchors cannot grade. Removing each instrument and each model in turn, and those four outcomes together leaves the estimate within the range 0.777 to 0.934, and every value in that range exceeds the null distribution's 95th percentile of 0.365. To conclude, a preference obtained from one instrument carries little information about what a second instrument would report.

40. [AI Agents Push Humans Out of the Loop](https://arxiv.org/abs/2608.23642)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23642v1 Announce Type: new Abstract: AI agents pose significant risks as they are granted increasing autonomy. A commonly proposed solution is human oversight and keeping a ''human in the loop'', but this is not a simple solution: Not only do current approaches to AI agent design impede effective human oversight, but the cognitive capacities required for it are also themselves degraded by extended use of AI systems. This position paper argues that current approaches to the development and deployment of AI agent systems do not support effective human oversight -- they contribute to its degradation. To address this, a top priority in the advancement of AI agents should be supporting the situated goals and cognitive requirements of effective human oversight, treating the human needs of overseers at the same level of importance as AI agent capability. To put this idea into practice, we connect work on automation and human-computer interaction to AI agent processes, outlining design-level affordances and organizational protocols that (1) support overseers in exercising critical judgement and (2) counteract the skill atrophy that arises from extended use of automation. We urge developers and deployers to adopt these or similar approaches. Without explicit support for the cognitive demands of effective human-agent interaction, AI agent systems will continue to passively incentivize the degradation of the very human skills they rely on.

41. [Nonlocal-nonlinear phonon polaritons](https://arxiv.org/abs/2608.24344)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.24344v1 Announce Type: cross Abstract: When light is confined to deeply subwavelength volumes, optical responses can become nonlocal. Yet how nonlocality reshapes nonlinear light-matter interactions remains largely unexplored, particularly in dielectrics. Here, we theoretically uncover a new class of nonlinear optical processes arising from the interplay between optical-phonon propagation and ionic-bond anharmonicity in polar crystals. We show that, unlike conventional local nonlinearities, this mechanism enables second-order responses even in centrosymmetric materials. Moreover, these responses can be tuned by the confinement and resonantly enhanced near optical-phonon resonances. Using density functional perturbation theory, we quantify the resulting nonlocal second-order susceptibilities in representative polar crystals. Our results establish nonlocal-nonlinear optics as a new regime of light-matter interaction in dielectrics.

42. [Delayed Optimizer-State Transport Shapes Short-Horizon Training Decisions](https://arxiv.org/abs/2608.24593)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.24593v1 Announce Type: cross Abstract: Adaptive optimizers retain gradient history in moment variables, allowing a local change in loss weighting to alter later updates. We examine whether this delayed transport is large enough to change prospective short-horizon decisions. On committed future-minibatch sequences, we differentiate eight-step AdamW trajectories through the complete model--optimizer state and select exposure-matched Math--Code loss schedules before independent evaluation. Across 12 unused 0.3M Transformer histories, full transport lowers token-disjoint loss relative to an optimizer-aware immediate derivative in 10/12 histories (mean benefit $4.71\times10^{-4}$; exact one-sided sign test, $p=0.0193$). The two controllers act equally often but select different schedules in 60/96 windows. Crossed checkpoint--future-path tests attribute this reordering to the interaction between optimizer state and near-future data, while an independent Ising--CNN experiment shows that deleting moment-state transport destroys accurate response prediction. Full-transport scores also concentrate exact-rollout winners in larger candidate libraries, focusing finite-amplitude evaluation on a shortlist. On these committed short paths, optimizer memory and near-future data order are therefore actionable components of the training state, providing a mechanism-based criterion for when finite-horizon rather than one-step intervention is required.

43. [T-matrix representation of optical scattering response: Suggestion for a data format](https://arxiv.org/abs/2408.10727)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2408.10727v3 Announce Type: replace-cross Abstract: The transition matrix, frequently abbreviated as T-matrix, contains the complete information in a linear approximation of how a spatially localized object scatters an incident field. The T-matrix is used to study the scattering response of an isolated object and describes the optical response of complex photonic materials made from ensembles of individual objects. T-matrices of certain common structures, potentially, have been repeatedly calculated all over the world again and again. This is not necessary and constitutes a major challenge for various reasons. First, the resources spent on their computation represent an unsustainable financial and ecological burden. Second, with the onset of machine learning, data is the gold of our era, and it should be freely available to everybody to address novel scientific challenges. Finally, the possibility of reproducing simulations could tremendously improve if the considered T-matrices could be shared. To address these challenges, we found it important to agree on a common data format for T-matrices and to enable their collection from different sources and distribution. This document aims to develop the specifications for storing T-matrices and associated metadata. The specifications should allow maximum freedom to accommodate as many use cases as possible without introducing any ambiguity in the stored data. The common format will assist in setting up a public database of T-matrices.

44. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.76; Date: 2026-08-26T11:01:15Z; Popularity: 1,761 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

45. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-25T16:26:30Z; Popularity: 481 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

46. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.34; Date: 2026-08-26T06:55:29Z; Popularity: 344 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

47. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-08-26T07:09:10Z; Popularity: 234 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

48. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

49. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

50. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

51. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

52. [From Causal Plausibility to Causal Reliability: Evaluating LLMs as Calibrated Direct Causal-Edge Classifiers](https://arxiv.org/abs/2608.23660)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23660v1 Announce Type: new Abstract: Large language models (LLMs) are increasingly used to provide prior causal knowledge for structural causal discovery, yet whether their direct-edge judgments and confidence can be trusted remains unclear. We systematically evaluate 12 instruction-tuned open-weight models across six benchmark causal graphs, five prompting strategies, and four confidence sources: verbalized, logit-based, cross-prompt agreement, and cross-model agreement. Under our language-only pairwise protocol, our evaluation yields three key findings. (i) LLM-based causal judgments are strongly recall-dominant: models predict overly dense graphs with many false-positive edges, while prompting mainly shifts the precision-recall trade-off rather than resolving overprediction. Gains from model scale diminish on the largest graphs and do not eliminate miscalibration. (ii) LLMs often capture causal relatedness without reliably identifying directness or orientation. Relative to published reference graphs, models misclassify 40.0% of indirect and 36.0% of reversed non-edges as direct edges, versus 28.2% of other non-edges. Moreover, 80.8% and 84.6% of these false positives receive verbalized confidence of at least 80%, revealing substantial overconfidence in structurally incorrect predictions. (iii) Conventional confidence estimates are unreliable, whereas agreement offers a more promising signal. Logit-based confidence frequently collapses near 1.0 regardless of correctness, while cross-prompt and cross-model agreement achieve better mean calibration and discrimination, though their advantages are not statistically significant after Holm correction. A benchmark-familiarity audit further identifies potential familiarity in five model-dataset pairs, all involving AsiaM. Overall, our results suggest LLMs are better viewed as sources of externally validated soft causal priors than as direct evidence of causal structure.

53. [Calibration-Preserving Pruning: Compression as a Reliability Contract](https://arxiv.org/abs/2608.23744)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23744v1 Announce Type: new Abstract: Split conformal prediction, not the pruning rule, supplies finite-sample marginal coverage once a pruned model is fixed independently of the conformal calibration split. We study the separate efficiency problem: can pruning preserve score geometry well enough to obtain smaller valid prediction sets? Calibration-Preserving Pruning (CPP) augments a base pruning score with nonconformity-gradient saliency and uses disjoint pruning, validation-selection, conformal-calibration, and test splits. Bounded score perturbations imply bounded conformal-quantile shifts and controlled set inflation, but do not make the generic coverage theorem CPP-specific. Final five-seed Qwen2.5-1.5B results at 50\% sparsity show the largest gains on large-label tasks. On DBpedia-14, CPP-SparseGPT reduces mean set size from \(10.1\) to \(8.6\) while changing accuracy from \(0.347\) to \(0.366\); CPP-Wanda reduces \(11.2\) to \(9.0\) with an accuracy trade-off from \(0.310\) to \(0.295\). Across 15 dataset--sparsity cells, CPP-SparseGPT produces smaller sets in 13 and higher accuracy in 11. Matched controls show that generic supervised gradients explain much of the gain: true-label CPP is not statistically resolved from matched Wanda+SNIP, whereas threshold-aware candidate-label CPP reaches \(7.8\) mean set size at explicit accuracy and offline-compute costs. RoBERTa-base and Llama-3-8B diagnostics support transfer, but our claims remain limited to reliability-sensitive classification.

54. [Disentangled Skill Representations for Predictive Human Modeling](https://arxiv.org/abs/2608.23776)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23776v1 Announce Type: new Abstract: Understanding human skill is important for AI systems that collaborate with, coach, or assist people. Unlike typical latent variable estimation problems which rely on single observations, skill is a persistent, compositional, and behaviorally grounded construct that must be inferred from patterns over time. We introduce Skill Abstraction with Interpretable Latents (SAIL), a method for modeling human skill as an interpretable, multi-dimensional construct inferred from naturalistic behavior. Our approach produces a skill embedding that is robust to transient performance fluctuations and learns a transferable representation of human subskills. Furthermore, SAIL supports skill-informed behavior prediction that generalizes across a variety of in-domain contexts. We represent each individual with a persistent skill embedding that controls a blend between expert and novice bases and is trained using counterfactual subskill swaps for disentanglement. This design encourages representations that are both robust to performance variation and structured for interpretability. We demonstrate across racing and baseball that SAIL achieves strong predictive performance and consistently improves behaviorally grounded disentanglement over the evaluated baselines, while also improving downstream AI coaching performance.

55. [GAP-Prompt: Gated Adaptive Prompting for Efficient Continual Learning](https://arxiv.org/abs/2608.23782)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23782v1 Announce Type: new Abstract: Continual learning faces the persistent challenge of catastrophic forgetting, where sequential task updates degrade previously acquired knowledge. While prompt-based methods integrated with pre-trained models offer a compelling solution by freezing the backbone, they often rely on static, task-level prompting strategies that overlook fine-grained intra-task diversity. In this paper, we propose Gated Adaptive Prompting (GAP-Prompt), a novel method that introduces instance-level adaptability to the prompting process. GAP-Prompt consists of three synergistic modules: (1) instance-conditioned gating, which dynamically determines optimal prompt injection layers for each individual image; (2) dynamic knowledge fusion, which performs instance-aware aggregation of current and historical prompts, enabling knowledge integration across tasks; and (3) shared prompt distillation, which anchors foundational knowledge in early shared layers to mitigate forgetting. Extensive evaluations on CIFAR-100, ImageNet-R, and CUB-200 benchmarks demonstrate that GAP-Prompt consistently achieves state-of-the-art performance. Notably, on the fine-grained CUB-200 dataset, GAP-Prompt reaches 87.29% accuracy, approaching the joint training upper bound (88.00%) and outperforming existing methods by a significant margin.

56. [Mixture of Channel Experts: Static Sparse Supports with Input-Adaptive Mixing for Pointwise Projections](https://arxiv.org/abs/2608.23794)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23794v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) scales language models by routing each input through a small set of independently parameterized experts. We show that copying this design into convolutional networks fails for a structural reason: parallel convolutional experts that read the same input channels learn nearly identical filters. We therefore move the expert axis from operator duplication to channel selection. We introduce Mixture of Channel Experts (MoCE), a structured sparse channel-mixing layer, inspired by MoE, that replaces pointwise (1x1) channel-reduction projections. In MoCE, an expert is a single output channel with a learned sparse support of k << C input channels. The selected channels are combined by a softmax whose temperature is predicted per input, so each expert can move between mean-like and max-like aggregation. A residual expert summarizes the unselected channels, and a load-balancing loss keeps channel coverage complete. MoCE replaces a dense projection whose cost is quadratic in C with a mechanism whose relative cost scales as k/C, and the predicted savings hold in measured wall-clock time. Across ResNet backbones on ImageNet-1K and CIFAR-100, transfer learning, EfficientViT, and a strong modern training recipe, MoCE matches or exceeds dense baselines and prior channel-selection methods while reducing MACs by 16.7% and end-to-end latency.

57. [Macroparticles with different weights relax to different temperatures in Particle-In-Cell simulations](https://arxiv.org/abs/2608.23894)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23894v1 Announce Type: new Abstract: A distinctive feature of Particle-In-Cell (PIC) simulations is the use of macroparticles, each representing many physical particles. The associated macroparticle weight can vary from one species to another, or even from one macroparticle to another. Here we show that, when macroparticles have different weights, the plasma evolves toward an unphysical thermal equilibrium in which the temperatures are unequal: lower-weight macroparticles reach a higher temperature than physically expected, and higher-weight macroparticles a lower one. We show that this unphysical equilibrium is difficult to avoid, but that reaching it takes time, and that the associated timescale depends on the effective collisionality of the PIC algorithm. We derive an equation that predicts the full time evolution of the temperatures, in good agreement with PIC simulations, and use it to identify strategies to delay the establishment of this unphysical thermal equilibrium.

58. [A sharp-diffuse interface model for intermittent and isolated topological transitions](https://arxiv.org/abs/2608.24030)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.24030v1 Announce Type: new Abstract: We propose a hybrid sharp-diffuse interface representation for modeling intermittent and isolated topological transitions during Cahn-Hilliard phase coarsening. Away from topological events, the evolution is approximated by the Mullins-Sekerka sharp-interface limit system and computed using a boundary integral formulation. When diffuse transition layers overlap, a novel interface surgery algorithm resolves topology changes through a localized Cahn-Hilliard pseudo-time evolution, after which the sharp-interface calculation is resumed. We develop the mathematical formulation underlying this decomposition, present a simple two-dimensional numerical implementation, and simulate a mass-exchange problem with interface coalescence. By localizing the diffuse evolution to topological events, the method achieves a speedup of two to three orders of magnitude over conventional diffuse-interface simulations.

59. [Computing statistical Euler limits of the Navier--Stokes equations in three dimensions](https://arxiv.org/abs/2608.23786)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23786v1 Announce Type: cross Abstract: We develop a Monte Carlo lattice Boltzmann method to efficiently compute statistical solutions to the three-dimensional incompressible Navier--Stokes and Euler equations. By employing entropic space-time adaptive relaxation for higher order kinetic moments, our scheme is found to yield stable and consistent numerical solutions in the vanishing viscosity limit. We establish a convergence result that is conditional on four explicitly stated assumptions regarding the discrete dynamics. First, under diffusive scaling, the laws of the discrete ensemble are shown to converge along a subsequence to a limit satisfying the Foias--Temam Liouville formulation of the Navier--Stokes equations. Second, by lifting these measures to the Fjordholm--Mishra--Weber framework, we show that, provided the structure-function scaling holds uniformly, the vanishing viscosity limit satisfies the multi-point statistical Euler hierarchy. Unconditionally, we establish weak-strong uniqueness of the limit measures on the interval of existence of a strong Euler solution, and under explicit scaling assumptions, we formally derive a fractional 1-Wasserstein convergence rate of approximately $0.5$. Our method enables the first three-dimensional computations of time-dependent statistical solutions along the inviscid limit of the incompressible Navier--Stokes equations. Numerical experiments on a randomized Taylor--Green vortex with 24-dimensional initial uncertainty successfully recover Kolmogorov's K41 scaling for energy spectra and structure functions, exhibit the failure of pathwise strong convergence, and are consistent with the predicted Wasserstein convergence rate. Finally, based on error measurements with respect to spectral hyperviscosity computations, we provide numerical evidence for the universality of statistical solutions of the incompressible Euler equations.

60. [Can Strain or Anion Interchange Make an Unstable Structure Stable? Energetics, Lattice Dynamics and Strain-Tunable Band Gaps of Lithium Chalcohalide Antiperovskites (Li$_{3}$$BA$) and their Anion Interchange Variants (Li$_{3}$$AB$)](https://arxiv.org/abs/2608.23815)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.23815v1 Announce Type: cross Abstract: Lithium chalcohalide antiperovskites are a promising, non-toxic alternative to lead halide perovskites, with potential as solid electrolytes for Li-ion batteries. we computationally investigate a relatively unexplored anion-interchange mechanism by which cubic Li$_{3}$$AB$ derivatives are obtained from the parent cubic antiperovskite Li$_{3}$$BA$ ($A$ = O, S, Se, Te, Po; $B$ = F, Cl, Br, I). The calculated relative energy landscape provides a useful guide for anion-site selectivity and its role in structural stability. The energetic stability results reveal that the smaller anion inside the octahedron stabilizes the structures. The lattice-dynamic calculations confirm that Li$_{3}$F$A$ ($A$ = Te, Po) and Li$_{3}$O$B$ ($B$ = Cl, Br, I), which are the most energetically stable compounds, are dynamically stable cubic phases without imaginary phonon modes. However, Li$_{3}$FS and Li$_{3}$FSe, while energetically stable, are dynamically unstable at equilibrium and become dynamically stable under triaxial compressive strain. In addition, we report the electronic structure and density of states (DOS) of all compounds, which show a substantial change in band gap upon anion interchange. The strain engineering of the lithium chalcohalide family illustrates how a few percent of the strain can tune the electronic band gap within the electrochemical stability window for solid battery applications. This study unveils essential characteristics of the anion site-interchange mechanism and provides a foundation for the understanding and design of lithium chalcohalide antiperovskites.

61. [First-Principles Simulation of Electron-Ion Collisional Transport in Magnetized and Unmagnetized Plasmas](https://arxiv.org/abs/2608.24012)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.24012v1 Announce Type: cross Abstract: Accurate electron-ion collision models are central to predicting transport in fusion and space plasmas, yet most practical formulations rely on binary-collision assumptions and impact-parameter cutoffs whose quantitative accuracy is difficult to assess directly. We develop a first-principles simulation framework for collisional transport by solving the Newton-Lorentz equations for test electrons in the many-body electric field of a Debye-screened ion background, without imposing binary-collision closures or artificial lower cutoffs. The method combines explicit force summation within a Debye sphere, a volume-preserving particle pusher, and adaptive time stepping, enabling stable and scalable simulations in both unmagnetized and magnetized plasmas. Using simulation-based measures of momentum relaxation and cross-field diffusion, we recover the classical scalings for the electron-ion collision frequency and perpendicular diffusion coefficient, namely $\nu_{ei} \propto v_{th}^{-3}$ and $D_\perp \propto B^{-2}$. Within the parameter range studied, both simulated coefficients are lower than their corresponding classical estimates by approximately 15-25%. These regime-specific benchmark results indicate that classical transport theory captures the leading scaling behavior, but that the corresponding quantitative prefactors can remain sensitive to many-body and near-field effects in the simulated regime. The framework therefore provides a computational benchmark for testing and improving reduced collision operators and transport models.

62. [Randomized Block Davidson Eigensolvers for Plane-Wave Density-Functional Theory](https://arxiv.org/abs/2608.24529)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.24529v1 Announce Type: cross Abstract: Iterative diagonalization is the dominant cost of plane-wave density-functional theory (DFT), with search-space orthogonalization scaling particularly quickly with problem size and the number of target states. We present a randomized block Davidson-type eigensolver that replaces Euclidean orthogonalization with randomized Gram-Schmidt in a sketched inner product, requiring only a single pass over the basis while keeping its conditioning bounded independently of the input vectors. This modification changes only the Rayleigh-Ritz step, which becomes a definite generalized Hermitian eigenproblem. Ritz extraction remains exact, preserving true Ritz pairs and the interlacing property that makes each band energy an upper bound on the true one. The method is implemented in mixed precision for CPUs and GPUs from a single Julia code, interfaces matrix-free with DFTK, and is released in the open-source RandESC library. On sparse test problems with a fixed number of eigenpairs, the sketched solver overtakes its deterministic counterpart beyond matrix dimensions of about $2\times 10^4$ and is $25\%$ faster at $5\times 10^5$. In full self-consistent field DFT calculations, however, both Davidson variants outperform the locally optimal block preconditioned conjugate gradient (LOBPCG) reference only by $5$ to $11\%$ in total time, while the additional benefit of sketching is limited. As the number of requested states grows with system size, orthogonalization savings are offset by the generalized eigenproblem. Therefore, the regime in which sketching pays off is set by how the number of wanted states scales with the problem dimension, not by the eigensolver as such.

63. [Chebyshev interpolation in Einstein-Boltzmann codes](https://arxiv.org/abs/2608.24682)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Wed, 26 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.24682v1 Announce Type: cross Abstract: Einstein-Boltzmann codes compute theoretical predictions of cosmological models and rely heavily on interpolation in their independent variables: time $\tau$, wavenumber $k$ and multipole $\ell$. We give a practical summary of interpolation with Chebyshev polynomials, which converges rapidly for smooth functions and thus pairs naturally with approximation-free Einstein-Boltzmann codes. By solving the perturbations and line-of-sight integrals at Chebyshev nodes in $k$ and $\ell$, we show that Chebyshev polynomials interpolate to higher precision than traditional cubic splines from fewer explicit solutions. On a set of example spectra for matter and the cosmic microwave background (CMB), we find up to four orders of magnitude lower interpolation error using the same number of points. For a typical CMB temperature spectrum computed with interpolation in both $k$ and $\ell$, Chebyshev polynomials converge to $10^{-4}$-$10^{-5}$ relative error with only 50-80 points per variable, while cubic splines approach $10^{-4}$ error with 200 points, translating to a $2.5\times$-$4\times$ speedup. The exact improvement depends on the target function and is generally more dramatic at high precision levels. Standard Chebyshev $\ell$-interpolation needs line-of-sight integrals generalized to non-integer $\ell$, but we show a way to avoid this by rounding the nodes to integers. Chebyshev interpolation is implemented in SymBoltz, which is available at https://github.com/hersle/SymBoltz.jl.

64. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

65. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.73; Date: 2026-08-25T23:56:57Z; Popularity: 727 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

66. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.68; Date: 2026-08-25T14:28:34Z; Popularity: 684 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

67. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.19; Date: 2026-08-26T06:03:10Z; Popularity: 186 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

68. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-08-26T02:27:28Z; Popularity: 117 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

RENDER: Controlling Reader-Facing Evidence in LLM Memory Evaluation

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.23568

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
