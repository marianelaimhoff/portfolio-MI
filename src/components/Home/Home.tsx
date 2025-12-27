"use client";
import Image from "next/image";
import Timeline from "../Timeline/Timeline";
import { ProjectsSection } from "../Projects/MyProjects";
import AboutMe from "../AboutMe/AboutMe";
import TechStack from "../TechStack/TechStack";

export function Home() {
  return (
    <div className="relative w-full bg-[#FF7220]">
      <section id="inicio" className="relative h-screen">
        {/* Imagen de fondo */}
        <Image
          src="/marianela-portfolio.png"
          alt="imagen marianela"
          fill
          priority
          className="object-cover object-center sm:object-[center_top]"
        />

        {/* Texto sobre la imagen */}
        <div
          className="absolute inset-0 flex flex-col text-white px-6 justify-end pb-16
            md:justify-center md:pb-0 md:px-20"
        >
          <p className="text-lg md:text-xl font-light mb-2">Hola! Soy</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Marianela</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Imhoff</h1>
          <h2 className="text-xl md:text-2xl font-medium">
            Desarrolladora Frontend
          </h2>
        </div>
      </section>

      <section id="acerca-de-mi" className="bg-[#CCCCCC]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold">
          Sobre mi
        </h2>
        <AboutMe />
      </section>

      <section id="experiencia" className="bg-[#CCCCCC]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold">
          Experiencia profesional
        </h2>
        <Timeline />
      </section>

      <section id="proyectos" className="bg-[#CCCCCC]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold">
          Mis Proyectos
        </h2>
        <ProjectsSection />
      </section>

      <section id="tecnologias" className="bg-[#CCCCCC]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold">
          Tecnologías
        </h2>
        <TechStack />
      </section>

      <section id="contacto" className="bg-[#CCCCCC]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold">
          Contactame!
        </h2>
      </section>
    </div>
  );
}

export default Home;
