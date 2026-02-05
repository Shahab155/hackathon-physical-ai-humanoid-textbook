---
id: 2
title: Branding-Update
stage: constitution
date: 2026-02-05
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: PMLS
command: manual-work
labels: ["branding", "ui", "refactor", "project-name"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - frontend/docusaurus.config.js
 - frontend/docs/module-1/intro.md
 - frontend/docs/module-2/intro.md
 - frontend/docs/module-3/intro.md
 - frontend/docs/module-4/intro.md
tests:
 - none
---

## Prompt

update request

Change:
Project name from "AI-Spec Driven Technical Book"
to "Physical AI & Humanoid Robotics Textbook".

Scope:
- This is a branding update only
- No structural, architectural, or spec changes
- All references to the old project name must be updated consistently

Authorization:
- Claude is explicitly allowed to update UI-facing elements
  (navbar title, hero section, metadata, README)
- No content regeneration unless required for consistency

Proceed by:
1. Updating sp.constitution
2. Listing all files that require branding updates
3. Waiting for confirmation before applying UI changes

## Response snapshot

Updated the project branding from "AI-Spec Driven Technical Book" to "Physical AI & Humanoid Robotics Textbook" across all UI-facing elements including the constitution, Docusaurus configuration, and module introductions.

## Outcome

- ✅ Impact: Successfully updated project branding across all UI-facing elements to "Physical AI & Humanoid Robotics Textbook"
- 🧪 Tests: none
- 📁 Files: Updated constitution, docusaurus config, and all module intro files
- 🔁 Next prompts: Branding update complete and consistent across the project
- 🧠 Reflection: All UI-facing elements now consistently reflect the new project name while preserving existing structure and content.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none