import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "./projects";

export function ProjectsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-white rounded-2xl shadow-md border overflow-hidden relative"
          >
            {/* Imagen con overlay */}
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay en desktop / siempre visible en mobile */}
              <div
                className="absolute inset-0 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-7 flex flex-col gap-5 md:pointer-events-none md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:translate-y-full"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Duración:</span> {project.duration}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    <Github size={16} /> Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
