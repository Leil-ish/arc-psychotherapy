import Script from "next/script";
import { SchemaScript } from "@/components/schema-script";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ | Round Rock, TX",
  description:
    "Frequently asked questions about therapy in Downtown Round Rock, serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/faq"
});

const faqs = [
  {
    q: "What do sessions look like?",
    a: "Sessions are 50–55 minutes. We get specific about what is actually happening — not just why it makes sense, but what the sequence looks like, when it happens, and what keeps it in place. Between sessions, you pay attention to what changes and what doesn't. We adjust from there."
  },
  {
    q: "How long does therapy typically take?",
    a: "It depends on what you are working on and how entrenched the pattern is. Some people make meaningful changes in a few months. Others work longer on deeper or more layered problems. I'll be direct with you about what I see rather than extend therapy past its usefulness."
  },
  {
    q: "What do you mean by 'direct and practical' therapy?",
    a: "It means we define the problem specifically, set real targets, and track whether anything is shifting outside the session. You will not spend months exploring without a direction. If something is not working, we will say so and try something else."
  },
  {
    q: "Do you work with medication providers?",
    a: "I do not prescribe medication, but I will coordinate with your prescriber when it supports the work. If medication evaluation seems relevant, I will say so directly."
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes. Telehealth is available for Texas residents when it makes clinical sense."
  },
  {
    q: "Do you accept insurance?",
    a: "The practice is private-pay. A superbill may be available for out-of-network reimbursement."
  },
  {
    q: "What is the model-building track?",
    a: "Structured model-building is an optional method used within ongoing therapy for clients who benefit from making patterns visible in physical form. It is not required. See the dedicated page for details."
  }
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  return (
    <>
      <SchemaScript
        id="faq-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" }
        ])}
      />
      <section className="container-wrap py-16 md:py-20">
        <h1 className="h1">Frequently asked questions</h1>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <article key={faq.q} className="card">
              <h2 className="h3">{faq.q}</h2>
              <p className="mt-3 body">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
