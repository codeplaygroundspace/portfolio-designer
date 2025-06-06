import { CaseStudy } from "@/types/projects";
import { songclipCaseStudy } from "./songclip";
import { spokedCaseStudy } from "./spoked";
import { hatchsterCaseStudy } from "./hatchster";
import { globalAppTestingCaseStudy } from "./global-app-testing";

// All case studies
export const caseStudies: CaseStudy[] = [
  globalAppTestingCaseStudy,
  spokedCaseStudy,
  songclipCaseStudy,
  hatchsterCaseStudy,
  // Add more case studies here as they're created
];

// Get case study by slug
export const getCaseStudyBySlug = (slug: string): CaseStudy | null => {
  return caseStudies.find((study) => study.slug === slug) || null;
};

// Get all slugs for static generation
export const getAllCaseStudySlugs = (): string[] => {
  return caseStudies.map((study) => study.slug);
};

// Get contributions for a project
export const getProjectContributions = (slug: string): string[] => {
  const contributionsMap: { [key: string]: string[] } = {
    songclip: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "User Testing",
      "Design System",
    ],
    spoked: [
      "User Research",
      "Information Architecture",
      "Wireframing",
      "Visual Design",
      "Prototyping",
      "User Testing",
    ],
    hatchster: [
      "User Research",
      "Trust & Safety Design",
      "Visual Design",
      "Prototyping",
      "User Testing",
      "Social Features",
    ],
    "global-app-testing": [
      "User Research",
      "Workflow Design",
      "Dashboard Design",
      "User Testing",
      "Design System",
      "B2B UX",
    ],
  };

  return contributionsMap[slug] || [];
};

// Get team members for a project
export const getProjectTeam = (slug: string): string[] => {
  const teamMap: { [key: string]: string[] } = {
    songclip: [
      "1 Product Designer (me)",
      "2 Frontend Developers",
      "2 Backend Developers",
      "1 Product Manager",
    ],
    spoked: [
      "1 Product Designer (me)",
      "1 iOS Developer",
      "1 Backend Developer",
      "1 Product Manager",
    ],
    hatchster: [
      "1 Product Designer (me)",
      "2 Frontend Developers",
      "1 Backend Developer",
      "1 Product Manager",
      "1 Marketing Manager",
    ],
    "global-app-testing": [
      "1 Senior Product Designer (me)",
      "3 Frontend Developers",
      "2 Backend Developers",
      "1 Product Manager",
      "1 QA Engineer",
    ],
  };

  return teamMap[slug] || [];
};
