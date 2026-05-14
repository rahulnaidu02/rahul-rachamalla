import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const CLIMBS = [
  { name: "Mount Shasta", elevation: "14,179 ft", year: "2023" },
  { name: "Mount Baker", elevation: "10,781 ft", year: "2023-2024" },
  { name: "Mount Rainier", elevation: "14,411 ft", year: "2024" },
  { name: "Pico de Orizaba", elevation: "18,491 ft", year: "2024" },
  { name: "Iztaccíhuatl", elevation: "17,159 ft", year: "2025" },
  { name: "Mount Whitney", elevation: "14,505 ft", year: "2026" },
];

const HERO_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/a7903d95f_image.png";

export default function MountainsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="05" title="Mountains" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/8">
          <img src={HERO_IMAGE} alt="Mountains" className="w-full h-auto object-cover" style={{ maxHeight: "500px" }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3">
          {CLIMBS.map((climb, i) => (
            <div key={i} className="p-4 rounded-lg border border-white/8 bg-white/2 hover:border-violet-400/25 hover:bg-violet-400/4 transition-all">
              <div className="font-syne font-bold text-white">{climb.name}</div>
              <div className="font-mono text-xs text-violet-400 mt-1">{climb.elevation}</div>
              <div className="font-mono text-xs text-white/40 mt-0.5">{climb.year}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}