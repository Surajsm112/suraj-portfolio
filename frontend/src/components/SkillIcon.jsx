import { useState } from 'react';
import { Icon } from '../utils/icons';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons';

/** Technology logo (free Devicon asset) with a Lucide icon fallback if the logo is missing or fails to load. */
export default function SkillIcon({ logo, icon = 'Code2', size = 28 }) {
  const [failed, setFailed] = useState(false);
  if (logo && !failed) {
    return (
      <img
        src={`${DEVICON}/${logo}/${logo}-original.svg`}
        alt=""
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }
  return <Icon name={icon} size={size} />;
}
