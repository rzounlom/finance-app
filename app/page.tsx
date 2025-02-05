import Overview from "@/components/overview/Overview";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Overview />
      </Suspense>
    </div>
  );
}
