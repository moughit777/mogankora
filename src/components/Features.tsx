const FEATURES = [
  { icon: '📊', title: 'تحليل تكتيكي',    desc: 'تشكيلات ونقاط ضعف كل فريق' },
  { icon: '🎯', title: 'توقعات دقيقة',    desc: 'مبنية على إحصائيات حقيقية' },
  { icon: '⏰', title: 'قبل المباراة',    desc: '24 ساعة مسبقاً دايماً' },
  { icon: '📈', title: 'إحصائيات حصرية', desc: 'أرقام ما كتلقاهاش في غيرنا' },
]

export default function Features() {
  return (
    <div className="section" style={{ padding: '40px 20px', paddingTop: 0, maxWidth: 640, margin: '0 auto' }}>
      <div className="sec-title">شنو غتلقا في القناة</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {FEATURES.map(f => (
          <div key={f.title}
            className="feat"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '20px 14px', textAlign: 'center', transition: 'border-color 0.2s' }}>
            <span style={{ fontSize: 30, marginBottom: 8, display: 'block' }}>{f.icon}</span>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#e5e7eb', marginBottom: 4 }}>{f.title}</h3>
            <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
