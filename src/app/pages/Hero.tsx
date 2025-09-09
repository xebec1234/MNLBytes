import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative flex flex-col gap-1.5 items-center justify-center min-h-screen text-center px-4 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.svg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="absolute right-25 top-2/3 transform -translate-y-11">
        <Image
          src="/gear.svg"
          alt="Like Icon"
          width={220}
          height={220}
          className="drop-shadow-lg"
        />
      </div>

      <div className="absolute left-30 top-0.5 transform -translate-y-11">
        <Image
          src="/logic.svg"
          alt="Like Icon"
          width={240}
          height={240}
          className="drop-shadow-lg"
        />
      </div>

      <div className="relative flex gap-8 mt-15">
        <div className="w-37 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
          <p className="text-lg font-medium text-gray-800">Automation</p>
        </div>
        <div className="w-65 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
          <p className="text-lg font-medium text-gray-800">
            Application Development
          </p>
        </div>
        <div className="w-35 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md shadow-[8px_8px_20px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.6)]">
          <p className="text-lg font-medium text-gray-800">Security</p>
        </div>
      </div>
      <h1 className="relative text-2xl sm:text-[3.5vw] font-bold leading-[1.3]">
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
      <p className="text-5xl sm:text-xl mt-4 max-w-prose leading-snug">
        I&#39;m an aspiring software developer with experience in building web
        and <br />
        desktop applications, and automating workload processes.
      </p>

      <Link href="#about" scroll={false}>
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
      </Link>
    </section>
  );
}

export default Hero;
