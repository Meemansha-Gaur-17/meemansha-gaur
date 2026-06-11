"use client";

import { useCallback, useEffect, useState } from "react";
import { SECTION_HEADING, testimonials } from "./constants";

const AUTO_ADVANCE_MS = 5000;

const PREVIEW_ACCENTS = ["#0a7c6e", "#f59e0b", "#ff6b35"];

export default function Testimonials() {
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
    <section
      id="testimonials"
      className="py-28 section-white relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Testimonials
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
            {SECTION_HEADING}
          </h2>
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-[#0a7c6e] p-10 md:p-14 overflow-hidden">
            <span className="absolute -bottom-6 -right-2 font-display text-[160px] font-light text-white/5 leading-none select-none pointer-events-none">
              &ldquo;
            </span>

            <div className="relative z-10 min-h-[280px] flex flex-col">
              <div
                key={active}
                className="flex-1 animate-[fadeIn_0.5s_ease-out]"
              >
                <blockquote className="font-body text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-4xl">
                  &ldquo;{current.text}&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-4">
                  <p className="font-body font-semibold text-white">
                    {current.name}
                  </p>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <p className="font-body text-sm text-white/50">
                    {current.date}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to testimonial ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-8 bg-white"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={prev}
                    className="w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={next}
                    className="w-11 h-11 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-4 mt-6">
            {testimonials.slice(0, 3).map((item, i) => {
              const index = i;
              const accent = PREVIEW_ACCENTS[i % PREVIEW_ACCENTS.length];
              const isActive = active === index;

              return (
                <button
                  key={item.name + item.date}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`text-left rounded-2xl bg-white p-6 transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md ${
                    isActive ? "shadow-md ring-1 ring-gray-200" : "hover:border-gray-300"
                  }`}
                  style={{
                    borderLeftWidth: "3px",
                    borderLeftColor: isActive ? accent : `${accent}99`,
                  }}
                >
                  <p className="font-body text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {item.text}
                  </p>
                  <p
                    className="font-body text-xs font-semibold mt-4"
                    style={{ color: isActive ? accent : "#111827" }}
                  >
                    {item.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
