import { motion } from "framer-motion";

const DISCIPLINES = [
  {
    name: "Brazilian Jiu-Jitsu",
    emoji: "🥋",
    belt: "White Belt",
    beltColor: "bg-white text-black",
    description:
      "Started BJJ to build a grappling base. The chess-on-the-ground aspect hooked me immediately — it rewards patience, technical precision, and a willingness to tap and learn.",
    focus: ["Guard passing", "Takedowns", "Positional control"],
  },
  {
    name: "Muay Thai",
    emoji: "🥊",
    belt: "Beginner",
    beltColor: "bg-red-500 text-white",
    description:
      "Striking is a different kind of problem-solving. Muay Thai's eight-limb system forces you to think in ranges — elbows, knees, kicks, punches — and manage distance constantly.",
    focus: ["Teep (push kick)", "Low kicks", "Clinch work"],
  },
  {
    name: "Wrestling",
    emoji: "🤼",
    belt: "Hobbyist",
    beltColor: "bg-yellow-500 text-black",
    description:
      "Wrestling ties everything together. Controlling where the fight happens is half the game. Even basic level wrestling changes how you move and think in every other martial art.",
    focus: ["Double leg", "Sprawl defense", "Cage work"],
  },
];

const STATS = [
  { label: "Months Training", value: "8+" },
  { label: "Disciplines", value: "3" },
  { label: "Mat Hours / Week", value: "~5" },
  { label: "Injuries (so far)", value: "1 😅" },
];

export default function MMATab() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-syne text-lg font-bold text-foreground mb-2">
          Mixed Martial Arts Journey
        </h2>
        <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed max-w-2xl">
          I came to martial arts the same way I came to Ironman — looking for something hard.
          Something that would demand every version of me at once: physical, strategic, and mentally
          disciplined. Eight months in, I'm humbled, hooked, and bruised in the best way.
        </p>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#14161A] border border-border rounded-xl p-4 text-center"
          >
            <div className="font-syne text-2xl font-bold text-primary mb-1">{stat.value}</div>
            <div className="font-inter text-xs text-[#A0A0A0]">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Disciplines */}
      <div className="space-y-6">
        {DISCIPLINES.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#14161A] border border-border flex items-center justify-center text-2xl shrink-0">
              {d.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <span className="font-syne font-bold text-foreground">{d.name}</span>
                <span className={`font-mono text-[9px] tracking-widest px-2 py-0.5 rounded-full ${d.beltColor}`}>
                  {d.belt}
                </span>
              </div>
              <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed mb-3">
                {d.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {d.focus.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border border-border text-[#A0A0A0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Personal note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="bg-[#14161A] border border-border rounded-xl p-5"
      >
        <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed italic">
          "The overlap between endurance sport and martial arts is bigger than I expected.
          Both demand an ego-check. In Ironman, the course doesn't care about your fitness history.
          On the mat, the purple belt doesn't care about your day job.
          That's what I love about both — they're honest."
        </p>
        <div className="mt-3 font-mono text-xs text-primary">— Rahul Rachamalla</div>
      </motion.div>
    </div>
  );
}