import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolio";
import useScrollReveal from "../hooks/useScrollReveal";

/**
 * About
 * -----
 * Seção "Sobre mim" com foto de perfil, breve apresentação e botões
 * para as redes sociais.
 */
export default function About() {
  const titleRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section
      id="sobre"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#05080f]"
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Título */}
        <div ref={titleRef} className="reveal text-center mb-14">
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white">
            Sobre mim<span className="text-blue-500">.</span>
          </h2>
        </div>

        {/* Cartão com borda azul */}
        <div
          ref={cardRef}
          className="reveal rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-blue-500/60"
          style={{
            background:
              "linear-gradient(145deg, rgba(10,16,36,0.6) 0%, rgba(15,24,51,0.6) 100%)",
          }}
        >
          <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
            {/* Foto */}
            <div className="relative mx-auto md:mx-0 w-full max-w-[280px]">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-blue-500/30">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Moldura de brilho */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500/20 via-transparent to-orange-500/20 blur-xl -z-10" />
            </div>

            {/* Texto */}
            <div>
              <p className="font-mono text-blue-400 text-sm mb-3 tracking-wider">
                &gt; Quem sou:
              </p>

              <h3 className="font-pixel text-2xl md:text-3xl text-white mb-5 leading-snug">
                Gabriel Sarmento
              </h3>

              <p className="text-slate-300 text-base md:text-lg mb-6 font-medium">
                {personalInfo.aboutShort}
              </p>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                {personalInfo.aboutLong}
              </p>

              {/* Botões de redes sociais */}
              <div className="flex flex-wrap gap-3">
                <SocialButton
                  href={socialLinks.github}
                  icon={<Github className="w-4 h-4" />}
                  label="GitHub"
                />
                <SocialButton
                  href={socialLinks.linkedin}
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                />
                <SocialButton
                  href={socialLinks.instagram}
                  icon={<Instagram className="w-4 h-4" />}
                  label="Instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline-blue inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium"
    >
      {icon}
      {label}
    </a>
  );
}
