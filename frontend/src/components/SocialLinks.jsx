import { Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile';

/** Renders only the profiles that have been configured — never placeholder links. */
export default function SocialLinks({ className = '' }) {
  const { github, linkedin } = profile.social;
  if (!github && !linkedin) return null;
  return (
    <ul className={`social-links ${className}`.trim()} aria-label="Social profiles">
      {github && (
        <li>
          <a className="icon-btn" href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" title="GitHub">
            <Github size={18} aria-hidden="true" />
          </a>
        </li>
      )}
      {linkedin && (
        <li>
          <a className="icon-btn" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" title="LinkedIn">
            <Linkedin size={18} aria-hidden="true" />
          </a>
        </li>
      )}
    </ul>
  );
}
