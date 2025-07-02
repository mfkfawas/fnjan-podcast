import { PropsWithChildren } from "react";
import { HomeSidebar } from "../_components/home-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="w-full flex">
        <HomeSidebar />

        {/* Navbar + Content */}
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  );
}
