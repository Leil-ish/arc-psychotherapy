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
  lede: "I work with people who have spent a long time trying to become the kind of person who would not have this problem anymore.",
  body: [
    "Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas."
  ]
} as const;

const goodFit = [
  "You are tired of being able to explain the pattern better than you can interrupt it.",
  "Perfectionism, overcontrol, chronic over-responsibility, or the aftermath of rigid religion have become too expensive to keep organizing around.",
  "You want a therapist who will be clear, curious, and willing to disagree when it matters."
] as const;

const notBestFit = [
  "Therapy with no shared sense of what we are trying to change.",
  "Crisis stabilization or emergency response.",
  "A formula, a verdict, or someone to take over your decisions."
] as const;

const valuesInPractice = [
  "Queer and trans affirming. Identity is not a pathology or a debate topic here.",
  "Fat positive and HAES-aligned. Body size is not a moral issue or a treatment target.",
  "Neurodivergent-affirming. No masking required; communication, pacing, and problem-solving do not have to follow one narrow standard.",
  "Anti-racist and decolonial. Race, migration, religion, family obligation, and power are part of the clinical picture—not side notes."
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
            <h2 className="h2">Where we usually start.</h2>
            <p className="body">
              I am usually looking for the point at which a strategy that once made good sense became too expensive. The person who checks everything may have learned that mistakes were dangerous. The person who never asks for help may have had excellent reasons to become low-maintenance. Those strategies do not become irrational just because they have started narrowing a life.
            </p>
            <p className="body">
              I will tell you what I see, including when I think a familiar explanation is protecting the problem. I will also get things wrong. That is not a failure of the work; it is information about where my map does not yet match the territory.
            </p>
          </article>
          <article className="split-panel">
            <p className="label">Background</p>
            <h2 className="h2">What shapes the way I work.</h2>
            <p className="body">
              I grew up in Uganda. Growing up between cultures made me attentive to things people often present as universal when they are not: how authority functions, who is allowed to have needs, what belonging costs, and which rules only become visible once you are outside them. Those questions show up constantly in therapy.
            </p>
            <p className="body">
              I also know, from the inside, what it costs to untangle a life from systems—religious, family, corporate—that reward shrinking. Outgrowing an environment can be a relief and a grief at the same time. Therapy needs room for both.
            </p>
            <p className="body">
              Before private practice, I spent years in residential treatment, crisis work, and systems built to run under pressure. It made me suspicious of interventions that sound excellent in a meeting and do not help anyone on Tuesday afternoon.
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
            <h2 className="h2">Where I stand.</h2>
            <ul className="split-panel__list body">
              {valuesInPractice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="body">
              Therapy should not require you to defend your body, identity, family, or basic humanity before the work can begin.
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
          <p className="label">Who This Helps</p>
          <h2 className="h2 mt-2">This is usually a good fit when:</h2>
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
