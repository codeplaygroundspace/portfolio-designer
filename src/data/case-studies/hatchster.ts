import { CaseStudy } from "@/types/projects";

export const hatchsterCaseStudy: CaseStudy = {
  slug: "hatchster",
  title: "Redesigning Hatchster",
  overview:
    "Hatchster is a social lottery platform that allows users to participate in group lottery purchases and share winnings. As the Product Designer, I was responsible for redesigning the user experience to boost user retention and engagement. The challenge was to create a trustworthy, engaging platform that would encourage users to participate in group lottery activities while maintaining transparency and security.",
  outcomes: [
    "🏆 User retention boosted by 30%",
    "🏆 Group participation increased by 45%",
    "🏆 User trust score improved by 40%",
  ],
  problemStatement:
    "Hatchster was experiencing low user retention and engagement, with many users signing up but not participating in lottery groups or returning to the platform. The business goal was to redesign the user experience to build trust, increase engagement, and encourage regular participation in lottery groups. Success would be measured by improved retention rates, increased group participation, and higher user lifetime value.",
  userResearch: {
    description:
      "I conducted a user research session to observe how users interact with lottery products and how these fit into their weekly routines and social activities. From this study we discovered the following insights:",
    considerations: [
      "Users needed more frequent engagement opportunities beyond the lottery draws to maintain interest",
      "There was a strong correlation between instant gratification and user satisfaction",
    ],
  },
  designSolution:
    "The solution focused on building trust through transparency, creating engaging social features, and simplifying the group lottery process. I redesigned the user interface to clearly show group progress, winnings distribution, and past results. The new design included social proof elements, achievement systems, and clear communication about how the platform works.",
  designSystem: {
    description:
      "I decided to work with Brad Frost solution: Atomic Design. This approach divides design components into 5 different categories: atoms, molecules, organisms, templates, and pages.",
    images: [
      {
        src: "/portfolio-hatchster/Lotto_Atomic.png",
        caption: "Brand",
      },
      {
        src: "/portfolio-hatchster/Lotto_Brand_Guideline.png",
      },
    ],
  },
  userFeedback:
    "User testing revealed that trust and transparency were the primary concerns for new users. The redesigned interface with clear group information, winner histories, and transparent fee structures significantly improved user confidence and engagement.",
  result: {
    description:
      "The redesigned Hatchster platform successfully addressed user retention challenges through improved trust and engagement features. The new design made group lottery participation more transparent and social, leading to increased user retention and platform growth.",
    achievements: [
      "🏆 User retention boosted by 30%",
      "🏆 Group participation increased by 45%",
      "🏆 User trust score improved by 40%",
    ],
  },
  nextSteps: {
    title: "Where do we go from here?",
    description:
      "First, I would recommend conducting usability testing again with new participants. Have the changes made it easier for users to join lottery groups and understand the platform's transparency features?",
    alternativeApproach:
      "If usability testing is not an option, I would recommend tracking the following metrics:",
    metrics: [
      "What percentage of new users are joining their first lottery group within 7 days?",
      "How has the redesign impacted group formation rates and user trust indicators?",
      "Are users finding it easier to track their group participation and winnings history?",
    ],
  },
  learnings: {
    title: "What I learned",
    insight: "Communicating design decisions in light of the business goals.",
    description:
      "It is much easier and natural for me to explain my decisions based on user insights. However, it is equally valuable to consider how those decisions also support the business goals and platform monetization strategies.",
  },
  images: {
    hero: "/portfolio-hatchster/Lotto_Social_Header.png",
    wireframe: "/portfolio-hatchster/Lotto_Cards_on_home_screen2x.png",
    wireframeCaption:
      "Wireframe designs showing the redesigned lottery group interface with improved transparency features, social proof elements, and clear group progress indicators designed to build user trust and encourage participation.",
    hiFidelity: "/portfolio-hatchster/Lotto_Cards_on_home_screen2.png",
    hiFidelityCaption:
      "High-fidelity designs of the lottery group cards featuring enhanced visual hierarchy, trust indicators, and social engagement elements that contributed to the 30% increase in user retention and 45% boost in group participation.",
  },
  metadata: {
    year: "2022",
    duration: "5 months",
    role: "Product Designer",
    company: "Hatchster",
  },
};

export const hatchsterContributions = [
  "User Research",
  "Trust & Safety Design",
  "Visual Design",
  "Prototyping",
  "User Testing",
  "Social Features",
];

export const hatchsterTeam = [
  "1 Product Designer (me)",
  "2 Frontend Developers",
  "1 Backend Developer",
  "1 Product Manager",
  "1 Marketing Manager",
];
