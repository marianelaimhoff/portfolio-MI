const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "marianelaimhoff@gmail.com",
    href: "mailto:marianelaimhoff@gmail.com",
    highlight: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/marianela-imhoff",
    href: "https://www.linkedin.com/in/marianela-imhoff-364b5a212/",
    highlight: false,
  },
  {
    label: "GitHub",
    value: "github.com/marianelaimhoff",
    href: "https://github.com/marianelaimhoff",
    highlight: false,
  },
  {
    label: "Disponibilidad",
    value: "Disponible ahora",
    href: null,
    highlight: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="grid grid-cols-1 md:grid-cols-2 border-b border-[#2a2a2a]"
    >
      {/* ── LEFT ── */}
      <div className="flex flex-col justify-between gap-8 px-6 md:px-10 py-14 border-b md:border-b-0 md:border-r border-[#2a2a2a]">
        <span className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-accent">
          {"//"} 05 — contacto
        </span>

        <h2
          className="font-bold leading-none"
          style={{
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Trabajemos
          <br />
          <span className="text-accent">juntos.</span>
        </h2>

        <p className="text-[15px] text-[#666] leading-[1.7] max-w-sm">
          Estoy disponible para proyectos freelance, trabajo remoto y
          oportunidades full-time.
        </p>
      </div>

      {/* ── RIGHT ── */}
      <div className="flex flex-col px-6 md:px-12 py-14 gap-0">
        {CONTACT_ITEMS.map(({ label, value, href, highlight }) => (
          <div
            key={label}
            className="flex flex-col gap-1 py-5 border-b border-[#1e1e1e]"
          >
            <span className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#444]">
              {label}
            </span>

            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[15px] text-[#f0ece4] no-underline hover:text-accent transition-colors duration-200"
              >
                {value}
              </a>
            ) : (
              <span
                className={`flex items-center gap-2 text-[15px] ${highlight ? "text-accent" : "text-[#f0ece4]"}`}
              >
                {highlight && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                )}
                {value}
              </span>
            )}
          </div>
        ))}

        <a
          href="mailto:marianelaimhoff@gmail.com"
          className="mt-8 self-start bg-accent text-[#0a0a0a] px-8 py-3 text-[12px] font-bold tracking-widest uppercase no-underline hover:opacity-85 transition-opacity"
        >
          Escribime →
        </a>
      </div>
    </section>
  );
}
