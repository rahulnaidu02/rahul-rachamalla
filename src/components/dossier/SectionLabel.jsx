import { motion } from "framer-motion";

export default function SectionLabel({ number, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="flex items-end gap-6 mb-12 md:mb-16"
    >
      <span className="section-number select-none">{number}</span>
      <div className="pb-2 md:pb-4">
        <div className="h-px w-12 bg-primary mb-3" />
        <h2 className="font-syne text-sm md:text-base font-bold uppercase tracking-[0.3em] text-muted-foreground">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}