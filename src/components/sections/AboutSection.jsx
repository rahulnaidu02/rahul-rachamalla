import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="01" title="About Me" />

      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-6 font-inter text-white/65 leading-[1.85]" style={{ fontSize: "1.0625rem" }}>
          <p>
            I'm a technical product builder focused on systems where software, hardware, AI, and real-world operations meet.
          </p>
          <p>
            My background spans conversational AI and Alexa Automotive at Amazon, enterprise and edge networking at HPE Aruba,
            product strategy at Cisco, and RF/network systems at Ericsson. I've worked across voice interfaces, connected vehicles,
            cloud-connected devices, embedded platforms, telemetry, enterprise infrastructure, and 0→1 product launches.
          </p>
          <p>
            I'm currently building{" "}
            <a
              href="https://www.letsgocopa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 font-medium underline underline-offset-4 decoration-violet-400/30 hover:decoration-violet-400 transition-all duration-200"
            >
              Copa Labs
            </a>
            , a smart portable sanitation system combining sensors, telemetry, access control, remote monitoring, and a path toward autonomous cleaning workflows.
          </p>
          <p>
            Outside work, endurance sports, mountain climbing, and MMA are a major part of how I think about discipline, systems, and execution.
          </p>
        </div>

        {/* Photo card */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-72">
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