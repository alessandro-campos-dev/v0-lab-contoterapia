"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const slides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-YMQkTR4hqE3DQJiby7MYfwi6k1d41j.png",
    text: "Voce sentiu o alerta, o frio na barriga, de que 'isso nao estava certo'. Mas duvidou de si mesma. Ignorou a intuicao para nao parecer louca, ciumenta ou dramatica.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-631ZFUv2VEr3vAL8nJXiuDFwDk69A0.png",
    text: "Ouviu 'voce e exagerada', 'isso e coisa da sua cabeca'. Aprendeu a performar felicidade enquanto sua essencia era silenciada.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-QvPEaKDd4MAg9pYgkaCCVRdtub3Sxi.png",
    text: "Se algo dava errado, a culpa era sua. Se ele traia, era porque voce nao foi suficiente. Se ele agredia, era porque voce provocou.",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-BKjqKEKAMA0PAtrXKVDlSlUzXdZolC.png",
    text: "Aquela que um dia sonhou, mas trocou os sonhos pela sobrevivencia. Enterrou seus desejos para nao arrumar confusao.",
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
            {"Talvez voce se reconheca"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground text-balance">
            {"Essa historia pode ser a sua."}
            <br />
            <span className="text-primary italic">{"E voce nao esta sozinha."}</span>
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
                    alt={`Historia de superacao ${index + 1}`}
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
      </div>
    </section>
  )
}
