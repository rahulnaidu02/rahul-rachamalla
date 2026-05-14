import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SUBSTACK_ICON = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const CHANNELS = [
  { icon: Mail, label: "Email", handle: "rahul@example.com", href: "mailto:rahul@example.com", desc: "Best for direct outreach" },
  { icon: Linkedin, label: "LinkedIn", handle: "/in/rahulrachamalla", href: "https://linkedin.com/in/rahulrachamalla", desc: "Professional updates" },
  { icon: Github, label: "GitHub", handle: "github.com/rahulrachamalla", href: "https://github.com/rahulrachamalla", desc: "Code & projects" },
  { icon: SUBSTACK_ICON, label: "Substack", handle: "Notes on hardware & endurance", href: "https://substack.com", desc: "Writing" },
];

export default function ContactSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="09" title="Get In Touch" />

      <div className="max-w-lg mb-10">
        <p className="font-inter text-sm text-white/50 leading-relaxed">
          Currently open to interesting conversations: hardware collaboration, training talk, or just a good coffee recommendation. My inbox is always open.
        </p>
      </div>

      <div className="space-y-3">
        {CHANNELS.map(({ icon: Icon, label, handle, href, desc }, i) => (
          <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group flex items-center gap-5 p-4 rounded-xl border border-white/8 bg-white/2 hover:border-violet-400/30 hover:bg-violet-400/5 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-violet-400/10 border border-violet-400/15 flex items-center justify-center text-violet-400 group-hover:bg-violet-400/20 transition-colors shrink-0">
              <Icon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-syne font-bold text-white text-sm group-hover:text-violet-300 transition-colors">{label}</div>
              <div className="font-mono text-xs text-white/30 truncate">{handle}</div>
            </div>
            <span className="font-inter text-xs text-white/25 hidden sm:block">{desc}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}