import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact | Round Rock, TX",
  description:
    "Contact Arc Psychotherapy for therapy in Downtown Round Rock, serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Contact</h1>
      <p className="body-lg mt-5 max-w-3xl">
        Request a consult and choose your scheduling preference: share your availability or ask Arc to reach out with available times.
      </p>
      <p className="mt-3 body max-w-3xl">
        If you are the one who keeps it together for everyone else and you are tired, this is a reasonable place to start.
      </p>
      <p className="mt-3 body max-w-3xl text-sm text-ink/80">
        Please do not include sensitive clinical details (PHI) in this form.
      </p>
      <p className="mt-3 body max-w-3xl">{siteConfig.locationSummaryLine}</p>
      <figure className="mt-8">
        <div className="arc-image-mask overflow-hidden">
          <Image
            src="/images/austin-local/office-exterior-round-rock.jpg"
            alt="Arc office exterior on West Main Street in Round Rock."
            width={1200}
            height={675}
            className="h-[15rem] w-full object-cover md:h-[21rem]"
            sizes="(min-width: 1024px) 72rem, 100vw"
          />
        </div>
      </figure>
      <div id="consult-request" className="mt-8 space-y-8 scroll-mt-24">
        <ContactForm />
        <aside className="card">
          <p className="label">Direct contact</p>
          <p className="mt-3 body">Call: {siteConfig.phone}</p>
          <p className="body">Email: {siteConfig.email}</p>
          <p className="mt-5 body">Office: {siteConfig.addressLine1}, {siteConfig.cityStateZip}</p>
          <p className="mt-5 body text-sm">
            If you are in immediate danger, call 911. For mental health crisis support, call or text 988.
          </p>
        </aside>
      </div>
    </section>
  );
}
