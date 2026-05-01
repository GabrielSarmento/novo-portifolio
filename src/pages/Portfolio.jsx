import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useActiveSection } from "../hooks/useScrollReveal";

/**
 * Portfolio
 * ---------
 * Página principal do portfólio. Reúne todas as seções em uma única
 * página com rolagem fluida. Cada seção está em um componente separado
 * para facilitar a manutenção.
 */
export default function Portfolio() {
  // Observa a seção atualmente visível para destacar o item do menu
  useActiveSection(["inicio", "projetos", "conhecimentos", "sobre", "contato"]);

  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
