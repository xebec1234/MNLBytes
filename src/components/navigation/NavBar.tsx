// src/components/navigation/NavBar.tsx
"use client";

import NavLink from "./NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const seLinks = [
  { href: "#go", label: "Go" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Project" },
  { href: "#contact", label: "Contact" },
];

const vaLinks = [
  { href: "#va-go", label: "Home" },
  { href: "#va-about", label: "About" },
  { href: "#va-tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isVA = pathname.startsWith("/va");
  const links = isVA ? vaLinks : seLinks;

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%]
      backdrop-blur-md shadow-lg rounded-2xl px-8 py-3 z-50 transition-colors duration-300
      ${isVA ? "bg-teal-50/40" : "bg-white/30"}`}
    >
      <div className="flex items-center justify-between">
        <Link
          href={isVA ? "/va" : "/"}
          className={"text-xl font-bold text-violet-700"}
        >
          MNLBytes{isVA ? " · VA" : ""}
        </Link>

        <div className="hidden md:flex space-x-10 font-medium">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
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
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}