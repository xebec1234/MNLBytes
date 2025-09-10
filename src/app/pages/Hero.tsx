import React from "react";
import Image from "next/image";
import About from "./sections/About";
import AboutProjects from "./sections/AboutProjects";

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
        <About />
      </section>

      {/* About Projects */}
      <section
        id="projects"
        className="relative py-20 px-6 md:px-16 overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src="/hero-bg.svg"
          alt="Hero Background"
          fill
          priority
          className="absolute inset-0 -z-10 object-cover object-center opacity-30 scale-105 sm:scale-100 transition-all duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-transparent to-white" />

        {/* Content */}
        <AboutProjects />
      </section>

      {/* Contact */}
      <section id="contact" className="h-screen bg-white">
        <h1>contacts</h1>
      </section>
    </div>
  );
}

export default Hero;
