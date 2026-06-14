import {
  FEATURED_TALK_STYLE,
  PRACTICE_HIGHLIGHT,
  SECTION_HEADING,
  speaking,
} from "./constants";

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900">
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

export default function SpeakingMobile() {
  const featured = speaking.find((s) => s.featured);
  const others = speaking.filter((s) => !s.featured);

  return (
    <section id="speaking" className="py-16 section-alt">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-[#0a7c6e] mb-3">
            Speaking
          </p>
          <h2 className="font-display text-3xl font-light text-gray-900">{SECTION_HEADING}</h2>
        </div>

        <div className="flex flex-col gap-5">
          {featured && (
            <>
              {featured.videoId && (
                <YouTubeEmbed
                  videoId={featured.videoId}
                  title={`${featured.event} — ${featured.topic}`}
                />
              )}
              <div className="relative rounded-2xl p-6 overflow-hidden bg-[#ff6b35]">
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="font-body text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="font-body text-white/60 text-[10px]">{featured.date}</span>
                  </div>
                  <h3 className="font-display text-2xl font-light text-white leading-tight mb-2">
                    {featured.event}
                  </h3>
                  <p className="font-body text-white/60 text-xs mb-3">{featured.organization}</p>
                  <p className="font-body text-white/80 text-sm leading-relaxed">{featured.summary}</p>
                  <p className="font-body text-xs font-semibold text-white/90 mt-4">
                    Topic: {featured.topic}
                  </p>
                </div>
              </div>
            </>
          )}

          {others.map((s, i) => (
            <div key={i} className="rounded-xl bg-white border border-gray-100 p-5">
              <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest mb-2">
                {s.date}
              </p>
              <h3 className="font-body font-semibold text-sm text-gray-900 mb-1">{s.event}</h3>
              <p className="font-body text-xs text-[#0a7c6e] mb-2">{s.organization}</p>
              <p className="font-body text-xs text-gray-500 leading-relaxed">{s.summary}</p>
            </div>
          ))}

          <div className="rounded-xl bg-[#0a7c6e]/5 border border-[#0a7c6e]/10 p-5">
            <p className="font-body text-[10px] font-bold uppercase tracking-widest text-[#0a7c6e] mb-2">
              {PRACTICE_HIGHLIGHT.eyebrow}
            </p>
            <h3 className="font-body font-semibold text-sm text-gray-900 mb-1">
              {PRACTICE_HIGHLIGHT.title}
            </h3>
            <p className="font-body text-xs text-gray-500 leading-relaxed">
              {PRACTICE_HIGHLIGHT.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
