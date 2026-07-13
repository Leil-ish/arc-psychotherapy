import { pageMetadata } from "@/lib/seo";
import { SpecialtyPage } from "@/components/specialty-page";
import { specialties } from "@/src/content/specialties";

export const metadata = pageMetadata({
  title: "Religious Trauma Therapy in Round Rock, TX | Arc Psychotherapy",
  description:
    "Individual therapy for religious trauma, religious harm, spiritual abuse, high-control religion, and faith deconstruction in Round Rock and online across Texas.",
  path: "/therapy/religious-trauma"
});

export default function ReligiousTraumaTherapyPage() {
  return <SpecialtyPage specialty={specialties.religiousTrauma} />;
}
