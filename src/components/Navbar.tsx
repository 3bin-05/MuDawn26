import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/SBC-logo.svg';

interface NavbarProps {
  activeSection: 'hero' | 'about' | 'chapter' | 'timeline' | 'experiences' | 'sponsors';
  setActiveSection: (section: 'hero' | 'about' | 'chapter' | 'timeline' | 'experiences' | 'sponsors', force?: boolean) => void;
  onRegisterClick: () => void;
}

export default function Navbar({ activeSection, setActiveSection, onRegisterClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', value: 'hero' },
    { label: 'ABOUT', value: 'about' },
    { label: 'CAMPUS', value: 'chapter' },
    { label: 'TIMELINE', value: 'timeline' },
    { label: 'EXPERIENCES', value: 'experiences' },
    { label: 'SPONSORS', value: 'sponsors' },
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.3,
      },
    },
  };

  const handleNavClick = (e: React.MouseEvent, value: typeof navItems[number]['value']) => {
    e.preventDefault();
    setActiveSection(value, true);
  };

  const isItemActive = (value: string) => {
    return activeSection === value;
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute top-0 left-0 w-full z-50 bg-transparent animate-fade-in"
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14 pt-5 pb-4 flex justify-between items-center">
        {/* Left: Logo and Branding */}
        <a href="#" className="flex items-center gap-3 sm:gap-4 group">
          <img
            src={logoImg}
            alt="MuLearn SBC Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102"
          />
          <span className="font-orbitron font-bold text-white text-[12px] sm:text-[14px] md:text-[15px] tracking-[0.1em] select-none flex items-center gap-1.5 sm:gap-2">
            <span>μLearn SBC</span>
            <span className="text-white/30 font-light">|</span>
            <span className="text-white/90">μDawn ’26</span>
          </span>
        </a>

        {/* Right: Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <nav className="flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.value}
                onClick={(e) => handleNavClick(e, item.value)}
                className={`text-[11px] lg:text-[13px] xl:text-[14px] font-orbitron font-medium tracking-nav transition-all relative flex flex-col items-center py-1 ${
                  isItemActive(item.value) ? 'text-white' : 'text-white/45 hover:text-white/80'
                }`}
              >
                <span>{item.label}</span>
                {isItemActive(item.value) && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#ffffff]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Prominent CTA Button */}
          <button
            onClick={onRegisterClick}
            className="px-4 py-2 border border-white/40 hover:border-white text-white hover:text-black bg-transparent hover:bg-white text-[11px] font-orbitron font-semibold tracking-wider rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] uppercase"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 bg-transparent border-none cursor-pointer z-50"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-white"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-white"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Thin Divider Under Navbar */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14">
        <motion.div
          variants={dividerVariants}
          className="h-[1px] w-full bg-white/18 origin-left"
          style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
        />
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 w-screen h-screen bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={(e) => {
                    handleNavClick(e, item.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-xl font-orbitron font-semibold tracking-nav uppercase transition-colors ${
                    isItemActive(item.value) ? 'text-white' : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navItems.length * 0.08 }}
                onClick={() => {
                  onRegisterClick();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 px-6 py-3 border border-white/40 text-white text-[13px] font-orbitron font-semibold tracking-wider rounded-sm transition-all duration-300 uppercase w-48 text-center"
              >
                Register Now
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
