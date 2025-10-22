import Image from "next/image";

function Home() {
  return (
    <div className="relative w-full bg-[#B4C9C9]">
      <section id="inicio" className="relative h-screen">
        {/* Imagen de fondo */}
        <Image
          src="/marian.png"
          alt="imagen marianela"
          fill
          className="object-cover"
          priority
        />

        {/* Texto sobre la imagen */}
        <div
          className="
          absolute inset-0 flex flex-col text-white px-10 md:px-20
          justify-center md:justify-center md:items-start md:text-left
          sm:justify-start sm:items-start sm:text-left sm:pt-6 sm:pl-6
        "
        >
          <p className="text-lg md:text-xl font-light mb-2">Hola! Soy</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Marianela</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Imhoff</h1>
          <h2 className="text-xl md:text-2xl font-medium">
            Bienvenido/a a mi portfolio :)
          </h2>
        </div>
      </section>

      <section id="acerca-de-mi" className="bg-[#B4C9C9]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold mb-2">Acerca de Mi</h2>
      </section>

      <section id="experiencia" className="bg-[#B4C9C9]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold mb-2">Mi Experiencia</h2>
      </section>

      <section id="proyectos" className="bg-[#B4C9C9]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold mb-2">Mis Proyectos</h2>
      </section>

      <section id="contacto" className="bg-[#B4C9C9]">
        <h2 className="text-center text-4xl p-6 text-white md:text-4xl font-semibold mb-2">Contactame!</h2>
      </section>
    </div>
  );
}

export default Home;
