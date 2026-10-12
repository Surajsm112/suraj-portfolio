import { profile } from '../data/profile';
import { scrollToSection } from '../utils/scroll';

export default function Logo() {
  return (
    <a
      href="#home"
      className="logo"
      aria-label={`${profile.name} — back to top`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('home');
      }}
    >
      <span className="logo-mark">{profile.initials}</span>
      <span className="logo-text">{profile.name}</span>
    </a>
  );
}
