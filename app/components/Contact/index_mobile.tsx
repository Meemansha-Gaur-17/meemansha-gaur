import { meta } from "@/app/content/meta";
import { CONTACT_COPY, COPYRIGHT_YEAR } from "./constants";

export default function ContactMobile() {
  return (
    <section id="contact" className="py-16 bg-[#0a7c6e] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="mb-10 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-3">
            {CONTACT_COPY.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-light text-white mb-4 leading-tight">
            {CONTACT_COPY.heading}
          </h2>
          <p className="font-body text-white/60 text-sm leading-relaxed">
            {CONTACT_COPY.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-12">
          <a
            href={`mailto:${meta.email}`}
            className="font-body font-semibold text-sm bg-white text-[#0a7c6e] px-6 py-3.5 rounded-full min-h-11 flex items-center justify-center gap-2"
          >
            {meta.email}
          </a>
          <a
            href={`tel:${meta.phone}`}
            className="font-body font-semibold text-sm border-2 border-white/30 text-white px-6 py-3.5 rounded-full min-h-11 flex items-center justify-center gap-2"
          >
            {meta.phone}
          </a>
        </div>

        <div className="border-t border-white/15 pt-8 flex flex-col items-center gap-4 text-center">
          <p className="font-body text-white/40 text-xs">{meta.location}</p>
          <a
            href={meta.linkedinHref}
            className="font-body text-xs text-white/40 hover:text-white transition-colors"
          >
            {meta.linkedinLabel} →
          </a>
          <p className="font-body text-white/40 text-xs">
            © {COPYRIGHT_YEAR} {meta.name}
          </p>
        </div>
      </div>
    </section>
  );
}
