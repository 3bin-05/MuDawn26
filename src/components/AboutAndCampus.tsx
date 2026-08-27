import { motion } from 'framer-motion';
import AboutHackathon from './AboutHackathon';
import CampusChapter from './CampusChapter';
import CampusShowcase from './CampusShowcase';

export default function AboutAndCampus() {
  return (
    <motion.section
      id="about-campus"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1, once: false }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full bg-[#060606] text-white z-10 select-none pt-8 pb-12"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14 pb-20 flex flex-col gap-12 sm:gap-16">
        <AboutHackathon />
        <CampusChapter />
        <CampusShowcase />
      </div>
    </motion.section>
  );
}
