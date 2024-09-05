import Image from "next/image";
import { gatContributions } from "../contributions";
import { teamGat } from "../teams";
import Header from "../components/Header";
import NextProject from "../components/NextProject";
import Footer from "../components/Footer";

export default function GlobalAppTesting() {
  return (
    <>
      <Header />
      <CaseStudy />
      <NextProject />
      <Footer />
    </>
  );
}

function CaseStudy() {
  return (
    <>
      <section className="my-grid">
        <h1>Designing an AI Testing Platform</h1>
      </section>
      <section className="my-grid">
        <h2>Overview</h2>
        <p>
          Global App Testing (GAT) helps businesses ensure their software
          quality through crowdsourced testing. In order to meet revenue
          targets, the product team was given the challenge of integrating AI
          and machine learning into the testing processes. After brainstorming,
          we decided to{" "}
          <strong>
            focus on creating an AI-powered platform to assist Test Managers.
          </strong>{" "}
          My early assumption was that users would be skeptical about AI taking
          over parts of their job. I conducted extensive user research to figure
          out how to introduce AI features in a way that would appeal to both
          the business and the users.
        </p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 Successfully launched an MVP in 6 months</li>
          <li>🏆 Operational overhead reduced by 20%</li>
          <li>🏆 Adoption reached 35% in the first 6 months</li>
        </ul>
      </section>
      <section className="my-grid flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div>
          <h3>My contribution</h3>
          <div>
            {gatContributions.map((contribution, i) => (
              <div key={i} className="my-tag">
                {contribution}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>The team</h3>
          <div>
            {teamGat.map((teamMember, i) => (
              <div key={i} className="my-tag">
                {teamMember}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-header.jpg"
          alt="Global App Testing SaSS Dashboard mockup"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>Understanding the problem</h3>
        <p>
          As this project tied in directly with a key business goal, before
          conducting any research or design work I wanted to ensure I had a
          strong understanding of the reason for the project and what the
          business would consider a successful outcome.
          <strong>
            {" "}
            GAT was looking for opportunities to reduce operational overhead and
            free up Test Managers capacity.
          </strong>
        </p>
      </section>
      <section className="my-grid">
        <h3>User research</h3>
        <p>
          We ran <strong>weekly user research </strong>session to observe Test
          Managers navigating their current processes. From this study we
          discovered the following insights:
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>
            👉 The testing process involved distinct stages: launching tests,
            moderating results, and delivering outcomes.
          </li>
          <li>
            👉 Test Managers were using spreadsheets for all data management.
          </li>
          <li>
            👉 Each stage involved multiple manual tasks, consuming significant
            time.
          </li>
        </ul>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-tickets.png"
          alt="Image of Miro Board where we map out all Test Manager tasks"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-tickets-2.png"
          alt="Image of spreadsheet Test Managers were using"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-grid">
        <h3>Designing the solution</h3>
        <p>
          Solution design involved iteration and user testing. High-level logic
          was mapped out, followed by prototypes.{" "}
          <strong>
            We explored various options, particularly around automating
            decision-making processes.
          </strong>{" "}
          The challenge was presenting complex testing data in a simple,
          easy-to-understand way while incorporating AI assistance.
        </p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-wireframe.png"
          alt="Image of the software as low fidelity wireframe"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-hi-fidelity.png"
          alt="Image of the software as Hi-fidelity mockup"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>User feedback</h3>
        <p>
          Prototypes were iterated on after remote user testing sessions. Users
          were asked to complete a full testing cycle using the new platform. We
          observed their understanding of the AI-assisted process and{" "}
          <strong>
            followed up to understand how they expected the new system to impact
            their workflow.
          </strong>
        </p>
      </section>
      <section className="my-grid">
        <h3>The result</h3>
        <p>
          The final design transformed the way Global App Testing manages the
          testing process. The new platform stores and tracks data previously
          managed in spreadsheets, using machine learning and AI to automate
          many of the Test Managers decisions and actions. The testing process
          was streamlined, with clear explanations of AI-assisted steps.
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 Successfully launched an MVP in 6 months</li>
          <li>🏆 Operational overhead reduced by 20%</li>
          <li>🏆 Adoption reached 35% in the first 6 months</li>
        </ul>
      </section>
      <section className="my-grid">
        <h3>Where do we go from here?</h3>
        <p>
          First, I would recommend conducting{" "}
          <strong>usability testing again</strong> with new participants. Have
          the changes made it easier for users to complete their tasks?
        </p>
        <p>
          If usability testing is not an option, I would recommend{" "}
          <strong>tracking the following metrics:</strong>
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>
            👉 What percentage of Test Managers are using the new software?
          </li>
          <li>
            👉 How has the new software impacted the testing delivery time and
            results quality?
          </li>
        </ul>
      </section>
      <section className="my-grid">
        <h3>What I learned</h3>
        <p>
          <strong>
            Communicating design decisions in light of the business goals.
          </strong>
        </p>
        <p>
          It is much easier and natural for me to explain my decision decisions
          based on user insights. However, it is equally valuable to consider
          how those decisions also support the business goals.
        </p>
      </section>
    </>
  );
}
