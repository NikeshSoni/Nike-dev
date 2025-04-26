"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Home,
  User,
  LayoutDashboard,
  BookOpen,
  Image,
  Sun,
  Moon
} from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

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

  const activeStyle =
    "bg-[#fef1dc] shadow-[inset_0_0_6px_rgba(0,0,0,0.2)] text-black";

  const navItemClasses = (path: string) =>
    `flex items-center gap-2 px-3 py-1 rounded-full transition hover:bg-white/20 dark:hover:bg-white/20 ${
      pathname === path ? activeStyle : ""
    }`;

  return (
    <nav
      className="fixed bottom-10 sm:top-6 sm:bottom-auto left-1/2 -translate-x-1/2 px-6 py-2 rounded-full shadow-lg backdrop-blur-md
      bg-white/20 border border-white/30 dark:bg-white/10 dark:border-white/20 z-50 flex items-center space-x-4 text-sm text-black dark:text-white"
    >
      <Link href="/" className={navItemClasses("/")}>
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Home</span>
      </Link>

      <Link href="/about" className={navItemClasses("/about")}>
        <User className="w-4 h-4" />
        <span className="hidden sm:inline">About</span>
      </Link>

      <Link href="/projects" className={navItemClasses("/projects")}>
        <LayoutDashboard className="w-4 h-4" />
        <span className="hidden sm:inline">Work</span>
      </Link>

      {/* <Link href="/blogs" className={navItemClasses("/blogs")}>
        <BookOpen className="w-4 h-4" />
        <span className="hidden sm:inline">Blog</span>
      </Link> */}

      <Link href="/gallery" className={navItemClasses("/gallery")}>
        <Image className="w-4 h-4" />
        <span className="hidden sm:inline">Gallery</span>
      </Link>

      <button
        onClick={toggleTheme}
        className="ml-2 p-2 rounded-full hover:bg-white/20 dark:hover:bg-white/20 transition"
      >
        {isDark ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </button>
    </nav>
  );
}
