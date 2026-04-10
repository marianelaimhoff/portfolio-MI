const ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI Design",
  "Figma",
  "Vercel",
  "PostgreSQL",
  "Node.js",
  // duplicado para el loop infinito
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI Design",
  "Figma",
  "Vercel",
  "PostgreSQL",
  "Node.js",
];

export default function Marquee() {
  return (
    <div
      className="bg-accent py-3 overflow-hidden whitespace-nowrap"
      aria-hidden="true"
    >
      <div className="inline-flex marquee-track">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="font-mono-custom text-[11px] font-bold tracking-[0.15em] uppercase text-[#0a0a0a] px-6 flex items-center gap-6"
          >
            {item}
            <span className="opacity-30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
