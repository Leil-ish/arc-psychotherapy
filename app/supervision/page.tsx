import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Supervision | LMFT Supervision in Texas",
  description:
    "LMFT supervision with Leila Anderson, LMFT-S for associates who want stronger clinical thinking, ethics, and authority.",
  path: "/supervision"
});

const intro = {
  eyebrow: "Supervision",
  title: "Supervision for associates who want to think clearly and practice well.",
  lede: "This is for LMFT Associates who want direct feedback, better case thinking, and steadier ethics.",
  body: [
    "I am not interested in box-checking supervision.",
    "I want you to become clearer, more confident, and more responsible in your work."
  ]
} as const;

const fit = [
  "You want supervision that is direct and specific.",
  "You want help with case formulation, countertransference, ethics, and treatment decisions.",
  "You want feedback that helps you improve, not just approval."
] as const;

const notFit = [
  "Rubber-stamp supervision.",
  "Minimal challenge.",
  "A strong preference for canned language over clinical thinking."
] as const;

const topics = [
  "Case formulation that does not collapse into modality language",
  "Countertransference, including fear, disgust, over-identification, and value conflicts",
  "Ethics in real situations, not only classroom examples",
  "Authority, boundaries, documentation, and decision-making"
] as const;

const credibility = [
  "TAMFT Board Member-at-Large and Chair of the Education Committee",
  "Frequent presenter on trauma, shame, supervision, and interpersonal ethics",
  "Leadership across residential dual-diagnosis, crisis assessment, and systems-facing behavioral health settings"
] as const;

export default function SupervisionPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="supervision-webpage-schema"
        data={webPageSchema({
          name: "Supervision",
          description:
            "LMFT supervision for associates who want clearer clinical thinking, stronger ethics, and direct feedback.",
          path: "/supervision"
        })}
      />
      <SchemaScript
        id="supervision-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Supervision", path: "/supervision" }
        ])}
      />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="label">{intro.eyebrow}</p>
          <h1 className="h1 h1--subservice mt-4">{intro.title}</h1>
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
            <ButtonLink href="/consultation" variant="secondary">
              Consultation
            </ButtonLink>
          </div>
        </div>
        <aside className="hero-meta">
          <div className="meta-block">
            <p className="label">For</p>
            <p className="body">LMFT Associates in Texas who want more than box-checking.</p>
          </div>
          <div className="meta-block">
            <p className="label">Focus</p>
            <p className="body">Case formulation, ethics, countertransference, and clinical authority.</p>
          </div>
          <div className="meta-block">
            <p className="label">Orientation</p>
            <p className="body">Neuroaffirming supervision that respects different minds, processing styles, and communication patterns.</p>
          </div>
          <div className="meta-block">
            <p className="label">Format</p>
            <p className="body">Direct supervision with one supervisor who will tell you what she thinks.</p>
          </div>
        </aside>
      </div>

      <section className="section-gap">
        <div className="anchor-block">
          <p className="anchor-block__line">Supervision should help you do better work.</p>
        </div>
      </section>

      <section className="section-gap">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">Good Fit</p>
            <h2 className="h2">Who this is for.</h2>
            <ul className="split-panel__list body">
              {fit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">Not The Goal</p>
            <h2 className="h2">What this is not for.</h2>
            <ul className="split-panel__list body">
              {notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-gap-lg">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">What We Work On</p>
            <h2 className="h2">What we work on.</h2>
            <ul className="split-panel__list body">
              {topics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">Context</p>
            <h2 className="h2">Why I teach it this way.</h2>
            <ul className="split-panel__list body">
              {credibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-gap-lg pb-8">
        <div className="route-divider">
          <p className="label">Next Step</p>
          <h2 className="h2 mt-3">Ask about supervision.</h2>
          <p className="body mt-3 max-w-3xl">We can talk briefly about what you need and whether this would be useful.</p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Contact</ButtonLink>
            <Link href="/consultation" className="focus-ring no-link-style button button--secondary">
              Consultation
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
