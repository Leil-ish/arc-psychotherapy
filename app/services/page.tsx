import type { Route } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { servicesPage } from "@/src/content/marketing";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Arc offers private-pay therapy, clinical supervision, and consultation from Round Rock, Texas.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="services-webpage-schema"
        data={webPageSchema({
          name: "Work",
          description:
            "Arc offers private-pay therapy, LMFT supervision, and consultation from Round Rock, Texas.",
          path: "/services",
          type: "CollectionPage"
        })}
      />
      <SchemaScript
        id="services-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/services" }
        ])}
      />
      <div className="hero-copy">
        <p className="label">{servicesPage.intro.eyebrow}</p>
        <h1 className="h1 mt-4">{servicesPage.intro.title}</h1>
        <p className="hero-lede">{servicesPage.intro.lede}</p>
        <div className="hero-support">
          {servicesPage.intro.body?.map((item) => (
            <p key={item} className="body">
              {item}
            </p>
          ))}
        </div>
        <div className="hero-actions">
          {servicesPage.intro.actions?.map((action) => (
            <ButtonLink key={action.href} href={action.href as Route} variant={action.variant}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>

      <section className="section-gap">
        <div className="index-grid">
          {servicesPage.routes.map((item) => (
            <Link key={item.href} href={item.href as Route} className="focus-ring no-link-style index-card">
              <p className="label">{item.eyebrow}</p>
              <h2 className="index-card__title">{item.title}</h2>
              <p className="index-card__body body">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
