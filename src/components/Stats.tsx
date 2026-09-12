const STATS = [
  { n: '+12K',   l: 'مشترك' },
  { n: '87%',    l: 'دقة التوقعات' },
  { n: 'يومياً', l: 'تحليلات جديدة' },
]

export default function Stats() {
  return (
    <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      {STATS.map((s, i) => (
        <div key={s.l} style={{ flex: 1, textAlign: 'center', padding: '24px 8px', borderLeft: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#ff6400' }}>{s.n}</div>
          <div style={{ fontSize: 12, fontWeight: 500, color: '#6b7280', marginTop: 4 }}>{s.l}</div>
        </div>
      ))}
    </div>
  )
}
