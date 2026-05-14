import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../dossier/SectionLabel";
import GlassCard from "../dossier/GlassCard";
import StatBlock from "../dossier/StatBlock";
import DossierImage from "../dossier/DossierImage";
import { Mountain, Waves, Bike, Timer } from "lucide-react";

const IRONMAN_STATS = [
  { label: "Total Time", value: "12:34:07", icon: Timer },
  { label: "Swim 3.8km", value: "1:12:45", icon: Waves },
  { label: "Bike 180km", value: "6:02:18", icon: Bike },
  { label: "Run 42.2km", value: "4:45:22", icon: Timer },
];

const CLIMBS = [
  {
    name: "Mount Rainier",
    elevation: "4,392m",
    coordinates: "46.8523°N 121.7603°W",
    year: "2023",
  },
  {
    name: "Mont Blanc",
    elevation: "4,808m",
    coordinates: "45.8326°N 6.8652°E",
    year: "2022",
  },
  {
    name: "Kilimanjaro",
    elevation: "5,895m",
    coordinates: "3.0674°S 37.3556°E",
    year: "2021",
  },
];

export default function EnduranceSection({ ironmanImage, climbImage, swimImage, mountainImage }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="endurance" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax mountain background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={mountainImage}
          alt="Mountain landscape"
          className="w-full h-[130%] object-cover opacity-10"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel number="03" title="Endurance Archive" />

        {/* Ironman Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="font-syne text-3xl md:text-4xl font-extrabold">IRONMAN</div>
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-primary tracking-wider">FINISHER</span>
          </motion.div>

          {/* Ironman hero image */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <DossierImage
              src={ironmanImage}
              alt="Ironman cycling detail"
              className="h-64 md:h-80 rounded-xl"
              coordinates="LAT 21.3069°N // LON 157.8583°W"
            />
            <DossierImage
              src={swimImage}
              alt="Open water swimming"
              className="h-64 md:h-80 rounded-xl"
              coordinates="SWIM START // 06:45:00 UTC"
            />
          </div>

          {/* Ironman split times */}
          <div className="glass-card rounded-xl p-6 md:p-8">
            <div className="font-mono text-xs text-primary/70 tracking-[0.3em] mb-6">
              RACE_LOG // SPLIT_TIMES
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {IRONMAN_STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="font-mono text-2xl md:text-3xl font-semibold text-foreground">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-1 uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mountaineering Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Mountain className="w-6 h-6 text-primary" />
            <div className="font-syne text-3xl md:text-4xl font-extrabold">SUMMITS</div>
            <div className="h-px flex-1 bg-border" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Climb image */}
            <div className="lg:col-span-5">
              <DossierImage
                src={climbImage}
                alt="Climbing grip detail"
                className="h-full min-h-[320px] rounded-xl"
                coordinates="ELEVATION // ASCENDING"
              />
            </div>

            {/* Climb log */}
            <div className="lg:col-span-7 space-y-4">
              {CLIMBS.map((climb, i) => (
                <GlassCard key={i} delay={i * 0.15}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-syne text-lg font-bold">{climb.name}</h4>
                      <div className="font-mono text-xs text-muted-foreground mt-1">
                        {climb.coordinates}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xl font-semibold text-primary">{climb.elevation}</div>
                      <div className="font-mono text-xs text-muted-foreground">{climb.year}</div>
                    </div>
                  </div>
                </GlassCard>
              ))}

              {/* Summary stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <StatBlock label="Summits" value="7" delay={0.1} />
                <StatBlock label="Max Altitude" value="5,895" unit="m" delay={0.2} />
                <StatBlock label="Countries" value="5" delay={0.3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}