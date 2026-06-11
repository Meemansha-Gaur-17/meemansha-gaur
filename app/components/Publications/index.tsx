import { BACKGROUND_IMAGE, publications, PUB_COLORS, SECTION_HEADING } from "./constants";

export default function Publications() {
  return (
    <section id="publications" className="py-28 relative overflow-hidden bg-[#fafafa]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: BACKGROUND_IMAGE.opacity,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Research
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
            {SECTION_HEADING}
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {publications.map((pub, i) => {
            const color = PUB_COLORS[i % 2];
            return (
              <div
                key={i}
                className="group p-8 md:p-10 rounded-2xl bg-white border-l-4 hover:shadow-xl transition-all duration-300"
                style={{ borderLeftColor: color }}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <span
                    className="font-display text-7xl md:text-8xl font-light leading-none shrink-0 select-none pt-1"
                    style={{ color, opacity: 0.5 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span
                        className="font-body text-xs font-bold uppercase tracking-widest text-white px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: color }}
                      >
                        {pub.journal}
                      </span>
                      <span className="font-body text-xs text-gray-400">{pub.period}</span>
                    </div>

                    <h3 className="font-body font-semibold text-gray-900 text-lg leading-snug mb-3">
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-2 transition-colors"
                        style={{ color: "inherit" }}
                      >
                        {pub.title}
                      </a>
                    </h3>

                    <p className="font-body text-sm text-gray-400 mb-5 italic">
                      Supervised by {pub.supervisor}
                    </p>

                    <ul className="flex flex-col gap-2.5">
                      {pub.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="font-body text-sm text-gray-500 leading-relaxed flex gap-2.5"
                        >
                          <span
                            className="shrink-0 mt-1.5 text-xs font-bold"
                            style={{ color }}
                          >
                            ▪
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
