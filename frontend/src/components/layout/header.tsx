// components/layout/header.tsx
"use client";
import { LayoutDashboard, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex items-center gap-2">
        <LayoutDashboard className="icon w-5 h-5" />
        <h1 className="text-xl font-bold">Resume Builder</h1>
      </div>

      <nav className="flex gap-6 text-sm md:text-base">
        <Link href="/" className="hover:[color:var(--link-hover)]">
          Dashboard
        </Link>
        {/* <Link href="/admin" className="hover:[color:var(--link-hover)]">
          Admin
        </Link> */}
        <Link href="/login" className="hover:[color:var(--link-hover)]">
          Login
        </Link>
        <Link href="/register" className="hover:[color:var(--link-hover)]">
          Register
        </Link>
      </nav>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-[var(--card-bg)]"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-800" />
        )}
      </button>
    </motion.header>
  );
}