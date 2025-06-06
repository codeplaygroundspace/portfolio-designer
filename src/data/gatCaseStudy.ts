export interface GATCaseStudyContent {
  title: string;
  overview: string;
  outcomes: string[];
  problemStatement: string;
  userResearch: {
    description: string;
    insights: string[];
  };
  designSolution: string;
  userFeedback: string;
  result: {
    description: string;
    achievements: string[];
  };
  nextSteps: {
    description: string;
    recommendations: string;
    metrics: string[];
  };
  learnings: {
    title: string;
    description: string;
  };
}

export const gatCaseStudy: GATCaseStudyContent = {
  title: "Designing an AI Testing Platform",
  overview:
    "Global App Testing (GAT) helps businesses ensure their software quality through crowdsourced testing. In order to meet revenue targets, the product team was given the challenge of integrating AI and machine learning into the testing processes. After brainstorming, we decided to focus on creating an AI-powered platform to assist Test Managers. My early assumption was that users would be skeptical about AI taking over parts of their job. I conducted extensive user research to figure out how to introduce AI in a way that would appeal to users and meet the busines goals.",
  outcomes: [
    "🏆 Successfully launched an MVP in 6 months",
    "🏆 Operational overhead reduced by 20%",
    "🏆 Adoption reached 35% in the first 6 months",
  ],
  problemStatement:
    "As this project tied in directly with a key business goal, before conducting any research or design work I wanted to ensure I had a strong understanding of the reason for the project and what the business would consider a successful outcome. GAT was looking for opportunities to reduce operational overhead and free up Test Managers capacity.",
  userResearch: {
    description:
      "We ran weekly user research session to observe Test Managers navigating their current processes. From this study we discovered the following insights:",
    insights: [
      "👉 The testing process involved distinct stages: launching tests, moderating results, and delivering outcomes.",
      "👉 Test Managers were using spreadsheets for all data management.",
      "👉 Each stage involved multiple manual tasks, consuming significant time.",
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
      "🏆 Successfully launched an MVP in 6 months",
      "🏆 Operational overhead reduced by 20%",
      "🏆 Adoption reached 35% in the first 6 months",
    ],
  },
  nextSteps: {
    description:
      "First, I would recommend conducting usability testing again with new participants. Have the changes made it easier for users to complete their tasks?",
    recommendations:
      "If usability testing is not an option, I would recommend tracking the following metrics:",
    metrics: [
      "👉 What percentage of Test Managers are currently using the new software?",
      "👉 How has the new software impacted the testing delivery time and results quality?",
    ],
  },
  learnings: {
    title: "Communicating design decisions in light of the business goals.",
    description:
      "It is much easier and natural for me to explain my decisions based on user insights. However, it is equally valuable to consider how those decisions also support the business goals.",
  },
};
