import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm',
})

export const metadata: Metadata = {
  title: 'تحليلات كورة احترافية',
  description: 'تحليل تكتيكي عميق وإحصائيات حصرية — يومياً ومجاناً في قناتنا على تيليغرام',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlex.variable}>
      <body>{children}</body>
    </html>
  )
}
