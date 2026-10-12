import { Rocket } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { Icon } from '../utils/icons';
import { profile } from '../data/profile';

export default function About() {
  const { about } = profile;
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" label="About me" title="Who I am" />
        <div className="about-grid">
          <Reveal>
            <p className="lead">{about.short}</p>
            <ul className="strength-list">
              {about.strengths.map((s) => (
                <li key={s.title}>
                  <span className={`tile-icon tone-${s.tone}`}><Icon name={s.icon} size={18} /></span>
                  {s.title}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="about-art" delay={0.1}>
            <div className="art-editor" aria-hidden="true">
              <span className="dots"><i /><i /><i /></span>
              <b className="l1" /><b className="l2" /><b className="l3" /><b className="l4" /><b className="l5" />
            </div>
            <div className="art-caption">
              <Rocket size={28} aria-hidden="true" />
              <p>{about.caption}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
