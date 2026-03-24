import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wrap site-footer__grid">
        <div className="site-footer__block">
          <BrandMark variant="footer" />
          <p className="site-footer__note">{siteConfig.legalEntityNote}</p>
          <p className="site-footer__meta">{siteConfig.credentialsLine}</p>
          <p className="site-footer__meta site-footer__meta--muted">{siteConfig.credentials[0]}</p>
          <p className="site-footer__meta site-footer__meta--muted">{siteConfig.locationSummaryLine}</p>
          <div className="site-footer__legal">
            <Link className="focus-ring no-link-style site-footer__link" href="/work-with-me">
              Approach
            </Link>
            <Link className="focus-ring no-link-style site-footer__link" href="/supervision">
              Supervision
            </Link>
            <Link className="focus-ring no-link-style site-footer__link" href="/consultation">
              Consultation
            </Link>
            <Link className="focus-ring no-link-style site-footer__link" href="/ideas">
              Writing
            </Link>
          </div>
        </div>
        <div className="site-footer__block">
          <p className="label">Office</p>
          <p className="site-footer__line">{siteConfig.addressLine1}</p>
          <p className="site-footer__line">{siteConfig.cityStateZip}</p>
          <Link href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="focus-ring no-link-style site-footer__link">
            Open map
          </Link>
        </div>
        <div className="site-footer__block">
          <p className="label">Contact</p>
          <p className="site-footer__line">Call {siteConfig.phone}</p>
          <p className="site-footer__line">Email {siteConfig.email}</p>
          <div className="site-footer__legal">
            <Link className="focus-ring no-link-style site-footer__link" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="focus-ring no-link-style site-footer__link" href="/terms">
              Terms
            </Link>
            <Link className="focus-ring no-link-style site-footer__link" href="/good-faith-estimate">
              Good Faith Estimate
            </Link>
            <Link className="focus-ring no-link-style site-footer__link" href="/consumer-protection">
              Consumer Protection
            </Link>
            <Link className="focus-ring no-link-style site-footer__link" href="/accessibility">
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
