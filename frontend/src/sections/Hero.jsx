import { motion } from 'framer-motion';
import { Briefcase, Building2, Code2, Download, MapPin } from 'lucide-react';
import Button from '../components/Button';
import HeroVisual from '../components/HeroVisual';
import SocialLinks from '../components/SocialLinks';
import { profile } from '../data/profile';
import { scrollToSection } from '../utils/scroll';

const stats = [
  { Icon: Briefcase, value: profile.yearsOfExperience, label: 'Years of experience' },
  { Icon: Building2, value: profile.organization, label: 'Current organization' },
  { Icon: MapPin, value: profile.location, label: 'Location' },
  { Icon: Code2, value: profile.specialization, label: 'Specialization' },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="bg-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.availability && <span className="pill"><span className="dot" />{profile.availability}</span>}
          <h1 id="hero-title">
            <span className="hi">Hi, I'm</span>
            <span className="big gradient-text">Suraj S.</span>
          </h1>
          <p className="hero-role">
            Java Backend Engineer <i>|</i> Spring Boot <i>|</i> Microservices
          </p>
          <p className="hero-intro">{profile.tagline}</p>

          <div className="hero-cta">
            <Button onClick={() => scrollToSection('projects')}>Explore My Work</Button>
            <Button variant="outline" href={profile.resume.url} download={profile.resume.fileName} icon={<Download size={16} aria-hidden="true" />}>
              Download Resume
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>Contact Me</Button>
          </div>
          <SocialLinks className="hero-social" />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <HeroVisual />
        </motion.div>
      </div>

      <div className="container">
        <dl className="stats-bar">
          {stats.map(({ Icon, value, label }) => (
            <div key={label} className="stat">
              <Icon size={26} aria-hidden="true" />
              <div>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
