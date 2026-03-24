import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { FaqBlock } from "@/components/faq-block";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { getFrameworkBySlug, frameworks } from "@/src/content/frameworks";
import { siteContent } from "@/src/content/site";

export function generateStaticParams() {
  return frameworks.map((framework) => ({ slug: framework.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const framework = getFrameworkBySlug(slug);

  if (!framework) {
    return { title: "Frameworks" };
  }

  const title = `${framework.name} | Frameworks`;
  const url = `${siteContent.siteUrl}/frameworks/${framework.slug}`;

  return {
    title,
    description: framework.definition,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: framework.definition,
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
      description: framework.definition,
      images: ["/opengraph-image"]
    }
  };
}

export default async function FrameworkDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const framework = getFrameworkBySlug(slug);

  if (!framework) {
    notFound();
  }

  return (
    <>
      <SchemaScript
        id={`framework-webpage-schema-${framework.slug}`}
        data={webPageSchema({
          name: framework.name,
          description: framework.definition,
          path: `/frameworks/${framework.slug}`
        })}
      />
      <SchemaScript
        id={`framework-breadcrumb-schema-${framework.slug}`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Frameworks", path: "/frameworks" },
          { name: framework.name, path: `/frameworks/${framework.slug}` }
        ])}
      />
      <section className="container-wrap py-16 md:py-20">
        <div className="hero-copy">
          <p className="label">Framework</p>
          <h1 className="h1 mt-4">{framework.name}</h1>
          <p className="hero-lede max-w-3xl">{framework.definition}</p>
        </div>
      </section>

      <section className="container-wrap section-gap">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">Why It Matters</p>
            <h2 className="h2">Why this tool exists.</h2>
            <ul className="split-panel__list body">
              {framework.whyItMatters.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">How It Shows Up</p>
            <h2 className="h2">When it becomes useful.</h2>
            <ul className="split-panel__list body">
              {framework.howItShowsUp.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container-wrap section-gap-lg">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">What Helps</p>
            <h2 className="h2">How the tool gets used.</h2>
            <ul className="split-panel__list body">
              {framework.whatHelps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">Related</p>
            <h2 className="h2">Nearby pages.</h2>
            <div className="flex flex-wrap gap-2">
              {framework.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href as Route} className="focus-ring no-link-style chip-link">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hero-actions">
              <ButtonLink href="/frameworks" variant="secondary">
                Framework Index
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <FaqBlock heading="FAQ" items={framework.faq} schemaId={`framework-faq-${framework.slug}`} />
    </>
  );
}
