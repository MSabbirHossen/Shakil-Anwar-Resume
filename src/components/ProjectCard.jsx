import React from 'react';
import { ExternalLink, Lock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Pill } from './Pill';

/**
 * ProjectCard Component - High visual weight case study card
 */
export function ProjectCard({ project }) {
  const {
    title,
    role,
    liveUrl,
    githubUrl,
    caseStudy,
    technologies,
    highlights,
    id
  } = project;

  return (
    <article className="group relative flex flex-col bg-surface/80 border border-slate-800/90 hover:border-accent/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-accent/10 backdrop-blur-sm overflow-hidden">
      {/* Subtle top glow effect on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Visual / Architecture Diagram Area */}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 bg-slate-950/80 border border-slate-800/80 flex items-center justify-center group-hover:border-slate-700 transition-colors">
        {/* Render custom architecture diagram based on project id */}
        {id === 'dropmatix' ? (
          <div className="w-full h-full p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-2">
              <span className="font-mono text-accent flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                SYSTEM ARCHITECTURE
              </span>
              <span className="text-slate-400 font-mono text-[11px]">MILLION-ROW SYNC</span>
            </div>

            {/* Diagram Nodes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 my-auto items-stretch text-center text-[11px] font-mono">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 shadow flex flex-col justify-between items-center">
                <div>
                  <p className="font-semibold text-white">Suppliers</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Feed Ingestion</p>
                </div>
                <span className="mt-2 text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                  Catalog Data
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/95 border border-accent/60 text-accent shadow-lg flex flex-col justify-between items-center">
                <div>
                  <p className="font-semibold text-white">Dropmatix Engine</p>
                  <p className="text-[10px] text-accent mt-0.5">Laravel / Node</p>
                </div>
                <span className="mt-2 text-[9px] px-2 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent font-semibold">
                  Redis Queue
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 shadow flex flex-col justify-between items-center">
                <div>
                  <p className="font-semibold text-white">Marketplaces</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Amazon / Shopify</p>
                </div>
                <span className="mt-2 text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                  Auto Export
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="text-emerald-400">⚡ 80% Faster Queries</span>
              <span className="text-slate-400">Redis Caching & Jobs</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-full p-4 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-2">
              <span className="font-mono text-secondary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                EVENT-DRIVEN MIDDLEWARE
              </span>
              <span className="text-slate-400 font-mono text-[11px]">RATE-LIMIT RESILIENT</span>
            </div>

            {/* Diagram Nodes */}
            <div className="grid grid-cols-4 gap-1.5 my-auto items-center text-center text-[10px] font-mono">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <p className="font-semibold text-white">Amazon</p>
                <p className="text-[9px] text-slate-400">SP-API</p>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <p className="font-semibold text-white">eBay / Etsy</p>
                <p className="text-[9px] text-slate-400">REST APIs</p>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-300">
                <p className="font-semibold text-white">Shopify</p>
                <p className="text-[9px] text-slate-400">Webhooks</p>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-secondary/40 text-secondary">
                <p className="font-semibold text-white">Sync Bus</p>
                <p className="text-[9px] text-secondary">Token Rotation</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
              <span className="text-secondary">🔄 Bi-directional Stock Sync</span>
              <span className="text-emerald-400">Zero Overselling</span>
            </div>
          </div>
        )}

        {/* Floating status tag */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-900/90 text-accent border border-accent/30 shadow backdrop-blur-md">
            {role}
          </span>
        </div>
      </div>

      {/* Title & Live Link Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-2.5 rounded-lg bg-surface-elevated text-accent hover:bg-accent hover:text-slate-950 transition-colors border border-accent/30"
            title={`Visit ${liveUrl}`}
            aria-label={`Visit live site for ${title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Case Study Section (Problem -> Solution -> Outcome) */}
      <div className="space-y-3 mb-6 text-sm flex-1">
        <div className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-800/70">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-400 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            The Problem
          </p>
          <p className="text-slate-300 leading-relaxed">{caseStudy.problem}</p>
        </div>

        <div className="bg-slate-900/60 rounded-xl p-3.5 border border-slate-800/70">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            The Solution
          </p>
          <p className="text-slate-300 leading-relaxed">{caseStudy.solution}</p>
        </div>

        <div className="bg-emerald-950/20 rounded-xl p-3.5 border border-emerald-500/30">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-accent mb-1 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            Measurable Outcome
          </p>
          <p className="text-slate-200 font-medium leading-relaxed">
            {caseStudy.outcome}
          </p>
        </div>
      </div>

      {/* Key Highlights */}
      {highlights && highlights.length > 0 && (
        <ul className="mb-6 space-y-1.5 text-xs text-slate-300">
          {highlights.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech Stack Pills */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
        {technologies.map((tech) => (
          <Pill key={tech} size="sm" variant="default">
            {tech}
          </Pill>
        ))}
      </div>

      {/* Action Footer */}
      <div className="mt-5 flex items-center justify-between text-xs text-slate-400 pt-2">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent hover:underline font-medium"
          >
            <span>Visit Production System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Enterprise Live Integrations
          </span>
        )}

        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white"
          >
            View Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-slate-400 font-mono text-[11px]">
            <Lock className="w-3 h-3" />
            Proprietary Architecture
          </span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
