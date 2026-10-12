import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import TechBadge from '../components/TechBadge';
import { Icon } from '../utils/icons';
import { projects } from '../data/projects';

const tones = ['blue', 'violet', 'green', 'cyan', 'rose'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  // Only offer filters for technologies shared by at least two projects.
  const techs = useMemo(() => {
    const counts = {};
    projects.forEach((p) => p.tech.forEach((t) => { counts[t] = (counts[t] || 0) + 1; }));
    return ['All', ...Object.keys(counts).filter((t) => counts[t] > 1)];
  }, []);
  const visible = filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" label="Projects" title="Featured projects" />

        <div className="chip-row" role="group" aria-label="Filter projects by technology">
          {techs.map((t) => (
            <button key={t} type="button" className={`chip${filter === t ? ' is-active' : ''}`} aria-pressed={filter === t} onClick={() => setFilter(t)}>{t}</button>
          ))}
        </div>

        <motion.ul layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li layout key={p.id} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}>
                <button type="button" className={`panel project-card tone-${tones[projects.indexOf(p) % tones.length]}`} onClick={() => setSelected(p)} aria-haspopup="dialog" aria-label={`${p.title}: view details`}>
                  <span className="tile-icon lg"><Icon name={p.icon} size={26} /></span>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span className="badge-row">{p.tech.slice(0, 3).map((t) => <TechBadge key={t} name={t} />)}</span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        <p className="legend">Sanitized case studies — select a card for details.</p>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
