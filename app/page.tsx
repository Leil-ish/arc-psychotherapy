import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ButtonLink } from "@/components/button-link";
import { pageMetadata } from "@/lib/seo";
import { frameworks } from "@/src/content/frameworks";
import { getEssayBySlugs, getReadingTimeMinutes } from "@/src/content/ideas";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Structured therapy for perfectionism & religious harm | Round Rock, TX",
  description:
    "Structured psychotherapy for high-achieving adults navigating perfectionism, rigidity, and religious harm. Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas.",
  path: "/"
});

export default function HomePage() {
  const featuredEssays = getEssayBySlugs(siteContent.featuredEssays);
  const featuredFrameworks = frameworks.slice(0, 3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteContent.home.faq.map((item) => ({
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
      <section className="container-wrap py-16 md:py-24">
        <h1 className="h1">{siteContent.brandName}</h1>
        <p className="body-lg mt-5 max-w-3xl">{siteContent.heroTagline}</p>
        <p className="mt-3 body max-w-3xl">Collaborative, systems-informed work grounded in clarity, not quick fixes.</p>
        <p className="mt-3 body max-w-3xl text-ink/90">{siteContent.home.secondaryLine}</p>
        <p className="mt-3 body text-sm uppercase tracking-[0.12em] text-sage">{siteContent.home.locationLine}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={siteContent.bookingUrl} external>
            Schedule consult
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
        <p className="mt-4 body text-sm max-w-3xl text-ink/75">
          Core offer: ongoing psychotherapy. Optional structured model-building is available when clinically useful.
        </p>
        <figure className="mt-10 overflow-hidden rounded-3xl border border-stone/70 bg-white shadow-card">
          <Image
            src="/hero-architecture.svg"
            width={1200}
            height={800}
            priority
            alt="Abstract architectural forms in warm neutral tones representing structure and flexibility."
            className="h-auto w-full"
          />
        </figure>
      </section>

      <section className="container-wrap mt-16 grid gap-8 md:grid-cols-2">
        <article className="card">
          <h2 className="h2">Fit signals</h2>
          <ul className="mt-5 space-y-3 body">
            {siteContent.home.fitSignals.map((signal) => (
              <li key={signal}>• {signal}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2 className="h2">How this works</h2>
          <ol className="mt-5 space-y-3 body">
            {siteContent.home.steps.map((step, index) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
          <p className="mt-5 body text-sm text-ink/75">
            Standard sessions are ${siteContent.standardSessionFee} per session ({siteContent.sessionLength}).
          </p>
          <div className="mt-5">
            <ButtonLink href="/work-with-me" variant="secondary">
              Learn how Arc works
            </ButtonLink>
          </div>
        </article>
      </section>

      <section className="container-wrap mt-16">
        <h2 className="h2">Start here</h2>
        <p className="mt-3 body max-w-2xl">Use the orientation path: concept hubs first, then frameworks and essays.</p>
        <Link href="/start-here" className="focus-ring mt-4 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Start here
        </Link>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {siteContent.home.conceptLinks.map((concept) => (
            <Link key={concept.href} href={concept.href} className="card focus-ring block transition hover:border-sage/50">
              <h3 className="h3">{concept.title}</h3>
              <p className="mt-3 body">{concept.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-wrap mt-16 grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="h2">Ideas</h2>
          <Link href="/ideas" className="focus-ring mt-3 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Explore the ideas library
          </Link>
          <div className="mt-5 space-y-4">
            {featuredEssays.map((essay) => (
              <div key={essay.slug} className="border-b border-stone/60 pb-4 last:border-none last:pb-0">
                <h3 className="h3 text-xl">
                  <Link href={`/ideas/${essay.slug}`} className="focus-ring hover:text-sage">
                    {essay.title}
                  </Link>
                </h3>
                <p className="mt-2 body">{essay.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.11em] text-sage">{essay.tags.join(" • ")}</p>
                <p className="mt-2 text-sm text-ink/70">{getReadingTimeMinutes(essay.body)} min read</p>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <h2 className="h2">Frameworks</h2>
          <Link href="/frameworks" className="focus-ring mt-3 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Explore frameworks
          </Link>
          <div className="mt-5 space-y-4">
            {featuredFrameworks.map((framework) => (
              <div key={framework.slug} className="border-b border-stone/60 pb-4 last:border-none last:pb-0">
                <h3 className="h3 text-xl">
                  <Link href={`/frameworks/${framework.slug}`} className="focus-ring hover:text-sage">
                    {framework.name}
                  </Link>
                </h3>
                <p className="mt-2 body">{framework.definition}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="container-wrap mt-16">
        <article className="card">
          <h2 className="h2">Speaking & Systems Work</h2>
          <p className="mt-3 body max-w-3xl">
            Arc contributes to professional conversations through TAMFT presentations, clinical AI workflow design, and advocacy work focused on responsible, structured mental health systems.
          </p>
        </article>
      </section>

      <section className="container-wrap mt-16 mb-20">
        <h2 className="h2">FAQ</h2>
        <div className="mt-6 space-y-4">
          {siteContent.home.faq.map((item) => (
            <article key={item.question} className="card">
              <h3 className="h3 text-xl">{item.question}</h3>
              <p className="mt-3 body">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <Script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
