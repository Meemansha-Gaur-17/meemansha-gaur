"use client";

import { useState, type FormEvent } from "react";
import { meta } from "@/app/content/meta";
import { BOOK_SESSION_COPY } from "./constants";

export default function BookSession() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const reason = String(data.get("reason") ?? "");
    const timeSlot = String(data.get("timeSlot") ?? "");

    const subject = encodeURIComponent(`Session request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nReason: ${reason}\nPreferred time: ${timeSlot}`,
    );
    window.location.href = `mailto:${meta.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="book" className="py-28 section-white pt-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            {BOOK_SESSION_COPY.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900 mb-5">
            {BOOK_SESSION_COPY.heading}
          </h1>
          <p className="font-body text-gray-500 leading-relaxed max-w-lg mx-auto">
            {BOOK_SESSION_COPY.description}
          </p>
        </div>

        {submitted ? (
          <div className="rounded-3xl glass-card p-10 text-center">
            <p className="font-body text-gray-700 leading-relaxed">
              Your email client should open shortly. If it doesn&apos;t, reach out
              directly at{" "}
              <a
                href={`mailto:${meta.email}`}
                className="text-[#0a7c6e] font-semibold hover:underline"
              >
                {meta.email}
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl glass-card p-8 md:p-10 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Full name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  className="font-body text-sm rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#0a7c6e] transition-colors"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="font-body text-sm rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#0a7c6e] transition-colors"
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-gray-400">
                Reason for reaching out
              </span>
              <textarea
                name="reason"
                required
                rows={4}
                className="font-body text-sm rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#0a7c6e] transition-colors resize-none"
                placeholder="Therapy, career guidance, speaking inquiry..."
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-gray-400">
                Preferred time slot
              </span>
              <input
                name="timeSlot"
                type="text"
                required
                className="font-body text-sm rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#0a7c6e] transition-colors"
                placeholder="e.g. Weekday evenings, Saturday morning"
              />
            </label>

            <button
              type="submit"
              className="font-body font-semibold text-sm bg-[#0a7c6e] text-white px-8 py-4 rounded-full hover:bg-[#085f56] transition-all duration-300 hover:shadow-xl self-start"
            >
              Send booking request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
