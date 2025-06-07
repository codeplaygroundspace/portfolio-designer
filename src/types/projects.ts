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
  designSystem?: {
    description: string;
    images?:
      | Array<{
          src: string;
          caption?: string;
        }>
      | string[];
  };
  components?: {
    video?: {
      url: string;
      title?: string;
      description?: string;
      caption?: string;
    };
  };
  prototype?: {
    video?: {
      url: string;
      title?: string;
      description?: string;
      caption?: string;
    };
  };
  hiFidelityScreens?: {
    title: string;
    video?: {
      url: string;
      title?: string;
      description?: string;
      caption?: string;
    };
  };
  videos?: Array<{
    url: string;
    title?: string;
    description?: string;
    caption?: string;
  }>;
  userResearch: {
    description: string;
    considerations: string[];
  };
  result: {
    description: string;
    achievements: string[];
  };
  nextSteps?: {
    title: string;
    description: string;
    alternativeApproach: string;
    metrics: string[];
  };
  learnings?: {
    title: string;
    insight: string;
    description: string;
  };
  images: {
    hero: string;
    wireframe?: string;
    wireframeCaption?: string;
    hiFidelity?: string;
    hiFidelityCaption?: string;
    webApp?: string;
    api?: string;
    userResearchImage?: string;
    userResearchImageCaption?: string;
    userResearchImage2?: string;
    userResearchImage2Caption?: string;
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
