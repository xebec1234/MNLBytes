"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NavBar from "@/components/navigation/NavBar";
import Filters from "@/components/filters/Filters";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project, allProjects } from "./Projects";

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = allProjects.filter((project) =>
    selectedFilters.length === 0
      ? true
      : selectedFilters.every((f) => project.genres.includes(f))
  );

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
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
      <div className="absolute -right-10 top-25 sm:right-3 sm:top-19 -translate-y-11 w-32 h-32 sm:w-60 sm:h-60 ">
        <Image
          src="/projects.svg"
          alt="Like Icon"
          fill
          className="drop-shadow-lg object-contain"
        />
      </div>

      {/* Container */}
      <div
        className="w-[90vw] max-w-6xl h-[80vh] mt-15 rounded-2xl bg-white/10 backdrop-blur-md
        shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]
        flex flex-col relative"
      >
        {/* Header */}
        <div className="sticky top-0 z-50">
          <div className="relative flex items-center px-6 py-4 border-b bg-white/20 backdrop-blur-md">
            <h2 className="text-xl font-semibold bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 ml-10 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2">
              <div
                onClick={() => setShowFilters((prev) => !prev)}
                className="relative w-[50vw] sm:w-[25vw] min-h-[42px] px-3 py-2 rounded-xl border border-gray-300 bg-white/70 backdrop-blur-sm flex items-center flex-wrap gap-2 cursor-text focus-within:ring-2 focus-within:ring-purple-500"
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
                          e.stopPropagation();
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

              {showFilters && (
                <div className="absolute left-0 top-full mt-3 w-full bg-white/90 backdrop-blur-md rounded-xl shadow-lg border p-4 z-50">
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
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 custom-scroll relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                  }}
                  className="cursor-pointer relative flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-gray-100"
                >
                  <div className="h-40 w-full relative">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
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

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-purple-600/5 flex items-center justify-center z-[999] p-2"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-5xl w-auto max-h-[95vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 bg-gray-200 p-1 rounded-full hover:bg-gray-300 z-10"
            >
              <X size={20} />
            </button>

            {/* Image carousel */}
            <div className="relative flex items-center justify-center bg-violet-50">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentImageIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.name}
                    width={1200}
                    height={800}
                    className="w-auto max-w-full h-auto max-h-[90vh] object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next buttons */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Description */}
            <div className="p-5 overflow-y-auto max-h-[40vh]">
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedProject.name}
              </h3>
              <p className="mt-2 text-gray-600 text-sm whitespace-pre-line">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
