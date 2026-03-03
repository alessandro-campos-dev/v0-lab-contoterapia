"use client"

import { useState } from "react"

export function CTAButton() {
  const [isHovered, setIsHovered] = useState(false)

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
      <span className="absolute inset-0 bg-amber-600 rounded-full transition-all duration-500 group-hover:bg-amber-500" />
      <span
        className={`absolute inset-0 rounded-full transition-all duration-700 ${
          isHovered
            ? "bg-gradient-to-r from-amber-500 to-amber-600 scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
      />

      {/* Glow effect */}
      <span className="absolute -inset-1 rounded-full bg-amber-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Text */}
      <span className="relative font-sans font-bold text-sm md:text-base tracking-[0.2em] uppercase text-white">
        Garantir minha vaga no grupo
      </span>
    </a>
  )
}
