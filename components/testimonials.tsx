import { testimonialPlaceholders } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="container-wrap mt-16">
      <h2 className="h2">Client feedback (de-identified)</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {testimonialPlaceholders.map((item) => (
          <blockquote key={item.quote} className="card">
            <p className="body">{item.quote}</p>
            <cite className="mt-4 block text-xs uppercase tracking-[0.12em] text-ink/70 not-italic">
              {item.label}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
