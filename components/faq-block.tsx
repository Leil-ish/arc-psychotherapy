import Script from "next/script";

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
    <section className="container-wrap mt-14">
      <h2 className="h2">{heading}</h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <article key={item.question} className="card">
            <h3 className="h3 text-xl">{item.question}</h3>
            <p className="mt-3 body">{item.answer}</p>
          </article>
        ))}
      </div>
      {schemaId ? (
        <Script
          id={schemaId}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ) : null}
    </section>
  );
}
