import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const INTERESTS = [
  "⚡ Embedded Systems", "🏔️ Alpine Climbing", "🏊 Triathlon",
  "🔧 PCB Design", "💻 Open Source", "📝 Writing",
  "🤖 IoT & Sensors", "🥊 Muay Thai", "🥋 BJJ",
];

export default function AboutSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <SectionHeading num="01" title="About Me" />

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-4 font-inter text-white/60 leading-relaxed text-sm">
          <p>
            I'm an engineer who can't sit still. By day I design hardware and write embedded firmware.
            By weekend I'm either on a mountain, crossing an Ironman finish line, or getting choked out on a BJJ mat.
          </p>
          <p>
            I believe the same obsessive attention to detail that makes a circuit board sing is what gets you
            through mile 18 of a marathon — or through a purple belt's guard. The common thread is systems thinking
            under pressure, and that's the thing I love most.
          </p>
          <p>
            Currently at{" "}
            <span className="text-violet-400 font-medium">Your Company</span>, building
            hardware that works in the field, not just on a bench.
          </p>

          <div className="pt-2">
            <p className="text-white/40 text-xs font-mono mb-3 tracking-wider uppercase">Things I'm into</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INTERESTS.map((item) => (
                <div key={item}
                  className="font-inter text-xs text-white/50 bg-white/3 border border-white/8 rounded-lg px-3 py-2 hover:border-violet-400/30 hover:text-white/70 transition-all">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo card */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="relative w-56 h-64">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-500/20 translate-x-3 translate-y-3" />
            <img
              src="https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/d2e2a7bd6_LinkedIn.png"
              alt="Rahul Rachamalla"
              className="relative z-10 w-full h-full object-cover object-top rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}