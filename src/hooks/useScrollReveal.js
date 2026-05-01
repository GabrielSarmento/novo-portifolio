import { useEffect, useRef } from "react";

/**
 * useScrollReveal
 * ----------------
 * Hook que aplica a classe `is-visible` ao elemento quando ele aparece
 * na viewport. Use junto com a classe `.reveal` no CSS para animações
 * suaves de entrada.
 *
 * Uso:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal">...</div>
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px 0px -80px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

/**
 * useActiveSection
 * -----------------
 * Observa várias seções e retorna o id da seção atualmente ativa
 * (mais próxima do topo da viewport). Útil para destacar o item
 * correspondente no menu de navegação.
 */
export function useActiveSection(sectionIds, offset = 120) {
  const activeIdRef = useRef("");

  useEffect(() => {
    const handleScroll = () => {
      let currentId = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          currentId = id;
          break;
        }
      }
      if (currentId && currentId !== activeIdRef.current) {
        activeIdRef.current = currentId;
        // dispara evento customizado para o header reagir
        window.dispatchEvent(
          new CustomEvent("activeSectionChange", { detail: currentId })
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);
}
