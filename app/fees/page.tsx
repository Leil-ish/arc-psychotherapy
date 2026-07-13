import { pricing } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { contactPage } from "@/src/content/marketing";

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
          Standard individual therapy is ${pricing.standardSession.fee} for {pricing.standardSession.duration}. This is a private-pay practice; a superbill is available if you use out-of-network benefits.
        </p>
        <p className="body mt-3 max-w-3xl">
          If you use out-of-network benefits and do not want to handle claims yourself,{" "}
          <a href="https://www.mentaya.com/" target="_blank" rel="noopener noreferrer" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">Mentaya</a>{" "}
          and{" "}
          <a href="https://www.thrizer.com/" target="_blank" rel="noopener noreferrer" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">Thrizer</a>{" "}
          can automate out-of-network reimbursement.
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

      <section className="container-wrap mt-14">
        <div className="split-band split-band--open">
          <article className="split-panel">
            <h2 className="h2">Why private pay.</h2>
            <p className="body">Private pay lets me work without insurance restrictions shaping the diagnosis, pace, or scope of therapy. It also means continuity with one clinician and a limited caseload with room to think carefully about complex work.</p>
          </article>
          <article className="split-panel">
            <h2 className="h2">Reduced-fee availability.</h2>
            <p className="body">A portion of my caseload is reserved for reduced-fee spots. Ask about availability if the standard fee would make therapy inaccessible.</p>
          </article>
        </div>
      </section>

      <section className="container-wrap mt-14 grid gap-5 md:grid-cols-2">
        <article className="card">
          <p className="h3">Policy highlights</p>
          <ul className="mt-4 space-y-2 body">
            {contactPage.policyFacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
            <li>Do not include protected health information (PHI) in contact form submissions.</li>
            <li>Crisis care is not provided via email or form messaging. Call 988 or 911 in emergencies.</li>
          </ul>
        </article>
        <article className="card">
          <p className="h3">Payment</p>
          <p className="mt-3 body">
            Payment is due at the time of service. Focused LEGO therapy packages are paid upfront or through an approved installment arrangement. Ask before scheduling if you want to talk through the numbers first.
          </p>
        </article>
      </section>
    </>
  );
}
