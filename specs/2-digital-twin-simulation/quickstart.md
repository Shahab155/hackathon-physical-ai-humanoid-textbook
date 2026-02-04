# Quickstart Guide: Module 2 – The Digital Twin (Gazebo & Unity)

**Feature**: Module 2 – The Digital Twin (Gazebo & Unity)
**Date**: 2026-02-04
**Prerequisites**: Basic knowledge of Python and ROS 2 concepts

## Setup Docusaurus Environment

1. **Verify Prerequisites**:
   ```bash
   # Ensure Node.js (v18+) and npm are installed
   node --version
   npm --version
   ```

2. **Navigate to Documentation Directory** (assuming Docusaurus is already set up):
   ```bash
   cd frontend  # or wherever the Docusaurus project is located
   ```

3. **Install Additional Dependencies** (if needed):
   ```bash
   npm install
   ```

## Project Structure

```
frontend/  # or your Docusaurus project directory
├── docs/
│   └── module-2/
│       ├── intro.md
│       ├── chapter-1-gazebo-basics.md
│       ├── chapter-2-sensor-simulation.md
│       └── chapter-3-unity-virtual-environments.md
├── src/
├── static/
├── docusaurus.config.js
├── package.json
└── sidebars.js
```

## Building and Running

1. **Start Development Server**:
   ```bash
   npm start
   ```
   This opens a browser window at http://localhost:3000 with live reloading.

2. **Build for Production**:
   ```bash
   npm run build
   ```
   Generates static files in `build/` directory.

3. **Serve Production Build Locally**:
   ```bash
   npm run serve
   ```

## Adding Module Content

1. **Create Module Directory**:
   ```bash
   mkdir -p docs/module-2
   ```

2. **Create Chapter Files**:
   ```bash
   touch docs/module-2/intro.md
   touch docs/module-2/chapter-1-gazebo-basics.md
   touch docs/module-2/chapter-2-sensor-simulation.md
   touch docs/module-2/chapter-3-unity-virtual-environments.md
   ```

3. **Update Sidebar Navigation** (`sidebars.js`):
   ```javascript
   // Add to the tutorialSidebar array
   {
     type: 'category',
     label: 'Module 2 - The Digital Twin (Gazebo & Unity)',
     items: [
       'module-2/intro',
       'module-2/chapter-1-gazebo-basics',
       'module-2/chapter-2-sensor-simulation',
       'module-2/chapter-3-unity-virtual-environments'
     ],
   },
   ```

## Writing Effective Educational Content

### Best Practices

- Focus on conceptual understanding rather than complex implementation details
- Connect simulation concepts to real-world robot behavior
- Use clear, concise language appropriate for students familiar with Python and ROS 2
- Structure content with progressive complexity (basic → advanced)
- Provide clear explanations of how simulation bridges digital models with real-world behavior

### Content Structure

Each chapter should follow this general structure:
1. Learning objectives
2. Introduction/context
3. Main content with examples
4. Key takeaways
5. Optional exercises/thought experiments

## Validation Steps

1. Verify all links work correctly
2. Check that all content renders properly in Docusaurus
3. Ensure navigation between chapters is intuitive
4. Confirm content meets learning objectives defined in the specification
5. Test responsiveness on different screen sizes
6. Validate that no complex installation procedures or advanced scripting are included