import { education, EDU_COLORS, SECTION_HEADING } from "./constants";

export default function EducationMobile() {
  return (
    <section id="education" className="py-16 section-alt">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Education
          </p>
          <h2 className="font-display text-3xl font-light text-gray-900">{SECTION_HEADING}</h2>
        </div>

        <div className="flex flex-col gap-4">
          {education.map((edu, i) => {
            const color = EDU_COLORS[i];
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border-l-[3px]"
                style={{ borderLeftColor: color }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="font-body text-[10px] text-gray-400 uppercase tracking-widest">
                    {edu.period}
                  </span>
                  <div
                    className="shrink-0 rounded-lg px-3 py-1.5 text-center"
                    style={{ backgroundColor: color }}
                  >
                    <p className="font-display text-lg font-semibold text-white leading-none">
                      {edu.cgpa}
                    </p>
                    <p className="font-body text-[9px] text-white/60 uppercase mt-0.5">CGPA</p>
                  </div>
                </div>
                <h3 className="font-body font-semibold text-gray-900 text-sm leading-snug">
                  {edu.degree}
                </h3>
                <p className="font-body text-xs font-medium mt-1" style={{ color }}>
                  {edu.institution}
                </p>
                <p className="font-body text-xs text-gray-400 mt-0.5">{edu.location}</p>
                {edu.note && (
                  <p className="font-body text-xs mt-3 font-medium" style={{ color }}>
                    ★ {edu.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
