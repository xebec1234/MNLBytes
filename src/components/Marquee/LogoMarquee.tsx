"use client";

import Image from "next/image";

export interface MarqueeTool {
  name: string;
  src: string; // path under /public, e.g. "/logos/canva.svg"
  gradient: string; // tailwind gradient stops, e.g. "from-[#00C4CC] to-[#7D2AE8]"
}

export default function LogoMarquee({ tools }: { tools: MarqueeTool[] }) {
  const loopedTools = [...tools, ...tools]; // duplicate for seamless loop

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-6 py-4">
        {loopedTools.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${tool.gradient} scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500`}
            />
            <div className="relative z-10 h-16 w-16">
              <Image
                src={tool.src}
                alt={tool.name}
                fill
                className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}