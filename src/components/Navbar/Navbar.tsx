"use client"
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Inicio", "Acerca de Mi", "Experiencia", "Proyectos", "Contacto"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo vacío para mantener centrado */}
        <div className="hidden md:block"></div>

        {/* Links centrados */}
        <div className="flex-1 flex justify-center">
          <div
            className={`flex items-center gap-8 md:flex ${
              isOpen
                ? "flex-col absolute top-full left-0 w-full bg-black/70 p-6 md:bg-transparent md:p-0 md:flex-row md:static"
                : "hidden md:flex"
            }`}
          >
            {links.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="relative text-white text-lg font-semibold transition-colors
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                onClick={() => setIsOpen(false)} // cierra menú en móvil al hacer click
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
