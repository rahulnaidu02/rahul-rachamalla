import { motion } from "framer-motion";
import SectionLabel from "../dossier/SectionLabel";
import GlassCard from "../dossier/GlassCard";
import { Briefcase, GraduationCap } from "lucide-react";

const EXPERIENCES = [
  {
    period: "2020 — Present",
    role: "Senior Hardware Engineer",
    company: "Tech Company",
    description: "Leading hardware design and prototyping for next-generation IoT devices. Architecting embedded systems from concept to production.",
    tags: ["PCB Design", "Embedded C", "IoT", "FPGA"],
  },
  {
    period: "2017 — 2020",
    role: "Hardware & Software Engineer",
    company: "Innovation Labs",
    description: "Developed integrated hardware-software solutions. Built custom test fixtures and automated manufacturing workflows.",
    tags: ["Python", "Arduino", "CAD", "Testing"],
  },
  {
    period: "2014 — 2017",
    role: "Electronics Engineer",
    company: "Engineering Firm",
    description: "Designed mixed-signal circuits and power management systems. Collaborated on multi-disciplinary product development teams.",
    tags: ["Analog Design", "Power Systems", "Schematic Design"],
  },
];

const EDUCATION = [
  {
    period: "2010 — 2014",
    degree: "B.S. Electrical Engineering",
    school: "University",
    focus: "Focus on embedded systems and signal processing",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="01" title="Experience & Background" />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-8 space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <GlassCard key={i} delay={i * 0.15}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-syne text-lg font-bold text-foreground">{exp.role}</h3>
                        <p className="font-inter text-sm text-primary">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground tracking-wider shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-wider px-3 py-1 rounded-full border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Education sidebar */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6 uppercase">
                Education
              </h3>
              {EDUCATION.map((edu, i) => (
                <div key={i} className="glass-card rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                  <h4 className="font-syne font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="font-inter text-sm text-primary mb-1">{edu.school}</p>
                  <p className="font-inter text-xs text-muted-foreground">{edu.focus}</p>
                </div>
              ))}

              {/* Skills */}
              <div className="mt-6 glass-card rounded-lg p-6">
                <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
                  Core Systems
                </h3>
                <div className="space-y-3">
                  {["Hardware Design", "Embedded Systems", "Python / C++", "PCB Layout", "3D Printing", "IoT Platforms"].map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="font-inter text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}