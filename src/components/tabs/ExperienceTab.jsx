import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    logo: "⚙️",
    company: "Your Current Company",
    role: "Senior Hardware Engineer",
    period: "2021 — Present",
    location: "San Francisco, CA",
    description:
      "Leading hardware design and bring-up for next-generation embedded devices. From schematic to production — PCB layout, firmware, and DVT/EVT testing.",
    tags: ["KiCad", "STM32", "Embedded C", "JTAG", "PCB"],
  },
  {
    logo: "🔬",
    company: "Previous Company",
    role: "Hardware & Firmware Engineer",
    period: "2018 — 2021",
    location: "New York, NY",
    description:
      "Built custom sensor platforms and automated test fixtures for production QA. Worked across the full stack from silicon to cloud.",
    tags: ["ESP32", "Python", "RF Design", "BLE", "AWS IoT"],
  },
  {
    logo: "🛠️",
    company: "Early Career Co.",
    role: "Electronics Engineer",
    period: "2015 — 2018",
    location: "Boston, MA",
    description:
      "Designed mixed-signal PCBs and power management systems for medical device applications. Learned the value of getting things right the first time.",
    tags: ["Altium", "Signal Integrity", "Power Design", "FDA"],
  },
];

const EDUCATION = [
  {
    logo: "🎓",
    school: "State University",
    degree: "B.S. Electrical Engineering",
    period: "2011 — 2015",
    note: "Focus on embedded systems and digital signal processing.",
  },
];

export default function ExperienceTab() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="font-syne text-lg font-bold text-foreground mb-6">Work</h2>
        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#14161A] border border-border flex items-center justify-center text-xl shrink-0">
                {exp.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <div>
                    <span className="font-syne font-bold text-foreground">{exp.company}</span>
                    <span className="text-[#A0A0A0] font-inter text-sm"> — {exp.role}</span>
                  </div>
                  <div className="font-mono text-xs text-[#A0A0A0] shrink-0">{exp.period}</div>
                </div>
                <div className="font-inter text-xs text-[#A0A0A0] mb-2">{exp.location}</div>
                <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
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

      <div>
        <h2 className="font-syne text-lg font-bold text-foreground mb-6">Education</h2>
        <div className="space-y-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#14161A] border border-border flex items-center justify-center text-xl shrink-0">
                {edu.logo}
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <span className="font-syne font-bold text-foreground">{edu.school}</span>
                  <span className="font-mono text-xs text-[#A0A0A0]">{edu.period}</span>
                </div>
                <div className="font-inter text-sm text-primary mb-1">{edu.degree}</div>
                <p className="font-inter text-sm text-[#A0A0A0]">{edu.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}