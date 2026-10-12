import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { Icon } from '../utils/icons';
import { hobbies } from '../data/hobbies';

export default function BeyondWork() {
  return (
    <section id="hobbies" className="section" aria-labelledby="hobbies-title">
      <div className="container">
        <SectionHeading id="hobbies-title" label="Beyond work" title="My hobbies & interests" />
        <ul className="hobby-grid">
          {hobbies.map((h, i) => (
            <Reveal as="li" key={h.id} delay={i * 0.05}>
              <motion.div className={`panel hobby-card tone-${h.tone}`} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <span className="tile-icon lg"><Icon name={h.icon} size={26} /></span>
                <h3>{h.title}</h3>
              </motion.div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
