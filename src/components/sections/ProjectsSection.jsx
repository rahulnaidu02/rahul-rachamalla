import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "Patent Pending Autonomous Maintenance System",
    subtitle: "Predictive Maintenance, User Access Control, Autonomous Servicing",
    description:
      "Patent-pending sanitation infrastructure system combining Physical AI, predictive maintenance, telemetry, user access control, and autonomous servicing workflows for real-world field deployments.",
    tags: ["Patent Pending", "Physical AI", "Predictive Maintenance", "Access Control", "Telemetry", "Autonomous Servicing"],
    buttons: [
      { label: "View Details", href: "#" },
      { label: "Copa Website", href: "https://www.letsgocopa.com" },
    ],
    badge: "USPTO Provisional Patent Pending",
    flagship: true,
  },
  {
    title: "PHYCON: Conversational AI for Hardware Founders",
    subtitle: "World's First Voice Community for Physical AI + Conversational AI",
    description:
      "PHYCON is a voice-powered AI community and assistant built specifically for founders navigating the intersection of Physical AI and Conversational AI. Choose your lens — Sage Founder, Investor, or Product-Market Fit Critic — and get real-time voice guidance on conversational AI architecture, setting up voice agents, customer traction, angel fundraising, and go-to-market strategy. Built for hardware founders who need AI that understands atoms, not just bits.",
    tags: ["Voice AI", "Conversational AI", "Physical AI", "Hardware Founders", "LLM", "Community", "Go-To-Market"],
    buttons: [
      { label: "View Project", href: "https://phyconfounder.base44.app/" },
      { label: "GitHub", href: "https://github.com/rahulnaidu02" },
    ],
    heroImage: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/0f9b732f1_generated_image.png",
  },
  {
    title: "Priya's Tiffin: WhatsApp Food Ordering PWA",
    subtitle: "Community Commerce · Home Kitchen Platform",
    description:
      "A progressive web app built for home-food businesses like Priya's Tiffin to publish a dynamic daily menu through one permanent shareable link. Customers browse today's dishes, tap to add items, and submit their order directly via WhatsApp. No messy group threads, no app downloads required. The admin panel (passphrase-protected) lets the kitchen owner update the day's menu in seconds from any device. Built with Next.js and deployed on Vercel, with a Supabase backend for real-time menu and order state. Designed mobile-first as a lightweight PWA with offline support and instant load times.",
    heroImage: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/08e4585f2_image.png",
    buttons: [
      { label: "Live Demo", href: "https://priya-tiffin.vercel.app" },
      { label: "GitHub", href: "https://github.com/rahulnaidu02/priya-tiffin" },
    ],
  },
  {
    type: "copa-fleet-group",
    images: [
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/89d9de61c_Screenshot2026-05-13062833.png",
    ],
    title: "COPA Fleet Command Center",
    subtitle: "Fleet Operations Dashboard",
    description:
      "Real-time fleet overview showing active units, service alerts, at-risk units, unacknowledged alerts, and per-unit drill-downs with water system, waste levels, battery, hardware health, door/lock/occupancy sensors, GPS, and connectivity status.",
    tags: ["Fleet Ops", "Telemetry", "Alerts", "IoT Dashboard", "Sensors", "Access Control", "Real-Time"],
    link: "https://copa-fleet-command-center.base44.app",
  },
  {
    type: "so101",
    title: "SO101 Open Source Robotics Arm",
    subtitle: "Robotic Automation Experiments",
    description:
      "Experiments with low-cost open-source robotic arm workflows for future physical AI, autonomous servicing, and hardware automation projects.",
    tags: ["Robotics", "Automation", "Embedded Systems", "Physical AI", "Open Source"],
    video: "https://media.base44.com/videos/public/6a061760231cbb0e0f2caa6b/913f37782_CopaGIFSelfCleaningPrototypeearlystage.mp4",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/364eb1e61_RoboticArm.png",
    buttons: [
      { label: "View Project", href: "#" },
      { label: "GitHub", href: "https://github.com/rahulnaidu02" },
    ],
  },
  {
    type: "copa-fleet-group",
    images: [
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/e9af8f4e2_Screenshot2026-05-13063023.png",
    ],
    title: "COPA Fleet Telemetry Dashboard",
    subtitle: "Operator Fleet Operations Platform",
    description:
      "Dashboard for monitoring sanitation units across battery health, water levels, usage telemetry, lock state, tamper alerts, service workflows, and fleet visibility.",
    tags: ["React", "IoT Dashboard", "Fleet Ops", "Telemetry", "Alerts"],
    link: "https://copa-fleet-command-center.base44.app",
  },
  {
    title: "Live Translation Screen System",
    subtitle: "Real-Time Multilingual Communication",
    description:
      "Dual-screen speech translation concept where each person sees live subtitles in their preferred language during face-to-face conversations.",
    tags: ["Speech-to-Text", "Translation", "Real-Time AI", "Multilingual UX"],
    buttons: [
      { label: "View Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "1-800 Voice Automation System",
    subtitle: "Conversational Voice Bot for Hospitality",
    description:
      "Conversational voice bot and actual 1-800 number for customer service automation in the hospitality industry. Natural speech workflows for automated resolution and customer support.",
    tags: ["Voice AI", "1-800 Number", "Hospitality", "Automation", "Conversational AI"],
    buttons: [{ label: "View Project", href: "#" }],
  },
  {
    title: "Smart Mirror",
    subtitle: "DIY Smart Mirror",
    description:
      "Created a smart mirror using Raspberry Pi and an old television with a DIY mirror surface. Interactive display system combining hardware and web technologies.",
    tags: ["Raspberry Pi", "IoT", "Smart Home", "DIY", "Hardware"],
    buttons: [{ label: "View Project", href: "#" }],
  },
  {
    title: "Productivity Activity Tracker",
    subtitle: "Behavior & Focus Analytics",
    description:
      "Desktop app concept for tracking time across coding, product work, social media, learning, meetings, and deep-focus sessions.",
    tags: ["Desktop App", "Productivity", "Analytics", "Focus"],
    buttons: [
      { label: "View Project", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

function MediaPlaceholder({ flagship, heroImage }) {
  if (flagship) {
    return (
      <div className="w-full border-b border-white/6 overflow-hidden">
        <img
          src="https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/077079eb9_Reference_MethodFlowofCopaAutonomousUnit.png"
          alt="Method Flow: COPA Autonomous Sanitation System"
          className="w-full object-contain bg-white"
        />
      </div>
    );
  }
  if (heroImage) {
    return (
      <div className="w-full border-b border-white/6 overflow-hidden h-64 lg:h-80">
        <img src={heroImage} alt="Project visual" className="w-full h-full object-cover object-center" />
      </div>
    );
  }
  return (
    <div className="w-full flex-shrink-0 flex items-center justify-center border-b border-white/6 bg-gradient-to-br from-white/3 to-transparent h-52 lg:h-60">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border border-white/12 flex items-center justify-center mx-auto mb-3 bg-white/4">
          <Play className="w-5 h-5 text-white/20" />
        </div>
        <p className="font-mono text-white/20 tracking-wider" style={{ fontSize: "0.75rem" }}>
          Media coming soon
        </p>
        <p className="font-mono text-white/12 tracking-wider mt-1" style={{ fontSize: "0.65rem" }}>
          Image · GIF · Video · Diagram
        </p>
      </div>
    </div>
  );
}

function ProjectButton({ label, href }) {
  const isPrimary = !["GitHub", "Demo"].includes(label);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-inter font-medium px-5 py-2.5 rounded-lg transition-all duration-200 ${
        isPrimary
          ? "border border-violet-400/50 text-violet-300 hover:bg-violet-400/12 hover:border-violet-400/80 hover:text-violet-200"
          : "border border-white/15 text-white/45 hover:border-white/30 hover:text-white/70"
      }`}
      style={{ fontSize: "0.9625rem" }}
    >
      {label}
      {isPrimary && <ExternalLink className="w-3.5 h-3.5 opacity-60" />}
    </a>
  );
}

function CopaFleetGroup({ project, index, cardNumber }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="rounded-2xl border border-violet-400/20 bg-white/2 overflow-hidden relative"
      style={{ boxShadow: "0 0 0 1px rgba(167,139,250,0.10), 0 4px 24px rgba(139,92,246,0.08)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-violet-400/15 bg-violet-400/4 flex-wrap gap-3">
        <div>
          <p className="font-mono text-violet-400/60 tracking-widest uppercase mb-0.5" style={{ fontSize: "0.72rem" }}>Live Product</p>
          <h3 className="font-syne font-bold text-white" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>{project.title}</h3>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-inter font-medium px-5 py-2.5 rounded-lg border border-violet-400/50 text-violet-300 hover:bg-violet-400/12 hover:border-violet-400/80 hover:text-violet-200 transition-all duration-200 flex-shrink-0"
          style={{ fontSize: "0.9rem" }}
        >
          Check out more on this website <ExternalLink className="w-3.5 h-3.5 opacity-60" />
        </a>
      </div>
      {/* Image display */}
      <div className="overflow-hidden" style={{ height: "500px" }}>
        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover object-top" />
      </div>
      {/* Shared description below */}
      <div className="p-8 flex flex-col gap-4 border-t border-white/6">
        <p className="font-mono text-violet-400/70 tracking-wider uppercase" style={{ fontSize: "0.8rem" }}>{project.subtitle}</p>
        <p className="font-inter text-white/58 leading-[1.85]" style={{ fontSize: "1.175rem" }}>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-inter tracking-wide px-3.5 py-1.5 rounded-full border bg-violet-400/7 border-violet-400/15 text-violet-300/65" style={{ fontSize: "0.875rem" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SO101Card({ project, index, cardNumber }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="rounded-2xl border border-violet-400/20 bg-white/2 overflow-hidden relative"
      style={{ boxShadow: "0 0 0 1px rgba(167,139,250,0.10), 0 4px 24px rgba(139,92,246,0.08)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-violet-400/15 bg-violet-400/4 flex-wrap gap-3">
        <div>
          <p className="font-mono text-violet-400/60 tracking-widest uppercase mb-0.5" style={{ fontSize: "0.72rem" }}>Robotic Automation</p>
          <h3 className="font-syne font-bold text-white" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>{project.title}</h3>
        </div>
      </div>
      {/* Video GIF on top, then static image */}
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/8">
        <div className="overflow-hidden" style={{ height: "280px" }}>
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden" style={{ height: "280px" }}>
          <img src={project.image} alt="SO101 Robotic Arm" className="w-full h-full object-cover object-center" />
        </div>
      </div>
      {/* Description below */}
      <div className="p-8 flex flex-col gap-4 border-t border-white/6">
        <p className="font-mono text-violet-400/70 tracking-wider uppercase" style={{ fontSize: "0.8rem" }}>{project.subtitle}</p>
        <p className="font-inter text-white/58 leading-[1.85]" style={{ fontSize: "1.175rem" }}>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-inter tracking-wide px-3.5 py-1.5 rounded-full border bg-violet-400/7 border-violet-400/15 text-violet-300/65" style={{ fontSize: "0.875rem" }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          {project.buttons.map((btn) => (
            <ProjectButton key={btn.label} label={btn.label} href={btn.href} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index, cardNumber }) {
  const { title, subtitle, description, tags, buttons, badge, flagship, heroImage } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      whileHover={flagship ? {} : { y: -2 }}
      className={`group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
        flagship
          ? "border border-violet-400/30 bg-gradient-to-br from-violet-950/40 via-white/3 to-indigo-950/30"
          : "border border-white/8 bg-white/3 hover:border-violet-400/25 hover:bg-violet-400/4"
      }`}
      style={
        flagship
          ? {
              boxShadow:
                "0 0 0 1px rgba(167,139,250,0.15), 0 8px 40px rgba(139,92,246,0.12), inset 0 1px 0 rgba(167,139,250,0.08)",
            }
          : {}
      }
    >


      <div className="p-8 lg:p-10 flex flex-col gap-5">
        {/* USPTO badge and title — positioned above image for flagship */}
        {badge && (
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-amber-400/60 bg-amber-400/10"
            style={{ boxShadow: "0 0 16px rgba(251,191,36,0.15)" }}>
            <span className="text-amber-300 text-lg">⚖️</span>
            <span
              className="font-mono font-bold tracking-widest uppercase text-amber-300"
              style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
            >
              {badge}
            </span>
          </div>
        )}

        <div>
          <p className="font-mono text-violet-400/70 tracking-wider uppercase mb-2" style={{ fontSize: "0.875rem" }}>
            {subtitle}
          </p>
          <h3
            className="font-syne font-bold text-white leading-tight group-hover:text-violet-200 transition-colors"
            style={{ fontSize: flagship ? "clamp(1.5rem, 2.5vw, 2rem)" : "clamp(1.3rem, 2vw, 1.75rem)" }}
          >
            {title}
          </h3>
        </div>
      </div>

      <MediaPlaceholder flagship={flagship} heroImage={heroImage} />

      <div className="p-8 lg:p-10 flex flex-col gap-5">

        <p className="font-inter text-white/58 leading-[1.85]" style={{ fontSize: "1.175rem" }}>
          {flagship
            ? <>Patent-pending sanitation infrastructure system combining <span className="text-violet-300 font-semibold">Physical AI</span>, predictive maintenance, telemetry, user access control, and autonomous servicing workflows for real-world field deployments.</>
            : description}
        </p>

        <div className="flex flex-wrap gap-2">
          {(tags || []).map((tag) => (
            <span
              key={tag}
              className={`font-inter tracking-wide px-3.5 py-1.5 rounded-full border ${
                tag === "Patent Pending"
                  ? "bg-amber-400/10 border-amber-400/30 text-amber-300/80"
                  : "bg-violet-400/7 border-violet-400/15 text-violet-300/65"
              }`}
              style={{ fontSize: "0.875rem" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          {(buttons || []).map((btn) => (
            <ProjectButton key={btn.label} label={btn.label} href={btn.href} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading num="04" title="AI Projects" />

      <div className="flex flex-col gap-6">
        {PROJECTS.map((p, i) => {
          const cardNumber = i + 1;
          return (
            <div key={i} className="relative">
              {/* Card number outside frame - hidden on mobile */}
              <div className="absolute -left-16 top-0 hidden lg:flex items-center justify-center w-12 h-12">
                <span className="font-syne font-bold text-violet-300" style={{ fontSize: "2.8rem" }}>{cardNumber}</span>
              </div>
              {p.type === "copa-fleet-group" ? (
                <CopaFleetGroup project={p} index={i} cardNumber={cardNumber} />
              ) : p.type === "so101" ? (
                <SO101Card project={p} index={i} cardNumber={cardNumber} />
              ) : (
                <ProjectCard project={p} index={i} cardNumber={cardNumber} />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}