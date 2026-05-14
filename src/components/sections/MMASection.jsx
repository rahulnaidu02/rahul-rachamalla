import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const DISCIPLINES = [
  {
    emoji: "🥋",
    name: "Brazilian Jiu-Jitsu",
    badge: "White Belt",
    badgeColor: "bg-white/10 text-white border-white/20",
    description: "Started BJJ to build a grappling base. The chess-on-the-mat aspect hooked me immediately. Rewards patience, precision, and a willingness to tap and learn.",
    tags: ["Guard passing", "Takedowns", "Positional control"],
  },
  {
    emoji: "🥊",
    name: "Muay Thai",
    badge: "Beginner",
    badgeColor: "bg-red-500/10 text-red-400 border-red-400/20",
    description: "Striking is a different kind of problem-solving. Eight limbs, constant distance management. My footwork is still embarrassing — but improving.",
    tags: ["Teep", "Low kicks", "Clinch work"],
  },
  {
    emoji: "🤼",
    name: "Wrestling",
    badge: "Hobbyist",
    badgeColor: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    description: "Controlling where the fight happens is half the battle. Even basic wrestling completely changes how you move in every other martial art.",
    tags: ["Double leg", "Sprawl defense", "Cage work"],
  },
];

const STATS = [
  { label: "Months Training", value: "8+" },
  { label: "Disciplines", value: "3" },
  { label: "Mat Hours / Week", value: "~5" },
  { label: "Injuries", value: "1 😅" },
];

export default function MMASection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="08" title="Mixed Martial Arts" />

      <p className="font-inter text-sm text-white/50 leading-relaxed mb-10 max-w-xl">
        I came to martial arts the same way I came to Ironman — looking for something genuinely hard.
        Something that demands every version of you at once. Eight months in: humbled, hooked, and bruised.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {STATS.map((s) => (
          <div key={s.label} className="text-center p-4 rounded-xl border border-white/8 bg-white/2">
            <div className="font-syne font-bold text-2xl text-violet-400 mb-1">{s.value}</div>
            <div className="font-mono text-[10px] text-white/30 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Disciplines */}
      <div className="space-y-5">
        {DISCIPLINES.map((d, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex gap-4 p-5 rounded-xl border border-white/8 bg-white/2 hover:border-violet-400/25 hover:bg-violet-400/4 transition-all duration-300">
            <div className="text-3xl shrink-0">{d.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="font-syne font-bold text-white">{d.name}</span>
                <span className={`font-mono text-[9px] tracking-widest px-2 py-0.5 rounded-full border ${d.badgeColor}`}>
                  {d.badge}
                </span>
              </div>
              <p className="font-inter text-sm text-white/45 leading-relaxed mb-3">{d.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {d.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-400/8 border border-violet-400/15 text-violet-300/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-8 p-5 rounded-xl border-l-2 border-violet-400/50 bg-violet-400/5">
        <p className="font-inter text-sm text-white/40 italic leading-relaxed">
          "The overlap between endurance sport and martial arts is bigger than I expected.
          Both demand an ego-check. The course doesn't care about your fitness history.
          The purple belt doesn't care about your day job. That's what I love about both — they're honest."
        </p>
        <div className="mt-3 font-mono text-xs text-violet-400">— Rahul Rachamalla</div>
      </div>
    </motion.div>
  );
}