export interface HatchsterCaseStudyContent {
  title: string;
  overview: string;
  outcomes: string[];
  problemStatement: string;
  userObservation: {
    description: string;
    insights: string[];
  };
  designSolution: string;
  designSystem: string;
  brand: string;
  userFeedback: string;
  result: {
    description: string;
    achievements: string[];
  };
}

export const hatchsterCaseStudy: HatchsterCaseStudyContent = {
  title: "Redesigning Lotto Social",
  overview:
    'I led the redesign of Lotto Social lottery platforms, serving nearly 45 million regular UK players. The project aimed to transform the traditional lottery experience into an engaging, entertainment-focused app. Our goal was to increase user retention and boost revenue by reimagining how people interact with lottery games, moving beyond the standard "buy and hope" approach to a more rewarding, gamified experience.',
  outcomes: [
    "🏆 New user acquisition increased by 15% in the first quarter",
    "🏆 User engagement rose by 30%, with average session time doubling",
    "🏆 Revenue from in-app purchases grew by 25% year-over-year",
  ],
  problemStatement:
    "As this project was directly linked to a key business goal, I needed to fully understand the project purpose and the criteria for success before starting any research or design work. Lotto Social aimed to differentiate itself in a crowded market while increasing user retention and revenue. Users were leaving the platform due to a lack of engagement between draws and disappointment from frequent losses. Our task was to create a more entertaining experience that kept users engaged regardless of winning outcomes, while still maintaining the excitement of potential big wins.",
  userObservation: {
    description:
      "I conducted a user research session to observe how users interact with lottery products and how these fit into their weekly routines and social activities. From this study we discovered the following insights:",
    insights: [
      "👉 Users needed more frequent engagement opportunities beyond the lottery draws to maintain interest.",
      "👉 There was a strong correlation between instant gratification and user satisfaction",
    ],
  },
  designSolution:
    "Solution design involved extensive iteration and user testing. We began by mapping out high-level logic on whiteboards, followed by creating interactive prototypes. Our team explored a wide range of options, particularly focusing on how to display lottery results and syndicate information effectively.",
  designSystem:
    "I decided to work with Brad Frost solution: Atomic Design. This approach divides design components into 5 different categories: atoms, molecules, organisms, templates, and pages.",
  brand:
    "The brand guidelines focused on creating a vibrant, engaging visual identity that would appeal to lottery players while maintaining trust and credibility. The color palette, typography, and visual elements were designed to convey excitement and entertainment while ensuring accessibility and clarity across all touchpoints.",
  userFeedback:
    "Users were asked to complete a full journey, from signing up for a syndicate to checking results and engaging with in-app games. We observed their interactions with the syndicate selection process, result checking interface, and gamification features. Follow-up questions helped us understand their expectations for social interactions and reward mechanisms.",
  result: {
    description:
      "The final design transformed how Lotto Social presents lottery participation and user engagement. The app now provides a streamlined and intuitive journey from syndicate selection to result checking, with clear social interaction options and gamification elements.The incorporation of daily challenges and social features has created a more engaging and sticky product.",
    achievements: [
      "🏆 New user acquisition increased by 15% in the first quarter",
      "🏆 User engagement rose by 30%, with average session time doubling",
      "🏆 Revenue from in-app purchases grew by 12%",
    ],
  },
};
