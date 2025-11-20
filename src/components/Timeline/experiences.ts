export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
  tech: string[];
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "Uplin",
    role: "Frontend Developer",
    start: "Sep 2025",
    end: "Actualidad",
    description:
      "Desarrollo de interfaces, componentes reutilizables y optimización de performance en proyectos React/Next.js.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Vercel", "GitHub"],
    link: "https://uplinhr.com",
  },
  {
    company: "Awaq ONG",
    role: "Frontend Developer",
    start: "Sep 2025",
    end: "Actualidad",
    description:
      "Maquetación, refactorización de vistas y migración progresiva a TypeScript.",
    tech: ["React", "JavaScript", "TypeScript", "Vite", "ASWA", "GitHub"],
    link: "https://www.somosawaq.org",
  },
];
