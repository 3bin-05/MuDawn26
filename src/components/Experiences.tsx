import { motion } from 'framer-motion';
import { experiences } from '../config/eventConfig';

export default function Experiences() {
  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: custom * 0.08
      }
    })
  };

  return (
    <div id="experiences" className="w-full flex flex-col gap-10 sm:gap-14 pt-16 border-t border-white/5">
      {/* Top Header block */}
      <div className="flex flex-col gap-2">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
          BUILT INTO THE EXPERIENCE
        </span>
        <h2 className="font-orbitron font-extrabold text-[32px] sm:text-[42px] md:text-[50px] tracking-tight leading-none text-white">
          Experience μDawn
        </h2>
        <span className="font-orbitron text-[14px] sm:text-[18px] text-white/60 tracking-wider">
          Every activity is designed to help participants learn by building, from the first idea to the final presentation.
        </span>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              y: -5,
              borderColor: 'rgba(255, 255, 255, 0.22)',
              backgroundColor: 'rgba(255, 255, 255, 0.025)',
              transition: { duration: 0.2 }
            }}
            className="bg-[#0c0c0c]/40 border border-white/10 rounded-md p-5 sm:p-6 lg:p-7 flex flex-col gap-3 relative transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          >
            {/* Index label indicator */}
            <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
              ACT_NODE // {(idx + 1).toString().padStart(2, '0')}
            </span>
            <h3 className="font-orbitron font-bold text-[16px] sm:text-[18px] text-white tracking-wide">
              {exp.title}
            </h3>
            <p className="font-sans font-light text-[12px] sm:text-[13px] leading-relaxed text-white/65">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
