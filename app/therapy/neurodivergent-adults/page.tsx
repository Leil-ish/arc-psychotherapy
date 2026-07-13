import { pageMetadata } from "@/lib/seo";
import { SpecialtyPage } from "@/components/specialty-page";
import { specialties } from "@/src/content/specialties";

export const metadata = pageMetadata({
  title: "Neurodivergent-Affirming Therapy in Round Rock, TX | Arc Psychotherapy",
  description:
    "Affirming individual therapy for neurodivergent adults navigating burnout, masking, trauma, relationships, perfectionism, and executive-function differences.",
  path: "/therapy/neurodivergent-adults"
});

export default function NeurodivergentAdultsTherapyPage() {
  return <SpecialtyPage specialty={specialties.neurodivergentAdults} />;
}
