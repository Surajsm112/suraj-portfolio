import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import SkillIcon from '../components/SkillIcon';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? skillCategories : skillCategories.filter((c) => c.id === filter);

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" label="Skills" title="Technical skills & tech stack" />
        <div className="chip-row" role="group" aria-label="Filter skills by category">
          <button type="button" className={`chip${filter === 'all' ? ' is-active' : ''}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>All</button>
          {skillCategories.map((c) => (
            <button key={c.id} type="button" className={`chip${filter === c.id ? ' is-active' : ''}`} aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>{c.chip}</button>
          ))}
        </div>

        <div className="skills-grid">
          {visible.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.04} className={`panel skill-card tone-${cat.tone}`}>
              <h3>{cat.title}</h3>
              <ul className="skill-items">
                {cat.items.map((s) => (
                  <li key={s.name} className={s.core ? 'is-core' : undefined} title={s.core ? `${s.name} — core stack` : s.name}>
                    <span className="skill-logo"><SkillIcon logo={s.logo} icon={s.icon} size={26} /></span>
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="legend"><span className="legend-dot" /> Outlined = core day-to-day stack</p>
      </div>
    </section>
  );
}
