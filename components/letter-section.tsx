"use client"

import { CTAButton } from "./cta-button"

export function LetterSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            {"Uma carta para você"}
          </p>
        </div>

        <div className="relative p-8 md:p-12 rounded-2xl bg-background border border-border">
          <div className="absolute -top-3 left-8 bg-background px-4">
            <span className="font-serif text-primary text-3xl italic">{"Para você"}</span>
          </div>

          <div className="space-y-5 mt-4">
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              {"Eu sei que você está cansada."}
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              {"Cansada de fingir. Cansada de se culpar. Cansada de carregar um peso que nunca foi seu. Cansada de ouvir que é exagerada, que é fraca, que deveria ter aguentado mais."}
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              {"Mas eu preciso te dizer uma coisa: "}
              <strong className="text-foreground">{"você não é fraca. Você sobreviveu."}</strong>
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              {"Sobreviveu ao silêncio. À manipulação. À solidão de estar acompanhada. Ao medo constante de errar. Sobreviveu à versão de si mesma que tiveram que te ensinar a ser."}
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              {"Agora, imagine um lugar onde você não precisa mais explicar. Onde a sua dor é validada, não questionada. Onde outras mulheres olham pra você e dizem: "}
              <em className="text-primary">{"\"eu também. Eu entendo.\""}</em>
            </p>
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              {"Esse lugar existe. E ele está esperando por você."}
            </p>
            <p className="font-serif text-foreground text-lg md:text-xl italic mt-8">
              {"Com carinho,"}
              <br />
              {"Contoterapia"}
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  )
}
