import Image from "next/image";
import Link from "next/link";
import { meta } from "@/app/content/meta";
import { hero, PROFILE_IMAGE, STAT_COLORS } from "./constants";

export default function HeroMobile() {
  return (
    <section className="relative section-alt dot-pattern pt-24 pb-12 overflow-hidden">
      <div className="absolute top-16 right-0 w-64 h-64 rounded-full bg-[#0a7c6e]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 w-full">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="relative w-44 h-44 shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-[#0a7c6e]/15 scale-110" />
            <div className="relative w-full h-full rounded-full border-4 border-[#0a7c6e]/20 overflow-hidden shadow-xl shadow-[#0a7c6e]/10">
              <Image
                src={PROFILE_IMAGE.src}
                alt={PROFILE_IMAGE.alt}
                width={PROFILE_IMAGE.width}
                height={PROFILE_IMAGE.height}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="leading-none">
              <h1 className="font-display text-[clamp(2.75rem,12vw,3.5rem)] font-light text-gray-900 leading-[0.95]">
                {meta.firstName}
              </h1>
              <h1 className="font-display text-[clamp(2.75rem,12vw,3.5rem)] font-light text-gray-900 leading-[0.95]">
                {meta.lastName}
                <span className="text-[#0a7c6e]">.</span>
              </h1>
            </div>

            <p className="font-body text-base text-gray-500 leading-relaxed px-2">
              {meta.tagline}
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-0.5 rounded-full bg-[#f59e0b]" />
              <p className="font-body text-xs text-gray-400 uppercase tracking-widest">
                {meta.title}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-sm">
            <Link
              href={hero.ctaPrimary.href}
              className="font-body font-semibold text-sm bg-[#0a7c6e] text-white px-6 py-3.5 rounded-full text-center min-h-11 flex items-center justify-center"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="font-body font-semibold text-sm border-2 border-[#ff6b35] text-[#ff6b35] px-6 py-3.5 rounded-full text-center min-h-11 flex items-center justify-center"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full max-w-xs pt-6 border-t border-gray-100">
            {hero.stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-display text-3xl font-semibold leading-none"
                  style={{ color: STAT_COLORS[i] }}
                >
                  {stat.value}
                </p>
                <p className="font-body text-[10px] text-gray-400 uppercase tracking-wider mt-1.5 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
