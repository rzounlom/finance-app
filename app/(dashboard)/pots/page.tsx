import Pots from "@/components/pages/pots/Pots";
import PotsSkeleton from "@/components/pages/pots/PotsSkeleton";
import { Suspense } from "react";

const PotsPage = () => {
  return (
    <Suspense fallback={<PotsSkeleton />}>
      <Pots />
    </Suspense>
  );
};

export default PotsPage;
