import Image from "next/image";
import { spokedContributions } from "@/data/contributions";
import { teamSpoked } from "@/data/teams";
import { spokedCaseStudy } from "@/data/spokedCaseStudy";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextProject from "@/components/sections/NextProject";
import TagList from "@/components/ui/TagList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cycling App Redesign - Spoked AI Coach Case Study",
  description:
    "How I redesigned a cycling app to boost new user retention by 22% and increase revenue by 15%. Mobile app UX design case study by Rosina Pissaco.",
  keywords: [
    "mobile app design",
    "cycling app UX",
    "fitness app design",
    "AI coach interface",
    "user retention design",
    "mobile UX designer",
    "app redesign",
    "product designer Bristol",
    "B2C app design",
  ],
  openGraph: {
    title: "Cycling App Redesign - Spoked AI Coach Case Study",
    description:
      "How I redesigned a cycling app to boost new user retention by 22%. Mobile app design case study.",
    type: "article",
  },
};

export default function Spoked() {
  return (
    <>
      <Header />
      <CaseStudy />
      <NextProject />
      <Footer />
    </>
  );
}

function EmbeddedVideoOne() {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/N7kU7BBNg7c?si=UJgLuqp3PSlrDueB"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function EmbeddedVideoTwo() {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/l281eYRTF2Y?si=AkGnQ0INfN29dxjK"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function EmbeddedVideoThree() {
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tX0BvokB4Vc?si=U1y2xSffm7vztCCQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function CaseStudy() {
  return (
    <>
      <section className="my-grid">
        <h1>{spokedCaseStudy.title}</h1>
      </section>
      <section className="my-grid">
        <h2>Overview</h2>
        <p>{spokedCaseStudy.overview}</p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          {spokedCaseStudy.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>

      <section className="my-grid flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div>
          <h3>My contribution</h3>
          <TagList tags={spokedContributions} />
        </div>
        <div>
          <h3>The team</h3>
          <TagList tags={teamSpoked} />
        </div>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/Spoked-intro-case-study.png"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>

      <section className="my-grid">
        <h3>Understanding the problem</h3>
        <p>{spokedCaseStudy.problemStatement}</p>
      </section>
      <section className="my-grid">
        <h3>User observation</h3>
        <p>{spokedCaseStudy.userObservation.description}</p>
        <ul className="mt-4 list-inside space-y-2">
          {spokedCaseStudy.userObservation.insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-Journey-map@2x.jpeg"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>

      <section className="my-grid">
        <h3>Designing the solution</h3>
        <p>{spokedCaseStudy.designSolution}</p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-User-flow@2x.jpg"
          alt="Spoked"
          className="my-image"
          width={2640}
          height={400}
          priority
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-Plan-builder@2x.png"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-image">
        <h3>Hi fidelity screens</h3>
        <EmbeddedVideoTwo />
      </section>
      <section className="my-grid">
        <h3>Design system</h3>
        <p>{spokedCaseStudy.designSystem}</p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-Colour-palette@2x.jpeg"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-typography.jpeg"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-image">
        <h3>Components</h3>
        <EmbeddedVideoThree />
      </section>
      <section className="my-grid">
        <h3>User feedback</h3>
        <p>{spokedCaseStudy.userFeedback}</p>
      </section>
      <section className="my-image">
        <h3>Prototype</h3>
        <EmbeddedVideoOne />
      </section>
      <section className="my-grid">
        <h3>The result</h3>
        <p>{spokedCaseStudy.result.description}</p>
        <ul className="mt-4 list-inside space-y-2">
          {spokedCaseStudy.result.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
