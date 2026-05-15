import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const RACES = [
  { name: "Half Moon Bay Sprint", year: "2022" },
  { name: "Ironman 70.3 Maryland", year: "2022" },
  { name: "Ironman Maryland", year: "2022" },
  { name: "Ironman 70.3 Salem Oregon", year: "2023" },
  { name: "Ironman 70.3 Palm Springs", year: "2024" },
  { name: "Ironman 70.3 Oceanside", year: "2025" },
];

const HERO_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/b42e62405_image.png";

export default function IronmanSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="04" title="Ironman" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-white/8 bg-white/2 flex items-center justify-center">
          <img src={HERO_IMAGE} alt="Ironman" className="w-full h-full object-cover object-center" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 space-y-3">
          {RACES.map((race, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 items-center p-4 rounded-lg border border-white/8 hover:border-violet-400/25 bg-white/2 hover:bg-violet-400/4 transition-all duration-300">
              <div className="flex-1">
                <div className="font-syne font-bold text-white text-lg">{race.name}</div>
                <div className="font-mono text-sm text-white/40">{race.year}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}