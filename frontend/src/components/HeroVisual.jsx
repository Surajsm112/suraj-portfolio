import { motion } from 'framer-motion';
import SkillIcon from './SkillIcon';
import { profile } from '../data/profile';

// Floating logo tiles around the portrait.
const tiles = [
  { logo: 'java', cls: 't1' },
  { logo: 'spring', cls: 't2' },
  { logo: 'mysql', cls: 't3' },
  { logo: 'react', cls: 't4' },
  { logo: 'docker', cls: 't5' },
];

/** Portrait with glow, floating tech tiles and a small code card. Falls back to initials if no photo is set. */
export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-glow" aria-hidden="true" />
      <div className="portrait">
        {profile.photo ? (
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="560" height="700" />
        ) : (
          <div className="portrait-fallback" aria-hidden="true">{profile.initials}</div>
        )}
      </div>

      {tiles.map(({ logo, cls }, i) => (
        <motion.div
          key={logo}
          className={`logo-tile ${cls}`}
          aria-hidden="true"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <SkillIcon logo={logo} size={34} />
        </motion.div>
      ))}

      <motion.div className="code-chip" aria-hidden="true" animate={{ y: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <span className="dots"><i /><i /><i /></span>
        <code>@RestController</code>
        <code>class <b>Scalable</b>Systems &#123;&#125;</code>
        <em>Building scalable systems</em>
      </motion.div>
    </div>
  );
}
