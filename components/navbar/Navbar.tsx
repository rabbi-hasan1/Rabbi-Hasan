"use client";
import { Car, Cog, Menu, UserRound, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./ModeToogle";
import NavLinks from "./Navlinks";
export default function Navbar() {
  const isLoggedIn: boolean = false;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-30 w-full  border-b dark:border-gray-800 border-gray-300 backdrop-blur-3xl  bg-white/20 dark:bg-black/60">
        <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight"
          >
            <Car />
          </Link>

          <nav className="hidden md:flex gap-8">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=" font-medium hover:text-amber-400 "
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {isLoggedIn ? (
              <UserRound
                size={21}
                className="w-auto h-auto  border rounded-lg cursor-pointer p-1.5 shadow-2xl border-black/15 dark:border-gray-800 text-blue-600"
              />
            ) : (
              <button
                onClick={() => router.push("/login")}
                className="bg-blue-500 text-white px-2 py-1.5 md:px-3 md:py-1 text-sm  md:text-base rounded-md hover:bg-blue-600 cursor-pointer transition"
              >
                Login
              </button>
            )}
            <ModeToggle />
            <Cog
              size={22}
              className=" w-auto h-auto hidden md:flex rounded-lg cursor-pointer border p-1.5 shadow-2xl border-black/15 dark:border-gray-800  text-blue-600"
            />

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center cursor-pointer rounded-lg border shadow-2xl border-black/15 dark:border-gray-800 p-1.5 py-1.5"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <MobileNav
          isOpen={open}
          navLinks={NavLinks}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
