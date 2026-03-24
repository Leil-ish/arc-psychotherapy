import { SchemaScript } from "@/components/schema-script";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqBlock({
  heading = "FAQ",
  items,
  schemaId
}: {
  heading?: string;
  items: FaqItem[];
  schemaId?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="container-wrap section-gap-lg">
      <div className="section-heading">
        <p className="label">Questions</p>
        <h2 className="h2">{heading}</h2>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <article key={item.question} className="faq-row">
            <h3 className="h3">{item.question}</h3>
            <p className="mt-3 body">{item.answer}</p>
          </article>
        ))}
      </div>
      {schemaId ? <SchemaScript id={schemaId} data={schema} /> : null}
    </section>
  );
}
