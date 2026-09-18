import React from 'react';
import { Quote, MessageSquareQuote, CheckCircle2, TrendingUp } from 'lucide-react';
import { testimonialsData, engineeringImpactStats } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-surface/40 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-2">
            Social Proof & Verification
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Impact & Endorsements
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Verifiable results from production deployments and engineering collaborations.
          </p>
        </div>

        {/* Engineering Metrics Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {engineeringImpactStats.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-surface/80 border border-slate-800/90 flex flex-col"
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-accent mb-1">
                {item.metric}
              </span>
              <span className="text-sm font-semibold text-white">
                {item.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-xl flex flex-col justify-between"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-accent/40 mb-3" />
                <p className="text-slate-300 italic text-sm sm:text-base leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-accent font-medium">
                    {item.role} • {item.company}
                  </p>
                </div>

                {item.isPlaceholder && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-slate-700 text-slate-400">
                    Placeholder Endorsement
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
