"use client";

import { useState } from "react";
import type { Internship } from "@/app/interfaces/content";

interface InternshipsAccordionProps {
  internships: Internship[];
}

export default function InternshipsAccordion({
  internships,
}: InternshipsAccordionProps) {
  const [open, setOpen] = useState(false);
  const label = `Clinical Training (${internships.length} placements)`;

  return (
    <div className="pt-12">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left group min-h-11 py-2"
      >
        <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 group-hover:text-[#0a7c6e] transition-colors">
          {label}
        </p>
        <span
          className={`font-body text-xl text-[#0a7c6e] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
            {internships.map((intern, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 bg-white border border-gray-100 hover:border-[#0a7c6e]/20 hover:shadow-md transition-all duration-300"
              >
                <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-2">
                  {intern.period}
                </p>
                <h4 className="font-body font-semibold text-gray-900 text-sm leading-snug mb-1.5">
                  {intern.organization}
                </h4>
                <p className="font-body text-xs text-gray-500 leading-relaxed">
                  {intern.descriptor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
