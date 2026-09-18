import React, { useState } from 'react';
import { Menu, X, Download, Terminal, ChevronRight } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { profileData } from '../data/profile';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Impact' },
  { id: 'contact', label: 'Contact' }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id), 'about');

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/85 border-b border-slate-800/80 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#about"
          className="group flex items-center gap-2.5 font-bold text-lg sm:text-xl text-white tracking-tight"
          onClick={closeMobileMenu}
        >
          <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-accent/40 flex items-center justify-center text-accent group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(45,212,167,0.3)] transition-all">
            <Terminal className="w-5 h-5 text-accent" />
          </div>
          <span>
            Shakil <span className="text-accent">Anwar</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive
                    ? 'text-accent font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-surface-elevated/40'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full shadow-[0_0_8px_#2dd4a7]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Download CV */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            download="Shakil-Anwar-Resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-slate-950 transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(45,212,167,0.25)]"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-elevated transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-800/80 bg-background/95 backdrop-blur-xl ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-4 px-4 sm:px-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMobileMenu}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-accent/10 text-accent font-semibold border-l-4 border-accent'
                    : 'text-slate-300 hover:bg-surface-elevated hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-accent' : 'text-slate-600'}`} />
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-800">
            <a
              href={profileData.resumeUrl}
              download="Shakil-Anwar-Resume.pdf"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold px-4 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-slate-950 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
