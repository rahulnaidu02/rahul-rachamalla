import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    title: "Custom Flight Controller",
    category: "Embedded / Aerospace",
    description: "6-layer PCB flight controller for fixed-wing UAVs. IMU fusion, GPS, telemetry over 900MHz. Survived 40 test flights.",
    specs: ["STM32H7", "6-layer PCB", "900MHz", "FreeRTOS"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop",
  },
  {
    title: "Wearable Biometric Sensor",
    category: "Wearable / Health",
    description: "Wrist-worn device logging HR, SpO2, skin temp and activity. Bluetooth LE streaming to custom iOS app. Worn through 2 Ironman races.",
    specs: ["nRF52", "BLE 5.0", "MAX30102", "KiCad"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
  },
];

export default function HardwareSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="06" title="Hardware Lab" />

      <p className="font-inter text-sm text-white/50 leading-relaxed mb-10 max-w-xl">
        Some things I've built that live in the physical world — not just on GitHub.
      </p>

      <div className="space-y-6">
        {ITEMS.map((item, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl border border-white/8 overflow-hidden bg-white/2 hover:border-violet-400/25 transition-all duration-300">
            <div className="relative h-40 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity group-hover:scale-105 duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/30 to-transparent" />
              <span className="absolute top-4 right-4 font-mono text-[10px] text-white/40 bg-black/40 backdrop-blur px-2 py-1 rounded tracking-wider uppercase">
                {item.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-syne font-bold text-white mb-2">{item.title}</h3>
              <p className="font-inter text-sm text-white/45 leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {item.specs.map((s) => (
                  <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-400/8 border border-violet-400/15 text-violet-300/60">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}