import { useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';
import { useCopy } from '../hooks/useCopy';
import { validateContact, LIMITS } from '../utils/validate';
import { buildMailto, isApiConfigured, sendContact } from '../utils/contactApi';

const empty = { name: '', email: '', subject: '', message: '', website: '' }; // `website` = honeypot

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' }); // idle | sending | success | error
  const { state: copyState, copy } = useCopy();

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' });
      document.querySelector('.contact-form [aria-invalid="true"]')?.focus();
      return;
    }

    if (!isApiConfigured) {
      if (!profile.email) {
        setStatus({ type: 'error', message: 'No contact email or contact service is configured yet, so this message cannot be sent.' });
        return;
      }
      // mailto fallback: opens the visitor's email client; we cannot confirm delivery.
      window.location.href = buildMailto(values);
      setStatus({ type: 'info', message: 'Your email app should open with the message prefilled. Please press Send there — nothing has been sent yet.' });
      return;
    }

    setStatus({ type: 'sending', message: 'Sending…' });
    try {
      await sendContact({ name: values.name.trim(), email: values.email.trim(), subject: values.subject.trim(), message: values.message.trim(), website: values.website });
      setStatus({ type: 'success', message: 'Thanks! Your message was received.' });
      setValues(empty);
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  };

  const field = (id, label, props = {}) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {props.multiline ? (
        <textarea id={id} rows={5} value={values[id]} onChange={set(id)} maxLength={LIMITS.message} aria-invalid={Boolean(errors[id])} aria-describedby={errors[id] ? `${id}-err` : undefined} />
      ) : (
        <input id={id} type={props.type || 'text'} value={values[id]} onChange={set(id)} autoComplete={props.autoComplete} aria-invalid={Boolean(errors[id])} aria-describedby={errors[id] ? `${id}-err` : undefined} />
      )}
      {errors[id] && <p className="field-error" id={`${id}-err`}>{errors[id]}</p>}
    </div>
  );

  const submitLabel = status.type === 'sending' ? 'Sending…' : isApiConfigured ? 'Send message' : 'Open in email app';

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" label="Contact" title="Let's connect" />

        <p className="lead">Reach out for opportunities, collaborations or a friendly hello.</p>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <ul className="contact-list">
              <li className="panel contact-item">
                <Mail size={20} aria-hidden="true" />
                <div>
                  <span className="label">Email</span>
                  {profile.email ? (
                    <div className="email-row">
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>
                      <button type="button" className="icon-btn" onClick={() => copy(profile.email)} aria-label="Copy email address">
                        {copyState === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                      </button>
                      <span className="sr-only" role="status">{copyState === 'copied' ? 'Email copied' : copyState === 'failed' ? 'Copy failed' : ''}</span>
                    </div>
                  ) : (
                    <span className="muted">Not configured yet</span>
                  )}
                </div>
              </li>
              <li className="panel contact-item">
                <Linkedin size={20} aria-hidden="true" />
                <div>
                  <span className="label">LinkedIn</span>
                  {profile.social.linkedin ? <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">View profile</a> : <span className="muted">Not configured yet</span>}
                </div>
              </li>
              <li className="panel contact-item">
                <Github size={20} aria-hidden="true" />
                <div>
                  <span className="label">GitHub</span>
                  {profile.social.github ? <a href={profile.social.github} target="_blank" rel="noopener noreferrer">View profile</a> : <span className="muted">Not configured yet</span>}
                </div>
              </li>
              <li className="panel contact-item">
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <span className="label">Location</span>
                  <span>{profile.location}</span>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal className="panel">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="field-row">
                {field('name', 'Name', { autoComplete: 'name' })}
                {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
              </div>
              {field('subject', 'Subject')}
              {field('message', 'Message', { multiline: true })}
              {/* Honeypot: hidden from people, bots tend to fill it. */}
              <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={values.website} onChange={set('website')} />

              <button type="submit" className="btn btn-primary" disabled={status.type === 'sending'}>
                <Send size={18} aria-hidden="true" />
                <span>{submitLabel}</span>
              </button>

              <p className={`form-status is-${status.type}`} role="status" aria-live="polite">{status.message}</p>
              {!isApiConfigured && (
                <p className="form-note">
                  This form opens your email app (mailto) because no contact service is connected. That depends on a mail client being set up on your device, and delivery can't be confirmed.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
