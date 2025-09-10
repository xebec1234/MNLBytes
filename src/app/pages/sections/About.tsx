import React from "react";
import Image from "next/image";
import SkillBar from "@/components/Bar.tsx/SkillBar";

const automationSkills = [
  { name: "Excel", level: 5 },
  { name: "Power Automate", level: 6 },
  { name: "VBA", level: 4 },
  { name: "Outlook", level: 8 },
  { name: "n8n", level: 0 },
];

const desktopSkills = [
  { name: "Java", level: 6 },
  { name: "React & Electron", level: 4 },
];

const webSkills = [
  { name: "Laravel", level: 5 },
  { name: "Next.js", level: 6 },
  { name: "React", level: 5 },
];

const databaseSkills = [
  { name: "MySQL", level: 5 },
  { name: "SQLite", level: 4 },
  { name: "Neon", level: 2 },
  { name: "MongoDB", level: 3 },
];

const ormSkills = [{ name: "Prisma", level: 3 }];

const About = () => {
  return (
    <div className="relative w-[80vw] h-[calc(100vh-7rem)] mt-28 bg-white/30 backdrop-blur-md rounded-t-3xl shadow-lg p-8 flex flex-col">
      <div className="absolute -right-10 top-40 sm:-right-24 sm:top-10 -translate-y-11 w-32 h-32 sm:w-60 sm:h-60">
        <Image
          src="/favicon.svg"
          alt="Like Icon"
          fill
          className="drop-shadow-lg object-contain"
        />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Manuel Jose Pera</h1>
        <p className="text-lg">Bachelor of Science in Computer Science</p>
      </div>

      <div
        className="
        flex-1 
        flex flex-row gap-8 
        overflow-x-auto 
        md:grid md:grid-cols-2 md:overflow-x-visible
        scrollbar-hide
        "
      >
        {/* Automation */}
        <div
          className="min-w-[63vw] md:min-w-0 p-6 rounded-t-2xl bg-white/40 backdrop-blur-md 
                  shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)] flex flex-col h-[calc(100vh-7rem)]"
        >
          <h2 className="text-xl font-semibold bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Automation
          </h2>

          <div className="mt-4 space-y-4">
            {automationSkills.map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* Software Development */}
        <div
          className="min-w-[63vw] md:min-w-0 p-6 rounded-t-2xl bg-white/40 backdrop-blur-md
                  shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]
                  flex flex-col h-[calc(100vh-7rem)]"
        >
          <h2 className="text-xl font-semibold bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Software Development
          </h2>

          <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-6 h-[50vh]">
            {/* Desktop App */}
            <div>
              <h3 className="font-medium mb-2">Desktop App</h3>

              <div className="mt-3 space-y-2 overflow-hidden">
                {desktopSkills.map((s, i) => (
                  <SkillBar key={i} name={s.name} level={s.level} />
                ))}
              </div>
            </div>

            {/* Web App */}
            <div>
              <h3 className="font-medium mb-2">Web App</h3>
              <div className="space-y-2 overflow-hidden">
                {webSkills.map((s, i) => (
                  <SkillBar key={i} name={s.name} level={s.level} />
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <h3 className="font-medium mb-2">Database</h3>
              <div className="space-y-2 overflow-hidden">
                {databaseSkills.map((s, i) => (
                  <SkillBar key={i} name={s.name} level={s.level} />
                ))}
              </div>
            </div>

            {/* ORM */}
            <div>
              <h3 className="font-medium mb-2">ORM</h3>
              <div className="space-y-2 overflow-hidden">
                {ormSkills.map((s, i) => (
                  <SkillBar key={i} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
