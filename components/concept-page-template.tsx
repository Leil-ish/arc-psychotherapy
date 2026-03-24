import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { FaqBlock } from "@/components/faq-block";
import type { ConceptHub } from "@/src/content/concepts";
import { siteContent } from "@/src/content/site";

export function ConceptPageTemplate({
  hub,
  imageSrc,
  imageAlt,
  resonanceLine
}: {
  hub: ConceptHub;
  imageSrc: string;
  imageAlt: string;
  resonanceLine: string;
}) {
  const [definitionLead, ...definitionSupport] = hub.definition;

  return (
    <>
      <section className="container-wrap py-16 md:py-20">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="label">Issue Guide</p>
            <h1 className="h1 mt-4">{hub.title}</h1>
            <p className="hero-lede">{definitionLead}</p>
            <div className="hero-support">
              {definitionSupport.map((item) => (
                <p key={item} className="body">
                  {item}
                </p>
              ))}
              <p className="body">{resonanceLine}</p>
              <p className="label pt-2">{siteContent.primaryLocation} • {siteContent.telehealthRegion}</p>
            </div>
            <div className="hero-actions">
              <ButtonLink href="/start-here">Start Here</ButtonLink>
              <ButtonLink href="/work-with-me" variant="secondary">
                Approach
              </ButtonLink>
            </div>
          </div>
          <figure className="image-frame">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={6240}
              height={4160}
              className="h-full min-h-[18rem] w-full object-cover"
              sizes="(min-width: 1024px) 34rem, 100vw"
            />
          </figure>
        </div>
      </section>

      <section className="container-wrap section-gap">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">Common Presentations</p>
            <h2 className="h2">How it usually shows up.</h2>
            <ul className="split-panel__list body">
              {hub.commonPresentations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">What Stalls</p>
            <h2 className="h2">What people often try first.</h2>
            <ul className="split-panel__list body">
              {hub.whatDoesNotWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container-wrap section-gap">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">What Helps</p>
            <h2 className="h2">What starts to widen the range.</h2>
            <ul className="split-panel__list body">
              {hub.whatHelps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">Therapy At Arc</p>
            <h2 className="h2">How the work gets practical.</h2>
            <p className="body">{hub.arcApproach}</p>
          </article>
        </div>
      </section>

      <FaqBlock heading={`Common questions about ${hub.title.toLowerCase()}`} items={hub.faq} schemaId={`${hub.slug}-faq`} />

      <section className="container-wrap section-gap-lg">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">Related Essays</p>
            <h2 className="h2">Read one short piece.</h2>
            <div className="flex flex-wrap gap-2">
              {hub.relatedEssays.map((link) => (
                <Link key={link.href} href={link.href as Route} className="focus-ring no-link-style chip-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
          <article className="split-panel">
            <p className="label">Related Frameworks</p>
            <h2 className="h2">Optional tools, not homework.</h2>
            <div className="flex flex-wrap gap-2">
              {hub.relatedFrameworks.map((link) => (
                <Link key={link.href} href={link.href as Route} className="focus-ring no-link-style chip-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
