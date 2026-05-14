import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "COPA Autonomous Sanitation System",
    subtitle: "Physical AI • Telemetry • Edge Intelligence",
    description: "Connected portable sanitation platform focused on cleaner user experience, telemetry-driven servicing, remote monitoring, access control, and future autonomous cleaning workflows for outdoor events and field deployments.",
    tags: ["ESP32", "IoT", "Telemetry", "Sensors", "Physical AI", "Automation"],
    buttons: ["Learn More", "GitHub", "Demo"],
  },
  {
    title: "COPA Fleet Telemetry Dashboard",
    subtitle: "Operator Fleet Operations Platform",
    description: "Dashboard for monitoring sanitation units across battery health, water levels, usage telemetry, lock state, tamper alerts, service workflows, and fleet visibility.",
    tags: ["React", "IoT Dashboard", "Fleet Ops", "Telemetry", "Alerts"],
    buttons: ["View Demo", "GitHub"],
  },
  {
    title: "Patent Pending Maintenance System",
    subtitle: "Predictive Maintenance • Access Control",
    description: "Patent-pending system concept for sanitation infrastructure combining predictive maintenance, telemetry, user access control, and autonomous servicing workflows.",
    tags: ["Patent Pending", "Predictive Maintenance", "Access Control", "Telemetry"],
    buttons: ["View Details"],
  },
  {
    title: "WhatsApp Food Ordering PWA",
    subtitle: "Community Commerce Platform",
    description: "Progressive web app for home-food businesses to publish dynamic daily menus through one permanent link and manage community orders without messy WhatsApp threads.",
    tags: ["PWA", "Supabase", "Mobile UX", "Ordering", "Community Commerce"],
    buttons: ["View Demo", "GitHub"],
  },
  {
    title: "Live Translation Screen System",
    subtitle: "Real-Time Multilingual Communication",
    description: "Dual-screen speech translation concept where each person sees live subtitles in their preferred language during face-to-face conversations.",
    tags: ["Speech-to-Text", "Translation", "Real-Time AI", "Multilingual UX"],
    buttons: ["View Demo", "GitHub"],
  },
  {
    title: "SO101 Open Source Robotics Arm",
    subtitle: "Robotic Automation Experiments",
    description: "Experiments with low-cost open-source robotic arm workflows for future physical AI, autonomous servicing, and hardware automation projects.",
    tags: ["Robotics", "Automation", "Embedded Systems", "Physical AI"],
    buttons: ["View Project", "GitHub"],
  },
  {
    title: "Productivity Activity Tracker",
    subtitle: "Behavior & Focus Analytics",
    description: "Desktop app concept for tracking time across coding, product work, social media, learning, meetings, and deep-focus sessions.",
    tags: ["Desktop App", "Productivity", "Analytics", "Focus"],
    buttons: ["View Project", "GitHub"],
  },
  {
    title: "Conversational AI for Hardware Founders",
    subtitle: "AI Support & Knowledge Assistant",
    description: "Conversational AI assistant concept to help hardware founders navigate prototyping, sourcing, manufacturing, fundraising, and field operations.",
    tags: ["LLM", "Hardware Startups", "AI Assistant", "Knowledge Systems"],
    buttons: ["View Project", "GitHub"],
  },
  {
    title: "1-800 Voice Automation System",
    subtitle: "Conversational Customer Service Platform",
    description: "Voice-first automation prototype inspired by large-scale customer support systems, natural speech workflows, and automated resolution experiences.",
    tags: ["Voice AI", "Customer Support", "Automation", "Conversational AI"],
    buttons: ["View Project", "GitHub"],
  },
];

function ProjectButton({ label }) {
  const isGithub = label === "GitHub";
  return (
    <button className={`font-mono text-[10px] tracking-wide px-3 py-1.5 rounded transition-all duration-200 ${
      isGithub
        ? "border border-white/15 text-white/40 hover:border-violet-400/40 hover:text-violet-300"
        : "border border-violet-400/30 text-violet-300/80 hover:bg-violet-400/10 hover:text-violet-200"
    }`}>
      {isGithub && <span className="inline-block mr-1">↗</span>}
      {label}
    </button>
  );
}

export default function ProjectsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="03" title="Projects" />

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {PROJECTS.map((project, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="group relative bg-white/3 border border-white/8 rounded-xl overflow-hidden hover:border-violet-400/30 hover:bg-violet-400/5 transition-all duration-300 flex flex-col">

            <div className="w-full h-36 bg-white/3 border-b border-white/6 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-2">
                  <Play className="w-3 h-3 text-white/15" />
                </div>
                <span className="font-mono text-[10px] text-white/20 tracking-wider">Media coming soon</span>
              </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <p className="font-mono text-[10px] text-violet-400/60 tracking-wider mb-1">{project.subtitle}</p>
              <h3 className="font-syne font-bold text-white text-sm mb-2 group-hover:text-violet-300 transition-colors leading-snug">
                {project.title}
              </h3>
              <p className="font-inter text-xs text-white/45 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded bg-violet-400/8 border border-violet-400/15 text-violet-300/60">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.buttons.map((btn) => (
                  <ProjectButton key={btn} label={btn} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}