import type { Route } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { specialties } from "@/src/content/specialties";

export const metadata = pageMetadata({
  title: "Individual Therapy in Round Rock, TX | Arc Psychotherapy",
  description:
    "Private-pay individual therapy for adults navigating complex trauma, religious trauma, perfectionism, overcontrol, and neurodivergence in Round Rock and online across Texas.",
  path: "/therapy"
});

const specialtyCards = [
  {
    specialty: specialties.religiousTrauma,
    label: "Religious trauma and religious harm",
    body: "When old rules still show up in your body, relationships, and decisions."
  },
  {
    specialty: specialties.complexTrauma,
    label: "Complex trauma",
    body: "When the danger is old, but life is still organized around not being caught off guard."
  },
  {
    specialty: specialties.perfectionismOvercontrol,
    label: "Perfectionism and overcontrol",
    body: "When being capable has become a full-time private management system."
  },
  {
    specialty: specialties.neurodivergentAdults,
    label: "Neurodivergent adults",
    body: "Therapy that makes room for how your mind actually works."
  }
] as const;

export default function TherapyPage() {
  return (
    <>
      <SchemaScript
        id="therapy-webpage-schema"
        data={webPageSchema({
          name: "Individual therapy for adults",
          description:
            "Private-pay individual therapy for adults in Round Rock and online across Texas.",
          path: "/therapy"
        })}
      />
      <SchemaScript
        id="therapy-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Therapy", path: "/therapy" }
        ])}
      />
      <section className="container-wrap py-16 md:py-20">
        <div className="hero-copy">
          <p className="label">Private-pay individual psychotherapy for adults</p>
          <h1 className="h1 mt-4">Bring the complicated version.</h1>
          <p className="hero-lede">Therapy in Round Rock and online across Texas for complex trauma, religious trauma and religious harm, perfectionism, overcontrol, neurodivergence, and the private rules that can make a life increasingly difficult to live inside.</p>
          <div className="hero-support">
            <p className="body">You may understand the problem extremely well. You may have explained it to yourself in several excellent ways. It may still be running the meeting.</p>
            <p className="body">Therapy here is direct, curious, systemic, and allowed to be funny.</p>
          </div>
          <div className="hero-actions">
            <ButtonLink href="/contact">Ask about therapy availability</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-gap full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
          <div className="index-grid">
            {specialtyCards.map(({ specialty, label, body }) => (
              <Link key={specialty.path} href={specialty.path as Route} className="focus-ring no-link-style index-card">
                <h2 className="index-card__title">{label}</h2>
                <p className="index-card__body body">{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
