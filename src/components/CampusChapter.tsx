import { motion } from 'framer-motion';

export default function CampusChapter() {
  return (
    <div id="chapter" className="w-full min-h-[85vh] flex flex-col justify-center gap-8 sm:gap-10 pt-24 pb-12 border-t border-white/5">
      {/* Top Header block */}
      <div className="flex flex-col gap-2">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
          ORGANIZING TEAM
        </span>
        <h2 className="font-orbitron font-extrabold text-[32px] sm:text-[42px] md:text-[50px] tracking-tight leading-none text-white">
          Built by the Community
        </h2>
        <span className="font-orbitron text-[16px] sm:text-[20px] text-white/60 tracking-wider">
          µLearn SBC Campus Chapter
        </span>
      </div>

      {/* Grid columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Short statement */}
        <div className="lg:col-span-5 flex flex-col gap-4 font-orbitron">
          <div className="border-l-2 border-white/20 pl-4 py-1">
            <span className="block text-[11px] tracking-widest text-white/40 uppercase font-mono">NODE IDENTIFICATION //</span>
            <span className="block text-[15px] text-white font-bold tracking-wider mt-1">SBC_CHAPTER_LEADS_2026</span>
          </div>
          <p className="font-sans font-light text-[13px] sm:text-[14px] text-white/50 leading-relaxed max-w-sm">
            An active ecosystem at Sree Buddha College of Engineering supporting peer learning, student-led workshops, engineering bootcamps, and digital project creation.
          </p>
        </div>

        {/* Right Column: Narrative & CTA */}
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
          <p className="font-sans font-light text-[14px] sm:text-[16px] leading-relaxed text-white/70">
            The µLearn Campus Chapter at Sree Buddha College of Engineering is dedicated to helping student developers find their path, learn by doing, and lead technical initiatives. Through μDawn ’26, our chapter aims to bring together curious minds, industry mentors, and google developers to prototype meaningful solutions.
          </p>
          
          <motion.a
            href="https://mulearn-sbc.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center py-[14px] px-[24px] sm:py-[16px] sm:px-[32px] border border-white/45 bg-transparent text-white hover:text-black font-sans text-[12px] sm:text-[14px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 self-start"
            whileHover={{
              y: -2,
              borderColor: '#ffffff',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {/* Sliding background layer */}
            <span className="absolute inset-0 w-full h-full bg-white transition-transform duration-500 ease-[0.22,1,0.36,1] -translate-x-full group-hover:translate-x-0 z-0" />
            
            {/* Content layer */}
            <span className="relative z-10 flex items-center gap-2">
              <span>Visit Campus Chapter</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1 w-3.5 h-3.5 sm:w-4 sm:h-4 text-current"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
