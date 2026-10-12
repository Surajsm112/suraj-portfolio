import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Icon } from '../utils/icons';
import TechBadge from './TechBadge';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  // Escape to close, focus trap, scroll lock, and restore focus to the opener.
  useEffect(() => {
    const opener = document.activeElement;
    const dialog = closeRef.current?.closest('[role="dialog"]');
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialog) {
        const f = dialog.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      opener?.focus?.();
    };
  }, [onClose]);

  const showImpact = project.impactVerified && project.impact;

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
      >
        <button ref={closeRef} type="button" className="icon-btn modal-close" onClick={onClose} aria-label="Close project details">
          <X size={18} aria-hidden="true" />
        </button>

        <div className="modal-head">
          <span className="tile-icon lg tone-violet"><Icon name={project.icon} size={24} /></span>
          <h3 id="modal-title">{project.title}</h3>
        </div>

        <section>
          <h4>Overview</h4>
          <p>{project.overview}</p>
        </section>
        <section>
          <h4>Key technologies</h4>
          <div className="badge-row">{project.tech.map((t) => <TechBadge key={t} name={t} />)}</div>
        </section>
        <section>
          <h4>Highlights</h4>
          <ul className="check-list">{project.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </section>
        <section>
          <h4>My contribution</h4>
          <p>{project.contribution}</p>
        </section>
        <section>
          <h4>Challenges solved</h4>
          <p>{project.challenges}</p>
        </section>
        <section>
          <h4>Verified impact</h4>
          {showImpact ? <p>{project.impact}</p> : <p className="muted">No verified metrics published for this project yet.</p>}
        </section>

        <p className="modal-note">Sanitized case study — confidential client details, hostnames and source code are intentionally omitted.</p>
      </motion.div>
    </motion.div>
  );
}
