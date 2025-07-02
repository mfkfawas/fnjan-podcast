"use client";

import { Input } from "@/components/ui/input";

export function SearchInput() {
  return (
    <Input
      type="search"
      placeholder="Search through over 70 million podcasts and episodes..."
      className="focus:bg-foreground/5 border-foreground/25 focus:border-[#7B7BF0] text-center placeholder:text-center focus:placeholder-transparent"
    />
  );
}
