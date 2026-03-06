"use client"

import Image from "next/image"
import { CTAButton } from "./cta-button"

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Mulher com expressão emocional - representando a jornada de cura"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-20 text-center max-w-4xl mx-auto mt-20">
        {/* Decorative line */}
        <div className="w-16 h-px bg-primary/60" />

        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance">
          <span className="text-primary-foreground/95">
            {"Passando por uma transição difícil? Você não precisa enfrentar isso sozinha."}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
          {"Término de relacionamento. Mudança de cidade. Troca de carreira. A saída dos filhos de casa. Um diagnóstico inesperado."}
          <br />
          <br />
          <span className="font-medium text-primary-foreground/90 uppercase text-sm tracking-widest">
            {"Um grupo de acolhimento e cura para mulheres"}
          </span>
        </p>

        {/* Decorative line */}
        <div className="w-16 h-px bg-primary/60" />

        {/* CTA */}
        <CTAButton />

        {/* Price */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-primary-foreground/40 text-sm line-through">
            {"DE R$ 29,90"}
          </span>
          <span className="text-primary text-lg font-semibold tracking-wide">
            {"ENTRADA GRATUITA"}
          </span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent z-[5]" />
    </section>
  )
}
