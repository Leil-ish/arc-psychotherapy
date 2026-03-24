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
  title: "This is practical therapy.",
  lede:
    "It is for people who understand themselves fairly well and are tired of staying stuck anyway.",
  body: [
    "We are not going to spend months circling the same problem in slightly better language.",
    "We look at what keeps happening, what sets it off, what makes it harder to change, and what helps."
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
    title: "Get specific.",
    body: "We look closely at what happens during the week, not only at what you understand in session."
  },
  {
    step: "Adjustment",
    title: "Keep what helps.",
    body: "If something is useful, we keep it. If it is not, we do not keep pretending."
  }
] as const;

const values = [
  "LGBTQ+ affirming means identity is not treated as pathology or debate.",
  "HAES-aligned means body size is not treated as a moral issue or a treatment target.",
  "Neurodiversity-affirming means communication, pacing, and problem-solving do not have to follow one narrow standard.",
  "Immigrant and cross-cultural realities are treated as real context, not side notes."
] as const;

const goodFit = [
  "You want therapy that is direct and concrete.",
  "You are dealing with perfectionism, overcontrol, religious harm, or chronic over-responsibility.",
  "You already understand a lot about yourself and want help changing what keeps happening."
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
        <div className="hero-meta">
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
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="anchor-block">
          <p className="anchor-block__line">You should be able to tell what you are doing and why.</p>
        </div>
      </section>

      <section className="section-gap-lg">
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
      </section>

      <section className="section-gap-lg">
        <div className="split-band">
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
      </section>

      <section id="structured-model-building" className="section-gap-lg full-bleed-band full-bleed-band--clay scroll-mt-24">
        <div className="container-wrap">
          <div className="feature-stage">
            <article className="feature-stage__lead">
              <p className="label">Optional Method</p>
              <h2 className="feature-stage__title">Three-dimensional model building.</h2>
              <p className="body">
                Sometimes it helps to build the problem in physical form. It can make relationships, constraints, and choices easier to see.
              </p>
              <p className="body">{constructive.subtitle}</p>
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
              <p className="feature-stage__note">
                Optional within ongoing therapy, and used when it helps make the problem easier to see.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-gap-lg">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">Before You Book</p>
            <h2 className="h2">If you want to read first, keep it simple.</h2>
            <p className="body">
              Start with the issue page that sounds most familiar. After that, read one essay or one framework if you want more.
            </p>
            <div className="flex flex-wrap gap-2">
              <ButtonLink href="/start-here" variant="secondary">
                Start Here
              </ButtonLink>
              <ButtonLink href="/ideas" variant="secondary">
                Writing
              </ButtonLink>
              <ButtonLink href="/frameworks" variant="secondary">
                Frameworks
              </ButtonLink>
            </div>
          </article>
          <article className="split-panel">
            <p className="label">Format</p>
            <h2 className="h2">You work with one therapist the whole time.</h2>
            <p className="body">
              Private-pay therapy with Leila from consult onward. Model-building is optional and used only when it helps.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
