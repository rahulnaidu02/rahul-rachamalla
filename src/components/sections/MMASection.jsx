import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const BJJ_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/3fc022c6a_image.png";
const KICKBOXING_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/7cb30d3bf_image.png";
const RUSHMORE_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/a77b26022_image.png";

const UFC_194_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/bcd71b1d8_image.png";
const UFC_287_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/48aa35a44_image.png";
const UFC_300_IMAGE = "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/e8328e4ec_image.png";

const DISCIPLINES = [
  {
    name: "Brazilian Jiu-Jitsu",
    badge: "White Belt",
    badgeColor: "bg-white/10 text-white border-white/20",
    description: "The chess match on the mat. BJJ rewards patience, precision, and humility. You learn more from tapping than winning. Started this journey and immediately fell in love with the problem-solving nature of grappling.",
    image: BJJ_IMAGE,
    imageAlt: "BJJ class at One World Academy",
  },
  {
    name: "Kickboxing",
    badge: "Beginner",
    badgeColor: "bg-red-500/10 text-red-400 border-red-400/20",
    description: "Striking is a completely different kind of intelligence. Distance management, timing, reading tells. Eight limbs, constant decision-making. The head gear, gloves, and shin guards are the uniform of this pursuit.",
    image: KICKBOXING_IMAGE,
    imageAlt: "Kickboxing gear",
  },
];

const RUSHMORE = [
  {
    name: "Jon Jones",
    reason: "The complete expression of mixed martial arts. The greatest to ever do it. Unmatched reach, timing, creativity, and IQ inside the cage.",
  },
  {
    name: "Anderson Silva",
    reason: "The streak. 16 consecutive wins, 10 title defenses. One of the most dominant and beautiful runs in MMA history. Pure artistry at middleweight.",
  },
  {
    name: "Demetrious Johnson",
    reason: "Pound-for-pound royalty. At flyweight he could express flying armbars and combinations that felt impossible. Technical perfection in a small package.",
  },
  {
    name: "Georges St-Pierre",
    reason: "The blueprint for mixing grappling and striking. GSP showed the world what elite level changes, wrestling, and boxing could look like when combined.",
  },
  {
    name: "Conor McGregor",
    reason: "Took the sport to a global status. Created coaching ecosystems, gyms, and opportunities across the world. The biggest star combat sports has ever seen.",
  },
];

const BEST_FINISHES = [
  {
    fight: "Conor McGregor vs. Jose Aldo",
    event: "UFC 194",
    detail: "13-second knockout. The fastest finish in UFC title fight history.",
    image: UFC_194_IMAGE,
  },
  {
    fight: "Israel Adesanya vs. Alex Pereira 2",
    event: "UFC 287",
    detail: "Adesanya's comeback KO. One of the most dramatic reversals in the sport.",
    image: UFC_287_IMAGE,
  },
  {
    fight: "Max Holloway vs. Justin Gaethje",
    event: "UFC 300",
    detail: "Last-second KO on the final bell. An all-time moment in combat sports.",
    image: UFC_300_IMAGE,
  },
];

export default function MMASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading num="09" title="Mixed Martial Arts" />

      <p className="font-inter text-white/60 leading-[1.85] mb-12" style={{ fontSize: "1.125rem" }}>
        I think combat sports is the best form to train your mind. I came to martial arts and I think this is the sport I am in love with. There is nothing that teaches you humility, discipline, and presence faster than being on the mat.
      </p>

      {/* Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {DISCIPLINES.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-white/8 bg-white/2 hover:border-violet-400/30 hover:bg-violet-400/4 transition-all duration-300 overflow-hidden"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={d.image}
                alt={d.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-syne font-bold text-white text-2xl">{d.name}</span>
                <span className={`font-mono text-xs tracking-widest px-3 py-1 rounded-full border ${d.badgeColor}`}>
                  {d.badge}
                </span>
              </div>
              <p className="font-inter text-white/55 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
                {d.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mount Rushmore */}
      <div className="mb-16">
        <h3 className="font-syne font-bold text-white text-2xl mb-2">MMA Mount Rushmore (in my opinion)</h3>
        <p className="font-inter text-white/45 mb-8" style={{ fontSize: "1rem" }}>The five who defined the sport for me.</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
          <img
            src={RUSHMORE_IMAGE}
            alt="MMA Mount Rushmore: Jon Jones, Anderson Silva, Demetrious Johnson, GSP, Conor McGregor"
            className="w-full object-cover"
            style={{ maxHeight: "420px", objectPosition: "center top" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RUSHMORE.map((fighter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-white/8 bg-white/2 hover:border-violet-400/25 hover:bg-violet-400/4 transition-all duration-300"
            >
              <div className="font-syne font-bold text-violet-300 text-xl mb-3">{fighter.name}</div>
              <p className="font-inter text-white/55 leading-relaxed" style={{ fontSize: "1rem" }}>
                {fighter.reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Best Finishes */}
      <div>
        <h3 className="font-syne font-bold text-white text-2xl mb-2">Greatest Finishes Ever (in my opinion)</h3>
        <p className="font-inter text-white/45 mb-8" style={{ fontSize: "1rem" }}>Moments that redefined what was possible.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BEST_FINISHES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/8 bg-white/2 hover:border-violet-400/25 hover:bg-violet-400/5 transition-all duration-300 overflow-hidden"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={f.image}
                  alt={f.fight}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-400/15 border border-violet-400/30 flex items-center justify-center font-syne font-bold text-violet-400 text-base">
                    {i + 1}
                  </span>
                  <span className="font-mono text-violet-400/80 text-sm tracking-wider">{f.event}</span>
                </div>
                <div className="font-syne font-bold text-white text-lg leading-snug mb-3">{f.fight}</div>
                <p className="font-inter text-white/55 leading-relaxed" style={{ fontSize: "0.9375rem" }}>{f.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}