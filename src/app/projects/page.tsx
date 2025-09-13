"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "@/components/navigation/NavBar";

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <NavBar />

      {/* Background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/hero-bg.svg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-30 sm:object-center object-right scale-105 sm:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </motion.div>

      {/* container */}
      <div
        className="w-[90vw] max-w-6xl h-[80vh] mt-15 rounded-2xl bg-white/10 backdrop-blur-md
        shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]
        flex flex-col"
      >
        <div className="sticky top-0 flex items-center justify-between px-6 py-6 border-b">
          <h2 className="text-xl font-semibold bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:gradient-to-b from-[#A855F7] to-[#8300FF]  outline-none"
            />
          </div>
        </div>

        <div className="absolute right-20 top-40 sm:-right-35 sm:-top-10 -translate-y-11 w-32 h-32 sm:w-60 sm:h-60">
          <Image
            src="/projects.svg"
            alt="Like Icon"
            fill
            className="drop-shadow-lg object-contain"
          />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 custom-scroll">
          {/* List of projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="relative flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-gray-100"
              >
                <div className="h-40 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                  IMG
                </div>
                <div className="p-3 bg-white text-center">
                  <p className="font-medium text-gray-700">Project {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
