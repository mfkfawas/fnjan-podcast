import { PropsWithChildren, Suspense } from "react";
import { HomeSidebar } from "../_components/home-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavbar } from "../_components/home-navbar";
import { Skeleton } from "@/components/ui/skeleton";

export function HomeLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="w-full flex">
        <HomeSidebar />

        {/* Navbar + Content */}
        <div className="relative flex-1 overflow-hidden h-screen">
          <Suspense fallback={<Skeleton className="h-16 w-full" />}>
            <HomeNavbar />
          </Suspense>
          <main className="h-full overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
