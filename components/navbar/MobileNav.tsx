"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "../ui/button";

type NavLink = {
  name: string;
  href: string;
};

type MobileNavProps = {
  navLinks: NavLink[];
  onClose: () => void;
  isOpen: boolean;
};

export default function MobileNav({
  navLinks,
  onClose,
  isOpen,
}: MobileNavProps) {
  const mobileNavRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!mobileNavRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileNavRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      );
    } else {
      gsap.to(mobileNavRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(mobileNavRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  return (
    <div className="fixed inset-0 z-50 h-0 bg-white md:hidden">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="absolute top-0 py-32 w-full h-screen 
        bg-white/70 dark:bg-zinc-900/70
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
"
        ref={mobileNavRef}
      >
        <div className="absolute top-8 left-8 text-xl font-serif tracking-tight text-zinc-700 dark:text-zinc-300 ">
          <p>Md Rabbi Hasan</p>
          <p className="text-sm">Reactjs Developer</p>
        </div>

        <Button
          variant="destructive"
          className="absolute top-8 right-8 rounded-full p-2"
          aria-label="Close menu"
          onClick={handleClose}
        >
          <X className="  h-5 w-5" />
        </Button>
        <div className="flex flex-col gap-1 px-4 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="w-full text-center py-3 rounded-xl
              text-2xl font-extrabold tracking-tight
              text-zinc-700 dark:text-zinc-300
               dark:hover:text-white
              active:scale-[0.98]
              transition-all duration-200"
            >
              <div className="flex flex-row gap-2 items-center justify-center transition-all duration-200  hover:text-orange-400 underline -underline-offset-8   hover:scale-125 ">
                <p className=" ">{link.name}</p>
                <ArrowUpRight className="ml-2 inline-block h-6 w-6 " />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center justify-center mt-12">
          <p>social icons </p>
          {/* <SocialIcon /> */}
        </div>
      </div>
    </div>
  );
}
