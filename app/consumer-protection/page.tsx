import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Consumer Protection | Round Rock, TX",
  description:
    "Consumer protection, records access, and complaint instructions for Arc Psychotherapy in compliance with Texas requirements.",
  path: "/consumer-protection"
});

export default function ConsumerProtectionPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Consumer Protection</h1>
      <p className="mt-6 body max-w-3xl">
        Access to Records & Complaints
      </p>
      <p className="mt-3 body max-w-3xl">
        In compliance with Texas House Bill 4224 (89th Regular Session) and Section 181.105 of the Texas Health and Safety Code, Arc Psychotherapy provides the following instructions for consumers.
      </p>

      <section className="mt-8 card">
        <h2 className="h3">1. Requesting your health care records</h2>
        <p className="mt-3 body">
          You have the right to request a copy of your mental health records at any time.
        </p>
        <p className="mt-3 body">
          Send a written request by email to{" "}
          <a className="focus-ring font-semibold text-sage underline-offset-4 hover:underline" href="mailto:leilacanderson@gmail.com">
            leilacanderson@gmail.com
          </a>{" "}
          with the subject line &quot;Medical Records Request&quot; to request a release of information form.
        </p>
        <p className="mt-3 body text-sm text-ink/75">
          Note: A reasonable, cost-based fee for copies may apply as permitted by Texas law.
        </p>
      </section>

      <section className="mt-6 card">
        <h2 className="h3">2. Contacting the licensing council</h2>
        <p className="mt-3 body">
          This practice is licensed under the Texas Behavioral Health Executive Council (BHEC). To contact the Council regarding a licensee, visit:
        </p>
        <p className="mt-3 body">
          <Link
            href="https://bhec.texas.gov/contact/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-semibold text-sage underline-offset-4 hover:underline"
          >
            Texas Behavioral Health Executive Council - Contact Us
          </Link>
        </p>
      </section>

      <section className="mt-6 card">
        <h2 className="h3">3. Filing a consumer complaint</h2>
        <p className="mt-3 body">
          You have the right to file a complaint regarding consumer protection issues. To file a complaint with the Office of the Attorney General, visit:
        </p>
        <p className="mt-3 body">
          <Link
            href="https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-semibold text-sage underline-offset-4 hover:underline"
          >
            Texas Attorney General - Consumer Protection Division
          </Link>
        </p>
      </section>

      <section className="mt-6 card">
        <h2 className="h3">&quot;No Surprises Act&quot; Notice</h2>
        <p className="mt-3 body">
          You have the right to receive a Good Faith Estimate explaining how much your medical care will cost.
        </p>
        <p className="mt-3 body">
          Under the law, health care providers need to give patients who do not have insurance or who are not using insurance an estimate of the bill for medical items and services.
        </p>
        <ul className="mt-4 space-y-2 body">
          <li>• You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services.</li>
          <li>• Your health care provider should give you a Good Faith Estimate in writing at least 1 business day before your medical service or item.</li>
          <li>• If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill.</li>
          <li>• Keep a copy or picture of your Good Faith Estimate.</li>
        </ul>
        <p className="mt-3 body">
          For questions or more information about your right to a Good Faith Estimate, visit{" "}
          <Link
            href="https://www.cms.gov/nosurprises"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-semibold text-sage underline-offset-4 hover:underline"
          >
            www.cms.gov/nosurprises
          </Link>
          .
        </p>
        <p className="mt-4 body text-sm text-ink/75">
          This page is provided for consumer rights notice purposes and does not replace individualized legal advice.
        </p>
      </section>
    </section>
  );
}
