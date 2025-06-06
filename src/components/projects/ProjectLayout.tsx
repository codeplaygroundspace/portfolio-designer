import Image from "next/image";
import {
  CaseStudy,
  ProjectContribution,
  ProjectTeam,
  TableOfContentsSection,
} from "@/types/projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextProject from "@/components/sections/NextProject";
import TagList from "@/components/ui/TagList";
import ProgressIndicator from "./ProgressIndicator";
import TableOfContents from "./TableOfContents";
import MetricCard from "./MetricCard";

interface ProjectLayoutProps {
  caseStudy: CaseStudy;
  contributions: string[];
  team: string[];
  tableOfContents?: TableOfContentsSection[];
}

const ProjectLayout = ({
  caseStudy,
  contributions,
  team,
  tableOfContents,
}: ProjectLayoutProps) => {
  // Default table of contents if none provided
  const defaultTOC: TableOfContentsSection[] = [
    { id: "overview", title: "Overview" },
    { id: "achievements", title: "Key Achievements" },
    { id: "contribution", title: "My Contribution & Team" },
  ];

  const sections = tableOfContents || defaultTOC;

  return (
    <>
      <ProgressIndicator />
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:flex lg:gap-8 lg:items-start">
          <TableOfContents sections={sections} />

          <main className="flex-1 max-w-4xl lg:min-h-screen">
            {/* Hero Section */}
            <section className="mb-8">
              <h1>{caseStudy.title}</h1>
            </section>

            {/* Overview */}
            <section id="overview" className="mb-8">
              <h2>Overview</h2>
              <p className="text-lg leading-relaxed">{caseStudy.overview}</p>
            </section>

            {/* Key Achievements */}
            <section id="achievements" className="mb-8">
              <h3>Key Achievements</h3>
              <div className="grid gap-4 md:grid-cols-3 mt-6">
                {caseStudy.outcomes.map((outcome, index) => (
                  <MetricCard key={index} metric={outcome} />
                ))}
              </div>
            </section>

            {/* Contribution and Team */}
            <section id="contribution" className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3>My Contribution</h3>
                  <div className="mt-4">
                    <TagList tags={contributions} />
                  </div>
                </div>
                <div>
                  <h3>The Team</h3>
                  <div className="mt-4">
                    <TagList tags={team} />
                  </div>
                </div>
              </div>
            </section>

            {/* Hero Image */}
            {caseStudy.images.hero && (
              <section className="mb-8">
                <Image
                  src={caseStudy.images.hero}
                  alt={`${caseStudy.title} hero image`}
                  className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300"
                  width={1640}
                  height={400}
                  priority
                />
              </section>
            )}

            {/* Problem Statement */}
            <section id="problem" className="mb-8">
              <h3>Understanding the Problem</h3>
              <div className="mt-4">
                <p>{caseStudy.problemStatement}</p>
              </div>
            </section>

            {/* Competitor Research */}
            <section id="research" className="mb-8">
              <h3>Competitor Research</h3>
              <div className="mt-4">
                <p className="mb-6">
                  {caseStudy.competitorResearch.description}
                </p>
                <div className="space-y-3">
                  {caseStudy.competitorResearch.considerations.map(
                    (consideration, index) => (
                      <div key={index} className="flex items-start gap-3 p-4">
                        <span className="text-foreground-secondary font-medium text-sm mt-0.5">
                          →
                        </span>
                        <p className="text-sm">{consideration}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>

            {/* Design Solution */}
            <section id="solution" className="mb-8">
              <h3>Designing the Solution</h3>
              <div className="mt-4">
                <p>{caseStudy.designSolution}</p>
              </div>
            </section>

            {/* Wireframes */}
            {caseStudy.images.wireframe && (
              <section id="wireframes" className="mb-8">
                <h3>Lo-fi Wireframes</h3>
                <Image
                  src={caseStudy.images.wireframe}
                  alt={`${caseStudy.title} wireframes`}
                  className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300 mt-4"
                  width={2640}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </section>
            )}

            {/* Hi-fi Designs */}
            {caseStudy.images.hiFidelity && (
              <section id="hifi" className="mb-8">
                <h3>Hi-fi Designs</h3>
                <Image
                  src={caseStudy.images.hiFidelity}
                  alt={`${caseStudy.title} hi-fidelity designs`}
                  className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300 mt-4"
                  width={1640}
                  height={400}
                />
              </section>
            )}

            {/* Micro Animations */}
            {caseStudy.images.animations &&
              caseStudy.images.animations.length > 0 && (
                <section id="animations" className="mb-8">
                  <h3>Micro Animations</h3>
                  <div className="grid gap-6 md:grid-cols-2 mt-4">
                    {caseStudy.images.animations.map((animation, index) => (
                      <div key={index} className="aspect-[4/3]">
                        <Image
                          src={animation.src}
                          alt={animation.alt}
                          className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300"
                          width={600}
                          height={450}
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

            {/* Web App Design */}
            {caseStudy.webAppDesign && (
              <section id="webapp" className="mb-8">
                <h3>Web App Design</h3>
                <div className="mt-4">
                  <p>{caseStudy.webAppDesign}</p>
                </div>
              </section>
            )}

            {/* Web App Image */}
            {caseStudy.images.webApp && (
              <section className="mb-8">
                <Image
                  src={caseStudy.images.webApp}
                  alt={`${caseStudy.title} web application`}
                  className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300"
                  width={1640}
                  height={400}
                  priority
                />
              </section>
            )}

            {/* Third-party Integrations */}
            {caseStudy.thirdPartyIntegrations && (
              <section id="integrations" className="mb-8">
                <h3>Third-party Integrations</h3>
                <div className="mt-4">
                  <p>{caseStudy.thirdPartyIntegrations}</p>
                </div>
              </section>
            )}

            {/* API Image */}
            {caseStudy.images.api && (
              <section className="mb-8">
                <Image
                  src={caseStudy.images.api}
                  alt={`${caseStudy.title} API`}
                  className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300"
                  width={1640}
                  height={400}
                  priority
                />
              </section>
            )}

            {/* User Feedback */}
            {caseStudy.userFeedback && (
              <section id="feedback" className="mb-8">
                <h3>User Feedback</h3>
                <div className="mt-4">
                  <p>{caseStudy.userFeedback}</p>
                </div>
              </section>
            )}

            {/* Final Results */}
            <section id="results" className="mb-8">
              <h3>The Result</h3>
              <div className="mt-4">
                <p className="mb-6 text-lg">{caseStudy.result.description}</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {caseStudy.result.achievements.map((achievement, index) => (
                    <MetricCard key={index} metric={achievement} />
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <NextProject />
      <Footer />
    </>
  );
};

export default ProjectLayout;
