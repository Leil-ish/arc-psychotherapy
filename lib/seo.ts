import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

const socialImagePath = "/opengraph-image";
const socialImageUrl = `${siteConfig.siteUrl}/opengraph-image`;
const personId = `${siteConfig.siteUrl}#leila-anderson`;
const practiceId = `${siteConfig.siteUrl}#arc-psychotherapy`;
const websiteId = `${siteConfig.siteUrl}#website`;

export function pageMetadata({
  title,
  description,
  path,
  type = "website"
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const canonical = `${siteConfig.siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type,
      siteName: siteConfig.brand,
      locale: "en_US",
      images: [
        {
          url: socialImagePath,
          width: 1200,
          height: 630,
          alt: "Arc Psychotherapy wordmark on a dark field"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"]
    }
  };
}

export function breadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`
    }))
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.siteUrl,
    name: siteConfig.brand,
    publisher: {
      "@id": practiceId
    },
    inLanguage: "en-US"
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: siteConfig.credentialsLine,
    jobTitle: "Licensed Marriage and Family Therapist Supervisor",
    worksFor: {
      "@id": practiceId
    },
    url: `${siteConfig.siteUrl}/about`,
    image: socialImageUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      "Psychotherapy",
      "Perfectionism",
      "Overcontrol",
      "Religious trauma",
      "Religious harm",
      "Spiritual trauma",
      "Meaning reconstruction"
    ]
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": practiceId,
    name: siteConfig.brand,
    url: siteConfig.siteUrl,
    image: socialImageUrl,
    description:
      "Private-pay psychotherapy in Downtown Round Rock, Texas for adults navigating perfectionism, overcontrol, religious trauma, and religious harm, with telehealth across Texas.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine1,
      addressLocality: "Round Rock",
      addressRegion: "TX",
      postalCode: "78664",
      addressCountry: "US"
    },
    founder: {
      "@id": personId
    },
    employee: {
      "@id": personId
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({ "@type": "Place", name: area })),
    availableLanguage: ["en-US"],
    priceRange: "$200",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Arc services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Individual psychotherapy",
            description:
              "Private-pay psychotherapy for adults dealing with perfectionism, overcontrol, religious trauma, and religious harm."
          },
          price: "200",
          priceCurrency: "USD"
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LMFT supervision",
            description:
              "Clinical supervision for LMFT Associates who want stronger clinical thinking, ethics, and authority."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consultation and training",
            description:
              "Consultation for teams and organizations focused on program design, staff development, and treatment culture."
          }
        }
      ]
    },
    sameAs: siteConfig.sameAs
  };
}

export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage"
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${siteConfig.siteUrl}${path}`,
    isPartOf: {
      "@id": websiteId
    },
    about: {
      "@id": practiceId
    }
  };
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: `${siteConfig.siteUrl}${path}`,
    image: socialImageUrl,
    author: {
      "@id": personId
    },
    publisher: {
      "@id": practiceId
    }
  };
}
