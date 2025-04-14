"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon, HomeIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const activeTheme = storedTheme || (prefersDark ? "dark" : "light");
    setIsDark(activeTheme === "dark");
    document.documentElement.classList.toggle("dark", activeTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav
      className={`fixed bottom-10 sm:top-6 sm:bottom-auto left-1/2 -translate-x-1/2 px-4 py-2 rounded-full shadow-md z-50 flex items-center space-x-6
      backdrop-blur-md bg-white/30 border border-neutral-200
      dark:backdrop-blur-xl dark:bg-black/30 dark:border-[#b1b4b7]`}
    >


      <Link href="/" className="hover:text-black dark:hover:text-white">
        <HomeIcon className="w-5 h-5" />
      </Link>
      <Link href="/about" className="text-sm font-medium">About</Link>
      <Link href="/projects" className="text-sm font-medium">Projects</Link>
      <Link href="/blogs" className="text-sm font-medium">Blogs</Link>
      <Link href="/reach" className="text-sm font-medium">Reach</Link>

      <button
        onClick={toggleTheme}
        className="ml-2 p-2 rounded-full transition-all hover:bg-neutral-200 dark:hover:bg-[#a6a9ad]"
      >
        {isDark ? (
          <MoonIcon className="w-4 h-4 text-white" />
        ) : (
          <SunIcon className="w-4 h-4 text-black" />
        )}
      </button>
    </nav>
  );
}
