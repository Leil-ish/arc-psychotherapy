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
  titleOverride
}: {
  hub: ConceptHub;
  imageSrc: string;
  imageAlt: string;
  titleOverride?: string;
}) {
  const [definitionLead, ...definitionSupport] = hub.definition;

  return (
    <>
      <section className="container-wrap py-16 md:py-20">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="label">Issue Guide</p>
            <h1 className="h1 mt-4">{titleOverride ?? hub.title}</h1>
            <p className="hero-lede">{definitionLead}</p>
            <div className="hero-support">
              {definitionSupport.map((item) => (
                <p key={item} className="body">
                  {item}
                </p>
              ))}
              <p className="label pt-2">{siteContent.primaryLocation} • {siteContent.telehealthRegion}</p>
            </div>
            <div className="hero-actions">
              <ButtonLink href="/contact">Ask about availability</ButtonLink>
              <ButtonLink href="/therapy" variant="secondary">
                Therapy
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
            <p className="label">This can look like</p>
            <h2 className="h2">Some familiar versions of the problem.</h2>
            <ul className="split-panel__list body">
              {hub.commonPresentations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">What people often try</p>
            <h2 className="h2">Things that sound helpful and often are not.</h2>
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
            <p className="label">What can help</p>
            <h2 className="h2">What can make some room.</h2>
            <ul className="split-panel__list body">
              {hub.whatHelps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="split-panel">
            <p className="label">How I work with it</p>
            <h2 className="h2">What therapy might look like.</h2>
            <p className="body">{hub.arcApproach}</p>
          </article>
        </div>
      </section>

      <FaqBlock heading={`Common questions about ${hub.title.toLowerCase()}`} items={hub.faq} schemaId={`${hub.slug}-faq`} />

      <section className="container-wrap section-gap-lg">
        <div className="split-band">
          <article className="split-panel">
            <p className="label">Related Essays</p>
            <h2 className="h2">Related writing.</h2>
            <div className="flex flex-wrap gap-2">
              {hub.relatedEssays.map((link) => (
                <Link key={link.href} href={link.href as Route} className="focus-ring no-link-style chip-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
          <article className="split-panel">
            <p className="label">Related working ideas</p>
            <h2 className="h2">Useful tools, not homework.</h2>
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
