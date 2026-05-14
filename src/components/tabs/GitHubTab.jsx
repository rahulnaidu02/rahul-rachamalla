import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";

const REPOS = [
  {
    name: "iot-sensor-platform",
    description: "Multi-sensor environmental monitoring PCB design files, firmware, and dashboard.",
    stars: 84,
    forks: 12,
    language: "C",
    langColor: "#555555",
    href: "https://github.com",
  },
  {
    name: "bom-toolkit",
    description: "CLI tool for hardware engineers. Automates BOM generation and component sourcing.",
    stars: 62,
    forks: 9,
    language: "Rust",
    langColor: "#dea584",
    href: "https://github.com",
  },
  {
    name: "smart-home-hub",
    description: "Raspberry Pi home automation with React dashboard and MQTT backend.",
    stars: 41,
    forks: 7,
    language: "Python",
    langColor: "#3572A5",
    href: "https://github.com",
  },
  {
    name: "pcb-templates",
    description: "KiCad template library for common footprints, symbols, and project structures.",
    stars: 29,
    forks: 18,
    language: "KiCad",
    langColor: "#00F5FF",
    href: "https://github.com",
  },
];

const STATS = [
  { label: "Repositories", value: "42" },
  { label: "Stars", value: "216" },
  { label: "Contributions (2024)", value: "847" },
  { label: "Pull Requests", value: "143" },
];

export default function GitHubTab() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-syne text-lg font-bold text-foreground">GitHub</h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#A0A0A0] hover:text-primary text-sm font-inter transition-colors"
          >
            <Github className="w-4 h-4" />
            @yourusername
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#14161A] border border-border rounded-lg p-3 text-center"
            >
              <div className="font-mono text-xl font-semibold text-primary">{stat.value}</div>
              <div className="font-inter text-[11px] text-[#A0A0A0] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution heatmap */}
        <div className="bg-[#14161A] border border-border rounded-lg p-4 mb-8">
          <div className="font-inter text-xs text-[#A0A0A0] mb-3">Contribution activity</div>
          <div className="grid grid-cols-[repeat(52,_1fr)] gap-0.5">
            {Array.from({ length: 364 }, (_, i) => {
              const r = Math.random();
              let bg = "bg-border";
              if (r > 0.85) bg = "bg-primary";
              else if (r > 0.65) bg = "bg-primary/60";
              else if (r > 0.45) bg = "bg-primary/30";
              else if (r > 0.3) bg = "bg-primary/15";
              return <div key={i} className={`aspect-square rounded-[1px] ${bg}`} />;
            })}
          </div>
          <div className="flex items-center justify-end gap-1.5 mt-2">
            <span className="font-inter text-[10px] text-[#A0A0A0]">Less</span>
            {[15, 30, 60, 100].map((op) => (
              <div
                key={op}
                className="w-2.5 h-2.5 rounded-[1px] bg-primary"
                style={{ opacity: op / 100 }}
              />
            ))}
            <span className="font-inter text-[10px] text-[#A0A0A0]">More</span>
          </div>
        </div>

        {/* Repos */}
        <h3 className="font-syne font-bold text-foreground mb-4">Pinned repositories</h3>
        <div className="space-y-4">
          {REPOS.map((repo, i) => (
            <motion.a
              key={i}
              href={repo.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start justify-between bg-[#14161A] border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-sm text-primary group-hover:underline">
                    {repo.name}
                  </span>
                </div>
                <p className="font-inter text-xs text-[#A0A0A0] leading-relaxed mb-3">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span className="font-inter text-xs text-[#A0A0A0]">{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#A0A0A0]" />
                    <span className="font-mono text-xs text-[#A0A0A0]">{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-[#A0A0A0]" />
                    <span className="font-mono text-xs text-[#A0A0A0]">{repo.forks}</span>
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#A0A0A0] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-3 mt-0.5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}