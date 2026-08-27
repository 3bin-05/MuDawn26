import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import bgImg2 from '../assets/mubg2.webp';
import HackathonTimeline from './HackathonTimeline';
import Experiences from './Experiences';
import BuildWithAI from './BuildWithAI';
import WhyMuDawn from './WhyMuDawn';
import Sponsors from './Sponsors';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

interface HackathonJourneyProps {
  onGoToAbout: (force?: boolean) => void;
  setActiveNavSection: (section: 'hero' | 'about' | 'chapter' | 'timeline' | 'experiences' | 'sponsors') => void;
  onRegisterClick: () => void;
}

export default function HackathonJourney({
  onGoToAbout,
  setActiveNavSection,
  onRegisterClick
}: HackathonJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax effect (maximum 8px shift)
  useEffect(() => {
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointerQuery.matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 8;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Twinkling stars generation
  const starsRef = useRef(
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 60}%`,
      left: `${Math.random() * 95}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }))
  );

  // Wheel handler to slide Plate 2 back down from the static Journey plate
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const isAtTop = e.currentTarget.scrollTop <= 5;
    if (isAtTop && e.deltaY < -20) {
      e.preventDefault();
      e.stopPropagation();
      onGoToAbout(true);
    }
  };

  // Touch handlers to support swiping down to slide Plate 2 back down
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchY = e.touches[0].clientY;
    const diff = touchY - touchStartY.current; // positive = swipe down
    const isAtTop = e.currentTarget.scrollTop <= 5;
    if (isAtTop && diff > 80) {
      e.preventDefault();
      onGoToAbout(true);
    }
  };

  // Scroll listener to update active nav highlight
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const timelineEl = document.getElementById('timeline');
    const experiencesEl = document.getElementById('experiences');
    const sponsorsEl = document.getElementById('sponsors');

    if (!timelineEl || !experiencesEl || !sponsorsEl) return;

    const offset = 260; // offset trigger
    const experiencesTop = experiencesEl.offsetTop - offset;
    const sponsorsTop = sponsorsEl.offsetTop - offset;

    if (scrollTop >= sponsorsTop) {
      setActiveNavSection('sponsors');
    } else if (scrollTop >= experiencesTop) {
      setActiveNavSection('experiences');
    } else {
      setActiveNavSection('timeline');
    }
  };

  const handleExploreJourney = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="journey-plate"
      ref={containerRef}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onScroll={handleScroll}
      className="fixed inset-0 w-full h-screen min-h-[100dvh] text-white overflow-y-auto overflow-x-hidden no-scrollbar overscroll-contain select-none z-30 pointer-events-auto tech-scrollbar"
    >
      {/* Background Image with subtle Parallax */}
      <motion.div
        style={{
          x: mousePos.x,
          y: mousePos.y,
          scale: 1.02,
        }}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      >
        <img
          src={bgImg2}
          alt="Space planet background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Background TWINKLING STARS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {starsRef.current.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.15, 0.95, 0.15] }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Planet mist animations */}
      <motion.div
        className="fixed inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/30 via-white/5 to-transparent opacity-20 pointer-events-none z-0"
        animate={{ x: [-15, 15, -15] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />

      {/* Subcomponents List Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14 pt-24 pb-12 flex flex-col gap-12 sm:gap-16">
        <HackathonTimeline />
        <Experiences />
        <BuildWithAI />
        <WhyMuDawn />
        <Sponsors />
        <FinalCTA onRegisterClick={onRegisterClick} onExploreJourneyClick={handleExploreJourney} />
      </div>

      <div className="relative z-20 h-44 -mt-44 bg-gradient-to-b from-transparent via-[#060606]/65 to-[#060606] pointer-events-none" />
      <Footer />
    </motion.section>
  );
}
