"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BOOK_SESSION_CTA, LOGO, nav, SCROLL_THRESHOLD } from "./constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-medium text-[#0a7c6e] tracking-wide"
        >
          {LOGO}
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-gray-500 hover:text-[#0a7c6e] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={BOOK_SESSION_CTA.href}
            className="font-body text-sm font-medium bg-[#0a7c6e] text-white px-5 py-2.5 rounded-full hover:bg-[#085f56] transition-all duration-200 hover:shadow-md"
          >
            {BOOK_SESSION_CTA.label}
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
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

      <div
        className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-out ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="border-t border-gray-100 px-6 py-6 flex flex-col gap-5">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-gray-700 hover:text-[#0a7c6e] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={BOOK_SESSION_CTA.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-medium bg-[#0a7c6e] text-white px-5 py-3 rounded-full text-center"
            >
              {BOOK_SESSION_CTA.label}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
