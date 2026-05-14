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

      <div className="space-y-3 mb-14">
        {JOBS.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group relative rounded-2xl border border-white/8 bg-white/2 hover:border-violet-400/25 hover:bg-violet-400/4 p-8 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
              <div>
                <span className="font-syne font-bold text-white" style={{ fontSize: "1.2rem" }}>{job.role}</span>
                <span className="text-violet-400 font-semibold" style={{ fontSize: "1.1rem" }}> @ {job.company}</span>
              </div>
            </div>
            <p className="font-inter text-white/55 leading-[1.8] mb-5" style={{ fontSize: "1rem" }}>
              {job.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span key={tag} className="font-mono tracking-wide px-3 py-1 rounded-full bg-violet-400/8 border border-violet-400/15 text-violet-300/70" style={{ fontSize: "0.8rem" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <p className="font-mono text-white/35 tracking-widest uppercase mb-6" style={{ fontSize: "0.8rem" }}>Education</p>
        <div className="space-y-4">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1">
              <span className="font-syne font-bold text-white/85" style={{ fontSize: "1.05rem" }}>{edu.school}</span>
              <span className="hidden sm:block text-white/25 mx-3">|</span>
              <span className="font-inter text-white/55" style={{ fontSize: "1rem" }}>{edu.degree}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}