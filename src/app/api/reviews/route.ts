import { NextResponse } from "next/server";
import { getGoogleReviews } from "@/lib/googleReviews";

export async function GET() {
  try {
    const data = await getGoogleReviews();
    return NextResponse.json(data, {
      headers: {
        // Optional extra caching hints (CDN/browser)
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
