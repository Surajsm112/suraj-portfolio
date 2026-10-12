// No proficiency percentages: skills are grouped by category.
// `logo` = Devicon name (free, loaded from jsDelivr); `icon` = Lucide fallback when no logo exists.
// `core: true` marks the primary day-to-day stack (editable).
export const skillCategories = [
  {
    id: 'backend', chip: 'Backend', title: 'Languages & Backend', icon: 'Server', tone: 'violet',
    items: [
      { name: 'Java 8/11/17', logo: 'java', core: true },
      { name: 'Spring Boot', logo: 'spring', core: true },
      { name: 'Spring MVC', logo: 'spring' },
      { name: 'Spring Security', icon: 'ShieldCheck' },
      { name: 'Spring Data JPA', logo: 'spring' },
      { name: 'Hibernate', icon: 'Layers' },
      { name: 'REST APIs', icon: 'Globe', core: true },
      { name: 'Microservices', icon: 'Boxes', core: true },
      { name: 'OAuth2 / JWT', icon: 'KeyRound' },
      { name: 'Collections & Streams', icon: 'ListTree' },
      { name: 'Multithreading & Concurrency', icon: 'Cpu' },
      { name: 'Exception Handling', icon: 'ShieldAlert' },
      { name: 'System Design', icon: 'Network' },
    ],
  },
  {
    id: 'messaging', chip: 'Messaging', title: 'Messaging & Caching', icon: 'Workflow', tone: 'rose',
    items: [
      { name: 'Apache Kafka', logo: 'apachekafka', core: true },
      { name: 'Redis', logo: 'redis', core: true },
      { name: 'Multithreading', icon: 'Cpu', core: true },
      { name: 'Async processing', icon: 'Workflow' },
    ],
  },
  {
    id: 'databases', chip: 'Databases', title: 'Databases', icon: 'Database', tone: 'green',
    items: [
      { name: 'MySQL', logo: 'mysql', core: true },
      { name: 'SingleStoreDB', icon: 'Database' },
    ],
  },
  {
    id: 'frontend', chip: 'Frontend', title: 'Frontend', icon: 'Layout', tone: 'blue',
    items: [
      { name: 'React.js', logo: 'react', core: true },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'HTML5', logo: 'html5' },
      { name: 'CSS3', logo: 'css3' },
      { name: 'Responsive Web Design', icon: 'Layout' },
    ],
  },
  {
    id: 'devops', chip: 'DevOps', title: 'Cloud & DevOps', icon: 'Container', tone: 'cyan',
    items: [
      { name: 'Docker', logo: 'docker', core: true },
      { name: 'Kubernetes', logo: 'kubernetes' },
      { name: 'OpenShift', logo: 'redhat' },
      { name: 'AWS', logo: 'amazonwebservices' },
      { name: 'Git', logo: 'git', core: true },
      { name: 'GitLab', logo: 'gitlab' },
      { name: 'Jenkins', logo: 'jenkins' },
      { name: 'GitHub Actions', logo: 'githubactions' },
      { name: 'CI/CD', icon: 'Workflow' },
      { name: 'Maven', logo: 'maven' },
      { name: 'Linux', logo: 'linux' },
    ],
  },
  {
    id: 'appservers', chip: 'App Servers', title: 'Application Servers', icon: 'Server', tone: 'green',
    items: [
      { name: 'WildFly', logo: 'redhat' },
      { name: 'JBoss', logo: 'redhat' },
      { name: 'Apache Tomcat', logo: 'tomcat' },
    ],
  },
  {
    id: 'testing', chip: 'Testing', title: 'Testing & API Tools', icon: 'FlaskConical', tone: 'amber',
    items: [
      { name: 'JUnit', icon: 'FlaskConical' },
      { name: 'Postman', icon: 'Send' },
      { name: 'Swagger', icon: 'FileJson' },
      { name: 'JMeter', icon: 'Gauge' },
    ],
  },
  {
    id: 'monitoring', chip: 'Monitoring', title: 'Monitoring & Quality', icon: 'Activity', tone: 'rose',
    items: [
      { name: 'Prometheus', logo: 'prometheus' },
      { name: 'Micrometer', icon: 'Activity' },
      { name: 'Grafana', logo: 'grafana' },
      { name: 'Java Melody', icon: 'LineChart' },
      { name: 'SonarQube', icon: 'Bug' },
    ],
  },
  {
    id: 'collaboration', chip: 'Collaboration', title: 'Practices & Collaboration', icon: 'Users', tone: 'violet',
    items: [
      { name: 'Agile / Scrum', icon: 'Repeat', core: true },
      { name: 'Jira', logo: 'jira' },
      { name: 'Code Reviews', icon: 'GitBranch' },
      { name: 'Client & Stakeholder Communication', icon: 'Users' },
      { name: 'Documentation', icon: 'FileText' },
    ],
  },
];
