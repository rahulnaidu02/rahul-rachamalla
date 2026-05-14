import { useState, useRef } from "react";
import SideNav from "../components/layout/SideNav";
import HeroContent from "../components/sections/HeroContent";
import AboutSection from "../components/sections/AboutSection";
import ExperienceSection from "../components/sections/ExperienceSection";
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
      <main className="flex-1 lg:ml-80 xl:ml-96">
        {/* Cursor-following gradient glow (static decorative) */}
        <div className="fixed top-0 right-0 w-[600px] h-[600px] pointer-events-none z-0"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 pt-24 lg:pt-24 pb-24 space-y-40">
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