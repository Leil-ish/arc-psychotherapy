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
  title: "LMFT supervision for associates who want to think clearly under pressure.",
  lede: "For associates who want more than signatures, hours, and a vague sense that they are probably doing fine.",
  body: [
    "We work on case formulation, ethics, countertransference, and treatment decisions—the parts of clinical work that are usually more complicated than a modality acronym makes them sound.",
    "I give direct feedback about fear, over-accommodation, certainty, and value conflict when they are getting in the way of the work."
  ]
} as const;

const fit = [
  "You want supervision that is direct, specific, and grounded in the actual case.",
  "You want help making sense of countertransference, ethics, authority, and treatment decisions.",
  "You want feedback that helps you grow and sharper language for the decisions you make."
] as const;

const topics = [
  "Case formulation that does not collapse into a list of symptoms and modality names",
  "Countertransference, including fear, disgust, over-identification, and value conflict",
  "Ethics in the situations that do not arrive with a clean classroom answer",
  "Authority, boundaries, documentation, and how to make a decision you can stand behind"
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
            <ButtonLink href="/contact">Ask about supervision openings</ButtonLink>
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
            <p className="body">Mostly dyadic, with individual supervision as indicated and a group meeting once each month. Group includes space for associates to present practice innovations or teach the group something useful.</p>
          </div>
          <div className="meta-block">
            <p className="label">Fee</p>
            <p className="body">Pay what you can. Most supervisees pay $200–$400 per month; I make room for the life things that happen because supervision should not be a barrier to becoming a clinician.</p>
          </div>
          <div className="meta-block">
            <p className="label">Openings</p>
            <p className="body">I do not currently have openings, but several supervisees are rotating off soon. You are welcome to inquire.</p>
          </div>
        </aside>
      </div>

      <section className="section-gap">
        <div className="split-band split-band--open">
          <article className="split-panel">
            <h2 className="h2">Who this is for.</h2>
            <ul className="split-panel__list body">
              {fit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <h2 className="h2">Direct, specific, and rooted in the actual case.</h2>
            <p className="body">We make room for the clinical question, the person in front of you, and the parts of your own response that may be shaping the work.</p>
          </article>
        </div>
      </section>

      <section className="section-gap-lg full-bleed-band full-bleed-band--ultramarine">
        <div className="container-wrap">
          <article className="split-panel">
            <h2 className="h2">Cases, ethics, and the places where your usual strengths stop being enough.</h2>
            <ul className="split-panel__list body">
              {topics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <ButtonLink href="/fair-pay" variant="secondary">
                Fair Pay Calculator
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}
