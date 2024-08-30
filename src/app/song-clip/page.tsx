import Image from "next/image";
import contributions from "../contributions";
import teamSpoked from "../teams";
import Header from "../components/Header";

export default function SongClip() {
  return (
    <>
      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 text-xl leading-relaxed">
        <Header />
        <CaseStudy />
      </div>
    </>
  );
}

function EmbeddedVideoOne() {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/N7kU7BBNg7c?si=UJgLuqp3PSlrDueB"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

function EmbeddedVideoTwo() {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/l281eYRTF2Y?si=AkGnQ0INfN29dxjK"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

function EmbeddedVideoThree() {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tX0BvokB4Vc?si=U1y2xSffm7vztCCQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

function CaseStudy() {
  return (
    <div>
      <h1>Redesigning Spoked </h1>
      <div className="flex flex-col gap-12">
        <section>
          <h2>The Product</h2>
          <p>
            Spoked is your AI online cycling coach powered by smart algorithms
            that helps people get the most out of their cycling.
          </p>
        </section>
        <section>
          <h3>Overview</h3>
          <p>
            Spoked is an innovative cycling coach offering personalised training
            plans. To meet revenue targets, I was tasked with redesigning the
            mobile app to lower the barrier for beginners and increase new user
            retention. The existing app’s complexity made it difficult for
            newcomers to engage. After conducting user research, I simplified
            the content and interface to create a more intuitive experience,
            making the app accessible for novices while still engaging for
            advanced cyclists.
          </p>
        </section>
        <section>
          <h3>The outcome</h3>
          <ul className="mt-4 list-inside space-y-2">
            <li>🏆 New users retention increased by 30%</li>
            <li>🏆 Annual revenue targets achived</li>
            <li>🏆 Projected revenue increase of 15%</li>
          </ul>
        </section>

        <section className="flex flex-col lg:flex-row gap-24">
          <div>
            <h3>My contribution</h3>
            <div>
              {contributions.map((contribution, i) => (
                <div
                  key={i}
                  className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-1"
                >
                  {contribution}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3>The team</h3>
            <div>
              {teamSpoked.map((teamMember, i) => (
                <div
                  key={i}
                  className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-1"
                >
                  {teamMember}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <Image
            src="/portfolio-spoked/Spoked-intro-case-study.png"
            alt="Spoked"
            className="rounded-md"
            width={1640}
            height={400}
            priority
          />
        </section>

        <section>
          <h3>Understanding the problem</h3>
          <p>
            As this project was directly linked to a key business goal, I needed
            to fully understand the project purpose and the criteria for success
            before starting any research or design work. Spoked aimed to
            increase the percentage of new users and improve retention.
          </p>
        </section>
        <section>
          <h3>User observation</h3>
          <p>
            I conducted a user research session to observe how users interact
            with the current product and how it fits into their training
            sessions and daily routines. From this study we discovered the
            following insights:
          </p>
          <ul className="mt-4 list-inside space-y-2">
            <li>
              👉 Users wanted personalised training plans based on their
              individual goals.
            </li>
            <li>
              👉 Users sometimes stopped using the app when injured or on
              holiday.
            </li>
            <li>
              👉 Different user groups had varied training goals and needs.
            </li>
          </ul>
        </section>
        <section>
          <Image
            src="/portfolio-spoked/spoked-Journey-map@2x.jpeg"
            alt="Spoked"
            className="rounded-md"
            width={1640}
            height={400}
            priority
          />
        </section>

        <section>
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
        <section>
          <Image
            src="/portfolio-spoked/spoked-User-flow@2x.jpg"
            alt="Spoked"
            className="rounded-md"
            width={1640}
            height={400}
            priority
          />
        </section>
        <section>
          <Image
            src="/portfolio-spoked/spoked-Plan-builder@2x.png"
            alt="Spoked"
            className="rounded-md mb-12"
            width={1640}
            height={400}
            priority
          />
        </section>
        <section>
          <h3>Prototype</h3>
          <EmbeddedVideoOne />
        </section>
        <section>
          <h3>Hi fidelity screens</h3>
          <EmbeddedVideoTwo />
        </section>
        <section>
          <h3>Design system</h3>
          <Image
            src="/portfolio-spoked/spoked-Colour-palette@2x.jpeg"
            alt="Spoked"
            className="rounded-md mb-12"
            width={1640}
            height={400}
            priority
          />
          <Image
            src="/portfolio-spoked/spoked-typography.jpeg"
            alt="Spoked"
            className="rounded-md mb-12"
            width={1640}
            height={400}
            priority
          />
        </section>
        <section>
          <h3>Components</h3>
          <EmbeddedVideoThree />
        </section>
        <section>
          <h3>User feedback</h3>
          <p>
            Prototypes were iterated on a number of times after remote user
            testing sessions. Users were asked to complete a full setup journey,
            from selecting a training plan to finalising their preferences. We
            observed their interactions with the AI training plan and followed
            up to understand their expectations for adjustments based on their
            input and goals.
          </p>
        </section>
        <section>
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
      </div>
    </div>
  );
}
