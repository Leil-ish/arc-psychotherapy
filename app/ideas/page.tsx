import Link from "next/link";
import type { Route } from "next";
import { pageMetadata } from "@/lib/seo";
import {
  getAllEssays,
  getEssayBySlugs,
  getReadingTimeMinutes,
  type IdeaTag
} from "@/src/content/ideas";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Ideas Library | Round Rock, TX",
  description:
    "Definition-first essays on perfectionism, overcontrol, religious harm, and meaning from Arc Psychotherapy in Downtown Round Rock, serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/ideas"
});

function isIdeaTag(value: string): value is IdeaTag {
  return siteContent.primaryTopics.includes(value as IdeaTag);
}

export default async function IdeasPage({
  searchParams
}: {
  searchParams?: Promise<{ topic?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const activeTopic = params.topic;
  const topicFilter = activeTopic && isIdeaTag(activeTopic) ? activeTopic : undefined;

  const essays = getAllEssays();
  const filteredEssays = topicFilter
    ? essays.filter((essay) => essay.tags.includes(topicFilter))
    : essays;

  const startHere = getEssayBySlugs(siteContent.startHereEssays);
  const featured = getEssayBySlugs(siteContent.featuredEssays);

  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Ideas</h1>
      <p className="body-lg mt-5 max-w-3xl">
        Ideas is Arc&apos;s curated editorial library: concise definitions, frameworks, and applied essays for high-functioning adults.
      </p>
      <p className="body mt-3 max-w-3xl">
        Start with the recommended sequence below, then browse by topic. Each piece links to concept hubs, frameworks, and practical next steps.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link href="/start-here" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Start here
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

      <div className="card mt-8">
        <h2 className="h3">Start here sequence</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {startHere.map((essay) => (
            <Link key={essay.slug} href={`/ideas/${essay.slug}` as Route} className="focus-ring rounded-xl border border-stone/70 bg-sand/60 p-4 transition hover:border-sage/40">
              <p className="text-sm font-semibold text-ink">{essay.title}</p>
              <p className="mt-2 text-sm text-ink/80">{essay.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="h2">Topics</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/ideas"
            className={`focus-ring rounded-full border px-4 py-2 text-sm ${
              !topicFilter ? "border-sage bg-sage text-white" : "border-stone text-ink/85"
            }`}
          >
            All
          </Link>
          {siteContent.primaryTopics.map((topic) => (
            <Link
              key={topic}
              href={{ pathname: "/ideas", query: { topic } }}
              className={`focus-ring rounded-full border px-4 py-2 text-sm ${
                topicFilter === topic ? "border-sage bg-sage text-white" : "border-stone text-ink/85"
              }`}
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="h2">Featured essays</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {featured.map((essay) => (
            <article key={essay.slug} className="card">
              <h3 className="h3 text-xl">
                <Link href={`/ideas/${essay.slug}` as Route} className="focus-ring hover:text-sage">
                  {essay.title}
                </Link>
              </h3>
              <p className="mt-3 body">{essay.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.11em] text-sage">{essay.tags.join(" • ")}</p>
              <p className="mt-2 text-sm text-ink/70">{getReadingTimeMinutes(essay.body)} min read</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="h2">Library</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {filteredEssays.map((essay) => (
            <article key={essay.slug} className="card">
              <h3 className="h3 text-xl">
                <Link href={`/ideas/${essay.slug}` as Route} className="focus-ring hover:text-sage">
                  {essay.title}
                </Link>
              </h3>
              <p className="mt-3 body">{essay.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {essay.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-stone px-2 py-1 text-xs text-ink/80">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-ink/70">{getReadingTimeMinutes(essay.body)} min read</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
