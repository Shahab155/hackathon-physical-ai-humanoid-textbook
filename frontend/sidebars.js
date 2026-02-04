// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1 - The Robotic Nervous System (ROS 2)',
      items: [
        {
          type: 'doc',
          id: 'module-1/intro',
          label: 'Introduction'
        },
        {
          type: 'doc',
          id: 'module-1/chapter-1-ros2-foundations',
          label: 'Chapter 1 - ROS 2 Foundations: The Robotic Nervous System'
        },
        {
          type: 'doc',
          id: 'module-1/chapter-2-nodes-topics-services',
          label: 'Chapter 2 - Nodes, Topics, and Services: The Communication Protocols'
        },
        {
          type: 'doc',
          id: 'module-1/chapter-3-urdf-humanoids',
          label: 'Chapter 3 - URDF for Humanoids: Describing Robot Structure'
        }
      ],
    },
    {
      type: 'category',
      label: 'Module 2 - The Digital Twin (Gazebo & Unity)',
      items: [
        {
          type: 'doc',
          id: 'module-2/intro',
          label: 'Introduction'
        },
        {
          type: 'doc',
          id: 'module-2/chapter-1-gazebo-basics',
          label: 'Chapter 1 - Gazebo Basics: Simulating Reality'
        },
        {
          type: 'doc',
          id: 'module-2/chapter-2-sensor-simulation',
          label: 'Chapter 2 - Sensor Simulation: Virtual Sensing Concepts'
        },
        {
          type: 'doc',
          id: 'module-2/chapter-3-unity-virtual-environments',
          label: 'Chapter 3 - Unity Virtual Environments: Creating Interactive Spaces'
        }
      ],
    },
    {
      type: 'category',
      label: 'Module 3 - The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        {
          type: 'doc',
          id: 'module-3/intro',
          label: 'Introduction'
        },
        {
          type: 'doc',
          id: 'module-3/chapter-1-isaac-sim-overview',
          label: 'Chapter 1 - Isaac Sim: Training in a Virtual World'
        },
        {
          type: 'doc',
          id: 'module-3/chapter-2-isaac-ros-perception',
          label: 'Chapter 2 - Isaac ROS: Perception & VSLAM'
        },
        {
          type: 'doc',
          id: 'module-3/chapter-3-nav2-humanoid-navigation',
          label: 'Chapter 3 - Navigation: Humanoid Robot Concepts'
        }
      ],
    },
    {
      type: 'category',
      label: 'Module 4 - Vision-Language-Action (VLA)',
      items: [
        {
          type: 'doc',
          id: 'module-4/intro',
          label: 'Introduction'
        },
        {
          type: 'doc',
          id: 'module-4/chapter-1-vla-foundations',
          label: 'Chapter 1 - VLA Foundations: The Paradigm Explained'
        },
        {
          type: 'doc',
          id: 'module-4/chapter-2-voice-to-action',
          label: 'Chapter 2 - Voice-to-Action: Natural Language Interfaces'
        },
        {
          type: 'doc',
          id: 'module-4/chapter-3-llm-cognitive-planning',
          label: 'Chapter 3 - LLM Cognitive Planning: Intelligent Decision Making'
        },
        {
          type: 'doc',
          id: 'module-4/chapter-4-capstone-autonomous-humanoid',
          label: 'Chapter 4 - Capstone: Autonomous Humanoid Systems'
        }
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
