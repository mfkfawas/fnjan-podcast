"use client";

import { forwardRef } from "react";
import { Input } from "@/components/ui/input";

type SearchInputProps = React.ComponentPropsWithoutRef<"input"> & {
  query: string;
  setQuery: (value: string) => void;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput({ query, setQuery, ...props }, ref) {
    return (
      <Input
        ref={ref}
        type="search"
        placeholder="Search through over 70 million podcasts and episodes..."
        className="focus:bg-foreground/5 border-foreground/25 focus:border-[#7B7BF0] text-center placeholder:text-center focus:placeholder-transparent"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        {...props}
      />
    );
  }
);
