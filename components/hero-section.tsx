"use client"

import Image from "next/image"
import { CTAButton } from "./cta-button"

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-woman.jpg"
          alt="Mulher olhando para o horizonte em momento de contemplação"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-20 text-center max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="w-16 h-px bg-amber-300/60" />

        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance">
          <span className="text-white/95">
            {"A sua história pode ter um novo capítulo."}
          </span>
          <br />
          <span className="text-amber-200 italic">
            {"E ele começa agora."}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed tracking-wide">
          {"A porta proibida já foi aberta. Falta você entrar."}
          <br />
          <span className="font-medium text-amber-200/80 uppercase text-sm tracking-widest">
            {"Só para mulheres"}
          </span>
        </p>

        {/* Decorative line */}
        <div className="w-16 h-px bg-amber-300/60" />

        {/* CTA */}
        <CTAButton />

        {/* Price */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/40 text-sm line-through">
            {"DE R$ 997,00"}
          </span>
          <span className="text-amber-200 text-lg font-semibold tracking-wide">
            {"POR R$ 0,00"}
          </span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent z-[5]" />
    </section>
  )
}
