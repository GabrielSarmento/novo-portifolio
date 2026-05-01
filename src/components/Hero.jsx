import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";

/**
 * Hero
 * ----
 * Seção inicial com fundo pixel art, nome em gradiente azul→laranja
 * e uma breve apresentação. Usa filtro pixelated para reforçar a
 * estética retrô + scanlines (efeito CRT).
 */
export default function Hero() {
  // Mostra o conteúdo imediatamente após o mount (animação de entrada suave)
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden scanlines"
    >
      {/* Fundo pixel art */}
      <div className="absolute inset-0">
        <img
          src={personalInfo.heroBackground}
          alt=""
          className="w-full h-full object-cover pixelated opacity-60"
          style={{ filter: "contrast(1.05) saturate(1.2)" }}
        />
        {/* Gradiente lateral → melhora leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080f] via-[#05080f]/85 to-[#05080f]/40" />
        {/* Gradiente inferior → suaviza transição para a próxima seção */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#05080f]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-28 pb-20">
        <div className={`reveal max-w-3xl ${visible ? "is-visible" : ""}`}>
          <p className="font-mono text-blue-400 text-sm md:text-base mb-4 tracking-wider">
            &gt; Olá, me chamo:
          </p>

          <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight pixel-shadow mb-6">
            <span className="text-gradient-name">Gabriel</span>{" "}
            <span className="text-gradient-name">Sarmento</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="btn-primary-blue px-7 py-3 rounded-md font-semibold text-sm inline-flex items-center gap-2"
            >
              Ver projetos
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contato"
              className="btn-outline-blue px-7 py-3 rounded-md font-semibold text-sm"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs font-mono tracking-widest uppercase">
          Role para baixo
        </span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
