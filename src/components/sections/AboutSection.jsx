import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const INTERESTS = [
  "⚡ Embedded Systems", "🏔️ Alpine Climbing", "🏊 Triathlon",
  "🔧 PCB Design", "💻 Open Source", "📝 Writing",
  "🤖 IoT & Sensors", "🥊 Muay Thai", "🥋 BJJ",
];

export default function AboutSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="01" title="About Me" />

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-4 font-inter text-white/60 leading-relaxed text-sm">
          <p>
            I'm a technical product builder focused on systems where software, hardware, AI, and real-world operations meet.
          </p>
          <p>
            My background spans Amazon Alexa Automotive, conversational AI customer support, HPE Aruba enterprise networking,
            Cisco product strategy, and Ericsson RF systems. I've worked across voice interfaces, connected vehicles,
            cloud-connected devices, embedded platforms, telemetry, enterprise infrastructure, and 0→1 product launches.
          </p>
          <p>
            I'm currently building{" "}
            <span className="text-violet-400 font-medium">Copa Labs</span>, a smart portable sanitation system combining
            sensors, telemetry, access control, remote monitoring, and a path toward autonomous cleaning workflows.
          </p>
          <p>
            Outside work, endurance sports and mountains are a major part of how I think about discipline, systems, and execution.
          </p>
        </div>

        {/* Photo card */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="relative w-56 h-64">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-500/20 translate-x-3 translate-y-3" />
            <img
              src="https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/d2e2a7bd6_LinkedIn.png"
              alt="Rahul Rachamalla"
              className="relative z-10 w-full h-full object-cover object-top rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}