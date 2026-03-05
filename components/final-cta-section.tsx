"use client"

import { CTAButton } from "./cta-button"

export function FinalCTASection() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-foreground">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="w-16 h-px bg-primary/40 mx-auto mb-8" />

        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-primary-foreground mb-8 text-balance">
          {"Você já aguentou demais sozinha."}
          <br />
          <span className="text-primary italic">{"Chegou a hora de ser acolhida."}</span>
        </h2>

        <p className="text-base md:text-lg text-primary-foreground/60 max-w-xl mx-auto mb-6 leading-relaxed">
          {"Esse grupo é para você que está cansada de fingir que está tudo bem. Para você que sabe que merece mais, mas ainda não sabe como chegar lá."}
        </p>

        <p className="text-primary-foreground/50 text-sm mb-10">
          {"Vagas limitadas. O grupo é pequeno e exclusivo para garantir acolhimento real."}
        </p>

        <CTAButton variant="light" />

        <div className="flex flex-col items-center gap-1 mt-8">
          <span className="text-primary-foreground/30 text-sm line-through">
            {"DE R$ 997,00"}
          </span>
          <span className="text-primary text-lg font-semibold tracking-wide">
            {"ENTRADA GRATUITA"}
          </span>
        </div>

        <div className="w-16 h-px bg-primary/40 mx-auto mt-12" />

        <p className="font-serif text-sm text-primary-foreground/40 mt-8 italic">
          {"Sua história merece ser contada. Sua dor merece ser ouvida. Sua transformação começa com um clique."}
        </p>
      </div>
    </section>
  )
}
