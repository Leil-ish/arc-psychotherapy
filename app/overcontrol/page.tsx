import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqBlock } from "@/components/faq-block";
import { pageMetadata } from "@/lib/seo";
import { getConceptBySlug } from "@/src/content/concepts";
import { siteContent } from "@/src/content/site";

const hub = getConceptBySlug("overcontrol");

export const metadata = pageMetadata({
  title: "Overcontrol Therapy in Round Rock, TX",
  description:
    "Definition-first guide to overcontrol and rigidity from Arc Psychotherapy in Downtown Round Rock. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/overcontrol"
});

export default function OvercontrolPage() {
  if (!hub) return null;

  return (
    <>
      <section className="container-wrap py-16 md:py-20">
        <h1 className="h1">{hub.title}</h1>
        <div className="mt-5 space-y-3 max-w-3xl">
          {hub.definition.map((item) => (
            <p key={item} className="body">
              {item}
            </p>
          ))}
        </div>
        <p className="mt-3 body max-w-3xl">If this sounds like you, you are not overreacting. This page explains the pattern and what helps.</p>
        <p className="mt-3 body text-sm text-ink/75">
          {siteContent.primaryLocation} • {siteContent.secondaryLocation} • {siteContent.telehealthRegion}
        </p>
        <Link href="/start-here" className="focus-ring mt-4 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Start Here
        </Link>
        <Link href="/work-with-me" className="focus-ring ml-4 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">
          Work With Me
        </Link>
        <figure className="mt-8">
          <div className="arc-image-mask overflow-hidden">
            <Image
              src="/images/architectural-details/stair-shadow-blackwhite.jpg"
              alt="Stair and wall in high-contrast shadow."
              width={3027}
              height={4540}
              className="h-[14rem] w-full object-cover md:h-[20rem]"
              sizes="(min-width: 1024px) 72rem, 100vw"
            />
          </div>
        </figure>
      </section>

      <FaqBlock heading="Common questions about overcontrol" items={hub.faq} schemaId="overcontrol-faq" />

      <section className="container-wrap grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="h2">Common presentations</h2>
          <ul className="mt-4 space-y-2 body">{hub.commonPresentations.map((item) => <li key={item}>• {item}</li>)}</ul>
        </article>
        <article className="card">
          <h2 className="h2">What people often try (and why it stalls)</h2>
          <ul className="mt-4 space-y-2 body">{hub.whatDoesNotWork.map((item) => <li key={item}>• {item}</li>)}</ul>
        </article>
      </section>

      <section className="container-wrap mt-12 grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="h2">What helps</h2>
          <ul className="mt-4 space-y-2 body">{hub.whatHelps.map((item) => <li key={item}>• {item}</li>)}</ul>
        </article>
        <article className="card">
          <h2 className="h2">How therapy helps</h2>
          <p className="mt-4 body">{hub.arcApproach}</p>
        </article>
      </section>

      <section className="container-wrap mt-12 grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="h3">Related essays</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {hub.relatedEssays.map((link) => (
              <Link key={link.href} href={link.href as Route} className="focus-ring no-link-style chip-link">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
        <article className="card">
          <h2 className="h3">Related frameworks</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {hub.relatedFrameworks.map((link) => (
              <Link key={link.href} href={link.href as Route} className="focus-ring no-link-style chip-link">
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </section>

    </>
  );
}
