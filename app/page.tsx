import Overview from "@/components/overview/Overview";
import OverviewSkeleton from "@/components/overview/OverviewSkeleton";
import { Suspense } from "react";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function HomePage() {
  await delay(4000);
  return (
    <Suspense fallback={<OverviewSkeleton />}>
      <Overview />
    </Suspense>
  );
}
