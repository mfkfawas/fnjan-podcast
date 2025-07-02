import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchInput } from "./search-input";

export function HomeNavbar() {
  return (
    <nav className="sticky h-16 flex items-center gap-4 px-2 pr-5 shadow-md">
      {/* Menu and Logo */}
      <div className="flex items-center flex-shrink-0">
        <SidebarTrigger />
      </div>

      {/* Spacer */}
      <div className="flex-1">
        <SearchInput />
      </div>
    </nav>
  );
}
