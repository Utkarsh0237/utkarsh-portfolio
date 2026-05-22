export interface Metric {
  label: string;
  value: string;
}

export interface HighlightCard {
  title: string;
  description: string;
}

export interface CaseStudy {
  problem: string;
  actions: string[];
  result: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  challenge: CaseStudy;
}

export interface MindsetCard {
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href: string | null;
}

export const PORTFOLIO_CONTENT = {
  metadata: {
    title: "Utkarsh Pandey | Backend Software Engineer",
    description: "Backend engineer focused on scalable APIs, distributed systems, and cloud infrastructure.",
  },
  hero: {
    tagline: "Open to Backend Engineer opportunities",
    title: "Backend",
    titleGradient: "Software Engineer",
    name: "Utkarsh Pandey",
    subtitle: "Backend engineer focused on scalable APIs, distributed systems, and cloud infrastructure.",
    intro: "I build reliable APIs and backend systems using Node.js, NestJS, and TypeScript. My focus is on optimizing databases, designing AWS cloud infrastructure, and writing clean, maintainable code with a reliability mindset.",
    resumeUrl: "https://drive.google.com/file/d/1mYDkiaOrArDIAMZV0X-43X-yaH88hbRt/view?usp=sharing",
    linkedinUrl: "https://www.linkedin.com/in/utkarsh-pandey-51816a1ba",
    metrics: [
      { label: "API improvement", value: "~40%" },
      { label: "Effort reduction", value: "~30%" },
      { label: "Faster retrieval", value: "~25%" },
    ],
  },
  about: {
    title: "About Me",
    subtitle: "I build APIs, optimize database operations, and design cloud-based backend services.",
    bio: "I am a backend software engineer with over 3 years of professional experience building APIs and scalable systems. I specialize in backend development with Node.js and NestJS, system design patterns, and databases like PostgreSQL, MongoDB, and Redis. With hands-on experience designing cloud infrastructure on AWS, I focus on building reliable systems, optimizing query performance, and handling background workflows efficiently.",
  },
  technicalHighlights: {
    title: "Technical Highlights",
    subtitle: "Core backend engineering areas I’ve worked on.",
    cards: [
      {
        title: "Scalable APIs",
        description: "Designed REST APIs using Node.js, NestJS, and TypeScript.",
      },
      {
        title: "Database Optimization",
        description: "Improved query performance using indexing and optimization techniques.",
      },
      {
        title: "Async Processing",
        description: "Handled background jobs using AWS SQS and event-driven workflows.",
      },
      {
        title: "Authentication Systems",
        description: "Implemented JWT authentication and role-based access control.",
      },
      {
        title: "Caching & Performance",
        description: "Used Redis caching to reduce latency and improve throughput.",
      },
      {
        title: "Search Systems",
        description: "Built Elasticsearch-based search and filtering systems.",
      },
    ] as HighlightCard[],
  },
  projects: [
    {
      title: "Multi-Tenant Commerce Platform",
      subtitle: "Scalable E-Commerce Backend",
      description: "Backend services for a multi-tenant commerce platform handling products, orders, and tenant-specific workflows. Focused on scalable APIs, query optimization, and search performance improvements.",
      highlights: [
        "Tenant-aware architecture",
        "Low-latency APIs",
        "Search optimization",
        "PostgreSQL tuning",
      ],
      tech: ["NestJS", "PostgreSQL", "TypeORM", "AWS", "Elasticsearch", "Redis"],
      challenge: {
        problem: "While processing backend requests in AWS Lambda, we observed intermittent failures under load. The issue only appeared during Lambda warm executions, while cold starts worked correctly. The root cause was related to reused execution environments holding persistent state across invocations.",
        actions: [
          "Investigated Lambda execution lifecycle behavior",
          "Identified connection/state persistence in warm containers",
          "Moved HTTP client initialization outside handler scope",
          "Enabled proper connection reuse strategy",
          "Improved logging for execution tracing"
        ],
        result: [
          "Eliminated intermittent Lambda failures under load",
          "Ensured consistent behavior across warm and cold starts",
          "Stabilized backend performance during peak traffic"
        ],
      },
    },
    {
      title: "Location Discovery Platform",
      subtitle: "Geo-Spatial Backend System",
      description: "Backend system for location-based discovery with geo queries, caching, and reward workflows optimized for high-read traffic.",
      highlights: [
        "Geo-spatial queries",
        "Redis caching",
        "High-read optimization",
        "Async workflows",
      ],
      tech: ["HapiJS", "MongoDB", "Redis", "Microservices"],
      challenge: {
        problem: "Scheduled cron jobs responsible for sending emails and notifications were occasionally executing multiple times, leading to duplicate notifications being sent to users. This was caused by overlapping job triggers in distributed environments.",
        actions: [
          "Investigated cron scheduling behavior across services",
          "Identified race conditions in job triggering",
          "Implemented execution locking mechanism",
          "Ensured single-run guarantee for scheduled jobs",
          "Added logging for cron execution tracking",
        ],
        result: [
          "Eliminated duplicate email/notification sends",
          "Improved reliability of scheduled workflows",
          "Ensured consistent user communication",
        ],
      },
    },
    {
      title: "Healthcare Product Platform",
      subtitle: "Product Catalog Backend System",
      description: "Built backend services for a healthcare product e-commerce platform focused on product catalog management and user-facing APIs. Worked on API consistency, relational database design, and maintaining backend reliability.",
      highlights: [
        "Product catalog APIs",
        "Relational schema design",
        "Backend service consistency",
        "Data validation and integrity",
      ],
      tech: ["Express.js", "MySQL", "Sequelize", "TypeScript", "Elasticsearch", "AWS"],
      challenge: {
        problem: "Product search functionality started showing slow response times and inconsistent filtering results as dataset size increased. Queries became inefficient due to improper indexing strategy and unoptimized query structure in Elasticsearch.",
        actions: [
          "Analyzed slow-performing search queries",
          "Optimized Elasticsearch index mappings",
          "Refined query structure for better filtering performance",
          "Reduced unnecessary full-index scans",
          "Improved relevance scoring configuration"
        ],
        result: [
          "Faster product search response times",
          "More consistent and accurate filtering results",
          "Improved scalability for growing product catalog",
        ],
      },
    },
    {
      title: "AI Productivity Platform",
      subtitle: "Event-Driven Backend System",
      description: "Backend system using event-driven architecture for handling notifications, reminders, and scheduled workflows using asynchronous processing.",
      highlights: [
        "Async processing",
        "Event-driven architecture",
        "Queue reliability",
        "Notification scheduling",
      ],
      tech: ["NestJS", "MongoDB", "Redis", "Amazon SQS"],
      challenge: {
        problem: "While processing async tasks such as notifications and user fitness challenge generation (via ChatGPT integration), AWS SQS messages were being processed multiple times under high load. This was caused by visibility timeout being shorter than actual processing time.",
        actions: [
          "Analyzed SQS message lifecycle behavior",
          "Identified visibility timeout mismatch under load",
          "Implemented idempotent message handling",
          "Tuned visibility timeout based on workload patterns",
          "Improved retry and failure handling logic",
          "Enhanced monitoring for queue processing",
        ],
        result: [
          "Eliminated duplicate task processing",
          "Improved reliability of async workflows",
          "Stable processing under traffic spikes",
          "More predictable user notification behavior",
        ],
      },
    },
  ] as Project[],
  mindset: {
    title: "Engineering Mindset",
    subtitle: "Core philosophies guiding my system design and implementation.",
    cards: [
      {
        title: "Performance First",
        description: "Focus on low-latency systems.",
      },
      {
        title: "Clean Architecture",
        description: "Maintainable backend design.",
      },
      {
        title: "Reliability Focus",
        description: "Production-grade stability.",
      },
      {
        title: "Scalability Thinking",
        description: "Handle growth and load.",
      },
    ] as MindsetCard[],
  },
  certifications: {
    title: "Certifications",
    subtitle: "Professional certifications and courses.",
    list: [
      {
        title: "Node.js Full Stack",
        issuer: "Professional Certification",
      },
      {
        title: "MongoDB Node.js Developer Path",
        issuer: "MongoDB University",
      },
    ] as Certification[],
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Open to Backend Engineer / Software Engineer roles",
    tagline: "Available for full-time opportunities",
    text: "Feel free to reach out if you'd like to connect or discuss backend engineering positions.",
    phone: "+91-8787078819",
    location: "Noida, India",
    email: "utkarshpandey.utk@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/utkarsh-pandey-51816a1ba",
    resumeUrl: "https://drive.google.com/file/d/1mYDkiaOrArDIAMZV0X-43X-yaH88hbRt/view?usp=sharing",
  },
};
