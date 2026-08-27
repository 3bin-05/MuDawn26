import { useRef } from 'react';
import { motion } from 'framer-motion';

import HackathonTimeline from './HackathonTimeline';
import Experiences from './Experiences';
import BuildWithAI from './BuildWithAI';
import WhyMuDawn from './WhyMuDawn';
import Sponsors from './Sponsors';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

interface HackathonJourneyProps {
  onRegisterClick: () => void;
}

export default function HackathonJourney({
  onRegisterClick
}: HackathonJourneyProps) {


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

  const handleExploreJourney = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="journey-plate"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.05, once: false }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full text-white select-none pointer-events-auto"
    >
      {/* ── Atmospheric overlays on top of the fixed space bg ── */}

      {/* Twinkling stars */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
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

      {/* Slow-drifting mist at bottom of bg */}
      <motion.div
        className="absolute inset-x-0 top-1/2 h-48 bg-gradient-to-t from-black/20 via-white/5 to-transparent opacity-15 pointer-events-none z-0"
        animate={{ x: [-15, 15, -15] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />




      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14 pt-20 pb-12 flex flex-col gap-12 sm:gap-16">
        <HackathonTimeline />
        <Experiences />
        <BuildWithAI />
        <WhyMuDawn />
        <Sponsors />
        <FinalCTA onRegisterClick={onRegisterClick} onExploreJourneyClick={handleExploreJourney} />
      </div>

      {/* Bottom fade into Footer */}
      <div className="relative z-10 h-44 -mt-44 bg-gradient-to-b from-transparent via-[#060606]/65 to-[#060606] pointer-events-none" />
      <Footer />
    </motion.section>
  );
}

