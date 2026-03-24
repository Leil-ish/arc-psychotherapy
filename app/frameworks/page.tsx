import Link from "next/link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { frameworks } from "@/src/content/frameworks";

export const metadata = pageMetadata({
  title: "Frameworks | Round Rock, TX",
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
          name: "Frameworks",
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
          { name: "Frameworks", path: "/frameworks" }
        ])}
      />
      <div className="hero-copy">
        <p className="label">Frameworks</p>
        <h1 className="h1 mt-4">Optional tools, not homework.</h1>
        <p className="hero-lede">If a framework helps you see the pattern faster, we use it. If it doesn&apos;t, we drop it.</p>
        <div className="hero-support">
          <p className="body">These tools exist to create traction, not to perform intelligence.</p>
          <p className="body">Start with the one that sounds familiar, or skip this page entirely.</p>
        </div>
      </div>

      <section className="section-gap">
        <div className="dense-index">
          {frameworks.map((framework) => (
            <Link key={framework.slug} href={`/frameworks/${framework.slug}`} className="focus-ring no-link-style dense-index__row">
              <div>
                <p className="label">Framework</p>
                <h2 className="dense-index__title mt-3">{framework.name}</h2>
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
