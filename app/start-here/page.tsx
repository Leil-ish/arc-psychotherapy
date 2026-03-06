import type { Route } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getEssayBySlugs } from "@/src/content/ideas";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Start Here | Round Rock, TX",
  description:
    "Structured psychotherapy for high-achieving adults navigating perfectionism, rigidity, and religious harm. Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas.",
  path: "/start-here"
});

export default function StartHerePage() {
  const recommended = getEssayBySlugs(siteContent.featuredEssays);

  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Start Here</h1>
      <p className="body-lg mt-5 max-w-4xl">
        Arc Psychotherapy is a structured psychotherapy practice for high-achieving adults working through perfectionism, rigidity, and religious harm.
      </p>
      <p className="body mt-3 max-w-4xl">
        Primary location is {siteContent.primaryLocation}. {siteContent.secondaryLocation}. {siteContent.telehealthRegion}.
      </p>
      <p className="body mt-3 max-w-4xl">
        Surrounding communities include Cedar Park, Georgetown, and Pflugerville.
      </p>

      <section className="mt-12">
        <h2 className="h2">Core Ideas</h2>
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
          Explore frameworks
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
