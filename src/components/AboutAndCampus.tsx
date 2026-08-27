import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutHackathon from './AboutHackathon';
import CampusChapter from './CampusChapter';
import CampusShowcase from './CampusShowcase';

interface AboutAndCampusProps {
  onClose: (force?: boolean) => void;
  onGoToJourney: (force?: boolean) => void;
  setActiveNavSection: (section: 'hero' | 'about' | 'chapter' | 'timeline' | 'experiences' | 'sponsors') => void;
  entranceY: string | number;
  exitY: string | number;
}

export default function AboutAndCampus({
  onClose,
  onGoToJourney,
  setActiveNavSection,
  entranceY,
  exitY
}: AboutAndCampusProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  // Scroll to top if entering from Hero, or scroll to bottom if entering from Journey
  useEffect(() => {
    if (containerRef.current) {
      if (entranceY === '-100%') {
        // Entering from bottom (Journey section) -> scroll to bottom
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
          }
        });
      } else {
        // Entering from top (Hero) -> scroll to top
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.scrollTop = 0;
          }
        });
      }
    }
  }, [entranceY]);

  // Wheel scroll event to transition between plates
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const isAtTop = e.currentTarget.scrollTop <= 5;
    const isAtBottom = e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight - 5;

    if (isAtTop && e.deltaY < -20) {
      e.preventDefault();
      e.stopPropagation();
      onClose(true);
    } else if (isAtBottom && e.deltaY > 20) {
      e.preventDefault();
      e.stopPropagation();
      onGoToJourney(true);
    }
  };

  // Touch handlers to support sliding transitions on mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const isAtTop = e.currentTarget.scrollTop === 0;
    const isAtBottom = e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight - 5;
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY; // positive = swipe up

    if (isAtTop && diff < -80) {
      e.preventDefault();
      onClose(); // swipe down
    } else if (isAtBottom && diff > 80) {
      e.preventDefault();
      onGoToJourney(); // swipe up
    }
  };

  // Observe scrolling to highlight active section in Navbar
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const chapterEl = document.getElementById('chapter');
    const showcaseEl = document.getElementById('showcase');

    if (!chapterEl || !showcaseEl) return;

    const offset = 260; // offset threshold
    const chapterTop = chapterEl.offsetTop - offset;

    if (scrollTop >= chapterTop) {
      setActiveNavSection('chapter');
    } else {
      setActiveNavSection('about');
    }
  };

  return (
    <motion.section
      id="about-campus"
      ref={containerRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onScroll={handleScroll}
      initial={{ y: entranceY, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: exitY, opacity: exitY === '-100%' ? 1 : 0 }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 w-full h-screen min-h-[100dvh] bg-[#060606] text-white z-40 overflow-y-auto overscroll-contain tech-scrollbar select-none will-change-transform"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0" />
      
      {/* Top indicator: Pull down to exit */}
      <div 
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer opacity-40 hover:opacity-100 transition-opacity" 
        onClick={() => onClose(true)}
      >
        <span className="font-orbitron text-[9px] tracking-[0.2em] uppercase text-white/60">RETURN_HOME</span>
        <div className="w-6 h-[2px] bg-white/40 rounded-full" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14 pb-20 flex flex-col gap-12 sm:gap-16">
        <AboutHackathon />
        <CampusChapter />
        <CampusShowcase />
      </div>
    </motion.section>
  );
}
