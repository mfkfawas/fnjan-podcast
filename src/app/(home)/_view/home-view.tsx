"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { CardCarousel } from "@/components/card-carousel";
import { Spinner } from "@/components/spinner";
import { PodcastSearchSuccessResponse } from "@/app/api/search/types";

export function HomeView() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const { loading, results } = useFetchData(query);

  if (!query.trim())
    return (
      <div className="h-full grid place-items-center">
        Please search for your favourite podcasts...
      </div>
    );

  if (loading) return <Spinner />;

  if (!results || !results.length)
    return (
      <div className="h-full grid place-items-center">
        No data for your search...
      </div>
    );

  return (
    <div className="max-w-[2400px] mx-auto mb-28 px-4 pt-2.5 flex flex-col gap-y-6">
      <h2 className="font-semibold py-6 border-b border-foreground/25">
        Top podcast for {query}
      </h2>
      <CardCarousel
        data={results.slice(0, 14).map((res) => ({
          authorName: res.artistName,
          url: res.artworkUrl600,
          primaryGenre: res.primaryGenreName,
        }))}
        onSelect={() => {}}
      />

      <h2 className="font-semibold py-6 border-b border-foreground/25">
        All podcast for {query}
      </h2>

      <div className="flex flex-wrap">
        {results.slice(14).map((res) => (
          <div
            key={res.trackId}
            className="w-full sm:w-1/2 md:w-1/3 hover:bg-black border-b border-foreground/25 py-2 flex gap-2 items-center flex-shrink-0"
          >
            <Image
              src={res.artworkUrl600 as string}
              alt={res.artistName}
              width={50}
              height={50}
            />

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold">{res.artistName}</span>
              <span className="text-xs text-sidebar-accent-foreground font-semibold">
                {res.primaryGenreName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const useFetchData = (query: string) => {
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

  return { loading, results };
};
