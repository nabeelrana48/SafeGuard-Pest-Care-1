import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Pricing from '@/components/Pricing'
import Areas from '@/components/Areas'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Pricing />
        <Areas />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  )
}
