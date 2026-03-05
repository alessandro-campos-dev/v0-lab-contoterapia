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
          {"Voce ja aguentou demais sozinha."}
          <br />
          <span className="text-primary italic">{"Chegou a hora de ser acolhida."}</span>
        </h2>

        <p className="text-base md:text-lg text-primary-foreground/60 max-w-xl mx-auto mb-6 leading-relaxed">
          {"Esse grupo e para voce que esta cansada de fingir que esta tudo bem. Para voce que sabe que merece mais, mas ainda nao sabe como chegar la."}
        </p>

        <p className="text-primary-foreground/50 text-sm mb-10">
          {"Vagas limitadas. O grupo e pequeno e exclusivo para garantir acolhimento real."}
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
          {"Sua historia merece ser contada. Sua dor merece ser ouvida. Seu novo capitulo comeca com um clique."}
        </p>
      </div>
    </section>
  )
}
