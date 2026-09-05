import { motion } from 'framer-motion';
import { Clock, Brain, Users, Trophy, ArrowRight } from 'lucide-react';
import aboutImg from '../assets/about.png';

export default function AboutHackathon() {
  const features = [
    {
      num: "01",
      title: "30 Hours",
      icon: Clock,
      description: "A continuous, innovation-focused build experience from first concept to working product."
    },
    {
      num: "02",
      title: "Build with AI",
      icon: Brain,
      description: "Explore Google's modern AI models, APIs, developer platforms, and cloud technologies."
    },
    {
      num: "03",
      title: "Mentorship",
      icon: Users,
      description: "Learn and refine your ideas with direct support from experienced builders and industry professionals."
    },
    {
      num: "04",
      title: "Product Showcase",
      icon: Trophy,
      description: "Present your completed prototype to a jury panel and celebrate the impact of your builds."
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
    <div id="about" className="w-full flex flex-col justify-center gap-10 sm:gap-12 py-10 sm:py-16 border-b border-white/5 relative z-10 scroll-mt-20">


      {/* Main Row layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        {/* Left Column: Tag, Title with Speed slashes, Sub-headline, Description, Explore More Button */}
        <div className="lg:col-span-5 relative flex flex-col items-start">

          {/* Tag with small triangle */}
          <div className="flex items-center gap-2.5">

            <span className="font-orbitron font-semibold text-[11px] sm:text-[12px] tracking-[0.25em] text-[#4062BF] uppercase">
              ABOUT THE EVENT
            </span>
            <div className="w-12 h-[1px] bg-[#4062BF]/60" />
          </div>

          {/* Large Headline */}
          <div className="flex flex-col mt-3">
            <h2 className="font-orbitron font-extrabold text-[42px] sm:text-[54px] lg:text-[62px] tracking-tight leading-[0.92] text-white">
              What is
            </h2>
            <div className="flex items-center gap-3">
              <h2 className="font-orbitron font-extrabold text-[42px] sm:text-[54px] lg:text-[62px] tracking-tight leading-[0.92] text-[#4062BF]">
                μDawn?
              </h2>
            </div>
          </div>

          {/* Sub-headline */}
          <h3 className="font-orbitron font-bold text-[15px] sm:text-[17px] text-white tracking-wide mt-4">
            30 Hours. One Idea. Built Into Impact.
          </h3>

          {/* Paragraph */}
          <p className="font-sans font-light text-[13px] sm:text-[13.5px] leading-relaxed text-white/70 max-w-md mt-2">
            μDawn '26 is a 30-hour innovation hackathon organized by the µLearn Campus Chapter at Sree Buddha College of Engineering, <strong className="text-white font-medium">centered around</strong> the complete journey of product development.
          </p>

          {/* Explore More Button */}
          <motion.a
            href="#chapter"
            className="inline-flex items-center justify-center py-2.5 px-6 border border-[#4062BF] bg-[#4062BF]/10 hover:bg-[#4062BF]/20 text-white font-orbitron text-[11px] sm:text-[12px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none self-start gap-2.5 mt-5 shadow-sm"
            whileHover={{ y: -2 }}
          >
            <span>EXPLORE MORE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#4062BF]" />
          </motion.a>
        </div>

        {/* Right Column: About Note Collage with Handwritten Doodles & Sticky Notes */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center">

            {/* Left Tilted Sticky Note */}
            <div className="absolute -left-3 sm:-left-6 top-8 sm:top-12 z-20 bg-[#e7d8c0] text-[#1c1815] p-2.5 sm:p-3 shadow-[-4px_6px_15px_rgba(0,0,0,0.4)] rotate-[-8deg] pointer-events-none select-none hidden sm:flex flex-col font-serif italic text-[12px] sm:text-[13px] leading-tight">
              <span>Ideas</span>
              <span>today.</span>
              <span>Impact</span>
              <span className="relative font-bold">
                tomorrow.
                <svg className="absolute -bottom-1 left-0 w-full text-[#4062BF] h-1" viewBox="0 0 50 6" fill="none">
                  <path d="M1 4.5Q25 1 49 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </div>





            {/* Main Paper Note Asset */}
            <img
              src={aboutImg}
              alt="About μDawn Hackathon"
              className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Underneath Feature Cards Grid (01, 02, 03, 04) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 pt-2">
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
                y: -3,
                borderColor: '#4062BF',
                backgroundColor: 'rgba(8, 14, 28, 0.9)',
              }}
              className="rounded-2xl border border-[#4062BF]/30 bg-[#050811]/90 p-4 sm:p-5 flex flex-col gap-3 relative transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md group"
            >
              {/* Header inside card: '01 ──' on left, Circular Arrow button on right */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1.5 font-orbitron text-[11px] font-bold text-[#4062BF]">
                  <span>{feat.num}</span>
                  <div className="w-4 h-[1.5px] bg-[#4062BF]/60" />
                </div>
                <div className="w-6 h-6 rounded-full border border-[#4062BF]/40 flex items-center justify-center text-[#4062BF] group-hover:border-[#4062BF] group-hover:text-white transition-all">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Body: Icon on left, Title and description on right */}
              <div className="flex items-start gap-3 mt-1">
                <div className="w-11 h-11 rounded-xl border border-[#4062BF]/30 bg-[#4062BF]/10 flex items-center justify-center text-[#4062BF] shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-orbitron font-bold text-[14px] text-white tracking-wide">
                    {feat.title}
                  </h4>
                  <p className="font-sans font-light text-[11.5px] leading-relaxed text-white/60">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
