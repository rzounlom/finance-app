import Pots from "@/components/pages/pots/Pots";
import { Suspense } from "react";

const PotsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Pots />
    </Suspense>
  );
};

export default PotsPage;
