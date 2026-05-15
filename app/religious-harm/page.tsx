import { ConceptPageTemplate } from "@/components/concept-page-template";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { getConceptBySlug } from "@/src/content/concepts";

const hub = getConceptBySlug("religious-harm");

export const metadata = pageMetadata({
  title: "Religious Harm Therapy in Round Rock, TX",
  description:
    "Definition-first guide to religious harm and spiritual trauma from Arc Psychotherapy in Downtown Round Rock. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/religious-harm"
});

export default function ReligiousHarmPage() {
  if (!hub) return null;

  return (
    <>
      <SchemaScript
        id="religious-harm-webpage-schema"
        data={webPageSchema({
          name: hub.title,
          description:
            "Guide to religious harm from Arc Psychotherapy in Downtown Round Rock, Texas, with telehealth across Texas.",
          path: "/religious-harm"
        })}
      />
      <SchemaScript
        id="religious-harm-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Religious Harm", path: "/religious-harm" }
        ])}
      />
      <ConceptPageTemplate
        hub={hub}
        imageSrc="/images/architectural-details/concrete-shadow-lines.jpg"
        imageAlt="Concrete wall with severe angled shadows."
        resonanceLine="The work is not about replacing one rigid system with another. It is about rebuilding agency."
      />
    </>
  );
}
