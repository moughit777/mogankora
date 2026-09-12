import { MousePointerClick, Send, CheckCircle2 } from 'lucide-react'

const STEPS = [
  { icon: MousePointerClick, title: 'ضغط على الزر', desc: 'اضغط "انضم للقناة" هنا فوق' },
  { icon: Send,              title: 'افتح تيليغرام', desc: 'غيتفتح تيليغرام مباشرة على القناة' },
  { icon: CheckCircle2,      title: 'اضغط انضمام',   desc: 'وكمل — التحليلات غتوصلك كل يوم' },
]

export default function Steps() {
  return (
    <div className="section" style={{ padding: '40px 20px', paddingTop: 0, maxWidth: 640, margin: '0 auto' }}>
      <div className="sec-title">كيفاش تنضم — 3 خطوات</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {STEPS.map(s => (
          <div key={s.title} style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: 16 }}>
            <div style={{
              minWidth: 60, width: 60, height: 60, background: '#2c3ee8', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              boxShadow: '0 0 0 4px rgba(44,62,232,0.15)',
            }}>
              <s.icon color="#fff" size={28} strokeWidth={2.2} />
            </div>
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 3 }}>{s.title}</h4>
              <p style={{ fontSize: 13, color: '#fff', opacity: 0.75 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
