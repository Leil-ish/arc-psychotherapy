import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { professionalServiceSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brand} | Private-Pay Psychotherapy in Round Rock, TX`,
    template: `%s | ${siteConfig.brand}`
  },
  description:
    "Structured private-pay psychotherapy in Downtown Round Rock, Texas for adults navigating perfectionism, rigidity/overcontrol, and religious harm. Serving North Austin and surrounding communities, with telehealth across Texas.",
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
      <body className="font-sans">
        <a href="#main-content" className="focus-ring sr-only absolute left-3 top-3 rounded bg-white px-3 py-2 text-sm font-semibold focus:not-sr-only">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Script
          id="professional-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema()) }}
        />
        {/* Optional analytics: add your provider script here only after consent and policy review. */}
      </body>
    </html>
  );
}
