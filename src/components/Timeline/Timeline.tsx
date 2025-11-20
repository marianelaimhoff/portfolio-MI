import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "./experiences";
export default function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto p-1 py-10">
      {/* -LINEA DE TIEMPO- */}
      <div className="absolute left-4 top-0 w-1 bg-gray-300 h-full rounded-full" />

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative pl-14"
          >
            {/* -PUNTO DE LA LINEA- */}
            <div className="absolute left-1 top-2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow" />

            <div className="bg-white p-5 rounded-2xl shadow-md border">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <h3 className="text-xl font-semibold">{exp.company}</h3>
              </div>

              <p className="text-indigo-600 font-medium">{exp.role}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.start} — {exp.end}</p>

              <p className="text-gray-700 mb-4">{exp.description}</p>

              {/* -TECNOLOGÍAS TRABAJADAS- */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* -BOTON A LA PAGINA */}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                >
                  Visitar empresa
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
