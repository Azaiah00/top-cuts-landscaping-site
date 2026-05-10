// GET /api/instagram — caches the last 6 IG posts for an hour.
// Currently the InstagramGrid component fetches directly with revalidate.
// This route exists for clients/components that want JSON (or in case we
// wire up a non-React surface later).

import { NextResponse } from "next/server";

export const revalidate = 3600; // 1 hour

export async function GET() {
  if (!process.env.INSTAGRAM_ACCESS_TOKEN) {
    return NextResponse.json({ items: [], note: "no IG token configured" });
  }
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink,media_type&limit=6&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return NextResponse.json(
        { items: [], error: "Instagram API request failed" },
        { status: 502 }
      );
    }
    const data = await res.json();
    return NextResponse.json({ items: data.data ?? [] });
  } catch (err) {
    return NextResponse.json(
      { items: [], error: (err as Error).message },
      { status: 500 }
    );
  }
}
