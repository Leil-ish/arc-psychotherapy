import { SectionCta } from "@/components/section-cta";
import { pricing } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fees & Policies | Round Rock, TX",
  description:
    "Private-pay therapy rates, package pricing, and policy details for Arc Psychotherapy in Downtown Round Rock, serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/fees"
});

export default function FeesPage() {
  return (
    <>
      <section className="container-wrap py-16 md:py-20">
        <h1 className="h1">Fees & policies</h1>
        <p className="body-lg mt-6 max-w-3xl">
          Private-pay practice. Superbills may be available upon request for out-of-network reimbursement.
        </p>
      </section>

      <section className="container-wrap grid gap-5 md:grid-cols-3">
        <article className="card">
          <p className="h3">Standard therapy</p>
          <p className="mt-3 body text-2xl font-semibold text-ink">${pricing.standardSession.fee}</p>
          <p className="body">{pricing.standardSession.duration}</p>
        </article>
        <article className="card">
          <p className="h3">{pricing.constructiveTrack.arc6.label}</p>
          <p className="mt-3 body text-2xl font-semibold text-ink">${pricing.constructiveTrack.arc6.fee}</p>
          <p className="body">{pricing.constructiveTrack.arc6.details}</p>
        </article>
        <article className="card">
          <p className="h3">{pricing.constructiveTrack.arc10.label}</p>
          <p className="mt-3 body text-2xl font-semibold text-ink">${pricing.constructiveTrack.arc10.fee}</p>
          <p className="body">{pricing.constructiveTrack.arc10.details}</p>
        </article>
      </section>

      <section className="container-wrap mt-14 grid gap-5 md:grid-cols-2">
        <article className="card">
          <p className="h3">Policy highlights</p>
          <ul className="mt-4 space-y-2 body">
            <li>1. 24-hour cancellation policy. Late cancellations or no-shows may be billed in full.</li>
            <li>2. Do not include PHI in contact form submissions.</li>
            <li>3. Crisis care is not provided via email or form messaging. Call 988 or 911 in emergencies.</li>
          </ul>
        </article>
        <article className="card">
          <p className="h3">Payment</p>
          <p className="mt-3 body">
            Payment is due at time of service. Track packages are paid upfront or via approved installment arrangement.
          </p>
        </article>
      </section>

      <SectionCta
        title="Questions about pricing or fit?"
        body="Use the contact page or schedule a consult for current availability and package timing."
      />
    </>
  );
}
