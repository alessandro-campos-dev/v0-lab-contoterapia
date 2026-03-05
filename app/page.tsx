import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { PainSection } from "@/components/pain-section"
import { LetterSection } from "@/components/letter-section"
import { TransformationSection } from "@/components/transformation-section"
import { AboutSection } from "@/components/about-section"
import { FinalCTASection } from "@/components/final-cta-section"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <PainSection />
      <TransformationSection />
      <AboutSection />
      <LetterSection />
      <FinalCTASection />
    </main>
  )
}
