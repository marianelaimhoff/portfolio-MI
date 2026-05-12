import Image from "next/image";
import { PROJECTS } from "./projects";

export default function Projects() {
  return (
    <section id="proyectos" className="border-b border-[#2a2a2a]">
      {/* Header */}
      <div className="flex items-end justify-between px-6 md:px-10 py-14 border-b border-[#2a2a2a]">
        <h2
          className="font-bold leading-none"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Proyectos
          <br />
          <span className="text-accent">destacados.</span>
        </h2>
        <span className="font-mono-custom text-[12px] tracking-[0.25em] uppercase text-accent">
          {"//"} 02
        </span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <article
            key={project.num}
            className={`flex flex-col gap-4 p-6 md:p-8 border-b border-[#2a2a2a] hover:bg-[#111] transition-colors duration-200 cursor-default
              ${i < PROJECTS.length - 1 ? "lg:border-r" : ""}
              ${i === 1 ? "md:border-r md:border-[#2a2a2a] lg:border-r" : ""}
            `}
          >
            <span className="font-mono-custom text-[10px] tracking-[0.15em] text-[#b1b1b1]">
              {project.num} / 03
            </span>

            {/* Image */}
            <div className="relative w-full aspect-video bg-[#181818] border border-[#2a2a2a] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                /*
                  Si la imagen aún no existe, podés comentar el <Image> y descomentar
                  el placeholder de abajo:
                */
              />
              {/* Placeholder mientras no tenés screenshot:
              <div className="absolute inset-0 flex flex-col gap-2 p-4 justify-center">
                <div className="h-1 rounded-sm bg-[#c8f04d]" style={{ width: '40%' }} />
                <div className="h-1 rounded-sm bg-[#2a2a2a]" style={{ width: '80%' }} />
                <div className="h-1 rounded-sm bg-[#2a2a2a]" style={{ width: '60%' }} />
                <div className="h-7 mt-1 bg-[#222] border border-[#2a2a2a]" />
                <div className="h-1 rounded-sm bg-[#2a2a2a]" style={{ width: '75%' }} />
              </div>
              */}
            </div>

            <h3 className="text-[16px] font-medium text-[#f0ece4] leading-snug tracking-[-0.01em]">
              {project.title}
            </h3>
            <p className="text-[13px] text-[#b1b1b1] leading-[1.65]">
              {project.description}
            </p>

            <div className="flex flex-col gap-1">
              <span className="font-mono-custom text-[9px] tracking-[0.15em] uppercase text-[#b1b1b1]">
                Duración
              </span>
              <span className="font-mono-custom text-[11px] text-[#b1b1b1]">
                {project.duration}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-custom text-[9px] tracking-widest uppercase px-2 py-1 border border-[#2a2a2a] text-[#b1b1b1]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-5 pt-4 border-t border-[#1e1e1e]">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-[11px] tracking-[0.12em] uppercase text-accent no-underline hover:opacity-70 transition-opacity"
              >
                Demo →
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-[11px] tracking-[0.12em] uppercase text-[#b1b1b1] no-underline hover:text-[#f0ece4] transition-colors"
              >
                Código
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
