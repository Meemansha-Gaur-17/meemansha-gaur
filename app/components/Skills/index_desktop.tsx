import { SECTION_HEADING, SKILL_CATEGORIES, skills } from "./constants";

const SKILL_LISTS = [skills.clinical, skills.assessment] as const;

export default function Skills() {
  return (
    <section id="skills" className="py-28 section-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Skills
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
            {SECTION_HEADING}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
        </div>
      </div>
    </section>
  );
}
