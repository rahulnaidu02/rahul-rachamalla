import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const RACES = [
  { name: "Half Moon Bay Sprint", year: "2022", image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2e790bba7_image.png" },
  { name: "Ironman 70.3 Maryland", year: "2022", image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1b63003b5_image.png" },
  { name: "Ironman Maryland", year: "2022", image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1b63003b5_image.png" },
  { name: "Ironman 70.3 Salem Oregon", year: "2023", image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1b63003b5_image.png" },
  { name: "Ironman 70.3 Palm Springs", year: "2024", image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1b63003b5_image.png" },
  { name: "Ironman 70.3 Oceanside", year: "2025", image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1b63003b5_image.png" },
];

export default function IronmanSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="04" title="Ironman" />

      <p className="font-inter text-sm text-white/50 leading-relaxed mb-10 max-w-xl">
        Triathlon found me when I needed a project bigger than any circuit board.
        The math of pacing, nutrition, and gear optimization scratched the engineering itch perfectly.
      </p>

      <div className="space-y-6">
        {RACES.map((race, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex gap-5 items-start p-5 rounded-xl border border-white/8 hover:border-violet-400/25 bg-white/2 hover:bg-violet-400/4 transition-all duration-300">
            <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 border border-white/8">
              <img src={race.image} alt={race.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-syne font-bold text-white text-xl">{race.name}</div>
              <div className="font-mono text-sm text-white/40 mt-1">{race.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}