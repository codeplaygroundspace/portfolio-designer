import Image from "next/image";
import projects from "./projects";
import experiences from "./experiences";

// Define an interface for the Project props
interface ProjectProps {
  title: string;
  page: string;
  img: string;
}

export default function Home() {
  return (
    <div>
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <Intro />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

function Projects() {
  return (
    <section className="flex">
      <div>
        <div className="flex gap-10 flex-col">
          <h3 className="text-4xl font-medium">Projects</h3>
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              page={project.page}
              img={project.img}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-medium">Experience</h3>
      </div>
    </section>
  );
}
function Project({ title, page, img }: ProjectProps) {
  return (
    <>
      <div className="flex gap-6">
        <Image
          src={img}
          alt="Preview thumbnail"
          className="dark:invert"
          width={200}
          height={200}
          priority
        />
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div>Tags</div>
        </div>
      </div>
    </>
  );
}

function Intro() {
  return (
    <section className="flex gap-8 flex-col mb-24">
      <Image
        src="/logo.png"
        alt="Logo"
        className="dark:invert"
        width={60}
        height={60}
        priority
      />
      <h1 className="text-6xl font-medium">
        Hey, I’m Rosina Pissaco —<br /> I’m a Product Designer based in Bristol
      </h1>
      <h2 className="font-medium">
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
    <section>
      {experiences.map((exp) => (
        <Experience role={exp.role} />
      ))}
    </section>
  );
}

function Experience({ role }) {
  return <div>{role}</div>;
}

function Footer() {
  return (
    <footer>
      <p>hello@rosie.com</p>
      <p>Bristol/ Remote</p>
    </footer>
  );
}
