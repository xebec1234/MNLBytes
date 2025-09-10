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
        <p className="hidden z-10 sm:block text-[15px] sm:text-[20px] sm:mt-4 max-w-prose leading-snug">
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
        className="h-screen sm:h-full w-full flex justify-center px-4 overflow-hidden bg-[#e7ddf083]"
      >
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
      </section>

      {/* About Projects */}
      <section id="projects" className="py-20 px-6 md:px-16 bg-[#f9f9fb]">
        <div className="max-w-6xl mx-auto space-y-24">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Featured Projects
          </h2>

          {/* Payroll */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Image
                src="/payroll-java.png"
                alt="Project 1"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Payroll Calculator App</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A simple Java Swing GUI application that helps compute employee
                salaries by applying mandatory deductions (SSS, PhilHealth,
                Pag-IBIG, Income Tax) and penalties such as late deductions. It
                also provides a donut chart visualization for a clear breakdown
                of Take-Home Pay vs. Deductions.
              </p>
              <p className="mt-4 leading-relaxed">TechStack: Java</p>
              <div className="mt-6 flex items-center gap-4">
                <p className="text-sm text-gray-600">
                  View the source code on GitHub:
                </p>
                <a
                  href="https://github.com/xebec1234/Payroll-Calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded-2xl text-white text-sm font-medium 
                  bg-gradient-to-b from-[#A855F7]/70 to-[#8300FF]/70
                  backdrop-blur-md border border-white/20
                  shadow-lg shadow-[#0000001a]
                  hover:from-[#A855F7]/80 hover:to-[#8300FF]/80
                  transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Greenline */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="flex-1">
              <Image
                src="/greenline-nextjs.png"
                alt="Project 2"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Greenline</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Greenline was built to foster learning through visual
                communication of code challenges and solutions. Inspired by
                Stack Overflow, it introduces a clean, user-friendly way to
                collaborate, highlight code issues visually, and engage with a
                coding community.
              </p>
              <p className="mt-4 leading-relaxed">
                TechStack: Nextjs, Typescript, Tailwind, Prisma, And Postgresql
              </p>
              <div className="mt-6 flex items-center gap-4">
                <p className="text-sm text-gray-600">
                  View the source code on GitHub:
                </p>
                <a
                  href="https://github.com/xebec1234/Greenline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded-2xl text-white text-sm font-medium 
                  bg-gradient-to-b from-[#A855F7]/70 to-[#8300FF]/70
                  backdrop-blur-md border border-white/20
                  shadow-lg shadow-[#0000001a]
                  hover:from-[#A855F7]/80 hover:to-[#8300FF]/80
                  transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Java Core */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Image
                src="/javacore-nextjs.png"
                alt="Project 3"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Java Core</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Java Core is a machine health monitoring dashboard designed for
                mechanical engineering specialists. It transforms traditional
                manual reporting into a streamlined, digital-first experience by
                automating report generation and providing real-time, accessible
                insights. With its modern interface, the platform enhances
                efficiency, reduces errors, and ensures that machine condition
                data is always organized and ready for decision-making.
              </p>
              <p className="mt-4 leading-relaxed">
                TechStack: Nextjs, Typescript, Tailwind, Prisma, And NeonDB
              </p>
              <div className="mt-6 flex items-center gap-4">
                <p className="text-sm text-gray-600">Private Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="h-screen bg-white">
        <h1>contacts</h1>
      </section>
    </div>
  );
}

export default Hero;
