import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { pageMetadata, webPageSchema } from "@/lib/seo";
import { homePage } from "@/src/content/marketing";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Therapy for Perfectionism & Religious Trauma | Round Rock, TX",
  description:
    "Individual therapy for adults navigating perfectionism, overcontrol, religious trauma, and religious harm in Round Rock, Texas, with telehealth across Texas.",
  path: "/"
});

const intro = {
  eyebrow: "Private-pay individual psychotherapy for adults",
  title: "Bring the complicated version.",
  lede: "In Round Rock and online across Texas, for perfectionism, overcontrol, religious trauma and religious harm, and the things you can explain well but have not been able to think your way out of.",
  body: [
    "I am Leila Anderson, LMFT-S. I work with adults who notice context, contradiction, and power—and get frustrated when a problem is reduced to a simple technique.",
    "Therapy can be deep, useful, challenging, and funny."
  ]
} as const;

export default function HomePage() {
  return (
    <>
      <SchemaScript
        id="home-webpage-schema"
        data={webPageSchema({
          name: "Arc Psychotherapy",
          description:
            "Private-pay psychotherapy in Downtown Round Rock, Texas for adults dealing with perfectionism, overcontrol, religious trauma, and religious harm, with telehealth across Texas.",
          path: "/"
        })}
      />
      <section className="hero-stage" aria-labelledby="home-hero-heading">
        <div className="hero-stage__media" aria-hidden="true">
          <Image
            src="/images/hero/home-hero-austin-rooftop.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
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
              <ButtonLink href="/contact">Ask about therapy availability</ButtonLink>
              <ButtonLink href="/therapy" variant="secondary">
                How therapy works
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
          </aside>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
          <div className="route-divider max-w-4xl">
            <p className="label">Practice</p>
            <h2 className="h2 mt-3">A queer-affirming, trans-affirming, fat-affirming, and neurodiversity-affirming practice.</h2>
            <p className="body mt-3">I pay attention to the ways race, migration, disability, religion, family obligation, class, and power shape a life—and the room we make to talk about it.</p>
          </div>
          <div className="section-heading mt-12">
            <h2 className="h2">Things that can take up more space than they deserve.</h2>
          </div>
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
          <div className="split-band split-band--open">
            <article className="split-panel">
              <p className="label">Optional Method: Playing with LEGO</p>
              <h2 className="h2">Seriously, LEGO?</h2>
              <p className="body">
                Yes. Sometimes a problem is easier to see when it has tiny windows, improbable staircases, and enough pieces to make the relationships visible. We can build a family system, a belief structure, or the shape of an impossible decision—and then move things around.
              </p>
              <div className="hero-actions">
                <ButtonLink href="/constructive" variant="secondary">
                  How it works
                </ButtonLink>
              </div>
            </article>
            <article className="split-panel">
              <p className="label">Why I Love It</p>
              <ul className="split-panel__list body">
                <li>It gives us another way to think when talking has become a little too familiar.</li>
                <li>It can make the power structure or sequence of a problem visible fast.</li>
                <li>It is genuinely fun.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="container-wrap section-gap-lg pb-12">
        <div className="section-heading">
          <h2 className="h2">From the writing.</h2>
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
        <p className="body mt-6">
          More essays: {" "}
          <a
            href={siteContent.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-semibold text-accent underline-offset-4 hover:underline"
          >
            Mostly, Though on Substack
          </a>.
        </p>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--dark">
        <div className="container-wrap pb-12">
          <div className="section-heading">
            <h2 className="h2">Round Rock, Texas · Telehealth across Texas · $200 per session</h2>
            <div className="hero-actions">
              <ButtonLink href="/contact">Ask about availability</ButtonLink>
              <ButtonLink href="/therapy" variant="secondary">Therapy</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
