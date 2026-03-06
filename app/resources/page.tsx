import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Resources",
    description:
      "Educational resources on perfectionism, overcontrol, anxiety, and therapeutic change.",
    path: "/resources"
  }),
  robots: {
    index: false,
    follow: true
  }
};

export default function ResourcesPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Resources</h1>
      <p className="body-lg mt-5 max-w-3xl">
        Resource library scaffold. Add clinically reviewed articles for Round Rock and North Austin adults seeking psychotherapy.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="card">
          <h2 className="h3">Perfectionism without collapse</h2>
          <p className="mt-3 body">Placeholder summary for a future educational post.</p>
        </article>
        <article className="card">
          <h2 className="h3">Overcontrol and flexibility</h2>
          <p className="mt-3 body">Placeholder summary for a future educational post.</p>
        </article>
        <article className="card">
          <h2 className="h3">Repair after spiritual trauma</h2>
          <p className="mt-3 body">Placeholder summary for a future educational post.</p>
        </article>
      </div>
    </section>
  );
}
