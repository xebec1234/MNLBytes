"use client";

import NavLink from "./NavLink";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%] bg-white/30 backdrop-blur-md shadow-lg rounded-2xl px-8 py-3 z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-violet-700">
          MNLBytes
        </Link>

        <div className="hidden md:flex space-x-10 font-medium">
          <NavLink href="#go">Go</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Project</NavLink>
          {/* <NavLink href="/certificates">Certificates</NavLink> */}
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 font-medium">
          <NavLink href="#go">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Project</NavLink>
          {/* <NavLink href="/certificates">Certificates</NavLink> */}
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
