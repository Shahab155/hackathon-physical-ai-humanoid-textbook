---
id: 1
title: "Update Project Constitution"
stage: constitution
date_iso: 2026-02-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: ai-spec-book
branch: master
user: user
command: /sp.constitution
labels:
  - constitution
  - setup
  - governance
files_yaml:
  - .specify/memory/constitution.md
tests_yaml: []
link_spec: null
link_ticket: null
link_adr: null
link_pr: null
---

# Prompt History Record

## Outcome
Created initial project constitution for AI-Spec–Driven Technical Book with Integrated RAG Chatbot

## Evaluation
Constitution successfully created with all required principles and governance structures

## Prompt Text
```
/sp.constitution

Project: AI-Spec–Driven Technical Book with Integrated RAG Chatbot

Overview:
Create a production-ready technical book using Spec-Kit Plus and Claude Code,
published with Docusaurus and deployed to GitHub Pages. Embed a RAG chatbot that
answers questions strictly from the book content or user-selected text.

Core Principles:
- Spec-driven and reproducible development
- Accuracy, consistency, and zero hallucination
- Clear separation of content, backend, and AI logic
- Security-first and privacy-aware design

Content Rules:
- Technically correct, beginner-to-intermediate friendly
- Progressive learning flow (basics → advanced)
- Consistent terminology across chapters
- Realistic, runnable examples
- No invented APIs, facts, or libraries

Book Architecture Rules:
- Docusaurus must be used as the documentation framework
- Each chapter must map to a clear folder and markdown file structure
- Sidebar navigation must reflect logical learning progression
- Code examples must be isolated and clearly labeled
- No content should be placed in the project root unintentionally

AI & Spec Compliance:
- Follow Spec-Kit Plus templates strictly
- No speculative changes without spec approval
- Maintain backward compatibility unless stated

RAG Chatbot Rules:
- Answers only from indexed book content or selected text
- No external knowledge leakage
- Deterministic retrieval with content references
- Vector DB: Qdrant Cloud (Free Tier)

Backend Constraints:
- FastAPI backend
- Neon Serverless Postgres
- OpenAI Agents
- Stateless, cloud-ready deployment
- No hard-coded secrets

Quality & Safety:
- Valid markdown and code only
- Graceful failure on insufficient context
- Input validation and rate limiting
- Zero silent errors

Constraints:
- Markdown + TypeScript/Python
- GitHub Pages hosting
- Free-tier infrastructure only

Success Criteria:
- Docusaurus builds successfully
- Site deploys on GitHub Pages
- Chatbot answers accurately from book content
- No spec violations or hallucinations

Governance:
- Constitut
```

## Response Text
Created a comprehensive project constitution with the following key sections:
- Core Principles (Spec-Driven Development, Accuracy, Separation of Concerns, Security-First, Production-Ready Documentation, Docusaurus-Centric Architecture)
- Backend and Infrastructure Constraints
- AI & Spec Compliance Standards
- Quality & Safety Requirements
- Development Workflow
- Governance

The constitution is stored in .specify/memory/constitution.md with version 1.0.0, ratified on 2026-02-04.