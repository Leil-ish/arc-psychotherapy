import { ContactForm } from "@/components/contact-form";
import { SchemaScript } from "@/components/schema-script";
import { siteConfig } from "@/lib/content";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact | Round Rock, TX",
  description:
    "Contact Arc Psychotherapy about therapy, supervision, or consultation from Round Rock, Texas.",
  path: "/contact"
});

const intro = {
  eyebrow: "Contact",
  title: "Use this page to ask about therapy, supervision, or consultation.",
  lede: "You can use the form, call, or email. I reply within 1-2 business days.",
  body: [
    "Please do not include sensitive clinical details in the form.",
    "If you are in immediate danger, call 911. For mental health crisis support, call or text 988."
  ]
} as const;

const consultFacts = [
  "Standard session fee: $200 for 50-55 minutes.",
  "Private-pay practice. Superbills may be available for out-of-network reimbursement.",
  "Telehealth is available across Texas when appropriate for care needs and clinical fit.",
  "I reply to contact requests within 1-2 business days."
] as const;

const policyFacts = [
  "24-hour cancellation policy. Late cancellations or no-shows may be billed in full.",
  "Payment is due at the time of service.",
  "Three-dimensional model building is optional and only used when it supports the work."
] as const;

const questions = [
  {
    question: "Do you take insurance?",
    answer: "I am private-pay. A superbill may be available for out-of-network reimbursement."
  },
  {
    question: "Do you offer telehealth?",
    answer: "Yes. Telehealth is available for Texas residents when clinically appropriate."
  },
  {
    question: "Is three-dimensional model building required?",
    answer: "No. It is optional and used only when it helps."
  },
  {
    question: "What happens in the consult?",
    answer: "We talk through what is going on, what you want help with, and the practical details."
  }
] as const;

export default function ContactPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="contact-webpage-schema"
        data={webPageSchema({
          name: "Contact Arc Psychotherapy",
          description:
            "Contact Arc Psychotherapy in Round Rock, Texas about therapy, supervision, or consultation with Leila Anderson, LMFT-S.",
          path: "/contact",
          type: "ContactPage"
        })}
      />
      <SchemaScript
        id="contact-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
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
        </div>
        <aside className="hero-meta">
          <div className="meta-block">
            <p className="label">Direct Contact</p>
            <p className="body">
              <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}>{siteConfig.phone}</a>
            </p>
            <p className="body">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>
          <div className="meta-block">
            <p className="label">Office</p>
            <p className="body">{siteConfig.addressLine1}</p>
            <p className="body">{siteConfig.cityStateZip}</p>
          </div>
          <div className="meta-block">
            <p className="label">Response Time</p>
            <p className="body">I reply to inquiries within 1-2 business days.</p>
          </div>
        </aside>
      </div>

      <section id="consult-request" className="section-gap-lg scroll-mt-24">
        <div className="split-band">
          <div>
            <ContactForm />
          </div>
          <aside className="split-panel">
            <p className="label">Before We Talk</p>
            <h2 className="h2">Basic details.</h2>
            <ul className="split-panel__list body">
              {consultFacts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-gap-lg">
        <div className="split-band">
          <article id="fees" className="split-panel scroll-mt-24">
            <p className="label">Fees & Policies</p>
            <h2 className="h2">Fees and policies.</h2>
            <p className="label pt-2">Fees</p>
            <ul className="split-panel__list body">
              {consultFacts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="label pt-4">Policies</p>
            <ul className="split-panel__list body">
              {policyFacts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article id="questions" className="split-panel scroll-mt-24">
            <p className="label">Questions</p>
            <h2 className="h2">Common questions.</h2>
            <div className="faq-list">
              {questions.map((item) => (
                <div key={item.question} className="faq-row">
                  <h3 className="h3">{item.question}</h3>
                  <p className="body mt-3">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}
