import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const JOBS = [
  {
    company: "Your Company",
    role: "Senior Hardware Engineer",
    period: "2022 — Present",
    location: "San Francisco, CA",
    bullets: [
      "Lead hardware architecture for next-gen IoT sensor platform used in 10k+ deployed units.",
      "Designed custom PCBs in KiCad reducing BOM cost by 30% over previous generation.",
      "Wrote firmware in C/C++ targeting ARM Cortex-M series MCUs with RTOS integration.",
    ],
    tags: ["KiCad", "C/C++", "RTOS", "ARM", "Altium"],
  },
  {
    company: "Previous Company",
    role: "Embedded Systems Engineer",
    period: "2019 — 2022",
    location: "Austin, TX",
    bullets: [
      "Developed automated test frameworks that cut QA cycle time by 80%.",
      "Shipped firmware for 3 product lines used in medical device applications.",
      "Collaborated with mechanical and RF teams on antenna placement and shielding.",
    ],
    tags: ["Python", "PyTest", "Serial", "RF", "FreeRTOS"],
  },
  {
    company: "Early Startup",
    role: "Hardware Engineer",
    period: "2017 — 2019",
    location: "Remote",
    bullets: [
      "First hardware hire — built the team's PCB design workflow from scratch.",
      "Prototyped and iterated 6 hardware revisions to production-ready state.",
    ],
    tags: ["Eagle", "Arduino", "Raspberry Pi", "MQTT"],
  },
];

export default function ExperienceSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="02" title="Experience" />

      <div className="space-y-2">
        {JOBS.map((job, i) => (
          <div key={i}
            className="group relative rounded-xl border border-transparent hover:border-violet-400/20 hover:bg-violet-400/4 p-6 transition-all duration-300">
            {/* Left accent */}
            <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-violet-400/60 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <span className="font-syne font-bold text-white text-base">{job.role}</span>
                <span className="text-violet-400 font-medium"> @ {job.company}</span>
              </div>
              <span className="font-mono text-xs text-white/30 shrink-0">{job.period}</span>
            </div>

            <ul className="space-y-2 mb-4">
              {job.bullets.map((b, j) => (
                <li key={j} className="font-inter text-sm text-white/50 flex gap-3">
                  <span className="text-violet-400 mt-0.5 shrink-0">▹</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag}
                  className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded bg-violet-400/8 border border-violet-400/15 text-violet-300/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}