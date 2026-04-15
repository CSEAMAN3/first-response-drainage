import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.1stresponsedrainage.co.uk";

const STRIP_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "ref",
  "_hsenc",
  "_hsmi",
  "mc_cid",
  "mc_eid",
];

export function proxy(req: NextRequest) {
  // Only run in prod on Vercel
  if (process.env.VERCEL_ENV !== "production") return NextResponse.next();

  const current = new URL(req.url);
  const target = new URL(req.url);

  // 1) Force canonical host + https
  target.hostname = CANONICAL_HOST;
  target.protocol = "https:";

  let changed =
    current.hostname !== target.hostname ||
    current.protocol !== target.protocol;

  // 2) Strip tracking params
  for (const p of STRIP_PARAMS) {
    if (target.searchParams.has(p)) {
      target.searchParams.delete(p);
      changed = true;
    }
  }

  // 3) Remove trailing slash (except homepage)
  if (target.pathname !== "/" && target.pathname.endsWith("/")) {
    target.pathname = target.pathname.slice(0, -1);
    changed = true;
  }

  // 4) Force lowercase pathname
  if (target.pathname !== target.pathname.toLowerCase()) {
    target.pathname = target.pathname.toLowerCase();
    changed = true;
  }

  if (
    changed &&
    (current.hostname !== target.hostname ||
      current.pathname !== target.pathname ||
      current.search !== target.search ||
      current.protocol !== target.protocol)
  ) {
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
