import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import sbceImg from '../assets/sbce.webp';
import googleMapsLogo from '../assets/Google_Maps .webp';


export default function CampusShowcase() {
  const [hovered, setHovered] = useState(false);

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

      {/* Campus Image */}
      <div
        className="group relative w-full aspect-[16/9] md:aspect-[21/9] border border-white/10 rounded-none overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Actual campus photograph */}
        <img
          src={sbceImg}
          alt="Sree Buddha College of Engineering — Event Venue"
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${hovered ? 'scale-[1.04]' : 'scale-100'}`}
        />

        {/* Permanent subtle dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20 pointer-events-none" />

        {/* Coordinates top-left */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[9px] sm:text-[10px] text-white/50 tracking-wider flex flex-col gap-0.5 pointer-events-none z-10">
          <span>LAT: 9°12'41"N</span>
          <span>LONG: 76°38'29"E</span>
        </div>

        {/* Live badge top-right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 border border-white/15 px-2.5 py-1 bg-black/50 backdrop-blur-sm rounded-none pointer-events-none z-10">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-pulse" />
          <span className="font-mono text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider">CHAPTER_BASE // VENUE</span>
        </div>

        {/* Bottom info card */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/65 backdrop-blur-md border border-white/15 px-4 py-3 max-w-xs sm:max-w-sm rounded-none shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-none z-10">
          <h4 className="font-orbitron font-bold text-[13px] sm:text-[15px] text-white tracking-wide uppercase">
            Sree Buddha College of Engineering
          </h4>
          <p className="font-sans font-light text-[11px] sm:text-[12px] text-white/55 mt-1 leading-relaxed">
            Pattoor, Kerala — Hosting 30-hour development cycles, collaborative workshop halls, and final presentation panels.
          </p>
        </div>

        {/* ── Hover Overlay ─────────────────────────────────────────────────── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0 z-20 flex items-center justify-center"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.45)' }}
            >
              <motion.a
                href="https://maps.app.goo.gl/GA1dGCTLqTBoKq8v6"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.88, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-white text-[#1a1a1a] font-sans font-semibold text-[13px] sm:text-[14px] tracking-wide px-5 py-3 sm:px-6 sm:py-3.5 rounded-none shadow-[0_8px_32px_rgba(0,0,0,0.5)] select-none"
              >
                <img src={googleMapsLogo} alt="Google Maps Logo" decoding="async" className="w-5 h-5 object-contain" />
                <span>View on Google Maps</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
