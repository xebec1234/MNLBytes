"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("#Go");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  React.useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#Go");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const links = ["Go", "About", "Projects", "Contact"];

  // Animation variants
  const navItemVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <nav className="sticky top-0 left-0 right-0 w-full h-[15vh] z-20 shadow-md bg-transparent">
      <div className="relative flex items-center justify-between h-full px-6 lg:px-12">
        {/* Hamburger */}
        <motion.div
          className="lg:hidden flex flex-col space-y-1 cursor-pointer z-30"
          onClick={toggleMenu}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/"
            className="text-2xl font-bold text-white"
          >
            MNLBytes
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-8">
          {links.map((item, index) => {
            const hash = `#${item}`;
            const isActive = activeSection === hash;
            return (
              <motion.div
                key={item}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariant}
              >
                <Link
                  href={hash}
                  className={`transition duration-300 relative group text-xl ${
                    isActive ? "text-main" : "text-white hover:text-main"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 block w-full h-[2px] bg-main transition-transform duration-300 origin-left ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed w-screen top-[100px] bg-transparent bg-opacity-80 backdrop-blur-md py-4 flex justify-center items-center z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            className="bg-white p-6 shadow-lg w-full space-y-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-4 text-center">
              {links.map((item, index) => {
                const hash = `#${item}`;
                const isActive = activeSection === hash;
                return (
                  <motion.li
                    key={item}
                    className="relative group"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={navItemVariant}
                  >
                    <Link
                      href={hash}
                      className={`transition duration-300 ${
                        isActive ? "text-main" : "text-black hover:text-main"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                      <span
                        className={`absolute bottom-0 left-0 block w-full h-[2px] bg-main transition-transform duration-300 origin-left ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
