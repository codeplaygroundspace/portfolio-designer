import Image from "next/image";
import { hatchsterContributions } from "../contributions";
import { teamHatchster } from "../teams";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextProject from "@/components/sections/NextProject";
import TagList from "@/components/ui/TagList";

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
        <h1>Redesigning Lotto Social </h1>
      </section>
      <section className="my-grid">
        <h2>Overview</h2>
        <p>
          I led the redesign of Lotto Social lottery platforms, serving nearly
          45 million regular UK players. The project aimed to transform the
          traditional lottery experience into an engaging, entertainment-focused
          app.{" "}
          <strong>
            Our goal was to increase user retention and boost revenue by
            reimagining how people interact with lottery games, moving beyond
            the standard {`"buy and hope"`} approach to a more rewarding,
            gamified experience.
          </strong>
        </p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 New user acquisition increased by 15% in the first quarter</li>
          <li>
            🏆 User engagement rose by 30%, with average session time doubling
          </li>
          <li>🏆 Revenue from in-app purchases grew by 25% year-over-year</li>
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
        <p>
          As this project was directly linked to a key business goal, I needed
          to fully understand the project purpose and the criteria for success
          before starting any research or design work. Lotto Social aimed to
          differentiate itself in a crowded market while increasing user
          retention and revenue.
          <strong>
            {" "}
            Users were leaving the platform due to a lack of engagement between
            draws and disappointment from frequent losses.
          </strong>{" "}
          Our task was to create a more entertaining experience that kept users
          engaged regardless of winning outcomes, while still maintaining the
          excitement of potential big wins.
        </p>
      </section>
      <section className="my-grid">
        <h3>User observation</h3>
        <p>
          I conducted a user research session to observe how users interact with
          lottery products and how these fit into their weekly routines and
          social activities. From this study we discovered the following
          insights:
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>
            👉 Users needed more frequent engagement opportunities beyond the
            lottery draws to maintain interest.
          </li>
          <li>
            👉 There was a strong correlation between instant gratification and
            user satisfaction
          </li>
        </ul>
      </section>
      <section className="my-grid">
        <h3>Designing the solution</h3>
        <p>
          Solution design involved extensive iteration and user testing. We
          began by mapping out high-level logic on whiteboards, followed by
          creating interactive prototypes. Our team explored a wide range of
          options, particularly focusing on how to display lottery results and
          syndicate information effectively.
        </p>
      </section>
      <section className="my-image">
        <h3>Lo-fi wireframes</h3>
        <Image
          src="/portfolio-hatchster/Lotto_Cards_on_home_screen2x.png"
          alt="Lotto Social App lo-fidelity wireframes"
          className="my-image"
          width={2640}
          height={400}
          layout="responsive"
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
        <p>
          I decided to work with Brad Frost solution: Atomic Design. This
          approach divides design components into 5 different categories: atoms,
          molecules, organisms, templates, and pages.
        </p>
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
        <p>
          I decided to work with Brad Frost solution: Atomic Design. This
          approach divides design components into 5 different categories: atoms,
          molecules, organisms, templates, and pages.
        </p>
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
        <p>
          Users were asked to complete a full journey, from signing up for a
          syndicate to checking results and engaging with in-app games.{" "}
          <strong>
            {" "}
            We observed their interactions with the syndicate selection process,
            result checking interface, and gamification features.{" "}
          </strong>
          Follow-up questions helped us understand their expectations for social
          interactions and reward mechanisms.
        </p>
      </section>
      <section className="my-grid">
        <h3>The result</h3>
        <p>
          The final design transformed how Lotto Social presents lottery
          participation and user engagement. The app now provides a streamlined
          and intuitive journey from syndicate selection to result checking,
          with clear social interaction options and gamification elements.The
          incorporation of daily challenges and social features has created a
          more engaging and sticky product.
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 New user acquisition increased by 15% in the first quarter</li>
          <li>
            🏆 User engagement rose by 30%, with average session time doubling
          </li>
          <li>🏆 Revenue from in-app purchases grew by 12%</li>
        </ul>
      </section>
    </>
  );
}
