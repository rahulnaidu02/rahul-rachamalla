import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const CLIMBS = [
  {
    name: "Mount Shasta",
    elevation: "14,179 ft",
    year: "2023",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2e790bba7_image.png",
  },
  {
    name: "Mount Baker",
    elevation: "10,781 ft",
    location: "Snowiest place on earth",
    year: "2023",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2e790bba7_image.png",
  },
  {
    name: "Mount Rainier",
    elevation: "14,411 ft",
    year: "2024",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2e790bba7_image.png",
  },
  {
    name: "Pico de Orizaba",
    elevation: "18,491 ft",
    year: "2024",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2e790bba7_image.png",
  },
  {
    name: "Iztaccíhuatl",
    elevation: "17,159 ft",
    location: "Eastern Mexico",
    year: "2024",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2e790bba7_image.png",
  },
  {
    name: "Mount Whitney",
    elevation: "14,505 ft",
    year: "2024",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2e790bba7_image.png",
  },
];

export default function MountainsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="05" title="Mountains" />

      <div className="space-y-6">
        {CLIMBS.map((climb, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex gap-5 items-start p-5 rounded-xl border border-white/8 hover:border-violet-400/25 bg-white/2 hover:bg-violet-400/4 transition-all duration-300">
            <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 border border-white/8">
              <img src={climb.image} alt={climb.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <span className="font-syne font-bold text-white text-xl">{climb.name}</span>
                <span className="font-mono text-sm text-violet-400">{climb.elevation}</span>
              </div>
              <div className="font-mono text-xs text-white/40">
                {climb.location ? `${climb.location} · ` : ''}{climb.year}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}