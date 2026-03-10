import Link from "next/link";
import { siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-stone/85 bg-surface/58 py-14">
      <div className="container-wrap grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="h3">{siteConfig.brand}</p>
          <p className="mt-2 body text-sm">{siteConfig.legalEntityNote}</p>
          <p className="mt-4 text-sm font-semibold tracking-[0.04em] text-ink/85">{siteConfig.credentialsLine}</p>
          <p className="body text-sm text-ink/80">{siteConfig.credentials[0]}</p>
          <p className="mt-4 body text-sm">{siteConfig.locationSummaryLine}</p>
        </div>
        <div className="md:col-span-4">
          <p className="label">Office</p>
          <p className="mt-2 body">{siteConfig.addressLine1}</p>
          <p className="body">{siteConfig.cityStateZip}</p>
          <Link href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="focus-ring mt-3 inline-block text-sm font-semibold">
            Open map
          </Link>
        </div>
        <div className="md:col-span-4">
          <p className="label">Contact</p>
          <p className="mt-2 body">Call {siteConfig.phone}</p>
          <p className="body">Email {siteConfig.email}</p>
          <div className="mt-4 space-y-1 text-sm text-muted">
            <Link className="focus-ring no-link-style block text-sage/90 underline-offset-4 hover:text-sage-dark hover:underline" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="focus-ring no-link-style block text-sage/90 underline-offset-4 hover:text-sage-dark hover:underline" href="/terms">
              Terms
            </Link>
            <Link className="focus-ring no-link-style block text-sage/90 underline-offset-4 hover:text-sage-dark hover:underline" href="/good-faith-estimate">
              Good Faith Estimate
            </Link>
            <Link className="focus-ring no-link-style block text-sage/90 underline-offset-4 hover:text-sage-dark hover:underline" href="/consumer-protection">
              Consumer Protection
            </Link>
            <Link className="focus-ring no-link-style block text-sage/90 underline-offset-4 hover:text-sage-dark hover:underline" href="/accessibility">
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
