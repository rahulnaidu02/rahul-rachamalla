import { motion } from "framer-motion";
import { Linkedin, Mail, Github, Instagram } from "lucide-react";

const SUBSTACK_ICON = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const SOCIAL_LINKS = [
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "GitHub", icon: Github, href: "https://github.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Substack", icon: SUBSTACK_ICON, href: "https://substack.com" },
  { label: "Email", icon: Mail, href: "mailto:hello@example.com" },
];

export default function ProfileHeader({ profileImage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row items-start gap-6 mb-10"
    >
      {/* Profile photo */}
      <div className="shrink-0">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name, bio, links */}
      <div className="flex-1 min-w-0">
        <h1 className="font-syne text-2xl sm:text-3xl font-bold text-foreground mb-1">
          Rahul Rachamalla
        </h1>
        <p className="font-inter text-base text-[#A0A0A0] mb-3 leading-relaxed">
          Hardware & software engineer. Ironman finisher. Mountain climber.{" "}
          Building at the intersection of embedded systems and extreme endurance.{" "}
          I write about tech, training, and the wild overlap between the two.
        </p>
        <p className="font-inter text-sm text-[#A0A0A0] mb-4">
          Currently at <span className="text-primary font-medium">Your Company</span>.
          Previously at other great places.{" "}
          Read my writing on{" "}
          <a href="#" className="text-primary hover:underline">Substack</a>.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3 flex-wrap">
          {SOCIAL_LINKS.map(({ label, icon: SocialIcon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#A0A0A0] hover:text-primary transition-colors text-sm"
              title={label}
            >
              <SocialIcon />
              <span className="hidden sm:inline font-inter text-xs">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}