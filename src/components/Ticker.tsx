const RESULTS = [
  { match: 'ريال مدريد vs برشلونة', ok: true },
  { match: 'ليفربول vs مان سيتي',   ok: true },
  { match: 'PSG vs بايرن',          ok: false },
  { match: 'النصر vs الهلال',       ok: true },
  { match: 'يوفنتوس vs ميلان',      ok: true },
]

export default function Ticker() {
  const items = [...RESULTS, ...RESULTS]
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((r, i) => (
          <span key={i} className="t-item">
            {r.match} <span className={r.ok ? 'ok' : 'no'}>{r.ok ? '✔ صح' : '✘ خطأ'}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
