import { motion } from "framer-motion";
import { Cpu, Radio, Layers, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const CAROUSEL_IMAGES = [
  "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/71b7dfea5_COPAGarage.png",
  "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/09e537e5c_CutawayFrontLowAngle-TransparentBG.png",
  "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/24b878a10_DSCF8549.jpg",
];

const FEATURE_CARDS = [
  {
    icon: Cpu,
    title: "Physical AI Systems",
    description:
      "Exploring automation workflows using sensors, telemetry, edge intelligence, and autonomous decision systems.",
  },
  {
    icon: Radio,
    title: "Connected Infrastructure",
    description:
      "Building connected hardware systems with remote monitoring, fleet visibility, and operational telemetry.",
  },
  {
    icon: Layers,
    title: "Embedded Intelligence",
    description:
      "Working with ESP32 systems, sensor stacks, telemetry pipelines, and hardware-software integration.",
  },
  {
    icon: Zap,
    title: "Operational Automation",
    description:
      "Focused on practical automation systems that improve field operations, servicing workflows, and infrastructure efficiency.",
  },
];

const CURRENT_WORK = [
  "Embedded telemetry systems",
  "Sensor fusion",
  "Edge-connected hardware",
  "Fleet visibility platforms",
  "Real-world automation workflows",
  "Autonomous servicing concepts",
  "AI + hardware interfaces",
  "Physical infrastructure monitoring",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden border border-white/8 flex items-center justify-center bg-white/2"
      style={{ aspectRatio: "4/3" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={CAROUSEL_IMAGES[currentIndex]}
        alt={`COPA Prototype ${currentIndex + 1}`}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}

export default function FounderSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading num="03" title="Founder & Builder" />

      {/* Top carousel */}
      <div className="mb-14">
        <Carousel />
      </div>

      {/* Split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-14">
        {/* Left: empty */}
        <div />

        {/* Right: narrative */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex flex-col justify-center"
        >
          <p className="font-mono text-violet-400/80 tracking-widest uppercase mb-4" style={{ fontSize: "0.85rem" }}>
            Physical AI • Sensors • Telemetry • Real-World Automation
          </p>

          <p className="font-inter text-white/70 leading-[1.85] mb-6" style={{ fontSize: "1.125rem" }}>
            Building connected hardware-software systems focused on physical AI, embedded intelligence,
            telemetry, automation, and real-world operational infrastructure.
          </p>

          <p className="font-inter text-white/55 leading-[1.85] mb-8" style={{ fontSize: "1.0625rem" }}>
            Founded <span className="text-violet-300 font-medium">Copa Labs</span> to explore how sensors,
            edge intelligence, connected devices, and autonomous workflows can modernize neglected
            physical infrastructure systems.
          </p>

          <div className="mb-2">
            <p className="font-mono text-white/30 tracking-widest uppercase mb-4" style={{ fontSize: "0.78rem" }}>
              Current Work
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
              {CURRENT_WORK.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-violet-400/60 flex-shrink-0" />
                  <span className="font-inter text-white/55 leading-snug" style={{ fontSize: "1rem" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-inter text-white/40 leading-[1.8] mt-8 italic" style={{ fontSize: "1rem" }}>
            The long-term vision is building intelligent physical systems that combine AI, sensors,
            robotics, and operational infrastructure into scalable real-world products.
          </p>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {FEATURE_CARDS.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group flex flex-col gap-4 p-7 rounded-2xl border border-white/8 bg-white/2 hover:border-violet-400/30 hover:bg-violet-400/4 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-400/10 border border-violet-400/20 flex items-center justify-center group-hover:bg-violet-400/18 transition-colors">
              <Icon className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <h4 className="font-syne font-bold text-white mb-2 leading-tight" style={{ fontSize: "1.1rem" }}>
                {title}
              </h4>
              <p className="font-inter text-white/50 leading-[1.75]" style={{ fontSize: "0.9875rem" }}>
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom carousel — full width */}
      <div className="mb-8">
        <Carousel />
      </div>
    </motion.div>
  );
}