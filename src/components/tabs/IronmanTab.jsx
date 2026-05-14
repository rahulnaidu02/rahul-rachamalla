import { motion } from "framer-motion";

const RACES = [
  {
    name: "Ironman Hawaii (Kona)",
    year: "2023",
    finish: "12:34:07",
    swim: "1:12:45",
    bike: "6:02:18",
    t1: "0:04:22",
    run: "4:45:22",
    t2: "0:03:10",
    note: "Qualified for Kona through Ironman Arizona. The wind on the Queen K was real.",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/a3e0fb2de_generated_a89d371c.png",
  },
  {
    name: "Ironman Arizona",
    year: "2022",
    finish: "11:48:33",
    swim: "1:05:11",
    bike: "5:44:02",
    t1: "0:03:45",
    run: "4:42:19",
    t2: "0:02:56",
    note: "My A-race. Trained for 10 months. Learned what it means to pace a marathon.",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/47f3a945f_generated_be378480.png",
  },
];

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="font-mono text-xl font-semibold text-foreground">{value}</div>
    <div className="font-inter text-[11px] text-[#A0A0A0] uppercase tracking-wider mt-0.5">{label}</div>
  </div>
);

export default function IronmanTab() {
  return (
    <div className="max-w-2xl space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-syne text-lg font-bold text-foreground mb-2">Ironman</h2>
        <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed">
          140.6 miles. 3.8km swim, 180km bike, 42.2km run. No breaks. The Ironman was on my
          list for years before I finally committed. It turned out to be the best decision I
          ever made — not just physically, but as a lesson in what structured obsession can produce.
        </p>
      </motion.div>

      {RACES.map((race, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="rounded-xl border border-border overflow-hidden"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={race.image}
              alt={race.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/40 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="font-syne text-xl font-bold text-foreground">{race.name}</div>
              <div className="font-mono text-xs text-primary mt-0.5">{race.year}</div>
            </div>
          </div>

          <div className="bg-[#14161A] p-5">
            {/* Split table */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-5 pb-5 border-b border-border">
              <Stat label="🏊 Swim" value={race.swim} />
              <Stat label="T1" value={race.t1} />
              <Stat label="🚴 Bike" value={race.bike} />
              <Stat label="T2" value={race.t2} />
              <Stat label="🏃 Run" value={race.run} />
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-inter text-sm text-[#A0A0A0]">Finish time</span>
              <span className="font-mono text-lg font-semibold text-primary">{race.finish}</span>
            </div>
            <p className="font-inter text-sm text-[#A0A0A0] italic leading-relaxed">"{race.note}"</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}