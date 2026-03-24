import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { homePage } from "@/src/content/marketing";

export const metadata = pageMetadata({
  title: "Start Here | Round Rock, TX",
  description:
    "Start here for therapy resources on perfectionism, overcontrol, and religious harm from Arc Psychotherapy in Downtown Round Rock, Texas.",
  path: "/start-here"
});

const intro = {
  eyebrow: "Start Here",
  title: "You do not need to read the whole site.",
  lede: "Start with the issue that sounds most familiar.",
  body: [
    "If reading helps, pick one essay after that.",
    "Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas."
  ]
} as const;

export default function StartHerePage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="start-here-webpage-schema"
        data={webPageSchema({
          name: "Start Here",
          description:
            "Start here for therapy resources on perfectionism, overcontrol, and religious harm from Arc Psychotherapy in Downtown Round Rock, Texas.",
          path: "/start-here",
          type: "CollectionPage"
        })}
      />
      <SchemaScript
        id="start-here-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Start Here", path: "/start-here" }
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
            src="/images/austin-local/rooftop-edge-city.jpg"
            alt="Tight crop of Austin buildings and rooftop edges in hard evening light."
            width={6000}
            height={4000}
            className="h-full min-h-[18rem] w-full object-cover object-top"
            sizes="(min-width: 1024px) 34rem, 100vw"
          />
        </figure>
      </div>

      <section className="section-gap">
        <div className="anchor-block">
          <p className="anchor-block__line">Pick one place to begin.</p>
        </div>
      </section>

      <section className="section-gap">
        <div className="section-heading">
          <h2 className="h2">Pick an issue.</h2>
        </div>
        <div className="index-grid mt-6">
          {homePage.focusAreas.map((item) => (
            <Link key={item.href} href={item.href as Route} className="focus-ring no-link-style index-card">
              <h3 className="index-card__title">{item.title}</h3>
              <p className="index-card__body body">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-gap-lg">
        <div className="section-heading">
          <h2 className="h2">Read one essay first.</h2>
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

      <section className="section-gap-lg">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">Therapy</p>
            <h2 className="h2">What therapy looks like.</h2>
            <ul className="split-panel__list body">
              <li>Start with a consult.</li>
              <li>Look closely at what keeps happening.</li>
              <li>Try one change and see what happens during the week.</li>
              <li>Keep what helps.</li>
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">Next</p>
            <h2 className="h2">Then read about therapy or get in touch.</h2>
            <p className="body">
              If one issue page already sounds familiar, start there. If you want to know more about therapy, read the approach page.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/work-with-me">Approach</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}
