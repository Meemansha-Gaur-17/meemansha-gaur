import {
  CURRENT_THEMES,
  experience,
  internships,
  INTERN_COLORS,
  INTERN_GRADS,
  PAST_COLORS,
  SECTION_HEADING,
  TIMELINE_GRADIENT,
} from "./constants";

export default function Experience() {
  const current = experience.filter((e) => e.current);
  const past = experience.filter((e) => !e.current);
  const [big, ...smalls] = current;

  return (
    <section id="experience" className="py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Experience
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
            {SECTION_HEADING}
          </h2>
        </div>

        <div className="mb-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-8">
            Currently
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            {big && (
              <div
                className="md:w-[58%] shrink-0 relative rounded-3xl p-9 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
                style={{ background: CURRENT_THEMES[0].grad, minHeight: "420px" }}
              >
                <span
                  className="absolute -bottom-4 -right-2 font-display font-light leading-none select-none pointer-events-none"
                  style={{ color: CURRENT_THEMES[0].wmColor, fontSize: "9rem" }}
                >
                  {big.company.split(" ")[0].toUpperCase()}
                </span>

                <div className="flex items-center justify-between mb-auto">
                  <span
                    className="font-body text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: CURRENT_THEMES[0].badgeBg, color: CURRENT_THEMES[0].subColor }}
                  >
                    {big.period.split("–")[0].trim()}
                  </span>
                  <span
                    className={`font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${CURRENT_THEMES[0].titleClass}`}
                    style={{ backgroundColor: CURRENT_THEMES[0].badgeBg }}
                  >
                    ● Live
                  </span>
                </div>

                <div className="relative z-10 mt-10 mb-5">
                  <h3 className={`font-body font-bold text-2xl leading-snug mb-2 ${CURRENT_THEMES[0].titleClass}`}>
                    {big.role}
                  </h3>
                  <p className="font-body text-sm font-medium" style={{ color: CURRENT_THEMES[0].subColor }}>
                    {big.company}{big.location ? ` · ${big.location}` : ""}
                  </p>
                </div>

                <div className="w-full h-px mb-6" style={{ backgroundColor: CURRENT_THEMES[0].lineColor }} />

                <ul className="flex flex-col gap-3 relative z-10">
                  {big.highlights.map((h, j) => (
                    <li key={j} className="font-body text-sm leading-relaxed flex gap-2.5">
                      <span className="shrink-0 mt-1 font-bold" style={{ color: CURRENT_THEMES[0].bulletColor }}>▪</span>
                      <span style={{ color: CURRENT_THEMES[0].subColor }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex-1 flex flex-col gap-5">
              {smalls.map((exp, i) => {
                const c = CURRENT_THEMES[i + 1];
                return (
                  <div
                    key={i}
                    className="flex-1 relative rounded-3xl p-7 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                    style={{ background: c.grad }}
                  >
                    <span
                      className="absolute -bottom-2 -right-2 font-display font-light leading-none select-none pointer-events-none"
                      style={{ color: c.wmColor, fontSize: "5rem" }}
                    >
                      {exp.company.split(" ")[0].toUpperCase()}
                    </span>

                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-body text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{ backgroundColor: c.badgeBg, color: c.subColor }}
                      >
                        {exp.period.split("–")[0].trim()}
                      </span>
                      <span
                        className={`font-body text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${c.titleClass}`}
                        style={{ backgroundColor: c.badgeBg }}
                      >
                        ● Live
                      </span>
                    </div>

                    <div className="relative z-10 mb-3">
                      <h3 className={`font-body font-bold text-lg leading-snug mb-1 ${c.titleClass}`}>
                        {exp.role}
                      </h3>
                      <p className="font-body text-sm" style={{ color: c.subColor }}>
                        {exp.company}{exp.location ? ` · ${exp.location}` : ""}
                      </p>
                    </div>

                    <div className="w-full h-px mb-4" style={{ backgroundColor: c.lineColor }} />

                    <ul className="flex flex-col gap-2 relative z-10">
                      {exp.highlights.slice(0, 2).map((h, j) => (
                        <li key={j} className="font-body text-xs leading-relaxed flex gap-2">
                          <span className="shrink-0 mt-0.5 font-bold" style={{ color: c.bulletColor }}>▪</span>
                          <span style={{ color: c.subColor }}>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-6 pt-12 border-t border-gray-200">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-10">
            Previous Roles
          </p>

          <div className="relative">
            <div
              className="absolute hidden md:block top-2 bottom-0 w-0.5 rounded-full left-50"
              style={{ background: TIMELINE_GRADIENT }}
            />

            <div className="flex flex-col gap-8">
              {past.map((exp, i) => {
                const color = PAST_COLORS[i % PAST_COLORS.length];
                return (
                  <div
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-[11.5rem_2rem_1fr] md:items-start gap-2 md:gap-x-4 group"
                  >
                    <div className="md:text-right md:pr-2 pt-0 md:pt-1.5">
                      <time className="font-body text-xs text-gray-400 leading-snug block max-w-46 md:ml-auto">
                        {exp.period}
                      </time>
                    </div>

                    <div className="hidden md:flex items-start justify-center pt-1.5">
                      <div
                        className="relative z-10 w-4 h-4 rounded-full border-[3px] border-white shadow-md group-hover:scale-125 transition-transform duration-200"
                        style={{ backgroundColor: color }}
                      />
                    </div>

                    <div
                      className="min-w-0 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
                      style={{
                        background: `linear-gradient(to right, ${color}12 0%, #ffffff 45%)`,
                        borderLeft: `3px solid ${color}`,
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                        <div>
                          <h3 className="font-body font-semibold text-gray-900 text-base">
                            {exp.role}
                          </h3>
                          <p className="font-body text-sm font-medium mt-0.5" style={{ color }}>
                            {exp.company}{exp.location ? ` · ${exp.location}` : ""}
                          </p>
                        </div>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="font-body text-sm text-gray-500 flex gap-2.5">
                            <span className="shrink-0 mt-1.5 text-[10px] font-bold" style={{ color }}>▪</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-200">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-8">
            Clinical Internships
          </p>
          <div className="flex flex-col gap-5">
            {internships.map((intern, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="md:w-52 shrink-0 p-7 flex flex-col justify-between"
                  style={{ background: INTERN_GRADS[i % INTERN_GRADS.length] }}
                >
                  <p className="font-body text-xs text-white/60 uppercase tracking-widest mb-3">
                    {intern.period}
                  </p>
                  <p className="font-display text-2xl font-light text-white leading-snug">
                    {intern.organization}
                  </p>
                </div>

                <div className="flex-1 p-7 bg-white border-t md:border-t-0 md:border-l border-gray-100">
                  <h4 className="font-body font-semibold text-gray-900 mb-4">{intern.role}</h4>
                  <ul className="flex flex-col gap-2.5">
                    {intern.highlights.map((h, j) => (
                      <li key={j} className="font-body text-sm text-gray-500 flex gap-2.5">
                        <span
                          className="shrink-0 mt-1.5 text-[10px] font-bold"
                          style={{ color: INTERN_COLORS[i % INTERN_COLORS.length] }}
                        >
                          ▪
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
