import Image from "next/image";

export default function Spoked() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <h1>Redesign Spoked AI</h1>
      <div className="flex flex-col gap-12">
        <section>
          <h2>The Product</h2>
          <p>
            Spoked is a cycling coach powered by AI making it simple to train
            smarter. Each plan adapts to the customer based on their training
            session and personal data.
          </p>
        </section>
        <section>
          <h2>Overview</h2>
          <p>
            I redesigned Spoked for its +30,000 monthly mobile users users. The
            redesign allowed Spoked to offer personalised AI training plans,
            update their business model to offer tiers based on different user
            groups
          </p>
        </section>
        <section>
          <h2>The outcome</h2>
          <ul>
            <li>🏆 Projected revenue increase of ~£2m</li>
            <li>🏆 Projected revenue increase of ~£2m</li>
            <li>🏆 Projected revenue increase of ~£2m</li>
          </ul>
        </section>
        <section>
          <h2>My contribution</h2>
          <h2>The team</h2>
        </section>
        <section>
          <Image
            src="/portfolio-spoked/header.png"
            alt="Spoked"
            className="rounded-md"
            width={200}
            height={200}
            priority
          />
        </section>
        <section>
          <h2>Understanding the problem</h2>
          <p>lorem</p>
        </section>
        <section>
          <h2>User observation</h2>
          <p>
            We ran a user research session to observe users navigating the sales
            journeys of competitors that already offer similar product ranges.
            From this study we discovered the following insights:
          </p>
        </section>
        <section>
          <h2>Designing the solution</h2>
          <p>
            Solution design involved lots of iteration and user testing. High
            level logic was mapped out on whiteboards followed by prototypes. We
            explored a wide range of options, particularly around the displaying
            of delivery details. The challange was trying to present complex
            delivery details and options in a simple and easy to understand way.
          </p>
        </section>
        <section>
          <h2>User feedback</h2>
          <p>
            Prototypes were iterated on a number of times after remote user
            testing sessions. Users were asked to complete a full shopping
            journey from item discovery to order complete. We observed their
            understanding of the delivery options and followed up on the end to
            understand how when they would expect to recieve their items based
            on the checkout they just completed.
          </p>
        </section>
        <section>
          <h2>The result</h2>
          <p>
            The final design overhauled the way Matalan presents order summaries
            and delivery options. The checkout split orders into individual
            deliveries with estimates and types of delivery clearly explained.
            Progress tracking in the checkout was simplified and the number of
            steps reduced. Optimising the overall checkout experience mean't the
            checkout did not suffer from the potential increase in complexity of
            delivery SLAs.
          </p>
        </section>
      </div>
    </main>
  );
}
