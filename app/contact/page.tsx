import { ContactForm } from "@/components/contact-form";
import { SchemaScript } from "@/components/schema-script";
import { siteConfig } from "@/lib/content";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { contactPage } from "@/src/content/marketing";

export const metadata = pageMetadata({
  title: "Contact | Round Rock, TX",
  description:
    "Contact Arc Psychotherapy about therapy, supervision, or consultation from Round Rock, Texas.",
  path: "/contact"
});

export default function ContactPage() {
  const intro = contactPage.intro;
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
            <p className="body">I reply to inquiries within one to two business days.</p>
          </div>
        </aside>
      </div>

      <section id="consult-request" className="section-gap-lg scroll-mt-24">
        <div className="split-band">
          <div>
            <ContactForm />
          </div>
          <aside className="split-panel">
            <p className="label">Before reaching out</p>
            <ul className="split-panel__list body mt-4">
              <li>Standard session fee is $200 for 50–55 minutes.</li>
              <li>Private-pay practice. Superbills may be available for out-of-network reimbursement.</li>
              <li>Telehealth is available to Texas residents when clinically appropriate.</li>
              <li>24-hour cancellation policy. Late cancellations or no-shows may be billed in full.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="questions" className="section-gap-lg scroll-mt-24">
        <p className="label">Questions</p>
        <h2 className="h2 mt-2">Common questions.</h2>
        <div className="faq-list mt-6">
          {contactPage.questions.map((item) => (
            <div key={item.question} className="faq-row">
              <h3 className="h3">{item.question}</h3>
              <p className="body mt-3">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
