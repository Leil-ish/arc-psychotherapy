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
  eyebrow: "Programs & training",
  title: "Consultation for treatment programs, teams, and leaders.",
  lede: "I help when a team is working hard and the same problem keeps returning in a different outfit.",
  body: [
    "Sometimes the problem lives in the way the work is organized: who holds authority, how decisions get made, where the process breaks, and what the system rewards.",
    "Consultation can focus on program design, staff training, leadership, treatment culture, and the clinical work of shame, trauma, and relationships."
  ]
} as const;

const services = [
  {
    label: "Program Design",
    title: "Find the structure underneath the morale problem.",
    body: "Clinical systems, treatment flow, role clarity, documentation habits, and the ordinary processes that are making good work harder than it needs to be."
  },
  {
    label: "Training",
    title: "Teach something people can still use next month.",
    body: "Talks, workshops, and training on trauma, shame, leadership, ethics, and relational dynamics—designed for the actual decisions people have to make after the slides are gone."
  },
  {
    label: "Leadership",
    title: "Build standards without building dread.",
    body: "Support for leaders who want more clarity, better accountability, and less fear-based management."
  }
] as const;

const goodFor = [
  "Organizations building or revising trauma, addiction, or relational treatment programs",
  "Teams that want sharper thinking about shame, conflict, authority, and treatment culture",
  "Leaders who can tell something is off and are ready to become specific about it"
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
            <ButtonLink href="/contact">Discuss a project</ButtonLink>
          </div>
        </div>
        <aside className="hero-meta hero-meta--ultramarine">
          <div className="meta-block">
            <p className="label">Best For</p>
            <p className="body">Clinical programs, treatment teams, and leaders ready to look closely at culture, authority, and the systems people work inside.</p>
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

      <section className="section-gap">
        <div className="split-band split-band--open">
          <article className="split-panel">
            <h2 className="h2">How an engagement starts.</h2>
            <p className="body">Start with the problem you need to solve, who is involved, and what needs to work better. From there, we can decide whether a focused training, consultation, or a larger project makes sense.</p>
          </article>
          <article className="split-panel">
            <h2 className="h2">Pricing.</h2>
            <p className="body">Every engagement is priced to its scope. Nonprofits receive discounted pricing. Trainings are priced per attendee, with a cap so a useful roomful of people does not become financially absurd.</p>
          </article>
        </div>
      </section>
    </section>
  );
}
