import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "Patent Pending Autonomous Maintenance System",
    subtitle: "Predictive Maintenance, User Access Control, Autonomous Servicing",
    description:
      "Patent-pending sanitation infrastructure system combining predictive maintenance, telemetry, user access control, and autonomous servicing workflows for real-world field deployments.",
    tags: ["Patent Pending", "Predictive Maintenance", "Access Control", "Telemetry", "Autonomous Servicing"],
    buttons: [
      { label: "View Details", href: "#" },
      { label: "Copa Website", href: "https://www.letsgocopa.com" },
    ],
    badge: "USPTO Provisional Patent Pending",
    flagship: true,
  },
  {
    title: "COPA Autonomous Sanitation System",
    subtitle: "Physical AI • Telemetry • Edge Intelligence",
    description:
      "Connected portable sanitation platform focused on cleaner user experience, telemetry-driven servicing, remote monitoring, access control, and future autonomous cleaning workflows for outdoor events and field deployments.",
    tags: ["ESP32", "IoT", "Telemetry", "Sensors", "Physical AI", "Automation"],
    buttons: [
      { label: "Learn More", href: "https://www.letsgocopa.com" },
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "SO101 Open Source Robotics Arm",
    subtitle: "Robotic Automation Experiments",
    description:
      "Experiments with low-cost open-source robotic arm workflows for future physical AI, autonomous servicing, and hardware automation projects.",
    tags: ["Robotics", "Automation", "Embedded Systems", "Physical AI", "Open Source"],
    buttons: [
      { label: "View Project", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "COPA Fleet Telemetry Dashboard",
    subtitle: "Operator Fleet Operations Platform",
    description:
      "Dashboard for monitoring sanitation units across battery health, water levels, usage telemetry, lock state, tamper alerts, service workflows, and fleet visibility.",
    tags: ["React", "IoT Dashboard", "Fleet Ops", "Telemetry", "Alerts"],
    buttons: [
      { label: "View Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
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
    title: "WhatsApp Food Ordering PWA",
    subtitle: "Community Commerce Platform",
    description:
      "Progressive web app for home-food businesses to publish dynamic daily menus through one permanent link and manage community orders without messy WhatsApp threads.",
    tags: ["PWA", "Supabase", "Mobile UX", "Ordering", "Community Commerce"],
    buttons: [
      { label: "View Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "1-800 Voice Automation System",
    subtitle: "Conversational Customer Service Platform",
    description:
      "Voice-first automation prototype inspired by large-scale customer support systems, natural speech workflows, and automated resolution experiences.",
    tags: ["Voice AI", "Customer Support", "Automation", "Conversational AI"],
    buttons: [{ label: "View Project", href: "#" }],
  },
  {
    title: "Conversational AI for Hardware Founders",
    subtitle: "AI Support & Knowledge Assistant",
    description:
      "Conversational AI assistant concept to help hardware founders navigate prototyping, sourcing, manufacturing, fundraising, and field operations.",
    tags: ["LLM", "Hardware Startups", "AI Assistant", "Knowledge Systems"],
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

function MediaPlaceholder({ flagship }) {
  return (
    <div
      className={`w-full flex-shrink-0 flex items-center justify-center border-b border-white/6 bg-gradient-to-br from-white/3 to-transparent ${
        flagship ? "h-64 lg:h-72" : "h-52 lg:h-60"
      }`}
    >
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

function ProjectCard({ project, index }) {
  const { title, subtitle, description, tags, buttons, badge, flagship } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
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
      {/* Flagship glow pulse */}
      {flagship && (
        <div className="absolute -inset-px rounded-2xl pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, transparent 60%)" }} />
      )}

      {/* Badge */}
      {badge && (
        <div className="absolute top-5 right-5 z-10">
          <span
            className="font-mono font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-violet-400/50 bg-violet-400/12 text-violet-300"
            style={{ fontSize: "0.7rem" }}
          >
            {badge}
          </span>
        </div>
      )}

      {/* Media area */}
      <MediaPlaceholder flagship={flagship} />

      {/* Content */}
      <div className="p-8 lg:p-10 flex flex-col gap-5">
        {/* Header */}
        <div>
          <p
            className="font-mono text-violet-400/70 tracking-wider uppercase mb-2"
            style={{ fontSize: "0.875rem" }}
          >
            {subtitle}
          </p>
          <h3
            className={`font-syne font-bold text-white leading-tight group-hover:text-violet-200 transition-colors ${
              flagship ? "" : ""
            }`}
            style={{ fontSize: flagship ? "clamp(1.5rem, 2.5vw, 2rem)" : "clamp(1.3rem, 2vw, 1.75rem)" }}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="font-inter text-white/58 leading-[1.85]"
          style={{ fontSize: "1.0625rem" }}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
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

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          {buttons.map((btn) => (
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
      <p className="font-inter text-white/45 mb-10 leading-[1.8]" style={{ fontSize: "1.0625rem" }}>
        Experimental systems across AI, robotics, telemetry, automation, and connected infrastructure.
      </p>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </motion.div>
  );
}