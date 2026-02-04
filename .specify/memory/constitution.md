<!--
Sync Impact Report:
- Version change: N/A -> 1.0.0
- Modified principles: None (new constitution)
- Added sections: All sections added for the AI-Spec–Driven Technical Book project
- Removed sections: None (new constitution)
- Templates requiring updates: ⚠ pending - .specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# AI-Spec–Driven Technical Book with Integrated RAG Chatbot Constitution

## Core Principles

### I. Spec-Driven and Reproducible Development
Every change starts with clear specifications; All development follows reproducible patterns; No speculative implementations without spec approval - specifications must precede implementation.

### II. Accuracy, Consistency, and Zero Hallucination
All content must be technically correct with no fabricated information; Content maintains consistent terminology across all chapters; The RAG chatbot must only provide answers from indexed book content - no external knowledge leakage.

### III. Clear Separation of Concerns
Content, backend, and AI logic must be clearly separated and independently manageable; Docusaurus handles frontend presentation while FastAPI manages backend services; Each component must be independently deployable and testable.

### IV. Security-First and Privacy-Aware Design
No hard-coded secrets or tokens in codebase; All sensitive configurations must use secure environment variables; User data and privacy must be protected with appropriate security measures implemented.

### V. Production-Ready Technical Documentation
Content must be beginner-to-intermediate friendly with progressive learning flow; Each chapter must map to clear folder and markdown file structure; All code examples must be realistic, runnable, and properly isolated.

### VI. Docusaurus-Centric Architecture
Docusaurus must be used as the primary documentation framework; Sidebar navigation must reflect logical learning progression; Each chapter maps to clear folder and markdown file structure with proper organization.

## Backend and Infrastructure Constraints

FastAPI backend with Neon Serverless Postgres for data storage; OpenAI Agents integration for RAG functionality; Vector DB: Qdrant Cloud (Free Tier) for document indexing; Stateless, cloud-ready deployment architecture; Follow free-tier infrastructure limitations strictly.

## AI & Spec Compliance Standards

Follow Spec-Kit Plus templates strictly without deviation; No speculative changes without spec approval; Maintain backward compatibility unless explicitly stated; All changes must follow Spec-Driven Development practices.

## Quality & Safety Requirements

Only valid markdown and code allowed in repository; Systems must fail gracefully when insufficient context is available; Implement input validation and rate limiting; Ensure zero silent errors in production systems.

## Development Workflow

All development follows the Spec-Kit Plus methodology with clear specs, plans, and tasks; Each feature must have corresponding testable tasks in tasks.md; Changes must be validated against Docusaurus build process; GitHub Pages deployment must be verified before merging.

## Governance

This constitution governs all project decisions and supersedes any conflicting practices; All amendments must be documented with proper versioning and approval; Code reviews must verify compliance with all constitutional principles; Use official Spec-Kit Plus templates for all project artifacts.

**Version**: 1.0.0 | **Ratified**: 2026-02-04 | **Last Amended**: 2026-02-04