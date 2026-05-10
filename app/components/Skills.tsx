import { content } from "../text_content";

export default function Skills() {
  return (
    <section className="py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Skills & More
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
            Expertise & Beyond
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Skills — left 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Clinical — solid teal pills */}
            <div>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Clinical Skills
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {content.skills.clinical.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm text-white px-4 py-2 rounded-full bg-[#0a7c6e] hover:opacity-80 transition-opacity cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Assessment — solid amber pills */}
            <div>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Assessment Tools
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {content.skills.assessment.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-sm text-white px-4 py-2 rounded-full bg-[#f59e0b] hover:opacity-80 transition-opacity cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools — solid orange pills */}
            <div>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Software & Tools
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {content.skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-body text-sm text-white px-4 py-2 rounded-full bg-[#ff6b35] hover:opacity-80 transition-opacity cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Extracurricular */}
            <div>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Beyond the Clinic
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.extracurricular.map((item, i) => {
                  const colors = ["#0a7c6e", "#f59e0b", "#ff6b35"];
                  return (
                    <div
                      key={i}
                      className="p-6 bg-white rounded-2xl border-t-4"
                      style={{ borderTopColor: colors[i] }}
                    >
                      <p className="font-body font-semibold text-sm text-gray-900 mb-2">
                        {item.category}
                      </p>
                      <p className="font-body text-xs text-gray-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Volunteering — right col */}
          <div className="flex flex-col gap-6">
            <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gray-400">
              Volunteering
            </h3>
            {content.volunteering.map((v, i) => (
              <div
                key={i}
                className="p-7 bg-white rounded-2xl border-l-4"
                style={{ borderLeftColor: i === 0 ? "#ff6b35" : "#f59e0b" }}
              >
                <p className="font-body font-semibold text-gray-900">{v.role}</p>
                <p
                  className="font-body text-sm mt-0.5 mb-1 font-medium"
                  style={{ color: i === 0 ? "#ff6b35" : "#f59e0b" }}
                >
                  {v.organization}
                </p>
                <p className="font-body text-xs text-gray-400 mb-4">{v.period}</p>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{v.detail}</p>
              </div>
            ))}

            {/* Location card */}
            <div className="p-7 rounded-2xl bg-[#0a7c6e] text-white">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                Based In
              </p>
              <p className="font-display text-3xl font-light">{content.meta.location}</p>
              <p className="font-body text-sm text-white/70 mt-3">
                Available for remote sessions and on-site collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
