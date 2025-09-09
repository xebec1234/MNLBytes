"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPageLink = !href.startsWith("#"); // true for /portfolio, false for #about
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isPageLink) {
      // For normal Next.js routes
      setIsActive(pathname === href);
    } else {
      // For anchor links (#about, #contact)
      const sectionId = href.replace("#", "");
      const section = document.getElementById(sectionId);

      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsActive(true);
            } else {
              setIsActive(false);
            }
          });
        },
        { threshold: 0.6 } // 60% of section visible
      );

      observer.observe(section);
      return () => observer.disconnect();
    }
  }, [pathname, href, isPageLink]);

  return (
    <Link
      href={href}
      className={`
        relative pb-1 transition-colors
        ${isActive ? "text-violet-700 after:w-full" : "hover:text-violet-600"}
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
