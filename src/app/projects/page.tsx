"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-lg w-[80vw] sm:w-[50vw] bg-white/40 border border-white/30 shadow-xl rounded-2xl p-10 flex flex-col items-center neumorphism"
      >
        <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent mb-6">
          🚧 Under Development 🚧
        </h1>

        {/* Fun Online GIF */}
        <div className="w-60 h-60 relative mb-6">
          <Image
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2U0MjRuMTk0M2t4NjE5c2E4cm00M3czaTc2bTIxZ3N3bmh6Y2xqNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iIAYEKtLy0yG7TacbC/giphy.gif"
            alt="Under Construction"
            fill
            className="object-contain rounded-xl"
          />
        </div>

        <p className="text-lg text-center" style={{ color: "#7b70cf" }}>
          This page is still being built. Please check back soon!
        </p>
         {/* 🔙 Back Button at bottom */}
        <Link
          href="/"
          className="mt-4 px-6 py-2 rounded-xl text-white text-sm font-medium 
          bg-gradient-to-b from-[#A855F7]/70 to-[#8300FF]/70
          backdrop-blur-md border border-white/20
          shadow-lg shadow-[#0000001a]
          hover:from-[#A855F7]/80 hover:to-[#8300FF]/80
          transition-all duration-300"
        >
          ← Go Back
        </Link>
      </motion.div>
    </div>
  );
};

export default projects;
