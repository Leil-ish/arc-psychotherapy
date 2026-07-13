import { pageMetadata } from "@/lib/seo";
import { SpecialtyPage } from "@/components/specialty-page";
import { specialties } from "@/src/content/specialties";

export const metadata = pageMetadata({
  title: "Perfectionism Therapy in Round Rock, TX | Arc Psychotherapy",
  description:
    "Therapy for perfectionism, overcontrol, chronic over-responsibility, self-criticism, and high-achieving burnout in Round Rock and online across Texas.",
  path: "/therapy/perfectionism-overcontrol"
});

export default function PerfectionismOvercontrolTherapyPage() {
  return <SpecialtyPage specialty={specialties.perfectionismOvercontrol} />;
}
