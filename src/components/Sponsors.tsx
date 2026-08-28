import { motion } from 'framer-motion';

export default function Sponsors() {
  const tiers = [
    {
      name: "Title Sponsor Slot",
      sizeClass: "h-28 sm:h-36 md:h-40 col-span-2",
      label: "TITLE PARTNER",
      desc: "Reserved for prime event sponsorship and alignment."
    },
    {
      name: "Technology Partner Slot",
      sizeClass: "h-20 sm:h-24 md:h-28 col-span-1",
      label: "TECHNOLOGY PARTNER",
      desc: "API resources, sandbox credits, or technical tooling."
    },
    {
      name: "Technology Partner Slot",
      sizeClass: "h-20 sm:h-24 md:h-28 col-span-1",
      label: "TECHNOLOGY PARTNER",
      desc: "API resources, sandbox credits, or technical tooling."
    },
    {
      name: "Community Partner Slot",
      sizeClass: "h-16 sm:h-20 md:h-22 col-span-1",
      label: "COMMUNITY PARTNER",
      desc: "Chapters, marketing hubs, or local developer communities."
    },
    {
      name: "Supporting Partner Slot",
      sizeClass: "h-16 sm:h-20 md:h-22 col-span-1",
      label: "SUPPORTING PARTNER",
      desc: "Swags, student credits, or event support."
    }
  ];

  return (
    <div id="sponsors" className="w-full min-h-[80vh] flex flex-col justify-center gap-10 sm:gap-14 pt-24 pb-12 border-t border-white/5">
      {/* Top Header block */}
      <div className="flex flex-col gap-2">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-white/50 uppercase">
          COLLABORATIONS
        </span>
        <h2 className="font-orbitron font-extrabold text-[32px] sm:text-[42px] md:text-[50px] tracking-tight leading-none text-white">
          Sponsors & Partners
        </h2>
        <span className="font-orbitron text-[14px] sm:text-[18px] text-white/60 tracking-wider">
          Connecting student developers with leading technology ecosystems.
        </span>
      </div>

      {/* Grid of editable sponsor placeholder cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 max-w-4xl">
        {tiers.map((tier, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              borderColor: 'rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(255, 255, 255, 0.015)'
            }}
            className={`border border-white/8 border-dashed rounded-none p-5 flex flex-col justify-between bg-black/20 ${tier.sizeClass} relative transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]`}
          >
            {/* Top info */}
            <div className="flex justify-between items-start font-mono text-[9px] text-white/35 tracking-wider uppercase">
              <span>{tier.label}</span>
              <span>SLOT_INDEX // 0{idx + 1}</span>
            </div>

            {/* Core label */}
            <div className="my-auto py-2">
              <span className="block font-orbitron font-bold text-[14px] sm:text-[16px] text-white/40 tracking-[0.15em] uppercase">
                {tier.name}
              </span>
              <p className="font-sans font-light text-[11px] sm:text-[12px] text-white/25 mt-1 leading-relaxed max-w-md">
                {tier.desc}
              </p>
            </div>

            {/* Bottom contact trigger */}
            <div className="flex justify-end font-mono text-[8px] text-white/20 uppercase tracking-widest">
              <span>STATUS: AVAILABLE</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note about sponsor package */}
      <div className="max-w-2xl border border-white/5 bg-[#0d0d0d]/40 rounded-none p-5 font-mono text-[10px] sm:text-[11px] text-white/50 flex flex-col gap-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <span className="text-white/60 font-bold">SPONSORSHIP_INQUIRIES</span>
        <p className="font-sans font-light text-[12px] text-white/40 leading-relaxed mt-1">
          Partner with μDawn ’26 to support student builders. Opportunities include cloud credit provisioning, technical mentorship packages, dedicated API tracks, merchandise goodies, and prize sponsorships. Reach out to our campus enablers to explore partner tiers.
        </p>
      </div>
    </div>
  );
}
