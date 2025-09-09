"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative pb-1 
        ${isActive ? "text-violet-700 after:w-full" : "text-gray-800 hover:text-violet-600"} 
        transition-colors 
        after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:bg-gradient-to-r after:from-violet-500 after:to-violet-700
        after:transition-all after:duration-300 
        ${!isActive ? "after:w-0 hover:after:w-full" : ""}
      `}
    >
      {children}
    </Link>
  );
}
