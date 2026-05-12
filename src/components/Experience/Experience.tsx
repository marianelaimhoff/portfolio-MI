const JOBS = [
  {
    company: "Awaq ONG",
    role: "Frontend Developer",
    period: "Sep 2025 — Feb 2026 (Prácticas)",
    current: false,
    description:
      "Desarrollo y mantenimiento de interfaces web para una ONG dedicada a la gestión y conservación de estaciones biológicas. Foco en diseño responsivo, accesibilidad y optimización de la experiencia de usuario.",
    tags: ["React", "JavaScript", "TypeScript", "Vite", "GitHub"],
    url: "https://www.somosawaq.org",
  },
  {
    company: "Uplin",
    role: "Frontend Developer",
    period: "Sep 2025 — Dic 2025 (Prácticas)",
    current: false,
    description:
      "Componentes reutilizables con React y Next.js desde diseños en Figma. Integración con backend, deploy en Vercel y trabajo continuo con TypeScript.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Vercel",
      "GitHub",
    ],
    url: "https://uplinhr.com",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-[#2a2a2a]">
      {/* Header */}
      <div className="flex items-end justify-between px-6 md:px-10 py-14 border-b border-[#2a2a2a]">
        <h2
          className="font-bold leading-none"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Experiencia
          <br />
          <span className="text-accent">profesional.</span>
        </h2>
        <span className="font-mono-custom text-[12px] tracking-[0.25em] uppercase text-accent">
          {"//"} 03
        </span>
      </div>

      {/* Job list */}
      <ul className="list-none">
        {JOBS.map((job) => (
          <li
            key={job.company}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr_48px] gap-4 md:gap-10 px-6 md:px-10 py-10 border-b border-[#1e1e1e] hover:bg-[#111] transition-colors duration-200"
          >
            {/* Meta */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-2">
              <span className="text-[14px] text-[#f0ece4]">{job.company}</span>
              <span className="font-mono-custom text-[10px] tracking-[0.08em] text-[#838383]">
                {job.period}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-[20px] font-medium text-[#f0ece4] tracking-[-0.01em]">
                  {job.role}
                </h3>
                {job.current && (
                  <span className="flex items-center gap-2 font-mono-custom text-[9px] tracking-[0.12em] uppercase text-accent border border-accent px-2 py-[3px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-accent" />
                    Activo
                  </span>
                )}
              </div>
              <p className="text-[14px] leading-[1.7] text-[#b1b1b1] max-w-[540px]">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-custom text-[9px] tracking-widest uppercase px-2 py-1 bg-[#181818] border border-[#2a2a2a] text-[#b1b1b1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* External link */}
            <div className="hidden md:flex justify-end pt-1">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${job.company}`}
                className="text-[35px] text-[#b1b1b1] no-underline hover:text-accent transition-colors duration-200"
              >
                ↗
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
