"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutProjects = () => {
  return (
    <div className="relative max-w-6xl mx-auto space-y-24">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      {/* Payroll */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 z-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
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
      </motion.div>

      {/* Greenline */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
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
      </motion.div>

      {/* Java Core */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
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
      </motion.div>
    </div>
  );
};

export default AboutProjects;
