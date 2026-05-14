import { useState, useEffect } from "react";

export default function AltitudeLine() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? window.scrollY / totalHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-6 top-0 bottom-0 z-40 hidden lg:flex flex-col items-center pointer-events-none">
      <div className="relative h-full w-px bg-border/30">
        <div
          className="absolute top-0 left-0 w-full bg-primary/50 transition-all duration-150"
          style={{ height: `${scrollProgress * 100}%` }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50 transition-all duration-150"
          style={{ top: `${scrollProgress * 100}%` }}
        />
      </div>
      <div
        className="absolute left-4 font-mono text-[10px] text-primary/60 transition-all duration-150 whitespace-nowrap"
        style={{ top: `${scrollProgress * 100}%` }}
      >
        {Math.round(scrollProgress * 8848)}m
      </div>
    </div>
  );
}