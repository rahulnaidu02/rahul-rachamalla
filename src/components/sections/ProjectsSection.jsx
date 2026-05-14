import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "COPA Autonomous Sanitation System",
    subtitle: "Physical AI • Telemetry • Edge Intelligence",
    description: "Connected portable sanitation platform focused on cleaner user experience, telemetry-driven servicing, remote monitoring, access control, and future autonomous cleaning workflows for outdoor events and field deployments.",
    tags: ["ESP32", "IoT", "Telemetry", "Sensors", "Physical AI", "Automation"],
    buttons: [{ label: "Learn More", href: "https://www.letsgocopa.com" }, { label: "GitHub", href: "#" }, { label: "Demo", href: "#" }],
    featured: true,
  },
  {
    title: "COPA Fleet Telemetry Dashboard",
    subtitle: "Operator Fleet Operations Platform",
    description: "Dashboard for monitoring sanitation units across battery health, water levels, usage telemetry, lock state, tamper alerts, service workflows, and fleet visibility.",
    tags: ["React", "IoT Dashboard", "Fleet Ops", "Telemetry", "Alerts"],
    buttons: [{ label: "View Demo", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    title: "Patent Pending Maintenance System",
    subtitle: "Predictive Maintenance • Access Control",
    description: "Patent-pending system concept for sanitation infrastructure combining predictive maintenance, telemetry, user access control, and autonomous servicing workflows.",
    tags: ["Patent Pending", "Predictive Maintenance", "Access Control", "Telemetry"],
    buttons: [{ label: "View Details", href: "#" }],
  },
  {
    title: "WhatsApp Food Ordering PWA",
    subtitle: "Community Commerce Platform",
    description: "Progressive web app for home-food businesses to publish dynamic daily menus through one permanent link and manage community orders without messy WhatsApp threads.",
    tags: ["PWA", "Supabase", "Mobile UX", "Ordering", "Community Commerce"],
    buttons: [{ label: "View Demo", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    title: "Live Translation Screen System",
    subtitle: "Real-Time Multilingual Communication",
    description: "Dual-screen speech translation concept where each person sees live subtitles in their preferred language during face-to-face conversations.",
    tags: ["Speech-to-Text", "Translation", "Real-Time AI", "Multilingual UX"],
    buttons: [{ label: "View Demo", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    title: "SO101 Open Source Robotics Arm",
    subtitle: "Robotic Automation Experiments",
    description: "Experiments with low-cost open-source robotic arm workflows for future physical AI, autonomous servicing, and hardware automation projects.",
    tags: ["Robotics", "Automation", "Embedded Systems", "Physical AI"],
    buttons: [{ label: "View Project", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    title: "Productivity Activity Tracker",
    subtitle: "Behavior & Focus Analytics",
    description: "Desktop app concept for tracking time across coding, product work, social media, learning, meetings, and deep-focus sessions.",
    tags: ["Desktop App", "Productivity", "Analytics", "Focus"],
    buttons: [{ label: "View Project", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    title: "Conversational AI for Hardware Founders",
    subtitle: "AI Support & Knowledge Assistant",
    description: "Conversational AI assistant concept to help hardware founders navigate prototyping, sourcing, manufacturing, fundraising, and field operations.",
    tags: ["LLM", "Hardware Startups", "AI Assistant", "Knowledge Systems"],
    buttons: [{ label: "View Project", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    title: "1-800 Voice Automation System",
    subtitle: "Conversational Customer Service Platform",
    description: "Voice-first automation prototype inspired by large-scale customer support systems, natural speech workflows, and automated resolution experiences.",
    tags: ["Voice AI", "Customer Support", "Automation", "Conversational AI"],
    buttons: [{ label: "View Project", href: "#" }, { label: "GitHub", href: "#" }],
  },
];

function ProjectButton({ label, href }) {
  const isGithub = label === "GitHub";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-mono tracking-wide px-4 py-2 rounded transition-all duration-200 ${
        isGithub
          ? "border border-white/15 text-white/45 hover:border-violet-400/40 hover:text-violet-300"
          : "border border-violet-400/35 text-violet-300/85 hover:bg-violet-400/10 hover:text-violet-200"
      }`}
      style={{ fontSize: "0.8rem" }}
    >
      {isGithub && <span className="inline-block mr-1">↗</span>}
      {label}
    </a>
  );
}

function ProjectCard({ project, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
      className={`group relative bg-white/3 border border-white/8 rounded-2xl overflow-hidden hover:border-violet-400/30 hover:bg-violet-400/5 transition-all duration-300 flex flex-col ${featured ? "col-span-full" : ""}`}
    >
      {/* Media placeholder */}
      <div className={`w-full bg-white/3 border-b border-white/6 flex items-center justify-center flex-shrink-0 ${featured ? "h-48 lg:h-52" : "h-44"}`}>
        <div className="text-center">
          <div className="w-10 h-10 rounded-full border border-white/12 flex items-center justify-center mx-auto mb-3">
            <Play className="w-4 h-4 text-white/20" />
          </div>
          <span className="font-mono text-white/25 tracking-wider" style={{ fontSize: "0.75rem" }}>Media coming soon</span>
        </div>
      </div>

      <div className={`p-7 flex flex-col flex-1 ${featured ? "lg:flex-row lg:gap-10" : ""}`}>
        <div className={`flex flex-col flex-1 ${featured ? "lg:w-1/2" : ""}`}>
          <p className="font-mono text-violet-400/65 tracking-wider mb-2" style={{ fontSize: "0.78rem" }}>{project.subtitle}</p>
          <h3 className="font-syne font-bold text-white group-hover:text-violet-300 transition-colors leading-snug mb-3" style={{ fontSize: featured ? "1.4rem" : "1.15rem" }}>
            {project.title}
          </h3>
          <p className="font-inter text-white/50 leading-[1.8] mb-5 flex-1" style={{ fontSize: "0.9625rem" }}>
            {project.description}
          </p>
        </div>

        <div className={`flex flex-col justify-between gap-5 ${featured ? "lg:w-1/2 lg:pt-8" : ""}`}>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono tracking-wide px-3 py-1 rounded-full bg-violet-400/8 border border-violet-400/15 text-violet-300/65" style={{ fontSize: "0.78rem" }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.buttons.map((btn) => (
              <ProjectButton key={btn.label} label={btn.label} href={btn.href} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [featured, ...rest] = PROJECTS;

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="03" title="Projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Featured first card — full width */}
        <ProjectCard project={featured} index={0} featured={true} />

        {/* Remaining cards — 2 per row */}
        {rest.map((project, i) => (
          <ProjectCard key={i} project={project} index={i + 1} featured={false} />
        ))}
      </div>
    </motion.div>
  );
}