import { profile, navLinks } from '../data/profile';
import { scrollToSection } from '../utils/scroll';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-mark">{profile.initials}</span>
          <div>
            <strong>{profile.name}</strong>
            <p>Building scalable systems, one line of code at a time.</p>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(l.id); }}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks />
      </div>
      <p className="container copyright">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
