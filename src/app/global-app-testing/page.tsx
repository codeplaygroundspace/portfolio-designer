import Image from "next/image";
import { gatContributions } from "../contributions";
import { teamGat } from "../teams";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GlobalAppTesting() {
  return (
    <>
      <Header />
      <CaseStudy />
      <Footer />
    </>
  );
}

function CaseStudy() {
  return (
    <>
      <section className="my-grid">
        <h1>Designing an AI Testing platform</h1>
      </section>
      <section className="my-grid">
        <h2>Overview</h2>
        <p>
          In 2024, Global App Testing set out to revolutionise software testing
          by combining machine learning technology with their powerful global
          community of testers. The goal was to streamline all testing
          activities and reduce operational overhead for Test Managers by 50%
          within one year.
        </p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 Adoption reached 30% in the first 6 months</li>
          <li>🏆 Operational overhead reduced by 20%</li>
          <li>🏆 Successfully launched a new AI-driven testing platform</li>
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
          With the need for efficient, global, and accurate software testing
          becoming more critical than ever, I first developed a strong
          understanding of the current process through interviews with Test
          Managers. We discussed the implications of introducing AI and machine
          learning into their workflow.
        </p>
      </section>
      <section className="my-grid">
        <h3>User research</h3>
        <p>
          We conducted user research sessions to observe Test Managers
          navigating their current processes. From this study we discovered the
          following insights:
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>
            👉 The testing process involved distinct stages: launching tests,
            moderating results, and delivering outcomes
          </li>
          <li>
            👉 Test Managers were using spreadsheets for all data management
          </li>
          <li>
            👉 Each stage involved multiple manual tasks, consuming significant
            time
          </li>
        </ul>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-tickets.png"
          alt="Global App Testing research"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-tickets-2.png"
          alt="Global App Testing research"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>

      <section className="my-grid">
        <h3>Designing the solution</h3>
        <p>
          Solution design involved iteration and user testing. High-level logic
          was mapped out, followed by prototypes. We explored various options,
          particularly around automating decision-making processes. The
          challenge was presenting complex testing data in a simple,
          easy-to-understand way while incorporating AI assistance.
        </p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-wireframe.png"
          alt="Global App Testing wireframe"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-gat/gat-hi-fidelity.png"
          alt="Global App Testing Hi-fidelity mockup"
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
          observed their understanding of the AI-assisted process and followed
          up to understand how they expected the new system to impact their
          workflow.
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
          <li>🏆 Adoption reached 30% in the first 6 months</li>
          <li>🏆 Operational overhead reduced by 20%</li>
          <li>🏆 Successfully launched a new AI-driven testing platform</li>
        </ul>
      </section>
    </>
  );
}
