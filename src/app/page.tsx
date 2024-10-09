import Image from "next/image";
import projects from "./projects";
import experiences from "./experiences";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TagList from "./components/TagList";

// Define an interface for the Project props
interface ProjectProps {
  title: string;
  page: string;
  img: string;
  tags: string[];
}
// Define an interface for the Experience props
interface ExperienceProps {
  role: string;
  time: string;
  tags: string[];
}

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <div className="my-grid flex flex-col lg:flex-row gap-10 lg:gap-20">
        <ProjectsSection />
        <ExperiencesSection />
      </div>
      <Footer />
    </>
  );
}

function Intro() {
  return (
    <section className="my-grid 2xl:max-w-screen-lg">
      <h1 className="xl:leading-tight xl:pr-20">
        Hey, I’m Rosina
        <br /> I’m a Product Designer
        <br /> based in Bristol
      </h1>
      <p className="font-medium pb-24 lg:pr-16 xl:pr-40">
        Currently, I’m the only Product Designer at NestEgg, a bootstrapped
        startup building a platform that helps Credit Unions and Social Banks
        take better financial decisions. I work across the full end to end
        design process for our B2B, B2C and internal platforms.
      </p>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="lg:w-2/3">
      <h2>Projects</h2>
      <div className="grid gap-8 lg:gap-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            page={project.page}
            img={project.img}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
function ProjectCard({ title, page, img, tags }: ProjectProps) {
  return (
    <Link href={page}>
      <article className="flex flex-col sm:flex-row gap-6">
        <div className="">
          {/* <div className="w-full sm:w-[230px]"> */}
          <Image
            src={img}
            alt={title}
            className="rounded-lg"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="flex flex-col gap-1 lg:gap-2">
          <h3>{title}</h3>
          <TagList tags={tags} />
        </div>
      </article>
    </Link>
  );
}

function ExperiencesSection() {
  return (
    <aside className="lg:flex-1">
      <h2>Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((ex) => (
          <ExperienceCard
            role={ex.role}
            key={ex.role}
            time={ex.time}
            tags={ex.tags}
          />
        ))}
        <ResumeDownloadLink />
      </div>
    </aside>
  );
}

function ExperienceCard({ role, time, tags }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h4>{role}</h4>
        <p>{time}</p>
      </div>
      <TagList tags={tags} />
    </div>
  );
}

function ResumeDownloadLink() {
  return (
    <div className="inline-flex align-bottom gap-2 items-center">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        ></path>
      </svg>
      <a
        className="font-medium"
        href="https://drive.google.com/file/d/1oUYhhfmKh6CQ7khCfM8Z0DaMl4Rid2S2/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume"
      >
        <span>Download Resume</span>
      </a>
    </div>
  );
}
