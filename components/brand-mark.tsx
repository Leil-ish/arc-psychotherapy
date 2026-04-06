import Link from "next/link";
import type { Route } from "next";

export function BrandMark({
  href = "/",
  variant = "header"
}: {
  href?: Route;
  variant?: "header" | "footer";
}) {
  return (
    <Link href={href} className={`focus-ring no-link-style brand-mark brand-mark--${variant}`}>
      <span className="brand-mark__tile" aria-hidden="true">
        <span className="brand-mark__arch" />
        <span className="brand-mark__threshold" />
      </span>
      <span className="brand-mark__lockup">
        <span className="brand-mark__logotype">Arc</span>
        <span className="brand-mark__descriptor">Psychotherapy</span>
      </span>
    </Link>
  );
}
