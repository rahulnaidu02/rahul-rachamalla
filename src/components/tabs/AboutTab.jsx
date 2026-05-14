import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function AboutTab() {
  return (
    <div className="space-y-8">
      <motion.div {...fadeUp(0)}>
        <h2 className="font-syne text-lg font-bold text-foreground mb-3">
          👋 Hey, I'm [Your Name]
        </h2>
        <p className="font-inter text-[#A0A0A0] leading-relaxed text-sm">
          I'm an engineer who can't sit still. By day I design hardware and write
          embedded firmware. By weekend I'm either on a mountain or crossing an
          Ironman finish line. I believe the same obsessive attention to detail
          that makes a circuit board sing is what gets you through mile 18 of a marathon.
        </p>
      </motion.div>

      <motion.div {...fadeUp(0.1)}>
        <h3 className="font-syne font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
          What I'm interested in
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            "⚡ Embedded Systems",
            "🏔️ Alpine Climbing",
            "🏊 Triathlon",
            "🔧 PCB Design",
            "💻 Open Source",
            "📝 Writing",
            "🤖 IoT & Sensors",
            "🚴 Cycling",
            "📡 Wireless Protocols",
          ].map((item) => (
            <div
              key={item}
              className="font-inter text-sm text-[#A0A0A0] bg-[#14161A] border border-border rounded-lg px-3 py-2"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeUp(0.2)}>
        <h3 className="font-syne font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
          The short version
        </h3>
        <ul className="space-y-2 font-inter text-sm text-[#A0A0A0]">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">→</span>
            <span>Based in [Your City]. Originally from [Hometown].</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">→</span>
            <span>Ironman finisher. Multiple summits above 4,000m.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">→</span>
            <span>Obsessed with building things that work in extreme conditions — hardware or otherwise.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">→</span>
            <span>I write about engineering, endurance, and what they have in common on Substack.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">→</span>
            <span>Always happy to talk gear, PCBs, training plans, or side projects.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}