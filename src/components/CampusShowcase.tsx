import { motion } from 'framer-motion';

export default function CampusShowcase() {
  return (
    <div id="showcase" className="w-full min-h-[85vh] flex flex-col justify-center gap-8 sm:gap-10 pt-24 pb-12 border-t border-white/5">
      {/* Top Header block */}
      <div className="flex flex-col gap-2">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
          EVENT VENUE
        </span>
        <h2 className="font-orbitron font-extrabold text-[32px] sm:text-[42px] md:text-[50px] tracking-tight leading-none text-white">
          Where μDawn Happens
        </h2>
        <span className="font-orbitron text-[16px] sm:text-[20px] text-white/60 tracking-wider">
          Sree Buddha College of Engineering
        </span>
      </div>

      {/* Visual Workspace Image Placeholder (Space / Blueprint style) */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] border border-white/10 rounded-sm bg-black/60 overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {/* Subtle background tech grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
        
        {/* Soft glowing radar animation to feel alive */}
        <motion.div
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.08, 0.18, 0.08]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none"
        />

        {/* Diagonal styling stripes in corner */}
        <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/20 translate-x-4 -translate-y-4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/20 -translate-x-4 translate-y-4 pointer-events-none" />

        {/* Interactive hover scale outline wrapper */}
        <motion.div 
          className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        >
          {/* Top Row: Coordinates & Status */}
          <div className="flex justify-between items-start font-mono text-[9px] sm:text-[10px] text-white/40 tracking-wider">
            <div className="flex flex-col gap-0.5">
              <span>LAT: 9°12'41"N</span>
              <span>LONG: 76°38'29"E</span>
            </div>
            <div className="flex items-center gap-2 border border-white/10 px-2.5 py-1 bg-black/40 rounded-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" />
              <span className="uppercase text-white/60">CHAPTER_BASE // VENUE</span>
            </div>
          </div>

          {/* Center text representing a blueprint mock */}
          <div className="flex flex-col items-center justify-center text-center self-center my-auto gap-2">
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              className="text-white/30 group-hover:text-white/65 transition-colors duration-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="font-orbitron font-bold text-[13px] sm:text-[15px] text-white/20 group-hover:text-white/50 tracking-[0.2em] uppercase transition-colors duration-500">
              Campus Photograph Workspace
            </span>
          </div>

          {/* Bottom Card details */}
          <div className="bg-black/75 border border-white/15 p-4 max-w-sm backdrop-blur-md self-start rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <h4 className="font-orbitron font-bold text-[14px] sm:text-[16px] text-white tracking-wide uppercase">
              Sree Buddha College of Engineering
            </h4>
            <p className="font-sans font-light text-[11px] sm:text-[12px] text-white/55 mt-1 leading-relaxed">
              Pattoor, Kerala. Hosting the 30-hour development cycles, collaborative workshop halls, and final presentation panels.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Explore link CTA */}
      <div className="flex justify-end mt-2">
        <motion.a
          href="https://mulearn-sbc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center py-[12px] px-[20px] sm:py-[14px] sm:px-[28px] border border-white/45 bg-transparent text-white hover:text-black font-sans text-[11px] sm:text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-300"
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
            <span>Explore µLearn SBC</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1 text-current"
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
  );
}
