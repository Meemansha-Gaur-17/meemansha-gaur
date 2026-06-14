"use client";

import { useState, type FormEvent } from "react";
import { meta } from "@/app/content/meta";
import { BOOK_SESSION_COPY, SESSION_TYPE_OPTIONS } from "./constants";

const inputClassName =
  "font-body text-base rounded-xl border border-gray-200 px-4 py-3.5 min-h-11 focus:outline-none focus:border-[#0a7c6e]";
const labelClassName =
  "font-body text-xs font-semibold uppercase tracking-wider text-gray-400";

export default function BookSessionMobile() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const sessionType = String(data.get("sessionType") ?? "");
    const message = String(data.get("message") ?? "");
    const availability = String(data.get("availability") ?? "");

    const sessionLabel =
      SESSION_TYPE_OPTIONS.find((option) => option.value === sessionType)?.label ??
      sessionType;

    const subject = encodeURIComponent(`Session request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nSession: ${sessionLabel}\nMessage: ${message}\nPreferred availability: ${availability}`,
    );
    window.location.href = `mailto:${meta.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="book" className="py-16 section-white">
      <div className="max-w-3xl mx-auto px-5">
        <div className="mb-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            {BOOK_SESSION_COPY.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-light text-gray-900 mb-3">
            {BOOK_SESSION_COPY.heading}
          </h2>
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
              <span className={labelClassName}>Name</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClassName}
                placeholder="Your full name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClassName}>Email address</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClassName}
                placeholder="you@email.com"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClassName}>Session you&apos;re interested in</span>
              <select
                name="sessionType"
                required
                defaultValue=""
                className={`${inputClassName} bg-white`}
              >
                <option value="" disabled>
                  Select a session type
                </option>
                {SESSION_TYPE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClassName}>What would you like to discuss?</span>
              <textarea
                name="message"
                required
                rows={4}
                className={`${inputClassName} resize-none`}
                placeholder="Briefly share what brings you here."
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClassName}>When works best for you?</span>
              <input
                name="availability"
                type="text"
                required
                className={inputClassName}
                placeholder="e.g. Weekday evenings, IST"
              />
            </label>
            <button
              type="submit"
              className="font-body font-semibold text-sm bg-[#0a7c6e] text-white px-6 py-3.5 rounded-full min-h-11 w-full"
            >
              Send request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
