import Image from "next/image";
import { meta } from "@/app/content/meta";
import {
  FLOATING_BADGE,
  hero,
  PROFILE_IMAGE,
  STAT_COLORS,
  STATUS_BADGE,
} from "./constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#fafafa] dot-pattern flex items-center pt-20 overflow-hidden">
      <div className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full bg-[#0a7c6e]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#f59e0b]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-[#ff6b35]/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e]">
              {hero.eyebrow}
            </p>

            <div className="leading-none">
              <h1 className="font-display text-[clamp(4rem,10vw,7.5rem)] font-light text-gray-900 leading-[0.9]">
                {meta.firstName}
              </h1>
              <h1 className="font-display text-[clamp(4rem,10vw,7.5rem)] font-light text-gray-900 leading-[0.9]">
                {meta.lastName}
                <span className="text-[#0a7c6e]">.</span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-1 rounded-full bg-[#f59e0b]" />
              <p className="font-body text-sm text-gray-400 uppercase tracking-widest">
                {meta.title}
              </p>
            </div>

            <p className="font-body text-lg text-gray-500 leading-relaxed max-w-md">
              {meta.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={hero.ctaPrimary.href}
                className="font-body font-semibold text-sm bg-[#0a7c6e] text-white px-8 py-4 rounded-full hover:bg-[#085f56] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                {hero.ctaPrimary.label}
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="font-body font-semibold text-sm border-2 border-[#ff6b35] text-[#ff6b35] px-8 py-4 rounded-full hover:bg-[#ff6b35] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>

            <div className="flex gap-10 pt-2 border-t border-gray-100">
              {hero.stats.map((stat, i) => (
                <div key={stat.label} className="pt-6">
                  <p
                    className="font-display text-4xl font-semibold leading-none"
                    style={{ color: STAT_COLORS[i] }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-gray-400 uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-[#0a7c6e]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-[520px] h-[520px] rounded-full border border-[#f59e0b]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px]">
              <div className="w-full h-full rounded-full border-4 border-[#0a7c6e]/20 overflow-hidden shadow-2xl shadow-[#0a7c6e]/10">
                <Image
                  src={PROFILE_IMAGE.src}
                  alt={PROFILE_IMAGE.alt}
                  width={PROFILE_IMAGE.width}
                  height={PROFILE_IMAGE.height}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -left-6 md:-left-10 glass-card rounded-2xl px-5 py-4 flex items-center gap-3 border-l-4 border-l-[#ff6b35]">
                <div className="w-10 h-10 rounded-full bg-[#ff6b35]/15 flex items-center justify-center shrink-0 text-xl">
                  {FLOATING_BADGE.emoji}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-gray-900">
                    {FLOATING_BADGE.title}
                  </p>
                  <p className="font-body text-xs text-gray-400">
                    {FLOATING_BADGE.subtitle}
                  </p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-2 md:-right-6 glass-teal rounded-2xl px-4 py-3">
                <p className="font-body text-xs font-bold text-white/60 uppercase tracking-wider">
                  {STATUS_BADGE.label}
                </p>
                <p className="font-body text-sm font-semibold text-white mt-0.5">
                  {STATUS_BADGE.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
