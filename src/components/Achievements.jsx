import React from 'react';
import { Trophy, Star, Award, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export function Achievements() {
  return (
    <div className="flex flex-col h-full bg-surface/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-surface-elevated border border-slate-800 text-accent">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Honors & Awards</h3>
          <p className="text-xs text-slate-400">Engineering Recognition</p>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="text-sm sm:text-base font-bold text-white">
                {item.title}
              </h4>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/30 flex-shrink-0">
                {item.year}
              </span>
            </div>
            <p className="text-xs text-accent font-medium mb-2">
              {item.issuer}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
