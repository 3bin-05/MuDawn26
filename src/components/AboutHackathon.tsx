import { motion } from 'framer-motion';

export default function AboutHackathon() {
  const features = [
    {
      title: "30 Hours",
      description: "A continuous, innovation-focused build experience from first concept to working product."
    },
    {
      title: "Build with AI",
      description: "Explore Google's modern AI models, APIs, developer platforms, and cloud technologies."
    },
    {
      title: "Mentorship",
      description: "Learn and refine your ideas with direct support from experienced builders and industry professionals."
    },
    {
      title: "Product Showcase",
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
    <div id="about" className="w-full flex flex-col gap-10 sm:gap-14 pt-16">
      {/* Top Header block */}
      <div className="flex flex-col gap-2">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
          ABOUT THE EVENT
        </span>
        <h2 className="font-orbitron font-extrabold text-[32px] sm:text-[42px] md:text-[50px] tracking-tight leading-none text-white">
          What is μDawn?
        </h2>
      </div>

      {/* Main Row layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Large statement */}
        <div className="lg:col-span-5">
          <h3 className="font-orbitron font-bold text-[28px] sm:text-[36px] md:text-[40px] leading-tight tracking-wide text-white uppercase max-w-md">
            30 Hours.<br />
            One Idea.<br />
            <span className="text-white/80">Built into</span><br />
            Impact.
          </h3>
        </div>

        {/* Right Column: About text description */}
        <div className="lg:col-span-7 font-sans font-light text-[14px] sm:text-[16px] leading-relaxed text-white/70 flex flex-col gap-5">
          <p>
            Organized by the <strong className="text-white font-medium">µLearn Campus Chapter</strong> at Sree Buddha College of Engineering as part of the <strong className="text-white font-medium">Build with AI</strong> initiative, <strong className="text-white font-medium">μDawn ’26</strong> is a 30-hour Innovation Hackathon centered around the complete journey of product development.
          </p>
          <p>
            Rather than a standard coding competition, this experience is designed around learning through building. Participants are encouraged to understand real-world problems, design thoughtful solutions, develop AI-powered applications, receive mentorship, validate and refine their products, and present their work to the community.
          </p>
        </div>
      </div>

      {/* Underneath Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-6">
        {features.map((feat, idx) => (
          <motion.div
            key={feat.title}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              y: -6,
              borderColor: 'rgba(255, 255, 255, 0.22)',
            }}
            className="bg-[#0d0d0d]/40 border border-white/10 rounded-md p-5 sm:p-6 lg:p-7 flex flex-col gap-3 relative transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          >
            <h4 className="font-orbitron font-bold text-[18px] sm:text-[20px] text-white tracking-wide">
              {feat.title}
            </h4>
            <p className="font-sans font-light text-[12px] sm:text-[13px] leading-relaxed text-white/60">
              {feat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
