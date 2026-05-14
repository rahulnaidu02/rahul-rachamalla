import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const CLIMBS = [
  {
    name: "Mont Blanc",
    elevation: "4,808m",
    location: "France / Italy",
    year: "2023",
    notes: "The highest peak in the Alps. Summited via the Goûter Route. Whiteout conditions near the top.",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/9b838dae9_generated_29e50a8a.png",
  },
  {
    name: "Mount Kilimanjaro",
    elevation: "5,895m",
    location: "Tanzania",
    year: "2022",
    notes: "The roof of Africa. Took the Lemosho route over 8 days. The last 1,000m at altitude is no joke.",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1a0cdaf7d_generated_e6be3dfa.png",
  },
  {
    name: "Mount Rainier",
    elevation: "4,392m",
    location: "Washington, USA",
    year: "2021",
    notes: "Technical glacier travel, crevasse crossings, and a 3am summit push. First serious mountaineering expedition.",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1f79e2013_generated_6391aa44.png",
  },
];

export default function MountainsSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="05" title="Mountains" />

      <p className="font-inter text-sm text-white/50 leading-relaxed mb-10 max-w-xl">
        I started climbing as a way to get outside after long weeks at a workbench.
        There's an engineering problem at every altitude — and I love every bit of it.
      </p>

      <div className="space-y-6">
        {CLIMBS.map((climb, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex gap-5 items-start p-5 rounded-xl border border-white/8 hover:border-violet-400/25 bg-white/2 hover:bg-violet-400/4 transition-all duration-300">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-white/8">
              <img src={climb.image} alt={climb.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <span className="font-syne font-bold text-white">{climb.name}</span>
                <span className="font-mono text-xs text-violet-400">{climb.elevation}</span>
              </div>
              <div className="font-mono text-[10px] text-white/30 mb-2 tracking-wider uppercase">
                {climb.location} · {climb.year}
              </div>
              <p className="font-inter text-sm text-white/45 leading-relaxed italic">"{climb.notes}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}