export const profile = {
  name: "Perly Lichtenstein",
  title: "Senior Full-Stack Developer",
  location: "Karmiel, Israel",
  summary:
    "Senior full-stack developer with 9+ years across the full software lifecycle. I work on event-driven backends, payment integrations, and high-throughput microservices. At Guesty I own services on the guest-flow path — reservations, check-in, and digital guidebooks — built with NestJS, Prisma, Temporal, and Kafka.",
  email: "perly.kar@gmail.com",
  phone: "+972527696575",
  phoneLabel: "+972 52 769 6575",
  linkedin: "https://www.linkedin.com/in/perly-lichtinshtein/",
}

export const roles = [
  {
    company: "Guesty",
    title: "Full Stack Developer",
    dates: "2022 – Present",
    context:
      "B2B SaaS platform for short-term and vacation rentals, operating in 80+ countries.",
    points: [
      "Own and maintain backend microservices in the guest-flow critical path — reservations, check-in, and digital guidebooks — built on NestJS, Prisma, and Temporal workflows.",
      "Built and integrated payment and credit-card processing flows, including third-party provider integrations and PCI-aware data handling.",
      "Designed event-driven services using Kafka, Redis, and background workers for asynchronous processing across distributed microservices.",
      "Heavy adopter of Cursor and MCP integrations within the team, using connected internal documentation and schemas to speed up refactors and reduce review iterations.",
    ],
  },
  {
    company: "Abra",
    title: "Full Stack Developer",
    dates: "2020 – 2022",
    context: "Budget management SaaS for small organizations and businesses.",
    points: [
      "Developed full-stack web and mobile applications using React, React Native, and Node.js.",
      "Designed and maintained NoSQL database architectures using CouchDB.",
      "Managed cloud deployments and environment infrastructure on GCP and Heroku.",
    ],
  },
  {
    company: "Karmisoft",
    title: "Full Stack Developer and Team Lead",
    dates: "2016 – 2020",
    context:
      "Employee attendance management system with reporting and analytics.",
    points: [
      "Built serverless backends on Firebase and integrated Google APIs (Sheets, Drive) and Twilio SMS for notifications.",
      "Developed Chrome extensions to streamline internal workflows.",
      "Managed and mentored a development team, including onboarding and technical training for new developers.",
    ],
  },
  {
    company: "Elbit Systems",
    title: "Software Developer",
    dates: "2012 – 2016",
    context: "Defense electronics and systems integration.",
    points: [
      "Developed automated test software for military equipment using ATEasy.",
      "Maintained defense-grade quality standards and hardware validation procedures.",
    ],
  },
]

export const publicCode = {
  heading: "Public code",
  note: "Code you can read. Production systems from past roles stay in company accounts.",
  repos: [
    {
      name: "context-rag",
      href: "https://github.com/perly/context-rag",
      summary:
        "A small retrieval pipeline that answers only from the matching tenant’s documents, and refuses when nothing is close enough.",
    },
    {
      name: "mcp-tracing-agent",
      href: "https://github.com/perly/mcp-tracing-agent",
      summary:
        "A tool that rebuilds one request’s timeline from logs of several services.",
    },
  ],
}

export const skillGroups = [
  {
    label: "Languages and frameworks",
    items: ["Node.js", "TypeScript", "JavaScript", "Nest.js", "React", "Angular"],
  },
  {
    label: "Databases and storage",
    items: ["PostgreSQL", "MongoDB", "Redis", "CouchDB", "Firebase"],
  },
  {
    label: "Architecture and messaging",
    items: [
      "Microservices",
      "Event-driven architecture",
      "Temporal",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    label: "Tooling",
    items: ["Docker", "Git", "Datadog", "Grafana", "Cypress", "Prisma"],
  },
  {
    label: "AI-assisted development",
    items: ["Cursor", "MCP integrations"],
  },
]

export const education = {
  credential: "Practical Engineer diploma in Software Engineering",
  honor: "With honors",
  dates: "2009 – 2011",
  school:
    "Accredited by MAHAT, the National Institute for Training in Technology and Science.",
}

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#public-code", label: "Public code" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]
