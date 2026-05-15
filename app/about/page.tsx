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
  lede: "Most people who arrive here already understand themselves well. They're tired of the part insight hasn't fixed.",
  body: [
    "Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas."
  ]
} as const;

const goodFit = [
  "Insight has not changed enough on its own.",
  "You are dealing with perfectionism, overcontrol, chronic over-responsibility, or the aftermath of rigid religion.",
  "You want therapy that is direct and concrete."
] as const;

const notBestFit = [
  "Very open-ended therapy with little direction.",
  "Crisis stabilization or emergency response.",
  "A strong need for certainty or formulas from therapy."
] as const;

const valuesInPractice = [
  "LGBTQ+ affirming means identity is not treated as pathology or debate.",
  "HAES-aligned means body size is not treated as a moral issue or a treatment target.",
  "Neurodiversity-affirming means communication, pacing, and problem-solving do not have to follow one narrow standard.",
  "Cross-cultural respect means language, migration, family obligation, religion, race, and mixed-context identity are treated as real context, not side notes."
] as const;

const authority = [
  "Executive clinical leadership in residential dual-diagnosis and high-acuity settings, including crisis and level-of-care assessment.",
  "Program design and treatment planning with a strong bias toward what is actually useful.",
  "State professional leadership through TAMFT board and education committee service."
] as const;

const speaking = [
  "TAMFT professional education and leadership forums",
  "TAAP and behavioral health training events",
  "Regional agency and group practice trainings"
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
              What I&apos;m looking for is the place where your coping strategy became the problem — where what helped you manage something hard is now the thing keeping you stuck. That shift usually happens gradually enough that it&apos;s hard to see from the inside.
            </p>
            <p className="body">
              I&apos;ll tell you what I see. When I&apos;ve gotten it wrong, you&apos;ll usually know before I do — and that&apos;s useful too.
            </p>
          </article>
          <article className="split-panel">
            <p className="label">Background</p>
            <h2 className="h2">What shapes the way I work.</h2>
            <p className="body">
              I grew up in Uganda. This comes up in my work more than you might expect — not because I make it a topic, but because growing up between cultures tends to make you notice the things people assume are universal. How authority functions. Who gets to have needs. What belonging costs. Those questions come up constantly in clinical work.
            </p>
            <p className="body">
              I&apos;ve also spent a lot of time in settings that don&apos;t look like private practice — residential treatment, crisis work, systems built to run under pressure. What I took from that period was mostly an allergy to things that sound good but don&apos;t actually help.
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
            <h2 className="h2">What that means in practice.</h2>
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
            <ul className="split-panel__list body">
              {speaking.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          </div>
        </div>
      </section>

      <section className="section-gap-lg pb-8">
        <div className="split-band split-band--open">
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
              {notBestFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">Briefly, As A Person</p>
            <h2 className="h2">A little context.</h2>
            <p className="body">
              I am married with three kids. Outside of work I read, hike, and maintain a complicated relationship with keeping my house in order.
            </p>
          </article>
        </div>
      </section>

      <section className="section-gap-lg pb-8">
        <div className="route-divider">
          <p className="label">Next</p>
          <h2 className="h2 mt-3">What comes next.</h2>
          <div className="hero-actions">
            <ButtonLink href="/work-with-me">Approach</ButtonLink>
            <ButtonLink href="/start-here" variant="secondary">
              Start Here
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </div>
      </section>
    </section>
  );
}
