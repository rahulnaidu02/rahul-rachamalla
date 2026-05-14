import { motion } from "framer-motion";
import { Linkedin, Mail, Github, Instagram, Upload } from "lucide-react";

const SUBSTACK_ICON = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const SOCIAL_LINKS = [
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/rahulrachamalla" },
  { label: "GitHub", icon: Github, href: "https://github.com/rahulrachamalla" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Substack", icon: SUBSTACK_ICON, href: "https://substack.com" },
  { label: "Email", icon: Mail, href: "mailto:rahul@example.com" },
];

export default function HeroSection({ profileImage, onImageChange }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageChange(url);
    }
  };

  return (
    <div className="relative w-full min-h-[420px] flex items-end overflow-hidden mb-12">
      {/* Abstract colorful background */}
      <div className="absolute inset-0 z-0">
        {/* Base dark */}
        <div className="absolute inset-0 bg-[#080A0E]" />
        {/* Colorful blobs */}
        <div className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-[-40px] right-[-80px] w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute bottom-[-60px] left-[30%] w-[350px] h-[350px] rounded-full bg-orange-500/15 blur-[100px]" />
        <div className="absolute top-[60px] left-[45%] w-[250px] h-[250px] rounded-full bg-pink-500/15 blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(184 100% 50% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(184 100% 50% / 0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Bottom fade to page bg */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080A0E] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pb-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-end gap-8"
        >
          {/* Profile photo — bigger, with upload */}
          <div className="relative shrink-0 group">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/50">
              <img
                src={profileImage}
                alt="Rahul Rachamalla"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Upload overlay */}
            <label className="absolute inset-0 rounded-2xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex flex-col items-center justify-center gap-1">
              <Upload className="w-5 h-5 text-white" />
              <span className="text-white text-xs font-inter">Change photo</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          {/* Name + bio */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Tag line */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded">
                  Engineer · Athlete · Builder
                </span>
              </div>

              <h1 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-3">
                Rahul<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Rachamalla
                </span>
              </h1>

              <p className="font-inter text-sm sm:text-base text-white/60 leading-relaxed max-w-xl mb-5">
                Hardware & software engineer. Ironman finisher. Mountain climber. MMA practitioner.
                Building at the intersection of embedded systems and extreme human performance.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-4 flex-wrap">
                {SOCIAL_LINKS.map(({ label, icon: SocialIcon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/50 hover:text-cyan-400 transition-colors text-sm"
                    title={label}
                  >
                    <SocialIcon />
                    <span className="hidden sm:inline font-inter text-xs">{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}