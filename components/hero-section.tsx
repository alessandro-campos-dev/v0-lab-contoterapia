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
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 py-20 text-center max-w-4xl mx-auto mt-16">
        
        {/* Badge de evento */}
        <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-6 py-3 rounded-full shadow-lg animate-pulse">
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="font-semibold text-sm md:text-base uppercase tracking-wide">
            {"Evento Gratuito - 10/03 às 20h"}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance">
          <span className="text-primary-foreground drop-shadow-lg">
            {"Passando por uma transição difícil?"}
          </span>
        </h1>

        {/* Subtitle com destaque */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 max-w-2xl border border-white/10">
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            {"Término de relacionamento. Mudança de cidade. Troca de carreira. A saída dos filhos de casa. Um diagnóstico inesperado."}
          </p>
        </div>

        {/* CTA destacado com informação do evento */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="bg-primary/20 border-2 border-primary rounded-xl p-6 backdrop-blur-sm">
            <p className="text-xl md:text-2xl font-serif text-primary-foreground font-medium mb-2">
              {"Venha para o meu"}
            </p>
            <p className="text-2xl md:text-4xl font-serif text-primary font-bold mb-4">
              {"Laboratório de Contoterapia"}
            </p>
            <div className="flex items-center justify-center gap-4 text-primary-foreground/90">
              <span className="bg-white/20 px-4 py-2 rounded-lg font-semibold">
                {"10 de Março"}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-lg font-semibold">
                {"20h"}
              </span>
            </div>
          </div>
          
          <CTAButton />
          
          <span className="text-primary text-xl font-bold tracking-wide bg-primary/20 px-6 py-2 rounded-full">
            {"100% GRATUITO"}
          </span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent z-[5]" />
    </section>
  )
}
