import type { NavItem, Project, SkillCategory, StatItem, TimelineItem } from "../types";

export const navItems: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "case-study", label: "Case Study" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    title: "Dealer Management Platform",
    subtitle: "iDMS — Multi-tenant SaaS",
    meta: "Bajaj · Ather · Ford",
    year: "Jan 2024 – Present",
    impact: "40–50% faster development",
    desc: "Architected multi-tenant service modules (Appointments, Estimates, Job Cards) enabling rapid client onboarding with zero code changes. Built schema-driven dynamic workflows to support diverse business requirements across Bajaj, Ather, and Ford.",
    tags: ["React.js", "TypeScript", "RBAC", "Microservices", "Node.js"],
  },
  {
    title: "KTM India App",
    subtitle: "React Native — Live on Play Store",
    meta: "500k+ Downloads",
    year: "Dec 2024 – Jan 2025",
    impact: "OTA updates · Stable upgrade",
    desc: "Executed major framework upgrade from RN v0.69 → v0.73.8. Implemented Microsoft CodePush for OTA updates. Built automated service booking, digital job cards, real-time ride tracking, and integrated FCM for push notifications and analytics.",
    tags: ["React Native", "TypeScript", "CodePush", "Firebase", "FCM"],
  },
  {
    title: "Prizm UI Engine",
    subtitle: "Proprietary npm Library",
    meta: "Internal Product System",
    year: "Schema-driven · RBAC",
    impact: "50% dev velocity increase",
    desc: "Engineered a JSON-driven npm library with role-based access control powering dynamic interfaces across Sales and Finance modules — increasing development velocity by 40–50% across the product suite.",
    tags: ["npm", "JSON Config", "RBAC", "TypeScript", "Scalable UI"],
  },
];

export const stats: StatItem[] = [
  { value: "2+", label: "Years Experience" },
  { value: "500k+", label: "App Downloads" },
  { value: "50%", label: "Dev Velocity Gain" },
  { value: "99.9%", label: "Production Uptime" },
];

export const timeline: TimelineItem[] = [
  {
    period: "Aug 2024 – Present",
    role: "Full Stack Software Engineer (Associate)",
    company: "Excellon Software, Pune",
    summary:
      "Engineered high-scale mobile solutions for KTM India (500k+ downloads). Designed schema-driven UI using master configurations, reducing feature deployment time significantly. Optimized frontend performance via refined state management. Integrated real-time location workflows using Google Maps and Firebase. Managed production deployments on Azure maintaining 99.9% uptime for enterprise automotive applications.",
  },
  {
    period: "Jan 2024 – Jul 2024",
    role: "Software Engineering Intern",
    company: "Excellon Software, Pune",
    summary:
      "Developed core transaction screens and implemented complex business logic for the Bajaj service application. Built reusable React Native components ensuring seamless data flow between backend and frontend layers. Collaborated on real-time tracking features and integrated analytics via Mixpanel and Google Analytics.",
  },
];

export const logos: string[] = ["Bajaj", "KTM", "Ford", "Ather"];

export const exploring: string[] = [
  "LLM APIs - Gemini & OpenAI",
  "Azure Fundamentals (AZ-900)",
  "Python for AI & backend scripting",
  "System design & architecture patterns",
  "RAG & Vector Databases",
  "AI Agents & Prompt Engineering",
];

export const skillCategories: SkillCategory[] = [
  { category: "Languages & Web", items: "TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3/Sass, Tailwind CSS, Material UI, Shadcn, Python (Learning)" },
  { category: "Frameworks & Libs", items: "React.js, React Native, Next.js, Redux Toolkit, TanStack Query, Express.js, Node.js" },
  { category: "Backend & Security", items: "Microservices, REST APIs, WebSockets, PostgreSQL, MongoDB, SSO (OIDC/OAuth 2.0), JWT" },
  { category: "Cloud & DevOps", items: "Azure (DevOps/Hosting), Docker, CI/CD, Firebase, Mixpanel, Git, GitHub" },
  { category: "AI & Productivity", items: "Cursor, GitHub Copilot, AI Agents, Prompt Engineering, Postman" },
];
