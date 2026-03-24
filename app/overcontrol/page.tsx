import { ConceptPageTemplate } from "@/components/concept-page-template";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { getConceptBySlug } from "@/src/content/concepts";

const hub = getConceptBySlug("overcontrol");

export const metadata = pageMetadata({
  title: "Overcontrol Therapy in Round Rock, TX",
  description:
    "Definition-first guide to overcontrol and rigidity from Arc Psychotherapy in Downtown Round Rock. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/overcontrol"
});

export default function OvercontrolPage() {
  if (!hub) return null;

  return (
    <>
      <SchemaScript
        id="overcontrol-webpage-schema"
        data={webPageSchema({
          name: hub.title,
          description:
            "Guide to overcontrol from Arc Psychotherapy in Downtown Round Rock, Texas, with telehealth across Texas.",
          path: "/overcontrol"
        })}
      />
      <SchemaScript
        id="overcontrol-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Overcontrol", path: "/overcontrol" }
        ])}
      />
      <ConceptPageTemplate
        hub={hub}
        imageSrc="/images/architectural-details/stair-shadow-blackwhite.jpg"
        imageAlt="Stair and wall in high-contrast shadow."
        resonanceLine="If this feels familiar, the goal is not chaos. The goal is more range without losing what matters."
      />
    </>
  );
}
