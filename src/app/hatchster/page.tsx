import Image from "next/image";
import { hatchsterContributions } from "@/data/contributions";
import { teamHatchster } from "@/data/teams";
import { hatchsterCaseStudy } from "@/data/hatchsterCaseStudy";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextProject from "@/components/sections/NextProject";
import TagList from "@/components/ui/TagList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lottery App Redesign - Hatchster Case Study",
  description:
    "How I redesigned Lotto Social app to boost user retention by 30%. Gambling app UX design and gamification case study by Rosina Pissaco.",
  keywords: [
    "lottery app design",
    "gambling app UX",
    "gamification design",
    "social gaming app",
    "user retention design",
    "mobile gambling design",
    "ecommerce app design",
    "product designer",
    "Bristol UX designer",
  ],
  openGraph: {
    title: "Lottery App Redesign - Hatchster Case Study",
    description:
      "How I redesigned Lotto Social app to boost user retention by 30%. Gambling app UX design case study.",
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
        <h1>{hatchsterCaseStudy.title}</h1>
      </section>
      <section className="my-grid">
        <h2>Overview</h2>
        <p>{hatchsterCaseStudy.overview}</p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          {hatchsterCaseStudy.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>

      <section className="my-grid flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div>
          <h3>My contribution</h3>
          <TagList tags={hatchsterContributions} />
        </div>
        <div>
          <h3>The team</h3>
          <TagList tags={teamHatchster} />
        </div>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-hatchster/Lotto_Social_Header.png"
          alt="Lotto Social App"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>Understanding the problem</h3>
        <p>{hatchsterCaseStudy.problemStatement}</p>
      </section>
      <section className="my-grid">
        <h3>User observation</h3>
        <p>{hatchsterCaseStudy.userObservation.description}</p>
        <ul className="mt-4 list-inside space-y-2">
          {hatchsterCaseStudy.userObservation.insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </section>
      <section className="my-grid">
        <h3>Designing the solution</h3>
        <p>{hatchsterCaseStudy.designSolution}</p>
      </section>
      <section className="my-image">
        <h3>Lo-fi wireframes</h3>
        <Image
          src="/portfolio-hatchster/Lotto_Cards_on_home_screen2x.png"
          alt="Lotto Social App lo-fidelity wireframes"
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
          src="/portfolio-hatchster/Lotto_Cards_on_home_screen2.png"
          alt="Lotto Social App hi-fidelity designs"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>Design system</h3>
        <p>{hatchsterCaseStudy.designSystem}</p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-hatchster/Lotto_Atomic.png"
          alt="Lotto Social App Design System"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>Brand</h3>
        <p>{hatchsterCaseStudy.brand}</p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-hatchster/Lotto_Brand_Guideline.png"
          alt="Lotto Social App Brand Guidelines"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>User feedback</h3>
        <p>{hatchsterCaseStudy.userFeedback}</p>
      </section>
      <section className="my-grid">
        <h3>The result</h3>
        <p>{hatchsterCaseStudy.result.description}</p>
        <ul className="mt-4 list-inside space-y-2">
          {hatchsterCaseStudy.result.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
