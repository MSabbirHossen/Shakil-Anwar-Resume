import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreFocus from './components/CoreFocus';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-background text-slate-100 font-sans selection:bg-accent selection:text-slate-950">
      {/* Top Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero / Intro */}
        <Hero />

        {/* 2. Core Focus / Architecture Pillars */}
        <CoreFocus />

        {/* 3. Professional Experience (with merged achievements badges & timeline) */}
        <Experience />

        {/* 4. Technical Skills by Category */}
        <Skills />

        {/* 5. Featured Projects Showcase */}
        <Projects />

        {/* 6. Social Proof & Testimonials */}
        <Testimonials />

        {/* 7. Education & Honors (Secondary section with compact hierarchy) */}
        <section id="credentials" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <Education />
            <Achievements />
          </div>
        </section>
      </main>

      {/* Unified Contact Hub Footer */}
      <Footer />
    </div>
  );
}

export default App;
