import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { UserIcon } from "./Icons";

export default function About() {
  return (
    <section id="sobre" className="section container">
      <SectionHeading eyebrow="Sobre mim" title="Um pouco da minha jornada" />

      <div className="about-grid">
        <Reveal from="right">
          <div className="photo-wrap">
            <div className="photo-glow" aria-hidden="true" />
            <div className="photo-ring">
              <div className="photo-inner">
                <div className="photo-fallback">
                  <UserIcon className="icon-xl" />
                </div>
                <img src={profile.photo} alt={profile.name} className="photo-img" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="about-text">
          {profile.bio.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="about-paragraph">{p}</p>
            </Reveal>
          ))}

          {profile.location && (
            <Reveal delay={profile.bio.length * 90}>
              <p className="about-location">📍 {profile.location}</p>
            </Reveal>
          )}

          <Reveal delay={profile.bio.length * 90 + 80}>
            <div className="stats">
              {profile.stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-value text-gradient">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
