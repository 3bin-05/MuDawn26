import type { SVGProps } from 'react';
import { Mail, Calendar, CalendarPlus, ChevronLeft, ChevronRight } from 'lucide-react';
import logoImg from '../assets/SBC-logo.svg';
import googleMapsLogo from '../assets/Google_Maps .webp';


const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 7.5c2.6-.8 5.4-.8 8 0" />
    <path d="M7.5 17c-1.5-.4-2.8-1.1-3.8-2.1.4-3.4 1.4-6 3-8 1.2-.5 2.3-.8 3.4-1l.6 1.1" />
    <path d="M16.5 17c1.5-.4 2.8-1.1 3.8-2.1-.4-3.4-1.4-6-3-8-1.2-.5-2.3-.8-3.4-1l-.6 1.1" />
    <path d="M8.5 17.2c2.2 1.1 4.8 1.1 7 0" />
    <path d="M9.5 12.5h.01" />
    <path d="M14.5 12.5h.01" />
  </svg>
);

const WhatsappIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" fill="currentColor" stroke="none" />
  </svg>
);

const CONTACT_LINKS = [
  {
    label: 'MAIL',
    href: 'mailto:mulearnsbc@gmail.com',
    icon: Mail,
  },
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/company/mulearnsbc',
    icon: LinkedinIcon,
  },
  {
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/mulearn.sbc?igsh=MWQ1cGRsbmxpeHZ3',
    icon: InstagramIcon,
  },
  {
    label: 'WHATSAPP',
    href: 'https://whatsapp.com/channel/0029VbBv02ECsU9LjmgbJh0Q',
    icon: WhatsappIcon,
  },
  {
    label: 'DISCORD',
    href: 'https://discord.gg/mTuerRmEAr',
    icon: DiscordIcon,
  },
];

interface FooterProps {
  onNavClick?: (target: 'hero' | 'about' | 'chapter' | 'timeline' | 'experiences' | 'sponsors') => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const handleLink = (e: React.MouseEvent, target: 'hero' | 'about' | 'chapter' | 'timeline' | 'experiences' | 'sponsors') => {
    e.preventDefault();
    if (onNavClick) {
      onNavClick(target);
    }
  };

  return (
    <footer id="contact" className="relative z-20 min-h-[520px] border-t border-white/[0.04] bg-[#060606] text-white overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-noise opacity-[0.018] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:88px_88px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 pt-20 sm:pt-24 pb-28 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-10">
        
        {/* Left Column */}
        <div className="flex flex-col sm:flex-row items-start gap-6 max-w-xl min-w-0">
          <a href="#" onClick={(e) => handleLink(e, 'hero')} className="shrink-0 group" aria-label="μDawn '26 home">
            <img
              src={logoImg}
              alt="μLearn SBC Logo"
              className="h-14 sm:h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <div>
            <span className="font-orbitron text-[10px] tracking-[0.3em] uppercase text-white/45">
              HACKATHON PORTAL
            </span>
            <h2 className="font-orbitron text-[24px] sm:text-[34px] leading-none font-bold tracking-wide mt-2">
              µDawn ’26
            </h2>
            <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed text-white/55 mt-3 max-w-md">
              Connect with the community, follow updates, and reach the team for collaborations, sponsors, and hackathon registration inquiries.
            </p>

            {/* Event Navigation Links - Uppercase matching user's reference */}
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2.5 font-orbitron text-[10px] tracking-[0.16em] uppercase text-white/45">
              <a href="#" onClick={(e) => handleLink(e, 'hero')} className="hover:text-white transition-colors">HOME</a>
              <span className="text-white/10">|</span>
              <a href="#" onClick={(e) => handleLink(e, 'about')} className="hover:text-white transition-colors">ABOUT</a>
              <span className="text-white/10">|</span>
              <a href="https://mulearn-sbc.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CAMPUS CHAPTER</a>
              <span className="text-white/10">|</span>
              <a href="#" onClick={(e) => handleLink(e, 'timeline')} className="hover:text-white transition-colors">TIMELINE</a>
              <span className="text-white/10">|</span>
              <a href="#" onClick={(e) => handleLink(e, 'experiences')} className="hover:text-white transition-colors">EXPERIENCES</a>
              <span className="text-white/10">|</span>
              <a href="#" onClick={(e) => handleLink(e, 'sponsors')} className="hover:text-white transition-colors">SPONSORS</a>
            </div>

            <div className="mt-6 grid gap-3 font-orbitron text-[10px] tracking-[0.16em] uppercase text-white/45">
              <div className="border-l border-white/18 pl-4">
                <span className="block text-white/72">BASE LOCATION</span>
                <span className="mt-2 block font-sans text-[13px] normal-case tracking-normal leading-relaxed text-white/55">
                  Sree Buddha College of Engineering<br />
                  Pattoor, Kerala
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 max-w-xs">
                <div className="border border-white/10 bg-white/[0.025] px-3 py-2 text-center rounded-sm">
                  <span className="block text-white/35">9&deg;12&apos;41&quot;N</span>
                </div>
                <div className="border border-white/10 bg-white/[0.025] px-3 py-2 text-center rounded-sm">
                  <span className="block text-white/35">76&deg;38&apos;29&quot;E</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/35">STATUS</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.55)]" />
                <span className="text-white/72">ONLINE</span>
              </div>
              <div className="mt-1">
                <a
                  href="https://maps.app.goo.gl/GA1dGCTLqTBoKq8v6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black font-orbitron font-semibold text-[9px] sm:text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-none hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
                >
                  <img src={googleMapsLogo} alt="Google Maps Logo" decoding="async" className="w-4 h-4 object-contain" />
                  <span>View Venue in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Calendar and Contact Links */}
        <div className="w-full lg:w-auto flex flex-col gap-4 min-w-0">
          
          {/* Calendar Component */}
          <div className="border border-white/10 bg-black/35 p-5 rounded-sm w-full lg:w-[600px] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-5 h-5 text-white/70 mt-0.5" />
                <div>
                  <span className="block font-orbitron text-[10px] tracking-[0.22em] uppercase text-white/60">
                    MARK YOUR CALENDARS
                  </span>
                  <span className="block font-sans text-[11px] text-white/45 mt-0.5">
                    Don't miss the big days!
                  </span>
                </div>
              </div>
              <a
                href="https://www.google.com/calendar/render?action=TEMPLATE&text=%CE%BCDawn+%E2%80%9926+Hackathon&dates=20261002T033000Z/20261003T123000Z&details=30-Hour+Innovation+Hackathon+at+Sree+Buddha+College+of+Engineering&location=Sree+Buddha+College+of+Engineering,+Pattoor,+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/10 bg-white/[0.025] hover:bg-white hover:text-black font-orbitron text-[9px] tracking-[0.16em] uppercase rounded-sm px-3 py-2 transition-all duration-300 self-start sm:self-auto"
              >
                <CalendarPlus className="w-3.5 h-3.5" />
                ADD TO GOOGLE CALENDAR
              </a>
            </div>

            {/* Calendar Grid */}
            <div className="pt-4">
              {/* Month Selector */}
              <div className="flex items-center justify-between text-white/80 font-orbitron text-[11px] tracking-[0.18em] uppercase mb-4 px-2">
                <ChevronLeft className="w-4 h-4 text-white/20 hover:text-white cursor-pointer transition-colors" />
                <span>OCTOBER 2026</span>
                <ChevronRight className="w-4 h-4 text-white/20 hover:text-white cursor-pointer transition-colors" />
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 text-center font-orbitron text-[9px] tracking-[0.16em] text-white/35 mb-2">
                <span>SUN</span>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 text-center font-mono text-[11px] text-white/80 gap-y-3 items-center justify-items-center">
                {/* Row 1 (Sept 27 - Oct 3) */}
                <span className="text-white/20 py-1">27</span>
                <span className="text-white/20 py-1">28</span>
                <span className="text-white/20 py-1">29</span>
                <span className="text-white/20 py-1">30</span>
                <span className="text-white/80 py-1">1</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white text-white font-bold">2</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-white text-white font-bold">3</span>

                {/* Row 2 (Oct 4 - 10) */}
                <span className="py-1 text-white/80">4</span>
                <span className="py-1 text-white/80">5</span>
                <span className="py-1 text-white/80">6</span>
                <span className="py-1 text-white/80">7</span>
                <span className="py-1 text-white/80">8</span>
                <span className="py-1 text-white/80">9</span>
                <span className="py-1 text-white/80">10</span>

                {/* Row 3 (Oct 11 - 17) */}
                <span className="py-1 text-white/80">11</span>
                <span className="py-1 text-white/80">12</span>
                <span className="py-1 text-white/80">13</span>
                <span className="py-1 text-white/80">14</span>
                <span className="py-1 text-white/80">15</span>
                <span className="py-1 text-white/80">16</span>
                <span className="py-1 text-white/80">17</span>

                {/* Row 4 (Oct 18 - 24) */}
                <span className="py-1 text-white/80">18</span>
                <span className="py-1 text-white/80">19</span>
                <span className="py-1 text-white/80">20</span>
                <span className="py-1 text-white/80">21</span>
                <span className="py-1 text-white/80">22</span>
                <span className="py-1 text-white/80">23</span>
                <span className="py-1 text-white/80">24</span>

                {/* Row 5 (Oct 25 - 31) */}
                <span className="py-1 text-white/80">25</span>
                <span className="py-1 text-white/80">26</span>
                <span className="py-1 text-white/80">27</span>
                <span className="py-1 text-white/80">28</span>
                <span className="py-1 text-white/80">29</span>
                <span className="py-1 text-white/80">30</span>
                <span className="py-1 text-white/80">31</span>
              </div>
            </div>
          </div>

          {/* Social Links Layout directly under Calendar */}
          <div className="flex flex-col gap-2.5 sm:gap-3 w-full lg:w-[600px]">
            {/* Row 1: Mail, LinkedIn, Instagram, WhatsApp (sharing width equally) */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-3 w-full">
              {CONTACT_LINKS.slice(0, 4).map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group relative h-11 px-3 sm:px-4 rounded-sm border border-white/12 bg-white/[0.03] text-white/58 hover:text-black hover:border-white transition-all overflow-hidden flex items-center justify-center gap-1.5 sm:gap-2 font-orbitron text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.16em] uppercase flex-1 min-w-0"
                >
                  <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                  <Icon className="relative z-10 w-4 h-4 transition-colors duration-300" />
                  <span className="relative z-10 transition-colors duration-300">{label}</span>
                </a>
              ))}
            </div>

            {/* Row 2: Discord (full width of calendar) */}
            {(() => {
              const discord = CONTACT_LINKS[4];
              const DiscordIconComponent = discord.icon;
              return (
                <a
                  href={discord.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={discord.label}
                  className="group relative h-11 px-5 rounded-sm border border-white/12 bg-white/[0.03] text-white/58 hover:text-black hover:border-white transition-all overflow-hidden flex items-center justify-center gap-2 font-orbitron text-[10px] tracking-[0.16em] uppercase w-full"
                >
                  <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
                  <DiscordIconComponent className="relative z-10 w-4 h-4 transition-colors duration-300" />
                  <span className="relative z-10 transition-colors duration-300">{discord.label}</span>
                </a>
              );
            })()}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 font-orbitron text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-white/35 text-center sm:text-left">
          <span>@copyright μLearn SBC × μDawn ’26</span>
          <span>Made with love by Tech Team, μLearn SBC</span>
        </div>
      </div>
    </footer>
  );
}
