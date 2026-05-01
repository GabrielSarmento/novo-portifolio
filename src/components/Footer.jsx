import React from "react";
import { Code2, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { socialLinks, personalInfo } from "../data/portfolio";

/**
 * Footer
 * ------
 * Rodapé minimalista com logo, navegação rápida, redes sociais e copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-blue-500/15 bg-[#030509] px-6 md:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + nome */}
          <div className="flex items-center gap-3">
            <Code2 className="w-7 h-7 text-blue-400" strokeWidth={2.5} />
            <div>
              <p className="font-pixel text-sm text-white">Gabriel Sarmento</p>
              <p className="text-xs text-slate-500 mt-1">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Links rápidos */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">
              Início
            </a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors">
              Projetos
            </a>
            <a href="#conhecimentos" className="hover:text-blue-400 transition-colors">
              Conhecimentos
            </a>
            <a href="#sobre" className="hover:text-blue-400 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="hover:text-blue-400 transition-colors">
              Contato
            </a>
          </nav>

          {/* Redes sociais */}
          <div className="flex items-center gap-3">
            <FooterIcon href={socialLinks.github} label="GitHub">
              <Github className="w-4 h-4" />
            </FooterIcon>
            <FooterIcon href={socialLinks.linkedin} label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </FooterIcon>
            <FooterIcon href={socialLinks.instagram} label="Instagram">
              <Instagram className="w-4 h-4" />
            </FooterIcon>
            <FooterIcon href={socialLinks.email} label="Email">
              <Mail className="w-4 h-4" />
            </FooterIcon>
          </div>
        </div>

        {/* Linha divisória + copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 text-center">
          <p className="text-xs text-slate-500 font-mono">
            © {year} Gabriel de Souza Sarmento da Silva — Feito com React &amp; Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-md border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
    >
      {children}
    </a>
  );
}
