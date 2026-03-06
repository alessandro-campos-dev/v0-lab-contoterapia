"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { CTAButton } from "./cta-button"

const slides = [
  {
    image: "/images/story-1-intuicao.jpg",
    alt: "Mulher sentada sozinha, abraçando os joelhos com expressão conflituosa - representando a intuição ignorada",
    text: "Você sentiu o alerta, o frio na barriga, de que 'isso não estava certo'. Mas duvidou de si mesma. Ignorou a intuição para não parecer louca, ciumenta ou dramática.",
  },
  {
    image: "/images/story-2-silenciada.jpg",
    alt: "Mulher se olhando no espelho forçando um sorriso enquanto chora - representando a felicidade performada",
    text: "Ouviu 'você é exagerada', 'isso é coisa da sua cabeça'. Aprendeu a performar felicidade enquanto sua essência era silenciada.",
  },
  {
    image: "/images/story-3-culpa.jpg",
    alt: "Mulher sentada em um canto com expressão de resignação - representando a culpa que não era dela",
    text: "Se algo dava errado, a culpa era sua. Se ele traía, era porque você não foi suficiente. Se ele agredia, era porque você provocou.",
  },
  {
    image: "/images/story-4-sonhos.jpg",
    alt: "Mulher olhando pela janela com melancolia ao pôr do sol - representando sonhos trocados pela sobrevivência",
    text: "Aquela que um dia sonhou, mas trocou os sonhos pela sobrevivência. Enterrou seus desejos para não arrumar confusão.",
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
            {"Talvez você se reconheça"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground text-balance">
            {"Essa história pode ser a sua."}
            <br />
            <span className="text-primary italic">{"E você não está sozinha."}</span>
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
                  <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
                    {`"${slide.text}"`}
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
