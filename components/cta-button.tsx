"use client"

import { useState } from "react"

interface CTAButtonProps {
  variant?: "default" | "light"
}

export function CTAButton({ variant = "default" }: CTAButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const isLight = variant === "light"

  return (
    <a
      href="https://chat.whatsapp.com/DsqyasoJrO42AO78RYmTXA?mode=gi_t"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-full transition-all duration-500 ease-out"
      aria-label="Garantir minha vaga no grupo"
    >
      {/* Background layers */}
      <span
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isLight
            ? "bg-primary-foreground group-hover:bg-primary-foreground/90"
            : "bg-primary group-hover:bg-primary/90"
        }`}
      />
      <span
        className={`absolute inset-0 rounded-full transition-all duration-700 ${
          isHovered ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } ${
          isLight
            ? "bg-gradient-to-r from-primary-foreground/95 to-primary-foreground"
            : "bg-gradient-to-r from-primary/90 to-primary"
        }`}
      />

      {/* Glow effect */}
      <span
        className={`absolute -inset-1 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isLight ? "bg-primary-foreground/30" : "bg-primary/30"
        }`}
      />

      {/* Text */}
      <span
        className={`relative font-sans font-bold text-sm md:text-base tracking-[0.15em] uppercase ${
          isLight ? "text-foreground" : "text-primary-foreground"
        }`}
      >
        {"Quero entrar no grupo"}
      </span>
    </a>
  )
}
