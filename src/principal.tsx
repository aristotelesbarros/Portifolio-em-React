import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Aplicativo from "./Aplicativo.tsx";
import "./estilos/estilo.css";

const elementoRaiz = document.getElementById("root");

createRoot(elementoRaiz!).render(
  <StrictMode>
    <Aplicativo />
  </StrictMode>
);
