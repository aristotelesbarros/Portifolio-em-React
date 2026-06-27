import { profile } from "../data/profile";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon, WhatsappIcon, ArrowUpRightIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contato" className="section container">
      <Reveal>
        <div className="contact-card">
          <div className="contact-bg" aria-hidden="true">
            <div className="aurora aurora-3" />
            <div className="aurora aurora-4" />
          </div>

          <p className="eyebrow-center">Contato</p>
          <h2 className="contact-title">
            Vamos construir algo <span className="text-gradient">juntos</span>
          </h2>
          <p className="contact-sub">
            Tem um projeto em mente ou uma vaga aberta? Fico feliz em conversar.
          </p>

          <div className="contact-actions">
            <a
              href={profile.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon className="icon-sm" />
              Falar no WhatsApp
              <ArrowUpRightIcon className="icon-sm" />
            </a>
          </div>

          <div className="contact-socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn">
              <GithubIcon className="icon-md" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
              <LinkedinIcon className="icon-md" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
