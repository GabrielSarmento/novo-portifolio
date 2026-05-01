import React from "react";
import { skills } from "../data/portfolio";
import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Skills
 * ------
 * Seção de conhecimentos / stack. Cada cartão exibe o logo oficial
 * da tecnologia com glow laranja (como na inspiração).
 */
export default function Skills() {
  const titleRef = useScrollReveal();

  return (
    <section
      id="conhecimentos"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#05080f]"
    >
      {/* Brilho suave de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Título */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white">
            Conhecimentos<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Tecnologias que uso e estou constantemente aprimorando.
          </p>
        </div>

        {/* Grade de skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const ref = useScrollReveal();
  const delayClass = `reveal-delay-${Math.min(index + 1, 4)}`;

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} skill-card rounded-xl p-6 md:p-8 flex flex-col items-center justify-center aspect-[2/3] group`}
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <p className="mt-4 font-mono text-sm md:text-base text-slate-200 tracking-wider">
        {skill.name}
      </p>
    </div>
  );
}
