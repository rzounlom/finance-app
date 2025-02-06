import Overview from "@/components/overview/Overview";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Overview />
    </Suspense>
  );
}
