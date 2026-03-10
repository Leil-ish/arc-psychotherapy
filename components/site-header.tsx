import Link from "next/link";
import { navItems, siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/90 bg-sand/92 backdrop-blur">
      <div className="container-wrap py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="focus-ring no-link-style text-sm font-semibold tracking-wide text-sage underline-offset-4 hover:text-sage-dark hover:underline">
            {siteConfig.brand}
          </Link>
          <nav aria-label="Desktop" className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring no-link-style text-sm text-sage/90 underline-offset-4 hover:text-sage-dark hover:underline">
                {item.label}
              </Link>
            ))}
            <ButtonLink href={siteConfig.bookingUrl}>
              Schedule consult
            </ButtonLink>
          </nav>
          <div className="md:hidden">
            <ButtonLink href={siteConfig.bookingUrl}>
              Schedule consult
            </ButtonLink>
          </div>
        </div>
        <nav aria-label="Mobile" className="mt-3 flex gap-4 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring no-link-style whitespace-nowrap text-sm text-sage/90 underline-offset-4 hover:text-sage-dark hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
