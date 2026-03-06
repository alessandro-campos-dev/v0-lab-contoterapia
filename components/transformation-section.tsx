"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Shield, Users, Sparkles } from "lucide-react"
import { CTAButton } from "./cta-button"

const benefits = [
  {
    icon: Heart,
    title: "Acolhimento sem julgamento",
    description:
      "Um espaço onde você pode ser vulnerável sem medo. Aqui ninguém vai te chamar de exagerada.",
  },
  {
    icon: Shield,
    title: "Reconexão com sua essência",
    description:
      "Através da contoterapia, você vai reencontrar a mulher que existia antes da dor. Ela ainda está lá.",
  },
  {
    icon: Users,
    title: "Comunidade de mulheres reais",
    description:
      "Mulheres que viveram o mesmo que você. Que entendem sem precisar de explicação.",
  },
  {
    icon: Sparkles,
    title: "Sua nova jornada começa aqui",
    description:
      "Você não precisa mais sobreviver. Chegou a hora de voltar a viver, sonhar e se reconhecer.",
  },
]

export function TransformationSection() {
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

  return (
    <section className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {"O que te espera"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground mb-6 text-balance">
            {"Imagine um lugar onde você pode"}
            <br />
            <span className="text-primary italic">{"finalmente ser você mesma."}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"O Laboratório de Contoterapia da Psicóloga Márcia Gaioso é um espaço sagrado de cura, acolhimento e reconexão. Aqui, sua história é ouvida, validada e transformada."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-card border border-border transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="font-serif text-lg md:text-xl text-foreground/80 italic mb-8">
            {'"A cura começa quando você decide que sua dor merece ser ouvida."'}
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  )
}
