import { useState } from 'react';
import { motion } from 'framer-motion';
import makeMyPassLogo from '../assets/makemypass.webp';

interface RegisterButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
}

export default function RegisterButton({
  onClick,
  text = 'Register Now',
  className = '',
}: RegisterButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden inline-flex items-center justify-center min-w-[240px] sm:min-w-[300px] lg:min-w-[330px] h-[52px] sm:h-[60px] lg:h-[64px] bg-white text-black font-sans font-bold tracking-[0.08em] uppercase transition-colors duration-300 rounded-none border border-transparent hover:border-white/40 cursor-pointer select-none ${className}`}
      whileHover={{
        y: -2,
        boxShadow: '0 0 25px rgba(255, 255, 255, 0.25)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* ── Default Content ────────────────────────────────────────── */}
      <motion.span
        initial={false}
        animate={isHovered ? { x: '100%', opacity: 0 } : { x: '0%', opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-[24px] sm:px-[32px] lg:px-[38px] text-[12px] sm:text-[14px] lg:text-[15px] flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <span>{text}</span>
      </motion.span>

      {/* ── MakeMyPass Hover State (Slides in from Left to Right via Framer Motion) ── */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '0%' } : { x: '-100%' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-20 bg-black text-white flex items-center justify-center px-3 sm:px-5 gap-2 sm:gap-2.5 pointer-events-none"
      >
        {/* "Made possible with" text */}
        <motion.span
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
          transition={{ duration: 0.3, delay: 0.08, ease: 'easeOut' }}
          className="font-sans font-normal text-[11.5px] sm:text-[13px] lg:text-[14px] text-white tracking-normal normal-case whitespace-nowrap shrink-0"
        >
          Made possible with
        </motion.span>

        {/* MakeMyPass WebP Logo Image */}
        <motion.div
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center shrink-0 h-full py-1.5 overflow-hidden"
        >
          <img
            src={makeMyPassLogo}
            alt="MakeMyPass Logo"
            className="h-[36px] sm:h-[44px] lg:h-[48px] w-auto max-w-[145px] sm:max-w-[175px] object-contain shrink-0"
          />
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
