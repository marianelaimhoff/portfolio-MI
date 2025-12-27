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
    company: "Awaq ONG",
    role: "Frontend Developer",
    start: "Sep 2025",
    end: "Actualidad",
    description:
      "Desarrollo y mantenimiento de interfaces web para una ONG dedicada a la gestión y conservación de estaciones biológicas, utilizando HTML, CSS, JavaScript y React. Implementación de componentes funcionales, con foco en diseño responsivo, accesibilidad y optimización de la experiencia de usuario. Trabajo colaborativo dentro del equipo de desarrollo, aplicando buenas prácticas y contribuyendo a proyectos con impacto ambiental y social positivo.",
    tech: ["React", "JavaScript", "TypeScript", "Vite", "ASWA", "GitHub"],
    link: "https://www.somosawaq.org",
  },
  {
    company: "Uplin",
    role: "Frontend Developer (Prácticas)",
    start: "Sep 2025",
    end: "Dic 2025",
    description:
      "Desarrollo y mantenimiento de interfaces utilizando React y Next.js, trabajando con TypeScript y control de versiones con Git. Diseño e implementación de componentes reutilizables a partir de diseños en Figma, asegurando interfaces responsivas y una experiencia de usuario optimizada. Colaboración continua con el equipo de backend para la integración de APIs y la mejora progresiva del producto.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Vercel", "GitHub"],
    link: "https://uplinhr.com",
  },
];
