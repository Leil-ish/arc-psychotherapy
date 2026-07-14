"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { navItems, siteConfig } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();

  const headerAction = pathname.startsWith("/consultation")
    ? { label: "Discuss a project", href: "/contact#consult-request" }
    : pathname.startsWith("/supervision")
      ? { label: "Ask about supervision", href: "/contact#consult-request" }
      : pathname.startsWith("/therapy") || pathname.startsWith("/who-i-work-with")
        ? { label: "Ask about therapy", href: "/contact#consult-request" }
        : pathname.startsWith("/contact")
          ? null
          : { label: "Get in touch", href: siteConfig.bookingUrl };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="site-header">
      <div className="container-wrap site-header__inner">
        <BrandMark />
        <nav aria-label="Main navigation" className="site-header__nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href as Route}
              className={`focus-ring no-link-style site-header__link${
                isActive(item.href) ? " site-header__link--active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {headerAction ? (
          <Link href={headerAction.href as Route} className="focus-ring no-link-style button button--secondary site-header__cta">
            {headerAction.label}
          </Link>
        ) : null}
      </div>
    </header>
  );
}
