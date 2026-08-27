import { motion } from 'framer-motion';
import { whyMuDawnThemes } from '../config/eventConfig';

export default function WhyMuDawn() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: custom * 0.1
      }
    })
  };

  return (
    <div id="why-mudawn" className="w-full min-h-[80vh] flex flex-col justify-center gap-10 sm:gap-14 pt-24 pb-12 border-t border-white/5">
      {/* Top Header block */}
      <div className="flex flex-col gap-2">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
          OUR MISSION
        </span>
        <h2 className="font-orbitron font-extrabold text-[32px] sm:text-[42px] md:text-[50px] tracking-tight leading-none text-white">
          More Than a Hackathon
        </h2>
        <span className="font-orbitron text-[14px] sm:text-[18px] text-white/60 tracking-wider font-light">
          A collaborative environment engineered to inspire, share, and launch ideas.
        </span>
      </div>

      {/* Rows of Mission themes */}
      <div className="flex flex-col gap-6 max-w-4xl">
        {whyMuDawnThemes.map((theme, idx) => (
          <motion.div
            key={theme.title}
            custom={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="group flex flex-col sm:flex-row gap-2 sm:gap-8 py-5 border-b border-white/5 items-start sm:items-center"
          >
            {/* Left number */}
            <span className="font-orbitron text-[11px] text-white/20 font-bold tracking-wider shrink-0 w-8">
              {(idx + 1).toString().padStart(2, '0')} //
            </span>

            {/* Right text content */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-8 justify-between">
              <h3 className="font-orbitron font-bold text-[15px] sm:text-[16px] text-white/90 tracking-wide uppercase sm:w-64">
                {theme.title}
              </h3>
              <p className="font-sans font-light text-[13px] sm:text-[14px] leading-relaxed text-white/60 max-w-xl">
                {theme.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
