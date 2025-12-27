"use client";

import Image from "next/image";

const logos = [
  "/logos/react.png",
  "/logos/nextjs.png",
  "/logos/typescript.png",
  "/logos/javascript.png",
  "/logos/tailwindcss.png",
  "/logos/bootstrap.png",
  "/logos/express.png",
  "/logos/postgresql.png",
  "/logos/github.png",
  "/logos/figma.png",
  "/logos/axios.png",
  "/logos/auth0.png",
  "/logos/html.png",
  "/logos/css.png",
  "/logos/stripe.png",
];

export default function TechGrid() {
  return (
    <section className="w-full py-10 px-6">
      {/* contenedor centrado */}
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-5 gap-4 place-items-center">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Technology logo"
              width={55}
              height={55}
              className="opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
