import { motion } from 'framer-motion';
import { Users, Lightbulb, Calendar, TrendingUp, ArrowRight, Globe, Mail } from 'lucide-react';
import campusChapterBlueprint from '../assets/campus_chapter_blueprint.png';

export default function CampusChapter() {
  return (
    <div id="chapter" className="w-full flex flex-col justify-center py-10 sm:py-16 border-b border-white/5 relative z-10 scroll-mt-20">
      
      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Organizing Team Header, Title, Subtitle, Description, Stats Card, Connect With Us, Motto */}
        <div className="lg:col-span-6 flex flex-col">
          
          {/* Organizing Team Tag */}
          <div className="flex items-center gap-2.5">
            <span className="font-orbitron font-semibold text-[11px] sm:text-[12px] tracking-[0.25em] text-[#3b82f6] uppercase">
              ORGANIZING TEAM
            </span>
            <div className="w-8 h-[1px] bg-[#3b82f6]/60" />
          </div>

          {/* Main Headline */}
          <div className="flex flex-col mt-2">
            <h2 className="font-orbitron font-extrabold text-[38px] sm:text-[48px] lg:text-[54px] tracking-tight leading-[0.92] text-white uppercase">
              BUILT BY
            </h2>
            <h2 className="font-orbitron font-extrabold text-[38px] sm:text-[48px] lg:text-[54px] tracking-tight leading-[0.92] text-[#3b82f6] drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] uppercase">
              THE COMMUNITY
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-[14px] sm:text-[15px] text-white/70 font-normal tracking-wide mt-2">
            µLearn SBC Campus Chapter
          </p>

          {/* Description */}
          <p className="font-sans text-[13px] sm:text-[13.5px] text-white/70 font-light leading-relaxed max-w-lg mt-3">
            An active ecosystem at Sree Buddha College of Engineering supporting peer learning, student-led workshops, engineering bootcamps, and digital project creation.
          </p>

          {/* Stats Box Card */}
          <div className="rounded-2xl border border-blue-500/30 bg-[#07090e]/60 p-4 sm:p-5 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.06)] mt-5">
            <div className="grid grid-cols-4 gap-2 divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center gap-1.5 px-1">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-orbitron font-extrabold text-[18px] sm:text-[20px] text-white">1000+</span>
                <span className="text-[10px] text-white/50 tracking-wider">Students</span>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center gap-1.5 px-1">
                <Lightbulb className="w-5 h-5 text-blue-400" />
                <span className="font-orbitron font-extrabold text-[18px] sm:text-[20px] text-white">50+</span>
                <span className="text-[10px] text-white/50 tracking-wider">Initiatives</span>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center gap-1.5 px-1">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-orbitron font-extrabold text-[18px] sm:text-[20px] text-white">20+</span>
                <span className="text-[10px] text-white/50 tracking-wider">Workshops</span>
              </div>
              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center gap-1.5 px-1">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="font-orbitron font-extrabold text-[18px] sm:text-[20px] text-white">Real</span>
                <span className="text-[10px] text-white/50 tracking-wider">Impact</span>
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex items-center gap-2.5">
              <span className="font-orbitron font-semibold text-[10px] tracking-[0.2em] text-[#3b82f6] uppercase">
                CONNECT WITH US
              </span>
              <div className="w-8 h-[1px] bg-[#3b82f6]/60" />
            </div>

            {/* 6 Social Cards in a single row */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full">
              {/* Instagram */}
              <a href="https://instagram.com/mulearn.sbc" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-[#0b0c10]/70 hover:border-blue-500/40 hover:bg-blue-500/5 p-2.5 flex flex-col items-center text-center gap-1.5 transition-all duration-300 group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="text-[10px] font-semibold text-white truncate w-full">Instagram</span>
                <span className="text-[7.5px] text-white/40 truncate w-full">@mulearn.sbc</span>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/company/mulearn-sbc" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-[#0b0c10]/70 hover:border-blue-500/40 hover:bg-blue-500/5 p-2.5 flex flex-col items-center text-center gap-1.5 transition-all duration-300 group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="text-[10px] font-semibold text-white truncate w-full">LinkedIn</span>
                <span className="text-[7.5px] text-white/40 truncate w-full">/µLearn SBC</span>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@mulearn-sbc" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-[#0b0c10]/70 hover:border-blue-500/40 hover:bg-blue-500/5 p-2.5 flex flex-col items-center text-center gap-1.5 transition-all duration-300 group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                <span className="text-[10px] font-semibold text-white truncate w-full">YouTube</span>
                <span className="text-[7.5px] text-white/40 truncate w-full">µLearn SBC</span>
              </a>

              {/* Discord */}
              <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-[#0b0c10]/70 hover:border-blue-500/40 hover:bg-blue-500/5 p-2.5 flex flex-col items-center text-center gap-1.5 transition-all duration-300 group">
                <div className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 127.14 96.36" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.9-.65,1.76-1.34,2.58-2a75.58,75.58,0,0,0,72.9,0c.82.71,1.68,1.4,2.58,2a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31.06-18.83C129,54.65,122.5,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-semibold text-white truncate w-full">Discord</span>
                <span className="text-[7.5px] text-white/40 truncate w-full">Join server</span>
              </a>

              {/* Email */}
              <a href="mailto:mulearnsbc@gmail.com" className="rounded-xl border border-white/10 bg-[#0b0c10]/70 hover:border-blue-500/40 hover:bg-blue-500/5 p-2.5 flex flex-col items-center text-center gap-1.5 transition-all duration-300 group">
                <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0" />
                <span className="text-[10px] font-semibold text-white truncate w-full">Email</span>
                <span className="text-[7.5px] text-white/40 truncate w-full">mulearnsbc...</span>
              </a>

              {/* Website */}
              <a href="https://mulearn-sbc.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-[#0b0c10]/70 hover:border-blue-500/40 hover:bg-blue-500/5 p-2.5 flex flex-col items-center text-center gap-1.5 transition-all duration-300 group">
                <Globe className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0" />
                <span className="text-[10px] font-semibold text-white truncate w-full">Website</span>
                <span className="text-[7.5px] text-white/40 truncate w-full">mulearn-sbc...</span>
              </a>
            </div>

            {/* Handwritten cursive slogan */}
            <div className="flex items-center gap-2.5 pt-2 text-white/70 font-serif italic text-[16px] sm:text-[18px] tracking-wide select-none">
              <span className="relative">
                Learn
                <svg className="absolute -bottom-1 left-0 w-full text-blue-500 h-1" viewBox="0 0 50 6" fill="none">
                  <path d="M1 4.5Q25 1 49 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-white/30 text-xs">•</span>
              <span>Build</span>
              <span className="text-white/30 text-xs">•</span>
              <span>Collaborate</span>
              <span className="text-white/30 text-xs">•</span>
              <span>Grow</span>
            </div>
          </div>

        </div>

        {/* Right Column: Blueprint Collage Image with Callout & Bottom Action Bar */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          
          {/* Collage Image with Badges */}
          <div className="relative w-full flex items-center justify-center">
            {/* Top-Right Handwritten callout */}
            <div className="absolute top-2 right-2 sm:right-6 text-right pointer-events-none hidden sm:flex flex-col items-end text-white/70 font-serif italic text-[13px] sm:text-[14px] leading-tight z-20">
              <span>Same</span>
              <span>Campus</span>
              <div className="flex items-center gap-1 text-blue-400">
                <svg className="w-3.5 h-3.5 rotate-[-20deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span>Bigger</span>
              </div>
              <span>Possibilities.</span>
            </div>

            {/* Blueprint collage image */}
            <img
              src={campusChapterBlueprint}
              alt="Campus Chapter Blueprint"
              className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] relative z-10"
            />

            {/* Bottom-Left µDawn '26 badge on the collage */}
            <div className="absolute bottom-6 left-4 sm:left-6 z-20 bg-[#070b14]/90 border border-blue-500/50 px-3 py-1 text-[11px] font-orbitron font-bold text-white shadow-[0_0_15px_rgba(59,130,246,0.35)] rounded-md">
              μDawn '26
            </div>
          </div>

          {/* Description text & Action on bottom right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
            <p className="font-sans font-light text-[13px] sm:text-[13.5px] leading-relaxed text-white/70 max-w-md">
              The <strong className="text-[#3b82f6] font-medium">µLearn Campus Chapter</strong> at Sree Buddha College of Engineering helps student developers learn by building, collaborating, and launching real-world solutions.
            </p>
            
            {/* Visit Chapter button with blue border */}
            <motion.a
              href="https://mulearn-sbc.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-2.5 px-6 border border-blue-500 bg-transparent hover:bg-blue-500/10 text-white font-orbitron text-[11px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none shrink-0 gap-2 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              whileHover={{ y: -2 }}
            >
              <span>VISIT CHAPTER</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </motion.a>
          </div>

        </div>
      </div>
    </div>
  );
}
