import Image from "next/image";
import { content } from "../text_content";

const CARD_THEMES = [
  {
    bg: "#0a7c6e",
    bgGrad: "linear-gradient(135deg, #0a7c6e 0%, #0d9d8c 100%)",
    title: "text-white",
    desc: "rgba(255,255,255,0.78)",
    num: "rgba(255,255,255,0.10)",
    rule: "rgba(255,255,255,0.25)",
  },
  {
    bg: "#f59e0b",
    bgGrad: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    title: "text-gray-900",
    desc: "rgba(30,20,0,0.65)",
    num: "rgba(0,0,0,0.08)",
    rule: "rgba(0,0,0,0.15)",
  },
  {
    bg: "#ff6b35",
    bgGrad: "linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%)",
    title: "text-white",
    desc: "rgba(255,255,255,0.78)",
    num: "rgba(255,255,255,0.10)",
    rule: "rgba(255,255,255,0.25)",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left: stacked photo frame */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[340px] h-[400px] md:w-[380px] md:h-[440px]">
              {/* Back frame — teal, rotated left */}
              <div
                className="absolute inset-0 rounded-3xl bg-[#0a7c6e]"
                style={{ transform: "rotate(-7deg) translate(-6px, 10px)" }}
              />
              {/* Mid frame — amber, rotated right */}
              <div
                className="absolute inset-0 rounded-3xl bg-[#f59e0b]"
                style={{ transform: "rotate(5deg) translate(8px, -6px)" }}
              />
              {/* Main photo on top */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                <Image
                  src="/meemansha-about.jpg"
                  alt="Meemansha Gaur"
                  width={380}
                  height={440}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right: heading + bio */}
          <div className="flex flex-col gap-5">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e]">
              {content.about.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900 leading-tight">
              {content.about.heading}
            </h2>
            <div className="flex flex-col gap-5 mt-2">
              {content.about.bio.map((para, i) => (
                <p key={i} className="font-body text-gray-500 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={`mailto:${content.meta.email}`}
                className="font-body text-sm font-semibold text-[#0a7c6e] hover:underline"
              >
                {content.meta.email}
              </a>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="font-body text-sm text-gray-400">{content.meta.location}</span>
            </div>
          </div>
        </div>

        {/* Services Grid — bold solid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.services.map((service, i) => {
            const c = CARD_THEMES[i % 3];
            return (
              <div
                key={service.title}
                className="relative p-8 rounded-3xl overflow-hidden cursor-default hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
                style={{ background: c.bgGrad }}
              >
                {/* Giant watermark number */}
                <span
                  className="absolute -bottom-4 -right-2 font-display text-[9rem] font-light leading-none select-none pointer-events-none"
                  style={{ color: c.num }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Rule */}
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
