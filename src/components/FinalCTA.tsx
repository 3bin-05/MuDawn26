import { motion } from 'framer-motion';
import RegisterButton from './RegisterButton';

interface FinalCTAProps {
  onRegisterClick: () => void;
  onContactClick: () => void;
}

export default function FinalCTA({ onRegisterClick, onContactClick }: FinalCTAProps) {
  return (
    <div id="final-cta" className="w-full min-h-[75vh] flex flex-col gap-8 sm:gap-10 pt-24 pb-12 border-t border-white/5 items-center justify-center text-center max-w-4xl mx-auto">
      {/* Small top node label */}
      <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
        READY TO BUILD?
      </span>

      {/* Main giant CTA Title */}
      <h2 className="font-orbitron font-extrabold text-[36px] sm:text-[48px] md:text-[60px] tracking-tight leading-none text-white uppercase max-w-2xl select-none">
        Bring your idea.<br />
        Build something meaningful.
      </h2>

      {/* Supporting text */}
      <p className="font-sans font-light text-[13px] sm:text-[16px] text-white/60 leading-relaxed max-w-xl">
        Bring your curiosity, collaborate with peers, receive technical mentorship from Google developer groups, and build prototypes over 30 hours of continuous innovation.
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
        {/* Register for μDawn '26 with MakeMyPass hover animation */}
        <RegisterButton onClick={onRegisterClick} text="Register for μDawn '26" />

        {/* Contact Us */}
        <motion.button
          onClick={onContactClick}
          className="group relative overflow-hidden inline-flex items-center py-[14px] px-[28px] sm:py-[18px] sm:px-[36px] lg:py-[20px] lg:px-[40px] border border-white/30 bg-transparent text-white hover:text-black font-sans text-[12px] sm:text-[14px] lg:text-[15px] font-medium tracking-[0.08em] uppercase transition-colors duration-300 rounded-none"
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
            <span>Contact Us</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-y-0.5 text-current"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.button>
      </div>
    </div>
  );
}
