import { CaseStudy } from "@/types/projects";

export const spokedCaseStudy: CaseStudy = {
  slug: "spoked",
  title: "Redesigning Spoked",
  overview:
    "Spoked is a fitness app designed to help cyclists track their performance and connect with the cycling community. As the Product Designer, I was tasked with simplifying the user experience to boost new user retention. The challenge was to create an intuitive interface that would appeal to both casual cyclists and serious athletes while maintaining the app's comprehensive tracking capabilities.",
  outcomes: [
    "🏆 New user retention increased by 22%",
    "🏆 User engagement improved by 35%",
    "🏆 App Store rating increased to 4.8 stars",
  ],
  problemStatement:
    "Spoked was facing challenges with new user retention, as many users found the initial experience overwhelming and abandoned the app after the first few sessions. The business goal was to simplify the onboarding process and core features to make the app more accessible to casual cyclists while maintaining the advanced features that power users valued. Success would be measured by improved retention rates and increased daily active users.",
  competitorResearch: {
    description:
      "To understand the fitness app landscape, I analyzed leading cycling and fitness applications to identify best practices and opportunities for differentiation:",
    considerations: [
      "👉 How do successful fitness apps onboard new users?",
      "👉 What features are essential vs. nice-to-have for casual cyclists?",
      "👉 How can we balance simplicity with comprehensive tracking?",
    ],
  },
  designSolution:
    "The solution focused on streamlining the user journey from onboarding through daily use. I redesigned the information architecture to prioritize core features and created a progressive disclosure system that gradually introduced advanced features as users became more engaged. The new design emphasized visual feedback and achievement systems to motivate continued use.",
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
  images: {
    hero: "/portfolio-spoked/header.png",
    wireframe: "/portfolio-spoked/spoked-User-flow@2x.jpg",
    hiFidelity: "/portfolio-spoked/spoked-Plan-builder@2x.png",
  },
  metadata: {
    year: "2021",
    duration: "4 months",
    role: "Product Designer",
    company: "Spoked",
  },
};
