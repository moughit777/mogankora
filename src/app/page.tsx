import Background from '@/components/Background'
import Hero from '@/components/Hero'
import PhotoSection from '@/components/PhotoSection'
import Steps from '@/components/Steps'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import Ticker from '@/components/Ticker'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Background />
      <div className="content">
        <Hero />
        <PhotoSection />
        <Steps />
        <Features />
        <Testimonials />
        <Stats />
        <Ticker />
        <Footer />
      </div>
    </>
  )
}
