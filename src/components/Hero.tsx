const TELEGRAM_URL = 'https://t.me/MOGANGROUP'

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <div className="hero" style={{ padding: '50px 20px 36px', textAlign: 'center' }}>
      <div className="badge"
        style={{ display: 'inline-block', background: '#ff6400', color: '#fff', fontSize: 13, fontWeight: 800, padding: '6px 20px', borderRadius: 20, marginBottom: 18 }}>
        ⚽ تحليل كورة احترافي
      </div>

      <h1 style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.25, color: '#fff', marginBottom: 12 }}>
        بغيتي <span style={{ color: '#ff6400' }}>تربح؟ 💰</span>
        <br />
        خاصك تقرا قبل ما تشوف
      </h1>

      <p style={{ fontSize: 16, color: '#9ca3af', marginBottom: 20, maxWidth: 450, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.9 }}>
        تحليل تكتيكي عميق وإحصائيات حصرية — يومياً ومجاناً في قناتنا على تيليغرام
      </p>

      <div className="cta-wrap">
        <div className="pulse-ring" />
        <div className="cta-glow" />
        <a className="cta" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
          <TelegramIcon />
          انضم للقناة مجاناً
        </a>
      </div>
    </div>
  )
}
