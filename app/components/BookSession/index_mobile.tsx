"use client";

import { useState, type FormEvent } from "react";
import { meta } from "@/app/content/meta";
import { BOOK_SESSION_COPY } from "./constants";

export default function BookSessionMobile() {
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
    <section id="book" className="py-16 section-white pt-24">
      <div className="max-w-3xl mx-auto px-5">
        <div className="mb-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            {BOOK_SESSION_COPY.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-light text-gray-900 mb-3">
            {BOOK_SESSION_COPY.heading}
          </h1>
          <p className="font-body text-sm text-gray-500 leading-relaxed">
            {BOOK_SESSION_COPY.description}
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-[#fafafa] border border-gray-100 p-6 text-center">
            <p className="font-body text-sm text-gray-700 leading-relaxed">
              Your email client should open shortly. If it doesn&apos;t, reach out at{" "}
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
            className="rounded-2xl bg-[#fafafa] border border-gray-100 p-5 flex flex-col gap-5"
          >
            <label className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-gray-400">
                Full name
              </span>
              <input
                name="name"
                type="text"
                required
                className="font-body text-base rounded-xl border border-gray-200 px-4 py-3.5 min-h-11 focus:outline-none focus:border-[#0a7c6e]"
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
                className="font-body text-base rounded-xl border border-gray-200 px-4 py-3.5 min-h-11 focus:outline-none focus:border-[#0a7c6e]"
                placeholder="you@email.com"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-gray-400">
                Reason for reaching out
              </span>
              <textarea
                name="reason"
                required
                rows={4}
                className="font-body text-base rounded-xl border border-gray-200 px-4 py-3.5 focus:outline-none focus:border-[#0a7c6e] resize-none"
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
                className="font-body text-base rounded-xl border border-gray-200 px-4 py-3.5 min-h-11 focus:outline-none focus:border-[#0a7c6e]"
                placeholder="e.g. Weekday evenings"
              />
            </label>
            <button
              type="submit"
              className="font-body font-semibold text-sm bg-[#0a7c6e] text-white px-6 py-3.5 rounded-full min-h-11 w-full"
            >
              Send booking request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
