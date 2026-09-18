import React from 'react';
import { Code2, Layers, Database, Cloud, Cpu, Sparkles } from 'lucide-react';
import { skillsData, topCoreSkills } from '../data/skills';
import { Pill } from './Pill';

const categoryIcons = {
  'Programming Languages': Code2,
  'Frameworks & Libraries': Layers,
  'Databases & Caching': Database,
  'Cloud & DevOps': Cloud,
  'AI & Automation': Cpu
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface/30 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
            Tooling & Stack
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Grouped by domain across backend architecture, databases, cloud, and modern AI tooling.
          </p>
        </div>

        {/* Top Core Spotlight Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-surface-elevated/70 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
            <span>Primary Core Stack:</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {topCoreSkills.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-accent/40 text-xs font-mono text-slate-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <strong className="text-white">{item.name}</strong>
                <span className="text-accent">({item.experience})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => {
            const CategoryIcon = categoryIcons[category.category] || Code2;

            return (
              <div
                key={category.category}
                className="flex flex-col p-6 rounded-2xl bg-surface/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/60">
                  <div className="p-2 rounded-lg bg-surface-elevated border border-slate-800 text-accent">
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Pill
                      key={skill.name}
                      variant="default"
                      size="md"
                    >
                      {skill.name}
                    </Pill>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;
