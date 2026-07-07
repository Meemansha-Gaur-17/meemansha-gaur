import Image from "next/image";
import type { Offering, OfferingsView } from "./interfaces";
import {
  configForView,
  offeringsByCategory,
  sectionsForView,
  TOPMATE_PROFILE,
} from "./constants";

function formatPrice(price: number, originalPrice?: number) {
  const current = price === 0 ? "FREE" : `₹${price}`;
  const original =
    originalPrice && originalPrice > price ? `₹${originalPrice}` : undefined;
  return { current, original };
}

function actionLabel(offering: Offering): string {
  if (offering.category === "session") return "Book session";
  if (offering.type === "Package") return "Get bundle";
  if (offering.price === 0) return "Get free";
  return "Buy";
}

function sessionMeta(offering: Offering) {
  if (offering.duration) return `${offering.duration} min session`;
  return "Video session";
}

function ExternalIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
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
  );
}

function SessionCard({ offering }: { offering: Offering }) {
  const { current, original } = formatPrice(offering.price, offering.originalPrice);

  return (
    <a
      href={offering.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl glass-card p-7 md:p-8 hover:shadow-xl hover:border-[#0a7c6e]/20 transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
    >
      <div className="min-w-0 flex-1">
        <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-[#0a7c6e] mb-3 block">
          {sessionMeta(offering)}
        </span>
        <h3 className="font-body font-semibold text-gray-900 text-xl leading-snug mb-2 group-hover:text-[#0a7c6e] transition-colors">
          {offering.title}
        </h3>
        {offering.description && (
          <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xl">
            {offering.description}
          </p>
        )}
      </div>

      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0 sm:min-w-[140px] sm:text-right">
        <div className="flex items-baseline gap-2">
          <span className="font-body font-bold text-gray-900 text-lg">{current}</span>
          {original && (
            <span className="font-body text-sm text-gray-400 line-through">{original}</span>
          )}
        </div>
        <span className="font-body text-xs font-semibold text-[#0a7c6e] inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          {actionLabel(offering)}
          <ExternalIcon />
        </span>
      </div>
    </a>
  );
}

function ProductCard({ offering }: { offering: Offering }) {
  const { current, original } = formatPrice(offering.price, offering.originalPrice);

  return (
    <a
      href={offering.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl glass-card overflow-hidden hover:shadow-xl hover:border-[#0a7c6e]/20 transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-16/10 bg-[#0a7c6e]/5 overflow-hidden">
        {offering.image ? (
          <Image
            src={offering.image}
            alt={offering.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#0a7c6e]/10 to-[#f59e0b]/10">
            <span className="font-display text-5xl font-light text-[#0a7c6e]/25 select-none">
              {offering.type === "Package" ? "◆" : "◈"}
            </span>
          </div>
        )}

      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-[#0a7c6e] mb-3">
          {offering.type === "Package" ? "Bundle" : "Digital resource"}
        </span>

        <h3 className="font-body font-semibold text-gray-900 text-lg leading-snug mb-2 group-hover:text-[#0a7c6e] transition-colors">
          {offering.title}
        </h3>

        {offering.description && (
          <p className="font-body text-sm text-gray-500 leading-relaxed mb-5 line-clamp-2">
            {offering.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="font-body font-bold text-gray-900">{current}</span>
            {original && (
              <span className="font-body text-sm text-gray-400 line-through">{original}</span>
            )}
          </div>
          <span className="font-body text-xs font-semibold text-[#0a7c6e] inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {actionLabel(offering)}
            <ExternalIcon />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function OfferingsDesktop({ view }: { view: OfferingsView }) {
  const { eyebrow, heading, description, sectionId } = configForView(view);
  const sections = sectionsForView(view);

  return (
    <section id={sectionId} className="py-28 section-alt pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            {eyebrow}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
                {heading}
              </div>
              {description && (
                <p className="font-body text-sm text-gray-500 leading-relaxed mt-4">
                  {description}
                </p>
              )}
            </div>
            <a
              href={TOPMATE_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold text-[#0a7c6e] hover:text-[#085f56] transition-colors inline-flex items-center gap-2 shrink-0 sm:mt-3"
            >
              View all on Topmate
              <ExternalIcon />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          {sections.map((section) => {
            const items = offeringsByCategory(section.id, view);
            if (items.length === 0) return null;

            return (
              <div key={section.id}>
                {view !== "sessions" && (
                  <div className="mb-10">
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-4">
                      {section.eyebrow}
                    </p>
                    <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-gray-900 mb-3">
                      {section.heading}
                    </h3>
                    <p className="font-body text-sm text-gray-500 max-w-2xl leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                )}

                {section.id === "session" ? (
                  <div className="flex flex-col gap-4">
                    {items.map((offering) => (
                      <SessionCard key={offering.id} offering={offering} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {items.map((offering) => (
                      <ProductCard key={offering.id} offering={offering} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
