import { useState } from "react";
import { Upload, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "founder", label: "Founder & Builder" },
  { id: "projects", label: "AI Projects" },
  { id: "ironman", label: "Ironman" },
  { id: "mountains", label: "Mountains" },
  { id: "hardware", label: "Hardware" },
  { id: "github", label: "GitHub" },
  { id: "mma", label: "MMA" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { Icon: Github, href: "https://github.com/rahulrachamalla", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/rahulrachamalla", label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: SubstackIcon, href: "https://substack.com", label: "Substack" },
  { Icon: Mail, href: "mailto:rahul@example.com", label: "Email" },
];

export default function SideNav({ activeSection, onNavClick, profileImage, onImageChange }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) onImageChange(URL.createObjectURL(file));
  };

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-screen w-80 xl:w-96 flex-col justify-between px-12 py-20 z-30"
        style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* TOP: identity + nav */}
        <div>
          {/* Profile photo */}
          <div className="relative group mb-6 w-fit">
            <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10">
              <img src={profileImage} alt="Rahul" className="w-full h-full object-cover object-top" />
            </div>
            <label className="absolute inset-0 rounded-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
              <Upload className="w-4 h-4 text-white" />
              <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
            </label>
          </div>

          {/* Name */}
          <h1 className="font-syne text-4xl font-bold text-white leading-tight tracking-tight mb-1">
            Rahul
            <br />
            Rachamalla
          </h1>

          {/* Tagline */}
          <p className="font-mono text-base text-violet-400 mb-10 tracking-wide">
            Product Builder · Physical AI · Ironman
          </p>

          {/* Nav — Brittany style: line grows on active */}
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className="group flex items-center gap-4 py-2 text-left w-full"
                >
                  <span
                    className="block h-px transition-all duration-300"
                    style={{
                      width: isActive ? "48px" : "24px",
                      background: isActive
                        ? "linear-gradient(90deg,#a78bfa,#67e8f9)"
                        : "rgba(255,255,255,0.2)",
                    }}
                  />
                  <span
                    className="font-mono text-sm tracking-widest uppercase transition-colors duration-200"
                    style={{ color: isActive ? "#e2e8f0" : "rgba(255,255,255,0.35)" }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM: social icons */}
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="text-white/30 hover:text-violet-400 transition-colors duration-200"
            >
              <Icon />
            </a>
          ))}
        </div>
      </aside>

      {/* ── Mobile top bar ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-[#0d1120]/90 border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <span className="font-syne font-bold text-white text-base">Rahul Rachamalla</span>
        <div className="flex gap-5 overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className="font-mono text-[11px] whitespace-nowrap transition-colors"
              style={{ color: activeSection === item.id ? "#a78bfa" : "rgba(255,255,255,0.4)" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}