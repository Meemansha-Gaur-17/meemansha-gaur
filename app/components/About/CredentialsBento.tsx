import { CREDENTIALS } from "./constants";

export default function CredentialsBento() {
  return (
      <div className="mb-16 py-6 lg:py-8 border-y border-gray-100">
      {/* Desktop: single row, hairline vertical dividers */}
      <div className="hidden lg:flex">
        {CREDENTIALS.map((item, i) => (
          <div
            key={item.title}
            className={`flex-1 ${i > 0 ? "pl-8 border-l border-gray-100" : "pr-8"}`}
          >
            <p className="font-body text-sm font-medium text-gray-900 leading-snug">
              {item.title}
            </p>
            {item.subtitle && (
              <p className="font-body text-xs text-gray-400 mt-1 leading-snug">
                {item.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Mobile / tablet: compact vertical list */}
      <div className="lg:hidden flex flex-col divide-y divide-gray-100">
        {CREDENTIALS.map((item) => (
          <div key={item.title} className="py-4 first:pt-0 last:pb-0">
            <p className="font-body text-sm font-medium text-gray-900">{item.title}</p>
            {item.subtitle && (
              <p className="font-body text-xs text-gray-400 mt-0.5">{item.subtitle}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
