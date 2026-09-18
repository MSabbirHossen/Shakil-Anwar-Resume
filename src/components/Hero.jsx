import React from 'react';
import { ArrowDown, Mail, Download, Sparkles, Code2, Server, Database } from 'lucide-react';
import { profileData } from '../data/profile';

export function Hero() {
  return (
    <section
      id="about"
      className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-slate-800 text-xs sm:text-sm text-slate-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-medium text-slate-200">
                {profileData.locationType}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-300 to-secondary">{profileData.name}</span>
            </h1>

            {/* Title & Tagline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-300 mb-2">
              {profileData.role}
            </p>
            <p className="text-sm sm:text-base font-mono text-accent mb-6">
              {profileData.tagline}
            </p>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {profileData.summary}
            </p>

            {/* CTAs (Strictly 1 Primary + 1 Secondary per Prompt Section 2) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-accent text-slate-950 hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 w-full sm:w-auto text-center"
              >
                <Mail className="w-4 h-4" />
                <span>Get in touch</span>
              </a>

              <a
                href={profileData.resumeUrl}
                download="Shakil-Anwar-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-surface-elevated text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-500 transition-all duration-200 w-full sm:w-auto text-center"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Metric Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 w-full">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Monogram / Identity Mark Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-accent/20 via-slate-800 to-secondary/20 p-1 animate-pulse-slow shadow-2xl">
                <div className="w-full h-full rounded-3xl bg-surface/90 backdrop-blur-xl flex items-center justify-center border border-slate-800" />
              </div>

              {/* Central Monogram / Avatar Container */}
              <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
                {profileData.headshot ? (
                  <img
                    src={profileData.headshot}
                    alt={profileData.name}
                    className="w-48 h-48 rounded-2xl object-cover border-2 border-accent/40 shadow-xl"
                  />
                ) : (
                  <>
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-surface-elevated to-slate-900 border-2 border-accent/40 flex items-center justify-center shadow-inner group">
                      {/* Monogram letters */}
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300 tracking-wider">
                        SA
                      </span>
                      
                      {/* Floating tech badges */}
                      <div className="absolute -top-3 -right-3 p-2 rounded-lg bg-slate-900 border border-slate-700 text-accent shadow-lg">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="absolute -bottom-3 -left-3 p-2 rounded-lg bg-slate-900 border border-slate-700 text-secondary shadow-lg">
                        <Database className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-mono text-accent uppercase tracking-widest font-semibold">
                        Full-Stack & Systems
                      </p>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        PHP • Node.js • APIs • MySQL
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
