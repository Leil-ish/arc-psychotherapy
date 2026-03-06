import Link from "next/link";
import Script from "next/script";
import { ButtonLink } from "@/components/button-link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

const constructive = siteContent.constructive;

export const metadata = pageMetadata({
  title: "Structured model-building therapy (optional) | Round Rock, TX",
  description:
    "Optional structured model-building therapy in Downtown Round Rock for adults navigating perfectionism and rigidity. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/constructive"
});

export default function ConstructivePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: constructive.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <section className="container-wrap py-16 md:py-20">
        <h1 className="h1">{constructive.title}</h1>
        <p className="body-lg mt-5 max-w-4xl">{constructive.subtitle}</p>
        <div className="mt-6 space-y-3 max-w-4xl">
          {constructive.opening.map((paragraph) => (
            <p key={paragraph} className="body">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-4 body text-sm text-ink/75">
          Standard therapy remains available at ${siteContent.standardSessionFee} per session ({siteContent.sessionLength}).
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={siteContent.bookingUrl} external>
            Schedule consult
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
          <ButtonLink href="/work-with-me" variant="secondary">
            Learn how Arc works
          </ButtonLink>
        </div>
      </section>

      <section className="container-wrap mt-12">
        <h2 className="h2">Why it helps</h2>
        <p className="mt-3 body max-w-3xl">
          The method supports targeted work on <Link href="/perfectionism" className="focus-ring underline underline-offset-4">perfectionism</Link>, <Link href="/overcontrol" className="focus-ring underline underline-offset-4">overcontrol</Link>, and constraints related to <Link href="/religious-harm" className="focus-ring underline underline-offset-4">religious harm</Link>.
        </p>
        <ul className="mt-5 grid gap-4 md:grid-cols-2 body">
          {constructive.whyItHelps.map((item) => (
            <li key={item} className="card">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-wrap mt-14">
        <h2 className="h2">How sessions work</h2>
        <ol className="mt-5 grid gap-4 md:grid-cols-5 body">
          {constructive.sessionFlow.map((step, index) => (
            <li key={step} className="card">
              <p className="label">Step {index + 1}</p>
              <p className="mt-2">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 body text-sm max-w-3xl">
          Clients keep completed materials. Take-home materials are included in track pricing up to each package materials allowance.
        </p>
      </section>

      <section className="container-wrap mt-14 grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="h2">Good fit</h2>
          <ul className="mt-4 space-y-2 body">
            {constructive.fit.good.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2 className="h2">Not a fit</h2>
          <ul className="mt-4 space-y-2 body">
            {constructive.fit.notFit.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="container-wrap mt-14">
        <h2 className="h2">Track packages (optional)</h2>
        <p className="mt-3 body max-w-3xl">
          Package pricing includes sessions plus materials up to the listed allowance.
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="card">
            <h3 className="h3">{constructive.packages.trackPackageA.name}</h3>
            <p className="mt-3 body text-2xl font-semibold text-ink">${constructive.packages.trackPackageA.price}</p>
            <p className="mt-2 body">{constructive.packages.trackPackageA.description}</p>
            <p className="mt-2 body text-sm text-ink/75">
              Materials included up to ${constructive.packages.trackPackageA.materialsIncludedUpTo}.
            </p>
          </article>
          <article className="card">
            <h3 className="h3">{constructive.packages.trackPackageB.name}</h3>
            <p className="mt-3 body text-2xl font-semibold text-ink">${constructive.packages.trackPackageB.price}</p>
            <p className="mt-2 body">{constructive.packages.trackPackageB.description}</p>
            <p className="mt-2 body text-sm text-ink/75">
              Materials included up to ${constructive.packages.trackPackageB.materialsIncludedUpTo}.
            </p>
          </article>
        </div>
      </section>

      <section className="container-wrap mt-14">
        <h2 className="h2">FAQ</h2>
        <div className="mt-6 space-y-4">
          {constructive.faq.map((item) => (
            <article key={item.question} className="card">
              <h3 className="h3 text-xl">{item.question}</h3>
              <p className="mt-3 body">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-wrap mt-10">
        <details className="card">
          <summary className="focus-ring cursor-pointer text-sm font-semibold uppercase tracking-[0.12em] text-sage">
            For the curious
          </summary>
          <p className="mt-4 body">{constructive.curious}</p>
        </details>
      </section>

      <section className="container-wrap mt-10 mb-20">
        <h2 className="h2">Continue reading</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href="/start-here" variant="secondary">
            Start here
          </ButtonLink>
          <ButtonLink href="/frameworks" variant="secondary">
            Frameworks
          </ButtonLink>
          <ButtonLink href="/ideas" variant="secondary">
            Ideas
          </ButtonLink>
          <ButtonLink href="/work-with-me" variant="secondary">
            Learn how Arc works
          </ButtonLink>
        </div>
      </section>

      <Script
        id="constructive-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
