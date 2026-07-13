import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "About Leila Anderson, LMFT-S | Round Rock, TX",
  description:
    "About Leila Anderson, LMFT-S and Arc Psychotherapy in Downtown Round Rock, Texas.",
  path: "/about"
});

const intro = {
  eyebrow: "About",
  title: "I am Leila Anderson, LMFT-S.",
  lede: "I get a window into who people are at their deepest levels. It is a ridiculous privilege.",
  body: [
    "Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas."
  ]
} as const;

const goodFit = [
  "You want someone who can follow a complicated story without rushing to simplify it.",
  "You want depth and practical help, not a choice between the two.",
  "You want a therapist who will be direct, curious, and able to laugh with you when the moment calls for it."
] as const;

const notBestFit = [
  "Therapy with very little direction or a readymade answer.",
  "Crisis stabilization or emergency response.",
  "A formula, a verdict, or someone to take over your decisions."
] as const;

const authority = [
  "Executive clinical leadership in residential dual-diagnosis and high-acuity settings, including crisis and level-of-care assessment.",
  "Program design and treatment planning with a strong bias toward what is actually useful.",
  "State professional leadership through TAMFT board and education committee service."
] as const;


export default function AboutPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="about-webpage-schema"
        data={webPageSchema({
          name: "About Leila Anderson, LMFT-S",
          description:
            "About Leila Anderson, LMFT-S and Arc Psychotherapy in Downtown Round Rock, Texas.",
          path: "/about",
          type: "AboutPage"
        })}
      />
      <SchemaScript
        id="about-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" }
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
            <p className="label pt-2">{siteContent.credentialsLine}</p>
          </div>
          <div className="hero-actions">
            <ButtonLink href="/work-with-me">Approach</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
        <figure className="image-frame image-frame--portrait">
          <Image
            src="/images/portrait/leila-headshot.jpg"
            alt="Leila Anderson"
            width={800}
            height={800}
            className="grayscale-image h-full w-full object-cover"
            sizes="(min-width: 1024px) 28rem, 100vw"
          />
        </figure>
      </div>

      <section className="section-gap full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
        <div className="split-band split-band--open">
          <article className="split-panel">
            <p className="label">How I Work</p>
            <h2 className="h2">What I am interested in.</h2>
            <p className="body">
              I like getting close enough to a story to see how it is actually put together: private rules, useful adaptations, old myths, social context, and the things that make perfect sense once someone says them out loud.
            </p>
            <p className="body">
              I have ideas. You have lived the life. We stay with a problem long enough to see what has been missed and what might be possible next.
            </p>
          </article>
          <article className="split-panel">
            <p className="label">Background</p>
            <h2 className="h2">What shapes the way I work.</h2>
            <p className="body">
              I grew up in Uganda. Growing up between cultures made me suspicious of things presented as universal when they are not: how authority works, who gets to have needs, what belonging costs, and which rules only become visible once you are outside them.
            </p>
            <p className="body">
              I also know what it costs to untangle a life from systems—religious, family, corporate—that reward shrinking. Outgrowing an environment can be a relief and a grief at the same time.
            </p>
            <p className="body">
              Before private practice, I spent years in residential treatment, crisis work, and systems built to run under pressure. It made me suspicious of anything that sounds excellent in a meeting and does not help anyone on Tuesday afternoon.
            </p>
            <p className="body">
              Outside work, I am married with three children. I read, hike, take too many pictures of ordinary moments, and remain in a long-running detente with household clutter.
            </p>
          </article>
        </div>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--dark">
        <div className="container-wrap">
          <div className="split-band">
          <article className="split-panel">
            <p className="label">Values</p>
            <h2 className="h2">The basics.</h2>
            <p className="body">
              My practice is queer-affirming, trans-affirming, fat-affirming, and neurodiversity-affirming. Race, migration, religion, family obligation, disability, and power are part of a life—not side notes.
            </p>
          </article>
          <article className="split-panel">
            <p className="label">Professional Context</p>
            <h2 className="h2">The public side of the work.</h2>
            <ul className="split-panel__list body">
              {authority.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          </div>
        </div>
      </section>

      <section className="section-gap-lg pb-8">
        <article>
          <h2 className="h2">This is usually a good fit when:</h2>
          <ul className="split-panel__list body mt-4">
            {goodFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="label pt-6">Usually Not The First Step</p>
          <ul className="split-panel__list body mt-2">
            {notBestFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

    </section>
  );
}
