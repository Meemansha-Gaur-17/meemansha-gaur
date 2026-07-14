import { HOME_STATS, STAT_COLORS } from "./constants";

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 mb-12 border-y border-gray-100">
      {HOME_STATS.map((stat, i) => (
        <div key={stat.label} className="text-center sm:text-left">
          <p
            className="font-display text-4xl font-semibold leading-none"
            style={{ color: STAT_COLORS[i] }}
          >
            {stat.value}
          </p>
          <p className="font-body text-xs text-gray-400 uppercase tracking-wider mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
