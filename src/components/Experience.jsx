import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { experienceData } from '../data/experience';
import { Pill } from './Pill';

export function Experience() {
  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
          Career Track
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Professional Experience
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-2">
          6+ years of shipping enterprise backends, high-concurrency systems, and real-time marketplace automation.
        </p>
      </div>

      {/* Chronological Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experienceData.map((job) => (
          <div key={job.id} className="relative group">
            
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
              <div
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 ${
                  job.current
                    ? 'bg-accent border-accent shadow-[0_0_12px_#2dd4a7]'
                    : 'bg-slate-900 border-slate-600 group-hover:border-accent'
                } transition-colors`}
              />
            </div>

            {/* Experience Card */}
            <div className="bg-surface/80 border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 shadow-xl backdrop-blur-sm">
              
              {/* Header: Title, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/70">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-slate-300 mt-0.5">
                    {job.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated border border-slate-800 text-accent font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <ul className="space-y-3 text-sm text-slate-300 mb-6">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Merged Inline Achievements (Section 8 Prompt Requirement) */}
              {job.achievements && job.achievements.length > 0 && (
                <div className="mb-6 p-4 rounded-xl bg-accent-muted border border-accent/30 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-accent">
                    <Award className="w-4 h-4" />
                    <span>Company Honors:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.achievements.map((award, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface text-white border border-accent/40 shadow-sm"
                      >
                        🏅 {award}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {job.technologies.map((tech) => (
                  <Pill key={tech} size="sm" variant="default">
                    {tech}
                  </Pill>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Experience;
