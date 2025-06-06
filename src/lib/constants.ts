import type { Project, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Rosina Portfolio",
  description: "Product Designer based in Bristol",
  url: "https://your-portfolio.com",
  author: "Rosina",
  email: "hello@rosina.dev",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rosina",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rosina",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rosina",
    icon: "twitter",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/rosina",
    icon: "dribbble",
  },
];

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const SKILLS = {
  design: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  tools: ["Git", "Notion", "Slack", "Jira"],
} as const;
