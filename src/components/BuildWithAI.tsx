import { motion } from 'framer-motion';
import { aiEcosystemBlocks } from '../config/eventConfig';

export default function BuildWithAI() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: custom * 0.1
      }
    })
  };

  return (
    <div id="ai-ecosystem" className="w-full flex flex-col gap-10 sm:gap-14 pt-16 border-t border-white/5">
      {/* Top Header block */}
      <div className="flex flex-col gap-2">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
          BUILD WITH AI
        </span>
        <h2 className="font-orbitron font-extrabold text-[32px] sm:text-[42px] md:text-[50px] tracking-tight leading-none text-white">
          Google's AI Ecosystem
        </h2>
        <span className="font-orbitron text-[14px] sm:text-[18px] text-white/60 tracking-wider">
          Explore Google's AI models, developer platforms, and cloud technologies to solve real-world challenges.
        </span>
      </div>

      {/* Intro and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: General Tech Statement */}
        <div className="lg:col-span-5 font-orbitron">
          <div className="border border-white/10 p-5 rounded-none bg-black/40 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <span className="block text-[10px] tracking-widest text-white/40 uppercase font-mono mb-2">SYSTEM_INTEGRATION //</span>
            <p className="font-sans font-light text-[13px] sm:text-[14px] text-white/70 leading-relaxed">
              Google's developer tools form the foundation of our hackathon experience. Work with recommended models and developer platforms to prototype products. Supported APIs and resources will be officially announced before kickoff.
            </p>
          </div>
        </div>

        {/* Right: Technical Focus Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {aiEcosystemBlocks.map((block, idx) => (
            <motion.div
              key={block.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                borderColor: 'rgba(255, 255, 255, 0.22)',
                backgroundColor: 'rgba(255, 255, 255, 0.015)'
              }}
              className="bg-[#0c0c0c]/40 border border-white/10 p-5 sm:p-6 rounded-none flex flex-col gap-2 relative transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            >
              <h4 className="font-orbitron font-bold text-[15px] sm:text-[16px] text-white tracking-wide uppercase">
                {block.title}
              </h4>
              <p className="font-sans font-light text-[12px] sm:text-[13px] leading-relaxed text-white/55">
                {block.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
