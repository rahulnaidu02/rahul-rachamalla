import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    number: "01",
    title: "Patent Pending Autonomous Maintenance System for Bathroom Cleaning",
    description: "Patent-pending physical AI system for predictive maintenance, user access control, telemetry, and autonomous servicing workflows for bathroom cleaning and real-world field operations.",
    tags: ["Patent Pending", "Physical AI", "Predictive Maintenance", "Access Control", "Telemetry", "Autonomous Servicing"],
    badge: "USPTO Provisional Patent Pending",
    buttons: [{ label: "View Details", href: "#" }, { label: "Copa Website", href: "https://www.letsgocopa.com" }],
    flagship: true,
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/077079eb9_Reference_MethodFlowofCopaAutonomousUnit.png",
  },
  {
    number: "02",
    title: "COPA Self-Cleaning Portable Sanitation Product",
    description: "A physical AI product for self-cleaning autonomous portable sanitation at outdoor events, concerts, festivals, and field deployments. Built around connected hardware, sensors, telemetry, access control, and future autonomous cleaning workflows.",
    tags: ["Physical AI", "Self-Cleaning", "Outdoor Events", "Sensors", "Telemetry", "Connected Hardware"],
    buttons: [{ label: "Copa Website", href: "https://www.letsgocopa.com" }, { label: "View Details", href: "#" }],
    carouselImages: [
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/68cb0fc5f_COPAGarage.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/93ac801ab_CutawayFrontLowAngle-TransparentBG.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/fb73f6aad_Screenshot2026-04-05165512.png",
    ],
  },
  {
    number: "03",
    title: "COPA Fleet Command Center",
    description: "Live operator command center for fleet visibility, service alerts, unit status, and field operations. Designed to help operators see what needs attention before sending crews into the field.",
    tags: ["Fleet Ops", "Command Center", "Telemetry", "Service Alerts", "Operator Dashboard"],
    buttons: [{ label: "Check out the website", href: "https://copa-fleet-command-center.base44.app" }],
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/732f38322_Screenshot2026-05-13062833.png",
  },
  {
    number: "04",
    title: "SO101 Open Source Robotics Arm",
    description: "Experiments with low-cost open-source robotic arm workflows for future physical AI, autonomous servicing, and hardware automation projects.",
    tags: ["Robotics", "Automation", "Physical AI", "Open Source", "Embedded Systems"],
    buttons: [{ label: "View Project", href: "#" }, { label: "GitHub", href: "#" }],
    video: "https://media.base44.com/videos/public/6a061760231cbb0e0f2caa6b/913f37782_CopaGIFSelfCleaningPrototypeearlystage.mp4",
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/364eb1e61_RoboticArm.png",
  },
  {
    number: "05",
    title: "COPA Unit Health & Telemetry Dashboard",
    description: "Telemetry dashboard for monitoring complete unit health, battery, water levels, usage, lock state, tamper events, service status, and operational readiness.",
    tags: ["Telemetry", "Unit Health", "IoT Dashboard", "Sensors", "Fleet Monitoring"],
    buttons: [{ label: "Check out the website", href: "https://copa-fleet-command-center.base44.app" }],
    image: "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/03816ef15_Screenshot2026-05-13063023.png",
  },
  {
    number: "06",
    title: "Live Translation Screen System",
    description: "Dual-screen real-time translation concept where each person sees live subtitles in their preferred language during face-to-face conversations.",
    tags: ["Speech-to-Text", "Translation", "Real-Time AI", "Multilingual UX"],
    buttons: [{ label: "View Demo", href: "#" }],
    pending: true,
  },
  {
    number: "07",
    title: "WhatsApp Food Ordering PWA",
    description: "PWA for community food ordering where a seller can update a daily menu and customers can order from one permanent link instead of messy WhatsApp threads.",
    tags: ["PWA", "Community Commerce", "Mobile UX"],
    buttons: [{ label: "View Demo", href: "#" }],
    pending: true,
  },
  {
    number: "08",
    title: "1-800 Conversational Voice Bot for Hospitality",
    description: "Conversational voice bot prototype for hospitality support use cases, inspired by large-scale customer service automation and natural speech workflows.",
    tags: ["Voice AI", "Hospitality", "Conversational AI", "Customer Support", "Automation"],
    buttons: [{ label: "View Project", href: "#" }],
  },
  {
    number: "09",
    title: "Conversational AI Bot for Hardware Founders",
    description: "AI assistant concept to help hardware founders think through prototyping, sourcing, manufacturing, fundraising, and field operations.",
    tags: ["LLM", "AI Assistant", "Hardware Startups"],
    buttons: [{ label: "View Project", href: "#" }],
  },
  {
    number: "10",
    title: "Productivity Activity Tracker",
    description: "Desktop productivity tracker for understanding how time is spent across coding, product building, social media, learning, and deep work.",
    tags: ["Desktop App", "Productivity", "Analytics", "Focus"],
    buttons: [{ label: "View Project", href: "#" }, { label: "GitHub", href: "#" }],
  },
  {
    number: "11",
    title: "Raspberry Pi Smart Mirror / Smart Screen",
    description: "DIY Raspberry Pi project using an unused television to create a smart display / smart mirror surface for dashboards, personal information, and ambient productivity.",
    tags: ["Raspberry Pi", "Smart Mirror", "DIY Hardware", "Smart Screen", "Dashboard"],
    buttons: [{ label: "View Project", href: "#" }],
    pending: true,
  },
  {
    number: "12",
    title: "COPA Unit Identification & Remote Unlock System",
    description: "Mobile app workflow for remotely identifying, locating, and scanning units to unlock access. Features map-based unit discovery, QR code scanning, team management, and real-time unit health status.",
    tags: ["Mobile App", "QR Scanning", "Location Services", "Remote Access", "Unit Management"],
    buttons: [{ label: "View Prototype", href: "#" }],
    carouselImages: [
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/5586dd99c_COPAdetailSanSquad.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/07d6f1812_DashboardOpshead.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/a3ebfa739_FeedbackCustomer.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/28e135e96_Map-COPAdetailCustomer.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/242f435bc_MapCustomer.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/0e1c4eb97_MyunitsSanSquad.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/8e6d505e5_Phoneinhand.png",
      "https://media.base44.com/images/public/6a061760231cbb0e0f2caa6b/28d6ed71d_QRcodescanCustomer.png",
    ],
  },
];

function ProjectButton({ label, href, isPrimary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-inter font-medium px-6 py-3 rounded-lg transition-all duration-200 ${
        isPrimary
          ? "border border-violet-400/60 text-violet-300 hover:bg-violet-400/12 hover:border-violet-400/80 hover:text-violet-200"
          : "border border-white/20 text-white/50 hover:border-white/40 hover:text-white/70"
      }`}
      style={{ fontSize: "1rem" }}
    >
      {label}
      {isPrimary && <ExternalLink className="w-4 h-4 opacity-60" />}
    </a>
  );
}

function ImageCarousel({ images, index }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="w-full rounded-xl overflow-hidden border border-white/8 relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ height: "320px" }}
    >
      {images.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={`Project media ${idx + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === currentIdx ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ))}
      <div className="absolute bottom-3 right-3 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIdx ? "bg-white w-4" : "bg-white/40 hover:bg-white/60 w-1.5"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function MediaDisplay({ project, index }) {
  if (project.carouselImages) {
    return <ImageCarousel images={project.carouselImages} index={index} />;
  }
  if (project.image) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="w-full rounded-xl overflow-hidden border border-white/8"
        style={{ height: "320px" }}
      >
        <img src={project.image} alt="Project visual" className="w-full h-full object-cover object-center" />
      </motion.div>
    );
  }
  if (project.video) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="w-full rounded-xl overflow-hidden border border-white/8"
        style={{ height: "320px" }}
      >
        <video src={project.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="w-full rounded-xl overflow-hidden border border-white/8 bg-gradient-to-br from-white/3 to-transparent flex items-center justify-center"
      style={{ height: "320px" }}
    >
      <div className="text-center">
        <div className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center mx-auto mb-3 bg-white/5">
          <Play className="w-6 h-6 text-white/20" />
        </div>
        <p className="font-mono text-white/20 tracking-wider text-sm">Media coming soon</p>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const { number, title, description, tags, buttons, badge, flagship, pending } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
      className={`group relative rounded-2xl overflow-hidden p-8 lg:p-10 flex flex-col gap-8 border transition-all duration-300 ${
        flagship
          ? "border-violet-400/40 bg-gradient-to-br from-violet-950/50 via-white/4 to-indigo-950/30"
          : "border-white/10 bg-white/3 hover:border-violet-400/30 hover:bg-violet-400/5"
      }`}
      style={
        flagship
          ? {
              boxShadow: "0 0 0 1px rgba(167,139,250,0.20), 0 12px 48px rgba(139,92,246,0.14), inset 0 1px 0 rgba(167,139,250,0.10)",
            }
          : {}
      }
    >
      {/* Patent badge — top right if flagship */}
      {badge && (
        <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-400/60 bg-amber-400/10" style={{ boxShadow: "0 0 12px rgba(251,191,36,0.12)" }}>
          <span className="text-amber-300 text-sm">⚖️</span>
          <span className="font-mono font-bold tracking-widest uppercase text-amber-300" style={{ fontSize: "0.7rem" }}>
            {badge}
          </span>
        </div>
      )}

      {/* Grid: number + title on left, media on right (lg+) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: title & content */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-mono text-violet-400/60 tracking-widest uppercase mb-3" style={{ fontSize: "0.85rem" }}>
              PROJECT {number}
            </p>
            <h3 className="font-syne font-bold text-white leading-tight group-hover:text-violet-200 transition-colors" style={{ fontSize: "1.75rem" }}>
              {title}
            </h3>
          </div>

          <p className="font-inter text-white/65 leading-[1.9]" style={{ fontSize: "1.0625rem" }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`font-inter tracking-wide px-4 py-2 rounded-full border text-sm ${
                  tag === "Patent Pending"
                    ? "bg-amber-400/12 border-amber-400/30 text-amber-300/80"
                    : "bg-violet-400/8 border-violet-400/20 text-violet-300/70 group-hover:border-violet-400/40 group-hover:text-violet-300/90 transition-colors"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {buttons.map((btn, idx) => (
              <ProjectButton key={btn.label} label={btn.label} href={btn.href} isPrimary={idx === 0} />
            ))}
          </div>
        </div>

        {/* Right: media (hidden on mobile, visible lg+) */}
        <div className="hidden lg:block">
          <MediaDisplay project={project} index={index} />
        </div>
      </div>

      {/* Media for mobile (below on small screens) */}
      <div className="lg:hidden">
        <MediaDisplay project={project} index={index} />
      </div>

      {/* Pending indicator */}
      {pending && (
        <div className="absolute top-6 left-6 font-mono text-xs text-white/30 tracking-widest uppercase">
          Prototype
        </div>
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading num="04" title="AI Projects" />
      <p className="font-inter text-white/50 mb-12 leading-[1.8]" style={{ fontSize: "1.0625rem" }}>
        Patent-pending systems, physical AI products, telemetry dashboards, robotics experiments, and AI-native tools.
      </p>

      <div className="flex flex-col gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </motion.div>
  );
}