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
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TagList from "@/components/ui/TagList";
import ProjectCard from "@/components/ui/ProjectCard";
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[rgb(var(--accent))] via-pink-500 to-[rgb(var(--accent))]/80 min-h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/GradientHeroPrerender2.svg"
          alt="Hero background"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 text-center py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 tracking-tight !text-white">
            Hello, I&apos;m Rosina
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight mb-6 tracking-tight !text-white/90 max-w-3xl mx-auto">
            User-centred strategist with a proven track record of driving
            measurable results
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-medium mb-12 !text-white/80 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a Product Designer who turns early-stage ideas into
            user-loved products that businesses rely on.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-white/30 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              <span className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 w-full text-base">
                View My Work
                <ArrowDown size={18} />
              </span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-white/30 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              <span className="inline-flex items-center justify-center gap-2 bg-black/80 text-white px-6 py-4 rounded-lg font-semibold hover:bg-black/70 transition-all duration-200 w-full text-base">
                Get In Touch
                <Mail size={18} />
              </span>
            </Link>
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
        <div className="lg:w-80 xl:w-96 flex-shrink-0">
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[rgb(var(--primary))]/10 to-[rgb(var(--primary))]/5 p-2">
              <Image
                src="/profile.jpeg"
                alt="Rosina Pissaco - Product Designer"
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[rgb(var(--primary))]" />
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

function ProjectsSection() {
  const projectsWithDescriptions = projects.map((project, index) => ({
    ...project,
    description: projectsContent.descriptions[index]?.description || "",
    impact: projectsContent.descriptions[index]?.impact || "",
  }));

  return (
    <section className="lg:w-2/3" id="projects">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
          {projectsContent.title}
        </h2>
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
            <p className="text-[rgb(var(--foreground-secondary))] font-medium text-sm sm:text-base mb-2">
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
            className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-[rgb(var(--foreground))]/30 hover:border-[rgb(var(--foreground))] transition-all duration-300 backdrop-blur-sm"
          >
            <span className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white text-gray-900 dark:text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-white/90 dark:hover:bg-white/90 transition-all duration-200 w-full text-base">
              <Mail size={18} />
              {contactContent.cta.primary.text}
            </span>
          </a>
          <a
            href={contactContent.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-[rgb(var(--foreground))]/30 hover:border-[rgb(var(--foreground))] transition-all duration-300 backdrop-blur-sm"
          >
            <span className="inline-flex items-center justify-center gap-2 bg-black/80 dark:bg-black/80 text-white dark:text-white px-6 py-4 rounded-lg font-semibold hover:bg-black/70 dark:hover:bg-black/70 transition-all duration-200 w-full text-base">
              <Linkedin size={18} />
              {contactContent.cta.secondary.text}
            </span>
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
