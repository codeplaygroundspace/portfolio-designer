import Image from "next/image";
import { gatContributions } from "@/data/contributions";
import { teamGat } from "@/data/teams";
import { gatCaseStudy } from "@/data/gatCaseStudy";
import Header from "@/components/layout/Header";
import NextProject from "@/components/sections/NextProject";
import Footer from "@/components/layout/Footer";
import TagList from "@/components/ui/TagList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Testing Platform Design - Global App Testing Case Study",
  description:
    "How I designed an AI-powered testing platform that increased efficiency by 35% and reduced operational overhead by 20%. Product design case study by Rosina Pissaco.",
  keywords: [
    "AI platform design",
    "testing platform UX",
    "B2B software design",
    "product designer",
    "UX case study",
    "machine learning interface",
    "SaaS dashboard design",
    "user research",
    "Bristol product designer",
  ],
  openGraph: {
    title: "AI Testing Platform Design - Global App Testing Case Study",
    description:
      "How I designed an AI-powered testing platform that increased efficiency by 35%. Product design case study.",
    type: "article",
  },
};

export default function GlobalAppTesting() {
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
        <h1>{gatCaseStudy.title}</h1>
      </section>
      <section className="my-grid">
        <h2>Overview</h2>
        <p>{gatCaseStudy.overview}</p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          {gatCaseStudy.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>
      </section>
      <section className="my-grid flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div>
          <h3>My contribution</h3>
          <TagList tags={gatContributions} />
        </div>
        <div>
          <h3>The team</h3>
          <TagList tags={teamGat} />
        </div>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-header.jpg"
          alt="Global App Testing SaSS Dashboard mockup"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>Understanding the problem</h3>
        <p>{gatCaseStudy.problemStatement}</p>
      </section>
      <section className="my-grid">
        <h3>User research</h3>
        <p>{gatCaseStudy.userResearch.description}</p>
        <ul className="mt-4 list-inside space-y-2">
          {gatCaseStudy.userResearch.insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-tickets.png"
          alt="Image of Miro Board where we map out all Test Manager tasks"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-tickets-2.png"
          alt="Image of spreadsheet Test Managers were using"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-grid">
        <h3>Designing the solution</h3>
        <p>{gatCaseStudy.designSolution}</p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-wireframe.png"
          alt="Image of the software as low fidelity wireframe"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-hi-fidelity.png"
          alt="Image of the software as Hi-fidelity mockup"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>User feedback</h3>
        <p>{gatCaseStudy.userFeedback}</p>
      </section>
      <section className="my-grid">
        <h3>The result</h3>
        <p>{gatCaseStudy.result.description}</p>
        <ul className="mt-4 list-inside space-y-2">
          {gatCaseStudy.result.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
      <section className="my-grid">
        <h3>Where do we go from here?</h3>
        <p>{gatCaseStudy.nextSteps.description}</p>
        <p>{gatCaseStudy.nextSteps.recommendations}</p>
        <ul className="mt-4 list-inside space-y-2">
          {gatCaseStudy.nextSteps.metrics.map((metric, index) => (
            <li key={index}>{metric}</li>
          ))}
        </ul>
      </section>
      <section className="my-grid">
        <h3>What I learned</h3>
        <p>
          <strong>{gatCaseStudy.learnings.title}</strong>
        </p>
        <p>{gatCaseStudy.learnings.description}</p>
      </section>
    </>
  );
}
