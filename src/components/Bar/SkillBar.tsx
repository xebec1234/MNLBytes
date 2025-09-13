"use client";
import React, { useEffect, useRef, useState } from "react";

type SkillBarProps = {
  name: string;
  level: number;
};

export default function SkillBar({ name, level }: SkillBarProps) {
  const [inView, setInView] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = barRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={barRef} className="mt-2">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{level}/10</span>
      </div>
      <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#A855F7] to-[#8300FF] rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${(level / 10) * 100}%` : "0%",
          }}
        />
      </div>
    </div>
  );
}
