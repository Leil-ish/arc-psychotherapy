import type { Route } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { pricing, siteConfig } from "@/lib/content";
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
    label: "Neurodivergent-affirming therapy",
    body: "For burnout, masking, sensory strain, executive-function differences, and the work of translating yourself all day."
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
          <p className="hero-lede">Individual therapy in Round Rock and online across Texas for complex trauma, religious trauma and religious harm, perfectionism, overcontrol, and neurodivergence.</p>
          <div className="hero-support">
            <p className="body">You may understand the pattern extremely well. You may have explained it to yourself in several excellent ways. And still find yourself in the same fight, putting off the same decision, or building an elaborate system to keep an ordinary week from coming apart.</p>
            <p className="body">Therapy here is direct, curious, systemic, and allowed to be funny.</p>
            <p className="body">
              A lot of my work is with <Link href="/who-i-work-with" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">queer, trans, fat, neurodivergent, and post-religious adults</Link>—often at the intersections of several of those identities.
            </p>
          </div>
          <div className="hero-actions">
            <ButtonLink href="/contact">Ask about therapy availability</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-gap full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
          <div className="section-heading">
            <h2 className="h2">Areas I specialize in.</h2>
          </div>
          <div className="index-grid mt-6">
            {specialtyCards.map(({ specialty, label, body }) => (
              <Link key={specialty.path} href={specialty.path as Route} className="focus-ring no-link-style index-card">
                <h2 className="index-card__title">{label}</h2>
                <p className="index-card__body body">{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap-lg">
        <div className="container-wrap">
          <div className="section-heading">
            <h2 className="h2">How therapy works here.</h2>
          </div>
          <div className="split-band split-band--open mt-6">
            <article className="split-panel">
              <h3 className="h3">Starting.</h3>
              <p className="body">Therapy starts with a free, 30-minute video consultation. We talk about what has brought you here, what you hope would be different, and the practical questions that make a first appointment possible.</p>
              <p className="body">At the first full session, we take more room to get specific about what is happening now, who and what is involved, the history that matters, and what you have already tried.</p>
            </article>
            <article className="split-panel">
              <h3 className="h3">Ongoing work.</h3>
              <p className="body">Most people begin weekly. Once we have a treatment plan and a sense of what is helping, we can adjust frequency around the work and your life.</p>
              <p className="body">Some sessions are wide-open conversation. Other times, a visual map, a walk, or playing with LEGO gives us a more useful way to see a relationship, decision, or pattern. I bring questions, observations, and a willingness to say when I think we are looking in the wrong place.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-gap full-bleed-band full-bleed-band--ultramarine">
        <div className="container-wrap">
          <div className="split-band">
            <article className="split-panel">
              <h2 className="h2">How we know whether it is helping.</h2>
              <p className="body">We take stock along the way: Do you have more choice in a familiar situation? Are your relationships, decisions, or ordinary days changing in ways that matter to you? Has something become clearer, easier, or more yours?</p>
              <p className="body">If we hit a wall, that is worth talking about directly. We can change the focus, pace, or method—or decide another kind of care would be more useful.</p>
            </article>
            <article className="split-panel">
              <h2 className="h2">The practical details.</h2>
              <ul className="split-panel__list body">
                <li>Free 30-minute video consultation.</li>
                <li>${pricing.standardSession.fee} per psychotherapy session, {pricing.standardSession.duration}.</li>
                <li>In person in {siteConfig.primaryLocation}, with telehealth across Texas.</li>
                <li>Private-pay practice; superbills may be available for out-of-network reimbursement.</li>
              </ul>
              <div className="hero-actions">
                <ButtonLink href="/contact">Ask about therapy availability</ButtonLink>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
