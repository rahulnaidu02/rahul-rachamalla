import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

const SUBSTACK_ICON = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    handle: "hello@yourname.com",
    description: "Best way to reach me. I reply to everyone.",
    href: "mailto:hello@yourname.com",
    cta: "Send email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/yourname",
    description: "Professional updates, career stuff, and the occasional long-form post.",
    href: "https://linkedin.com",
    cta: "Connect",
  },
  {
    icon: SUBSTACK_ICON,
    label: "Substack",
    handle: "yourname.substack.com",
    description: "Where I write longer pieces about engineering, endurance, and the overlap.",
    href: "https://substack.com",
    cta: "Subscribe",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@yourhandle",
    description: "Race photos, summit selfies, and bench shots. The visual stuff.",
    href: "https://instagram.com",
    cta: "Follow",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "@yourusername",
    description: "All my open source work lives here.",
    href: "https://github.com",
    cta: "View profile",
  },
];

export default function ContactTab() {
  return (
    <div className="max-w-2xl space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-syne text-lg font-bold text-foreground mb-2">Say hello</h2>
        <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed">
          I genuinely enjoy hearing from people. Whether it's about hardware, a race you're
          training for, or just a question about something I've written — reach out. No gatekeeping.
        </p>
      </motion.div>

      <div className="space-y-4">
        {CHANNELS.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <motion.a
              key={i}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-[#14161A] border border-border rounded-xl p-4 hover:border-primary/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-[#A0A0A0] group-hover:text-primary group-hover:border-primary/30 transition-all shrink-0">
                <Icon />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-syne font-bold text-sm text-foreground">{channel.label}</span>
                  <span className="font-mono text-xs text-[#A0A0A0]">{channel.handle}</span>
                </div>
                <p className="font-inter text-xs text-[#A0A0A0] leading-relaxed">
                  {channel.description}
                </p>
              </div>
              <span className="font-inter text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                {channel.cta} →
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}