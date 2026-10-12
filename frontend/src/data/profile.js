// Central, editable profile data. Edit this file (and the other files in /data) to update the site.
// Empty strings mean "not configured": the related UI is hidden or shown as unavailable — nothing is invented.
const env = import.meta.env;

export const profile = {
  name: 'Suraj S',
  initials: 'SS',
  title: 'Java Full Stack Developer | Spring Boot | React.js | Microservices | REST APIs',
  // Shown as the green pill in the hero. Set to '' to hide it.
  availability: 'Available for opportunities',
  tagline:
    'I design and deliver scalable enterprise applications with Java, Spring Boot and React.js — with a track record of measurable impact: 25% lower API latency, 20% fewer delivery failures.',
  // Verify before publishing.
  yearsOfExperience: '4+',
  organization: '6D Technologies',
  location: 'Bengaluru, Karnataka',
  specialization: 'Java Full Stack',

  // Portrait in /public/profile.webp. Replace the file, or set to '' to show initials.
  photo: `${env.BASE_URL}profile.webp`,

  // Contact + socials: set via .env.local (VITE_*) or hard-code here. Empty = hidden / "not configured".
  email: env.VITE_EMAIL || 'surajsm112@gmail.com',
  phone: env.VITE_PHONE || '+91 7899839183',
  social: {
    github: env.VITE_GITHUB_URL || '',
    linkedin: env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/suraj-s-45686b190',
  },

  // Optional Java contact API base URL (see /backend). Empty = mailto fallback only.
  contactApiUrl: (env.VITE_API_URL || '').replace(/\/$/, ''),

  // Real PDF placed in /public/resume.
  resume: {
    url: `${env.BASE_URL}resume/Suraj_S_Resume.pdf`,
    fileName: 'Suraj_S_Resume.pdf',
    isPlaceholder: false,
  },

  about: {
    // Short version for the page; the resume section uses `summary`.
    short:
      'Java Full Stack Developer with 4+ years of experience designing and delivering scalable enterprise applications using Java, Spring Boot and React.js for telecom platforms serving global operators including Airtel, Banglalink, PLDT, VIL and NetOne.',
    summary:
      'Java Full Stack Developer with 4+ years of experience designing and delivering scalable enterprise applications using Java, Spring Boot, and React.js for telecom platforms serving global operators including Airtel, Banglalink, PLDT, VIL, and NetOne. Proficient across the stack — Spring Boot, REST APIs, Microservices, Apache Kafka, Redis, and React.js — with a consistent record of measurable impact: reduced API latency by 25%, cut delivery failures by 20%. Regularly engages with business stakeholders and cross-functional teams to translate requirements into technical solutions within Agile/Scrum delivery. Working exposure to Spring Security, OAuth2/JWT, CI/CD (Jenkins, GitHub Actions), Docker, Kubernetes, and AWS.',
    strengths: [
      { icon: 'Server', tone: 'violet', title: 'Full stack development: Spring Boot & React.js' },
      { icon: 'Network', tone: 'blue', title: 'Microservices & event-driven architecture' },
      { icon: 'Gauge', tone: 'rose', title: 'Performance optimization: 25% lower API latency' },
      { icon: 'Database', tone: 'green', title: 'Database design & SQL query tuning' },
      { icon: 'Rocket', tone: 'amber', title: 'Production support across global telecom platforms' },
      { icon: 'Sparkles', tone: 'cyan', title: 'Client & stakeholder communication, Agile delivery' },
    ],
    caption: 'Passionate about building, learning and growing',
  },

  resumeHighlights: ['Professional summary', 'Work experience', 'Technical skills', 'Featured projects', 'Education', 'Contact details'],

  education: [
    { degree: 'Bachelor of Engineering (BE), Computer Science', school: 'ATME College of Engineering', period: '2022' },
    { degree: 'Diploma', school: 'JSS Polytechnic', period: '2019' },
  ],
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
