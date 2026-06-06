// skills.js — data source for the Skills section
// Each category groups related skills so they render in organised columns

// React Icons imports — these string values map to icon component names used in Skills.jsx
// The actual icon components are imported directly in Skills.jsx

export const skillCategories = [
  {
    id: 'design',                             // Unique key for the category block
    title: 'Design',                          // Section heading
    icon: '🎨',                               // Emoji shown next to heading
    skills: [
      { name: 'UI Design',            level: 95 }, // level = proficiency percentage (used for bar width)
      { name: 'UX Research',          level: 90 },
      { name: 'Figma',                level: 95 },
      { name: 'Prototyping',          level: 88 },
      { name: 'Design Systems',       level: 82 },
      { name: 'Information Architecture', level: 85 },
      { name: 'User Testing',         level: 80 },
      { name: 'Wireframing',          level: 92 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'HTML',       level: 90 },
      { name: 'CSS',        level: 88 },
      { name: 'JavaScript', level: 75 },
      { name: 'React',      level: 72 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    id: 'process',
    title: 'Process & Strategy',
    icon: '🧠',
    skills: [
      { name: 'Product Thinking',           level: 88 },
      { name: 'Agile / Scrum',              level: 80 },
      { name: 'Stakeholder Communication',  level: 85 },
      { name: 'Design Critique',            level: 82 },
      { name: 'Competitor Analysis',        level: 78 },
    ],
  },
]

// Tool tags displayed as pills in a separate "toolbox" row (inspired by Joseph Emmanuel's portfolio)
export const tools = [
  'Figma', 'FigJam', 'Framer', 'Notion', 'Jitter',
  'VS Code', 'Git', 'React', 'Tailwind CSS', 'Lottie',
]
