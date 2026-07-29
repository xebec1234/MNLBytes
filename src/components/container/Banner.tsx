"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BannerProps {
  badge: string;
  headingLine1: string;
  headingLine2: string;
  subtext: string;
  ctaLabel: string;
  ctaHref?: string;
}

const gridSize = 7;
const accentIndex = 24;
const tileSize = 52;
const gapPx = 8;
const step = tileSize + gapPx;
const gridPixelSize = gridSize * tileSize + (gridSize - 1) * gapPx; // 412
const maxIdx = gridSize - 2; // 0..5 intersection indices

const gapLine = (index: number) => index * step + tileSize + gapPx / 2;

interface Beam {
  id: number;
  d: string;
  length: number;
  duration: number;
  delay: number;
}

let beamIdCounter = 0;

function randomBeam(): Beam {
  const segments = 3 + Math.floor(Math.random() * 3); // 3-5 hops
  let ix = Math.floor(Math.random() * (maxIdx + 1));
  let iy = Math.floor(Math.random() * (maxIdx + 1));
  const points: [number, number][] = [[ix, iy]];

  for (let s = 0; s < segments; s++) {
    const dirs: Array<"left" | "right" | "up" | "down"> = [];
    if (ix > 0) dirs.push("left");
    if (ix < maxIdx) dirs.push("right");
    if (iy > 0) dirs.push("up");
    if (iy < maxIdx) dirs.push("down");

    const dir = dirs[Math.floor(Math.random() * dirs.length)];
    if (dir === "left") ix--;
    else if (dir === "right") ix++;
    else if (dir === "up") iy--;
    else iy++;

    points.push([ix, iy]);
  }

  const d = points
    .map(([px, py], i) => `${i === 0 ? "M" : "L"} ${gapLine(px)} ${gapLine(py)}`)
    .join(" ");

  return {
    id: beamIdCounter++,
    d,
    length: segments * step,
    duration: 1.8 + Math.random() * 1.4,
    delay: Math.random() * 0.6,
  };
}

export default function Banner({
  badge,
  headingLine1,
  headingLine2,
  subtext,
  ctaLabel,
  ctaHref = "#contact",
}: BannerProps) {
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const spawn = () =>
      setBeams(Array.from({ length: 4 }, () => randomBeam()));

    spawn();
    const interval = setInterval(spawn, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-350 mx-auto rounded-[48px] bg-linear-to-br from-[#f7f5fb] to-[#efeaf9] border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden min-h-110 flex flex-col md:flex-row items-center px-8 md:px-16 py-10 gap-10">
      {/* Left: Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex-1 flex flex-col items-start text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
          <span className="text-xs font-semibold tracking-widest text-slate-600 uppercase">
            {badge}
          </span>
        </div>

        <h1 className="text-[38px] md:text-[54px] font-bold leading-[1.15] text-[#1a1533]">
          {headingLine1}
          <br />
          <span className="bg-linear-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            {headingLine2}
          </span>
        </h1>

        <p className="mt-6 text-[15px] md:text-[16px] text-slate-500 max-w-md leading-relaxed">
          {subtext}
        </p>

        <motion.a
          href={ctaHref}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-6 py-3 rounded-full bg-[#160c2b] text-white text-sm font-semibold tracking-wide shadow-lg"
        >
          {ctaLabel}
        </motion.a>
      </motion.div>

      {/* Right: Diamond tile grid */}
      <div className="relative flex-1 h-80 w-full hidden md:block">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative rotate-45"
            style={{ width: gridPixelSize, height: gridPixelSize }}
          >
            <div
              className="grid absolute inset-0"
              style={{
                gridTemplateColumns: `repeat(${gridSize}, ${tileSize}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${tileSize}px)`,
                gap: `${gapPx}px`,
              }}
            >
              {Array.from({ length: gridSize * gridSize }).map((_, i) =>
                i === accentIndex ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #A855F7 0%, #8300FF 100%)",
                      boxShadow:
                        "0 0 40px 6px rgba(123,112,207,0.55), inset 0 2px 8px rgba(255,255,255,0.4)",
                    }}
                  />
                ) : (
                  <div
                    key={i}
                    className="rounded-xl border border-[#7b70cf]/20 bg-white/40"
                    style={{
                      boxShadow: "0 0 12px rgba(123,112,207,0.08)",
                    }}
                  />
                )
              )}
            </div>

            {/* Beams traveling randomly through the gaps */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width={gridPixelSize}
              height={gridPixelSize}
              viewBox={`0 0 ${gridPixelSize} ${gridPixelSize}`}
              style={{ overflow: "visible" }}
            >
              <defs>
                <filter id="beamGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* faint static tracks so beams have visible rails */}
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={gapLine(i)}
                  y1={0}
                  x2={gapLine(i)}
                  y2={gridPixelSize}
                  stroke="#8300FF"
                  strokeOpacity={0.08}
                  strokeWidth={2}
                />
              ))}
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1={0}
                  y1={gapLine(i)}
                  x2={gridPixelSize}
                  y2={gapLine(i)}
                  stroke="#8300FF"
                  strokeOpacity={0.08}
                  strokeWidth={2}
                />
              ))}

              {/* random traveling beams */}
              {beams.map((beam) => (
                <motion.path
                  key={beam.id}
                  d={beam.d}
                  fill="none"
                  stroke="#8300FF"
                  strokeWidth={3}
                  strokeLinecap="round"
                  filter="url(#beamGlow)"
                  strokeDasharray={`60 ${beam.length * 2}`}
                  initial={{ strokeDashoffset: beam.length, opacity: 0 }}
                  animate={{ strokeDashoffset: -beam.length, opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: beam.duration,
                    delay: beam.delay,
                    ease: "linear",
                    times: [0, 0.1, 0.85, 1],
                  }}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}