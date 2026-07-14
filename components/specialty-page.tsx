import type { Route } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { FaqBlock } from "@/components/faq-block";
import { SchemaScript } from "@/components/schema-script";
import { pricing, siteConfig } from "@/lib/content";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import type { SpecialtyPage } from "@/src/content/specialties";

export function SpecialtyPage({ specialty }: { specialty: SpecialtyPage }) {
  return (
    <>
      <SchemaScript
        id={`${specialty.path.replaceAll("/", "-")}-webpage-schema`}
        data={webPageSchema({
          name: specialty.title,
          description: specialty.lede,
          path: specialty.path
        })}
      />
      <SchemaScript
        id={`${specialty.path.replaceAll("/", "-")}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Therapy", path: "/therapy" },
          { name: specialty.title.replace(/\.$/, ""), path: specialty.path }
        ])}
      />
      <section className="container-wrap py-16 md:py-20">
        <div className="hero-copy">
          <p className="label">{specialty.eyebrow}</p>
          <h1 className="h1 mt-4">{specialty.title}</h1>
          <p className="hero-lede">{specialty.lede}</p>
          <div className="hero-support">
            {specialty.introduction.map((paragraph) => (
              <p key={paragraph} className="body">{paragraph}</p>
            ))}
          </div>
          <div className="hero-actions">
            <ButtonLink href="/contact">Ask about therapy availability</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-gap full-bleed-band full-bleed-band--surface">
        <div className="container-wrap">
          <div className="split-band split-band--open">
            <article className="split-panel">
              <h2 className="h2">{specialty.patternTitle}</h2>
              <ul className="split-panel__list body">
                {specialty.patterns.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="split-panel">
              <h2 className="h2">{specialty.approachTitle}</h2>
              {specialty.approach.map((paragraph) => <p key={paragraph} className="body">{paragraph}</p>)}
            </article>
          </div>
        </div>
      </section>

      <section className="section-gap full-bleed-band full-bleed-band--ultramarine">
        <div className="container-wrap">
          <article className="split-panel">
            <h2 className="h2">{specialty.possibilityTitle}</h2>
            <ul className="split-panel__list body">
              {specialty.possibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="container-wrap section-gap">
        <div className="split-band split-band--open">
          <article className="split-panel">
            <h2 className="h2">The practical details.</h2>
            <p className="body">Private-pay individual therapy with one therapist from the first conversation onward. The standard fee is ${pricing.standardSession.fee} per psychotherapy session, {pricing.standardSession.duration}; reduced-fee spots are limited and availability varies. In person in {siteConfig.primaryLocation}, with telehealth across Texas.</p>
          </article>
          <article className="split-panel">
            <h2 className="h2">Who you will work with.</h2>
            <p className="body">Leila Anderson, LMFT-S, is a Texas Licensed Marriage and Family Therapist Supervisor with an MMFT from Abilene Christian University. Her background includes residential treatment, crisis care, executive clinical leadership, program design, and treatment planning.</p>
          </article>
        </div>
      </section>

      <FaqBlock heading="Questions." items={specialty.faqs} schemaId={`${specialty.path.replaceAll("/", "-")}-faq`} />

      <section className="container-wrap section-gap-lg pb-8">
        <div className="split-band split-band--open">
          {specialty.related.map((link) => (
            <article key={link.href} className="split-panel">
              <h2 className="h2">
                <Link href={link.href as Route} className="focus-ring no-link-style inline-link">{link.label}</Link>
              </h2>
              <p className="body">{link.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
