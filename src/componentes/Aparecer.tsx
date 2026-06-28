// Faz o conteúdo "aparecer" suavemente quando ele entra na tela.
import { useEffect, useRef, useState, type ReactNode } from "react";

type PropriedadesAparecer = {
  children: ReactNode;
  atraso?: number;
  direcao?: "cima" | "baixo" | "esquerda" | "direita";
  className?: string;
};

export default function Aparecer(propriedades: PropriedadesAparecer) {
  const atraso = propriedades.atraso || 0;
  const direcao = propriedades.direcao || "cima";
  const classeExtra = propriedades.className || "";

  const referencia = useRef<HTMLDivElement>(null);
  const [visivel, definirVisivel] = useState(false);

  useEffect(function () {
    const elemento = referencia.current;
    if (!elemento) {
      return;
    }

    function aoEntrarNaTela(entradas: IntersectionObserverEntry[]) {
      if (entradas[0].isIntersecting) {
        definirVisivel(true);
        observador.disconnect();
      }
    }

    const observador = new IntersectionObserver(aoEntrarNaTela, {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    });

    observador.observe(elemento);

    return function () {
      observador.disconnect();
    };
  }, []);

  const classes =
    "aparecer aparecer--" + direcao + " " + (visivel ? "visivel" : "") + " " + classeExtra;

  return (
    <div ref={referencia} style={{ transitionDelay: atraso + "ms" }} className={classes}>
      {propriedades.children}
    </div>
  );
}
