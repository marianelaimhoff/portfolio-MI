"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

const CV_HREF = "/MarianelaImhoff-CV-FrontEnd.pdf";

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
        className="font-mono-custom text-[13px] tracking-widest text-[#b1b1b1] no-underline flex items-center gap-1"
      >
        <span className="text-accent">MI</span>
        <span className="text-[#b1b1b1]">/</span>
        portfolio
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="font-mono-custom text-[11px] tracking-[0.12em] uppercase text-[#b1b1b1] no-underline hover:text-[#f0ece4] transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA desktop */}
      <a
        href={CV_HREF}
        download
        className="hidden md:inline-block font-mono-custom text-[11px] tracking-widest uppercase px-5 py-2 border border-accent text-accent no-underline hover:bg-accent hover:text-[#0a0a0a] transition-all duration-200"
      >
        Descargar CV
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
              className="font-mono-custom text-[13px] tracking-widest uppercase text-[#b1b1b1] no-underline hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={CV_HREF}
            download
            onClick={() => setMenuOpen(false)}
            className="font-mono-custom text-[13px] tracking-widest uppercase text-accent no-underline transition-colors"
          >
            Descargar CV
          </a>
        </div>
      )}
    </header>
  );
}
