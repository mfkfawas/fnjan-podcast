import { NextResponse } from "next/server";
import { db } from "@/db";
import { NewPodcastInput, podcasts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { SearchItunesAPIResponse } from "./types";

export async function GET(request: Request) {
  // 1. Get search term from URL
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("q");

  if (!term) {
    return NextResponse.json(
      { error: "Please provide a search term" },
      { status: 400 }
    );
  }

  try {
    // 2. Check database cache first
    const cachedResults = await db
      .select()
      .from(podcasts)
      .where(eq(podcasts.searchTerm, term));

    if (cachedResults.length > 0) {
      return NextResponse.json({ results: cachedResults, source: "cache" });
    }

    // 3. If not in cache, call iTunes API
    const response = await fetch(
      `https://itunes.apple.com/search?media=podcast&term=${term}`
    );
    const data = (await response.json()) as SearchItunesAPIResponse;

    // 4. Filter only podcasts
    const podcastResults = data.results.filter(
      (item) => item.kind === "podcast"
    );

    if (podcastResults.length === 0) {
      return NextResponse.json({ error: "No podcasts found" }, { status: 404 });
    }

    // 5. Prepare data for database
    const podcastsToSave: NewPodcastInput[] = podcastResults.map((podcast) => ({
      trackId: podcast.trackId,
      collectionName: podcast.collectionName,
      artistName: podcast.artistName,
      feedUrl: podcast.feedUrl || null,
      artworkUrl600: podcast.artworkUrl600 || null,
      searchTerm: term,
      collectionViewUrl: podcast.collectionViewUrl || null,
      primaryGenreName: podcast.primaryGenreName || null,
      genres: podcast.genres || [],
      country: podcast.country || null,
      releaseDate: podcast.releaseDate || null,
    }));

    // 6. Save to database
    await db.insert(podcasts).values(podcastsToSave);

    // 7. Return results
    return NextResponse.json({ results: podcastsToSave, source: "api" });
  } catch (error) {
    console.error("Search error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
