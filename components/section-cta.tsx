import { ButtonLink } from "@/components/button-link";
import { siteConfig } from "@/lib/content";

export function SectionCta({ title, body }: { title: string; body: string }) {
  return (
    <section className="container-wrap mt-16">
      <div className="card bg-ink text-white">
        <p className="h3">{title}</p>
        <p className="mt-3 max-w-2xl text-white/85">{body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={siteConfig.bookingUrl} external>
            Schedule consult
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
