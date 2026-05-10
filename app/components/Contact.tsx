import { content } from "../text_content";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0a7c6e] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-black/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-5">
            Contact
          </p>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-white mb-6 leading-tight">
            Let&apos;s Connect
          </h2>
          <p className="font-body text-white/60 text-lg leading-relaxed max-w-md mx-auto">
            Whether you&apos;re seeking therapy, a research collaboration, or a
            speaker for your event — I&apos;d love to hear from you.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href={`mailto:${content.meta.email}`}
            className="font-body font-semibold text-sm bg-white text-[#0a7c6e] px-8 py-4 rounded-full hover:bg-[#f0faf9] transition-all duration-200 hover:shadow-xl inline-flex items-center justify-center gap-2.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {content.meta.email}
          </a>
          <a
            href={`tel:${content.meta.phone}`}
            className="font-body font-semibold text-sm border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center gap-2.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {content.meta.phone}
          </a>
        </div>

        {/* Footer bar */}
        <div className="border-t border-white/15 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-sm">
            {content.meta.location}
          </p>
          <a
            href={content.meta.linkedinHref}
            className="font-body text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5"
          >
            {content.meta.linkedinLabel}
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <p className="font-body text-white/40 text-sm">
            © 2026 {content.meta.name}
          </p>
        </div>
      </div>
    </section>
  );
}
