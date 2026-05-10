"use client";

import { useState, useEffect } from "react";
import { content } from "../text_content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-5">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl font-medium text-[#0a7c6e] tracking-wide"
        >
          MG.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {content.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-gray-500 hover:text-[#0a7c6e] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-body text-sm font-medium bg-[#0a7c6e] text-white px-5 py-2.5 rounded-full hover:bg-[#085f56] transition-all duration-200 hover:shadow-md"
          >
            Book a Session
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
          {content.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-gray-700 hover:text-[#0a7c6e] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-body text-sm font-medium bg-[#0a7c6e] text-white px-5 py-3 rounded-full text-center"
          >
            Book a Session
          </a>
        </div>
      </div>
    </nav>
  );
}
