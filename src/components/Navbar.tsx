import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar-inner">
        <a href="#topo" className="brand">
          <span className="brand-badge">{initials}</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contato">
              
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className={`burger ${open ? "is-open" : ""}`}>
            <i />
            <i />
            <i />
          </span>
        </button>
      </nav>

      <div className={`nav-mobile ${open ? "is-open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
