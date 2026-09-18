import { useState, useEffect } from 'react';

/**
 * Custom hook to track active section for scrollspy navigation using IntersectionObserver
 * @param {string[]} sectionIds - Array of section DOM IDs to monitor
 * @param {string} defaultSection - Initial fallback section
 * @returns {string} activeSection - Currently active section ID
 */
export function useActiveSection(sectionIds, defaultSection = 'about') {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in upper-mid viewport
      threshold: [0, 0.25, 0.5, 0.75, 1.0]
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Handle scroll to absolute top/bottom smoothly
    const handleScroll = () => {
      if (window.scrollY < 100 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      } else if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, defaultSection]);

  return activeSection;
}
