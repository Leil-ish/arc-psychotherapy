import { pageMetadata } from "@/lib/seo";
import { SpecialtyPage } from "@/components/specialty-page";
import { specialties } from "@/src/content/specialties";

export const metadata = pageMetadata({
  title: "Complex Trauma Therapy in Round Rock, TX | Arc Psychotherapy",
  description:
    "Individual therapy for adults living with complex, developmental, childhood, or relational trauma in Round Rock and by telehealth across Texas.",
  path: "/therapy/complex-trauma"
});

export default function ComplexTraumaTherapyPage() {
  return <SpecialtyPage specialty={specialties.complexTrauma} />;
}
