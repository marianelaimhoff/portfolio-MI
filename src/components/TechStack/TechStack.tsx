"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
  
];

export default function TechCarousel() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;

    const animate = () => {
      scrollAmount += 0.4; // velocidad suave
      slider.scrollLeft = scrollAmount;

      // cuando llega al final, vuelve suavemente al inicio
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full overflow-hidden py-6">
      <div
        ref={sliderRef}
        className="flex gap-10 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo}
              alt="Technology logo"
              width={60}
              height={60}
              className="opacity-90 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
