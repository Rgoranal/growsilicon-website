"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 lg:px-10 py-2">

        <Image
          src="/logo_3.png"
          alt="Growsilicon"
          width={240}
          height={70}
          className="w-[180px] sm:w-[220px] lg:w-[260px] h-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col px-5 py-4 gap-4 text-white font-medium">
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/careers" onClick={() => setMenuOpen(false)}>Careers</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}