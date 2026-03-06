import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export function pageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
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
      type: "website",
      siteName: siteConfig.brand,
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: siteConfig.brand,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/hero-architecture.svg`,
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
    areaServed: siteConfig.serviceAreas.map((area) => ({ "@type": "Place", name: area })),
    sameAs: [],
    priceRange: "$$$"
  };
}
