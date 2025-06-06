import Image from "next/image";
import { songclipContributions } from "@/data/contributions";
import { teamSongclip } from "@/data/teams";
import { songclipCaseStudy } from "@/data/songclipCaseStudy";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextProject from "@/components/sections/NextProject";
import TagList from "@/components/ui/TagList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music App Optimization - Songclip Case Study",
  description:
    "How I optimized a music app to reduce search time by 21% and got featured in the App Store. Music platform UX design case study by Rosina Pissaco.",
  keywords: [
    "music app design",
    "audio platform UX",
    "social media integration",
    "mobile app optimization",
    "music streaming design",
    "app store featured",
    "product designer",
    "B2C mobile design",
    "Bristol UX designer",
  ],
  openGraph: {
    title: "Music App Optimization - Songclip Case Study",
    description:
      "How I optimized a music app to reduce search time by 21% and got featured in the App Store.",
    type: "article",
  },
};

export default function SongClip() {
  return (
    <>
      <Header />
      <CaseStudy />
      <NextProject />
      <Footer />
    </>
  );
}

function CaseStudy() {
  return (
    <>
      <section className="my-grid">
        <h1>{songclipCaseStudy.title}</h1>
      </section>
      <section className="my-grid">
        <h2>Overview</h2>
        <p>{songclipCaseStudy.overview}</p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          {songclipCaseStudy.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>
      <section className="my-grid flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div>
          <h3>My contribution</h3>
          <TagList tags={songclipContributions} />
        </div>
        <div>
          <h3>The team</h3>
          <TagList tags={teamSongclip} />
        </div>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-songclip/songclip-hero.jpeg"
          alt="Mongclip (Audiobyte) mobile mockup"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>

      <section className="my-grid">
        <h3>Understanding the problem</h3>
        <p>{songclipCaseStudy.problemStatement}</p>
      </section>
      <section className="my-grid">
        <h3>Competitor research</h3>
        <p>{songclipCaseStudy.competitorResearch.description}</p>
        <ul className="mt-4 list-inside space-y-2">
          {songclipCaseStudy.competitorResearch.considerations.map(
            (consideration, index) => (
              <li key={index}>{consideration}</li>
            )
          )}
        </ul>
      </section>
      <section className="my-grid">
        <h3>Designing the solution</h3>
        <p>{songclipCaseStudy.designSolution}</p>
      </section>
      <section className="my-image">
        <h3>Lo-fi wireframes</h3>
        <Image
          src="/portfolio-songclip/songclip-wireframe.jpeg"
          alt="Songclip wireframe"
          className="my-image"
          width={2640}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority
        />
      </section>
      <section className="my-image">
        <h3>Hi-fi designs</h3>
        <Image
          src="/portfolio-songclip/songclip-hifidelity.jpeg"
          alt="Songclip Hi-fidelity mockup"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-image">
        <h3>Micro animations</h3>

        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="aspect-[4/3]">
            <Image
              src="/portfolio-songclip/animation-1.gif"
              alt="Animation1"
              className="my-image"
              width={600}
              height={450}
              unoptimized
            />
          </div>
          <div className="aspect-[4/3]">
            <Image
              src="/portfolio-songclip/animation-2.gif"
              alt="Animation 2"
              className="my-image"
              width={600}
              height={450}
              unoptimized
            />
          </div>
          <div className="aspect-[4/3]">
            <Image
              src="/portfolio-songclip/animation-3.gif"
              alt="Animation 3"
              className="my-image"
              width={600}
              height={450}
              unoptimized
            />
          </div>
          <div className="aspect-[4/3]">
            <Image
              src="/portfolio-songclip/animation-4.gif"
              alt="Animation 4"
              className="my-image"
              width={600}
              height={450}
              unoptimized
            />
          </div>
        </div>
      </section>
      <section className="my-grid">
        <h3>Web App design</h3>
        <p>{songclipCaseStudy.webAppDesign}</p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-songclip/songclip-web.jpeg"
          alt="Songclip Progressive Web
          Application mockup"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>Third-party integrations</h3>
        <p>{songclipCaseStudy.thirdPartyIntegrations}</p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-songclip/songclip-api.jpeg"
          alt="Songclip API"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>User feedback</h3>
        <p>{songclipCaseStudy.userFeedback}</p>
      </section>
      <section className="my-grid">
        <h3>The result</h3>
        <p>{songclipCaseStudy.result.description}</p>
        <ul className="mt-4 list-inside space-y-2">
          {songclipCaseStudy.result.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
