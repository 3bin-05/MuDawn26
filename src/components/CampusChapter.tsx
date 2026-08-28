import { motion } from 'framer-motion';
import { Users, Code, GraduationCap, Rocket, ArrowRight, Globe, Mail } from 'lucide-react';
import campusChapterBlueprint from '../assets/campus_chapter_blueprint.png';

export default function CampusChapter() {
  return (
    <div id="chapter" className="w-full lg:h-[calc(100vh-100px)] flex flex-col justify-center gap-4 lg:gap-5 pt-10 pb-4 lg:py-0 lg:max-h-[750px] border-t border-white/5 relative z-10">
      
      {/* Top Header block */}
      <div className="flex flex-col gap-1">
        <span className="font-orbitron font-semibold text-[11px] tracking-[0.3em] text-[#3b82f6] uppercase">
          ORGANIZING TEAM
        </span>
        <h2 className="font-orbitron font-extrabold text-[28px] sm:text-[36px] md:text-[44px] tracking-tight leading-none text-white uppercase">
          Built by the Community
        </h2>
        <span className="font-sans text-[13px] sm:text-[14px] text-white/50 tracking-wider">
          µLearn SBC Campus Chapter
        </span>
      </div>

      {/* Grid columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        
        {/* Left Column: Node Box, Description, Connect, Stats Box */}
        <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4">
          
          {/* Node identification box */}
          <div className="flex items-center justify-between bg-[#0b0c0f]/80 border border-blue-500/30 rounded-none p-2.5 sm:p-3 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <div className="flex flex-col gap-0.5 font-mono">
              <span className="text-[9px] tracking-widest text-[#3b82f6]/70 uppercase">NODE IDENTIFICATION //</span>
              <span className="text-[13px] sm:text-[14px] text-white font-bold tracking-wider">SBC_CHAPTER_LEADS_2026</span>
            </div>
            <div className="text-blue-400">
              <Users className="w-4.5 h-4.5" />
            </div>
          </div>

          {/* Description with vertical accent line */}
          <div className="relative pl-5 border-l border-blue-500/20 py-0.5">
            {/* Glowing dot in the middle of the vertical line */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[4.5px] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <p className="font-sans font-light text-[12.5px] sm:text-[13px] text-white/70 leading-relaxed max-w-sm">
              An active ecosystem at Sree Buddha College of Engineering supporting peer learning, student-led workshops, engineering bootcamps, and digital project creation.
            </p>
          </div>

          {/* Connect With Us header */}
          <div className="relative pl-5 border-l border-blue-500/20 py-0.5 flex items-center">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[3.5px] w-1.5 h-1.5 rounded-full border border-blue-500 bg-[#060606] shadow-[0_0_6px_#3b82f6]" />
            <span className="font-orbitron font-semibold text-[10px] tracking-[0.2em] text-[#3b82f6] uppercase">
              CONNECT WITH US -
            </span>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-3 gap-2.5 w-full">
            {/* Instagram */}
            <a href="https://instagram.com/mulearn.sbc" target="_blank" rel="noopener noreferrer" className="bg-[#0b0c0f]/60 border border-white/5 hover:border-blue-500/35 rounded-none p-2 sm:p-2.5 flex items-center gap-2 transition-all duration-300 group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-semibold text-white truncate">Instagram</span>
                <span className="text-[8.5px] text-white/40 truncate">@mulearn.sbc</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/company/mulearn-sbc" target="_blank" rel="noopener noreferrer" className="bg-[#0b0c0f]/60 border border-white/5 hover:border-blue-500/35 rounded-none p-2 sm:p-2.5 flex items-center gap-2 transition-all duration-300 group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-semibold text-white truncate">LinkedIn</span>
                <span className="text-[8.5px] text-white/40 truncate">/µLearn SBC</span>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:mulearnsbc@gmail.com" className="bg-[#0b0c0f]/60 border border-white/5 hover:border-blue-500/35 rounded-none p-2 sm:p-2.5 flex items-center gap-2 transition-all duration-300 group">
              <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-semibold text-white truncate">Email</span>
                <span className="text-[8.5px] text-white/40 truncate">mulearnsbc@gmail...</span>
              </div>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com/@mulearn-sbc" target="_blank" rel="noopener noreferrer" className="bg-[#0b0c0f]/60 border border-white/5 hover:border-blue-500/35 rounded-none p-2 sm:p-2.5 flex items-center gap-2 transition-all duration-300 group">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-semibold text-white truncate">YouTube</span>
                <span className="text-[8.5px] text-white/40 truncate">µLearn SBC</span>
              </div>
            </a>

            {/* Discord */}
            <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" className="bg-[#0b0c0f]/60 border border-white/5 hover:border-blue-500/35 rounded-none p-2 sm:p-2.5 flex items-center gap-2 transition-all duration-300 group">
              <div className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 127.14 96.36" fill="currentColor" className="w-4 h-4">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2a75.58,75.58,0,0,0,72.9,0c.82.71,1.68,1.4,2.58,2a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129,54.65,122.5,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-semibold text-white truncate">Discord</span>
                <span className="text-[8.5px] text-white/40 truncate">Join server</span>
              </div>
            </a>

            {/* Website */}
            <a href="https://mulearn-sbc.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-[#0b0c0f]/60 border border-white/5 hover:border-blue-500/35 rounded-none p-2 sm:p-2.5 flex items-center gap-2 transition-all duration-300 group">
              <Globe className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] font-semibold text-white truncate">Website</span>
                <span className="text-[8.5px] text-white/40 truncate">mulearn-sbc...</span>
              </div>
            </a>
          </div>

          {/* Stats Box card with bottom glow */}
          <div className="bg-[#0b0c0f]/40 border border-white/5 rounded-none p-2.5 relative overflow-hidden">
            <div className="grid grid-cols-4 gap-1 items-start divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center gap-1 px-1">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-orbitron font-extrabold text-[13px] sm:text-[15px] text-white">1000+</span>
                <span className="text-[8.5px] text-white/50 leading-tight">Students Impacted</span>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center gap-1 px-1">
                <Code className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-orbitron font-extrabold text-[13px] sm:text-[15px] text-white">50+</span>
                <span className="text-[8.5px] text-white/50 leading-tight">Tech Initiatives</span>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center gap-1 px-1">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-orbitron font-extrabold text-[13px] sm:text-[15px] text-white">20+</span>
                <span className="text-[8.5px] text-white/50 leading-tight">Workshops Conducted</span>
              </div>
              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center gap-1 px-1">
                <Rocket className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-orbitron font-extrabold text-[13px] sm:text-[15px] text-white">∞</span>
                <span className="text-[8.5px] text-white/50 leading-tight">Possibilities</span>
              </div>
            </div>
            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 shadow-[0_-2px_10px_rgba(59,130,246,0.5)]" />
          </div>

        </div>

        {/* Right Column: Narrative, Blueprint Image & CTA */}
        <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5">
          
          {/* Blueprint Image Box */}
          <div className="w-full max-h-[200px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[260px] xl:max-h-[290px] relative flex items-center justify-center">
            <img
              src={campusChapterBlueprint}
              alt="Campus Chapter Blueprint"
              className="max-w-full max-h-full object-contain opacity-95"
            />
          </div>

          {/* Description text */}
          <p className="font-sans font-light text-[13px] sm:text-[13.5px] leading-relaxed text-white/70">
            The <strong className="text-[#3b82f6] font-medium">µLearn Campus Chapter</strong> at Sree Buddha College of Engineering is dedicated to helping student developers find their path, learn by doing, and lead technical initiatives. Through <strong className="text-[#3b82f6] font-medium">µDawn '26</strong>, our chapter aims to bring together curious minds, industry mentors, and google developers to prototype meaningful solutions.
          </p>
          
          {/* Neon border button */}
          <motion.a
            href="https://mulearn-sbc.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-2.5 px-5 border border-blue-500/50 bg-transparent text-white hover:bg-blue-500/10 font-orbitron text-[11px] sm:text-[11.5px] font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.1)] rounded-none self-start gap-2"
            whileHover={{
              y: -2,
              borderColor: '#3b82f6',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <span>Visit Campus Chapter</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </motion.a>

        </div>
      </div>
    </div>
  );
}
