import { education, EDU_COLORS, SECTION_HEADING } from "./constants";

export default function Education() {
  return (
    <section id="education" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Education
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
            {SECTION_HEADING}
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {education.map((edu, i) => {
            const color = EDU_COLORS[i];
            return (
              <div
                key={i}
                className="p-8 md:p-10 rounded-2xl bg-[#fafafa] border-l-4 hover:shadow-lg transition-all duration-300"
                style={{ borderLeftColor: color }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="font-body text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white"
                        style={{ backgroundColor: color }}
                      >
                        {i + 1}
                      </span>
                      <span className="font-body text-xs text-gray-400 uppercase tracking-widest">
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="font-body font-semibold text-gray-900 text-lg leading-snug max-w-xl">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 mt-2">
                      <span className="font-body font-medium" style={{ color }}>
                        {edu.institution}
                      </span>
                      <span className="text-gray-300">·</span>
                      <span className="font-body text-sm text-gray-400">{edu.location}</span>
                    </div>

                    {edu.note && (
                      <p
                        className="font-body text-sm mt-4 flex items-center gap-2 font-medium"
                        style={{ color }}
                      >
                        <span>★</span>
                        {edu.note}
                      </p>
                    )}
                  </div>

                  <div
                    className="shrink-0 rounded-2xl px-7 py-5 text-center md:text-right min-w-[130px]"
                    style={{ backgroundColor: color }}
                  >
                    <p className="font-display text-4xl font-semibold text-white leading-none">
                      {edu.cgpa}
                    </p>
                    <p className="font-body text-xs text-white/60 uppercase tracking-widest mt-2">
                      CGPA
                    </p>
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
