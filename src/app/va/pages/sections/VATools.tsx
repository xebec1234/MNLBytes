// src/app/va/pages/sections/VAServices.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LogoMarquee, { MarqueeTool } from "@/components/Marquee/LogoMarquee";
import Banner from "@/components/container/Banner";

const tools: MarqueeTool[] = [
  {
    name: "Canva",
    src: "/services/canva.svg",
    gradient: "from-[#00C4CC] to-[#7D2AE8]",
  },
  {
    name: "Excel",
    src: "/services/excel.svg",
    gradient: "from-[#1D6F42] to-[#3FA71E]",
  },
  {
    name: "Power Automate",
    src: "/services/power-automate.svg",
    gradient: "from-[#0066FF] to-[#00C2FF]",
  },
  {
    name: "Outlook",
    src: "/services/outlook.svg",
    gradient: "from-[#0072C6] to-[#00A4EF]",
  },
  {
    name: "Gmail",
    src: "/services/gmail.svg",
    gradient: "from-[#EA4335] to-[#FBBC05]",
  },
  {
    name: "Google Calendar",
    src: "/services/google-calendar.svg",
    gradient: "from-[#4285F4] to-[#34A853]",
  },
  {
    name: "Google Sheets",
    src: "/services/google-sheets.svg",
    gradient: "from-[#0F9D58] to-[#34A853]",
  },
  {
    name: "Google Slides",
    src: "/services/google-slides.svg",
    gradient: "from-[#F4B400] to-[#FBBC05]",
  },
  {
    name: "Loom",
    src: "/services/loom.svg",
    gradient: "from-[#625DF5] to-[#A78BFA]",
  },
  {
    name: "Zoom",
    src: "/services/zoom.svg",
    gradient: "from-[#2D8CFF] to-[#0B5CFF]",
  },
  {
    name: "Slack",
    src: "/services/slack.svg",
    gradient: "from-[#611F69] to-[#ECB22E]",
  },
  {
    name: "Figma",
    src: "/services/figma.svg",
    gradient: "from-[#A259FF] to-[#F24E1E]",
  },
  {
    name: "Calendly",
    src: "/services/calendly.svg",
    gradient: "from-[#006BFF] to-[#00A2FF]",
  },
  {
    name: "Asana",
    src: "/services/asana.svg",
    gradient: "from-[#F06A6A] to-[#FC636B]",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const VATools = () => {
  return (
    <section
      id="va-tools"
      className="relative w-full py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/hero-bg.svg"
          alt="Section Background"
          fill
          className="object-cover opacity-30 sm:object-center object-right scale-105 sm:scale-100"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white" />
      </motion.div>

      <Banner
        badge="How I Work"
        headingLine1="The right tools"
        headingLine2="for every task"
        subtext="Whether it's executive support, workflow automation, or video editing, I use reliable platforms that help businesses stay productive and efficient."
        ctaLabel="Start a Project"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <LogoMarquee tools={tools} />
      </motion.div>
    </section>
  );
};

export default VATools;
