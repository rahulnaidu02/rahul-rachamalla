import { motion } from "framer-motion";
import SectionLabel from "../dossier/SectionLabel";
import GlassCard from "../dossier/GlassCard";
import DossierImage from "../dossier/DossierImage";
import { ExternalLink, Github, Cpu, Code, Wrench, Zap } from "lucide-react";

const PROJECTS = [
  {
    title: "IoT Sensor Array",
    category: "HARDWARE",
    description: "Custom PCB design for a multi-sensor environmental monitoring system with real-time data telemetry.",
    tags: ["KiCad", "ESP32", "MQTT", "PCB"],
    icon: Cpu,
  },
  {
    title: "Automated Test Fixture",
    category: "HARDWARE + SOFTWARE",
    description: "Designed and built an automated test fixture for production-line quality assurance with 99.7% accuracy.",
    tags: ["Python", "Arduino", "3D Print", "Serial"],
    icon: Wrench,
  },
  {
    title: "Smart Home Controller",
    category: "FULL STACK",
    description: "A custom home automation system built on Raspberry Pi with a React dashboard and MQTT backend.",
    tags: ["React", "MQTT", "RPi", "Node.js"],
    icon: Zap,
  },
  {
    title: "Open Source CLI Tool",
    category: "SOFTWARE",
    description: "A developer productivity tool for hardware engineers. Automates BOM generation and component sourcing.",
    tags: ["Rust", "CLI", "Open Source"],
    icon: Code,
  },
];

export default function ProjectsSection({ hardwareImage, codeImage }) {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="02" title="Performance Matrix" />

        {/* Featured project image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 rounded-xl overflow-hidden"
        >
          <DossierImage
            src={hardwareImage}
            alt="Hardware workspace"
            className="w-full h-64 md:h-80 rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="font-mono text-xs text-primary tracking-[0.3em] mb-2">WORKBENCH // ACTIVE</div>
            <p className="font-syne text-2xl md:text-3xl font-bold">Hardware & Software Projects</p>
          </div>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <GlassCard key={i} delay={i * 0.1} className="group cursor-pointer hover:border-primary/30 transition-colors duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary/70 mb-2">
                  {project.category}
                </div>
                <h3 className="font-syne text-xl font-bold mb-2">{project.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* GitHub Pulse section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Github className="w-5 h-5 text-primary" />
            <h3 className="font-mono text-sm tracking-[0.2em] text-foreground">GITHUB_PULSE</h3>
            <div className="flex-1 h-px bg-border ml-4" />
            <span className="font-mono text-xs text-primary">LIVE</span>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "REPOSITORIES", value: "42" },
              { label: "CONTRIBUTIONS", value: "1.2K" },
              { label: "STARS", value: "186" },
              { label: "STREAK", value: "47d" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-mono text-2xl md:text-3xl font-semibold text-primary">{stat.value}</div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contribution heatmap placeholder */}
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 84 }, (_, i) => {
              const level = Math.random();
              let opacity = "opacity-10";
              if (level > 0.7) opacity = "opacity-100";
              else if (level > 0.5) opacity = "opacity-60";
              else if (level > 0.3) opacity = "opacity-30";
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-sm bg-primary ${opacity}`}
                />
              );
            })}
          </div>
          <div className="mt-3 flex items-center justify-end gap-2">
            <span className="font-mono text-[9px] text-muted-foreground">LESS</span>
            {[10, 30, 60, 100].map((op) => (
              <div key={op} className={`w-3 h-3 rounded-sm bg-primary`} style={{ opacity: op / 100 }} />
            ))}
            <span className="font-mono text-[9px] text-muted-foreground">MORE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}