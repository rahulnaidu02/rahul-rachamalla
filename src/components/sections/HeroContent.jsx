import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Flame, Waves, Mountain, Swords, Bike } from "lucide-react";

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

const ACCOMPLISHMENTS = [
  {
    icon: Flame,
    label: "Full Ironman Finisher",
    sub: "140.6-mile endurance race completed",
  },
  {
    icon: Waves,
    label: "Multiple Half Ironman Finisher",
    sub: "Multiple 70.3-mile triathlon finishes",
  },
  {
    icon: Waves,
    label: "Swam Alcatraz to San Francisco",
    sub: "Open-water Pacific Ocean swim",
  },
  {
    icon: Bike,
    label: "300 km Bike Ride Finisher",
    sub: "Long-distance endurance cycling",
  },
  {
    icon: Mountain,
    label: "Amateur Mountain Climber",
    sub: "High-altitude climbs up to ~20,000 ft",
  },
  {
    icon: Mountain,
    label: "Rock Climbing",
    sub: "Climbing grade up to 5.7",
  },
  {
    icon: Swords,
    label: "Former MMA Practitioner",
    sub: "Combat sports training background",
  },
];

const PILLS = [
  "Conversational AI", "Physical AI", "IoT & Telemetry", "Connected Devices",
  "Edge Intelligence", "Embedded Systems", "Fleet Operations", "Voice AI", "Product Strategy",
];

function useTypewriter(text, startDelay = 400, speed = 38) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, startDelay, speed]);

  return displayed;
}

const Cursor = () => (
  <motion.span
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    className="inline-block ml-0.5 w-0.5 h-[0.9em] bg-violet-400 align-middle"
    style={{ verticalAlign: "middle" }}
  />
);

const DEFAULT_PROFILE_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/43093a14f_Screenshot2025-10-05144427.png";

const BODY_STYLE = {
  fontFamily: "var(--font-inter)",
  fontSize: "1.0625rem",
  lineHeight: "1.85",
  fontWeight: 400,
};

export default function HeroContent() {
  const typedHeadline = useTypewriter(
    "I build and ship products across AI, connected hardware, and real-world operations.",
    900,
    38
  );

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
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
        <motion.p variants={item} className="font-mono text-violet-400 text-base mb-5 tracking-widest">
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-syne font-bold text-white leading-[1.05] mb-6"
          style={{ fontSize: "clamp(3.2rem, 6.5vw, 6rem)", letterSpacing: "-0.02em" }}
        >
          Rahul Rachamalla.
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-syne font-semibold leading-tight mb-8"
          style={{
            fontSize: "clamp(1.6rem, 3.2vw, 2.8rem)",
            background: "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            minHeight: "1.2em",
          }}
        >
          <span style={{ WebkitTextFillColor: "transparent" }}>{typedHeadline}</span>
          <span style={{ WebkitTextFillColor: "initial" }}>
            <Cursor />
          </span>
        </motion.h2>

        {/* Body paragraphs — consistent typography */}
        <motion.p variants={item} className="text-white/60 mb-5" style={BODY_STYLE}>
          I'm Rahul Rachamalla, an engineer by training and product builder by profession. I've spent the last decade
          building conversational AI, connected vehicle experiences, edge infrastructure, enterprise networking,
          IoT systems, and cloud-device platforms at{" "}
          <span className="text-violet-400 font-medium">Amazon</span>,{" "}
          <span className="text-violet-400 font-medium">HPE Aruba</span>,{" "}
          <span className="text-violet-400 font-medium">Cisco</span>, and{" "}
          <span className="text-violet-400 font-medium">Ericsson</span>.
        </motion.p>

        <motion.p variants={item} className="text-white/55 mb-8" style={BODY_STYLE}>
          Today, I'm focused on physical AI, autonomous systems, telemetry, and field operations automation
          through <span className="text-violet-400 font-medium">Copa Labs</span> and other experimental hardware/software projects.
        </motion.p>

        {/* Social + CTAs */}
        <motion.div variants={item} className="flex items-center gap-5 mb-8">
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

        <motion.div variants={item} className="flex items-center gap-6 flex-wrap mb-12">
          <a
            href="#contact"
            className="font-mono text-sm px-7 py-3.5 rounded border border-violet-400 text-violet-400 hover:bg-violet-400/10 transition-all duration-200 tracking-wide"
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

        {/* Accomplishment cards */}
        <motion.div variants={item}>
          <p className="font-mono text-white/30 tracking-widest uppercase mb-6" style={{ fontSize: "0.8rem" }}>Beyond Work</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACCOMPLISHMENTS.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(167,139,250,0.18)" }}
                className="group flex items-center gap-5 px-6 py-5 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm hover:border-violet-400/40 hover:bg-violet-400/6 transition-all duration-300 cursor-default"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-violet-400/12 border border-violet-400/25 flex items-center justify-center group-hover:bg-violet-400/22 group-hover:border-violet-400/45 transition-all duration-300"
                >
                  <Icon className="w-7 h-7 text-violet-400" />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-1 min-w-0">
                  <span
                    className="font-syne font-bold text-white group-hover:text-white transition-colors leading-tight"
                    style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.375rem)" }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-inter text-white/50 group-hover:text-white/70 transition-colors leading-snug"
                    style={{ fontSize: "clamp(0.875rem, 1.1vw, 1.0625rem)" }}
                  >
                    {sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pills */}
        <motion.div variants={item} className="flex flex-wrap gap-3 mt-10">
          {PILLS.map((pill) => (
            <span
              key={pill}
              className="font-mono tracking-wide px-5 py-2.5 rounded-full bg-violet-400/8 border border-violet-400/25 text-violet-300/75 hover:text-violet-300 hover:border-violet-400/45 hover:bg-violet-400/12 transition-all duration-200 cursor-default"
              style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-12 flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/15" />
          <span className="font-mono text-xs text-white/20 tracking-widest uppercase">scroll to explore</span>
        </motion.div>
      </div>

      {/* Right: profile photo */}
      <motion.div
        variants={item}
        className="hidden lg:flex flex-shrink-0 ml-16 items-start justify-center"
      >
        <div
          className="relative w-80 h-96 xl:w-[26rem] xl:h-[30rem] rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 0 0 1px rgba(167,139,250,0.15), 0 32px 64px rgba(0,0,0,0.5)" }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-violet-500/10 blur-2xl -z-10" />
          <img
            src={DEFAULT_PROFILE_IMAGE}
            alt="Rahul Rachamalla"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}