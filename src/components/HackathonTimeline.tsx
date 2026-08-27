import { useState } from 'react';
import { motion } from 'framer-motion';
import { timelinePhases } from '../config/eventConfig';
import { CheckCircle2, Circle } from 'lucide-react';

export default function HackathonTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div id="timeline" className="w-full min-h-[85vh] flex flex-col justify-center gap-10 sm:gap-14 pt-24 pb-12">
      {/* Top Header block */}
      <div className="flex flex-col gap-2">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
          THE JOURNEY
        </span>
        <h2 className="font-orbitron font-extrabold text-[32px] sm:text-[42px] md:text-[50px] tracking-tight leading-none text-white">
          The μDawn Journey
        </h2>
        <span className="font-orbitron text-[14px] sm:text-[18px] text-white/60 tracking-wider">
          Six phases. One continuous journey from idea to impact.
        </span>
      </div>

      {/* Timeline Interactive Area */}
      <div className="relative w-full overflow-visible h-auto pr-0 lg:pr-4 flex flex-col justify-center">
        {/* Timeline Path Line */}
        <div className="absolute left-[16px] sm:left-[112px] top-6 bottom-6 w-[1.5px] bg-white/10">
          {/* Animated active path line */}
          <motion.div
            className="absolute top-0 w-full bg-white shadow-[0_0_10px_#ffffff]"
            initial={{ height: 0 }}
            animate={{ height: `${(activeIdx / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        {/* Phase Rows */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {timelinePhases.map((phase, idx) => {
            const isActive = idx === activeIdx;
            const isCompleted = idx < activeIdx;

            return (
              <div
                key={phase.phase}
                className="relative flex flex-col sm:flex-row items-start group min-w-0 cursor-pointer select-none"
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
              >
                {/* Left Side: Phase Label */}
                <div className="flex sm:flex-col items-baseline sm:items-end shrink-0 w-full sm:w-[80px] text-left sm:text-right pt-0 sm:pt-[24px] pr-0 sm:pr-6 pl-8 sm:pl-0">
                  <span
                    className={`text-[24px] sm:text-[32px] font-orbitron font-bold leading-none transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/30 group-hover:text-white/60'
                    }`}
                  >
                    {phase.phase}
                  </span>
                  <span
                    className={`text-[10px] sm:text-[11px] font-orbitron tracking-widest uppercase mt-1 transition-colors duration-300 ${
                      isActive ? 'text-white/80' : 'text-white/20'
                    }`}
                  >
                    PHASE
                  </span>
                </div>

                {/* Timeline Circle Bullet Node */}
                <div className="absolute left-[16px] sm:left-[112px] top-[28px] -translate-x-1/2 z-10 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.25 : 1,
                      borderColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.2)',
                    }}
                    className={`w-5 h-5 rounded-full border bg-black flex items-center justify-center transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.8)]`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-white/60" />
                    ) : isActive ? (
                      <motion.div 
                        layoutId="activeTimelineIndicator"
                        className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" 
                      />
                    ) : (
                      <Circle className="w-2 h-2 text-white/20" />
                    )}
                  </motion.div>
                </div>

                {/* Premium Interactive Phase Card */}
                <motion.div
                  animate={{
                    y: isActive ? -4 : 0,
                    borderColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                    backgroundColor: isActive ? 'rgba(13, 13, 13, 0.7)' : 'rgba(13, 13, 13, 0.3)',
                    boxShadow: isActive ? '0 10px 30px rgba(0, 0, 0, 0.5)' : '0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                  className="flex-1 min-w-0 w-full ml-8 sm:ml-16 border rounded-md p-5 sm:p-6 lg:p-7 flex flex-col gap-4 relative transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3
                      className={`font-orbitron font-bold text-[18px] sm:text-[22px] tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {phase.title}
                    </h3>
                    <span
                      className={`font-orbitron text-[9px] tracking-wider uppercase border px-2.5 py-1 rounded-full transition-colors duration-300 ${
                        isActive
                          ? 'border-white/50 text-white bg-white/5'
                          : 'border-white/10 text-white/30'
                      }`}
                    >
                      Focus: {phase.focus}
                    </span>
                  </div>

                  {/* Activities List */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                    <span className="font-mono text-[9px] sm:text-[10px] text-white/40 tracking-wider uppercase">
                      Core Activities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-1">
                      {phase.activities.map((act) => (
                        <li
                          key={act}
                          className="flex items-center gap-2 font-sans font-light text-[12px] sm:text-[13px] text-white/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
