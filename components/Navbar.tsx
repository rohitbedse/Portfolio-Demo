"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3">
        <Link href="/" className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
          RB<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#journey" className="hover:text-white transition-colors">Journey</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="#competencies" className="hover:text-white transition-colors">Skills</Link>
          <Link
            href="mailto:rbedse81@gmail.com"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
