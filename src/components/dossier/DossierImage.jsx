import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function DossierImage({ src, alt, className = "", coordinates = null }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden group ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          inView ? "glitch-enter" : "opacity-0"
        }`}
        loading="lazy"
      />
      {coordinates && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
          <div className="font-mono text-[10px] text-primary/70 tracking-wider">
            {coordinates}
          </div>
        </div>
      )}
      <div className="absolute inset-0 border border-border/30 pointer-events-none" />
    </div>
  );
}