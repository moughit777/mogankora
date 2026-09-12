import Image from 'next/image'

const TELEGRAM_URL = 'https://t.me/MOGANGROUP'

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

export default function PhotoSection() {
  return (
    <div className="section" style={{ padding: '40px 20px', paddingTop: 0, maxWidth: 640, margin: '0 auto' }}>
      <div className="sec-title">من معانا في القناة</div>

      <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', marginBottom: 28, maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
        <Image src="/fan.jpeg" alt="مشجعة من جمهور القناة" width={680} height={880}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(10,10,15,0.78)', padding: '10px 12px', fontSize: 12, fontWeight: 600, color: '#e5e7eb', lineHeight: 1.5 }}>
          مشجعة من جمهور القناة
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div className="cta-wrap">
          <div className="pulse-ring" />
          <div className="cta-glow" />
          <a className="cta" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            <TelegramIcon />
            انضم للقناة مجاناً
          </a>
        </div>
      </div>
    </div>
  )
}
