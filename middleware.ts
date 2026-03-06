import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "arc-psychotherapy.com";
const HOST_ALIASES = new Set([
  "www.arc-psychotherapy.com",
  "arcpsychotherapy.com",
  "www.arcpsychotherapy.com"
]);

function isLocalHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

function getProtocol(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-proto");
  if (forwarded) {
    return forwarded.split(",")[0].trim().toLowerCase();
  }
  return request.nextUrl.protocol.replace(":", "").toLowerCase();
}

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  if (isLocalHost(hostname) || hostname.endsWith(".pages.dev")) {
    return NextResponse.next();
  }

  const isCanonicalHost = hostname === CANONICAL_HOST;
  const needsHostRedirect = HOST_ALIASES.has(hostname);
  const needsProtocolRedirect = isCanonicalHost && getProtocol(request) !== "https";

  if (!needsHostRedirect && !needsProtocolRedirect) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https";
  destination.host = CANONICAL_HOST;

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
