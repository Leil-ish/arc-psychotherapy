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
      ? "no-link-style border border-sage/95 bg-sage text-white hover:border-sage-dark hover:bg-sage-dark"
      : "no-link-style border border-sage/80 bg-transparent text-sage hover:border-sage-dark hover:bg-sage/10 hover:text-sage-dark";
  const className = `focus-ring inline-flex items-center justify-center rounded-[2px] px-5 py-2.5 text-sm font-medium tracking-[0.01em] transition-colors duration-200 ${styles}`;

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
