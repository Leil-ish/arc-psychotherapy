import Script from "next/script";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ | Round Rock, TX",
  description:
    "Frequently asked questions about structured psychotherapy in Downtown Round Rock, serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/faq"
});

const faqs = [
  {
    q: "Is the structured model-building option required?",
    a: "No. Standard therapy is available on its own. The track is optional and selected only when clinically appropriate and aligned with your goals."
  },
  {
    q: "Is this play therapy?",
    a: "No. This is adult psychotherapy using structured model-building as a focused experiential tool inside treatment."
  },
  {
    q: "Is structured model-building part of the track?",
    a: "Yes. The track can use a medium-to-large model set as part of a clinically guided arc of sessions."
  },
  {
    q: "Do I keep the set?",
    a: "Yes. Clients keep the completed set, and set cost is included in track package pricing."
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes, telehealth is available for Texas residents when appropriate for care needs and clinical fit."
  },
  {
    q: "Do you accept insurance?",
    a: "The practice is private-pay. A superbill may be available for out-of-network reimbursement."
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
