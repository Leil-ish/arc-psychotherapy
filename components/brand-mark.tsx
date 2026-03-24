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
        <span className="brand-mark__portal brand-mark__portal--left" />
        <span className="brand-mark__portal brand-mark__portal--right" />
        <span className="brand-mark__portal brand-mark__portal--lintel" />
        <span className="brand-mark__portal brand-mark__portal--threshold" />
      </span>
      <span className="brand-mark__lockup">
        <span className="brand-mark__logotype">ARC</span>
        <span className="brand-mark__descriptor">Psychotherapy</span>
      </span>
    </Link>
  );
}
