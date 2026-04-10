import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 border-b border-[#2a2a2a]"
    >
      {/* ── LEFT ──────────────────────────────────────── */}
      <div className="flex flex-col px-6 md:px-10 py-16 border-b md:border-b-0 md:border-r border-[#2a2a2a]">
        {/* Tag */}
        <div className="anim-1 flex items-center gap-3 font-mono-custom text-[11px] tracking-[0.2em] uppercase text-[#666]">
          <span className="w-6 h-px bg-accent shrink-0" />
          Frontend Developer — Argentina
        </div>

        {/* Name */}
        <div className="anim-2 mt-10">
          <h1
            className="flex flex-col font-bold leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
          >
            Marianela
            <span className="text-accent">Imhoff.</span>
          </h1>
        </div>

        {/* Description */}
        <p className="anim-3 mt-7 max-w-sm text-[15px] leading-[1.75] text-[#aaa]">
          Diseño interfaces que combinan{" "}
          <strong className="text-[#f0ece4] font-medium">
            estética y funcionalidad
          </strong>
          . Especializada en Next.js, TypeScript y Tailwind CSS.
        </p>

        {/* Actions */}
        <div className="anim-4 flex flex-wrap items-center gap-4 mt-9">
          <a
            href="#proyectos"
            className="bg-accent text-[#0a0a0a] px-8 py-3 text-[12px] font-bold tracking-widest uppercase no-underline hover:opacity-85 transition-opacity"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="border border-[#444] text-[#f0ece4] px-8 py-3 text-[12px] tracking-widest uppercase no-underline hover:border-[#888] transition-colors"
          >
            Hablemos
          </a>
        </div>

        {/* Stats */}
        <div className="anim-5 flex gap-10 mt-10 pt-8 border-t border-[#2a2a2a]">
          {[
            { num: "3+", label: "proyectos" },
            { num: "2", label: "empresas" },
            { num: "15+", label: "tecnologías" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-[2.25rem] font-bold leading-none text-accent">
                {num}
              </span>
              <span className="font-mono-custom text-[11px] tracking-widest uppercase text-[#444]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT ─────────────────────────────────────── */}
      <div className="relative flex items-center justify-center bg-[#111] min-h-[440px] md:min-h-0">
        {/* Vertical label */}
        <span
          className="absolute top-8 right-6 font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#444]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          marianela imhoff — 2026
        </span>

        {/* Photo frame */}
        <div className="relative mt-4">
          {/* Offset accent border */}
          <div className="absolute top-3 left-3 -right-3 -bottom-3 border border-accent pointer-events-none" />

          <div className="relative w-[220px] h-[280px] border border-[#333] bg-[#181818] overflow-hidden flex items-center justify-center">
            
              <Image src="/marian-portfolio-lime.png" alt="Marianela Imhoff" fill style={{ objectFit: 'cover' }} />
           
          </div>
        </div>

        {/* Badge */}
        <div className="absolute bottom-10 right-8 bg-accent text-[#0a0a0a] px-4 py-3 font-mono-custom text-[10px] font-bold tracking-widest uppercase leading-[1.8] text-center">
          Next.js
          <br />
          TypeScript
          <br />
          Tailwind CSS
        </div>
      </div>
    </section>
  );
}
