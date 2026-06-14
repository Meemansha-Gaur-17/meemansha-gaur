import { SECTION_HEADING, SKILL_CATEGORIES, skills } from "./constants";

const SKILL_LISTS = [skills.clinical, skills.assessment] as const;

export default function SkillsMobile() {
  return (
    <section id="skills" className="py-16 section-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Skills
          </p>
          <h2 className="font-display text-3xl font-light text-gray-900">{SECTION_HEADING}</h2>
        </div>

        <div className="flex flex-col gap-8">
          {SKILL_CATEGORIES.map((category, i) => (
            <div key={category.label}>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILL_LISTS[i].map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-xs text-white px-3 py-2 rounded-full"
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
