import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact | Round Rock, TX",
  description:
    "Contact Arc Psychotherapy for structured psychotherapy in Downtown Round Rock, serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Contact</h1>
      <p className="body-lg mt-5 max-w-3xl">
        Reach out for consult scheduling, availability, and service fit. Please do not include sensitive clinical details (PHI) in this form.
      </p>
      <p className="mt-3 body max-w-3xl">{siteConfig.locationSummaryLine}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <ContactForm />
        <aside className="card">
          <p className="h3">Direct contact</p>
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
