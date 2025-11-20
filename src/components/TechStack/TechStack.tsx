"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  "/logos/react.svg",
  "/logos/nextjs.svg",
  "/logos/typescript.svg",
  "/logos/javascript.svg",
  "/logos/tailwind.svg",
  "/logos/bootstrap.svg",
  "/logos/express.svg",
  "/logos/postgresql.svg",
  "/logos/git.svg",
  "/logos/scrum.svg",
  "/logos/figma.svg",
  "/logos/axios.svg",
  "/logos/auth0.svg",
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
