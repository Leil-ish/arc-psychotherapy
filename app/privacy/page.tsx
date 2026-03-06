import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Arc Psychotherapy website.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Privacy Policy</h1>
      <div className="mt-6 space-y-4 body max-w-3xl">
        <p>This website collects only basic contact form information needed to respond to inquiries.</p>
        <p>Please do not submit protected health information (PHI) through this website form.</p>
        <p>Form submissions are not intended for emergency communication. Call 988 or 911 in crisis situations.</p>
        <p>
          Consumer rights information for records access, complaints, and Good Faith Estimate notice is available on{" "}
          <Link href="/consumer-protection" className="focus-ring font-semibold text-sage underline-offset-4 hover:underline">
            Consumer Protection
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
