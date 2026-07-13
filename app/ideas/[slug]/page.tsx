import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SchemaScript } from "@/components/schema-script";
import { SimpleMarkdown } from "@/components/simple-markdown";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import {
  formatEssayDate,
  getAllEssays,
  getEssayBySlug,
  getReadingTimeMinutes,
  getRelatedEssays,
  type IdeaTag
} from "@/src/content/ideas";
import { siteContent } from "@/src/content/site";

type ConceptLink = {
  label: string;
  href: string;
};

const conceptByTag: Partial<Record<IdeaTag, ConceptLink>> = {
  Perfectionism: { href: "/perfectionism", label: "Perfectionism page" },
  Overcontrol: { href: "/overcontrol", label: "Overcontrol page" },
  "Religious Harm": { href: "/religious-harm", label: "Religious harm page" }
};

function conceptLinksForTags(tags: IdeaTag[]) {
  const links = tags
    .map((tag) => conceptByTag[tag])
    .filter((link): link is ConceptLink => Boolean(link));

  return Array.from(new Map(links.map((link) => [link.href, link])).values());
}

export function generateStaticParams() {
  return getAllEssays().map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    return {
      title: "Writing"
    };
  }

  const url = `${siteContent.siteUrl}/ideas/${essay.slug}`;
  const title = `${essay.title} | Writing`;

  return {
    title,
    description: essay.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: essay.description,
      url,
      type: "article",
      siteName: siteContent.brandName,
      locale: "en_US",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 675,
          alt: "Arc Psychotherapy wordmark on a dark field"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: essay.description,
      images: ["/opengraph-image"]
    }
  };
}

export default async function IdeaEssayPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  const related = getRelatedEssays(essay, 2);
  const conceptLinks = conceptLinksForTags(essay.tags);

  return (
    <article className="container-wrap py-16 md:py-20">
      <SchemaScript
        id={`article-schema-${essay.slug}`}
        data={articleSchema({
          headline: essay.title,
          description: essay.description,
          path: `/ideas/${essay.slug}`,
          datePublished: essay.date
        })}
      />
      <SchemaScript
        id={`idea-breadcrumb-schema-${essay.slug}`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Writing", path: "/ideas" },
          { name: essay.title, path: `/ideas/${essay.slug}` }
        ])}
      />
      <div className="article-shell">
        <p className="label">Writing</p>
        <h1 className="h1 mt-4 max-w-5xl">{essay.title}</h1>
        <p className="hero-lede max-w-3xl">{essay.description}</p>
        <div className="article-meta mt-6">
          <span>{formatEssayDate(essay.date)}</span>
          <span>{getReadingTimeMinutes(essay.body)} min read</span>
          <span>{essay.tags.join(" / ")}</span>
        </div>
        <section className="article-keyidea">
          <p className="label">Key Idea</p>
          <p className="body mt-3">{essay.keyIdea}</p>
        </section>
        <section className="article-body">
          <SimpleMarkdown body={essay.body} />
        </section>
      </div>

      <section className="section-gap">
        <div className="split-band">
          <article className="split-panel">
            <h2 className="h2">Related pages and frameworks.</h2>
            <div className="flex flex-wrap gap-2">
              {essay.related.map((link) => (
                <Link key={link.href} href={link.href as Route} className="focus-ring no-link-style chip-link">
                  {link.label}
                </Link>
              ))}
              <Link href="/frameworks" className="focus-ring no-link-style chip-link">
                Working ideas
              </Link>
              <Link href="/work-with-me" className="focus-ring no-link-style chip-link">
                Approach
              </Link>
              {conceptLinks.map((link) => (
                <Link key={link.href} href={link.href as Route} className="focus-ring no-link-style chip-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
          <article className="split-panel">
            <h2 className="h2">More on this topic.</h2>
            {related.length > 0 ? (
              <div className="dense-index">
                {related.map((item) => (
                  <Link key={item.slug} href={`/ideas/${item.slug}` as Route} className="focus-ring no-link-style dense-index__row">
                    <div>
                      <p className="label">{formatEssayDate(item.date)}</p>
                      <h3 className="dense-index__title mt-3">{item.title}</h3>
                    </div>
                    <p className="dense-index__body body">{item.description}</p>
                    <span className="dense-index__arrow">Read</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="body">This essay currently stands on its own.</p>
            )}
          </article>
        </div>
      </section>
    </article>
  );
}
