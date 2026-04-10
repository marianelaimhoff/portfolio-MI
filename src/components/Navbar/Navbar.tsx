"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tecnologías", href: "#tech" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`
        sticky top-0 z-50 flex items-center justify-between
        h-16 px-6 md:px-10
        border-b border-[#2a2a2a]
        transition-all duration-300
        ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md" : "bg-[#0a0a0a]"}
      `}
    >
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => scrollTo(e, "#hero")}
        className="font-mono-custom text-[13px] tracking-widest text-[#666] no-underline flex items-center gap-1"
      >
        <span className="text-accent">MI</span>
        <span className="text-[#444]">/</span>
        portfolio
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="font-mono-custom text-[11px] tracking-[0.12em] uppercase text-[#666] no-underline hover:text-[#f0ece4] transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA desktop */}
      <a
        href="#contacto"
        onClick={(e) => scrollTo(e, "#contacto")}
        className="hidden md:inline-block font-mono-custom text-[11px] tracking-widest uppercase px-5 py-2 border border-accent text-accent no-underline hover:bg-accent hover:text-[#0a0a0a] transition-all duration-200"
      >
        Contacto
      </a>

      {/* Hamburger mobile */}
      <button
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <span
          className={`block w-[22px] h-px bg-[#aaa] transition-transform duration-200 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
        />
        <span
          className={`block w-[22px] h-px bg-[#aaa] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-[22px] h-px bg-[#aaa] transition-transform duration-200 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0a0a0a] border-b border-[#2a2a2a] flex flex-col gap-5 px-6 py-6 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="font-mono-custom text-[13px] tracking-widest uppercase text-[#aaa] no-underline hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
