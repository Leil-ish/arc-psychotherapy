type ArcSymbolProps = {
  className?: string;
  outer?: string;
  sweep?: string;
  opening?: string;
};

export function ArcSymbol({
  className,
  outer = "#005B54",
  sweep = "#012622",
  opening = "#E98A15"
}: ArcSymbolProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 80 64"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="arc-symbol__outer"
        fill={outer}
        d="M5 55C5 27 20 9 41 9C59 9 73 26 77 49L68 49C62 34 52 26 41 26C27 26 17 38 17 55H5Z"
      />
      <path
        className="arc-symbol__sweep"
        fill={sweep}
        d="M24 55C24 40 33 31 45 31C58 31 69 40 76 52L63 55C58 47 52 42 45 42C38 42 35 47 35 55H24Z"
      />
      <path className="arc-symbol__opening" fill={opening} d="M63 55L77 48L80 55H63Z" />
    </svg>
  );
}
