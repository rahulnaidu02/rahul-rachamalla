import { motion } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";
import SectionHeading from "./SectionHeading";

const REPOS = [
  { name: "iot-env-monitor", desc: "Environmental sensor PCB + firmware + dashboard", stars: 142, forks: 28, lang: "C" },
  { name: "hw-cli-toolkit", desc: "CLI tool for hardware engineers — BOM, Gerber, sourcing", stars: 89, forks: 15, lang: "Rust" },
  { name: "rtos-sensor-fusion", desc: "IMU sensor fusion library for ARM Cortex-M", stars: 63, forks: 11, lang: "C++" },
  { name: "auto-test-rig", desc: "Python framework for automated hardware testing", stars: 47, forks: 9, lang: "Python" },
];

const LANG_COLORS = { C: "#555599", "C++": "#f34b7d", Rust: "#dea584", Python: "#3572A5" };

const WEEKS = 26;
const DAYS = 7;
const grid = Array.from({ length: WEEKS }, () =>
  Array.from({ length: DAYS }, () => Math.floor(Math.random() * 5))
);
const intensities = ["bg-white/5", "bg-violet-900/60", "bg-violet-600/60", "bg-violet-400/70", "bg-violet-300"];

export default function GitHubSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="07" title="GitHub" />

      {/* Contribution heatmap */}
      <div className="mb-10 p-5 rounded-xl border border-white/8 bg-white/2">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-white/30">Contribution Activity</span>
          <a href="https://github.com/rahulrachamalla" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-violet-400 hover:text-white transition-colors">
            <Github className="w-3 h-3" /> View Profile
          </a>
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {grid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((val, di) => (
                <div key={di} className={`w-2.5 h-2.5 rounded-sm ${intensities[val]}`} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Repos */}
      <div className="grid sm:grid-cols-2 gap-3">
        {REPOS.map((repo, i) => (
          <motion.a key={i} href="#"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
            className="group p-4 rounded-xl border border-white/8 bg-white/2 hover:border-violet-400/30 hover:bg-violet-400/5 transition-all duration-300">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-white/30" />
                <span className="font-mono text-sm text-violet-400 group-hover:text-white transition-colors">{repo.name}</span>
              </div>
            </div>
            <p className="font-inter text-xs text-white/40 mb-3 leading-relaxed">{repo.desc}</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 font-mono text-[10px] text-white/30">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: LANG_COLORS[repo.lang] }} />
                {repo.lang}
              </span>
              <span className="flex items-center gap-1 font-mono text-[10px] text-white/30">
                <Star className="w-3 h-3" /> {repo.stars}
              </span>
              <span className="flex items-center gap-1 font-mono text-[10px] text-white/30">
                <GitFork className="w-3 h-3" /> {repo.forks}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}