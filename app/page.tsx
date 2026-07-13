import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { pageMetadata, webPageSchema } from "@/lib/seo";
import { homePage, servicesPage } from "@/src/content/marketing";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Therapy for perfectionism & religious harm | Round Rock, TX",
  description:
    "Therapy with clear structure for high-achieving adults navigating perfectionism, rigidity, and religious harm. Queer, trans, neurodivergent, and fat affirming. Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas.",
  path: "/"
});

const intro = {
  eyebrow: "Private-pay psychotherapy",
  title: "You can't out-think this.",
  lede: "Therapy for adults dealing with perfectionism, overcontrol, and religious harm — people who understand themselves well and are still stuck in the same places.",
  body: [
    "People rely on you, and it takes more out of you than it used to.",
    "You may know exactly why you do what you do. That knowledge doesn't always close the gap — sometimes it just means you can watch yourself do it anyway.",
    "If insight alone fixed it, you would already be done.",
    "Most of the people I work with are queer, neurodivergent, fat, post-religious, or some combination. If that's you, you're who this practice is for."
  ]
} as const;

const fitSection = {
  eyebrow: "Is this the right fit?",
  title: "Here is what the problem usually looks like:",
  items: [
    "You spend too much time preparing, researching, or replaying decisions.",
    "You look fine from the outside and feel wrung out by the end of the day.",
    "You don't take up much space, and you're not entirely sure that was a choice.",
    "You left a rigid or shaming religious environment, but fear and guilt still shape too many decisions."
  ]
} as const;

const notFirstStep = {
  eyebrow: "This may not be the right first stop if you need:",
  items: [
    "Crisis stabilization",
    "Insurance-based care",
    "Checklist-only symptom treatment",
    "Brief coaching framed as therapy"
  ]
} as const;

const therapySteps = [
  {
    title: "Start with a consult.",
    body: "We talk through what is going on, what you want help with, and whether this feels like a good fit."
  },
  {
    title: "Look at where things are not shifting.",
    body: "We look closely at the places where effort, insight, or self-control have not been enough."
  },
  {
    title: "Test something different.",
    body: "That can mean going back to where the pattern started, testing different responses during the week, and tracking what actually changes."
  }
] as const;

const practiceStance = [
  "Queer and trans affirming.",
  "Fat positive and HAES-aligned.",
  "Neurodivergent-affirming. No masking required.",
  "Anti-racist and decolonial.",
  "Migration, religion, family obligation, and power are part of the clinical picture."
] as const;

export default function HomePage() {
  return (
    <>
      <SchemaScript
        id="home-webpage-schema"
        data={webPageSchema({
          name: "Arc Psychotherapy",
          description:
            "Private-pay psychotherapy in Downtown Round Rock, Texas for adults dealing with perfectionism, overcontrol, and religious harm, with telehealth across Texas.",
          path: "/"
        })}
      />
      <section className="hero-stage" aria-labelledby="home-hero-heading">
        <div className="hero-stage__media" aria-hidden="true">
          <Image
            src="/images/architectural-details/facade-black-grid.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center grayscale-image"
            sizes="100vw"
          />
        </div>
        <div className="hero-stage__overlay" aria-hidden="true" />
        <div className="container-wrap hero-stage__inner">
          <div className="hero-stage__copy">
            <p className="label">{intro.eyebrow}</p>
            <h1 id="home-hero-heading" className="h1 hero-stage__title mt-4">{intro.title}</h1>
            <p className="hero-lede">{intro.lede}</p>
            <div className="hero-support">
              {intro.body.map((item) => (
                <p key={item} className="body">
                  {item}
                </p>
              ))}
            </div>
            <div className="hero-actions">
              <ButtonLink href="/start-here">Start Here</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </div>
          <aside className="hero-stage__meta">
            <div className="meta-block">
              <p className="label">Location</p>
              <p className="body">{siteContent.primaryLocation}</p>
              <p className="body">{siteContent.telehealthRegion}</p>
            </div>
            <div className="meta-block">
              <p className="label">Rate</p>
              <p className="body">${siteContent.standardSessionFee} per {siteContent.sessionLength}.</p>
              <p className="body">Private-pay practice.</p>
            </div>
            <div className="meta-block">
              <p className="label">How It Works</p>
              <div className="process-steps" aria-label="Process">
                <span className="process-steps__item">Consult</span>
                <span className="process-steps__item">Understand the problem</span>
                <span className="process-steps__item">Work on it in session and during the week</span>
                <span className="process-steps__item">Adjust as needed</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-gap full-bleed-band full-bleed-band--dark">
        <div className="container-wrap">
          <div className="section-heading section-heading--sans">
            <h2 className="h2">Where I stand.</h2>
          </div>
          <div className="info-grid mt-6">
            {practiceStance.map((item) => (
              <div key={item} className="info-list">
                <p className="body">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap full-bleed-band full-bleed-band--citron">
        <div className="container-wrap">
          <div className="home-stance">
            <article className="home-stance__primary">
              <p className="label">{fitSection.eyebrow}</p>
              <h2 className="home-stance__title">{fitSection.title}</h2>
              <ul className="split-panel__list body mt-6">
                {fitSection.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <aside className="home-stance__aside">
              <p className="label">{notFirstStep.eyebrow}</p>
              <ul className="split-panel__list body">
                {notFirstStep.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
          <div className="index-grid mt-6">
            {homePage.focusAreas.map((item) => (
              <Link key={item.href} href={item.href as Route} className="focus-ring no-link-style index-card">
                <h3 className="index-card__title">{item.title}</h3>
                <p className="index-card__body body">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--ultramarine">
        <div className="container-wrap">
          <div className="section-heading">
            <h2 className="h2">What therapy is like.</h2>
          </div>
          <div className="dense-index mt-6">
            {therapySteps.map((item) => (
              <Link key={item.title} href={"/work-with-me" as Route} className="focus-ring no-link-style dense-index__row">
                <div>
                  <h3 className="dense-index__title">{item.title}</h3>
                </div>
                <p className="dense-index__body body">{item.body}</p>
                <span className="dense-index__arrow">Read</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
          <div className="split-band split-band--open">
            <article className="split-panel">
              <p className="label">Optional Method</p>
              <h2 className="h2">Some sessions, we build.</h2>
              <p className="body">
                Using LEGO brick sets as a structured clinical tool, some clients work through perfectionism, overcontrol, or religious harm by constructing the pattern in physical space rather than only discussing it.
              </p>
              <div className="hero-actions">
                <ButtonLink href="/constructive" variant="secondary">
                  How it works
                </ButtonLink>
              </div>
            </article>
            <article className="split-panel">
              <p className="label">When It Helps</p>
              <ul className="split-panel__list body">
                <li>The pattern is clear in conversation but hasn&apos;t shifted in behavior.</li>
                <li>Abstract problems become easier to work on when they have a physical form.</li>
                <li>You think better when you can see structure rather than only hold it in your head.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="container-wrap section-gap-lg pb-12">
        <div className="section-heading">
          <h2 className="h2">Worth reading first.</h2>
        </div>
        <div className="dense-index mt-6">
          {homePage.writing.map((item) => (
            <Link key={item.href} href={item.href as Route} className="focus-ring no-link-style dense-index__row">
              <div>
                <h3 className="dense-index__title">{item.title}</h3>
              </div>
              <p className="dense-index__body body">{item.body}</p>
              <span className="dense-index__arrow">Read</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--dark">
        <div className="container-wrap pb-12">
          <div className="services-highlight">
            <div className="services-highlight__intro">
              <p className="label">For clinicians and organizations</p>
              <h2 className="h2">Supervision and consultation.</h2>
            </div>
            <div className="services-highlight__grid">
              {servicesPage.routes
                .filter((item) => item.href !== "/work-with-me")
                .map((item) => (
                  <Link key={item.href} href={item.href as Route} className="focus-ring no-link-style services-highlight__card">
                    <p className="label">{item.eyebrow}</p>
                    <h3 className="services-highlight__title">{item.title}</h3>
                    <p className="services-highlight__body body">{item.body}</p>
                    <span className="services-highlight__arrow">Open</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
