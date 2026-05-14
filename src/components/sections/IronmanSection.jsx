import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const RACES = [
  { name: "Half Moon Bay Sprint", year: "2021", time: "Completed" },
  { name: "Ironman 70.3 Maryland", year: "2022", time: "Completed" },
  { name: "Ironman Maryland", year: "2022", time: "Completed" },
  { name: "Ironman 70.3 Salem Oregon", year: "2023", time: "Completed" },
  { name: "Ironman 70.3 Palm Springs", year: "2024", time: "Completed" },
  { name: "Ironman 70.3 Oceanside", year: "2025", time: "Completed" },
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

      <div className="space-y-4">
        {RACES.map((race, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4 p-5 rounded-xl border border-white/8 bg-white/2 hover:border-violet-400/25 hover:bg-violet-400/4 transition-all duration-300">
            <div className="flex-1">
              <div className="font-syne font-bold text-white text-lg">{race.name}</div>
              <div className="font-mono text-sm text-white/40 mt-1">{race.year} · {race.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}