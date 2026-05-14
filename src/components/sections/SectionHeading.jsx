export default function SectionHeading({ num, title }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <span className="font-mono text-violet-400 text-base">{num}.</span>
      <h2 className="font-syne font-bold text-white text-3xl sm:text-4xl">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent max-w-xs" />
    </div>
  );
}