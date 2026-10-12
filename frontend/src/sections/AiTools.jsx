import { ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { Icon } from '../utils/icons';
import { aiDisclaimer, aiTools, workflowSteps } from '../data/ai';

export default function AiTools() {
  return (
    <section id="ai-tools" className="section" aria-labelledby="ai-title">
      <div className="container">
        <SectionHeading id="ai-title" label="AI tools" title="AI tools I use to build smarter" />

        <ul className="ai-grid">
          {aiTools.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.06} className="panel ai-card" >
              <span className={`tile-icon lg tone-${t.tone}`}><Icon name={t.icon} size={24} /></span>
              <div>
                <h3>{t.name}</h3>
                <p title={t.uses.join(', ')}>{t.blurb}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <ol className="workflow" aria-label="My workflow">
            {workflowSteps.map((s, i) => (
              <li key={s.label}>
                <span className="step-circle"><Icon name={s.icon} size={20} /></span>
                <span className="step-label">{s.label}</span>
                {i < workflowSteps.length - 1 && <ArrowRight className="step-arrow" size={16} aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="callout"><ShieldCheck size={16} aria-hidden="true" /> {aiDisclaimer}</p>
      </div>
    </section>
  );
}
