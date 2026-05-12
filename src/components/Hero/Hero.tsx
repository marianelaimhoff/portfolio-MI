import Image from "next/image";
import { TECHS } from "@/components/TechStack/techs";

const HIGHLIGHTED_TECHS = new Set(["React", "Next.js", "TypeScript", "Tailwind CSS"]);

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-[1.35fr_0.55fr_1.1fr] border-b border-[#2a2a2a]"
    >

      {/* ── COL 1: PRESENTACIÓN ── */}
      <div className="grid grid-cols-1 md:col-span-2 md:grid-cols-[1.35fr_0.55fr] items-center gap-8 md:gap-6 px-6 md:px-10 py-12 md:py-10 border-b md:border-b-0 md:border-r border-[#2a2a2a]">

        <div className="flex flex-col">
          <div className="anim-1 flex items-center gap-3 font-mono-custom text-[14px] tracking-[0.2em] uppercase text-[#8f8982]">
            <span className="w-6 h-px bg-accent shrink-0" />
            Frontend Developer
          </div>

          <div className="anim-2 mt-8">
            <h1
              className="flex flex-col font-bold leading-[0.9] tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.8rem, 4.5vw, 5rem)' }}
            >
              Marianela
              <span className="text-accent">Imhoff.</span>
            </h1>
          </div>


          <div className="anim-4 flex flex-wrap items-center gap-4 mt-9">
              <a href="#proyectos"
              className="bg-accent text-[#0a0a0a] px-7 py-3 text-[12px] font-bold tracking-widest uppercase no-underline hover:opacity-85 transition-opacity">
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="border border-[#444] text-[#f0ece4] px-7 py-3 text-[12px] tracking-widest uppercase no-underline hover:border-[#888] transition-colors"
            >
              Hablemos
            </a>
          </div>
        </div>

      {/* ── COL 2: FOTO ── */}
      <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,255,0,0.08),_transparent_62%)]" />
        <div className="relative w-full max-w-[230px] h-[280px] md:h-[360px]">
          <Image
            src="/marian-portfolio-lime.png"
            alt="Marianela Imhoff"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* ── COL 3: TECH STACK ── */}
      </div>

      <div className="flex flex-col justify-center px-6 md:px-10 py-12 md:py-10">

        <span className="font-mono-custom text-[12px] tracking-[0.25em] uppercase text-accent mb-5">
          {"//"} stack principal
        </span>

        <div className="flex flex-col">
          {TECHS.slice(0, 7).map(({ name }, i) => {
            const highlight = HIGHLIGHTED_TECHS.has(name);

            return (
            <div
              key={name}
              className="flex items-center justify-between py-2.5 border-b border-[#1e1e1e] group cursor-default"
            >
              <span className={`font-mono-custom text-[12px] tracking-[0.08em] uppercase transition-colors duration-200
                ${highlight ? 'text-accent' : 'text-[#bbb5ad] group-hover:text-[#e4ded6]'}`}
              >
                {name}
              </span>
              <span className={`font-mono-custom text-[9px] transition-colors duration-200
                ${highlight ? 'text-accent' : 'text-[#746d65] group-hover:text-[#9b948b]'}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            );
          })}
        </div>
      </div>

    </section>
  )
}
