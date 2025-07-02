"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { HomeSidebarHeader } from "./sidebar-header";
import { Clock10, Globe, Grid2X2, Rows3Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export const HomeSidebar = () => {
  return (
    <Sidebar className="border-foreground/25" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainGroup />
        <PersonalizedGroup />
      </SidebarContent>
    </Sidebar>
  );
};

const MainGroup = () => {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <HomeSidebarHeader />

          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={pathname === "/"}
              tooltip="Home"
              asChild
            >
              <Link href="">
                <Globe className="size-5" />
                <span className="text-sm">Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const PersonalizedGroup = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-bold">YOUR STUFF</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={false}
              tooltip="My Queue"
              className="text-muted-foreground"
              asChild
            >
              <Link href="">
                <Rows3Icon className="size-5" />
                <span className="text-sm">My Queue</span>
                <Badge
                  variant="secondary"
                  className="bg-blue-500 hover:bg-blue-500"
                >
                  PREMIUM
                </Badge>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="My Podcasts"
              className="text-muted-foreground"
              asChild
            >
              <Link href="">
                <Grid2X2 className="size-5" />
                <span className="text-sm">My Podcasts</span>
                <Badge
                  variant="secondary"
                  className="bg-blue-500 hover:bg-blue-500"
                >
                  PREMIUM
                </Badge>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Recents"
              className="text-muted-foreground"
              asChild
            >
              <Link href="">
                <Clock10 className="size-5" />
                <span className="text-sm">Recents</span>
                <Badge
                  variant="secondary"
                  className="bg-blue-500 hover:bg-blue-500"
                >
                  PREMIUM
                </Badge>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
