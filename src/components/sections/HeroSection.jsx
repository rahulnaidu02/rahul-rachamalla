import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection({ heroImage, hardwareImage }) {
  return (
    <section id="summit" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mountain climbing action shot"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xs tracking-[0.4em] text-primary mb-6"
            >
              HUMAN PERFORMANCE DOSSIER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-syne text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-6"
            >
              ENGINEERING
              <br />
              <span className="text-primary">AT THE EDGE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-inter text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-8"
            >
              Multi-disciplinary engineer. Ironman finisher. Mountain climber. 
              Building at the intersection of hardware, software, and human endurance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-syne font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300"
              >
                Let's Connect
              </a>
              <div className="flex items-center gap-3 ml-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Hardware image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="glass-card rounded-xl overflow-hidden">
              <img
                src={hardwareImage}
                alt="Hardware engineering"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                <div className="font-mono text-xs text-primary/70">SYS_STATUS: ACTIVE</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs text-muted-foreground">ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}