import type { Route } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { frameworks } from "@/src/content/frameworks";

export const metadata = pageMetadata({
  title: "Frameworks | Round Rock, TX",
  description:
    "Named frameworks used by Arc Psychotherapy in Downtown Round Rock to structure work on perfectionism, overcontrol, and religious harm. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/frameworks"
});

export default function FrameworksPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Frameworks</h1>
      <p className="body-lg mt-5 max-w-3xl">
        Frameworks are the conceptual models Arc uses to keep psychotherapy explicit, paced, and coherent across sessions.
      </p>
      <p className="body mt-3 max-w-3xl">
        Use this page as a working glossary, then open each framework for examples, practical application, and related reading.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/start-here" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Start here
        </Link>
        <Link href="/ideas" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Ideas library
        </Link>
        <Link href="/perfectionism" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Perfectionism hub
        </Link>
        <Link href="/overcontrol" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Overcontrol hub
        </Link>
        <Link href="/religious-harm" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Religious harm hub
        </Link>
        <Link href="/work-with-me" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Learn how Arc works
        </Link>
      </div>
      <div className="mt-8 space-y-4">
        {frameworks.map((framework) => (
          <article key={framework.slug} className="card">
            <h2 className="h3">
              <Link href={`/frameworks/${framework.slug}` as Route} className="focus-ring hover:text-sage">
                {framework.name}
              </Link>
            </h2>
            <p className="mt-3 body">{framework.definition}</p>
            <ul className="mt-4 space-y-2 body text-sm">
              {framework.whyItMatters.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
