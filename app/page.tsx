import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesPreview } from "@/components/features-preview"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesPreview />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
