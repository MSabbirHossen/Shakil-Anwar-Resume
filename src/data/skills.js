/**
 * Shakil Anwar - Technical Skills Data
 * Source of truth: index.html
 */
export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "PHP", core: true, proficiency: "Expert" },
      { name: "JavaScript", core: true, proficiency: "Advanced" },
      { name: "Node.js", core: true, proficiency: "Advanced" },
      { name: "C", core: false }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    skills: [
      { name: "Laravel", core: true, proficiency: "Expert" },
      { name: "FilamentPHP", core: false },
      { name: "ExpressJS", core: false },
      { name: "NestJS", core: false },
      { name: "Vue.js", core: false },
      { name: "Angular", core: false }
    ]
  },
  {
    category: "Databases & Caching",
    icon: "Database",
    skills: [
      { name: "MySQL", core: true, proficiency: "Expert" },
      { name: "Redis", core: true, proficiency: "Advanced" },
      { name: "MongoDB", core: false }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS", core: false },
      { name: "DigitalOcean", core: false },
      { name: "Docker", core: false },
      { name: "Git", core: false },
      { name: "Laravel Forge", core: false }
    ]
  },
  {
    category: "AI & Automation",
    icon: "Cpu",
    skills: [
      { name: "OpenAI API", core: true, proficiency: "Advanced" },
      { name: "ChatGPT", core: false },
      { name: "Google AI APIs", core: false },
      { name: "Cursor AI", core: false }
    ]
  }
];

// Highlighted top core skills for quick badge view
export const topCoreSkills = [
  { name: "Laravel / PHP", level: "Expert", experience: "6+ yrs" },
  { name: "Node.js", level: "Advanced", experience: "4+ yrs" },
  { name: "MySQL (Optimization)", level: "Expert", experience: "6+ yrs" },
  { name: "Redis Caching", level: "Advanced", experience: "4+ yrs" },
  { name: "E-Commerce APIs", level: "Specialist", experience: "5+ yrs" }
];
