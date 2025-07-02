import {
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export function HomeSidebarHeader() {
  const { state } = useSidebar();

  if (state === "collapsed") {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Logo" asChild>
          <Link href="">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarHeader className="mb-8">
      <Link href="">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </Link>
    </SidebarHeader>
  );
}
