import Image from "next/image";
import { hatchsterContributions } from "../contributions";
import { teamHatchster } from "../teams";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NextProject from "../components/NextProject";

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
          Spoked is an innovative cycling coach offering personalised training
          plans. To meet revenue targets, I was tasked with redesigning the
          mobile app to lower the barrier for beginners and increase new user
          retention. The existing app’s complexity made it difficult for
          newcomers to engage. After conducting user research, I simplified the
          content and interface to create a more intuitive experience, making
          the app accessible for novices while still engaging for advanced
          cyclists.
        </p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 New users retention increased by 30%</li>
          <li>🏆 Annual revenue targets achived</li>
          <li>🏆 Projected revenue increase of 15%</li>
        </ul>
      </section>

      <section className="my-grid flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div>
          <h3>My contribution</h3>
          <div>
            {hatchsterContributions.map((contribution, i) => (
              <div key={i} className="my-tag">
                {contribution}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>The team</h3>
          <div>
            {teamHatchster.map((teamMember, i) => (
              <div key={i} className="my-tag">
                {teamMember}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/Spoked-intro-case-study.png"
          alt="Spoked"
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
          before starting any research or design work. Spoked aimed to increase
          the percentage of new users and improve retention.
        </p>
      </section>
      <section className="my-grid">
        <h3>User observation</h3>
        <p>
          I conducted a user research session to observe how users interact with
          the current product and how it fits into their training sessions and
          daily routines. From this study we discovered the following insights:
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>
            👉 Users wanted personalised training plans based on their
            individual goals.
          </li>
          <li>
            👉 Users sometimes stopped using the app when injured or on holiday.
          </li>
          <li>👉 Different user groups had varied training goals and needs.</li>
        </ul>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-Journey-map@2x.jpeg"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>

      <section className="my-grid">
        <h3>Designing the solution</h3>
        <p>
          The solution design process for Spoked involved extensive iteration
          and user testing. I initially created a detailed user journey map to
          outline key touchpoints and interactions. This was followed by
          developing prototypes and exploring various approaches to
          personalising training plans and boosting user engagement. The
          challenge was to distill complex training data and features into a
          streamlined, intuitive experience that would be accessible for both
          beginners and advanced cyclists.
        </p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-User-flow@2x.jpg"
          alt="Spoked"
          className="my-image"
          width={2640}
          height={400}
          layout="responsive"
          priority
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-Plan-builder@2x.png"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-image">
        <h3>Prototype</h3>
        <EmbeddedVideoOne />
      </section>
      <section className="my-image">
        <h3>Hi fidelity screens</h3>
        <EmbeddedVideoTwo />
      </section>
      <section className="my-grid">
        <h3>Design system</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere
          quae est veniam molestiae consequatur tenetur laborum modi, dolorum
          eius quia sapiente. Porro ad laborum corrupti assumenda, aliquid minus
          iure.
        </p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-Colour-palette@2x.jpeg"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-spoked/spoked-typography.jpeg"
          alt="Spoked"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-image">
        <h3>Components</h3>
        <EmbeddedVideoThree />
      </section>
      <section className="my-grid">
        <h3>User feedback</h3>
        <p>
          Prototypes were iterated on a number of times after remote user
          testing sessions. Users were asked to complete a full setup journey,
          from selecting a training plan to finalising their preferences. We
          observed their interactions with the AI training plan and followed up
          to understand their expectations for adjustments based on their input
          and goals.
        </p>
      </section>
      <section className="my-grid">
        <h3>The result</h3>
        <p>
          The final design transformed how Spoked presents training plans and
          user interactions. The app now provides a streamlined and intuitive
          setup journey with clear personalisation options and progress
          tracking. The design improvements simplified the user experience and
          addressed the complexity of adjusting training plans.
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 New users retention increased by 30%</li>
          <li>🏆 Annual revenue targets achived</li>
          <li>🏆 Projected revenue increase of 15%</li>
        </ul>
      </section>
    </>
  );
}
