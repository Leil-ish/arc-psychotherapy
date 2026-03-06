import Link from "next/link";
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
            className="focus-ring font-semibold text-sage underline-offset-4 hover:underline"
          >
            www.cms.gov/nosurprises
          </Link>
          .
        </p>
        <p>
          For records access and complaint instructions required by Texas law, see{" "}
          <Link href="/consumer-protection" className="focus-ring font-semibold text-sage underline-offset-4 hover:underline">
            Consumer Protection
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
