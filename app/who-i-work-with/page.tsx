import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Who I Work With | Arc Psychotherapy",
  description:
    "A queer-affirming, trans-affirming, fat-affirming, and neurodiversity-affirming psychotherapy practice in Round Rock, Texas and online across Texas.",
  path: "/who-i-work-with"
});

export default function WhoIWorkWithPage() {
  return (
    <>
      <SchemaScript
        id="who-i-work-with-webpage-schema"
        data={webPageSchema({
          name: "Who I work with",
          description:
            "A queer-affirming, trans-affirming, fat-affirming, and neurodiversity-affirming psychotherapy practice.",
          path: "/who-i-work-with"
        })}
      />
      <SchemaScript
        id="who-i-work-with-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Who I work with", path: "/who-i-work-with" }
        ])}
      />

      <section className="container-wrap py-16 md:py-20">
        <div className="hero-copy">
          <p className="label">Practice</p>
          <h1 className="h1 mt-4">Who I especially enjoy working with.</h1>
          <p className="hero-lede">Queer, trans, fat, neurodivergent, and post-religious adults—often people living at the intersections of several of those experiences.</p>
          <div className="hero-support">
            <p className="body">These experiences are often intertwined. They are part of the context a person brings to therapy: what has been punished or medicalized, the assumptions other people make, which relationships feel safe or complicated, and how much translation it can take to move through an ordinary day.</p>
            <p className="body">My job is to understand that context well enough that you do not have to spend half the hour supplying footnotes.</p>
          </div>
          <div className="hero-actions">
            <ButtonLink href="/contact">Ask about therapy availability</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-gap full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
          <div className="split-band split-band--open">
            <article className="split-panel">
              <h2 className="h2">Context matters. It is not the whole story.</h2>
              <p className="body">Your reason for coming may be a relationship, burnout, a difficult decision, a history that has started showing up in the present, or a life that looks fine from the outside and feels hard to live inside. Identity and context help us understand what that problem is made of.</p>
            </article>
            <article className="split-panel">
              <h2 className="h2">What this changes in therapy.</h2>
              <p className="body">Questions about executive function, sensory strain, body size, family obligation, gender, sexuality, culture, faith, disability, money, or a medical system belong in the clinical picture when they are relevant. We can be precise about where a problem lives: in you, between people, in a system, or in the irritating overlap of all three.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="container-wrap section-gap-lg">
        <div className="split-band split-band--open">
          <article className="split-panel">
            <h2 className="h2">HAES-affirming, in practice.</h2>
            <p className="body">HAES means Health at Every Size®. I am HAES-affirming because therapy does not need to enlist in the project of making someone smaller.</p>
            <p className="body">We can take health, food, movement, disability, medical care, body image, and body distress seriously without making weight loss the measure of whether therapy is working.</p>
          </article>
          <article className="split-panel">
            <h2 className="h2">When a religious past is still in the room.</h2>
            <ul className="split-panel__list body">
              <li>A decision still feels dangerous until someone approves it.</li>
              <li>Guilt arrives before you can identify the rule it broke.</li>
              <li>Sex, gender, anger, desire, or doubt carry stakes that do not match your current beliefs.</li>
              <li>A holiday, song, Scripture, or the word “sin” changes the temperature of the room.</li>
              <li>Leaving brought relief and the loss of community, certainty, or a way to organize your life.</li>
            </ul>
            <p className="body">Taken together, these patterns can shape safety, relationships, the body, and decision-making long after beliefs have changed. <Link href="/therapy/religious-trauma" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">More on therapy for religious trauma and religious harm.</Link></p>
          </article>
        </div>
      </section>

      <section className="container-wrap section-gap-lg pb-8">
        <article className="split-panel">
          <h2 className="h2">Related areas of work.</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/therapy/neurodivergent-adults" className="focus-ring no-link-style chip-link">Neurodivergent-affirming therapy</Link>
            <Link href="/therapy/religious-trauma" className="focus-ring no-link-style chip-link">Religious trauma and religious harm</Link>
            <Link href="/therapy/perfectionism-overcontrol" className="focus-ring no-link-style chip-link">Perfectionism and overcontrol</Link>
          </div>
        </article>
      </section>
    </>
  );
}
