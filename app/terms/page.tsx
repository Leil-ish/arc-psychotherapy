import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms of use for Arc Psychotherapy website.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Terms of Use</h1>
      <div className="mt-6 space-y-6 body max-w-3xl">
        <section className="card">
          <h2 className="h3">No therapeutic relationship</h2>
          <p className="mt-3 body">
            Use of this website does not establish a therapeutic relationship between you and Arc Psychotherapy or Leila Anderson, LMFT-S. A therapeutic relationship is established only through a signed informed consent agreement entered into after a clinical consultation.
          </p>
        </section>

        <section className="card">
          <h2 className="h3">Educational content only</h2>
          <p className="mt-3 body">
            Content on this website — including essays, framework descriptions, and issue guides — is educational and informational only. It does not constitute clinical advice, diagnosis, or treatment recommendations for any specific person or situation.
          </p>
        </section>

        <section className="card">
          <h2 className="h3">Emergency communication</h2>
          <p className="mt-3 body">
            Do not use this website for emergency communication. The contact form is not monitored in real time. If you are in immediate danger, call 911. For mental health crisis support, call or text 988.
          </p>
        </section>

        <section className="card">
          <h2 className="h3">Intellectual property</h2>
          <p className="mt-3 body">
            Written content, frameworks, and design on this site are the property of Oleander Counseling & Consulting, LLC (operating as Arc Psychotherapy). You may share or link to content with attribution. You may not reproduce or republish it for commercial purposes without written permission.
          </p>
          <p className="mt-3 body">
            For permissions, contact{" "}
            <a href={`mailto:${siteContent.email}`} className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">
              {siteContent.email}
            </a>
            .
          </p>
        </section>

        <section className="card">
          <h2 className="h3">Limitation of liability</h2>
          <p className="mt-3 body">
            Arc Psychotherapy and Leila Anderson, LMFT-S are not liable for decisions made in reliance on content published on this website. Use the information here as a starting point, not as a substitute for professional clinical guidance.
          </p>
        </section>

        <section className="card">
          <h2 className="h3">Governing law</h2>
          <p className="mt-3 body">
            These terms are governed by the laws of the State of Texas. Any disputes arising from use of this website are subject to the jurisdiction of courts in Williamson County, Texas.
          </p>
        </section>

        <p>
          Consumer rights and required notices are posted on the{" "}
          <Link href="/consumer-protection" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">
            Consumer Protection
          </Link>{" "}
          page.
        </p>
      </div>
    </section>
  );
}
