import {
  FEATURED_TALK_STYLE,
  PRACTICE_HIGHLIGHT,
  SECTION_HEADING,
  speaking,
} from "./constants";

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}

export default function Speaking() {
  const featured = speaking.find((s) => s.featured);
  const others = speaking.filter((s) => !s.featured);

  return (
    <section id="speaking" className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-5">
            Speaking
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-gray-900">
            {SECTION_HEADING}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured && (
            <div className="lg:col-span-2 flex flex-col gap-8">
              {featured.videoId && (
                <YouTubeEmbed
                  videoId={featured.videoId}
                  title={`${featured.event} — ${featured.topic}`}
                />
              )}

              <div className="relative rounded-3xl p-10 md:p-12 overflow-hidden bg-[#ff6b35]">
                <span className="absolute -bottom-8 -right-4 font-display text-[180px] font-light text-white/5 leading-none select-none pointer-events-none">
                  {FEATURED_TALK_STYLE.watermarkText}
                </span>

                <div className="relative z-20">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="font-body text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3.5 py-1.5 rounded-full">
                      Featured Talk
                    </span>
                    <span className="font-body text-white/60 text-xs">
                      {featured.date}
                    </span>
                  </div>

                  <h3 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-white leading-tight mb-4">
                    {featured.event}
                  </h3>
                  <p className="font-body text-white/60 text-sm mb-4">
                    {featured.organization}
                  </p>
                  <p className="font-body text-white/80 leading-relaxed max-w-lg">
                    {featured.summary}
                  </p>
                </div>

                <div className="relative z-20 mt-8 flex items-center gap-4">
                  <div className="w-8 h-px bg-white/30" />
                  <span className="font-body text-sm font-semibold text-white/90">
                    Topic: {featured.topic}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {others.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl glass-panel p-8 hover:border-[#0a7c6e]/20 hover:shadow-md transition-all duration-300"
              >
                <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-3">
                  {s.date}
                </p>
                <h3 className="font-body font-semibold text-gray-900 mb-1.5">
                  {s.event}
                </h3>
                <p className="font-body text-sm text-[#0a7c6e] mb-4">
                  {s.organization}
                </p>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {s.summary}
                </p>
              </div>
            ))}

            <div className="rounded-2xl bg-[#0a7c6e]/5 border border-[#0a7c6e]/10 p-8">
              <p className="font-body text-xs font-bold uppercase tracking-widest text-[#0a7c6e] mb-4">
                {PRACTICE_HIGHLIGHT.eyebrow}
              </p>
              <h3 className="font-body font-semibold text-gray-900 mb-2">
                {PRACTICE_HIGHLIGHT.title}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {PRACTICE_HIGHLIGHT.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
