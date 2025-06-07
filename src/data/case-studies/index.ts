import { CaseStudy } from "@/types/projects";
import {
  songclipCaseStudy,
  songclipContributions,
  songclipTeam,
} from "./songclip";
import { spokedCaseStudy, spokedContributions, spokedTeam } from "./spoked";
import {
  hatchsterCaseStudy,
  hatchsterContributions,
  hatchsterTeam,
} from "./hatchster";
import {
  globalAppTestingCaseStudy,
  globalAppTestingContributions,
  globalAppTestingTeam,
} from "./global-app-testing";

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
    songclip: songclipContributions,
    spoked: spokedContributions,
    hatchster: hatchsterContributions,
    "global-app-testing": globalAppTestingContributions,
  };

  return contributionsMap[slug] || [];
};

// Get team members for a project
export const getProjectTeam = (slug: string): string[] => {
  const teamMap: { [key: string]: string[] } = {
    songclip: songclipTeam,
    spoked: spokedTeam,
    hatchster: hatchsterTeam,
    "global-app-testing": globalAppTestingTeam,
  };

  return teamMap[slug] || [];
};
