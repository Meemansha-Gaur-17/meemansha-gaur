import {
  CURRENT_THEMES,
  experience,
  internships,
  PAST_COLORS,
  SECTION_HEADING,
  VOLUNTEER_COLORS,
  volunteering,
} from "./constants";
import InternshipsAccordion from "./InternshipsAccordion";

export default function ExperienceMobile() {
  const current = experience.filter((e) => e.current);
  const past = experience.filter((e) => !e.current);

  return (
    <section id="experience" className="py-16 section-white pt-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Experience
          </p>
          <h1 className="font-display text-3xl font-light text-gray-900">{SECTION_HEADING}</h1>
        </div>

        <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-4">
          Currently
        </p>
        <div className="flex flex-col gap-4 mb-10">
          {current.map((exp, i) => {
            const c = CURRENT_THEMES[i % CURRENT_THEMES.length];
            return (
              <div
                key={exp.company + exp.role}
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{ background: c.grad }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-body text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: c.badgeBg, color: c.subColor }}
                  >
                    {exp.period.split("–")[0].trim()}
                  </span>
                  <span
                    className={`font-body text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${c.titleClass}`}
                    style={{ backgroundColor: c.badgeBg }}
                  >
                    ● Live
                  </span>
                </div>
                <h3 className={`font-body font-bold text-base leading-snug mb-1 ${c.titleClass}`}>
                  {exp.role}
                </h3>
                <p className="font-body text-xs mb-4" style={{ color: c.subColor }}>
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
                <div className="w-full h-px mb-3" style={{ backgroundColor: c.lineColor }} />
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="font-body text-xs leading-relaxed flex gap-2">
                      <span className="shrink-0 font-bold" style={{ color: c.bulletColor }}>
                        ▪
                      </span>
                      <span style={{ color: c.subColor }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-5">
            Previous Roles
          </p>
          <div className="flex flex-col gap-4">
            {past.map((exp, i) => {
              const color = PAST_COLORS[i % PAST_COLORS.length];
              return (
                <div
                  key={exp.company + exp.role}
                  className="rounded-xl p-5 border-l-[3px] bg-white"
                  style={{ borderLeftColor: color }}
                >
                  <time className="font-body text-[10px] text-gray-400 uppercase tracking-wider block mb-2">
                    {exp.period}
                  </time>
                  <h3 className="font-body font-semibold text-gray-900 text-sm">{exp.role}</h3>
                  <p className="font-body text-xs font-medium mt-0.5 mb-3" style={{ color }}>
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {exp.highlights.map((h, j) => (
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

        <div className="pt-8 border-t border-gray-200 mt-8">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-4">
            Volunteering
          </p>
          <div className="flex flex-col gap-4">
            {volunteering.map((v, i) => (
              <div
                key={v.organization}
                className="p-5 rounded-xl bg-white border border-gray-100 border-l-[3px]"
                style={{ borderLeftColor: VOLUNTEER_COLORS[i] }}
              >
                <p className="font-body font-semibold text-sm text-gray-900">{v.role}</p>
                <p className="font-body text-xs font-medium mt-0.5" style={{ color: VOLUNTEER_COLORS[i] }}>
                  {v.organization}
                </p>
                <p className="font-body text-[10px] text-gray-400 mt-1 mb-2">{v.period}</p>
                <p className="font-body text-xs text-gray-500 leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <InternshipsAccordion internships={internships} />
      </div>
    </section>
  );
}
