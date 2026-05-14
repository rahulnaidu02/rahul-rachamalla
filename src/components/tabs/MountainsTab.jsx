import { motion } from "framer-motion";

const CLIMBS = [
  {
    name: "Mont Blanc",
    elevation: "4,808m / 15,774ft",
    location: "France / Italy",
    year: "2023",
    coordinates: "45.8326°N, 6.8652°E",
    notes: "The highest peak in the Alps. Summited via the Goûter Route. Whiteout conditions near the top.",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/9b838dae9_generated_29e50a8a.png",
  },
  {
    name: "Mount Kilimanjaro",
    elevation: "5,895m / 19,341ft",
    location: "Tanzania",
    year: "2022",
    coordinates: "3.0674°S, 37.3556°E",
    notes: "The roof of Africa. Took the Lemosho route over 8 days. The last 1,000m at altitude is no joke.",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1a0cdaf7d_generated_e6be3dfa.png",
  },
  {
    name: "Mount Rainier",
    elevation: "4,392m / 14,411ft",
    location: "Washington, USA",
    year: "2021",
    coordinates: "46.8523°N, 121.7603°W",
    notes: "Technical glacier travel, crevasse crossings, and a 3am summit push. First serious mountaineering expedition.",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/1f79e2013_generated_6391aa44.png",
  },
];

export default function MountainsTab() {
  return (
    <div className="max-w-2xl space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-syne text-lg font-bold text-foreground mb-2">Mountains</h2>
        <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed">
          I started climbing as a way to get outside after long weeks of sitting at a workbench.
          It became something much more than that. There's an engineering problem at every altitude —
          managing oxygen, gear redundancy, route-finding — and I love every bit of it.
        </p>
      </motion.div>

      <div className="space-y-8">
        {CLIMBS.map((climb, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-xl border border-border overflow-hidden"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={climb.image}
                alt={climb.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="font-syne text-2xl font-bold text-foreground">{climb.name}</div>
                <div className="font-mono text-xs text-primary mt-1">{climb.elevation}</div>
              </div>
              <div className="absolute top-4 right-4 bg-[#0A0B0D]/70 backdrop-blur-sm rounded px-2 py-1">
                <span className="font-mono text-xs text-[#A0A0A0]">{climb.year}</span>
              </div>
            </div>

            <div className="bg-[#14161A] p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-inter text-sm text-[#A0A0A0]">📍 {climb.location}</span>
                <span className="font-mono text-[10px] text-[#A0A0A0]">{climb.coordinates}</span>
              </div>
              <p className="font-inter text-sm text-[#A0A0A0] italic leading-relaxed">
                "{climb.notes}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}