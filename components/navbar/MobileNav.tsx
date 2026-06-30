"use client";

import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
};

type MobileNavProps = {
  navLinks: NavLink[];
  onClose: () => void;
};

export default function MobileNav({ navLinks, onClose }: MobileNavProps) {
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[98%] max-w-md rounded-2xl 
        bg-white/70 dark:bg-zinc-900/70 
        backdrop-blur-xl 
        border border-white/20 dark:border-white/10 
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        <div className="flex flex-col gap-1 px-4 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="w-full text-center py-3 rounded-xl 
              text-[15px] font-medium tracking-tight
              text-zinc-700 dark:text-zinc-300 
              hover:bg-black/5 dark:hover:bg-white/2 
              hover:text-black dark:hover:text-white
              active:scale-[0.98]
              transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
