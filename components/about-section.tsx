"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CTAButton } from "./cta-button"

export function AboutSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const tags = [
    "Contoterapia",
    "Psicanálise",
    "Teoria Sistêmica",
    "Constelação Familiar",
    "Theta Healing",
    "Access Consciousness",
    "Bioalinhamento",
    "Nova Medicina",
  ]

  return (
    <section className="py-20 md:py-32 bg-card" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {"Quem vai te acolher"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground text-balance">
            {"Psicóloga "}
            <span className="text-primary italic">{"Márcia Gaioso"}</span>
          </h2>
        </div>

        <div
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-shrink-0">
            <div className="relative w-64 h-80 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/marcia-gaioso.jpg"
                alt="Psicóloga Márcia Gaioso em seu consultório"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, 320px"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-5">
            <p className="text-foreground/90 leading-relaxed text-lg md:text-xl font-medium">
              {"Há mais de 20 anos cuidando de histórias que precisavam ser ouvidas."}
            </p>
            <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
              {"Formada em Psicologia pela PUC-GO, pós-graduada em Gestão Estratégica de Pessoas (UNIP-GO) e em Constelações Sistêmicas (IDESV), Márcia une a profundidade da Psicanálise e da Teoria Sistêmica a terapias integrativas para conduzir processos de cura verdadeiros."}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`text-xs md:text-sm px-3 py-1.5 rounded-full font-medium ${
                    i === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  )
}
