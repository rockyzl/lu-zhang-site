# Daily signal sidecar - 2026-07-10

## Selected Signal

- Title: Agentic AI and Retrieval-Augmented Models in Straight-Through Underwriting
- URL: https://arxiv.org/abs/2607.07858
- Source: arXiv cs.AI
- Score: 9.00

## Candidate Review

- Signal: Agentic AI and Retrieval-Augmented Models in Straight-Through Underwriting
- Primary source: https://arxiv.org/abs/2607.07858
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

1. [Agentic AI and Retrieval-Augmented Models in Straight-Through Underwriting](https://arxiv.org/abs/2607.07858)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 9.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07858v1 Announce Type: new Abstract: Artificial intelligence (AI) is beginning to reshape actuarial practice, particularly in domains that require reasoning over unstructured documents, heterogeneous data sources, and regulated decision workflows. Actuaries now face a design space that ranges from traditional rule-based automation to large language models (LLMs), retrieval-augmented generation (RAG), and multi-agent ``agentic'' systems that plan, retrieve, call tools, and reflect. This paper examines how these emerging architectures can support actuarial priorities such as transparency, auditability, and human-in-the-loop governance, with a focus on straight-through decision processes. To make these ideas concrete, we develop and analyze an agentic AI framework for straight-through underwriting of small commercial Business Owner Policies (BOPs). We construct a synthetic but realistic experimental environment and compare three underwriting pipelines: (i) a single-LLM baseline, (ii) a naive RAG system, and (iii) a multi-agent ``Agentic RAG'' pipeline that combines targeted retrieval, third-party data checks, and explicit multi-step rule evaluation. The agentic system performs best overall, with the largest gains in multi-step and missing-information scenarios, where structured retrieval and reflection help the model avoid unsupported straight-through decisions.

2. [Context Graphs for Proactive Enterprise Agents](https://arxiv.org/abs/2607.07721)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07721v1 Announce Type: new Abstract: Retrieval-Augmented Generation (RAG) and agentic frameworks have advanced enterprise AI considerably, yet agents remain fundamentally reactive: they wait for a human query before acting. This paper argues that genuine enterprise productivity gains require proactive agents: systems that surface relevant, actionable information to workers before they ask. We propose the Context Graph, a live relational data structure that models enterprise entities, their relationships, and state transitions over time. Built on this graph, we define a Delta Detection Engine that continuously monitors state changes, a Proactivity Scorer that ranks candidate insights by urgency, relevance, and persona-fit, and a Surfacing Layer powered by an LLM that delivers ranked notifications with grounded explanations. We formalize each component, derive a unified Proactivity Score function, and provide a complete end-to-end Python implementation using NetworkX and the Anthropic Claude API. Evaluation across three generic enterprise case studies (contract lifecycle management, engineering incident response, and sales pipeline hygiene) demonstrates that context-graph-driven proactivity achieves Precision@5 of 0.83, a false positive rate of 0.11, and reduces mean time to surface from 47 minutes (reactive baseline) to under 30 second.

3. [Aligning Clinical Needs and AI Capabilities: A Survey on LLMs for Medical Reasoning](https://arxiv.org/abs/2607.07761)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 6.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07761v1 Announce Type: new Abstract: Large language models (LLMs) have emerged as important tools in healthcare, showing growing potential for clinical reasoning and patient care. This survey examines recent progress in medical LLMs, focusing on reasoning applications and requirements. We present a dual-view approach that connects clinical practice with computational methods. On the clinical side, we establish a five-level competency scheme following Miller's Pyramid, progressing from knowledge recall to dynamic case management. On the computational side, we link deductive, inductive, and abductive reasoning patterns to common medical goals and tasks. We also introduce a benchmark dataset spanning five levels of medical reasoning capability and report results on 18 state-of-the-art models, revealing that medical specialist models excel in diagnosis-centric tasks while general models lead in decision support and dialogue. We conclude by discussing current progress and open challenges, including data limitations, hallucination, and grounding issues, and outline directions toward safer, more reliable, and workflow-ready systems.

4. [Jet-Long: Efficient Long-Context Extension with Dynamic Bifocal RoPE](https://arxiv.org/abs/2607.07740)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 6.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07740v1 Announce Type: new Abstract: Modern LLMs are increasingly deployed in long-context applications such as retrieval-augmented generation, repository-level coding, and agentic workflows whose accumulated reasoning and tool traces routinely push the input an order of magnitude past the pretraining window, making zero-shot context extension the dominant deployment path for open-weight checkpoints. Most existing zero-shot methods fix a single rescaling factor up front, so an aggressive factor sacrifices short-context fidelity while a conservative one breaks down at long contexts. We propose Jet-Long, a tuning-free zero-shot method that pairs a local RoPE-faithful window with a long-range window whose rescaling factor adapts dynamically to the current sequence length, recovering the base model exactly at short inputs while extrapolating cleanly at long ones. An inclusion-exclusion attention merge and an on-the-fly RoPE correction rotation make the bifocal construction essentially free at inference; fused into a single CuTe kernel, long-context prefill reaches up to $1.39\times$ FA2 throughput on H100 (approaching the Hopper-only FA4), and single-batch generation incurs $\le 4\%$ overhead at every length. On Qwen3-1.7B/4B/8B up to 128K context, Jet-Long leads RULER by $+4.79$/$+2.18$/$+2.03$~pp over the strongest baseline at 1.7B/4B/8B, achieves the best overall accuracy on HELMET-RAG (a benchmark identified by HELMET as the most efficient predictor of downstream long-context performance) and attains the lowest PG-19 perplexity. Jet-Long also generalizes to hybrid attention architectures such as Jet-Nemotron for further long-context improvement without retraining, and remains hyperparameter-resilient for ease of deployment.

5. [How Deutsche Telekom is rewiring telecommunications with AI](https://openai.com/index/deutsche-telekom)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Fri, 10 Jul 2026 07:00:00 GMT
   - Summary: How Deutsche Telekom is becoming an AI-native telco with OpenAI-transforming customer service, employee workflows, network operations, and the future of voice.

6. [Separating signal from noise in coding evaluations](https://openai.com/index/separating-signal-from-noise-coding-evaluations)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Wed, 08 Jul 2026 13:00:00 GMT
   - Summary: A new analysis from OpenAI reveals issues in SWE-Bench Pro, a popular coding benchmark, raising concerns about reliability and accuracy in evaluating AI models.

7. [MUFG aims to become AI-native with OpenAI](https://openai.com/index/mufg)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 GMT
   - Summary: MUFG uses ChatGPT Enterprise to build an AI-native organization, improve workflows, and deliver new AI-powered financial services at scale.

8. [Flint: A visualization language for the AI era](https://www.microsoft.com/en-us/research/blog/flint-a-visualization-language-for-the-ai-era/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Wed, 08 Jul 2026 16:00:00 +0000
   - Summary: Short chart specifications are easy to write, but often produce uninspiring results. Flint is an open-source visualization language that offers a middle path, letting AI agents create expressive charts from compact, human-editable specifications. The post Flint: A visualization language for the AI era appeared first on Microsoft Research .

9. [SkillOpt: Agent skills as trainable parameters](https://www.microsoft.com/en-us/research/blog/skillopt-agent-skills-as-trainable-parameters/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Tue, 30 Jun 2026 16:50:02 +0000
   - Summary: AI agents often fail because their instructions, or skills, are manually modified with no guarantee of improvement. Learn how SkillOpt turns skill editing into a training process, making agent behavior more reliable without changing model weights. The post SkillOpt: Agent skills as trainable parameters appeared first on Microsoft Research .

10. [Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity](https://www.microsoft.com/en-us/research/blog/memora-a-harmonic-memory-representation-balancing-abstraction-and-specificity/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 5.00; Date: Mon, 29 Jun 2026 21:14:22 +0000
   - Summary: AI agents can't remember past conversations. They must constantly reload or retrieve context, which grows less efficient as tasks get longer and more complex. Memora solves this with a scalable memory system separating what’s stored from how it's retrieved. The post Memora: A Harmonic Memory Representation Balancing Abstraction and Specificity appeared first on Microsoft Research .

11. [Run AI workloads on any cloud, store on Hugging Face: zero-egress storage with SkyPilot](https://huggingface.co/blog/skypilot-hf-storage)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 5.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

12. [Infinity-Parser2 Technical Report](https://arxiv.org/abs/2607.07836)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07836v1 Announce Type: new Abstract: We present Infinity-Parser2, a large multimodal model that couples a controllable data-synthesis pipeline with multi-task reinforcement learning for end-to-end document parsing, addressing the persistent scarcity of faithfully annotated parsing corpora. Our contributions are threefold. First, we build a scalable synthesis engine, pairing a controllable rendering framework with an iterative refinement loop, and use it to construct and open-source Infinity-Doc2-5M: a 5-million-sample bilingual (Chinese/English) corpus spanning diverse document types, annotated with element bounding boxes, canonical content forms (Markdown, HTML, LaTeX, SMILES, structured charts), and full-page reading order. Second, we introduce a verifiable, multi-task reward system that enables Joint Reinforcement Learning across eight co-trained objectives (document parsing, layout analysis, table parsing, math formula parsing, chart parsing, chemical formula parsing, document VQA, and general multimodal understanding), unifying perception, structure, and reasoning in a single optimization signal. Third, we release two variants under a shared architecture: Infinity-Parser2-Flash, optimized for low-latency inference with a $3.68\times$ throughput gain over Infinity-Parser-7B, and Infinity-Parser2-Pro, engineered for precision-critical settings. Infinity-Parser2-Pro reaches state-of-the-art 87.6% on olmOCR-Bench and 74.3% on ParseBench, surpassing DeepSeek-OCR-2, PaddleOCR-VL-1.5, and MinerU2.5, with strong generalization to charts, chemical formulas, and document VQA.

13. [VectorizationLLM: Smart Vectorization Based AI Assistant](https://arxiv.org/abs/2607.07846)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07846v1 Announce Type: new Abstract: VectorizationLLM is a specialized Large Language Model based on Google open-weight LLMs. The model is designed to assist students to learn smart vectorization, time/wave vector analysis, piecewise functions, Fourier analysis, and differential equations in MATLAB. The course application is CTEC 247: Applied Computational Analysis II by the Department of Electrical & Computer Engineering Technology at New York Institute of Technology Old Westbury. The LLM model is designed to be an instructive assistant, providing detailed explanations of concepts with examples from in-class notes without providing direct answers to questions. The model is designed with a RAG (Retrieval Augmented Generation) knowledge base and system prompt architecture. Examples in both code, text, and images are provided in the LLM responses.

14. [A Graph Neural Network Model for Real-Time Gesture Recognition Based on sEMG Signals](https://arxiv.org/abs/2607.07850)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 5.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07850v1 Announce Type: new Abstract: For seemless control of advanced hand prostheses and augmented reality, accurate and immediate hand gestures recognition is essential. Surface electromyography (sEMG) signals obtained from the forearm are commonly employed for this purpose. In this paper, we present a novel approach for sEMG representation that utilizes graph networks which contain information about muscle activation patterns in the forearm. Based on these graph networks, we have developed a machine learning algorithm capable of real-time hand gesture recognition using a graph neural network. The algorithm's performance was evaluated using sEMG signals acquired from myoband, which has 8 electrodes placed around the forearm, involving 8 healthy subjects. The proposed method demonstrated an average classification accuracy of 99\%, surpassing the performance of state-of-the-art techniques. The average time for both graph construction and prediction stood at 48ms utilizing a M1 pro CPU, rendering the approach well-suited for real-time applications.

15. [google-deepmind/science-skills](https://github.com/google-deepmind/science-skills)
   - Source: GitHub repository search; Group: Open source; Score: 4.32; Date: 2026-07-10T14:39:56Z; Popularity: 2,322 stars
   - Summary: GDM Science Skills to speed up agentic scientific workflows with better grounding and higher token efficiency. Integrate insights from AlphaGenome, AFDB, UniProt and 30+ other databases and tools.

16. [charlieviettq/awesome-agent-skill](https://github.com/charlieviettq/awesome-agent-skill)
   - Source: GitHub repository search; Group: Open source; Score: 4.02; Date: 2026-07-04T02:17:48Z; Popularity: 20 stars
   - Summary: Curated skill pack for LLM agents in engineer and science workflow (Cursor & Claude ready).

17. [GPT-5.6 is now the preferred model in Microsoft 365 Copilot](https://openai.com/index/gpt-5-6-preferred-model-microsoft-365-copilot)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 13:00:00 GMT
   - Summary: Learn how GPT-5.6 powers Microsoft 365 Copilot with stronger AI capabilities across Word, Excel, PowerPoint, Chat, and Cowork for faster, higher-quality work.

18. [GPT-5.6: Frontier intelligence that scales with your ambition](https://openai.com/index/gpt-5-6)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: More intelligence from every token, stronger performance per dollar, and more capability on demand for your hardest work.

19. [ChatGPT is now a partner for your most ambitious work](https://openai.com/index/chatgpt-for-your-most-ambitious-work)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: ChatGPT Work is an agent that can take action across your apps and files, stay with a project for hours if needed, and turn a goal into finished work.

20. [GPT-5.5 Bio Bug Bounty](https://openai.com/index/bio-bug-bounty)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Thu, 09 Jul 2026 10:00:00 GMT
   - Summary: Details about the OpenAI Bio Bounty program

21. [Our approach to government and national security partnerships](https://openai.com/index/government-national-security-partnerships)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 13:30:00 GMT
   - Summary: Learn how OpenAI approaches government and national security partnerships, with principles for responsible AI use, democratic accountability, and public safety.

22. [Helping K–12 educators build practical AI skills](https://openai.com/index/k-12-educators-practical-skills)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 10:00:00 GMT
   - Summary: OpenAI Academy and the Walton Family Foundation are bringing hands-on AI Skills Jams to help K–12 educators build practical AI skills for the classroom.

23. [Introducing GPT-Live](https://openai.com/index/introducing-gpt-live)
   - Source: OpenAI News; Group: Frontier AI labs; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT
   - Summary: A new generation of voice models for natural human-AI interaction, now powering ChatGPT Voice.

24. [NVIDIA Nemotron Achieves Benchmark-Leading Performance With LangChain Deep Agents Harness](https://blogs.nvidia.com/blog/nemotron-langchain-agents-open-stack/)
   - Source: NVIDIA AI Blog; Group: AI infrastructure; Score: 4.00; Date: Wed, 08 Jul 2026 15:00:27 +0000
   - Summary: NVIDIA Nemotron 3 Ultra is offering leading performance at lower cost than top closed models with the largest and most widely adopted AI agent orchestration platform. LangChain tuned its Deep Agents harness for NVIDIA Nemotron 3 Ultra, achieving the highest accuracy among open models, while completing more tasks at higher throughput and running at 10x [&#8230;]

25. [Profiling in PyTorch (Part 3): Attention is all you profile](https://huggingface.co/blog/torch-attention-profile)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 GMT

26. [Data for Agents](https://huggingface.co/blog/nvidia/open-data-for-agents)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 17:16:05 GMT

27. [Native-speed vLLM transformers modeling backend](https://huggingface.co/blog/native-speed-vllm-transformers-backend)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 08 Jul 2026 00:00:00 GMT

28. [From Hugging Face to Amazon SageMaker Studio in one click](https://huggingface.co/blog/amazon/one-click-to-sagemaker-studio)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 21:15:33 GMT

29. [Hugging Face Models on Foundry Managed Compute](https://huggingface.co/blog/microsoft/foundry-managed-compute)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 15:20:06 GMT

30. [LeRobot v0.6.0: Imagine, Evaluate, Improve](https://huggingface.co/blog/lerobot-release-v060)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Tue, 07 Jul 2026 00:00:00 GMT

31. [PRX Part 4: Our Data Strategy](https://huggingface.co/blog/Photoroom/prx-part4-data)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 15:30:55 GMT

32. [🤗 Kernels: Major Updates](https://huggingface.co/blog/revamped-kernels)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Mon, 06 Jul 2026 00:00:00 GMT

33. [Hugging Face and Cerebras bring Gemma 4 to real-time voice AI](https://huggingface.co/blog/cerebras-gemma4-voice-ai)
   - Source: Hugging Face Blog; Group: Open-source AI; Score: 4.00; Date: Wed, 01 Jul 2026 00:00:00 GMT

34. [AI-integrated models for assessing agricultural resilience](https://arxiv.org/abs/2607.07759)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07759v1 Announce Type: new Abstract: Agricultural supply chains are vulnerable to disruptions through linked biophysical and economic systems. We develop an AI-powered tool that integrates economic models (GTAP) with biophysical models (APSIM) to analyze supply chain shocks, enabling policymakers and market participants to assess cross-disciplinary impacts through queries and responses written in natural language.

35. [Adversarial Social Epistemology for Assemblies of Humans and Large Language Models](https://arxiv.org/abs/2607.07760)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07760v1 Announce Type: new Abstract: We outline an adversarial social epistemology (ASE) for densely interactive communicative landscapes in which public assertions are scaffolded by chains of testimony, inference, institutional certification, and tacit trust. In such landscapes, agents have incentives and affordances to distort, color, omit, fabricate, or strategically under-specify information for private, reputational, rhetorical, or material gains. We argue that these phenomena are not adequately captured by familiar descriptions of epistemic bubbles, echo chambers, or misinformation diffusion. What requires explanation is how communicative agents exploit the commitments and entitlements that normally make scaffolded assertions trustworthy. We provide language that delivers the requisite analysis, outline mechanisms that subvert trust in scaffolded public communications, and outline machinery for auditing and redressing trust breaches arising from subverting the auditability of inferential chains, drawing on epistemic networks, enriched with an inferentialist semantics for interpreting assertions.

36. [Alignment Plausibility: A New Standard for Assuring AI in Healthcare](https://arxiv.org/abs/2607.07766)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07766v1 Announce Type: new Abstract: Large language models (LLMs) have become significant providers of mental health support, yet they remain products of an attention economy whose operational and commercial targets favour sustained engagement over the friction that effective psychological support often requires. Developers' safety responses have been largely reactive, addressing the most visible and acute harms while subtler, longer-term patterns of risk (e.g., dependency, boundary erosion, the amplification of distorted beliefs) receive less attention. We contend that making LLMs structurally safe requires alignment organised at three levels that mirror how society assures the safety of human clinical practice: 1) explicit value specification grounded in the codified normative commitments of clinical practice; 2) training that embeds those values in the model; and 3) oversight that detects drift and longer-term harm during deployment, much as clinical supervision does for human practice. Organising alignment in this way yields a construct we call alignment plausibility - a structured demonstration that a system's values, training regime, and oversight mechanisms are together consistent with safe and positive outcomes. We propose alignment plausibility as a regulatory construct (by drawing analogy to the established construct of biological plausibility) for AI in health: a principled way to argue for, or against, trust that systems are aligned to positive health outcomes, will cause no harm even where capable of doing so, and will ultimately lead to patient benefit.

37. [Idiobionics: The Unification of Privacy and Intelligent Robotic Prostheses](https://arxiv.org/abs/2607.07775)
   - Source: arXiv cs.AI; Group: Research preprints; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07775v1 Announce Type: new Abstract: The human body is at the center of a growing family of technologies designed to tightly and persistently couple biological and digital systems. Robotic prostheses are a representative example of this tight coupling. Also referred to as bionic limbs, robotic prostheses are devices that support people who have lost limbs in pursuing daily life activities such as walking and grasping objects. Bionic limbs are now perceptive and responsive owing to their integration with advanced sensors and artificial intelligence-based control approaches. Consequently, such robotic prostheses can now be viewed as semiautonomous wearable robotic systems that can co-adapt with their users. However, the same sensing and control advancements that increase the capability of robotic prostheses also introduce threat vectors that could be exploited by malicious entities to violate the privacy of users. To fully realize the benefits of next-generation bionic limbs, we maintain it is important to directly understand and address these privacy risks and the barriers they might present to user adoption. This paper therefore introduces a new line of inquiry we term idiobionics to holistically investigate issues at the intersection of privacy and intelligent bionic limbs. As the main contribution of this paper, we define idiobionics, ground it in related literature, and provide preliminary evidence showing and discussing potential adversarial attacks that could exploit intelligent bionic limb designs. We then contribute a curated list of open research questions within idiobionics that are relevant to researchers in wearable robotics and other human-facing autonomous systems. We expect that idiobionics research will help unlock the full potential of robotic prostheses and related bionic devices.

38. [Parallel simulation of rarefied gas flows on unstructured meshes using the DIG-augmented DSMC method](https://arxiv.org/abs/2607.08195)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08195v1 Announce Type: new Abstract: While the direct simulation Monte Carlo (DSMC) is a mainstream stochastic particle method for simulating rarefied gas flows, it incurs excessively high computational costs in the near continuum regime. As a hybrid acceleration approach coupling DSMC with macroscopic synthetic equations, the direct intermittent general synthetic iterative scheme (DIG) delivers fast convergence and asymptotic-preserving characteristics, which effectively alleviate the kinetic scale limitations inherent to standard DSMC. In this study, we develop a parallel DIG augmented DSMC solver for three dimensional rarefied gas flow simulations on unstructured meshes. On top of the standard DSMC algorithms for particle transport and collisions, a reliable intermittent coupling framework is constructed to exchange macroscopic flow data between the stochastic DSMC module and deterministic macroscopic synthetic equations. For parallel execution on unstructured grids, we employ a hybrid MPI architecture equipped with ghost cells to enable local particle tracking and batch inter-rank particle migration. A graph partitioning based dynamic load balancing strategy is also integrated to mitigate uneven particle distribution over computational domains. Numerical results demonstrate that the proposed solver achieves satisfactory agreement with the SPARTA DSMC. Leveraging the fast convergence and asymptotic-preserving properties of the DIG method, the required number of spatial cells and statistical sampling steps are drastically decreased, leading to substantial reductions in computational memory and runtime. This work presents an efficient high-performance numerical tool for high-fidelity simulations of rarefied flows over complex geometries. The code is available in the developer repository at the github link.

39. [Bulk Boundary Condition for Surface Calculations in Density Functional Theory](https://arxiv.org/abs/2607.07894)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07894v1 Announce Type: cross Abstract: We present a bulk boundary condition formalism for surface calculations in Kohn--Sham density functional theory. The approach exploits the nearsightedness of electronic interactions in real space to restrict the calculation to a localized surface region. Within this region, the electron density is evaluated by leveraging the decay of the density matrix, with bulk values imposed on the density and electrostatic potential in the interior, and the electrostatic potential solved subject to bulk boundary conditions. The energy and atomic forces are computed using density-matrix-based expressions. Through representative calculations of surface and adsorption energies, we demonstrate the accuracy and efficiency of the proposed formalism.

40. [Full-Spectrum Quantum Simulation for the Nuclear Shell Model](https://arxiv.org/abs/2607.08235)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 4.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08235v1 Announce Type: cross Abstract: The nuclear shell model is a general way of expressing the many-body nuclear Hamiltonian and deciphering the underlying nuclear structure. In today's era of modern and high-power computation, the primary limitation of the nuclear shell model is the enormous dimensionality of its Hilbert space, which far exceeds available storage capacity and prevents the diagonalization of the full Hamiltonian matrix in that space. Quantum computing offers a scalable solution to bypass this curse of dimensionality. In this work, we introduce a single-run quantum simulation capable of obtaining multiple shell-model eigenstates simultaneously. The nuclear Hamiltonian is transformed from a bit to a qubit basis using the Jordan-Wigner transformation, explicitly preserving fermionic anti-commutation. We employ a Subspace Search Variational Quantum Eigensolver (SSVQE) along with an Adaptive Derivative-Assembled Pseudo-Trotter (ADAPT) ansatz to construct the quantum circuit required to solve the shell-model problem. The ADAPT-SSVQE algorithm uses a symmetry-preserving single and double-excitation operator pool and optimizes a weighted energy sum to obtain the simultaneous convergence of all eigenstates within a targeted MJ subspace, eliminating the need for post-processing efforts to extract excited spectra. We benchmark this approach by solving the problem for two and three identical nucleons in a j = 9/2 orbital, successfully extracting five and ten mutually orthogonal states, respectively, within a 10-qubit active space. The algorithm achieves spectroscopic accuracy, in simulation, relative to exact diagonalization and intrinsically restores total angular momentum (\hat{J}^2) symmetry.

41. [aristoteleo/PantheonOS](https://github.com/aristoteleo/PantheonOS)
   - Source: GitHub repository search; Group: Open source; Score: 3.47; Date: 2026-07-10T15:09:58Z; Popularity: 469 stars
   - Summary: A general, evolvable, and distributed agent framework & harness for data science.

42. [aipoch/medical-research-skills](https://github.com/aipoch/medical-research-skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.39; Date: 2026-07-10T11:34:21Z; Popularity: 1,394 stars
   - Summary: Hundreds of agent skills for medical research, including protocol design, data analysis, evidence insights, and academic writing.

43. [jaechang-hits/SciAgent-Skills](https://github.com/jaechang-hits/SciAgent-Skills)
   - Source: GitHub repository search; Group: Open source; Score: 3.23; Date: 2026-07-10T14:02:46Z; Popularity: 230 stars
   - Summary: 197 bioinformatics & life science skills for Claude Code and AI agents — BixBench 92.0% accuracy. RNA-seq, single-cell, drug discovery, proteomics, and more. Powers OmicsHorizon.

44. [shenmintao/marginalia](https://github.com/shenmintao/marginalia)
   - Source: GitHub repository search; Group: Open source; Score: 3.21; Date: 2026-07-10T14:33:09Z; Popularity: 210 stars
   - Summary: A library-science-inspired personal knowledge management system with LLM agents

45. [Hawary00/AI-Tutor](https://github.com/Hawary00/AI-Tutor)
   - Source: GitHub repository search; Group: Open source; Score: 3.01; Date: 2026-01-29T06:29:22Z; Popularity: 9 stars
   - Summary: AI-Tutor is a modular educational assistant that leverages advanced LLMs and agentic AI workflows to help students learn science and technology. It integrates LangChain for LLM orchestration, LangGraph for agent execution, LangSmith for monitoring and analytics, FAISS for vector-based retrieval, and Gradio for a user-friendly web interface. Student

46. [Aurora 1.5: Extending open foundation models for weather and Earth-system applications](https://www.microsoft.com/en-us/research/blog/aurora-1-5-extending-open-foundation-models-for-weather-and-earth-system-applications/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 09 Jul 2026 16:46:22 +0000
   - Summary: Aurora 1.5 adds 22 more variables, hourly temporal resolution, and probabilistic ensemble forecasting to the Aurora foundation model, making it more useful for real-world weather, climate, and energy applications. The post Aurora 1.5: Extending open foundation models for weather and Earth-system applications appeared first on Microsoft Research .

47. [Understanding the brain with AI-driven explanations and experiments](https://www.microsoft.com/en-us/research/blog/understanding-the-brain-with-ai-driven-explanations-and-experiments/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Thu, 25 Jun 2026 16:00:00 +0000
   - Summary: Researchers introduce generative causal testing, which translates black box models into clear hypotheses and verifies them in the scanner, revealing what specific brain regions respond to in language. The post Understanding the brain with AI-driven explanations and experiments appeared first on Microsoft Research .

48. [Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis](https://www.microsoft.com/en-us/research/blog/talos-scaling-rare-disease-diagnosis-with-automated-iterative-genomic-reanalysis/)
   - Source: Microsoft Research Blog; Group: AI research labs; Score: 3.00; Date: Wed, 24 Jun 2026 14:00:14 +0000
   - Summary: Talos was built to help resolve a major bottleneck in genomic medicine: human review time. The open-source system recovered 90% of in-scope diagnoses while surfacing just 1.3 candidate variants per patient for expert review. The post Talos: Scaling rare disease diagnosis with automated, iterative genomic reanalysis appeared first on Microsoft Research .

49. [LLT: Local Linear Transformer for PDE Operator Learning](https://arxiv.org/abs/2607.07718)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07718v1 Announce Type: new Abstract: Neural operators have become a common approach for learning PDE solution maps and accelerating numerical simulations. Transformer-based neural operators are of particular interest, since attention can learn long-range dependencies in the computational domain. However, standard attention has two major limitations when applied to PDEs: it scales quadratically with the number of computational nodes, and it lacks an explicit bias toward local interactions. To address these issues, we introduce Local Linear Transformer (LLT) for PDE operator learning. The architecture combines linear global attention with local spatial mixing, and incorporates coordinate and geometry information. We evaluate LLT on several PDE problems, including elasticity, plasticity, airfoil flow, pipe flow, and Darcy flow. The reference data for these problems span finite-element, finite-volume, and finite-difference discretizations on structured and unstructured meshes. Compared with other neural-operator and transformer baselines from prior studies, LLT achieves competitive or lower relative $L_2$ error across these problems. On matched structured discretizations, wall-clock time per training iteration is reduced by factors of 1.8 to 2.5 relative to Transolver. We also scale the approach and apply it to a three-dimensional car aerodynamics dataset with 32,186 unstructured mesh points per sample. Together, these results indicate that LLT provides an accurate and computationally efficient operator for PDE problems across discretizations, mesh types, and problem settings.

50. [ReCoLoRA: Spectrum-Aware Recursive Consolidation for Continual LLM Fine-Tuning](https://arxiv.org/abs/2607.07719)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07719v1 Announce Type: new Abstract: Parameter-efficient fine-tuning adapts a large language model to one task cheaply, but across a task sequence LoRA-style methods keep stacking low-rank updates on the same frozen weight, so each new task tends to overwrite the previous ones. We present ReCoLoRA (Recursive Consolidation of Low-Rank Adapters), a spectrum-aware framework for continual fine-tuning: adapters are initialized from a randomized SVD of the pretrained weight, per-layer effective ranks are selected by an elbow criterion, and the principal subspace is adapted before residual capacity is opened. Before each new task, ReCoLoRA re-decomposes the current effective weight, rather than the original one, into a frozen residual, a slowly updated principal component, and a fresh adapter (recursive consolidation), so every task starts from the model that has already absorbed its predecessors. On a six-task continual GLUE sequence over four 7-8B backbones, ReCoLoRA attains the best final average score on three of the four backbones against rank-swept LoRA, PiSSA, AdaLoRA, and DoRA baselines while training fewer parameters; an oracle-routed task-bank variant serves as an upper bound under full task isolation. Code: https://github.com/bhqy666/ReCoLoRA.

51. [LiST: Lipschitz Scaling Training for Robust and Calibrated Neural Networks](https://arxiv.org/abs/2607.07745)
   - Source: arXiv cs.LG; Group: Research preprints; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07745v1 Announce Type: new Abstract: While accuracy, robustness, and calibration are all essential for reliable neural networks, they are often studied separately; developing models that satisfy all three simultaneously remains a central challenge. Lipschitz-constrained models guarantee robustness by design, yet the manual selection of the Lipschitz constraint L governs the resulting accuracy-robustness trade-off, and their calibration properties remain largely underexplored. In this work, we highlight a theoretical and empirical link between the enforced Lipschitz constraint and Temperature Scaling, a state-of-the-art calibration method. Specifically, we find that for a given training scheme, there exists a non-trivial value L* that yields an out-of-the-box calibrated network, and that calibration acts as a principled criterion to select a well-defined operating point on the accuracy-robustness Pareto front. Leveraging these insights, we introduce Lipschitz Scaling Training (LiST), a novel training paradigm that iteratively adjusts the global Lipschitz constant to reach this operating point. Through a margin parameter in the training loss, LiST further enables the construction of a fully calibrated Pareto front, allowing users to navigate the accuracy-robustness trade-off while remaining calibrated throughout. At convergence, LiST also enables the reintegration of calibration data into training, improving sample efficiency without sacrificing calibration. We validate LiST on CIFAR-10/100 and Tiny-ImageNet, demonstrating competitive accuracy and robustness against constrained and unconstrained baselines, while remaining calibrated out of the box. Code is available at GitHub.

52. [A Puck-informed mode-resolved phase-field fatigue framework for unidirectional composites](https://arxiv.org/abs/2607.07977)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07977v1 Announce Type: new Abstract: Fatigue fracture in unidirectional fibre-reinforced composites is strongly mode dependent: transverse and off-axis cycling is governed by matrix and inter-fibre mechanisms, whereas fibre-aligned cycling activates a longitudinal channel with a higher fracture-energy scale and a different crack topology. Single-damage-variable models can fit global stiffness loss but cannot identify the active mechanism. This work proposes a Puck-informed, mode-resolved phase-field fatigue framework with separate channels for fibre-dominated and matrix/inter-fibre fatigue. Each channel has its own fatigue history, threshold, and resistance-degradation law. Fatigue does not directly degrade elastic stiffness; it lowers the fracture resistance of the active channel, while the corresponding phase field controls stiffness loss and crack-path evolution. The formulation is implemented in Abaqus/Standard using a compact UMAT-UEL architecture with one orthotropic mechanical routine and two scalar phase-field layers. Using one fixed IM7/8552 material and fatigue card, the model is verified through one-element tests, parameter sweeps, and centred-notch and open-hole tension cases at 0, 45, and 90 degrees under monotonic and cyclic loading. Without orientation- or geometry-specific tuning, the framework reproduces transverse matrix/inter-fibre cracking at 90 degrees, off-axis cracking at 45 degrees, and longitudinal matrix splitting with delayed fibre activation at 0 degrees. The fatigue lives follow the expected ordering: 45- and 90-degree cases fail within about 1,000 cycles, while 0-degree cases run out to 200,000 cycles without fibre cracking. Additional load, hole-size, mesh, length-scale, and cycle-block studies confirm consistent crack modes and converged trends. The study is a numerical verification and cross-geometry consistency assessment, not a calibrated experimental life-prediction claim.

53. [Learned Committors as Reaction Coordinates for Nucleation Rates](https://arxiv.org/abs/2607.08207)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08207v1 Announce Type: new Abstract: A central challenge in the analysis of first-order phase transitions is the identification of optimal reaction coordinates. In principle, the committor is the ideal choice; however, its computational cost has historically made it intractable. Here, we train a convolutional neural network ($p_B$-NN) as a proxy for the committor on brute-force committor labels and use it directly as the coordinate of a Markov state model. Applied to magnetisation reversal in the two-dimensional Ising model, $p_B$-NN reproduces brute-force nucleation rates across a range of thermodynamic conditions. The largest geometric cluster size also recovers accurate rates despite providing a poor pointwise predictor of the committor. These results demonstrate that an effective reaction coordinate for nucleation rate calculation must reliably separate the metastable and stable basins, but need not preserve the committor pointwise for every microstate. We stress that this distinction has direct implications for the choice of collective variable in rare-event simulations of nucleation more broadly.

54. [Repurposing acquisition devices into trigger-based timing synchronization of breakdown events during MITICA high voltage holding experiments](https://arxiv.org/abs/2607.08501)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08501v1 Announce Type: new Abstract: A critical requirement for MITICA -- a full-scale prototype of the heating Neutral Beam Injectors hosted at the Consorzio RFX Neutral Beam Test Facility for the ITER experiment -- is the capability to withstand a continuous voltage of 1MV across the vacuum gaps insulating the beam source from the grounded vessel. To validate such feature, a dedicated voltage-holding test campaign was conducted throughout 2024 and 2025 using a full-scale mock-up of the beam source. The tests also involved an accurate characterization of the associated breakdown events: vacuum dielectric failures which result in rapid potential drops and generate strong current discharges. This contribution will present a relative time reconstruction architecture based on cost-effective, embedded RedPitaya (Zynq-7000 FPGA) devices repurposed as timing hubs. These nodes function as configurable trigger multiplexers while simultaneously recording trigger signals as transients to facilitate the offline reconstruction of event sequences. The method allows self-calibration through measuring the static intrinsic delays of the optical fibers and internal logics, generating delay offsets to synchronize acquired waveforms across a sparse, connected-graph topology of both acquisition devices and hubs themselves.

55. [Kime-Representation Formulations of Three Open Problems in the Foundations of Classical Mechanics: Uncertainty, Invariant Entropy, and Directional Degrees of Freedom](https://arxiv.org/abs/2607.07851)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.07851v1 Announce Type: cross Abstract: We give mathematically self-contained formulations, in the complex-time (kime) representation, of three open problems from the foundations of classical mechanics: (I) the extension of the classical entropic uncertainty principle to non-canonical variables and to multiple degrees of freedom; (II) the characterization of coordinate-invariant measures and entropies, i.e., the question of why continuous physical quantities must be paired for an invariant entropy to exist; and (III) the construction of a classical relativistic directional degree of freedom (a classical analogue of a spin-1/2 system). Throughout, the kime phase is interpreted {statistically as a latent circular random variable whose law \Phi models the intrinsic trial-to-trial variability of repeated, identically controlled experiments indexed by the kime magnitude. The mathematical bridge is an exact symplectic identification of the kime cone with the action-angle chart of a one-degree-of-freedom phase space, under which the kime measure is the Liouville measure and the phase law becomes the angular conditional of a Liouville density. Specifically, we (i) prove a sharp entropic uncertainty relation on the kime cylinder whose extremal family is von Mises x Gaussian, together with a sharp circular Fisher-information inequality saturated exactly by von Mises laws; (ii) prove an exact non-canonical uncertainty relation in which the correction term is the geometric mean of the Poisson bracket, clarifying the conjectured role of the expected bracket; (iii) prove aggregate multi-degree-of-freedom bounds via the Williamson normal form and Fischer's inequality, and isolate the per-degree-of-freedom refinement as a precise open problem of symplectic Schur-Horn type; (iv) prove that diffusion of the kime phase produces monotone entropy growth with the equipartitioned (Haar-uniform) phase law.

56. [Bond, orbital and spin order in d4/d6/d7 perovskite oxides: successes and limitations of foundation interatomic potentials](https://arxiv.org/abs/2607.08351)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08351v1 Announce Type: cross Abstract: Foundation machine-learning interatomic potentials (MLIPs) are rapidly replacing density-functional theory (DFT) for modeling structure and nuclear dynamics, making their fidelity in strongly correlated systems an urgent question. We test three foundation potentials on the low-temperature order of three correlated, isostructural ABO3 perovskite oxides: LaMnO3 (d4), LaCoO3 (d6), and NdNiO3 (d7). We run molecular dynamics for 1 ns on 80- and 160-atom supercells from 50 to 300 K with no system-specific training. These oxides expose three distinct classes of low-temperature order that define a hierarchy of difficulty for the potentials. The scalar class, represented by NdNiO3, has a simple geometric fingerprint and is captured. The vector class, represented by LaMnO3, requires identifying which Cartesian axis carries the long bond at each site, and is captured in magnitude but not in symmetry. The on-site class, represented by the low-spin to high-spin crossover in LaCoO3, is a purely local multiplet population shift with no spatial order parameter and remains inaccessible to present-day MLIPs.

57. [Bright and Dark Excitons in CrSBr: Local Ligand-Field Character and Band-Coherent Optical Selection Rules](https://arxiv.org/abs/2607.08355)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08355v1 Announce Type: cross Abstract: Magnetic van der Waals semiconductors such as CrSBr host an intricate exciton landscape whose physical interpretation has converged only recently. A many-body Feynman diagrammatic approach based on quasiparticle self-consistent GW with electron-hole ladder vertex corrections to the screened Coulomb interaction has established the electronic band gap, excitonic orbital character, real-space extent, binding energies, and bosonic-coupling signatures of the bright XA exciton near 1.34 eV and the higher XB manifold near 1.8 eV. These results agree well with ARPES and magneto-optical experiments and supersede the early Rydberg-like assignment of the excitons. What has remained unresolved is why these intense bright excitons coexist, within a few tens of meV, with companion states that are several orders of magnitude darker despite drawing from essentially the same single-particle transition manifold. Here we show that brightness is a band-coherent property of the excitonic eigenfunctions: bright and dark partners are sublattice-symmetric and sublattice-antisymmetric superpositions of the same ligand-field-like Bloch transitions across the two Cr atoms of the orthorhombic primitive cell. The commonly used Frenkel and Wannier-Mott labels describe what an exciton is made of, but brightness requires a symmetry-adapted interference rule between transition dipoles. Disentangling this bare excitonic structure is a prerequisite for interpreting the optical response of CrSBr once magnon, phonon, and photon couplings are included.

58. [Optimal-Transport-Based Cell Resampling for Negative and Pathological Event Weights](https://arxiv.org/abs/2607.08723)
   - Source: arXiv physics.comp-ph; Group: Scientific computing; Score: 3.00; Date: Fri, 10 Jul 2026 00:00:00 -0400
   - Summary: arXiv:2607.08723v1 Announce Type: cross Abstract: Negative and pathologically large Monte Carlo event weights strain the computing budgets of experiments at the Large Hadron Collider. Cell resampling algorithms locally redistribute event weights among nearby events in a metric space. We study the performance of metrics defined in terms of Optimal Transport, namely the Energy Mover's Distance and a spectral variant, in the context of such algorithms. As these metrics are insensitive to the addition of soft and collinear radiation, they may be applied directly to particles at any stage of event generation. When applied to samples simulated at next-to-leading-order in quantum chromodynamics, this approach reduces the observed bias relative to other cell resampling techniques presented in the literature. We also study the Cross-Section Mover's Distance as an unbinned, broadly-applicable figure of merit for quantifying the bias introduced by any full-phase-space reweighting.

59. [ustc-ai4science/Science-Star](https://github.com/ustc-ai4science/Science-Star)
   - Source: GitHub repository search; Group: Open source; Score: 2.75; Date: 2026-05-13T01:49:38Z; Popularity: 748 stars
   - Summary: Science-Star: A Platform for Building, Extending, and Experimenting with Scientific Agents.

60. [mims-harvard/AutoScientists](https://github.com/mims-harvard/AutoScientists)
   - Source: GitHub repository search; Group: Open source; Score: 2.69; Date: 2026-07-10T11:50:34Z; Popularity: 691 stars
   - Summary: AutoScientists: Self-Organizing Agent Teams for Long-Running Scientific Experimentation

61. [Future-House/robin](https://github.com/Future-House/robin)
   - Source: GitHub repository search; Group: Open source; Score: 2.61; Date: 2026-07-10T13:16:27Z; Popularity: 613 stars
   - Summary: Robin: A multi-agent system for automating scientific discovery

62. [ai4s-research/ai4s-skills](https://github.com/ai4s-research/ai4s-skills)
   - Source: GitHub repository search; Group: Open source; Score: 2.14; Date: 2026-07-10T14:21:05Z; Popularity: 137 stars
   - Summary: Open-source agent skills for AI for Science: topic exploration, literature survey, experiments, paper writing, and integrity audit — driven by any coding agent.

63. [Liam-Frost/AutoApply](https://github.com/Liam-Frost/AutoApply)
   - Source: GitHub repository search; Group: Open source; Score: 2.10; Date: 2026-07-09T18:33:53Z; Popularity: 101 stars
   - Summary: A personal job application AI Agent for job discovery, fit scoring, tailored materials, form filling, human-gated submission and application tracking.

64. [AI-as-Infrastructure/aiinfra-atlas](https://github.com/AI-as-Infrastructure/aiinfra-atlas)
   - Source: GitHub repository search; Group: Open source; Score: 2.01; Date: 2026-06-11T23:18:06Z; Popularity: 6 stars
   - Summary: A test harness for the evaluation of Large Language Model (LLM) Retrieval Augmented Generation (RAG) for Humanities & Social Science (HASS) research. ATLAS is a deliverable of the AI as Infrastructure (AIINFRA) project.

65. [QuantaScriptor/QGAN_Project](https://github.com/QuantaScriptor/QGAN_Project)
   - Source: GitHub repository search; Group: Open source; Score: 2.00; Date: 2025-10-15T10:48:31Z; Popularity: 5 stars
   - Summary: An advanced AI application integrating quantum computing capabilities with deep learning frameworks to create powerful hybrid classical-quantum AI models. This technology aims to unlock new applications in fields such as chemistry, materials science, drug discovery, finance, and cryptography.

## LinkedIn Draft

I am watching one practical AI-for-science pattern today:

Agentic AI and Retrieval-Augmented Models in Straight-Through Underwriting

My read: the useful question is whether this makes one scientific step more
reliable, traceable, or easier to evaluate.

For SciencesLoop, I would test this on a known problem first, then inspect the
retrieved evidence, tool calls, and failure modes before trusting it.

Source: https://arxiv.org/abs/2607.07858

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
