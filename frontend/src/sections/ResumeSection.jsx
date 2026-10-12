import { useState } from 'react';
import { AlertTriangle, CheckCircle2, Download, Eye, EyeOff, FileText, Printer } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';

export default function ResumeSection() {
  const [show, setShow] = useState(false);
  return (
    <section id="resume" className="section" aria-labelledby="resume-title">
      <div className="container">
        <SectionHeading id="resume-title" label="Resume" title="My resume" />

        <Reveal className="panel resume-card no-print">
          <span className="doc-art" aria-hidden="true"><FileText size={44} /></span>
          <div className="resume-main">
            <p className="muted">Everything in one document — experience, skills and projects.</p>
            <div className="resume-actions">
              <Button href={profile.resume.url} download={profile.resume.fileName} icon={<Download size={16} aria-hidden="true" />}>Download Resume</Button>
              <Button variant="outline" icon={show ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />} aria-expanded={show} aria-controls="resume-print" onClick={() => setShow((s) => !s)}>
                {show ? 'Hide resume' : 'View resume'}
              </Button>
              <Button variant="ghost" icon={<Printer size={16} aria-hidden="true" />} onClick={() => window.print()}>Print</Button>
            </div>
          </div>
          <ul className="resume-checks">
            {profile.resumeHighlights.map((h) => <li key={h}><CheckCircle2 size={16} aria-hidden="true" />{h}</li>)}
          </ul>
        </Reveal>
        {profile.resume.isPlaceholder && (
          <p className="notice no-print" role="note">
            <AlertTriangle size={16} aria-hidden="true" />
            The downloadable PDF is a labelled placeholder. Replace <code>public/resume/{profile.resume.fileName}</code> with the real resume.
          </p>
        )}

        {/* Always in the DOM so the print view works; only hidden on screen until opened. */}
        <div className={`panel resume-sheet${show ? '' : ' is-collapsed'}`} id="resume-print">
          <header className="resume-head">
            <h3>{profile.name}</h3>
            <p>{profile.title}</p>
            <p className="muted">
              {profile.location}
              {profile.phone && ` · ${profile.phone}`}
              {profile.email && ` · ${profile.email}`}
              {profile.social.linkedin && ` · ${profile.social.linkedin}`}
              {profile.social.github && ` · ${profile.social.github}`}
            </p>
          </header>

          <h4>Professional summary</h4>
          <p>{profile.about.summary}</p>

          <h4>Work experience</h4>
          {experience.map((job) => (
            <div key={job.id} className="resume-job">
              <p><strong>{job.role}</strong> — {job.company}, {job.location} <span className="muted">({job.period})</span></p>
              <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}

          <h4>Technical skills</h4>
          <ul className="plain-list">
            {skillCategories.map((c) => (
              <li key={c.id}><strong>{c.title}:</strong> {c.items.map((s) => s.name).join(', ')}</li>
            ))}
          </ul>

          <h4>Featured projects</h4>
          <ul>{projects.map((p) => <li key={p.id}><strong>{p.title}</strong> — {p.summary}</li>)}</ul>

          <h4>Education</h4>
          <ul className="plain-list">
            {profile.education.map((e) => (
              <li key={e.degree}><strong>{e.degree}</strong> — {e.school} <span className="muted">({e.period})</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
