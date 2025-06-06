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
  competitorResearch: {
    description:
      "I analyzed various lottery platforms, social gaming apps, and group buying platforms to understand user expectations and identify opportunities for improvement:",
    considerations: [
      "👉 How do users build trust in online lottery platforms?",
      "👉 What social features encourage group participation?",
      "👉 How can we make the lottery experience more engaging and transparent?",
    ],
  },
  designSolution:
    "The solution focused on building trust through transparency, creating engaging social features, and simplifying the group lottery process. I redesigned the user interface to clearly show group progress, winnings distribution, and past results. The new design included social proof elements, achievement systems, and clear communication about how the platform works.",
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
  images: {
    hero: "/portfolio-hatchster/Lotto_Social_Header.png",
    wireframe: "/portfolio-hatchster/Lotto_Atomic.png",
    hiFidelity: "/portfolio-hatchster/Lotto_Cards_on_home_screen2x.png",
  },
  metadata: {
    year: "2022",
    duration: "5 months",
    role: "Product Designer",
    company: "Hatchster",
  },
};
