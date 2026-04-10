import Image from "next/image";
import { TECHS } from "./techs";

export default function TechStack() {
  return (
    <section id="tech" className="border-b border-[#2a2a2a]">
      {/* Header */}
      <div className="flex items-end justify-between px-6 md:px-10 py-14 border-b border-[#2a2a2a]">
        <h2
          className="font-bold leading-none tracking-tight"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Mi <span className="text-accent">stack.</span>
        </h2>
        <span className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-accent">
          {"//"} 02
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))]">
        {TECHS.map(({ name, logo }) => (
          <div
            key={name}
            className="group flex flex-col items-center gap-3 py-8 px-4 border-r border-b border-[#2a2a2a] hover:bg-[#111] transition-colors duration-200 cursor-default"
          >
            <Image
              src={logo}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
            <span className="font-mono-custom text-[10px] tracking-widest uppercase text-[#444] text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
