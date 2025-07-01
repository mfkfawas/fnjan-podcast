import { PropsWithChildren } from "react";
import { HomeLayout } from "./_layouts/home-layout";

export default function Layout({ children }: PropsWithChildren) {
  return <HomeLayout>{children}</HomeLayout>;
}
