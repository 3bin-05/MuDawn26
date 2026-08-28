import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/SBC-logo.svg';

interface NavbarProps {
  activeSection: 'hero' | 'about' | 'chapter' | 'timeline' | 'experiences' | 'sponsors';
  setActiveSection: (section: 'hero' | 'about' | 'chapter' | 'timeline' | 'experiences' | 'sponsors', force?: boolean) => void;
  onRegisterClick: () => void;
}

export default function Navbar({ activeSection, setActiveSection, onRegisterClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Darken navbar slightly after scrolling 60px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: 'hero' },
    { label: 'About', value: 'about' },
    { label: 'Campus', value: 'chapter' },
    { label: 'Timeline', value: 'timeline' },
    { label: 'Experiences', value: 'experiences' },
    { label: 'Sponsors', value: 'sponsors' },
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const handleNavClick = (e: React.MouseEvent, value: typeof navItems[number]['value']) => {
    e.preventDefault();
    setActiveSection(value, true);
  };

  const isItemActive = (value: string) => activeSection === value;

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl'
          : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
      }`}
    >
      {/* Glass sheen line at very top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-14 py-4 flex justify-between items-center">

        {/* Left: Logo + Brand */}
        <a href="#" onClick={(e) => handleNavClick(e as React.MouseEvent, 'hero')} className="flex items-center gap-3 group">
          <img
            src={logoImg}
            alt="MuLearn SBC Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
          />
          <div className="flex items-center gap-2">
            <span className="text-white/20 font-light text-sm select-none">|</span>
            <span className="font-orbitron font-bold text-white/90 text-[12px] sm:text-[13px] tracking-[0.12em] select-none group-hover:text-white transition-colors duration-300">
              μDawn '26
            </span>
          </div>
        </a>

        {/* Center/Right: Desktop nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isItemActive(item.value);
              return (
                <motion.button
                  key={item.value}
                  onClick={(e) => handleNavClick(e, item.value)}
                  className="relative px-3 py-1.5 text-[11px] lg:text-[12px] font-orbitron font-medium tracking-[0.12em] uppercase transition-all duration-200 rounded-none"
                  style={{ color: active ? '#ffffff' : 'rgba(255,255,255,0.45)' }}
                  whileHover={{ color: '#ffffff' }}
                >
                  {/* Active pill highlight */}
                  {active && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-none bg-white/10 border border-white/15"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>

                  {/* Underline slide-in on hover */}
                  <motion.span
                    className="absolute bottom-0 left-3 right-3 h-[1px] bg-white/40 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              );
            })}
          </nav>

          {/* Register CTA */}
          <motion.button
            onClick={onRegisterClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden group px-4 py-2 text-[11px] font-orbitron font-semibold tracking-wider uppercase text-white border border-white/30 rounded-none transition-all duration-300 hover:border-white/70"
          >
            {/* Fill sweep on hover */}
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[0.22,1,0.36,1]" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Register Now
            </span>
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 z-50"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1.5px] bg-white"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[1.5px] bg-white"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1.5px] bg-white"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Full-screen Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 w-screen h-screen bg-black/90 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-2"
          >
            {/* Sheen top line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <nav className="flex flex-col items-center gap-5">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.value}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: idx * 0.07 }}
                  onClick={(e) => {
                    handleNavClick(e, item.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-orbitron font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                    isItemActive(item.value) ? 'text-white' : 'text-white/35 hover:text-white/75'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: navItems.length * 0.07 }}
                onClick={() => { onRegisterClick(); setIsMobileMenuOpen(false); }}
                className="mt-6 px-8 py-3 border border-white/30 text-white text-[13px] font-orbitron font-semibold tracking-wider rounded-none hover:bg-white hover:text-black transition-all duration-300 uppercase"
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
