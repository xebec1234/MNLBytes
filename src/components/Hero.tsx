"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import ThreeSphereOfBoxes from "./3DModels/ThreeSphereOfBoxes";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -70% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scaleX: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 90,
        scaleX: 0.5,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen -mt-[15vh] overflow-hidden flex items-center px-4 md:px-12"
    >
      {/* Text Block with motion */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mt-5"
        animate={controls}
        initial={{ opacity: 0, y: 50, scaleX: 0.8 }}
        style={{ originX: 1 }}
      >
        <h1 className="text-left text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold leading-tight sm:leading-[1.2]">
          <span className="bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Developing
          </span>{" "}
          Impactful
          <br />
          <span className="bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            Solutions
          </span>{" "}
          Through
          <br />
          Purposeful
          <br />
          Coding and Doing
        </h1>

        <p className="hidden lg:block text-sm sm:text-lg mt-3 leading-snug max-w-xs sm:max-w-prose">
          I&#39;m an aspiring software developer with experience in building web
          and desktop applications and automating workload processes.
        </p>

        <p className="block lg:hidden md:text-sm text-sm sm:text-lg mt-3 leading-snug max-w-xs sm:max-w-prose">
          I&#39;m an aspiring developer building web and desktop applications
          and automating workload processes.
        </p>

        <Link href="#about" scroll={false}>
          <button
            className="mt-9 sm:mt-8 px-5 sm:px-6 py-3 rounded-2xl text-white text-base sm:text-lg font-medium 
            border-2 border-transparent
            bg-[linear-gradient(181.99deg,rgba(168,85,247,0.4)_0%,rgba(131,0,255,0.2)_100%)]
            shadow-[0_0_12px_rgba(168,85,247,0.7)]
            hover:shadow-[0_0_24px_rgba(168,85,247,1)]
            transition-all duration-300 ease-in-out
            animate-bounce"
          >
            Who’s Behind
          </button>
        </Link>
      </motion.div>

      {/* 3D Model with same animation */}
      <motion.div
        className="hidden md:block absolute right-[-8%] top-0 w-[55%] h-full z-10"
        animate={controls}
        initial={{ opacity: 0, y: 90, scaleX: 0.8 }}
        style={{ originX: 0.1 }}
      >

          <ThreeSphereOfBoxes />

      </motion.div>
    </section>
  );
};

export default Hero;
