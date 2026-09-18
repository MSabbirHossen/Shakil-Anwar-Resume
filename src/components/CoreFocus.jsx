import React from 'react';
import { Workflow, Server, Database, Sparkles, CheckCircle } from 'lucide-react';
import { coreFocusData } from '../data/coreFocus';

const iconMap = {
  Workflow: Workflow,
  Server: Server,
  Database: Database,
  Sparkles: Sparkles
};

export function CoreFocus() {
  return (
    <section className="py-20 bg-surface/40 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
            Engineering Focus
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            High-Impact Backend & Systems Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Proven track record designing scalable microservices, resilient API connectors, and automated e-commerce infrastructure.
          </p>
        </div>

        {/* 4-Card Grid visually differentiated from Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFocusData.map((item) => {
            const IconComponent = iconMap[item.icon] || Server;

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Icon & Title */}
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-slate-700/80 flex items-center justify-center text-accent mb-5 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Measurable Highlight */}
                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CoreFocus;
