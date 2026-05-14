import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const SOCIALS = [
  { Icon: Github, href: "https://github.com/rahulrachamalla", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/rahulrachamalla", label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: SubstackIcon, href: "https://substack.com", label: "Substack" },
  { Icon: Mail, href: "mailto:rahul@example.com", label: "Email" },
];

// Typewriter hook — types out text then blinks cursor
function useTypewriter(text, startDelay = 400, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, startDelay, speed]);

  return { displayed, done };
}

// Blinking cursor
const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    className="inline-block ml-0.5 w-0.5 h-[0.9em] bg-violet-400 align-middle"
    style={{ verticalAlign: "middle" }}
  />
);

const DEFAULT_PROFILE_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/d2e2a7bd6_LinkedIn.png";

export default function HeroContent() {
  const { displayed: typedSubtitle } = useTypewriter(
    "I build things that push limits.",
    900,
    55
  );

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-[90vh] flex items-center py-16 lg:py-0"
    >
      {/* Left: text content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Hi, my name is */}
        <motion.p variants={item} className="font-mono text-violet-400 text-sm mb-4 tracking-widest">
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-syne font-bold text-white leading-[1.05] mb-3"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)", letterSpacing: "-0.02em" }}
        >
          Rahul Rachamalla.
        </motion.h1>

        {/* Social icons */}
        <motion.div variants={item} className="flex items-center gap-5 mb-6">
          {SOCIALS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              whileHover={{ y: -2 }}
              className="text-white/35 hover:text-violet-400 transition-colors duration-200"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.h2
          variants={item}
          className="font-syne font-semibold leading-tight mb-8"
          style={{
            fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)",
            background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            minHeight: "1.2em",
          }}
        >
          <span style={{ WebkitTextFillColor: "transparent" }}>{typedSubtitle}</span>
          <span style={{ WebkitTextFillColor: "initial" }}>
            <Cursor />
          </span>
        </motion.h2>

        {/* Body copy */}
        <motion.p
          variants={item}
          className="font-inter text-white/50 text-base leading-relaxed max-w-md mb-10"
        >
          Hardware & software engineer. Ironman finisher. Mountain climber. MMA practitioner.
          I build embedded systems by day and push the limits of human performance by weekend.
          Currently at{" "}
          <span className="text-violet-400 font-medium">Your Company</span>.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} className="flex items-center gap-6 flex-wrap">
          <a
            href="#contact"
            className="font-mono text-sm px-6 py-3 rounded border border-violet-400 text-violet-400 hover:bg-violet-400/10 transition-all duration-200 tracking-wide"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="font-mono text-sm text-white/40 hover:text-white transition-colors tracking-wide"
          >
            See my work ↓
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={item} className="mt-16 flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/15" />
          <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">scroll to explore</span>
        </motion.div>
      </div>

      {/* Right: large profile photo */}
      <motion.div
        variants={item}
        className="hidden md:flex flex-shrink-0 ml-12 items-center justify-center"
      >
        <div
          className="relative w-64 h-80 xl:w-72 xl:h-96 rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 0 1px rgba(167,139,250,0.15), 0 32px 64px rgba(0,0,0,0.5)",
          }}
        >
          {/* subtle violet glow behind */}
          <div className="absolute -inset-4 rounded-3xl bg-violet-500/10 blur-2xl -z-10" />
          <img
            src={DEFAULT_PROFILE_IMAGE}
            alt="Rahul Rachamalla"
            className="w-full h-full object-cover object-top"
          />
          {/* bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}