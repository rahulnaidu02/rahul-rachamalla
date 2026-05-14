import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs tracking-[0.4em] text-primary mb-8">
            SECTION_04 // COMMAND_CENTER
          </div>

          <h2 className="font-syne text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] mb-8">
            LET'S BUILD
            <br />
            <span className="text-primary">THE IMPOSSIBLE</span>
          </h2>

          <p className="font-inter text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            Whether it's hardware engineering, extreme endurance, or the next ambitious project — 
            I'm always looking for the next edge to push.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-syne font-bold text-sm uppercase tracking-wider px-10 py-5 rounded-full hover:bg-primary/90 transition-all duration-300 group"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 border border-border text-foreground font-syne font-bold text-sm uppercase tracking-wider px-10 py-5 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              View Resume
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-3 rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                  {social.label.toUpperCase()}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-8 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} // ALL SYSTEMS NOMINAL
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              ENGINEERED WITH PRECISION
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}