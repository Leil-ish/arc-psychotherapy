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
    q: "Who is therapy for?",
    a: "This is private-pay individual psychotherapy for adults. I work in person in Downtown Round Rock and by telehealth with Texas residents."
  },
  {
    q: "What is the initial consultation?",
    a: "It is a free, 30-minute video conversation. We talk about what you are looking for, whether the work makes sense, and the practical details."
  },
  {
    q: "How often do clients meet?",
    a: "Most clients begin weekly. Once we have a treatment plan and a sense of what helps, we can be flexible about frequency."
  },
  {
    q: "What do sessions look like?",
    a: "Sessions are 50–55 minutes. We talk about history, meaning, and relationships, then get concrete about the sequence that keeps repeating: what happens, what you predict, what you do next, and what it costs. Between sessions, you may notice or try things; we use what happens to guide the next session."
  },
  {
    q: "How long does therapy typically take?",
    a: "It depends on the problem, its history, and what changes once we begin. Some people come for a focused period; others need more time for problems with deeper roots or larger consequences. I will be direct about what I am seeing, including when the work appears to be complete or needs a different kind of support."
  },
  {
    q: "What do you mean by 'direct and practical' therapy?",
    a: "A good explanation is useful, but it is not always a change plan. We define the problem clearly enough to work with it and keep checking whether the work is making a difference outside the room."
  },
  {
    q: "Do you work with medication providers?",
    a: "I do not prescribe medication. With your written permission, I can coordinate with a prescriber when that would support your care. If a medication evaluation seems worth considering, I will say so."
  },
  {
    q: "Do you offer telehealth?",
    a: "Yes. Telehealth is available for Texas residents when it makes clinical sense."
  },
  {
    q: "Do you offer walk-and-talk sessions?",
    a: "Yes, when weather and clinical fit permit. Sessions can happen on foot at parks and trails around Round Rock and North Austin. Before we use that format, we consider the route, physical access, weather, and the privacy limitations of being outdoors."
  },
  {
    q: "Do you accept insurance?",
    a: "No. This is a private-pay practice. I can provide a superbill for out-of-network reimbursement. Mentaya and Thrizer are separate services that can help with claims if you do not want to handle that paperwork yourself."
  },
  {
    q: "How does playing with LEGO fit into therapy?",
    a: "Playing with LEGO puts a pattern into physical space when words alone are not getting us far enough. It is one option alongside conversation, observation, and practical experiments. The dedicated page explains it in more detail."
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
