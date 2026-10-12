import Reveal from './Reveal';

export default function SectionHeading({ id, label, title, action }) {
  return (
    <Reveal className="section-heading">
      <div>
        <span className="eyebrow">{label}</span>
        <h2 id={id}>{title}</h2>
      </div>
      {action}
    </Reveal>
  );
}
