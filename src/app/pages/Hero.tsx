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

function Hero() {
  return (
    <div>
      <section
        id="go"
        className="relative flex flex-col gap-1.5 items-center justify-center min-h-screen text-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.svg"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-30 sm:object-center object-right scale-205 sm:scale-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="absolute -right-14 bottom-2 sm:right-25 sm:top-2/3 sm:-translate-y-11">
          <Image
            src="/gear.svg"
            alt="Like Icon"
            width={220}
            height={220}
            className="drop-shadow-lg"
          />
        </div>

        <div className="absolute -left-10 top-2 sm:left-30 sm:top-0.5 -translate-y-11">
          <Image
            src="/logic.svg"
            alt="Like Icon"
            width={240}
            height={240}
            className="drop-shadow-lg"
          />
        </div>

        <div className="relative gap-8 mt-15 hidden sm:flex">
          <div className="w-37 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
            <p className="text-lg font-medium ">Automation</p>
          </div>
          <div className="w-65 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
            <p className="text-lg font-medium ">Application Development</p>
          </div>
          <div className="w-35 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
            <p className="text-lg font-medium ">Security</p>
          </div>
        </div>
        <h1 className="relative text-[35px] sm:text-[3.5vw] font-bold leading-[1.3]">
          <span className="bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Developing{" "}
          </span>
          Impactful{" "}
          <span className="bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Solutions
          </span>{" "}
          Through
          <br />
          Purposeful Coding and Doing
        </h1>
        <p className="hidden sm:block text-[15px] sm:text-[20px] sm:mt-4 max-w-prose leading-snug">
          I&#39;m an aspiring software developer with experience in building web
          and <br />
          desktop applications, and automating workload processes.
        </p>

        <a href="#about">
          <button
            className="mt-8 px-6 py-3 rounded-2xl text-white text-lg font-medium 
            bg-gradient-to-b from-[#A855F7]/70 to-[#8300FF]/70
            backdrop-blur-md border border-white/20
            shadow-lg shadow-[#0000001a]
            hover:from-[#A855F7]/80 hover:to-[#8300FF]/80
            transition-all duration-300"
          >
            Who’s Behind
          </button>
        </a>
      </section>

      {/* about section */}
      <section
        id="about"
        className="h-screen w-full flex justify-center px-4 overflow-hidden bg-[#e7ddf083]"
      >
        <div className="relative w-[80vw] h-[calc(100vh-7rem)] mt-28 bg-white/30 backdrop-blur-md rounded-t-3xl shadow-lg p-8 flex flex-col">
          <div className="absolute -right-20 top-2 sm:-right-24 sm:top-10 -translate-y-11">
            <Image
              src="/favicon.svg"
              alt="Like Icon"
              width={240}
              height={240}
              className="drop-shadow-lg"
            />
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Manuel Jose Pera</h1>
            <p className="text-lg">Bachelor of Science in Computer Science</p>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Automation */}
            <div
              className="p-6 rounded-t-2xl bg-white/40 backdrop-blur-md 
              shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)] flex flex-col h-[calc(100vh-7rem)]"
            >
              <h2 className="text-xl font-semibold text-gray-800">
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
              className="p-6 rounded-t-2xl bg-white/40 backdrop-blur-md
            shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]
            flex flex-col"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Software Development
              </h2>

              <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-6 h-[50vh]">
                {/* Desktop App */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Desktop App
                  </h3>

                  <div className="mt-3 space-y-2 overflow-hidden">
                    {desktopSkills.map((s, i) => (
                      <SkillBar key={i} name={s.name} level={s.level} />
                    ))}
                  </div>
                </div>

                {/* Web App */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Web App</h3>
                  <div className="space-y-2 overflow-hidden">
                    {webSkills.map((s, i) => (
                      <SkillBar key={i} name={s.name} level={s.level} />
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Database</h3>
                  <div className="space-y-2 overflow-hidden">
                    {databaseSkills.map((s, i) => (
                      <SkillBar key={i} name={s.name} level={s.level} />
                    ))}
                  </div>
                </div>

                {/* ORM */}
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">ORM</h3>
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
      </section>

      <section id="contact" className="h-screen bg-white">
        <h1>contacts</h1>
      </section>
    </div>
  );
}

export default Hero;
