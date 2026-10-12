// Sanitized case studies. No client names, hostnames, URLs, credentials or proprietary code.
// `impact` is only displayed when `impactVerified` is true — confirm numbers with your real work first.
export const projects = [
  {
    id: 'email-delivery',
    title: 'Enterprise Email Delivery System',
    icon: 'Mail',
    summary: 'Backend system supporting enterprise email delivery and campaign processing for telecom-related applications.',
    overview:
      'A backend system supporting enterprise email delivery and campaign processing for telecom-related applications.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Multithreading', 'REST APIs'],
    highlights: [
      'Java and Spring Boot backend development.',
      'Kafka-based asynchronous processing.',
      'Multithreaded request processing.',
      'REST API integrations.',
      'Production troubleshooting and performance improvements.',
    ],
    contribution:
      'Developed and maintained backend services, worked on Kafka-based asynchronous flows and multithreaded request handling, and supported integrations through REST APIs.',
    challenges:
      'Keeping high-volume delivery reliable: diagnosing production failures, tuning processing throughput and making retries and failure handling predictable.',
    impact: 'Reduced delivery failures by approximately 20%.',
    impactVerified: false, // set to true only if this can be substantiated by your actual work
  },
  {
    id: 'campaign-management',
    title: 'Campaign Management System',
    icon: 'Megaphone',
    summary: 'Backend services supporting enterprise campaign workflows and email/SMS campaign delivery.',
    overview: 'Backend services supporting enterprise campaign workflows and email/SMS campaign delivery.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    highlights: [
      'REST API development.',
      'Campaign-related integrations.',
      'Request validation and processing.',
      'Database interaction and production support.',
    ],
    contribution:
      'Built and maintained REST APIs and integrations for campaign workflows, including request validation, processing logic and database interaction.',
    challenges:
      'Handling varied campaign inputs safely through strict validation while keeping integrations and data consistent in production.',
    impact: '',
    impactVerified: false,
  },
  {
    id: 'quota-refund',
    title: 'Quota Refund Module',
    icon: 'RotateCcw',
    summary: 'Backend functionality for processing full or partial quota refunds and coordinating with related modules.',
    overview:
      'Backend functionality for processing full or partial quota refunds and coordinating refund requests with related modules.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    highlights: [
      'Business logic implementation.',
      'Backend integration.',
      'Database operations.',
      'Reliable processing and error handling.',
    ],
    contribution:
      'Implemented refund business logic for full and partial cases, integrated with related modules and handled the database operations.',
    challenges:
      'Ensuring refunds are processed correctly and consistently across modules, with clear error handling when a step fails.',
    impact: '',
    impactVerified: false,
  },
  {
    id: 'whatsapp-templates',
    title: 'WhatsApp Template Management',
    icon: 'MessageSquare',
    summary: 'Web interface and backend integration for creating and managing WhatsApp message templates.',
    overview: 'A web interface and backend integration for creating and managing WhatsApp message templates.',
    tech: ['React.js', 'JavaScript', 'REST APIs', 'Form validation'],
    highlights: [
      'React-based UI development.',
      'Form validation.',
      'REST API integration.',
      'Template configuration and media options.',
    ],
    contribution:
      'Developed the React-based interface, form validation and REST API integration for template configuration and media options.',
    challenges:
      'Designing forms that guide users through template rules and surface validation problems clearly before submission.',
    impact: '',
    impactVerified: false,
  },
  {
    id: 'metrics-monitoring',
    title: 'Metrics and Monitoring Integration',
    icon: 'Activity',
    summary: 'Backend metrics collection with Micrometer and Prometheus, with Grafana dashboards where configured.',
    overview:
      'Backend metrics collection and monitoring using Micrometer and Prometheus, with Grafana dashboards where configured.',
    tech: ['Micrometer', 'Prometheus', 'Grafana', 'Java', 'Spring Boot'],
    highlights: [
      'Request-processing counters.',
      'Application observability.',
      'Metrics persistence design.',
      'Operational troubleshooting.',
    ],
    contribution:
      'Instrumented request-processing counters with Micrometer, exposed them to Prometheus and worked on how metrics are persisted.',
    challenges:
      'Choosing meaningful metrics and a persistence design that supports troubleshooting without adding noise or overhead.',
    impact: '',
    impactVerified: false,
  },
];
