export interface CaseStudy {
  slug: string;
  title: string;
  overview: string;
  outcomes: string[];
  problemStatement: string;
  designSolution: string;
  webAppDesign?: string;
  thirdPartyIntegrations?: string;
  userFeedback?: string;
  competitorResearch: {
    description: string;
    considerations: string[];
  };
  result: {
    description: string;
    achievements: string[];
  };
  images: {
    hero: string;
    wireframe?: string;
    hiFidelity?: string;
    webApp?: string;
    api?: string;
    animations?: Array<{
      src: string;
      alt: string;
    }>;
  };
  metadata: {
    year: string;
    duration: string;
    role: string;
    company?: string;
  };
}

export interface ProjectContribution {
  [key: string]: string[];
}

export interface ProjectTeam {
  [key: string]: string[];
}

export interface TableOfContentsSection {
  id: string;
  title: string;
}
