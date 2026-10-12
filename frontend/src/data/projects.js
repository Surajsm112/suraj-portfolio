// Case studies drawn from the resume. `impact` is only displayed when `impactVerified` is true.
export const projects = [
  {
    id: 'email-delivery',
    title: 'High-Performance Email Delivery System',
    icon: 'Mail',
    summary: 'Scalable backend services supporting high-TPS email delivery for telecom campaign platforms.',
    overview:
      'Designed scalable backend services to support high-throughput (high-TPS) email delivery for telecom campaign platforms.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Multithreading', 'REST APIs'],
    highlights: [
      'Java and Spring Boot backend development.',
      'Kafka-based asynchronous communication to decouple delivery pipelines from upstream triggers.',
      'Improved retry logic and structured error handling.',
      'REST API integrations.',
      'Production troubleshooting and performance improvements.',
    ],
    contribution:
      'Designed the backend services, implemented Kafka-based asynchronous communication to decouple delivery pipelines from upstream triggers, and improved retry logic and error handling.',
    challenges:
      'Keeping high-volume delivery reliable: diagnosing production failures, tuning processing throughput and making retries and failure handling predictable.',
    impact: 'Reduced delivery failures by 20% through improved retry logic and structured error handling.',
    impactVerified: true,
  },
  {
    id: 'telecom-campaign-platforms',
    title: 'Telecom Campaign Platforms',
    icon: 'Megaphone',
    summary: 'Backend REST APIs supporting multi-channel (SMS, Email, WhatsApp) campaign delivery for global telecom operators including Airtel, Banglalink, PLDT, VIL, and NetOne.',
    overview:
      'Built and optimized backend REST APIs supporting multi-channel campaign delivery for global telecom operators across multi-country deployments.',
    tech: ['Java', 'Spring Boot', 'React.js', 'Redis', 'REST APIs', 'MySQL'],
    highlights: [
      'REST API development for SMS, Email, and WhatsApp campaign delivery.',
      'Redis caching and performance tuning for high-concurrency workloads.',
      'React.js front-end components for campaign management.',
      'Production deployment support and monitoring for platform reliability at scale.',
    ],
    contribution:
      'Built and optimized backend REST APIs and React.js front-end components for multi-channel campaign delivery, implemented Redis caching for high-concurrency workloads, and supported production deployments and monitoring.',
    challenges:
      'Handling varied campaign inputs safely through strict validation while keeping integrations and data consistent across multi-country deployments in production.',
    impact: 'Reduced API response latency by 25% through Redis-based caching strategies across high-traffic services.',
    impactVerified: true,
  },
  {
    id: 'quota-refund',
    title: 'Quota Refund Module',
    icon: 'RotateCcw',
    summary: 'Reusable, modular refund-processing components adopted across multiple service lines, with automated refund scheduling.',
    overview:
      'Built reusable, modular refund-processing components adopted across multiple service lines for full and partial quota refunds.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    highlights: [
      'Reusable, modular refund-processing components adopted across multiple service lines.',
      'Automated refund scheduling and inter-service communication.',
      'Business logic implementation for full and partial refund cases.',
      'Reliable processing and error handling to reduce manual intervention.',
    ],
    contribution:
      'Built reusable refund business logic for full and partial cases, automated refund scheduling and inter-service communication, and handled the database operations to reduce manual intervention.',
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
