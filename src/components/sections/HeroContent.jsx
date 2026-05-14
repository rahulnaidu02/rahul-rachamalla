import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col justify-center pt-16 lg:pt-0"
    >
      <p className="font-mono text-violet-400 text-sm mb-5 tracking-widest">
        Hi, my name is
      </p>

      <h1 className="font-syne font-extrabold text-white leading-none mb-4"
        style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
        Rahul Rachamalla.
      </h1>

      <h2 className="font-syne font-bold leading-tight mb-8"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #38bdf8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
        I build things that push limits.
      </h2>

      <p className="font-inter text-white/50 text-lg leading-relaxed max-w-xl mb-12">
        Hardware & software engineer. Ironman finisher. Mountain climber. MMA practitioner.
        I build embedded systems by day and push the limits of human performance by weekend.
        Currently at{" "}
        <span className="text-violet-400 font-medium">Your Company</span>.
      </p>

      {/* CTA buttons */}
      <div className="flex items-center gap-5 flex-wrap">
        <a href="#contact"
          className="font-mono text-sm px-6 py-3 rounded border border-violet-400 text-violet-400 hover:bg-violet-400/10 transition-all duration-200">
          Get In Touch
        </a>
        <a href="#projects"
          className="font-mono text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
          See my work <ArrowDown className="w-3 h-3" />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="mt-24 flex items-center gap-3">
        <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-white/15" />
        <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">Scroll to explore</span>
      </div>
    </motion.div>
  );
}