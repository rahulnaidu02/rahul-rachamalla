import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, Instagram } from "lucide-react";

// Substack SVG icon
const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", href: "https://github.com/rahulrachamalla" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/rahulrachamalla" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: SubstackIcon, label: "Substack", href: "https://substack.com" },
  { icon: Mail, label: "Email", href: "mailto:rahul@example.com" },
];

// Single letter component with random entry direction
const GlitchLetter = ({ char, delay, i }) => {
  const directions = [
    { x: -40, y: -20 }, { x: 40, y: -30 }, { x: -20, y: 40 },
    { x: 30, y: 20 }, { x: -50, y: 10 }, { x: 20, y: -40 },
  ];
  const dir = directions[i % directions.length];

  return (
    <motion.span
      initial={{ opacity: 0, x: dir.x, y: dir.y, filter: "blur(8px)" }}
      animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      transition={{
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className="inline-block"
      style={{ display: char === " " ? "inline" : "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

// Scramble text hook
function useScramble(finalText, startDelay = 0.8) {
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
  const [display, setDisplay] = useState(() => finalText.split("").map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let iteration = 0;
      const total = finalText.length * 3;
      const interval = setInterval(() => {
        setDisplay(
          finalText.split("").map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration / 3) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("")
        );
        iteration++;
        if (iteration >= total) {
          clearInterval(interval);
          setDisplay(finalText);
          setDone(true);
        }
      }, 30);
      return () => clearInterval(interval);
    }, startDelay * 1000);
    return () => clearTimeout(timer);
  }, [finalText, startDelay]);

  return { display, done };
}

export default function HeroContent() {
  const [phase, setPhase] = useState(0);
  // phase 0: loader bar, phase 1: content appears

  useEffect(() => {
    const t = setTimeout(() => setPhase(1), 1600);
    return () => clearTimeout(t);
  }, []);

  const NAME = "Rahul Rachamalla.";
  const nameLetters = NAME.split("");
  const letterDelay = (i) => 0.05 + i * 0.045;

  const { display: scrambledSubtitle } = useScramble("I build things that push limits.", 1.2);

  return (
    <div className="min-h-[90vh] flex flex-col justify-center pt-16 lg:pt-0 relative">

      {/* ── LOADING PHASE ── */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-start justify-center gap-6"
          >
            {/* Glitch scanline bar */}
            <div className="relative w-full max-w-sm overflow-hidden">
              <p className="font-mono text-[10px] text-violet-400/60 tracking-[0.3em] uppercase mb-2">
                Initializing portfolio...
              </p>
              <div className="h-px w-full bg-white/5 relative overflow-hidden rounded">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded"
                  style={{ background: "linear-gradient(90deg, #a78bfa, #38bdf8)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                />
                {/* Glowing head */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full blur-sm"
                  style={{ background: "#a78bfa" }}
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </div>

            {/* Flickering status lines */}
            {["Loading hardware modules...", "Compiling firmware...", "Mounting summit data...", "All systems go ✓"].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.22, duration: 0.3 }}
                className="font-mono text-[10px] text-white/20 tracking-widest"
              >
                <span className="text-violet-400/50">{">"}</span> {line}
              </motion.p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN CONTENT ── */}
      <AnimatePresence>
        {phase === 1 && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mono intro */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.0, duration: 0.5 }}
              className="font-mono text-violet-400 text-sm mb-5 tracking-widest"
            >
              Hi, my name is
            </motion.p>

            {/* Name — letters fly in from random directions */}
            <h1
              className="font-syne font-extrabold text-white leading-none mb-3 overflow-visible"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
            >
              {nameLetters.map((char, i) => (
                <GlitchLetter key={i} char={char} i={i} delay={letterDelay(i)} />
              ))}
            </h1>

            {/* Social icons — appear right under the name */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.9 + i * 0.08, type: "spring", stiffness: 300, damping: 18 }}
                  whileHover={{ y: -3, color: "#a78bfa" }}
                  className="text-white/30 hover:text-violet-400 transition-colors duration-200"
                >
                  <Icon />
                </motion.a>
              ))}
              <motion.div
                className="h-px flex-1 max-w-[80px]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                style={{ background: "linear-gradient(90deg, rgba(167,139,250,0.3), transparent)", transformOrigin: "left" }}
              />
            </motion.div>

            {/* Subtitle — scramble effect */}
            <motion.h2
              className="font-syne font-bold leading-tight mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              style={{
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {scrambledSubtitle}
            </motion.h2>

            <motion.p
              className="font-inter text-white/50 text-lg leading-relaxed max-w-xl mb-12"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Hardware & software engineer. Ironman finisher. Mountain climber. MMA practitioner.
              I build embedded systems by day and push the limits of human performance by weekend.
              Currently at{" "}
              <span className="text-violet-400 font-medium">Your Company</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex items-center gap-5 flex-wrap"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="font-mono text-sm px-6 py-3 rounded border border-violet-400 text-violet-400 hover:bg-violet-400/10 transition-all duration-200"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="font-mono text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
              >
                See my work <ArrowDown className="w-3 h-3" />
              </a>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className="mt-20 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 0.8 }}
            >
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-white/15" />
              <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Scroll to explore</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}