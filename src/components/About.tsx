"use client";

import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -70% 0px" }); // roughly 30% visible
  const controls = useAnimation();

  React.useEffect(() => {
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
        y: -80,
        scaleX: 0.3,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    }
  }, [isInView, controls]);

  return (
    <div className="p-8 h-screen flex items-center justify-center">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: -50, scaleX: 0.8 }}
        className="max-w-5xl w-full h-full flex flex-col gap-6"
        style={{ originX: 0.5 }}
      >
        {/* First container */}
        <div className="h-1/4 rounded-2xl p-8 md:p-10 shadow-soft bg-container">
          <h2 className="text-main text-[28px] md:text-6xl font-bold">Manuel Jose Pera</h2>
          <p className="text-sm md:text-xl mt-2 text-gray-600 dark:text-gray-300">
            Aspiring Software Developer
          </p>
        </div>

        {/* Second + Third containers */}
        <div className="flex-1 flex gap-6">
          <div className="flex-1 rounded-2xl p-6 shadow-soft bg-container-2">
            <h2 className="text-main text-4xl font-bold">
              Process Automation Experience
            </h2>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Left side content.
            </p>
          </div>

          <div className="flex-1 rounded-2xl p-6 shadow-soft bg-container-2">
            <h2 className="text-main text-4xl font-bold">Web & App Development</h2>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              Right side content.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
