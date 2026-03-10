import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { pageMetadata } from "@/lib/seo";
import {
  getAllEssays,
  type IdeaTag
} from "@/src/content/ideas";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Ideas | Round Rock, TX",
  description:
    "Short, practical reads on perfectionism, overcontrol, religious harm, and meaning from Arc Psychotherapy in Downtown Round Rock, with telehealth across Texas.",
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

  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Ideas</h1>
      <p className="body-lg mt-5 max-w-4xl">Read this if you want clearer language for what keeps repeating in your life.</p>
      <p className="body mt-4 max-w-4xl">
        These essays are short and practical. They help you name the pattern, understand the cost, and try a different move in real life.
      </p>
      <p className="body mt-3 max-w-4xl">
        If you are trying to figure out whether this work fits, this page is a good place to start.
      </p>
      <figure className="mt-8">
        <div className="arc-image-mask overflow-hidden">
          <Image
            src="/images/architectural-details/concrete-shadow-lines.jpg"
            alt="Concrete surface with sharp angled shadows."
            width={3575}
            height={2384}
            className="h-[14rem] w-full object-cover md:h-[20rem]"
            sizes="(min-width: 1024px) 72rem, 100vw"
          />
        </div>
      </figure>

      <section className="mt-12">
        <h2 className="h2">Start with one</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <article className="card">
            <h3 className="h3">
              <Link href="/ideas/perfectionism-structural-problem" className="focus-ring hover:text-sage">
                Perfectionism as a Structural Problem
              </Link>
            </h3>
            <p className="mt-3 body">If mindset advice has not changed much, start here.</p>
          </article>
          <article className="card">
            <h3 className="h3">
              <Link href="/ideas/adjacent-possible" className="focus-ring hover:text-sage">
                The Adjacent Possible
              </Link>
            </h3>
            <p className="mt-3 body">If decisions keep collapsing into all-or-nothing, start here.</p>
          </article>
          <article className="card">
            <h3 className="h3">
              <Link href="/ideas/leaving-faith-losing-gravity" className="focus-ring hover:text-sage">
                When Leaving a Faith System Feels Like Losing Gravity
              </Link>
            </h3>
            <p className="mt-3 body">If post-faith life feels disorienting, start here.</p>
          </article>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="h2">Or browse by topic</h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 body text-sm">
          {siteContent.primaryTopics.map((topic) => (
            <span key={topic} className="inline-flex items-center gap-3">
              {topic !== siteContent.primaryTopics[0] ? <span className="text-ink/35">•</span> : null}
              <Link
                href={{ pathname: "/ideas", query: { topic } }}
                className={`focus-ring no-link-style inline-link ${topicFilter === topic ? "font-semibold text-sage" : ""}`}
              >
                {topic}
              </Link>
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="h2">All essays</h2>
        <p className="mt-3 body max-w-3xl">
          Short reads on perfectionism, overcontrol, religious harm, and meaning. Pick the one that sounds most familiar.
        </p>
        <div className="editorial-list mt-6">
          {filteredEssays.map((essay) => (
            <article key={essay.slug} className="editorial-item">
              <h3 className="h3">
                <Link href={`/ideas/${essay.slug}` as Route} className="focus-ring hover:text-sage">
                  {essay.title}
                </Link>
              </h3>
              <p className="mt-4 body editorial-measure">{essay.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 mb-6">
        <p className="body max-w-4xl">
          If you read one or two pieces and think, “Yes, that is exactly it,” the next step is simple:{" "}
          <Link href="/work-with-me" className="focus-ring no-link-style inline-link font-semibold text-sage">
            read how I work
          </Link>{" "}
          or{" "}
          <Link href={siteContent.bookingUrl} className="focus-ring no-link-style inline-link font-semibold text-sage">
            schedule a consult
          </Link>.
        </p>
      </section>
    </section>
  );
}
