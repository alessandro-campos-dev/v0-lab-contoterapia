"use client"

import { useEffect, useRef, useState } from "react"

const painPoints = [
  "Voce sente que perdeu a sua identidade dentro de um relacionamento.",
  "Voce carrega uma culpa que nunca foi sua.",
  "Voce aprendeu a se calar para sobreviver.",
  "Voce tem medo de confiar na sua propria percepcao.",
  "Voce sorri por fora, mas chora por dentro.",
  "Voce acha que nao merece algo melhor.",
]

export function PainSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-foreground" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/50 mb-4">
          {"Voce se identifica?"}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl leading-tight text-primary-foreground mb-6 text-balance">
          {"Se voce chegou ate aqui,"}
          <br />
          <span className="text-primary italic">{"e porque algo dentro de voce precisa ser ouvido."}</span>
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-16 leading-relaxed">
          {"Nao e fraqueza. E coragem reconhecer a propria dor. Leia abaixo e veja se alguma dessas frases soa familiar:"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 text-left p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
