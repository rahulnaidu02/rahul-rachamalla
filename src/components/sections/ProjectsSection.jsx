import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    emoji: "🔌",
    title: "IoT Environmental Monitor",
    description: "Custom PCB with CO2, VOC, temp & humidity sensors feeding a real-time dashboard. Runs 8+ months on a coin-cell battery.",
    tags: ["KiCad", "ESP32", "MQTT", "React"],
    github: "#",
    live: "#",
  },
  {
    emoji: "🤖",
    title: "Automated Test Rig",
    description: "Production-line test fixture that cut manual QA time by 80%. Python framework + microcontroller test harness.",
    tags: ["Python", "PyTest", "Arduino", "Serial"],
    github: "#",
    live: null,
  },
  {
    emoji: "🏠",
    title: "Smart Home Controller",
    description: "Raspberry Pi-based home automation hub with React dashboard. Controls lights, HVAC, and security cameras over MQTT.",
    tags: ["RPi", "React", "Node.js", "MQTT"],
    github: "#",
    live: "#",
  },
  {
    emoji: "⌨️",
    title: "Hardware CLI Toolkit",
    description: "Open-source CLI for hardware engineers: automates BOM generation, component sourcing, and Gerber export.",
    tags: ["Rust", "Open Source", "CLI"],
    github: "#",
    live: null,
  },
];

export default function ProjectsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="03" title="Projects" />

      <div className="grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative bg-white/3 border border-white/8 rounded-xl p-6 hover:border-violet-400/30 hover:bg-violet-400/5 transition-all duration-300">

            <div className="flex items-start justify-between mb-4">
              <span className="text-3xl">{project.emoji}</span>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 text-white/40 hover:text-violet-400 transition-colors" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 text-white/40 hover:text-violet-400 transition-colors" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-syne font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
              {project.title}
            </h3>
            <p className="font-inter text-sm text-white/45 leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag}
                  className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded bg-violet-400/8 border border-violet-400/15 text-violet-300/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}