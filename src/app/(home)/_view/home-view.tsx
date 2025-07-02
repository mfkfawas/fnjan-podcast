"use client";

import { PodcastSearchSuccessResponse } from "@/app/api/search/types";
import { CardCarousel } from "@/components/card-carousel";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function HomeView() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [results, setResults] = useState<
    PodcastSearchSuccessResponse["results"]
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;

    setLoading(true);
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
        setLoading(false);
      });
  }, [query]);

  if (!query.trim()) return null;

  if (loading)
    return (
      <div className="h-full grid place-items-center">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
      <h2 className="font-semibold py-6 border-b border-foreground/25">
        Top podcast for {query}
      </h2>
      <CardCarousel
        data={results.map((res) => ({
          authorName: res.artistName,
          url: res.artworkUrl600,
          primaryGenre: res.primaryGenreName,
        }))}
        onSelect={() => {}}
      />
    </div>
  );
}
