import { CaseStudy } from "@/types/projects";

export const spokedContributions = [
  "User Research",
  "Information Architecture",
  "Wireframing",
  "Visual Design",
  "Prototyping",
  "User Testing",
];

export const spokedTeam = [
  "1 Product Designer (me)",
  "2 iOS Developer",
  "2 Backend Developers",
  "CEO",
];

export const spokedCaseStudy: CaseStudy = {
  slug: "spoked",
  title: "Redesigning Spoked",
  overview:
    "Spoked is a smart cycling coach offering personalised training plans. To meet revenue targets, I was tasked with redesigning the mobile app to lower the barrier for beginners and increase new user retention.The existing app's complexity made it difficult for newcomers to engage. After conducting user research, I simplified the content and interface to create a more intuitive experience, making the app accessible for novices while still engaging for advanced cyclists.",
  outcomes: [
    "🏆 Projected revenue increase of 15%",
    "🏆 New users retention increased by 22%",
    "🏆 Annual revenue targets achived",
  ],
  problemStatement:
    "As this project was directly linked to a key business goal, I needed to fully understand the project purpose and the criteria for success before starting any research or design work. Spoked aimed to increase the percentage of new users and improve retention.",
  userResearch: {
    description:
      "I conducted a user research session to observe how users interact with the current product and how it fits into their training sessions and daily routines. From this study we discovered the following insights:",
    considerations: [
      "Users wanted personalised training plans based on their individual goals.",
      "Users sometimes stopped using the app when injured or on holiday.",
      "Different user groups had varied training goals and needs.",
    ],
  },
  designSolution:
    "The solution focused on streamlining the user journey from onboarding through daily use. I redesigned the information architecture to prioritize core features and created a progressive disclosure system that gradually introduced advanced features as users became more engaged. The new design emphasized visual feedback and achievement systems to motivate continued use.",
  hiFidelityScreens: {
    title: "Hi fidelity screens",
    video: {
      url: "https://www.youtube.com/watch?v=l281eYRTF2Y",
      title: "Spoked Hi-Fi Screens Demo",
      caption:
        "Interactive demonstration of the final high-fidelity designs showcasing the streamlined user interface and improved navigation flow that contributed to the 22% increase in new user retention.",
    },
  },
  designSystem: {
    description:
      "To ensure consistency and scalability across the Spoked app, I design a comprehensive design system. This system includes a carefully curated color palette, typography hierarchy, and a library of reusable components. Typography selections were made to optimize legibility for cyclists who may be viewing the app in various lighting conditions and while in motion.",
    images: [
      "/portfolio-spoked/spoked-Colour-palette@2x.jpeg",
      "/portfolio-spoked/spoked-Colour+palette@2x-1.jpeg",
    ],
  },
  components: {
    video: {
      url: "https://www.youtube.com/watch?v=tX0BvokB4Vc",
      title: "Spoked Components Demo",
      caption:
        "Comprehensive overview of the modular component library designed for consistency across the Spoked app, featuring cycling-optimized typography and accessibility considerations for outdoor use.",
    },
  },
  prototype: {
    video: {
      url: "https://www.youtube.com/watch?v=N7kU7BBNg7c",
      title: "Spoked Prototype Demo",
      caption:
        "Interactive prototype walkthrough demonstrating the simplified onboarding process and core user journeys that helped validate design decisions and reduce complexity for new cyclists.",
    },
  },
  userFeedback:
    "Through user testing sessions with both new and existing users, we validated the simplified interface and identified key pain points in the original design. Users appreciated the cleaner interface and found the new onboarding process much more intuitive.",
  result: {
    description:
      "The redesigned Spoked app successfully addressed the retention challenges with a more intuitive user experience. The simplified interface and improved onboarding process made the app more accessible to new users while maintaining the depth that existing users valued.",
    achievements: [
      "🏆 New user retention increased by 22%",
      "🏆 User engagement improved by 35%",
      "🏆 App Store rating increased to 4.8 stars",
    ],
  },
  nextSteps: {
    title: "Where do we go from here?",
    description:
      "First, I would recommend conducting usability testing again with new participants. Have the changes made it easier for users to complete their training setup and daily cycling tasks?",
    alternativeApproach:
      "If usability testing is not an option, I would recommend tracking the following metrics:",
    metrics: [
      "What percentage of new users are completing the onboarding process?",
      "How has the redesign impacted training plan completion rates and user engagement?",
      "Are users finding it easier to track their cycling progress and achieve their fitness goals?",
    ],
  },
  learnings: {
    title: "What I learned",
    insight: "Communicating design decisions in light of the business goals.",
    description:
      "It is much easier and natural for me to explain my decisions based on user insights. However, it is equally valuable to consider how those decisions also support the business goals and revenue targets.",
  },
  images: {
    hero: "/portfolio-spoked/header.png",
    wireframe: "/portfolio-spoked/spoked-User-flow@2x.jpg",
    wireframeCaption:
      "User flow wireframes showing the simplified onboarding process and core user journeys, designed to reduce complexity and improve new user retention.",
    hiFidelity: "/portfolio-spoked/spoked-Plan-builder@2x.png",
    hiFidelityCaption:
      "High-fidelity designs of the plan builder interface, featuring a clean and intuitive design that makes creating personalised training plans accessible to cyclists of all levels.",
    userResearchImage: "/portfolio-spoked/spoked-Journey-map@2x.jpeg",
    userResearchImageCaption:
      "User's Journey Map showing the emotional journey and key touchpoints throughout the cycling training app experience, from creating an account to setup weekly training plans.",
  },
  metadata: {
    year: "2021",
    duration: "4 months",
    role: "Product Designer",
    company: "Spoked",
  },
};
