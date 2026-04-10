const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/marianelaimhoff" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marianela-imhoff-364b5a212/",
  },
  { label: "CV", href: "/MarianelaImhoff-CV-FrontEnd .pdf" },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 md:px-10 py-5 border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <span className="font-mono-custom text-[10px] tracking-[0.15em] uppercase text-[#444]">
        © 2026 Marianela Imhoff
      </span>

      <nav className="flex gap-6">
        {FOOTER_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="font-mono-custom text-[10px] tracking-[0.15em] uppercase text-[#444] no-underline hover:text-accent transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
