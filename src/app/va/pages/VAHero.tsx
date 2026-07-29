"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import VAAbout from "./sections/VAAbout";
import VATools from "./sections/VATools";
import Footer from "@/components/navigation/Footer";


function VAHero() {
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  const gearY = useTransform(scrollY, [0, 500], [0, -100]);

  const logicY = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div>
      <section
        id="go"
        className="relative flex flex-col gap-1.5 items-center justify-center min-h-screen text-center px-4 overflow-hidden"
      >
        {/* Background */}
        <motion.div
          style={{ y: bgY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src="/hero-bg.svg"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-30 sm:object-center object-right scale-105 sm:scale-100"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white" />
        </motion.div>

        {/* Gear */}
        <motion.div
          style={{ y: gearY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -right-14 bottom-2 sm:right-25 sm:top-2/3 sm:-translate-y-11"
        >
          <Image
            src="/gear.svg"
            alt="Gear Icon"
            width={220}
            height={220}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Logic */}
        <motion.div
          style={{ y: logicY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -left-10 top-2 sm:left-30 sm:top-0.5 -translate-y-11"
        >
          <Image
            src="/logic.svg"
            alt="Logic Icon"
            width={240}
            height={240}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Floating Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative gap-8 mt-15 hidden sm:flex"
        >
          <div className="w-37 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
            <p className="text-lg font-medium">Automation</p>
          </div>
          <div className="w-65 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
            <p className="text-lg font-medium">Executive Assistant</p>
          </div>
          <div className="w-35 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
            <p className="text-lg font-medium">Video Editor</p>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-[35px] sm:text-[3.5vw] font-bold leading-[1.3]"
        >
          I{" "}
          <span className="bg-linear-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            help entrepreneurs
          </span>{" "}
          and growing businesses <br />
          <span className="bg-linear-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
            improve productivity
          </span>
          .
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden z-10 sm:block text-[15px] sm:text-[20px] sm:mt-4 max-w-3xl leading-snug text-gray-600"
        >
          Through reliable virtual support and digital solutions, so you can
          focus on what matters most.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#va-about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button
            className="mt-8 px-6 py-3 rounded-2xl text-white text-lg font-medium 
            bg-linear-to-b from-[#A855F7]/70 to-[#8300FF]/70
            backdrop-blur-md border border-white/20
            shadow-lg shadow-[#0000001a]
            hover:from-[#A855F7]/80 hover:to-[#8300FF]/80
            transition-all duration-300"
          >
            Who’s Behind
          </button>
        </motion.a>
      </section>

      <VAAbout />

      <VATools />

      {/* Contact */}
      <section id="contact" className="h-[50vh] bg-[#f2f1f3]">
        <Footer />
      </section>
    </div>
  );
}

export default VAHero;
