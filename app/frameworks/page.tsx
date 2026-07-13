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
        <p className="hero-lede">These are working ideas, not branded treatment steps and not homework you need to master before therapy can help.</p>
        <div className="hero-support">
          <p className="body">If one gives us a clearer view of the problem, we may use it. If it turns into a way to sound insightful without changing anything, it has failed its job.</p>
          <p className="body">Start with the one that sounds familiar, or skip this page entirely.</p>
        </div>
      </div>

      <section className="section-gap">
        <div className="dense-index">
          {frameworks.map((framework) => (
            <Link key={framework.slug} href={`/frameworks/${framework.slug}`} className="focus-ring no-link-style dense-index__row">
              <div>
                <p className="label">Working idea</p>
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
