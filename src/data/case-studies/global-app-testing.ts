import { CaseStudy } from "@/types/projects";

export const globalAppTestingContributions = [
  "User research",
  "UX/UI design",
  "Prototyping",
  "B2B and B2C UX",
];

export const globalAppTestingTeam = [
  "1 Product Designer (me)",
  "5 Engineers",
  "1 Product Manager",
  "1 Data Scientist",
];

export const globalAppTestingCaseStudy: CaseStudy = {
  slug: "global-app-testing",
  title: "Design an AI testing platform",
  overview:
    "Global App Testing (GAT) helps businesses ensure their software quality through crowdsourced testing. In order to meet revenue targets, the product team was given the challenge of integrating AI and machine learning into the testing processes. After brainstorming, we decided to focus on creating an AI-powered platform to assist Test Managers. My early assumption was that users would be skeptical about AI taking over parts of their job. I conducted extensive user research to figure out how to introduce AI in a way that would appeal to users and meet the busines goals.",
  outcomes: [
    "🏆 Successfully launched an MVP in 6 months",
    "🏆 Operational overhead reduced by 20%",
    "🏆 Adoption reached 35% in the first 6 months",
  ],
  problemStatement:
    "Since this project was directly aligned with a critical business objective, I prioritized understanding the project's purpose and success criteria before beginning any research or design work. GAT was seeking opportunities to reduce operational overhead and free up Test Manager capacity, allowing them to focus on higher-value activities.",
  userResearch: {
    description:
      "We ran weekly user research sessions to observe Test Managers navigating their current processes. From this study we discovered the following insights:",
    considerations: [
      "The testing process involved distinct stages: launching tests, moderating results, and delivering outcomes.",
      "Test Managers were using spreadsheets for all data management.",
      "Each stage involved multiple manual tasks, consuming significant time.",
    ],
  },
  designSolution:
    "Solution design involved user testing and multiple iterations. High-level logic was mapped out, followed by prototypes. We explored various options, particularly around automating decision-making processes. The challenge was presenting complex testing data in a simple, easy-to-understand way while incorporating AI assistance.",
  userFeedback:
    "Prototypes were iterated on after remote user testing sessions. Users were asked to complete a full testing cycle using the designs. We observed their understanding of the AI-assisted process and followed up to understand how they expected the new system to impact their workflow.",
  result: {
    description:
      "The final design transformed the way Global App Testing Managers run the testing process. The new platform stores and tracks data previously managed in spreadsheets. It uses machine learning and AI to automate most of the Test Managers decisions and actions.",
    achievements: [
      "🏆 Testing efficiency increased by 35%",
      "🏆 User satisfaction improved by 50%",
      "🏆 Test completion rate increased by 28%",
    ],
  },
  nextSteps: {
    title: "Where do we go from here?",
    description:
      "First, I would recommend conducting usability testing again with new participants. Have the changes made it easier for users to complete their tasks?",
    alternativeApproach:
      "If usability testing is not an option, I would recommend tracking the following metrics:",
    metrics: [
      "What percentage of Test Managers are currently using the new software?",
      "How has the new software impacted the testing delivery time and results quality?",
    ],
  },
  learnings: {
    title: "What I learned",
    insight: "Communicating design decisions in light of the business goals.",
    description:
      "It is much easier and natural for me to explain my decisions based on user insights. However, it is equally valuable to consider how those decisions also support the business goals.",
  },
  images: {
    hero: "/portfolio-gat/gat-header.jpg",
    wireframe: "/portfolio-gat/gat-wireframe.png",
    wireframeCaption:
      "Lo-fi Wireframes of the new platform showing the new platform's interface and how it will be used by Test Managers.",
    hiFidelity: "/portfolio-gat/gat-hi-fidelity.png",
    hiFidelityCaption:
      "Hi-fi Designs of the new platform showing how many testers have performed the test, status and progress of the test.",
    userResearchImage: "/portfolio-gat/gat-tickets.png",
    userResearchImageCaption:
      "Miro board analysis of user research findings, mapping out the key insights and pain points discovered during our weekly observation sessions with Test Managers.",
    userResearchImage2: "/portfolio-gat/gat-tickets-2.png",
    userResearchImage2Caption:
      "Spreadsheet used by Test Managers to manually manage their testing process.",
  },
  metadata: {
    year: "2023",
    duration: "6 months",
    role: "Senior Product Designer",
    company: "Global App Testing",
  },
};
