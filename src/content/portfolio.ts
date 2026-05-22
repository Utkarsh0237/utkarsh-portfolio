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
        problem: "Intermittent failures due to HTTP connection reuse in AWS Lambda warm executions, causing connection buildup across reused containers.",
        actions: [
          "Moved HTTP client initialization outside handler",
          "Enabled keep-alive connection reuse",
          "Reduced TCP connection creation",
          "Improved observability",
        ],
        result: [
          "Fixed intermittent failures",
          "Improved Lambda stability",
          "Reduced connection overhead",
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
        problem: "High-read query latency and MongoDB CPU spikes under heavy load during geo-spatial discovery searches.",
        actions: [
          "Implemented Redis geo-spatial caching for frequent coordinate ranges",
          "Optimized MongoDB 2dsphere indexing and queries",
        ],
        result: [
          "Reduced read query latency by 65%",
          "Significantly lowered database CPU utilization",
        ],
      },
    },
    {
      title: "Healthcare Product Platform",
      subtitle: "B2B Backend System",
      description: "Developed backend services for a healthcare product e-commerce platform focused on product catalog management and user-facing APIs. Worked on API consistency, relational database design, and backend reliability.",
      highlights: [
        "Schema design",
        "API standardization",
        "B2B integrations",
        "Data consistency",
      ],
      tech: ["Express.js", "MySQL", "Sequelize", "TypeScript"],
      challenge: {
        problem: "Race conditions and data consistency issues due to concurrent B2B catalog sync API updates.",
        actions: [
          "Restructured relational schemas with appropriate constraints",
          "Standardized API error response payloads",
          "Implemented transactions with isolated database-level locks in Sequelize",
        ],
        result: [
          "Eliminated catalog sync data inconsistencies",
          "Resolved concurrent transactional lockups",
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
        problem: "Messages were processed multiple times under heavy load due to mismatch between processing time and SQS visibility timeout.",
        actions: [
          "Tuned visibility timeout to match processing latency",
          "Added idempotency handling for event consumption",
          "Improved retry logic with dead-letter queue routing",
          "Enhanced monitoring and error logging",
        ],
        result: [
          "Reduced duplicate processing to near-zero",
          "Improved queue processing reliability",
          "Maintained queue stability under traffic spikes",
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
