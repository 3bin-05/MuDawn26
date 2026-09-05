import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndCampus from './components/AboutAndCampus';
import HackathonJourney from './components/HackathonJourney';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { eventInfo } from './config/eventConfig';
import type { ActiveSection } from './types/activeSection';
import bgImg2 from './assets/mubg2.webp';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [isLoading, setIsLoading] = useState(true);

  // IntersectionObserver to update activeSection when scrolling through document
  useEffect(() => {
    if (isLoading) return;

    const sectionIds: { id: string; section: ActiveSection }[] = [
      { id: 'hero', section: 'hero' },
      { id: 'about', section: 'about' },
      { id: 'chapter', section: 'chapter' },
      { id: 'timeline', section: 'timeline' },
      { id: 'experiences', section: 'experiences' },
      { id: 'sponsors', section: 'sponsors' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sectionIds.find((s) => s.id === entry.target.id);
            if (found) {
              setActiveSection(found.section);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-10% 0px -40% 0px',
      }
    );

    sectionIds.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  const handleNavSelection = (section: ActiveSection) => {
    setActiveSection(section);
    const elementId = section === 'chapter' ? 'chapter' : section;
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleRegisterClick = () => {
    if (eventInfo.registrationUrl) {
      window.open(eventInfo.registrationUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert("μDawn '26 registration portal will open soon!");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative w-full overflow-x-hidden font-sans antialiased">
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* ── Fixed space planet background ─────────────────────────────────────
           Sits at z-[1]. Hero & About cover it with solid bg-[#060606] (z-[2]).
           Journey section is transparent so this shows through beneath it.
           Footer also covers it at z-[2]. The image stays completely still;
           only the page content scrolls over it. ──────────────────────────── */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
        <img
          src={bgImg2}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark veil so text above stays readable */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <CustomCursor />

      <Navbar
        activeSection={activeSection}
        setActiveSection={handleNavSelection}
        onRegisterClick={handleRegisterClick}
      />

      {/* z-[2] + solid bg — sits above the fixed space bg while visible */}
      <div className="relative z-[2] bg-[#060606]">
        <Hero
          onContactClick={handleContactClick}
          onRegisterClick={handleRegisterClick}
        />
        <AboutAndCampus />

        {/* ── Transition fade from About into Journey ──────────────────────────
             This gradient is OUTSIDE the opacity-animated Journey section so it
             is always at full opacity — no "missing fade frame" bug. It sits at
             z-[3] and bleeds downward, softening the hard edge between the solid
             #060606 background and the fixed space planet behind the Journey.  */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-56 translate-y-full bg-gradient-to-b from-[#060606] via-[#060606]/55 to-transparent pointer-events-none z-[3]"
        />
      </div>

      {/* z-[1] — no background; fixed space bg shows through here */}
      <div className="relative z-[1]">
        <HackathonJourney
          onRegisterClick={handleRegisterClick}
        />
      </div>

    </main>
  );
}
