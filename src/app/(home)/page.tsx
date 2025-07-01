import { HomeView } from "./_view/home-view";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { q } = await searchParams;

  return <HomeView searchTerm={q} />;
};

export default Page;
