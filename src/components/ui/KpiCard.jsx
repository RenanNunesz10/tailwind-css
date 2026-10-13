const trendColors = {
  positive: "bg-emerald-50 text-emerald-600",
  negative: "bg-red-50 text-red-600",
  neutral: "bg-slate-100 text-slate-600",
};

export function KpiCard({
  label,
  value,
  change,
  comparison,
  trend = "neutral",
  icon,
}) {
  const badgeClasses = trendColors[trend] || trendColors.neutral;

  return (
    <article className="flex h-[240px] w-full max-w-[420px] flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs">
      <header className="flex items-start justify-between">
        <h3 className="text-sm font-semibold text-slate-500">{label}</h3>
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            {icon}
          </div>
        )}
      </header>

      <div className="mt-4">
        <strong className="text-4xl font-extrabold tracking-tight text-slate-900">
          {value}
        </strong>
      </div>

      <footer className="mt-4 flex items-center gap-3">
        <span
          className={`inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs font-extrabold tracking-wider ${badgeClasses}`}
        >
          {change}
        </span>
        <span className="text-xs text-slate-500">{comparison}</span>
      </footer>
    </article>
  );
}

export default KpiCard;