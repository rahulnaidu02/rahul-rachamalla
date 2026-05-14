export default function SectionHeading({ num, title }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-violet-400 text-sm">{num}.</span>
      <h2 className="font-syne font-bold text-white text-2xl sm:text-3xl">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent max-w-xs" />
    </div>
  );
}