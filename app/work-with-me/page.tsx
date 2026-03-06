import { ButtonLink } from "@/components/button-link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Work With Me | Round Rock, TX",
  description:
    "How Arc works: structured psychotherapy in Downtown Round Rock, Texas, serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/work-with-me"
});

export default function WorkWithMePage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Work With Me</h1>
      <p className="body-lg mt-5 max-w-3xl">
        Arc&apos;s primary offer is ongoing structured psychotherapy designed for clear formulation, paced intervention, and integration.
      </p>
      <p className="mt-3 body max-w-3xl">
        {siteContent.primaryLocation}. {siteContent.secondaryLocation}. {siteContent.telehealthRegion}.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <article className="card">
          <h2 className="h3">1. Consult</h2>
          <p className="mt-3 body">Clarify fit, goals, and treatment pacing.</p>
        </article>
        <article className="card">
          <h2 className="h3">2. Core psychotherapy arc</h2>
          <p className="mt-3 body">Define targets and work through a structured sequence of sessions.</p>
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
        <h2 className="h3">Optional packaged pathway</h2>
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
        <ButtonLink href={siteContent.bookingUrl} external>
          Schedule consult
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>

      <section className="mt-10 card">
        <h2 className="h3">Start here before your consult</h2>
        <p className="mt-3 body max-w-3xl">
          If you prefer conceptual clarity first, start with the orientation page, then review frameworks and essays.
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
    </section>
  );
}
