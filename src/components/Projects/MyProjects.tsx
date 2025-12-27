"use client";

import Image from "next/image";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";
import { projects } from "./projects";

export function ProjectsSection() {
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-5 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const isOpen = openProjectId === project.id;

          return (
            <article
              key={project.id}
              className="group bg-white rounded-2xl shadow-md relative"
            >
              {/* Imagen */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Flecha SOLO mobile / tablet */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="absolute bottom-4 right-4 z-10 bg-white/90 rounded-full p-2 shadow md:hidden"
                >
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 bg-white/95 p-7 flex flex-col gap-5
                    transition-transform duration-500
                    md:translate-y-full md:group-hover:translate-y-0
                    ${isOpen ? "translate-y-0" : "translate-y-full"}
                  `}
                >
                  <h3 className="text-xl font-semibold text-[#5e5e5e]">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Duración:</span>{" "}
                    {project.duration}
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

                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-[#FF7220] font-medium hover:underline"
                    >
                      <Github size={16} /> Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1 text-sm text-[#FF7220] font-medium hover:underline"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
