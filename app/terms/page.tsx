import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms of use for Arc Psychotherapy website.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Terms of Use</h1>
      <div className="mt-6 space-y-4 body max-w-3xl">
        <p>Website content is educational and informational only and does not constitute medical advice.</p>
        <p>Use of this website does not establish a therapeutic relationship.</p>
        <p>Do not use this site for emergency communication. Call 911 or 988 for urgent support.</p>
        <p>
          Consumer rights and required notices are posted on{" "}
          <Link href="/consumer-protection" className="focus-ring font-semibold text-sage underline-offset-4 hover:underline">
            Consumer Protection
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
