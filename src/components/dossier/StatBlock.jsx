import { motion } from "framer-motion";

export default function StatBlock({ label, value, unit = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="font-mono text-3xl md:text-4xl font-semibold text-primary leading-none">
        {value}
        {unit && <span className="text-lg text-muted-foreground ml-1">{unit}</span>}
      </div>
      <div className="font-inter text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {label}
      </div>
    </motion.div>
  );
}