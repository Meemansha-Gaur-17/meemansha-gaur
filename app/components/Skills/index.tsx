import { meta } from "@/app/content/meta";
import {
  extracurricular,
  EXTRACURRICULAR_COLORS,
  LOCATION_CARD_COPY,
  SECTION_HEADING,
  SKILL_CATEGORIES,
  skills,
  volunteering,
  VOLUNTEER_COLORS,
} from "./constants";

const SKILL_LISTS = [skills.clinical, skills.assessment, skills.tools] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Skills & More
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
            {SECTION_HEADING}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-10">
            {SKILL_CATEGORIES.map((category, i) => (
              <div key={category.label}>
                <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {SKILL_LISTS[i].map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-sm text-white px-4 py-2 rounded-full hover:opacity-80 transition-opacity cursor-default"
                      style={{ backgroundColor: category.color }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Beyond the Clinic
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {extracurricular.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-2xl border-t-4"
                    style={{ borderTopColor: EXTRACURRICULAR_COLORS[i] }}
                  >
                    <p className="font-body font-semibold text-sm text-gray-900 mb-2">
                      {item.category}
                    </p>
                    <p className="font-body text-xs text-gray-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400">
              Volunteering
            </h3>
            {volunteering.map((v, i) => (
              <div
                key={i}
                className="p-7 bg-white rounded-2xl border-l-4"
                style={{ borderLeftColor: VOLUNTEER_COLORS[i] }}
              >
                <p className="font-body font-semibold text-gray-900">{v.role}</p>
                <p
                  className="font-body text-sm mt-0.5 mb-1 font-medium"
                  style={{ color: VOLUNTEER_COLORS[i] }}
                >
                  {v.organization}
                </p>
                <p className="font-body text-xs text-gray-400 mb-4">{v.period}</p>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{v.detail}</p>
              </div>
            ))}

            <div className="p-7 rounded-2xl bg-[#0a7c6e] text-white">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                Based In
              </p>
              <p className="font-display text-3xl font-light">{meta.location}</p>
              <p className="font-body text-sm text-white/70 mt-3">
                {LOCATION_CARD_COPY}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
