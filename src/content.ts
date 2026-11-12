export const profile = {
  name: "Perly Lichtenstein",
  title: "Senior Full-Stack Engineer",
  location: "Karmiel, Israel",
  summary:
    "Senior full-stack engineer with 10+ years. I build and scale web applications with React, Node.js, and TypeScript, on distributed systems and microservices.",
  email: "perly.kar@gmail.com",
  phone: "+972527696575",
  phoneLabel: "+972 52 769 6575",
  whatsapp: "https://wa.me/972527696575",
  whatsappLabel: "WhatsApp",
  linkedin: "https://www.linkedin.com/in/perly-lichtinshtein/",
}

export const roles = [
  {
    company: "Guesty",
    title: "Full Stack Engineer",
    dates: "2022 – Present",
    context:
      "B2B SaaS platform for short-term and vacation rentals, operating in 80+ countries.",
    points: [
      "Own registration and the onboarding flow for a new account.",
      "Own the guest app — a dynamic app that the property owner configures for guests, including the dynamic check-in form, guidebook, document management, and authority reporting.",
      "Build these services with React on the frontend and NestJS on the backend, using PostgreSQL and Redis for data, and Temporal, Kafka, and RabbitMQ for the microservices architecture.",
      "Build a RAG assistant for the platform team’s Slack support channel that answers known questions from channel data and tags a teammate only when the question is new.",
    ],
  },
  {
    company: "Abra",
    title: "Full Stack Engineer",
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
    title: "Full Stack Engineer and Team Lead",
    dates: "2016 – 2020",
    context:
      "Employee attendance management system with reporting and analytics.",
    points: [
      "Built serverless backends on Firebase and integrated Google APIs (Sheets, Drive) and Twilio SMS for notifications.",
      "Developed Chrome extensions to streamline internal workflows.",
      "Managed and mentored a development team, including onboarding and technical training for new engineers.",
    ],
  },
  {
    company: "Elbit Systems",
    title: "Software Engineer",
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
  repos: [
    {
      name: "mcp-tracing-agent",
      href: "https://github.com/perly/mcp-tracing-agent",
      summary:
        "An MCP tool an AI agent uses to rebuild one request’s timeline across several services, with an API behind it.",
    },
    {
      name: "internal-rag",
      href: "https://github.com/perly/internal-rag",
      summary:
        "A company search app that answers questions from your own documents. It includes chat, document management, and sync with Google Drive.",
    },
  ],
}

export const skillGroups = [
  {
    label: "Languages and frameworks",
    items: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Nest.js",
      "React",
      "Angular",
      "C#",
      "ASP.NET",
    ],
  },
  {
    label: "Databases and storage",
    items: ["PostgreSQL", "MongoDB", "Redis", "CouchDB", "Firebase"],
  },
  {
    label: "Architecture and messaging",
    items: ["Microservices", "Temporal", "Kafka", "RabbitMQ"],
  },
  {
    label: "DevOps and tooling",
    items: [
      "Docker",
      "Datadog",
      "Grafana",
      "Coralogix",
      "Snowflake",
      "Jenkins",
      "AWS",
    ],
  },
  {
    label: "Testing",
    items: ["Cypress", "Jest", "Mocha"],
  },
  {
    label: "AI",
    items: ["Cursor", "MCP integrations", "RAG"],
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
