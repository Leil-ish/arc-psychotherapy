import type { Route } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { formatEssayDate, getEssayBySlugs, getReadingTimeMinutes } from "@/src/content/ideas";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Start Here | Round Rock, TX",
  description:
    "Structured psychotherapy for high-achieving adults navigating perfectionism, rigidity, and religious harm. Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas.",
  path: "/start-here"
});

export default function StartHerePage() {
  const recommended = getEssayBySlugs(siteContent.startHereEssays);

  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Start Here</h1>
      <p className="body-lg mt-5 max-w-4xl">
        Arc&apos;s conceptual approach is definition-first and systems-informed: we clarify control strategies, belief structures, and adaptive flexibility before making behavioral changes.
      </p>
      <p className="body mt-3 max-w-4xl">
        This page provides a structured starting point for understanding Arc&apos;s approach before beginning therapy.
      </p>
      <p className="body mt-3 max-w-4xl">
        {siteContent.primaryLocation}. Serving North Austin, Cedar Park, Georgetown, and surrounding communities. {siteContent.telehealthRegion}.
      </p>
      <Link href="/definitions" className="focus-ring mt-4 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
        Core concepts
      </Link>

      <section className="mt-12">
        <h2 className="h2">Concept Hubs</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {siteContent.home.conceptLinks.map((concept) => (
            <article key={concept.href} className="card">
              <h3 className="h3 text-xl">
                <Link href={concept.href as Route} className="focus-ring hover:text-sage">
                  {concept.title}
                </Link>
              </h3>
              <p className="mt-3 body">{concept.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="h2">Frameworks</h2>
        <p className="body mt-3 max-w-3xl">
          Arc uses named conceptual models to keep treatment explicit, paced, and testable across sessions.
        </p>
        <Link href="/frameworks" className="focus-ring mt-4 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Frameworks index
        </Link>
        <Link href="/definitions" className="focus-ring ml-4 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Core concepts
        </Link>
      </section>

      <section className="mt-14">
        <h2 className="h2">Recommended Essays</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {recommended.map((essay) => (
            <article key={essay.slug} className="card">
              <h3 className="h3 text-xl">
                <Link href={`/ideas/${essay.slug}` as Route} className="focus-ring hover:text-sage">
                  {essay.title}
                </Link>
              </h3>
              <p className="mt-3 body">{essay.description}</p>
              <p className="mt-3 text-sm text-ink/70">
                {getReadingTimeMinutes(essay.body)} min read • {formatEssayDate(essay.date)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 card">
        <h2 className="h2">How Arc works</h2>
        <p className="body mt-3 max-w-3xl">
          Treatment begins with consult, then a defined arc of structured psychotherapy. Optional structured model-building is available when it supports clinical goals; standard therapy remains available on its own.
        </p>
        <Link href="/work-with-me" className="focus-ring mt-4 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Learn how Arc works
        </Link>
      </section>
    </section>
  );
}
