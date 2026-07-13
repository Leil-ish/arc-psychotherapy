import Image from "next/image";
import Link from "next/link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import {
  getAllEssays,
  formatEssayDate,
  type IdeaTag
} from "@/src/content/ideas";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Writing on Perfectionism & Religious Harm | Round Rock, TX",
  description:
    "Essays on perfectionism, overcontrol, religious harm, and meaning from Arc Psychotherapy in Downtown Round Rock, Texas.",
  path: "/ideas"
});

function isIdeaTag(value: string): value is IdeaTag {
  return siteContent.primaryTopics.includes(value as IdeaTag);
}

const intro = {
  title: "Writing about the things that keep getting mistaken for personal failures.",
  lede: "Perfectionism, overcontrol, religious harm, and the systems around them.",
  body:
    "A few essays about perfectionism, religious harm, ordinary life, and the strange logic of being a person."
} as const;

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
      <SchemaScript
        id="ideas-webpage-schema"
        data={webPageSchema({
          name: "Writing",
          description:
            "Essays on perfectionism, overcontrol, religious harm, and meaning from Arc Psychotherapy in Downtown Round Rock, Texas.",
          path: "/ideas",
          type: "CollectionPage"
        })}
      />
      <SchemaScript
        id="ideas-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Writing", path: "/ideas" }
        ])}
      />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="label">Writing</p>
          <h1 className="h1 mt-4">{intro.title}</h1>
          <p className="hero-lede">{intro.lede}</p>
          <div className="hero-support">
            <p className="body">{intro.body}</p>
          </div>
        </div>
        <figure className="image-frame">
          <Image
            src="/images/architectural-details/concrete-shadow-lines.jpg"
            alt="Concrete surface cut by sharp diagonal shadows."
            width={3575}
            height={2384}
            className="h-full min-h-[18rem] w-full object-cover"
            sizes="(min-width: 1024px) 34rem, 100vw"
          />
        </figure>
      </div>

      <section className="section-gap-lg full-bleed-band full-bleed-band--ultramarine">
        <div className="container-wrap">
          <div className="route-divider route-divider--ultramarine">
            <p className="label">Browse By Topic</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 body text-sm">
              {siteContent.primaryTopics.map((topic) => (
                <span key={topic} className="inline-flex items-center gap-3">
                  {topic !== siteContent.primaryTopics[0] ? <span className="text-white/35">•</span> : null}
                  <Link
                    href={{ pathname: "/ideas", query: { topic } }}
                    className={`focus-ring no-link-style inline-link ${topicFilter === topic ? "inline-link--active" : ""}`}
                  >
                    {topic}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap-lg">
        <div className="section-heading">
          <h2 className="h2">{topicFilter ?? "Essays"}</h2>
        </div>
        <div className="dense-index mt-6">
          {filteredEssays.map((essay) => (
            <Link key={essay.slug} href={`/ideas/${essay.slug}`} className="focus-ring no-link-style dense-index__row">
              <div>
                <p className="label">{formatEssayDate(essay.date)}</p>
                <h3 className="dense-index__title mt-3">{essay.title}</h3>
              </div>
              <p className="dense-index__body body">{essay.description}</p>
              <span className="dense-index__arrow">Read</span>
            </Link>
          ))}
        </div>
      </section>

    </section>
  );
}
