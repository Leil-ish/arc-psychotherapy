import Link from "next/link";
import type { Route } from "next";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-sage text-white hover:bg-sage/90"
      : "border border-sage text-sage hover:bg-sage/5";
  const className = `focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href as Route} className={className}>
      {children}
    </Link>
  );
}
