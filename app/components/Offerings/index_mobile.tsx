import Image from "next/image";
import type { Offering, OfferingCategory } from "./interfaces";
import {
  offeringSections,
  offerings,
  SECTION_HEADING,
  TOPMATE_PROFILE,
} from "./constants";

function formatPrice(price: number, originalPrice?: number) {
  const current = price === 0 ? "FREE" : `₹${price}`;
  const original =
    originalPrice && originalPrice > price ? `₹${originalPrice}` : undefined;
  return { current, original };
}

function offeringsByCategory(category: OfferingCategory) {
  return offerings.filter((offering) => offering.category === category);
}

export default function OfferingsMobile() {
  return (
    <section id="offerings" className="py-16 section-alt">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Offerings
          </p>
          <h2 className="font-display text-3xl font-light text-gray-900 mb-4">
            {SECTION_HEADING}
          </h2>
          <a
            href={TOPMATE_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold text-[#0a7c6e] inline-flex items-center gap-1.5 min-h-11"
          >
            View all on Topmate →
          </a>
        </div>

        <div className="flex flex-col gap-12">
          {offeringSections.map((section) => {
            const items = offeringsByCategory(section.id);
            if (items.length === 0) return null;

            return (
              <div key={section.id}>
                <div className="mb-5 pb-4 border-b border-gray-200">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400 mb-2">
                    {section.eyebrow}
                  </p>
                  <h3 className="font-display text-xl font-light text-gray-900 mb-2">
                    {section.heading}
                  </h3>
                  <p className="font-body text-xs text-gray-500 leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {items.map((offering) => {
                    const { current, original } = formatPrice(
                      offering.price,
                      offering.originalPrice,
                    );

                    if (section.id === "session") {
                      return (
                        <a
                          key={offering.id}
                          href={offering.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-xl bg-white border border-gray-100 p-5 active:bg-gray-50"
                        >
                          <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-[#0a7c6e] mb-2 block">
                            {offering.duration ? `${offering.duration} min` : "Video session"}
                          </span>
                          <h4 className="font-body font-semibold text-sm text-gray-900 mb-1">
                            {offering.title}
                          </h4>
                          {offering.description && (
                            <p className="font-body text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                              {offering.description}
                            </p>
                          )}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                            <div className="flex items-baseline gap-2">
                              <span className="font-body font-bold text-gray-900">{current}</span>
                              {original && (
                                <span className="font-body text-xs text-gray-400 line-through">
                                  {original}
                                </span>
                              )}
                            </div>
                            <span className="font-body text-xs font-semibold text-[#0a7c6e]">
                              Book →
                            </span>
                          </div>
                        </a>
                      );
                    }

                    return (
                      <a
                        key={offering.id}
                        href={offering.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-4 rounded-xl bg-white border border-gray-100 p-4 active:bg-gray-50"
                      >
                        <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-[#0a7c6e]/5">
                          {offering.image ? (
                            <Image
                              src={offering.image}
                              alt={offering.title}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[#0a7c6e]/30 text-2xl">
                              ◈
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-body font-semibold text-sm text-gray-900 leading-snug mb-1">
                            {offering.title}
                          </h4>
                          <div className="flex items-baseline gap-2">
                            <span className="font-body font-bold text-sm text-gray-900">
                              {current}
                            </span>
                            {original && (
                              <span className="font-body text-xs text-gray-400 line-through">
                                {original}
                              </span>
                            )}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
