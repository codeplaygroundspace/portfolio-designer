import Image from "next/image";
import projects from "./projects";

// Define an interface for the Project props
interface ProjectProps {
  title: string;
  page: string;
  img: string;
}

export default function Home() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Intro />
      <section className="flex">
        <div>
          <h3 className="text-4xl font-medium">Projects</h3>
          <div className="flex gap-10 flex-col">
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
      <Footer />
    </main>
  );
}

function Project({ title, page, img }: ProjectProps) {
  return (
    <>
      <div className="flex">
        <Image
          src={img}
          alt="Preview thumbnail"
          className="dark:invert"
          width={100}
          height={24}
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
      <h1 className="text-6xl font-medium">
        Hey, I’m Danny Owen —<br /> I’m a Product Designer based in Newcastle
      </h1>
      <h2 className="font-medium">
        Currently, I’m the only Product Designer at Global App Testing, a
        crowdtesting startup building a platform that connects a global network
        of software testers with our customers. I work across the full end to
        end design process for our B2B, B2C and internal platforms.
      </h2>
    </section>
  );
}
function Footer() {
  return (
    <div>
      <p>hello@rosie.com</p>
      <p>Bristol/ Remote</p>
    </div>
  );
}
