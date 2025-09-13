"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "@/components/navigation/NavBar";
import Filters from "@/components/filters/Filters";
import { X } from "lucide-react"; // <-- for x button

type Projects = {
  id: number;
  name: string;
  genres: string[];
};

const allProjects: Projects[] = [
  {
    id: 1,
    name: "Inventory Web System",
    genres: ["Web App", "Next.js", "PHP"],
  },
  { id: 2, name: "Mobile Fitness Tracker", genres: ["Mobile App", "React"] },
  { id: 3, name: "Payroll Desktop", genres: ["Desktop App", "Java"] },
  { id: 4, name: "Portfolio Website", genres: ["Web App", "Next.js", "React"] },
];

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = allProjects.filter((project) =>
    selectedFilters.length === 0
      ? true
      : selectedFilters.every((f) => project.genres.includes(f))
  );

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

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

      {/* Container */}
      <div
        className="w-[90vw] max-w-6xl h-[80vh] mt-15 rounded-2xl bg-white/10 backdrop-blur-md
        shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]
        flex flex-col relative"
      >
        {/* Header */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Projects
          </h2>

          {/* Search bar with chips */}
          <div className="relative transform -translate-x-1/2 w-1/2">
            <div
              onClick={() => setShowFilters((prev) => !prev)}
              className="w-full min-h-[42px] px-3 py-2 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm flex items-center flex-wrap gap-2 cursor-text focus-within:ring-2 focus-within:ring-purple-500"
            >
              {selectedFilters.length > 0 ? (
                selectedFilters.map((filter) => (
                  <span
                    key={filter}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg text-sm bg-purple-100 text-purple-700 border border-purple-300"
                  >
                    {filter}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent toggling filter dropdown
                        removeFilter(filter);
                      }}
                      className="hover:text-purple-900"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))
              ) : (
                <span className="text-gray-400">Select filters...</span>
              )}
            </div>

            {/* Dropdown filters */}
            {showFilters && (
              <div className="absolute top-14 w-full bg-white/90 backdrop-blur-md rounded-xl shadow-lg border p-4">
                <Filters
                  selected={selectedFilters}
                  onChange={setSelectedFilters}
                />
                <div className="text-right mt-3">
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-3 py-1 rounded-md bg-purple-600 text-white text-sm font-medium hover:bg-purple-700"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Projects */}
        <div className="flex-1 overflow-y-auto px-6 py-6 custom-scroll relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-gray-100"
                >
                  <div className="h-40 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-lg font-bold">
                    IMG
                  </div>
                  <div className="p-3 bg-white text-center">
                    <p className="font-medium text-gray-700">{project.name}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No projects match your filters.
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Floating Illustration */}
      <div className="absolute right-20 top-40 sm:right-14 sm:top-16 -translate-y-11 w-32 h-32 sm:w-60 sm:h-60 ">
        <Image
          src="/projects.svg"
          alt="Like Icon"
          fill
          className="drop-shadow-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Projects;
