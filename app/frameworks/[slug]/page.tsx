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
        <h1 className="h1">{framework.name}</h1>
        <p className="body-lg mt-5 max-w-3xl">{framework.definition}</p>
      </section>

      <section className="container-wrap grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="h2">How it shows up</h2>
          <ul className="mt-4 space-y-2 body">
            {framework.howItShowsUp.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2 className="h2">What helps</h2>
          <ul className="mt-4 space-y-2 body">
            {framework.whatHelps.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="container-wrap mt-12">
        <h2 className="h2">Related</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {framework.relatedLinks.map((link) => (
            <Link key={link.href} href={link.href as Route} className="focus-ring rounded-full border border-stone px-3 py-2 text-sm hover:border-sage/40">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <FaqBlock heading="FAQ" items={framework.faq} schemaId={`framework-faq-${framework.slug}`} />
    </>
  );
}
