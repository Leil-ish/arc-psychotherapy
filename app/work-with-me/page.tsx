import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Work With Me | Round Rock, TX",
  description:
    "How Arc works: therapy with clear structure in Downtown Round Rock, Texas, serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/work-with-me"
});

export default function WorkWithMePage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Work With Me</h1>
      <p className="body-lg mt-5 max-w-3xl">
        This is for people who are good at holding it together and are tired of living that way.
      </p>
      <p className="mt-3 body max-w-3xl">You can expect therapy that is thoughtful, practical, and useful between sessions.</p>
      <p className="mt-3 body max-w-3xl">
        {siteContent.primaryLocation}. {siteContent.secondaryLocation}. {siteContent.telehealthRegion}.
      </p>
      <figure className="mt-8">
        <div className="arc-image-mask overflow-hidden">
          <Image
            src="/images/austin-local/austin-skyline-bridge-sunset.jpg"
            alt="Austin skyline and bridges at dusk."
            width={4000}
            height={2250}
            className="h-[14rem] w-full object-cover object-center md:h-[20rem]"
            sizes="(min-width: 1024px) 72rem, 100vw"
          />
        </div>
      </figure>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="card">
          <h2 className="h3">1. Consult</h2>
          <p className="mt-3 body">Clarify fit, goals, and pace.</p>
        </article>
        <article className="card">
          <h2 className="h3">2. Core therapy arc</h2>
          <p className="mt-3 body">Define targets and work through a clear sequence of sessions.</p>
        </article>
        <article className="card">
          <h2 className="h3">3. Integration + next steps</h2>
          <p className="mt-3 body">Review what is changing, what needs adjustment, and how to sustain gains.</p>
        </article>
      </div>
      <p className="mt-8 body text-sm text-ink/75">
        Standard session fee: ${siteContent.standardSessionFee} ({siteContent.sessionLength}).
      </p>

      <section className="mt-8 card">
        <h2 className="h3">Values in the room</h2>
        <p className="mt-3 body max-w-3xl">
          You shouldn&apos;t have to spend therapy defending your body, identity, family, or basic humanity.
        </p>
        <ul className="mt-4 space-y-2 body text-sm max-w-3xl">
          <li>• LGBTQ+ clients are affirmed without debate.</li>
          <li>• Health at Every Size aligned: body size is not treated as a moral or motivational issue.</li>
          <li>• Neurodiversity-affirming care respects different minds, communication styles, and sensory needs.</li>
          <li>• Immigrant and cross-cultural realities are treated as central context, including language and family pressure.</li>
        </ul>
      </section>

      <section className="mt-8 card">
        <h2 className="h3">Optional track: structured model-building</h2>
        <p className="mt-3 body max-w-3xl">
          Structured model-building is available as a defined package when it supports treatment goals. It is optional and never required for effective work at Arc.
        </p>
        <div className="mt-4">
          <ButtonLink href="/constructive" variant="secondary">
            Review optional model-building
          </ButtonLink>
        </div>
      </section>

      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={siteContent.bookingUrl}>
          Schedule consult
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>

      <section className="mt-10 card">
        <h2 className="h3">Start here before your consult</h2>
        <p className="mt-3 body max-w-3xl">
          If you want to understand the ideas first, start with the Start Here page, then review frameworks and essays.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <ButtonLink href="/start-here" variant="secondary">
            Start here
          </ButtonLink>
          <ButtonLink href="/ideas" variant="secondary">
            Ideas
          </ButtonLink>
          <ButtonLink href="/frameworks" variant="secondary">
            Frameworks
          </ButtonLink>
        </div>
      </section>

      <section className="mt-10 card">
        <h2 className="h3">Who this is for, and who it is not for</h2>
        <p className="mt-3 body max-w-3xl">
          Strong fit: thoughtful, capable adults who want practical but deep therapy and are ready for more than insight alone.
        </p>
        <p className="mt-3 body max-w-3xl">
          Usually not the best fit: crisis stabilization, insurance-based care, brief coaching, or checklist-style symptom management only.
        </p>
      </section>
    </section>
  );
}
