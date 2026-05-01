import React, { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { navItems } from "../data/portfolio";

/**
 * Header
 * ------
 * Barra de navegação fixa no topo. Destaca o item da seção ativa
 * conforme o usuário rola a página.
 */
export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Ouve mudança de seção ativa (enviada pelo hook useActiveSection)
  useEffect(() => {
    const handleChange = (e) => setActiveSection(e.detail);
    window.addEventListener("activeSectionChange", handleChange);
    return () =>
      window.removeEventListener("activeSectionChange", handleChange);
  }, []);

  // Sombra / blur quando a página é rolada
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05080f]/85 backdrop-blur-md border-b border-blue-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          aria-label="Início"
        >
          <Code2 className="w-8 h-8" strokeWidth={2.5} />
        </a>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link text-sm font-medium text-slate-300 hover:text-blue-400 ${
                    activeSection === id ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contato"
          className="hidden md:inline-flex btn-primary-blue px-5 py-2.5 rounded-md text-sm font-semibold"
        >
          Contate-me
        </a>

        {/* Botão mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-200 p-2"
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-[#05080f]/95 backdrop-blur-md border-t border-blue-500/20">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMobile}
                  className="block py-2 text-slate-200 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={closeMobile}
                className="inline-block btn-primary-blue px-5 py-2.5 rounded-md text-sm font-semibold"
              >
                Contate-me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
