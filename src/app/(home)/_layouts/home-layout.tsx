import { PropsWithChildren } from "react";
import { HomeSidebar } from "../_components/home-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavbar } from "../_components/home-navbar";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="w-full flex">
        <HomeSidebar />

        {/* Navbar + Content */}
        <div className="relative flex-1 overflow-hidden h-screen">
          <HomeNavbar />
          <main className="h-full overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
