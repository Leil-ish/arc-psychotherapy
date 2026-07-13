import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Reading",
    description:
      "Writing on perfectionism, overcontrol, religious harm, and therapeutic change.",
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
      <h1 className="h1">Start with the writing.</h1>
      <p className="body-lg mt-5 max-w-3xl">
        I am building this library slowly rather than filling it with generic advice. The essays are the useful place to begin.
      </p>
      <p className="mt-5 body max-w-3xl">
        <Link href="/ideas" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">Read the essays</Link>
        {" "}for the current collection, or use <Link href="/start-here" className="focus-ring font-semibold text-accent underline-offset-4 hover:underline">Start Here</Link> to decide which topic is most relevant.
      </p>
    </section>
  );
}
