import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/education';

export function Education() {
  return (
    <div className="flex flex-col h-full bg-surface/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-surface-elevated border border-slate-800 text-accent">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Education</h3>
          <p className="text-xs text-slate-400">Academic Background</p>
        </div>
      </div>

      {educationData.map((edu) => (
        <div key={edu.id} className="flex flex-col flex-1 justify-between">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-1">
              {edu.degree}
            </h4>
            <p className="text-sm font-semibold text-accent mb-3">
              {edu.institution}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {edu.period}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {edu.location}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 font-semibold">
                CGPA: {edu.cgpa}
              </span>
            </div>

            <ul className="space-y-2 text-xs text-slate-300">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;
