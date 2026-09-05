import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import bgImg from '../assets/mubg.webp';
import Counter from './Counter';
import RegisterButton from './RegisterButton';

interface HeroProps {
  onContactClick: () => void;
  onRegisterClick: () => void;
}

export default function Hero({ onContactClick, onRegisterClick }: HeroProps) {
  // Parallax background variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft spring config for cinematic lag-free parallax
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 40,
    damping: 18,
  });
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 40,
    damping: 18,
  });

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointerQuery.matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate cursor position offset from center (-0.5 to 0.5)
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Entrance variants for text items
  const exploreVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 },
    },
  };

  const word1Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 },
    },
  };

  const word2Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.55 },
    },
  };

  const word3Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.7 },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeOut' as const, delay: 0.85 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 0.82,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 1.0 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 1.15 },
    },
  };

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2, once: false }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-screen min-h-[100dvh] overflow-hidden bg-black select-none pointer-events-auto"
    >
      {/* Background Image with subtle Parallax */}
      <motion.div
        style={{
          x: bgX,
          y: bgY,
          scale: 1.03, // Slight scale to avoid edges showing
        }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
      >
        <img
          src={bgImg}
          alt="Space background"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-black/28 pointer-events-none"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.28)' }}
        />
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 flex flex-col justify-between pt-[100px] sm:pt-[120px] lg:pt-[130px] pb-[30px] sm:pb-[45px] lg:pb-[50px] short:pt-[80px] short:pb-[30px] xshort:pt-[70px] xshort:pb-[20px]">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center max-w-[900px]">
          {/* Metadata context */}
          <motion.div
            variants={exploreVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-1 font-orbitron text-[9px] sm:text-[11px] md:text-[12px] tracking-[0.2em] text-white/50 mb-2 uppercase"
          >
            <span>30-HOUR INNOVATION HACKATHON</span>
          </motion.div>

          {/* Event Tagline */}
          <motion.span
            variants={exploreVariants}
            initial="hidden"
            animate="visible"
            className="font-orbitron font-extrabold text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] xl:text-[60px] short:text-[36px] xshort:text-[30px] tracking-explore text-white leading-none mb-3"
          >
            μDawn ’26
          </motion.span>

          {/* Main Giant Heading */}
          <h1 className="font-orbitron font-bold text-[clamp(44px,14vw,50px)] sm:text-[70px] md:text-[100px] lg:text-[120px] xl:text-[140px] 2xl:text-[150px] short:text-[90px] xshort:text-[75px] leading-hero tracking-tighter text-premiumText flex flex-col select-none">
            <motion.span
              variants={word1Variants}
              initial="hidden"
              animate="visible"
              className="block text-[#ffffff]"
            >
              BUILD.
            </motion.span>
            <motion.span
              variants={word2Variants}
              initial="hidden"
              animate="visible"
              className="block text-[#ffffff]/90"
            >
              LEARN.
            </motion.span>
            <motion.span
              variants={word3Variants}
              initial="hidden"
              animate="visible"
              className="block text-[#ffffff]/80"
            >
              INNOVATE.
            </motion.span>
          </h1>

          {/* Horizontal Divider */}
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            animate="visible"
            className="h-[1.5px] w-full max-w-[280px] sm:max-w-none sm:w-[360px] md:w-[450px] bg-white/25 origin-left mt-4 mb-3 short:mt-3 short:mb-2"
          />

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="font-sans text-[12px] sm:text-[15px] md:text-[17px] lg:text-[20px] short:text-[14px] xshort:text-[12px] font-light leading-relaxed text-white/82 mb-6 short:mb-5 max-w-xl"
          >
            Brought to you by µLearn SBC and Build with AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 items-center self-start"
          >
            {/* Primary Action Button with MakeMyPass hover transition */}
            <RegisterButton onClick={onRegisterClick} text="Register Now" />

            {/* Secondary Action Button */}
            <motion.button
              onClick={onContactClick}
              className="group relative overflow-hidden inline-flex items-center py-[14px] px-[28px] sm:py-[18px] sm:px-[36px] lg:py-[20px] lg:px-[44px] border border-white/30 bg-transparent text-white hover:text-black font-sans text-[13px] sm:text-[15px] lg:text-[16px] font-semibold tracking-[0.08em] uppercase transition-colors duration-300"
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
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-y-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 text-current"
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
          </motion.div>

          {/* Mobile inline stats */}
          <div className="block md:hidden mt-8 short:mt-6 xshort:mt-4 animate-fade-in">
            <Counter />
          </div>
        </div>
      </div>

      {/* Desktop absolute stats */}
      <div className="hidden md:block absolute bottom-[30px] sm:bottom-[45px] lg:bottom-[50px] right-6 sm:right-10 lg:right-14 short:bottom-[40px] xshort:bottom-[30px] z-30">
        <Counter />
      </div>

      {/* Soft Faded Gradient Transition into About */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#060606]/65 to-[#060606] pointer-events-none z-20" />
    </motion.section>
  );
}
