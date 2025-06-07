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
    { id: "outcome", title: "Outcomes" },
    { id: "contribution", title: "My contribution & team" },
    { id: "results", title: "Results" },
    ...(caseStudy.nextSteps ? [{ id: "next-steps", title: "Next Steps" }] : []),
    ...(caseStudy.learnings
      ? [{ id: "learnings", title: "What I Learned" }]
      : []),
  ];

  const sections = tableOfContents || defaultTOC;

  return (
    <div className="flex flex-col min-h-screen">
      <ProgressIndicator />
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="lg:flex lg:gap-8 lg:items-start">
            <TableOfContents sections={sections} />

            <div className="flex-1 max-w-4xl lg:min-h-screen">
              {/* Hero Section */}
              <section className="mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 tracking-tight text-balance">
                  {caseStudy.title}
                </h1>
              </section>

              {/* Overview */}
              <section id="overview" className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight text-balance">
                  Overview
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                  {caseStudy.overview}
                </p>
              </section>

              <section id="outcome" className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-6 sm:mb-8">
                  Outcomes
                </h3>
                <div className="grid gap-4 md:grid-cols-3 mt-6">
                  {caseStudy.outcomes.map((outcome, index) => (
                    <MetricCard key={index} metric={outcome} />
                  ))}
                </div>
              </section>

              {/* Contribution and Team */}
              <section id="contribution" className="mb-8 sm:mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                      My Contribution
                    </h3>
                    <div className="mt-4">
                      <TagList tags={contributions} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                      The Team
                    </h3>
                    <div className="mt-4">
                      <TagList tags={team} />
                    </div>
                  </div>
                </div>
              </section>

              {/* Hero Image */}
              {caseStudy.images.hero && (
                <section className="mb-8 sm:mb-12">
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
              <section id="problem" className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                  Understanding the Problem
                </h3>
                <div className="mt-4">
                  <p className="text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                    {caseStudy.problemStatement}
                  </p>
                </div>
              </section>

              {/* User Research */}
              <section id="research" className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                  User research
                </h3>
                <div className="mt-4">
                  <p className="mb-6 text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                    {caseStudy.userResearch.description}
                  </p>
                  <div className="space-y-3">
                    {caseStudy.userResearch.considerations.map(
                      (consideration, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-[rgb(var(--background-secondary))]/30 rounded-lg border border-[rgb(var(--border))]"
                        >
                          <span className="text-[rgb(var(--accent))] font-medium text-sm mt-0.5">
                            →
                          </span>
                          <p className="text-sm mb-0 pb-0 sm:text-base leading-relaxed">
                            {consideration}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </section>

              {/* User Research Image */}
              {caseStudy.images.userResearchImage && (
                <section className="mb-8 sm:mb-12">
                  <Image
                    src={caseStudy.images.userResearchImage}
                    alt={`${caseStudy.title} user research insights`}
                    className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300"
                    width={1640}
                    height={400}
                    priority
                  />
                  {caseStudy.images.userResearchImageCaption && (
                    <figcaption className="mt-4 text-xs text-[rgb(var(--foreground-secondary))] text-center italic leading-relaxed">
                      {caseStudy.images.userResearchImageCaption}
                    </figcaption>
                  )}
                </section>
              )}

              {/* User Research Image 2 */}
              {caseStudy.images.userResearchImage2 && (
                <section className="mb-8 sm:mb-12">
                  <Image
                    src={caseStudy.images.userResearchImage2}
                    alt={`${caseStudy.title} user research insights 2`}
                    className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300"
                    width={1640}
                    height={400}
                    priority
                  />
                  {caseStudy.images.userResearchImage2Caption && (
                    <figcaption className="mt-4 text-xs text-[rgb(var(--foreground-secondary))] text-center italic leading-relaxed">
                      {caseStudy.images.userResearchImage2Caption}
                    </figcaption>
                  )}
                </section>
              )}

              {/* Design Solution */}
              <section id="solution" className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                  Designing the Solution
                </h3>
                <div className="mt-4">
                  <p className="text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                    {caseStudy.designSolution}
                  </p>
                </div>
              </section>

              {/* Wireframes */}
              {caseStudy.images.wireframe && (
                <section id="wireframes" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    Lo-fi Wireframes
                  </h3>
                  <Image
                    src={caseStudy.images.wireframe}
                    alt={`${caseStudy.title} wireframes`}
                    className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300 mt-4"
                    width={2640}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                  {caseStudy.images.wireframeCaption && (
                    <figcaption className="mt-4 text-xs text-[rgb(var(--foreground-secondary))] text-center italic leading-relaxed">
                      {caseStudy.images.wireframeCaption}
                    </figcaption>
                  )}
                </section>
              )}

              {/* Hi-fi Designs */}
              {caseStudy.images.hiFidelity && (
                <section id="hifi" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    Hi-fi Designs
                  </h3>
                  <Image
                    src={caseStudy.images.hiFidelity}
                    alt={`${caseStudy.title} hi-fidelity designs`}
                    className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300 mt-4"
                    width={1640}
                    height={400}
                  />
                  {caseStudy.images.hiFidelityCaption && (
                    <figcaption className="mt-4 text-xs text-[rgb(var(--foreground-secondary))] text-center italic leading-relaxed">
                      {caseStudy.images.hiFidelityCaption}
                    </figcaption>
                  )}
                </section>
              )}

              {/* Hi fidelity screens with video */}
              {caseStudy.hiFidelityScreens && (
                <section id="hifi-screens" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    {caseStudy.hiFidelityScreens.title}
                  </h3>
                  {caseStudy.hiFidelityScreens.video && (
                    <div className="mt-4">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                        <iframe
                          src={`https://www.youtube.com/embed/${
                            caseStudy.hiFidelityScreens.video.url.split("v=")[1]
                          }`}
                          title={
                            caseStudy.hiFidelityScreens.video.title ||
                            "Hi-fidelity screens demo"
                          }
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      {caseStudy.hiFidelityScreens.video.description && (
                        <p className="mt-4 text-sm text-[rgb(var(--foreground-secondary))] text-center italic">
                          {caseStudy.hiFidelityScreens.video.description}
                        </p>
                      )}
                      {caseStudy.hiFidelityScreens.video.caption && (
                        <figcaption className="mt-4 text-xs text-[rgb(var(--foreground-secondary))] text-center italic leading-relaxed">
                          {caseStudy.hiFidelityScreens.video.caption}
                        </figcaption>
                      )}
                    </div>
                  )}
                </section>
              )}

              {/* Design System */}
              {caseStudy.designSystem && (
                <section id="design-system" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    Design system
                  </h3>
                  <div className="mt-4">
                    <p className="text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))] mb-6">
                      {caseStudy.designSystem.description}
                    </p>
                    {caseStudy.designSystem.images &&
                      caseStudy.designSystem.images.length > 0 && (
                        <div className="space-y-6">
                          {caseStudy.designSystem.images.map((image, index) => {
                            const imageSrc =
                              typeof image === "string" ? image : image.src;
                            const imageCaption =
                              typeof image === "string"
                                ? undefined
                                : image.caption;

                            return (
                              <div key={index}>
                                <Image
                                  src={imageSrc}
                                  alt={`${caseStudy.title} design system ${
                                    index + 1
                                  }`}
                                  className="rounded-2xl w-full hover:shadow-lg transition-shadow duration-300"
                                  width={1640}
                                  height={400}
                                  priority
                                />
                                {imageCaption && (
                                  <figcaption className="mt-4 text-xs text-[rgb(var(--foreground-secondary))] text-center italic leading-relaxed">
                                    {imageCaption}
                                  </figcaption>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                  </div>
                </section>
              )}

              {/* Components */}
              {caseStudy.components && (
                <section id="components" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    Components
                  </h3>
                  {caseStudy.components.video && (
                    <div className="mt-4">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                        <iframe
                          src={`https://www.youtube.com/embed/${
                            caseStudy.components.video.url.split("v=")[1]
                          }`}
                          title={
                            caseStudy.components.video.title ||
                            "Components demo"
                          }
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      {caseStudy.components.video.description && (
                        <p className="mt-4 text-sm text-[rgb(var(--foreground-secondary))] text-center italic">
                          {caseStudy.components.video.description}
                        </p>
                      )}
                      {caseStudy.components.video.caption && (
                        <figcaption className="mt-4 text-xs text-[rgb(var(--foreground-secondary))] text-center italic leading-relaxed">
                          {caseStudy.components.video.caption}
                        </figcaption>
                      )}
                    </div>
                  )}
                </section>
              )}

              {/* Prototype */}
              {caseStudy.prototype && (
                <section id="prototype" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    Prototype
                  </h3>
                  {caseStudy.prototype.video && (
                    <div className="mt-4">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                        <iframe
                          src={`https://www.youtube.com/embed/${
                            caseStudy.prototype.video.url.split("v=")[1]
                          }`}
                          title={
                            caseStudy.prototype.video.title || "Prototype demo"
                          }
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      {caseStudy.prototype.video.description && (
                        <p className="mt-4 text-sm text-[rgb(var(--foreground-secondary))] text-center italic">
                          {caseStudy.prototype.video.description}
                        </p>
                      )}
                      {caseStudy.prototype.video.caption && (
                        <figcaption className="mt-4 text-xs text-[rgb(var(--foreground-secondary))] text-center italic leading-relaxed">
                          {caseStudy.prototype.video.caption}
                        </figcaption>
                      )}
                    </div>
                  )}
                </section>
              )}

              {/* Micro Animations */}
              {caseStudy.images.animations &&
                caseStudy.images.animations.length > 0 && (
                  <section id="animations" className="mb-8 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                      Micro Animations
                    </h3>
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
                <section id="webapp" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    Web App Design
                  </h3>
                  <div className="mt-4">
                    <p className="text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                      {caseStudy.webAppDesign}
                    </p>
                  </div>
                </section>
              )}

              {/* Web App Image */}
              {caseStudy.images.webApp && (
                <section className="mb-8 sm:mb-12">
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
                <section id="integrations" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    Third-party Integrations
                  </h3>
                  <div className="mt-4">
                    <p className="text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                      {caseStudy.thirdPartyIntegrations}
                    </p>
                  </div>
                </section>
              )}

              {/* API Image */}
              {caseStudy.images.api && (
                <section className="mb-8 sm:mb-12">
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
                <section id="feedback" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    User Feedback
                  </h3>
                  <div className="mt-4">
                    <p className="text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                      {caseStudy.userFeedback}
                    </p>
                  </div>
                </section>
              )}

              {/* Final Results */}
              <section id="results" className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                  The Result
                </h3>
                <div className="mt-4">
                  <p className="mb-6 text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                    {caseStudy.result.description}
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {caseStudy.result.achievements.map((achievement, index) => (
                      <MetricCard key={index} metric={achievement} />
                    ))}
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              {caseStudy.nextSteps && (
                <section id="next-steps" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    {caseStudy.nextSteps.title}
                  </h3>
                  <div className="mt-4">
                    <p className="mb-6 text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                      {caseStudy.nextSteps.description}
                    </p>
                    <p className="mb-4 text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                      {caseStudy.nextSteps.alternativeApproach}
                    </p>
                    <div className="space-y-3">
                      {caseStudy.nextSteps.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-[rgb(var(--background-secondary))]/30 rounded-lg border border-[rgb(var(--border))]"
                        >
                          <span className="text-[rgb(var(--accent))] font-medium text-sm mt-0.5">
                            →
                          </span>
                          <p className="text-sm sm:text-base leading-relaxed">
                            {metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* Learnings */}
              {caseStudy.learnings && (
                <section id="learnings" className="mb-8 sm:mb-12">
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-4">
                    {caseStudy.learnings.title}
                  </h3>
                  <div className="mt-4">
                    <h4 className="text-lg sm:text-xl font-semibold leading-tight mb-3 text-[rgb(var(--header-color-rgb))]">
                      {caseStudy.learnings.insight}
                    </h4>
                    <p className="text-base sm:text-lg leading-relaxed text-[rgb(var(--foreground-secondary))]">
                      {caseStudy.learnings.description}
                    </p>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
        <NextProject />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
