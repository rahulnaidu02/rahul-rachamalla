import { useState, useRef } from "react";
import SideNav from "../components/layout/SideNav";
import HeroContent from "../components/sections/HeroContent.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import ExperienceSection from "../components/sections/ExperienceSection.jsx";
import ProjectsSection from "../components/sections/ProjectsSection";
import IronmanSection from "../components/sections/IronmanSection";
import MountainsSection from "../components/sections/MountainsSection";
import HardwareSection from "../components/sections/HardwareSection";
import GitHubSection from "../components/sections/GitHubSection";
import MMASection from "../components/sections/MMASection";
import ContactSection from "../components/sections/ContactSection";

const DEFAULT_PROFILE_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/d2e2a7bd6_LinkedIn.png";

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ironman", label: "Ironman" },
  { id: "mountains", label: "Mountains" },
  { id: "hardware", label: "Hardware" },
  { id: "github", label: "GitHub" },
  { id: "mma", label: "MMA" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [profileImage, setProfileImage] = useState(DEFAULT_PROFILE_IMAGE);

  const sectionRefs = useRef({});

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-foreground font-inter flex">
      {/* Fixed left sidebar */}
      <SideNav
        activeSection={activeSection}
        onNavClick={scrollTo}
        profileImage={profileImage}
        onImageChange={setProfileImage}
      />

      {/* Scrollable right content */}
      <main className="flex-1 lg:ml-80 xl:ml-96 2xl:ml-96">
        {/* GitHub badge — top right */}
        <a
          href="https://github.com/rahulrachamalla"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-5 right-6 z-40 hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/4 backdrop-blur-sm text-white/45 hover:border-violet-400/40 hover:text-violet-300 hover:bg-violet-400/8 transition-all duration-200 group"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="opacity-60 group-hover:opacity-100 transition-opacity">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span className="font-mono text-xs tracking-wide">Check out my GitHub</span>
        </a>

      {/* Cursor-following gradient glow (static decorative) */}
        {/* Nebula background — subtle purple-gray */}
        <div className="fixed inset-0 pointer-events-none z-0" style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 10%, rgba(139,92,246,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(99,102,241,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 90% 70%, rgba(56,189,248,0.05) 0%, transparent 50%)
          `
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-8 lg:px-12 pt-24 lg:pt-24 pb-24 space-y-28">
          {/* Hero */}
          <section ref={(el) => (sectionRefs.current["hero"] = el)}>
            <HeroContent />
          </section>

          {/* About */}
          <section ref={(el) => (sectionRefs.current["about"] = el)} id="about">
            <AboutSection />
          </section>

          {/* Experience */}
          <section ref={(el) => (sectionRefs.current["experience"] = el)} id="experience">
            <ExperienceSection />
          </section>

          {/* Projects */}
          <section ref={(el) => (sectionRefs.current["projects"] = el)} id="projects">
            <ProjectsSection />
          </section>

          {/* Ironman */}
          <section ref={(el) => (sectionRefs.current["ironman"] = el)} id="ironman">
            <IronmanSection />
          </section>

          {/* Mountains */}
          <section ref={(el) => (sectionRefs.current["mountains"] = el)} id="mountains">
            <MountainsSection />
          </section>

          {/* Hardware */}
          <section ref={(el) => (sectionRefs.current["hardware"] = el)} id="hardware">
            <HardwareSection />
          </section>

          {/* GitHub */}
          <section ref={(el) => (sectionRefs.current["github"] = el)} id="github">
            <GitHubSection />
          </section>

          {/* MMA */}
          <section ref={(el) => (sectionRefs.current["mma"] = el)} id="mma">
            <MMASection />
          </section>

          {/* Contact */}
          <section ref={(el) => (sectionRefs.current["contact"] = el)} id="contact">
            <ContactSection />
          </section>

          {/* Footer */}
          <footer className="pt-8 border-t border-white/5 text-center">
            <p className="font-mono text-xs text-white/25">
              Designed & built by{" "}
              <span className="text-violet-400">Rahul Rachamalla</span>{" "}
              © {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}