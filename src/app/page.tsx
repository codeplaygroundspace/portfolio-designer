import Image from "next/image";
import projects from "./projects";
import experiences from "./experiences";

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
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Header />
      <section>
        <Intro />
        <div className="flex flex-col lg:flex-row gap-24">
          <Projects />
          <Experiences />
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Projects() {
  return (
    <section className="flex gap-10 flex-col">
      <h3 className="text-2xl lg:text-4xl font-medium">Projects</h3>
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          page={project.page}
          img={project.img}
          tags={project.tags}
        />
      ))}
    </section>
  );
}
function Project({ title, page, img, tags }: ProjectProps) {
  return (
    <article className="flex gap-6">
      <Image
        src={img}
        alt="Preview thumbnail"
        className="dark:invert rounded-md"
        width={200}
        height={200}
        priority
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <div>
          {tags.map((tag, i) => (
            <div
              key={i}
              className="inline-flex items-center mb-2 rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-1"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Header() {
  return (
    <section>
      <Image
        src="/logo.svg"
        alt="Logo"
        className="dark:invert"
        width={60}
        height={60}
        priority
      />
    </section>
  );
}

function Intro() {
  return (
    <section className="flex gap-8 flex-col my-24 lg:max-w-3xl">
      <h1 className="text-4xl lg:text-6xl font-medium">
        Hey, I’m Rosina Pissaco —<br /> I’m a Product Designer based in Bristol
      </h1>
      <h2 className="font-medium lg:pr-20">
        Currently, I’m the only Product Designer at NestEgg, a bootstrapped
        startup building a platform that helps our customers take better
        financial decisions. I work across the full end to end design process
        for our B2B, B2C and internal platforms.
      </h2>
    </section>
  );
}

function Experiences() {
  return (
    <aside className="flex gap-10 flex-col">
      <h3 className="text-2xl lg:text-4xl font-medium">Experience</h3>

      <div className="flex flex-col gap-8">
        {experiences.map((ex) => (
          <Experience
            role={ex.role}
            key={ex.role}
            time={ex.time}
            tags={ex.tags}
          />
        ))}
      </div>
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
        >
          <span>Download Resume</span>
        </a>
      </div>
    </aside>
  );
}

function Experience({ role, time, tags }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">{role}</h3>
        <h4>{time}</h4>
      </div>
      <div>
        {tags.map((tag, i) => (
          <div
            key={i}
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-1"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="mt-12">
      <p>hello@rosie.com</p>
      <p className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-1">
        Bristol
      </p>
      <p className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-1">
        Remote
      </p>
    </section>
  );
}
