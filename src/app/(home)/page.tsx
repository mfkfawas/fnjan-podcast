import { Suspense } from "react";
import { HomeView } from "./_view/home-view";
import { Spinner } from "@/components/spinner";

const Page = async () => {
  return (
    <Suspense fallback={<Spinner />}>
      <HomeView />
    </Suspense>
  );
};

export default Page;
