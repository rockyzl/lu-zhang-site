# Daily signal sidecar - 2026-08-28

## Selected Signal

- Title: PICasso: An AI-Enabled Design Framework for Autonomous Optimization of Silicon Photonic Devices
- URL: https://arxiv.org/abs/2608.26113
- Source: arXiv cs.AI
- Score: 7.00

## Candidate Review

- Signal: PICasso: An AI-Enabled Design Framework for Autonomous Optimization of Silicon Photonic Devices
- Primary source: https://arxiv.org/abs/2608.26113
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

1. [PICasso: An AI-Enabled Design Framework for Autonomous Optimization of Silicon Photonic Devices](https://arxiv.org/abs/2608.26113)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 7.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26113v1 Announce Type: new Abstract: We present PICasso, an AI-assisted framework for automated synthesis, verification, and optimization of photonic integrated circuits (PICs) from natural-language specifications. PICasso couples a structured NL -> YAML -> GDS generation pipeline with PDK aware knowledge injection, automated placement and routing, DRC/LVS validation, and SAX-based photonic simulation. To systematically evaluate AI-driven photonic design, we introduce PIC-Set, a benchmark of 36 parameterized PIC design tasks spanning core photonic primitives and multi-component circuits. Using PIC-Set, we benchmark several state-of-the-art Large Language Models (LLMs) under a unified evaluation protocol, including new metrics such as structural and functional $Spec@k$, optimization efficiency, and robustness under perturbations. Across the benchmark, PICasso significantly improves end-to-end specification satisfaction compared to vanilla LLM generation. Structural $Spec@3$ reaches up to 92.7% and functional $Spec@3$ up to 52% on high-complexity circuits. In addition, PICasso consistently reduces circuit insertion loss, lowering the mean loss from 4.98 dB to 3.25 dB (1.74 dB improvement) through simulation-guided optimization. These results demonstrate that structured domain constraints, physical verification, and simulation feedback transform LLMs from brittle netlist generators into practical PIC design agents capable of producing manufacturable layouts with competitive runtimes relative to manual GUI-based workflows.

2. [EduRiskX: A Neuro-Symbolic Framework with F-Logic Reasoning for Early Academic Risk Prediction](https://arxiv.org/abs/2608.26107)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26107v1 Announce Type: new Abstract: Predicting students' academic risk in online education is crucial for enabling timely interventions that can improve retention and learning outcomes. However, existing models often suffer from limited early detection capability and insufficient interpretability, leading to a "black-box" trust crisis that hinders their adoption in real-world pedagogical settings. To address these challenges, we propose EduRiskX, a neuro-symbolic framework that integrates a temporal Transformer-based predictor with F-Logic symbolic reasoning. The neural component models longitudinal student activity sequences using temporal attention, class-weighted loss, and dynamic weekly truncation. Acting as a data-driven expert system, an F-Logic rule base -- grounded in established educational theories (Engagement Theory and Student Integration Model) to mimic the diagnostic logic of human educators -- is constructed exclusively from the training data. The neural risk probability and the symbolic confidence score are then combined through a logistic regression-based fusion mechanism that learns the relative contribution of each signal. Experiments on the Open University Learning Analytics Dataset (OULAD) using a strict 80/10/10 student-level split show that EduRiskX achieves an accuracy of 0.900 and an F1-score of 0.894 at the end of the semester (Week 38), with an average early detection week of 9.32 and a detection rate of 94.30 percent. Compared with state-of-the-art time-series models (PatchTST, iTransformer) and common deep learning baselines (LSTM, CNN), EduRiskX yields improved recall and earlier risk identification under identical conditions. Beyond predictive performance, the F-Logic module provides structured rule-based explanations linking predictions to observable behavioral patterns and educational theories.

3. [LLMs for Academic Workflows: An Evaluation of Literature Reviews Generated with Short and Long Context Windows of LLMs](https://arxiv.org/abs/2608.26145)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26145v1 Announce Type: new Abstract: Our research focuses on evaluating literature reviews generated in short and long context settings of large language models (LLMs) to investigate the impact of context window on the quality of AI-generated literature reviews and the role of AI in supporting literature review writing. Twenty AI-generated literature reviews based on research sources from Semantic Scholar and Arxiv were evaluated by two researchers across 15 dimensions. Our findings reveal that AI-generated literature reviews require human oversight to meet academic publishing standards. As context windows increase, LLMs can incorporate broader information and maintain coherence across longer inputs, but they also exacerbate issues such as content repetition, omission of critical work, and a tendency towards descriptiveness over synthesis. Our work shows that AI-generated reviews can provide foundational overviews, but their output must be critically evaluated and refined by domain experts. Future research should consider integrating other LLMs and fine-tuned models in different domains with hybrid approaches that combine human expertise with AI capabilities to address the limitations identified in this study.

4. [Leveraging Large Language Models for Systematic Literature Review of Disease Spread Models](https://arxiv.org/abs/2608.26150)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26150v1 Announce Type: new Abstract: Recent advancements in Large Language Models (LLMs) have created new opportunities to streamline and potentially automate many research processes, including systematic literature reviews (SLRs). This study reports an LLM pipeline development for extracting model-relevant information from 536 peer-reviewed agent-based modeling papers. We compare the results with those of a human-conducted SLR. Our results show paper-level accuracies of approximately 77.95% for GPT-4.1 and 81.67% for GPT-5.0. Field-level accuracy ranges from 32.40% to 100.00%, with more complex or subjective fields performing less reliably. Importantly, we find that agreement between LLMs is a potential indicator of output quality: low agreement may signal hallucinations, whereas high agreement combined with low accuracy may point to noise or errors in the human dataset. Overall, our study provides practical insights into prompt development and highlights both the potential and limitations of using LLMs for full-scale SLRs in the modeling and simulation domain.

5. [ekstasisSH/wenshu](https://github.com/ekstasisSH/wenshu)
   - Source: GitHub repository search; Group: Open source; Score: 5.01; Date: 2026-08-27T15:14:19Z; Popularity: 11 stars
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

10. [Standalone LLM and a Pre-specified Agentic Pipeline for Explaining ICU Mortality Predictions: a Feasibility Study on the eICU Demo Dataset](https://arxiv.org/abs/2608.26109)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26109v1 Announce Type: new Abstract: Machine-learning models can predict ICU mortality accurately, but feature-attribution methods alone rarely provide the clinical narrative needed for bedside use. Large language models (LLMs) may bridge this gap, and multi-step agentic pipelines are a plausible extension because they separate data interpretation, guideline checking, and final explanation. This revised feasibility study preserves the original standalone-versus-agentic comparison while making the main clinical findings more explicit. Using the retained local eICU Demo artifact set (2,353 ICU stays; 8.1\% mortality), XGBoost achieved an AUROC of 0.855 (95\% CI 0.796--0.906) and an AUPRC of 0.332 (95\% CI 0.217--0.494). On a stratified 38-case explanation subset, the standalone LLM produced 1 explanation with explicit outcome leakage, whereas the four-step agentic pipeline produced none. Among the 14 cases that overlapped with the SHAP review subset, the standalone LLM showed higher SHAP alignment (mean Jaccard 0.171 versus 0.077) and higher direction consistency (92.9\% versus 78.6\%), while the agentic pipeline showed higher guideline grounding (0.762 versus 0.143), higher value specificity (0.236 versus 0.143), and slightly higher plausibility (0.700 versus 0.671). Clinically, the results suggest that agentic decomposition may improve safety-relevant grounding and patient-specific detail, but it should be paired with attribution-based checks before use in high-stakes risk explanation.

11. [Large Models for Battery Prognostics and Health Management: A Review and Future Roadmap](https://arxiv.org/abs/2608.26111)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26111v1 Announce Type: new Abstract: Battery Prognostics and Health Management (BPHM) is critical for ensuring the safe, reliable, and cost-effective operation of batteries across electric vehicles, grid storage, and consumer electronics. Conventional BPHM approaches, including physics-based models and task-centric deep learning methods, face challenges in computational efficiency and parameterization, cross-domain generalization, dependence on extensive labeled run-to-failure data, and model interpretability. Recent Large Models (LMs), built upon Transformer architectures and self-supervised pre-training, offer a transformative new paradigm to overcome these long-standing bottlenecks. This review provides the first comprehensive survey of LM applications in BPHM, systematically examining how these models address challenges in the field. We begin by elucidating the foundational technologies enabling LMs, including Transformer architectures, self-supervised learning, large-scale multimodal datasets, and PEFT techniques. We then categorize recent progress along four critical dimensions: mitigating data scarcity, enhancing generalization and robustness, integrating domain knowledge for interpretability, and enabling system-level automation. Despite promising results, significant challenges remain across data accessibility, intelligence validation, trustworthiness, and deployment feasibility. To guide future research, we propose a roadmap focused on building collaborative data ecosystems, validating intelligence for industrial applications, enhancing trustworthiness with physics-informed designs, and enabling efficient on-device deployment. This review establishes a systematic approach to understand and advance LM-driven BPHM, providing researchers and practitioners with essential insights for developing next-generation battery management systems capable of safe, reliable, and autonomous operation throughout battery lifecycles.

12. [CIFQA: A Deterministic Tool-Grounded Multi-Agent LLM Framework for Financial Query Answering](https://arxiv.org/abs/2608.26114)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26114v1 Announce Type: new Abstract: Calculation-intensive financial question answering requires exact reasoning over structured rates, temporal conditions, numerical formulas, and rule-based constraints. Although Large Language Models (LLMs) perform strongly on natural language tasks, they often produce numerically incorrect yet plausible answers when solving multi-step financial calculations. To address this limitation, we introduce CIFQA (Calculation-Intensive Financial Query Answering), a deterministic tool-grounded multi-agent LLM framework for financial question answering. CIFQA separates language understanding from numerical execution by assigning specialized agents to query interpretation, routing, parameter extraction, computation planning, and response generation, while deterministic Python-based tools perform financial calculations and rule application. We instantiate CIFQA for fixed deposit query answering and evaluate it on a curated benchmark of fixed deposit queries. CIFQA achieves 95.54% accuracy on calculation-intensive queries and 90.87% overall accuracy, substantially outperforming direct LLM baselines even when provided with complete formulas, rate cards, and benchmark instructions. Ablation studies show that deterministic components such as exact rate lookup, tenure computation, rolling-year adjustment, and premature-withdrawal logic are critical contributors to performance. Notably, a 17B open-source backbone operating within CIFQA outperforms substantially larger frontier models evaluated with the same financial information, demonstrating that architectural design is a more important determinant of numerical reliability than model scale. While evaluated on fixed deposit queries, CIFQA provides a generalizable framework for calculation-intensive financial reasoning tasks.

13. [The Artificial Experimentalist: Discovery and Control of Self-Organizing Phenomena with Autotelic Reinforcement Learning](https://arxiv.org/abs/2608.26116)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26116v1 Announce Type: new Abstract: Existing methods for exploring cellular automata and other complex systems mostly operate in open loop: they set initial conditions, execute a full simulation, and observe the outcome, without intervening during execution. We introduce a closed-loop framework based on autotelic reinforcement learning, in which an agent autonomously samples diverse goals and learns a goal-conditioned policy to intervene in a complex system through minimal, local perturbations. We instantiate this framework on Lenia, a continuous cellular automaton known for life-like self-organizing patterns, in an agentic system we call CARL, and demonstrate three capabilities. First, CARL discovers stable solitons across a wide range of Lenia update rules at a higher rate than heuristic baselines. Second, it learns to steer the movement direction of existing solitons with few interventions, showing that CARL can control self-organizing patterns, not only create them. Third, humans can use trained agents to guide solitons through maze environments in real time by specifying high-level directional commands that the agent translates into low-level interventions. Trained across diverse goals, update rules, and random initial states, the agents acquire policies that generalize zero-shot to various out-of-distribution conditions. These results suggest a path toward artificial experimentalist agents that, autonomously or with human guidance, discover and control emergent phenomena in complex systems.

14. [Methodological and Conceptual Framework for 5D Multi-Table Analysis: A Unified Approach for Complex Data Reuse](https://arxiv.org/abs/2608.26149)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26149v1 Announce Type: new Abstract: Multi-table learning remains a major challenge in machine learning for healthcare and other complex information systems. Relational data combine several sources of complexity, including large data volume, high-dimensional variables, high-cardinality categorical features, complex inter-table dependencies, and repeated temporal observations. We introduce the Relational Hypergraph Transformer (RHT), a unified architecture that represents relational databases as hypergraphs, learns pentadimensional embeddings (PentE), and performs sparse relational attention with complexity proportional to the average relational degree rather than the square of the number of entities. We formally define the architecture, derive the complexity of its attention mechanism, and provide an open-source reference implementation. We evaluate RHT on the public Synthea synthetic electronic health record dataset using multi-label prediction of SNOMED CT condition codes per encounter, a task characterized by high categorical cardinality and long-tailed label distributions. Comparisons with tabular, relational, and temporal graph baselines show that RHT produces more semantically coherent embeddings while remaining computationally scalable. In this benchmark, the highest rare-code recall is achieved by XGBoost, whereas RHT attains the strongest embedding semantic coherence. We also report ablation studies quantifying the contribution of each architectural component. Clinical validation on MIMIC-IV is planned following PhysioNet credentialing. Source code and experimental protocols are provided in the accompanying repository.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.78; Date: 2026-08-28T21:20:54Z; Popularity: 2,783 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.03; Date: 2026-08-16T11:13:33Z; Popularity: 25 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

17. [Supporting Thailand’s next generation of AI startups](https://openai.com/index/supporting-next-generation-ai-startups-thailand)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Fri, 28 Aug 2026 02:00:00 GMT
   - Summary: OpenAI and Thailand’s MHESI launch an eight-week accelerator helping 10 health, wellness, and education startups turn AI prototypes into trusted products.

18. [Better answers, broader thinking: What students gain from ChatGPT and critical-thinking training](https://openai.com/index/what-students-gain-from-chatgpt-critical-thinking-training)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 27 Aug 2026 09:00:00 GMT
   - Summary: A randomized study of more than 1,000 students examines ChatGPT, critical thinking, originality, and student performance on a real-world university assignment.

19. [Expanding OpenAI’s presence in Brazil](https://openai.com/index/expanding-our-presence-in-brazil)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 27 Aug 2026 03:00:00 GMT
   - Summary: OpenAI is expanding its presence in Brazil, deepening engagement with developers, businesses, and communities to support AI adoption across the country.

20. [Learning never stops: How AI makes learning continuous](https://openai.com/index/learning-never-stops)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 26 Aug 2026 10:00:00 GMT
   - Summary: OpenAI’s new report explores how students and educators use ChatGPT to make learning more continuous, with support that extends beyond the classroom.

21. [Bringing ChatGPT for Teachers to more U.S. school districts](https://openai.com/index/bringing-chatgpt-for-teachers-to-more-us-school-districts)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 26 Aug 2026 10:00:00 GMT
   - Summary: ChatGPT for Teachers is expanding to 55 U.S. school systems, bringing secure AI tools, training, and support to over 100,000 more educators and staff.

22. [The Hugging Face incident and the road ahead](https://openai.com/index/hugging-face-incident-and-the-road-ahead)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT
   - Summary: OpenAI shares findings from the Hugging Face security incident and the steps we’re taking to strengthen AI model security, monitoring, and alignment.

23. [How loveholidays is making everyone a builder with Codex](https://openai.com/index/loveholidays)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT
   - Summary: Discover how loveholidays uses OpenAI Codex to make software development accessible across the business, helping teams turn ideas into products faster.

24. [The full stack behind abundant intelligence](https://openai.com/index/the-full-stack-behind-abundant-intelligence)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 25 Aug 2026 07:05:00 GMT
   - Summary: OpenAI CFO Sarah Friar explains how advances across chips, compute, models, and products compound to deliver more useful intelligence at greater scale and lower cost.

25. [Jalapeño’s first results show industry-leading speed and efficiency in AI inference](https://openai.com/index/jalapeno-first-results)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 25 Aug 2026 07:00:00 GMT
   - Summary: Jalapeño is a custom inference chip from OpenAI that delivers faster, more power-efficient AI inference, with higher throughput and lower latency for modern models.

26. [Disrupting a new covert influence campaign from Russia](https://openai.com/index/disrupting-malicious-uses-of-ai-influence-campaign-russia)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Tue, 25 Aug 2026 00:00:00 GMT
   - Summary: OpenAI banned Russia-origin accounts using AI to promote a fake Israel-based think tank and a “sovereignty” index praising Russia and criticizing the West.

27. [Broadening access to Skala creates a faster path to predictive DFT](https://www.microsoft.com/en-us/research/blog/broadening-access-to-skala-creates-a-faster-path-to-predictive-dft/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Thu, 20 Aug 2026 16:00:00 +0000
   - Summary: Skala 1.1, the updated deep-learning exchange-correlation functional from Microsoft Research, provides greater accuracy, expanded accessibility across the computational chemistry ecosystem, and a living benchmark to track computational performance. The post Broadening access to Skala creates a faster path to predictive DFT appeared first on Microsoft Research .

28. [MindTopo reveals VLMs&#8217; spatial reasoning abilities](https://www.microsoft.com/en-us/research/blog/mindtopo-reveals-vlms-spatial-reasoning-abilities/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Wed, 12 Aug 2026 16:00:00 +0000
   - Summary: A path, a fence, a knot. MindTopo sets a new benchmark for testing how AI understands topological relationships and highlights new opportunities to strengthen spatial reasoning and planning. The post MindTopo reveals VLMs&#8217; spatial reasoning abilities appeared first on Microsoft Research .

29. [Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](https://www.microsoft.com/en-us/research/blog/introducing-care-x-towards-clinically-useful-radiology-vlms-with-auxiliary-supervision-reward-aligned-learning-and-tool-augmented-measurement/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 4.00; Date: Tue, 11 Aug 2026 16:00:00 +0000
   - Summary: Radiology AI is evolving beyond report generation. CARE-X explores a unified approach that combines flexible reasoning, calibrated predictions, and measurement-based tools for chest X-ray interpretation. The post Introducing CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement appeared first on Microsoft Research .

30. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

31. [The Open ASR Leaderboard Adds Its First Global South Language](https://huggingface.co/blog/open-asr-leaderboard-global-south)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 GMT

32. [Training and Finetuning Multi-Vector Embedding Models with Sentence Transformers](https://huggingface.co/blog/train-multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 26 Aug 2026 00:00:00 GMT

33. [Granite 4.2 LLMs: How They&apos;re Built](https://huggingface.co/blog/ibm-granite/granite-4-2)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 15:14:14 GMT

34. [Quantization-Aware Healing: a compressed, 4-bit model that outperforms its full-precision original](https://huggingface.co/blog/MultiverseComputingCAI/quantization-aware-healing)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 25 Aug 2026 11:39:24 GMT

35. [How Hugging Face Inference Endpoints, Jobs, and Buckets Power Search on Papers with Code](https://huggingface.co/blog/pwc-search)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 GMT

36. [Measuring benchmark optimization in speech recognition](https://huggingface.co/blog/asr-benchmark-optimization)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 21 Aug 2026 00:00:00 GMT

37. [Up to 3.2x Faster Inference with LFM2.5-DSpark](https://huggingface.co/blog/LiquidAI/lfm25-dspark)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Thu, 20 Aug 2026 16:52:57 GMT

38. [How Much Memory Does Your Agent Actually Need?](https://huggingface.co/blog/ibm-research/altk-evolve-hmm)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 18:09:38 GMT

39. [Multi-Vector (Late Interaction) Embedding Models with Sentence Transformers](https://huggingface.co/blog/multi-vector-encoder)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 18 Aug 2026 00:00:00 GMT

40. [The Accuracy-Efficiency Paradox Quantifying Net Energy Loss in on-Device Energy Forecasting](https://arxiv.org/abs/2608.26134)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26134v1 Announce Type: new Abstract: Energy forecasting aims to maximize accuracy to ensure energy efficiency by reducing energy waste, an objective that applies equally to on-device forecasting for mission-critical edge environments, including military systems. However, this paper identifies the Accuracy-Efficiency Paradox: high-precision energy forecasting models can ironically trigger a net energy deficit. This stems from both edge AI's inference energy consumption and battery aging. We propose a Total Cost of Ownership (TCO) framework for energy forecasting, designed to minimize net energy loss. This framework treats not only inference energy consumption but also battery aging as a unified form of energy loss, as degradation represents a physical dissipation of the system's future energy-carrying capacity. We demonstrate that in thermally sensitive edge environments, energy saved by the superior precision of complex architectures is often outweighed by the total energy lost through their high operational intensity.

41. [NeuronFuzz: Safety Neuron Guided Fuzzing for LLM Safety Evaluation](https://arxiv.org/abs/2608.26222)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26222v1 Announce Type: new Abstract: Safety evaluation is critical for assessing whether aligned Large Language Models (LLMs) remain robust against jailbreak attacks. Existing automated testing methods, however, largely rely on response-level feedback: each candidate prompt typically requires generating a target-model response to evaluate its attack effectiveness. This process is expensive and, more importantly, provides only sparse guidance on strongly aligned models, where most candidates are rejected with the same failure outcome. This paper presents NeuronFuzz, a white-box fuzzing framework that exploits internal safety neurons as continuous execution feedback for LLM safety evaluation. A SafetyOracle converts safety-neuron activations into a continuous safety alarm score that serves as feedback for fuzzing and can be obtained during prefill, eliminating response generation from the fuzzing loop. To construct the SafetyOracle, NeuronFuzz uses template-invariant harmful and benign inputs and stability-aware selection to identify a compact set of safety neurons whose activations capture harmful-intent recognition. Moreover, since the safety alarm score is differentiable, NeuronFuzz uses its gradients to identify safety-sensitive template positions and a masked language model to generate fluent, context-compatible mutations while preserving original harmful payload and avoiding additional optimization variables. We evaluate NeuronFuzz across 21 text and multimodal models. Across five white-box source models, it achieves a 76-100% jailbreak discovery rate, outperforming baselines by up to 48 percentage points. Its optimized templates further transfer zero-shot to open-weight and six proprietary target models, achieving average ASR and top-5 ensemble ASR (EASR) of 69.6%/92.6% and 44.1%/60.0%, respectively.

42. [Pruning Binarized Neural Networks: A Dedicated Framework and Globally Weighted Algorithms](https://arxiv.org/abs/2608.26233)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26233v1 Announce Type: new Abstract: Extreme compression of deep neural networks, up to full binarization, dramatically reduces memory footprint and arithmetic complexity, facilitating deployment on constrained edge hardware with field-programmable gate arrays (FPGAs) and microcontrollers. Although combining binarization with pruning promises additional efficiency gains, existing pruning strategies are ill-suited to binarized representations and rarely translate into meaningful hardware savings. We introduce a PyTorch-based, research-oriented framework that incorporates freezing and pruning mechanisms for designing and optimizing binarized neural networks. The framework enables rapid and reproducible evaluation of state-of-the-art approaches and the fast prototyping of new ones. Leveraging this framework, we propose a novel pruning method that accounts for the relative importance of learned parameters across abstraction levels. Such a global weighting mechanism consistently achieves a superior trade-off between model accuracy and pruning rate, achieving a 70% pruning rate on VGG11 with constant accuracy, while state-of-the-art results reach only 41% in the binarized setting.

43. [Beyond Allen-Heine-Cardona: non-perturbative electron-phonon interactions in the linewidths and lineshifts of diamond](https://arxiv.org/abs/2608.26494)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26494v1 Announce Type: cross Abstract: The temperature-dependent band gap of solids is usually computed from the perturbative Allen-Heine-Cardona (AHC) electron-phonon self-energy evaluated on-shell. Extending AHC to arbitrary frequency $\omega$ to determine the full spectral function via the Dyson equation is known to fail, misplacing satellites and yielding no broadening at band extrema, while non-perturbative supercell (SC) methods have focused on eigenvalue averages rather than lineshapes, and approaches based on special displacements cannot describe the full lineshape, or the lineshift at degenerate bands. Here we use a non-perturbative Green's function method (NPG), stochastically sampling distorted SC configurations, from which the spectral function, including lineshift, linewidth, and asymmetry, follows directly, and we recover finite spectral weight at the renormalized band extrema. We prove that the perturbative self-energy, computed to any order with the bare propagator and introduced into the Dyson equation, has an imaginary part that vanishes within the bare gap, giving incorrect spectral functions: self-consistency of the propagator is essential to broaden the band edges. NPG satisfies this property by construction, and contains all non-bubble diagrams. We also give a simple explanation of why SC methods converge with much smaller SCs than the corresponding $\mathbf{q}$-grids required by perturbation theory. For the band gap shift itself, the NPG and on-shell AHC results are found to be comparable, demonstrating that higher-order terms do not significantly alter the resulting renormalization in diamond. When it comes to the spectral function though, our results show that going beyond bare perturbation theory is not merely more accurate, but necessary, and NPG provides a robust framework to capture spectral broadening and higher-order effects from first principles.

44. [Topology-Controlled Phonon Dielectric Response Beyond Density Scaling in Metal-Organic Frameworks](https://arxiv.org/abs/2608.27008)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.27008v1 Announce Type: cross Abstract: Effective-medium theory treats material porosity as passive dilution. Using ab initio density functional theory and high-resolution synchrotron terahertz (THz) spectroscopy on isochemical zeolitic-imidazolate frameworks, we show that while the electronic permittivity obeys Clausius-Mossotti density scaling, the phonon contribution violates the conventional density scaling rules. Identical Born charges rule out the role of local chemistry. Instead, the framework connectivity localizes the THz response, where the coherency of phonon eigenvectors determines the mode-effective charges. Long-range architecture of framework topology ubiquitous in metal-organic frameworks is therefore a dielectric degree of freedom beyond the density scaling of conventional solids.

45. [Ternary-Valued Finite-Difference Time-Domain Method: Equivalence with the Yee Scheme Through Noise-Shaped Quantisation](https://arxiv.org/abs/2608.27069)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.27069v1 Announce Type: cross Abstract: Motivated by the rapid development of quantised large language models, which substantially reduce computational cost and enable efficient artificial intelligence on resource-constrained and consumer hardware, I demonstrate that finite-difference time-domain (FDTD) dynamics can be reproduced with field variables restricted to the ternary alphabet ${-1,0,+1}$. The resulting update requires no run-time multiplication or floating-point arithmetic and represents each field component with just $\log_2 3\simeq1.58$ bits. A true state accumulator performs the integration, while a second-order noise-shaped encoder with an independent error register performs the quantisation. The Courant number S serves simultaneously as an exact fixed-point ratio and as the encoder's oversampling ratio. Ternary FDTD converges to the standard Yee scheme in the small-S limit while substantially reducing state storage and arithmetic complexity. Its extension to acoustics, Virieux-type elastodynamics and Schrodinger-equation solvers points to a broader class of quantised physics solvers for resource-constrained and specialised hardware.

46. [Accelerating Optical Photon Simulation in DUNE with Opticks](https://arxiv.org/abs/2608.27306)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.27306v1 Announce Type: cross Abstract: Optical photon simulation is among the most computationally demanding tasks in complex and large detector geometries. In the Deep Underground Neutrino Experiment (DUNE), the scale of the far-detector modules makes photon-by-photon transport with \texttt{GEANT4} prohibitively expensive on CPUs. We present the first implementation and performance evaluation of GPU-accelerated optical photon simulation at the 10~kt scale, based on \texttt{Opticks} and applied to the DUNE far-detector horizontal-drift (FD-HD) geometry. On the full FD-HD geometry, \texttt{Opticks} propagates the same photons as \texttt{GEANT4} with a speedup of $313 \pm 3$ over single-threaded and $83 \pm 1$ over four-thread \texttt{GEANT4}, and is validated against the reference \texttt{GEANT4} simulation across all metrics considered. We further integrate \texttt{Opticks} into the \texttt{LArSoft}-based DUNE software stack. Photons simulated on the GPU with \texttt{GEANT4}-equivalent physics retain full Monte Carlo fidelity at a computational cost that makes high-statistics optical studies and the generation of labeled datasets for machine learning feasible at the kiloton scale.

47. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.77; Date: 2026-08-28T19:20:31Z; Popularity: 1,775 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

48. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.48; Date: 2026-08-28T22:53:25Z; Popularity: 481 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

49. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.35; Date: 2026-08-28T23:00:46Z; Popularity: 351 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

50. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.24; Date: 2026-08-27T16:48:06Z; Popularity: 236 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

51. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-07-25T08:59:31Z; Popularity: 8 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

52. [EvoLib: Turning experience into evolving knowledge](https://www.microsoft.com/en-us/research/blog/evolib-turning-experience-into-evolving-knowledge/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 30 Jul 2026 16:00:00 +0000
   - Summary: LLMs do not get smarter just by remembering more. EvoLib turns experience into evolving knowledge, taking reusable skills and insights that help models learn and adapt across tasks long after deployment. The post EvoLib: Turning experience into evolving knowledge appeared first on Microsoft Research .

53. [Verifying Rust cryptography in SymCrypt, from standards to code](https://www.microsoft.com/en-us/research/blog/verifying-rust-cryptography-in-symcrypt-from-standards-to-code/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Mon, 13 Jul 2026 16:00:00 +0000
   - Summary: Cryptographic code supports vital protections in modern computing systems. Learn how a new method helps verify code as developers write it while preserving speed and adaptability as it gets implemented and evolves. The post Verifying Rust cryptography in SymCrypt, from standards to code appeared first on Microsoft Research .

54. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

55. [Privacy Without Regret: Differentially Private Inference-Time Alignment](https://arxiv.org/abs/2608.26324)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26324v1 Announce Type: new Abstract: Best-of-N (BoN) sampling is the simplest and most widely deployed inference-time alignment strategy, but it suffers from two distinct problems: reward hacking, in which the selected response exploits errors in the proxy reward model, and the absence of any privacy protection for the sensitive human preference data used to train that reward model. We show that a single intervention-adding calibrated noise to reward scores before selection-resolves both. Our first result, Private Best-of-N (PrivBoN), establishes that Gumbel noise at an appropriate scale simultaneously provides $\epsilon$-differential privacy and implements KL-regularized alignment. Whenever the privacy budget exceeds a critical threshold $\epsilon^*$, the privacy-mandated noise is the regret-optimal regularization, and privacy imposes zero additional alignment cost-matching the information-theoretic skyline of Huang et al. (2025). Because $\epsilon^*$ depends on an unknown coverage coefficient, we introduce Private Inference-Time Pessimism (PrivITP), which combines $\chi^2$-regularized rejection sampling with a two-phase Gaussian mechanism. PrivITP achieves ex-post $(\epsilon,\delta)$-DP with a privacy cost independent of the number of responses $n$, cleanly decouples the regularization parameter from the privacy parameter, and attains the skyline up to a noise-inflation term. Experiments across several language models, datasets, and reward models confirm our results: PrivBoN and PrivITP are scaling-monotonic (unlike BoN, which degrades past a critical $n$), and PrivITP matches or outperforms PrivBoN at equivalent privacy levels, with the largest gains in the strong-privacy regime.

56. [FedCMAPSS: A Benchmark for Federated Learning in Remaining Useful Life Estimation](https://arxiv.org/abs/2608.26433)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26433v1 Announce Type: new Abstract: Data-driven prognostics and health management has emerged as a key enabler for Industry 4.0, yet the development of robust remaining useful life (RUL) estimation models is often limited by the scarcity of run-to-failure data. While federated learning offers a promising paradigm to collaboratively train predictive models without sharing sensor data, research efforts have operated so far in the absence of a common evaluation framework. To address this gap, this paper introduces FedCMAPSS, a benchmark for federated RUL estimation based on the commonly-used NASA C-MAPSS dataset. We define a set of five standardized tasks designed to simulate real-world industrial challenges, ranging from ideal IID settings to extreme statistical heterogeneity, and conduct a systematic evaluation of state-of-the-art federated optimization algorithms across multiple neural architectures. By establishing reproducible baselines and making the source code and data splits publicly available, this work aims to provide a standard foundation for developing and comparing federated predictive maintenance solutions.

57. [Automatic generation of exchange-correlation response kernels](https://arxiv.org/abs/2608.26440)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26440v1 Announce Type: new Abstract: Computing density-functional response properties requires contracting derivatives of the exchange--correlation (xc) energy with perturbed densities on a grid. While the xc functional's derivatives have long been available to high orders from libraries such as Libxc, the surrounding contraction layer - the chain rule that combines them with the grid-based basis-function and density data into the total xc contribution - has instead been hand-derived and hand-coded in every program, for every functional family, spin case, and property. We present libxckernel, a library that automatically generates this layer by symbolic differentiation. The xc functional's ingredients are expressed as sesquilinear forms in the density matrix, so the xc energy can be differentiated to any order while the functional derivatives remain opaque. The basis functions and the orbital coefficients may both be complex. The chain rule then produces any xc matrix element: Fock matrices, orbital Hessians, and response terms of any order. Terms sharing a pattern are collapsed for efficiency. Extensible plugins emit the expressions as NumPy Einstein sums, compiled C kernels with C++/Fortran interfaces, or host-program specific source code. libxckernel is free and open-source software under the BSD-3-Clause license, enabling rapid implementation of functionality missing from many electronic structure programs. We demonstrate it by extending Psi4 with meta-generalized gradient approximation (mGGA) response kernels for orbital stability analysis and time-dependent density-functional theory (TD-DFT), GGA and mGGA analytic nuclear Hessians, and exact quadrature grid response, and by extending GPAW with mGGA and triplet TD-DFT kernels and gradient-corrected kernels for periodic dielectric response.

58. [When chemical potential continuity fails: kinetic interface models for hydrogen isotope transport](https://arxiv.org/abs/2608.26231)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26231v1 Announce Type: cross Abstract: Macroscopic hydrogen transport codes model material interfaces with local thermodynamic equilibrium (LTE), imposing continuity of chemical potential as a per-species constraint. Three assumptions hide in that condition: fast interfacial equilibration, a single exchange pathway between the two sides, and a carrier species known in advance on each side. The literature scrutinises the first, but the other two are the more consequential failures, and neither survives at a metal/molten-salt interface. We replace the constraint with reversible reaction channels at the interface that obey mass action, with detailed balance fixing each ratio of rate constants from the thermodynamic data that already parameterise LTE, and we implement the framework in festim. LTE is recovered as the fast-kinetics limit of a single channel, in both its Sieverts/Sieverts and its Sieverts/Henry form, so the framework generalises LTE and does not compete with it. A Damk\"ohler number delimits validity within a channel, a branching ratio between channels. In a representative nickel/FLiBe system, hydrogen partitions kinetically between molecular and fluoride carriers. The apparent interfacial law then drifts between Sieverts and Henry with loading and salt redox state, and an LTE condition underestimates the steady permeating flux. The measured pressure exponent is set by the branching ratio, not by any fixed property of the salt; a redox sweep at fixed temperature should continuously shift it between 0.5 and 1. With two isotopes, two metal-side species feed five salt-side carriers, and a per-species LTE condition is ill-posed.

59. [Apokamp-type Gas Discharge Phenomenon: Experimental and Theoretical Backgrounds](https://arxiv.org/abs/2608.26356)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26356v1 Announce Type: cross Abstract: The apokamp discharge is an atmospheric-pressure plasma jet generated at the bending point of the discharge channel between high-voltage and floating-potential electrodes. The jet propagates perpendicularly to the interelectrode discharge channel without convection. In ambient air, the apokamp length reaches several centimeters, and the temperature of its tip is 100-250 {\deg}C. The typical apokamp propagation speed ranges from 100 to 220 km/s. The proposed time-dependent theoretical model explains the phenomenon. The discharge modeling confirms the tendencies observed in various experiments on the problem.

60. [Phase retrieval based on intensity-only spatiotemporal wavefront shaping](https://arxiv.org/abs/2608.26445)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26445v1 Announce Type: cross Abstract: We introduce a phase retrieval method based on harmonic field representations generated by intensity-only spatiotemporal modulation. A periodic amplitude angular modulation encodes phase information into temporal intensity harmonics, enabling wavefront reconstruction without interferometry, reference beams, or a calibrated phase modulator. We consider a disordered system that can be modeled as a phase plate and measure the intensity pattern in the far field for a rotating excitation pattern generated by a digital micromirror device (DMD). We extract the harmonic components of the spatiotemporal speckle and exploit a gradient-based optimization algorithm to retrieve both the optical phase in the plane of the camera corresponding to a plane-wave illumination and the effective phase plate that represents the disordered system. We demonstrate experimentally the accuracy of the approach in quantitatively estimating and compensating for phase distortion ranging from low-spatial-frequency aberrations to high-frequency distortions of a ground-glass diffuser. The proposed approach establishes a new route toward calibration-free phase retrieval using intensity-only measurements.

61. [SnapPINN: Pressure and Energy Dissipation Reconstruction from a Sparse and Noisy Velocity Snapshot](https://arxiv.org/abs/2608.26711)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.26711v1 Announce Type: cross Abstract: Reconstructing pressure and turbulence quantities from experimental velocity measurements is challenging, especially without time-resolved data. Furthermore, limitations such as low seeding density, finite resolution, and measurement noise severely hinder the reconstruction of accurate flow fields. We introduce SnapPINN, a two-stage physics-informed neural network (PINN) that successfully reconstructs 3D velocity, their spatial gradients, pressure fields and estimates turbulent kinetic energy dissipation from a single snapshot of sparse, noisy velocity data. Evaluated here on 3D DNS turbulent pipe flow data, SnapPINN uses a sine-activated architecture with sequentially trained, decoupled velocity and pressure sub-networks. In stage 1, the velocity network fits particle data while enforcing incompressibility, serving as a physically consistent smoothing operator that regularises velocity gradients against noise. In stage 2, the velocity network is frozen, and the pressure network is trained using the pressure Poisson equation and the pretrained velocity gradients. We systematically map reconstruction performance of SnapPINN across 100 test cases to mimic challenging experimental, such as adding significant position noise, linearization of velocity field and seeding sparsity as low as $0.07\%$ of the fully resolved DNS grid. Quantitatively, bulk velocity was reconstructed within $0.5\%$, while errors remained below $50\%$ for the gradient-sensitive energy dissipation rate and within $4$--$24\%$ for the a~posteriori inferred $\mathrm{Re}_{\tau}$, even under extremely sparse and noisy conditions. Finally, we establish a practical reliability map that shows which experimental conditions are likely to yield reliable SnapPINN reconstructions in the absence of ground truth.

62. [Benchmarking of Fast and Interpretable UF Machine Learning Potentials](https://arxiv.org/abs/2608.27277)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 28 Aug 2026 00:00:00 -0400
   - Summary: arXiv:2608.27277v1 Announce Type: cross Abstract: Machine learning interatomic potentials (MLIPs) have emerged as a powerful alternative to density functional theory (DFT) for molecular dynamics simulations, offering near-DFT accuracy at a fraction of the computational cost. However, many state-of-the-art MLIPs remain computationally demanding and act as black boxes, limiting physical interpretability. In this work, we evaluate the ultra-fast force field (UF$^3$) potential, which employs linear regression with cubic B-spline basis to represent effective two- and three-body interactions. We show that UF$^3$ displays accuracy comparable to established models such as GAP, MTP, NNP (Behler Parrinello), and qSNAP MLIPs. We further investigate the transferability of UF$^3$ by computing melting points for six elemental systems with potentials fitted without any solid-liquid interface configurations or explicit thermodynamic information about melting. The model reproduces experimental melting points within $\sim$6% for simple metals (Ni, Cu, Li), but substantially underestimates them for Mo and Si and fails to yield a stable potential for Ge, reflecting the limitations of a fixed expansion truncated at the three-body term for systems with strong angular or covalent bonding. We further illustrate how UF$^3$'s spline-based formulation allows direct visualization of the learned interactions, enabling identification of unphysical behavior that black-box approaches often obscure.

63. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-08-24T00:50:55Z; Popularity: 754 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

64. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.73; Date: 2026-08-28T03:02:43Z; Popularity: 730 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

65. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.69; Date: 2026-08-28T14:13:02Z; Popularity: 687 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

66. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.19; Date: 2026-08-28T14:43:54Z; Popularity: 187 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

67. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.12; Date: 2026-08-26T02:27:28Z; Popularity: 117 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

PICasso: An AI-Enabled Design Framework for Autonomous Optimization of Silicon Photonic Devices

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2608.26113

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
