import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const JOBS = [
  {
    company: "Amazon",
    role: "Lead Product Manager - Technical",
    description: "Conversational AI, voice automation, Alexa Automotive, connected vehicle experiences, navigation, local discovery, multimodal search, and OEM integrations across millions of connected devices.",
    tags: ["Conversational AI", "Voice AI", "Alexa Automotive", "Connected Vehicles", "Search", "OEM Integrations"],
  },
  {
    company: "HPE Aruba Networking",
    role: "Senior Product Manager",
    description: "Enterprise networking, cloud-native edge infrastructure, Layer 3 connectivity, campus and data center systems, and hardware-software networking platforms.",
    tags: ["Edge Infrastructure", "Enterprise Networking", "Cloud-Managed Systems", "Hardware Platforms"],
  },
  {
    company: "Cisco",
    role: "Product Management Intern",
    description: "Product strategy work across networking platforms, SaaS transformation, and enterprise software adoption.",
    tags: ["Product Strategy", "Networking", "SaaS"],
  },
  {
    company: "Ericsson",
    role: "Senior RF Engineer",
    description: "Telecom infrastructure, RF planning, 4G deployment, and large-scale connectivity systems for carriers and high-density venues.",
    tags: ["RF Systems", "Telecom", "4G", "Connectivity"],
  },
];

const EDUCATION = [
  { school: "University of Notre Dame", degree: "MBA" },
  { school: "Vellore Institute of Technology", degree: "B.Tech in Electronics and Communication Engineering" },
];

export default function ExperienceSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="02" title="Experience" />

      <div className="space-y-2 mb-10">
        {JOBS.map((job, i) => (
          <div key={i} className="group relative rounded-xl border border-transparent hover:border-violet-400/20 hover:bg-violet-400/4 p-6 transition-all duration-300">
            <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-violet-400/60 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <span className="font-syne font-bold text-white text-base">{job.role}</span>
                <span className="text-violet-400 font-medium"> @ {job.company}</span>
              </div>
            </div>
            <p className="font-inter text-sm text-white/50 leading-relaxed mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded bg-violet-400/8 border border-violet-400/15 text-violet-300/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">Education</p>
        <div className="space-y-3">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="font-syne font-semibold text-white/80 text-sm">{edu.school}</span>
              <span className="hidden sm:block text-white/20 mx-2">—</span>
              <span className="font-inter text-sm text-white/45">{edu.degree}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}