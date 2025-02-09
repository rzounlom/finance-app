import Overview from "@/components/pages/overview/Overview";
import OverviewSkeleton from "@/components/pages/overview/OverviewSkeleton";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Suspense fallback={<OverviewSkeleton />}>
      <Overview />
    </Suspense>
  );
}
