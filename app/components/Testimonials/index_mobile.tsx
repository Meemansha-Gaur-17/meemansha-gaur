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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [count]);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-16 section-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="mb-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-light text-gray-900">{SECTION_HEADING}</h2>
        </div>

        <div className="rounded-2xl bg-[#0a7c6e] p-6 overflow-hidden mb-5">
          <div key={active} className="animate-[fadeIn_0.5s_ease-out]">
            <blockquote className="font-body text-white/90 text-sm leading-relaxed mb-5">
              &ldquo;{current.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <p className="font-body font-semibold text-sm text-white">{current.name}</p>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <p className="font-body text-xs text-white/50">{current.date}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 min-w-2 ${
                  i === active ? "w-6 bg-white" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((item, i) => (
            <button
              key={item.name + item.date}
              type="button"
              onClick={() => goTo(i)}
              className={`snap-start shrink-0 w-[85%] max-w-xs text-left rounded-xl bg-white p-4 border transition-all ${
                active === i ? "border-[#0a7c6e]/30 shadow-sm" : "border-gray-100"
              }`}
            >
              <p className="font-body text-xs text-gray-600 leading-relaxed line-clamp-3">
                {item.text}
              </p>
              <p className="font-body text-xs font-semibold text-gray-900 mt-3">{item.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
