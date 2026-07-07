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
  title: "LMFT supervision for associates who want direct feedback and better clinical thinking.",
  lede: "This is for associates who want more than signatures and hours.",
  body: [
    "We work on case formulation, ethics, countertransference, and treatment decisions.",
    "The feedback is direct. If something is getting in the way of the work — countertransference, fear, over-accommodation — we'll name it."
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
            <ButtonLink href="/fair-pay" variant="secondary">
              Fair Pay Calculator
            </ButtonLink>
          </div>
        </div>
        <aside className="hero-meta hero-meta--ultramarine">
          <div className="meta-block">
            <p className="label">For</p>
            <p className="body">LMFT Associates in Texas.</p>
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
        <div className="split-band split-band--open">
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
            <p className="label">Scope</p>
            <h2 className="h2">Not the right fit if you&apos;re looking for:</h2>
            <ul className="split-panel__list body">
              {notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--ultramarine">
        <div className="container-wrap">
          <article className="split-panel">
            <h2 className="h2">Cases, ethics, and where you get stuck.</h2>
            <ul className="split-panel__list body">
              {topics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </section>
  );
}
