import Dashboard from "@/components/dashboard/Dashboard";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
