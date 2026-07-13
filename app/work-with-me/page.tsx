import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { pricing, siteConfig } from "@/lib/content";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Approach | Round Rock, TX",
  description:
    "How therapy works at Arc Psychotherapy in Downtown Round Rock, Texas, with telehealth across Texas.",
  path: "/work-with-me"
});

const intro = {
  eyebrow: "Approach",
  title: "What therapy looks like when insight alone has not been enough.",
  lede:
    "Therapy that is specific enough to change something outside the session.",
  body: [
    "I don't do small-talk therapy. We get specific about what keeps happening, where it started, and what keeps it in place.",
    "Then we work on it until your body believes what your mind already knows — changes you can notice in your actual life, not just in the room."
  ]
} as const;

const process = [
  {
    step: "Consult",
    title: "Start with a consult.",
    body: "We talk through what is going on, what you want help with, and the practical details."
  },
  {
    step: "Therapy",
    title: "Get specific about the pattern.",
    body: "We look closely at what happens during the week, not only at what you understand in session."
  },
  {
    step: "Adjustment",
    title: "Keep what helps.",
    body: "If something is useful, we keep it. If it isn't working, we say so and change course."
  }
] as const;

const values = [
  "Queer and trans affirming.",
  "Fat positive and HAES-aligned.",
  "Neurodivergent-affirming. No masking required.",
  "Anti-racist and decolonial.",
  "Migration, religion, family obligation, and power are part of the clinical picture."
] as const;

const goodFit = [
  "You want therapy that is direct and concrete.",
  "You are dealing with perfectionism, overcontrol, religious harm, chronic over-responsibility, or the general experience of being high-achieving and privately exhausted.",
  "You are tired of sounding insightful while nothing important changes."
] as const;

const notFit = [
  "Crisis stabilization or emergency response.",
  "Insurance-based care.",
  "Very open-ended therapy with little direction."
] as const;

export default function WorkWithMePage() {
  const constructive = siteContent.constructive;

  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="work-with-me-webpage-schema"
        data={webPageSchema({
          name: "Approach",
          description:
            "How therapy works at Arc Psychotherapy: private-pay psychotherapy in Downtown Round Rock, Texas, with telehealth across Texas.",
          path: "/work-with-me"
        })}
      />
      <SchemaScript
        id="work-with-me-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Approach", path: "/work-with-me" }
        ])}
      />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="label">{intro.eyebrow}</p>
          <h1 className="h1 mt-4">{intro.title}</h1>
          <p className="hero-lede">{intro.lede}</p>
          <div className="hero-support">
            {intro.body.map((item) => (
              <p key={item} className="body">
                {item}
              </p>
            ))}
          </div>
          <div className="hero-actions">
            <ButtonLink href="/contact">Contact</ButtonLink>
            <ButtonLink href="/ideas" variant="secondary">
              Writing
            </ButtonLink>
          </div>
        </div>
        <figure className="image-frame">
          <Image
            src="/images/architectural-details/stair-shadow-blackwhite.jpg"
            alt="Stair rail and sharp architectural shadow."
            width={4000}
            height={2667}
            className="h-full min-h-[18rem] w-full object-cover object-center"
            sizes="(min-width: 1024px) 34rem, 100vw"
          />
        </figure>
      </div>

      <section className="section-gap">
        <div className="hero-meta hero-meta--citron">
          <div className="meta-block">
            <p className="label">Location</p>
            <p className="body">{siteConfig.locationSummaryLine}</p>
          </div>
          <div className="meta-block">
            <p className="label">Session Rate</p>
            <p className="body">${pricing.standardSession.fee} for {pricing.standardSession.duration}.</p>
          </div>
          <div className="meta-block">
            <p className="label">Format</p>
            <p className="body">Private-pay psychotherapy with one therapist from consult onward.</p>
            <p className="body">In office in Downtown Round Rock, by telehealth across Texas, or walk-and-talk at nearby parks and trails.</p>
          </div>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
        <div className="dense-index mt-6">
          {process.map((item) => (
            <div key={item.title} className="dense-index__row">
              <div>
                <p className="label">{item.step}</p>
                <h3 className="dense-index__title mt-3">{item.title}</h3>
              </div>
              <p className="dense-index__body body">{item.body}</p>
              <span className="dense-index__arrow">Step</span>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--ultramarine">
        <div className="container-wrap">
        <div className="split-band split-band--open">
          <article className="split-panel">
            <p className="label">Values</p>
            <h2 className="h2">You should not have to argue for your own humanity before the work can begin.</h2>
            <ul className="split-panel__list body">
              {values.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">Who This Helps</p>
            <h2 className="h2">This is usually a good fit when:</h2>
            <ul className="split-panel__list body">
              {goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="label pt-4">Usually Not The First Step</p>
            <ul className="split-panel__list body">
              {notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
        </div>
      </section>

      <section id="structured-model-building" className="section-gap-lg full-bleed-band full-bleed-band--dark scroll-mt-24">
        <div className="container-wrap">
          <div className="feature-stage">
            <article className="feature-stage__lead">
              <p className="label">Optional Method</p>
              <h2 className="feature-stage__title">Some sessions, we build.</h2>
              <p className="body">
                Using LEGO brick sets as a structured clinical tool, we build the problem — the pattern, the system, the belief structure — so it exists outside your head and can be worked on directly.
              </p>
              <p className="body">{constructive.opening[0]}</p>
              <div className="hero-actions">
                <ButtonLink href="/constructive">Learn More</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact
                </ButtonLink>
              </div>
            </article>
            <aside className="feature-stage__detail">
              <p className="label">When It Helps</p>
              <ul className="split-panel__list body">
                {constructive.whyItHelps.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

    </section>
  );
}
