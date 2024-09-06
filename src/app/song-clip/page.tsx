import Image from "next/image";
import { songclipContributions } from "../contributions";
import { teamSongclip } from "../teams";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NextProject from "../components/NextProject";

export default function SongClip() {
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
        <h1>Redesigning Songclip</h1>
      </section>
      <section className="my-grid">
        <h2>Overview</h2>
        <p>
          Songclip is a SaaS platform for integrating licensed music on social
          and digital platforms. As the solo Product Designer, I was tasked with
          creating a user-friendly interface for our complex music clip
          integration system. My initial challenge was to{" "}
          <strong>
            design an intuitive search and integration process for +50 millions
            of 5-30 second music clips.
          </strong>{" "}
          I conducted extensive competitor research to understand how various
          platforms – from social media to dating apps – could seamlessly
          incorporate popular music snippets.
        </p>
      </section>
      <section className="my-grid">
        <h3>The outcome</h3>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 iOS App got Featured in the App Store</li>
          <li>🏆 Average clip search and share time reduced by 21%</li>
          <li>🏆 The 10 Most Innovative Companies in Music 2020</li>
        </ul>
      </section>
      <section className="my-grid flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div>
          <h3>My contribution</h3>
          <div>
            {songclipContributions.map((contribution, i) => (
              <div key={i} className="my-tag">
                {contribution}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>The team</h3>
          <div>
            {teamSongclip.map((teamMember, i) => (
              <div key={i} className="my-tag">
                {teamMember}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-songclip/songclip-hero.jpeg"
          alt="Mongclip (Audiobyte) mobile mockup"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>

      <section className="my-grid">
        <h3>Understanding the problem</h3>
        <p>
          Songclip was seeking to address a significant gap in the digital
          content market: the lack of accessible, legally compliant tools for
          integrating short, popular music clips into social media posts,
          messages, and other digital content. The business goal was clear - to
          create a solution that would allow platforms to easily incorporate
          5-30 second meta-tagged music clips, enriching user experiences across
          various apps and potentially opening new revenue streams.{" "}
          <strong>
            Success would be measured by the seamless integration of our
            technology into partner platforms and the subsequent increase in
            user engagement with music-enhanced content.
          </strong>
        </p>
      </section>
      <section className="my-grid">
        <h3>Competitor research</h3>
        <p>
          Integration of music clips into social and messaging platforms is not
          entirely new, so after understanding the requirements, I began by
          examining existing solutions. This investigation highlighted several
          key considerations:
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>
            👉 How do we curate and present music clips to match user
            preferences?
          </li>
          <li>
            👉 How do we ensure seamless integration across various platforms?
          </li>
          <li>
            👉 What UI elements will feel familiar to users of TikTok,
            Instagram, and Snapchat?
          </li>
        </ul>
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
        <h3>Lo-fi wireframes</h3>
        <Image
          src="/portfolio-songclip/songclip-wireframe.jpeg"
          alt="Songclip wireframe"
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
          src="/portfolio-songclip/songclip-hifidelity.jpeg"
          alt="Songclip Hi-fidelity mockup"
          className="my-image"
          width={1640}
          height={400}
        />
      </section>
      <section className="my-image">
        <h3>Micro animations</h3>

        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="aspect-[4/3]">
            <Image
              src="/portfolio-songclip/animation-1.gif"
              alt="Animation1"
              className="my-image"
              width={600}
              height={450}
            />
          </div>
          <div className="aspect-[4/3]">
            <Image
              src="/portfolio-songclip/animation-2.gif"
              alt="Animation 2"
              className="my-image"
              width={600}
              height={450}
            />
          </div>
          <div className="aspect-[4/3]">
            <Image
              src="/portfolio-songclip/animation-3.gif"
              alt="Animation 3"
              className="my-image"
              width={600}
              height={450}
            />
          </div>
          <div className="aspect-[4/3]">
            <Image
              src="/portfolio-songclip/animation-4.gif"
              alt="Animation 4"
              className="my-image"
              width={600}
              height={450}
            />
          </div>
        </div>
      </section>
      <section className="my-grid">
        <h3>Web App design</h3>
        <p>
          In order to reach non-iOS users, I also designed a Progressive Web
          Application suitable for users on desktop and mobile.
        </p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-songclip/songclip-web.jpeg"
          alt="Songclip Progressive Web
          Application mockup"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>Third-party integrations</h3>
        <p>
          The Songclip API lets other platforms make music part of what’s being
          created, shared, and send. We worked in collaboration with Viber in
          order to achieve a great integration between these two products.
        </p>
      </section>
      <section className="my-image">
        <Image
          src="/portfolio-songclip/songclip-api.jpeg"
          alt="Songclip API"
          className="my-image"
          width={1640}
          height={400}
          priority
        />
      </section>
      <section className="my-grid">
        <h3>User feedback</h3>
        <p>
          Prototypes were iterated on multiple times after remote user testing
          sessions. Users were asked to complete a full journey, from searching
          for a music clip to sharing it on social platforms. We observed their
          interactions with the search, preview, and sharing tools, and followed
          up to understand their expectations for music integration in their
          creative workflows.
        </p>
      </section>
      <section className="my-grid">
        <h3>The result</h3>
        <p>
          The final design transformed how Songclip presents and integrates
          music clips. The app now provides an intuitive search process with
          clear preview and editing options and seamless sharing capabilities.
          The design improvements simplified the user experience and addressed
          the complexities of copyright compliance and cross-platform
          compatibility.
        </p>
        <ul className="mt-4 list-inside space-y-2">
          <li>🏆 iOS App got Featured in the App Store</li>
          <li>🏆 Average clip search and share time reduced by 21%</li>
          <li>🏆 The 10 Most Innovative Companies in Music 2020</li>
        </ul>
      </section>
    </>
  );
}
