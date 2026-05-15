import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Consultation | Clinical Program and Training Consultation",
  description:
    "Consultation with Leila Anderson for program design, staff training, and leadership development in clinical and behavioral health settings.",
  path: "/consultation"
});

const intro = {
  eyebrow: "Consultation",
  title: "Consultation for treatment programs, teams, and leaders.",
  lede: "I help when people are working hard and the same problems keep coming back.",
  body: [
    "Sometimes the problem is not effort. It is the way the work is organized.",
    "Consultation can focus on program design, staff training, leadership, shame and trauma treatment, or treatment culture."
  ]
} as const;

const services = [
  {
    label: "Program Design",
    title: "Fix the system, not only the morale problem.",
    body: "Clinical systems, treatment flow, role clarity, documentation habits, and process design."
  },
  {
    label: "Training",
    title: "Teach people something they can still use next month.",
    body: "Talks, workshops, and staff training on trauma, shame, leadership, ethics, and relational dynamics."
  },
  {
    label: "Leadership",
    title: "Reduce fear-based management.",
    body: "Support for leaders who want better standards without building a culture of dread."
  }
] as const;

const goodFor = [
  "Organizations building or cleaning up trauma, addiction, or relational treatment programs",
  "Teams that want better thinking around shame, conflict, authority, and treatment culture",
  "Leaders who know something is off and want to get specific about it"
] as const;

const speaking = [
  "Non-toxic leadership and treatment culture",
  "Trauma, shame, and relational treatment",
  "Religious harm and meaning reconstruction",
  "Countertransference, ethics, and supervision"
] as const;

export default function ConsultationPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="consultation-webpage-schema"
        data={webPageSchema({
          name: "Consultation",
          description:
            "Consultation for teams and organizations that need clearer thinking and better systems.",
          path: "/consultation"
        })}
      />
      <SchemaScript
        id="consultation-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Consultation", path: "/consultation" }
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
          </div>
        </div>
        <aside className="hero-meta hero-meta--ultramarine">
          <div className="meta-block">
            <p className="label">Best For</p>
            <p className="body">Clinical programs, treatment teams, and leadership groups that need better systems.</p>
          </div>
          <div className="meta-block">
            <p className="label">Topics</p>
            <p className="body">Program design, training, shame and trauma treatment, leadership, and treatment culture.</p>
          </div>
        </aside>
      </div>

      <section className="section-gap full-bleed-band full-bleed-band--ultramarine">
        <div className="container-wrap">
          <div className="dense-index">
          {services.map((item) => (
            <div key={item.title} className="dense-index__row">
              <div>
                <p className="label">{item.label}</p>
                <h2 className="dense-index__title mt-3">{item.title}</h2>
              </div>
              <p className="dense-index__body body">{item.body}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="section-gap-lg">
        <div className="split-band split-band--open">
          <article className="split-panel">
            <p className="label">Good Use Cases</p>
            <h2 className="h2">Where this helps.</h2>
            <ul className="split-panel__list body">
              {goodFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">Speaking and Training</p>
            <h2 className="h2">Topics I teach publicly.</h2>
            <ul className="split-panel__list body">
              {speaking.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-gap-lg pb-8">
        <div className="route-divider">
          <p className="label">Next Step</p>
          <h2 className="h2 mt-3">Ask about consultation.</h2>
          <p className="body mt-3 max-w-3xl">
            Reach out with a short description of the problem, who is involved, and what needs to work better.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </div>
      </section>
    </section>
  );
}
