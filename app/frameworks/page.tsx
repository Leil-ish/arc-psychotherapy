import Link from "next/link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { frameworks } from "@/src/content/frameworks";

export const metadata = pageMetadata({
  title: "Working Ideas | Round Rock, TX",
  description:
    "Optional thinking tools used in therapy for perfectionism, overcontrol, and religious harm. Downtown Round Rock, Texas, with telehealth across Texas.",
  path: "/frameworks"
});

export default function FrameworksPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="frameworks-webpage-schema"
        data={webPageSchema({
          name: "Working Ideas",
          description:
            "Optional therapy tools for perfectionism, overcontrol, and religious harm from Arc Psychotherapy in Downtown Round Rock, Texas.",
          path: "/frameworks",
          type: "CollectionPage"
        })}
      />
      <SchemaScript
        id="frameworks-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Working Ideas", path: "/frameworks" }
        ])}
      />
      <div className="hero-copy">
        <p className="label">Working ideas</p>
        <h1 className="h1 mt-4">Useful names for things that are otherwise hard to see.</h1>
        <p className="hero-lede">A few maps for patterns that are easier to work with once they have a name.</p>
        <div className="hero-support">
          <p className="body">Some show up in therapy. Others are simply useful ways of naming something you have already noticed.</p>
        </div>
      </div>

      <section className="section-gap">
        <div className="dense-index">
          {frameworks.map((framework) => (
            <Link key={framework.slug} href={`/frameworks/${framework.slug}`} className="focus-ring no-link-style dense-index__row">
              <div>
                <h2 className="dense-index__title">{framework.name}</h2>
              </div>
              <div className="dense-index__body body">
                <p>{framework.definition}</p>
                <p className="mt-3"><strong>Why it matters:</strong> {framework.whyItMatters[0]}</p>
              </div>
              <span className="dense-index__arrow">Open</span>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
