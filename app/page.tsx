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
    "Therapy for queer, trans, neurodivergent, and fat adults navigating perfectionism, overcontrol, and religious harm in Round Rock and across Texas.",
  path: "/"
});

const intro = {
  eyebrow: "Private-pay psychotherapy",
  title: "When understanding the pattern has not changed the pattern.",
  lede: "Therapy for adults dealing with perfectionism, overcontrol, and religious harm in Round Rock and across Texas by telehealth.",
  body: [
    "You can know exactly where a rule came from and still follow it at 11:40 p.m., while rewriting an email that did not need a fourth draft.",
    "The work is not to become less thoughtful, less responsible, or less yourself. It is to see the rule clearly enough to decide whether it still gets to run the week.",
    "Many of the people who come here are queer, neurodivergent, fat, post-religious, or some combination. You do not have to explain why that context matters before we can talk about the actual problem."
  ]
} as const;

const fitSection = {
  eyebrow: "Is this the right fit?",
  title: "The pattern is usually less dramatic than it is expensive.",
  items: [
    "You spend an amount of time preparing, researching, or replaying decisions that is wildly out of proportion to the decision itself.",
    "You are good at the parts of life people can see and worn down by the parts no one applauds.",
    "You have built a very functional life around not needing too much from anyone.",
    "You left a rigid or shaming religious environment, but guilt, fear, and authority still get a vote in decisions you thought were yours."
  ]
} as const;

const notFirstStep = {
  eyebrow: "This is probably not the right first stop for:",
  items: [
    "Crisis stabilization",
    "Insurance-based care",
    "A one-size-fits-all protocol",
    "Someone to tell you exactly what to do"
  ]
} as const;

const therapySteps = [
  {
    title: "Decide whether to start.",
    body: "A brief consult gives us room to talk about the problem, the practical details, and whether I am a good fit."
  },
  {
    title: "Get accurate about the loop.",
    body: "We look at what happens before, during, and after the moments that keep repeating—not just the explanation that arrives afterward."
  },
  {
    title: "Make the next move adjacent.",
    body: "We try changes that your actual life can absorb, pay attention to what happens, and revise from there."
  }
] as const;

const practiceStance = [
  "Queer and trans affirming. Identity is not a pathology, a debate topic, or a treatment target.",
  "Fat positive and HAES-aligned. Your body does not need to be defended before we can talk about the life you want to have in it.",
  "Neurodivergent-affirming. No masking required; there is more than one legitimate way to communicate, process, plan, relate, or need support.",
  "Anti-racist and decolonial. Race, migration, religion, family obligation, disability, and power are part of the picture—not decorative context around the “real” problem."
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
          <div className="route-divider route-divider--sans mt-12">
            <h2 className="h2">What you won&apos;t have to defend first.</h2>
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
                Some clients work with LEGO sets as a way of putting a pattern on the table: the people, rules, turning points, and impossible choices that are difficult to hold in their head all at once.
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
                <li>You can describe the pattern perfectly and still cannot find the place to interrupt it.</li>
                <li>Seeing a problem in physical space makes its sequence or power structure easier to notice.</li>
                <li>You think more clearly when you can move parts around, rather than only talk about them.</li>
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
