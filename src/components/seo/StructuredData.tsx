import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rosina Pissaco",
    jobTitle: "Senior Product Designer",
    description:
      "Senior Product Designer specializing in B2B/B2C platforms, mobile apps, and user experience design",
    url: "https://rosinapissaco.com",
    sameAs: [
      "https://www.linkedin.com/in/rosieprofile/",
      "https://dribbble.com/rosieportfolio",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bristol",
      addressCountry: "UK",
    },
    knowsAbout: [
      "Product Design",
      "User Experience Design",
      "User Interface Design",
      "Mobile App Design",
      "B2B Software Design",
      "B2C Platform Design",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Figma",
      "AI Platform Design",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Product Designer",
      occupationLocation: {
        "@type": "City",
        name: "Bristol, UK",
      },
      skills: [
        "Product Design",
        "UX Design",
        "UI Design",
        "User Research",
        "Prototyping",
        "Design Systems",
        "Mobile App Design",
        "B2B Software Design",
      ],
    },
    worksFor: {
      "@type": "Organization",
      name: "NestEgg",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
