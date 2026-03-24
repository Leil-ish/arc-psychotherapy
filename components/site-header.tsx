import Link from "next/link";
import type { Route } from "next";
import { BrandMark } from "@/components/brand-mark";
import { navItems, siteConfig } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-wrap site-header__inner">
        <BrandMark />
        <nav aria-label="Main navigation" className="site-header__nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as Route}
              className="focus-ring no-link-style site-header__link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href={siteConfig.bookingUrl} className="focus-ring no-link-style button button--secondary site-header__cta">
          Consult
        </Link>
      </div>
    </header>
  );
}
