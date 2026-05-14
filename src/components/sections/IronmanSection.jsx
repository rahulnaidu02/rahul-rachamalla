import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const RACES = [
  {
    name: "Ironman Tallinn",
    year: "2023",
    time: "11:24:07",
    swim: "1:08",
    bike: "5:47",
    run: "4:12",
    notes: "First full Ironman. The last 10k of the marathon was the hardest thing I've ever done. I cried at the finish line.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop",
  },
  {
    name: "Ironman 70.3 Gdynia",
    year: "2022",
    time: "5:42:31",
    swim: "0:34",
    bike: "2:51",
    run: "2:08",
    notes: "Half distance used as a training race. Cold Baltic sea made the swim brutal. Negative split on the run — proudest achievement.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
  },
];

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="font-syne font-bold text-white text-lg">{value}</div>
    <div className="font-mono text-[10px] text-white/30 uppercase tracking-wider">{label}</div>
  </div>
);

export default function IronmanSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="04" title="Ironman" />

      <p className="font-inter text-sm text-white/50 leading-relaxed mb-10 max-w-xl">
        Triathlon found me when I needed a project bigger than any circuit board.
        The math of pacing, nutrition, and gear optimization scratched the engineering itch perfectly.
      </p>

      <div className="space-y-8">
        {RACES.map((race, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-white/8 overflow-hidden bg-white/2">
            <div className="relative h-44 overflow-hidden">
              <img src={race.image} alt={race.name} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <div className="font-syne text-2xl font-bold text-white">{race.name}</div>
                <div className="font-mono text-xs text-violet-400 mt-0.5">{race.year} · Finish: {race.time}</div>
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-4 mb-5 pb-5 border-b border-white/5">
                <Stat label="Swim" value={race.swim} />
                <Stat label="Bike" value={race.bike} />
                <Stat label="Run" value={race.run} />
              </div>
              <p className="font-inter text-sm text-white/40 italic">"{race.notes}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}