import Image from "next/image";
import Link from "next/link";
import { meta } from "@/app/content/meta";
import { about, ABOUT_IMAGE, CARD_THEMES, CREDENTIALS_STRIP, services } from "./constants";

export default function About() {
  return (
    <section id="about" className="py-28 section-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[340px] h-[400px] md:w-[380px] md:h-[440px]">
              <div
                className="absolute inset-0 rounded-3xl bg-[#0a7c6e]"
                style={{ transform: "rotate(-7deg) translate(-6px, 10px)" }}
              />
              <div
                className="absolute inset-0 rounded-3xl bg-[#f59e0b]"
                style={{ transform: "rotate(5deg) translate(8px, -6px)" }}
              />
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                <Image
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  width={ABOUT_IMAGE.width}
                  height={ABOUT_IMAGE.height}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e]">
              {about.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900 leading-tight">
              {about.heading}
            </h2>
            <div className="flex flex-col gap-5 mt-2">
              {about.bio.map((para, i) => (
                <p key={i} className="font-body text-gray-500 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="/book"
                className="font-body text-sm font-semibold text-[#0a7c6e] hover:underline inline-flex items-center gap-1"
              >
                Get in touch
                <span aria-hidden>→</span>
              </Link>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="font-body text-sm text-gray-400">{meta.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-16 py-6 px-6 rounded-2xl section-alt border border-gray-100">
          {CREDENTIALS_STRIP.map((item) => (
            <span
              key={item}
              className="font-body text-xs font-semibold uppercase tracking-wider text-gray-500 px-4 py-2 rounded-full bg-white border border-gray-100"
            >
              {item}
            </span>
          ))}
        </div>

        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Services
          </p>
          <h3 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-gray-900 mb-10">
            How I Can Help
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const c = CARD_THEMES[i % 3];
            return (
              <div
                key={service.title}
                className="relative p-8 rounded-3xl overflow-hidden cursor-default hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
                style={{ background: c.bgGrad }}
              >
                <span
                  className="absolute -bottom-4 -right-2 font-display text-[9rem] font-light leading-none select-none pointer-events-none"
                  style={{ color: c.num }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className="w-10 h-0.5 rounded-full mb-6"
                  style={{ backgroundColor: c.rule }}
                />

                <h3 className={`font-body font-semibold text-base mb-3 relative z-10 ${c.title}`}>
                  {service.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed relative z-10"
                  style={{ color: c.desc }}
                >
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
