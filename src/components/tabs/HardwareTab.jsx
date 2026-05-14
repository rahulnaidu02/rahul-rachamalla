import { motion } from "framer-motion";

const HARDWARE_ITEMS = [
  {
    title: "Custom Oscilloscope Probe",
    category: "Test Equipment",
    description: "Designed a high-bandwidth differential probe for my bench — because the commercial ones are overpriced and I wanted to understand the circuit.",
    specs: ["500 MHz BW", "1:100 attenuation", "FR4 PCB"],
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/034300e81_generated_d1ea916b.png",
  },
  {
    title: "Wearable Heart Rate Monitor",
    category: "Wearable Tech",
    description: "Built a custom optical heart rate monitor for training data collection. PPG sensor, 32-bit ARM MCU, 30-day battery life on a 100mAh cell.",
    specs: ["PPG Optical", "STM32L0", "BLE 5.0", "30d battery"],
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/c4efa968a_generated_78eb8c30.png",
  },
  {
    title: "Trail Camera System",
    category: "Field Hardware",
    description: "Weatherproof trail camera with solar charging and LTE uplink. Monitors wildlife and sends daily reports to my phone. Still running 18 months later.",
    specs: ["12MP sensor", "Solar charged", "LTE Cat-M1", "IP67"],
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/2c1d18e6d_generated_155fef02.png",
  },
];

export default function HardwareTab() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-syne text-lg font-bold text-foreground mb-2">Hardware Lab</h2>
        <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed">
          My home bench is where most of my best and worst ideas get tested.
          I design, fabricate, and solder everything here — from single-sided protoboards
          to 6-layer HDI PCBs. Below are a few recent things that made it off the breadboard.
        </p>
      </motion.div>

      <div className="space-y-8">
        {HARDWARE_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex gap-4"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden border border-border shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] text-primary tracking-wider mb-1 uppercase">
                {item.category}
              </div>
              <h3 className="font-syne font-bold text-foreground mb-1">{item.title}</h3>
              <p className="font-inter text-sm text-[#A0A0A0] leading-relaxed mb-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.specs.map((spec) => (
                  <span
                    key={spec}
                    className="font-mono text-[10px] px-2 py-0.5 rounded border border-border text-[#A0A0A0]"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}