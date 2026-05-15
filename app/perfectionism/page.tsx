import { ConceptPageTemplate } from "@/components/concept-page-template";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { getConceptBySlug } from "@/src/content/concepts";

const hub = getConceptBySlug("perfectionism");

export const metadata = pageMetadata({
  title: "Perfectionism Therapy in Round Rock, TX",
  description:
    "Definition-first guide to perfectionism from Arc Psychotherapy in Downtown Round Rock. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/perfectionism"
});

export default function PerfectionismPage() {
  if (!hub) return null;

  return (
    <>
      <SchemaScript
        id="perfectionism-webpage-schema"
        data={webPageSchema({
          name: hub.title,
          description:
            "Guide to perfectionism from Arc Psychotherapy in Downtown Round Rock, Texas, with telehealth across Texas.",
          path: "/perfectionism"
        })}
      />
      <SchemaScript
        id="perfectionism-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Perfectionism", path: "/perfectionism" }
        ])}
      />
      <ConceptPageTemplate
        hub={hub}
        imageSrc="/images/architectural-details/facade-black-grid.jpg"
        imageAlt="Dark geometric building facade."
        resonanceLine="The goal is not lower standards. It is more range."
      />
    </>
  );
}
