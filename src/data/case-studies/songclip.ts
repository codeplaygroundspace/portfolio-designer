import { CaseStudy } from "@/types/projects";

export const songclipCaseStudy: CaseStudy = {
  slug: "songclip",
  title: "Redesigning Songclip",
  overview:
    "Songclip is a SaaS platform for integrating licensed music on social and digital platforms. As the solo Product Designer, I was tasked with creating a user-friendly interface for our complex music clip integration system. My initial challenge was to design an intuitive search and integration process for +50 millions of 5-30 second music clips. I conducted extensive competitor research to understand how various platforms – from social media to dating apps – could seamlessly incorporate popular music snippets.",
  outcomes: [
    "🏆 iOS App got Featured in the App Store",
    "🏆 Average clip search and share time reduced by 21%",
    "🏆 The 10 Most Innovative Companies in Music 2020",
  ],
  problemStatement:
    "Songclip was seeking to address a significant gap in the digital content market: the lack of accessible, legally compliant tools for integrating short, popular music clips into social media posts, messages, and other digital content. The business goal was clear - to create a solution that would allow platforms to easily incorporate 5-30 second meta-tagged music clips, enriching user experiences across various apps and potentially opening new revenue streams. Success would be measured by the seamless integration of our technology into partner platforms and the subsequent increase in user engagement with music-enhanced content.",
  userResearch: {
    description:
      "Integration of music clips into social and messaging platforms is not entirely new, so after understanding the requirements, I began by examining existing solutions. This investigation highlighted several key considerations:",
    considerations: [
      "How do we curate and present music clips to match user preferences?",
      "How do we ensure seamless integration across various platforms?",
      "What UI elements will feel familiar to users of TikTok, Instagram, and Snapchat?",
    ],
  },
  designSolution:
    "The solution design process for Songclip involved extensive iteration and user testing. I initially created a detailed user journey map to outline key touchpoints and interactions. This was followed by developing prototypes and exploring various approaches to music discovery, clip preview, and seamless sharing across platforms. The challenge was to distill complex music licensing and integration features into a streamlined, intuitive experience that would be accessible for content creators and social media users.",
  videos: [
    {
      url: "https://www.youtube.com/watch?v=l281eYRTF2Y",
      title: "Songclip Demo",
      description: "Overview of the Songclip platform and user experience",
    },
  ],
  webAppDesign:
    "In order to reach non-iOS users, I also designed a Progressive Web Application suitable for users on desktop and mobile.",
  thirdPartyIntegrations:
    "The Songclip API lets other platforms make music part of what's being created, shared, and send. We worked in collaboration with Viber in order to achieve a great integration between these two products.",
  userFeedback:
    "Prototypes were iterated on multiple times after remote user testing sessions. Users were asked to complete a full journey, from searching for a music clip to sharing it on social platforms. We observed their interactions with the search, preview, and sharing tools, and followed up to understand their expectations for music integration in their creative workflows.",
  result: {
    description:
      "The final design transformed how Songclip presents and integrates music clips. The app now provides an intuitive search process with clear preview and editing options and seamless sharing capabilities. The design improvements simplified the user experience and addressed the complexities of copyright compliance and cross-platform compatibility.",
    achievements: [
      "🏆 iOS App got Featured in the App Store",
      "🏆 Average clip search and share time reduced by 21%",
      "🏆 The 10 Most Innovative Companies in Music 2020",
    ],
  },
  nextSteps: {
    title: "Where do we go from here?",
    description:
      "First, I would recommend conducting usability testing again with new participants. Have the changes made it easier for users to discover, preview, and share music clips?",
    alternativeApproach:
      "If usability testing is not an option, I would recommend tracking the following metrics:",
    metrics: [
      "What percentage of users are successfully completing the music search and share flow?",
      "How has the redesign impacted music clip discovery time and user engagement?",
      "Are content creators finding it easier to integrate music into their social media posts?",
    ],
  },
  learnings: {
    title: "What I learned",
    insight: "Communicating design decisions in light of the business goals.",
    description:
      "It is much easier and natural for me to explain my decisions based on user insights. However, it is equally valuable to consider how those decisions also support the business goals and platform growth objectives.",
  },
  images: {
    hero: "/portfolio-songclip/songclip-hero.jpeg",
    wireframe: "/portfolio-songclip/songclip-wireframe.jpeg",
    hiFidelity: "/portfolio-songclip/songclip-hifidelity.jpeg",
    webApp: "/portfolio-songclip/songclip-web.jpeg",
    api: "/portfolio-songclip/songclip-api.jpeg",
    animations: [
      {
        src: "/portfolio-songclip/animation-1.gif",
        alt: "Animation 1",
      },
      {
        src: "/portfolio-songclip/animation-2.gif",
        alt: "Animation 2",
      },
      {
        src: "/portfolio-songclip/animation-3.gif",
        alt: "Animation 3",
      },
      {
        src: "/portfolio-songclip/animation-4.gif",
        alt: "Animation 4",
      },
    ],
  },
  metadata: {
    year: "2020",
    duration: "6 months",
    role: "Solo Product Designer",
    company: "Songclip",
  },
};

export const songclipContributions = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Visual Design",
  "User Testing",
  "Design System",
];

export const songclipTeam = [
  "1 Product Designer (me)",
  "2 Frontend Developers",
  "2 Backend Developers",
  "1 Product Manager",
];
