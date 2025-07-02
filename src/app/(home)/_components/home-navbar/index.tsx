"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useDebounce } from "@/hooks/use-debounce";
import { SearchInput } from "./search-input";

export function HomeNavbar() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQ);
  const debouncedQuery = useDebounce(query, 500);

  // ✅ Sync URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!debouncedQuery.trim()) {
      params.delete("q");
    } else {
      params.set("q", debouncedQuery);
    }
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [debouncedQuery, router]);

  // useEffect(() => {
  //   if (!debouncedQuery.trim()) return;

  //   // ✅ Call your API
  //   fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`).then((res) =>
  //     res.json().then((data) => {
  //       console.log("data", data);
  //       return data;
  //     })
  //   );
  // }, [debouncedQuery]);

  const focusInput = () => {
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <nav className="sticky h-16 flex items-center gap-4 px-2 pr-5 shadow-md">
      {/* Menu and Logo */}
      <div className="flex items-center flex-shrink-0">
        <SidebarTrigger />
      </div>

      {/* Spacer */}
      <div className="flex-1">
        <SearchInput ref={searchInputRef} query={query} setQuery={setQuery} />
      </div>
    </nav>
  );
}
