import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SideNav from "../components/layout/SideNav";
import HeroContent from "../components/sections/HeroContent.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import ExperienceSection from "../components/sections/ExperienceSection.jsx";
import ProjectsSection from "../components/sections/ProjectsSection";
import FounderSection from "../components/sections/FounderSection";
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
  { id: "founder", label: "Founder & Builder" },
  { id: "projects", label: "AI Projects" },
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
  const observerRef = useRef(null);

  // IntersectionObserver — mirrors Brittany Chiang's approach:
  // whichever section covers the most of the viewport wins.
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio that is currently intersecting
        let best = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        });
        if (best) {
          setActiveSection(best.target.id);
        }
      },
      {
        // Trigger when at least 20% of a section is visible
        threshold: [0.1, 0.2, 0.3, 0.5],
        // Shrink the root margin so sections near the center of the screen win
        rootMargin: "-10% 0px -55% 0px",
      }
    );

    ids.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-[#0d0810] text-foreground font-inter flex">
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
          className="fixed top-5 right-6 z-40 hidden lg:flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm hover:border-white/40 hover:bg-white/14 transition-all duration-200 group shadow-lg"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white" className="opacity-85 group-hover:opacity-100 transition-opacity flex-shrink-0">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span className="font-inter font-semibold text-white/85 group-hover:text-white transition-colors tracking-wide" style={{ fontSize: "0.9375rem" }}>
            Check out my GitHub
          </span>
        </a>

      {/* Cursor-following gradient glow (static decorative) */}
        {/* Nebula background — subtle purple-gray */}
        <div className="fixed inset-0 pointer-events-none z-0" style={{
          background: `
            radial-gradient(ellipse 80% 60% at 65% 10%, rgba(192,38,211,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 10% 70%, rgba(147,51,234,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 90% 80%, rgba(219,39,119,0.14) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 50% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)
          `
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-8 lg:px-12 pt-24 lg:pt-24 pb-24 space-y-36">
          {/* Hero */}
          <section ref={(el) => (sectionRefs.current["hero"] = el)}>
            <HeroContent />
          </section>

          {/* About */}
          <section ref={(el) => (sectionRefs.current["about"] = el)} id="about">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <AboutSection />
            </motion.div>
          </section>

          {/* Experience */}
          <section ref={(el) => (sectionRefs.current["experience"] = el)} id="experience">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <ExperienceSection />
            </motion.div>
          </section>

          {/* Founder & Builder */}
          <section ref={(el) => (sectionRefs.current["founder"] = el)} id="founder">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <FounderSection />
            </motion.div>
          </section>

          {/* AI Projects */}
          <section ref={(el) => (sectionRefs.current["projects"] = el)} id="projects">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <ProjectsSection />
            </motion.div>
          </section>

          {/* Ironman */}
          <section ref={(el) => (sectionRefs.current["ironman"] = el)} id="ironman">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <IronmanSection />
            </motion.div>
          </section>

          {/* Mountains */}
          <section ref={(el) => (sectionRefs.current["mountains"] = el)} id="mountains">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <MountainsSection />
            </motion.div>
          </section>

          {/* Hardware */}
          <section ref={(el) => (sectionRefs.current["hardware"] = el)} id="hardware">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <HardwareSection />
            </motion.div>
          </section>

          {/* GitHub */}
          <section ref={(el) => (sectionRefs.current["github"] = el)} id="github">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <GitHubSection />
            </motion.div>
          </section>

          {/* MMA */}
          <section ref={(el) => (sectionRefs.current["mma"] = el)} id="mma">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <MMASection />
            </motion.div>
          </section>

          {/* Contact */}
          <section ref={(el) => (sectionRefs.current["contact"] = el)} id="contact">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.65, ease: "easeOut" }}>
              <ContactSection />
            </motion.div>
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