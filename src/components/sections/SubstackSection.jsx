import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Future articles will be added here as hyperlinks
const ARTICLES = [];

export default function SubstackSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading num="10" title="Substack" />

      <p className="font-inter text-white/55 leading-[1.85] mb-10" style={{ fontSize: "1.0625rem" }}>
        Writing about physical AI, hardware startups, endurance sports, and the intersection of mind and machine. Articles linked here directly — no extra clicks.
      </p>

      {ARTICLES.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-dashed border-white/10 bg-white/2">
          <div className="w-14 h-14 rounded-full bg-violet-400/10 border border-violet-400/20 flex items-center justify-center mb-5">
            <BookOpen className="w-6 h-6 text-violet-400/60" />
          </div>
          <p className="font-syne font-bold text-white/30 text-lg mb-2">Articles coming soon</p>
          <p className="font-inter text-white/25 text-sm text-center max-w-sm">
            Essays on physical AI, connected hardware, endurance sports, and building things that matter.
          </p>
          <a
            href="https://substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-full border border-violet-400/30 text-violet-400/70 hover:border-violet-400/60 hover:text-violet-400 transition-all duration-200"
          >
            Follow on Substack
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ARTICLES.map((article, i) => (
            <motion.a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group flex flex-col p-6 rounded-2xl border border-white/8 bg-white/2 hover:border-violet-400/30 hover:bg-violet-400/4 transition-all duration-300 cursor-pointer"
            >
              <div className="font-mono text-violet-400/60 text-xs tracking-widest uppercase mb-3">{article.date}</div>
              <h3 className="font-syne font-bold text-white group-hover:text-violet-200 transition-colors text-lg leading-tight mb-3">
                {article.title}
              </h3>
              <p className="font-inter text-white/45 text-sm leading-relaxed flex-1">{article.summary}</p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-violet-400/60 group-hover:text-violet-400 transition-colors">
                Read on Substack <ExternalLink className="w-3 h-3" />
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </motion.div>
  );
}