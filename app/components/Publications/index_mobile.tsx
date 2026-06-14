import { publications, PUB_COLORS, SECTION_HEADING } from "./constants";

export default function PublicationsMobile() {
  return (
    <section id="publications" className="py-16 section-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Research
          </p>
          <h2 className="font-display text-3xl font-light text-gray-900">{SECTION_HEADING}</h2>
        </div>

        <div className="flex flex-col gap-5">
          {publications.map((pub, i) => {
            const color = PUB_COLORS[i % 2];
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#fafafa] border border-gray-100 border-l-[3px]"
                style={{ borderLeftColor: color }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className="font-body text-[10px] font-bold uppercase tracking-widest text-white px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: color }}
                  >
                    {pub.journal}
                  </span>
                  <span className="font-body text-[10px] text-gray-400">{pub.period}</span>
                </div>
                <h3 className="font-body font-semibold text-gray-900 text-sm leading-snug mb-2">
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    {pub.title}
                  </a>
                </h3>
                <p className="font-body text-xs text-gray-400 mb-3 italic">
                  Supervised by {pub.supervisor}
                </p>
                <ul className="flex flex-col gap-2">
                  {pub.highlights.map((h, j) => (
                    <li key={j} className="font-body text-xs text-gray-500 flex gap-2">
                      <span className="shrink-0 font-bold text-[10px]" style={{ color }}>
                        ▪
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
