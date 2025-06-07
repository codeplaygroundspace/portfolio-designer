import projects from "@/data/project-navigation";
import experiences from "@/data/experiences";
import {
  heroContent,
  aboutContent,
  projectsContent,
  contactContent,
  resumeContent,
} from "@/data/homepage-content";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TagList from "@/components/ui/TagList";
import ProjectCard from "@/components/ui/ProjectCard";
import AvailabilityBadge from "@/components/ui/AvailabilityBadge";
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  Linkedin,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import { FaDribbble } from "react-icons/fa";

// Define an interface for the Experience props
interface ExperienceProps {
  role: string;
  time: string;
  tags: string[];
  company?: string;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 py-8 sm:py-12 lg:py-16">
          <ProjectsSection />
          <ExperiencesSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
        <div className="flex-1">
          <div className="mb-6">
            <AvailabilityBadge text={heroContent.availability} />
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 tracking-tight text-balance">
            {heroContent.headline.greeting}{" "}
            <span className="text-[rgb(var(--accent))]">
              {heroContent.headline.name}
            </span>
            <br />
            {heroContent.headline.title}
            {heroContent.headline.subtitle && (
              <>
                <br />
                <span className="text-[rgb(var(--foreground-secondary))]">
                  {heroContent.headline.subtitle}
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg font-medium mb-8 text-[rgb(var(--foreground-secondary))] max-w-2xl leading-relaxed">
            {heroContent.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-[rgb(var(--accent))] text-white px-6 py-3 rounded-lg font-medium hover:bg-[rgb(var(--accent))]/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              {heroContent.cta.primary}
              <ArrowDown size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-[rgb(var(--border))] px-6 py-3 rounded-lg font-medium hover:bg-[rgb(var(--background-secondary))] transition-all duration-200 hover:border-[rgb(var(--accent))]/30"
            >
              {heroContent.cta.secondary}
              <Mail size={16} />
            </Link>
          </div>
        </div>

        <div className="lg:w-80 xl:w-96 flex-shrink-0">
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-[rgb(var(--accent))]/20 to-[rgb(var(--accent))]/5 rounded-2xl flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-[rgb(var(--background-secondary))] rounded-xl flex items-center justify-center">
                <span className="text-6xl">👋</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[rgb(var(--accent))]" />
                <span className="text-sm font-medium">
                  {heroContent.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20">
        <div className="lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight text-balance">
            {aboutContent.title}
          </h2>
          <div className="space-y-4 sm:space-y-6 text-[rgb(var(--foreground-secondary))]">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:flex-1 space-y-6 sm:space-y-8">
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-[rgb(var(--header-color-rgb))] text-sm sm:text-base">
              {aboutContent.skills.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {aboutContent.skills.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-[rgb(var(--background-secondary))] rounded-full text-xs sm:text-sm font-medium border border-[rgb(var(--border))]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-[rgb(var(--header-color-rgb))] text-sm sm:text-base">
              {aboutContent.tools.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {aboutContent.tools.items.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-2 bg-[rgb(var(--background-secondary))] rounded-full text-xs sm:text-sm font-medium border border-[rgb(var(--border))]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projectsWithDescriptions = projects.map((project, index) => ({
    ...project,
    description: projectsContent.descriptions[index]?.description || "",
    impact: projectsContent.descriptions[index]?.impact || "",
  }));

  return (
    <section className="lg:w-2/3" id="projects">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
          {projectsContent.title}
        </h2>
        <span className="text-sm font-medium text-[rgb(var(--foreground-secondary))] shrink-0">
          {projectsWithDescriptions.length} {projectsContent.subtitle}
        </span>
      </div>
      <div className="grid gap-6 sm:gap-8 lg:gap-12">
        {projectsWithDescriptions.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            page={project.page}
            img={project.img}
            tags={project.tags}
            description={project.description}
            impact={project.impact}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ExperiencesSection() {
  const experiencesWithCompanies = [
    { ...experiences[0], company: "NestEgg" },
    { ...experiences[1], company: "Global App Testing" },
    { ...experiences[2], company: "Barclays" },
    { ...experiences[3], company: "Hatchster" },
  ];

  return (
    <aside className="lg:flex-1">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight">
        Experience
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {experiencesWithCompanies.map((ex, index) => (
          <ExperienceCard
            key={ex.role}
            role={ex.role}
            time={ex.time}
            tags={ex.tags}
            company={ex.company}
            isLatest={index === 0}
          />
        ))}
        <ResumeDownloadLink />
        <DribbbleLink />
      </div>
    </aside>
  );
}

function ExperienceCard({
  role,
  time,
  tags,
  company,
  isLatest,
}: ExperienceProps & { isLatest?: boolean }) {
  return (
    <div className="relative w-full p-4 sm:p-5 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--background-secondary))]/30">
      {isLatest && (
        <div className="absolute -top-2 -right-2 bg-[rgb(var(--accent))] text-white text-xs px-2 py-1 rounded-full">
          Current
        </div>
      )}
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="min-h-[80px] sm:min-h-[90px] flex flex-col justify-start">
          <h4 className="font-semibold text-base sm:text-lg leading-tight mb-1">
            {role}
          </h4>
          {company && (
            <p className="text-[rgb(var(--accent))] font-medium text-sm sm:text-base mb-2">
              {company}
            </p>
          )}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[rgb(var(--foreground-secondary))] mt-auto">
            <Calendar size={14} />
            <span>{time}</span>
          </div>
        </div>
        <div className="mt-auto">
          <TagList tags={tags} />
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
          {contactContent.title}
        </h2>
        <p className="text-base sm:text-lg text-[rgb(var(--foreground-secondary))] mb-8 max-w-2xl mx-auto leading-relaxed">
          {contactContent.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={contactContent.cta.primary.href}
            className="inline-flex items-center gap-2 bg-[rgb(var(--accent))] text-white px-6 py-3 rounded-lg font-medium hover:bg-[rgb(var(--accent))]/90 transition-colors duration-200"
          >
            <Mail size={16} />
            {contactContent.cta.primary.text}
          </a>
          <a
            href={contactContent.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[rgb(var(--border))] px-6 py-3 rounded-lg font-medium hover:bg-[rgb(var(--background-secondary))] transition-colors duration-200"
          >
            <Linkedin size={16} />
            {contactContent.cta.secondary.text}
          </a>
        </div>
      </div>
    </section>
  );
}

function ResumeDownloadLink() {
  return (
    <a
      href={resumeContent.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full inline-flex items-center gap-2 p-4 sm:p-5 rounded-lg border border-[rgb(var(--border))] hover:bg-[rgb(var(--background-secondary))] transition-colors duration-200 group"
      aria-label="Download Resume"
    >
      <Download size={16} className="text-[rgb(var(--accent))] shrink-0" />
      <span className="font-medium flex-1">{resumeContent.text}</span>
      <ArrowUpRight
        size={14}
        className="text-[rgb(var(--foreground-secondary))] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 shrink-0"
      />
    </a>
  );
}

function DribbbleLink() {
  return (
    <a
      href="https://dribbble.com/rosieportfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full inline-flex items-center gap-2 p-4 sm:p-5 rounded-lg border border-[rgb(var(--border))] hover:bg-[rgb(var(--background-secondary))] transition-colors duration-200 group"
      aria-label="View Dribbble Portfolio"
    >
      <FaDribbble size={16} className="text-[rgb(var(--accent))] shrink-0" />
      <span className="font-medium flex-1">View Dribbble</span>
      <ArrowUpRight
        size={14}
        className="text-[rgb(var(--foreground-secondary))] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 shrink-0"
      />
    </a>
  );
}
