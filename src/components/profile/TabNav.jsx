import { motion } from "framer-motion";

const TABS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "ironman", label: "Ironman" },
  { id: "mountains", label: "Mountains" },
  { id: "hardware", label: "Hardware" },
  { id: "github", label: "GitHub" },
  { id: "mma", label: "MMA" },
  { id: "contact", label: "Contact" },
];

export default function TabNav({ activeTab, onTabChange }) {
  return (
    <div className="relative border-b border-border mb-10 overflow-x-auto">
      <div className="flex gap-0 min-w-max">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-4 py-3 font-inter text-sm transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "text-primary"
                : "text-[#A0A0A0] hover:text-foreground"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}