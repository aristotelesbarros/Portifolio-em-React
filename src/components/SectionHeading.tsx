import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="section-heading">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow-line" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="section-desc">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
