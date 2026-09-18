import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div className="max-w-2xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
            Production Showcases
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Case studies featuring real-world problem statements, microservices architectures, and measurable production impacts.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>Case Study Format: Problem → Solution → Outcome</span>
        </div>
      </div>

      {/* Grid md:grid-cols-2 gap-8 as specified */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}

export default Projects;
