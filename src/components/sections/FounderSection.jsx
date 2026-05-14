import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const CAROUSEL_IMAGES = [
  "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/0d7c94c75_DSCF8553.jpg",
  "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/68cb0fc5f_COPAGarage.png",
  "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/93ac801ab_CutawayFrontLowAngle-TransparentBG.png",
  "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/8ef4d3c4b_PCB.png",
];

function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="w-full rounded-2xl overflow-hidden border border-white/8 relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ height: "400px" }}
    >
      {/* Image stack */}
      {CAROUSEL_IMAGES.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`Prototype and hardware ${idx + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ))}

      {/* Caption overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <p className="font-inter text-white/80 text-sm leading-relaxed">
          Prototype builds, sensors, PCB work, and physical AI hardware experiments.
        </p>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {CAROUSEL_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
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
      <SectionHeading num="03" title="AI Founder & Builder" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-mono text-violet-400/80 tracking-widest uppercase mb-8"
        style={{ fontSize: "0.85rem" }}
      >
        Real-world AI products • Physical AI • Sensors • Telemetry • Embedded Systems
      </motion.p>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 mb-12">
        {/* Media carousel */}
        <MediaCarousel />

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex flex-col justify-center gap-6"
        >
          <p className="font-inter text-white/70 leading-[1.85]" style={{ fontSize: "1.125rem" }}>
            Building real-world AI products across physical infrastructure, sensors, telemetry, embedded systems, and operational automation.
          </p>

          <p className="font-inter text-white/60 leading-[1.85]" style={{ fontSize: "1.0625rem" }}>
            My work at <span className="text-violet-300 font-medium">Copa Labs</span> focuses on taking neglected physical systems and making them intelligent through connected hardware, sensor fusion, fleet visibility, edge intelligence, and practical automation workflows.
          </p>

          <div className="mt-2">
            <p className="font-mono text-white/30 tracking-widest uppercase mb-4" style={{ fontSize: "0.78rem" }}>
              Focus Areas
            </p>
            <ul className="space-y-2">
              {["Physical AI", "Sensors & Telemetry", "Circuit / PCB work", "Sensor fusion", "Field automation", "Embedded systems"].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1 w-1 h-1 rounded-full bg-violet-400 flex-shrink-0 mt-[0.6rem]" />
                  <span className="font-inter text-white/55 leading-snug" style={{ fontSize: "1rem" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}