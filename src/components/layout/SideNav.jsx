import { Upload } from "lucide-react";
import { Linkedin, Mail, Github, Instagram } from "lucide-react";

const SUBSTACK_ICON = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const NAV_ITEMS = [
  { id: "about", label: "About", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "ironman", label: "Ironman", num: "04" },
  { id: "mountains", label: "Mountains", num: "05" },
  { id: "hardware", label: "Hardware", num: "06" },
  { id: "github", label: "GitHub", num: "07" },
  { id: "mma", label: "MMA", num: "08" },
  { id: "contact", label: "Contact", num: "09" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/rahulrachamalla", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/rahulrachamalla", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: SUBSTACK_ICON, href: "https://substack.com", label: "Substack" },
  { icon: Mail, href: "mailto:rahul@example.com", label: "Email" },
];

export default function SideNav({ activeSection, onNavClick, profileImage, onImageChange }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) onImageChange(URL.createObjectURL(file));
  };

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-80 xl:w-96 flex-col justify-between px-10 py-14 z-30"
        style={{ background: "linear-gradient(180deg, #0d1120 0%, #0a0e1a 100%)", borderRight: "1px solid rgba(255,255,255,0.04)" }}>

        {/* Top: photo + name */}
        <div>
          {/* Profile photo */}
          <div className="relative group mb-8 w-fit">
            <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-violet-900/20">
              <img src={profileImage} alt="Rahul" className="w-full h-full object-cover object-top" />
            </div>
            <label className="absolute inset-0 rounded-2xl bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex flex-col items-center justify-center gap-1">
              <Upload className="w-4 h-4 text-white" />
              <span className="text-white text-[10px] font-mono">upload</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
            </label>
          </div>

          {/* Name */}
          <h1 className="font-syne text-2xl font-extrabold text-white mb-1 leading-tight">
            Rahul<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Rachamalla
            </span>
          </h1>
          <p className="font-mono text-xs text-white/40 mb-8 tracking-wider uppercase">
            Engineer · Athlete · Builder
          </p>

          {/* Nav */}
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`group flex items-center gap-4 w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive ? "bg-violet-500/10" : "hover:bg-white/4"
                  }`}
                >
                  {/* Active line indicator */}
                  <span className={`block h-px transition-all duration-300 ${
                    isActive ? "w-10 bg-gradient-to-r from-violet-400 to-cyan-400" : "w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40"
                  }`} />
                  <span className={`font-mono text-[10px] ${isActive ? "text-violet-400" : "text-white/25"}`}>
                    {item.num}
                  </span>
                  <span className={`font-inter text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: social icons */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="text-white/30 hover:text-violet-400 transition-colors" title={label}>
              <Icon />
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-[#0d1120]/95 backdrop-blur border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <span className="font-syne font-bold text-white text-sm">Rahul Rachamalla</span>
        <div className="flex gap-4 overflow-x-auto">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => onNavClick(item.id)}
              className={`font-mono text-[10px] whitespace-nowrap transition-colors ${activeSection === item.id ? "text-violet-400" : "text-white/40"}`}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}