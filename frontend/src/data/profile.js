// Central, editable profile data. Edit this file (and the other files in /data) to update the site.
// Empty strings mean "not configured": the related UI is hidden or shown as unavailable — nothing is invented.
const env = import.meta.env;

export const profile = {
  name: 'Suraj S',
  initials: 'SS',
  title: 'Java Backend Engineer | Spring Boot | Microservices | API Engineering',
  // Shown as the green pill in the hero. Set to '' to hide it.
  availability: 'Available for opportunities',
  tagline:
    'I build scalable backend systems, reliable REST APIs, and high-performance applications that deliver real business value.',
  // Verify before publishing.
  yearsOfExperience: '3+',
  organization: '6D Technologies',
  location: 'Bengaluru, India',
  specialization: 'Java Backend',

  // Portrait in /public/profile.webp. Replace the file, or set to '' to show initials.
  photo: `${env.BASE_URL}profile.webp`,

  // Contact + socials: set via .env.local (VITE_*) or hard-code here. Empty = hidden / "not configured".
  email: env.VITE_EMAIL || '',
  social: {
    github: env.VITE_GITHUB_URL || '',
    linkedin: env.VITE_LINKEDIN_URL || '',
  },

  // Optional Java contact API base URL (see /backend). Empty = mailto fallback only.
  contactApiUrl: (env.VITE_API_URL || '').replace(/\/$/, ''),

  // Real PDF placed in /public/resume. The shipped file is a clearly labelled placeholder — replace it.
  resume: {
    url: `${env.BASE_URL}resume/Suraj_S_Resume.pdf`,
    fileName: 'Suraj_S_Resume.pdf',
    isPlaceholder: true,
  },

  about: {
    // Short version for the page; the resume section uses `summary`.
    short:
      'Java Backend Engineer at 6D Technologies building backend applications, REST APIs and enterprise telecom solutions — campaign management, email delivery, integrations and production support.',
    summary:
      'I am a Java Backend Engineer at 6D Technologies with experience building and maintaining backend applications, RESTful APIs, and enterprise telecom solutions. My work includes campaign management, email delivery systems, integrations, database optimization, and production issue resolution. I enjoy writing maintainable code, understanding system behavior, and collaborating with development and DevOps teams to deliver reliable releases.',
    strengths: [
      { icon: 'Server', tone: 'violet', title: 'Backend development & API design' },
      { icon: 'Network', tone: 'blue', title: 'Microservices & asynchronous processing' },
      { icon: 'Gauge', tone: 'rose', title: 'Performance optimization & troubleshooting' },
      { icon: 'Database', tone: 'green', title: 'Database design & query optimization' },
      { icon: 'Rocket', tone: 'amber', title: 'Production support & release collaboration' },
      { icon: 'Sparkles', tone: 'cyan', title: 'Continuous learning & AI-assisted development' },
    ],
    caption: 'Passionate about building, learning and growing',
  },

  resumeHighlights: ['Professional summary', 'Work experience', 'Technical skills', 'Featured projects', 'Education', 'Contact details'],

  education: {
    placeholder: true,
    text: 'Education details to be added.',
  },
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'ai-tools', label: 'AI Tools' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
];
