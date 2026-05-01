import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";
import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Projects
 * --------
 * Lista dos projetos em cartões com título, descrição, tags e botões
 * para o repositório e o site publicado.
 */
export default function Projects() {
  const titleRef = useScrollReveal();

  return (
    <section
      id="projetos"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#05080f]"
    >
      {/* Halo azul */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div ref={titleRef} className="reveal text-center mb-16">
          <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white">
            Projetos<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Alguns dos trabalhos que desenvolvi — cada um é uma história de aprendizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useScrollReveal();
  const delayClass = `reveal-delay-${Math.min(index + 1, 4)}`;

  return (
    <article
      ref={ref}
      className={`reveal ${delayClass} project-card rounded-xl p-7 md:p-8 flex flex-col h-full`}
    >
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Botões */}
      <div className="flex flex-wrap gap-3 mt-7 pt-5 border-t border-blue-500/10">
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-blue inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium"
        >
          <Github className="w-4 h-4" />
          Repositório
        </a>
        <a
          href={project.liveSite}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-blue inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          Visualizar site
        </a>
      </div>
    </article>
  );
}
