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
import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
              tooltip="Logo"
              asChild
            >
              <Link href="/">
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
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-bold">YOUR STUFF</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={false} tooltip="Logo" asChild>
              <Link href="/content">
                <Globe className="size-5" />
                <span className="text-sm">Content</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Exit Studio" asChild>
              <Link href="/exit">
                <Globe className="size-5" />
                <span className="text-sm">Exit Studio</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
