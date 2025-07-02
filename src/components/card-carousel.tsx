"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "./ui/card";
import { PodcastSearchSuccessResponse } from "@/app/api/search/types";
import Image from "next/image";

interface FilterCarouselProps {
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    authorName: PodcastSearchSuccessResponse["results"][number]["artistName"];
    url: PodcastSearchSuccessResponse["results"][number]["artworkUrl600"];
    primaryGenre: PodcastSearchSuccessResponse["results"][number]["primaryGenreName"];
  }[];
}

export const CardCarousel = ({
  isLoading,
  onSelect,
  data,
}: FilterCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  // The current is the one in the viewport and not the selected one(0 based index)
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      {/* Left fade */}
      <div
        className={cn(
          "absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none",
          current === 1 && "hidden"
        )}
      />
      {/* Right fade */}
      <div
        className={cn(
          "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none",
          current === count && "hidden"
        )}
      />

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          {isLoading &&
            Array.from({ length: 14 }).map((_, index) => (
              <CarouselItem key={index} className="pl-3 basis-auto">
                <Skeleton className="rounded-lg px-3 py-1 text-sm w-[160px] h-[160px]">
                  &nbsp;
                </Skeleton>
              </CarouselItem>
            ))}

          {!isLoading && (
            <>
              {/* Data options */}
              {data.map((item) => (
                <CarouselItem
                  key={item.url}
                  className="pl-3 basis-auto"
                  onClick={() => onSelect(item.authorName)}
                >
                  <Card className="bg-background border-background">
                    <CardContent className="p-0">
                      <Image
                        src={item.url as string}
                        alt={item.authorName}
                        width={160}
                        height={160}
                        className="rounded-md"
                      />
                    </CardContent>

                    <CardFooter className="p-1 flex flex-col">
                      <span className="w-[160px] text-center text-foreground text-sm font-semibold">
                        {item.authorName}
                      </span>
                      <span className="text-xs text-sidebar-accent-foreground font-semibold">
                        {item.primaryGenre}
                      </span>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </>
          )}
        </CarouselContent>
        <CarouselPrevious className="left-0 top-[5.5rem] z-20" />
        <CarouselNext className="right-0 top-[5.5rem] z-20" />
      </Carousel>
    </div>
  );
};
