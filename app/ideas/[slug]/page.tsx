import type { Metadata, Route } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { SimpleMarkdown } from "@/components/simple-markdown";
import {
  getAllEssays,
  getEssayBySlug,
  getReadingTimeMinutes,
  getRelatedEssays,
  type IdeaTag
} from "@/src/content/ideas";
import { siteContent } from "@/src/content/site";

const conceptHrefByTag: Partial<Record<IdeaTag, string>> = {
  Perfectionism: "/perfectionism",
  Overcontrol: "/overcontrol",
  "Religious Harm": "/religious-harm"
};

function conceptLinksForTags(tags: IdeaTag[]) {
  const hrefs = tags
    .map((tag) => conceptHrefByTag[tag])
    .filter((href): href is string => Boolean(href));

  return Array.from(new Set(hrefs));
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
      title: "Ideas"
    };
  }

  const url = `${siteContent.siteUrl}/ideas/${essay.slug}`;

  return {
    title: `${essay.title} | Ideas`,
    description: essay.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${essay.title} | Ideas`,
      description: essay.description,
      url,
      type: "article",
      siteName: siteContent.brandName,
      locale: "en_US"
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    datePublished: essay.date,
    author: {
      "@type": "Person",
      name: siteContent.authorDisplayName
    },
    description: essay.description,
    mainEntityOfPage: `${siteContent.siteUrl}/ideas/${essay.slug}`
  };

  return (
    <article className="container-wrap py-16 md:py-20">
      <p className="label">Ideas</p>
      <h1 className="h1 mt-3 max-w-4xl">{essay.title}</h1>
      <p className="mt-4 body max-w-3xl text-ink/85">{essay.description}</p>
      <p className="mt-3 text-sm text-ink/70">
        {essay.date} • {getReadingTimeMinutes(essay.body)} min read
      </p>

      <section className="card mt-8">
        <p className="label">Key idea</p>
        <p className="mt-3 body">{essay.keyIdea}</p>
      </section>

      <section className="mt-10 max-w-3xl">
        <SimpleMarkdown body={essay.body} />
      </section>

      <section className="card mt-10">
        <h2 className="h3">Related</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {essay.related.map((link) => (
            <Link key={link.href} href={link.href as Route} className="focus-ring rounded-full border border-stone px-3 py-2 text-sm hover:border-sage/40">
              {link.label}
            </Link>
          ))}
          <Link href="/frameworks" className="focus-ring rounded-full border border-stone px-3 py-2 text-sm hover:border-sage/40">
            Frameworks
          </Link>
          <Link href="/work-with-me" className="focus-ring rounded-full border border-stone px-3 py-2 text-sm hover:border-sage/40">
            Learn how Arc works
          </Link>
          {conceptLinks.map((href) => (
            <Link key={href} href={href as Route} className="focus-ring rounded-full border border-stone px-3 py-2 text-sm hover:border-sage/40">
              {href.replace("/", "").replace("-", " ")}
            </Link>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-10">
          <h2 className="h2">Related reading</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <article key={item.slug} className="card">
                <h3 className="h3 text-xl">
                  <Link href={`/ideas/${item.slug}` as Route} className="focus-ring hover:text-sage">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 body">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="card mt-12 bg-ink text-white">
        <h2 className="h3">If this resonates, here is how Arc works.</h2>
        <p className="mt-3 text-white/85">
          Arc uses structured psychotherapy to translate concepts into practical behavior change with clear pacing and integration.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ButtonLink href="/work-with-me" variant="secondary">
            Learn how Arc works
          </ButtonLink>
          <ButtonLink href={siteContent.bookingUrl} external>
            Schedule consult
          </ButtonLink>
        </div>
      </section>

      <Script
        id={`article-schema-${essay.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </article>
  );
}
