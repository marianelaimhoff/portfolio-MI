import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* BLOQUE FOTO + MARCO ANIMADO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-72 md:h-96"
        >
          {/* Marco animado */}
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute inset-0 border-4 border-[#FF7220] rounded-3xl"
          />

          {/* Foto */}
          <Image
            src="/marianela-portfolio.png" 
            alt="Foto personal"
            fill
            className="object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* TEXTO CON DISEÑO DESTACADO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >

          {/* Caja con fondo degradado suave */}
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow">
            <p className="text-gray-700 leading-relaxed text-lg">
              Soy desarrolladora <span className="font-semibold text-[#FF7220]">Full Stack especializada en Front End</span>. Me apasiona crear interfaces modernas y funcionales, cuidando cada detalle para lograr una experiencia atractiva y fácil de usar.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Me considero una persona detallista, autoexigente, creativa y responsable. Disfruto del proceso de diseñar y desarrollar componentes reutilizables, mantener un código limpio y construir soluciones que combinen estética y funcionalidad.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
