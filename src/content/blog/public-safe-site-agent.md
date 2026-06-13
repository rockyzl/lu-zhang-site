---
title: "A Public-Safe Site Agent as a Portfolio Interface"
description: "Why a personal technical site can be more useful when the homepage becomes a small, cited, public-safe agent."
date: "2026-06-12"
lang: "en"
status: "implementation note"
featured: true
tags:
  - site agent
  - portfolio
  - public-safe AI
  - ScientificLoop
---

Most portfolio sites are organized as pages: about, projects, publications, contact. That works for browsing, but it makes the visitor do the mapping from intent to evidence.

A public-safe site agent can make the portfolio more useful without connecting to private files. The agent only needs a bounded corpus: public pages, publication metadata, patent records, project summaries, talks, collaborators, and selected public links.

The important constraint is safety. The agent should not imply access to private records, employer-internal material, job applications, or unpublished work. It should answer only from the public corpus and show citations when possible.

That creates a different kind of interface:

- A recruiter can ask for a concise AI for Science summary.
- A scientist can ask which publications or projects are most relevant.
- A collaborator can ask about redox-flow battery background.
- A visitor can be routed to the right page instead of scanning the whole site.

The site agent is not meant to be a general-purpose assistant. It is a narrow public interface over a professional knowledge graph. That makes it easier to evaluate and safer to deploy.
