import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Arc Psychotherapy website.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Privacy Policy</h1>
      <div className="mt-6 space-y-6 body max-w-3xl">
        <section className="card">
          <h2 className="h3">What this site collects</h2>
          <p className="mt-3 body">
            This website collects only the information you submit through the contact form: name, email address, phone number (optional), scheduling availability, preferred contact method, and a brief description of your reason for reaching out.
          </p>
          <p className="mt-3 body">
            No tracking cookies, analytics platforms, or advertising tools are installed on this site.
          </p>
        </section>

        <section className="card">
          <h2 className="h3">How your information is used</h2>
          <p className="mt-3 body">
            Form submissions are transmitted by email to {siteContent.email} for the purpose of responding to your inquiry. They are not stored on a server, sold to third parties, or shared with anyone outside the practice.
          </p>
          <p className="mt-3 body">
            This contact form is not a secure clinical channel. Do not submit protected health information (PHI) through this form.
          </p>
        </section>

        <section className="card">
          <h2 className="h3">HIPAA notice</h2>
          <p className="mt-3 body">
            This website is not a HIPAA-covered electronic health record system. Clinical records and communications that constitute protected health information (PHI) are handled through the practice&apos;s secure client portal and clinical documentation systems, not through this website.
          </p>
        </section>

        <section className="card">
          <h2 className="h3">Data retention</h2>
          <p className="mt-3 body">
            Inquiry emails are retained only as long as operationally necessary to respond to and process your request. If you become a client, information is handled in accordance with clinical record-keeping requirements under Texas law.
          </p>
        </section>

        <section className="card">
          <h2 className="h3">Requesting deletion</h2>
          <p className="mt-3 body">
            To request deletion of any information you have submitted through this website, contact the practice directly at{" "}
            <a href={`mailto:${siteContent.email}`} className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">
              {siteContent.email}
            </a>
            .
          </p>
        </section>

        <section className="card">
          <h2 className="h3">Emergency communication</h2>
          <p className="mt-3 body">
            This website is not monitored for emergencies. If you are in immediate danger, call 911. For mental health crisis support, call or text 988.
          </p>
        </section>

        <p>
          Consumer rights information for records access and complaints is available on the{" "}
          <Link href="/consumer-protection" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">
            Consumer Protection
          </Link>{" "}
          page.
        </p>
      </div>
    </section>
  );
}
