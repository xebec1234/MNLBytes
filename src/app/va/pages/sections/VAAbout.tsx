// src/app/va/pages/sections/VAAbout.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  BookOpen,
  Star,
  Calendar,
  Globe,
  MessageCircle,
  Clock,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const features = [
  {
    icon: User,
    text: "I help entrepreneurs stay organized, automate workflows, and create content that drives productivity.",
  },
  {
    icon: BookOpen,
    text: "With experience in administration, automation, and digital tools, I build efficient systems that save time and keep businesses running smoothly.",
  },
  {
    icon: Star,
    text: "Expect reliable communication, quality work, and on-time delivery—so you can focus on growing your business.",
  },
];

const quickFacts = [
  { icon: Calendar, label: "Years of experience", value: "1" },
  {
    icon: Globe,
    label: "English proficiency",
    value: "Bilingual",
  },
  {
    icon: MessageCircle,
    label: "Languages",
    value: "English and Filipino",
  },
  {
    icon: Clock,
    label: "Primary work style",
    value: "Async / Real-time / Hybrid",
  },
];

const VAAbout = () => {
  return (
    <section
      id="va-about"
      className="relative w-full py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Top row: About content + Image */}
        <div className="relative grid md:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          {/* Left: About content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative z-10 flex flex-col items-start text-left md:pl-16"
          >
            <h2 className="text-[42px] md:text-[52px] font-bold leading-[1.1] text-[#1a1533]">
              About{" "}
              <span className="bg-linear-to-b from-[#A855F7] to-[#8300FF] bg-clip-text text-transparent">
                me.
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-linear-to-r from-[#A855F7] to-[#8300FF] mt-4 mb-8" />

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-[#1a1533] mb-8"
            >
              Manuel Jose Pera
            </motion.p>

            <div className="flex flex-col gap-8 w-full">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.text}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[#f3e8fd] flex items-center justify-center">
                    <feature.icon size={20} className="text-[#8300FF]" />
                  </div>
                  <div>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image, full size, overflowing behind content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-0 md:absolute md:-right-24 md:top-1/2 md:-translate-y-1/2 w-full md:w-[clamp(380px,42vw,500px)] pointer-events-none"
          >
            <Image
              src="/me.svg"
              alt="Manuel Jose Pera"
              width={500}
              height={801}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Bottom row: Quick Facts, full width, landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full rounded-3xl bg-white border border-slate-200/60 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.06)] p-7"
        >
          <h3 className="text-xs font-bold tracking-widest text-[#8300FF] uppercase mb-6">
            Quick Facts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-2 md:border-l md:border-slate-100 md:pl-5 md:first:border-l-0 md:first:pl-0"
              >
                <div className="flex items-center gap-2">
                  <fact.icon size={16} className="text-[#8300FF] shrink-0" />
                  <span className="text-xs text-slate-500">{fact.label}</span>
                </div>
                <span className="text-sm font-semibold text-[#8300FF]">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VAAbout;
