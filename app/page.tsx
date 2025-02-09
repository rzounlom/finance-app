import Overview from "@/components/overview/Overview";
import OverviewSkeleton from "@/components/overview/OverviewSkeleton";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Suspense fallback={<OverviewSkeleton />}>
      <Overview />
    </Suspense>
  );
}
