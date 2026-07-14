import Link from "next/link";
import { pricing } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Good Faith Estimate | Round Rock, TX",
  description: "No Surprises Act Good Faith Estimate notice and patient rights information.",
  path: "/good-faith-estimate"
});

export default function GoodFaithEstimatePage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Good Faith Estimate Notice</h1>
      <div className="mt-6 space-y-4 body max-w-3xl">
        <p>
          You have the right to receive a Good Faith Estimate explaining how much your medical care will cost.
        </p>
        <p>
          Under the law, health care providers need to give patients who do not have insurance or who are not using insurance an estimate of the bill for medical items and services.
        </p>
        <ul className="space-y-2">
          <li>• You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services.</li>
          <li>• Your health care provider should give you a Good Faith Estimate in writing at least 1 business day before your medical service or item.</li>
          <li>• If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</li>
          <li>• Keep a copy or picture of your Good Faith Estimate.</li>
        </ul>
        <p>
          For questions about your rights, visit{" "}
          <Link
            href="https://www.cms.gov/nosurprises"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-semibold text-accent underline-offset-4 hover:underline"
          >
            www.cms.gov/nosurprises
          </Link>
          .
        </p>
      </div>

      <div className="mt-10 card max-w-3xl">
        <h2 className="h3">Practice fee schedule</h2>
        <p className="mt-3 body">
          The following fees apply to services at Arc Psychotherapy. Actual costs will depend on the number of sessions and services provided.
        </p>
        <ul className="mt-4 space-y-2 body">
          <li>
            <strong>Standard individual therapy session:</strong> ${pricing.standardSession.fee}, {pricing.standardSession.duration}
          </li>
          <li>
            <strong>{pricing.constructiveTrack.arc6.label} (LEGO therapy):</strong> ${pricing.constructiveTrack.arc6.fee} — {pricing.constructiveTrack.arc6.details}
          </li>
          <li>
            <strong>{pricing.constructiveTrack.arc10.label} (LEGO therapy):</strong> ${pricing.constructiveTrack.arc10.fee} — {pricing.constructiveTrack.arc10.details}
          </li>
        </ul>
        <p className="mt-3 body text-sm text-ink/75">
          This is a private-pay practice. Fees are due at time of service. A superbill may be available for out-of-network reimbursement requests.
        </p>
      </div>

      <div className="mt-6 body max-w-3xl">
        <p>
          For records access and complaint instructions required by Texas law, see{" "}
          <Link href="/consumer-protection" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">
            Consumer Protection
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
