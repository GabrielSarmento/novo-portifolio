import React, { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, Instagram } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolio";
import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Contact
 * -------
 * Seção de contato com CTA para email e links sociais.
 * Botão "copiar email" dá feedback visual ao usuário.
 */
export default function Contact() {
  const ref = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Não foi possível copiar:", err);
    }
  };

  return (
    <section
      id="contato"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#05080f] overflow-hidden"
    >
      {/* Brilho radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="reveal relative max-w-3xl mx-auto text-center">
        <p className="font-mono text-blue-400 text-sm tracking-widest uppercase mb-4">
          &gt; Vamos conversar
        </p>

        <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white mb-6 leading-tight">
          Entre em{" "}
          <span className="text-gradient-name">contato</span>
          <span className="text-blue-500">.</span>
        </h2>

        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10">
          Tem um projeto em mente, uma oportunidade de trabalho ou simplesmente quer trocar uma ideia? Fique à vontade para me enviar uma mensagem.
        </p>

        {/* Caixa de email */}
        <div className="inline-flex flex-col sm:flex-row items-stretch gap-2 p-2 rounded-xl border border-blue-500/40 bg-[#0a1024] mb-10 max-w-full">
          <div className="flex items-center gap-3 px-4 py-2 text-slate-200 font-mono text-sm md:text-base truncate">
            <Mail className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="truncate">{personalInfo.email}</span>
          </div>
          <button
            onClick={handleCopy}
            className="btn-primary-blue px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 justify-center"
            aria-label="Copiar email"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copiar
              </>
            )}
          </button>
        </div>

        {/* CTA principal */}
        <div className="mb-12">
          <a
            href={socialLinks.email}
            className="btn-primary-blue inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-sm font-semibold"
          >
            <Mail className="w-4 h-4" />
            Enviar email
          </a>
        </div>

        {/* Redes sociais */}
        <div className="flex items-center justify-center gap-4">
          <SocialIcon href={socialLinks.github} icon={<Github className="w-5 h-5" />} label="GitHub" />
          <SocialIcon
            href={socialLinks.linkedin}
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
          />
          <SocialIcon
            href={socialLinks.instagram}
            icon={<Instagram className="w-5 h-5" />}
            label="Instagram"
          />
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center rounded-lg border border-blue-500/40 text-slate-300 hover:text-white hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
