"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { CTAButton } from "./cta-button"

const slides = [
  {
    image: "/images/story-1-intuicao.jpg",
    alt: "Mulher refletindo sobre sua identidade e autoestima",
    title: "Identidade e Autoestima",
    text: "Você olha no espelho e não reconhece mais quem está ali. Passou tanto tempo tentando ser o que os outros esperavam que esqueceu quem realmente é. Sua voz foi silenciada, seus desejos enterrados, sua essência apagada.",
  },
  {
    image: "/images/story-2-silenciada.jpg",
    alt: "Mulher passando por uma transição de vida difícil",
    title: "Transições de Vida",
    text: "Uma mudança de cidade. O fim de um casamento. A saída dos filhos de casa. Uma demissão inesperada. A vida virou de cabeça para baixo e você não sabe mais qual é o próximo passo.",
  },
  {
    image: "/images/story-3-culpa.jpg",
    alt: "Mulher lidando com conflitos familiares",
    title: "Conflitos Familiares",
    text: "As feridas da família são as mais profundas. Cobranças, expectativas, mágoas antigas que nunca cicatrizaram. Você carrega o peso de gerações e sente que nunca será suficiente para quem deveria te amar incondicionalmente.",
  },
  {
    image: "/images/story-4-sonhos.jpg",
    alt: "Mulher se recuperando de relacionamento abusivo",
    title: "Relacionamentos Abusivos",
    text: "Ouviu tantas vezes que era exagerada, dramática ou louca que passou a duvidar da própria percepção. A culpa nunca era dele. Você perdeu sua voz, seus sonhos e quase perdeu a si mesma.",
  },
]

export function StorySection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(slides.length).fill(false))
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {"Você pode estar vivendo uma dessas situações"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground text-balance">
            {"Cada dor tem sua história."}
            <br />
            <span className="text-primary italic">{"E todas merecem acolhimento."}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => { refs.current[index] = el }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-14 transition-all duration-1000 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-4">
                    {slide.title}
                  </h3>
                  <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground/80">
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <CTAButton />
        </div>
      </div>
    </section>
  )
}
