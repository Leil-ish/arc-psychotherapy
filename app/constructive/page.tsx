import Link from "next/link";
import Script from "next/script";
import { ButtonLink } from "@/components/button-link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

const constructive = siteContent.constructive;

export const metadata = pageMetadata({
  title: "The LEGO Thing | Round Rock, TX",
  description:
    "Optional LEGO-based psychotherapy in Downtown Round Rock for adults navigating perfectionism, overcontrol, and religious harm. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/constructive"
});

export default function ConstructivePage() {
  const faqItems = constructive.faq.slice(0, 3);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
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
          <p className="body">{constructive.curious}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={siteContent.bookingUrl}>
            Ask about therapy availability
          </ButtonLink>
          <ButtonLink href="/therapy" variant="secondary">
            How it works
          </ButtonLink>
        </div>
      </section>

      <section className="container-wrap mt-12">
        <h2 className="h2">Why LEGO can help.</h2>
        <p className="mt-3 body max-w-3xl">
          The method supports targeted work on <Link href="/therapy/perfectionism-overcontrol" className="focus-ring underline-offset-4 hover:underline">perfectionism and overcontrol</Link>, and constraints related to <Link href="/therapy/religious-trauma" className="focus-ring underline-offset-4 hover:underline">religious trauma and religious harm</Link>.
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
        <h2 className="h2">What a LEGO session can look like.</h2>
        <ol className="mt-5 grid gap-4 md:grid-cols-5 body">
          {constructive.sessionFlow.map((step, index) => (
            <li key={step} className="card">
              <p className="label">Step {index + 1}</p>
              <p className="mt-2">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 body text-sm max-w-3xl">
          You keep completed materials.
        </p>
      </section>

      <section className="container-wrap mt-14">
        <h2 className="h2">6- and 10-session LEGO therapy packages.</h2>
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
          {faqItems.map((item) => (
            <article key={item.question} className="card">
              <h3 className="h3">{item.question}</h3>
              <p className="mt-3 body">{item.answer}</p>
            </article>
          ))}
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
