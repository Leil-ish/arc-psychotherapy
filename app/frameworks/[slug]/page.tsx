import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqBlock } from "@/components/faq-block";
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
      locale: "en_US"
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
      <section className="container-wrap py-16 md:py-20">
        <h1 className="editorial-header">{framework.name}</h1>
        <p className="body-lg mt-5 editorial-measure">{framework.definition}</p>
      </section>

      <section className="container-wrap editorial-section">
        <h2 className="h2">How this framework is used</h2>
        <div className="editorial-list mt-6">
          <article className="editorial-item">
            <h3 className="h3">How it shows up</h3>
            <ul className="mt-5 space-y-2 body editorial-measure">
              {framework.howItShowsUp.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="editorial-item">
            <h3 className="h3">What helps</h3>
            <ul className="mt-5 space-y-2 body editorial-measure">
              {framework.whatHelps.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container-wrap editorial-section">
        <h2 className="h2">Related</h2>
        <div className="editorial-list mt-5">
          <div className="editorial-item-tight flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            {framework.relatedLinks.map((link, index) => (
              <span key={link.href} className="inline-flex items-center gap-3">
                {index > 0 ? <span className="text-ink/35">•</span> : null}
                <Link href={link.href as Route} className="focus-ring underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock heading="FAQ" items={framework.faq} schemaId={`framework-faq-${framework.slug}`} />
    </>
  );
}
