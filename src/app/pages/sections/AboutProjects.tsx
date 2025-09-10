import React from "react";
import Image from "next/image";

const AboutProjects = () => {
  return (
    <div className="relative max-w-6xl mx-auto space-y-24">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
        Featured Projects
      </h2>

      {/* Payroll */}
      <div className="flex flex-col md:flex-row items-center gap-8 z-1">
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
            Pag-IBIG, Income Tax) and penalties such as late deductions. It also
            provides a donut chart visualization for a clear breakdown of
            Take-Home Pay vs. Deductions.
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
            Greenline was built to foster learning through visual communication
            of code challenges and solutions. Inspired by Stack Overflow, it
            introduces a clean, user-friendly way to collaborate, highlight code
            issues visually, and engage with a coding community.
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
            mechanical engineering specialists. It transforms traditional manual
            reporting into a streamlined, digital-first experience by automating
            report generation and providing real-time, accessible insights. With
            its modern interface, the platform enhances efficiency, reduces
            errors, and ensures that machine condition data is always organized
            and ready for decision-making.
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
  );
};

export default AboutProjects;
