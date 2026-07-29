"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function ModeSwitch() {
  const pathname = usePathname();
  const isVA = pathname.startsWith("/va");

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-60"
    >
      <Link
        href={isVA ? "/" : "/va"}
        className={`flex flex-col items-center gap-2 px-3 py-5 rounded-l-2xl
        border border-white/40 backdrop-blur-md shadow-lg
        transition-all duration-300 hover:pr-5 text-white
        ${isVA ? "bg-violet-600/80 hover:bg-violet-600" : "bg-violet-600/80 hover:bg-violet-600"}`}
      >
        <span className="text-xs font-bold tracking-widest [writing-mode:vertical-rl]">
          {isVA ? "SWITCH TO SE" : "SWITCH TO VA"}
        </span>
      </Link>
    </motion.div>
  );
}