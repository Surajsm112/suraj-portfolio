import { Building2, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="container">
        <SectionHeading id="exp-title" label="Experience" title="My career journey" />
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.id} delay={i * 0.08} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <span className="company-tile" aria-hidden="true">{job.current ? <Building2 size={26} /> : <GraduationCap size={26} />}</span>
              <article>
                <header>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company} <span>· {job.location}</span></p>
                  </div>
                  <span className="period">{job.period}</span>
                </header>
                <ul className="bullets">{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
