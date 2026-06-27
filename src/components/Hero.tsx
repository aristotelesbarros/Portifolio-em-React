import { profile } from "../data/profile";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon, WhatsappIcon, ArrowUpRightIcon } from "./Icons";

export default function Hero() {
  const socials = [
    { href: profile.socials.github, Icon: GithubIcon, label: "GitHub" },
    { href: profile.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { href: profile.socials.whatsapp, Icon: WhatsappIcon, label: "WhatsApp" },
  ];

  return (
    <section id="topo" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="blueprint" />
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="hero-fade" />
      </div>

      <div className="container">
        <Reveal>
          <p className="badge">
            {profile.available && <span className="pulse-dot" />}
            {profile.available ? "Disponível para projetos" : profile.location}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="hero-title">
            Olá, eu sou <br />
            <span className="text-gradient">{profile.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="hero-sub">
            <span className="hero-role">{profile.role}.</span> {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="hero-actions">
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
              <ArrowUpRightIcon className="icon-sm" />
            </a>
            <a href="#contato" className="btn btn-ghost">
              Entrar em contato
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="social-row">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="social-btn"
              >
                <Icon className="icon-md" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
