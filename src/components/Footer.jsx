import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUp, Github, Linkedin, Facebook } from 'lucide-react';
import { profileData } from '../data/profile';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-slate-950 border-t border-slate-800/80">
      {/* Background radial accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-slate-800 text-xs text-accent mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Open for Opportunities & Remote Contracts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let’s Build Something Scalable Together
          </h2>

          <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed">
            Whether you need high-volume marketplace automation, database query optimization, or scalable microservices architecture, feel free to reach out.
          </p>
        </div>

        {/* Contact Information Hub (The ONE Consolidated Contact Hub per Prompt Section 2 & 10) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card with Copy Button */}
          <div className="p-6 rounded-2xl bg-surface/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-surface-elevated border border-slate-800 text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Direct Email
                </p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-accent transition-colors break-all"
                >
                  {profileData.email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-medium py-2 px-3 rounded-lg bg-surface-elevated border border-slate-700/80 text-slate-300 hover:text-white hover:border-accent/50 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-surface/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-surface-elevated border border-slate-800 text-accent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Phone / WhatsApp
                </p>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-accent transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
            </div>

            <a
              href={`tel:${profileData.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-medium py-2 px-3 rounded-lg bg-surface-elevated border border-slate-700/80 text-slate-300 hover:text-white hover:border-accent/50 transition-colors"
            >
              <span>Call Direct</span>
            </a>
          </div>

          {/* Location Card */}
          <div className="p-6 rounded-2xl bg-surface/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-surface-elevated border border-slate-800 text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Current Location
                </p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  {profileData.location}
                </p>
              </div>
            </div>

            <div className="mt-2 text-center text-xs font-mono text-accent py-2 px-3 rounded-lg bg-surface-elevated border border-slate-800">
              {profileData.locationType}
            </div>
          </div>

        </div>

        {/* Social Icons Strip (Strictly here only per prompt section 87) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-slate-800/80">
          
          <div className="flex items-center gap-4">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-surface-elevated border border-slate-800 text-slate-300 hover:text-white hover:border-accent hover:bg-accent/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-surface-elevated border border-slate-800 text-slate-300 hover:text-white hover:border-accent hover:bg-accent/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {profileData.socials.facebook && (
              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-3 rounded-xl bg-surface-elevated border border-slate-800 text-slate-300 hover:text-white hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
          </div>

          <p className="text-xs text-slate-400 text-center sm:text-right">
            © {new Date().getFullYear()} Shakil Anwar. Built with React & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-accent font-medium transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
