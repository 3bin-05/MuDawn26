import { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndCampus from './components/AboutAndCampus';
import HackathonJourney from './components/HackathonJourney';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import { eventInfo } from './config/eventConfig';
import type { ActiveSection } from './types/activeSection';

export default function App() {
  const transitionDurationMs = 1200;
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [activePlate, setActivePlate] = useState<'hero' | 'about' | 'journey'>('hero');
  const [entranceY, setEntranceY] = useState<string | number>('120%');
  const [exitY, setExitY] = useState<string | number>('120%');
  const [isLoading, setIsLoading] = useState(true);

  const touchStartY = useRef(0);
  const isTransitionLocked = useRef(false);
  const unlockTimer = useRef<number | null>(null);

  const shouldShowJourneyLayer =
    activePlate === 'journey' ||
    (activePlate === 'about' && entranceY === '-100%');

  useEffect(() => {
    return () => {
      if (unlockTimer.current) {
        window.clearTimeout(unlockTimer.current);
      }
    };
  }, []);

  const lockTransition = () => {
    isTransitionLocked.current = true;
    if (unlockTimer.current) {
      window.clearTimeout(unlockTimer.current);
    }
    unlockTimer.current = window.setTimeout(() => {
      isTransitionLocked.current = false;
      unlockTimer.current = null;
    }, transitionDurationMs);
  };

  const handlePlateChange = (targetPlate: 'hero' | 'about' | 'journey', force = false) => {
    if (targetPlate === activePlate) return;

    if (!force && isTransitionLocked.current) return;
    lockTransition();

    if (activePlate === 'hero' && targetPlate === 'about') {
      setEntranceY('120%');
      setExitY('120%');
      setActivePlate('about');
      setActiveSection('about');
    } else if (activePlate === 'about' && targetPlate === 'journey') {
      setExitY('-100%');
      setActivePlate('journey');
      setActiveSection('timeline');
    } else if (activePlate === 'journey' && targetPlate === 'about') {
      setEntranceY('-100%');
      setExitY('-100%');
      setActivePlate('about');
      setActiveSection('chapter');
    } else if (activePlate === 'about' && targetPlate === 'hero') {
      setExitY('120%');
      setActivePlate('hero');
      setActiveSection('hero');
    } else {
      // Direct navbar jump or other edge cases
      if (targetPlate === 'journey') {
        setExitY('-100%');
        setActivePlate('journey');
      } else if (targetPlate === 'about') {
        setEntranceY('120%');
        setExitY('120%');
        setActivePlate('about');
      } else if (targetPlate === 'hero') {
        setActivePlate('hero');
        setActiveSection('hero');
      }
    }
  };

  const handleNavSelection = (section: ActiveSection, force = false) => {
    if (section === activeSection) return;

    if (section === 'hero') {
      handlePlateChange('hero', force);
      return;
    }

    let targetPlate: 'hero' | 'about' | 'journey' = 'hero';
    if (section === 'about' || section === 'chapter') {
      targetPlate = 'about';
    } else if (section === 'timeline' || section === 'experiences' || section === 'sponsors') {
      targetPlate = 'journey';
    }

    if (targetPlate !== activePlate) {
      handlePlateChange(targetPlate, true);
    }

    setActiveSection(section);

    const elementId = section === 'chapter' ? 'chapter' : section;
    requestAnimationFrame(() => {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 350); // Allow time for plate transition slide to activate
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (activePlate === 'hero' && e.deltaY > 20) {
      e.preventDefault();
      handleNavSelection('about');
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (activePlate === 'hero') {
      const touchY = e.touches[0].clientY;
      const diff = touchStartY.current - touchY; // positive = swipe up
      if (diff > 80) {
        e.preventDefault();
        handleNavSelection('about');
      }
    }
  };

  const handleRegisterClick = () => {
    if (eventInfo.registrationUrl) {
      window.open(eventInfo.registrationUrl, '_blank', 'noopener,noreferrer');
    } else {
      alert("μDawn '26 registration portal will open soon!");
    }
  };

  return (
    <main
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="min-h-screen bg-black text-white relative w-full overflow-hidden select-none font-sans antialiased"
    >
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <CustomCursor />
      
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleNavSelection}
        onRegisterClick={handleRegisterClick}
      />

      <Hero 
        activeSection={activeSection} 
        onCtaClick={() => handleNavSelection('about')} 
        onRegisterClick={handleRegisterClick}
      />
      
      <AnimatePresence>
        {shouldShowJourneyLayer && (
          <HackathonJourney 
            onGoToAbout={(force?: boolean) => handlePlateChange('about', force)}
            setActiveNavSection={setActiveSection}
            onRegisterClick={handleRegisterClick}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activePlate === 'about' && (
          <AboutAndCampus 
            onClose={(force?: boolean) => handlePlateChange('hero', force)} 
            onGoToJourney={(force?: boolean) => handlePlateChange('journey', force)}
            setActiveNavSection={setActiveSection}
            entranceY={entranceY}
            exitY={exitY}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
