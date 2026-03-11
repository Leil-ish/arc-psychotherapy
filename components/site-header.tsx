import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-masthead">
      <div className="container-wrap site-masthead-inner">
        <div className="site-masthead-top">
          <div>
            <p className="label">Round Rock + Telehealth Texas</p>
            <Link href="/" className="focus-ring no-link-style site-masthead-brand">
              <Image
                src="/brand/logo-wordmark-transparent-hires.png"
                alt=""
                width={1578}
                height={287}
                className="site-masthead-logo"
                priority
              />
              <span className="sr-only">{siteConfig.brand}</span>
            </Link>
          </div>
          <Link href={siteConfig.bookingUrl} className="focus-ring no-link-style site-masthead-consult">
            Schedule consult
          </Link>
        </div>

        <nav aria-label="Main navigation" className="site-masthead-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring no-link-style site-masthead-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
