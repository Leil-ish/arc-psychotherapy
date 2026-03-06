import { SectionCta } from "@/components/section-cta";
import { primaryIssues } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Therapy services for adults in Downtown Round Rock, serving North Austin and surrounding communities, with telehealth across Texas. Includes standard psychotherapy and an optional structured model-building option.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="container-wrap py-16 md:py-20">
        <h1 className="h1">Services for adults seeking focused, private-pay care</h1>
        <p className="body-lg mt-6 max-w-3xl">
          Services include standard psychotherapy and the optional structured model-building option. Care is available in Downtown Round Rock and via telehealth for Texas residents.
        </p>
      </section>

      <section className="container-wrap grid gap-5 md:grid-cols-2">
        <article className="card">
          <p className="h3">Standard psychotherapy</p>
          <p className="mt-3 body">
            Weekly or biweekly sessions for emotional processing, pattern change, and aligned decision-making.
          </p>
        </article>
        <article className="card">
          <p className="h3">Structured model-building option</p>
          <p className="mt-3 body">
            A premium option using a structured model-building arc across defined sessions. It is adult psychotherapy, not play therapy, and includes active reflection and integration.
          </p>
        </article>
      </section>

      <section className="container-wrap mt-14">
        <h2 className="h2">Common concerns addressed</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-2 body">
          {primaryIssues.map((item) => (
            <li key={item} className="card">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <SectionCta
        title="Not sure which service fits?"
        body="Use the consult to decide pacing and treatment structure before committing to a package."
      />
    </>
  );
}
