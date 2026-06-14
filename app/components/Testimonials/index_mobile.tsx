"use client";

import { useCallback, useEffect, useState } from "react";
import { SECTION_HEADING, testimonials } from "./constants";

const AUTO_ADVANCE_MS = 5000;

export default function TestimonialsMobile() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [count]);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-16 section-white relative overflow-x-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-light text-gray-900">{SECTION_HEADING}</h2>
        </div>

        <div className="rounded-2xl bg-[#0a7c6e] p-6 overflow-hidden">
          <div key={active} className="min-h-[200px] animate-[fadeIn_0.5s_ease-out]">
            <blockquote className="font-body text-white/90 text-sm leading-relaxed mb-6">
              &ldquo;{current.text}&rdquo;
            </blockquote>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-body font-semibold text-sm text-white">{current.name}</p>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <p className="font-body text-xs text-white/50">{current.date}</p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 shrink-0 ${
                    i === active ? "w-6 bg-white" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/25 text-white active:bg-white/10 transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/25 text-white active:bg-white/10 transition-colors flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <p className="font-body text-[10px] text-white/40 text-center mt-4">
            {active + 1} of {count}
          </p>
        </div>
      </div>
    </section>
  );
}
