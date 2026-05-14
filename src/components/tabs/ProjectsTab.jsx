import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    emoji: "🔌",
    title: "IoT Environmental Monitor",
    description:
      "Custom PCB with a constellation of environmental sensors (CO2, VOC, temp, humidity) feeding a real-time dashboard. Runs on a coin-cell battery for 8+ months.",
    tags: ["KiCad", "ESP32", "MQTT", "React"],
    github: "#",
    live: "#",
    status: "Active",
  },
  {
    emoji: "🤖",
    title: "Automated Test Rig",
    description:
      "Production-line test fixture that cut manual QA time by 80%. Combines a custom Python framework with a microcontroller test harness.",
    tags: ["Python", "PyTest", "Arduino", "Serial"],
    github: "#",
    live: null,
    status: "Shipped",
  },
  {
    emoji: "🏠",
    title: "Smart Home Controller",
    description:
      "Raspberry Pi-based home automation hub with a React dashboard. Controls lights, HVAC, and security cameras over MQTT.",
    tags: ["RPi", "React", "Node.js", "MQTT"],
    github: "#",
    live: "#",
    status: "Active",
  },
  {
    emoji: "⌨️",
    title: "Hardware CLI Toolkit",
    description:
      "Open-source command-line tool for hardware engineers that automates BOM generation, component sourcing, and Gerber export.",
    tags: ["Rust", "Open Source", "CLI"],
    github: "#",
    live: null,
    status: "Open Source",
  },
];

const STATUS_COLOR = {
  Active: "text-primary",
  Shipped: "text-green-400",
  "Open Source": "text-yellow-400",
};

export default function ProjectsTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-syne text-lg font-bold text-foreground">Projects</h2>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#A0A0A0] hover:text-primary text-sm font-inter transition-colors"
        >
          <Github className="w-4 h-4" />
          View all on GitHub
        </a>
      </div>

      <div className="space-y-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-4 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#14161A] border border-border flex items-center justify-center text-xl shrink-0">
              {project.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-syne font-bold text-foreground">{project.title}</span>
                  <span className={`font-mono text-[10px] tracking-wider ${STATUS_COLOR[project.status]}`}>
                    ● {project.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 text-[#A0A0A0] hover:text-primary transition-colors" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 text-[#A0A0A0] hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </div>
              <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border border-border text-[#A0A0A0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}