---
id: 1
title: "Vercel Deployment Fix for Docusaurus Site"
stage: "green"
date_iso: "2026-02-05"
surface: "agent"
model: "claude-sonnet-4-5-20250929"
feature: "none"
branch: "main"
user: "user"
command: "Deployment issue recovery request (Docusaurus + Vercel)"
labels: ["deployment", "vercel", "docusaurus", "configuration"]
link_spec: null
link_ticket: null
link_adr: null
link_pr: null
files_yaml: |
  - D:/book/vercel.json
  - D:/book/frontend/docusaurus.config.js
tests_yaml: |
  - "Manual verification of Vercel deployment configuration"
prompt_text: |
  Deployment issue recovery request (Docusaurus + Vercel)

  Context:
  This project is a Docusaurus-based static site:
  "Physical AI & Humanoid Robotics Textbook"

  Status:
  - Site builds and runs correctly locally
  - Deployed to Vercel but returns 404 NOT_FOUND on root URL
  - Codebase is already pushed to GitHub
  - No content or module changes are required

  Task:
  Fix the Vercel deployment configuration so the Docusaurus site
  serves correctly.

  Instructions:
  1. Treat this as a static Docusaurus deployment (NOT Next.js)
  2. Identify required changes for:
     - Vercel build command
     - Vercel output directory
     - Docusaurus baseUrl / trailingSlash if needed
  3. Generate:
     - vercel.json (if required)
     - Any minimal config updates needed
  4. Do NOT regenerate content
  5. Do NOT modify modules or specs
  6. Preserve existing folder structure

  After analysis:
  - Explain the root cause
  - Apply the fix
  - List all files changed
response_text: |
  Root Cause: The Docusaurus site was configured for GitHub Pages deployment with GitHub-specific settings in `docusaurus.config.js` and lacked proper Vercel configuration. Vercel didn't know how to build and serve the Docusaurus site properly, resulting in a 404 error.

  Applied fixes:
  1. Created vercel.json to configure Vercel's build process:
     - Uses @vercel/static-build for static site generation
     - Sets distDir to "build" (where Docusaurus outputs static files)
     - Configures rewrites to serve all routes from index.html (important for SPA routing)
     - Adds GitHub integration settings

  2. Updated docusaurus.config.js:
     - Removed GitHub Pages specific settings (organizationName, projectName)
     - Updated URL to reflect Vercel deployment
     - Added trailingSlash: false for consistent behavior
     - Kept baseUrl as '/' for root path deployment

  Files changed:
  - D:/book/vercel.json (created)
  - D:/book/frontend/docusaurus.config.js (updated)

  These changes should resolve the 404 issue by properly configuring Vercel to build the Docusaurus site and handle client-side routing correctly.
outcome: |
  Successfully configured Vercel deployment for Docusaurus site by creating proper vercel.json configuration and updating Docusaurus settings to work with Vercel instead of GitHub Pages.
evaluation: |
  The deployment configuration should now properly build and serve the Docusaurus site on Vercel, resolving the 404 error. Manual verification would involve deploying to Vercel and confirming the site loads correctly.
---
