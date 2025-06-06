import type { Metadata } from "next";
import { Tinos, Prompt } from "next/font/google";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/seo/StructuredData";

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-headers",
});

export const metadata: Metadata = {
  title: {
    default: "Rosina Pissaco - Product Designer",
    template: "%s | Rosina Pissaco",
  },
  description:
    "Hire Rosina Pissaco - Senior Product Designer in Bristol, UK. Specializing in B2B/B2C platforms, mobile apps, and user experience design that increases efficiency by 35% and user retention by 30%. Available for freelance and full-time opportunities.",
  keywords: [
    "hire product designer",
    "freelance product designer",
    "product designer Bristol",
    "UX designer for hire",
    "UI designer Bristol UK",
    "B2B product designer",
    "B2C app designer",
    "mobile app designer",
    "startup product designer",
    "SaaS designer",
    "design systems expert",
    "user research specialist",
    "product design consultant",
    "remote product designer",
    "senior UX designer",
  ],
  authors: [{ name: "Rosina Pissaco" }],
  creator: "Rosina Pissaco",
  metadataBase: new URL("https://rosinapissaco.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rosinapissaco.com",
    siteName: "Rosina Pissaco Portfolio",
    title: "Rosina Pissaco - Product Designer",
    description:
      "Senior Product Designer based in Bristol, UK. Specializing in B2B/B2C platforms and mobile apps.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Rosina Pissaco - Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosina Pissaco - Product Designer",
    description: "Senior Product Designer based in Bristol, UK",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${tinos.variable} ${prompt.variable} antialiased grid grid-cols-12 sm:gap-4 px-4 lg:px-16 2xl:max-w-fit`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
