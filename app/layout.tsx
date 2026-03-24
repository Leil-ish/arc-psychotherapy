import type { Metadata } from "next";
import "./globals.css";
import { SchemaScript } from "@/components/schema-script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { personSchema, professionalServiceSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brand} | Private-Pay Psychotherapy in Round Rock, TX`,
    template: `%s | ${siteConfig.brand}`
  },
  description:
    "Private-pay therapy with clear structure in Downtown Round Rock, Texas for adults navigating perfectionism, rigidity/overcontrol, and religious harm. Serving North Austin and surrounding communities, with telehealth across Texas.",
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="focus-ring sr-only absolute left-3 top-3 rounded-md bg-ink px-3 py-2 text-sm font-medium text-sand focus:not-sr-only">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <SchemaScript id="website-schema" data={websiteSchema()} />
        <SchemaScript id="person-schema" data={personSchema()} />
        <SchemaScript id="professional-service-schema" data={professionalServiceSchema()} />
        {/* Optional analytics: add your provider script here only after consent and policy review. */}
      </body>
    </html>
  );
}
