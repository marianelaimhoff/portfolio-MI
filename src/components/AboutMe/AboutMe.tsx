import { TECHS } from "@/components/TechStack/techs";

export default function AboutMe() {
  return (
    <section
      id="sobre-mi"
      className="grid grid-cols-1 md:grid-cols-[1fr_2fr] border-b border-[#2a2a2a]"
    >
      {/* ── LEFT ── */}
      <div className="flex flex-col gap-8 px-6 md:px-10 py-14 border-b md:border-b-0 md:border-r border-[#2a2a2a]">
        <span className="font-mono-custom text-[12px] tracking-[0.25em] uppercase text-accent">
          {"//"} 01 — sobre mí
        </span>

        <blockquote className="mt-auto font-mono-custom text-[13px] italic text-[#b1b1b1] leading-[1.7] border-l-2 border-accent pl-4">
          &quot;Construyo interfaces que la gente disfruta usar.&quot;
        </blockquote>

        <div className="pt-6 border-t border-[#2a2a2a] flex flex-col gap-1 font-mono-custom text-[11px] tracking-widest uppercase text-[#b1b1b1] leading-loose">
          <p>Basada en Argentina</p>
          <p>Disponible para trabajo remoto</p>
          <p>Open to relocation</p>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className="flex flex-col gap-8 px-6 md:px-12 py-14">
        <p className="text-[16px] leading-[1.8] text-[#aaa]">
          Soy desarrolladora Frontend especializada en construir{" "}
          <strong className="text-[#f0ece4] font-medium">
            productos digitales con criterio de diseño
          </strong>
          . Me importa tanto el código limpio como la experiencia visual: cada
          componente es una decisión estética y técnica a la vez.
          <br />
          <br />
          Trabajo con{" "}
          <strong className="text-[#f0ece4] font-medium">
            Next.js, TypeScript y Tailwind CSS
          </strong>
          . Colaboro con equipos de diseño en Figma y entiendo el frontend como
          el puente entre una buena idea y una experiencia real.
        </p>

        <div>
          <p className="font-mono-custom text-[10px] tracking-[0.15em] uppercase text-[#b1b1b1] mb-3">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {TECHS.map(({ name, highlight }) => (
              <span
                key={name}
                className={`font-mono-custom text-[10px] tracking-widest uppercase px-3 py-[5px] border text-sm
                  ${
                    highlight
                      ? "border-accent text-accent"
                      : "border-[#2a2a2a] text-[#b1b1b1]"
                  }`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
