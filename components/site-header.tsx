import Link from "next/link";
import { navItems, siteConfig } from "@/lib/content";
import { ButtonLink } from "@/components/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/70 bg-sand/95 backdrop-blur">
      <div className="container-wrap py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="focus-ring text-sm font-semibold tracking-wide text-ink">
            {siteConfig.brand}
          </Link>
          <nav aria-label="Desktop" className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring text-sm text-ink/80 hover:text-ink">
                {item.label}
              </Link>
            ))}
            <ButtonLink href={siteConfig.bookingUrl} external>
              Schedule consult
            </ButtonLink>
          </nav>
          <div className="md:hidden">
            <ButtonLink href={siteConfig.bookingUrl} external>
              Schedule consult
            </ButtonLink>
          </div>
        </div>
        <nav aria-label="Mobile" className="mt-3 flex gap-4 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring whitespace-nowrap text-sm text-ink/85">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
