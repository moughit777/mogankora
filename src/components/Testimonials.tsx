const TESTIMONIALS = [
  { text: 'من انضممت بدات نفهم الكورة بطريقة مختلفة، التحليلات عميقة بزاف', author: 'يوسف م. — مشترك منذ 8 أشهر' },
  { text: 'أحسن قناة تحليل عندي في تيليغرام، التوقعات دايماً قريبة من الصح', author: 'سعد ل. — مشترك منذ سنة' },
  { text: 'قبل ما كنشوف المباراة كنقرا التحليل أولاً، هكاك كنتمتع أكثر', author: 'أمين ر. — مشترك منذ 3 أشهر' },
]

export default function Testimonials() {
  return (
    <div className="section" style={{ padding: '40px 20px', paddingTop: 0, maxWidth: 640, margin: '0 auto' }}>
      <div className="sec-title">ماذا قال المشتركون</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {TESTIMONIALS.map(t => (
          <div key={t.author}
            style={{ background: 'rgba(255,255,255,0.04)', borderRight: '3px solid #2c3ee8', borderRadius: 10, padding: '14px 16px' }}>
            <p style={{ fontSize: 14, color: '#d1d5db', marginBottom: 6, lineHeight: 1.8 }}>&quot;{t.text}&quot;</p>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#00ff88' }}>{t.author}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
