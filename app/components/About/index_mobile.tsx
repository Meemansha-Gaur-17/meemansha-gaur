import Image from "next/image";
import Link from "next/link";
import { meta } from "@/app/content/meta";
import { about, ABOUT_IMAGE, CARD_THEMES, CREDENTIALS, services } from "./constants";

export default function AboutMobile() {
  return (
    <section id="about" className="py-16 section-white">
      <div className="max-w-7xl mx-auto px-5">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-4">
          {about.eyebrow}
        </p>
        <h2 className="font-display text-3xl font-light text-gray-900 leading-tight mb-6">
          {about.heading}
        </h2>

        <div className="relative w-full max-w-xs mx-auto aspect-[4/5] mb-8">
          <div
            className="absolute inset-0 rounded-2xl bg-[#0a7c6e]"
            style={{ transform: "rotate(-5deg) translate(-4px, 6px)" }}
          />
          <div
            className="absolute inset-0 rounded-2xl bg-[#f59e0b]"
            style={{ transform: "rotate(4deg) translate(5px, -4px)" }}
          />
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={ABOUT_IMAGE.src}
              alt={ABOUT_IMAGE.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 85vw, 320px"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          {about.bio.map((para, i) => (
            <p key={i} className="font-body text-sm text-gray-500 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-gray-100">
          <Link
            href="/book"
            className="font-body text-sm font-semibold text-[#0a7c6e] min-h-11 flex items-center"
          >
            Get in touch →
          </Link>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="font-body text-sm text-gray-400">{meta.location}</span>
        </div>

        <div className="flex flex-col divide-y divide-gray-100 mb-10">
          {CREDENTIALS.map((item) => (
            <div key={item.title} className="py-3.5">
              <p className="font-body text-sm font-medium text-gray-900">{item.title}</p>
              {item.subtitle && (
                <p className="font-body text-xs text-gray-400 mt-0.5">{item.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mb-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Services
          </p>
          <h3 className="font-display text-2xl font-light text-gray-900">How I Can Help</h3>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((service, i) => {
            const c = CARD_THEMES[i % 3];
            return (
              <div
                key={service.title}
                className="relative p-6 rounded-2xl overflow-hidden"
                style={{ background: c.bgGrad }}
              >
                <div
                  className="w-8 h-0.5 rounded-full mb-4"
                  style={{ backgroundColor: c.rule }}
                />
                <h3 className={`font-body font-semibold text-sm mb-2 ${c.title}`}>
                  {service.title}
                </h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: c.desc }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
