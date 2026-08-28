import { motion } from 'framer-motion';
import { Users, Clock, Brain, User, Box, ArrowRight } from 'lucide-react';

export default function AboutHackathon() {
  const features = [
    {
      title: "30 Hours",
      icon: Clock,
      description: "A continuous, innovation-focused build experience from first concept to working product."
    },
    {
      title: "Build with AI",
      icon: Brain,
      description: "Explore Google's modern AI models, APIs, developer platforms, and cloud technologies."
    },
    {
      title: "Mentorship",
      icon: User,
      description: "Learn and refine your ideas with direct support from experienced builders and industry professionals."
    },
    {
      title: "Product Showcase",
      icon: Box,
      description: "Present your completed functioning prototype to a jury panel and celebrate the impact of your builds."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: custom * 0.12
      }
    })
  };

  return (
    <div id="about" className="w-full lg:h-[calc(100vh-100px)] flex flex-col justify-center gap-6 lg:gap-8 pt-16 pb-8 lg:py-0 lg:max-h-[750px]">
      {/* Top Header block */}
      <div className="flex flex-col gap-1">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-blue-500 uppercase">
          ABOUT THE EVENT
        </span>
        <h2 className="font-orbitron font-extrabold text-[28px] sm:text-[36px] md:text-[44px] tracking-tight leading-none text-white">
          What is μDawn?
        </h2>
      </div>

      {/* Main Row layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Large statement with SVG circular orbits background */}
        <div className="lg:col-span-5 relative flex flex-col justify-center py-2 overflow-visible">
          {/* Circular Orbit Graphic behind text */}
          <div className="absolute top-1/2 left-1/2 lg:-left-12 lg:top-1/2 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] pointer-events-none opacity-80 z-0">
            <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-blue-500/10">
              {/* concentric orbits */}
              <circle cx="170" cy="100" r="75" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
              <circle cx="170" cy="100" r="95" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="170" cy="100" r="115" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 4" />
              <circle cx="170" cy="100" r="135" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

          <h3 className="relative z-10 font-orbitron font-extrabold text-[24px] sm:text-[32px] md:text-[36px] leading-tight tracking-[0.05em] text-white uppercase max-w-md flex flex-col gap-1">
            <span>30 Hours.</span>
            <span>One Idea.</span>
            <span className="text-[#3b82f6] drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]">Built Into</span>
            <span>Impact.</span>
          </h3>
        </div>

        {/* Right Column: About text description nested inside a styled card */}
        <div className="lg:col-span-7 relative z-10 pt-4">
          <div className="bg-[#0b0c0f]/80 border border-blue-500/30 backdrop-blur-md rounded-2xl p-5 sm:p-6 sm:pt-8 relative flex flex-col gap-4 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            {/* Overlapping icon box */}
            <div className="absolute -top-5 left-6 p-2.5 rounded-none bg-[#0b0c0f] border border-blue-500/40 text-blue-400 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)] z-20">
              <Users className="w-5 h-5" />
            </div>

            {/* Description Text */}
            <div className="font-sans font-light text-[13.5px] sm:text-[14px] leading-relaxed text-white/70 flex flex-col gap-4 mt-2">
              <p>
                Organized by the <strong className="text-[#3b82f6] font-medium">µLearn Campus Chapter</strong> at Sree Buddha College of Engineering as part of the <strong className="text-[#3b82f6] font-medium">Build with AI</strong> initiative, <strong className="text-white font-semibold">μDawn ’26</strong> is a 30-hour Innovation Hackathon centered around the complete journey of product development.
              </p>
              <p>
                Rather than a standard coding competition, this experience is designed around learning through building. Participants are encouraged to understand real-world problems, design thoughtful solutions, develop AI-powered applications, receive mentorship, validate and refine their products, and present their work to the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Underneath Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-2">
        {features.map((feat, idx) => {
          const IconComponent = feat.icon;
          return (
            <motion.div
              key={feat.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -4,
                borderColor: 'rgba(59, 130, 246, 0.25)',
                backgroundColor: 'rgba(11, 12, 15, 0.6)',
              }}
              className="bg-[#07090e]/30 border border-white/5 rounded-2xl p-5 flex flex-col gap-3 relative transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] overflow-hidden group"
            >
              {/* Header inside card: Icon and Arrow */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  {/* Glowing blue circular container */}
                  <div className="w-10 h-10 rounded-full border border-blue-500/20 flex items-center justify-center bg-blue-500/5 relative shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:border-blue-500/40 transition-all duration-300 text-blue-400">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="font-orbitron font-bold text-[14px] sm:text-[15px] text-white tracking-wide">
                    {feat.title}
                  </h4>
                </div>
                {/* Arrow right */}
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Short Blue Divider */}
              <div className="w-8 h-[2px] bg-blue-500 rounded-full opacity-80" />

              {/* Description */}
              <p className="font-sans font-light text-[12px] sm:text-[12.5px] leading-relaxed text-white/60">
                {feat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
